(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{zAGe:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("gooI");var _progress=_interopRequireDefault(__webpack_require__("ao0b"));__webpack_require__("QKdE");var _list=_interopRequireDefault(__webpack_require__("2Vcd"));__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_locale=__webpack_require__("TJP2"),requestProfileId;function rankSeasonTransport(e){return e=parseInt(e),1==e?(0,_locale.formatMessage)({id:"\u58a8\u51b0\u884c\u52a8"}):2==e?(0,_locale.formatMessage)({id:"\u6c99\u7ebf\u884c\u52a8"}):3==e?(0,_locale.formatMessage)({id:"\u9ab7\u9885\u96e8\u884c\u52a8"}):4==e?(0,_locale.formatMessage)({id:"\u8d64\u9e26\u884c\u52a8"}):5==e?(0,_locale.formatMessage)({id:"\u4e1d\u7ed2\u58f3\u884c\u52a8"}):6==e?(0,_locale.formatMessage)({id:"\u5065\u5eb7\u884c\u52a8"}):7==e?(0,_locale.formatMessage)({id:"\u8840\u5170\u82b1\u884c\u52a8"}):8==e?(0,_locale.formatMessage)({id:"\u767d\u566a\u58f0\u884c\u52a8"}):9==e?(0,_locale.formatMessage)({id:"\u5947\u7f8e\u62c9\u884c\u52a8"}):10==e?(0,_locale.formatMessage)({id:"\u5907\u6218\u884c\u52a8"}):11==e?(0,_locale.formatMessage)({id:"\u6697\u7a7a\u884c\u52a8"}):12==e?(0,_locale.formatMessage)({id:"\u98ce\u57ce\u884c\u52a8"}):13==e?(0,_locale.formatMessage)({id:"\u71c3\u70e7\u5730\u5e73\u7ebf\u884c\u52a8"}):14==e?(0,_locale.formatMessage)({id:"\u5e7b\u955c\u884c\u52a8"}):15==e?(0,_locale.formatMessage)({id:"\u4f59\u70ec\u91cd\u71c3\u884c\u52a8"}):16==e?(0,_locale.formatMessage)({id:"\u5e7b\u53d8\u6d77\u6f6e"}):(0,_locale.formatMessage)({id:"\u65b0\u8d5b\u5b63"})}var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Rank",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var a="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,a);var r=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6392\u4f4d\u6570\u636e"})+" "+document.title.replace(r,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6392\u4f4d\u6570\u636e"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){var e=_react.default.createElement(_icon.default,{type:"loading"}),t=window.innerHeight-64;if(t<100&&(t="auto"),"undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done){if("undefined"!=typeof window.resulted.rank){var a=[],r=["ncsa","apac","emea"];for(var s in window.resulted.rank.data){var n=window.resulted.rank.data[s],o={},i=0;for(var l in r)l=r[l],n["rank_"+l+"_season"]==window.resulted.rank.season?("undefined"==typeof window.resulted["rank_"+l+"_wins"]&&(window.resulted["rank_"+l+"_wins"]=0),"undefined"==typeof window.resulted["rank_"+l+"_losses"]&&(window.resulted["rank_"+l+"_losses"]=0),parseInt(window.resulted["rank_"+l+"_wins"])+parseInt(window.resulted["rank_"+l+"_losses"])!=0&&(o={season:n["rank_"+l+"_season"],reg:l,mmr:window.resulted["rank_"+l+"_mmr"],max_mmr:window.resulted["rank_"+l+"_max_mmr"],abandons:window.resulted["rank_"+l+"_abandons"],losses:window.resulted["rank_"+l+"_losses"],wins:window.resulted["rank_"+l+"_wins"]},o.wl=(o.wins/dezero(o.wins+o.losses)*100).toFixed(2),o.pt=o.wins+o.losses,o.title=(0,_locale.formatMessage)({id:"\u6700\u540e\u6bb5\u4f4d"}),o.Dtitle=window.resulted["rank_"+l+"_mmr"],a.push(o),i+=1)):("undefined"==typeof n["rank_"+l+"_wins"]&&(n["rank_"+l+"_wins"]=0),"undefined"==typeof n["rank_"+l+"_losses"]&&(n["rank_"+l+"_losses"]=0),25!=parseInt(n["rank_"+l+"_max_mmr"])&&parseInt(n["rank_"+l+"_wins"])+parseInt(n["rank_"+l+"_losses"])!=0&&(o={season:n["rank_"+l+"_season"],reg:l,mmr:n["rank_"+l+"_mmr"],max_mmr:n["rank_"+l+"_max_mmr"],abandons:n["rank_"+l+"_abandons"],losses:n["rank_"+l+"_losses"],wins:n["rank_"+l+"_wins"]},o.wl=(o.wins/dezero(o.wins+o.losses)*100).toFixed(2),o.pt=o.wins+o.losses,o.title=(0,_locale.formatMessage)({id:"\u6700\u9ad8\u6bb5\u4f4d"}),o.Dtitle=n["rank_"+l+"_max_mmr"],a.push(o),i+=1));0==i&&(o={season:n["rank_apac_season"],reg:"apac",mmr:0,max_mmr:0,abandons:0,wl:0,losses:0,pt:0,wins:0,title:(0,_locale.formatMessage)({id:"\u6700\u9ad8\u6bb5\u4f4d"}),Dtitle:0},a.push(o))}return a=a.reverse(),_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement("div",{style:{padding:10,overflow:"scroll"},id:"MainRow"},_react.default.createElement(_row.default,null,Array.from(a).map(function(e,t){return _react.default.createElement(_col.default,{span:24,lg:8,md:24},_react.default.createElement(_card.default,{title:rankSeasonTransport(e.season)+" "+(0,_locale.formatMessage)({id:"\u7b2c"})+e.season+(0,_locale.formatMessage)({id:"\u8d5b\u5b63"})+" ("+(0,_locale.formatMessage)({id:regFix(e.reg)})+")",bordered:!1,style:{margin:5}},_react.default.createElement(_list.default,{style:{margin:6,textShadow:"0px 0px 15px #fff",borderRadius:10,background:"url(https://cdn.jsdelivr.net/gh/xieqiqiang00/r6sground.cn/res/assets/miniSeasonHead/"+e.season+".PNG)",backgroundSize:"cover"},itemLayout:"horizontal",dataSource:[{title:(0,_locale.formatMessage)({id:FrinendlyMMRPro(mmrtolevel(e.Dtitle,seasonidToRankVer(e.season)),seasonidToRankVer(e.season))})}],renderItem:function(t){return _react.default.createElement(_list.default.Item,null,_react.default.createElement(_list.default.Item.Meta,{style:{marginTop:3},avatar:_react.default.createElement(_avatar.default,{src:IconMMR(mmrtolevel(e.Dtitle,seasonidToRankVer(e.season)),seasonidToRankVer(e.season)),style:{height:70,width:70}}),title:e.title,description:_react.default.createElement("span",{style:{fontSize:30,color:"#000"}},t.title)}))}}),_react.default.createElement("div",null,(0,_locale.formatMessage)({id:"\u6700\u540eMMR\uff1a"}),e.mmr.toFixed(0)," (",(0,_locale.formatMessage)({id:FrinendlyMMRPro(mmrtolevel(e.mmr,seasonidToRankVer()),seasonidToRankVer(e.season))}),")"),_react.default.createElement("div",null,_react.default.createElement(_progress.default,{strokeColor:{from:"#4EEE94",to:"#4876FF"},percent:e.mmr/5e3*100,status:"active",showInfo:!1})),_react.default.createElement("div",null,(0,_locale.formatMessage)({id:"\u6700\u9ad8MMR\uff1a"}),e.max_mmr.toFixed(0)," ("," ",(0,_locale.formatMessage)({id:FrinendlyMMRPro(mmrtolevel(e.max_mmr,seasonidToRankVer()),seasonidToRankVer(e.season))})," ",")"),_react.default.createElement("div",null,_react.default.createElement(_progress.default,{strokeColor:{from:"#FFF68F",to:"#FF4500"},percent:e.max_mmr/5e3*100,status:"active",showInfo:!1})),_react.default.createElement("div",{style:{padding:"3px 0px"}}),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24},(0,_locale.formatMessage)({id:"\u5f03\u8d5b\uff1a"}),e.abandons,(0,_locale.formatMessage)({id:"\u6b21"})),_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u80dc\u7387\uff1a"}),e.wl,"%"),_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u5171\u8ba1\uff1a"}),e.pt,(0,_locale.formatMessage)({id:"\u6b21"})),_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u83b7\u80dc\uff1a"}),e.wins,(0,_locale.formatMessage)({id:"\u6b21"})),_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u8d1f\u8d25\uff1a"}),e.losses,(0,_locale.formatMessage)({id:"\u6b21"})))))}))))}setTimeout(function(){window.Fthis.setState({services:{Done:(new Date).getTime()}})},300);try{var d=((new Date).getTime()-window.resulted.rankStateTime)/375;d>80&&(d=(d-80)/5+80),d>97&&(d=99)}catch(e){d=0}return"undefined"!=typeof window.resulted.rankState&&"fail"==window.resulted.rankState?_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement("span",{style:{padding:25,margin:"auto",position:"absolute",top:20,left:0,bottom:0,right:0,height:130,textAlign:"center"}},_react.default.createElement(_progress.default,{type:"circle",percent:100,status:"exception",style:{padding:4,borderRadius:65,background:"#fff"}}),_react.default.createElement("div",{style:{height:10}}),_react.default.createElement("h1",null,(0,_locale.formatMessage)({id:"\u670d\u52a1\u5668\u8fd4\u56de\u4e86\u4e00\u4e2a\u9519\u8bef"})))):_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement("span",{style:{padding:25,margin:"auto",position:"absolute",top:20,left:0,bottom:0,right:0,height:130,textAlign:"center",maxWidth:500}},_react.default.createElement(_progress.default,{type:"circle",percent:parseInt(d),status:"active",style:{padding:4,borderRadius:65,background:"#fff"}}),_react.default.createElement("div",{style:{height:10}}),_react.default.createElement("h1",null,(0,_locale.formatMessage)({id:"\u8be5\u7528\u6237\u7684\u6392\u4f4d\u6570\u636e\u4ece\u672a\u88ab\u67e5\u8be2\u8fc7\uff0c\u6216\u6e38\u620f\u6765\u5230\u4e86\u65b0\u7684\u8d5b\u5b63\u3002\u6b64\u65f6\uff0c\u6392\u4f4d\u6570\u636e\u7684\u67e5\u8be2\u901f\u5ea6\u8f83\u6162\uff0c\u53ef\u80fd\u9700\u89811-2\u5206\u949f\uff0c\u8bf7\u7a0d\u540e..."}))))}return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},e)}},{key:"componentDidUpdate",value:function(){function e(){}window.onresize=function(){try{e()}catch(e){}var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})},e()}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);