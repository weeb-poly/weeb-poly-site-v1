(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(t,e,n){},145:function(t,e,n){},146:function(t,e,n){},147:function(t,e,n){},148:function(t,e,n){},168:function(t,e,n){"use strict";n.r(e);n(224);var r=n(12),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer mt-auto"},[n("div",{staticClass:"footer-top py-4"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row gy-4"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 footer-links"},[n("h4",{staticClass:"mb-0"},[t._v("Useful Links")]),t._v(" "),n("ul",{staticClass:"ps-0 d-grid gap-1"},[n("li",{staticClass:"d-flex align-items-center"},[n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"d-flex align-items-center"},[n("NuxtLink",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"d-flex align-items-center"},[n("NuxtLink",{attrs:{to:"/events"}},[t._v("Events")])],1),t._v(" "),n("li",{staticClass:"d-flex align-items-center"},[n("NuxtLink",{attrs:{to:"/mascots"}},[t._v("Mascots")])],1)])])])])]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-6 footer-contact"},[n("h3",[t._v("Weeb Poly Institute")]),t._v(" "),n("p",[t._v("\n            1 Chome-15-13 Sotokanda"),n("br"),t._v("\n            B1F-6F"),n("br"),t._v("\n            Chiyoda City, Tokyo 101-0021"),n("br"),t._v("\n            Japan"),n("br"),n("br"),t._v(" "),n("strong",[t._v("Phone:")]),t._v(" +81 3-3252-6166 +81"),n("br"),t._v(" "),n("strong",[t._v("Email:")]),t._v(" 42+notaweeb@wpi.moe\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container d-md-flex py-4"},[n("div",{staticClass:"me-md-auto text-center text-md-start"},[n("p",{staticClass:"mb-1"},[t._v("\n        © Copyright "),n("strong",[n("span",[t._v("Weeb Poly")])]),t._v(". All Rights Reserved\n      ")]),t._v(" "),n("p",{staticClass:"credits mb-1"},[t._v("\n        Original Design by "),n("a",{attrs:{href:"https://bootstrapmade.com/"}},[t._v("BootstrapMade")])])]),t._v(" "),n("div",{staticClass:"social-links text-center text-md-right pt-3 pt-md-0"},[n("a",{staticClass:"btn btn-sm",attrs:{href:"https://github.com/weeb-poly/"}},[n("i",{staticClass:"bx bxl-github"})]),t._v(" "),n("a",{staticClass:"btn btn-sm",attrs:{href:"https://discord.com/"}},[n("i",{staticClass:"bx bxl-discord"})])])])}],!1,null,"1590acca",null);e.default=component.exports;installComponents(component,{Footer:n(168).default})},177:function(t,e,n){"use strict";n(222);var r=n(12),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column min-vh-100"},[n("Header"),t._v(" "),n("Nuxt"),t._v(" "),n("Footer"),t._v(" "),n("Back2Top")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(293).default,Footer:n(168).default,Back2Top:n(292).default})},185:function(t,e,n){n(186),t.exports=n(187)},219:function(t,e,n){"use strict";n(143)},222:function(t,e,n){"use strict";n(145)},223:function(t,e,n){"use strict";n(146)},224:function(t,e,n){"use strict";n(147)},225:function(t,e,n){"use strict";n(148)},226:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return o}));n(28);var r=n(3),o={nuxtServerInit:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch;case 1:case"end":return e.stop()}}),e)})))()}}},227:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return l}));var r=function(){return{list:[]}},o={SET_QUOTES:function(t,e){t.list=e}},l={load:function(t){var e=t.commit;this.$content("quotes").fetch().then((function(t){e("SET_QUOTES",t.list)}))}}},27:function(t,e,n){"use strict";var r={props:["error"],layout:"default"},o=(n(219),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"d-flex flex-column flex-grow-1"},[n("div",{staticClass:"hero flex-grow-1 position-relative overflow-hidden p-3 mt-0 p-md-5"},[n("div",{staticClass:"align-middle container position-relative p-lg-3 my-3 text-white"},[404===t.error.statusCode?n("h1",[t._v("Page not found")]):n("h1",[t._v("An error occurred")]),t._v(" "),n("NuxtLink",{staticClass:"btn btn-hero btn-lg fs-6 fw-bold mt-3",attrs:{to:"/"}},[t._v("Home")])],1)])])}),[],!1,null,null,null);e.a=component.exports},292:function(t,e,n){"use strict";n.r(e);n(38);var r={data:function(){return{visible:!1}},methods:{scrollListener:function(){this.visible=window.scrollY>100}},mounted:function(){var t=this;setTimeout((function(){window.addEventListener("load",t.scrollListener)})),document.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){window.removeEventListener("load",this.scrollListener),document.removeEventListener("scroll",this.scrollListener)}},o=(n(225),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"back-to-top d-flex align-items-center justify-content-center",class:{active:t.visible},attrs:{href:"#"}},[n("i",{staticClass:"bi bi-arrow-up-short"})])}),[],!1,null,"055c0cc6",null);e.default=component.exports},293:function(t,e,n){"use strict";n.r(e);n(223);var r=n(12),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-md navbar-light fixed-top"},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("WPI")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-sm-0"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/events"}},[t._v("Events")])],1)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"400367fa",null);e.default=component.exports}},[[185,18,2,19]]]);