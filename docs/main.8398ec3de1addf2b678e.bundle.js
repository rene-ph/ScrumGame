webpackJsonp([1],{0:function(e,n,t){e.exports=t("cDNt")},"5GE4":function(e,n){e.exports='<div class="puzzle-one">\n  <div class="row">\n    <div class="col-md-12 text-center">\n      <h3>Guess the image</h3>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-8 text-center" style="margin-left: 17%;">\n      <div class="puzzle-one__image">\n          <img src="assets/images/Duck.jpg">\n          <div class="puzzle_one__cards">\n\n            <app-card-puzzle-one class="square-1" [name]="1">\n              </app-card-puzzle-one>\n    \n            <app-card-puzzle-one class="square-2" [name]="2">\n              </app-card-puzzle-one>\n    \n            <app-card-puzzle-one class="square-3" [name]="3">\n                </app-card-puzzle-one>\n    \n            <app-card-puzzle-one class="square-4" [name]="4">\n                </app-card-puzzle-one>\n    \n            <app-card-puzzle-one class="square-5" [name]="5">\n                </app-card-puzzle-one>\n    \n            <app-card-puzzle-one class="square-6" [name]="6">\n                  </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-7" [name]="7">\n              </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-8" [name]="8">\n                </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-9" [name]="9">\n                  </app-card-puzzle-one>\n            \n            <app-card-puzzle-one class="square-10" [name]="10">\n                    </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-11" [name]="11">\n              </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-12" [name]="12">\n                </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-13" [name]="13">\n                  </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-14" [name]="14">\n                    </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-15" [name]="15">\n                      </app-card-puzzle-one>\n\n            <app-card-puzzle-one class="square-16" [name]="16">\n                        </app-card-puzzle-one>\n\n          </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n'},IGIc:function(e,n){e.exports='<div class="square"\n    (click)="hideElement()"\n    [@fadeOut]="stateName">\n    <span class="square__text">{{name}}</span>\n</div>'},LAUv:function(e,n,t){(e.exports=t("rP7Y")(!1)).push([e.i,".square{height:175px;width:175px;background-color:beige;border:2px solid #000}.square__text{position:relative;top:30%;font-size:40px}",""]),e.exports=e.exports.toString()},YuZA:function(e,n){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="YuZA"},cDNt:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("LMZF"),o=t("x8Hs"),p=t("MCDL"),r=t("RyBE"),c=this&&this.__decorate||function(e,n,t,a){var o,p=arguments.length,r=p<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,n,t,a);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(p<3?o(r):p>3?o(n,t,r):o(n,t))||r);return p>3&&r&&Object.defineProperty(n,t,r),r},s=function(){function e(){this.title="app"}return e=c([Object(a.m)({selector:"app-root",template:t("efyd"),styles:[t("hxJY")]})],e)}(),i=this&&this.__decorate||function(e,n,t,a){var o,p=arguments.length,r=p<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,n,t,a);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(p<3?o(r):p>3?o(n,t,r):o(n,t))||r);return p>3&&r&&Object.defineProperty(n,t,r),r},l=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},u=function(){function e(){}return e.prototype.ngOnInit=function(){},e=i([Object(a.m)({selector:"app-puzzle-one",template:t("5GE4"),styles:[t("pEkQ")]}),l("design:paramtypes",[])],e)}(),d=t("fAeS"),f=this&&this.__decorate||function(e,n,t,a){var o,p=arguments.length,r=p<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,n,t,a);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(p<3?o(r):p>3?o(n,t,r):o(n,t))||r);return p>3&&r&&Object.defineProperty(n,t,r),r},z=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},m=function(){function e(){this.stateName=""}return e.prototype.ngOnInit=function(){},e.prototype.hideElement=function(){this.stateName="hide"},f([Object(a.z)(),z("design:type",String)],e.prototype,"name",void 0),e=f([Object(a.m)({selector:"app-card-puzzle-one",template:t("IGIc"),styles:[t("LAUv")],animations:[Object(d.j)("fadeOut",[Object(d.g)("hide",Object(d.h)({opacity:0})),Object(d.i)("* => hide",[Object(d.e)("600ms ease-out")])])]}),z("design:paramtypes",[])],e)}(),h=this&&this.__decorate||function(e,n,t,a){var o,p=arguments.length,r=p<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,n,t,a);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(p<3?o(r):p>3?o(n,t,r):o(n,t))||r);return p>3&&r&&Object.defineProperty(n,t,r),r},b=function(){function e(){}return e=h([Object(a.E)({declarations:[s,u,m],imports:[r.a,p.a],providers:[],bootstrap:[s]})],e)}();Object(a._5)(),Object(o.a)().bootstrapModule(b).catch(function(e){return console.log(e)})},efyd:function(e,n){e.exports='\n<div class="container">\n    <app-puzzle-one></app-puzzle-one>\n</div>\n'},hxJY:function(e,n,t){(e.exports=t("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},pEkQ:function(e,n,t){(e.exports=t("rP7Y")(!1)).push([e.i,".puzzle-one img{height:600px;width:600px}.puzzle-one__image{position:relative;display:inline-block}.puzzle_one__cards{position:relative;top:-600px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}",""]),e.exports=e.exports.toString()}},[0]);