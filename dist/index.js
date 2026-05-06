"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=c(function(x,g){
var n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-gamma/dist'),o=require('@stdlib/math-base-special-pow/dist');function p(r,e){var u,s,v,i,a;return n(r)||n(e)||r<=0||e<=0?NaN:(a=t(1+1/r),i=t(1+2/r),v=t(1+3/r),s=t(1+4/r),u=-6*o(a,4)+12*a*a*i-3*i*i-4*a*v+s,u/=o(i-a*a,2),u)}g.exports=p
});var f=q();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
