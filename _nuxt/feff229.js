(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{294:function(n,t,e){n.exports=e.p+"img/akari.df29ffe.png"},295:function(n,t,e){n.exports=e.p+"img/fukaya.ab7886f.png"},296:function(n,t,e){n.exports=e.p+"img/mai.0e8272a.png"},297:function(n,t,e){n.exports=e.p+"img/shion.6bd6fe3.png"},298:function(n,t,e){n.exports=e.p+"img/wolfgirl.1e54693.png"},299:function(n,t,e){var map={"./contest/akari.png":294,"./contest/fukaya.png":295,"./contest/mai.png":296,"./contest/shion.png":297,"./contest/wolfgirl.png":298,"./hero-bg.jpg":300,"./mascots/akari/cover.png":301,"./mascots/akari/demongirl.png":302,"./mascots/akari/draft.png":303,"./mascots/akari/red.png":304,"./mascots/fukaya/contest.png":305,"./mascots/fukaya/cover.png":306,"./mascots/shion/final_alpha.png":307,"./mascots/shion/final_gradient.png":308,"./mascots/shion/picrew_407340.png":309,"./mascots/shion/server_icon.png":310,"./think.png":311};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=299},300:function(n,t,e){n.exports=e.p+"img/hero-bg.c893acb.jpg"},301:function(n,t,e){n.exports=e.p+"img/cover.944c679.png"},302:function(n,t,e){n.exports=e.p+"img/demongirl.2583cd7.png"},303:function(n,t,e){n.exports=e.p+"img/draft.e342c7e.png"},304:function(n,t,e){n.exports=e.p+"img/red.df29ffe.png"},305:function(n,t,e){n.exports=e.p+"img/contest.2d988f7.png"},306:function(n,t,e){n.exports=e.p+"img/cover.0732517.png"},307:function(n,t,e){n.exports=e.p+"img/final_alpha.713b32d.png"},308:function(n,t,e){n.exports=e.p+"img/final_gradient.1bace43.png"},309:function(n,t,e){n.exports=e.p+"img/picrew_407340.0e187d8.png"},310:function(n,t,e){n.exports=e.p+"img/server_icon.393cc5c.png"},311:function(n,t,e){n.exports=e.p+"img/think.b2fd9a3.png"},335:function(n,t,e){"use strict";e.r(t);e(34),e(53),e(28);var o=e(3),r={props:{data:{type:Object,required:!0},preview:{type:Boolean,default:!1}},data:function(){return{cover:""}},fetch:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.cover=n.dynamicImg(n.data.cover);case 1:case"end":return t.stop()}}),t)})))()},methods:{dynamicImg:function(n){if(n)return n.includes("://")?n:e(299)("./".concat(n))}}},c=e(12),component=Object(c.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card"},[e("NuxtLink",{staticClass:"card-header h5",attrs:{to:n.data.path}},[n._v(n._s(n.data.title))]),n._v(" "),e("img",{staticClass:"card-img-top",attrs:{src:n.cover}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);