(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{QRTk:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_g2React=_interopRequireDefault(__webpack_require__("a6n9")),_g=__webpack_require__("1zR+"),_locale=__webpack_require__("TJP2"),Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text;function getData(){var e=new XMLHttpRequest;if(e.open("GET","https://promotion.r6sground.cn/potato/720.txt",!1),e.send(),200==e.status){for(var t in window.potato={},window.potato.raw=JSON.parse(e.responseText),window.potato.ubi=[],window.potato.hk={},window.potato.hk.max=[],window.potato.hk.avg=[],window.potato.hk.los=[],window.potato.jp={},window.potato.jp.avg=[],window.potato.us={},window.potato.us.avg=[],window.potato.raw){var a=window.potato.raw[t];"undefined"!=typeof a.st&&"undefined"!=a.st&&(window.potato.ubi.push([a.st,a.UBITime]),window.potato.hk.max.push([a.st,a.PmaxH]),window.potato.hk.avg.push([a.st,parseInt((parseInt(a.PavgH)+parseInt(a.PmaxH))/2)]),window.potato.hk.los.push([a.st,a.PlosH/1]))}return window.potato.ubi=window.potato.ubi.reverse(),window.potato.hk.max=window.potato.hk.max.reverse(),window.potato.hk.avg=window.potato.hk.avg.reverse(),window.potato.hk.los=window.potato.hk.los.reverse(),!0}}function createTablePOT(){var e=new Date((new Date).valueOf()-36e5).toLocaleString().replace(/pm/i,"").replace(/am/i,"").replace("\u4e0b\u5348","").replace("\u4e0a\u5348","").replace("/","-").replace("/","-");console.log(e);var t=window.potato.hk.max;console.log(t);var a=echarts.init(document.getElementById("c1")),o={title:{text:""},tooltip:{trigger:"axis"},xAxis:{data:t.map(function(e){return e[0]})},yAxis:{splitLine:{show:!1}},toolbox:{left:"center",feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},dataZoom:[{startValue:"2019-06-02"},{type:"inside"}],visualMap:{top:10,right:10,pieces:[{gt:0,lte:50,color:"#096"},{gt:50,lte:80,color:"#66CD00"},{gt:80,lte:100,color:"#ff9933"},{gt:100,lte:150,color:"#cc0033"},{gt:150,color:"#660099"}],outOfRange:{color:"#999"}},series:[{name:(0,_locale.formatMessage)({id:"\u6700\u574f\u5ef6\u8fdf"}),type:"line",data:window.potato.hk.max.map(function(e){return e[1]}),markLine:{silent:!0,data:[{yAxis:50},{yAxis:80},{yAxis:100},{yAxis:150},{yAxis:200}]}},{name:(0,_locale.formatMessage)({id:"\u5e73\u5747\u5ef6\u8fdf"}),type:"line",data:window.potato.hk.avg.map(function(e){return e[1]})},{name:(0,_locale.formatMessage)({id:"\u4e22\u5305\u7387"}),type:"line",data:window.potato.hk.los.map(function(e){return e[1]})}]};a.setOption(o),window.onresize=function(){a.resize()}}var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){if("undefined"!=typeof window.needjs)eval(window.needjs),getData(),window.Fthis.setState({services:{Done:!0}});else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+window.selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),getData(),window.Fthis.setState({services:{Done:!0}}))}}}},{key:"render",value:function(){window.Fthis=this;var e=_react.default.createElement(_icon.default,{type:"loading"});return"undefined"!=typeof this.state.services.Done||"true"==this.state.services.Done?_react.default.createElement("div",{style:{margin:20}},_react.default.createElement(Title,{level:2,style:{textAlign:"center",fontWeight:500}},(0,_locale.formatMessage)({id:"\u571f\u8c46\u68c0\u6d4b\u5668"})),_react.default.createElement(Title,{level:4,style:{textAlign:"center",fontWeight:100}},(0,_locale.formatMessage)({id:"\u4e0a\u6d77\u7535\u4fe1 \u81f3 \u5f69\u8679\u516d\u53f7EAS"})),_react.default.createElement("br",null),_react.default.createElement(_reactLoadScript.default,{url:"https://r6sground.cn/r6-db-info/r6-server/?echarts/echarts.js",onLoad:function(e){return createTablePOT()}}),_react.default.createElement("div",{id:"c1",style:{widht:"100%",height:500}},e),_react.default.createElement(Text,{style:{textAlign:"center",width:"100%"}},(0,_locale.formatMessage)({id:"\u571f\u8c46\u68c0\u6d4b\u5668 \u8bb0\u5f55\u4e86\u8282\u70b9\u4e4b\u95f4\u7684\u5ef6\u8fdf\u4e0e\u4e22\u5305\u7387\uff0c\u53ef\u4ee5\u771f\u5b9e\u7684\u53cd\u5e94\u67d0\u4e2a\u65f6\u6bb5\u4e2d\u6e38\u620f\u7684\u7f51\u7edc\u8d28\u91cf"}))):_react.default.createElement("div",null,e)}},{key:"componentWillUnmount",value:function(){window.potato=void 0,window.myChart=void 0,window.onresize=void 0,this.state.services=void 0}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);