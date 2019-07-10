/*
 *******************************************************************
 *                     Ubisoft RAINBOW 6 SIEGE                     *
 *             _____ _____ _____ _____ _ _____ _____               *
 *            |   __|   __|  _  |_   _|_|     |   __|              *
 *            |__   |   __|   __| | | | | | | |   __|              *
 *            |_____|_____|__|    |_| |_|_|_|_|_____|              *
 *              Septime CrÃ©ation 2o15 - septime.net                *
 *                                                                 *
 *******************************************************************
 */
// DEV/DEBUG
//var _common = $('head link[href$="reset.css"]').attr('href').replace('reset.css','');
//var _design = $('head link[href$="r6-siege.css"]').attr('href').replace('r6-siege.css','');

var _NEWS_TEMPLATE_ID = 'tcm:150-76778-32';
var _NEWS_TEMPLATE_DETAIL_ID = 'tcm:150-76770-32';
var _NEWS_DETAIL_PAGE =
{
    'en-gb'     : '154-194572-64',
    'de-de'     : '156-194572-64',
    'es-es'     : '157-194572-64',
    'fr-fr'     : '153-194572-64',
    'it-it'     : '158-194572-64',
    'nl-nl'     : '159-194572-64',
    'pl-pl'     : '160-194572-64',
    'ru-ru'     : '161-194572-64',
    'ja-jp'     : '162-194572-64',
    'en-au'     : '185-194572-64',
    'en-nordic' : '174-194572-64',
    'ar-ar'     : '195-194572-64',
    'ko-kr'     : '267-194572-64',
    'zh-tw'     : '268-194572-64',
    'en-us'     : '152-194572-64',
    'es-mx'     : '180-194572-64',
    'en-ca'     : '181-194572-64',
    'fr-ca'     : '164-194572-64',
    'pt-br'     : '165-194572-64',
    'tr-tr'		: '294-194572-64'
};

var _NEWS_TCM_LOCALE =
{
    'en-gb'     : '154',
    'de-de'     : '156',
    'es-es'     : '157',
    'fr-fr'     : '153',
    'it-it'     : '158',
    'nl-nl'     : '159',
    'pl-pl'     : '160',
    'ru-ru'     : '161',
    'ja-jp'     : '162',
    'en-au'     : '185',
    'en-nordic' : '174',
    'ar-ar'     : '195',
    'ko-kr'     : '267',
    'zh-tw'     : '268',
    'en-us'     : '152',
    'es-mx'     : '180',
    'en-ca'     : '181',
    'fr-ca'     : '164',
    'pt-br'     : '165',
    'tr-tr'		: '294'
};


var _HOME_NEWS_CATEGORY =
{
    'games_updates'    : '233416',
    'esports' : '233418',
    'proleague' : '329017',
    'community' : '316144',
    'shop' : '233417'
};


/**
 *
 *   GLOBAL SITE CONFIGURATIONS
 *   Use "r6-siege-loc.js" for localized conf and vars
 *
 *   - G2W URL
 *   - G2W API: user profile
 *   - G2W API: user platforms (ubiservices)
 *   - LOGIN URL
 *   - LOGIN REDIR
 *
 *   - BACKGROUND (video)
 *   - OTHER API (FAQ, support)
 *
 */


/**
 * G2W settings
 * main and sections url
 * xx-XX for UAT
 */

var _G2W_URL =
{
    'default':  'https://game-rainbow6.ubi.com/',
    'xx-xx':    'https://stage1-r6.ubi.com/'
};
var _G2W_LOGGED_LINKS =
{
    'profile': {
        'default':  'https://game-rainbow6.ubi.com/{LOCALE}',
        'xx-xx':    'https://stage1-r6.ubi.com/{LOCALE}/'
    },
    /*/
     'whiteboard': {
     'default':  '',
     },
     //*/
    'leaderboards': {
        'default':  'https://game-rainbow6.ubi.com/{LOCALE}',
        'xx-xx':    'https://stage1-r6.ubi.com/{LOCALE}/'
    }
};


// USER PROFILES (username, stats, alpha status,...)
var _G2W_API_CONF =
{
    //url: 'https://previewsites.ubi.com/resource/xx-XX/game/rainbow6/siege/g2w_playercard.js',
    url: _design + 'g2w_playercard.js',
    ttl: 25000,
    dataType: 'json'
};

// USER PROFILES (platforms)
// UAT for xx-XX
var _UBISERVICES_API_CONF =
{
    'default':  'https://api-ubiservices.ubi.com/v2/users/',
    'xx-xx':    'https://uat-api-ubiservices.ubi.com/v2/users/'
};



// COMMUNITY STATS
var _COMMUNITY_API_CONF =
{
    'default':  'https://rainbow6.ubi.com/r6-g2w/',
    // 'xx-xx':    'http://dev-assassins-creed.ubi.com/r6-g2w/'
    'xx-xx':    'https://rainbow6.ubi.com/r6-g2w/'
};


// COOKIES CONF
var _USER_PLATFORM_COOKIE = 'r6_platform';
//var _USER_PLATFORM_COOKIE_SSL = 'r6_platform_ssl';


// Specific uplay login url
// UAT for xx-XX
var _LOGIN_URL =
{
    'default':  'https://uplayconnect.ubi.com/',
    'xx-xx':    'https://uat-uplayconnect.ubi.com/'
};

// Specific redirections after uplay login
// Check a part of the previous url
var _LOGIN_REDIR =
[
    {
        'from': '/player-activities/',
        //'to':   'http://uat-r6.ubi.com/'
        'to':   _G2W_URL
    },
    {
        'from': '/whiteboard/',
        'to':   'http://rainbow6.ubi.com/siege/{LOCALE}/whiteboard/index.aspx'
    },
    { // example
        'from': '/my-page/',
        'to':   'http://www.domain.tld/'
    }
];






// SITE BACKGROUND VIDEO
var _VIDEO_BG_CONF =
{
    'poster': 'http://static2.cdn.ubi.com/gamesites/rainbow6/r6-siege-bg_1280.jpg',
    'mp4':    'http://static2.cdn.ubi.com/gamesites/rainbow6/r6-siege-bg_1280.mp4',
    'webm':   'http://static2.cdn.ubi.com/gamesites/rainbow6/r6-siege-bg_1280.webm',
    'swf':    'http://static2.cdn.ubi.com/gamesites/rainbow6/LSPACDS.swf',
    'width':  1280,
    'height':  720
};


// FAQ module
var _FAQS_CONF =
{
    'public' : {
        product_id: 2559,   // Product ID (for API)
        page_range: 5       // Number of items per page
    },
    'alpha_logged' : {
        product_id: 2559,   // Product ID (for API)
        page_range: 5       // Number of items per page
    },
    'beta_logged' : {
        product_id: 2559,   // Product ID (for API)
        page_range: 5       // Number of items per page
    }
};

// SUPPORT module
var _TICKETS_CONF =
{
    'alpha_logged' : {
        app_id: '685a3038-2b04-47ee-9c5a-6403381a46aa',
        product_id: 2559,   // Product ID (for API)
        page_range: 5       // Number of items per page
    },
    'beta_logged' : {
        app_id: '685a3038-2b04-47ee-9c5a-6403381a46aa',
        product_id: 2559,   // Product ID (for API)
        page_range: 5       // Number of items per page
    }
};

// OP Health module
var _OP_HEALTH_NEWS =
{
    'default': 'tcm:154-290705-16',
    'en-gb'  : 'tcm:154-290705-16',
    'de-de'  : 'tcm:156-290705-16',
    'es-es'  : 'tcm:157-290705-16',
    'fr-fr'  : 'tcm:153-290705-16',
    'it-it'  : 'tcm:158-290705-16',
    'nl-nl'  : 'tcm:159-290705-16',
    'pl-pl'  : 'tcm:160-290705-16',
    'ru-ru'  : 'tcm:161-290705-16',
    'en-au'  : 'tcm:185-290705-16',
    'en-nordic'  : 'tcm:174-290705-16',
    'en-us'  : 'tcm:152-290705-16',
    'es-mx'  : 'tcm:180-290705-16',
    'en-ca'  : 'tcm:181-290705-16',
    'fr-ca'  : 'tcm:164-290705-16',
    'pt-br'  : 'tcm:165-290705-16'
};


