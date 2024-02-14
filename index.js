// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(r){return r!=r}var t=Math.floor;function n(r){return t(r)===r}var e=Number,o=e.NEGATIVE_INFINITY;function i(r){return Math.abs(r)}var a,f=2146435072,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,l=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol:void 0,p="function"==typeof s?s.toStringTag:"",y=u&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,i;if(null==r)return c.call(r);n=r[p],i=p,t=null!=(o=r)&&l.call(o,i);try{r[p]=void 0}catch(t){return c.call(r)}return e=c.call(r),t?r[p]=n:delete r[p],e}:function(r){return c.call(r)},v="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,w="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,t,n;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(v&&n instanceof Uint32Array||"[object Uint32Array]"===y(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?w:function(){throw new Error("not implemented")};var h,g=a,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,t,n;if("function"!=typeof b)return!1;try{t=new b([1,3.14,-3.14,NaN]),n=t,r=(A&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var m,I=h,N="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E(t=[1,3.14,-3.14,256,257]),n=t,r=(N&&n instanceof Uint8Array||"[object Uint8Array]"===y(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_:function(){throw new Error("not implemented")};var T,S=m,j="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,t,n;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,65536,65537]),n=t,r=(j&&n instanceof Uint16Array||"[object Uint16Array]"===y(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var O,k={uint16:T,uint8:S};(O=new k.uint16(1))[0]=4660;var x=52===new k.uint8(O.buffer)[0],G=!0===x?1:0,H=new I(1),W=new g(H.buffer);function L(r){return H[0]=r,W[G]}function P(r,t){var n,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(n=.5*i))+(1-o-n+(i*e-r*t))}var Y=-.16666666666666632;function $(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(Y+o*n):r-(o*(.5*t-e*n)-t-e*Y)}var M,C=1048575,R="function"==typeof Float64Array,Z="function"==typeof Float64Array?Float64Array:null,X="function"==typeof Float64Array?Float64Array:void 0;M=function(){var r,t,n;if("function"!=typeof Z)return!1;try{t=new Z([1,3.14,-3.14,NaN]),n=t,r=(R&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?X:function(){throw new Error("not implemented")};var q,z,B,D=!0===x?0:1,J=new M(1),K=new g(J.buffer),Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,tr="function"==typeof Float64Array?Float64Array:void 0;q=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr([1,3.14,-3.14,NaN]),n=t,r=(Q&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?tr:function(){throw new Error("not implemented")},!0===x?(z=1,B=0):(z=0,B=1);var nr={HIGH:z,LOW:B},er=new q(1),or=new g(er.buffer),ir=nr.HIGH,ar=nr.LOW;function fr(r,t){return or[ir]=r,or[ar]=t,er[0]}var ur=Number.POSITIVE_INFINITY,cr=e.NEGATIVE_INFINITY,lr=1023,sr=Number.POSITIVE_INFINITY,pr=e.NEGATIVE_INFINITY;function yr(r){return r===sr||r===pr}var vr="function"==typeof Object.defineProperty?Object.defineProperty:null,dr=Object.defineProperty;function wr(r){return"number"==typeof r}function hr(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function gr(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+hr(o):hr(o)+r,e&&(r="-"+r)),r}var Ar=String.prototype.toLowerCase,br=String.prototype.toUpperCase;function Fr(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!wr(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=gr(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=gr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===br.call(r.specifier)?br.call(n):Ar.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function mr(r){return"string"==typeof r}var Ir=Math.abs,Nr=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,_r=String.prototype.replace,Tr=/e\+(\d)$/,Sr=/e-(\d)$/,jr=/^(\d+)$/,Ur=/^(\d+)e/,Vr=/\.0$/,Or=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!wr(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Ir(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=_r.call(n,kr,"$1e"),n=_r.call(n,Or,"e"),n=_r.call(n,Vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_r.call(n,Tr,"e+0$1"),n=_r.call(n,Sr,"e-0$1"),r.alternate&&(n=_r.call(n,jr,"$1."),n=_r.call(n,Ur,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Er.call(r.specifier)?Er.call(n):Nr.call(n)}function Gr(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function Hr(r,t,n){var e=t-r.length;return e<0?r:r=n?r+Gr(e):Gr(e)+r}var Wr=String.fromCharCode,Lr=isNaN,Pr=Array.isArray;function Yr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function $r(r){var t,n,e,o,i,a,f,u,c;if(!Pr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,u=0;u<r.length;u++)if(mr(e=r[u]))a+=e;else{if(t=void 0!==e.precision,!(e=Yr(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(o=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,Lr(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,Lr(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=Fr(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!Lr(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Lr(i)?String(e.arg):Wr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=xr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=gr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Hr(e.arg,e.width,e.padRight)),a+=e.arg||"",f+=1}return a}var Mr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Rr(r){var t,n,e,o;for(n=[],o=0,e=Mr.exec(r);e;)(t=r.slice(o,Mr.lastIndex-e[0].length)).length&&n.push(t),n.push(Cr(e)),o=Mr.lastIndex,e=Mr.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function Zr(r){return"string"==typeof r}function Xr(r){var t,n;if(!Zr(r))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[Rr(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return $r.apply(null,t)}var qr=Object.prototype,zr=qr.toString,Br=qr.__defineGetter__,Dr=qr.__defineSetter__,Jr=qr.__lookupGetter__,Kr=qr.__lookupSetter__,Qr=function(){try{return vr({},"x",{}),!0}catch(r){return!1}}()?dr:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===zr.call(r))throw new TypeError(Xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===zr.call(n))throw new TypeError(Xr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(Jr.call(r,t)||Kr.call(r,t)?(e=r.__proto__,r.__proto__=qr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Br&&Br.call(r,t,n.get),a&&Dr&&Dr.call(r,t,n.set),r};function rt(r,t,n){Qr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var tt,nt,et,ot="function"==typeof Float64Array,it="function"==typeof Float64Array?Float64Array:null,at="function"==typeof Float64Array?Float64Array:void 0;tt=function(){var r,t,n;if("function"!=typeof it)return!1;try{t=new it([1,3.14,-3.14,NaN]),n=t,r=(ot&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?at:function(){throw new Error("not implemented")},!0===x?(nt=1,et=0):(nt=0,et=1);var ft={HIGH:nt,LOW:et},ut=new tt(1),ct=new g(ut.buffer),lt=ft.HIGH,st=ft.LOW;function pt(r,t,n,e){return ut[0]=r,t[e]=ct[lt],t[e+n]=ct[st],t}function yt(r){return pt(r,[0,0],1,0)}rt(yt,"assign",pt);var vt=[0,0];function dt(r,t){var n,e;return yt.assign(r,vt,1,0),n=vt[0],n&=2147483647,e=L(t),fr(n|=e&=2147483648,vt[1])}function wt(t,n,e,o){return r(t)||yr(t)?(n[o]=t,n[o+e]=0,n):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(n[o]=4503599627370496*t,n[o+e]=-52,n):(n[o]=t,n[o+e]=0,n)}rt((function(r){return wt(r,[0,0],1,0)}),"assign",wt);var ht,gt,At,bt="function"==typeof Float64Array,Ft="function"==typeof Float64Array?Float64Array:null,mt="function"==typeof Float64Array?Float64Array:void 0;ht=function(){var r,t,n;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),n=t,r=(bt&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?mt:function(){throw new Error("not implemented")},!0===x?(gt=1,At=0):(gt=0,At=1);var It={HIGH:gt,LOW:At},Nt=new ht(1),Et=new g(Nt.buffer),_t=It.HIGH,Tt=It.LOW;function St(r,t,n,e){return Nt[0]=r,t[e]=Et[_t],t[e+n]=Et[Tt],t}function jt(r){return St(r,[0,0],1,0)}rt(jt,"assign",St);var Ut=[0,0],Vt=[0,0];function Ot(t,n){var e,o;return 0===n||0===t||r(t)||yr(t)?t:(wt(t,Ut,1,0),n+=Ut[1],n+=function(r){var t=L(r);return(t=(t&f)>>>20)-lr|0}(t=Ut[0]),n<-1074?dt(0,t):n>1023?t<0?cr:ur:(n<=-1023?(n+=52,o=2220446049250313e-31):o=1,jt.assign(t,Vt,1,0),e=Vt[0],e&=2148532223,o*fr(e|=n+lr<<20,Vt[1])))}function kt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var xt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ht=16777216,Wt=5.960464477539063e-8,Lt=kt(20),Pt=kt(20),Yt=kt(20),$t=kt(20);function Mt(r,n,e,o,i,a,f,u,c){var l,s,p,y,v,d,w,h,g;for(y=a,g=o[e],h=e,v=0;h>0;v++)s=Wt*g|0,$t[v]=g-Ht*s|0,g=o[h-1]+s,h-=1;if(g=Ot(g,i),g-=8*t(.125*g),g-=w=0|g,p=0,i>0?(w+=v=$t[e-1]>>24-i,$t[e-1]-=v<<24-i,p=$t[e-1]>>23-i):0===i?p=$t[e-1]>>23:g>=.5&&(p=2),p>0){for(w+=1,l=0,v=0;v<e;v++)h=$t[v],0===l?0!==h&&(l=1,$t[v]=16777216-h):$t[v]=16777215-h;if(i>0)switch(i){case 1:$t[e-1]&=8388607;break;case 2:$t[e-1]&=4194303}2===p&&(g=1-g,0!==l&&(g-=Ot(1,i)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=$t[v];if(0===h){for(d=1;0===$t[a-d];d++);for(v=e+1;v<=e+d;v++){for(c[u+v]=xt[f+v],s=0,h=0;h<=u;h++)s+=r[h]*c[u+(v-h)];o[v]=s}return Mt(r,n,e+=d,o,i,a,f,u,c)}}if(0===g)for(e-=1,i-=24;0===$t[e];)e-=1,i-=24;else(g=Ot(g,-i))>=Ht?(s=Wt*g|0,$t[e]=g-Ht*s|0,i+=24,$t[e+=1]=s):$t[e]=0|g;for(s=Ot(1,i),v=e;v>=0;v--)o[v]=s*$t[v],s*=Wt;for(v=e;v>=0;v--){for(s=0,d=0;d<=y&&d<=e-v;d++)s+=Gt[d]*o[v+d];Yt[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Yt[v];for(n[0]=0===p?s:-s,s=Yt[0]-s,v=1;v<=e;v++)s+=Yt[v];return n[1]=0===p?s:-s,7&w}function Ct(r,t,n,e){var o,i,a,f,u,c,l;for((i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),c=i-(a=e-1),l=a+4,u=0;u<=l;u++)Lt[u]=c<0?0:xt[c],c+=1;for(u=0;u<=4;u++){for(o=0,c=0;c<=a;c++)o+=r[c]*Lt[a+(u-c)];Pt[u]=o}return Mt(r,t,4,Pt,f,4,i,a,Lt)}var Rt=Math.round;function Zt(r,t,n){var e,o,i,a,f;return i=r-1.5707963267341256*(e=Rt(.6366197723675814*r)),a=6077100506506192e-26*e,f=t>>20|0,n[0]=i-a,f-(L(n[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),n[0]=i-a,f-(L(n[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),n[0]=i-a)),n[1]=i-n[0]-a,e}var Xt=1.5707963267341256,qt=6077100506506192e-26,zt=2*qt,Bt=3*qt,Dt=4*qt,Jt=[0,0,0],Kt=[0,0];function Qt(r,t){var n,e,o,i,a,u,c;if((o=2147483647&L(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(o&C)?Zt(r,o,t):o<=1073928572?r>0?(c=r-Xt,t[0]=c-qt,t[1]=c-t[0]-qt,1):(c=r+Xt,t[0]=c+qt,t[1]=c-t[0]+qt,-1):r>0?(c=r-2*Xt,t[0]=c-zt,t[1]=c-t[0]-zt,2):(c=r+2*Xt,t[0]=c+zt,t[1]=c-t[0]+zt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Zt(r,o,t):r>0?(c=r-3*Xt,t[0]=c-Bt,t[1]=c-t[0]-Bt,3):(c=r+3*Xt,t[0]=c+Bt,t[1]=c-t[0]+Bt,-3):1075388923===o?Zt(r,o,t):r>0?(c=r-4*Xt,t[0]=c-Dt,t[1]=c-t[0]-Dt,4):(c=r+4*Xt,t[0]=c+Dt,t[1]=c-t[0]+Dt,-4);if(o<1094263291)return Zt(r,o,t);if(o>=f)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return J[0]=r,K[D]}(r),c=fr(o-((e=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)Jt[a]=0|c,c=16777216*(c-Jt[a]);for(Jt[2]=c,i=3;0===Jt[i-1];)i-=1;return u=Ct(Jt,Kt,e,i),r<0?(t[0]=-Kt[0],t[1]=-Kt[1],-u):(t[0]=Kt[0],t[1]=Kt[1],u)}var rn=[0,0],tn=Number.POSITIVE_INFINITY,nn=e.NEGATIVE_INFINITY,en=3.141592653589793;function on(r){return n(r/2)}function an(r){return on(r>0?r-1:r+1)}var fn=Math.sqrt;function un(r){return Math.abs(r)}var cn,ln,sn,pn="function"==typeof Float64Array,yn="function"==typeof Float64Array?Float64Array:null,vn="function"==typeof Float64Array?Float64Array:void 0;cn=function(){var r,t,n;if("function"!=typeof yn)return!1;try{t=new yn([1,3.14,-3.14,NaN]),n=t,r=(pn&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vn:function(){throw new Error("not implemented")},!0===x?(ln=1,sn=0):(ln=0,sn=1);var dn={HIGH:ln,LOW:sn},wn=new cn(1),hn=new g(wn.buffer),gn=dn.HIGH,An=dn.LOW;function bn(r,t,n,e){return wn[0]=r,t[e]=hn[gn],t[e+n]=hn[An],t}function Fn(r){return bn(r,[0,0],1,0)}rt(Fn,"assign",bn);var mn,In="function"==typeof Float64Array,Nn="function"==typeof Float64Array?Float64Array:null,En="function"==typeof Float64Array?Float64Array:void 0;mn=function(){var r,t,n;if("function"!=typeof Nn)return!1;try{t=new Nn([1,3.14,-3.14,NaN]),n=t,r=(In&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?En:function(){throw new Error("not implemented")};var _n=!0===x?0:1,Tn=new mn(1),Sn=new g(Tn.buffer);function jn(r,t){return Tn[0]=r,Sn[_n]=t>>>0,Tn[0]}function Un(r){return 0|r}var Vn,On=e.NEGATIVE_INFINITY,kn=Number.POSITIVE_INFINITY,xn=2147483647,Gn="function"==typeof Float64Array,Hn="function"==typeof Float64Array?Float64Array:null,Wn="function"==typeof Float64Array?Float64Array:void 0;Vn=function(){var r,t,n;if("function"!=typeof Hn)return!1;try{t=new Hn([1,3.14,-3.14,NaN]),n=t,r=(Gn&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wn:function(){throw new Error("not implemented")};var Ln=!0===x?1:0,Pn=new Vn(1),Yn=new g(Pn.buffer);function $n(r,t){return Pn[0]=r,Yn[Ln]=t>>>0,Pn[0]}var Mn=1048576,Cn=[1,1.5],Rn=[0,.5849624872207642],Zn=[0,1.350039202129749e-8],Xn=1048576,qn=1083179008,zn=1e300,Bn=1e-300,Dn=[0,0],Jn=[0,0];function Kn(t,e){var o,i,a,f,u,c,l,s,p,y,v,d,w,h;if(r(t)||r(e))return NaN;if(Fn.assign(e,Dn,1,0),u=Dn[0],0===Dn[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return fn(t);if(-.5===e)return 1/fn(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(yr(e))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:un(r)<1==(t===kn)?0:kn}(t,e)}if(Fn.assign(t,Dn,1,0),f=Dn[0],0===Dn[1]){if(0===f)return function(r,t){return t===On?kn:t===kn?0:t>0?an(t)?r:0:an(t)?dt(kn,r):kn}(t,e);if(1===t)return 1;if(-1===t&&an(e))return-1;if(yr(t))return t===On?Kn(-0,-e):e<0?0:kn}if(t<0&&!1===n(e))return(t-t)/(t-t);if(a=un(t),o=f&xn|0,i=u&xn|0,l=u>>>31|0,c=(c=f>>>31|0)&&an(e)?-1:1,i>1105199104){if(i>1139802112)return function(r,t){return(L(r)&xn)<=1072693247?t<0?1/0:0:t>0?1/0:0}(t,e);if(o<1072693247)return 1===l?c*zn*zn:c*Bn*Bn;if(o>1072693248)return 0===l?c*zn*zn:c*Bn*Bn;v=function(r,t){var n,e,o,i,a,f;return n=(a=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=jn(e=(i=1.4426950216293335*o)+a,0))-i),r[0]=e,r[1]=n,r}(Jn,a)}else v=function(r,t,n){var e,o,i,a,f,u,c,l,s,p,y,v,d,w,h,g,A,b,F,m,I;return b=0,n<Mn&&(b-=53,n=L(t*=9007199254740992)),b+=(n>>20)-lr|0,n=1072693248|(F=1048575&n|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,n-=Mn),a=jn(o=(g=(t=$n(t,n))-(c=Cn[m]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),u=$n(0,e+=m<<18),h=(i=o*o)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),u=jn(u=3+(i=a*a)+(h+=(f=A*(g-a*u-a*(t-(u-c))))*(a+o)),0),d=(y=-7.028461650952758e-9*(s=jn(s=(g=a*u)+(A=f*u+(h-(u-3-i))*o),0))+.9617966939259756*(A-(s-g))+Zn[m])-((v=jn(v=(p=.9617967009544373*s)+y+(l=Rn[m])+(w=b),0))-w-l-p),r[0]=v,r[1]=d,r}(Jn,a,o);if(d=(y=(e-(s=jn(e,0)))*v[0]+e*v[1])+(p=s*v[0]),Fn.assign(d,Dn,1,0),w=Un(Dn[0]),h=Un(Dn[1]),w>=qn){if(0!=(w-qn|h))return c*zn*zn;if(y+8008566259537294e-32>d-p)return c*zn*zn}else if((w&xn)>=1083231232){if(0!=(w-3230714880|h))return c*Bn*Bn;if(y<=d-p)return c*Bn*Bn}return d=function(r,t,n){var e,o,i,a,f,u,c,l,s,p;return s=((l=r&xn|0)>>20)-lr|0,c=0,l>1071644672&&(o=$n(0,((c=r+(Xn>>s+1)>>>0)&~(C>>(s=((c&xn)>>20)-lr|0)))>>>0),c=(c&C|Xn)>>20-s>>>0,r<0&&(c=-c),t-=o),r=Un(r=L(u=1-((u=(i=.6931471824645996*(o=jn(o=n+t,0)))+(a=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=u-(o=u*u)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-i))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?Ot(u,c):$n(u,r)}(w,p,y),c*d}var Qn=Math.ceil;function re(r){return r<0?Qn(r):t(r)}var te=e.NEGATIVE_INFINITY,ne=Number.POSITIVE_INFINITY,ee=1.4426950408889634,oe=1/(1<<28);function ie(t){var n;return r(t)||t===ne?t:t===te?0:t>709.782712893384?ne:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<oe?1+t:function(r,t,n){var e,o,i,a;return Ot(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(t-.6931471803691238*(n=re(t<0?ee*t-.5:ee*t+.5)),1.9082149292705877e-10*n,n)}function ae(r){var t,n,e;return t=1+(t=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(t),n=ie(r),2.5066282746310007*(n=r>143.01608?(e=Kn(r,.5*r-.25))*(e/n):Kn(r,r-.5)/n)*t}function fe(r,t){return t/((1+.5772156649015329*r)*r)}function ue(e){var a,u,c,l;if(n(e)&&e<0||e===nn||r(e))return NaN;if(0===e)return function(r){return 0===r&&1/r===o}(e)?nn:tn;if(e>171.61447887182297)return tn;if(e<-170.5674972726612)return 0;if((u=i(e))>33)return e>=0?ae(e):(a=0==(1&(c=t(u)))?-1:1,(l=u-c)>.5&&(l=u-(c+=1)),l=u*function(r){var t;if(t=L(r),(t&=2147483647)<=1072243195)return t<1045430272?r:$(r,0);if(t>=f)return NaN;switch(3&Qt(r,rn)){case 0:return $(rn[0],rn[1]);case 1:return P(rn[0],rn[1]);case 2:return-$(rn[0],rn[1]);default:return-P(rn[0],rn[1])}}(en*l),a*en/(i(l)*ae(u)));for(l=1;e>=3;)l*=e-=1;for(;e<0;){if(e>-1e-9)return fe(e,l);l/=e,e+=1}for(;e<2;){if(e<1e-9)return fe(e,l);l/=e,e+=1}return 2===e?l:l*function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(t=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),t/n)}(e-=2)}return function(t,n){var e,o,i,a,f;return r(t)||r(n)||t<=0||n<=0?NaN:(f=ue(1+1/t),a=ue(1+2/t),i=ue(1+3/t),o=ue(1+4/t),e=-6*Kn(f,4)+12*f*f*a-3*a*a-4*f*i+o,e/=Kn(a-f*f,2))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=t();
//# sourceMappingURL=index.js.map
