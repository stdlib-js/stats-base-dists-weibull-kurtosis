"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var q=c(function(x,g){
var n=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-gamma/dist'),o=require('@stdlib/math-base-special-pow/dist');function p(r,e){var i,s,v,t,a;return n(r)||n(e)||r<=0||e<=0?NaN:(a=u(1+1/r),t=u(1+2/r),v=u(1+3/r),s=u(1+4/r),i=-6*o(a,4)+12*a*a*t-3*t*t-4*a*v+s,i/=o(t-a*a,2),i)}g.exports=p
});var f=q();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
