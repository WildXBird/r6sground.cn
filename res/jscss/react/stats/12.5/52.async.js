(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{I83f:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("g09b");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("MXD1");var _progress=_interopRequireDefault(__webpack_require__("CFYs"));__webpack_require__("Pwec");var _icon=_interopRequireDefault(__webpack_require__("CtXQ")),_classCallCheck2=_interopRequireDefault(__webpack_require__("2Taf")),_createClass2=_interopRequireDefault(__webpack_require__("vZ4D")),_inherits2=_interopRequireDefault(__webpack_require__("MhPg")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("l4Ni")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("ujKo"));__webpack_require__("tU7J");var _typography=_interopRequireDefault(__webpack_require__("wFql"));__webpack_require__("IzEo");var _card=_interopRequireDefault(__webpack_require__("bx4M")),_react=_interopRequireWildcard(__webpack_require__("q1tI")),_reactDom=_interopRequireDefault(__webpack_require__("i8i4")),_reactAdsense=_interopRequireDefault(__webpack_require__("6ldB")),_reactLoadScript=_interopRequireDefault(__webpack_require__("XDgv")),_locale=__webpack_require__("LLXN");function _getRequireWildcardCache(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(_getRequireWildcardCache=function(e){return e?i:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=_getRequireWildcardCache(t);if(i&&i.has(e))return i.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,i&&i.set(e,r),r}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var i,r=(0,_getPrototypeOf2.default)(e);if(t){var n=(0,_getPrototypeOf2.default)(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,i)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var Meta=_card.default.Meta,Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text,ubiLogo=function(){return _react.default.createElement("svg",{width:"64px",height:"64px",fill:"currentColor",viewBox:"0 0 1000 1000"},_react.default.createElement("path",{fill:"#000",id:"path3049",d:"m472.0782,5.000004c-309.95181,0 -443.739778,275.890154 -443.739778,275.890154l39.381843,28.191329c0,0 -49.557736,94.244479 -48.186337,215.125866c0,246.762817 196.431438,479.217662 485.593749,479.217662c262.694003,0 479.695184,-213.815304 479.695184,-478.611242c0,-345.353704 -267.809752,-519.813769 -512.744661,-519.813769zm2.688991,84.184744c242.164982,0 430.077646,195.145037 430.077646,422.010358c0,240.492382 -180.875585,407.741356 -391.649932,407.741356c-155.12353,0 -295.06032,-118.131815 -295.06032,-280.097023c0,-93.54813 49.721196,-158.76734 105.437616,-193.525719l8.153919,8.847645c-15.248177,11.930853 -58.725797,81.770156 -58.725797,150.414454c0,127.432401 99.93291,215.688821 225.838424,215.688821c160.382222,0 267.34548,-136.792939 267.34548,-295.62338c0,-184.798129 -163.120868,-341.685808 -359.424413,-341.685808c-108.576641,0 -200.730949,46.694628 -253.683332,87.91529l-8.240655,-7.459444c69.277367,-106.815175 189.246397,-174.22655 329.931365,-174.22655zm-72.257877,176.784874c125.269928,0 247.573989,82.874032 278.101968,200.509439l-11.103359,4.206869c-54.813999,-72.384137 -144.629484,-132.37144 -250.690667,-132.37144c-195.165106,0 -297.659457,177.344681 -282.612496,325.463852l-11.49362,4.207469c0,0 -21.555977,-47.56334 -21.555977,-103.963233c0,-163.32643 134.126565,-298.052956 299.354151,-298.052956zm82.797292,204.976053c59.30915,0 106.738781,48.070688 106.738781,105.134406c0,47.22281 -30.31714,75.207452 -30.31714,75.207452l35.912,25.112466c0,0 -35.611069,55.907084 -108.299975,55.907084c-69.53257,0 -131.02708,-56.122313 -131.02708,-131.591458c0,-77.764577 66.890477,-129.76995 126.993413,-129.76995z"}))},thisFile;function \u5b57\u8282\u5230\u5146(e){return(e/1e6).toFixed(2)}function getData(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=(new Date).valueOf();thisFile={},thisFile.ThisTitle="\u6b63\u5728\u5f00\u59cb",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",window.Fthis.setState({services:{Done:new Date}});var r=new XMLHttpRequest;r.open("GET","https://promotion.r6sground.cn/resources-relay/"+e+"/",!0),r.send(),r.onreadystatechange=function(){if(4==r.readyState)if(r.status>=200&&r.status<300)try{var e=JSON.parse(r.responseText);if(!t){console.log("!cdn");var n=document.createElement("a"),a=e.name;return n.href=e.url,n.download=a,n.click(),n.remove(),thisFile.ThisTitle="\u6682\u65e0\u4e0b\u8f7d\u4efb\u52a1",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",void window.Fthis.setState({services:{Done:new Date}})}thisFile.MD5=e.MD5.toUpperCase(),r.open("GET","https://"+resCdn+"/gh/xieqiqiang00/r6sground.cn/CDN/resources-relay/"+thisFile.MD5+"/manifest.json",!0),r.send(),r.onreadystatechange=function(){if(4==r.readyState&&r.status>=200&&r.status<300)try{(function(){var e=JSON.parse(r.responseText);thisFile.ThisTitle="\u89e3\u6790\u8d44\u6e90",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",window.Fthis.setState({services:{Done:new Date}});var t=0,n=0;for(var a in e["list"])n+=1;var s=0,o={},l=function(e,t){if("undefined"==typeof o[t]){o[t]=parseInt(e);var i=0;for(var r in o)i+=o[r];s=i,console.log("\u603b\u6587\u4ef6\u4e0b\u8f7d\u5927\u5c0f:"+i)}},c={},u=function(e,t){c[t]=parseInt(e);var r=0;for(var n in c)r+=c[n];console.log(e+"\uff1a\u6b63\u5728\u4e0b\u8f7d:"+r),thisFile.ThisTitle="\u6b63\u5728\u4e0b\u8f7d",thisFile.ThisPercent=(r/s*100).toFixed(0);var a=(new Date).valueOf()-i,o=r,l=o/a,u=s-o,_=u/l;thisFile.ThisTimeLeft=(_/1e3).toFixed(0),thisFile.ThisFileCount=\u5b57\u8282\u5230\u5146(r)+"MB / "+\u5b57\u8282\u5230\u5146(s)+"MB",100==thisFile.ThisPercent&&(thisFile.ThisTitle="\u4e0b\u8f7d\u5b8c\u6210",setTimeout(function(){thisFile.ThisTitle="\u6682\u65e0\u4e0b\u8f7d\u4efb\u52a1",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",window.Fthis.setState({services:{Done:new Date}})},3e3)),window.Fthis.setState({services:{Done:new Date}})},_={},d=-1,f=function(i){d+=1;var r=parseInt(d);console.log("\u5f53\u524d\u6587\u4ef6\u5e8f\u53f7:"+d+"/"+e["list"][i]+"/"+n);var a=new XMLHttpRequest,s="https://cdn.jsdelivr.net/gh/xieqiqiang00/r6sground.cn/CDN/resources-relay/"+thisFile.MD5+"/"+e["list"][i];a.open("GET",s,!0),a.responseType="arraybuffer",t+=1,thisFile.ThisTitle="\u8fde\u63a5\u5230\u8282\u70b9("+t+"/"+n+")",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",window.Fthis.setState({services:{Done:new Date}}),a.send(),a.onprogress=function(e){l(e.total,i),u(e.loaded,i)},a.onreadystatechange=function(){if(4==a.readyState&&(console.log(a),a.status>=200&&a.status<300)){var t=a.response;_[r]={},_[r].blob=t,_[r].name=e["list"][i],_[r].url=s,console.log(_);var o=0;for(var l in _)o+=1;if(console.log("\u5df2\u4e0b\u8f7d\u6587\u4ef6\u6570count:"+o),o==n){var c;function u(e,t){var i=new Uint8Array(e.byteLength+t.byteLength);return i.set(new Uint8Array(e),0),i.set(new Uint8Array(t),e.byteLength),i}for(var d in console.log("\u4e0b\u8f7d\u5b8c\u6210"),console.log(_),_)console.log("\u5f53\u524d\u6587\u4ef6\uff1a"+_[d].name),"undefined"==typeof c?(console.log("\u6587\u4ef6\u5934\uff1a"+_[d].name),c=_[d].blob):(console.log("\u8ffd\u52a0\u6587\u4ef6"+_[d].name),c=u(c,_[d].blob));function f(e,t){var i=document.createElement("a");i.setAttribute("download",t);var r=new Blob([e],{type:""});i.setAttribute("href",URL.createObjectURL(r)),document.body.appendChild(i),i.click(),document.body.removeChild(i)}f(c,"UplayInstaller.exe")}}}};for(var h in e["list"])f(h)})()}catch(e){console.debug(e),thisFile.ThisTitle="\u8d44\u6e90\u4e0d\u53ef\u7528",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",window.Fthis.setState({services:{Done:new Date}})}}}catch(e){console.debug(e),thisFile.ThisTitle="\u516d\u53f7\u6218\u573a\u670d\u52a1\u5668\u51fa\u9519",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",window.Fthis.setState({services:{Done:new Date}})}else thisFile.ThisTitle="\u8d44\u6e90\u89e3\u6790\u5931\u8d25",thisFile.ThisPercent=0,thisFile.ThisTimeLeft=0,thisFile.ThisFileCount="0/0",window.Fthis.setState({services:{Done:new Date}})}}var ServiceList=function(_PureComponent){(0,_inherits2.default)(ServiceList,_PureComponent);var _super=_createSuper(ServiceList);function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=_super.call(this,e),t.state={services:[{}],view:"type_a"},t}return(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){if("undefined"!=typeof window.needjs)eval(window.needjs),window.Fthis.setState({services:{Done:new Date}});else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+window.selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),window.Fthis.setState({services:{Done:new Date}}))}}}},{key:"render",value:function(){window.Fthis=this;var e,t,i,r,n=_react.default.createElement(_icon.default,{type:"loading"});return"undefined"!=typeof this.state.services.Done||"true"==this.state.services.Done?("undefined"==typeof thisFile?(e="\u6682\u65e0\u4e0b\u8f7d\u4efb\u52a1",t=0,i=0,r="0/0"):(e=thisFile.ThisTitle,t=thisFile.ThisPercent,i=thisFile.ThisTimeLeft,r=thisFile.ThisFileCount),_react.default.createElement("div",{style:{margin:20}},_react.default.createElement(_card.default,{style:{width:"100%",marginTop:16},loading:!1},_react.default.createElement(Meta,{avatar:_react.default.createElement(_icon.default,{type:"cloud-server",style:{fontSize:"32px"}}),title:e,description:_react.default.createElement("span",null,_react.default.createElement("div",null,_react.default.createElement(_progress.default,{percent:t,strokeColor:{"0%":"#5EFCE8","100%":"#736EFE"},style:{paddingRight:10}})),_react.default.createElement("div",null,"\u9884\u8ba1\u5269\u4f59\u65f6\u95f4 ",i," \u79d2"),_react.default.createElement("div",null,r))})),_react.default.createElement(_card.default,{style:{width:300,marginTop:16},actions:[_react.default.createElement("span",{onClick:function(){getData("UplayInstaller",!1)}},_react.default.createElement(_icon.default,{type:"download",key:"setting"})," \u666e\u901a\u4e0b\u8f7d"),_react.default.createElement("span",{onClick:function(){getData("UplayInstaller",!0)}},_react.default.createElement(_icon.default,{type:"cloud-download",key:"setting"})," \u9ad8\u901f\u4e0b\u8f7d")]},_react.default.createElement(Meta,{avatar:_react.default.createElement(_icon.default,{component:ubiLogo}),title:"UPLAY \u5b89\u88c5\u7a0b\u5e8f",description:"V101.0 (\u6700\u65b0\u7248)"})))):_react.default.createElement("div",null,n)}},{key:"componentWillUnmount",value:function(){window.potato=void 0,window.myChart=void 0,window.onresize=void 0,this.state.services=void 0}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);