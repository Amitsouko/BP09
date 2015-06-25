/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/**
* Provides requestAnimationFrame in a cross browser way.
* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
*/
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (function (id) {
    	return window.cancelAnimationFrame ||
    	window.webkitCancelRequestAnimationFrame ||
    	window.mozCancelRequestAnimationFrame ||
    	window.oCancelRequestAnimationFrame ||
    	window.msCancelRequestAnimationFrame ||
    	clearTimeout(id);
    })();
}

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function (callback, element, time) {
    	return window.webkitRequestAnimationFrame ||
    	window.mozRequestAnimationFrame ||
    	window.oRequestAnimationFrame ||
    	window.msRequestAnimationFrame ||
    	function (/* function */callback, /* DOMElement */element) {
    		return window.setTimeout(callback, 1000 / 60);
    	};
    })();
}

var App, AppCore, BlockProduct, ComponentsBase, Event, FilterProduct, Highlight, Home, LazyLoader, ListPack, ListProduct, Loader, Menu, MiniCart, Normalize, PackDetail, PackEditor, Page, Popin, ProductDetail, ProductPage, ProductSlider, Router, Slider, SocialSharing, Transitions, Utils, W, YourPack,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AppCore = (function() {
  function AppCore() {
    this.update = bind(this.update, this);
    this._onTransitionsEnd = bind(this._onTransitionsEnd, this);
    this._onTransitionsMiddle = bind(this._onTransitionsMiddle, this);
    this._onTransitionsStart = bind(this._onTransitionsStart, this);
    this._onResize = bind(this._onResize, this);
    this._initEvents = bind(this._initEvents, this);
    this._destroySection = bind(this._destroySection, this);
    this._initPage = bind(this._initPage, this);
    this._initContent = bind(this._initContent, this);
    W.init();
    this._initContent();
    this._initEvents();
    this._onResize();
  }

  AppCore.prototype._initContent = function() {
    W.time = {
      now: +new Date(),
      old: +new Date()
    };
    return this._initPage();
  };

  AppCore.prototype._initPage = function() {
    var Class;
    this._destroySection();
    this.pageId = $('.content-page').attr('id').replace('page-', '');
    if (this.pageId) {
      Class = App.pages[this.pageId] || Page;
      this.section = new Class({
        pageId: this.pageId
      });
    }
    return this._onResize();
  };

  AppCore.prototype._destroySection = function() {
    if (this.section) {
      this.section.destroy();
    }
    return this.section = void 0;
  };

  AppCore.prototype._initEvents = function() {
    W.window.on('resize', this._onResize);
    return $(this.transitions).on(Transitions.START, this._onTransitionsStart).on(Transitions.MIDDLE, this._onTransitionsMiddle).on(Transitions.END, this._onTransitionsEnd);
  };

  AppCore.prototype._onResize = function() {
    W.sw = screen.width;
    W.sh = screen.height;
    W.ww = W.window.width();
    W.wh = W.window.height();
    if (this.section && this.section.resize) {
      return this.section.resize();
    }
  };

  AppCore.prototype._onTransitionsStart = function() {};

  AppCore.prototype._onTransitionsMiddle = function() {
    return this._initPage();
  };

  AppCore.prototype._onTransitionsEnd = function() {};

  AppCore.prototype.update = function() {
    W.time.now = +new Date();
    W.time.delta = (W.time.now - W.time.old) / 1000;
    W.time.old = W.time.now;
    if (this.section && this.section.update) {
      return this.section.update();
    }
  };

  return AppCore;

})();

$(function() {
  var app, tick;
  app = new App();
  return (tick = function() {
    app.update();
    return window.requestAnimationFrame(tick);
  })();
});

ComponentsBase = (function() {
  function ComponentsBase(options) {
    this.resize = bind(this.resize, this);
    this._onResize = bind(this._onResize, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    this.container = options.container;
    this._initContent();
    this._initEvents();
    this.resize();
  }

  ComponentsBase.prototype._initContent = function() {};

  ComponentsBase.prototype._initEvents = function() {
    return W.window.on('resize', this._onResize);
  };

  ComponentsBase.prototype._onResize = function(e) {
    return this.resize();
  };

  ComponentsBase.prototype.resize = function() {};

  return ComponentsBase;

})();

Event = (function() {
  function Event() {}

  Event.MOUSEDOWN = $('body').hasClass('tablet') ? 'touchstart' : 'mousedown';

  Event.MOUSEUP = $('body').hasClass('tablet') ? 'touchend' : 'mouseup';

  Event.MOUSEMOVE = $('body').hasClass('tablet') ? 'touchmove' : 'mousemove';

  Event.CLICK = $('body').hasClass('tablet') ? 'touchstart' : 'click';

  Event.ENTER = $('body').hasClass('tablet') ? 'touchstart' : 'mouseenter';

  Event.LEAVE = $('body').hasClass('tablet') ? 'touchstart' : 'mouseleave';

  Event.KEYDOWN = 'keydown';

  Event.WHEEL = 'mousewheel';

  Event.LOADED = 'loaded';

  Event.STEPS = 'steps';

  Event.SUBMIT = 'submit';

  return Event;

})();

Loader = (function() {
  function Loader(options) {
    this._onLoad = bind(this._onLoad, this);
    var pics;
    this.container = options.container, this.each = options.each, this.complete = options.complete;
    pics = this.container.find('img').filter(function() {
      return this.getAttribute('src') === '';
    });
    this.imgLength = pics.length;
    this.imgInc = 0;
    this.steps = 0;
    this.empty = false;
    if (!pics.length) {
      this.empty = true;
      if (this.complete) {
        this.complete();
      }
    }
    pics.each((function(_this) {
      return function(key, item) {
        var src;
        src = item.getAttribute('data-src');
        $(item).on('load', _this._onLoad);
        return item.src = src;
      };
    })(this));
  }

  Loader.prototype._onLoad = function(e) {
    var item;
    item = e.currentTarget;
    this.imgInc++;
    this.steps = this.imgInc / this.imgLength * 100;
    if (this.each) {
      this.each(item);
    }
    if (this.imgInc === this.imgLength) {
      if (this.complete) {
        return this.complete();
      }
    }
  };

  return Loader;

})();

Page = (function() {
  function Page(options) {
    this.destroy = bind(this.destroy, this);
    this.update = bind(this.update, this);
    this.resize = bind(this.resize, this);
    this._onLoaderEach = bind(this._onLoaderEach, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    this.pageId = options.pageId;
    this._initContent();
    this._initEvents();
  }

  Page.prototype._initContent = function() {
    this.container = $('#page-' + this.pageId.charAt(0).toLowerCase() + this.pageId.slice(1));
    return new Loader({
      container: this.container,
      each: this._onLoaderEach,
      complete: this._onLoaderComplete
    });
  };

  Page.prototype._initEvents = function() {};

  Page.prototype._onLoaderEach = function() {};

  Page.prototype.resize = function() {};

  Page.prototype.update = function() {};

  Page.prototype.destroy = function() {
    var name;
    return name = this.constructor.name;
  };

  return Page;

})();

Router = (function() {
  Router.CALLSTART = 'callstart';

  Router.CALLEND = 'callend';

  Router.CALLERROR = 'callerror';

  Router.INITIALIZE = 'initialize';

  Router.CLICK = 'click';

  Router.singleton;

  function Router() {
    this.backCall = bind(this.backCall, this);
    this.cache = {};
    this.container = $('.ajaxContainer');
    this.current = this.container.attr('id');
    this.headTitle = $('title');
    this.pages = {
      'prev': '',
      'current': this.container.attr('id')
    };
    this.requestInProgress = false;
    this.fromCache = false;
    this.fromNativeNav = false;
    this._initEvents();
    this.initCache();
    Router.singleton = this;
  }

  Router.prototype.initCache = function() {
    this.href = document.location.pathname;
    this.content = this.container;
    return this.caching();
  };

  Router.prototype._initEvents = function() {
    $(document).on('click', 'a', (function(_this) {
      return function(e) {
        _this.elm = $(e.currentTarget);
        _this.href = _this.elm.attr('href');
        _this.checkRequestAvailability();
        if (_this.isRequestAvailable) {
          _this.getContent();
        }
        if (!_this.isTargetSet) {
          e.preventDefault();
        }
        return $(_this).trigger(Router.CLICK);
      };
    })(this));
    return $(window).on('popstate', (function(_this) {
      return function(event) {
        if (document.location.pathname.split('#')[0] !== _this.href) {
          _this.backCall();
          return event.preventDefault();
        }
      };
    })(this));
  };

  Router.prototype.checkRequestAvailability = function() {
    this.isRequestAvailable = true;
    this.isTargetSet = false;
    if (this.areUrlsMatching()) {
      this.isRequestAvailable = false;
    }
    if (this.requestInProgress) {
      this.isRequestAvailable = false;
    }
    if (this.elm.attr('target')) {
      this.isTargetSet = true;
      return this.isRequestAvailable = false;
    }
  };

  Router.prototype.areUrlsMatching = function() {
    var currentPath, currentUrl, urlToCheck;
    urlToCheck = this.href;
    currentPath = document.location.pathname;
    currentUrl = document.location.href;
    if (urlToCheck.substr(-1) === '/') {
      urlToCheck = urlToCheck.substr(0, urlToCheck.length - 1);
    }
    if (currentUrl.substr(-1) === '/') {
      currentUrl = currentUrl.substr(0, currentUrl.length - 1);
      currentPath = currentPath.substr(0, currentPath.length - 1);
    }
    if (urlToCheck === currentPath || urlToCheck === currentUrl) {
      return true;
    }
    return false;
  };

  Router.prototype.backCall = function() {
    this.fromNativeNav = true;
    if (document.location.pathname === this.href) {
      return window.history.go(-1);
    } else {
      this.href = document.location.pathname;
      return this.getContent();
    }
  };

  Router.prototype.getContent = function() {
    this.pages.prev = this.pages.current;
    this.requestInProgress = true;
    $(this).trigger(Router.CALLSTART);
    if (this.cache[this.href]) {
      this.fromCache = true;
      this.content = this.cache[this.href].content.clone();
      this.title = this.cache[this.href].title;
      return this.requestSucceeded();
    } else {
      this.fromCache = false;
      return this.request();
    }
  };

  Router.prototype.request = function() {
    if (this.ajaxRequest && this.ajaxRequest !== 4) {
      this.ajaxRequest.abort();
    }
    return this.ajaxRequest = $.ajax({
      url: this.href,
      success: (function(_this) {
        return function(response) {
          _this.ajaxResponse = response;
          _this.content = $(response).filter('.ajaxContainer');
          if (_this.content.length === 0) {
            _this.content = $(response).find('.ajaxContainer');
          }
          _this.title = $(response).filter('title').text();
          return _this.requestSucceeded();
        };
      })(this),
      complete: (function(_this) {
        return function(request, status) {};
      })(this),
      error: (function(_this) {
        return function(response) {
          return $(_this).trigger(Router.CALLERROR);
        };
      })(this)
    });
  };

  Router.prototype.requestSucceeded = function(response) {
    this.pages.current = this.content.attr('id');
    this.changeTitle();
    this.caching();
    if (this.fromNativeNav === false) {
      this.changeUrl();
    }
    this.fromNativeNav = false;
    return $(this).trigger(Router.CALLEND);
  };

  Router.prototype.changeTitle = function() {
    return this.headTitle.text(this.title);
  };

  Router.prototype.caching = function() {
    return this.cache[this.href] = {
      'content': this.content.clone(),
      'title': this.title
    };
  };

  Router.prototype.changeUrl = function(href) {
    var pathname, state;
    if (href) {
      this.href = href;
    }
    state = {};
    pathname = this.href.split(window.location.host)[1];
    if (pathname) {
      pathname = pathname.substr(4);
    }
    if (window.history.pushState) {
      if (this.pages.current === this.pages.prev) {
        return window.history.replaceState(state, null, this.href);
      } else {
        return window.history.pushState(state, null, this.href);
      }
    } else {
      return window.location.hash = pathname;
    }
  };

  return Router;

})();

SocialSharing = (function() {
  function SocialSharing() {
    this._onLinkClick = bind(this._onLinkClick, this);
    this._initEvents = bind(this._initEvents, this);
    this.links = $('.social-link');
    this._initEvents();
  }

  SocialSharing.prototype._initEvents = function() {
    return $(document).on(Event.CLICK, '.social-link', this._onLinkClick);
  };

  SocialSharing.prototype._onLinkClick = function(e) {
    var height, leftPosition, link, options, topPosition, width, windowFeatures;
    e.preventDefault();
    link = $(e.currentTarget).attr('href');
    width = 800;
    height = 500;
    leftPosition = (W.ww / 2) - ((width / 2) + 10);
    topPosition = (W.wh / 2) - ((height / 2) + 50);
    options = windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    return window.open(link, '', options);
  };

  return SocialSharing;

})();

Transitions = (function() {
  Transitions.START = 'callstart';

  Transitions.END = 'callend';

  Transitions.MIDDLE = 'callmiddle';

  function Transitions() {
    this._defaultIn = bind(this._defaultIn, this);
    this._defaultOut = bind(this._defaultOut, this);
    this._transitionIn = bind(this._transitionIn, this);
    this._transitionOut = bind(this._transitionOut, this);
    this._onRouterEnd = bind(this._onRouterEnd, this);
    this._onRouterStart = bind(this._onRouterStart, this);
    this._onRouterClick = bind(this._onRouterClick, this);
    this._initEvents = bind(this._initEvents, this);
    this.router = new Router();
    this._transitionInDelay = 0;
    this.transitionsWhenCallFinished = true;
    this._initEvents();
  }

  Transitions.prototype._initEvents = function() {
    return $(this.router).on(Router.CLICK, this._onRouterClick).on(Router.CALLSTART, this._onRouterStart).on(Router.CALLEND, this._onRouterEnd);
  };

  Transitions.prototype._onRouterClick = function() {};

  Transitions.prototype._onRouterStart = function() {
    if (this.transitionsWhenCallFinished !== true) {
      return this._transitionOut();
    }
  };

  Transitions.prototype._onRouterEnd = function() {
    var transitionName;
    if (this.transitionsWhenCallFinished === true) {
      transitionName = '_' + this.router.pages.prev + 'To' + this.router.pages.current.charAt(0).toUpperCase() + this.router.pages.current.slice(1);
      if (this[transitionName]) {
        return this[transitionName]();
      } else {
        this._transitionOut();
        return setTimeout((function(_this) {
          return function() {
            return _this._transitionIn();
          };
        })(this), this._transitionInDelay);
      }
    } else {
      return this._transitionIn();
    }
  };

  Transitions.prototype._transitionOut = function() {
    var transitionName;
    transitionName = '_' + this.router.pages.prev + 'Out';
    if (this[transitionName]) {
      return this[transitionName]();
    } else {
      return this._defaultOut();
    }
  };

  Transitions.prototype._transitionIn = function() {
    var transitionName;
    transitionName = '_' + this.router.pages.current + 'In';
    $(window).scrollTop(0);
    if (this[transitionName]) {
      return this[transitionName]();
    } else {
      return this._defaultIn();
    }
  };

  Transitions.prototype._defaultOut = function() {
    this.container = $('.ajaxContainer');
    this.router.requestInProgress = true;
    this.container.addClass('removed');
    this.container[0].offsetHeight;
    return $(this).trigger(Transitions.START);
  };

  Transitions.prototype._defaultIn = function() {
    var newContainer, oldContainer;
    oldContainer = $('.ajaxContainer');
    newContainer = this.router.content;
    oldContainer.eq(0).after(newContainer);
    oldContainer.remove();
    newContainer.addClass('added');
    newContainer[0].offsetHeight;
    newContainer.removeClass('added');
    this.sectionId = this.router.pages.current;
    $(this).trigger(Transitions.MIDDLE);
    this.router.requestInProgress = false;
    return $(this).trigger(Transitions.END);
  };

  return Transitions;

})();

W = (function() {
  function W() {}

  W.init = function() {
    W.window = $(window);
    W.body = $('body');
    W.device = $('body').attr('class');
    W.ww = $(window).width();
    W.wh = $(window).height();
    W.sw = screen.width;
    W.sh = screen.height;
    W.scrollTop = {
      real: 0,
      calc: 0
    };
    return W.isTablet = $('body').hasClass('tablet') ? true : false;
  };

  return W;

})();

Normalize = (function() {
  function Normalize() {}

  Normalize.transform = function(elm, transform) {
    if (elm) {
      elm.style.transform = transform;
      elm.style.webkitTransform = transform;
      return elm.style.mozTransform = transform;
    }
  };

  Normalize.transformOrigin = function(elm, origin) {
    if (elm) {
      elm.style.transformOrigin = transform;
      elm.style.webkitTransformOrigin = transform;
      return elm.style.mozTransformOrigin = transform;
    }
  };

  return Normalize;

})();

Utils = (function() {
  function Utils() {}

  Utils.getCoverSizeImage = function(picWidth, picHeight, containerWidth, containerHeight) {
    var ch, cr, cw, ph, pr, pw;
    pw = picWidth;
    ph = picHeight;
    cw = containerWidth || W.ww;
    ch = containerHeight || W.wh;
    pr = pw / ph;
    cr = cw / ch;
    if (cr < pr) {
      return {
        'width': ch * pr,
        'height': ch,
        'top': 0,
        'left': -((ch * pr) - cw) * 0.5
      };
    } else {
      return {
        'width': cw,
        'height': cw / pr,
        'top': -((cw / pr) - ch) * 0.5,
        'left': 0
      };
    }
  };

  Utils.getContainSizeImage = function(picWidth, picHeight, containerWidth, containerHeight) {
    var ch, cr, cw, ph, pr, pw;
    pw = picWidth;
    ph = picHeight;
    cw = containerWidth || W.ww;
    ch = containerHeight || W.wh;
    pr = pw / ph;
    cr = cw / ch;
    if (cr < pr) {
      return {
        'width': cw,
        'height': cw / pr,
        'top': (ch - cw / pr) * 0.5,
        'left': 0
      };
    } else {
      return {
        'width': ch * pr,
        'height': ch,
        'top': 0,
        'left': (cw - ch * pr) * 0.5
      };
    }
  };

  Utils.clearTimers = function(timers) {
    return $.each(timers, function(key, timer) {
      return clearTimeout(timer);
    });
  };

  Utils.hexToRgb = function(hex) {
    var result;
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    } else {
      return null;
    }
  };

  return Utils;

})();

BlockProduct = (function(superClass) {
  extend(BlockProduct, superClass);

  function BlockProduct(options) {
    this.getValues = bind(this.getValues, this);
    this.removeAllFromPack = bind(this.removeAllFromPack, this);
    this.removeFromPack = bind(this.removeFromPack, this);
    this.addToPack = bind(this.addToPack, this);
    this.openPopin = bind(this.openPopin, this);
    this.addToCart = bind(this.addToCart, this);
    this.addToFavorite = bind(this.addToFavorite, this);
    this.editClick = bind(this.editClick, this);
    this.addToCartClick = bind(this.addToCartClick, this);
    this.addToPackClick = bind(this.addToPackClick, this);
    this.favoritesClick = bind(this.favoritesClick, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    BlockProduct.__super__.constructor.apply(this, arguments);
  }

  BlockProduct.prototype._initContent = function() {
    BlockProduct.__super__._initContent.apply(this, arguments);
    this.actionContainer = this.container.find('.action-container');
    this.favoritesBtn = this.actionContainer.find('.favorites');
    this.editBtn = this.actionContainer.find('.edit');
    this.addToCartBtn = this.actionContainer.find('.add-to-cart');
    this.addToPackBtn = this.actionContainer.find('.add-to-pack');
    this.values = {};
    this.getValues();
    return new Highlight({
      container: this.container.find('.top-image')
    });
  };

  BlockProduct.prototype._initEvents = function() {
    BlockProduct.__super__._initEvents.apply(this, arguments);
    this.favoritesBtn.on(Event.CLICK, this.favoritesClick);
    this.editBtn.on(Event.CLICK, this.editClick);
    this.addToCartBtn.on(Event.CLICK, this.addToCartClick);
    this.addToPackBtn.on(Event.CLICK, this.addToPackClick);
    $(window).on('Product::addToPack', this.addToPack);
    $(window).on('Product::removeFromPack', this.removeFromPack);
    return $(window).on('Product::removeAllFromPack', this.removeAllFromPack);
  };

  BlockProduct.prototype.favoritesClick = function(e) {
    e.preventDefault();
    return this.addToFavorite();
  };

  BlockProduct.prototype.addToPackClick = function(e) {
    e.preventDefault();
    return this.openPopin();
  };

  BlockProduct.prototype.addToCartClick = function(e) {
    e.preventDefault();
    return this.addToCart();
  };

  BlockProduct.prototype.editClick = function(e) {
    e.preventDefault();
    return this.openPopin();
  };

  BlockProduct.prototype.addToFavorite = function() {
    return this.favoritesBtn.addClass('added');
  };

  BlockProduct.prototype.addToCart = function() {
    console.log('adding .....');
    return $.ajax({
      method: "POST",
      url: Routing.generate('bp_cart_actioncart_index', {
        type: 'product',
        id: this.values.id,
        quantity: 1
      }, true),
      data: data
    }).done((function(_this) {
      return function(data) {
        console.log('added .....');
        console.log(data);
        return _this.container.addClass('added');
      };
    })(this));
  };

  BlockProduct.prototype.openPopin = function() {
    return $(window).trigger("Popin::openPopin", [this.values]);
  };

  BlockProduct.prototype.addToPack = function(e, product) {
    if (product.id === this.values.id) {
      return this.container.addClass('added');
    }
  };

  BlockProduct.prototype.removeFromPack = function(e, product) {
    if (product.id === this.values.id) {
      return this.container.removeClass('added');
    }
  };

  BlockProduct.prototype.removeAllFromPack = function(e) {
    e.preventDefault();
    return this.container.removeClass('added');
  };

  BlockProduct.prototype.getValues = function() {
    this.values.id = parseInt(this.container.attr('id'));
    this.values.img = this.container.find('img').attr('src');
    this.values.brand_name = this.container.find('h6').html();
    this.values.name = this.container.find('h3').html();
    this.values.overprice = this.container.find('.overprice').html();
    return this.values.price = this.container.find('.price').html();
  };

  return BlockProduct;

})(ComponentsBase);

FilterProduct = (function(superClass) {
  extend(FilterProduct, superClass);

  function FilterProduct(options) {
    this.fixBottom = bind(this.fixBottom, this);
    this.unStickIt = bind(this.unStickIt, this);
    this.stickIt = bind(this.stickIt, this);
    this.whellEvent = bind(this.whellEvent, this);
    this.resize = bind(this.resize, this);
    this.sendOptionsLazyLoader = bind(this.sendOptionsLazyLoader, this);
    this.removeFilters = bind(this.removeFilters, this);
    this.removeFiltersClick = bind(this.removeFiltersClick, this);
    this.desactiveSearchCategorySubItem = bind(this.desactiveSearchCategorySubItem, this);
    this.activeSearchCategorySubItem = bind(this.activeSearchCategorySubItem, this);
    this.closeSearchCategory = bind(this.closeSearchCategory, this);
    this.openSearchCategory = bind(this.openSearchCategory, this);
    this.checkSearchCategory = bind(this.checkSearchCategory, this);
    this.checkSearchCategorySubItem = bind(this.checkSearchCategorySubItem, this);
    this.searchCategorySubItemClick = bind(this.searchCategorySubItemClick, this);
    this.searchCategoryClick = bind(this.searchCategoryClick, this);
    this.closeSearchFilterMobile = bind(this.closeSearchFilterMobile, this);
    this.resizeSearchFilterMobile = bind(this.resizeSearchFilterMobile, this);
    this.openSearchFilterMobile = bind(this.openSearchFilterMobile, this);
    this.setNumberResults = bind(this.setNumberResults, this);
    this.checkSearchFilterMobile = bind(this.checkSearchFilterMobile, this);
    this.searchFilterMobileClick = bind(this.searchFilterMobileClick, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    this.page = options.page;
    FilterProduct.__super__.constructor.apply(this, arguments);
  }

  FilterProduct.prototype._initContent = function() {
    FilterProduct.__super__._initContent.apply(this, arguments);
    this.searchCategoryitem = {};
    this.searchCategoryitem.container = this.container.find('.category-container');
    this.searchCategoryitem.btn = this.container.find('.category-container > a');
    this.searchCategoryitem.subItemBtn = this.container.find('.category-container .list-category a');
    this.searchCategoryitem.mobileBtn = this.container.find('.mobile-btn');
    this.searchCategoryitem.filterContainer = this.container.find('.container-filter');
    this.searchCategoryitem.resetBtn = this.container.find('.reset');
    this.filterNumberResults = this.container.find('h3 > span');
    if (this.page === "shop") {
      this.breakpoint = this.container.offset().top - 18;
    } else {
      this.breakpoint = this.container.offset().top - 124;
    }
    return this.sticky = false;
  };

  FilterProduct.prototype._initEvents = function() {
    FilterProduct.__super__._initEvents.apply(this, arguments);
    this.searchCategoryitem.btn.on(Event.CLICK, this.searchCategoryClick);
    this.searchCategoryitem.subItemBtn.on(Event.CLICK, this.searchCategorySubItemClick);
    this.searchCategoryitem.mobileBtn.on(Event.CLICK, this.searchFilterMobileClick);
    this.searchCategoryitem.resetBtn.on(Event.CLICK, this.removeFiltersClick);
    $(window).on('Filter::setResultNumber', this.setNumberResults);
    return $(window).on(Event.WHEEL, this.whellEvent);
  };

  FilterProduct.prototype.searchFilterMobileClick = function(e) {
    e.preventDefault();
    return this.checkSearchFilterMobile();
  };

  FilterProduct.prototype.checkSearchFilterMobile = function() {
    if (!this.searchCategoryitem.mobileBtn.hasClass('open')) {
      return this.openSearchFilterMobile();
    } else {
      return this.closeSearchFilterMobile();
    }
  };

  FilterProduct.prototype.setNumberResults = function(e, value) {
    return this.filterNumberResults.html(value);
  };

  FilterProduct.prototype.openSearchFilterMobile = function() {
    this.searchCategoryitem.mobileBtn.addClass('open');
    return this.searchCategoryitem.filterContainer.css({
      'height': $('.overview', this.searchCategoryitem.filterContainer).outerHeight()
    });
  };

  FilterProduct.prototype.resizeSearchFilterMobile = function(height) {
    return this.searchCategoryitem.filterContainer.css({
      'height': $('.overview', this.searchCategoryitem.filterContainer).outerHeight() + height
    });
  };

  FilterProduct.prototype.closeSearchFilterMobile = function() {
    this.searchCategoryitem.mobileBtn.removeClass('open');
    return this.searchCategoryitem.filterContainer.css({
      'height': 0
    });
  };

  FilterProduct.prototype.searchCategoryClick = function(e) {
    var target;
    e.preventDefault();
    target = $(e.currentTarget).parent();
    return this.checkSearchCategory(target);
  };

  FilterProduct.prototype.searchCategorySubItemClick = function(e) {
    var target;
    e.preventDefault();
    target = $(e.currentTarget);
    return this.checkSearchCategorySubItem(target);
  };

  FilterProduct.prototype.checkSearchCategorySubItem = function(target) {
    if (target.hasClass('active')) {
      return this.desactiveSearchCategorySubItem(target);
    } else {
      return this.activeSearchCategorySubItem(target);
    }
  };

  FilterProduct.prototype.checkSearchCategory = function(target) {
    if (target.hasClass('open')) {
      return this.closeSearchCategory(target);
    } else {
      return this.openSearchCategory(target);
    }
  };

  FilterProduct.prototype.openSearchCategory = function(target) {
    target.addClass('open');
    $('.list-category', target).css({
      'height': $('ul', target).outerHeight()
    });
    return this.resizeSearchFilterMobile($('ul', target).outerHeight());
  };

  FilterProduct.prototype.closeSearchCategory = function(target) {
    target.removeClass('open');
    $('.list-category', target).css({
      'height': 0
    });
    return this.resizeSearchFilterMobile(-$('ul', target).outerHeight());
  };

  FilterProduct.prototype.activeSearchCategorySubItem = function(target) {
    var parent;
    this.removeFilters();
    target.addClass('active');
    parent = target.parent().parent().parent();
    return this.sendOptionsLazyLoader(parent);
  };

  FilterProduct.prototype.desactiveSearchCategorySubItem = function(target) {
    var parent;
    target.removeClass('active');
    parent = target.parent().parent().parent();
    return this.sendOptionsLazyLoader(parent);
  };

  FilterProduct.prototype.removeFiltersClick = function(e) {
    e.preventDefault();
    return this.removeFilters();
  };

  FilterProduct.prototype.removeFilters = function() {
    return this.searchCategoryitem.subItemBtn.removeClass('active');
  };

  FilterProduct.prototype.sendOptionsLazyLoader = function(parent) {
    var brand, i, item, j, len, len1, list, type;
    if (parent.hasClass('type')) {
      list = parent.find('.active');
      type = [];
      for (i = 0, len = list.length; i < len; i++) {
        item = list[i];
        type.push(item.classList[0]);
      }
      return $(window).trigger('Filter::setCategory', type[0]);
    } else if (parent.hasClass('brand')) {
      list = parent.find('.active');
      brand = [];
      for (j = 0, len1 = list.length; j < len1; j++) {
        item = list[j];
        brand.push(item.classList[0]);
      }
      return $(window).trigger('Filter::SetBrand', brand[0]);
    }
  };

  FilterProduct.prototype.resize = function() {
    return FilterProduct.__super__.resize.apply(this, arguments);
  };

  FilterProduct.prototype.whellEvent = function(e) {
    var bottom;
    bottom = $(window).scrollTop() > $(document).height() - ($(window).height() - (this.container.outerHeight() + parseInt(this.container.css('margin-top')))) - 540;
    if (bottom && this.sticky) {
      return this.fixBottom();
    } else if ($(window).scrollTop() < this.breakpoint && this.sticky) {
      return this.unStickIt();
    } else if ($(window).scrollTop() > this.breakpoint && !this.sticky) {
      return this.stickIt();
    }
  };

  FilterProduct.prototype.stickIt = function() {
    if (this.page === "shop") {
      this.container.css({
        'position': 'fixed',
        'top': '10px'
      });
    } else {
      this.container.css({
        'position': 'fixed',
        'top': '104px'
      });
    }
    $(window).trigger('Filter::StickIt');
    return this.sticky = true;
  };

  FilterProduct.prototype.unStickIt = function() {
    this.container.removeAttr('style');
    this.sticky = false;
    return $(window).trigger('Filter::UnStickIt');
  };

  FilterProduct.prototype.fixBottom = function() {
    this.container.removeAttr('style');
    this.sticky = false;
    return this.container.css({
      'position': 'absolute',
      'bottom': '0px'
    });
  };

  return FilterProduct;

})(ComponentsBase);

Highlight = (function(superClass) {
  extend(Highlight, superClass);

  function Highlight(options) {
    this.resize = bind(this.resize, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    Highlight.__super__.constructor.apply(this, arguments);
  }

  Highlight.prototype._initContent = function() {
    Highlight.__super__._initContent.apply(this, arguments);
    return this.pic = this.container.find('img').first();
  };

  Highlight.prototype._initEvents = function() {
    return Highlight.__super__._initEvents.apply(this, arguments);
  };

  Highlight.prototype.resize = function() {
    var dims;
    Highlight.__super__.resize.apply(this, arguments);
    dims = Utils.getCoverSizeImage(this.pic.width(), this.pic.height(), this.container.outerWidth(), this.container.outerHeight());
    return this.pic.css(dims);
  };

  return Highlight;

})(ComponentsBase);

LazyLoader = (function(superClass) {
  extend(LazyLoader, superClass);

  function LazyLoader(options) {
    this.addNewCard = bind(this.addNewCard, this);
    this.nothingToLoad = bind(this.nothingToLoad, this);
    this.loadPost = bind(this.loadPost, this);
    this.trigger = bind(this.trigger, this);
    this.whellEvent = bind(this.whellEvent, this);
    this.setBrand = bind(this.setBrand, this);
    this.setCategory = bind(this.setCategory, this);
    this.unStickFilter = bind(this.unStickFilter, this);
    this.stickFilter = bind(this.stickFilter, this);
    this.initialize = bind(this.initialize, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    LazyLoader.__super__.constructor.apply(this, arguments);
    this.page = options.page;
    this.breakpoint = this.container.offset().top;
    this.url = options.url;
    this.loading = false;
    this.offset = 0;
    this.limit = 4;
    this.category = null;
    this.brand = null;
    this.initialize();
  }

  LazyLoader.prototype._initContent = function() {
    return LazyLoader.__super__._initContent.apply(this, arguments);
  };

  LazyLoader.prototype._initEvents = function() {
    LazyLoader.__super__._initEvents.apply(this, arguments);
    $(window).on(Event.WHEEL, this.whellEvent);
    $(window).on('Filter::setCategory', this.setCategory);
    $(window).on('Filter::SetBrand', this.setBrand);
    $(window).on('Filter::StickIt', this.stickFilter);
    return $(window).on('Filter::UnStickIt', this.unStickFilter);
  };

  LazyLoader.prototype.initialize = function() {
    var html;
    html = '<div class="loader-container"><div class="loader"></div></div>';
    this.container.html(html);
    this.offset = 0;
    this.limit = 8;
    return this.loadPost();
  };

  LazyLoader.prototype.stickFilter = function() {
    return this.container.css({
      'margin-left': '315px'
    });
  };

  LazyLoader.prototype.unStickFilter = function() {
    return this.container.removeAttr('style');
  };

  LazyLoader.prototype.setCategory = function(e, value) {
    if (value !== '' && (value != null)) {
      this.category = value;
    } else {
      this.category = null;
    }
    return this.initialize();
  };

  LazyLoader.prototype.setBrand = function(e, value) {
    if (value !== '' && (value != null)) {
      this.brand = value;
    } else {
      this.brand = null;
    }
    return this.initialize();
  };

  LazyLoader.prototype.whellEvent = function(e) {
    if ($(window).scrollTop() > this.breakpoint) {
      this.breakpoint += 315;
      return this.trigger();
    }
  };

  LazyLoader.prototype.trigger = function() {
    return this.loadPost();
  };

  LazyLoader.prototype.loadPost = function() {
    var data;
    if (!this.loading) {
      data = {
        'offset': this.offset,
        'limit': this.limit
      };
      if (this.category != null) {
        data.category = this.category;
      }
      if (this.brand != null) {
        data.brand = this.brand;
      }
      this.loading = true;
      return $.ajax({
        method: "GET",
        url: this.url,
        data: data
      }).done((function(_this) {
        return function(data) {
          var i, len, product, ref;
          if (data.status === "success") {
            _this.offset += _this.limit;
            _this.loading = false;
            if (_this.limit > 4) {
              _this.limit = 4;
            }
            ref = data.data.products;
            for (i = 0, len = ref.length; i < len; i++) {
              product = ref[i];
              _this.addNewCard(product);
            }
            $(window).trigger('CustomPack::initBar');
            $(window).trigger('Filter::setResultNumber', [data.data.total]);
          }
          if (data.status === "error") {
            _this.loading = false;
            return _this.nothingToLoad();
          }
        };
      })(this));
    }
  };

  LazyLoader.prototype.nothingToLoad = function() {
    return console.log('nothing to load');
  };

  LazyLoader.prototype.addNewCard = function(product) {
    var html, temp;
    html = '<div class="block-product ' + this.page + '" id="' + product.id + '">';
    html += '<div class="top-image">';
    if ((product.photos != null) && (product.photos[0] != null)) {
      html += '<img src="' + Routing.generate('photo_url', {
        id: product.photos[0].id,
        filter: 'medium'
      }, true) + '" alt="">';
    } else {
      html += '<img src="' + window.Global.img["default"] + '" alt="">';
    }
    html += '</div>';
    html += '<div class="image-container">';
    html += '<div class="action-container">';
    html += '<div class="in-my-pack">';
    html += '<p>Dans mon pack</p>';
    html += '</div>';
    html += '<a href="/pack-editor/?id=" class="icon-container add-to-pack">';
    html += '<span>Ajouter à mon pack</span>';
    html += '<svg class="icon add_box">';
    html += '<use xlink:href="#add_box"></use>';
    html += '</svg>';
    html += '</a>';
    html += '<a href="#" class="icon-container edit">';
    html += '<span>Éditer</span>';
    html += '<svg class="icon edit">';
    html += '<use xlink:href="#edit"></use>';
    html += '</svg>';
    html += '</a>';
    html += '<a href="#" class="icon-container add-to-cart">';
    html += '<span>Ajouter à mon panier</span>';
    html += '<svg class="icon add_cart">';
    html += '<use xlink:href="#add_cart"></use>';
    html += '</svg>';
    html += '</a>';
    html += '<a href="#" class="icon-container favorites">';
    html += '<svg class="icon heart">';
    html += '<use xlink:href="#heart"></use>';
    html += '</svg>';
    html += '<span>Favoris</span>';
    html += '</a>';
    html += '</div>';
    html += '</div>';
    html += '<div class="info-container">';
    if ((this.page != null) && this.page === 'pack') {
      html += '<a href="' + Routing.generate('bp_core_pack_show', {
        id: product.id
      }, true) + '">';
    } else if ((this.page != null) && this.page === 'shop') {
      html += '<a href="' + Routing.generate('bp_core_product_show', {
        id: product.id
      }, true) + '">';
    } else {
      html += '<a href="' + Routing.generate('bp_core_packeditor_show', {
        id: product.id
      }, true) + '">';
    }
    if (product.brand != null) {
      html += '<h6>' + product.brand.name + '</h6>';
    }
    html += '<h3>' + product.name + '</h3>';
    if ((product.taxe != null) && this.page !== "shop" && product.taxe > 0) {
      html += '<p class="overprice">+ ' + product.taxe + '</p>';
    }
    if ((product.price != null) && (this.page === "shop" || this.page === "pack")) {
      html += '<p class="price">' + product.price + '</p>';
    }
    html += '</a>';
    html += '</div>';
    html += '</div>';
    this.container.find('.loader-container').before(html);
    return temp = new BlockProduct({
      container: $('#' + product.id)
    });
  };

  return LazyLoader;

})(ComponentsBase);

Menu = (function(superClass) {
  extend(Menu, superClass);

  function Menu(options) {
    this.whellEvent = bind(this.whellEvent, this);
    this.closeShopSubmenu = bind(this.closeShopSubmenu, this);
    this.closeShopSubmenuClick = bind(this.closeShopSubmenuClick, this);
    this.openShopSubmenu = bind(this.openShopSubmenu, this);
    this.checkShopSubmenu = bind(this.checkShopSubmenu, this);
    this.clickShopSubmenu = bind(this.clickShopSubmenu, this);
    this.closeAccountMenu = bind(this.closeAccountMenu, this);
    this.openAccountMenu = bind(this.openAccountMenu, this);
    this.checkAccountMenu = bind(this.checkAccountMenu, this);
    this.clickCloseAccountMenu = bind(this.clickCloseAccountMenu, this);
    this.clickAccountBtn = bind(this.clickAccountBtn, this);
    this.closeMiniCartMenu = bind(this.closeMiniCartMenu, this);
    this.openMiniCartMenu = bind(this.openMiniCartMenu, this);
    this.checkMiniCartMenu = bind(this.checkMiniCartMenu, this);
    this.clickMiniCartMenu = bind(this.clickMiniCartMenu, this);
    this.cartPriceUpdate = bind(this.cartPriceUpdate, this);
    this.resize = bind(this.resize, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    Menu.__super__.constructor.apply(this, arguments);
  }

  Menu.prototype._initContent = function() {
    Menu.__super__._initContent.apply(this, arguments);
    this.nav = this.container.find('nav');
    this.submenuShopBtn = this.nav.find('.shop');
    this.submenuShopcontainer = this.container.find('.sub-menu');
    this.subMenuCloseThatDope = this.submenuShopcontainer.find('.overlay');
    this.userContainer = this.container.find('.connection-container');
    this.accountInfo = this.container.find('.account-info');
    this.accountBtn = this.accountInfo.find('.my-account');
    this.accountMenu = this.container.find('.connection-container');
    this.miniCartBtn = this.container.find('.cart');
    this.miniCartContainer = this.container.find('.cart-container');
    this.closeAccountMenuBtn = this.container.find('.close');
    this.miniCart = new MiniCart({
      container: $('.mini-cart')
    });
    return $(window).on(Event.WHEEL, this.whellEvent);
  };

  Menu.prototype._initEvents = function() {
    Menu.__super__._initEvents.apply(this, arguments);
    this.submenuShopBtn.on(Event.CLICK, this.clickShopSubmenu);
    this.subMenuCloseThatDope.on(Event.CLICK, this.closeShopSubmenuClick);
    this.accountBtn.on(Event.CLICK, this.clickAccountBtn);
    this.closeAccountMenuBtn.on(Event.CLICK, this.clickCloseAccountMenu);
    this.miniCartBtn.on(Event.CLICK, this.clickMiniCartMenu);
    return $(window).on('Cart::priceUpdate', this.cartPriceUpdate);
  };

  Menu.prototype.resize = function() {
    return Menu.__super__.resize.apply(this, arguments);
  };

  Menu.prototype.cartPriceUpdate = function(e, price) {
    return this.miniCartBtn.find('span span').html(price);
  };

  Menu.prototype.clickMiniCartMenu = function(e) {
    e.preventDefault();
    return this.checkMiniCartMenu();
  };

  Menu.prototype.checkMiniCartMenu = function() {
    if (!this.miniCartContainer.hasClass('open')) {
      return this.openMiniCartMenu();
    } else {
      return this.closeMiniCartMenu();
    }
  };

  Menu.prototype.openMiniCartMenu = function() {
    this.miniCartBtn.addClass('active');
    this.miniCartContainer.addClass('open');
    console.log(this.miniCart.container.outerHeight());
    return this.miniCartContainer.css({
      'height': this.miniCart.container.outerHeight()
    });
  };

  Menu.prototype.closeMiniCartMenu = function() {
    this.miniCartBtn.removeClass('active');
    this.miniCartContainer.removeClass('open');
    return this.miniCartContainer.css({
      'height': 0
    });
  };

  Menu.prototype.clickAccountBtn = function(e) {
    e.preventDefault();
    return this.checkAccountMenu();
  };

  Menu.prototype.clickCloseAccountMenu = function(e) {
    e.preventDefault();
    return this.closeAccountMenu();
  };

  Menu.prototype.checkAccountMenu = function() {
    this.closeShopSubmenu();
    if (!this.accountMenu.hasClass('open')) {
      return this.openAccountMenu();
    } else {
      return this.closeAccountMenu();
    }
  };

  Menu.prototype.openAccountMenu = function() {
    this.accountMenu.addClass('open');
    this.accountBtn.addClass('active');
    return this.accountMenu.css({
      'height': this.accountMenu.find('.container').outerHeight()
    });
  };

  Menu.prototype.closeAccountMenu = function() {
    this.accountBtn.removeClass('active');
    this.accountMenu.removeClass('open');
    return this.accountMenu.css({
      'height': 0
    });
  };

  Menu.prototype.clickShopSubmenu = function(e) {
    e.preventDefault();
    return this.checkShopSubmenu();
  };

  Menu.prototype.checkShopSubmenu = function() {
    this.closeAccountMenu();
    if (!this.submenuShopcontainer.hasClass('open')) {
      return this.openShopSubmenu();
    } else {
      return this.closeShopSubmenu();
    }
  };

  Menu.prototype.openShopSubmenu = function() {
    this.submenuShopcontainer.addClass('open');
    this.submenuShopcontainer.find('.overlay').css({
      'display': 'block'
    });
    this.submenuShopcontainer.find('.sub-menu-container').css({
      'display': 'block'
    });
    this.submenuShopcontainer[0].offsetTop;
    this.submenuShopBtn.addClass('active');
    this.submenuShopcontainer.css({
      'height': this.submenuShopcontainer.find('.container').outerHeight()
    });
    return this.submenuShopcontainer.find('.overlay').css({
      'height': $(window).height()
    });
  };

  Menu.prototype.closeShopSubmenuClick = function() {
    return this.closeShopSubmenu();
  };

  Menu.prototype.closeShopSubmenu = function() {
    this.submenuShopcontainer.removeClass('open');
    this.submenuShopBtn.removeClass('active');
    return this.submenuShopcontainer.css({
      'height': 0
    });
  };

  Menu.prototype.whellEvent = function(e) {
    if (this.submenuShopcontainer.hasClass('open')) {
      e.preventDefault();
      return false;
    }
  };

  return Menu;

})(ComponentsBase);

MiniCart = (function(superClass) {
  extend(MiniCart, superClass);

  function MiniCart(options) {
    this.getCustomPack = bind(this.getCustomPack, this);
    this.addCustomPackToCart = bind(this.addCustomPackToCart, this);
    this.addToCart = bind(this.addToCart, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    MiniCart.__super__.constructor.apply(this, arguments);
  }

  MiniCart.prototype._initContent = function() {
    var i, imgContainer, len, ref;
    MiniCart.__super__._initContent.apply(this, arguments);
    new Loader({
      container: this.container
    });
    ref = this.container.find('.img-container');
    for (i = 0, len = ref.length; i < len; i++) {
      imgContainer = ref[i];
      new Highlight({
        container: $(imgContainer)
      });
    }
    return this.shopCart = this.container.find('.shop-cart');
  };

  MiniCart.prototype._initEvents = function() {
    MiniCart.__super__._initEvents.apply(this, arguments);
    return $(window).on('EmbedCart:addCustomPackToCart', this.addCustomPackToCart);
  };

  MiniCart.prototype.addToCart = function(product) {
    var html, newCartPrice;
    html = '<div class="item">';
    html += '<div class="img-container">';
    html += '<img src="' + product.img + '" alt="">';
    html += '</div>';
    html += '<div class="info-container">';
    html += '<h6>' + product.name + '</h6>';
    html += '<p class="price">' + product.price + '</p>';
    html += '</div>';
    html += '</div>';
    if (this.shopCart.find('.item').length > 0) {
      console.log('item deja', this.shopCart.find('.item:last-of-type'));
      this.shopCart.find('.item').last().after(html);
    } else {
      console.log('item non deja');
      this.shopCart.find('h3').after(html);
    }
    newCartPrice = (parseInt(this.shopCart.find('.total span').html()) + parseInt(product.price)).toFixed(2) + ' &euro;';
    this.shopCart.find('.total span').html(newCartPrice);
    return $(window).trigger('Cart::priceUpdate', [newCartPrice]);
  };

  MiniCart.prototype.addCustomPackToCart = function(e, data) {
    e.preventDefault();
    return this.getCustomPack(data.id);
  };

  MiniCart.prototype.getCustomPack = function(id) {
    return $.ajax({
      method: "GET",
      url: Routing.generate('bp_cart_api_custompack', true) + '?id=' + id
    }).done((function(_this) {
      return function(data) {
        console.log(data);
        if (data.galery != null) {
          if (data.galery[0] != null) {
            data.img = Routing.generate('photo_url', {
              filter: 'small',
              id: 1
            });
          } else {
            data.img = '/public/img/default-product-pack.png';
          }
        } else {
          data.img = window.Global.img["default"];
        }
        if (data.name == null) {
          data.name = data.reference;
        }
        data.price = (data.price * 1.2).toFixed(2) + ' &euro;';
        return _this.addToCart(data);
      };
    })(this));
  };

  return MiniCart;

})(ComponentsBase);

Popin = (function(superClass) {
  extend(Popin, superClass);

  function Popin(options) {
    this.resize = bind(this.resize, this);
    this.getPackIds = bind(this.getPackIds, this);
    this.getPackFromLocalstorage = bind(this.getPackFromLocalstorage, this);
    this.isPackFull = bind(this.isPackFull, this);
    this.isInPack = bind(this.isInPack, this);
    this.checkFavorites = bind(this.checkFavorites, this);
    this.favoritesBtnClick = bind(this.favoritesBtnClick, this);
    this.changeSize = bind(this.changeSize, this);
    this.sizeBtnClick = bind(this.sizeBtnClick, this);
    this.changeColor = bind(this.changeColor, this);
    this.colorBtnClick = bind(this.colorBtnClick, this);
    this.addToPack = bind(this.addToPack, this);
    this.addToPackClick = bind(this.addToPackClick, this);
    this.removeFromPack = bind(this.removeFromPack, this);
    this.removeFromPackClick = bind(this.removeFromPackClick, this);
    this.editFromPack = bind(this.editFromPack, this);
    this.editFromPackClick = bind(this.editFromPackClick, this);
    this.initAfterLoaded = bind(this.initAfterLoaded, this);
    this.addActionContainer = bind(this.addActionContainer, this);
    this.addDisponibility = bind(this.addDisponibility, this);
    this.removeSizes = bind(this.removeSizes, this);
    this.addSizes = bind(this.addSizes, this);
    this.removeColors = bind(this.removeColors, this);
    this.addColors = bind(this.addColors, this);
    this.addProductInfo = bind(this.addProductInfo, this);
    this.addNavSlider = bind(this.addNavSlider, this);
    this.addImgsSlider = bind(this.addImgsSlider, this);
    this.initContentLoaded = bind(this.initContentLoaded, this);
    this.getContent = bind(this.getContent, this);
    this.addCustomPackToCart = bind(this.addCustomPackToCart, this);
    this.addCustomPackToCartClick = bind(this.addCustomPackToCartClick, this);
    this.initValidateEvent = bind(this.initValidateEvent, this);
    this.initValidatePopin = bind(this.initValidatePopin, this);
    this.closePopin = bind(this.closePopin, this);
    this.closeClick = bind(this.closeClick, this);
    this.openPopin = bind(this.openPopin, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    Popin.__super__.constructor.apply(this, arguments);
  }

  Popin.prototype._initContent = function() {
    Popin.__super__._initContent.apply(this, arguments);
    this.slidesContainer = this.container.find('.slider-product');
    this.productInfo = this.container.find('.product-info');
    this.popin = this.container.find('.top-header');
    this.actionContainer = this.popin.find('.action-container');
    this.validate = this.container.find('.validate');
    this.close = this.container.find('.close svg');
    this.customPack = {};
    this.customPack.full = false;
    this.product = null;
    return this.isValidation = false;
  };

  Popin.prototype._initEvents = function() {
    Popin.__super__._initEvents.apply(this, arguments);
    $(window).on("Popin::openPopin", this.openPopin);
    return this.close.on(Event.CLICK, this.closeClick);
  };

  Popin.prototype.openPopin = function(e, product) {
    console.log('Popin openPopin', e);
    if (product.validate != null) {
      this.isValidation = true;
      this.container.addClass('open');
      this.popin.css({
        'display': 'none'
      });
      this.validate.css({
        'display': 'block',
        'margin-left': (W.ww - this.popin.outerWidth()) / 2,
        'margin-top': (W.wh - this.popin.outerHeight() + 94) / 2
      });
      return this.initValidatePopin();
    } else {
      this.isValidation = false;
      this.getContent(product.id);
      this.container.addClass('open');
      this.validate.css({
        'display': 'none'
      });
      return this.popin.css({
        'display': 'block',
        'margin-left': (W.ww - this.popin.outerWidth()) / 2,
        'margin-top': (W.wh - this.popin.outerHeight() + 94) / 2
      });
    }
  };

  Popin.prototype.closeClick = function(e) {
    e.preventDefault();
    return this.closePopin();
  };

  Popin.prototype.closePopin = function() {
    this.container.removeClass('open');
    if ($('.colors').length > 0) {
      this.removeColors();
    }
    if ($('.sizes').length > 0) {
      return this.removeSizes();
    }
  };

  Popin.prototype.initValidatePopin = function() {
    var i, item, key, len, pack, product;
    product = this.validate.find('.product');
    pack = this.getPackFromLocalstorage();
    for (key = i = 0, len = pack.length; i < len; key = ++i) {
      item = pack[key];
      if (item.img !== '') {
        $(product[key]).find('img')[0].src = item.img;
      }
      $(product[key]).find('h6').html(item.brand);
      $(product[key]).find('h3').html(item.name);
    }
    return this.initValidateEvent();
  };

  Popin.prototype.initValidateEvent = function() {
    this.validate.find('.edit-btn').on(Event.CLICK, this.closeClick);
    return this.validate.find('.price-container .button').on(Event.CLICK, this.addCustomPackToCartClick);
  };

  Popin.prototype.addCustomPackToCartClick = function(e) {
    e.preventDefault();
    return this.addCustomPackToCart();
  };

  Popin.prototype.addCustomPackToCart = function() {
    var data;
    data = this.getPackIds();
    return $.ajax({
      method: "POST",
      url: Routing.generate('bp_cart_api_createpack', true),
      data: {
        'ids': data
      }
    }).done((function(_this) {
      return function(data, err) {
        console.log('err : ', err, 'data : ', data);
        $(window).trigger('EmbedCart:addCustomPackToCart', [data.data]);
        $(window).trigger("CustomPack::removePack");
        return _this.closePopin();
      };
    })(this));
  };

  Popin.prototype.getContent = function(productId) {
    return $.ajax({
      method: "GET",
      url: Routing.generate('bp_cart_api_product', true) + '?id=' + productId
    }).done((function(_this) {
      return function(data) {
        _this.product = data.data;
        _this.product.color = 'default';
        _this.product.size = 'default';
        return _this.initContentLoaded();
      };
    })(this));
  };

  Popin.prototype.initContentLoaded = function() {
    this.slidesContainer.find('.slides').html(this.addImgsSlider());
    this.slidesContainer.find('ul').html(this.addNavSlider());
    return this.addProductInfo();
  };

  Popin.prototype.addImgsSlider = function() {
    var html, i, img, key, len, photo, ref;
    html = '';
    ref = this.product.photos;
    for (key = i = 0, len = ref.length; i < len; key = ++i) {
      photo = ref[key];
      if (key === 0) {
        html += '<div class="slide active">';
      } else {
        html += '<div class="slide">';
      }
      img = Routing.generate('photo_url', {
        id: photo.id,
        filter: 'large'
      }, true);
      html += '<img src="' + img + '" alt="">';
      html += '</div>';
    }
    return html;
  };

  Popin.prototype.addNavSlider = function() {
    var html, i, img, key, len, photo, ref;
    html = '';
    ref = this.product.photos;
    for (key = i = 0, len = ref.length; i < len; key = ++i) {
      photo = ref[key];
      if (key === 0) {
        img = Routing.generate('photo_url', {
          id: photo.id,
          filter: 'small'
        }, true);
        html += '<li class="active"><img src="' + img + '" alt=""></li>';
      } else {
        img = Routing.generate('photo_url', {
          id: photo.id,
          filter: 'small'
        }, true);
        html += '<li><img src="' + img + '" alt=""></li>';
      }
    }
    return html;
  };

  Popin.prototype.addProductInfo = function() {
    this.productInfo.find('h1').html(this.product.name);
    this.productInfo.find('h2').html(this.product.brand);
    if (this.product.sizes.length > 0) {
      this.productInfo.find('h2').after(this.addSizes());
    }
    if (this.product.colors.length > 0) {
      this.productInfo.find('h2').after(this.addColors());
    }
    this.addDisponibility();
    this.actionContainer.html(this.addActionContainer());
    return this.initAfterLoaded();
  };

  Popin.prototype.addColors = function() {
    var color, html, i, len, ref;
    if ($('.colors').length === 0) {
      html = '<div class="colors">';
      html += '<h3>Couleur</h3>';
      html += '<div class="color-container">';
      ref = this.product.colors;
      for (i = 0, len = ref.length; i < len; i++) {
        color = ref[i];
        html += '<a href="#" class="color" style="background-color:' + color.color + '"></a>';
      }
      html += '</div>';
      html += '</div>';
      return html;
    }
  };

  Popin.prototype.removeColors = function() {
    return $('.colors').remove();
  };

  Popin.prototype.addSizes = function() {
    var html, i, len, ref, size;
    if ($('.sizes').length === 0) {
      html = '<div class="sizes">';
      html += '<h3>Taille</h3>';
      html += '<div class="size-container">';
      ref = this.product.sizes;
      for (i = 0, len = ref.length; i < len; i++) {
        size = ref[i];
        html += '<a href="#" class="size">' + size.name + '</a>';
      }
      html += '</div>';
      html += '</div>';
      return html;
    }
  };

  Popin.prototype.removeSizes = function() {
    return $('.sizes').remove();
  };

  Popin.prototype.addDisponibility = function() {
    if (this.product.quantity > 0) {
      return this.productInfo.find('.disponibility').html('En stock');
    } else {
      return this.productInfo.find('.disponibility').html('En rupture');
    }
  };

  Popin.prototype.addActionContainer = function() {
    var html;
    html = '<div>';
    html += '<div class="price-container">';
    if (this.isInPack(this.product.id)) {
      html += '<a href="#" class="button edit">Valider</a>';
      html += '<a href="#" class="button delete">Suprimer</a>';
    } else if (this.isPackFull()) {
      html += '<a style="background-color:#e0e0e0;" class="button">Votre pack est complet</a>';
    } else {
      html += '<a href="#" class="button add">Ajouter à mon pack</a>';
    }
    html += '</div>';
    return html += '</div>';
  };

  Popin.prototype.initAfterLoaded = function() {
    this.colorBtn = this.container.find('.color');
    this.sizeBtn = this.container.find('.size');
    this.favoritesBtn = this.container.find('.favorites');
    new ProductSlider({
      container: this.container.find('.slider-product')
    });
    this.actionContainer.find('.add').on(Event.CLICK, this.addToPackClick);
    this.actionContainer.find('.edit').on(Event.CLICK, this.editFromPackClick);
    this.actionContainer.find('.delete').on(Event.CLICK, this.removeFromPackClick);
    this.colorBtn.on(Event.CLICK, this.colorBtnClick);
    return this.sizeBtn.on(Event.CLICK, this.sizeBtnClick);
  };

  Popin.prototype.editFromPackClick = function(e) {
    e.preventDefault();
    return this.editFromPack();
  };

  Popin.prototype.editFromPack = function() {
    $(window).trigger("CustomPack::editFromPack", [this.product]);
    return this.closePopin();
  };

  Popin.prototype.removeFromPackClick = function(e) {
    e.preventDefault();
    return this.removeFromPack();
  };

  Popin.prototype.removeFromPack = function() {
    $(window).trigger("CustomPack::removeFromPack", [this.product]);
    $(window).trigger("Product::removeFromPack", [this.product]);
    return this.closePopin();
  };

  Popin.prototype.addToPackClick = function(e) {
    e.preventDefault();
    return this.addToPack();
  };

  Popin.prototype.addToPack = function() {
    $(window).trigger("CustomPack::addToPack", [this.product]);
    $(window).trigger("Product::addToPack", [this.product]);
    return this.closePopin();
  };

  Popin.prototype.colorBtnClick = function(e) {
    var target;
    e.preventDefault();
    target = $(e.currentTarget);
    return this.changeColor(target);
  };

  Popin.prototype.changeColor = function(target) {
    this.colorBtn.removeClass('active');
    return target.addClass('active');
  };

  Popin.prototype.sizeBtnClick = function(e) {
    var target;
    e.preventDefault();
    target = $(e.currentTarget);
    return this.changeSize(target);
  };

  Popin.prototype.changeSize = function(target) {
    this.sizeBtn.removeClass('active');
    return target.addClass('active');
  };

  Popin.prototype.favoritesBtnClick = function(e) {
    e.preventDefault();
    return this.checkFavorites();
  };

  Popin.prototype.checkFavorites = function() {
    if (!this.favoritesBtn.hasClass('active')) {
      return this.favoritesBtn.addClass('active');
    } else {
      return this.favoritesBtn.removeClass('active');
    }
  };

  Popin.prototype.isInPack = function(id) {
    var i, item, key, len, pack;
    pack = this.getPackFromLocalstorage();
    if (pack !== null) {
      for (key = i = 0, len = pack.length; i < len; key = ++i) {
        item = pack[key];
        if (item.id === id) {
          return true;
        }
      }
    }
    return false;
  };

  Popin.prototype.isPackFull = function() {
    var pack;
    pack = this.getPackFromLocalstorage();
    if (pack.length >= 4) {
      return true;
    }
    return false;
  };

  Popin.prototype.getPackFromLocalstorage = function() {
    var pack;
    if (typeof localStorage !== 'undefined') {
      pack = JSON.parse(localStorage.getItem('customPack'));
      if (pack !== null) {
        return pack;
      } else {
        return null;
      }
    }
  };

  Popin.prototype.getPackIds = function() {
    var data, i, item, key, len, pack;
    data = [];
    pack = this.getPackFromLocalstorage();
    for (key = i = 0, len = pack.length; i < len; key = ++i) {
      item = pack[key];
      data.push(item.id);
    }
    return data;
  };

  Popin.prototype.resize = function() {
    if (this.isValidation) {
      return this.validate.css({
        'display': 'block',
        'margin-left': (W.ww - this.popin.outerWidth()) / 2,
        'margin-top': (W.wh - this.popin.outerHeight() + 94) / 2
      });
    } else {
      return this.popin.css({
        'display': 'block',
        'margin-left': (W.ww - this.popin.outerWidth()) / 2,
        'margin-top': (W.wh - this.popin.outerHeight() + 94) / 2
      });
    }
  };

  return Popin;

})(ComponentsBase);

ProductDetail = (function(superClass) {
  extend(ProductDetail, superClass);

  function ProductDetail(options) {
    this.checkFavorites = bind(this.checkFavorites, this);
    this.favoritesBtnClick = bind(this.favoritesBtnClick, this);
    this.changeSize = bind(this.changeSize, this);
    this.sizeBtnClick = bind(this.sizeBtnClick, this);
    this.changeColor = bind(this.changeColor, this);
    this.colorBtnClick = bind(this.colorBtnClick, this);
    this.closeMoreInfo = bind(this.closeMoreInfo, this);
    this.openMoreInfo = bind(this.openMoreInfo, this);
    this.checkMoreInfo = bind(this.checkMoreInfo, this);
    this.moreInfoClick = bind(this.moreInfoClick, this);
    this.loadData = bind(this.loadData, this);
    this.addToPack = bind(this.addToPack, this);
    this.addToPackClick = bind(this.addToPackClick, this);
    this.getPackFromLocalstorage = bind(this.getPackFromLocalstorage, this);
    this.isInPack = bind(this.isInPack, this);
    this.addToCart = bind(this.addToCart, this);
    this.addToCartClick = bind(this.addToCartClick, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    if (options.page != null) {
      this.page = options.page;
    }
    ProductDetail.__super__.constructor.apply(this, arguments);
  }

  ProductDetail.prototype._initContent = function() {
    ProductDetail.__super__._initContent.apply(this, arguments);
    new ProductSlider({
      container: this.container.find('.slider-product')
    });
    this.colorBtn = this.container.find('.color');
    this.sizeBtn = this.container.find('.size');
    this.favoritesBtn = this.container.find('.favorites');
    this.moreInfoBtn = this.container.find('.more-detail a');
    this.moreInfoContainer = this.container.find('.more-info-container');
    if ((this.page != null) && this.page === "pack") {
      return console.log('pack');
    } else {
      this.loadData();
      return this.isInPack();
    }
  };

  ProductDetail.prototype._initEvents = function() {
    ProductDetail.__super__._initEvents.apply(this, arguments);
    this.colorBtn.on(Event.CLICK, this.colorBtnClick);
    this.sizeBtn.on(Event.CLICK, this.sizeBtnClick);
    this.favoritesBtn.on(Event.CLICK, this.favoritesBtnClick);
    this.moreInfoBtn.on(Event.CLICK, this.moreInfoClick);
    console.log(this.container.find('.add-to-pack'));
    if (this.container.find('.add-to-pack').length > 0) {
      if (!this.isInPack()) {
        this.container.find('.add-to-pack').on(Event.CLICK, this.addToPackClick);
      } else {
        this.container.find('.add-to-pack').css({
          'background-color': '#e0e0e0'
        });
        this.container.find('.add-to-pack').html('Déja dans mon pack');
        this.container.find('.add-to-pack ~ .price').css({
          'display': 'none'
        });
        this.container.find('.add-to-pack').removeAttr('href');
      }
    }
    if (this.container.find('.add-to-cart').length > 0) {
      return this.container.find('.add-to-cart').on(Event.CLICK, this.addToCartClick);
    }
  };

  ProductDetail.prototype.addToCartClick = function(e) {
    e.preventDefault();
    return this.addToCart();
  };

  ProductDetail.prototype.addToCart = function() {
    return $.ajax({
      method: "POST",
      url: Routing.generate('bp_cart_api_addtocart', true),
      data: {
        'type': 'product',
        'id': ProductId,
        'quantity': 1
      }
    }).done((function(_this) {
      return function(data, err) {
        console.log('err : ', err, 'data : ', data);
        $(window).trigger('EmbedCart:addCustomPackToCart', [data.data]);
        $(window).trigger("CustomPack::removePack");
        return _this.closePopin();
      };
    })(this));
  };

  ProductDetail.prototype.isInPack = function(id) {
    var i, item, key, len, pack;
    pack = this.getPackFromLocalstorage();
    if (pack !== null) {
      for (key = i = 0, len = pack.length; i < len; key = ++i) {
        item = pack[key];
        if (item.id === ProductId) {
          return true;
        }
      }
    }
    return false;
  };

  ProductDetail.prototype.getPackFromLocalstorage = function() {
    var pack;
    if (typeof localStorage !== 'undefined') {
      pack = JSON.parse(localStorage.getItem('customPack'));
      if (pack !== null) {
        return pack;
      } else {
        return null;
      }
    }
  };

  ProductDetail.prototype.addToPackClick = function(e) {
    e.preventDefault();
    return this.addToPack();
  };

  ProductDetail.prototype.addToPack = function() {
    var item, pack;
    if (typeof localStorage !== 'undefined') {
      pack = JSON.parse(localStorage.getItem('customPack'));
      if (pack === null) {
        pack = new Array();
      }
      item = {
        'id': this.product.id,
        'color': this.product.color,
        'size': this.product.size,
        'name': this.product.name,
        'brand': this.product.brand,
        'taxe': this.product.taxe
      };
      if (this.product.photos[0] != null) {
        item.img = Routing.generate('photo_url', {
          filter: 'medium',
          id: this.product.photos[0].id
        }, true);
      } else {
        item.img = '';
      }
      pack.push(item);
      pack = JSON.stringify(pack);
      localStorage.setItem('customPack', pack);
    }
    return window.location = Routing.generate('bp_core_packeditor_index', true);
  };

  ProductDetail.prototype.loadData = function() {
    return $.ajax({
      method: "GET",
      url: Routing.generate('bp_cart_api_product', true) + '?id=' + ProductId
    }).done((function(_this) {
      return function(data) {
        return _this.product = data.data;
      };
    })(this));
  };

  ProductDetail.prototype.moreInfoClick = function(e) {
    e.preventDefault();
    return this.checkMoreInfo();
  };

  ProductDetail.prototype.checkMoreInfo = function() {
    if (this.container.hasClass('open')) {
      return this.closeMoreInfo();
    } else {
      return this.openMoreInfo();
    }
  };

  ProductDetail.prototype.openMoreInfo = function() {
    var height;
    height = this.moreInfoContainer.find('.more-info').outerHeight();
    if (this.moreInfoContainer.find('.reviews-container') < 0) {
      height += this.moreInfoContainer.find('.reviews-container').outerHeight();
    } else {
      height += 100;
    }
    this.moreInfoContainer.css({
      'height': height
    });
    this.container.addClass('open');
    return this.moreInfoBtn.last().html('-');
  };

  ProductDetail.prototype.closeMoreInfo = function() {
    this.moreInfoContainer.css({
      'height': 0
    });
    this.container.removeClass('open');
    return this.moreInfoBtn.last().html('+');
  };

  ProductDetail.prototype.colorBtnClick = function(e) {
    var target;
    e.preventDefault();
    target = $(e.currentTarget);
    return this.changeColor(target);
  };

  ProductDetail.prototype.changeColor = function(target) {
    this.colorBtn.removeClass('active');
    return target.addClass('active');
  };

  ProductDetail.prototype.sizeBtnClick = function(e) {
    var target;
    e.preventDefault();
    target = $(e.currentTarget);
    return this.changeSize(target);
  };

  ProductDetail.prototype.changeSize = function(target) {
    this.sizeBtn.removeClass('active');
    return target.addClass('active');
  };

  ProductDetail.prototype.favoritesBtnClick = function(e) {
    e.preventDefault();
    return this.checkFavorites();
  };

  ProductDetail.prototype.checkFavorites = function() {
    if (!this.favoritesBtn.hasClass('active')) {
      return this.favoritesBtn.addClass('active');
    } else {
      return this.favoritesBtn.removeClass('active');
    }
  };

  return ProductDetail;

})(ComponentsBase);

Slider = (function(superClass) {
  extend(Slider, superClass);

  function Slider(options) {
    this.keyDown = bind(this.keyDown, this);
    this.prevSlide = bind(this.prevSlide, this);
    this.nextSlide = bind(this.nextSlide, this);
    this.clickNav = bind(this.clickNav, this);
    this._navUpdate = bind(this._navUpdate, this);
    this._classCheck = bind(this._classCheck, this);
    this._goToSlide = bind(this._goToSlide, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    Slider.__super__.constructor.apply(this, arguments);
  }

  Slider.prototype._initContent = function() {
    var i, item, len, ref, slide;
    Slider.__super__._initContent.apply(this, arguments);
    this.next = this.container.find('.next');
    this.prev = this.container.find('.prev');
    this.nav = this.container.find('.nav');
    this.slides = [];
    ref = $('.slide', this.container);
    for (i = 0, len = ref.length; i < len; i++) {
      slide = ref[i];
      item = {};
      item.container = $(slide);
      item.highlight = new Highlight({
        container: item.container
      });
      item.imgSrc = item.container.find('img')[0].src;
      this.slides.push(item);
    }
    this.currentSlide = 0;
    this.previousSlide = 0;
    if (this.nav.length > 0) {
      this.navItems = this.nav.find('li');
    }
    return this._classCheck();
  };

  Slider.prototype._initEvents = function() {
    Slider.__super__._initEvents.apply(this, arguments);
    this.next.on(Event.CLICK, this.nextSlide);
    this.prev.on(Event.CLICK, this.prevSlide);
    $('body').on(Event.KEYDOWN, this.keyDown);
    if (this.nav.length > 0) {
      return this.navItems.on(Event.CLICK, this.clickNav);
    }
  };

  Slider.prototype._goToSlide = function(index) {
    this.previousSlide = this.currentSlide;
    this.currentSlide = index;
    if (this.currentSlide > (this.slides.length - 1)) {
      this.currentSlide = 0;
    } else if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
    this._classCheck();
    if (this.nav.length > 0) {
      this._navUpdate();
    }
    return this.container.trigger("slider::changeSlide", [index]);
  };

  Slider.prototype._classCheck = function() {
    var i, index, len, ref, results, slide;
    ref = this.slides;
    results = [];
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      slide = ref[index];
      if (this.currentSlide < index) {
        slide.container.removeClass('before');
        results.push(slide.container.addClass('after'));
      } else if (this.currentSlide > index) {
        slide.container.removeClass('after');
        results.push(slide.container.addClass('before'));
      } else {
        slide.container.removeClass('before');
        results.push(slide.container.removeClass('after'));
      }
    }
    return results;
  };

  Slider.prototype._navUpdate = function() {
    this.navItems.removeClass('active');
    return this.navItems.eq(this.currentSlide).addClass('active');
  };

  Slider.prototype.clickNav = function(e) {
    var index;
    index = $(e.currentTarget).index();
    return this._goToSlide(index);
  };

  Slider.prototype.nextSlide = function() {
    var index;
    index = this.currentSlide + 1;
    return this._goToSlide(index);
  };

  Slider.prototype.prevSlide = function() {
    var index;
    index = this.currentSlide - 1;
    return this._goToSlide(index);
  };

  Slider.prototype.keyDown = function(e) {
    if (e.keyCode === 37) {
      return this.prevSlide();
    } else if (e.keyCode === 39) {
      return this.nextSlide();
    }
  };

  return Slider;

})(ComponentsBase);

ProductSlider = (function(superClass) {
  extend(ProductSlider, superClass);

  function ProductSlider(options) {
    this.goToSlide = bind(this.goToSlide, this);
    this.navUpdate = bind(this.navUpdate, this);
    this.navItemClick = bind(this.navItemClick, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    ProductSlider.__super__.constructor.apply(this, arguments);
  }

  ProductSlider.prototype._initContent = function() {
    ProductSlider.__super__._initContent.apply(this, arguments);
    this.slides = this.container.find('.slide');
    return this.navItem = this.container.find('ul li');
  };

  ProductSlider.prototype._initEvents = function() {
    ProductSlider.__super__._initEvents.apply(this, arguments);
    return this.navItem.on(Event.CLICK, this.navItemClick);
  };

  ProductSlider.prototype.navItemClick = function(e) {
    var index;
    e.preventDefault();
    index = $(e.currentTarget).index();
    return this.goToSlide(index);
  };

  ProductSlider.prototype.navUpdate = function(index) {
    this.navItem.removeClass('active');
    return $(this.navItem[index]).addClass('active');
  };

  ProductSlider.prototype.goToSlide = function(index) {
    this.navUpdate(index);
    this.slides.removeClass('active');
    return $(this.slides[index]).addClass('active');
  };

  return ProductSlider;

})(ComponentsBase);

YourPack = (function(superClass) {
  extend(YourPack, superClass);

  function YourPack(options) {
    this.removePackFromLocalstorage = bind(this.removePackFromLocalstorage, this);
    this.getPackFromLocalstorage = bind(this.getPackFromLocalstorage, this);
    this.editFromLocalstorage = bind(this.editFromLocalstorage, this);
    this.removeFromLocalstorage = bind(this.removeFromLocalstorage, this);
    this.addToLocalstorage = bind(this.addToLocalstorage, this);
    this.isInPack = bind(this.isInPack, this);
    this.removePack = bind(this.removePack, this);
    this.refreshPackBar = bind(this.refreshPackBar, this);
    this.initBar = bind(this.initBar, this);
    this.removeFromPack = bind(this.removeFromPack, this);
    this.editFromPack = bind(this.editFromPack, this);
    this.validateCheck = bind(this.validateCheck, this);
    this.validateClick = bind(this.validateClick, this);
    this.unvalidatePack = bind(this.unvalidatePack, this);
    this.validatePack = bind(this.validatePack, this);
    this.validateBtnCheck = bind(this.validateBtnCheck, this);
    this.addToPack = bind(this.addToPack, this);
    this.editClick = bind(this.editClick, this);
    this._onLoaderComplete = bind(this._onLoaderComplete, this);
    this.resize = bind(this.resize, this);
    this.wheelEvent = bind(this.wheelEvent, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    this.fixContainer = options.fixContainer;
    YourPack.__super__.constructor.apply(this, arguments);
  }

  YourPack.prototype._initContent = function() {
    var i, len, product, ref;
    YourPack.__super__._initContent.apply(this, arguments);
    this.productChoice = [];
    ref = this.container.find('.product-choice');
    for (i = 0, len = ref.length; i < len; i++) {
      product = ref[i];
      this.productChoice.push({
        el: $(product)
      });
    }
    new Loader({
      container: this.container,
      each: this._onLoaderEach,
      complete: this._onLoaderComplete
    });
    this["break"] = {};
    this["break"].point = this.fixContainer.offset().top + this.fixContainer.outerHeight();
    this["break"].breaked = false;
    this.btnValidate = this.container.find('.button');
    this.editBtn = this.container.find('.edit-container');
    this.price = 50;
    return this.initBar();
  };

  YourPack.prototype._initEvents = function() {
    YourPack.__super__._initEvents.apply(this, arguments);
    $(window).on('CustomPack::addToPack', this.addToPack);
    $(window).on('CustomPack::removeFromPack', this.removeFromPack);
    $(window).on('CustomPack::editFromPack', this.editFromPack);
    $(window).on('CustomPack::removePack', this.removePack);
    $(window).on('CustomPack::initBar', this.initBar);
    $(window).on(Event.WHEEL, this.wheelEvent);
    this.btnValidate.on(Event.CLICK, this.validateClick);
    return this.editBtn.on(Event.CLICK, this.editClick);
  };

  YourPack.prototype.wheelEvent = function(e) {
    if (e.pageY > this.breakPoint && !this["break"].breaked) {
      this["break"].breaked = true;
      this.container.addClass('sticky');
    } else if (e.pageY < this.breakPoint && this["break"].breaked) {
      this["break"].breaked = false;
      this.container.removeClass('sticky');
    }
    return this.resize();
  };

  YourPack.prototype.resize = function() {
    var i, len, product, ref, results;
    this.breakPoint = this.fixContainer.offset().top + this.fixContainer.outerHeight();
    ref = this.productChoice;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      product = ref[i];
      results.push(product.highlight.resize());
    }
    return results;
  };

  YourPack.prototype._onLoaderComplete = function(img) {
    var i, key, len, product, ref, results;
    ref = this.productChoice;
    results = [];
    for (key = i = 0, len = ref.length; i < len; key = ++i) {
      product = ref[key];
      results.push(this.productChoice[key].highlight = new Highlight({
        container: this.productChoice[key].el.find('.img-container')
      }));
    }
    return results;
  };

  YourPack.prototype.editClick = function(e) {
    var id;
    e.preventDefault();
    id = $(e.currentTarget).parent().parent()[0].classList[2];
    return $(window).trigger("Popin::openPopin", [
      {
        'id': id
      }
    ]);
  };

  YourPack.prototype.addToPack = function(e, values) {
    var index;
    index = this.container.find('.product-choice.added').length;
    if (index < 4) {
      if (values.photos[0] != null) {
        this.productChoice[index].el.find('img').attr('src', Routing.generate('photo_url', {
          filter: 'small',
          id: values.photos[0].id
        }, true));
      }
      this.productChoice[index].el.addClass('added ' + values.id);
      this.addToLocalstorage(values);
    }
    return this.initBar();
  };

  YourPack.prototype.validateBtnCheck = function() {
    var index;
    index = this.container.find('.product-choice.added').length;
    if (index === 4) {
      return this.validatePack();
    } else {
      return this.unvalidatePack();
    }
  };

  YourPack.prototype.validatePack = function() {
    this.btnValidate.addClass('green');
    return this.btnValidate.html('Ajouter au panier<p class="price">+ ' + this.price + '&euro;</p>');
  };

  YourPack.prototype.unvalidatePack = function() {
    this.btnValidate.removeClass('green');
    return this.btnValidate.html('Choisissez vos produits');
  };

  YourPack.prototype.validateClick = function(e) {
    e.preventDefault();
    return this.validateCheck();
  };

  YourPack.prototype.validateCheck = function() {
    if (this.btnValidate.hasClass('green')) {
      return $(window).trigger("Popin::openPopin", [
        {
          'validate': true
        }
      ]);
    }
  };

  YourPack.prototype.editFromPack = function(e, values) {
    return this.editFromLocalstorage(values);
  };

  YourPack.prototype.removeFromPack = function(e, values) {
    var element;
    element = this.container.find('.product-choice.added.' + values.id);
    element.removeClass(values.id);
    this.removeFromLocalstorage(values.id);
    return this.initBar();
  };

  YourPack.prototype.initBar = function() {
    var i, item, j, key, len, len1, pack, productChoice, productChoices, ref, results;
    ref = this.container.find('.product-choice');
    for (i = 0, len = ref.length; i < len; i++) {
      productChoice = ref[i];
      $(productChoice).find('img').attr('src', $(productChoice).find('img').attr('data-src'));
    }
    productChoices = this.container.find('.product-choice').removeAttr('class');
    productChoices.addClass('product-choice');
    pack = this.getPackFromLocalstorage();
    if (pack !== null) {
      results = [];
      for (key = j = 0, len1 = pack.length; j < len1; key = ++j) {
        item = pack[key];
        if (item.taxe > 0) {
          this.price += item.taxe;
        }
        results.push(this.refreshPackBar(item.id, key));
      }
      return results;
    }
  };

  YourPack.prototype.refreshPackBar = function(id, key) {
    $('#' + id).addClass('added');
    this.productChoice[key].el.find('img').attr('src', $('#' + id).find('img').attr('src'));
    this.productChoice[key].el.addClass('added ' + id);
    return this.validateBtnCheck();
  };

  YourPack.prototype.removePack = function(e) {
    e.preventDefault();
    return this.removePackFromLocalstorage();
  };

  YourPack.prototype.isInPack = function(id) {
    var i, item, len, pack;
    pack = this.getPackFromLocalstorage();
    if (pack !== null) {
      for (i = 0, len = pack.length; i < len; i++) {
        item = pack[i];
        if (item === id) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  YourPack.prototype.addToLocalstorage = function(values) {
    var item, pack;
    if (typeof localStorage !== 'undefined') {
      pack = JSON.parse(localStorage.getItem('customPack'));
      if (pack === null) {
        pack = new Array();
      }
      item = {
        'id': values.id,
        'color': values.color,
        'size': values.size,
        'name': values.name,
        'brand': values.brand,
        'taxe': values.taxe
      };
      if (values.photos[0] != null) {
        item.img = Routing.generate('photo_url', {
          filter: 'medium',
          id: values.photos[0].id
        }, true);
      } else {
        item.img = '';
      }
      pack.push(item);
      pack = JSON.stringify(pack);
      return localStorage.setItem('customPack', pack);
    }
  };

  YourPack.prototype.removeFromLocalstorage = function(id) {
    var i, item, key, len, pack;
    if (typeof localStorage !== 'undefined') {
      pack = JSON.parse(localStorage.getItem('customPack'));
      if (pack !== null) {
        for (key = i = 0, len = pack.length; i < len; key = ++i) {
          item = pack[key];
          if ((item != null) && item.id === id) {
            pack.splice(key, 1);
          }
        }
      }
      pack = JSON.stringify(pack);
      return localStorage.setItem('customPack', pack);
    }
  };

  YourPack.prototype.editFromLocalstorage = function(values) {
    var i, item, itemTemp, key, len, pack, packTemp;
    if (typeof localStorage !== 'undefined') {
      pack = JSON.parse(localStorage.getItem('customPack'));
      packTemp = [];
      if (pack !== null) {
        for (key = i = 0, len = pack.length; i < len; key = ++i) {
          item = pack[key];
          if (item.id === values.id) {
            itemTemp = {
              'id': values.id,
              'color': values.color,
              'size': values.size,
              'name': values.name,
              'brand': values.brand,
              'taxe': values.taxe
            };
            if (values.photos[0] != null) {
              item.img = Routing.generate('photo_url', {
                filter: 'medium',
                id: values.photos[0].id
              }, true);
            } else {
              itemTemp.img = '';
            }
            packTemp.push(itemTemp);
          } else {
            packTemp.push(item);
          }
        }
      }
      packTemp = JSON.stringify(packTemp);
      return localStorage.setItem('customPack', packTemp);
    }
  };

  YourPack.prototype.getPackFromLocalstorage = function() {
    var pack;
    if (typeof localStorage !== 'undefined') {
      pack = JSON.parse(localStorage.getItem('customPack'));
      if (pack !== null) {
        return pack;
      } else {
        return null;
      }
    }
  };

  YourPack.prototype.removePackFromLocalstorage = function() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('customPack');
      $(window).trigger("Product::removeAllFromPack");
      return this.initBar();
    }
  };

  return YourPack;

})(ComponentsBase);

Home = (function(superClass) {
  extend(Home, superClass);

  function Home() {
    this._onLoaderEach = bind(this._onLoaderEach, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    Home.__super__.constructor.apply(this, arguments);
  }

  Home.prototype._initContent = function() {
    var i, item, len, product, productBlocks, results;
    Home.__super__._initContent.apply(this, arguments);
    this.highlight = new Highlight({
      container: this.container.find('.highlight')
    });
    this.highlightPack1 = new Highlight({
      container: this.container.find('.pack-1')
    });
    this.highlightPack2 = new Highlight({
      container: this.container.find('.pack-2')
    });
    productBlocks = this.container.find('.block-product');
    this.products = new Array();
    results = [];
    for (i = 0, len = productBlocks.length; i < len; i++) {
      product = productBlocks[i];
      item = new BlockProduct({
        container: $(product)
      });
      results.push(this.products.push(item));
    }
    return results;
  };

  Home.prototype._initEvents = function() {
    return Home.__super__._initEvents.apply(this, arguments);
  };

  Home.prototype._onLoaderEach = function(img) {
    var i, len, product, ref;
    ref = this.products;
    for (i = 0, len = ref.length; i < len; i++) {
      product = ref[i];
      if (img === product.pic) {
        product.resize();
      }
    }
    if (img === this.highlight.pic) {
      this.highlight.resize();
    }
    if (img === this.highlight.pic) {
      this.highlightPack1.resize();
    }
    if (img === this.highlight.pic) {
      return this.highlightPack2.resize();
    }
  };

  return Home;

})(Page);

ListPack = (function(superClass) {
  extend(ListPack, superClass);

  function ListPack() {
    this._onLoaderEach = bind(this._onLoaderEach, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    ListPack.__super__.constructor.apply(this, arguments);
  }

  ListPack.prototype._initContent = function() {
    ListPack.__super__._initContent.apply(this, arguments);
    return new Highlight({
      container: this.container.find('.top-content')
    });
  };

  ListPack.prototype._initEvents = function() {
    return ListPack.__super__._initEvents.apply(this, arguments);
  };

  ListPack.prototype._onLoaderEach = function(img) {};

  return ListPack;

})(Page);

ListProduct = (function(superClass) {
  extend(ListProduct, superClass);

  function ListProduct() {
    this._onLoaderEach = bind(this._onLoaderEach, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    ListProduct.__super__.constructor.apply(this, arguments);
  }

  ListProduct.prototype._initContent = function() {
    var i, item, len, product, productBlocks;
    ListProduct.__super__._initContent.apply(this, arguments);
    this.highligth = new Highlight({
      container: this.container.find('.top-content')
    });
    this.filterProduct = new FilterProduct({
      page: 'shop',
      container: this.container.find('.search-container')
    });
    productBlocks = this.container.find('.block-product');
    this.products = new Array();
    for (i = 0, len = productBlocks.length; i < len; i++) {
      product = productBlocks[i];
      item = new BlockProduct({
        container: $(product)
      });
      this.products.push(item);
    }
    return new LazyLoader({
      container: this.container.find('.product-container'),
      page: 'shop',
      url: Routing.generate('bp_cart_api_products', true)
    });
  };

  ListProduct.prototype._initEvents = function() {
    return ListProduct.__super__._initEvents.apply(this, arguments);
  };

  ListProduct.prototype._onLoaderEach = function(img) {
    var i, len, product, ref, results;
    if (img === this.highligth.pic[0]) {
      this.highligth.resize();
    }
    ref = this.products;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      product = ref[i];
      if (img === product.pic) {
        results.push(product.resize());
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  return ListProduct;

})(Page);

PackDetail = (function(superClass) {
  extend(PackDetail, superClass);

  function PackDetail() {
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    PackDetail.__super__.constructor.apply(this, arguments);
  }

  PackDetail.prototype._initContent = function() {
    var i, len, productDetail, ref, results;
    PackDetail.__super__._initContent.apply(this, arguments);
    this.productsDetail = [];
    ref = this.container.find('.product-detail');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      productDetail = ref[i];
      results.push(this.productsDetail.push({
        el: productDetail,
        productDetail: new ProductDetail({
          container: $(productDetail),
          page: 'pack'
        })
      }));
    }
    return results;
  };

  PackDetail.prototype._initEvents = function() {
    return PackDetail.__super__._initEvents.apply(this, arguments);
  };

  return PackDetail;

})(Page);

PackEditor = (function(superClass) {
  extend(PackEditor, superClass);

  function PackEditor() {
    this._onLoaderEach = bind(this._onLoaderEach, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    PackEditor.__super__.constructor.apply(this, arguments);
  }

  PackEditor.prototype._initContent = function() {
    var i, len, product, ref, temp;
    PackEditor.__super__._initContent.apply(this, arguments);
    this.filterProduct = new FilterProduct({
      container: this.container.find('.search-container'),
      page: 'pack-editor'
    });
    new YourPack({
      fixContainer: this.container.find('.top-content'),
      container: this.container.find('.your-pack-container')
    });
    new Popin({
      container: this.container.find('.popin-container')
    });
    this.product = [];
    ref = this.container.find('.block-product');
    for (i = 0, len = ref.length; i < len; i++) {
      product = ref[i];
      temp = new BlockProduct({
        container: $(product)
      });
      this.product.push(temp);
    }
    this.highlight = new Highlight({
      container: this.container.find('.top-content')
    });
    return new LazyLoader({
      container: this.container.find('.product-container'),
      page: 'pack-editor',
      url: Routing.generate('bp_cart_api_products', true)
    });
  };

  PackEditor.prototype._initEvents = function() {
    return PackEditor.__super__._initEvents.apply(this, arguments);
  };

  PackEditor.prototype._onLoaderEach = function(img) {};

  return PackEditor;

})(Page);

ProductPage = (function(superClass) {
  extend(ProductPage, superClass);

  function ProductPage() {
    this._onLoaderEach = bind(this._onLoaderEach, this);
    this._initEvents = bind(this._initEvents, this);
    this._initContent = bind(this._initContent, this);
    ProductPage.__super__.constructor.apply(this, arguments);
  }

  ProductPage.prototype._initContent = function() {
    var i, item, len, product, productBlocks, results;
    ProductPage.__super__._initContent.apply(this, arguments);
    new ProductDetail({
      container: this.container.find('.product-detail')
    });
    productBlocks = this.container.find('.product-container');
    this.products = new Array();
    results = [];
    for (i = 0, len = productBlocks.length; i < len; i++) {
      product = productBlocks[i];
      item = new BlockProduct({
        container: $(product)
      });
      results.push(this.products.push(item));
    }
    return results;
  };

  ProductPage.prototype._initEvents = function() {
    return ProductPage.__super__._initEvents.apply(this, arguments);
  };

  ProductPage.prototype._onLoaderEach = function(img) {};

  return ProductPage;

})(Page);

App = (function(superClass) {
  extend(App, superClass);

  App.pages = {
    'home': Home,
    'product-page': ProductPage,
    'list-pack': ListPack,
    'list-product': ListProduct,
    'pack-editor': PackEditor,
    'pack-detail': PackDetail
  };

  App.responsive = {
    'mobile': 640
  };

  function App() {
    this._initContent = bind(this._initContent, this);
    App.__super__.constructor.apply(this, arguments);
  }

  App.prototype._initContent = function() {
    App.__super__._initContent.apply(this, arguments);
    return new Menu({
      container: $('.main-header')
    });
  };

  return App;

})(AppCore);
