(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{sv8h:function(n,s,t){"use strict";var p=t("g09b");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=p(t("2Taf")),o=p(t("vZ4D")),r=p(t("MhPg")),e=p(t("l4Ni")),l=p(t("ujKo"));t("iQDF");var F=p(t("+eQT")),i=f(t("q1tI"));function c(n){if("function"!==typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(c=function(n){return n?t:s})(n)}function f(n,s){if(!s&&n&&n.__esModule)return n;if(null===n||"object"!==typeof n&&"function"!==typeof n)return{default:n};var t=c(s);if(t&&t.has(n))return t.get(n);var p={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in n)if("default"!==o&&Object.prototype.hasOwnProperty.call(n,o)){var r=a?Object.getOwnPropertyDescriptor(n,o):null;r&&(r.get||r.set)?Object.defineProperty(p,o,r):p[o]=n[o]}return p.default=n,t&&t.set(n,p),p}function b(n){var s=u();return function(){var t,p=(0,l.default)(n);if(s){var a=(0,l.default)(this).constructor;t=Reflect.construct(p,arguments,a)}else t=p.apply(this,arguments);return(0,e.default)(this,t)}}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}F.default.MonthPicker,F.default.RangePicker,F.default.WeekPicker;var d=function(n){(0,r.default)(t,n);var s=b(t);function t(n){var p;return(0,a.default)(this,t),p=s.call(this,n),p.state={services:[{}],view:"type_a"},p}return(0,o.default)(t,[{key:"render",value:function(){var n='\n    <p>\n    <h1>\n  2020\u5e743\u670815\u65e5&nbsp;\n  </h1>\n  <br />\n  \u516d\u53f7\u6218\u573aV10.5<br />\n1.\u4fee\u590d\u4e86\u51e0\u4e2a\u4f1a\u5bfc\u81f4\u5e73\u53f0\u5d29\u6e83\u767d\u5c4f\u7684BUG<br />\n2.\u6dfb\u52a0\u9996\u9875\u901a\u77e5\u680f<br />\n3.\u670d\u52a1\u5668\u72b6\u6001\u5feb\u7167\u529f\u80fd\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65f6\u95f4\u6233<br />\n4.\u5f53\u53d1\u5e03\u65b0\u7248\u672c\u65f6\uff0c\u73b0\u5728\u516d\u53f7\u6218\u573a\u4f1a\u5f3a\u5236\u6e05\u7a7a\uff0c\u964d\u4f4e\u4e86\u5d29\u6e83\u98ce\u9669\u3002<br />\n5.\u53f3\u4e0a\u89d2\u7684\u91cd\u8f7dUI\u529f\u80fd\u73b0\u5728\u4f1a\u6e05\u7a7a\u7f13\u5b58<br />\n6.\u4fee\u590dBUG<br />\n\t<div>\n\t\t<br />\n\t</div>\n</p>   \n  <p>\n    <h1>\n  2020\u5e743\u670814\u65e5&nbsp;\n  </h1>\n  <br />\n  \u516d\u53f7\u6218\u573aV10.4<br />\n1.\u4fee\u6539\u548c\u65b0\u589e\u4e86\u5927\u91cf\u6587\u672c\u7ffb\u8bd1<br />\n2.\u5bf9\u6218\u7ee9\u67e5\u8be2\u51fa\u9519\u540e\u7684\u5904\u7406\u65b9\u6cd5\u505a\u4e86\u8c03\u6574<br />\n3.\u4fee\u590d\u591a\u5904\u6392\u7248\u9519\u8bef<br />\n4.\u4fee\u590d\u4e86\u5e7f\u544a\u592a\u5c11\u7684BUG<br />\n5.\u6bd4\u8d5b\u62a5\u544a\u4e2d\u7684\u5e72\u5458\u9875\u65b0\u589e\u5e72\u5458\u5934\u50cf<br />\n6.\u571f\u8c46\u68c0\u6d4b\u5668\u73b0\u5728\u68c0\u6d4b\u4e865\u79cd\u4e0d\u540c\u7684\u8282\u70b9<br />\n7.\u9996\u9875\u65b0\u589e\u670d\u52a1\u5668\u72b6\u6001<br />\n8.\u4fee\u590d\u5927\u91cfBUG<br />\n9.\u65b0\u589e\u5927\u91cfBUG<br />\n\t<div>\n\t\t<br />\n\t</div>\n</p>    \n <p>\n    <h1>\n  2020\u5e741\u670812\u65e5&nbsp;\n  </h1>\n  <br />\n1.\u4e0a\u7ebf\u5546\u5e97<br />\n2.\u4e0a\u7ebfPrime\u4f1a\u5458\u8ba2\u9605<br />\n3.\u5bf9\u4e8e\u975ePrime\u4f1a\u5458\u7684\u6743\u9650\u8fdb\u884c\u4e86\u8c03\u6574\uff08\u4ec5\u9650\u4e2d\u56fd\u5927\u9646\u533a\u57df\uff09<br />\n4.\u4fee\u590d\u82e5\u5e72bug<br />\n\t<div>\n\t\t<br />\n\t</div>\n</p> \n   <p>\n<h1>\n2019\u5e7412\u670816\u65e5&nbsp;\n</h1>\n<br />\n1.\u4fee\u590d\u4e00\u4e2a\u6f5c\u5728\u7684\u8d26\u6237\u5b89\u5168\u95ee\u9898<br />\n2.\u505c\u7528QQ\u4e92\u8054\u767b\u5f55\u529f\u80fd\uff0c\u7cbe\u7b80\u8d26\u6237\u4f53\u7cfb\u3002<br />\n3.\u6e05\u7a7a\u539f\u6709\u7684\u7528\u6237\u8d26\u6237\uff08\u6e38\u620f\u6570\u636e\u4efb\u7136\u4fdd\u7559\uff09<br />\n4.\u4fee\u590d\u804c\u4e1a\u8054\u8d5b\u9875\u4e0d\u66f4\u65b0\u7684\u95ee\u9898<br />\n5.\u4fee\u590d\u804c\u4e1a\u8054\u8d5b\u9875\u5e72\u5458\u7981\u7528\u6c38\u8fdc\u663e\u793a\u201c\u6d77\u5cb8\u7ebf\u201d<br />\n6.\u6dfb\u52a0\u5e7f\u544a\u82e5\u5e72<br />\n7.\u4fee\u590dR6\u76d2\u5b50\u6c38\u8fdc\u663e\u793a\u5bc6\u7801\u88ab\u4fee\u6539\u7684\u95ee\u9898<br />\n8.\u4fee\u590dR6\u76d2\u5b50\u9996\u6b21\u767b\u9646\u540e\u4e0d\u80fd\u6b63\u786e\u8df3\u8f6c\u5230\u4e3b\u9875\u7684\u95ee\u9898<br />\n9.\u4fee\u590dR6\u76d2\u5b50\u5176\u4ed6\u95ee\u9898\u82e5\u5e72<br />\n10."\u5e73\u5747\u5bf9\u5c40\u6c34\u5e73"\u529f\u80fd\u91cd\u65b0\u4e0a\u7ebf<br />\n11.\u4fee\u590d\u4e00\u4e2a\u53ef\u80fd\u5bfc\u81f4\u670d\u52a1\u5668\u6027\u80fd\u4e0b\u964d\u7684\u95ee\u9898<br />\n<div>\n<br />\n</div>\n</p>\n    <p>\n    <h1>\n  2019\u5e7411\u67084\u65e5&nbsp;\n  </h1>\n  <br />\n1.\u4fee\u590d\u4e3b\u673a\u73a9\u5bb6\u5982\u679c\u6635\u79f0\u77ed\u4e8e3\u4e2a\u5b57\u7b26\u4f1a\u65e0\u6cd5\u67e5\u8be2\u6218\u7ee9\u7684\u95ee\u9898\u3002<br />\n2.\u4fee\u590d\u4f4e\u51e0\u7387\u51fa\u73b0\u660e\u660e\u5df2\u7ecf\u663e\u793a\u6218\u7ee9\u5374\u8bf4\u65e0\u6cd5\u8d44\u6599\u4e0d\u5b58\u5728\u7684\u95ee\u9898\u3002<br />\n3.\u65b0\u589e\u8d26\u6237\u8d44\u6599\u9875\u53ef\u4ee5\u770b\u5230\u73a9\u5bb6\u7684\u6e38\u620f\u5e93\u5185\u5bb9\u548c\u5173\u8054\u8d26\u6237\uff08\u5982steam\uff09\u3002<br />\n\t<div>\n\t\t<br />\n\t</div>\n</p>\n\n    <h1>\n    <span>2019</span>\u5e74<span>10</span>\u6708<span>31</span>\u65e5\n  \u516d\u53f7\u6218\u573a\u4e07\u5723\u8282\u5927\u66f4\u65b0\n  </h1>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    1.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u4fee\u590d<span>] </span>\u5f53\u7528\u6237\u6635\u79f0\u4e2d\u5305\u542b\u591a\u4e2a\u4e2d\u6587\u6c49\u5b57\u65f6\uff0c\u56e0\u4e3a\u4e00\u4e2a\u4e2d\u6587\u5b57\u88ab\u5f53\u6210\u591a\u4e2a\u5b57\u7b26\u800c\u89e6\u53d1\u201c<span>Illegal input (too long)</span>\u201d\u7684\u9519\u8bef\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    2.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u6539\u8fdb<span>] </span>\u516d\u53f7\u6218\u573a\u4e0e\u80b2\u78a7\u6570\u636e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7ebf\u8def\u4f18\u5316\uff0c\u65b0\u589e<span>CN2</span>\u7ebf\u8def\uff0c\u5927\u5927\u63d0\u9ad8\u901a\u4fe1\u7a33\u5b9a\u6027\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    3.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u6539\u8fdb<span>] </span>\u91cd\u65b0\u542f\u7528<span>CDN</span>\u5168\u7403\u52a0\u901f\uff0c\u964d\u4f4e\u6d77\u5916\u7528\u6237\u8bbf\u95ee\u5ef6\u8fdf\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    4.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u65b0\u589e<span>] </span>\u73b0\u5728\u65b0\u8fdb\u5e72\u5458\u4e5f\u52a0\u5165\u4e86\u201c\u80fd\u529b\u900f\u89c6\u201d\uff0c\u53ef\u4ee5\u5728\u201c\u4e0a\u573a\u80dc\u7387\u201d\u4e2d\u770b\u5230\u5c0f\u53ee\u5f53\u7684\u4f4d\u7f6e\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    5.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u4e0b\u7ebf<span>] </span>\u56e0\u4e3a\u6392\u7248\u4e0a\u5e26\u6765\u7684\u6311\u6218\u592a\u5927\uff0c\u6682\u65f6\u4e0b\u7ebf\u65e5\u8bed\u8bed\u8a00\u5305\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    6.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u6539\u8fdb<span>] </span>\u4fee\u6539\u4e86\u5927\u91cf\u7e41\u4f53\u4e2d\u6587<span>(</span>\u53f0\u6e7e<span>)</span>\u548c\u82f1\u8bed<span>(</span>\u7f8e\u56fd<span>)</span>\u7684\u7ffb\u8bd1\u5185\u5bb9\uff0c\u586b\u5145\u4e86\u5927\u91cf\u9057\u6f0f\u7684\u672a\u7ffb\u8bd1\u5185\u5bb9\uff0c\u5e76\u4e14\u73b0\u5728\u7ffb\u8bd1\u5185\u5bb9\u66f4\u52a0\u672c\u5730\u5316\uff08\u8fd8\u662f\u6709\u9057\u6f0f\u7684\u5730\u65b9\uff0c\u4f1a\u5c3d\u5feb\u8865\u4e0a\uff09\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    7.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u65b0\u589e<span>] </span>\u80fd\u529b\u900f\u89c6 <span>\u2013 </span>\u6570\u636e\u8d8b\u52bf \u4e2d\u65b0\u589e\u4e00\u9879\u201c<span>timeStamp</span>\u201d\u6570\u636e\uff0c\u8be5\u6570\u636e\u4e3a\u8be5\u6218\u7ee9\u88ab\u8bb0\u5f55\u7684\u65f6\u95f4\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    8.&nbsp;&nbsp;&nbsp;&nbsp; <span>[</span>\u65b0\u589e<span>] </span>\u73a9\u5bb6\u5728\u7ebf\u72b6\u6001\u663e\u793a\u529f\u80fd\uff0c\u53ef\u4ee5\u770b\u5230\u73a9\u5bb6\u662f\u5426\u5728\u7ebf\uff0c\u662f\u5426\u5728\u73a9\u5f69\u8679\u516d\u53f7\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    9.&nbsp;&nbsp;&nbsp;&nbsp;\n  \u5728\u5173\u4e8e\u4e2d\u65b0\u589e\u4e00\u680f\u201c\u66f4\u65b0\u65e5\u5fd7\u201d<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    10.&nbsp; <span>[</span>\u4fee\u590d<span>] </span>\u5982\u679c\u73a9\u5bb6\u5728\u70b8\u5f39\u3001\u4eba\u8d28\u6216\u4fdd\u5168\u8fd9\u4e09\u79cd\u6a21\u5f0f\u4e2d\u6709\u4efb\u4f55\u4e00\u79cd\u6a21\u5f0f\u6ca1\u6709\u6e38\u73a9\u8fc7\uff0c\u6bd4\u8d5b\u7684\u8bb0\u5f55\u91cc\u5c31\u4f1a\u663e\u793a\u201c\u672a\u77e5\u6a21\u5f0f\u201d\uff0c\u4f46\u5df2\u7ecf\u88ab\u8bb0\u5f55\u7684\u6bd4\u8d5b\u8bb0\u5f55\u5c06\u4e0d\u4f1a\u505a\u4fee\u590d\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    11.&nbsp; <span>[</span>\u91cd\u8981\u4fee\u590d<span>] </span>\u4fee\u590d\u9ad8\u5e76\u53d1\u4e0b\u51fa\u73b0\u6570\u636e\u9519\u4e71\u7684\u95ee\u9898<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:0cm;">\n    \u8bf4\u660e\uff1a\u7531\u4e8e\u672a\u5728\u51fd\u6570\u5e93\u4e2d\u542f\u7528\u4e25\u683c\u6a21\u5f0f\uff0c\u5bfc\u81f4\u51fd\u6570\u5e93\u4e2d\u5b58\u5728\u591a\u4e2a\u8bed\u6cd5\u4e0d\u89c4\u8303\u5199\u6cd5\u7684\u95ee\u9898\uff0c\u89e6\u53d1\u4e86\u7a7a\u95f4\u4e4b\u95f4\u7684\u53d8\u91cf\u6c61\u67d3\uff0c\u8fd9\u5c06\u5bfc\u81f4\u5f53\u516d\u53f7\u6218\u573a\u5728\u540c\u65f6\u5904\u7406\u591a\u4e2a\u7528\u6237\u7684\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4f1a\u6df7\u6dc6\u7528\u6237\u4e4b\u95f4\u7684\u6570\u636e\u3002\u76ee\u524d\u6211\u8fd8\u65e0\u6cd5\u786e\u5b9a\u8fd9\u4e2a\u95ee\u9898\u662f\u5426\u5b8c\u5168\u89e3\u51b3\uff0c\u5982\u679c\u5728\u6b64\u6b21\u66f4\u65b0\u4e4b\u540e\uff0c\u4f60\u7684\u6bd4\u8d5b\u8bb0\u5f55\u4e2d\u518d\u6b21\u51fa\u73b0\u4e86\u6570\u636e\u9519\u4e71\uff0c\u8bf7\u52a1\u5fc5\u53d1\u9001\u90ae\u4ef6\u8054\u7cfb\u6211\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    12.&nbsp; <span>[</span>\u65b0\u589e<span>] </span>\u6700\u8fd1\u9047\u5230\u7684\u73a9\u5bb6 \u529f\u80fd<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    13.&nbsp; <span>[</span>\u65b0\u589e<span>] </span>\u6982\u89c8\u9875\u65b0\u589e \u201c\u5e73\u5747\u5bf9\u5c40\u6c34\u5e73\u201d \u8d44\u6599\u5361\uff0c\u8fd9\u5f20\u5361\u7247\u5c55\u793a\u4e86\u73a9\u5bb6\u6700\u8fd1\u9047\u5230\u7684\u73a9\u5bb6\u7684\u5e73\u5747\u6c34\u5e73\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" style="margin-left:18.0pt;text-indent:-18.0pt;">\n    14.&nbsp; <span>[</span>\u6ce8\u610f<span>] </span>\u6b64\u6b21\u66f4\u65b0\u5e76\u672a\u5728<span>R6</span>\u76d2\u5b50\u4e2d\u8fdb\u884c\u5145\u5206\u7684\u5b89\u5168\u6027\u6d4b\u8bd5\uff0c\u5982\u679c\u60a8\u5728<span>R6</span>\u76d2\u5b50\u4e2d\u9047\u5230\u4e86<span>BUG</span>\uff0c\u8bf7\u52a1\u5fc5\u53d1\u9001\u90ae\u4ef6\u8054\u7cfb\u6211\u3002<span></span> \n  </p>\n  <p class="MsoListParagraph" align="right" style="margin-left:18.0pt;text-align:right;text-indent:0cm;">\n    \u516d\u53f7\u6218\u573a\u7ad9\u957f<span></span> \n  </p>\n  <p class="MsoListParagraph" align="right" style="margin-left:18.0pt;text-align:right;text-indent:0cm;">\n    <span><a href="mailto:xieqiqiang00@live.com">xieqiqiang00@live.com</a></span> \n  </p>\n  <p>\n    <br />\n  </p>\n  <p>\n    <br />\n  </p>\n  <h1>\n    2019\u5e7410\u670821\u65e5\n</h1>\n  <p>\n    1.&nbsp;\u4fee\u590d\u7f51\u7edc\u5f15\u53d1\u7684\u4f4e\u6982\u7387\u7f51\u9875\u7a0b\u5e8f\u5d29\u6e83BUG\u3002\n</p>\n  <span>\u7528\u6237\u7684\u6bd4\u8d5b\u6570\u636e\u4f1a\u88ab\u52063\u6279\u63a8\u9001\u5230\u6d4f\u89c8\u5668\u4e0a\uff0c\u7b2c\u4e00\u6279\u548c\u7b2c\u4e8c\u6279\u603b\u662f\u540c\u65f6\uff08\u51e0\u4e4e\uff09\u5230\u8fbe\uff0c\u5728\u4ee5\u5f80\u7684\u9ad8\u8d28\u91cf\u7f51\u7edc\u73af\u5883\u7684\u6d4b\u8bd5\u4e2d\u90fd\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\u3002\u73b0\u5728\u6211\u53d1\u73b0\u5982\u679c\u7b2c\u4e00\u6279\u5230\u8fbe\u4e4b\u540e\u6570\u5341\u6beb\u79d2\u540e\u7b2c\u4e8c\u6279\u4ecd\u672a\u5230\u8fbe\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u76f4\u63a5\u5f00\u59cb\u5904\u7406\u7b2c\u4e8c\u6279\u7684\u6570\u636e\uff0c\u4ece\u800c\u89e6\u53d1JS\u6570\u636e\u672a\u5b9a\u4e49\u9519\u8bef\uff0c\u5bfc\u81f4\u7f51\u9875\u7a0b\u5e8f\u5d29\u6e83\u7136\u540e\u767d\u5c4f\u3002</span><br />\n  <span>2.</span><span>&nbsp;</span><span>\u4fee\u590d\u5f53\u67e5\u8be2\u6218\u7ee9\u65f6\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u5f53\u524d\u88ab\u67e5\u8be2\u7684\u73a9\u5bb6\u6570\u636e\u6709\u53d8\u52a8\u4f1a\u5bfc\u81f4\u201c\u901f\u89c8\u201d\u9875\u7684\u201c\u6700\u8fd1\u7684\u6bd4\u8d5b\u8bb0\u5f55\u9009\u9879\u5361\u201d\u7684\u5185\u5bb9\u53d8\u6210\u201c\u6682\u65f6\u6ca1\u6709\u6bd4\u8d5b\u6570\u636e\u201d\u3002</span><br />\n  <p>\n    <span>3.</span><span>&nbsp;</span><span>\u4e0b\u7ebfUbisoft Connect \u529f\u80fd</span>\n  </p>\n  <p>\n    <br />\n  </p>\n  <p>\n    <h1>\n      2019\u5e7410\u670811\u65e5\n</h1>\n    <p>\n      1.&nbsp;<span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\u4fee\u590d\u4e86\u4e4b\u524d\u5982\u679cPC\u5e73\u53f0\u4e0e\u4e3b\u673a\u5e73\u53f0\u6709\u91cd\u540d\u8d26\u6237\uff0c\u4e3b\u673a\u5e73\u53f0\u5c31\u4e0d\u80fd\u67e5\u8be2\u5230\u81ea\u5df1\u7684\u6218\u7ee9\u7684\u903b\u8f91\u95ee\u9898\u3002\u73b0\u5728\u53ea\u8981\u8f6c\u5230\u9996\u9875(\u4e2d\u53f0)\uff0c\u7136\u540e\u8f93\u5165\u5b8c\u6574\u6635\u79f0\u5e76\u9009\u62e9\u5e73\u53f0\u5c31\u53ef\u4ee5\u67e5\u8be2\u4e3b\u673a\u5e73\u53f0\u7684\u6218\u7ee9\u4e86\u3002</span>\n    </p>\n    <p>\n      <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n        <p>\n          <br />\n        </p>\n        <h1>\n          2019\u5e748\u67087\u65e5\u4e03\u5915\n</h1>\n      </span><span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n        <p>\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">1.\u4fee\u590d\u7efc\u5408\u641c\u7d22\u7684\u7ed3\u679c\u4e2d\uff0c\u6587\u7ae0\u70b9\u51fb\u540e\u65e0\u6548\u6216\u9519\u8bef\u8df3\u8f6c</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">2.\u4fee\u590d\u67d0\u4e9b\u6761\u4ef6\u4e0b\uff0c\u8fdb\u5165\u6587\u7ae0\u9875\u51fa\u73b0\u767d\u5c4fbug</span><img src="https://s1.hdslb.com/bfs/seed/bplus-common/emoji-assets/xiaodianshi1/doge.png" alt="[tv_doge]" style="width:20px;height:20px;" />\n        </p>\n        <p>\n          <br />\n        </p>\n      </span><span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n        <h1>\n          2019\u5e748\u67082\u65e5\n</h1>\n        <p>\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">1.\u65b0\u589e\u4f7f\u7528ubisoft\u8d26\u6237\u767b\u5f55\u9009\u9879\uff08\u5b9e\u9a8c\u6027\uff09</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">2.\u4e0a\u7ebf\u201c\u80fd\u529b\u900f\u89c6\u529f\u80fd\u201d</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">3.\u4fee\u590d\u5076\u5c14\u4e0d\u80fd\u4f7f\u7528QQ\u4e92\u8054\u767b\u5f55\u7684\u95ee\u9898</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">4.\u4fee\u590drank\u9875\u80dc\u7387\u8ba1\u7b97\u9519\u8bef\u7684\u95ee\u9898</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">5.\u4fee\u590d\u7528\u6237\u767b\u5f55\u540e\u88ab\u9519\u8bef\u7684\u91cd\u5b9a\u5411\u5230R6\u76d2\u5b50\u9875\u9762</span><span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;"></span>\n        </p>\n        <div>\n          <br />\n        </div>\n        <h1>\n          2019\u5e747\u670813\u65e5\n</h1>\n        <p> \n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">1.\u65b0\u589e\u201c\u73a9\u5bb6\u8d5b\u4e8b\u201d\u4e13\u533a\uff0c\u5728\u672a\u6765\u60f3\u8981\u4e3e\u529e\u6bd4\u8d5b\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u627e\u516d\u53f7\u6218\u573a\u4f5c\u5ba3\u53d1\u5e73\u53f0\u3002</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">2.\u5168\u65b0\u4e0a\u7ebf\u4e86\u4e00\u4e2a\u201c\u80b2\u78a7\u5f69\u8679\u516d\u53f7\u5b98\u7f51\u201d\u955c\u50cf\u7248\u7f51\u7ad9\uff0c\u4ee5\u540e\u770bR6\u8d44\u8baf\u3001\u66f4\u65b0\u65e5\u5fd7\u3001\u5e72\u5458\u53c2\u6570\u4e0d\u7528\u518d\u7b49\u7ffb\u8bd1\u7ec4\u6216\u8005\u7b49\u90a3\u4e2a\u4e00\u8f88\u5b50\u8f6c\u4e0d\u5b8c\u7684\u5708\u5708\u4e86\uff0c\u56e0\u4e3a\u80b2\u78a7\u7684\u5b98\u7f51\u5f88\u590d\u6742\uff0c\u53ea\u505a\u4e86\u4e00\u4e9b\u5fc5\u8981\u8d44\u6e90\u4f18\u5316\uff0c\u901f\u5ea6\u6bd4\u76f4\u63a5\u5f00\u5916\u7f51\u5feb\u5f97\u591a\u4f46\u8fd8\u662f\u6bd4\u80b2\u78a7\u4e2d\u56fd\u7684\u9609\u5272\u7248\u5b98\u7f51\u8981\u6162\u4e00\u4e9b\uff08\u5982\u679c\u5361\u5728\u8f6c\u5708\uff0c\u5c31\u591a\u5237\u65b0\u51e0\u4e0b\uff0c\u7b2c\u4e00\u6b21\u6253\u5f00\u8fd8\u662f\u4f1a\u6bd4\u8f83\u6162\uff09</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">3.\u4fee\u590d\u201c\u8fdb\u9000\u4e24\u96be\u201d\u7684bug</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">4.\u51e0\u5904\u6587\u5b57\u63cf\u8ff0\u8c03\u6574</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">5.\u4fee\u590dR6\u76d2\u5b50\u7684\u4e00\u4e2abug</span><span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;"></span>\n        </p>\n        <div>\n          <br />\n        </div>\n        <h1>\n          2019\u5e747\u67087\u65e5\n</h1>\n        <p>\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\u672c\u7ad9\u5c06\u4e8e\u4eca\u665a11\u70b959\u5206\u8fdb\u884c\u4f8b\u884c\u7ef4\u62a4\uff0c\u5c4a\u65f6\u6e38\u620f\u8d44\u8baf\uff0c\u6218\u7ee9\u67e5\u8be2\uff0cR6\u76d2\u5b50\u7b49\u529f\u80fd\u5c06\u6682\u505c\u4f7f\u7528\uff0c\u9884\u8ba1\u6301\u7eed\u65f6\u95f41\u5c0f\u65f6\u3002</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\u672c\u6b21\u66f4\u65b0\u5185\u5bb9\uff1a\u4fee\u590d\u4e86\u73a9\u5bb6\u5c40\u5747Rating\u4e0d\u6b63\u5e38\u663e\u793a\u7684\u95ee\u9898\uff0c\u5e76\u4e14\u5c06\u5206\u503c\u6574\u4f53\u63d0\u9ad8100\u500d\uff0c\u539f\u5148\u76840.78\u5206\u5728\u66f4\u65b0\u540e\u5c06\u53d8\u621078\u5206,\u66f4\u5229\u4e8e\u67e5\u770b\u3002</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\u53e6\u5916\uff1aR6\u76d2\u5b50\u7684\u65b0\u7248\u672c\u5f88\u5feb\u5c31\u8981\u5230\u6765\uff0c\u53ef\u4ee5\u671f\u5f85\u4e00\u4e0b</span><img src="https://s1.hdslb.com/bfs/seed/bplus-common/emoji-assets/xiaodianshi1/doge.png" alt="[tv_doge]" style="width:20px;height:20px;" /><span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;"></span>\n        </p>\n        <div>\n          <br />\n        </div>\n        <h1 style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          2019\u5e746\u670823\u65e5\n</h1>\n        <p style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          \u672c\u7ad9\u5c06\u4e8e\u4eca\u665a11\u70b959\u5206\u8fdb\u884c\u4f8b\u884c\u7ef4\u62a4\uff0c\u5c4a\u65f6\u6e38\u620f\u8d44\u8baf\uff0c\u6218\u7ee9\u67e5\u8be2\uff0cR6\u76d2\u5b50\u7b49\u529f\u80fd\u5c06\u6682\u505c\u4f7f\u7528\uff0c\u9884\u8ba1\u6301\u7eed\u65f6\u95f41\u5c0f\u65f6\u3002<br />\n          \u672c\u6b21\u66f4\u65b0\u5185\u5bb9\uff1a\u4fee\u590d\u4e86\u73a9\u5bb6\u5c40\u5747Rating\u4e0d\u6b63\u5e38\u663e\u793a\u7684\u95ee\u9898\uff0c\u5e76\u4e14\u5c06\u5206\u503c\u6574\u4f53\u63d0\u9ad8100\u500d\uff0c\u539f\u5148\u76840.78\u5206\u5728\u66f4\u65b0\u540e\u5c06\u53d8\u621078\u5206,\u66f4\u5229\u4e8e\u67e5\u770b\u3002<br />\n          \u53e6\u5916\uff1aR6\u76d2\u5b50\u7684\u65b0\u7248\u672c\u5f88\u5feb\u5c31\u8981\u5230\u6765\uff0c\u53ef\u4ee5\u671f\u5f85\u4e00\u4e0b<img src="https://s1.hdslb.com/bfs/seed/bplus-common/emoji-assets/xiaodianshi1/doge.png" alt="[tv_doge]" style="width:20px;height:20px;" />\n        </p>\n        <p style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          <br />\n        </p>\n        <h1 style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          2019\u5e746\u670823\u65e5\n</h1>\n        <p style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">1.\u65b0\u589eSPA\u7248\u9996\u9875\u3001\u6218\u672f\u5730\u56fe\u7b49\u9875\u9762</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">2.\u9996\u9875\u4e2d\u652f\u6301\u73a9\u5bb6\u6635\u79f0\u6a21\u7cca\u641c\u7d22\u529f\u80fd</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">3.\u4fee\u590d\u6bd4\u8d5b\u62a5\u544a\u4e2dplayers\u91cc\u7684\u73a9\u5bb6\u4fe1\u606f\u4e0d\u663e\u793a\u7684\u95ee\u9898</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">4.\u73a9\u5bb6\u901f\u89c8\u9875\u65b0\u589e\u663e\u793a\u73a9\u5bb6\u552f\u4e00ID\u548c\u6700\u8fd1\u7684\u6bd4\u8d5b</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">5.\u6218\u961f\u529f\u80fd\u4e0a\u7ebf\u6d4b\u8bd5</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">6.\u4fee\u590d\u5176\u4ed6bug\u82e5\u5e72</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">7.\u5168\u7403\u5185\u5bb9\u90e8\u7f72</span>\n        </p>\n        <p style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;"><br />\n          </span>\n        </p>\n        <h1 style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          2019\u5e745\u670825\u65e5\n</h1>\n        <p style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">1.\u73b0\u5728\u5728\u516d\u53f7\u6218\u573a\u4e2d\u7ed1\u5b9aUPLAY\u8d26\u53f7\u4e0d\u518d\u9700\u8981\u7528uplay\u6dfb\u52a0\u597d\u53cb\u4e86\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u7f51\u9875\u767b\u5f55uplay\u8fdb\u884c\u9a8c\u8bc1\u3002</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">2.\u73b0\u5728\u53ef\u4ee5\u5728\u8d44\u6599\u5361\u9875\u9762\u9009\u62e9\u4f60\u6240\u5728\u7684\u5730\u533a\u4e86\u3002</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">3.\u5728\u767b\u5f55\u5e76\u7ed1\u5b9a\u4e86UPLAY\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u516d\u53f7\u6218\u573a\u9996\u9875\u76f4\u63a5\u6309\u641c\u7d22\u53ef\u4ee5\u67e5\u8be2\u672c\u4eba\u7684\u6218\u7ee9\uff0c\u4e5f\u53ef\u4ee5\u5728UPLAY\u7ed1\u5b9a\u91cc\u9762\u5f00\u542f\u201c\u4e3b\u52a8\u663e\u793a\u6218\u7ee9\u201d\uff0c\u8bbf\u95ee\u9996\u9875\u65f6\u5c06\u81ea\u52a8\u663e\u793a\u4e2a\u4eba\u6218\u7ee9\u3002</span><br />\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">4.\u7ed1\u5b9aUPLAY\u4e4b\u540e\u53ef\u4ee5\u7981\u6b62\u5176\u4ed6\u4eba\u67e5\u8be2\u60a8\u7684\u6218\u7ee9\u3002</span>\n        </p>\n        <p style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;"><br />\n          </span>\n        </p>\n        <h2 style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\n          <span style="color:#222222;font-family:&quot;font-size:14px;background-color:#FFFFFF;">\u66f4\u591a\u5185\u5bb9\u8bf7\u79fb\u6b65bilibili\u52a8\u6001</span>\n        </h2>\n      </span>\n    </p>\n  </p>\n  <span id="__kindeditor_bookmark_end_151__"></span><br />';return i.default.createElement("div",null,i.default.createElement("div",{style:{padding:35}},i.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))}}]),t}(i.PureComponent),y=d;s.default=y}}]);