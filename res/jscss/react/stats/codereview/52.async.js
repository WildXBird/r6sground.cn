(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{lxVk:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("PX3s");var o=n(a("SXFb"));a("Q1Fi");var u=n(a("7NCv"));a("Hq/V");var r=n(a("fAnr"));a("334S");var d=n(a("CzC8"));a("5hX3");var m=n(a("wjJH")),s=n(a("43Yg")),f=n(a("/tCh")),c=n(a("scpF")),i=n(a("O/V9")),g=n(a("8aBX"));a("08VQ");var y=n(a("5+Er")),v=l(a("FQm9")),E=y.default.Text,h=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,c.default)(this,(0,i.default)(t).call(this,e)),a.state={services:[{}],view:"type_a"},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){window.Fthis=this;v.default.createElement(m.default,{type:"loading"});return v.default.createElement("div",{style:{maxWidth:1850,height:window.innerHeight-64,overflow:"hidden",background:"white"}},v.default.createElement(o.default,{defaultActiveKey:"1",style:{padding:15}},v.default.createElement(o.default.TabPane,{tab:"\u89c6\u89c9",key:"1",style:{height:window.innerHeight-64-15-45,overflow:"overlay"}},v.default.createElement(u.default,null,v.default.createElement(r.default,{span:24,style:{marginBottom:15}},v.default.createElement(y.default.Title,{level:4,style:{marginTop:10}},"\u5b57\u578b"),v.default.createElement(d.default.Group,{defaultValue:localStorage.defaultFont||"serif",buttonStyle:"solid",onChange:function(e){localStorage.defaultFont=e.target.value,"serif"==e.target.value?document.getElementById("root").style.fontFamily="Calistoga,Noto Serif SC":document.getElementById("root").style.fontFamily="Noto Sans SC, sans-serif"}},v.default.createElement(d.default.Button,{value:"serif"},"\u886c\u7ebf\u7c7b"),v.default.createElement(d.default.Button,{value:"sans"},"\u975e\u886c\u7ebf\u7c7b")),v.default.createElement(y.default.Title,{level:4,style:{marginTop:10}},"\u9ed1\u6697\u6a21\u5f0f"),v.default.createElement(d.default.Group,{defaultValue:localStorage.enableNightMode||"false",buttonStyle:"solid",onChange:function(e){if(localStorage.enableNightMode=e.target.value,document.getElementsByTagName("html")[0].className=document.getElementsByTagName("html")[0].className.replace(" deep-dark-fantasy","").replace("deep-dark-fantasy",""),document.getElementsByTagName("html")[0].style.filter="","false"==e.target.value)document.getElementsByTagName("html")[0].style.filter="";else if("invert"==e.target.value){if("undefined"!=typeof window.userinfo&&!window.userinfo.prime)return void r6sgF.askForPrime();document.getElementsByTagName("html")[0].style.filter="",document.getElementsByTagName("html")[0].className=document.getElementsByTagName("html")[0].className+" deep-dark-fantasy",localStorage.NavThemeType="light",window.r6sgFunction.toggle.do()}else document.getElementsByTagName("html")[0].style.filter="brightness(35%) contrast(75%) saturate(140%)";window.Fthis.setState({services:{Done:(new Date).getTime()}})}},v.default.createElement(d.default.Button,{value:"false"},"\u505c\u7528"),v.default.createElement(d.default.Button,{value:"true"},"\u8499\u7248"),v.default.createElement(d.default.Button,{value:"invert"},"\u7eaf\u9ed1")),v.default.createElement("br",null),v.default.createElement(E,{type:"secondary"}),v.default.createElement(y.default.Title,{level:4,style:{marginTop:10}},"\u4fa7\u8fb9\u83dc\u5355\u989c\u8272"),v.default.createElement(d.default.Group,{defaultValue:localStorage.NavThemeType||"dark",buttonStyle:"solid",onChange:function(e){localStorage.NavThemeType=e.target.value,window.r6sgFunction.toggle.do(),"light"==e.target.value?document.getElementById("scrollbar-style-define-dark").innerHTML="":document.getElementById("scrollbar-style-define-dark").innerHTML=".ant-menu::-webkit-scrollbar-thumb{background-color:#8c8c8c;width: 0px}.ant-menu::-webkit-scrollbar-track-piece{background-color:#000c17}"}},v.default.createElement(d.default.Button,{value:"dark",disabled:"invert"==localStorage.enableNightMode},"\u6697\u8272"),v.default.createElement(d.default.Button,{value:"light",disabled:"invert"==localStorage.enableNightMode},"\u6d45\u8272")),v.default.createElement("br",null),v.default.createElement(E,{type:"secondary"}),v.default.createElement(y.default.Title,{level:4,style:{marginTop:10}},"\u8272\u76f2\u6a21\u5f0f"),v.default.createElement(d.default.Group,{defaultValue:localStorage.enableColorWeak||"false",buttonStyle:"solid",onChange:function(e){localStorage.enableColorWeak=e.target.value,"false"==e.target.value?document.getElementsByTagName("body")[0].className=document.getElementsByTagName("body")[0].className.replace("colorWeak",""):document.getElementsByTagName("body")[0].className=document.getElementsByTagName("body")[0].className+" colorWeak"}},v.default.createElement(d.default.Button,{value:"false"},"\u505c\u7528"),v.default.createElement(d.default.Button,{value:"true"},"\u542f\u7528")))))))}}]),t}(v.PureComponent),b=h;t.default=b}}]);