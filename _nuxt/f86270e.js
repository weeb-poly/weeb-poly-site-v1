(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,6,7,9,10],{225:function(t,e,n){},226:function(t,e,n){},227:function(t,e,n){},228:function(t,e,n){},229:function(t,e,n){},230:function(t,e,n){},231:function(t,e,n){"use strict";n(225)},232:function(t,e,n){"use strict";n(226)},233:function(t,e,n){"use strict";n(227)},234:function(t,e,n){"use strict";n(228)},235:function(t,e,n){"use strict";n(229)},236:function(t,e,n){"use strict";n(230)},237:function(t,e,n){"use strict";n.r(e);n(27);var r=n(2),c={data:function(){return{courses:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("courses").fetch().then((function(t){return t.list}));case 2:t.courses=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},l=(n(235),n(11)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"courses",attrs:{id:"popular-courses"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},t._l(t.courses,(function(e,r){return n("div",{key:"courses-"+r,staticClass:"col-lg-4 col-md-6 d-flex align-items-stretch mt-2 mb-2"},[n("div",{staticClass:"course-item"},[n("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:e.name}}),t._v(" "),n("div",{staticClass:"course-content"},[n("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[n("h4",[t._v(t._s(e.label))])]),t._v(" "),n("h3",[n("a",{attrs:{href:"#"}},[t._v(t._s(e.name))])]),t._v(" "),n("p",[t._v(t._s(e.desc))])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("h2",[t._v("Courses")]),t._v(" "),n("p",[t._v("Popular Courses")])])}],!1,null,"13eac33d",null);e.default=component.exports},238:function(t,e,n){"use strict";n.r(e);n(27);var r=n(2),c=n(245),l={data:function(){return{testimonials:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("quotes").fetch().then((function(t){return t.list}));case 2:t.testimonials=e.sent;case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){new c.a(this.$refs.slider,{speed:600,loop:!0,slidesPerView:"auto",pagination:{el:this.$refs.pagination,type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}}})}},o=(n(236),n(11)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"testimonials",attrs:{id:"testimonials"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{ref:"slider",staticClass:"testimonials-slider swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.testimonials,(function(e,r){return n("div",{key:"testimonial-"+r,staticClass:"swiper-slide"},[n("div",{staticClass:"testimonial-wrap"},[n("div",{staticClass:"testimonial-item"},[n("img",{staticClass:"testimonial-img",attrs:{src:e.img,alt:e.name}}),t._v(" "),n("h3",[t._v(t._s(e.name))]),t._v(" "),n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",[n("i",{staticClass:"bx bxs-quote-alt-left quote-icon-left"}),t._v("\n                "+t._s(e.message)+"\n                "),n("i",{staticClass:"bx bxs-quote-alt-right quote-icon-right"})])])])])})),0),t._v(" "),n("div",{ref:"pagination",staticClass:"swiper-pagination"})])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("h2",[t._v("Testimonials")]),t._v(" "),n("p",[t._v("What are they saying")])])}],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);n(231);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"d-flex justify-content-center align-items-center",attrs:{id:"hero"}},[n("div",{staticClass:"container position-relative"},[n("h1",[t._v("Why not change"),n("br"),t._v("za warudo?")]),t._v(" "),n("h2",[t._v("We are team of talented degenerates making good use of our free time")]),t._v(" "),n("a",{staticClass:"btn-get-started",attrs:{href:"#"}},[t._v("Join Us")])])])}],!1,null,"589bf56f",null);e.default=component.exports},240:function(t,e,n){"use strict";n.r(e);n(232);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about",attrs:{id:"about"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 order-1 order-lg-2"},[n("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/1024x768.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"},[n("h3",[t._v("Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.")]),t._v(" "),n("p",{staticClass:"font-italic"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua.\n        ")]),t._v(" "),n("ul",[n("li",[n("i",{staticClass:"bi bi-check-circle"}),t._v(" Ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),n("li",[n("i",{staticClass:"bi bi-check-circle"}),t._v(" Duis aute irure dolor in reprehenderit in voluptate velit.")]),t._v(" "),n("li",[n("i",{staticClass:"bi bi-check-circle"}),t._v(" Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.")])]),t._v(" "),n("p",[t._v("\n          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n        ")])])])])])}],!1,null,"5557f20e",null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);n(233);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"counts section-bg",attrs:{id:"counts"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row counters"},[n("div",{staticClass:"col-lg-3 col-6 text-center"},[n("span",{staticClass:"purecounter"},[t._v("9001")]),t._v(" "),n("p",[t._v("Degenerates")])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-6 text-center"},[n("span",{staticClass:"purecounter"},[t._v("69")]),t._v(" "),n("p",[t._v("Courses")])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-6 text-center"},[n("span",{staticClass:"purecounter"},[t._v("42")]),t._v(" "),n("p",[t._v("Events")])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-6 text-center"},[n("span",{staticClass:"purecounter"},[t._v("5")]),t._v(" "),n("p",[t._v("Dictators")])])])])])}],!1,null,"644287fe",null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);n(234);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"why-us",attrs:{id:"why-us"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 d-flex align-items-stretch"},[n("div",{staticClass:"content"},[n("h3",[t._v("Why Choose WPI?")]),t._v(" "),n("p",[t._v("\n            As America's first waifu research university, Weeb Poly has been defining the scientific and technological advances of our world.\n            We continue to push the limits of what degeneracy is capable of by... I actually forgot the rest of the script.\n            I'm sure somebody will fill this in eventually.\n          ")]),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"more-btn",attrs:{href:"#"}},[t._v("Learn More "),n("i",{staticClass:"bi bi-chevron-right"})])])])]),t._v(" "),n("div",{staticClass:"col-lg-8 d-flex align-items-stretch"},[n("div",{staticClass:"icon-boxes d-flex flex-column justify-content-center"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 d-flex align-items-stretch"},[n("div",{staticClass:"icon-box mt-4 mt-xl-0"},[n("i",{staticClass:"bx bx-receipt"}),t._v(" "),n("h4",[t._v("Corporis voluptates sit")]),t._v(" "),n("p",[t._v("Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip")])])]),t._v(" "),n("div",{staticClass:"col-xl-4 d-flex align-items-stretch"},[n("div",{staticClass:"icon-box mt-4 mt-xl-0"},[n("i",{staticClass:"bx bx-cube-alt"}),t._v(" "),n("h4",[t._v("Ullamco laboris ladore pan")]),t._v(" "),n("p",[t._v("Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt")])])]),t._v(" "),n("div",{staticClass:"col-xl-4 d-flex align-items-stretch"},[n("div",{staticClass:"icon-box mt-4 mt-xl-0"},[n("i",{staticClass:"bx bx-images"}),t._v(" "),n("h4",[t._v("Labore consequatur")]),t._v(" "),n("p",[t._v("Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere")])])])])])])])])])}],!1,null,"78c61d67",null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);var r=n(239),c=n(240),l=n(241),o=n(242),v=n(237),d=n(238),f={components:{Hero:r.default,About:c.default,Counts:l.default,WhyUs:o.default,PopularCourses:v.default,Testimonials:d.default}},_=n(11),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero"),t._v(" "),n("main",{attrs:{id:"main"}},[n("About"),t._v(" "),n("Counts"),t._v(" "),n("WhyUs"),t._v(" "),n("PopularCourses"),t._v(" "),n("Testimonials")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(239).default,About:n(240).default,Counts:n(241).default,WhyUs:n(242).default,PopularCourses:n(237).default,Testimonials:n(238).default})}}]);