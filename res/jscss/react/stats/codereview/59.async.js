(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{ebDB:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("1hTB");var _table=_interopRequireDefault(__webpack_require__("KFXw"));__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W"));__webpack_require__("0NfI");var _tooltip=_interopRequireDefault(__webpack_require__("ZHzj"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("I4dy");var _datePicker=_interopRequireDefault(__webpack_require__("+qVy")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_locale=__webpack_require__("TJP2"),MonthPicker=_datePicker.default.MonthPicker,RangePicker=_datePicker.default.RangePicker,WeekPicker=_datePicker.default.WeekPicker,requestProfileId,ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Weapon",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&"undefined"!=typeof window.resulted.profile_id&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var r="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,r);var a=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6b66\u5668\u6570\u636e"})+" "+document.title.replace(a,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&xhr.status>=200&&xhr.status<300&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6b66\u5668\u6570\u636e"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){var e=_react.default.createElement(_icon.default,{type:"loading"});if(window.RequireWEAPONTABLE=!0,"undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done){if("undefined"==typeof window.resulted||"undefined"==typeof window.resulted.profile_id){try{window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}catch(e){window.Fthis.props.history.replace("/search/?profileid=")}return"holding"}var t,r=[{title:(0,_locale.formatMessage)({id:"\u6b66\u5668"}),dataIndex:"name",sorter:function(e,t){return e.id-t.id},width:150,fixed:"left",filters:[{text:(0,_locale.formatMessage)({id:"300\u573a\u4ee5\u4e0a"}),value:"300"},{text:(0,_locale.formatMessage)({id:"1000\u573a\u4ee5\u4e0a"}),value:"1000"},{text:(0,_locale.formatMessage)({id:"2500\u573a\u4ee5\u4e0a"}),value:"2500"}],filterMultiple:!1,onFilter:function(e,t){return!(t.select<e)}},{title:(0,_locale.formatMessage)({id:"\u4e0a\u573a"}),dataIndex:"select",sortDirections:["descend","ascend"],sorter:function(e,t){return e.select-t.select},width:90},{title:(0,_locale.formatMessage)({id:"\u51fb\u6740"}),dataIndex:"kill",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.kill-t.kill},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:90}()},{title:(0,_locale.formatMessage)({id:"\u6b7b\u4ea1"}),dataIndex:"death",sortDirections:["descend","ascend"],sorter:function(e,t){return e.death-t.death},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:90}()},{title:(0,_locale.formatMessage)({id:"K/D"}),dataIndex:"kd",sortDirections:["descend","ascend"],sorter:function(e,t){return e.kd-t.kd},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:90}()},{title:(0,_locale.formatMessage)({id:"KPR"}),dataIndex:"kpr",sortDirections:["descend","ascend"],sorter:function(e,t){return e.kpr-t.kpr},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:90}()},{title:(0,_locale.formatMessage)({id:"SPR"}),dataIndex:"spr",sortDirections:["descend","ascend"],sorter:function(e,t){return e.spr-t.spr},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:90}()},{title:(0,_locale.formatMessage)({id:"\u7206\u5934"}),dataIndex:"hs",sortDirections:["descend","ascend"],sorter:function(e,t){return e.hs-t.hs},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:90}()},{title:(0,_locale.formatMessage)({id:"\u7206\u5934\u7387"}),dataIndex:"vhs",sortDirections:["descend","ascend"],sorter:function(e,t){return parseInt(e.vhs)-parseInt(t.vhs)},width:function(){return"zh-CN"==(0,_locale.getLocale)()?90:110}()},{title:(0,_locale.formatMessage)({id:"\u51fb\u4e2d"}),dataIndex:"hit",sortDirections:["descend","ascend"],sorter:function(e,t){return e.hit-t.hit},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:80}()},{title:(0,_locale.formatMessage)({id:"\u5747\u8017"}),dataIndex:"phit",sortDirections:["descend","ascend"],sorter:function(e,t){return t.phit-e.phit},width:function(){return"zh-CN"==(0,_locale.getLocale)()?70:110}()},{title:(0,_locale.formatMessage)({id:"Dpr"}),dataIndex:"dpr",sortDirections:["descend","ascend"],sorter:function(e,t){return e.dpr-t.dpr},width:function(){return"zh-CN"==(0,_locale.getLocale)()?90:100}()},{title:(0,_locale.formatMessage)({id:"\u4e3b/\u526f"}),dataIndex:"main",filters:[{text:(0,_locale.formatMessage)({id:"\u4e3b\u6b66\u5668"}),value:(0,_locale.formatMessage)({id:"\u4e3b\u6b66\u5668"})},{text:(0,_locale.formatMessage)({id:"\u526f\u6b66\u5668"}),value:(0,_locale.formatMessage)({id:"\u526f\u6b66\u5668"})}],filterMultiple:!0,onFilter:function(e,t){return console.log("value",e),console.log("record",t),t.main==e},width:function(){return"zh-CN"==(0,_locale.getLocale)()?90:130}()},{title:(0,_locale.formatMessage)({id:"\u7c7b\u578b"}),dataIndex:"type",filters:[{text:(0,_locale.formatMessage)({id:"\u51b2\u950b\u67aa"}),value:(0,_locale.formatMessage)({id:"\u51b2\u950b\u67aa"})},{text:(0,_locale.formatMessage)({id:"\u7a81\u51fb\u6b65\u67aa"}),value:(0,_locale.formatMessage)({id:"\u7a81\u51fb\u6b65\u67aa"})},{text:(0,_locale.formatMessage)({id:"\u8f7b\u673a\u67aa"}),value:(0,_locale.formatMessage)({id:"\u8f7b\u673a\u67aa"})},{text:(0,_locale.formatMessage)({id:"\u72d9\u51fb\u67aa"}),value:(0,_locale.formatMessage)({id:"\u72d9\u51fb\u67aa"})},{text:(0,_locale.formatMessage)({id:"\u534a\u81ea\u52a8\u624b\u67aa"}),value:(0,_locale.formatMessage)({id:"\u534a\u81ea\u52a8\u624b\u67aa"})},{text:(0,_locale.formatMessage)({id:"\u5168\u81ea\u52a8\u624b\u67aa"}),value:(0,_locale.formatMessage)({id:"\u5168\u81ea\u52a8\u624b\u67aa"})},{text:(0,_locale.formatMessage)({id:"\u9730\u5f39\u67aa"}),value:(0,_locale.formatMessage)({id:"\u9730\u5f39\u67aa"})}],filterMultiple:!0,onFilter:function(e,t){return t.type==e},width:function(){return"zh-CN"==(0,_locale.getLocale)()?90:150}()},{title:(0,_locale.formatMessage)({id:"\u5e72\u5458"}),dataIndex:"operator"}];if("undefined"!=typeof resulted.temp.weaponCardData)t=resulted.temp.weaponCardData;else{var a=[];for(var i in window.WeapList){var o={};if(o.id=i,o.name=window.WeapList[i],o.select=FetchOpeInfo(i,"uweapon_select",window.resulted,!0),o.select>0){for(var n in o.kill=FetchOpeInfo(i,"uweapon_kill",window.resulted,!0),o.death=FetchOpeInfo(i,"uweapon_death",window.resulted,!0),o.kd=(o.kill/dezero(o.death)).toFixed(2),o.kpr=(o.kill/dezero(o.select)).toFixed(2),o.spr=((o.select-o.death)/dezero(o.select)).toFixed(2),o.hs=FetchOpeInfo(i,"uweapon_head",window.resulted,!0),o.vhs=(o.hs/dezero(o.kill)*100).toFixed(2)+"%",o.hit=FetchOpeInfo(i,"uweapon_phit",window.resulted,!0),o.vhit=(1-o.kill/dezero(o.hit)).toFixed(2),o.phit=(o.hit/dezero(o.kill)).toFixed(2),o){var d=o[n];"undefined"!=typeof d?("number"!=typeof d&&(d=d.replace("/","").replace("%","")),(d<0||"NaN"==d||""==d)&&(o[n]=0)):o[n]=0}if(void 0!=typeof window.readCSV){o.main=(0,_locale.formatMessage)({id:String(window.readCSV(o.name,"\u4f4d\u7f6e","weapon")).replace("1","\u4e3b\u6b66\u5668").replace("2","\u526f\u6b66\u5668")}),o.type=(0,_locale.formatMessage)({id:String(window.readCSV(o.name,"\u7c7b\u578b","weapon"))}),o.d0=String(window.readCSV(o.name,"\u4f24\u5bb3","weapon"));var l="";"undefined"!=typeof window.readCSV(o.name,"\u4f24\u5bb31","weapon")&&""!=window.readCSV(o.name,"\u4f24\u5bb31","weapon")&&(l=l+"\u666e\u901a\u67aa\u53e3\uff1a"+window.readCSV(o.name,"\u4f24\u5bb31","weapon")+"<br>"),"undefined"!=typeof window.readCSV(o.name,"\u4f24\u5bb33","weapon")&&""!=window.readCSV(o.name,"\u4f24\u5bb33","weapon")&&(l=l+"\u6d88\u97f3\u5668\uff1a"+window.readCSV(o.name,"\u4f24\u5bb33","weapon")+"<br>"),"undefined"!=typeof window.readCSV(o.name,"\u4f24\u5bb35","weapon")&&""!=window.readCSV(o.name,"\u4f24\u5bb35","weapon")&&(l=l+"\u5ef6\u957f\u67aa\u7ba1\uff1a"+window.readCSV(o.name,"\u4f24\u5bb35","weapon")+"<br>"),o.d1=_react.default.createElement(_tooltip.default,{title:_react.default.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),autoAdjustOverflow:!0},o.d0),o.speed=String(window.readCSV(o.name,"\u5c04\u901f","weapon")),""==o.speed&&(o.speed=0),o.dps=parseInt(parseInt(o.d0)*parseInt(o.speed)/60),"NaN"==String(o.dps)&&(o.dps=0),o.mag=String(window.readCSV(o.name,"\u5f39\u836f","weapon")),o.operator=String(window.readCSV(o.name,"\u5e72\u5458","weapon"));var s=String(window.readCSV(o.name,"\u5e72\u5458","weapon")).split("/");o.operator=_react.default.createElement("span",null,Array.from(s).map(function(e,t){return _react.default.createElement(_avatar.default,{src:R6opeIdToOpeIcon(R6openameToOpeId(e)),id:e})})),o.dpr=parseInt(o.hit/o.select*o.d0),"NaN"==String(o.dpr)&&(o.dpr=0),o.move=String(window.readCSV(o.name,"\u673a\u52a8","weapon"))}a.push(o)}}t=resulted.temp.weaponCardData=a}return _react.default.createElement("div",null,_react.default.createElement(_table.default,{columns:r,dataSource:t,scroll:{x:function(){return"zh-CN"==(0,_locale.getLocale)()?1400:1650}(),y:window.innerHeight-64,scrollToFirstRowOnChange:!0},pagination:!1,bordered:!0,size:"small",align:"center"}))}return _react.default.createElement("span",null,e)}},{key:"componentDidUpdate",value:function(){function e(){try{var e=window.innerHeight-37-3-document.getElementsByClassName("ant-layout-header")[0].offsetHeight;document.getElementsByClassName("ant-table-body")[0].style.maxHeight=e+"px",document.getElementsByClassName("ant-table-body-inner")[0].style.maxHeight=e+"px"}catch(e){}}window.onresize=function(){try{e()}catch(e){}var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})},e()}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);