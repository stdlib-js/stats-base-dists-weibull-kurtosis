// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var a=s,m=t,i=e;var r=function(s,t){var e,r,n,d,p;return a(s)||a(t)||s<=0||t<=0?NaN:(p=m(1+1/s),d=m(1+2/s),n=m(1+3/s),r=m(1+4/s),e=-6*i(p,4)+12*p*p*d-3*d*d-4*p*n+r,e/=i(d-p*p,2))};export{r as default};
//# sourceMappingURL=index.mjs.map
