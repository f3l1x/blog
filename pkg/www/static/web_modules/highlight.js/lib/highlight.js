var e,n=(function(e,n){var t,r;t=function(e){var n=[],t=Object.keys,r={},a={},i=!0,o=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,s=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,u="Could not find the language '{}', did you forget to load/include a language module?",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},g="of and for in not or if then".split(" ");function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function E(e){return o.test(e)}function v(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach((function(e){for(n in e)t[n]=e[n]})),t}function p(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),d(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function b(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return v(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?[v(e,{starts:e.starts?v(e.starts):null})]:Object.isFrozen(e)?[v(e)]:[e]}function h(e,n){return n?Number(n):(t=e,-1!=g.indexOf(t.toLowerCase())?0:1);var t}function _(e){function n(e){return e&&e.source||e}function r(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function a(e){var t,a,i={},o=[],l={},s=1;function u(e,n){i[s]=e,o.push([e,n]),s+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(n)+1}for(var c=0;c<e.contains.length;c++)u(a=e.contains[c],a.beginKeywords?"\\.?(?:"+a.begin+")\\.?":a.begin);e.terminator_end&&u("end",e.terminator_end),e.illegal&&u("illegal",e.illegal);var g=o.map((function(e){return e[1]}));return t=r(function(e,t){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,i="",o=0;o<e.length;o++){var l=a+=1,s=n(e[o]);for(o>0&&(i+=t),i+="(";s.length>0;){var u=r.exec(s);if(null==u){i+=s;break}i+=s.substring(0,u.index),s=s.substring(u.index+u[0].length),"\\"==u[0][0]&&u[1]?i+="\\"+String(Number(u[1])+l):(i+=u[0],"("==u[0]&&a++)}i+=")"}return i}(g,"|"),!0),l.lastIndex=0,l.exec=function(n){var r;if(0===o.length)return null;t.lastIndex=l.lastIndex;var a=t.exec(n);if(!a)return null;for(var s=0;s<a.length;s++)if(null!=a[s]&&null!=i[""+s]){r=i[""+s];break}return"string"==typeof r?(a.type=r,a.extra=[e.illegal,e.terminator_end]):(a.type="begin",a.rule=r),a},l}if(e.contains&&-1!=e.contains.indexOf("self")){if(!i)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");e.contains=e.contains.filter((function(e){return"self"!=e}))}!function i(o,l){o.compiled||(o.compiled=!0,o.keywords=o.keywords||o.beginKeywords,o.keywords&&(o.keywords=function(e,n){var r={};return"string"==typeof e?a("keyword",e):t(e).forEach((function(n){a(n,e[n])})),r;function a(e,t){n&&(t=t.toLowerCase()),t.split(" ").forEach((function(n){var t=n.split("|");r[t[0]]=[e,h(t[0],t[1])]}))}}(o.keywords,e.case_insensitive)),o.lexemesRe=r(o.lexemes||/\w+/,!0),l&&(o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")\\b"),o.begin||(o.begin=/\B|\b/),o.beginRe=r(o.begin),o.endSameAsBegin&&(o.end=o.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(o.endRe=r(o.end)),o.terminator_end=n(o.end)||"",o.endsWithParent&&l.terminator_end&&(o.terminator_end+=(o.end?"|":"")+l.terminator_end)),o.illegal&&(o.illegalRe=r(o.illegal)),null==o.relevance&&(o.relevance=1),o.contains||(o.contains=[]),o.contains=Array.prototype.concat.apply([],o.contains.map((function(e){return b("self"===e?o:e)}))),o.contains.forEach((function(e){i(e,o)})),o.starts&&i(o.starts,l),o.terminators=a(o))}(e)}function m(e,n,t,a){var o=n;function l(e,n){var t=h.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function s(e,n,t,r){if(!t&&""===n)return"";if(!e)return n;var a='<span class="'+(r?"":c.classPrefix);return(a+=e+'">')+n+(t?"":"</span>")}function g(){x+=null!=M.subLanguage?function(){var e="string"==typeof M.subLanguage;if(e&&!r[M.subLanguage])return f(S);var n=e?m(M.subLanguage,S,!0,O[M.subLanguage]):R(S,M.subLanguage.length?M.subLanguage:void 0);return M.relevance>0&&(y+=n.relevance),e&&(O[M.subLanguage]=n.top),s(n.language,n.value,!1,!0)}():function(){var e,n,t,r;if(!M.keywords)return f(S);for(r="",n=0,M.lexemesRe.lastIndex=0,t=M.lexemesRe.exec(S);t;)r+=f(S.substring(n,t.index)),(e=l(M,t))?(y+=e[1],r+=s(e[0],f(t[0]))):r+=f(t[0]),n=M.lexemesRe.lastIndex,t=M.lexemesRe.exec(S);return r+f(S.substr(n))}(),S=""}function d(e){x+=e.className?s(e.className,"",!0):"",M=Object.create(e,{parent:{value:M}})}function E(e){var n=e[0],t=e.rule;return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?S+=n:(t.excludeBegin&&(S+=n),g(),t.returnBegin||t.excludeBegin||(S=n)),d(t),t.returnBegin?0:n.length}function v(e){var n=e[0],t=o.substr(e.index),r=function e(n,t){if(function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(M,t);if(r){var a=M;a.skip?S+=n:(a.returnEnd||a.excludeEnd||(S+=n),g(),a.excludeEnd&&(S=n));do{M.className&&(x+="</span>"),M.skip||M.subLanguage||(y+=M.relevance),M=M.parent}while(M!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),d(r.starts)),a.returnEnd?0:n.length}}var p={};function b(e,n){var r=n&&n[0];if(S+=e,null==r)return g(),0;if("begin"==p.type&&"end"==n.type&&p.index==n.index&&""===r)return S+=o.slice(n.index,n.index+1),1;if(p=n,"begin"===n.type)return E(n);if("illegal"===n.type&&!t)throw new Error('Illegal lexeme "'+r+'" for mode "'+(M.className||"<unnamed>")+'"');if("end"===n.type){var a=v(n);if(null!=a)return a}return S+=r,r.length}var h=w(e);if(!h)throw console.error(u.replace("{}",e)),new Error('Unknown language: "'+e+'"');_(h);var N,M=a||h,O={},x="";for(N=M;N!==h;N=N.parent)N.className&&(x=s(N.className,"",!0)+x);var S="",y=0;try{for(var C,D,A=0;M.terminators.lastIndex=A,C=M.terminators.exec(o);)D=b(o.substring(A,C.index),C),A=C.index+D;for(b(o.substr(A)),N=M;N.parent;N=N.parent)N.className&&(x+="</span>");return{relevance:y,value:x,illegal:!1,language:e,top:M}}catch(n){if(n.message&&-1!==n.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:f(o)};if(i)return{relevance:0,value:f(o),language:e,top:M,errorRaised:n};throw n}}function R(e,n){n=n||c.languages||t(r);var a={relevance:0,value:f(e)},i=a;return n.filter(w).filter(S).forEach((function(n){var t=m(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>a.relevance&&(i=a,a=t)})),i.language&&(a.second_best=i),a}function N(e){return c.tabReplace||c.useBR?e.replace(s,(function(e,n){return c.useBR&&"\n"===e?"<br>":c.tabReplace?n.replace(/\t/g,c.tabReplace):""})):e}function M(e){var t,r,i,o,s,g=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=l.exec(i)){var o=w(t[1]);return o||(console.warn(u.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),o?t[1]:"no-highlight"}for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(E(a=i[n])||w(a))return a}(e);E(g)||(c.useBR?(t=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,s=t.textContent,i=g?m(g,s,!0):R(s),(r=p(t)).length&&((o=document.createElement("div")).innerHTML=i.value,i.value=function(e,t,r){var a=0,i="",o=[];function l(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function s(e){i+="<"+d(e)+n.map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+f(e.value).replace(/"/g,"&quot;")+'"'})).join("")+">"}function u(e){i+="</"+d(e)+">"}function c(e){("start"===e.event?s:u)(e.node)}for(;e.length||t.length;){var g=l();if(i+=f(r.substring(a,g[0].offset)),a=g[0].offset,g===e){o.reverse().forEach(u);do{c(g.splice(0,1)[0]),g=l()}while(g===e&&g.length&&g[0].offset===a);o.reverse().forEach(s)}else"start"===g[0].event?o.push(g[0].node):o.pop(),c(g.splice(0,1)[0])}return i+f(r.substr(a))}(r,p(o),s)),i.value=N(i.value),e.innerHTML=i.value,e.className=function(e,n,t){var r=n?a[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}(e.className,g,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function O(){if(!O.called){O.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,M)}}var x={disableAutodetect:!0};function w(e){return e=(e||"").toLowerCase(),r[e]||r[a[e]]}function S(e){var n=w(e);return n&&!n.disableAutodetect}return e.highlight=m,e.highlightAuto=R,e.fixMarkup=N,e.highlightBlock=M,e.configure=function(e){c=v(c,e)},e.initHighlighting=O,e.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",O,!1),window.addEventListener("load",O,!1)},e.registerLanguage=function(n,t){var o;try{o=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw e;console.error(e),o=x}r[n]=o,o.rawDefinition=t.bind(null,e),o.aliases&&o.aliases.forEach((function(e){a[e]=n}))},e.listLanguages=function(){return t(r)},e.getLanguage=w,e.requireLanguage=function(e){var n=w(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},e.autoDetection=S,e.inherit=v,e.debugMode=function(){i=!1},e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},[e.BACKSLASH_ESCAPE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.PHRASAL_WORDS_MODE,e.COMMENT,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE,e.C_NUMBER_MODE,e.BINARY_NUMBER_MODE,e.CSS_NUMBER_MODE,e.REGEXP_MODE,e.TITLE_MODE,e.UNDERSCORE_TITLE_MODE,e.METHOD_GUARD].forEach((function(e){!function e(n){Object.freeze(n);var t="function"==typeof n;return Object.getOwnPropertyNames(n).forEach((function(r){!n.hasOwnProperty(r)||null===n[r]||"object"!=typeof n[r]&&"function"!=typeof n[r]||t&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(n[r])||e(n[r])})),n}(e)})),e},r="object"==typeof window&&window||"object"==typeof self&&self,n.nodeType?r&&(r.hljs=t({})):t(n)}(e={exports:{}},e.exports),e.exports);export default n;
//# sourceMappingURL=highlight.js.map
