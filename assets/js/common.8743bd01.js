"use strict";(self.webpackChunk_16jalayt_github_io=self.webpackChunk_16jalayt_github_io||[]).push([[76],{587:(e,t,r)=>{r.d(t,{A:()=>Qt});var n=r(6540),s=r(1635),o=r(2833),a=r.n(o),i="-ms-",c="-moz-",u="-webkit-",l="comm",f="rule",p="decl",h="@import",d="@keyframes",g="@layer",m=Math.abs,v=String.fromCharCode,y=Object.assign;function S(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,r){return e.replace(t,r)}function _(e,t,r){return e.indexOf(t,r)}function C(e,t){return 0|e.charCodeAt(t)}function x(e,t,r){return e.slice(t,r)}function I(e){return e.length}function P(e){return e.length}function A(e,t){return t.push(e),e}function k(e,t){return e.filter((function(e){return!b(e,t)}))}var E=1,$=1,R=0,N=0,O=0,j="";function T(e,t,r,n,s,o,a,i){return{value:e,root:t,parent:r,type:n,props:s,children:o,line:E,column:$,length:a,return:"",siblings:i}}function D(e,t){return y(T("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=D(e.root,{children:[e]});A(e,e.siblings)}function z(){return O=N>0?C(j,--N):0,$--,10===O&&($=1,E--),O}function G(){return O=N<R?C(j,N++):0,$++,10===O&&($=1,E++),O}function M(){return C(j,N)}function B(){return N}function L(e,t){return x(j,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y(e){return E=$=1,R=I(j=e),N=0,[]}function H(e){return j="",e}function q(e){return S(L(N-1,Z(91===e?e+2:40===e?e+1:e)))}function U(e){for(;(O=M())&&O<33;)G();return W(e)>2||W(O)>3?"":" "}function V(e,t){for(;--t&&G()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return L(e,B()+(t<6&&32==M()&&32==G()))}function Z(e){for(;G();)switch(O){case e:return N;case 34:case 39:34!==e&&39!==e&&Z(O);break;case 40:41===e&&Z(e);break;case 92:G()}return N}function J(e,t){for(;G()&&e+O!==57&&(e+O!==84||47!==M()););return"/*"+L(t,N-1)+"*"+v(47===e?e:G())}function K(e){for(;!W(M());)G();return L(e,N)}function Q(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function X(e,t,r,n){switch(e.type){case g:if(e.children.length)break;case h:case p:return e.return=e.return||e.value;case l:return"";case d:return e.return=e.value+"{"+Q(e.children,n)+"}";case f:if(!I(e.value=e.props.join(",")))return""}return I(r=Q(e.children,n))?e.return=e.value+"{"+r+"}":""}function ee(e,t,r){switch(function(e,t){return 45^C(e,0)?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+c+e+i+e+e;case 5936:switch(C(e,t+11)){case 114:return u+e+i+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+i+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+i+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+i+e+e;case 6165:return u+e+i+"flex-"+e+e;case 5187:return u+e+w(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+i+"flex-$1$2")+e;case 5443:return u+e+i+"flex-item-"+w(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":i+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return u+e+i+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+i+w(e,"shrink","negative")+e;case 5292:return u+e+i+w(e,"basis","preferred-size")+e;case 6060:return u+"box-"+w(e,"-grow","")+u+e+i+w(e,"grow","positive")+e;case 4554:return u+w(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+i+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!b(e,/flex-|baseline/))return i+"grid-column-align"+x(e,t)+e;break;case 2592:case 3360:return i+w(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,b(e.props,/grid-\w+-end/)}))?~_(e+(r=r[t].value),"span",0)?e:i+w(e,"-start","")+e+i+"grid-row-span:"+(~_(r,"span",0)?b(r,/\d+/):+b(r,/\d+/)-+b(e,/\d+/))+";":i+w(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return b(e.props,/grid-\w+-start/)}))?e:i+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(I(e)-1-t>6)switch(C(e,t+1)){case 109:if(45!==C(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==C(e,t+3)?"$3":"$2-$3"))+e;case 115:return~_(e,"stretch",0)?ee(w(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,s,o,a,c){return i+r+":"+n+c+(s?i+r+"-span:"+(o?a:+a-+n)+c:"")+e}));case 4949:if(121===C(e,t+6))return w(e,":",":"+u)+e;break;case 6444:switch(C(e,45===C(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===C(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+i+"$2box$3")+e;case 100:return w(e,":",":"+i)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function te(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=ee(e.value,e.length,r));case d:return Q([D(e,{value:w(e.value,"@","@"+u)})],n);case f:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(b(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(D(e,{props:[w(t,/:(read-\w+)/,":"+c+"$1")]})),F(D(e,{props:[t]})),y(e,{props:k(r,n)});break;case"::placeholder":F(D(e,{props:[w(t,/:(plac\w+)/,":"+u+"input-$1")]})),F(D(e,{props:[w(t,/:(plac\w+)/,":"+c+"$1")]})),F(D(e,{props:[w(t,/:(plac\w+)/,i+"input-$1")]})),F(D(e,{props:[t]})),y(e,{props:k(r,n)})}return""}))}}function re(e){return H(ne("",null,null,null,[""],e=Y(e),0,[0],e))}function ne(e,t,r,n,s,o,a,i,c){for(var u=0,l=0,f=a,p=0,h=0,d=0,g=1,y=1,S=1,b=0,x="",P=s,k=o,E=n,$=x;y;)switch(d=b,b=G()){case 40:if(108!=d&&58==C($,f-1)){-1!=_($+=w(q(b),"&","&\f"),"&\f",m(u?i[u-1]:0))&&(S=-1);break}case 34:case 39:case 91:$+=q(b);break;case 9:case 10:case 13:case 32:$+=U(d);break;case 92:$+=V(B()-1,7);continue;case 47:switch(M()){case 42:case 47:A(oe(J(G(),B()),t,r,c),c);break;default:$+="/"}break;case 123*g:i[u++]=I($)*S;case 125*g:case 59:case 0:switch(b){case 0:case 125:y=0;case 59+l:-1==S&&($=w($,/\f/g,"")),h>0&&I($)-f&&A(h>32?ae($+";",n,r,f-1,c):ae(w($," ","")+";",n,r,f-2,c),c);break;case 59:$+=";";default:if(A(E=se($,t,r,u,l,s,i,x,P=[],k=[],f,o),o),123===b)if(0===l)ne($,t,E,E,P,o,f,i,k);else switch(99===p&&110===C($,3)?100:p){case 100:case 108:case 109:case 115:ne(e,E,E,n&&A(se(e,E,E,0,0,s,i,x,s,P=[],f,k),k),s,k,f,i,n?P:k);break;default:ne($,E,E,E,[""],k,0,i,k)}}u=l=h=0,g=S=1,x=$="",f=a;break;case 58:f=1+I($),h=d;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==z())continue;switch($+=v(b),b*g){case 38:S=l>0?1:($+="\f",-1);break;case 44:i[u++]=(I($)-1)*S,S=1;break;case 64:45===M()&&($+=q(G())),p=M(),l=f=I(x=$+=K(B())),b++;break;case 45:45===d&&2==I($)&&(g=0)}}return o}function se(e,t,r,n,s,o,a,i,c,u,l,p){for(var h=s-1,d=0===s?o:[""],g=P(d),v=0,y=0,b=0;v<n;++v)for(var _=0,C=x(e,h+1,h=m(y=a[v])),I=e;_<g;++_)(I=S(y>0?d[_]+" "+C:w(C,/&\f/g,d[_])))&&(c[b++]=I);return T(e,t,r,0===s?f:i,c,u,l,p)}function oe(e,t,r,n){return T(e,t,r,l,v(O),x(e,2,-2),0,n)}function ae(e,t,r,n,s){return T(e,t,r,p,x(e,0,n),x(e,n+1,-1),n,s)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ce="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ue="active",le="data-styled-version",fe="6.1.13",pe="/*!sc*/\n",he="undefined"!=typeof window&&"HTMLElement"in window,de=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&("false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY)),ge=(new Set,Object.freeze([])),me=Object.freeze({});function ve(e,t,r){return void 0===r&&(r=me),e.theme!==r.theme&&e.theme||t||r.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function we(e){return e.replace(Se,"-").replace(be,"")}var _e=/(a)(d)/gi,Ce=52,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ie(e){var t,r="";for(t=Math.abs(e);t>Ce;t=t/Ce|0)r=xe(t%Ce)+r;return(xe(t%Ce)+r).replace(_e,"$1-$2")}var Pe,Ae=5381,ke=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ee=function(e){return ke(Ae,e)};function $e(e){return Ie(Ee(e)>>>0)}function Re(e){return e.displayName||e.name||"Component"}function Ne(e){return"string"==typeof e&&!0}var Oe="function"==typeof Symbol&&Symbol.for,je=Oe?Symbol.for("react.memo"):60115,Te=Oe?Symbol.for("react.forward_ref"):60112,De={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ze={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ge=((Pe={})[Te]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pe[je]=ze,Pe);function Me(e){return("type"in(t=e)&&t.type.$$typeof)===je?ze:"$$typeof"in e?Ge[e.$$typeof]:De;var t}var Be=Object.defineProperty,Le=Object.getOwnPropertyNames,We=Object.getOwnPropertySymbols,Ye=Object.getOwnPropertyDescriptor,He=Object.getPrototypeOf,qe=Object.prototype;function Ue(e,t,r){if("string"!=typeof t){if(qe){var n=He(t);n&&n!==qe&&Ue(e,n,r)}var s=Le(t);We&&(s=s.concat(We(t)));for(var o=Me(e),a=Me(t),i=0;i<s.length;++i){var c=s[i];if(!(c in Fe||r&&r[c]||a&&c in a||o&&c in o)){var u=Ye(t,c);try{Be(e,c,u)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function Ze(e){return"object"==typeof e&&"styledComponentId"in e}function Je(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ke(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,r){if(void 0===r&&(r=!1),!r&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Xe(e[n],t[n]);else if(Qe(t))for(var n in t)e[n]=Xe(e[n],t[n]);return e}function et(e,t){Object.defineProperty(e,"toString",{value:t})}function tt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,s=n;e>=s;)if((s<<=1)<0)throw tt(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=n;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),i=(o=0,t.length);o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var s=r;s<n;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r,o=n;o<s;o++)t+="".concat(this.tag.getRule(o)).concat(pe);return t},e}(),nt=new Map,st=new Map,ot=1,at=function(e){if(nt.has(e))return nt.get(e);for(;st.has(ot);)ot++;var t=ot++;return nt.set(e,t),st.set(t,e),t},it=function(e,t){ot=t+1,nt.set(e,t),st.set(t,e)},ct="style[".concat(ce,"][").concat(le,'="').concat(fe,'"]'),ut=new RegExp("^".concat(ce,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,r){for(var n,s=r.split(","),o=0,a=s.length;o<a;o++)(n=s[o])&&e.registerName(t,n)},ft=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(pe),s=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var c=i.match(ut);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(it(l,u),lt(e,l,c[3]),e.getTag().insertRules(u,s)),s.length=0}else s.push(i)}}},pt=function(e){for(var t=document.querySelectorAll(ct),r=0,n=t.length;r<n;r++){var s=t[r];s&&s.getAttribute(ce)!==ue&&(ft(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function ht(){return r.nc}var dt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),s=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ce,"]")));return t[t.length-1]}(r),o=void 0!==s?s.nextSibling:null;n.setAttribute(ce,ue),n.setAttribute(le,fe);var a=ht();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},gt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var s=t[r];if(s.ownerNode===e)return s}throw tt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),yt=he,St={isServer:!he,useCSSOMInjection:!de},bt=function(){function e(e,t,r){void 0===e&&(e=me),void 0===t&&(t={});var n=this;this.options=(0,s.__assign)((0,s.__assign)({},St),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&he&&yt&&(yt=!1,pt(this)),et(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",s=function(r){var s=function(e){return st.get(e)}(r);if(void 0===s)return"continue";var o=e.names.get(s),a=t.getGroup(r);if(void 0===o||!o.size||0===a.length)return"continue";var i="".concat(ce,".g").concat(r,'[id="').concat(s,'"]'),c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(a).concat(i,'{content:"').concat(c,'"}').concat(pe)},o=0;o<r;o++)s(o);return n}(n)}))}return e.registerId=function(e){return at(e)},e.prototype.rehydrate=function(){!this.server&&he&&pt(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e((0,s.__assign)((0,s.__assign)({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new vt(r):t?new gt(r):new mt(r)}(this.options),new rt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(at(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(at(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(at(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wt=/&/g,_t=/^\s*\/\/.*$/gm;function Ct(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ct(e.children,t)),e}))}function xt(e){var t,r,n,s=void 0===e?me:e,o=s.options,a=void 0===o?me:o,i=s.plugins,c=void 0===i?ge:i,u=function(e,n,s){return s.startsWith(r)&&s.endsWith(r)&&s.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wt,r).replace(n,u))})),a.prefix&&l.push(te),l.push(X);var p=function(e,s,o,i){void 0===s&&(s=""),void 0===o&&(o=""),void 0===i&&(i="&"),t=i,r=s,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(_t,""),u=re(o||s?"".concat(o," ").concat(s," { ").concat(c," }"):c);a.namespace&&(u=Ct(u,a.namespace));var f,p,h,d=[];return Q(u,(f=l.concat((h=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&h(e)})),p=P(f),function(e,t,r,n){for(var s="",o=0;o<p;o++)s+=f[o](e,t,r,n)||"";return s})),d};return p.hash=c.length?c.reduce((function(e,t){return t.name||tt(15),ke(e,t.name)}),Ae).toString():"",p}var It=new bt,Pt=xt(),At=n.createContext({shouldForwardProp:void 0,styleSheet:It,stylis:Pt}),kt=(At.Consumer,n.createContext(void 0));function Et(){return(0,n.useContext)(At)}function $t(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],s=t[1],o=Et().styleSheet,i=(0,n.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),c=(0,n.useMemo)((function(){return xt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,n.useEffect)((function(){a()(r,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]);var u=(0,n.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:c}}),[e.shouldForwardProp,i,c]);return n.createElement(At.Provider,{value:u},n.createElement(kt.Provider,{value:c},e.children))}var Rt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Pt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,et(this,(function(){throw tt(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Pt),this.name+e.hash},e}(),Nt=function(e){return e>="A"&&e<="Z"};function Ot(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Nt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var jt=function(e){return null==e||!1===e||""===e},Tt=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!jt(a)&&(Array.isArray(a)&&a.isCss||Ve(a)?n.push("".concat(Ot(o),":"),a,";"):Qe(a)?n.push.apply(n,(0,s.__spreadArray)((0,s.__spreadArray)(["".concat(o," {")],Tt(a),!1),["}"],!1)):n.push("".concat(Ot(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ie||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Dt(e,t,r,n){return jt(e)?[]:Ze(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(s=e)||s.prototype&&s.prototype.isReactComponent||!t?[e]:Dt(e(t),t,r,n):e instanceof Rt?r?(e.inject(r,n),[e.getName(n)]):[e]:Qe(e)?Tt(e):Array.isArray(e)?Array.prototype.concat.apply(ge,e.map((function(e){return Dt(e,t,r,n)}))):[e.toString()];var s}function Ft(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ve(r)&&!Ze(r))return!1}return!0}var zt=Ee(fe),Gt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Ft(e),this.componentId=t,this.baseHash=ke(zt,t),this.baseStyle=r,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Je(n,this.staticRulesId);else{var s=Ke(Dt(this.rules,e,t,r)),o=Ie(ke(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=Je(n,o),this.staticRulesId=o}else{for(var i=ke(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=Ke(Dt(l,e,t,r));i=ke(i,f+u),c+=f}}if(c){var p=Ie(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=Je(n,p)}}return n},e}(),Mt=n.createContext(void 0);Mt.Consumer;var Bt={};new Set;function Lt(e,t,r){var o=Ze(e),a=e,i=!Ne(e),c=t.attrs,u=void 0===c?ge:c,l=t.componentId,f=void 0===l?function(e,t){var r="string"!=typeof e?"sc":we(e);Bt[r]=(Bt[r]||0)+1;var n="".concat(r,"-").concat($e(fe+r+Bt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):l,p=t.displayName,h=void 0===p?function(e){return Ne(e)?"styled.".concat(e):"Styled(".concat(Re(e),")")}(e):p,d=t.displayName&&t.componentId?"".concat(we(t.displayName),"-").concat(t.componentId):t.componentId||f,g=o&&a.attrs?a.attrs.concat(u).filter(Boolean):u,m=t.shouldForwardProp;if(o&&a.shouldForwardProp){var v=a.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;m=function(e,t){return v(e,t)&&y(e,t)}}else m=v}var S=new Gt(r,d,o?a.componentStyle:void 0);function b(e,t){return function(e,t,r){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,f=n.useContext(Mt),p=Et(),h=e.shouldForwardProp||p.shouldForwardProp,d=ve(t,f,i)||me,g=function(e,t,r){for(var n,o=(0,s.__assign)((0,s.__assign)({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=Ve(n=e[a])?n(o):n;for(var c in i)o[c]="className"===c?Je(o[c],i[c]):"style"===c?(0,s.__assign)((0,s.__assign)({},o[c]),i[c]):i[c]}return t.className&&(o.className=Je(o.className,t.className)),o}(o,t,d),m=g.as||l,v={};for(var y in g)void 0===g[y]||"$"===y[0]||"as"===y||"theme"===y&&g.theme===d||("forwardedAs"===y?v.as=g.forwardedAs:h&&!h(y,m)||(v[y]=g[y]));var S=function(e,t){var r=Et();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(a,g),b=Je(c,u);return S&&(b+=" "+S),g.className&&(b+=" "+g.className),v[Ne(m)&&!ye.has(m)?"class":"className"]=b,v.ref=r,(0,n.createElement)(m,v)}(w,e,t)}b.displayName=h;var w=n.forwardRef(b);return w.attrs=g,w.componentStyle=S,w.displayName=h,w.shouldForwardProp=m,w.foldedComponentIds=o?Je(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=d,w.target=o?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,s=t;n<s.length;n++)Xe(e,s[n],!0);return e}({},a.defaultProps,e):e}}),et(w,(function(){return".".concat(w.styledComponentId)})),i&&Ue(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Wt(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var Yt=function(e){return Object.assign(e,{isCss:!0})};function Ht(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ve(e)||Qe(e))return Yt(Dt(Wt(ge,(0,s.__spreadArray)([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Dt(n):Yt(Dt(Wt(n,t)))}function qt(e,t,r){if(void 0===r&&(r=me),!t)throw tt(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,Ht.apply(void 0,(0,s.__spreadArray)([n],o,!1)))};return n.attrs=function(n){return qt(e,t,(0,s.__assign)((0,s.__assign)({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return qt(e,t,(0,s.__assign)((0,s.__assign)({},r),n))},n}var Ut=function(e){return qt(Lt,e)},Vt=Ut;ye.forEach((function(e){Vt[e]=Ut(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ft(e),bt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var s=n(Ke(Dt(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,s)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&bt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=ht(),n=Ke([r&&'nonce="'.concat(r,'"'),"".concat(ce,'="true"'),"".concat(le,'="').concat(fe,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw tt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw tt(2);var r=e.instance.toString();if(!r)return[];var o=((t={})[ce]="",t[le]=fe,t.dangerouslySetInnerHTML={__html:r},t),a=ht();return a&&(o.nonce=a),[n.createElement("style",(0,s.__assign)({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw tt(2);return n.createElement($t,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw tt(3)}})(),"__sc-".concat(ce,"__");var Zt=r(4848);const Jt=Vt.div`
    display: flex;
	flex-direction:column;
    align-items:center;
    justify-content: center;
    align:center
`,Kt=Vt.img`

`,Qt=e=>(0,Zt.jsxs)(Jt,{children:[(0,Zt.jsx)("a",{href:e.href,target:"_blank",children:(0,Zt.jsx)(Kt,{src:e.src,alt:"Unhelpful generic description of an image."})}),(0,Zt.jsxs)("a",{href:e.link,children:[" ",e.subText||"Uploaded to Flickr"," "]})]})},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);