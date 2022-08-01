// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function u(r){return Math.abs(r)}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var c=f&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return i.call(r);t=r[a],f=a,n=null!=(u=r)&&o.call(u,f);try{r[a]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[a]=t:delete r[a],e}:function(r){return i.call(r)},v="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var l,p="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,n,t;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(v&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var w=l,A="function"==typeof Float64Array;var b="function"==typeof Float64Array?Float64Array:null;var s,N="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(A&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var U=s,h="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null;var d,I="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(h&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var F=d,S="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null;var O,g="function"==typeof Uint16Array?Uint16Array:void 0;O=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var E,j={uint16:O,uint8:F};(E=new j.uint16(1))[0]=4660;var T=52===new j.uint8(E.buffer)[0],G=!0===T?1:0,M=new U(1),L=new w(M.buffer);function W(r){return M[0]=r,L[G]}function P(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var V=-.16666666666666632;function Y(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(V+u*t):r-(u*(.5*n-e*t)-n-e*V)}var _,k,q=!0===T?0:1,x=new U(1),z=new w(x.buffer);!0===T?(_=1,k=0):(_=0,k=1);var B={HIGH:_,LOW:k},C=new U(1),D=new w(C.buffer),J=B.HIGH,K=B.LOW;function Q(r,n){return D[J]=r,D[K]=n,C[0]}var R,X,Z=Number.POSITIVE_INFINITY;function $(r){return r===Z||r===e}!0===T?(R=1,X=0):(R=0,X=1);var rr={HIGH:R,LOW:X},nr=new U(1),tr=new w(nr.buffer),er=rr.HIGH,ur=rr.LOW;function fr(r,n){return nr[0]=n,r[0]=tr[er],r[1]=tr[ur],r}function ir(r,n){return 1===arguments.length?fr([0,0],r):fr(r,n)}var or=[0,0];function ar(r,n){var t,e;return ir(or,r),t=or[0],t&=2147483647,e=W(n),Q(t|=e&=2147483648,or[1])}function cr(n,t){return r(t)||$(t)?(n[0]=t,n[1]=0,n):0!==t&&u(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var vr=[0,0],yr=[0,0];function lr(n,t){var u,f;return 0===t||0===n||r(n)||$(n)?n:(function(r,n){1===arguments.length?cr([0,0],r):cr(r,n)}(vr,n),t+=vr[1],t+=function(r){var n=W(r);return(n=(2146435072&n)>>>20)-1023|0}(n=vr[0]),t<-1074?ar(0,n):t>1023?n<0?e:Z:(t<=-1023?(t+=52,f=2220446049250313e-31):f=1,ir(yr,n),u=yr[0],u&=2148532223,f*Q(u|=t+1023<<20,yr[1])))}function pr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var wr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ar=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],br=5.960464477539063e-8,sr=pr(20),Nr=pr(20),Ur=pr(20),hr=pr(20);function mr(r,t,e,u,f,i,o,a,c){var v,y,l,p,w,A,b,s,N;for(p=i,N=u[e],s=e,w=0;s>0;w++)y=br*N|0,hr[w]=N-16777216*y|0,N=u[s-1]+y,s-=1;if(N=lr(N,f),N-=8*n(.125*N),N-=b=0|N,l=0,f>0?(b+=w=hr[e-1]>>24-f,hr[e-1]-=w<<24-f,l=hr[e-1]>>23-f):0===f?l=hr[e-1]>>23:N>=.5&&(l=2),l>0){for(b+=1,v=0,w=0;w<e;w++)s=hr[w],0===v?0!==s&&(v=1,hr[w]=16777216-s):hr[w]=16777215-s;if(f>0)switch(f){case 1:hr[e-1]&=8388607;break;case 2:hr[e-1]&=4194303}2===l&&(N=1-N,0!==v&&(N-=lr(1,f)))}if(0===N){for(s=0,w=e-1;w>=i;w--)s|=hr[w];if(0===s){for(A=1;0===hr[i-A];A++);for(w=e+1;w<=e+A;w++){for(c[a+w]=wr[o+w],y=0,s=0;s<=a;s++)y+=r[s]*c[a+(w-s)];u[w]=y}return mr(r,t,e+=A,u,f,i,o,a,c)}}if(0===N)for(e-=1,f-=24;0===hr[e];)e-=1,f-=24;else(N=lr(N,-f))>=16777216?(y=br*N|0,hr[e]=N-16777216*y|0,f+=24,hr[e+=1]=y):hr[e]=0|N;for(y=lr(1,f),w=e;w>=0;w--)u[w]=y*hr[w],y*=br;for(w=e;w>=0;w--){for(y=0,A=0;A<=p&&A<=e-w;A++)y+=Ar[A]*u[w+A];Ur[e-w]=y}for(y=0,w=e;w>=0;w--)y+=Ur[w];for(t[0]=0===l?y:-y,y=Ur[0]-y,w=1;w<=e;w++)y+=Ur[w];return t[1]=0===l?y:-y,7&b}function dr(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)sr[a]=c<0?0:wr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*sr[i+(a-c)];Nr[a]=u}return 4,mr(r,n,4,Nr,o,4,f,i,sr)}var Ir=Math.round;function Fr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Ir(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(W(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(W(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Sr=1.5707963267341256,Hr=6077100506506192e-26,Or=2*Hr,gr=4*Hr,Er=[0,0,0],jr=[0,0];function Tr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&W(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Fr(r,u,n):u<=1073928572?r>0?(a=r-Sr,n[0]=a-Hr,n[1]=a-n[0]-Hr,1):(a=r+Sr,n[0]=a+Hr,n[1]=a-n[0]+Hr,-1):r>0?(a=r-2*Sr,n[0]=a-Or,n[1]=a-n[0]-Or,2):(a=r+2*Sr,n[0]=a+Or,n[1]=a-n[0]+Or,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Fr(r,u,n):r>0?(a=r-3*Sr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Sr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Fr(r,u,n):r>0?(a=r-4*Sr,n[0]=a-gr,n[1]=a-n[0]-gr,4):(a=r+4*Sr,n[0]=a+gr,n[1]=a-n[0]+gr,-4);if(u<1094263291)return Fr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return x[0]=r,z[q]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Er[i]=0|a,a=16777216*(a-Er[i]);for(Er[2]=a,f=3;0===Er[f-1];)f-=1;return o=dr(Er,jr,e,f),r<0?(n[0]=-jr[0],n[1]=-jr[1],-o):(n[0]=jr[0],n[1]=jr[1],o)}var Gr=[0,0];var Mr=3.141592653589793;function Lr(r){return t(r/2)}function Wr(r){return Lr(r>0?r-1:r+1)}var Pr=Math.sqrt,Vr=!0===T?0:1,Yr=new U(1),_r=new w(Yr.buffer);function kr(r,n){return Yr[0]=r,_r[Vr]=n>>>0,Yr[0]}function qr(r){return 0|r}var xr=!0===T?1:0,zr=new U(1),Br=new w(zr.buffer);function Cr(r,n){return zr[0]=r,Br[xr]=n>>>0,zr[0]}var Dr=[1,1.5],Jr=[0,.5849624872207642],Kr=[0,1.350039202129749e-8];var Qr=1e300,Rr=1e-300,Xr=[0,0],Zr=[0,0];function $r(n,f){var i,o,a,c,v,y,l,p,w,A,b,s,N,U;if(r(n)||r(f))return NaN;if(ir(Xr,f),v=Xr[0],0===Xr[1]){if(0===f)return 1;if(1===f)return n;if(-1===f)return 1/n;if(.5===f)return Pr(n);if(-.5===f)return 1/Pr(n);if(2===f)return n*n;if(3===f)return n*n*n;if(4===f)return(n*=n)*n;if($(f))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(n===Z)?0:Z}(n,f)}if(ir(Xr,n),c=Xr[0],0===Xr[1]){if(0===c)return function(r,n){return n===e?Z:n===Z?0:n>0?Wr(n)?r:0:Wr(n)?ar(Z,r):Z}(n,f);if(1===n)return 1;if(-1===n&&Wr(f))return-1;if($(n))return n===e?$r(-0,-f):f<0?0:Z}if(n<0&&!1===t(f))return(n-n)/(n-n);if(a=u(n),i=2147483647&c|0,o=2147483647&v|0,l=v>>>31|0,y=(y=c>>>31|0)&&Wr(f)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(2147483647&W(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,f);if(i<1072693247)return 1===l?y*Qr*Qr:y*Rr*Rr;if(i>1072693248)return 0===l?y*Qr*Qr:y*Rr*Rr;b=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=kr(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Zr,a)}else b=function(r,n,t){var e,u,f,i,o,a,c,v,y,l,p,w,A,b,s,N,U,h,m,d,I;return h=0,t<1048576&&(h-=53,t=W(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?d=0:m<767610?d=1:(d=0,h+=1,t-=1048576),i=kr(u=(N=(n=Cr(n,t))-(c=Dr[d]))*(U=1/(n+c)),0),e=524288+(t>>1|536870912),a=Cr(0,e+=d<<18),s=(f=u*u)*f*(0===(I=f)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=kr(a=3+(f=i*i)+(s+=(o=U*(N-i*a-i*(n-(a-c))))*(i+u)),0),A=(p=-7.028461650952758e-9*(y=kr(y=(N=i*a)+(U=o*a+(s-(a-3-f))*u),0))+.9617966939259756*(U-(y-N))+Kr[d])-((w=kr(w=(l=.9617967009544373*y)+p+(v=Jr[d])+(b=h),0))-b-v-l),r[0]=w,r[1]=A,r}(Zr,a,i);if(A=(f-(p=kr(f,0)))*b[0]+f*b[1],w=p*b[0],ir(Xr,s=A+w),N=qr(Xr[0]),U=qr(Xr[1]),N>=1083179008){if(0!=(N-1083179008|U))return y*Qr*Qr;if(A+8008566259537294e-32>s-w)return y*Qr*Qr}else if((2147483647&N)>=1083231232){if(0!=(N-3230714880|U))return y*Rr*Rr;if(A<=s-w)return y*Rr*Rr}return s=function(r,n,t){var e,u,f,i,o,a,c,v,y,l,p;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=f=Cr(0,e)),r=qr(r=W(c=1-((c=(i=.6931471824645996*(f=kr(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(p=f)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?lr(c,v):Cr(c,r)}(N,w,A),y*s}var rn=Math.ceil;function nn(r){return r<0?rn(r):n(r)}function tn(n){var t;return r(n)||n===Z?n:n===e?0:n>709.782712893384?Z:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<3.725290298461914e-9?1+n:function(r,n,t){var e,u,f,i;return lr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(n-.6931471803691238*(t=nn(n<0?1.4426950408889634*n-.5:1.4426950408889634*n+.5)),1.9082149292705877e-10*t,t)}function en(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=tn(r),2.5066282746310007*(t=r>143.01608?(e=$r(r,.5*r-.25))*(e/t):$r(r,r-.5)/t)*n}function un(r,n){return n/((1+.5772156649015329*r)*r)}function fn(f){var i,o,a,c;if(t(f)&&f<0||f===e||r(f))return NaN;if(0===f)return function(r){return 0===r&&1/r===e}(f)?e:Z;if(f>171.61447887182297)return Z;if(f<-170.5674972726612)return 0;if((o=u(f))>33)return f>=0?en(f):(i=0==(1&(a=n(o)))?-1:1,(c=o-a)>.5&&(c=o-(a+=1)),c=o*function(r){var n;if(n=W(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Y(r,0);if(n>=2146435072)return NaN;switch(3&Tr(r,Gr)){case 0:return Y(Gr[0],Gr[1]);case 1:return P(Gr[0],Gr[1]);case 2:return-Y(Gr[0],Gr[1]);default:return-P(Gr[0],Gr[1])}}(Mr*c),i*Mr/(u(c)*en(o)));for(c=1;f>=3;)c*=f-=1;for(;f<0;){if(f>-1e-9)return un(f,c);c/=f,f+=1}for(;f<2;){if(f<1e-9)return un(f,c);c/=f,f+=1}return 2===f?c:c*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(f-=2)}function on(n,t){var e,u,f,i,o;return r(n)||r(t)||n<=0||t<=0?NaN:(o=fn(1+1/n),i=fn(1+2/n),f=fn(1+3/n),u=fn(1+4/n),e=-6*$r(o,4)+12*o*o*i-3*i*i-4*o*f+u,e/=$r(i-o*o,2))}export{on as default};
//# sourceMappingURL=mod.js.map