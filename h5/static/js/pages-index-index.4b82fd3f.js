(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{3105:function(t,i,e){"use strict";e.r(i);var a=e("bda5"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"413b":function(t,i,e){var a=e("4a17");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("47cade48",a,!0,{sourceMap:!1,shadowMode:!1})},"4a17":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".content[data-v-f8584078]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background:#333}.logo[data-v-f8584078]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-f8584078]{display:flex;justify-content:center}.kaung[data-v-f8584078]{\n\t/* width: 650px; */height:100%;display:flex;flex-direction:row;\n\t/* align-items: center;\n\t */justify-content:space-between;flex-wrap:wrap}.title[data-v-f8584078]{font-size:%?36?%;color:#8f8f94}.imgbox[data-v-f8584078]{width:100%;margin-bottom:100px;max-width:300px}",""]),t.exports=i},"52ee":function(t,i,e){"use strict";e.r(i);var a=e("6efa"),n=e("3105");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("8180");var r,s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"f8584078",null,!1,a["a"],r);i["default"]=c.exports},"6efa":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[t.imgUrls.length>0?e("v-uni-view",{staticClass:"kaung",style:{width:(1===t.imgUrls.length?300:650)+" px"}},t._l(t.imgUrls,(function(i,a){return e("v-uni-image",{key:a,staticClass:"imgbox",attrs:{src:i,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSee(i)}}})})),1):e("v-uni-video",{staticStyle:{width:"100%",height:"auto"},attrs:{src:t.video}})],1)},o=[]},8180:function(t,i,e){"use strict";var a=e("413b"),n=e.n(a);n.a},bda5:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{imgUrls:[],video:""}},onLoad:function(t){"app"===t.type&&(this.imgUrls=["../../static/app/IMG_0134.PNG","../../static/app/IMG_0135.PNG","../../static/app/IMG_0137.PNG","../../static/app/IMG_0138.PNG","../../static/app/IMG_0139.PNG","../../static/app/IMG_0141.PNG","../../static/app/IMG_0142.PNG","../../static/app/IMG_0145.PNG"]),"yiqi"===t.type&&(this.imgUrls=["../../static/yiqi/IMG_0160.PNG"]),"guolao"===t.type&&(this.imgUrls=["../../static/guolao/IMG_0163.PNG"]),"video"===t.type&&(this.imgUrls=[],this.video=t.url)},methods:{onSee:function(t){uni.previewImage({urls:[t]})}}};i.default=a}}]);