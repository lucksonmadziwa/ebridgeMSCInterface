(function (){ var f="",aa=" ",g='"',ba="#",ca="%",da="%s",ea="&",fa="(\\d*)(\\D*)",ga="*",ha=",",ia="-src",l=".",m="/",ja="//",ka="0",la="00",ma="000",n=":",na=": ",oa=";domain=",pa=";expires=",qa=";path=",ra=";secure",q="=",sa="?",ta="@",ua="Assertion failed",va="[",wa="[object Array]",xa="[object Function]",ya="[object Window]",za="\\u",Aa="]",r="array",Ba="backgroundColor",Ca="blogger-comment-from-post",Da="blogger-iframe-colorize",Ea="blogspotRpcToken",Fa="boolean",Ga="call",Ha="color",Ia="comment-editor",
Ja="fcViewer",Ka="fcauth",La="fontFamily",s="function",Ma="g",Na="http://www.blogger.com/unvisited-link-",Oa="iframe",Pa="inherit",Qa="message",t="null",Ra="number",u="object",Sa="onmessage",Ta="rgb(0, 0, 0)",Ua="rgba(0, 0, 0, 0)",Va="serif",Wa="set-comment-editor-height",Xa="splice",Ya="string",Za="transparent",$a="{",ab="}",v,w=this,bb=function(a){var b=typeof a;if(b==u)if(a){if(a instanceof Array)return r;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c==ya)return u;
if(c==wa||typeof a.length==Ra&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(Xa))return r;if(c==xa||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(Ga))return s}else return t;else if(b==s&&"undefined"==typeof a.call)return u;return b},x=function(a){return typeof a==Ya},cb=Date.now||function(){return+new Date},db=function(a,b){function c(){}c.prototype=b.prototype;a.$=b.prototype;a.prototype=new c;a.Z=
function(a,c,h){var k=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,k)}};var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};db(A,Error);var eb=function(a,b){for(var c=a.split(da),d=f,e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join(da)},B=function(a,b){return a<b?-1:a>b?1:0};var fb=function(a,b){b.unshift(a);A.call(this,eb.apply(null,b));b.shift()};db(fb,A);var gb=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e=ua;if(b)var e=e+(na+b),h=d;throw new fb(f+e,h||[]);}return a};var C=Array.prototype,hb=C.indexOf?function(a,b,c){gb(null!=a.length);return C.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(x(a))return x(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ib=function(a){return C.concat.apply(C,arguments)},jb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var D,E,F,G,kb=function(){return w.navigator?w.navigator.userAgent:null};G=F=E=D=!1;var H;if(H=kb()){var lb=w.navigator;D=0==H.lastIndexOf("Opera",0);E=!D&&(-1!=H.indexOf("MSIE")||-1!=H.indexOf("Trident"));F=!D&&-1!=H.indexOf("WebKit");G=!D&&!F&&!E&&"Gecko"==lb.product}var I=E,J=G,mb=F,nb=function(){var a=w.document;return a?a.documentMode:void 0},K;
t:{var L=f,M;if(D&&w.opera)var N=w.opera.version,L=typeof N==s?N():N;else if(J?M=/rv\:([^\);]+)(\)|;)/:I?M=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:mb&&(M=/WebKit\/(\S+)/),M)var ob=M.exec(kb()),L=ob?ob[1]:f;if(I){var pb=nb();if(pb>parseFloat(L)){K=String(pb);break t}}K=L}
var qb=K,rb={},sb=function(a){var b;if(!(b=rb[a])){b=0;for(var c=String(qb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,f).split(l),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,f).split(l),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||f,p=d[h]||f,Z=RegExp(fa,Ma),Hb=RegExp(fa,Ma);do{var y=Z.exec(k)||[f,f,f],z=Hb.exec(p)||[f,f,f];if(0==y[0].length&&0==z[0].length)break;b=B(0==y[1].length?0:parseInt(y[1],10),0==z[1].length?0:parseInt(z[1],10))||B(0==y[2].length,0==z[2].length)||B(y[2],z[2])}while(0==
b)}b=rb[a]=0<=b}return b},tb=w.document,ub=tb&&I?nb()||("CSS1Compat"==tb.compatMode?parseInt(qb,10):5):void 0;!J&&!I||I&&I&&9<=ub||J&&sb("1.9.1");I&&sb("9");var vb=function(a,b){return x(b)?a.getElementById(b):b},wb=function(a,b,c,d){a=d||a;var e=b&&b!=ga?b.toUpperCase():f;if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?l+c:f));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var h=d=0,k;k=b[h];h++)e==k.nodeName&&(a[d++]=k);a.length=d;return a}return b}b=a.getElementsByTagName(e||ga);if(c){a={};for(h=d=0;k=b[h];h++){var e=k.className,p;if(p=typeof e.split==s)p=0<=hb(e.split(/\s+/),c);p&&(a[d++]=
k)}a.length=d;return a}return b};var O=function(a){this.t=a};O.prototype.serialize=function(a){var b=[];this.A(a,b);return b.join(f)};O.prototype.A=function(a,b){switch(typeof a){case Ya:this.I(a,b);break;case Ra:this.R(a,b);break;case Fa:b.push(a);break;case "undefined":b.push(t);break;case u:if(null==a){b.push(t);break}if(bb(a)==r){this.serializeArray(a,b);break}this.S(a,b);break;case s:break;default:throw Error("Unknown type: "+typeof a);}};
var xb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},yb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;O.prototype.I=function(a,b){b.push(g,a.replace(yb,function(a){if(a in xb)return xb[a];var b=a.charCodeAt(0),e=za;16>b?e+=ma:256>b?e+=la:4096>b&&(e+=ka);return xb[a]=e+b.toString(16)}),g)};O.prototype.R=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:t)};
O.prototype.serializeArray=function(a,b){var c=a.length;b.push(va);for(var d=f,e=0;e<c;e++)b.push(d),d=a[e],this.A(this.t?this.t.call(a,String(e),d):d,b),d=ha;b.push(Aa)};O.prototype.S=function(a,b){b.push($a);var c=f,d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=s&&(b.push(c),this.I(d,b),b.push(n),this.A(this.t?this.t.call(a,d,e):e,b),c=ha)}b.push(ab)};var zb="StopIteration"in w?w.StopIteration:Error("StopIteration"),Ab=function(){};Ab.prototype.next=function(){throw zb;};Ab.prototype.W=function(){return this};var P=function(a,b){this.e={};this.c=[];this.r=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.N(a)};v=P.prototype;v.l=function(){this.s();for(var a=[],b=0;b<this.c.length;b++)a.push(this.e[this.c[b]]);return a};v.n=function(){this.s();return this.c.concat()};v.k=function(a){return Q(this.e,a)};
v.remove=function(a){return Q(this.e,a)?(delete this.e[a],this.b--,this.r++,this.c.length>2*this.b&&this.s(),!0):!1};v.s=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];Q(this.e,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){for(var d={},b=a=0;a<this.c.length;)c=this.c[a],Q(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};v.get=function(a,b){return Q(this.e,a)?this.e[a]:b};
v.set=function(a,b){Q(this.e,a)||(this.b++,this.c.push(a),this.r++);this.e[a]=b};v.N=function(a){var b;if(a instanceof P)b=a.n(),a=a.l();else{b=[];var c=0,d;for(d in a)b[c++]=d;c=[];d=0;for(var e in a)c[d++]=a[e];a=c}for(e=0;e<b.length;e++)this.set(b[e],a[e])};v.forEach=function(a,b){for(var c=this.n(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};v.clone=function(){return new P(this)};
v.W=function(a){this.s();var b=0,c=this.c,d=this.e,e=this.r,h=this,k=new Ab;k.next=function(){for(;;){if(e!=h.r)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw zb;var k=c[b++];return a?k:d[k]}};return k};var Q=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Bb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Db=function(a){if(Cb){Cb=!1;var b=w.location;if(b){var c=b.href;if(c&&(c=(c=Db(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw Cb=!0,Error();}}return a.match(Bb)},Cb=mb;var R=function(a,b){var c;a instanceof R?(this.d=void 0!==b?b:a.d,this.G(a.m),this.H(a.v),this.B(a.p),this.D(a.q),this.setPath(a.getPath()),this.F(a.f.clone()),this.C(a.u)):a&&(c=Db(String(a)))?(this.d=!!b,this.G(c[1]||f,!0),this.H(c[2]||f,!0),this.B(c[3]||f,!0),this.D(c[4]),this.setPath(c[5]||f,!0),this.F(c[6]||f,!0),this.C(c[7]||f,!0)):(this.d=!!b,this.f=new S(null,null,this.d))};v=R.prototype;v.m=f;v.v=f;v.p=f;v.q=null;v.J=f;v.u=f;v.X=!1;v.d=!1;
v.toString=function(){var a=[],b=this.m;b&&a.push(T(b,Eb),n);if(b=this.p){a.push(ja);var c=this.v;c&&a.push(T(c,Eb),ta);a.push(encodeURIComponent(String(b)));b=this.q;null!=b&&a.push(n,String(b))}if(b=this.getPath())this.P()&&b.charAt(0)!=m&&a.push(m),a.push(T(b,b.charAt(0)==m?Fb:Gb));(b=this.O())&&a.push(sa,b);(b=this.u)&&a.push(ba,T(b,Ib));return a.join(f)};v.clone=function(){return new R(this)};v.G=function(a,b){this.h();if(this.m=b?a?decodeURIComponent(a):f:a)this.m=this.m.replace(/:$/,f);return this};
v.H=function(a,b){this.h();this.v=b?a?decodeURIComponent(a):f:a;return this};v.B=function(a,b){this.h();this.p=b?a?decodeURIComponent(a):f:a;return this};v.P=function(){return!!this.p};v.D=function(a){this.h();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.q=a}else this.q=null;return this};v.getPath=function(){return this.J};v.setPath=function(a,b){this.h();this.J=b?a?decodeURIComponent(a):f:a;return this};
v.F=function(a,b){this.h();a instanceof S?(this.f=a,this.f.w(this.d)):(b||(a=T(a,Jb)),this.f=new S(a,null,this.d));return this};v.O=function(){return this.f.toString()};v.Y=function(a,b){this.h();this.f.set(a,b);return this};v.C=function(a,b){this.h();this.u=b?a?decodeURIComponent(a):f:a;return this};v.h=function(){if(this.X)throw Error("Tried to modify a read-only Uri");};v.w=function(a){this.d=a;this.f&&this.f.w(a);return this};
var T=function(a,b){return x(a)?encodeURI(a).replace(b,Kb):null},Kb=function(a){a=a.charCodeAt(0);return ca+(a>>4&15).toString(16)+(a&15).toString(16)},Eb=/[#\/\?@]/g,Gb=/[\#\?:]/g,Fb=/[\#\?]/g,Jb=/[\#\?@]/g,Ib=/#/g,S=function(a,b,c){this.g=a||null;this.d=!!c};v=S.prototype;
v.i=function(){if(!this.a&&(this.a=new P,this.b=0,this.g))for(var a=this.g.split(ea),b=0;b<a.length;b++){var c=a[b].indexOf(q),d=null,e=null;0<=c?(d=a[b].substring(0,c),e=a[b].substring(c+1)):d=a[b];d=decodeURIComponent(d.replace(/\+/g,aa));d=this.j(d);this.add(d,e?decodeURIComponent(e.replace(/\+/g,aa)):f)}};v.a=null;v.b=null;v.add=function(a,b){this.i();this.o();a=this.j(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b++;return this};
v.remove=function(a){this.i();a=this.j(a);return this.a.k(a)?(this.o(),this.b-=this.a.get(a).length,this.a.remove(a)):!1};v.k=function(a){this.i();a=this.j(a);return this.a.k(a)};v.n=function(){this.i();for(var a=this.a.l(),b=this.a.n(),c=[],d=0;d<b.length;d++)for(var e=a[d],h=0;h<e.length;h++)c.push(b[d]);return c};v.l=function(a){this.i();var b=[];if(x(a))this.k(a)&&(b=ib(b,this.a.get(this.j(a))));else{a=this.a.l();for(var c=0;c<a.length;c++)b=ib(b,a[c])}return b};
v.set=function(a,b){this.i();this.o();a=this.j(a);this.k(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b++;return this};v.get=function(a,b){var c=a?this.l(a):[];return 0<c.length?String(c[0]):b};v.setValues=function(a,b){this.remove(a);0<b.length&&(this.o(),this.a.set(this.j(a),jb(b)),this.b+=b.length)};
v.toString=function(){if(this.g)return this.g;if(!this.a)return f;for(var a=[],b=this.a.n(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.l(d),h=0;h<d.length;h++){var k=e;d[h]!==f&&(k+=q+encodeURIComponent(String(d[h])));a.push(k)}return this.g=a.join(ea)};v.o=function(){this.g=null};v.clone=function(){var a=new S;a.g=this.g;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};v.j=function(a){a=String(a);this.d&&(a=a.toLowerCase());return a};
v.w=function(a){a&&!this.d&&(this.i(),this.o(),this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,a))},this));this.d=a};var Lb=function(a,b,c){var d;t:{d=9==b.nodeType?b:b.ownerDocument||b.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||f;break t}d=f}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||d==Pa||d==Za||d==Ua?b!=(9==b.nodeType?b:b.ownerDocument||b.document).body&&b.parentNode?U(a,b.parentNode):c:d},U=function(a,b){return Lb(a,b,Ta)},Mb=function(){for(var a=wb(document,Oa,Da,void 0),b=0;b<
a.length;b++){var c=a[b],d=vb(document,c.id+ia),e=d.href,h=U(Ha,c),k=U(Ba,c),p=Lb(La,c,Va);d.href=Na+(new Date).valueOf();var Z=U(Ha,d),d=d.href=e,e=encodeURIComponent,h=(new O(void 0)).serialize({color:h,backgroundColor:k,unvisitedLinkColor:Z,fontFamily:p}),e=d+(ba+e(h));c.src=e}};var Nb=function(a){this.M=a},Ob=/\s*;\s*/;v=Nb.prototype;v.T=function(a){return!/[;=\s]/.test(a)};v.U=function(a){return!/[;\r\n]/.test(a)};v.set=function(a,b,c,d,e,h){if(!this.T(a))throw Error('Invalid cookie name "'+a+g);if(!this.U(b))throw Error('Invalid cookie value "'+b+g);void 0!==c||(c=-1);e=e?oa+e:f;d=d?qa+d:f;h=h?ra:f;c=0>c?f:0==c?pa+(new Date(1970,1,1)).toUTCString():pa+(new Date(cb()+1E3*c)).toUTCString();this.V(a+q+b+e+d+c+h)};
v.get=function(a,b){for(var c=a+q,d=this.L(),e=0,h;h=d[e];e++){if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return f}return b};v.remove=function(a,b,c){var d=this.k(a);this.set(a,f,0,b,c);return d};v.n=function(){return this.K().keys};v.l=function(){return this.K().Q};v.k=function(a){return void 0!==this.get(a)};v.V=function(a){this.M.cookie=a};v.L=function(){return(this.M.cookie||f).split(Ob)};
v.K=function(){for(var a=this.L(),b=[],c=[],d,e,h=0;e=a[h];h++)d=e.indexOf(q),-1==d?(b.push(f),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,Q:c}};var Pb=new Nb(document);Pb.aa=3950;var V=-1,Qb=-1,Rb=function(a){if(V==a&&-1!=V)return Pb.get(Ka+Qb,null);V=-1;return null};var Sb=function(a,b){Qb=b;V=Math.floor(1E7*Math.random());for(var c=wb(document,Oa,Ca,void 0),d=0;d<c.length;d++){var e=vb(document,c[d].id+ia),h=new R(e.href);h.Y(Ea,V);e.href=h.toString()}window.gadgets&&window.gadgets.rpc&&(gadgets.rpc.setRelayUrl(Ia,a),gadgets.rpc.register(Ja,Rb));Mb();c=function(a){0==a.data.indexOf(Wa)&&(document.getElementById(Ia).height=a.data.substring(26))};window.addEventListener?window.addEventListener(Qa,c,!1):window.attachEvent&&window.attachEvent(Sa,c)},W=["BLOG_CMT_createIframe"],
X=w;W[0]in X||!X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());)W.length||void 0===Sb?X=X[Y]?X[Y]:X[Y]={}:X[Y]=Sb; })()