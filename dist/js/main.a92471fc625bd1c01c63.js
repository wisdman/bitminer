webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./modules/module.ts
class Module {
    constructor(context) {
        this.context = context;
    }
    init() { }
}

// EXTERNAL MODULE: ../node_modules/barba.js/dist/barba.js
var barba = __webpack_require__(2);
var barba_default = /*#__PURE__*/__webpack_require__.n(barba);

// CONCATENATED MODULE: ./modules/barba.ts


class barba_BarbaModule extends Module {
    init() {
        barba_default.a.Prefetch.init();
        barba_default.a.Pjax.start();
    }
}

// EXTERNAL MODULE: ../node_modules/particlesjs/dist/particles.min.js
var particles_min = __webpack_require__(3);
var particles_min_default = /*#__PURE__*/__webpack_require__.n(particles_min);

// CONCATENATED MODULE: ./modules/particles.ts


class particles_ParticlesModule extends Module {
    init() {
        particles_min_default.a.init({
            selector: '#particles',
            color: '#666666',
            maxParticles: Math.round(window.innerWidth / 10),
            sizeVariations: 3,
            connectParticles: true
        });
    }
}

// CONCATENATED MODULE: ./modules/index.ts



// CONCATENATED MODULE: ./main.ts

const context = {};
context['BarbaModule'] = new barba_BarbaModule(context);
context['ParticlesModule'] = new particles_ParticlesModule(context);
function main() {
    for (let key in context) {
        context[key].init();
    }
}
const domReadyHandler = () => {
    document.removeEventListener('DOMContentLoaded', domReadyHandler);
    main();
};
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', domReadyHandler);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}


/***/ })
],[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2JhcmJhLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvcGFydGljbGVzLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7OztBQ0xpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FDWkE7QUFDQTs7O0FDRHdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9tYWluLmE5MjQ3MWZjNjI1YmQxYzAxYzYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbiAgICBpbml0KCkgeyB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvbW9kdWxlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGUnO1xuaW1wb3J0IEJhcmJhIGZyb20gJ2JhcmJhLmpzJztcbmV4cG9ydCBjbGFzcyBCYXJiYU1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgQmFyYmEuUHJlZmV0Y2guaW5pdCgpO1xuICAgICAgICBCYXJiYS5QamF4LnN0YXJ0KCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL2JhcmJhLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGUnO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdwYXJ0aWNsZXNqcyc7XG5leHBvcnQgY2xhc3MgUGFydGljbGVzTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBpbml0KCkge1xuICAgICAgICBQYXJ0aWNsZXMuaW5pdCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWNsZXMnLFxuICAgICAgICAgICAgY29sb3I6ICcjNjY2NjY2JyxcbiAgICAgICAgICAgIG1heFBhcnRpY2xlczogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvIDEwKSxcbiAgICAgICAgICAgIHNpemVWYXJpYXRpb25zOiAzLFxuICAgICAgICAgICAgY29ubmVjdFBhcnRpY2xlczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvcGFydGljbGVzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9iYXJiYSc7XG5leHBvcnQgKiBmcm9tICcuL3BhcnRpY2xlcyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBCYXJiYU1vZHVsZSwgUGFydGljbGVzTW9kdWxlLCB9IGZyb20gJy4vbW9kdWxlcyc7XG5jb25zdCBjb250ZXh0ID0ge307XG5jb250ZXh0WydCYXJiYU1vZHVsZSddID0gbmV3IEJhcmJhTW9kdWxlKGNvbnRleHQpO1xuY29udGV4dFsnUGFydGljbGVzTW9kdWxlJ10gPSBuZXcgUGFydGljbGVzTW9kdWxlKGNvbnRleHQpO1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gY29udGV4dCkge1xuICAgICAgICBjb250ZXh0W2tleV0uaW5pdCgpO1xuICAgIH1cbn1cbmNvbnN0IGRvbVJlYWR5SGFuZGxlciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZG9tUmVhZHlIYW5kbGVyKTtcbiAgICBtYWluKCk7XG59O1xuc3dpdGNoIChkb2N1bWVudC5yZWFkeVN0YXRlKSB7XG4gICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkb21SZWFkeUhhbmRsZXIpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdpbnRlcmFjdGl2ZSc6XG4gICAgY2FzZSAnY29tcGxldGUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICAgIG1haW4oKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICJdLCJzb3VyY2VSb290IjoiIn0=