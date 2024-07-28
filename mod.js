// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,b,"e"),t=l.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var j=String.fromCharCode,A=Array.isArray;function N(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function E(r){var e,n,t,o,a,f,c,s,l,p,v,y,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,N(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!N(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(a)?String(t.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=h(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(O(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function U(r){var e,n;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[S(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return E.apply(null,e)}var k,F=Object.prototype,I=F.toString,T=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===I.call(n))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(r,e)||G.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(r,e,n.get),a&&V&&V.call(r,e,n.set),r};var L=k;function $(r,e,n){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function H(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&R.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=W()?function(r){var e,n,t;if(null==r)return B.call(r);n=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return B.call(r)}return t=B.call(r),e?r[Y]=n:delete r[Y],t}:function(r){return B.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,nr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},tr="object"==typeof nr?nr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(fr,"REGEXP",cr);var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function lr(r){return null!==r&&"object"==typeof r}function pr(r){var e,n,t,i;if(("Object"===(n=q(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=cr.exec(t.toString()))return e[1]}return lr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!sr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(lr));var vr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function yr(r){return"function"===vr(r)}function dr(r){return"number"==typeof r}var gr=Number,br=gr.prototype.toString;var wr=W();function hr(r){return"object"==typeof r&&(r instanceof gr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function mr(r){return dr(r)||hr(r)}$(mr,"isPrimitive",dr),$(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,Nr=Object,_r=Object.getPrototypeOf;Ar=yr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=Ar;var xr=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!sr(r)}(r)&&(e=function(r){return null==r?null:(r=Nr(r),Er(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&yr(e.constructor)&&"[object Function]"===q(e.constructor)&&Z(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===xr||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Sr(r,e,n){var t,i,o,a,u,f;if(f=typeof(u=r),null===u||"object"!==f&&"function"!==f||!yr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(e))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",e));if(t={invalid:NaN},arguments.length>2&&(o=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",e))}(t,n),o))throw o;return $(i={},"next",(function(){var n;if(a)return{done:!0};if((n=r.next()).done)return a=!0,n;return{value:dr(n.value)?e(n.value):t.invalid,done:!1}})),$(i,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&yr(r[jr])&&$(i,jr,(function(){return Sr(r[jr](),e,t)})),i}function Ur(r){return r!=r}var kr=Math.floor;function Fr(r){return kr(r)===r}function Ir(r){return Math.abs(r)}var Tr=Math.ceil;function Vr(r){return r<0?Tr(r):kr(r)}var Pr=gr.NEGATIVE_INFINITY,Gr=Number.POSITIVE_INFINITY,Lr=1023,$r=1023,Cr=-1023,Hr=-1074;function Mr(r){return r===Gr||r===Pr}var Wr=2147483648,Br=2147483647,Rr="function"==typeof Uint32Array;var Zr="function"==typeof Uint32Array?Uint32Array:null;var Xr,Yr="function"==typeof Uint32Array?Uint32Array:void 0;Xr=function(){var r,e,n;if("function"!=typeof Zr)return!1;try{e=new Zr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Rr&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr=Xr,zr="function"==typeof Float64Array;var Dr="function"==typeof Float64Array?Float64Array:null;var Jr,Kr="function"==typeof Float64Array?Float64Array:void 0;Jr=function(){var r,e,n;if("function"!=typeof Dr)return!1;try{e=new Dr([1,3.14,-3.14,NaN]),n=e,r=(zr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr=Jr,re="function"==typeof Uint8Array;var ee="function"==typeof Uint8Array?Uint8Array:null;var ne,te="function"==typeof Uint8Array?Uint8Array:void 0;ne=function(){var r,e,n;if("function"!=typeof ee)return!1;try{e=new ee(e=[1,3.14,-3.14,256,257]),n=e,r=(re&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?te:function(){throw new Error("not implemented")};var ie=ne,oe="function"==typeof Uint16Array;var ae="function"==typeof Uint16Array?Uint16Array:null;var ue,fe="function"==typeof Uint16Array?Uint16Array:void 0;ue=function(){var r,e,n;if("function"!=typeof ae)return!1;try{e=new ae(e=[1,3.14,-3.14,65536,65537]),n=e,r=(oe&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fe:function(){throw new Error("not implemented")};var ce,se={uint16:ue,uint8:ie};(ce=new se.uint16(1))[0]=4660;var le,pe,ve=52===new se.uint8(ce.buffer)[0];!0===ve?(le=1,pe=0):(le=0,pe=1);var ye={HIGH:le,LOW:pe},de=new Qr(1),ge=new qr(de.buffer),be=ye.HIGH,we=ye.LOW;function he(r,e,n,t){return de[0]=r,e[t]=ge[be],e[t+n]=ge[we],e}function me(r){return he(r,[0,0],1,0)}$(me,"assign",he);var je,Ae,Ne=!0===ve?1:0,_e=new Qr(1),Ee=new qr(_e.buffer);function xe(r){return _e[0]=r,Ee[Ne]}!0===ve?(je=1,Ae=0):(je=0,Ae=1);var Oe={HIGH:je,LOW:Ae},Se=new Qr(1),Ue=new qr(Se.buffer),ke=Oe.HIGH,Fe=Oe.LOW;function Ie(r,e){return Ue[ke]=r,Ue[Fe]=e,Se[0]}var Te=[0,0];function Ve(r,e){var n,t;return me.assign(r,Te,1,0),n=Te[0],n&=Br,t=xe(e),Ie(n|=t&=Wr,Te[1])}var Pe=22250738585072014e-324,Ge=4503599627370496;function Le(r,e,n,t){return Ur(r)||Mr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Ir(r)<Pe?(e[t]=r*Ge,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}$((function(r){return Le(r,[0,0],1,0)}),"assign",Le);var $e=2146435072;var Ce=2220446049250313e-31,He=2148532223,Me=[0,0],We=[0,0];function Be(r,e){var n,t;return 0===e||0===r||Ur(r)||Mr(r)?r:(Le(r,Me,1,0),r=Me[0],e+=Me[1],e+=function(r){var e=xe(r);return(e=(e&$e)>>>20)-Lr|0}(r),e<Hr?Ve(0,r):e>$r?r<0?Pr:Gr:(e<=Cr?(e+=52,t=Ce):t=1,me.assign(r,We,1,0),n=We[0],n&=He,t*Ie(n|=e+Lr<<20,We[1])))}var Re=.6931471803691238,Ze=1.9082149292705877e-10,Xe=1.4426950408889634,Ye=709.782712893384,qe=-745.1332191019411,ze=1/(1<<28),De=-ze;function Je(r){var e;return Ur(r)||r===Gr?r:r===Pr?0:r>Ye?Gr:r<qe?0:r>De&&r<ze?1+r:function(r,e,n){var t,i,o,a;return Be(1-(e-(t=r-e)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(e=Vr(r<0?Xe*r-.5:Xe*r+.5))*Re,e*Ze,e)}function Ke(r,e){var n,t,i,o;return i=(o=r*r)*o,t=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*t-r*e))}var Qe=-.16666666666666632,rn=.00833333333332249,en=-.0001984126982985795,nn=27557313707070068e-22,tn=-2.5050760253406863e-8,on=1.58969099521155e-10;function an(r,e){var n,t,i;return n=rn+(i=r*r)*(en+i*nn)+i*(i*i)*(tn+i*on),t=i*r,0===e?r+t*(Qe+i*n):r-(i*(.5*e-t*n)-e-t*Qe)}var un=1048575,fn=!0===ve?0:1,cn=new Qr(1),sn=new qr(cn.buffer);function ln(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var pn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yn=16777216,dn=5.960464477539063e-8,gn=ln(20),bn=ln(20),wn=ln(20),hn=ln(20);function mn(r,e,n,t,i,o,a,u,f){var c,s,l,p,v,y,d,g,b;for(p=o,b=t[n],g=n,v=0;g>0;v++)s=dn*b|0,hn[v]=b-yn*s|0,b=t[g-1]+s,g-=1;if(b=Be(b,i),b-=8*kr(.125*b),b-=d=0|b,l=0,i>0?(d+=v=hn[n-1]>>24-i,hn[n-1]-=v<<24-i,l=hn[n-1]>>23-i):0===i?l=hn[n-1]>>23:b>=.5&&(l=2),l>0){for(d+=1,c=0,v=0;v<n;v++)g=hn[v],0===c?0!==g&&(c=1,hn[v]=16777216-g):hn[v]=16777215-g;if(i>0)switch(i){case 1:hn[n-1]&=8388607;break;case 2:hn[n-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=Be(1,i)))}if(0===b){for(g=0,v=n-1;v>=o;v--)g|=hn[v];if(0===g){for(y=1;0===hn[o-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=pn[a+v],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(v-g)];t[v]=s}return mn(r,e,n+=y,t,i,o,a,u,f)}}if(0===b)for(n-=1,i-=24;0===hn[n];)n-=1,i-=24;else(b=Be(b,-i))>=yn?(s=dn*b|0,hn[n]=b-yn*s|0,i+=24,hn[n+=1]=s):hn[n]=0|b;for(s=Be(1,i),v=n;v>=0;v--)t[v]=s*hn[v],s*=dn;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=vn[y]*t[v+y];wn[n-v]=s}for(s=0,v=n;v>=0;v--)s+=wn[v];for(e[0]=0===l?s:-s,s=wn[0]-s,v=1;v<=n;v++)s+=wn[v];return e[1]=0===l?s:-s,7&d}function jn(r,e,n,t){var i,o,a,u,f,c,s;for(4,(o=(n-3)/24|0)<0&&(o=0),u=n-24*(o+1),c=o-(a=t-1),s=a+4,f=0;f<=s;f++)gn[f]=c<0?0:pn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*gn[a+(f-c)];bn[f]=i}return 4,mn(r,e,4,bn,u,4,o,a,gn)}var An=Math.round,Nn=.6366197723675814,_n=1.5707963267341256,En=6077100506506192e-26,xn=6077100506303966e-26,On=20222662487959506e-37,Sn=20222662487111665e-37,Un=84784276603689e-45,kn=2047;function Fn(r,e,n){var t,i,o,a,u;return o=r-(t=An(r*Nn))*_n,a=t*En,u=e>>20|0,n[0]=o-a,u-(xe(n[0])>>20&kn)>16&&(a=t*On-((i=o)-(o=i-(a=t*xn))-a),n[0]=o-a,u-(xe(n[0])>>20&kn)>49&&(a=t*Un-((i=o)-(o=i-(a=t*Sn))-a),n[0]=o-a)),n[1]=o-n[0]-a,t}var In=0,Tn=16777216,Vn=1.5707963267341256,Pn=6077100506506192e-26,Gn=2*Pn,Ln=3*Pn,$n=4*Pn,Cn=598523,Hn=1072243195,Mn=1073928572,Wn=1074752122,Bn=1074977148,Rn=1075183036,Zn=1075388923,Xn=1075594811,Yn=1094263291,qn=[0,0,0],zn=[0,0];function Dn(r,e){var n,t,i,o,a,u,f;if((i=xe(r)&Br|0)<=Hn)return e[0]=r,e[1]=0,0;if(i<=Wn)return(i&un)===Cn?Fn(r,i,e):i<=Mn?r>0?(f=r-Vn,e[0]=f-Pn,e[1]=f-e[0]-Pn,1):(f=r+Vn,e[0]=f+Pn,e[1]=f-e[0]+Pn,-1):r>0?(f=r-2*Vn,e[0]=f-Gn,e[1]=f-e[0]-Gn,2):(f=r+2*Vn,e[0]=f+Gn,e[1]=f-e[0]+Gn,-2);if(i<=Xn)return i<=Rn?i===Bn?Fn(r,i,e):r>0?(f=r-3*Vn,e[0]=f-Ln,e[1]=f-e[0]-Ln,3):(f=r+3*Vn,e[0]=f+Ln,e[1]=f-e[0]+Ln,-3):i===Zn?Fn(r,i,e):r>0?(f=r-4*Vn,e[0]=f-$n,e[1]=f-e[0]-$n,4):(f=r+4*Vn,e[0]=f+$n,e[1]=f-e[0]+$n,-4);if(i<Yn)return Fn(r,i,e);if(i>=$e)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return cn[0]=r,sn[fn]}(r),f=Ie(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)qn[a]=0|f,f=(f-qn[a])*Tn;for(qn[2]=f,o=3;qn[o-1]===In;)o-=1;return u=jn(qn,zn,t,o),r<0?(e[0]=-zn[0],e[1]=-zn[1],-u):(e[0]=zn[0],e[1]=zn[1],u)}var Jn=1072243195,Kn=1045430272,Qn=[0,0];function rt(r){var e;if(e=xe(r),(e&=Br)<=Jn)return e<Kn?r:an(r,0);if(e>=$e)return NaN;switch(3&Dn(r,Qn)){case 0:return an(Qn[0],Qn[1]);case 1:return Ke(Qn[0],Qn[1]);case 2:return-an(Qn[0],Qn[1]);default:return-Ke(Qn[0],Qn[1])}}var et=3.141592653589793,nt=2.5066282746310007;function tt(r){return Fr(r/2)}function it(r){return tt(r>0?r-1:r+1)}var ot=Math.sqrt,at=!0===ve?0:1,ut=new Qr(1),ft=new qr(ut.buffer);function ct(r,e){return ut[0]=r,ft[at]=e>>>0,ut[0]}function st(r){return 0|r}var lt=1072693247,pt=1e300,vt=1e-300;var yt=!0===ve?1:0,dt=new Qr(1),gt=new qr(dt.buffer);function bt(r,e){return dt[0]=r,gt[yt]=e>>>0,dt[0]}var wt=1048575,ht=1048576,mt=1072693248,jt=536870912,At=524288,Nt=20,_t=9007199254740992,Et=.9617966939259756,xt=.9617967009544373,Ot=-7.028461650952758e-9,St=[1,1.5],Ut=[0,.5849624872207642],kt=[0,1.350039202129749e-8];var Ft=1.4426950408889634,It=1.4426950216293335,Tt=1.9259629911266175e-8;var Vt=.6931471805599453;var Pt=1048576,Gt=1071644672,Lt=20,$t=.6931471824645996,Ct=-1.904654299957768e-9;var Ht=1072693247,Mt=1105199104,Wt=1139802112,Bt=1083179008,Rt=1072693248,Zt=1083231232,Xt=3230714880,Yt=31,qt=1e300,zt=1e-300,Dt=8008566259537294e-32,Jt=[0,0],Kt=[0,0];function Qt(r,e){var n,t,i,o,a,u,f,c,s,l,p,v,y,d;if(Ur(r)||Ur(e))return NaN;if(me.assign(e,Jt,1,0),a=Jt[0],0===Jt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return ot(r);if(-.5===e)return 1/ot(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Mr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ir(r)<1==(e===Gr)?0:Gr}(r,e)}if(me.assign(r,Jt,1,0),o=Jt[0],0===Jt[1]){if(0===o)return function(r,e){return e===Pr?Gr:e===Gr?0:e>0?it(e)?r:0:it(e)?Ve(Gr,r):Gr}(r,e);if(1===r)return 1;if(-1===r&&it(e))return-1;if(Mr(r))return r===Pr?Qt(-0,-e):e<0?0:Gr}if(r<0&&!1===Fr(e))return(r-r)/(r-r);if(i=Ir(r),n=o&Br|0,t=a&Br|0,f=a>>>Yt|0,u=(u=o>>>Yt|0)&&it(e)?-1:1,t>Mt){if(t>Wt)return function(r,e){return(xe(r)&Br)<=lt?e<0?pt*pt:vt*vt:e>0?pt*pt:vt*vt}(r,e);if(n<Ht)return 1===f?u*qt*qt:u*zt*zt;if(n>Rt)return 0===f?u*qt*qt:u*zt*zt;p=function(r,e){var n,t,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Tt-o*Ft)-((t=ct(t=(a=It*i)+u,0))-a),r[0]=t,r[1]=n,r}(Kt,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,s,l,p,v,y,d,g,b,w,h,m,j,A,N;return m=0,n<ht&&(m-=53,n=xe(e*=_t)),m+=(n>>Nt)-Lr|0,n=(j=n&wt|0)|mt|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=ht),a=ct(i=(w=(e=bt(e,n))-(c=St[A]))*(h=1/(e+c)),0),t=(n>>1|jt)+At,f=bt(0,t+=A<<18),b=(o=i*i)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=ct(f=3+(o=a*a)+(b+=(u=h*(w-a*f-a*(e-(f-c))))*(a+i)),0),l=ct(l=(w=a*f)+(h=u*f+(b-(f-3-o))*i),0),p=xt*l,d=(v=Ot*l+(h-(l-w))*Et+kt[A])-((y=ct(y=p+v+(s=Ut[A])+(g=m),0))-g-s-p),r[0]=y,r[1]=d,r}(Kt,i,n);if(v=(l=(e-(c=ct(e,0)))*p[0]+e*p[1])+(s=c*p[0]),me.assign(v,Jt,1,0),y=st(Jt[0]),d=st(Jt[1]),y>=Bt){if(0!=(y-Bt|d))return u*qt*qt;if(l+Dt>v-s)return u*qt*qt}else if((y&Br)>=Zt){if(0!=(y-Xt|d))return u*zt*zt;if(l<=v-s)return u*zt*zt}return v=function(r,e,n){var t,i,o,a,u,f,c,s,l,p;return l=((s=r&Br|0)>>Lt)-Lr|0,c=0,s>Gt&&(i=bt(0,((c=r+(Pt>>l+1)>>>0)&~(un>>(l=((c&Br)>>Lt)-Lr|0)))>>>0),c=(c&un|Pt)>>Lt-l>>>0,r<0&&(c=-c),e-=i),r=st(r=xe(f=1-((f=(o=(i=ct(i=n+e,0))*$t)+(a=(n-(i-e))*Vt+i*Ct))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Lt>>>0)>>Lt<=0?Be(f,c):bt(f,r)}(y,s,l),u*v}var ri=143.01608;function ei(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=Je(r),n=r>ri?(t=Qt(r,.5*r-.25))*(t/n):Qt(r,r-.5)/n,nt*n*e}var ni=.5772156649015329;function ti(r,e){return e/((1+ni*r)*r)}function ii(r){var e,n,t,i;if(Fr(r)&&r<0||r===Pr||Ur(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Pr}(r)?Pr:Gr;if(r>171.61447887182297)return Gr;if(r<-170.5674972726612)return 0;if((n=Ir(r))>33)return r>=0?ei(r):(e=0==(1&(t=kr(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*rt(et*i),e*et/(Ir(i)*ei(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ti(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ti(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var oi=.6931471803691238,ai=1.9082149292705877e-10,ui=0x40000000000000,fi=.3333333333333333,ci=1048575,si=2146435072,li=1048576,pi=1072693248;function vi(r){var e,n,t,i,o,a,u,f,c,s,l,p;return 0===r?Pr:Ur(r)||r<0?NaN:(o=0,(n=xe(r))<li&&(o-=54,n=xe(r*=ui)),n>=si?r+r:(o+=(n>>20)-Lr|0,o+=(f=(n&=ci)+614244&1048576|0)>>20|0,u=(r=bt(r,n|f^pi))-1,(ci&2+n)<3?0===u?0===o?0:o*oi+o*ai:(a=u*u*(.5-fi*u),0===o?u-a:o*oi-(a-o*ai-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=t+i,(f|=c)>0?(e=.5*u*u,0===o?u-(e-s*(e+a)):o*oi-(e-(s*(e+a)+o*ai)-u)):0===o?u-s*(u-a):o*oi-(s*(u-a)-o*ai-u))))}var yi=[0,0],di=2147483647,gi=1072243195,bi=1044381696,wi=2146435072;function hi(r){var e;if(e=xe(r),(e&=di)<=gi)return e<bi?1:Ke(r,0);if(e>=wi)return NaN;switch(3&Dn(r,yi)){case 0:return Ke(yi[0],yi[1]);case 1:return-an(yi[0],yi[1]);case 2:return-Ke(yi[0],yi[1]);default:return an(yi[0],yi[1])}}var mi=.07721566490153287,ji=.3224670334241136,Ai=1,Ni=-.07721566490153287,_i=.48383612272381005,Ei=-.1475877229945939,xi=.06462494023913339,Oi=-.07721566490153287,Si=1,Ui=.4189385332046727,ki=1.4616321449683622,Fi=4503599627370496,Ii=0x400000000000000,Ti=8470329472543003e-37,Vi=1.4616321449683622,Pi=-.12148629053584961,Gi=-3638676997039505e-33;function Li(r){var e,n,t,i,o,a,u,f,c,s,l,p,v;if(Ur(r)||Mr(r))return r;if(0===r)return Gr;if(r<0?(e=!0,r=-r):e=!1,r<Ti)return-vi(r);if(e){if(r>=Fi)return Gr;if(c=function(r){var e,n;return Ur(r)||Mr(r)?NaN:0===(e=Ir(n=r%2))||1===e?Ve(0,n):e<.25?rt(et*n):e<.75?Ve(hi(et*(e=.5-e)),n):e<1.25?(n=Ve(1,n)-n,rt(et*n)):e<1.75?-Ve(hi(et*(e-=1.5)),n):(n-=Ve(2,n),rt(et*n))}(r),0===c)return Gr;n=vi(et/Ir(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-vi(r),r>=ki-1+.27?(l=1-r,t=0):r>=ki-1-.27?(l=r-(Vi-1),t=1):(l=r,t=2)):(v=0,r>=ki+.27?(l=2-r,t=0):r>=ki-.27?(l=r-Vi,t=1):(l=r-1,t=2)),t){case 0:a=mi+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),o=p*(ji+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*a+o)-.5*l;break;case 1:a=_i+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),o=Ei+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=xi+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Pi+(u=p*a-(Gi-s*(o+l*i)));break;case 2:a=l*(Oi+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),o=Si+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+a/o}else if(r<8)switch(u=(l=r-(t=Vr(r)))*(Ni+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=Ai+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=vi(p*=l+2)}else r<Ii?(c=vi(r),s=Ui+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(vi(r)-1);return e&&(v=n-v),v}function $i(r){var e,n;return Ur(r)||Mr(r)?NaN:0===(e=Ir(n=r%2))||1===e?Ve(0,n):e<.25?rt(et*n):e<.75?Ve(hi(et*(e=.5-e)),n):e<1.25?(n=Ve(1,n)-n,rt(et*n)):e<1.75?-Ve(hi(et*(e-=1.5)),n):(n-=Ve(2,n),rt(et*n))}var Ci=6.283185307179586,Hi=1.4901161193847656e-8,Mi=.9189385332046728,Wi=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Bi=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Ri=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];var Zi=129,Xi=170,Yi=709,qi=1.2433929443359375,zi=.6986598968505859;function Di(r){var e,n,t,i,o,a,u,f,c;if(Ur(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(Fr(r)&&(i=0|r)===r){if(!(i<0))return 0==(1&i)?Bi[i/2]:Wi[(i-3)/2];if(0==(1&(t=0|-i)))return 0;if((a=(t+1)/2|0)<=Zi)return-Ri[a]/(t+1)}return Ir(r)<Hi?-.5-Mi*r:(n=1-r,r<0?kr(r/2)===r/2?0:(e=r,r=n,n=e,r>Xi?(e=2*$i(.5*n)*Di(r),o=Li(r),(o-=r*vi(Ci))>Yi?e<0?Pr:Gr:e*Je(o)):2*$i(.5*n)*Qt(Ci,-r)*ii(r)*Di(r)):r<1?(e=0===(u=n)?.2433929443359375:((u<0?-u:u)<=1?(f=.2433929443359375+u*(u*(.055761621477604675+u*(u*(.0004515345286457964+-9332412703570615e-21*u)-.003209124988790859))-.4909247051635357),c=1+u*(u*(.04196762233099861+u*(u*(.00024978985622317937+-10185578841856403e-21*u)-.00413421406552171))-.27996033431034445)):(f=(u=1/u)*(.0004515345286457964+u*(u*(.055761621477604675+u*(.2433929443359375*u-.4909247051635357))-.003209124988790859))-9332412703570615e-21,c=u*(.00024978985622317937+u*(u*(.04196762233099861+u*(1*u-.27996033431034445))-.00413421406552171))-10185578841856403e-21),f/c),e-=qi,e+=n,e/=n):r<=2?(e=1/(n=-n))+function(r){var e,n;return 0===r?.5772156649015329:((r<0?-r:r)<=1?(e=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+1101084409767329e-20*r)))),n=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+10991819782396113e-21*r))))):(e=1101084409767329e-20+(r=1/r)*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+.5772156649015329*r)))),n=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+1*r))))),e/n)}(n):r<=4?(e=zi+1/-n)+function(r){var e,n;return 0===r?-.053725830002359504:((r<0?-r:r)<=1?(e=r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+0*r)))))-.053725830002359504,n=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+2.3627662397497864e-8*r)))))):(e=0+(r=1/r)*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+-.053725830002359504*r))))),n=2.3627662397497864e-8+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+1*r)))))),e/n)}(r-2):r<=7?(e=function(r){var e,n;return 0===r?-2.497101906022594:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(0+r*(0+0*r))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(r*(49340956392759e-19+r*(r*(7.188337293654598e-9+-1.1292001134749475e-10*r)-2.3405548702528722e-7))-36910273311764616e-21))))):(e=0+(r=1/r)*(0+r*(0+r*(r*(r*(r*(r*(-2.497101906022594*r-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=r*(7.188337293654598e-9+r*(r*(49340956392759e-19+r*(r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+1*r)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),e/n)}(r-4),1+Je(e)):r<15?(e=function(r){var e,n;return 0===r?-4.785580284951356:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+0*r))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+r*(.24434533737818856+r*(.008733707544922887+r*(r*(r*(r*(4.710012640030765e-9+r*(6998415452048457e-28*r-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(e=0+(r=1/r)*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(r*(r*(-4.785580284951356*r-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+r*(r*(4.710012640030765e-9+r*(r*(r*(r*(.008733707544922887+r*(.24434533737818856+1*r))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),e/n)}(r-7),1+Je(e)):r<36?(e=function(r){var e,n;return 0===r?-10.39489505733089:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(-8.214657090954655e-9*r-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9.555611230656935e-7+r*(1.185071534740229e-8+2226094836273526e-30*r))))))):(e=(r=1/r)*(r*(r*(r*(r*(r*(-10.39489505733089*r-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+r*(1.185071534740229e-8+r*(9.555611230656935e-7+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+1*r))))))),e/n)}(r-15),1+Je(e)):1+Qt(2,-r))}function Ji(r){return Sr(r,Di)}export{Ji as default};
//# sourceMappingURL=mod.js.map
