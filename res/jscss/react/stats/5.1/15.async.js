(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"9NPa":function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("CKcX"),_interopRequireDefault=__webpack_require__("u+rM");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("lR8K");var _table=_interopRequireDefault(__webpack_require__("TLut"));__webpack_require__("f4VT");var _list=_interopRequireDefault(__webpack_require__("FBh+"));__webpack_require__("OHPE");var _tag=_interopRequireDefault(__webpack_require__("T7Wp"));__webpack_require__("be00");var _badge=_interopRequireDefault(__webpack_require__("8IVr"));__webpack_require__("nYtg");var _avatar=_interopRequireDefault(__webpack_require__("PLg3"));__webpack_require__("XaRz");var _row=_interopRequireDefault(__webpack_require__("QuCd"));__webpack_require__("9Off");var _col=_interopRequireDefault(__webpack_require__("BczQ"));__webpack_require__("Lksa");var _button=_interopRequireDefault(__webpack_require__("3Axj"));__webpack_require__("wq59");var _card=_interopRequireDefault(__webpack_require__("twVa"));__webpack_require__("pck6");var _icon=_interopRequireDefault(__webpack_require__("sU1J")),_classCallCheck2=_interopRequireDefault(__webpack_require__("Pjwa")),_createClass2=_interopRequireDefault(__webpack_require__("2cji")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("sp3j")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("vZkh")),_inherits2=_interopRequireDefault(__webpack_require__("+KCP"));__webpack_require__("fJBB");var _typography=_interopRequireDefault(__webpack_require__("rTB7")),_react=_interopRequireWildcard(__webpack_require__("uqIC")),_reactDom=_interopRequireDefault(__webpack_require__("jCnN")),_reactAdsense=_interopRequireDefault(__webpack_require__("9L8s")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_locale=__webpack_require__("Kf7D"),_Charts=__webpack_require__("KTCi"),_Trend=_interopRequireDefault(__webpack_require__("YR7N")),_NumberInfo=_interopRequireDefault(__webpack_require__("LOQS")),_numeral=_interopRequireDefault(__webpack_require__("BS6i")),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Yuan=_interopRequireDefault(__webpack_require__("Umy/")),_utils=__webpack_require__("+n12"),_home=_interopRequireDefault(__webpack_require__("A+LV")),_util=__webpack_require__("SaUU"),Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text,OperatorList={"1:1":"recruit","1:2":"recruit","1:4":"recruit","1:5":"recruit","2:1":"SMOKE","2:2":"CASTLE","2:3":"DOC","2:4":"GLAZ","2:5":"BLITZ","2:6":"BUCK","2:7":"BLACKBEARD","2:8":"CAPITAO","2:9":"HIBANA","2:A":"JACKAL","2:B":"YING","2:C":"ELA","2:D":"DOKKAEBI","2:F":"MAESTRO","3:1":"MUTE","3:2":"ASH","3:3":"ROOK","3:4":"FUZE","3:5":"IQ","3:6":"FROST","3:7":"VALKYRIE","3:8":"CAVEIRA","3:9":"ECHO","3:A":"MIRA","3:B":"LESION","3:C":"ZOFIA","3:D":"VIGIL","3:E":"LION","3:F":"ALIBI","4:1":"SLEDGE","4:2":"PULSE","4:3":"TWITCH","4:4":"KAPKAN","4:5":"JAGER","4:E":"FINKA","5:1":"THATCHER","5:2":"THERMITE","5:3":"MONTAGNE","5:4":"TACHANKA","5:5":"BANDIT","2:10":"MAVERICK","3:10":"CLASH","3:11":"KAID","2:11":"NOMAD","2:12":"MOZZIE","3:12":"GRIDLOCK"},OperatorListF={SMOKE:"0",CASTLE:"0",DOC:"0",ELA:"0",MAESTRO:"0",MUTE:"0",ROOK:"0",FROST:"0",VALKYRIE:"0",CAVEIRA:"0",ECHO:"0",MIRA:"0",LESION:"0",VIGIL:"0",ALIBI:"0",PULSE:"0",KAPKAN:"0",JAGER:"0",TACHANKA:"0",BANDIT:"0",CLASH:"0",KAID:"0",MOZZIE:"0"};function opeidtoname(e){for(var t in OperatorList)if(t==e)return OperatorList[t]}function openametoid(e){for(var t in OperatorList)if(OperatorList[t]==e)return t}function TimesTOh(e){return parseInt(e/3600)}function FetchOpeInfo(e,t,r,a){for(var l in r)if(a){if(t+":"+e+":infinite"==l)return r[l]}else if(t+":"+e==l)return r[l]}window.onresize=function(){var e=(new Date).getTime();window.Fthis.setState({services:{Done:e}})};var requestProfileId="",ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Peek",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var r="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,r);var a=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6218\u7ee9"})+" "+document.title.replace(a,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:456781}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://r6sground.cn/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:45672}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6218\u7ee9"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){console.log("rendering"),window.Fthis=this;var e=_react.default.createElement(_icon.default,{type:"loading"}),t=[{title:(0,_locale.formatMessage)({id:"\u64c5\u957f"}),dataIndex:"name",key:"name"},{title:(0,_locale.formatMessage)({id:"\u65f6\u957f"}),dataIndex:"time",key:"age"},{title:(0,_locale.formatMessage)({id:"\u6218\u635f"}),dataIndex:"kd",key:"rtrwt"},{title:(0,_locale.formatMessage)({id:"\u80dc\u7387"}),dataIndex:"wl",key:"gegt"}],r={width:"25%",textAlign:"center",padding:0};function a(e){return"undefined"==typeof e.extra?_react.default.createElement(_card.default,{title:e.title,bordered:!1,hoverable:!0,style:{height:210,margin:5}},e.content):_react.default.createElement(_card.default,{title:e.title,style:{height:210,margin:5},bordered:!1,hoverable:!0,extra:_react.default.createElement("a",{href:e.extraURL},e.extra)},e.content)}if("undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done){var l,i,d,n,o,_;"undefined"!=typeof window.resulted&&"undefined"!=typeof window.resulted.nicename&&""!=window.resulted.nicename&&"("+window.resulted.nicename+")";try{n=window.resulted.RcompetitionCalc.r1.info.ver}catch(e){}if("undefined"==typeof n||5!=n)l=_react.default.createElement("span",null,"\u6ca1\u6709\u6570\u636e"),o="none";else _="won"==window.resulted.RcompetitionCalc.r1.info.result?(0,_locale.formatMessage)({id:"\u80dc"}):(0,_locale.formatMessage)({id:"\u8d1f"}),l=_react.default.createElement("div",null,_react.default.createElement("span",null,_," ",window.resulted.RcompetitionCalc.r1.info.kill,"/",window.resulted.RcompetitionCalc.r1.info.death,"/",window.resulted.RcompetitionCalc.r1.info.assist)),i=_react.default.createElement("div",null,_react.default.createElement("span",{style:{paddingRight:15}},"Rating:",window.resulted.RcompetitionCalc.r1.info.Flyscore,(0,_locale.formatMessage)({id:"\u5206"})),_react.default.createElement("span",{style:{paddingRight:15}},(0,_locale.formatMessage)({id:"\u6bd4\u5206:"}),window.resulted.RcompetitionCalc.r1.won,"/",window.resulted.RcompetitionCalc.r1.lost)),d=_react.default.createElement("div",null,window.getFriendlyTime(window.resulted.RcompetitionCalc.r1.info.time));var u,c,s="";return s="PC"==window.resulted.GamePlatformType?"#2db7f5":"PlayStation"==window.resulted.GamePlatformType?"#108ee9":"Xbox"==window.resulted.GamePlatformType?"#87d068":"#f50",window.resulted.isUser&&(u=(0,_locale.formatMessage)({id:"\u8ba4\u8bc1\u7528\u6237"})),window.resulted.profile_id,window.userinfo.ProfileID,_react.default.createElement("div",{id:"main",style:{maxWidth:1800,maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_row.default,{style:{margin:20}},_react.default.createElement(_col.default,{span:0,lg:4,md:6,xxl:3},_react.default.createElement(_badge.default,{count:u},_react.default.createElement(_avatar.default,{shape:"square",style:{height:"100%",width:"100%",maxWidth:250,minHeight:100,background:"gray"},src:ProfileIdtoAvatarImg(window.resulted.uplayMainId,"full"),icon:"user"}))),_react.default.createElement(_col.default,{span:24,lg:0,md:0,xxl:0},_react.default.createElement(_badge.default,{count:u},_react.default.createElement(_avatar.default,{shape:"square",style:{height:"100%",width:"100%",maxWidth:200,minHeight:100,background:"gray"},src:ProfileIdtoAvatarImg(window.resulted.uplayMainId,"full"),icon:"user"}))),_react.default.createElement(_col.default,{span:24,lg:20,md:18,xxl:12},_react.default.createElement("span",null,_react.default.createElement("h1",{style:{marginLeft:20}},_react.default.createElement(Title,{level:2},window.resulted.UsernameOnPlatform)),_react.default.createElement("h3",{style:{marginLeft:20}},window.resulted.nicename),_react.default.createElement("h3",{style:{marginLeft:20}},window.resulted.mysign),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"},function(){return"zh-CN"!=(0,_locale.getLocale)()?(0,_locale.formatMessage)({id:"\u7b49\u7ea7"})+" "+window.resulted.level:window.resulted.level+(0,_locale.formatMessage)({id:"\u7ea7"})}()," ",_react.default.createElement(_tag.default,{color:s},window.resulted.GamePlatformType)),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"},(0,_locale.formatMessage)({id:"\u66f4\u65b0\u4e8e"})," ",window.getFriendlyTime(window.resulted.Servertime)),_react.default.createElement("h4",{style:{marginLeft:20},id:"\u80b2\u78a7\u8d26\u6237\u552f\u8bc6\u522b\u4e00ID"},window.resulted.profile_id)))),c,_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,style:{display:o}},_react.default.createElement(_Charts.ChartCard,{id:"Card-0",style:{height:210,margin:5},bordered:!1,hoverable:!0,title:(0,_locale.formatMessage)({id:"\u6700\u8fd1\u7684\u6bd4\u8d5b\u8bb0\u5f55"}),total:l,footer:_react.default.createElement(_Charts.Field,{label:d}),contentHeight:46},i)),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6},_react.default.createElement(_Charts.ChartCard,{id:"Card-1",style:{height:210,margin:5},bordered:!1,hoverable:!0,title:(0,_locale.formatMessage)({id:"\u73a9\u5bb6Rating\u6c34\u5e73\uff08\u9690\u85cf\u5206\uff09"}),total:_react.default.createElement("span",null,window.resulted.operatorpvp_ug.toFixed(0),(0,_locale.formatMessage)({id:"\u5206"})),footer:_react.default.createElement("span",null,_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u8bc4\u4ef7\u6765\u81ea\u80b2\u78a7"})}),_react.default.createElement(Text,null,(0,_locale.formatMessage)({id:"100\u5206\u4ee5\u4e0a\u4e3a\u4f18\u79c0"})),_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u8be5\u5206\u6570\u53cd\u5e94\u4e86\u73a9\u5bb6\u7684\u771f\u5b9e\u5b9e\u529b"})})),contentHeight:46})),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,id:"Card-2"},_react.default.createElement(a,{content:_react.default.createElement(_list.default.Item,null,_react.default.createElement(_list.default.Item.Meta,{style:{margin:20,marginTop:20},avatar:_react.default.createElement(_avatar.default,{src:IconMMR(mmrtolevel(window.resulted.rankmmr)),style:{height:70,width:70}}),title:_react.default.createElement("a",null,_react.default.createElement("h1",{style:{height:0}}," "),_react.default.createElement("h2",null,window.resulted.rankmmr," ",(0,_locale.formatMessage)({id:FrinendlyMMRPro(mmrtolevel(window.resulted.rankmmr))}))),description:_react.default.createElement("a",null,(0,_locale.formatMessage)({id:"\u8d5b\u533a"}),": ",(0,_locale.formatMessage)({id:window.resulted.rankmmrarea}))})),title:(0,_locale.formatMessage)({id:"\u6392\u4f4d\u6218\u7ee9"})})),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,id:"Card-3"},_react.default.createElement(_card.default,{title:(0,_locale.formatMessage)({id:"\u7b80\u8981\u6570\u636e"}),style:{height:210,margin:5},bordered:!1,hoverable:!0},_react.default.createElement(_card.default.Grid,{style:r},(0,_locale.formatMessage)({id:"\u6218\u635f"}),_react.default.createElement("br",null),window.resulted.r6sgkd),_react.default.createElement(_card.default.Grid,{style:r},(0,_locale.formatMessage)({id:"\u80dc\u7387"}),_react.default.createElement("br",null),window.resulted.r6sgwl,"%"),_react.default.createElement(_card.default.Grid,{style:r},(0,_locale.formatMessage)({id:"\u6700\u7231"}),_react.default.createElement("br",null),(0,_locale.formatMessage)({id:window.resulted.r6sgfavmode})),_react.default.createElement(_card.default.Grid,{style:r},(0,_locale.formatMessage)({id:"\u65f6\u957f"}),_react.default.createElement("br",null),window.resulted.r6sgtp,(0,_locale.formatMessage)({id:"\u5c0f\u65f6"})),_react.default.createElement(_card.default.Grid,{style:r},(0,_locale.formatMessage)({id:"\u7206\u5934"}),_react.default.createElement("br",null),window.resulted.r6sghsv,"%"),_react.default.createElement(_card.default.Grid,{style:r},(0,_locale.formatMessage)({id:"\u5747\u8017"}),_react.default.createElement("br",null),window.resulted.r6sghbv),_react.default.createElement(_card.default.Grid,{style:r},(0,_locale.formatMessage)({id:"\u7b49\u7ea7"}),_react.default.createElement("br",null),window.resulted.level))),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,id:"Card-4"},_react.default.createElement("span",{className:"FullCard"},_react.default.createElement(_card.default,{title:(0,_locale.formatMessage)({id:"\u5e72\u5458\u60c5\u51b5"}),style:{height:210,margin:5,padding:0},bordered:!1,hoverable:!0},_react.default.createElement(_table.default,{pagination:!1,size:"small",dataSource:[{key:"1",name:opeidtoname(window.resulted.operatorpvp_timeplayed_theMOST_ID),time:TimesTOh(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_timeplayed",window.resulted,!0))+" "+(0,_locale.formatMessage)({id:"\u5c0f\u65f6"}),kd:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_kills",window.resulted,!0)/FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_death",window.resulted,!0)).toFixed(3),wl:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_roundwon",window.resulted,!0)/(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_roundwon",window.resulted,!0)+FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_roundlost",window.resulted,!0))*100).toFixed(2)+"%"},{key:"2",name:opeidtoname(window.resulted.operatorpvp_timeplayed_theMOST_IDF),time:TimesTOh(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_timeplayed",window.resulted,!0))+" "+(0,_locale.formatMessage)({id:"\u5c0f\u65f6"}),kd:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_kills",window.resulted,!0)/FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_death",window.resulted,!0)).toFixed(3),wl:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_roundwon",window.resulted,!0)/(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_roundwon",window.resulted,!0)+FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_roundlost",window.resulted,!0))*100).toFixed(2)+"%"}],columns:t,bordered:!1,style:{padding:0,border:0}}))))),_react.default.createElement("div",{style:{height:90,overflow:"hidden"}},_react.default.createElement(_reactLoadScript.default,{url:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"})))}return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:0,lg:4,md:6},_react.default.createElement(_badge.default,null,_react.default.createElement(_avatar.default,{shape:"square",style:{height:"100%",width:"100%"},src:"https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/user/empty-user-min.PNG"}))),_react.default.createElement(_col.default,{span:24,lg:0,md:0},_react.default.createElement(_avatar.default,{shape:"square",style:{height:"50%",width:"50%"},src:"https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/user/empty-user-min.PNG"})),_react.default.createElement(_col.default,{span:24,lg:20,md:18},_react.default.createElement("span",null,_react.default.createElement("div",{style:{marginLeft:20,height:25}}),_react.default.createElement("h1",{style:{marginLeft:20}},"...."),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u6b21\u6570"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"})))),_react.default.createElement("h1",{style:{height:20}}," "),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"}),id:"test"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})}))))}},{key:"componentDidUpdate",value:function(){window.Fthis=this;try{document.getElementById("Card-0").onclick=function(){var e=0,t=0;try{e=window.resulted.RcompetitionCalc.r1.info.resultCid,t=window.resulted.profile_id}catch(r){e=0,t=0}0==e?window.Fthis.props.history.push("/Stats/Competition"):window.Fthis.props.history.push("/Stats/Competition/"+t+"/"+e)}}catch(e){}try{document.getElementById("Card-1").onclick=function(){window.Fthis.props.history.push("/Stats/Main")}}catch(e){}try{document.getElementById("Card-2").onclick=function(){window.Fthis.props.history.push("/Stats/Rank")}}catch(e){}try{document.getElementById("Card-3").onclick=function(){window.Fthis.props.history.push("/Stats/Main")}}catch(e){}try{document.getElementById("Card-4").onclick=function(){window.Fthis.props.history.push("/Stats/Operator")}}catch(e){}}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default},"A+LV":function(e,t,r){}}]);