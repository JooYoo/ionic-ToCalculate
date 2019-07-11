(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar> -->\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <!-- <ion-title color='medium'>\n      Standard\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<div>\n  <ion-list class=\"list-display\">\n    <ion-label class=\"row-display\" *ngFor=\"let equation of equations\">\n      {{equation.expression}}\n    </ion-label>\n  </ion-list>\n</div>\n\n<ion-content>\n  <div class=\"container-input\">\n    <div id=\"equation-review\">{{prepareCal}}</div>\n    {{inputNum}}\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <div class=\"container-btns\">\n\n        <ion-row class=\"btns-row\">\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"clearAll()\" Color=\"dark\" expand=\"full\">AC</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"backSpace()\" Color=\"dark\" expand=\"full\">&#x232b;</ion-button>\n          </ion-col>\n          <!-- <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '%'\" (click)=\"addInputs()\" Color=\"dark\" expand=\"full\">%</ion-button>\n          </ion-col> -->\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '/'\" (click)=\"displayNums()\" class=\"btn-fn\" Color=\"dark\" expand=\"full\">&#247;\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '*'\" (click)=\"displayNums()\" class=\"btn-fn\" Color=\"dark\" expand=\"full\">&#xd7;\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"btns-row\">\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '7'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">7</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '8'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">8</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '9'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">9</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '-'\" (click)=\"displayNums()\" class=\"btn-fn\" Color=\"dark\" expand=\"full\">&#x2212;\n            </ion-button>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"btns-row\">\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '4'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">4</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '5'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">5</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '6'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">6</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '&#x2b;'\" (click)=\"displayNums()\" class=\"btn-fn\" expand=\"full\" Color=\"dark\">\n              &#x2b;</ion-button>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"btns-row\">\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '1'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">1</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '2'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">2</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '3'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">3</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button style=\"height:191%; bottom:0; top: 0;\" (click)=\"input = '='\" (click)=\"getResult()\"\n              class=\"btn-fn\" Color=\"gold\" expand=\"full\">&#x3d;</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"6\">\n            <ion-button (click)=\"input = '0'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">0</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '.'\" (click)=\"displayNums()\" Color=\"medium\" expand=\"full\">&#8226;</ion-button>\n          </ion-col>\n\n\n        </ion-row>\n\n        <!-- <ion-row class=\"btns-row\">\n          <ion-col class=\"grid-col-gap\" size=\"6\">\n            <ion-button (click)=\"input = '0'\" (click)=\"addInputs()\" Color=\"dark\" expand=\"full\">0</ion-button>\n          </ion-col>\n          <ion-col class=\"grid-col-gap\" size=\"3\">\n            <ion-button (click)=\"input = '.'\" (click)=\"addInputs()\" Color=\"dark\" expand=\"full\">&#8226;</ion-button>\n          </ion-col>\n        </ion-row> -->\n\n      </div>\n\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-button {\n  font-size: 25px;\n  height: 80px;\n  margin-left: 5px;\n  border-radius: 25px !important; }\n\n.grid-col-gap {\n  padding: 0;\n  margin: 0; }\n\n.btns-row {\n  margin-left: 0px; }\n\n.list-display {\n  margin-top: auto;\n  margin-bottom: 0;\n  margin: 20px; }\n\n.row-display {\n  margin: 10px 0 10px 0;\n  font-size: 20px;\n  text-align: end;\n  color: gray;\n  font-weight: lighter; }\n\n.container-input {\n  font-size: 60px;\n  color: black;\n  text-align: end;\n  font-weight: normal;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  margin-right: 20px; }\n\n.container-btns {\n  bottom: 0; }\n\n.btn-fn {\n  font-size: 30px; }\n\n#equation-review {\n  font-size: 20px;\n  font-weight: lighter; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb295b28vRGV2L3RvLWNhbGN1bGF0ZS9Ub0NhbGN1bGF0ZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksU0FBUyxFQUFBOztBQUdiO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbn1cblxuLmdyaWQtY29sLWdhcCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5idG5zLXJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmxpc3QtZGlzcGxheSB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmNvbnRhaW5lci1pbnB1dCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvbnRhaW5lci1idG5zIHtcbiAgICBib3R0b206IDA7XG59XG5cbi5idG4tZm4ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI2VxdWF0aW9uLXJldmlld3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () {
        this.equations = [];
        this.inputNum = '0';
        this.input = '0';
        this.prepareCal = '';
        this.newEquationId = 0;
        this.isStart = true;
    };
    HomePage.prototype.displayNums = function () {
        if (this.isStart) {
            this.inputNum = '';
            this.isStart = false;
        }
        else if (this.inputNum === '0') {
            this.inputNum = '0';
        }
        if (this.isResult) {
            this.inputNum = '';
            this.isResult = false;
        }
        if (this.inputNum.length < 11) {
            this.prepareCal += this.input;
            this.operatorProcessor();
            if (this.input == '+' || this.input == '-' || this.input == '*' || this.input == '/') {
                return;
            }
            if (this.input === '.' && this.inputNum[0] == '.') {
                this.inputNum = '0.';
                this.prepareCal = '0.';
            }
            else if (this.inputNum[0] === '0' && this.input === '0') {
                this.inputNum = '0';
            }
            else {
                this.inputNum += this.input;
            }
        }
        this.input = '0';
    };
    HomePage.prototype.operatorProcessor = function () {
        var i = this.prepareCal.length - 2;
        if (this.prepareCal[i] == '+' || this.prepareCal[i] == '-' || this.prepareCal[i] == '*' || this.prepareCal[i] == '/') {
            this.inputNum = '';
        }
    };
    HomePage.prototype.getResult = function () {
        if (eval(this.prepareCal)) {
            this.result = eval(this.prepareCal);
        }
        if (!this.result) {
            return;
        }
        var resultLength = String(this.result).length;
        if (resultLength > 11) {
            this.inputNum = String(this.result).slice(0, 8 - resultLength);
        }
        else {
            this.inputNum = String(this.result);
        }
        // preapre Equation
        this.newEquationExpression = this.prepareCal + '=' + this.result + '\xa0\xa0';
        this.addEquation();
        this.prepareCal = '';
        this.isResult = true;
    };
    HomePage.prototype.backSpace = function () {
        // inputNum will remove one digit from end
        if (this.prepareCal.length == 1 || this.inputNum.length == 1) {
            this.inputNum = '0';
            this.prepareCal = '';
        }
        else if (this.inputNum.length == 1 && this.prepareCal.length > 1) {
            this.inputNum = '0';
            this.prepareCal = this.prepareCal.slice(0, this.prepareCal.length - 1);
        }
        else {
            this.skipOperator();
        }
    };
    HomePage.prototype.skipOperator = function () {
        if (this.prepareCal[this.prepareCal.length - 1] == '+' ||
            this.prepareCal[this.prepareCal.length - 1] == '-' ||
            this.prepareCal[this.prepareCal.length - 1] == '*' ||
            this.prepareCal[this.prepareCal.length - 1] == '/') {
            this.prepareCal = this.prepareCal.slice(0, this.prepareCal.length - 1);
        }
        else {
            this.inputNum = this.inputNum.slice(0, this.inputNum.length - 1);
            this.prepareCal = this.prepareCal.slice(0, this.prepareCal.length - 1);
        }
    };
    HomePage.prototype.clearAll = function () {
        this.prepareCal = '';
        this.inputNum = '0';
        this.equations = [];
        this.isStart = true;
    };
    HomePage.prototype.addEquation = function () {
        this.equations.push({
            id: this.newEquationId,
            expression: this.newEquationExpression
        });
        this.newEquationId++;
        this.newEquationExpression = '';
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map