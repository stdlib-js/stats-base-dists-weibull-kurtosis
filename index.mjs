// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.3.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";function m(m,a){var i,n,r,d,p;return s(m)||s(a)||m<=0||a<=0?NaN:(p=t(1+1/m),d=t(1+2/m),r=t(1+3/m),n=t(1+4/m),i=-6*e(p,4)+12*p*p*d-3*d*d-4*p*r+n,i/=e(d-p*p,2))}export{m as default};
//# sourceMappingURL=index.mjs.map
