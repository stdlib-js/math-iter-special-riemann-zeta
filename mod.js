// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,t=Object.prototype,o=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,f=t.__lookupGetter__,a=t.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,e)||a.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=n.value,r.__proto__=c):r[e]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,e,n.get),y&&i&&i.call(r,e,n.set),r};var c=e;function l(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var v=/./;function y(r){return"boolean"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function d(r,e){return null!=r&&w.call(r,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=p()?function(r){var e,n,t;if(null==r)return b.call(r);n=r[m],e=d(r,m);try{r[m]=void 0}catch(e){return b.call(r)}return t=b.call(r),e?r[m]=n:delete r[m],t}:function(r){return b.call(r)},g=Boolean.prototype.toString;var h=p();function A(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return y(r)||A(r)}function N(){return new Function("return this;")()}l(_,"isPrimitive",y),l(_,"isObject",A);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return N()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var e,n,t,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=x.exec(t.toString()))return e[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!V(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(G));var B="function"==typeof v||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?H(r).toLowerCase():e};function L(r){return"function"===B(r)}function M(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=p();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(e=function(r){return null==r?null:(r=Object(r),J(r))}(r),!e||!d(r,"constructor")&&d(e,"constructor")&&L(e.constructor)&&"[object Function]"===j(e.constructor)&&d(e,"isPrototypeOf")&&L(e.isPrototypeOf)&&(e===K||function(r){var e;for(e in r)if(!d(r,e))return!1;return!0}(r)))}function Z(r,e){return Q(e)?(d(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}function $(r,e,n){var t,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(t={invalid:NaN},arguments.length>2&&(u=Z(t,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?e(n.value):t.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),e,t)}}function rr(r){return r!=r}var er=Math.floor;function nr(r){return er(r)===r}function tr(r){return Math.abs(r)}var or=Math.ceil;function ur(r){return r<0?or(r):er(r)}var ir=W.NEGATIVE_INFINITY,fr=Number.POSITIVE_INFINITY;function ar(r){return r===fr||r===ir}var cr="function"==typeof Uint32Array;var lr="function"==typeof Uint32Array?Uint32Array:null;var vr,yr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(cr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var sr=vr,pr="function"==typeof Float64Array;var br="function"==typeof Float64Array?Float64Array:null;var wr,dr="function"==typeof Float64Array?Float64Array:void 0;wr=function(){var r,e,n;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,NaN]),n=e,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var mr=wr,jr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var hr,Ar="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),n=e,r=(jr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r=hr,Nr="function"==typeof Uint16Array;var Or="function"==typeof Uint16Array?Uint16Array:null;var Ur,Sr="function"==typeof Uint16Array?Uint16Array:void 0;Ur=function(){var r,e,n;if("function"!=typeof Or)return!1;try{e=new Or(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Nr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var Er,Fr={uint16:Ur,uint8:_r};(Er=new Fr.uint16(1))[0]=4660;var Ir,Pr,Tr=52===new Fr.uint8(Er.buffer)[0];!0===Tr?(Ir=1,Pr=0):(Ir=0,Pr=1);var xr={HIGH:Ir,LOW:Pr},Vr=new mr(1),Gr=new sr(Vr.buffer),Hr=xr.HIGH,Br=xr.LOW;function Lr(r,e,n,t){return Vr[0]=r,e[t]=Gr[Hr],e[t+n]=Gr[Br],e}function Mr(r){return Lr(r,[0,0],1,0)}l(Mr,"assign",Lr);var kr,Wr,Cr=!0===Tr?1:0,Yr=new mr(1),qr=new sr(Yr.buffer);function Rr(r){return Yr[0]=r,qr[Cr]}!0===Tr?(kr=1,Wr=0):(kr=0,Wr=1);var Xr={HIGH:kr,LOW:Wr},zr=new mr(1),Dr=new sr(zr.buffer),Jr=Xr.HIGH,Kr=Xr.LOW;function Qr(r,e){return Dr[Jr]=r,Dr[Kr]=e,zr[0]}var Zr=[0,0];function $r(r,e){var n,t;return Mr.assign(r,Zr,1,0),n=Zr[0],n&=2147483647,t=Rr(e),Qr(n|=t&=2147483648,Zr[1])}function re(r,e,n,t){return rr(r)||ar(r)?(e[t]=r,e[t+n]=0,e):0!==r&&tr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}l((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=[0,0],ne=[0,0];function te(r,e){var n,t;return 0===e||0===r||rr(r)||ar(r)?r:(re(r,ee,1,0),e+=ee[1],e+=function(r){var e=Rr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=ee[0]),e<-1074?$r(0,r):e>1023?r<0?ir:fr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Mr.assign(r,ne,1,0),n=ne[0],n&=2148532223,t*Qr(n|=e+1023<<20,ne[1])))}function oe(r){var e;return rr(r)||r===fr?r:r===ir?0:r>709.782712893384?fr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,o,u,i;return te(1-(e-(t=r-e)*(u=t-(o=t*t)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(e=ur(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function ue(r,e){var n,t,o,u;return o=(u=r*r)*u,t=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),t+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*t-r*e))}var ie=-.16666666666666632;function fe(r,e){var n,t,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),t=o*r,0===e?r+t*(ie+o*n):r-(o*(.5*e-t*n)-e-t*ie)}var ae=!0===Tr?0:1,ce=new mr(1),le=new sr(ce.buffer);function ve(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],se=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pe=5.960464477539063e-8,be=ve(20),we=ve(20),de=ve(20),me=ve(20);function je(r,e,n,t,o,u,i,f,a){var c,l,v,y,s,p,b,w,d;for(y=u,d=t[n],w=n,s=0;w>0;s++)l=pe*d|0,me[s]=d-16777216*l|0,d=t[w-1]+l,w-=1;if(d=te(d,o),d-=8*er(.125*d),d-=b=0|d,v=0,o>0?(b+=s=me[n-1]>>24-o,me[n-1]-=s<<24-o,v=me[n-1]>>23-o):0===o?v=me[n-1]>>23:d>=.5&&(v=2),v>0){for(b+=1,c=0,s=0;s<n;s++)w=me[s],0===c?0!==w&&(c=1,me[s]=16777216-w):me[s]=16777215-w;if(o>0)switch(o){case 1:me[n-1]&=8388607;break;case 2:me[n-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=te(1,o)))}if(0===d){for(w=0,s=n-1;s>=u;s--)w|=me[s];if(0===w){for(p=1;0===me[u-p];p++);for(s=n+1;s<=n+p;s++){for(a[f+s]=ye[i+s],l=0,w=0;w<=f;w++)l+=r[w]*a[f+(s-w)];t[s]=l}return je(r,e,n+=p,t,o,u,i,f,a)}}if(0===d)for(n-=1,o-=24;0===me[n];)n-=1,o-=24;else(d=te(d,-o))>=16777216?(l=pe*d|0,me[n]=d-16777216*l|0,o+=24,me[n+=1]=l):me[n]=0|d;for(l=te(1,o),s=n;s>=0;s--)t[s]=l*me[s],l*=pe;for(s=n;s>=0;s--){for(l=0,p=0;p<=y&&p<=n-s;p++)l+=se[p]*t[s+p];de[n-s]=l}for(l=0,s=n;s>=0;s--)l+=de[s];for(e[0]=0===v?l:-l,l=de[0]-l,s=1;s<=n;s++)l+=de[s];return e[1]=0===v?l:-l,7&b}function ge(r,e,n,t){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=t-1),l=i+4,a=0;a<=l;a++)be[a]=c<0?0:ye[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*be[i+(a-c)];we[a]=o}return 4,je(r,e,4,we,f,4,u,i,be)}var he=Math.round;function Ae(r,e,n){var t,o,u,i,f;return u=r-1.5707963267341256*(t=he(.6366197723675814*r)),i=6077100506506192e-26*t,f=e>>20|0,n[0]=u-i,f-(Rr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((o=u)-(u=o-(i=6077100506303966e-26*t))-i),n[0]=u-i,f-(Rr(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((o=u)-(u=o-(i=20222662487111665e-37*t))-i),n[0]=u-i)),n[1]=u-n[0]-i,t}var _e=1.5707963267341256,Ne=6077100506506192e-26,Oe=2*Ne,Ue=4*Ne,Se=[0,0,0],Ee=[0,0];function Fe(r,e){var n,t,o,u,i,f,a;if((o=2147483647&Rr(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ae(r,o,e):o<=1073928572?r>0?(a=r-_e,e[0]=a-Ne,e[1]=a-e[0]-Ne,1):(a=r+_e,e[0]=a+Ne,e[1]=a-e[0]+Ne,-1):r>0?(a=r-2*_e,e[0]=a-Oe,e[1]=a-e[0]-Oe,2):(a=r+2*_e,e[0]=a+Oe,e[1]=a-e[0]+Oe,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ae(r,o,e):r>0?(a=r-3*_e,e[0]=a-1.8231301519518578e-10,e[1]=a-e[0]-1.8231301519518578e-10,3):(a=r+3*_e,e[0]=a+1.8231301519518578e-10,e[1]=a-e[0]+1.8231301519518578e-10,-3):1075388923===o?Ae(r,o,e):r>0?(a=r-4*_e,e[0]=a-Ue,e[1]=a-e[0]-Ue,4):(a=r+4*_e,e[0]=a+Ue,e[1]=a-e[0]+Ue,-4);if(o<1094263291)return Ae(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return ce[0]=r,le[ae]}(r),a=Qr(o-((t=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Se[i]=0|a,a=16777216*(a-Se[i]);for(Se[2]=a,u=3;0===Se[u-1];)u-=1;return f=ge(Se,Ee,t,u),r<0?(e[0]=-Ee[0],e[1]=-Ee[1],-f):(e[0]=Ee[0],e[1]=Ee[1],f)}var Ie=[0,0];function Pe(r){var e;if(e=Rr(r),(e&=2147483647)<=1072243195)return e<1045430272?r:fe(r,0);if(e>=2146435072)return NaN;switch(3&Fe(r,Ie)){case 0:return fe(Ie[0],Ie[1]);case 1:return ue(Ie[0],Ie[1]);case 2:return-fe(Ie[0],Ie[1]);default:return-ue(Ie[0],Ie[1])}}var Te=3.141592653589793;function xe(r){return nr(r/2)}function Ve(r){return xe(r>0?r-1:r+1)}var Ge=Math.sqrt,He=!0===Tr?0:1,Be=new mr(1),Le=new sr(Be.buffer);function Me(r,e){return Be[0]=r,Le[He]=e>>>0,Be[0]}function ke(r){return 0|r}var We=!0===Tr?1:0,Ce=new mr(1),Ye=new sr(Ce.buffer);function qe(r,e){return Ce[0]=r,Ye[We]=e>>>0,Ce[0]}var Re=[1,1.5],Xe=[0,.5849624872207642],ze=[0,1.350039202129749e-8];var De=1e300,Je=[0,0],Ke=[0,0];function Qe(r,e){var n,t,o,u,i,f,a,c,l,v,y,s,p,b;if(rr(r)||rr(e))return NaN;if(Mr.assign(e,Je,1,0),i=Je[0],0===Je[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ge(r);if(-.5===e)return 1/Ge(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(ar(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:tr(r)<1==(e===fr)?0:fr}(r,e)}if(Mr.assign(r,Je,1,0),u=Je[0],0===Je[1]){if(0===u)return function(r,e){return e===ir?fr:e===fr?0:e>0?Ve(e)?r:0:Ve(e)?$r(fr,r):fr}(r,e);if(1===r)return 1;if(-1===r&&Ve(e))return-1;if(ar(r))return r===ir?Qe(-0,-e):e<0?0:fr}if(r<0&&!1===nr(e))return(r-r)/(r-r);if(o=tr(r),n=2147483647&u|0,t=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&Ve(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Rr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===a?f*De*De:1e-300*f*1e-300;if(n>1072693248)return 0===a?f*De*De:1e-300*f*1e-300;y=function(r,e){var n,t,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=e-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((t=Me(t=(u=1.4426950216293335*o)+i,0))-u),r[0]=t,r[1]=n,r}(Ke,o)}else y=function(r,e,n){var t,o,u,i,f,a,c,l,v,y,s,p,b,w,d,m,j,g,h,A,_;return g=0,n<1048576&&(g-=53,n=Rr(e*=9007199254740992)),g+=(n>>20)-1023|0,n=1072693248|(h=1048575&n|0),h<=235662?A=0:h<767610?A=1:(A=0,g+=1,n-=1048576),i=Me(o=(m=(e=qe(e,n))-(c=Re[A]))*(j=1/(e+c)),0),t=524288+(n>>1|536870912),a=qe(0,t+=A<<18),d=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Me(a=3+(u=i*i)+(d+=(f=j*(m-i*a-i*(e-(a-c))))*(i+o)),0),b=(s=-7.028461650952758e-9*(v=Me(v=(m=i*a)+(j=f*a+(d-(a-3-u))*o),0))+.9617966939259756*(j-(v-m))+ze[A])-((p=Me(p=(y=.9617967009544373*v)+s+(l=Xe[A])+(w=g),0))-w-l-y),r[0]=p,r[1]=b,r}(Ke,o,n);if(s=(v=(e-(c=Me(e,0)))*y[0]+e*y[1])+(l=c*y[0]),Mr.assign(s,Je,1,0),p=ke(Je[0]),b=ke(Je[1]),p>=1083179008){if(0!=(p-1083179008|b))return f*De*De;if(v+8008566259537294e-32>s-l)return f*De*De}else if((2147483647&p)>=1083231232){if(0!=(p-3230714880|b))return 1e-300*f*1e-300;if(v<=s-l)return 1e-300*f*1e-300}return s=function(r,e,n){var t,o,u,i,f,a,c,l,v,y,s;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(t=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),e-=u=qe(0,t)),r=ke(r=Rr(c=1-((c=(i=.6931471824645996*(u=Me(u=n+e,0)))+(f=.6931471805599453*(n-(u-e))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(s=u)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?te(c,l):qe(c,r)}(p,l,v),f*s}function Ze(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=oe(r),2.5066282746310007*(n=r>143.01608?(t=Qe(r,.5*r-.25))*(t/n):Qe(r,r-.5)/n)*e}function $e(r,e){return e/((1+.5772156649015329*r)*r)}function rn(r){var e,n,t,o;if(nr(r)&&r<0||r===ir||rr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===ir}(r)?ir:fr;if(r>171.61447887182297)return fr;if(r<-170.5674972726612)return 0;if((n=tr(r))>33)return r>=0?Ze(r):(e=0==(1&(t=er(n)))?-1:1,(o=n-t)>.5&&(o=n-(t+=1)),o=n*Pe(Te*o),e*Te/(tr(o)*Ze(n)));for(o=1;r>=3;)o*=r-=1;for(;r<0;){if(r>-1e-9)return $e(r,o);o/=r,r+=1}for(;r<2;){if(r<1e-9)return $e(r,o);o/=r,r+=1}return 2===r?o:o*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var en=.6931471803691238,nn=1.9082149292705877e-10;function tn(r){var e,n,t,o,u,i,f,a,c,l,v,y;return 0===r?ir:rr(r)||r<0?NaN:(u=0,(n=Rr(r))<1048576&&(u-=54,n=Rr(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(a=(n&=1048575)+614244&1048576|0)>>20|0,f=(r=qe(r,n|1072693248^a))-1,(1048575&2+n)<3?0===f?0===u?0:u*en+u*nn:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*en-(i-u*nn-f)):(a=n-398458|0,c=440401-n|0,o=(v=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),t=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=t+o,(a|=c)>0?(e=.5*f*f,0===u?f-(e-l*(e+i)):u*en-(e-(l*(e+i)+u*nn)-f)):0===u?f-l*(f-i):u*en-(l*(f-i)-u*nn-f))))}var on=[0,0];function un(r){var e;if(e=Rr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:ue(r,0);if(e>=2146435072)return NaN;switch(3&Fe(r,on)){case 0:return ue(on[0],on[1]);case 1:return-fe(on[0],on[1]);case 2:return-ue(on[0],on[1]);default:return fe(on[0],on[1])}}function fn(r){var e,n;return rr(r)||ar(r)?NaN:0===(e=tr(n=r%2))||1===e?$r(0,n):e<.25?Pe(Te*n):e<.75?$r(un(Te*(e=.5-e)),n):e<1.25?(n=$r(1,n)-n,Pe(Te*n)):e<1.75?-$r(un(Te*(e-=1.5)),n):(n-=$r(2,n),Pe(Te*n))}var an=1.4616321449683622,cn=1.4616321449683622;var ln=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],vn=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],yn=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];function sn(r){var e,n,t,o,u,i,f,a,c;if(rr(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(nr(r)&&(o=0|r)===r){if(!(o<0))return 0==(1&o)?vn[o/2]:ln[(o-3)/2];if(0==(1&(t=0|-o)))return 0;if((i=(t+1)/2|0)<=129)return-yn[i]/(t+1)}return tr(r)<1.4901161193847656e-8?-.5-.9189385332046728*r:(n=1-r,r<0?er(r/2)===r/2?0:(e=r,r=n,n=e,r>170?(e=2*fn(.5*n)*sn(r),u=function(r){var e,n,t,o,u,i,f,a,c,l,v,y,s;if(rr(r)||ar(r))return r;if(0===r)return fr;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-tn(r);if(e){if(r>=4503599627370496)return fr;if(0===(c=fn(r)))return fr;n=tn(Te/tr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-tn(r),r>=an-1+.27?(v=1-r,t=0):r>=an-1-.27?(v=r-(cn-1),t=1):(v=r,t=2)):(s=0,r>=an+.27?(v=2-r,t=0):r>=an-.27?(v=r-cn,t=1):(v=r-1,t=2)),t){case 0:i=.07721566490153287+(y=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),u=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),s+=(f=v*i+u)-.5*v;break;case 1:i=.48383612272381005+(l=(y=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),u=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,o=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(f=y*i-(-3638676997039505e-33-l*(u+v*o)))-.12148629053584961;break;case 2:i=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),u=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),s+=-.5*v+i/u}else if(r<8)switch(f=(v=r-(t=ur(r)))*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),a=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),s=.5*v+f/a,y=1,t){case 7:y*=v+6;case 6:y*=v+5;case 5:y*=v+4;case 4:y*=v+3;case 3:s+=tn(y*=v+2)}else r<0x400000000000000?(c=tn(r),l=.4189385332046727+(y=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=y*y),s=(r-.5)*(c-1)+l):s=r*(tn(r)-1);return e&&(s=n-s),s}(r),(u-=r*tn(6.283185307179586))>709?e<0?ir:fr:e*oe(u)):2*fn(.5*n)*Qe(6.283185307179586,-r)*rn(r)*sn(r)):r<1?(e=0===(f=n)?.2433929443359375:((f<0?-f:f)<=1?(a=.2433929443359375+f*(f*(.055761621477604675+f*(f*(.0004515345286457964+-9332412703570615e-21*f)-.003209124988790859))-.4909247051635357),c=1+f*(f*(.04196762233099861+f*(f*(.00024978985622317937+-10185578841856403e-21*f)-.00413421406552171))-.27996033431034445)):(a=(f=1/f)*(.0004515345286457964+f*(f*(.055761621477604675+f*(.2433929443359375*f-.4909247051635357))-.003209124988790859))-9332412703570615e-21,c=f*(.00024978985622317937+f*(f*(.04196762233099861+f*(1*f-.27996033431034445))-.00413421406552171))-10185578841856403e-21),a/c),e-=1.2433929443359375,e+=n,e/=n):r<=2?(e=1/(n=-n))+function(r){var e,n;return 0===r?.5772156649015329:((r<0?-r:r)<=1?(e=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+1101084409767329e-20*r)))),n=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+10991819782396113e-21*r))))):(e=1101084409767329e-20+(r=1/r)*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+.5772156649015329*r)))),n=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+1*r))))),e/n)}(n):r<=4?(e=.6986598968505859+1/-n)+function(r){var e,n;return 0===r?-.053725830002359504:((r<0?-r:r)<=1?(e=r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+0*r)))))-.053725830002359504,n=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+2.3627662397497864e-8*r)))))):(e=0+(r=1/r)*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+-.053725830002359504*r))))),n=2.3627662397497864e-8+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+1*r)))))),e/n)}(r-2):r<=7?(e=function(r){var e,n;return 0===r?-2.497101906022594:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(0+r*(0+0*r))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(r*(49340956392759e-19+r*(r*(7.188337293654598e-9+-1.1292001134749475e-10*r)-2.3405548702528722e-7))-36910273311764616e-21))))):(e=0+(r=1/r)*(0+r*(0+r*(r*(r*(r*(r*(-2.497101906022594*r-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=r*(7.188337293654598e-9+r*(r*(49340956392759e-19+r*(r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+1*r)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),e/n)}(r-4),1+oe(e)):r<15?(e=function(r){var e,n;return 0===r?-4.785580284951356:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+0*r))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+r*(.24434533737818856+r*(.008733707544922887+r*(r*(r*(r*(4.710012640030765e-9+r*(6998415452048457e-28*r-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(e=0+(r=1/r)*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(r*(r*(-4.785580284951356*r-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+r*(r*(4.710012640030765e-9+r*(r*(r*(r*(.008733707544922887+r*(.24434533737818856+1*r))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),e/n)}(r-7),1+oe(e)):r<36?(e=function(r){var e,n;return 0===r?-10.39489505733089:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(-8.214657090954655e-9*r-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9.555611230656935e-7+r*(1.185071534740229e-8+2226094836273526e-30*r))))))):(e=(r=1/r)*(r*(r*(r*(r*(r*(-10.39489505733089*r-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+r*(1.185071534740229e-8+r*(9.555611230656935e-7+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+1*r))))))),e/n)}(r-15),1+oe(e)):1+Qe(2,-r))}function pn(r){return $(r,sn)}export{pn as default};
//# sourceMappingURL=mod.js.map
