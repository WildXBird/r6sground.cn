(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"0YgJ":function(e,t,r){},sFF4:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("g09b");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("/zsF");var _divider=_interopRequireDefault(__webpack_require__("PArb"));__webpack_require__("Mwp2");var _list=_interopRequireDefault(__webpack_require__("VXEj"));__webpack_require__("IzEo");var _card=_interopRequireDefault(__webpack_require__("bx4M"));__webpack_require__("Pwec");var _icon=_interopRequireDefault(__webpack_require__("CtXQ"));__webpack_require__("miYZ");var _message2=_interopRequireDefault(__webpack_require__("tsqr")),_classCallCheck2=_interopRequireDefault(__webpack_require__("2Taf")),_createClass2=_interopRequireDefault(__webpack_require__("vZ4D")),_inherits2=_interopRequireDefault(__webpack_require__("MhPg")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("l4Ni")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("ujKo"));__webpack_require__("5NDa");var _input=_interopRequireDefault(__webpack_require__("5rEg"));__webpack_require__("tU7J");var _typography=_interopRequireDefault(__webpack_require__("wFql")),_react=_interopRequireWildcard(__webpack_require__("q1tI")),_reactDom=_interopRequireDefault(__webpack_require__("i8i4")),_reactRouter=__webpack_require__("Ty5D"),_locale=__webpack_require__("LLXN"),_Charts=__webpack_require__("KTCi"),_Trend=_interopRequireDefault(__webpack_require__("YR7N")),_NumberInfo=_interopRequireDefault(__webpack_require__("LOQS")),_numeral=_interopRequireDefault(__webpack_require__("ZhIB")),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Yuan=_interopRequireDefault(__webpack_require__("Umy/")),_utils=__webpack_require__("+n12"),_reactAdsense=_interopRequireDefault(__webpack_require__("6ldB")),_reactLoadScript=_interopRequireDefault(__webpack_require__("XDgv")),_home=_interopRequireDefault(__webpack_require__("0YgJ"));function _getRequireWildcardCache(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]}return i.default=e,r&&r.set(e,i),i}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,i=(0,_getPrototypeOf2.default)(e);if(t){var n=(0,_getPrototypeOf2.default)(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,r)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var Title=_typography.default.Title,Search=_input.default.Search,OperatorList={"1:1":"recruit","1:2":"recruit","1:4":"recruit","1:5":"recruit","2:1":"SMOKE","2:2":"CASTLE","2:3":"DOC","2:4":"GLAZ","2:5":"BLITZ","2:6":"BUCK","2:7":"BLACKBEARD","2:8":"CAPITAO","2:9":"HIBANA","2:A":"JACKAL","2:B":"YING","2:C":"ELA","2:D":"DOKKAEBI","2:F":"MAESTRO","3:1":"MUTE","3:2":"ASH","3:3":"ROOK","3:4":"FUZE","3:5":"IQ","3:6":"FROST","3:7":"VALKYRIE","3:8":"CAVEIRA","3:9":"ECHO","3:A":"MIRA","3:B":"LESION","3:C":"ZOFIA","3:D":"VIGIL","3:E":"LION","3:F":"ALIBI","4:1":"SLEDGE","4:2":"PULSE","4:3":"TWITCH","4:4":"KAPKAN","4:5":"JAGER","4:E":"FINKA","5:1":"THATCHER","5:2":"THERMITE","5:3":"MONTAGNE","5:4":"TACHANKA","5:5":"BANDIT","2:10":"MAVERICK","3:10":"CLASH","3:11":"KAID","2:11":"NOMAD","2:12":"MOZZIE","3:12":"GRIDLOCK"},OperatorListF={SMOKE:"0",CASTLE:"0",DOC:"0",ELA:"0",MAESTRO:"0",MUTE:"0",ROOK:"0",FROST:"0",VALKYRIE:"0",CAVEIRA:"0",ECHO:"0",MIRA:"0",LESION:"0",VIGIL:"0",ALIBI:"0",PULSE:"0",KAPKAN:"0",JAGER:"0",TACHANKA:"0",BANDIT:"0",CLASH:"0",KAID:"0",MOZZIE:"0"};function opeidtoname(e){for(var t in OperatorList)if(t==e)return OperatorList[t]}function openametoid(e){for(var t in OperatorList)if(OperatorList[t]==e)return t}function TimesTOh(e){return parseInt(e/3600)}function FetchOpeInfo(e,t,r,i){for(var n in r)if(i){if(t+":"+e+":infinite"==n)return console.log(r[n]),r[n]}else if(t+":"+e==n)return r[n]}var ServiceList=function(_PureComponent){(0,_inherits2.default)(ServiceList,_PureComponent);var _super=_createSuper(ServiceList);function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=_super.call(this,e),t.state={services:[{}],view:"type_a"},t}return(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if("undefined"!=typeof window.needjs){eval(window.needjs);var timestamp=(new Date).getTime();this.setState({services:{Done:timestamp}})}else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+window.selfDomain+"/r6sg-app/res/need.js/",!0),xhr.withCredentials=!1,xhr.send(),xhr.onreadystatechange=function(){if(xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status){window.needjs=xhr.responseText,eval(xhr.responseText);var _timestamp=(new Date).getTime();_this2.setState({services:{Done:_timestamp}})}}}if("undefined"!=typeof window.feedcontent){var _timestamp2=(new Date).getTime();this.setState({services:{Done:_timestamp2}})}if("undefined"==typeof window.feedcontent){var _xhr=new XMLHttpRequest;_xhr.open("GET","https://"+window.selfDomain+"/r6sg-app/res/feedcontent/",!0),_xhr.withCredentials=!1,_xhr.send(),_xhr.onreadystatechange=function(){if(_xhr.readyState==XMLHttpRequest.DONE)if(_xhr.status>=200&&_xhr.status<300){try{window.feedcontent=JSON.parse(_xhr.responseText)}catch(e){_message2.default.error("\u73b0\u5728\u65e0\u6cd5\u83b7\u53d6\u8d44\u8baf\u6d41"+e.message)}var e=(new Date).getTime();_this2.setState({services:{Done:e}})}else _message2.default.error("\u73b0\u5728\u65e0\u6cd5\u83b7\u53d6\u8d44\u8baf\u6d41")}}}},{key:"render",value:function(){window.Fthis=this;var e=_react.default.createElement(_icon.default,{type:"loading"});var t=[];if("undefined"!=typeof window.feedcontent){for(var r in window.feedcontent.posts)if("publish"==window.feedcontent.posts[r].status){var i="";try{i=window.feedcontent.posts[r].custom_fields.\u5934\u56fe[0]}catch(e){i="https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/feed/emptyFeedPic.jpg"}var n="",a=window.feedcontent.posts[r].content.replace(/<\/?.+?>/g,""),o=a.replace(/ /g,"");n=o.substring(0,120)+"...",t.push({href:"#",title:window.feedcontent.posts[r].title,description:window.feedcontent.posts[r].modified,content:n,pic:i,id:window.feedcontent.posts[r].id})}}else for(var _=0;_<3;_++)t.push({id:0,title:"\u8d44\u8baf\u6d41",description:"\u6b63\u5728\u83b7\u53d6\u8d44\u8baf\u6d41\u4fe1\u606f",content:"\u7a0d\u5b89\u52ff\u8e81",pic:"https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/feed/emptyFeedPic.jpg"});return window.PaperMarginResize=function(e){try{clearInterval(window.mainMaxHeightFix),window.mainMaxHeightFixCount=0,window.mainMaxHeightFix=setInterval(function(){try{if(window.mainMaxHeightFixCount=window.mainMaxHeightFixCount+1,window.mainMaxHeightFixCount>100)return void clearInterval(window.mainMaxHeightFix);document.getElementById("main").style.maxHeight=window.innerHeight-64+"px"}catch(e){console.log("mainMaxHeightFixCount")}},300)}catch(e){}if(document.body.offsetWidth>1e3?document.body.offsetWidth>1200?window.PaperMargin="10px "+(document.body.offsetWidth-1200)/2+"px":window.PaperMargin="10px 50px":window.PaperMargin=20,e){var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})}},window.onresize=function(){window.PaperMarginResize(!0)},window.PaperMarginResize(),"undefined"!=typeof this.state.services.Done||"undefined"!=typeof this.state.services.Done?_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_list.default,{id:"ccr",itemLayout:"vertical",size:"large",style:{padding:window.PaperMargin,max3Width:1200,background:"white"},dataSource:t,renderItem:function(e){return _react.default.createElement("div",{id:"article-"+e.id},_react.default.createElement(_list.default.Item,{key:e.title,extra:_react.default.createElement("img",{style:{borderRadius:5,maxHeight:207},width:272,alt:"logo",src:e.pic})},_react.default.createElement(_list.default.Item.Meta,{title:_react.default.createElement("a",{href:e.href},e.title),description:e.description}),e.content,_react.default.createElement("div",{style:{height:1}},_react.default.createElement(_divider.default,{style:{height:1,marginTop:5,marginBottom:0}}))))}})):_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},e)}},{key:"componentDidUpdate",value:function(){if(window.Fthis=this,"undefined"!=typeof window.feedcontent){var e=function(e){if("publish"!=window.feedcontent.posts[e].status)return"continue";try{var t=document.getElementById("article-"+window.feedcontent.posts[e].id);t.onclick=function(){window.Fthis.props.history.push(window.feedcontent.posts[e].url.replace("https://r6sground.cn",""))}}catch(e){}};for(var t in window.feedcontent.posts)e(t)}}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);