// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterZeta=e()}(this,(function(){"use strict";function r(r){var e=r.default;if("function"==typeof e){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var v=function(r,e,n){var t,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(a.call(r,e)||c.call(r,e)?(t=r.__proto__,r.__proto__=o,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),l="get"in n,y="set"in n,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,e,n.get),y&&f&&f.call(r,e,n.set),r},l=t,y=v,p=n()?l:y;var s=function(r,e,n){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=s,d=/./;var w=function(r){return"boolean"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return m&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,g=h;var _=function(r){return g.call(r)},A=Object.prototype.hasOwnProperty;var N=function(r,e){return null!=r&&A.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",E=N,U=O,S=h;var P=_,T=function(r){var e,n,t;if(null==r)return S.call(r);n=r[U],e=E(r,U);try{r[U]=void 0}catch(e){return S.call(r)}return t=S.call(r),e?r[U]=n:delete r[U],t},x=j()?T:P,F=Boolean.prototype.toString;var I=x,G=function(r){try{return F.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===I(r)))},M=w,k=H;var B=b,L=function(r){return M(r)||k(r)},W=H;B(L,"isPrimitive",w),B(L,"isObject",W);var C=L;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;module.exports=z;var D=C.isPrimitive,Z=R,J=X,K=Y,Q=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Z()}if(J)return J;if(K)return K;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),er=rr.document&&rr.document.childNodes,nr=Int8Array,tr=d,or=er,ur=nr;var ir=function(){return"function"==typeof tr||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;b(ar,"REGEXP",fr());var cr=ar,vr=x;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===vr(r)},yr=lr;var pr=function(r){return null!==r&&"object"==typeof r};b(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!yr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(pr));var sr=pr;var br=x,dr=cr.REGEXP,wr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,n,t;if(("Object"===(n=br(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=dr.exec(t.toString()))return e[1]}return wr(r)?"Buffer":n},jr=mr;var hr=mr;var gr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e},_r=function(r){return hr(r).toLowerCase()},Ar=ir()?_r:gr;var Nr=function(r){return"function"===Ar(r)},Or=Nr;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Or(r.next)};var Ur=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Tr=x,xr=Sr,Fr=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Ir=j();var Gr=function(r){return"object"==typeof r&&(r instanceof xr||(Ir?Fr(r):"[object Number]"===Tr(r)))},Vr=Ur,Hr=Gr;var Mr=b,kr=function(r){return Vr(r)||Hr(r)},Br=Gr;Mr(kr,"isPrimitive",Ur),Mr(kr,"isObject",Br);var Lr=kr,Wr=N;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=lr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},zr=x,Dr=qr;var Zr=function(r){var e=Dr(r);return e||null===e?e:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Jr=Yr,Kr=Zr,Qr=Nr(Object.getPrototypeOf)?Jr:Kr;var $r=Xr,re=Nr,ee=function(r){return null==r?null:(r=Object(r),Qr(r))},ne=N,te=x,oe=Object.prototype;var ue=function(r){var e;return!!$r(r)&&(!(e=ee(r))||!ne(r,"constructor")&&ne(e,"constructor")&&re(e.constructor)&&"[object Function]"===te(e.constructor)&&ne(e,"isPrototypeOf")&&re(e.isPrototypeOf)&&(e===oe||function(r){var e;for(e in r)if(!ne(r,e))return!1;return!0}(r)))},ie=ue,fe=N;var ae=b,ce=Nr,ve=Er,le=Lr.isPrimitive,ye=Cr,pe=function(r,e){return ie(e)?(fe(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")};var se=function r(e,n,t){var o,u,i,f;if(!ve(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(!ce(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pe(o,t)))throw i;return ae(u={},"next",a),ae(u,"return",c),ye&&ce(e[ye])&&ae(u,ye,v),u;function a(){var r;return f?{done:!0}:(r=e.next()).done?(f=!0,r):{value:le(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function v(){return r(e[ye](),n,o)}},be=se;var de=function(r){return r!=r},we=Math.floor,me=we;var je=function(r){return me(r)===r};var he=function(r){return Math.abs(r)},ge=Math.ceil,_e=we,Ae=ge;var Ne=function(r){return r<0?Ae(r):_e(r)},Oe=Sr.NEGATIVE_INFINITY,Ee=Number.POSITIVE_INFINITY,Ue=Ee,Se=Oe;var Pe=function(r){return r===Ue||r===Se},Te=x,xe="function"==typeof Uint32Array;var Fe="function"==typeof Uint32Array?Uint32Array:null,Ie=function(r){return xe&&r instanceof Uint32Array||"[object Uint32Array]"===Te(r)},Ge=Fe;var Ve=function(){var r,e;if("function"!=typeof Ge)return!1;try{e=new Ge(e=[1,3.14,-3.14,4294967296,4294967297]),r=Ie(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var He="function"==typeof Uint32Array?Uint32Array:void 0,Me=function(){throw new Error("not implemented")},ke=Ve()?He:Me,Be=x,Le="function"==typeof Float64Array;var We="function"==typeof Float64Array?Float64Array:null,Ce=function(r){return Le&&r instanceof Float64Array||"[object Float64Array]"===Be(r)},Re=We;var Xe=function(){var r,e;if("function"!=typeof Re)return!1;try{e=new Re([1,3.14,-3.14,NaN]),r=Ce(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var Ye="function"==typeof Float64Array?Float64Array:void 0,qe=function(){throw new Error("not implemented")},ze=Xe()?Ye:qe,De=x,Ze="function"==typeof Uint8Array;var Je="function"==typeof Uint8Array?Uint8Array:null,Ke=function(r){return Ze&&r instanceof Uint8Array||"[object Uint8Array]"===De(r)},Qe=Je;var $e=function(){var r,e;if("function"!=typeof Qe)return!1;try{e=new Qe(e=[1,3.14,-3.14,256,257]),r=Ke(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var rn="function"==typeof Uint8Array?Uint8Array:void 0,en=function(){throw new Error("not implemented")},nn=$e()?rn:en,tn=x,on="function"==typeof Uint16Array;var un="function"==typeof Uint16Array?Uint16Array:null,fn=function(r){return on&&r instanceof Uint16Array||"[object Uint16Array]"===tn(r)},an=un;var cn=function(){var r,e;if("function"!=typeof an)return!1;try{e=new an(e=[1,3.14,-3.14,65536,65537]),r=fn(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var vn,ln="function"==typeof Uint16Array?Uint16Array:void 0,yn=function(){throw new Error("not implemented")},pn={uint16:cn()?ln:yn,uint8:nn};(vn=new pn.uint16(1))[0]=4660;var sn,bn,dn=52===new pn.uint8(vn.buffer)[0];!0===dn?(sn=1,bn=0):(sn=0,bn=1);var wn=ke,mn={HIGH:sn,LOW:bn},jn=new ze(1),hn=new wn(jn.buffer),gn=mn.HIGH,_n=mn.LOW;var An=function(r,e){return jn[0]=e,r[0]=hn[gn],r[1]=hn[_n],r};var Nn=function(r,e){return 1===arguments.length?An([0,0],r):An(r,e)},On=Nn,En=ke,Un=!0===dn?1:0,Sn=new ze(1),Pn=new En(Sn.buffer);var Tn,xn,Fn=function(r){return Sn[0]=r,Pn[Un]};!0===dn?(Tn=1,xn=0):(Tn=0,xn=1);var In=ke,Gn={HIGH:Tn,LOW:xn},Vn=new ze(1),Hn=new In(Vn.buffer),Mn=Gn.HIGH,kn=Gn.LOW;var Bn=function(r,e){return Hn[Mn]=r,Hn[kn]=e,Vn[0]},Ln=Bn,Wn=On,Cn=Fn,Rn=Ln,Xn=[0,0];var Yn=function(r,e){var n,t;return Wn(Xn,r),n=Xn[0],n&=2147483647,t=Cn(e),Rn(n|=t&=2147483648,Xn[1])},qn=Pe,zn=de,Dn=he;var Zn=function(r,e){return zn(e)||qn(e)?(r[0]=e,r[1]=0,r):0!==e&&Dn(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var Jn=function(r,e){return 1===arguments.length?Zn([0,0],r):Zn(r,e)},Kn=Fn;var Qn=function(r){var e=Kn(r);return(e=(2146435072&e)>>>20)-1023|0},$n=Ee,rt=Oe,et=de,nt=Pe,tt=Yn,ot=Jn,ut=Qn,it=On,ft=Ln,at=[0,0],ct=[0,0];var vt=function(r,e){var n,t;return 0===e||0===r||et(r)||nt(r)?r:(ot(at,r),e+=at[1],(e+=ut(r=at[0]))<-1074?tt(0,r):e>1023?r<0?rt:$n:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,it(ct,r),n=ct[0],n&=2148532223,t*ft(n|=e+1023<<20,ct[1])))},lt=vt;var yt=lt,pt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var st=de,bt=Ne,dt=Oe,wt=Ee,mt=function(r,e,n){var t,o,u;return u=(t=r-e)-(o=t*t)*pt(o),yt(1-(e-t*u/(2-u)-r),n)},jt=1.4426950408889634,ht=1/(1<<28);var gt=function(r){var e;return st(r)||r===wt?r:r===dt?0:r>709.782712893384?wt:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ht?1+r:(e=bt(r<0?jt*r-.5:jt*r+.5),mt(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},_t=Oe;var At=function(r){return 0===r&&1/r===_t};var Nt=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Ot=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Et=function(r,e){var n,t,o,u;return o=(u=r*r)*u,t=u*Nt(u),t+=o*o*Ot(u),(o=1-(n=.5*u))+(1-o-n+(u*t-r*e))},Ut=-.16666666666666632;var St=function(r,e){var n,t,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),t=o*r,0===e?r+t*(Ut+o*n):r-(o*(.5*e-t*n)-e-t*Ut)},Pt=ke,Tt=!0===dn?0:1,xt=new ze(1),Ft=new Pt(xt.buffer);var It=function(r){return xt[0]=r,Ft[Tt]};var Gt=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var Vt=we,Ht=lt,Mt=function(r){return Gt(0,r)},kt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Bt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Lt=16777216,Wt=5.960464477539063e-8,Ct=Mt(20),Rt=Mt(20),Xt=Mt(20),Yt=Mt(20);function qt(r,e,n,t,o,u,i,f,a){var c,v,l,y,p,s,b,d,w;for(y=u,w=t[n],d=n,p=0;d>0;p++)v=Wt*w|0,Yt[p]=w-Lt*v|0,w=t[d-1]+v,d-=1;if(w=Ht(w,o),w-=8*Vt(.125*w),w-=b=0|w,l=0,o>0?(b+=p=Yt[n-1]>>24-o,Yt[n-1]-=p<<24-o,l=Yt[n-1]>>23-o):0===o?l=Yt[n-1]>>23:w>=.5&&(l=2),l>0){for(b+=1,c=0,p=0;p<n;p++)d=Yt[p],0===c?0!==d&&(c=1,Yt[p]=16777216-d):Yt[p]=16777215-d;if(o>0)switch(o){case 1:Yt[n-1]&=8388607;break;case 2:Yt[n-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Ht(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=Yt[p];if(0===d){for(s=1;0===Yt[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=kt[i+p],v=0,d=0;d<=f;d++)v+=r[d]*a[f+(p-d)];t[p]=v}return qt(r,e,n+=s,t,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===Yt[n];)n-=1,o-=24;else(w=Ht(w,-o))>=Lt?(v=Wt*w|0,Yt[n]=w-Lt*v|0,o+=24,Yt[n+=1]=v):Yt[n]=0|w;for(v=Ht(1,o),p=n;p>=0;p--)t[p]=v*Yt[p],v*=Wt;for(p=n;p>=0;p--){for(v=0,s=0;s<=y&&s<=n-p;s++)v+=Bt[s]*t[p+s];Xt[n-p]=v}for(v=0,p=n;p>=0;p--)v+=Xt[p];for(e[0]=0===l?v:-v,v=Xt[0]-v,p=1;p<=n;p++)v+=Xt[p];return e[1]=0===l?v:-v,7&b}var zt=function(r,e,n,t){var o,u,i,f,a,c,v;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=t-1),v=i+4,a=0;a<=v;a++)Ct[a]=c<0?0:kt[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ct[i+(a-c)];Rt[a]=o}return 4,qt(r,e,4,Rt,f,4,u,i,Ct)},Dt=Math.round,Zt=Fn;var Jt=Fn,Kt=It,Qt=Ln,$t=zt,ro=function(r,e,n){var t,o,u,i,f;return u=r-1.5707963267341256*(t=Dt(.6366197723675814*r)),i=6077100506506192e-26*t,f=e>>20|0,n[0]=u-i,f-(Zt(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((o=u)-(u=o-(i=6077100506303966e-26*t))-i),n[0]=u-i,f-(Zt(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((o=u)-(u=o-(i=20222662487111665e-37*t))-i),n[0]=u-i)),n[1]=u-n[0]-i,t},eo=1.5707963267341256,no=6077100506506192e-26,to=2*no,oo=3*no,uo=4*no,io=[0,0,0],fo=[0,0];var ao=function(r,e){var n,t,o,u,i,f,a;if((o=2147483647&Jt(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?ro(r,o,e):o<=1073928572?r>0?(a=r-eo,e[0]=a-no,e[1]=a-e[0]-no,1):(a=r+eo,e[0]=a+no,e[1]=a-e[0]+no,-1):r>0?(a=r-2*eo,e[0]=a-to,e[1]=a-e[0]-to,2):(a=r+2*eo,e[0]=a+to,e[1]=a-e[0]+to,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?ro(r,o,e):r>0?(a=r-3*eo,e[0]=a-oo,e[1]=a-e[0]-oo,3):(a=r+3*eo,e[0]=a+oo,e[1]=a-e[0]+oo,-3):1075388923===o?ro(r,o,e):r>0?(a=r-4*eo,e[0]=a-uo,e[1]=a-e[0]-uo,4):(a=r+4*eo,e[0]=a+uo,e[1]=a-e[0]+uo,-4);if(o<1094263291)return ro(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=Kt(r),a=Qt(o-((t=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)io[i]=0|a,a=16777216*(a-io[i]);for(io[2]=a,u=3;0===io[u-1];)u-=1;return f=$t(io,fo,t,u),r<0?(e[0]=-fo[0],e[1]=-fo[1],-f):(e[0]=fo[0],e[1]=fo[1],f)},co=ao,vo=Fn,lo=Et,yo=St,po=co,so=[0,0];var bo=function(r){var e;if(e=vo(r),(e&=2147483647)<=1072243195)return e<1045430272?r:yo(r,0);if(e>=2146435072)return NaN;switch(3&po(r,so)){case 0:return yo(so[0],so[1]);case 1:return lo(so[0],so[1]);case 2:return-yo(so[0],so[1]);default:return-lo(so[0],so[1])}},wo=3.141592653589793,mo=je;var jo=function(r){return mo(r/2)};var ho=function(r){return jo(r>0?r-1:r+1)},go=Math.sqrt,_o=ke,Ao=!0===dn?0:1,No=new ze(1),Oo=new _o(No.buffer);var Eo=function(r,e){return No[0]=r,Oo[Ao]=e>>>0,No[0]},Uo=Eo;var So=function(r){return 0|r},Po=ho,To=Yn,xo=Oe,Fo=Ee;var Io=function(r,e){return e===xo?Fo:e===Fo?0:e>0?Po(e)?r:0:Po(e)?To(Fo,r):Fo},Go=Fn;var Vo=function(r,e){return(2147483647&Go(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},Ho=he,Mo=Ee;var ko=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ho(r)<1==(e===Mo)?0:Mo},Bo=ke,Lo=!0===dn?1:0,Wo=new ze(1),Co=new Bo(Wo.buffer);var Ro=function(r,e){return Wo[0]=r,Co[Lo]=e>>>0,Wo[0]};var Xo=Fn,Yo=Uo,qo=Ro,zo=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Do=1048576,Zo=[1,1.5],Jo=[0,.5849624872207642],Ko=[0,1.350039202129749e-8];var Qo=Uo,$o=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ru=Fn,eu=Ro,nu=Uo,tu=So,ou=lt,uu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},iu=2147483647,fu=1048575,au=1048576;var cu=de,vu=ho,lu=Pe,yu=je,pu=go,su=he,bu=On,du=Uo,wu=So,mu=Oe,ju=Ee,hu=Io,gu=Vo,_u=ko,Au=function(r,e,n){var t,o,u,i,f,a,c,v,l,y,p,s,b,d,w,m,j,h,g,_;return h=0,n<Do&&(h-=53,n=Xo(e*=9007199254740992)),h+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?_=0:g<767610?_=1:(_=0,h+=1,n-=Do),t=524288+(n>>1|536870912),f=(j=1/((e=qo(e,n))+(c=Zo[_])))*((m=e-c)-(i=Yo(o=m*j,0))*(a=qo(0,t+=_<<18))-i*(e-(a-c))),w=(u=o*o)*u*zo(u),a=Yo(a=3+(u=i*i)+(w+=f*(i+o)),0),b=(p=-7.028461650952758e-9*(l=Yo(l=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(l-m))+Ko[_])-((s=Yo(s=(y=.9617967009544373*l)+p+(v=Jo[_])+(d=h),0))-d-v-y),r[0]=s,r[1]=b,r},Nu=function(r,e){var n,t,o,u,i;return n=(i=1.9259629911266175e-8*(o=e-1)-1.4426950408889634*(o*o*$o(o)))-((t=Qo(t=(u=1.4426950216293335*o)+i,0))-u),r[0]=t,r[1]=n,r},Ou=function(r,e,n){var t,o,u,i,f,a,c,v,l;return l=((v=r&iu|0)>>20)-1023|0,c=0,v>1071644672&&(o=eu(0,((c=r+(au>>l+1)>>>0)&~(fu>>(l=((c&iu)>>20)-1023|0)))>>>0),c=(c&fu|au)>>20-l>>>0,r<0&&(c=-c),e-=o),f=(i=.6931471805599453*(n-((o=nu(o=n+e,0))-e))+-1.904654299957768e-9*o)-((a=(u=.6931471824645996*o)+i)-u),t=a-(o=a*a)*uu(o),r=ru(a=1-(a*t/(t-2)-(f+a*f)-a)),r=tu(r),a=(r+=c<<20>>>0)>>20<=0?ou(a,c):eu(a,r)},Eu=2147483647,Uu=1083179008,Su=1e300,Pu=1e-300,Tu=[0,0],xu=[0,0];var Fu=function r(e,n){var t,o,u,i,f,a,c,v,l,y,p,s,b,d;if(cu(e)||cu(n))return NaN;if(bu(Tu,n),f=Tu[0],0===Tu[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return pu(e);if(-.5===n)return 1/pu(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(lu(n))return _u(e,n)}if(bu(Tu,e),i=Tu[0],0===Tu[1]){if(0===i)return hu(e,n);if(1===e)return 1;if(-1===e&&vu(n))return-1;if(lu(e))return e===mu?r(-0,-n):n<0?0:ju}if(e<0&&!1===yu(n))return(e-e)/(e-e);if(u=su(e),t=i&Eu|0,o=f&Eu|0,c=f>>>31|0,a=(a=i>>>31|0)&&vu(n)?-1:1,o>1105199104){if(o>1139802112)return gu(e,n);if(t<1072693247)return 1===c?a*Su*Su:a*Pu*Pu;if(t>1072693248)return 0===c?a*Su*Su:a*Pu*Pu;p=Nu(xu,u)}else p=Au(xu,u,t);if(y=(n-(v=du(n,0)))*p[0]+n*p[1],l=v*p[0],bu(Tu,s=y+l),b=wu(Tu[0]),d=wu(Tu[1]),b>=Uu){if(0!=(b-Uu|d))return a*Su*Su;if(y+8008566259537294e-32>s-l)return a*Su*Su}else if((b&Eu)>=1083231232){if(0!=(b-3230714880|d))return a*Pu*Pu;if(y<=s-l)return a*Pu*Pu}return a*(s=Ou(b,l,y))};var Iu=Fu,Gu=gt,Vu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Hu=de,Mu=je,ku=At,Bu=he,Lu=we,Wu=bo,Cu=Ee,Ru=Oe,Xu=wo,Yu=function(r){var e,n,t;return e=1+(e=1/r)*Vu(e),n=Gu(r),2.5066282746310007*(n=r>143.01608?(t=Iu(r,.5*r-.25))*(t/n):Iu(r,r-.5)/n)*e},qu=function(r,e){return e/((1+.5772156649015329*r)*r)},zu=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)};var Du=Fn,Zu=Ro,Ju=de,Ku=Oe,Qu=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},$u=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},ri=.6931471803691238,ei=1.9082149292705877e-10,ni=1048575;var ti=function(r){var e,n,t,o,u,i,f,a,c,v,l;return 0===r?Ku:Ju(r)||r<0?NaN:(o=0,(n=Du(r))<1048576&&(o-=54,n=Du(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(f=(n&=ni)+614244&1048576|0)>>20|0,i=(r=Zu(r,n|1072693248^f))-1,(ni&2+n)<3?0===i?0===o?0:o*ri+o*ei:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*ri-(u-o*ei-i)):(f=n-398458|0,a=440401-n|0,t=(v=(l=(c=i/(2+i))*c)*l)*Qu(v),u=l*$u(v)+t,(f|=a)>0?(e=.5*i*i,0===o?i-(e-c*(e+u)):o*ri-(e-(c*(e+u)+o*ei)-i)):0===o?i-c*(i-u):o*ri-(c*(i-u)-o*ei-i))))},oi=Fn,ui=Et,ii=St,fi=co,ai=[0,0];var ci=de,vi=Pe,li=function(r){var e;if(e=oi(r),(e&=2147483647)<=1072243195)return e<1044381696?1:ui(r,0);if(e>=2146435072)return NaN;switch(3&fi(r,ai)){case 0:return ui(ai[0],ai[1]);case 1:return-ii(ai[0],ai[1]);case 2:return-ui(ai[0],ai[1]);default:return ii(ai[0],ai[1])}},yi=bo,pi=he,si=Yn,bi=wo;var di=function(r){var e,n;return ci(r)||vi(r)?NaN:0===(e=pi(n=r%2))||1===e?si(0,n):e<.25?yi(bi*n):e<.75?si(li(bi*(e=.5-e)),n):e<1.25?(n=si(1,n)-n,yi(bi*n)):e<1.75?-si(li(bi*(e-=1.5)),n):(n-=si(2,n),yi(bi*n))};var wi=de,mi=Pe,ji=he,hi=ti,gi=Ne,_i=di,Ai=Ee,Ni=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Oi=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Ei=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Ui=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Si=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Pi=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Ti=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},xi=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},Fi=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Ii=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},Gi=1.4616321449683622,Vi=1.4616321449683622;var Hi=de,Mi=je,ki=he,Bi=gt,Li=we,Wi=function(r){var e,n,t,o;if(Mu(r)&&r<0||r===Ru||Hu(r))return NaN;if(0===r)return ku(r)?Ru:Cu;if(r>171.61447887182297)return Cu;if(r<-170.5674972726612)return 0;if((n=Bu(r))>33)return r>=0?Yu(r):(e=0==(1&(t=Lu(n)))?-1:1,(o=n-t)>.5&&(o=n-(t+=1)),o=n*Wu(Xu*o),e*Xu/(Bu(o)*Yu(n)));for(o=1;r>=3;)o*=r-=1;for(;r<0;){if(r>-1e-9)return qu(r,o);o/=r,r+=1}for(;r<2;){if(r<1e-9)return qu(r,o);o/=r,r+=1}return 2===r?o:o*zu(r-=2)},Ci=function(r){var e,n,t,o,u,i,f,a;if(wi(r)||mi(r))return r;if(0===r)return Ai;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-hi(r);if(e){if(r>=4503599627370496)return Ai;if(0===(o=_i(r)))return Ai;n=hi(3.141592653589793/ji(o*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-hi(r),r>=Gi-1+.27?(i=1-r,t=0):r>=Gi-1-.27?(i=r-(Vi-1),t=1):(i=r,t=2)):(a=0,r>=Gi+.27?(i=2-r,t=0):r>=Gi-.27?(i=r-Vi,t=1):(i=r-1,t=2)),t){case 0:a+=i*(.07721566490153287+(f=i*i)*Ni(f))+f*(.3224670334241136+f*Oi(f))-.5*i;break;case 1:a+=-.12148629053584961+((f=i*i)*(.48383612272381005+(u=f*i)*Si(u))-(-3638676997039505e-33-u*(u*Pi(u)-.1475877229945939+i*(.06462494023913339+u*Ti(u)))));break;case 2:a+=-.5*i+i*(i*xi(i)-.07721566490153287)/(1+i*Fi(i))}else if(r<8)switch(a=.5*(i=r-(t=gi(r)))+i*(i*Ui(i)-.07721566490153287)/(1+i*Ei(i)),f=1,t){case 7:f*=i+6;case 6:f*=i+5;case 5:f*=i+4;case 4:f*=i+3;case 3:a+=hi(f*=i+2)}else a=r<0x400000000000000?(r-.5)*((o=hi(r))-1)+(u=.4189385332046727+(f=1/r)*Ii(i=f*f)):r*(hi(r)-1);return e&&(a=n-a),a},Ri=di,Xi=Fu,Yi=ti,qi=Ee,zi=Oe,Di=6.283185307179586,Zi=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Ji=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Ki=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],Qi=function(r){var e,n;return 0===r?.2433929443359375:((r<0?-r:r)<=1?(e=.2433929443359375+r*(r*(.055761621477604675+r*(r*(.0004515345286457964+-9332412703570615e-21*r)-.003209124988790859))-.4909247051635357),n=1+r*(r*(.04196762233099861+r*(r*(.00024978985622317937+-10185578841856403e-21*r)-.00413421406552171))-.27996033431034445)):(e=(r=1/r)*(.0004515345286457964+r*(r*(.055761621477604675+r*(.2433929443359375*r-.4909247051635357))-.003209124988790859))-9332412703570615e-21,n=r*(.00024978985622317937+r*(r*(.04196762233099861+r*(1*r-.27996033431034445))-.00413421406552171))-10185578841856403e-21),e/n)},$i=function(r){var e,n;return 0===r?.5772156649015329:((r<0?-r:r)<=1?(e=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+1101084409767329e-20*r)))),n=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+10991819782396113e-21*r))))):(e=1101084409767329e-20+(r=1/r)*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+.5772156649015329*r)))),n=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+1*r))))),e/n)},rf=function(r){var e,n;return 0===r?-.053725830002359504:((r<0?-r:r)<=1?(e=r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+0*r)))))-.053725830002359504,n=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+2.3627662397497864e-8*r)))))):(e=0+(r=1/r)*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+-.053725830002359504*r))))),n=2.3627662397497864e-8+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+1*r)))))),e/n)},ef=function(r){var e,n;return 0===r?-2.497101906022594:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(0+r*(0+0*r))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(r*(49340956392759e-19+r*(r*(7.188337293654598e-9+-1.1292001134749475e-10*r)-2.3405548702528722e-7))-36910273311764616e-21))))):(e=0+(r=1/r)*(0+r*(0+r*(r*(r*(r*(r*(-2.497101906022594*r-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=r*(7.188337293654598e-9+r*(r*(49340956392759e-19+r*(r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+1*r)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),e/n)},nf=function(r){var e,n;return 0===r?-4.785580284951356:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+0*r))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+r*(.24434533737818856+r*(.008733707544922887+r*(r*(r*(r*(4.710012640030765e-9+r*(6998415452048457e-28*r-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(e=0+(r=1/r)*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(r*(r*(-4.785580284951356*r-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+r*(r*(4.710012640030765e-9+r*(r*(r*(r*(.008733707544922887+r*(.24434533737818856+1*r))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),e/n)},tf=function(r){var e,n;return 0===r?-10.39489505733089:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(-8.214657090954655e-9*r-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9.555611230656935e-7+r*(1.185071534740229e-8+2226094836273526e-30*r))))))):(e=(r=1/r)*(r*(r*(r*(r*(r*(-10.39489505733089*r-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+r*(1.185071534740229e-8+r*(9.555611230656935e-7+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+1*r))))))),e/n)};var of=function r(e){var n,t,o,u,i,f;if(Hi(e))return NaN;if(1===e)return NaN;if(e>=56)return 1;if(Mi(e)&&(u=0|e)===e){if(!(u<0))return 0==(1&u)?Ji[u/2]:Zi[(u-3)/2];if(0==(1&(o=0|-u)))return 0;if((f=(o+1)/2|0)<=129)return-Ki[f]/(o+1)}return ki(e)<1.4901161193847656e-8?-.5-.9189385332046728*e:(t=1-e,e<0?Li(e/2)===e/2?0:(n=e,e=t,t=n,e>170?(n=2*Ri(.5*t)*r(e),i=Ci(e),(i-=e*Yi(Di))>709?n<0?zi:qi:n*Bi(i)):2*Ri(.5*t)*Xi(Di,-e)*Wi(e)*r(e)):e<1?(n=Qi(t),n-=1.2433929443359375,n+=t,n/=t):e<=2?(n=1/(t=-t))+$i(t):e<=4?(n=.6986598968505859+1/-t)+rf(e-2):e<=7?(n=ef(e-4),1+Bi(n)):e<15?(n=nf(e-7),1+Bi(n)):e<36?(n=tf(e-15),1+Bi(n)):1+Xi(2,-e))},uf=of;return function(r){return be(r,uf)}}));
//# sourceMappingURL=browser.js.map
