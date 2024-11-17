/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(36),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(37),p=e(o),q=c(43),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(9),j=c(29),k=c(31),l=e(k),m=c(32),n="4.7.7";b.VERSION=n;var o=8;b.COMPILER_REVISION=o;var p=7;b.LAST_COMPATIBLE_COMPILER_REVISION=p;var q={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};b.REVISION_CHANGES=q;var r="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===r)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]},resetLoggedPropertyAccesses:function(){m.resetLoggedProperties()}};var s=l["default"].log;b.log=s,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0,i=void 0,j=void 0;c&&(g=c.start.line,h=c.end.line,i=c.start.column,j=c.end.column,a+=" - "+g+":"+i);for(var k=Error.prototype.constructor.call(this,a),l=0;l<f.length;l++)this[f[l]]=k[f[l]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,this.endLineNumber=h,e?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:j,enumerable:!0})):(this.column=i,this.endColumn=j))}catch(m){}}var e=c(6)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(7),__esModule:!0}},function(a,b,c){var d=c(8);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){h["default"](a),j["default"](a),l["default"](a),n["default"](a),p["default"](a),r["default"](a),t["default"](a)}function e(a,b,c){a.helpers[b]&&(a.hooks[b]=a.helpers[b],c||delete a.helpers[b])}var f=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d,b.moveHelperToHooks=e;var g=c(10),h=f(g),i=c(11),j=f(i),k=c(24),l=f(k),m=c(25),n=f(m),o=c(26),p=f(o),q=c(27),r=f(q),s=c(28),t=f(s)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){(function(d){"use strict";var e=c(12)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(4),h=c(5),i=f(h);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,d){l&&(l.key=b,l.index=c,l.first=0===c,l.last=!!d,m&&(l.contextPath=m+b)),k+=f(a[b],{data:l,blockParams:g.blockParams([a[b],b],[m+b,null])})}if(!b)throw new i["default"]("Must pass iterator to #each");var f=b.fn,h=b.inverse,j=0,k="",l=void 0,m=void 0;if(b.data&&b.ids&&(m=g.appendContextPath(b.data.contextPath,b.ids[0])+"."),g.isFunction(a)&&(a=a.call(this)),b.data&&(l=g.createFrame(b.data)),a&&"object"==typeof a)if(g.isArray(a))for(var n=a.length;j<n;j++)j in a&&c(j,j,j===a.length-1);else if(d.Symbol&&a[d.Symbol.iterator]){for(var o=[],p=a[d.Symbol.iterator](),q=p.next();!q.done;q=p.next())o.push(q.value);a=o;for(var n=a.length;j<n;j++)c(j,j,j===a.length-1)}else!function(){var b=void 0;e(a).forEach(function(a){void 0!==b&&c(b,j-1),b=a,j++}),void 0!==b&&c(b,j-1,!0)}();return 0===j&&(k=h(this)),k})},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b,c){a.exports={"default":c(13),__esModule:!0}},function(a,b,c){c(14),a.exports=c(20).Object.keys},function(a,b,c){var d=c(15);c(17)("keys",function(a){return function(b){return a(d(b))}})},function(a,b,c){var d=c(16);a.exports=function(a){return Object(d(a))}},function(a,b){a.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(18),e=c(20),f=c(23);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(19),e=c(20),f=c(21),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(22);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("if",function(a,b){if(2!=arguments.length)throw new g["default"]("#if requires exactly one argument");return e.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||e.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){if(2!=arguments.length)throw new g["default"]("#unless requires exactly one argument");return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b,c){return a?c.lookupProperty(a,b):a})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("with",function(a,b){if(2!=arguments.length)throw new g["default"]("#with requires exactly one argument");e.isFunction(a)&&(a=a.call(this));var c=b.fn;if(e.isEmpty(a))return b.inverse(this);var d=b.data;return b.data&&b.ids&&(d=e.createFrame(b.data),d.contextPath=e.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:d,blockParams:e.blockParams([a],[d&&d.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(30),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=i(null);b.constructor=!1,b.__defineGetter__=!1,b.__defineSetter__=!1,b.__lookupGetter__=!1;var c=i(null);return c.__proto__=!1,{properties:{whitelist:l.createNewLookupObject(c,a.allowedProtoProperties),defaultValue:a.allowProtoPropertiesByDefault},methods:{whitelist:l.createNewLookupObject(b,a.allowedProtoMethods),defaultValue:a.allowProtoMethodsByDefault}}}function e(a,b,c){return"function"==typeof a?f(b.methods,c):f(b.properties,c)}function f(a,b){return void 0!==a.whitelist[b]?a.whitelist[b]===!0:void 0!==a.defaultValue?a.defaultValue:(g(b),!1)}function g(a){o[a]!==!0&&(o[a]=!0,n.log("error",'Handlebars: Access has been denied to resolve the property "'+a+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}function h(){j(o).forEach(function(a){delete o[a]})}var i=c(33)["default"],j=c(12)["default"],k=c(1)["default"];b.__esModule=!0,b.createProtoAccessControl=d,b.resultIsAllowed=e,b.resetLoggedProperties=h;var l=c(35),m=c(31),n=k(m),o=i(null)},function(a,b,c){a.exports={"default":c(34),__esModule:!0}},function(a,b,c){var d=c(8);a.exports=function(a,b){return d.create(a,b)}},function(a,b,c){"use strict";function d(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return f.extend.apply(void 0,[e(null)].concat(b))}var e=c(33)["default"];b.__esModule=!0,b.createNewLookupObject=d;var f=c(4)},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=v.COMPILER_REVISION;if(!(b>=v.LAST_COMPATIBLE_COMPILER_REVISION&&b<=v.COMPILER_REVISION)){if(b<v.LAST_COMPATIBLE_COMPILER_REVISION){var d=v.REVISION_CHANGES[c],e=v.REVISION_CHANGES[b];throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=s.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=s.extend({},e,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),g=b.VM.invokePartial.call(this,c,d,f);if(null==g&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),g=e.partials[e.name](d,f)),null!=g){if(e.indent){for(var h=g.split("\n"),i=0,j=h.length;i<j&&(h[i]||i+1!==j);i++)h[i]=e.indent+h[i];g=h.join("\n")}return g}throw new u["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(g,b,g.helpers,g.partials,f,i,h)}var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=e.data;d._setup(e),!e.partial&&a.useData&&(f=j(b,f));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=e.depths?b!=e.depths[0]?[b].concat(e.depths):e.depths:[b]),(c=k(a.main,c,g,e.depths||[],f,i))(b,e)}if(!b)throw new u["default"]("No environment passed to template");if(!a||!a.main)throw new u["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e=a.compiler&&7===a.compiler[0],g={strict:function(a,b,c){if(!(a&&b in a))throw new u["default"]('"'+b+'" not defined in '+a,{loc:c});return g.lookupProperty(a,b)},lookupProperty:function(a,b){var c=a[b];return null==c?c:Object.prototype.hasOwnProperty.call(a,b)?c:y.resultIsAllowed(c,g.protoAccessControl,b)?c:void 0},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++){var e=a[d]&&g.lookupProperty(a[d],b);if(null!=e)return a[d][b]}},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:s.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},mergeIfNeeded:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=s.extend({},b,a)),c},nullContext:n({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){if(c.partial)g.protoAccessControl=c.protoAccessControl,g.helpers=c.helpers,g.partials=c.partials,g.decorators=c.decorators,g.hooks=c.hooks;else{var d=s.extend({},b.helpers,c.helpers);l(d,g),g.helpers=d,a.usePartial&&(g.partials=g.mergeIfNeeded(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(g.decorators=s.extend({},b.decorators,c.decorators)),g.hooks={},g.protoAccessControl=y.createProtoAccessControl(c);var f=c.allowCallsToHelperMissing||e;w.moveHelperToHooks(g,"helperMissing",f),w.moveHelperToHooks(g,"blockHelperMissing",f)}},d._child=function(b,c,d,e){if(a.useBlockParams&&!d)throw new u["default"]("must pass block params");if(a.useDepths&&!e)throw new u["default"]("must pass parent depths");return f(g,b,a[b],c,0,d,e)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=v.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=v.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=s.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new u["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?v.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),s.extend(b,g)}return b}function l(a,b){o(a).forEach(function(c){var d=a[c];a[c]=m(d,b)})}function m(a,b){var c=b.lookupProperty;return x.wrapHelper(a,function(a){return s.extend({lookupProperty:c},a)})}var n=c(38)["default"],o=c(12)["default"],p=c(1)["default"],q=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var r=c(4),s=p(r),t=c(5),u=q(t),v=c(3),w=c(9),x=c(42),y=c(32)},function(a,b,c){a.exports={"default":c(39),__esModule:!0}},function(a,b,c){c(40),a.exports=c(20).Object.seal},function(a,b,c){var d=c(41);c(17)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b){"use strict";function c(a,b){if("function"!=typeof a)return a;var c=function(){var c=arguments[arguments.length-1];return arguments[arguments.length-1]=b(c),a.apply(this,arguments)};return c}b.__esModule=!0,b.wrapHelper=c},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])});
this["bcpublic"] = this["bcpublic"] || {};
this["bcpublic"]["helpandsupport"] = this["bcpublic"]["helpandsupport"] || {};
this["bcpublic"]["helpandsupport"]["templates"] = this["bcpublic"]["helpandsupport"]["templates"] || {};

this["bcpublic"]["helpandsupport"]["templates"]["facetsBusinessArea"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-businessarea--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":40},"end":{"line":2,"column":72}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":89},"end":{"line":2,"column":98}}}) : helper)))
          + "\" class=\"facets-businessarea--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":148},"end":{"line":2,"column":156}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsChannels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-channels--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":85},"end":{"line":2,"column":94}}}) : helper)))
          + "\" class=\"facets-channels--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":140},"end":{"line":2,"column":148}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsContentTypes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-cntenttypes--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":71}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":88},"end":{"line":2,"column":97}}}) : helper)))
          + "\" class=\"facets-cntenttypes--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":146},"end":{"line":2,"column":154}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsGroup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-group--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":65}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":82},"end":{"line":2,"column":91}}}) : helper)))
          + "\" class=\"facets-group--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":134},"end":{"line":2,"column":142}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsOffering"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-offering--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":85},"end":{"line":2,"column":94}}}) : helper)))
          + "\" class=\"facets-offering--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":140},"end":{"line":2,"column":148}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsPTopics"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-p-topics--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":85},"end":{"line":2,"column":94}}}) : helper)))
          + "\" class=\"facets-p-topics--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":140},"end":{"line":2,"column":148}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsSubgroup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-subgroup--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":85},"end":{"line":2,"column":94}}}) : helper)))
          + "\" class=\"facets-subgroup--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":140},"end":{"line":2,"column":148}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsTopics"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-topics--item"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":66}}})) != null ? stack1 : "")
          + "\"><a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":83},"end":{"line":2,"column":92}}}) : helper)))
          + "\" class=\"facets-topics--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":136},"end":{"line":2,"column":144}}}) : helper)))
          + "</a></li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return " selected";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsType"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets-type--item "
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":33},"end":{"line":3,"column":64}}})) != null ? stack1 : "")
          + "\">\n"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":8,"column":15}}})) != null ? stack1 : "")
          + "    </li>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        return "disabled";
    },"4":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "            <span data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":39}}}) : helper)))
          + "\" class=\"facets-type--item-link\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":72},"end":{"line":5,"column":80}}}) : helper)))
          + "</span>\n";
    },"6":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "            <a data-facet=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":36}}}) : helper)))
          + "\" class=\"facets-type--item-link\" href=\"#\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":78},"end":{"line":7,"column":86}}}) : helper)))
          + "</a>\n";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "<li class=\"facets-type--item selected\">"
          + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"selectedFacet") || (depth0 != null ? lookupProperty(depth0,"selectedFacet") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"selectedFacet","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":56}}}) : helper)))
          + "</li>\n"
          + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["facetsTypeSelect"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <option value=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"facet") || (depth0 != null ? lookupProperty(depth0,"facet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facet","hash":{},"data":data,"loc":{"start":{"line":2,"column":19},"end":{"line":2,"column":28}}}) : helper)))
          + "\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":38}}}) : helper)))
          + "</option>\n";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"facets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["resultsBhs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <div class=\"results-section--applied-filters\">\n        <span>"
          + ((stack1 = ((helper = (helper = lookupProperty(helpers,"appliedFacetsSummary") || (depth0 != null ? lookupProperty(depth0,"appliedFacetsSummary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"appliedFacetsSummary","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":40}}}) : helper))) != null ? stack1 : "")
          + "</span>\n        <a class=\"facets--reset\" href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"removeAllFiltersUrl") || (depth0 != null ? lookupProperty(depth0,"removeAllFiltersUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"removeAllFiltersUrl","hash":{},"data":data,"loc":{"start":{"line":4,"column":39},"end":{"line":4,"column":62}}}) : helper)))
          + "\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nRemoveAllFilters") || (depth0 != null ? lookupProperty(depth0,"i18nRemoveAllFilters") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nRemoveAllFilters","hash":{},"data":data,"loc":{"start":{"line":4,"column":64},"end":{"line":4,"column":88}}}) : helper)))
          + "</a></span>\n    </div>\n";
    },"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
        var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        }, buffer =
          "        <li>\n    <h4>\n       <a class=\"results-section--item\" href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":11,"column":51},"end":{"line":11,"column":58}}}) : helper)))
          + "#back="
          + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"queryString") : depths[1]), depth0))
          + "\">\n";
        stack1 = ((helper = (helper = lookupProperty(helpers,"hasVideo") || (depth0 != null ? lookupProperty(depth0,"hasVideo") : depth0)) != null ? helper : alias2),(options={"name":"hasVideo","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":14,"column":29}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
        if (!lookupProperty(helpers,"hasVideo")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
        if (stack1 != null) { buffer += stack1; }
        return buffer + "                "
          + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":25}}}) : helper)))
          + "\n            </a>\n    </h4>\n        <p class=\"results-section--description\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"meta-description") || (depth0 != null ? lookupProperty(depth0,"meta-description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meta-description","hash":{},"data":data,"loc":{"start":{"line":17,"column":52},"end":{"line":17,"column":72}}}) : helper)))
          + "</p>\n        </li>\n";
    },"4":function(container,depth0,helpers,partials,data) {
        return "                    <span class=\"results-section--icon-video\"></span>\n";
    },"6":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <li class=\"facets--footer-link\">\n        <button class=\"results-section--toggle-cta ${showToggle}\"><span class=\"btn btn-primary btn-sm facets--none\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nResultsFilter") || (depth0 != null ? lookupProperty(depth0,"i18nResultsFilter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nResultsFilter","hash":{},"data":data,"loc":{"start":{"line":22,"column":116},"end":{"line":22,"column":137}}}) : helper)))
          + "</span><span class=\"btn btn-primary btn-sm facets--active\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nEditFilters") || (depth0 != null ? lookupProperty(depth0,"i18nEditFilters") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nEditFilters","hash":{},"data":data,"loc":{"start":{"line":22,"column":196},"end":{"line":22,"column":215}}}) : helper)))
          + "</span><span class=\"btn btn-primary btn-sm facets--apply\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nProductsFilter") || (depth0 != null ? lookupProperty(depth0,"i18nProductsFilter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nProductsFilter","hash":{},"data":data,"loc":{"start":{"line":22,"column":273},"end":{"line":22,"column":295}}}) : helper)))
          + "</span>\n        </button>\n    </li>\n";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showAppliedFacets") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
          + "\n<ul class=\"results-section--list\" data-totalResults=\""
          + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sectionTotal") || (depth0 != null ? lookupProperty(depth0,"sectionTotal") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sectionTotal","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":69}}}) : helper)))
          + "\">\n"
          + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"documents") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":19,"column":13}}})) != null ? stack1 : "")
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"show2ndFiltersLink") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
          + "</ul>";
    },"useData":true,"useDepths":true});

this["bcpublic"]["helpandsupport"]["templates"]["resultsCountWide"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "<h2 class=\"results-section--title\">\n    "
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nT1") || (depth0 != null ? lookupProperty(depth0,"i18nT1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nT1","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":14}}}) : helper)))
          + "&nbsp;("
          + alias4(((helper = (helper = lookupProperty(helpers,"totalResults") || (depth0 != null ? lookupProperty(depth0,"totalResults") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalResults","hash":{},"data":data,"loc":{"start":{"line":2,"column":21},"end":{"line":2,"column":37}}}) : helper)))
          + ")\n</h2>";
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["resultsPagination"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <a href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"urlPrev") || (depth0 != null ? lookupProperty(depth0,"urlPrev") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlPrev","hash":{},"data":data,"loc":{"start":{"line":2,"column":13},"end":{"line":2,"column":24}}}) : helper)))
          + "\" class=\"results-section--pagination-next is-previous\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nPrev") || (depth0 != null ? lookupProperty(depth0,"i18nPrev") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nPrev","hash":{},"data":data,"loc":{"start":{"line":2,"column":79},"end":{"line":2,"column":91}}}) : helper)))
          + "</a>\n";
    },"3":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "        "
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"current") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":111}}})) != null ? stack1 : "")
          + "\n        "
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"other") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":113}}})) != null ? stack1 : "")
          + "\n";
    },"4":function(container,depth0,helpers,partials,data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "<li><span class=\"results-section--pagination-item-selected\">"
          + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pageNumber") || (depth0 != null ? lookupProperty(depth0,"pageNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageNumber","hash":{},"data":data,"loc":{"start":{"line":7,"column":83},"end":{"line":7,"column":97}}}) : helper)))
          + "</span>";
    },"6":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "<li><a href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"pageUrl") || (depth0 != null ? lookupProperty(depth0,"pageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":34},"end":{"line":8,"column":45}}}) : helper)))
          + "\" class=\"results-section--pagination-item\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"pageNumber") || (depth0 != null ? lookupProperty(depth0,"pageNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageNumber","hash":{},"data":data,"loc":{"start":{"line":8,"column":88},"end":{"line":8,"column":102}}}) : helper)))
          + "</a>";
    },"8":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <a href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"urlNext") || (depth0 != null ? lookupProperty(depth0,"urlNext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlNext","hash":{},"data":data,"loc":{"start":{"line":13,"column":13},"end":{"line":13,"column":24}}}) : helper)))
          + "\" class=\"results-section--pagination-next\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nNext") || (depth0 != null ? lookupProperty(depth0,"i18nNext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nNext","hash":{},"data":data,"loc":{"start":{"line":13,"column":67},"end":{"line":13,"column":79}}}) : helper)))
          + "</a>\n";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showPrev") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "")
          + "\n<ul class=\"results-section--pagination\">\n"
          + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"documents") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
          + "</ul>\n\n"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showNext") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["resultsPaginationMobile"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <div class=\"results-section--pagination-mobile-container is-first\">\n"
          + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"showNext") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":15}}})) != null ? stack1 : "")
          + "    </div>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "            <a href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"urlNext") || (depth0 != null ? lookupProperty(depth0,"urlNext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlNext","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":32}}}) : helper)))
          + "\" class=\"btn btn-primary results-section--mobile-button is-next-button\">"
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nNext") || (depth0 != null ? lookupProperty(depth0,"i18nNext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nNext","hash":{},"data":data,"loc":{"start":{"line":4,"column":104},"end":{"line":4,"column":116}}}) : helper)))
          + "</a>\n";
    },"4":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <div class=\"results-section--pagination-mobile-container is-second\">\n"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showPrev") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
          + "        "
          + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"i18nPage") || (depth0 != null ? lookupProperty(depth0,"i18nPage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"i18nPage","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":20}}}) : helper)))
          + "&nbsp;2\n"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showNext") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":16,"column":15}}})) != null ? stack1 : "")
          + "    </div>\n";
    },"5":function(container,depth0,helpers,partials,data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "            <a href=\""
          + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"urlPrev") || (depth0 != null ? lookupProperty(depth0,"urlPrev") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"urlPrev","hash":{},"data":data,"loc":{"start":{"line":11,"column":21},"end":{"line":11,"column":32}}}) : helper)))
          + "\" class=\"results-section--mobile-button is-prev\">&lt;</a>\n";
    },"7":function(container,depth0,helpers,partials,data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "            <a href=\""
          + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"urlNext") || (depth0 != null ? lookupProperty(depth0,"urlNext") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"urlNext","hash":{},"data":data,"loc":{"start":{"line":15,"column":21},"end":{"line":15,"column":32}}}) : helper)))
          + "\" class=\"results-section--mobile-button is-next\">&gt;</a>\n";
    },"9":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "    <div class=\"results-section--pagination-mobile-container is-other\">\n        <a href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"urlFirst") || (depth0 != null ? lookupProperty(depth0,"urlFirst") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlFirst","hash":{},"data":data,"loc":{"start":{"line":21,"column":17},"end":{"line":21,"column":29}}}) : helper)))
          + "\" class=\"results-section--mobile-button is-first\">&lt;&lt;</a>\n        <a href=\""
          + alias4(((helper = (helper = lookupProperty(helpers,"urlPrev") || (depth0 != null ? lookupProperty(depth0,"urlPrev") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlPrev","hash":{},"data":data,"loc":{"start":{"line":22,"column":17},"end":{"line":22,"column":28}}}) : helper)))
          + "\" class=\"results-section--mobile-button is-prev\">&lt;</a>\n        "
          + alias4(((helper = (helper = lookupProperty(helpers,"i18nPage") || (depth0 != null ? lookupProperty(depth0,"i18nPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18nPage","hash":{},"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":23,"column":20}}}) : helper)))
          + "&nbsp;"
          + alias4(((helper = (helper = lookupProperty(helpers,"currentPage") || (depth0 != null ? lookupProperty(depth0,"currentPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentPage","hash":{},"data":data,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":41}}}) : helper)))
          + "\n"
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showNext") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
          + "    </div>\n";
    },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"first") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"second") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
          + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"other") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "");
    },"useData":true});

this["bcpublic"]["helpandsupport"]["templates"]["resultsTabTitle"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return alias4(((helper = (helper = lookupProperty(helpers,"sectionTotal") || (depth0 != null ? lookupProperty(depth0,"sectionTotal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionTotal","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":16}}}) : helper)))
          + "&nbsp;"
          + alias4(((helper = (helper = lookupProperty(helpers,"sectionTitle") || (depth0 != null ? lookupProperty(depth0,"sectionTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionTitle","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":38}}}) : helper)));
    },"useData":true});
/**
 * @fileOverview Context resolver helpers
 * @author: Max Cherniavskyi <maxim.chernyavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

(function($) {
    /**
     * Key to read the context value from the localstorage
     * @type {String}
     */
    var lsKey = 'clientContext';

    /**
     * Combine various resolvers
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers = {};

    /**
     * Cookie matching helper
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers.cookieResolver = {
        /**
         * Resolve cookie to a segment based on the config
         * @param  {String}     key     Config property name
         * @param  {Object}     config  Config for the data
         * @return {Promise}            Segment name
         */
        resolve: function(key, config) {
            var q = $.Deferred(),
            // Go through each segment and resolve the first matched element
            matchedSegments = $.grep(config, function(v) {
                // Implementation details are here
                // https://extranet.akqa.com/display/BARCHS/Segment+Resolve+component
                return document.cookie.indexOf(v.evaluation) > -1;
            });

            if (matchedSegments.length > 0) {
                // If there are matched segments, select the first one
                q.resolve(this.output(key, matchedSegments[0].segmentName));
            } else {
                // No matched segments
                q.resolve(this.output(key, null));
            }

            return q;
        },

        /**
         * Generate segment state
         * @param  {String} key   Key to resolve
         * @param  {String} value Resolved value
         * @return {Object}       Generated object
         */
        output: function(key, value) {
            return {
                segment: key,
                value: value
            };
        }
    };

    bcpublic.helpandsupport.contextHelpers.contextFactory = {
        /**
         * Default creator. Noop
         * @return {Deferred} A promise resolved with an empty object
         */
        creator: function() {
            var q = $.Deferred();
            q.resolve({});
            return q;
        },

        /**
         * Invoke creator to generate a context object
         * @return {Deferred} A promise with a context object
         */
        generate: function() {
            return this.creator();
        },

        /**
         * Apply a strategy to generate the context object
         * @param {Function} strategy A strategy to apply
         */
        setStrategy: function(strategy) {
            this.creator = strategy;
        }
    };

    /**
     * Context property names
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS = {
        CUSTOMER_SEGMENT: 'customerSegment',
        NAV_SEGMENT: 'navigationSegment',
        SECURE: 'secure',
        TIME: 'currentTime',
        BMB: 'bmbSmartCall',
        WEBCHAT_ENABLED: 'webchatEnabled',
        WEBCHAT_SUPPORTED: 'supportsWebchat',
        TIME_OPTION: 'timeOption'
    };

    /**
     * Get time from the server
     * @return {Promise} Promise of the time object
     */
    bcpublic.helpandsupport.contextHelpers.getServerTime = function() {
        var timeq = $.Deferred();

        $.ajax({
            url: '/services/componentlibrary/time.json',
            cache: false
        }).done(function(response) {
            timeq.resolve({
                segment: 'time',
                value: response.time
            });
        }).fail(function() {
            timeq.resolve({
                segment: 'time',
                value: ''
            });
        });

        return timeq;
    };


    /**
     * Strategies to generate the context object
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers.contextFactoryStrategies = {
        /**
         * Read data from localStorage
         * @return {Promise} Resolved when data is available
         */
        useLocalStorage: function() {
            var q = $.Deferred(),
                CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS,
                context = JSON.parse(window.localStorage.getItem(lsKey)),
                resolvedObj = {},
                // Nulls are stored as strings in html
                parseNulls = function(v) {
                    return v === 'null' ? null : v;
                };

            resolvedObj[CP.CUSTOMER_SEGMENT] = parseNulls(context.segments['cookieSegment']);
            resolvedObj[CP.NAV_SEGMENT] = parseNulls(context.segments['cookieNav']);
            resolvedObj[CP.SECURE] = parseNulls(context.segments['cookieSecure']);
            resolvedObj[CP.TIME] = parseNulls(context.segments['time']);
            resolvedObj[CP.TIME_OPTION] = parseNulls(context.timeOption);

            q.resolve(resolvedObj);

            return q;
        },

        /**
         * Put the default values into localStorage
         * @return {Promise} Resolved when data is available
         */
        useLocalStorageDefaults: function() {
            var q = $.Deferred(),
                resolvedObj = {},
                CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS;

            bcpublic.helpandsupport.contextHelpers.getServerTime()
                .then(function(time) {
                    resolvedObj[CP.CUSTOMER_SEGMENT] = null;
                    resolvedObj[CP.NAV_SEGMENT] = null;
                    resolvedObj[CP.SECURE] = 'NoSecurePin';
                    resolvedObj[CP.TIME] = time.value;

                    q.resolve(resolvedObj);
                });

            return q;
        },

        /**
         * Read segments from cookies and real data sources
         * @return {Promise} With a
         */
        useCookies: function() {
            /**
             * Config comes from the root page tabs
             * @type {Object}
             */
            var rootConfig = bcpublic.helpandsupport.rootConfig || [],

            /**
             * List of deferreds. Context is resolved when all of them are.
             * @type {Array}
             */
            deferredList = [],

            /**
             * Segments resolved with appropriate naming
             * @type {Deferred}
             */
            resolvedSegments = $.Deferred();

            // Resolve cookies
            $.each(rootConfig, function(key, config) {
                // Set a cookie resolver
                var type = bcpublic.helpandsupport.contextHelpers.cookieResolver;
                // Add a deferred to the list
                deferredList.push(type.resolve(key, config));
            });

            // Resolve time
            deferredList.push(bcpublic.helpandsupport.contextHelpers.getServerTime());

            $.when.apply($, deferredList)
            .then(function(/*q1,q2...qn*/) {
                var segments = {},
                    CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS,
                    resolvedObj = {};

                // Assemble an array of arguments into an object
                $.each(arguments, function(i, v) {
                    segments[v.segment] = v.value;
                });

                // Map config properties to the expected context properties
                resolvedObj[CP.CUSTOMER_SEGMENT] = segments['cookieSegment'];
                resolvedObj[CP.NAV_SEGMENT] = segments['cookieNav'];
                resolvedObj[CP.SECURE] = segments['cookieSecure'];
                resolvedObj[CP.TIME] = segments['time'];
                resolvedObj[CP.WEBCHAT_ENABLED] = segments['cookieWebchat'];

                resolvedSegments.resolve(resolvedObj);
            });

            return resolvedSegments;
        }
    };

    /**
     * Strategy selector
     * @return {Function} Selected strategy
     */
    bcpublic.helpandsupport.contextHelpers.chooseStrategy = function() {
        var strats = bcpublic.helpandsupport.contextHelpers.contextFactoryStrategies,
            strategyMap = {
                'ls': strats.useLocalStorage,
                'cookies': strats.useCookies,
                'lsDefaults': strats.useLocalStorageDefaults
            };

        // If publish
        if (bcpublic.helpandsupport.global.isRunModePublish()) {
            return strategyMap['cookies'];
        }

        // If LS not supported / empty
        if (!Modernizr.localstorage) {
            return strategyMap['cookies'];
        }

        var context = window.localStorage.getItem(lsKey);

        // If item is not available,
        // Use the defaults
        if (context === null) {
            return strategyMap['lsDefaults'];
        }

        try {
            context = JSON.parse(context);
        } catch (e) {
            context = {};
        }
        // useLocalStorage is a key to check if to use localStorage
        if (typeof context === 'object' && context.useLocalStorage === false) {
            return strategyMap['cookies'];
        }

        // If use custom LS
        // useLocalStorage is a key to check if to use localStorage
        if (typeof context === 'object' && context.useLocalStorage === true) {

            var differentHash = false;

            if (String.prototype.hashCode){
                var hash = JSON.stringify(document.location.pathname).hashCode();

                if (context && context.timeOptionAgainstGroup && context.timeOptionAgainstGroup !== hash){
                    differentHash = true;
                }
            }

            if (differentHash === true){
                return strategyMap['lsDefaults'];
            }

            return strategyMap['ls'];
        }

        return strategyMap['cookies'];
    };
})(jQuery);
/**
 * @fileOverview Adjust answer page content.
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* Setup answer page content min height
*
* @class AnswerPage
* @constructor
*/
bcpublic.helpandsupport.AnswerPage = (function($) {

    /**
     * Container for sampling and setting min height
     * @type {jQuery}
     */
    var $content = $('.par-content'),

    /**
     * Minimum height for mobile
     * @type {Number}
     */
    headerOffset = 655,

    /**
     * Set min-height to complement headerOffset value
     */
    adjustHeight = function() {
        var height, top, diff;

        $content.css('min-height', 0);

        height = $content.height();
        top = $content.offset().top;
        diff = headerOffset - (top + height);

        if (diff > 0 &&
            (($('html').hasClass('lt-ie9') && $(window).width() > 1000) || bcpublic.helpandsupport.global.isXLargeViewportOrWider())) {
                $content.css('min-height', diff + height - 20);
        }
    },

    /**
     * Checks if the provided path is an internal by verifing
     *     * the first character is a slash
     *     * the second character is not a slash
     * @param  {String}  path Path to check
     * @return {Boolean}      True if the path is valid
     */
    isValidRedirectPath = function(path) {
        var firstChar = path.substring(0, 1),
            secondChar = path.substring(1, 2);

        return firstChar === '/' && secondChar !== '/';
    },

    setBackToResults = function() {
        var $backToResults = $('.answer--return-band'),
            hashFragment = bcpublic.helpandsupport.global.getHashFragmentParamObject(document.location.href),
            backPath;

        if ($backToResults.length === 0) {
            return;
        }

        // Check if the path is provided in the fragment
        if (!hashFragment['back']) {
            return;
        }

        // Decode
        backPath = decodeURIComponent(hashFragment['back']);


        // Validate URL: shall be internal only
        if (!isValidRedirectPath(backPath)) {
            return;
        }

        backPath = encodeURI(backPath);

        $backToResults.removeClass('is-inactive');
        $backToResults.find('.answer--return-link').attr('href', backPath);
    },

    /**
     * Init
     */
    init = function() {
        if ($content.length) {
            $(window).smartresize(function() {
                adjustHeight();
            }, 2000);
            adjustHeight();
        }

        setBackToResults();
    };

    $(document).ready(function() {
        init();
    });
})(jQuery);

/*global Modernizr*/
/**
 * @fileOverview Specific JS for the Instant Answers page
 * @author: Gurmukh Panesar <gurmukh.panesar@akqa.com>
 * @namespace bcpublic.helpandsupport.instantanswer
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* If the instant answer has content in four columns, in a mobile view, ensure the content is 
* shown one at a time and can be swipeable
* @class instantanswer
*/
bcpublic.helpandsupport.instantanswer = (function($) {
    'use strict';

    var $instantAnswer = $('#instant-answer'),


        /**
         * If only 2 touts shown, update DOM to reflect this
         */
        checkTotalTouts = function() {
            var totalBoxedContent = $instantAnswer.find('.tout-c').length;

            if (totalBoxedContent === 2) {
                $instantAnswer.addClass('instant-answer--2');
            }
        },
        /**
         * Setup the swipeable panel with swipe gestures
         * @return null
         */
        setupSwipeable = function() {
            var $swipe = $instantAnswer.find('.swipe'),
                totalBoxedContent = $instantAnswer.find('.tout-c').length,
                swipeableClass = 'swipeable swipeable--middle';


            // Only for tablet/mobile view
            if (Modernizr.touch && bcpublic.helpandsupport.global.isMediumViewportOrNarrower()) {

                // Add swipeable class if tout exists
                if (totalBoxedContent > 0) {
                    if (totalBoxedContent === 2) {
                        swipeableClass += ' swipeable-2';
                    }
                    
                    $instantAnswer.addClass(swipeableClass);
                }                

                if ($swipe.length === 0) {
                    $swipe = $('.tout-c').addClass('swipe-panel').wrapAll('<div class="swipe slide-1"></div>');
                }

                $swipe.swipeable({
                    parent: $instantAnswer,
                    initSlide: 1,
                    swipe1Panel: true
                });
            }
            else {
                $instantAnswer.removeClass('swipeable').find('.swipe').swipeable({
                    destroy: true
                }).removeClass('swipe');
            }
        },
        /**
         * Sets up toggle to show and hide the instant answer
         */
        showHideInstantAnswer = function() {

            var $introAnswer = $instantAnswer.find('.instant-answer--answer'),
                animateWithMaxHeight = false,
                firstTime = true;

            // If introAnswer contains img's or videos, then animate with maxheight, else get height of panel
            if ($introAnswer.find('.responsive-image, script').length > 0) {
                $introAnswer.addClass('instant-answer--media');
                animateWithMaxHeight = true;
            }

            // Only store height for text based answers
            else {
                $introAnswer.data('height', $introAnswer.height());
            }

            $instantAnswer.find('.instant-answer--toggle').on('click', function() {

                if ($instantAnswer.is('.instant-answer--more')) {
                    if (!animateWithMaxHeight) {
                        $introAnswer.attr('style', '');
                    }
                }
                else {
                    if (!animateWithMaxHeight) {
                        $introAnswer.height($introAnswer.data('height'));
                    }
                }

                $instantAnswer.toggleClass('instant-answer--more').toggleClass('instant-answer--less');

                setTimeout(function(){

                    if (firstTime){
                        if ($introAnswer.height() < 30){
                            $introAnswer.css({
                                '-webkit-transition': 'none',
                                'transition:': 'none'
                            });
                        }
                    }

                }, 2000);


            });

            setInitState();

        },
        /**
         * Set state of instant answer to open or closed dependant on whether results are off screen
         */
        setInitState = function() {
            var $results = $('.results-section--title'),
                windowHeight = bcpublic.helpandsupport.global.getScreenHeight();

            if ($results.offset().top + $results.height() > windowHeight) {
                // If help and products off the screen, then hide instant answer
                $instantAnswer.addClass('ready');
            }
        },

        /**
         * An as-yet-unidentified bug on the server causes the Instant Answer back-to-results URL to be url-encoded twice when we call the JSP function hs:encodeFragment().
         * 
         * To avoid this, we write the URL out unencoded into a data attribute, so that we can encode it here in the JavaScript instead.
         * JS approach is acceptable, because Back to Results button on answer pages is generated with JS too.
         * https://extranet.akqa.com/display/BARCHS/Client-Side+Page+Assembly+Approach
         */
        addBackToResultsHash = function() {
            var $cta = $instantAnswer.find('[data-back-to-results-url]');

            $cta.each(function () {
                var $this = $(this),
                    encodedUrl = encodeURIComponent($this.attr('data-back-to-results-url')),
                    oldHref = $this.attr('href'),
                    newHref = oldHref + '#back=' + encodedUrl;

                $this.attr('href', newHref);
            });
        },

        /**
         * Init the swipeable panels
         * @return null
         */
        init = function() {
            if ($instantAnswer.length > 0) {
                checkTotalTouts();
                setupSwipeable();
                showHideInstantAnswer();
                addBackToResultsHash();

                $(window).smartresize(function() {
                    setupSwipeable();
                }, 2000);
            }
        };

    $(document).ready(function() {
        init();
    });

})(jQuery);
/*global Modernizr*/
/**
 * @fileOverview Provides functionality for the browse component.
 * @author: Gurmukh Panesar <gurmukh.panesar@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* Updates
*
* @class browse
* @constructor
*/
bcpublic.helpandsupport.browse = (function($) {
    'use strict';

    var $browse = $('.browse-c'),
        activeClass = 'browse--active',
        parentClass = 'browse-parent',
        $swipeArea = $browse.find('.browse-wrapper'),

        bindEvents = function() {
            $browse.on('click', '.' + parentClass + ' > a', function(e) {
                var $this = $(this),
                    $browseParent = $this.parents('.browse-parent');

                e.preventDefault();

                if ($browseParent.is('.' + activeClass)) {
                    // Close
                    $browseParent.removeClass(activeClass);
                    $this.siblings().find('a').attr('tabindex', -1);
                }
                else {
                    // Open
                    $browseParent.addClass(activeClass);
                    $this.siblings().find('a').removeAttr('tabindex');
                }

                bcpublic.helpandsupport.global.ariaCollapsible(this);
            });

            // Make child links unfocusable if user is tabbing through top level elems
            $browse.on('focus', '.' + parentClass + ' > a', function() {
                var $this = $(this);

                if (!$this.parents('.' + parentClass).is('.' + activeClass)) {
                    $(this).siblings().find('a').attr('tabindex', -1);
                }
            });

            $(window).smartresize(function() {
                swipePanels();
            }, 2000);
        },

        collapseActive = function() {
            var deferred = $.Deferred(),
                open = $browse.find('.browse--active'),
                body = $('html, body'),
                offset = $('.browse-wrapper').offset().top;

            if (open.length) {
                open.removeClass('browse--active');
                $(body).animate({scrollTop:offset}, 600, 'swing', function() { 
                   deferred.resolve();
                });
            } else {
                deferred.resolve();
            }
            
            return deferred;
        },

        swipePanels = function() {
            if (Modernizr.touch && bcpublic.helpandsupport.global.isMediumViewportOrNarrower()) {
                $swipeArea.swipeable({
                    parent: $browse,
                    beforeSwipe: collapseActive,
                    swipe1Panel: true
                });
            }
        },

        /**
         * Sync heights of all panels, but if one is open, ignore that
         */
        syncPanelHeights = function() {

            bcpublic.helpandsupport.global.syncHeights($browse.find('.browse-col'), {
                    maxHeight: true
                }, function() {
                    // If a panel is open, assume it's longer, don't compare its height
                    if ($(this).find('.browse-parent.browse--active').length > 0) {
                        return false;
                    }
					return true;
                }
            );
        },

        init = function() {
            if ($browse.length > 0) {
                bindEvents();
                swipePanels();
//                syncPanelHeights();
            }
        };

    init();

})(jQuery);
//$('.browse-wrapper .browse-col.swipe-panel').css('min-height','auto');
/**
 * @fileOverview Expander component
 * @author: Gurmukh Panesar <gurmukh.panesar@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.expander = (function($) {

    var $expander = $('.expander'),
        $expanderCTA = $expander.find('.expander-toggle'),
        $expanderContent = $expander.find('.expander-content');


    /**
     * On viewport change, update toggle CTA to be hidden or shown
     * and update expander height if closed
     */
    function orientationChange() {

        var isExpanderOpen = ($expander.is('.expander--open')) ? true : false,
            isMediumViewportOrNarrower = bcpublic.helpandsupport.global.isMediumViewportOrNarrower(),
            $expanderContent = $expander.find('.expander-content');

            // On page load if in narrow view, set init height of panel
            if (isMediumViewportOrNarrower) {

                // setTimeout as Android doesnt calculate height correctly otherwise
                setTimeout(function() {
                    $expanderContent.height($expander.find('.expander-content--column').first().outerHeight());
                }, 0);
            }

            // Remove fixed height from previous orientation
            else {
                $expanderContent.removeAttr('style');
            }

    }

    /**
     * On page load, bind events
     */
    function bindEvents() {
        // Open / Close expander
        $expanderCTA.on('click', 'button', function() {
            $expander.toggleClass('expander--open');
            bcpublic.helpandsupport.global.ariaCollapsible($expander[0]);
        });
        // Notify that it is ready to be clicked
        $expanderCTA.addClass('expander--ready');

        $expanderContent.on('transitionend', function() {
            // If larger breakpoint, and expander closes, scroll up to show it
            if (!$expander.is('.expander--open') && !bcpublic.helpandsupport.global.isMediumViewportOrNarrower() && !bcpublic.helpandsupport.global.isVisible($expanderCTA, 0, true)) {
                $(window).scrollTop($expanderCTA.offset().top);
            }
            else if ($expander.is('.expander--open')) {
                $expander.addClass('expander--open-ready');
            }
        });
    }

    /**
     * Ensure panels are tabbed through correctly when expander is active
     */
    function keyboardTabbing() {

        // No need to setup tabbing on touch devices
        if (Modernizr.touch) {
            return false;
        }

        var hiddenPanels = $expanderContent.find('> *:not(:first-child)'),
            makeHiddenPanelsUnTabbable = function() {
                hiddenPanels.find('a').attr('tabindex', -1);
            };

        $expanderCTA.on('keypress', 'button', function(e) {

            var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;

            // Enter key
            if (charCode === 13) {

                // Expander is to close
                if ($expander.is('.expander--open')) {
                    $expanderContent.find('a').first().focus();
                    makeHiddenPanelsUnTabbable();
                }
                
                // Expander is to open
                else {
                    hiddenPanels.find('a').removeAttr('tabindex').first().focus();
                }
            }
        });

        makeHiddenPanelsUnTabbable();
    }
    
    function syncPanelHeights() {
      bcpublic.helpandsupport.global.syncHeights($('.popular-tile').find('ul.popular-tile-links'), {
        maxHeight: true
      });
    }

    /**
     * init
     */
    function init() {

        if ($expander.length > 0 && !$expander.is('.expander--disabled')) {
            
            bindEvents();
            
            // Cater for orientation change for portable devices
            if (typeof window.orientation === 'number') {
                window.addEventListener('orientationchange', function() {
                    setTimeout(function() {
                        orientationChange();
                    },500);
                });
            }
            else {
                $(window).smartresize(function() {
                    orientationChange();
                }, 2000);
            }

            orientationChange();
            keyboardTabbing();
          syncPanelHeights();
        }
    }

    $(document).ready(function() {
        init();
    });
})(jQuery);

/**
 * @fileOverview Category page
 * @author: Gurmukh Panesar <gurmukh.panesar@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.category = (function($) {

    var categoryTiles;

    /**
     * On page load, move the tiles below results if on narrower than medium
     */
    function moveHeader() {
        var $document = $(document);

        if (bcpublic.helpandsupport.global.isMediumViewportOrNarrower()) {
            moveTilesToBottom();
        }

        // Setup event listeners for when window size changed
        $document.on('breakpoint-small', moveTilesToBottom);
        $document.on('breakpoint-medium', moveTilesToBottom);
        $document.on('breakpoint-large', moveTilesToTop);
        $document.on('breakpoint-xlarge', moveTilesToTop);
    }

    function moveTilesToBottom() {
        $('.category-tiles--narrow').append(categoryTiles); 
    }

    function moveTilesToTop() {
        $('.category-tiles--wide').append(categoryTiles);
    }

    /**
     * Ensure carousel resets when changing breakpoints
     */
    function bindEvents() {
        var $searchResults = $('#search-results');
        $(document).on('breakpoint-medium', resetPanels);
        $(document).on('breakpoint-small', resetPanels);

        // Scrolling to the search results section
        if ($searchResults.length > 0) {
            $('.js-find-faq').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    'scrollTop': $searchResults.offset().top
                });
            });
        }
    }

    function syncHeights() {
        // Sync heights for all panels except non touch mobile where they are vertically stacked
        if (bcpublic.helpandsupport.global.isSmallViewportOrNarrower() && !Modernizr.touch) {
            categoryTiles.find('.category-panel').height('auto');
        }
        else {
            bcpublic.helpandsupport.global.syncHeights(categoryTiles.find('.category-panel'), {
                resetHeights: true
            });            
        }

    }

    /**
     * Destroy existing swipeable panel, reset with new values and move to slide 1
     */
    function resetPanels() {
        destroySwipeablePanels();
        setupSwipeablePanels({
            initSlide: 1
        });        
    }

    /**
     * Call swipeable destroy 
     */
    function destroySwipeablePanels() {
        categoryTiles.swipeable({
            destroy: true
        });
    }

    /**
     * Setup panels to be swipeable
     * @param  {Object} options Options to init swipeable
     */
    function setupSwipeablePanels() {
        categoryTiles.swipeable({
            initSlide: 1
        });
    }

    /**
     * Init components on category page
     */
    function init() {
        moveHeader();
        setupSwipeablePanels();
        bindEvents();
        syncHeights();

        $(window).smartresize(function() {
            syncHeights();
        }, 500);
    }

    // Run only if on category page
    $(document).ready(function() {
        categoryTiles = $('.category-tiles');

        if (categoryTiles.length > 0) {
            init();            
        }
    });
})(jQuery);
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.contactUsText = (function($) {

  function addTextGridWrapper(div) {
    $(div).wrap('<div class="wrapper"><div class="container-fluid"><div class="row"><div class="col-md-8 col-md-offset-2"></div></div></div></div>');
  }

  function addPromoGridWrapper(div) {
    $(div).wrap('<div class="container-fluid"><div class="row"><div class="col-xs-12"></div></div></div>');
  }

  function addContentGroupWrapper(div) {
    if ($('.contact-directory-group .wrapper').length === 0) {
      $(div).each(function () {
        $(this).wrap('<div class="wrapper"></div>');
      });
    }
  }

  function addContentDirectoryFooterWrapper(div) {
    var contactGroupWrapper = $('.contact-group .wrapper .container-fluid'),
        firstWrapper = $('.content-directory-footer .wrapper'),
        extraWrapper = $('.content-directory-footer .extra-wrapper');

    if (contactGroupWrapper.length %2 !== 0) {
      $(div).each(function () {
        $(this).addClass('wrapper');
      });
      if (extraWrapper.length === 0) {
        firstWrapper.first().before('<div class="extra-wrapper"></div>');
      }
    } else {
      $(div).each(function () {
        $(this).addClass('wrapper');
      });
    }

    if (contactGroupWrapper.length === 0) {
      if (extraWrapper.length === 0) {
        firstWrapper.first().before('<div class="extra-wrapper"></div>');
      }
    }
  }

  function removeExtraWrapper() {
    var contactGroupWrapper = $('.contact-group .wrapper .container-fluid'),
        firstWrapper = $('.content-directory-footer .wrapper'),
        extraWrapper = $('.content-directory-footer .extra-wrapper');

    if (contactGroupWrapper.length %2 !== 0) {
      if (extraWrapper.length === 1) {
        extraWrapper.remove();
      }
    } else {
      if (extraWrapper.length === 0) {
        firstWrapper.first().before('<div class="extra-wrapper"></div>');
      }
    }
  }

  function addContentDirectoryEqualHeights(el) {
    var parentEl = $('.content-directory-footer .row');

    parentEl.find(el).css('height', 'auto');

    if (window.innerWidth > 768) {
      parentEl.each(function(){
        var highestBox = 0;

        $(this).find(el).each(function(){
          if($(this).height() > highestBox){
            highestBox = $(this).height();
          }
        });

        $(this).find(el).height(highestBox);
      });
    }
  }

  function addHyperlinkAccessibilityAttributes(hyperlink) {
    hyperlink.each(function () {
      $(this).attr("aria-label", $(this).text() + " - Opens in a new window");
    })
    hyperlink.attr("title", "Opens in a new window");
  }

  function openSingleAccordion() {
    if ( ($('.contact-group--channels-wrapper .accordion-wrapper').length === 1) && ($('.contact-group--channels-wrapper .channel-cta').length === 0) ) {
      $('.contact-group--channels-wrapper .accordion-wrapper .accordion-control h3').click();
    }

    if ( ($('.contact-group--content-wrapper .accordion-wrapper').length === 1) && ($('.contact-group--content-wrapper .channel-cta').length === 0) ) {
      $('.contact-group--content-wrapper .accordion-wrapper .accordion-control h3').click();
    }
  }

  function init() {
    if ($('.contact-directory-group .container-fluid')) {
      addContentGroupWrapper($('.contact-directory-group .container-fluid'));
    }

    if ($('.content-directory-footer .section')) {
      if ($('.content-directory-footer .section.text')) {
        addTextGridWrapper($('.content-directory-footer .section.text'));
      }

      if ($('.content-directory-footer .promo-wrapper.promo-wrapper-four')) {
        addPromoGridWrapper($('.content-directory-footer .promo-wrapper.promo-wrapper-four'));
      }

      addContentDirectoryFooterWrapper($('.content-directory-footer .column.section'));

      addContentDirectoryEqualHeights('.promo-content');
    }

    if($('.content-directory-footer .section.text a[target="_blank"]')){
      addHyperlinkAccessibilityAttributes($('.content-directory-footer .section.text a[target="_blank"]'));
    }

    if ( $('.contact-group--channels-wrapper .accordion-wrapper').length > 0 || $('.contact-group--content-wrapper .accordion-wrapper').length > 0 ) {
      openSingleAccordion();
    }
  }

  $(document).ready(function() {
    init();

    $(window).smartresize(function() {
      if ($('.content-directory-footer .section')) {
        addContentDirectoryEqualHeights('.promo-content');
      }
    }, 100);
  });

  $(window).load(function() {
    removeExtraWrapper();
  });

  return {
    init: init,
    removeExtraWrapper: removeExtraWrapper
  };
})(jQuery);
/**
 * @fileOverview Provides functionality for the promo.
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.promo = (function ($) {
    'use strict';

    var fixLastChild = function () {
            if ($('html').hasClass('lt-ie9')) {
                $('.childrens-last-child > :last-child').addClass('last-child');
            }
        },

        cleanFromDuplicates = function (arr) {
            var obj = {};
            for (var i = 0; i < arr.length; i++) {
                var str = arr[i];
                obj[str] = true;
            }
            return Object.keys(obj);
        },

        buildBalanced = function (columns) {
            var tallestColumn = 0;
            $(columns).height('auto');
            $(columns).each(function () {
                var currentHeight = $(this).height();
                if (currentHeight > tallestColumn) {
                    tallestColumn = currentHeight;
                }
            });
            $(columns).height(tallestColumn);
        },

        manageColumnsBalance = function (columns) {
            var columnsArray = [];
            $(columns).each(function () {
                var currentPosition = $(this).position().top;
                $(this).attr('data-position', currentPosition);
                columnsArray.push(currentPosition);
            });
            columnsArray = cleanFromDuplicates(columnsArray);
            for (var i = 0; i < columnsArray.length; i++) {
                var currentLine = $(columns).parent().find('>div[data-position="' + columnsArray[i] + '"]');
                buildBalanced(currentLine);
            }
        },

        syncPanelHeights = function () {
          bcpublic.helpandsupport.global.syncHeights($('.homepage-topic').find('.promo-content p'), {
            maxHeight: true
          });
          
          if ($('.promotion.homepage-topic .promo-content.promo-btn-double').length > 0) {
            $('.promotion.homepage-topic .promo-content').css('padding-bottom','162px')
          }
        },

        init = function () {
            $(function () {
                fixLastChild();
                manageColumnsBalance($('.incontainer-promo .nest .cross-sell-comp'));
                $(window).resize(function () {
                    manageColumnsBalance($('.incontainer-promo .nest .cross-sell-comp'));
                });
                syncPanelHeights();
            });
        };

    init();

})(jQuery);
/**
 * @fileOverview Provides functionality for Faq Carousel Component
 * @author: Remi Rynkiewicz <remi.rynkiewicz@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};


bcpublic.helpandsupport.faqCarousel = (function($) {
    'use strict';

    var 
        $window,
        $el,
        $nav,
        $itemsWrapper,
        $itemsList,
        $originalItems,
        originalItemsCount,
        buffer,
        selectorCarouselWrapper = '.faq-carousel-component-wrapper',
        selectorCarousel = '.faq-carousel-component',
        itemWidth,
        activeItem,
        currentCount,
        moveOffset,
        xDown,
        yDown,
        scrollingRequired,
        oneTimeEventsExecuted = false,

        restartVars = function(){
            
            scrollingRequired = false,
            buffer = 2;
            activeItem = 0;
            moveOffset = 0;
            xDown = null;
            yDown = null;
        },

        cacheElements = function() {

            restartVars();
            
            $window             = $(window);
            $el                 = $(selectorCarousel);
            $nav                = $el.find('.nav');
            $itemsWrapper       = $el.find('.links-wrapper');
            $itemsList          = $itemsWrapper.find('>ul');
            $originalItems      = $itemsList.find('> li');
            originalItemsCount  = $originalItems.length;
            itemWidth           = $itemsWrapper.width();

            if (originalItemsCount > 1){
                scrollingRequired = true;
            }

            $originalItems.each(function(index){
                $(this).attr('data-index', index);
            });
        },

        /**
        * Binds events to the necessary DOM elements
        *
        * @method  bindEvents
        */
        bindEvents = function() {

            if (oneTimeEventsExecuted === false){
                onceTimeEvents();
                oneTimeEventsExecuted = true;
            }

            if (scrollingRequired){
                bindScrollingEvents();
            }

        },

        bindScrollingEvents = function(){

            $nav.off('click', 'span');
            $nav.off('keypress', 'span');
            $el.off('scroll');

            $nav.on('click', 'span', function() {

                var direction = $(this).hasClass('prev') ? 'left' : 'right';
                $el.trigger('scroll', direction );
            });

            $nav.on('keypress', 'span', function(event){
                if (event.keyCode === 13){
                    var direction = $(this).hasClass('prev') ? 'left' : 'right';
                    $el.trigger('scroll', direction );
                }
            });

            $el.on('scroll', function(e, direction){
                
                if (direction === 'left'){
                    newItemInThe('back');
                    scroll('right', 1, true);

                } else if (direction === 'right'){
                    newItemInThe('front');
                    scroll('left', 1, true);
                }

                scroll(direction);
            });
        },

        onceTimeEvents = function(){
            $window.smartresize(function() {
                
                sortDimensions();
                
                setTimeout(function(){
                    if (scrollingRequired){
                        scroll();
                    }
                });

            }, 100);


            $window.on('new-faq-carousel', function(e, html){
                restartComponent(html);
            });

            if ($el && $el[0] && document.addEventListener){
                $el[0].addEventListener('touchstart', handleTouchStart, false);
                $el[0].addEventListener('touchmove', handleTouchMove, false);
            }

        },

        restartComponent = function(html) {
            var $wrapper = $(selectorCarouselWrapper),
                $outerWrapper = $wrapper.closest('.wrapper');

            if (!html) {
              // The detail page doesn't have an FAQ carousel
              $wrapper.empty();
              $outerWrapper.remove();
            } else {
              // The detail page has an FAQ carousel. Init it
              if ($('.faq-carousel-component.multi').length === 0) {
                $(html).find(selectorCarousel).appendTo($wrapper);
              }
              init();
            }
        },

        scroll = function(direction, amount, instantJump){

            itemWidth = $itemsWrapper.width();

            if (amount === undefined){
                amount = 1;
            }

            if (direction === undefined){
                amount = 0;
                instantJump = true;
            }

            var currentScrollOffsetPx = moveOffset * itemWidth,
                moveByPx = 0;
            
            moveByPx = itemWidth * amount;
            
            if (direction === 'right'){
                moveByPx = - moveByPx;
                moveOffset -= amount;
            } else if (direction === 'left') {
                moveOffset += amount;
            }

            scrollToPx( currentScrollOffsetPx + moveByPx, instantJump);
            sortOutTabIndexes();

        },

        scrollToPx = function(scrollOffset, instant){

            if (instant === true){
                
                $itemsList.addClass('no-transition');
                $itemsList.css('transform', 'translateX('+ scrollOffset + 'px)');
                if ($itemsList && $itemsList[0] && $itemsList[0].offsetHeight ){
                    $itemsList[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
                }
                $itemsList.removeClass('no-transition');

            } else {

                $itemsList.css('transform', 'translateX('+ scrollOffset + 'px)');
            }
        },

        newItemInThe = function(to){

            var $lastEl, $elToAdd, $firstEl;
            
            // add an item in the front of the list
            if (to === 'front'){

                $lastEl = $itemsList.find('>li:last');
                $elToAdd = getItemAfter($lastEl);

                $itemsList.find('>li:first').remove();
                $itemsList.append($elToAdd);

            // or at the back of the list
            } else if (to === 'back'){
                // or vice versa
                $firstEl = $itemsList.find('>li:first');
                $elToAdd = getItemBefore($firstEl);

                $itemsList.find('>li:last').remove();
                $itemsList.prepend($elToAdd);
            }
        },

        getItemBefore = function($item){
            return getItemBeforeOrAfter($item, -1);
        },

        getItemAfter = function($item){
            return getItemBeforeOrAfter($item, 1);
        },

        getItemBeforeOrAfter = function($item, plus){
            var itemId = $item.data('index'),
                newId = ( itemId + plus ) % originalItemsCount;

            var toReturn = $originalItems.filter(':eq("' + newId + '")');

            return toReturn.clone(true);
        },

        handleTouchStart = function(evt) {
            if (scrollingRequired){
                xDown = evt.touches[0].clientX;
                yDown = evt.touches[0].clientY;
            }
        },

        handleTouchMove = function(evt) {

            if (scrollingRequired === false){
                return false;
            }

            if ( ! xDown || ! yDown ) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    $el.trigger('scroll', 'right');
                } else {
                    $el.trigger('scroll', 'left');
                }
            } else {
                if ( yDiff > 0 ) {
                    /* up swipe */ 
                } else { 
                    /* down swipe */
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        },

        sortDimensions = function(){

            var currentItemCount = $itemsList.find('>li').length;

            itemWidth           = $itemsWrapper.width();

            $itemsList.css('width', itemWidth * currentItemCount);

            $itemsList.find('>li').css('width', itemWidth);
            $originalItems.css('width', itemWidth);
        },
        
        center = function(){

            currentCount = $itemsList.find('>li').length;
            var moveBy   = parseInt(currentCount / 2, 10);
            scroll('right', moveBy, true );
        },

        sortOutTabIndexes = function(){
            var 
                els = $itemsList.find('li'),
                activeOne = els.filter(':eq('+ (els.length-1)/2 +')');

            els.find('a').attr('tabindex', -1);
            activeOne.find('a').attr('tabindex', 0);
            
        },

        addShadowEls = function(){

            var i, ii, elToAdd,
                right = originalItemsCount - (activeItem + 1),
                missingRight = buffer - right,
                left = activeItem,
                missingLeft = buffer - left;

            // populate on right
            if (missingRight > 0){
                for (i=0; i< missingRight; i++){
                    ii = i % originalItemsCount;
                    elToAdd = $originalItems.filter(':eq(' + ii + ')').clone(true);
                    $itemsList.append(elToAdd);
                }
            }

            if (missingLeft > 0){
                for (i=0; i<missingLeft; i++){
                    ii = originalItemsCount - 1 - i % originalItemsCount;
                    elToAdd = $originalItems.filter(':eq(' + ii + ')').clone(true);
                    $itemsList.prepend(elToAdd);
                }
            }
        },

        /**
        * Initialise the JavaScript for the multi tab
        *
        * @method  init
        */
        init = function() {
        
            cacheElements();
            bindEvents();
            sortOutTabIndexes();
            // remove wrapper if no component exists
            if (($('.faq-carousel-component').length == 0) && ($('.contactdirectory-faq.parsys').length == 0)){
                $('.faq-carousel-component-wrapper').closest('.wrapper').remove()
            }
        };

    $(document).ready(function() {
        init();
    });

    return {
        init: init
    };
})(jQuery);

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
 * Used to set when the Important Information section of the page is show
 * and what fottnotes are displayed based on what footnote 'legal-symbol' are currently visible
 * @class importantinformation
 */
bcpublic.helpandsupport.importantinformation = (function ($) {
    'use strict';

    var bindEvents = function () {

            var targetNodes = $(".main .wrapper");
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            var myObserver = new MutationObserver(mutationHandler);
            var obsConfig = {attributes: true, childList: true, characterData: true, subtree: true};

            //--- Add a target node to the observer. Can only add one node at a time.
            targetNodes.each(function () {
                myObserver.observe(this, obsConfig);
            });

            function mutationHandler(mutationRecords) {
                mutationRecords.forEach(function (mutation) {
                    if (mutation.attributeName === "class") {
                        showHideLegalFootnotes();
                    } else if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                        // element added to DOM
                        var hasClass = [].some.call(mutation.addedNodes, function (el) {
                            if (typeof el.classList !== "undefined") {
                                return el.classList.contains('contact-group--content')
                            }
                            return false;
                        });
                        if (hasClass) {
                            //--- Trigger mutation to fire by adding class
                            $('ul.legals').addClass('watching');
                        }
                    }
                });
            }
        },

        showHideLegalFootnotes = function () {
            var showLegalSymbolsContainer = false;

            //--- Hide all
            $('.legal-symbol').each(function () {
                $(this).parent().hide();
            });

            //--- Show visible
            $('.legals-symbols').filter(':visible').each(function () {
                var legalSymbol = $(this).html();

                $('.legal-symbol').filter(function () {
                    return legalSymbol.indexOf($(this).html()) > -1;
                }).each(function () {
                    $(this).parent().show();
                    showLegalSymbolsContainer = true;
                });
            });


            if (showLegalSymbolsContainer === false) {
                hideLegalsContainer();
            } else {
                showLegalsContainer();
            }

            //--- trigger resize event to ensure elements are rendered correctly
            $(window).trigger('resize');
        },


        hideLegalsContainer = function () {
            $('ul.legals').hide();
        },

        showLegalsContainer = function () {
            $('ul.legals').show();
        },

        /**
         * Init the Important Information code
         * @return null
         */
        init = function () {
            showHideLegalFootnotes();
            bindEvents();
        };

    $(document).ready(function () {
        init();
    });

    return {
        init: init
    };

})(jQuery);
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.contentRating = (function($) {

    function init() {
        $('body')
            .on('click', '#rating-toggle-yes, #rating-toggle-no', function () {
                selectResponse(this.value);
            });
    }

    function selectResponse(answer) {
        $('.rating-wrapper').addClass('alert alert-info').attr('role','alert');
        if (answer==='1') {
            $('#rating-message-yes').removeClass('hide');
            $('label[for="rating-toggle-no"]').addClass('btn-disabled');
        } else if (answer==='2') {
            $('#rating-message-no').removeClass('hide');
            $('label[for="rating-toggle-yes"]').addClass('btn-disabled');
        }
        disableBoth();
    }

    function disableBoth() {
        $('#rating-toggle-yes, #rating-toggle-no').attr('disabled','disabled').css('cursor','default');
    }

    $(document).ready(function() {
        init();
    });

    return {
        init: init
    };
})(jQuery);
