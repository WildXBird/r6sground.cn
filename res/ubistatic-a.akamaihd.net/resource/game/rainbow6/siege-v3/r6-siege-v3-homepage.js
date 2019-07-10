var tridionSettings = tridionSettings || {};
tridionSettings.values = tridionSettings.values || {};
tridionSettings.values.siteSubSection = '';



/*
 *******************************************************************
 *                     Ubisoft RAINBOW 6 SIEGE                     *
 *             _____ _____ _____ _____ _ _____ _____               *
 *            |   __|   __|  _  |_   _|_|     |   __|              *
 *            |__   |   __|   __| | | | | | | |   __|              *
 *            |_____|_____|__|    |_| |_|_|_|_|_____|              *
 *              Septime Création 2o15 - septime.net                *
 *                                                                 *
 *******************************************************************
*/
// Namespace
var SC = SC || {};




SC.init_r6_homepage = function()
{
    $.when( SC.mainLoad() ).then(function()
    {
        scinfo('init_r6_homepage()');
        SC.home.init();
    });
};


/**
*   R6S / SC.home
*   SC/MR 2015-03-10
*
*   Updates/Releases:
*
*/
SC.home = (function()
{
    var _loaded = false;
    var _load_start,
        _load_end;

    var _to_load = [];

    var _tracked = false;
    var _track_key = 'home';

    var _highlight_news = '';

    // Main init
    var _init = function()
    {
        _tracked = false;
        var dt = new Date();
        _load_start = dt.getTime();

        SC.main.setMainNav( '.r6_menu_home' );
        init.loading();
    };


    // Sub init
    var init =
    {
        // SC.home.init.loading
        loading: function()
        {
            _to_load = [ 'page', 'events' ];
            _loaded = false;

            init.page();
            init.events();

        },
        // SC.home.init.loaded
        loaded: function( what )
        {
            scinfo('SC.home.loaded => ', what);
            // Remove item from stack
            if (what != undefined)
            {
                _to_load.splice( _to_load.indexOf(what), 1 );
                //sclog('to load => ',_to_load);
                if (_to_load.length > 0) { return false; }
            }
            _loaded = true;
            UI.show();

            init.tracking();
        },
        // SC.home.init.tracking
        tracking: function()
        {
            if (!_tracked)
            {
                _tracked = true;
                // Call tracking
                var dt = new Date();
                _load_end = dt.getTime();
                SC.track.page({ 'loadtime': (_load_end - _load_start), 'key': _track_key });
            }

            try { window.addHomePageTicker(); } catch(e){}

        },
        // SC.home.init.page
        page: function()
        {
            /**************************************************/
            /**************************************************/
            /* SHOWDOWN TAKEOVER - TO BE REMOVED AFTER EVENT  */
            /**************************************************/
            /**************************************************/

            /* Texts Localisation */
            var _CONGRATS = {
                'en-gb': "Congrats! Now show your gunslinger skill in-game.",
                'fr-fr': "Bravo ! Et maintenant, allez prouver vos talents de pistolero dans le jeu.",
                'it-it': "Congratulazioni! Ora mostra le tue abilità da pistolero nel gioco.",
                'de-de': "Glückwunsch! Dann beweise jetzt dein Talent als Revolverheld im Spiel.",
                'es-es': "¡Enhorabuena! Ahora, demuestra tu habilidad de pistolero en el juego.",
                'pt-br': "",
                'nl-nl': "Gefeliciteerd! Laat nu je gunslinger-skills in de game zien.",
                'pl-pl': "Gratulacje! Teraz pokaż w grze, jak dobrze posługujesz się rewolwerem.",
                'ru-ru': "Поздравляем! Примените полученные навыки в игре.",
                'tr-tr': "Tebrikler! Silahşör yeteneklerini oyun içinde göster.",
                'ar-ar': "تهانينا! أظهر الآن مهارتك في حمل السلاح داحل اللعبة.",
                'ja-jp': "おめでとう！今度はゲーム内でキミのガンスリンガースキルを見せつけよう",
                'ko-kr': "축하드립니다! 이제 게임에서 총잡이 실력을 보여주십시오.",
                'zh-tw': "恭喜！現在就在遊戲中展現你的神槍手技巧吧。"
            };
            var _RETRY = {
                'en-gb': "Try Again !",
                'fr-fr': "Réessayer",
                'it-it': "Riprova",
                'de-de': "Erneut versuchen",
                'es-es': "Prueba otra vez",
                'pt-br': "",
                'nl-nl': "Nogmaals proberen",
                'pl-pl': "Spróbuj ponownie",
                'ru-ru': "Рискните еще раз",
                'tr-tr': "Tekrar dene",
                'ar-ar': "المحاولة مجددًا",
                'ja-jp': "もう1回",
                'ko-kr': "다시 시도",
                'zh-tw': "再試一次"
            };

            var _SHOOT = {
                'en-gb': "SHOOT",
                'fr-fr': "TIREZ",
                'it-it': "SPARA",
                'de-de': "SHOOT",
                'es-es': "DISPARAR",
                'pt-br': "ATIRE",
                'nl-nl': "SCHIETEN",
                'pl-pl': "Strzelać",
                'ru-ru': "стрелять",
                'tr-tr': "Ateş",
                'ar-ar': "أطلق النيران",
                'ja-jp': "撃ちます",
                'ko-kr': "쏴",
                'zh-tw': "射擊"
            };


            /* IE Modifier */
            if (is_IE || is_EDGE) {

                $('.r6-navigation-list a, .r6-navigation-list a:hover').css ( {
                    'background' : '#603d31',
                    '-webkit-text-fill-color' : 'unset',
                    '-webkit-background-clip' : 'unset',
                    'color' : '#bbb49d'
                });

            }


            /* Adding sound effects */
            var audio = {};

            var _barrel_src = 'https://static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-barrel.mp3';
            if (is_DEV) {
                _barrel_src = 'http://linux.ubi.com/Rainbow-6/www-v3/static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-barrel.mp3';
            }
            if (is_VAL) {
                _barrel_src = 'https://ubisoft.septime-creation.com/EMEA/Rainbow-6-v3/www-v3/static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-barrel.mp3';
            }

            var _shot_src = 'https://static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-shot.mp3';
            if (is_DEV) {
                _shot_src = 'http://linux.ubi.com/Rainbow-6/www-v3/static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-shot.mp3';
            }
            if (is_VAL) {
                _shot_src = 'https://ubisoft.septime-creation.com/EMEA/Rainbow-6-v3/www-v3/static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-shot.mp3';
            }

            var _shot2_src = 'https://static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-shot2.mp3';
            if (is_DEV) {
                _shot2_src = 'http://linux.ubi.com/Rainbow-6/www-v3/static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-shot2.mp3';
            }
            if (is_VAL) {
                _shot2_src = 'https://ubisoft.septime-creation.com/EMEA/Rainbow-6-v3/www-v3/static2.cdn.ubi.com/gamesites/rainbow6/events/showdown/r6-showdown-pistol-shot2.mp3';
            }


            audio["barrel"] = new Audio();
            audio["barrel"].src = _barrel_src;
            audio["barrel"].preload = 'auto';
            audio["barrel"].load();

            audio["shotfire"] = new Audio();
            audio["shotfire"].src = _shot_src;
            audio["shotfire"].preload = 'auto';
            audio["shotfire"].volume = 0.5;
            audio["shotfire"].load();

            audio["shotfire2"] = new Audio();
            audio["shotfire2"].src = _shot2_src;
            audio["shotfire"].preload = 'auto';
            audio["shotfire2"].volume = 0.5;
            audio["shotfire2"].load();




            // Defining elements position for each zone - NCSA has a calendar at bottom
            var _shooting_stand_pos = 0;
            var _shooting_stand_close_pos = 400;
            var _pistol_barrel_pos = 20;

            if ($( window ).width() < 768) {
                _shooting_stand_close_pos = 270;
            }

            if (is_NCSA) {

                _shooting_stand_pos += 80;
                _shooting_stand_close_pos += 80;
                _pistol_barrel_pos += 80;

            }


            /* Tumbleweed rolling on each slide */
            function rollingTumbleweed( _el ) {

                var _screensize = Math.floor( $( window ).width() + 50 );

                _el.stop().animate( { 'left' : _screensize }, 4000 );

                setTimeout( function() { _el.css( { 'left' : '-150px' } ); }, 5000);

            }

            var _rand_news = 6500;
            $('.row_home_news').append('<div class="tumbleweed"></div>');
            $( '.row_home_news .tumbleweed' ).css( { 'left' : '-150px' } );
            var _tumbleweed_news_Interval = setInterval( function () {

                rollingTumbleweed($( '.row_home_news .tumbleweed' ));

                _rand_news = Math.round(Math.random()*(10000 - 6000))+6000;

            }, _rand_news);

            var _rand_ops = 7500;
            $('.row_home_operators').append('<div class="tumbleweed"></div>');
            $( '.row_home_operators .tumbleweed' ).css( { 'left' : '-150px' } );
            var _tumbleweed_ops_Interval = setInterval( function () {

                rollingTumbleweed($( '.row_home_operators .tumbleweed' ));

                _rand_ops = Math.round(Math.random()*(10000 - 6000))+6000;

            }, _rand_ops);



            /* Game Texts */
            var _locale = tridionSettings.values.locale.toLowerCase();
            if (_locale === 'fr-ca') { _locale = 'fr-fr'; }
            else if (_locale === 'es-mx') { _locale = 'es-es'; }
            else if (_locale === 'en-us' || _locale === 'en-ca' || _locale === 'en-au' || _locale === 'en-nordic') { _locale = 'en-gb'; }

            var _congrats_text, _tryagain_text, _shoot_text;

            if (_CONGRATS[ _locale ] == '' || _CONGRATS[ _locale ] === undefined) {
                _congrats_text = '<span>' + _CONGRATS[ 'en-gb' ] + '</span>';
            } else {
                _congrats_text = '<span>' + _CONGRATS[ _locale ] + '</span>';
            }

            if (_RETRY[ _locale ] == '' || _RETRY[ _locale ] === undefined) {
                _tryagain_text = '<a href="" class="retry">' + _RETRY[ 'en-gb' ] + '</a>';
            } else {
                _tryagain_text = '<a href="" class="retry">' + _RETRY[ _locale ] + '</a>';
            }

            if (_SHOOT[ _locale ] == '' || _SHOOT[ _locale ] === undefined) {
                _shoot_text = _SHOOT[ 'en-gb' ];
            } else {
                _shoot_text = _SHOOT[ _locale ];
            }





            /* Adding Shots on page */
            function removeBulletHole() {

                $('#main .bullet-hole:not(:animated):first').fadeOut(function() {
                    $(this).remove();
                });

            }

            $('#main').off('click').on('click', function(e) {

                $('<div />').addClass('bullet-hole').css({
                    top: e.pageY - 8,
                    left: e.pageX - 8
                }).appendTo('#main');
                setTimeout(removeBulletHole, 5000);


            });


            /* Shot sound on game */
            var _audio_shot = 'shotfire';
            $('body').off('click','#shooting_stand:not(.over)').on('click','#shooting_stand:not(.over)', function(e) {

                audio[ _audio_shot ].currentTime = 0;
                audio[ _audio_shot ].play();

                if (_audio_shot == 'shotfire') {
                    _audio_shot = 'shotfire2';
                } else {
                    _audio_shot = 'shotfire';
                }

            });






            /*******************************/
            /* Dealing with Shooting Stand */
            /*******************************/

            $('#main').prepend('<div id="pistol_barrel"></div>');
            $('#main').prepend('<div id="shooting_stand_close"></div>');
            $('#main').prepend('<div id="shooting_stand_countdown"></div>');
            $('#main').prepend('<div id="shooting_stand_message"><div></div></div>');
            $('#main').prepend('<div id="shooting_stand_count"><span class="current"></span> / <span class="total"></span></div>');

            var _shooting_stand_html = '<div id="shooting_stand">' +
                '<div id="target" class="target_1" data-shot="false"></div>' +
                '<div id="target" class="target_2" data-shot="false"></div>' +
                '<div id="target" class="target_3" data-shot="false"></div>' +
                '<div id="target" class="target_4" data-shot="false"></div>' +
                '<div id="target" class="target_5" data-shot="false"></div>' +
                '<div id="target" class="target_6" data-shot="false"></div>' +
                '<div id="target" class="target_7" data-shot="false"></div>' +
                '<div id="target" class="target_8" data-shot="false"></div>' +
                '<div id="target" class="target_9" data-shot="false"></div>' +
                '<div id="target" class="target_10" data-shot="false"></div>' +
                '</div>';

            $('#main').prepend(_shooting_stand_html);

            var _targetInterval;
            var _countdownInterval;


            /* Shuffling targets to be displayed */
            function shuffle(arra1) {
                var ctr = arra1.length, temp, index;

                while (ctr > 0) {

                    index = Math.floor(Math.random() * ctr);
                    ctr--;
                    temp = arra1[ctr];
                    arra1[ctr] = arra1[index];
                    arra1[index] = temp;
                }
                return arra1;
            }


            /* To display Shooting Stand */
            function displayShootingStand() {

                clearInterval(_targetInterval);

                $('#pistol_barrel').animate( { 'bottom': '-100px' }, 1000);

                setTimeout( function() { $('#pistol_barrel').removeClass('active'); }, 1000);

                $('#shooting_stand').animate( { 'bottom': _shooting_stand_pos + 'px' }, 1000);

                $('#shooting_stand_count').animate( { 'bottom': _shooting_stand_pos + 'px' }, 1000);

                $('#shooting_stand_close').animate( { 'bottom': _shooting_stand_close_pos + 'px' }, 1000);

                launchShootingStand();

            }

            /* To hide Shooting Stand */
            function hideShootingStand() {

                clearInterval(_countdownInterval);
                clearInterval(_targetInterval);

                $( '#shooting_stand_countdown').text('');
                $( '#shooting_stand_countdown').hide();

                $('#shooting_stand_message').css( { 'bottom': '-350px' });
                $('#shooting_stand_close').animate( { 'bottom': '-100px' }, 1000);
                $('#shooting_stand').animate( { 'bottom': '-400px' }, 1000);
                $('#shooting_stand_count').animate( { 'bottom': '-350px' }, 1000);

                $('#pistol_barrel').animate( { 'bottom': _pistol_barrel_pos + 'px' }, 1000);

            }

            /* To retry Shooting Stand */
            function retryShootingStand() {

                clearInterval(_targetInterval);

                $('#shooting_stand_message').css( { 'bottom': '-350px' });

                launchShootingStand();

            }


            /* When Shooting session is over */
            function endShootingStand(_score) {

                $( '#shooting_stand').addClass('over');

                $( '#shooting_stand_countdown').text('');


                if ($(window).width() < 768) {

                    if (_score == 10) {
                        $( '#shooting_stand_message' ).html( _congrats_text );
                    } else {
                        $( '#shooting_stand_message').html(_tryagain_text);
                    }


                    // Getting a random operator to be displayed
                    var _hit_target = [];

                    $( '#target.target_1, #target.target_2, #target.target_3, #target.target_4, #target.target_5, #target.target_6, #target.target_7,#target.target_8, #target.target_9, #target.target_10' ).each( function() {

                        if ( $( this ).attr( 'data-shot' ) == 'true' ) {

                            _hit_target.push( $( this ).attr('class').replace('target_','') );

                        }

                    });

                    if (_hit_target.length > 0) {
                        shuffle(_hit_target);

                        $( '#target.target_' + _hit_target[0] ).prop( 'deg', 0 ).animate(
                            { deg: 90 },
                            {
                                duration: 500,
                                step    : function ( now ) {

                                    var _currentdeg = 90 - now;

                                    $( this ).css( { transform: 'rotate3d(1, 0, 0, ' + _currentdeg + 'deg)' } );

                                }
                            }
                        );

                        if (_hit_target.length > 1) {

                            $( '#target.target_' + _hit_target[1] ).prop( 'deg', 0 ).animate(
                                { deg: 90 },
                                {
                                    duration: 500,
                                    step    : function ( now ) {

                                        var _currentdeg = 90 - now;

                                        $( this ).css( { transform: 'rotate3d(1, 0, 0, ' + _currentdeg + 'deg)' } );

                                    }
                                }
                            );

                        }

                    }


                } else {

                    if ( _score == 10 ) {

                        $( '#shooting_stand_message' ).html( _congrats_text );

                        $( '#target.target_1, #target.target_2, #target.target_3, #target.target_4, #target.target_5, #target.target_6, #target.target_7,#target.target_8, #target.target_9, #target.target_10' ).prop( 'deg', 0 ).animate(
                            { deg: 90 },
                            {
                                duration: 500,
                                step    : function ( now ) {

                                    var _currentdeg = 90 - now;

                                    $( this ).css( { transform: 'rotate3d(1, 0, 0, ' + _currentdeg + 'deg)' } );

                                }
                            }
                        );


                    }
                    else {

                        $( '#shooting_stand_message' ).html( _tryagain_text );

                        $( '#target.target_1, #target.target_2, #target.target_3, #target.target_4, #target.target_5, #target.target_6, #target.target_7,#target.target_8, #target.target_9, #target.target_10' ).prop( 'deg', 0 ).animate(
                            { deg: 90 },
                            {
                                duration: 500,
                                step    : function ( now ) {

                                    var _currentdeg = 90 - now;

                                    if ( $( this ).attr( 'data-shot' ) == 'true' ) {

                                        $( this ).css( { transform: 'rotate3d(1, 0, 0, ' + _currentdeg + 'deg)' } );
                                    }
                                }
                            }
                        );

                    }

                }

                if (_score == 10) {

                    // Tracking event Ending the game - Congrats
                    try{
                        tc_events_100(this, 'clickevent', { 'ACTION':'page - interaction - showdown game : result : congrats' });
                    } catch(e){ scerror(e); }

                } else {

                    // Tracking event Ending the game - Try Again
                    try{
                        tc_events_100(this, 'clickevent', { 'ACTION':'page - interaction - showdown game : result : try again' });
                    } catch(e){ scerror(e); }

                }

                $('#shooting_stand_message').animate( { 'bottom': _shooting_stand_pos }, 1000);

            }


            /* To start a Shooting session */
            function launchShootingStand() {

                $( '#shooting_stand').removeClass('over');

                var _width = Math.floor($( window ).width() - 50);

                _width = Math.floor(_width / 10);

                var _start_left = 0;

                var _max_left = $( window ).width();

                if ($(window).width() < 1000) {
                    _max_left = Math.floor( $( window ).width() - 200 );
                }
                if ($(window).width() < 768) {
                    _max_left = Math.floor( $( window ).width() - 150 );
                }

                for(var i=1; i<=10; i++ ) {

                    if ( _start_left > _max_left ) {
                        _start_left = _max_left;
                    }

                    $( '#target.target_'+ i).css( { transform: 'rotate3d(1, 0, 0, 90deg)' } );
                    $( '#target.target_'+ i).css( { left : _start_left + 'px' } );

                    _start_left += _width;

                }


                var _myTargets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                var _currentTargetKey = 0;
                shuffle(_myTargets);

                $('div[id="target"]').each( function() {
                        $(this).attr( 'data-shot', 'false');
                });

                $( '#shooting_stand_count span.current').text('0');
                $( '#shooting_stand_count span.total').text(_myTargets.length);


                $( '#shooting_stand_countdown').fadeIn();
                var counter = 4;
                _countdownInterval = setInterval(function() {
                    counter--;
                    if (counter > 0) {
                        $( '#shooting_stand_countdown').text(counter);
                    }
                    // Launch the game
                    if (counter == 0 ) {

                        $( '#shooting_stand_countdown').text(_shoot_text);

                        $( '#shooting_stand_countdown').fadeOut(1500);

                        _targetInterval = setInterval( function () {

                            var _targetId = _myTargets[ _currentTargetKey ];
                            var _currentTarget = $( '.target_' + _targetId );

                            _currentTarget.prop( 'deg', 0 ).animate(
                                { deg: 90 },
                                {
                                    duration: 500,
                                    step    : function ( now ) {

                                        var _currentdeg = 90 - now;

                                        $( this ).css( { transform: 'rotate3d(1, 0, 0, ' + _currentdeg + 'deg)' } );

                                    },
                                    complete: function () {


                                        setTimeout( function () {

                                            if ( _currentTarget.attr( 'data-shot' ) == 'false' ) {
                                                _currentTarget.prop( 'deg', 0 ).animate(
                                                    { deg: 90 },
                                                    {
                                                        duration: 500,
                                                        step    : function ( now ) {

                                                            var _currentdeg = now;
                                                            $( this ).css( { transform: 'rotate3d(1, 0, 0, ' + _currentdeg + 'deg)' } );

                                                        }
                                                    }
                                                );
                                            }

                                        }, 1000 );


                                    }
                                } );

                            _currentTargetKey++;

                            if ( _currentTargetKey == _myTargets.length ) {

                                clearInterval( _targetInterval );

                                setTimeout( function () {

                                    endShootingStand( $( '#shooting_stand_count span.current' ).text() );

                                }, 2000 );

                            }

                        }, 2000 );
                    }

                }, 1000);

            }


            /* Barrel Sound On on mouseover */
            $('body').off('mouseover','#pistol_barrel').on('mouseover','#pistol_barrel', function() {

                audio["barrel"].volume = 1;
                audio["barrel"].loop = true;

                var playPromise = audio["barrel"].play();

                if (playPromise !== undefined) {
                    playPromise.then(function() {
                        // Automatic playback started!
                        // Show playing UI.
                    })
                .catch(function() {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
                };

            });

            /* Barrel Sound Off on mouseoout */
            $('body').off('mouseout','#pistol_barrel').on('mouseout','#pistol_barrel', function() {

                audio["barrel"].loop = false;
                audio["barrel"].pause();
                audio["barrel"].currentTime = 0;

            });


            /* Click on Barrel */
            $('body').off('click','#pistol_barrel').on('click','#pistol_barrel', function(e) {

                audio["barrel"].loop = false;
                audio["barrel"].pause();
                $(this).addClass('active');
                setTimeout(function() {
                    $( '#main .bullet-hole:last-child' ).fadeOut( 100, function () {
                        $( this ).remove();
                    } );
                }, 200);

                // Tracking event Starting the game
                try{
                    tc_events_100(this, 'clickevent', { 'ACTION':'page - interaction - showdown game : start' });
                } catch(e){ scerror(e); }

                displayShootingStand();


            });


            /* Click on Close Shooting Stand */
            $('#shooting_stand_close').off('click').on('click', function(e) {

                setTimeout(function() {
                    $( '#main .bullet-hole:last-child' ).fadeOut( 100, function () {
                        $( this ).remove();
                    } );
                }, 200);

                // Tracking event Closing the game
                try{
                    tc_events_100(this, 'clickevent', { 'ACTION':'page - interaction - showdown game : close' });
                } catch(e){ scerror(e); }

                hideShootingStand();

            });


            /* Retry Button */
            $('#shooting_stand_message').off('click','a.retry').on('click','a.retry', function(e) {

                e.preventDefault();

                // Tracking event Try Again button
                try{
                    tc_events_100(this, 'clickevent', { 'ACTION':'page - interaction - showdown game : try again' });
                } catch(e){ scerror(e); }

                retryShootingStand();

            });

            /* When shooting a target */
            $( '#target.target_1, #target.target_2, #target.target_3, #target.target_4, #target.target_5, #target.target_6, #target.target_7,#target.target_8, #target.target_9, #target.target_10').off('click').on('click', function(e) {

                e.preventDefault();

                if (!$( '#shooting_stand').hasClass('over')) {

                    // Tracking event Good Shot
                    try{
                        tc_events_100(this, 'clickevent', { 'ACTION':'page - interaction – showdown game : good shoot' });
                    } catch(e){ scerror(e); }

                    $( this ).attr( 'data-shot', 'true' );
                    $( '#shooting_stand_count span.current' ).text( $( '#target[data-shot="true"]' ).length );

                    setTimeout( function () {
                        $( '#main .bullet-hole:last-child' ).fadeOut( 100, function () {
                            $( this ).remove();
                        } );
                    }, 100 );

                    $( this ).prop( 'deg', 0 ).animate(
                        { deg: 90 },
                        {
                            duration: 200,
                            step    : function ( now ) {

                                var _currentdeg = now;
                                $( this ).css( { transform: 'rotate3d(1, 0, 0, ' + _currentdeg + 'deg)' } );

                            }
                        }
                    );
                }

            });



            /* Handling window resize */
            $(window).on('resize', function(e)
            {

                var _width = Math.floor($( window ).width() - 50);

                _width = Math.floor(_width / 10);

                var _start_left = 0;

                var _max_left = $( window ).width();

                if ($(window).width() < 1000) {
                    _max_left = Math.floor( $( window ).width() - 200 );
                }
                if ($(window).width() < 768) {
                    _max_left = Math.floor( $( window ).width() - 150 );
                    _shooting_stand_close_pos = 270;
                } else {
                    _shooting_stand_close_pos = 400;
                }
                if (is_NCSA) {
                    _shooting_stand_close_pos += 80;
                }

                if (parseInt($('#shooting_stand_close').css('bottom')) > 0) {

                    $('#shooting_stand_close').css( { 'bottom' : _shooting_stand_close_pos });

                }

                for(var i=1; i<=10; i++ ) {

                    if ( _start_left > _max_left ) {
                        _start_left = _max_left;
                    }

                    $( '#target.target_'+ i).css( { left : _start_left + 'px' } );

                    _start_left += _width;

                }

            });

            /******************************************************/
            /******************************************************/
            /* END SHOWDOWN TAKEOVER - TO BE REMOVED AFTER EVENT  */
            /******************************************************/
            /******************************************************/




            if ($('.c_last_news .home_latest_posts_container').length > 0) {
                allnews.init();
            } else {

                news.init( 'games_updates' );
                news.init( 'esports' );
                /*
                if (SC.lib.getLocale().toLowerCase() == 'en-gb' || SC.lib.getLocale().toLowerCase() == 'en-gb' || SC.lib.getLocale().toLowerCase() == 'en-gb') {
                    $('.home_latest_posts_category.community').remove();
                    news.init( 'shop' );
                } else {
                    $('.home_latest_posts_category.shop').remove();
                    news.init('community');
                }
                */

                news.init( 'community' );
            }

            videos.yt_init();

            if ($('.home_highlights .home_highlight_video').length) {
                highlight_video.init();
            }

            if ($('.home_highlights .home_highlight_promo').length) {
                highlight_promo.init();
            }

            if ($('.home_highlights .home_highlight_news').length) {
                highlight_news.init();
            }

            if ($('.home_highlights .home_highlight_live').length) {
                videos.twitch_init();
            }


            // Check if video background in header to play it
            if (is_DESKTOP) { try { document.getElementById('bg-video').play(); } catch(e){} }

            // Set loader stack
            init.loaded('page');
        },
        // SC.home.init.events
        events: function()
        {

            $('.r6_homepage').off('click', 'a.yt-video, a.cdn-video').on('click', 'a.yt-video, a.cdn-video', function( e )
            {
                e.preventDefault();
                videos.show(this);
            });

            // Set loader stack
            init.loaded('events');
        }
    };

    /**
     *   HIGHLIGHT NEWS
     */
    var highlight_news =
    {
        _serviceGeneric : tridionSettings.values["serviceRoot"] + "/v1/Component/Details",


        // SC.home.highlight_news.init
        init: function()
        {

            var _locale = SC.lib.getLocale().toLowerCase();
            var locale_tcm = _NEWS_TCM_LOCALE[_locale];

            var tcm = $('.home_highlights .home_highlight_news .home_highlight_content').html();
            tcm = tcm.split('-');
            tcm = tcm[1];
            _highlight_news = tcm;
            tcm = 'tcm:' + locale_tcm + '-' + tcm + '-16';

            var params = 'id='+ tcm +'&templateId='+ _NEWS_TEMPLATE_ID;

            var url = highlight_news._serviceGeneric + '?' + params;

            $.ajax({
                url: url,
                cache: false,
                success: function (result, textStatus, jqXHR)
                {
                    // Show news
                    highlight_news.show(result);
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                    $('.home_highlights .home_highlight_news').hide();
                }
            });
        },
        // SC.home.highlight_news.show
        show: function(data)
        {

            var _locale = SC.lib.getLocale().toLowerCase();
            var locale_tcm = _NEWS_TCM_LOCALE[_locale];

            var tcm = $('.home_highlights .home_highlight_news .home_highlight_content').html();
            tcm = tcm.split('-');
            tcm = tcm[1];
            tcm = '/news/detail.aspx?c=tcm:' + locale_tcm + '-' + tcm + '-16&ct='+_NEWS_TEMPLATE_DETAIL_ID;

            data = data.replace("<strong>","<p>");
            data = data.replace("</strong>","</p>");
            data = data.replace("style=\"display:none\"","");

            $('.home_highlights .home_highlight_news .home_highlight_content').html(data);

            // Fix url
            var replacement = '/siege/'+_locale;
            if (is_VAL) { replacement = '/EMEA/Rainbow-6-v3/www-v3/'+_locale; }
            else if (is_DEV) { replacement = '/Rainbow-6/www-v3/'+_locale; }

            $('.home_highlights .home_highlight_news .home_highlight_content .item  a').attr('href', replacement + tcm);

           //$('.home_highlights .home_highlight_news .home_highlight_content .item p:last-child').remove();

            $('.home_highlights .home_highlight_news .home_highlight_content .item p:last-child a').addClass("btn btn-r6 xhr");

            $('.home_highlights .home_highlight_news .home_highlight_content .item .news_date').remove();



        }
    };

    /**
     *   HIGHLIGHT VIDEO
     */
    var highlight_video =
        {

            // SC.home.highlight_video.init
            init: function()
            {

                if ($('.home_highlights .home_highlight_video a').hasClass('yt-video')) {

                    var _yt_url = $( '.home_highlights .home_highlight_video a.yt-video' ).attr( 'href' );

                    $( '.home_highlights .home_highlight_video h3' ).html( '<a href="' + _yt_url + '" class="yt-video">' + $( '.home_highlights .home_highlight_video h3' ).html() + '</a>' );

                    var _img = $( '.home_highlights .home_highlight_video img' ).attr( 'src' );
                    var _alt = $( '.home_highlights .home_highlight_video img' ).attr( 'alt' );
                    $( '.home_highlights .home_highlight_video img' ).remove();
                    $( '.home_highlights .home_highlight_video .home_highlight_content' ).prepend( '<a href="' + _yt_url + '" class="yt-video"><img src="' + _img + '" alt="' + _alt + '"></a>' );

                    var _vid = SC.lib.tools.videos.getId( _yt_url );
                    $( '.home_highlights .home_highlight_video .home_highlight_content a' )
                        .attr( 'data-aa-tracking', '1' )
                        .attr( 'data-aa-location', 'page' )
                        .attr( 'data-aa-category', 'video' )
                        .attr( 'data-aa-action', 'view trailer : ' + _vid );
                }

            }
        };

    /**
     *   HIGHLIGHT PROMO
     */
    var highlight_promo =
        {

            // SC.home.highlight_video.init
            init: function()
            {

                var _yt_url = $('.home_highlights .home_highlight_promo a.btn-r6').attr('href');

                $('.home_highlights .home_highlight_promo h3').html('<a href="'+_yt_url+'">' + $('.home_highlights .home_highlight_promo h3').html() + '</a>');

                var _img = $('.home_highlights .home_highlight_promo img').attr('src');
                var _alt = $('.home_highlights .home_highlight_promo img').attr('alt');
                $('.home_highlights .home_highlight_promo img').remove();
                $('.home_highlights .home_highlight_promo .home_highlight_content').prepend('<a href="'+_yt_url+'"><img src="' + _img + '" alt="' + _alt + '"></a>');

            }
        };

    var videos =
    {
        // SC.home.videos.yt_init
        yt_init: function()
        {
            // Parse all YT videos
            var vid;
            $('.r6_homepage .yt-video').each(function(k,v)
            {
                vid = SC.lib.tools.videos.getId( $(v).attr('href') );
                $(v).attr('href','https://www.youtube.com/embed/'+ vid +'?rel=0&wmode=opaque&enablejsapi=1&autoplay=1');

                $(v)
                    .attr('data-aa-tracking','1')
                    .attr('data-aa-location','page')
                    .attr('data-aa-category','video')
                    .attr('data-aa-action','view trailer : ' + vid );
            });
        },
        // SC.home.videos.twitch_init
        twitch_init: function()
        {
           // Parse all TWITCH videos
            var vid;
            $( '.c_highlight_news .home_highlight_live .home_highlight_content .twitch' ).each( function ( k, v ) {
                vid = $( v ).attr( 'embedded-url' );
                $( v ).append( '<iframe src="' + vid + '" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>' );
            } );


            var w = parseInt( $( '.c_highlight_news .home_highlight_live .home_highlight_content' ).get( 0 ).offsetWidth - 10 );
            var h = parseInt( w * 0.75 );
            $( '.c_highlight_news .home_highlight_live .home_highlight_content .twitch iframe' ).each( function ( k, v ) {
                $( v ).css( { 'width': w } );
                $( v ).css( { 'height': h } );
            } );

        },
        // SC.home.videos.show
        show: function( el )
        {
            // Get video id
            var url = $(el).attr('href');

            if ($(el).hasClass('yt-video'))
            {
                vid = SC.lib.tools.videos.getId( url );
                //url = 'https://www.youtube.com/embed/'+ vid +'?wmode=opaque&enablejsapi=1&autoplay=1';

                // Open box
                $.fancybox(
                    {
                        href: url,
                        type: 'iframe',
                        width: '90%',
                        height: '90%',
                        padding: 0,
                        afterLoad: function() { $('.fancybox-inner iframe').attr('data-yt-id', vid); }
                    });
            }
            // Embedded videos (HTML5 videos)
            else if ($(el).hasClass('cdn-video')) {
                var _html = [];
                var _poster, _mp4, _webm;
                _poster = $( el ).find( 'img' ).attr( 'src' );
                _mp4 = url;
                _webm = _mp4.replace( 'mp4', 'webm' );

                _html.push( '<video preload="auto" loop="loop" controls autoplay muted poster="' + _poster + '">' );
                _html.push( '<source type="video/mp4" src="' + _mp4 + '">' );
                _html.push( '<source type="video/webm" src="' + _webm + '">' );
                _html.push( '</video>' );

                $.fancybox(
                    {
                        href       : url,
                        type       : 'inline',
                        wrapCSS    : 'fancybox-r6-custom-video',
                        autoSize   : false,
                        //autoHeight: true,
                        width: 1280,
                        height: 720,
                        padding    : 0,
                        content    : _html.join( '' ).replace( 'poster', 'hold-poster' ),
                        onPlayStart: function () {
                            //$('.fancybox-inner iframe').attr('data-yt-id', vid);
                            var $vid = $( '.fancybox-inner video' );
                            $vid.css( { 'width': '1280px' } );
                            $('.fancybox-inner').css({ 'height': parseInt($vid.height())+'px', 'overflow': 'hidden' });
                        }
                    } );


            }
/*
            // Open box
            $.fancybox(
                {
                    href: $(el).attr('href'),
                    type: 'iframe',
                    padding: 0,
                    afterLoad: function() { $('.fancybox-inner iframe').attr('data-yt-id', vid + '?wmode=opaque&enablejsapi=1&autoplay=1'); if (is_DESKTOP) { try { document.getElementById('bg-video').pause(); } catch(e){} } },
                    afterClose: function() { videos.hide(); if (is_DESKTOP) { try { document.getElementById('bg-video').play(); } catch(e){} } }
                });
                */
        },
        // SC.home.videos.hide
        hide: function()
        {
            $.fancybox.close();
        }
    };


    /**
     *   NEWS
     */
    var news =
    {
        _op : "Latest",
        _serviceGeneric : tridionSettings.values["serviceRoot"] + "/v1/News/",


        // SC.home.news.init
        init: function(category)
        {


            var _category_id = _HOME_NEWS_CATEGORY[ category ];
            var _locale = SC.lib.getLocale().toLowerCase();

            var friendlyurl = 'false';
            if ($('body').hasClass("ncsa")) {
                friendlyurl = 'true';
            }

            // var params = "templateId="+ _NEWS_TEMPLATE_ID +"&pageIndex=0&pageSize=2&language="+ _locale +"&detailPageId="+ _NEWS_DETAIL_PAGE[_locale] +"&keywordList="+ _category_id + "&useSeoFriendlyUrl=" + friendlyurl;
            var params = "templateId="+ _NEWS_TEMPLATE_ID +"&pageIndex=0&pageSize=2&language="+ _locale +"&detailPageId="+ _NEWS_DETAIL_PAGE['zh-tw'] +"&keywordList="+ _category_id + "&useSeoFriendlyUrl=" + friendlyurl;

            var url = news._serviceGeneric + news._op + '?' + params;

            $.ajax({
                url: url,
                cache: false,
                success: function (result, textStatus, jqXHR)
                {
                    //sclog('NEWS => ',result);
                    // Show news
                    news.show(category, result);
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                    // Hide news
                    news.hide(category);
                }
            });
        },
        // SC.home.news.show
        show: function(category, data)
        {

            if (data['items'].length > 0)
            {
                var content = data[ 'items' ];

                if (_highlight_news != '') {

                    var contentid = content[0]['ID'];
                    contentid = contentid.split('-');
                    contentid = contentid[1];

                    if (contentid == _highlight_news && content.length > 1) {
                        content = content[ 1 ];
                    } else {
                        content = content[ 0 ];
                    }

                } else {
                    content = content[ 0 ];
                }

                content = content['Content'];

                content = content.replace("<strong>","<p>");
                content = content.replace("</strong>","</p>");
                content = content.replace("style=\"display:none\"","");

                // Fix url
                var pattern = new RegExp('href="\/siege-v3\/', 'gi');
                var replacement = 'href="/siege/';
                if (is_VAL) { replacement = 'href="/EMEA/Rainbow-6-v3/www-v3/'; }
                else if (is_DEV) { replacement = 'href="/Rainbow-6/www-v3/'; }
                content = content.replace(pattern, replacement);

                var category_label = _NEWS_CATEGORY_LOCALES[category];

                $('.c_last_news .home_latest_posts_category.'+category).html(content);
                $('.c_last_news .home_latest_posts_category.'+category).html($('.c_last_news .home_latest_posts_category.'+category+' .item').html());
                $('.c_last_news .home_latest_posts_category.'+category+' .news_date span').remove();

                $('.c_last_news .home_latest_posts_category.'+category).prepend('<span class="category_label">'+category_label+'</span>');

            }
            else {
                news.hide(category);
            }

        },
        // SC.home.news.hide
        hide: function(category)
        {
            $('.c_last_news .home_latest_posts_category.'+category).hide();
        }
    };

    /**
     *   ALL NEWS
     */
    var allnews =
        {
            _op : "Latest",
            _serviceGeneric : tridionSettings.values["serviceRoot"] + "/v1/News/",


            // SC.home.news.init
            init: function()
            {
                var _category_id = '233416,233418,316144,233417';

                var _locale = SC.lib.getLocale().toLowerCase();

                var friendlyurl = 'false';
                if ($('body').hasClass("ncsa")) {
                    friendlyurl = 'true';
                }

                // var params = "templateId="+ _NEWS_TEMPLATE_ID +"&pageIndex=0&pageSize=4&language="+ _locale +"&detailPageId="+ _NEWS_DETAIL_PAGE[_locale] +"&keywordList="+ _category_id + "&useSeoFriendlyUrl=" + friendlyurl;
                var params = "templateId="+ _NEWS_TEMPLATE_ID +"&pageIndex=0&pageSize=4&language="+ _locale +"&detailPageId="+ _NEWS_DETAIL_PAGE['zh-tw'] +"&keywordList="+ _category_id + "&useSeoFriendlyUrl=" + friendlyurl;

                var url = news._serviceGeneric + news._op + '?' + params;

                $.ajax({
                    url: url,
                    cache: false,
                    success: function (result, textStatus, jqXHR)
                    {
                        // Show news
                        allnews.show(result);
                    },
                    error: function (jqXHR, textStatus, errorThrown)
                    {
                        // Hide news
                        allnews.hide();
                    }
                });
            },
            // SC.home.news.show
            show: function(data)
            {

                if (data['items'].length > 0)
                {

                    $( '.c_last_news .home_latest_posts_container' ).html('');

                    $.each(data['items'] , function (k, item) {

                        if ($('.c_last_news .home_latest_posts_container .home_latest_posts').length < 3)
                        {
                            var content = item;

                            if ( _highlight_news != '' ) {

                                var contentid = item[ 'ID' ];
                                contentid = contentid.split( '-' );
                                contentid = contentid[ 1 ];

                                if ( contentid == _highlight_news ) {
                                    return;
                                }

                            }

                            content = item[ 'Content' ];

                            content = content.replace( "<strong>", "<p>" );
                            content = content.replace( "</strong>", "</p>" );
                            content = content.replace( "style=\"display:none\"", "" );

                            // Fix url
                            var pattern = new RegExp( 'href="\/siege-v3\/', 'gi' );
                            var replacement = 'href="/siege/';
                            if ( is_VAL ) {
                                replacement = 'href="/EMEA/Rainbow-6-v3/www-v3/';
                            }
                            else if ( is_DEV ) {
                                replacement = 'href="/Rainbow-6/www-v3/';
                            }
                            content = content.replace( pattern, replacement );


                            $( '.c_last_news .home_latest_posts_container' ).append( '<div class="home_latest_posts home_latest_posts_' + k + '">' + content + '</div>' );
                            $('.c_last_news .home_latest_posts_' + k ).html($('.c_last_news .home_latest_posts_' + k + ' .item').html());
                            $( '.c_last_news .home_latest_posts_' + k + ' .news_date span' ).remove();
                        }

                    });

                }
                else {
                    news.hide();
                }

            },
            // SC.home.news.hide
            hide: function()
            {
                $('.c_last_news .home_latest_posts_container').hide();
            }
        };



    // UI
    var UI =
    {
        show: function()
        {
            //SC.main.hideMainLoader();


             SC.main.hideContentsLoader();


        },
        hide: function()
        {
            SC.main.showContentsLoader();
        }
    };


    var _publics = {
        init: _init,
        pageShow: UI.show,
        pageHide: UI.hide
    };
    return _publics;
})();

