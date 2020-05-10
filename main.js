(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <img src=\"assets/img/logo.png\" alt=\"\">\n                    </div>\n                    <h1 class=\"presentation-title\">codeJunction</h1>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">Think | Search | Build</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <app-our-work></app-our-work>\n        <team-members></team-members>\n        <app-tech-blog></app-tech-blog>\n        <app-our-team></app-our-team>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/member-card/member-card.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/member-card/member-card.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/our-team/our-team.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/our-team/our-team.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section team-carousel\" id=\"carousel\">\n    <div class=\"container\">\n        <div class=\"col-md-auto\">\n            <h2 class=\"title\">Our Team</h2>\n        </div>\n        <div class=\"page-carousel col-md-7 ml-auto mr-auto\">\n            <ngb-carousel>\n                <ng-template ngbSlide #teamImg *ngFor=\"let teamPic of teamCarousel\">\n                    <div class=\"teamImg\"> \n                        <img src=\"./assets/img/{{teamPic.image}}\" alt=\"Team gatherings\">\n                        <div class=\"carousel-caption team-carousel-caption\">\n                            <p>{{teamPic.description}}</p>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/our-work/our-work.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/our-work/our-work.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container\">\n        <h2>Our Work</h2>\n        <div class=\"work-section\">\n            <div class=\"row justify-content-center\">\n                <button type=\"button\" class=\"slider_button btn btn-danger btn-just-icon\" (click)=\"backward()\"><i\n                        class=\"fa fa-angle-left\"></i></button>\n                <div class=\"project card\" *ngFor=\"let project of listedProjects\">\n                    <img class=\"card-img-top\" src=\"assets/img/work/{{project.image}}\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><b>{{project.projectName}}</b>\n                            <i *ngIf=\"project.isWeb\" class=\"fa fa-globe\" aria-hidden=\"true\"\n                                style=\"padding-left:10px;\"></i> </h5>\n                        <p class=\"card-text\" style=\"text-align: justify; font-size: 12px;\">{{project.description}}</p>\n                        <button class=\"btn btn-default\" (click)=\"showProjectCard({\n                                image:project.image,\n                                description: project.largeDescription,\n                                name: project.projectName,\n                                github: project.github|| null})\">\n                            See more</button>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"slider_button btn btn-danger btn-just-icon\" (click)=\"foward()\"><i\n                        class=\"fa fa-angle-right\"></i></button>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-card/project-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-card/project-card.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"project-modal\">\n  <div class=\"modal-header no-border-header\">\n    <h5 class=\"modal-title text-center\">&nbsp;</h5>\n  </div>\n  <div class=\"modal-body\">\n    <h5 class=\"modal-title text-center\">{{data.name}}</h5>\n    <img src=\"assets/img/work/{{data.image}}\" class=\"img-rounded\" style=\"height:60%;width:60%;\">\n    <div class=\"project-description\">{{data.description}}</div>\n    <div class=\"row justify-content-center social-media-links\">\n      <div *ngIf=\"data.github\" class=\"col-xs-4 social-link\">\n        <a rel=\"tooltip\" title=\"Github\" data-placement=\"bottom\" href=\"{{data.github}}\" target=\"_blank\">\n          <i class=\"fa fa-github-square\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer no-border-footer\">\n    <div class=\"project-close mx-auto\">\n      <button type=\"button\" #closebutton class=\"btn btn btn-outline-primary btn-round\" data-dismiss=\"modal\" (click)=\"close()\">Close</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teamSection/teamSection.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teamSection/teamSection.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"section section-dark\">\n        <div class=\"container\">\n            <div class=\"col-md-auto\">\n                <h2 class=\"title\">Team Members</h2>\n            </div>\n        </div>\n        <br>\n        <div class=\"container\">\n            <div class=\"row justify-content-center\">\n                <div *ngFor=\"let teamMember of teamMembers; let i = index\">\n                    <div class=\"col-sm-auto\">\n                        <div class=\"hover-profile-card\" (click)=\"showMemberCard(i)\">\n                            <img src=\"assets/img/faces/{{teamMember.image}}\"\n                                 class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover imgHover\">\n                            <h5 class=\"title\" style=\"text-align: center;\">\n                                <div class=\"firstName\">{{teamMember.firstName}}</div>\n                            </h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tech-blog/tech-blog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tech-blog/tech-blog.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"col-md-auto\">\n            <h2 class=\"title\">Latest Tech Blogs</h2>\n        </div>\n        <div class=\"blog-story\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-5\" *ngFor=\"let blog of blogs\">\n                    <a href=\"{{blog.url}}\" target=\"_blank\">\n                        <div class=\"card shadow blog-story mb-4\">\n                            <img src=\"assets/img/blogs/{{blog.image}}\" class=\"img\" alt=\"Blog Image\">\n                            <div class=\"card-body\">\n                                <h6>{{blog.title}}</h6>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/faces/{{blog.author.image}}\" alt=\"author-photo\" class=\"avatar\">\n                                    <span>{{blog.author.name}}</span>\n                                    <div class=\"stats ml-auto\">\n                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                        {{blog.readingTime}} min read\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row flex-row-reverse\">\n            <div class=\"credits col-md-4\">\n                <span class=\"footer-title justify-content-center d-flex\">Menu</span>\n                <br/>\n                <div class=\"meta-links justify-content-center d-flex\">\n                    <ul>\n                        <li class=\"meta-link\"><a href=\"#\">Home</a></li>\n                        <li class=\"meta-link\"><a href=\"\">About Us</a></li>\n                        <li class=\"meta-link\"><a href=\"\">Our Projects</a></li>\n                        <li class=\"meta-link\"><a href=\"\">Contact Us</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"credits col-md-4\">\n                <span class=\"footer-title justify-content-center d-flex\">Contact Us</span>\n                <span class=\"contact justify-content-center d-flex\">\n                    Mail : <span><a href=\"mailto:codejunctioncrew@gmail.com\">&nbsp;codejunctioncrew@gmail.com</a></span>\n                </span>\n                <span class=\"contact justify-content-center d-flex\">\n                    Tel : <span>&nbsp;+94 72 1177569</span>\n                </span>\n            </div>\n            <div class=\"credits col-md-4\">\n                <span class=\"footer-title justify-content-center d-flex\">codeJunction</span>\n                <div class=\"social-icons justify-content-center d-flex\">\n                    <div class=\"social-icon col-md-3\">\n                        <a rel=\"tooltip\" title=\"Subscribe\" data-placement=\"bottom\" href=\"http://www.youtube.com/channel/UC3rlLY5RpyV-QJcWFEXJSLQ\" target=\"_blank\">\n                            <i class=\"fa fa-youtube-play\"></i>\n                            <p class=\"d-md-none\">YouTube</p>\n                        </a>\n                    </div>\n                    <div class=\"social-icon col-md-3\">\n                        <a rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://github.com/codeJunctionTeam/codeJunction-site\" target=\"_blank\">\n                            <i class=\"fa fa-github\"></i>\n                            <p class=\"d-md-none\">GitHub</p>\n                        </a>\n                    </div>\n                    <div class=\"social-icon col-md-3\">\n                        <a rel=\"tooltip\" title=\"Meet us\" data-placement=\"bottom\" href=\"https://linkedin.com/company/codejunction\" target=\"_blank\">\n                            <i class=\"fa fa-linkedin-square\"></i>\n                            <p class=\"d-md-none\">LinkedIn</p>\n                        </a>\n                    </div>\n                    <div class=\"social-icon col-md-3\">\n                        <a rel=\"tooltip\" title=\"Contact us\" data-placement=\"bottom\" href=\"https://www.facebook.com/codeJunctioncrew/\" target=\"_blank\">\n                            <i class=\"fa fa-facebook\"></i>\n                            <p class=\"d-md-none\">Facebook</p>\n                        </a>\n                    </div>\n                </div>\n                <span class=\"copyright justify-content-center d-flex\">\n                    © {{test | date: 'yyyy'}} codeJunction\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"https://codejunctionteam.github.io/codeJunction-site\">codeJunction</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Subscribe\" data-placement=\"bottom\" href=\"http://www.youtube.com/channel/UC3rlLY5RpyV-QJcWFEXJSLQ\" target=\"_blank\">\n                        <i class=\"fa fa-youtube-play\"></i>\n                        <p class=\"d-lg-none\">YouTube</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://github.com/codeJunctionTeam/codeJunction-site\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i>\n                        <p class=\"d-lg-none\">GitHub</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Meet us\" data-placement=\"bottom\" href=\"https://linkedin.com/company/codejunction\" target=\"_blank\">\n                        <i class=\"fa fa-linkedin-square\"></i>\n                        <p class=\"d-lg-none\">LinkedIn</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Contact us\" data-placement=\"bottom\" href=\"https://www.facebook.com/codeJunctioncrew/\" target=\"_blank\">\n                        <i class=\"fa fa-facebook\"></i>\n                        <p class=\"d-lg-none\">Facebook</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __importDefault(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _teamSection_teamSection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teamSection/teamSection.component */ "./src/app/components/teamSection/teamSection.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./member-card/member-card.component */ "./src/app/components/member-card/member-card.component.ts");
/* harmony import */ var _our_work_our_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./our-work/our-work.component */ "./src/app/components/our-work/our-work.component.ts");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-card/project-card.component */ "./src/app/components/project-card/project-card.component.ts");
/* harmony import */ var _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./our-team/our-team.component */ "./src/app/components/our-team/our-team.component.ts");
/* harmony import */ var _tech_blog_tech_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tech-blog/tech-blog.component */ "./src/app/components/tech-blog/tech-blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_8__["ComponentsComponent"],
                _teamSection_teamSection_component__WEBPACK_IMPORTED_MODULE_7__["TeamSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["NgbdModalContent"],
                _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_10__["MemberCardComponent"],
                _our_work_our_work_component__WEBPACK_IMPORTED_MODULE_11__["OurWorkComponent"],
                _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_12__["ProjectCardComponent"],
                _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_13__["OurTeamComponent"],
                _tech_blog_tech_blog_component__WEBPACK_IMPORTED_MODULE_14__["TechBlogComponent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_8__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/member-card/member-card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/member-card/member-card.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".member-modal{\n    background-color: #ffffff;\n    border-radius: 5px;\n}\n\n.member-modal .close{\n    outline: none !important;\n}\n\n.modal-body{\n    text-align: center;\n}\n\n.modal-footer{\n    padding-bottom: 10px;\n}\n\n.modal-title{\n    font-weight: bold;\n}\n\n.profile-pic{\n    height: 40%;\n    width: 40%;\n    margin-bottom: 10px;\n}\n\n.member-description{\n    text-align: justify;\n    margin-top: 10px;\n}\n\n.connected{\n    margin-top: 10px;\n    color: gray;\n}\n\n.modal-body .social-media-links{\n    margin-top: 10px;\n}\n\n.social-link{\n    padding: 1%;\n}\n\n.social-link .fa{\n    color: #000000;\n    font-size: large\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVtYmVyLWNhcmQvbWVtYmVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXItbW9kYWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tZW1iZXItbW9kYWwgLmNsb3Nle1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwtZm9vdGVye1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubW9kYWwtdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9maWxlLXBpY3tcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZW1iZXItZGVzY3JpcHRpb257XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29ubmVjdGVke1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5tb2RhbC1ib2R5IC5zb2NpYWwtbWVkaWEtbGlua3N7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbC1saW5re1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG4uc29jaWFsLWxpbmsgLmZhe1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2Vcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/member-card/member-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/member-card/member-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: MemberCardContent, MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardContent", function() { return MemberCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MemberCardContent = /** @class */ (function () {
    function MemberCardContent(activeModal) {
        this.activeModal = activeModal;
    }
    MemberCardContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardContent.prototype, "name", void 0);
    MemberCardContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-card',
            template: "<div class=\"member-modal\">\n    <div class=\"modal-header no-border-header\">\n      <h5 class=\"modal-title text-center\">&nbsp;</h5>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <img src=\"assets/img/faces/{{image}}\" class=\"rounded-circle img-center img-fluid profile-pic\">\n      <h5 class=\"modal-title text-center\">{{fullName}}</h5>\n      <div class=\"member-description\">{{description}}</div>\n      <div class=\"connected\">Get Connected</div>\n      <div class=\"row justify-content-center social-media-links\">\n        <div class=\"col-xs-4 social-link\">\n          <a rel=\"tooltip\" title=\"Facebook\" data-placement=\"bottom\" href=\"{{facebook}}\" target=\"_blank\">\n            <i class=\"fa fa-facebook\"></i>\n          </a>\n        </div>\n        <div class=\"col-xs-4 social-link\">\n          <a rel=\"tooltip\" title=\"Instagram\" data-placement=\"bottom\" href=\"{{instagram}}\" target=\"_blank\">\n            <i class=\"fa fa-instagram\"></i>\n          </a>\n        </div>\n        <div class=\"col-xs-4 social-link\">\n          <a rel=\"tooltip\" title=\"LinkedIn\" data-placement=\"bottom\" href=\"{{linkedin}}\" target=\"_blank\">\n            <i class=\"fa fa-linkedin-square\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer no-border-footer\">\n      <div class=\"member-close mx-auto\">\n        <button type=\"button\" class=\"btn btn btn-outline-primary btn-round\" (click)=\"activeModal.close('Close click')\">Close</button>\n      </div>\n    </div>\n  </div>",
            styles: [__importDefault(__webpack_require__(/*! ./member-card.component.css */ "./src/app/components/member-card/member-card.component.css")).default]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], MemberCardContent);
    return MemberCardContent;
}());

var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(modalService) {
        this.modalService = modalService;
        this.closeResult = '';
    }
    MemberCardComponent.prototype.ngOnInit = function () { };
    MemberCardComponent.prototype.open = function (fullName, image, description, social) {
        var modalRef = this.modalService.open(MemberCardContent);
        modalRef.componentInstance.fullName = fullName;
        modalRef.componentInstance.image = image;
        modalRef.componentInstance.description = description;
        modalRef.componentInstance.linkedin = social["linkedin"];
        modalRef.componentInstance.facebook = social["facebook"];
        modalRef.componentInstance.instagram = social["instagram"];
    };
    MemberCardComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    MemberCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'member-card-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./member-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/member-card/member-card.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/our-team/our-team.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/our-team/our-team.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team-carousel-caption{\n    display: none;\n}\n\n.team-carousel .teamImg:hover{\n    background-color: black;\n    border-radius: 12px !important;\n}\n\n.team-carousel .teamImg:hover img{\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n.team-carousel .teamImg:hover .team-carousel-caption{\n    display: block;\n}\n\n.team-carousel .teamImg:hover .team-carousel-caption>p{\n    color: white;\n    font-weight: bold;\n    font-size: large;\n}\n\n@media screen and (max-width:1024px){\n    .team-carousel img{\n        height: 80%;\n    }\n\n    .team-carousel .teamImg:hover .team-carousel-caption{\n        padding-bottom: 20px !important;\n        text-align: center;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdXItdGVhbS9vdXItdGVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksK0JBQStCO1FBQy9CLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vdXItdGVhbS9vdXItdGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tY2Fyb3VzZWwtY2FwdGlvbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGVhbS1jYXJvdXNlbCAudGVhbUltZzpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZWFtLWNhcm91c2VsIC50ZWFtSW1nOmhvdmVyIGltZ3tcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGVhbS1jYXJvdXNlbCAudGVhbUltZzpob3ZlciAudGVhbS1jYXJvdXNlbC1jYXB0aW9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGVhbS1jYXJvdXNlbCAudGVhbUltZzpob3ZlciAudGVhbS1jYXJvdXNlbC1jYXB0aW9uPnB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAudGVhbS1jYXJvdXNlbCBpbWd7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgIH1cblxuICAgIC50ZWFtLWNhcm91c2VsIC50ZWFtSW1nOmhvdmVyIC50ZWFtLWNhcm91c2VsLWNhcHRpb257XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/our-team/our-team.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/our-team/our-team.component.ts ***!
  \***********************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _assets_json_teamCarousel_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/json/teamCarousel.json */ "./src/assets/json/teamCarousel.json");
var _assets_json_teamCarousel_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/teamCarousel.json */ "./src/assets/json/teamCarousel.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var OurTeamComponent = /** @class */ (function () {
    function OurTeamComponent() {
        this.teamCarousel = _assets_json_teamCarousel_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    OurTeamComponent.prototype.ngOnInit = function () {
    };
    OurTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-team',
            template: __importDefault(__webpack_require__(/*! raw-loader!./our-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/our-team/our-team.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./our-team.component.css */ "./src/app/components/our-team/our-team.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], OurTeamComponent);
    return OurTeamComponent;
}());



/***/ }),

/***/ "./src/app/components/our-work/our-work.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/our-work/our-work.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".project {\n  margin: 2px 20px;\n  width: 18rem;\n}\n@media screen and (max-width: 995px) {\n  .project {\n    margin: 2px 12px;\n  }\n}\n@media screen and (max-width: 398px) {\n  .project {\n    margin: 2px 5px;\n    width: 250px;\n  }\n}\n@media screen and (max-width: 398px) {\n  .project {\n    margin: 2px 5px;\n    width: 220px;\n  }\n}\n.slider_button {\n  display: block;\n  margin-bottom: auto;\n  margin-top: auto;\n}\n.work-section {\n  margin-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvZGVKdW5jdGlvbi1zaXRlL2NvZGVKdW5jdGlvbi1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy9vdXItd29yay9vdXItd29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vdXItd29yay9vdXItd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFKRjtJQUtJLGdCQUFBO0VDRUY7QUFDRjtBREFFO0VBUkY7SUFTSSxlQUFBO0lBQ0EsWUFBQTtFQ0dGO0FBQ0Y7QURERTtFQWJGO0lBY0ksZUFBQTtJQUNBLFlBQUE7RUNJRjtBQUNGO0FEREE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0lGO0FEREE7RUFDRSxlQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL291ci13b3JrL291ci13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qge1xuICBtYXJnaW46IDJweCAyMHB4O1xuICB3aWR0aDogMThyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk1cHgpIHtcbiAgICBtYXJnaW46IDJweCAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk4cHgpIHtcbiAgICBtYXJnaW46IDJweCA1cHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk4cHgpIHtcbiAgICBtYXJnaW46IDJweCA1cHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICB9XG59XG5cbi5zbGlkZXJfYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi53b3JrLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG4iLCIucHJvamVjdCB7XG4gIG1hcmdpbjogMnB4IDIwcHg7XG4gIHdpZHRoOiAxOHJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NXB4KSB7XG4gIC5wcm9qZWN0IHtcbiAgICBtYXJnaW46IDJweCAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOThweCkge1xuICAucHJvamVjdCB7XG4gICAgbWFyZ2luOiAycHggNXB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk4cHgpIHtcbiAgLnByb2plY3Qge1xuICAgIG1hcmdpbjogMnB4IDVweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gIH1cbn1cblxuLnNsaWRlcl9idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLndvcmstc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/our-work/our-work.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/our-work/our-work.component.ts ***!
  \***********************************************************/
/*! exports provided: OurWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurWorkComponent", function() { return OurWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/json/projects.json */ "./src/assets/json/projects.json");
var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/projects.json */ "./src/assets/json/projects.json", 1);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-card/project-card.component */ "./src/app/components/project-card/project-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var OurWorkComponent = /** @class */ (function () {
    function OurWorkComponent(modalService) {
        this.modalService = modalService;
        this.clicker = 0;
    }
    OurWorkComponent.prototype.onResize = function (event) {
        this.adjustScreen(event.target.innerWidth);
    };
    OurWorkComponent.prototype.ngOnInit = function () {
        this.adjustScreen(window.innerWidth);
    };
    OurWorkComponent.prototype.showProjectCard = function (data) {
        var card = new _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_3__["ProjectCardComponent"](this.modalService);
        card.open(data);
    };
    OurWorkComponent.prototype.foward = function () {
        if (this.clicker < _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_1__.length - this.displayCount) {
            this.clicker++;
            this.listedProjects = _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_1__.slice(0 + this.clicker, this.displayCount + this.clicker);
        }
    };
    OurWorkComponent.prototype.backward = function () {
        if (this.clicker > 0) {
            this.clicker--;
            this.listedProjects = _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_1__.slice(0 + this.clicker, this.displayCount + this.clicker);
        }
    };
    OurWorkComponent.prototype.adjustScreen = function (width) {
        if (width <= 767) {
            this.displayCount = 1;
        }
        else if (width < 770) {
            this.displayCount = 2;
        }
        else if (width < 1300) {
            this.displayCount = 2;
        }
        else {
            this.displayCount = 3;
        }
        this.listedProjects = _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_1__.slice(0, this.displayCount);
    };
    OurWorkComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OurWorkComponent.prototype, "onResize", null);
    OurWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-work',
            template: __importDefault(__webpack_require__(/*! raw-loader!./our-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/our-work/our-work.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./our-work.component.scss */ "./src/app/components/our-work/our-work.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], OurWorkComponent);
    return OurWorkComponent;
}());



/***/ }),

/***/ "./src/app/components/project-card/project-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".project-modal {\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n\n.project-modal .close {\n  outline: none !important;\n}\n\n.modal-body {\n  text-align: center;\n}\n\n.modal-footer {\n  padding-bottom: 10px;\n}\n\n.modal-title {\n  font-weight: bold;\n}\n\n.project-description {\n  text-align: justify;\n  margin-top: 10px;\n}\n\n.modal-body .social-media-links {\n  margin-top: 10px;\n}\n\n.social-link {\n  padding: 1%;\n}\n\n.social-link .fa {\n  color: #000000;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvZGVKdW5jdGlvbi1zaXRlL2NvZGVKdW5jdGlvbi1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtbW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LW1vZGFsIC5jbG9zZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1vZGFsLWJvZHkgLnNvY2lhbC1tZWRpYS1saW5rcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwtbGluayB7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4uc29jaWFsLWxpbmsgLmZhIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4iLCIucHJvamVjdC1tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3QtbW9kYWwgLmNsb3NlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubW9kYWwtYm9keSAuc29jaWFsLW1lZGlhLWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbC1saW5rIHtcbiAgcGFkZGluZzogMSU7XG59XG5cbi5zb2NpYWwtbGluayAuZmEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/project-card/project-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProjectCardComponent = /** @class */ (function () {
    function ProjectCardComponent(modalService) {
        this.modalService = modalService;
    }
    ProjectCardComponent_1 = ProjectCardComponent;
    ProjectCardComponent.prototype.ngOnInit = function () { };
    ProjectCardComponent.prototype.open = function (data) {
        var modalRef = this.modalService.open(ProjectCardComponent_1);
        modalRef.componentInstance.data = data;
        modalRef.componentInstance.activeModal = modalRef;
    };
    ProjectCardComponent.prototype.close = function () {
        this.activeModal.close();
    };
    var ProjectCardComponent_1;
    ProjectCardComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    ProjectCardComponent = ProjectCardComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-card',
            template: __importDefault(__webpack_require__(/*! raw-loader!./project-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-card/project-card.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./project-card.component.scss */ "./src/app/components/project-card/project-card.component.scss")).default]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project-card-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./project-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-card/project-card.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());



/***/ }),

/***/ "./src/app/components/teamSection/teamSection.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/teamSection/teamSection.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hover-profile-card {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.hover-profile-card .imgHover {\n  width: 150px;\n}\n\n.hover-profile-card:hover .imgHover {\n  opacity: 0.3;\n}\n\n.hover-profile-card:hover .imgIcon {\n  opacity: 1;\n}\n\n.hover-profile-card:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvZGVKdW5jdGlvbi1zaXRlL2NvZGVKdW5jdGlvbi1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy90ZWFtU2VjdGlvbi90ZWFtU2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZWFtU2VjdGlvbi90ZWFtU2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbVNlY3Rpb24vdGVhbVNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXItcHJvZmlsZS1jYXJkIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaG92ZXItcHJvZmlsZS1jYXJkIC5pbWdIb3ZlciB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uaG92ZXItcHJvZmlsZS1jYXJkOmhvdmVyIC5pbWdIb3ZlciB7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuXG4uaG92ZXItcHJvZmlsZS1jYXJkOmhvdmVyIC5pbWdJY29uIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaG92ZXItcHJvZmlsZS1jYXJkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi5ob3Zlci1wcm9maWxlLWNhcmQge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ob3Zlci1wcm9maWxlLWNhcmQgLmltZ0hvdmVyIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uaG92ZXItcHJvZmlsZS1jYXJkOmhvdmVyIC5pbWdIb3ZlciB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmhvdmVyLXByb2ZpbGUtY2FyZDpob3ZlciAuaW1nSWNvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ob3Zlci1wcm9maWxlLWNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/teamSection/teamSection.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/teamSection/teamSection.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSectionComponent", function() { return TeamSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _assets_json_team_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/json/team.json */ "./src/assets/json/team.json");
var _assets_json_team_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/team.json */ "./src/assets/json/team.json", 1);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member-card/member-card.component */ "./src/app/components/member-card/member-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var TeamSectionComponent = /** @class */ (function () {
    function TeamSectionComponent(modalService) {
        this.modalService = modalService;
        this.teamMembers = _assets_json_team_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    TeamSectionComponent.prototype.ngOnInit = function () { };
    TeamSectionComponent.prototype.showMemberCard = function (index) {
        var card = new _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_3__["MemberCardComponent"](this.modalService);
        card.open(_assets_json_team_json__WEBPACK_IMPORTED_MODULE_1__[index]["fullName"], _assets_json_team_json__WEBPACK_IMPORTED_MODULE_1__[index]["image"], _assets_json_team_json__WEBPACK_IMPORTED_MODULE_1__[index]["description"], _assets_json_team_json__WEBPACK_IMPORTED_MODULE_1__[index]["social"]);
    };
    TeamSectionComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    TeamSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'team-members',
            template: __importDefault(__webpack_require__(/*! raw-loader!./teamSection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teamSection/teamSection.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./teamSection.component.scss */ "./src/app/components/teamSection/teamSection.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], TeamSectionComponent);
    return TeamSectionComponent;
}());



/***/ }),

/***/ "./src/app/components/tech-blog/tech-blog.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tech-blog/tech-blog.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar {\n    width: 10px;\n    height: 10px;    \n}\n\n.blog-story img{\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.blog-story .card {\n    cursor: pointer;\n    height: 100%;\n    margin-bottom: 10px;\n}\n\n.blog-story .card-body {\n    padding-bottom: 0;\n}\n\n.blog-story .card-footer {\n    padding-top: 3px;\n    padding-right: 5px;\n}\n\n.blog-story .card-footer {\n    font-size: 0.9em;\n    padding-top: 0;\n}\n\n.card .author .avatar {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 5px;\n}\n\n.blog-story .author span{\n    color: #6f81a4;\n    padding-left: 4px;\n    padding-top: 4px;\n}\n\n.card .author, .card .stats {\n    display: inline-flex;\n}\n\n.card .card-footer .stats .fa {\n    position: relative;\n    top: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    font-size: 18px;\n}\n\n.card .card-footer .stats {\n    color: #6f81a4;\n}\n\n.fa-clock-o:before {\n    content: \"\\f017\";\n    box-sizing: border-box;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWNoLWJsb2cvdGVjaC1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWNoLWJsb2cvdGVjaC1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7ICAgIFxufVxuXG4uYmxvZy1zdG9yeSBpbWd7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJsb2ctc3RvcnkgLmNhcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJsb2ctc3RvcnkgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5ibG9nLXN0b3J5IC5jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5ibG9nLXN0b3J5IC5jYXJkLWZvb3RlciB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmNhcmQgLmF1dGhvciAuYXZhdGFyIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5ibG9nLXN0b3J5IC5hdXRob3Igc3BhbntcbiAgICBjb2xvcjogIzZmODFhNDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY2FyZCAuYXV0aG9yLCAuY2FyZCAuc3RhdHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2FyZCAuY2FyZC1mb290ZXIgLnN0YXRzIC5mYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2FyZCAuY2FyZC1mb290ZXIgLnN0YXRzIHtcbiAgICBjb2xvcjogIzZmODFhNDtcbn1cblxuLmZhLWNsb2NrLW86YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjAxN1wiO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/tech-blog/tech-blog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tech-blog/tech-blog.component.ts ***!
  \*************************************************************/
/*! exports provided: TechBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechBlogComponent", function() { return TechBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _assets_json_blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/json/blogs.json */ "./src/assets/json/blogs.json");
var _assets_json_blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/blogs.json */ "./src/assets/json/blogs.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TechBlogComponent = /** @class */ (function () {
    function TechBlogComponent() {
        this.blogs = _assets_json_blogs_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    TechBlogComponent.prototype.ngOnInit = function () {
    };
    TechBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tech-blog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tech-blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tech-blog/tech-blog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tech-blog.component.css */ "./src/app/components/tech-blog/tech-blog.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TechBlogComponent);
    return TechBlogComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/assets/json/blogs.json":
/*!************************************!*\
  !*** ./src/assets/json/blogs.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"An Introduction to Cloud Services\",\"url\":\"https://medium.com/@rajitha1998/an-introduction-to-cloud-services-67de8c2a3247\",\"image\":\"cloudService.jpeg\",\"readingTime\":\"5\",\"author\":{\"name\":\"Rajitha Warusavitarana\",\"image\":\"rajitha.jpg\"}},{\"title\":\"Gamers around the world can help fight COVID-19 (Coronavirus)\",\"url\":\"https://medium.com/@hasal98fernando/gamers-around-the-world-can-help-fight-covid-19-corona-virus-28f29bb84095\",\"image\":\"helpCovid.jpeg\",\"readingTime\":\"2\",\"author\":{\"name\":\"Hasal Fernando\",\"image\":\"hasal.jpg\"}},{\"title\":\"Dive into Docker basics\",\"url\":\"https://medium.com/@janethavishka/dive-into-docker-basics-f2c01640a6fc\",\"image\":\"basicDocker.png\",\"readingTime\":\"4\",\"author\":{\"name\":\"Janeth Fernando\",\"image\":\"janeth.jpg\"}}]");

/***/ }),

/***/ "./src/assets/json/projects.json":
/*!***************************************!*\
  !*** ./src/assets/json/projects.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"projectName\":\"Sertum\",\"image\":\"sertum.jpg\",\"largeDescription\":\"Sertum is a robot which can do both cleaning and serving on its own. It can be operated manually as well as automatically. In the automatic mode, Sertum can detect and avoid barriers and do the cleaning process on its own. For obstacle detection, an ultrasonic sensor is used. In restaurants, Sertum can be used to deliver the order to the relevant table number. The cleaning process is done using water and three main cleaners. A built in fan is also used. During the cleaning process, the water flow is controlled by a solenoid valve. In the serving process, the cook needs to place the ordered meal on Sertum's platform and provide the table number to be delivered to.\",\"description\":\"Sertum is a robot which can do both cleaning and serving on its own.\"},{\"projectName\":\"Cake-a-licious Website\",\"image\":\"Cake-a-licious.png\",\"largeDescription\":\"codeJunction team proudly designed a WordPress website for cake-a-licious sweets shop in Moratuwa Sri Lanka. This website contains a gallery page, a contact us page, an Instagram and Facebook plugin has been embedded in order to see the latest posts on the website.\",\"description\":\"The official website of cake-a-licious cake store.\",\"isWeb\":\"true\"},{\"projectName\":\"Ajith motors Entry System\",\"image\":\"ajithMotors.jpg\",\"largeDescription\":\"This is a Java application to manage Ajith Motors daily transactions, keep company records etc. There are primarily two interfaces for two main roles. One role is the admin and the other role is the staff. The cashier can use his/her account and according to the type of account (staff/admin) the correct interface will be displayed. Admins can view all the income, expenditure, during a time period which they put as a filter.\",\"description\":\"A data entry managment system deployed in Ajith motors car sale.\"},{\"projectName\":\"Fhix 45 Website\",\"image\":\"fhix.png\",\"largeDescription\":\"codeJunction created a Wordpress website for Fhix 45 Gym at Kollupitiya Sri Lanka. This website consisted of a home page with sections, a blog page, a gallery page, join us popup card and a contact us form. Also, this website has an Instagram and Facebook plugins embedded to view the latest Instagram and Facebook posts.\",\"description\":\"The official website of Fhix 45 gymnasium.\",\"isWeb\":\"true\"},{\"projectName\":\"codeJunction Website\",\"image\":\"codeJuctionWebsite.png\",\"description\":\"The official website of CodeJunction. (Open Source ❤️)\",\"largeDescription\":\"This is the official website 0f codeJunction. An open-source Angular based project maintained by the codeJunction crew. We welcome everyone to contribute in this project. To get started please visit our Github repository.\",\"github\":\"https://github.com/codeJunctionTeam/codeJunction-site\",\"isWeb\":\"true\"},{\"projectName\":\"Fire call\",\"image\":\"firecall.jpg\",\"description\":\"A sound wave classifying tool which analyse audio content. (Open Source ❤️)\",\"largeDescription\":\"Fire call is an open-source project which is developed using python and flask framework. This project aims to classify sound waves through analysing audio content. We welcome everyone to contribute in this project. To get started please visit our Github repository.\",\"github\":\"https://github.com/codeJunctionTeam/fire-call\"}]");

/***/ }),

/***/ "./src/assets/json/team.json":
/*!***********************************!*\
  !*** ./src/assets/json/team.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"firstName\":\"Hasal\",\"fullName\":\"Hasal Fernando\",\"image\":\"hasal.jpg\",\"social\":{\"linkedin\":\"https://www.linkedin.com/in/hasalfernando/\",\"facebook\":\"https://www.facebook.com/hasal98fernando/\",\"instagram\":\"https://www.instagram.com/hasalfernando/\"},\"description\":\"Royalist, Co-Founder of codeJunction, undergraduate who's doing his internship as a Trainee Software Engineer at Zone 24x7. Developed passion towards tech from childhood. Quiet person by nature but, surely QUITE LOUD when it comes to tech. Apart from coding, loves to edit videos. Unsurprisingly, most of them are about tech and others are about the places he travels to, during his leisurely hours. \"},{\"firstName\":\"Janeth\",\"fullName\":\"Janeth Fernando\",\"image\":\"janeth.jpg\",\"social\":{\"linkedin\":\"https://www.linkedin.com/in/janethfernando/\",\"facebook\":\"https://www.facebook.com/janethavishka\",\"instagram\":\"https://www.instagram.com/_jan.eth_/\"},\"description\":\"Janeth is a software engineering undergraduate who currently does his internship at WSO2. He went to S.Thomas' College Mount Lavinia and he has done pretty well in both studies and extracurricular activities. Working in the ICT society at STC brought him the passion for being a software engineer. In his free time, he loves to travel around with his friends. Photography is one of his hobbies.\"},{\"firstName\":\"Nandula\",\"fullName\":\"Nandula Perera\",\"image\":\"nandula.png\",\"social\":{\"linkedin\":\"https://www.linkedin.com/in/nandulaperera/\",\"facebook\":\"https://www.facebook.com/nandula.perera.927\",\"instagram\":\"https://www.instagram.com/nandulaperera/\"},\"description\":\"Computer Science undergraduate at University of Colombo School of Computing. Studied at Lyceum International School, Panadura and excelled in both studies and extra activities. Has a great passion towards music, problem solving and application development. Interested to play the piano and the guitar during his free time.\"},{\"firstName\":\"Purushoth\",\"fullName\":\"Purushoth Anandaraja\",\"image\":\"purushoth.jpg\",\"social\":{\"linkedin\":\"https://www.linkedin.com/in/purushoth-anandaraja-ba9603160/\",\"facebook\":\"https://www.facebook.com/purushoth.anandaraja.5\",\"instagram\":\"https://www.instagram.com/purushoth_h/\"},\"description\":\"Purushoth is an undergraduate from IIT, who's reading for a degree in Software Engineering. He is currently working as an intern at Global Market Technologies. He is interested in Software development and Project Management. He writes Blogs and loves to learn new trends in IT.\"},{\"firstName\":\"Rajitha\",\"fullName\":\"Rajitha Warusavitarana\",\"image\":\"rajitha.jpg\",\"social\":{\"linkedin\":\"https://www.linkedin.com/in/rajithawaru/\",\"facebook\":\"https://www.facebook.com/rajitha.Warusavitarana\",\"instagram\":\"https://www.instagram.com/rajitha.98/\"},\"description\":\"Rajitha is a software engineering undergraduate who is currently working as an intern at 99X Technology. He is passionate in cloud  computing, web development, data science and open-source.  He is a fan of food and ready to eat kottu at any time.  Rajitha loves to travel, swim, sing and party during his free time.\"}]");

/***/ }),

/***/ "./src/assets/json/teamCarousel.json":
/*!*******************************************!*\
  !*** ./src/assets/json/teamCarousel.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"image\":\"teamPic1.jpg\",\"description\":\"Team Gatherings . . .\"},{\"image\":\"teamPic2.jpg\",\"description\":\"Our Team presenting Sertum Robot in an exhibition . . .\"},{\"image\":\"teamPic3.jpg\",\"description\":\"Team working on a website . . .\"}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/codeJunction-site/codeJunction-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map