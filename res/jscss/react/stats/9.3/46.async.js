(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{Nai3:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("DYP6");var _alert=_interopRequireDefault(__webpack_require__("cobE"));__webpack_require__("Kbp9");var _skeleton=_interopRequireDefault(__webpack_require__("W92m"));__webpack_require__("VIk5");var _button=_interopRequireDefault(__webpack_require__("X+Ft"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_locale=__webpack_require__("TJP2"),Meta=_card.default.Meta,Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text,requestProfileId,pIcon={};function platformTypeToName(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"noinput",t=e.toLowerCase();return"noinput"==t?"unknow":"psn"==t?"PlayStation":"xone"==t||"xb1"==t||"xbl"==t?"Xbox":"pc"==t?"PC":"steam"==t?"Steam":"uplay"==t?"Uplay":e.toUpperCase()}pIcon.Steam=function(){return _react.default.createElement("svg",{t:"1572869066662",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7574",width:"48",height:"48"},_react.default.createElement("path",{d:"M510.872089 0A511.738502 511.738502 0 0 0 0.577827 470.685702l274.473789 113.378508a144.333001 144.333001 0 0 1 89.622469-24.904607l122.134923-176.606643v-2.615552a193.084623 193.084623 0 1 1 193.050507 193.095994h-4.480555l-173.991091 124.181877c0 2.274393 0.193323 4.548787 0.193324 6.82318a144.799252 144.799252 0 0 1-286.766885 28.543636L18.22712 651.158813A511.965941 511.965941 0 1 0 510.792486 0h0.068231zM321.403752 776.591606L258.53952 750.549802a108.772862 108.772862 0 1 0 59.600478-148.745324l64.968045 26.837841a80.092761 80.092761 0 1 1-61.647431 147.835567v0.11372zM808.54469 379.823688a128.662431 128.662431 0 1 0-128.662432 128.616943A128.844383 128.844383 0 0 0 808.54469 379.823688z m-225.062593-0.227439a96.661717 96.661717 0 1 1 96.661717 96.661717 96.434278 96.434278 0 0 1-96.661717-96.661717z",fill:"#004986","p-id":"7575"}))},pIcon.PlayStation=function(){return _react.default.createElement("svg",{t:"1572868902839",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2044",width:"48",height:"48"},_react.default.createElement("path",{d:"M383.36 110.752v748.704l167.04 53.792V285.312c0-29.44 12.96-49.12 33.888-42.272 27.136 7.712 32.416 34.72 32.416 64.224v250.72c104.16 50.912 186.112-0.096 186.112-134.528 0-138.112-48.032-199.456-189.344-248.608-55.776-19.104-159.072-50.592-230.016-64.096h-0.096z m198.656 692.992l268.64-97.056c30.496-11.008 35.232-26.656 10.496-34.912-24.992-8.192-69.856-5.92-100.576 5.248l-179.424 63.968v-101.76l10.24-3.616s51.232-17.92 124.288-26.24c72.352-7.68 161.504 1.248 231.968 28.192 78.848 25.632 87.072 62.816 67.232 88.416s-69.216 44.192-69.216 44.192L581.12 902.752v-98.016l0.864-0.992zM77.152 793.6c-81.056-23.264-94.464-71.168-57.696-99.04 34.176-24.96 92.128-44.832 92.128-44.832l239.616-85.888v98.688l-171.744 62.816c-30.08 11.552-35.2 26.976-10.208 35.232 24.992 8.32 69.856 6.4 99.968-5.12l82.688-30.112v88.48c-5.152 1.248-10.912 1.888-16.672 3.104-82.688 14.112-170.464 8.352-257.568-20.448l-0.512-2.912z",fill:"#003791","p-id":"2045"}))},pIcon.Xbox=function(){return _react.default.createElement("svg",{t:"1572868931153",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2804",width:"48",height:"48"},_react.default.createElement("path",{d:"M175.008417 897.406474A509.759701 509.759701 0 0 0 512.00022 1023.9994c129.119924 0 247.007855-47.743972 337.151802-126.591926C929.247976 815.839522 664.99213 525.823692 512.00022 410.27176 359.16831 525.823692 94.752464 815.806522 175.008417 897.406474z m476.159721-614.65464C757.824076 409.08776 970.495951 722.783576 910.399987 833.662512a509.439702 509.439702 0 0 0 113.567933-321.502812c0-142.495917-58.239966-271.455841-152.319911-364.191787 0 0-1.151999-0.927999-3.487998-1.791999a35.487979 35.487979 0 0 0-11.999993-1.919999c-25.247985 0-84.70395 18.527989-205.02388 138.495919zM155.904429 146.175914c-2.431999 0.863999-3.487998 1.759999-3.679998 1.791999A510.175701 510.175701 0 0 0 0.00052 512.1597c0 121.759929 42.591975 233.503863 113.535933 321.406812C53.760488 722.431577 266.240364 408.99176 372.960301 282.751834 252.640372 162.719905 193.088407 144.287915 167.904422 144.287915a31.263982 31.263982 0 0 0-11.999993 1.951999v-0.096zM512.00022 151.519911S386.336294 78.015954 288.224351 74.495956c-38.527977-1.407999-62.047964 12.575993-64.895962 14.463992 91.519946-61.407964 188.799889-88.959948 287.999831-88.959948H512.00022c99.583942 0 196.479885 27.551984 288.671831 88.959948-2.911998-1.951999-26.239985-15.871991-64.863962-14.463992-98.143942 3.487998-223.839869 76.767955-223.839869 76.767955v0.256z",fill:"#107C10","p-id":"2805"}))},pIcon.Uplay=function(){return _react.default.createElement("svg",{t:"1572868989376",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3670",width:"48",height:"48"},_react.default.createElement("path",{d:"M1005.264585 511.504015C994.160932-12.991594 296.678729-208.63348 27.983126 283.031155c12.031624 8.799725 28.191119 20.351364 40.222743 28.671104a485.968813 485.968813 0 0 0-41.182713 127.868004l-0.447986 3.007906c-4.959845 26.55917-7.807756 57.118215-7.839755 88.317241v0.031999C18.735415 802.88691 239.816506 1023.968001 512.255992 1023.968001s493.040592-220.633105 493.040592-493.040592v-19.423394zM140.395613 599.37327c-6.495797 53.214337-2.303928 69.853817-2.303928 76.317615l-12.031624 4.191869c-4.607856-8.799725-15.743508-39.774757-20.831349-81.405456-12.959595-158.619043 95.261023-301.558576 260.375863-328.405738 151.259273-22.175307 296.022749 71.67776 329.749695 203.033655l-12.031624 4.191869c-3.711884-3.711884-9.727696-14.335552-32.862973-37.470829-182.682291-182.682291-469.457329-98.972907-510.160057 159.579014z m469.42533 88.829224a134.203806 134.203806 0 0 1-110.332552 57.822193h-0.383988a134.427799 134.427799 0 0 1-134.427799-134.427799v-0.191994a134.779788 134.779788 0 0 1 124.412112-134.10781l0.447986-0.031999c43.486641-1.823943 84.189369 21.75932 103.132777 59.646137 7.327771 14.335552 11.615637 31.263023 11.615637 49.214462 0 29.791069-11.83963 56.830224-31.071029 76.637605l0.031999-0.031999c12.511609 8.799725 24.543233 17.119465 36.510859 25.439205z m280.759226 5.055842c-71.197775 161.402956-217.849192 246.040311-374.164307 243.736383-300.15062-14.815537-387.571888-361.204712-186.87416-486.09681l8.799725 8.799725c-3.231899 4.607856-15.263523 13.855567-33.758945 50.430424-21.75932 44.414612-28.671104 88.797225-25.887191 116.572358 15.743508 241.91244 354.772913 291.414893 471.281272 51.806381C898.451923 350.581044 504.384238 17.119465 154.699166 271.959501l-7.839755-7.839755c92.029124-144.283491 271.959501-208.601481 443.538139-165.594825 262.263804 66.141933 403.315396 339.477391 300.15062 594.797413z","p-id":"3671"}))},pIcon.unknow=function(){return _react.default.createElement("svg",{t:"1572869035181",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5453",width:"48",height:"48"},_react.default.createElement("path",{d:"M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-93.098667c231.338667 0 418.901333-187.562667 418.901333-418.901333S743.338667 93.098667 512 93.098667 93.098667 280.661333 93.098667 512 280.661333 930.901333 512 930.901333z m5.802667-705.92c49.621333 0 96.384 20.565333 127.402666 48.512 30.378667 30.933333 42.496 65.834667 42.496 112.384 0 37.973333-10.069333 69.802667-29.44 94.634667-6.997333 8.533333-28.714667 28.714667-65.194666 60.501333-14.72 12.416-25.6 26.368-32.597334 40.362667-8.533333 15.488-12.373333 32.554667-12.373333 51.2v13.184H465.066667v-13.226667c0-28.672 4.693333-53.504 15.530666-73.685333 10.069333-21.717333 39.552-53.504 87.637334-96.170667l13.226666-14.762666c13.952-17.834667 21.674667-36.437333 21.674667-56.618667 0-27.136-7.722667-48.085333-22.485333-63.573333-15.530667-15.530667-37.973333-23.296-65.92-23.296-34.944 0-60.544 10.837333-76.032 33.365333-13.952 18.602667-20.949333 44.970667-20.949334 79.104H336.213333c0-56.618667 17.493333-104.618667 50.090667-137.173333 32.597333-33.365333 74.026667-54.741333 131.413333-54.741334z m-11.605334 462.677334c16.256 0 30.250667 4.650667 41.088 15.488 10.88 10.112 16.298667 23.296 16.298667 39.594666 0 16.256-6.186667 29.44-17.066667 40.32a58.24 58.24 0 0 1-40.32 15.530667c-15.530667 0-29.482667-5.461333-40.362666-16.298667a53.845333 53.845333 0 0 1-16.298667-39.552c0-16.298667 5.461333-29.482667 16.298667-39.594666 10.88-10.837333 24.832-15.488 40.362666-15.488z",fill:"#0086F6","p-id":"5454"}))};var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Account",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var a="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,a);var r=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6700\u8fd1\u76f8\u9047"})+" "+document.title.replace(r,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:456781}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:45672}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6700\u8fd1\u76f8\u9047"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){window.Fthis=this;_react.default.createElement(_icon.default,{type:"loading"});if(window.PaperMarginResize=function(e){if(console.log("RC"),document.body.offsetWidth>1e3?document.body.offsetWidth>1200?window.PaperMargin="10px "+(document.body.offsetWidth-1200)/2+"px":window.PaperMargin="10px 50px":window.PaperMargin=20,e){var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})}},window.onresize=function(){window.PaperMarginResize(!0)},window.PaperMarginResize(),"undefined"==typeof this.state.services.Done||"undefined"==typeof window.resulted||"undefined"==typeof window.resulted.userAccountInfo||"undefined"==typeof window.resulted.userAccountInfo.library||"undefined"==typeof window.resulted.userAccountInfo.profiles)return _react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:35}},_react.default.createElement("div",{style:{paddingBottom:35}},_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"Account"}))),_react.default.createElement(_card.default,{style:{width:300},actions:[_react.default.createElement("div",{style:{paddingLeft:10,paddingRight:10}},_react.default.createElement(_button.default,{block:!0,disabled:!0},(0,_locale.formatMessage)({id:"View Profile"})))]},_react.default.createElement(Meta,{avatar:_react.default.createElement(_icon.default,{type:"clock-circle",spin:!0,style:{fontSize:"48px"}}),title:_react.default.createElement(_skeleton.default,{active:!0,paragraph:!1}),description:_react.default.createElement(_skeleton.default,{active:!0,paragraph:!1})}))),_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"Library"}))),_react.default.createElement(_card.default,{hoverable:!0,style:{width:240},cover:_react.default.createElement("div",{style:{height:310,background:"#E6E6E6"}})},_react.default.createElement(_skeleton.default,{active:!0}))));var e=240,t=300,a=35;window.screen.width<385?(a=15,e=window.screen.width-2*(a+3),t=window.screen.width-2*(a+3)):window.screen.width<570&&(a=15,e=(window.screen.width-2*(a+6))/2,t=window.screen.width-2*(a+3));var r=608/(465/(e-2));return _react.default.createElement("div",null,_react.default.createElement(_row.default,{style:{padding:a}},_react.default.createElement(_col.default,{span:24},_react.default.createElement("div",{style:{padding:10,paddingLeft:0,paddingBottom:35}},_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"\u5173\u8054\u8d26\u6237"}))),function(){if("undefined"!=typeof window.userinfo&&!window.userinfo.prime)return _react.default.createElement("div",{onClick:function(){window.Fthis.props.history.push("/Shopitems/items/1")}},_react.default.createElement(_alert.default,{message:(0,_locale.formatMessage)({id:"\u9700\u8981\u8ba2\u9605Prime\u624d\u80fd\u4f7f\u7528\u5b8c\u6574\u7684\u529f\u80fd"}),type:"warning"}))}(),_react.default.createElement("div",null,_react.default.createElement("div",{style:{display:"block"}},Array.from(window.resulted.userAccountInfo.profiles).map(function(e,a){var r=!0,i=!0,l="#";return"Xbox"==platformTypeToName(e.platformType)&&(l="https://account.xbox.com/profile?gamertag="+e.idOnPlatform,r=!1,i=!1),"Steam"==platformTypeToName(e.platformType)&&(l="https://steamcommunity.com/profiles/"+e.idOnPlatform,r=!1,i=!0),"Uplay"==platformTypeToName(e.platformType)&&(l="https://club.ubisoft.com/zh-CN/profile/"+e.nameOnPlatform,r=!0,i=!1),"PlayStation"==platformTypeToName(e.platformType)&&(l="https://club.ubisoft.com/zh-CN/profile/"+e.nameOnPlatform,r=!0,i=!1),_react.default.createElement("div",{style:{padding:3,height:"auto",display:"inline",float:"left"}},_react.default.createElement(_card.default,{style:{width:t},actions:[_react.default.createElement("div",{style:{paddingLeft:10,paddingRight:10}},_react.default.createElement(_button.default,{block:!0,type:"primary",disabled:i,onClick:function(){window.Fthis.props.history.replace("/search/?profileid="+e.profileId)}},(0,_locale.formatMessage)({id:"\u67e5\u770b\u6218\u7ee9"})),_react.default.createElement("div",{style:{height:10}}),_react.default.createElement(_button.default,{block:!0,disabled:r,onClick:function(){window.open(l)}},(0,_locale.formatMessage)({id:"\u67e5\u770b\u8d44\u6599"})))]},_react.default.createElement(Meta,{avatar:_react.default.createElement(_icon.default,{component:function(){return"undefined"==typeof pIcon[platformTypeToName(e.platformType)]?pIcon["unknow"]:pIcon[platformTypeToName(e.platformType)]}(),style:{width:48}}),title:e.nameOnPlatform,description:platformTypeToName(e.platformType)})))}))))),_react.default.createElement(_col.default,{span:24},_react.default.createElement("div",{style:{paddingBottom:0}},_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"\u6e38\u620f\u5e93"}))),function(){if("undefined"!=typeof window.userinfo&&!window.userinfo.prime)return _react.default.createElement("div",{onClick:function(){window.Fthis.props.history.push("/Shopitems/items/1")}},_react.default.createElement(_alert.default,{message:(0,_locale.formatMessage)({id:"\u9700\u8981\u8ba2\u9605Prime\u624d\u80fd\u4f7f\u7528\u5b8c\u6574\u7684\u529f\u80fd"}),type:"warning",style:{marginBottom:15,marginRight:10}}))}(),_react.default.createElement("div",{style:{display:"block"}},Array.from(window.resulted.userAccountInfo.library).map(function(t,a){return _react.default.createElement("div",{style:{padding:3,height:"auto",display:"inline",float:"left"}},_react.default.createElement(_card.default,{hoverable:!0,style:{width:e},cover:_react.default.createElement("div",{style:{background:"url("+t.images+")",backgroundSize:"100%",height:r}})},_react.default.createElement("div",{style:{paddingBottom:3}},_react.default.createElement(Meta,{title:t.title,description:function(){return null==t.lastSessionDate?(0,_locale.formatMessage)({id:"\u4ece\u672a\u542f\u52a8\u8fc7"}):-1==t.lastSessionDate?(0,_locale.formatMessage)({id:"\u9700\u8981\u8ba2\u9605Prime"}):getFriendlyTime(t.lastSessionDate)}()})),_react.default.createElement("div",{style:{paddingBottom:3}},_react.default.createElement(Meta,{title:(0,_locale.formatMessage)({id:"\u4e0a\u6b21\u767b\u5f55\u65f6\u95f4"}),description:platformTypeToName(t.platform)})),_react.default.createElement("div",{style:{paddingBottom:3}},_react.default.createElement(Meta,{title:(0,_locale.formatMessage)({id:"\u5e73\u53f0"}),description:time(new Date(t.releaseDate).getTime())})),_react.default.createElement("div",{style:{paddingBottom:3}},_react.default.createElement(Meta,{title:(0,_locale.formatMessage)({id:"\u6e38\u620f\u53d1\u884c\u65f6\u95f4"})}))))}))))))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);