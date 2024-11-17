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
Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c;if(null==this)throw new TypeError('"this" is null or not defined');var d=Object(this),e=d.length>>>0;if(0===e)return-1;var f=+b||0;if(1/0===Math.abs(f)&&(f=0),f>=e)return-1;for(c=Math.max(f>=0?f:e-Math.abs(f),0);e>c;){if(c in d&&d[c]===a)return c;c++}return-1});
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);
/**
 * @fileOverview Polyfills the Object.keys method in browsers that don't support it (i.e. IE 8)
 * @author: Paul Waite <paul.waite@akqa.com> (copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Polyfill)
 */
 if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
/*
 * For information see https://github.com/ypid/opening_hours.js
 * and the doc directory which contains internal documentation and design.
 */
/* jshint laxbreak: true */
/* jshint boss: true */
/* jshint loopfunc: true */

(function (root, factory) {
    /* constants (holidays, error correction) {{{ */
    /* holidays {{{ */
    /*
     * The country code keys and the PH, SH keys are surrounded by '':
     * :%s/^\s\+\zs"\([^"]\+\)"\(: {\)/'\1'\2/
     * Fixed the indention with Vim Marco:
     * /'PH'<cr>f{jVk%k,a:
     * Fixed spacing in parenthesis:
     * :%s/\[\zs\([^ ]\)/ \1/e | %s/\([^ ]\)\]/\1 \]/e | %s/,\([^ ]\)/, \1/e
     */
    var holidays = {
        'gb': {
            'PH': {
                'New Year\'s Day'        : [ 1,  1 ],
                'Good Friday'            : [ 'easter', -2 ],
                'Easter Monday'          : [ 'easter', +1 ],
                'Early May bank holiday' : [ 'firstMayMonday', 0],
                'Spring bank holiday'    : [ 'lastMayMonday', 0],
                'Summer bank holiday'    : [ 'lastAugustMonday', 0],
                'Christmas Day'          : [ 12, 25 ],
                'Boxing Day'             : [ 12, 26 ]
            }
        }
    };
    // }}}

    // error correction {{{
    // Taken form http://www.netzwolf.info/j/osm/time_domain.js
    // Credits go to Netzwolf
    //
    // Key to word_error_correction is the token name except wrong_words
    var word_error_correction = {
        wrong_words: { /* {{{ */
            'Assuming "<ok>" for "<ko>". Please avoid using "workday": http://wiki.openstreetmap.org/wiki/Talk:Key:opening_hours#need_syntax_for_holidays_and_workingdays': {
                // Used around 260 times but the problem is, that work day might be different in other countries.
                'wd':           'Mo-Fr',
                'on work day':  'Mo-Fr',
                'on work days': 'Mo-Fr',
                'weekday':      'Mo-Fr',
                'weekdays':     'Mo-Fr',
                'vardagar':     'Mo-Fr'
            },
            'Please use something like "Mo off" instead "<ko>".': {
                'except': 'off'
            },
            'Please omit "<ko>" or use a colon instead: "12:00-14:00".': {
                'h': ''
            }, 'Please omit "<ko>".': {
                'season': '',
                'hs':     '',
                'hrs':    '',
                'hours':  '',
            }, 'Please omit "<ko>". The key must not be in the value.': {
                'opening_hours=': '',
                'opening_hours =': ''
            }, 'Please omit "<ko>". You might want to express open end which can be specified as "12:00+" for example.': {
                'from': ''
            }, 'You can use notation "<ok>" for "<ko>" in the case that you want to express open end times. Example: "12:00+".': {
                'til late': '+',
                'till late': '+',
                'bis open end': '+',
                '-late': '+',
                '-open end': '+',
                '-openend': '+'
            }, 'Please use notation "<ok>" for "<ko>". If the times are unsure or vary consider a comment e.g. 12:00-14:00 "only on sunshine".': {
                '~':  '-',
            }, 'Please use notation "<ok>" for "<ko>". Fallback rule: 12:00-14:00 || "call us"': {
                'otherwise':  '||'
            }, 'Please use notation "<ok>" for "<ko>".': {
                '=':               '-',
                'to':              '-',
                'a':               '-', // language unknown
                'as':              '-', // language unknown
                'ate':             '-', // language unknown
                'till':            '-',
                'til':             '-',
                'until':           '-',
                'through':         '-',
                'and':             ',',
                '&':               ',',
                'always':          '24/7',
                'nonstop':         '24/7',
                '24x7':            '24/7',
                'anytime':         '24/7',
                'all day':         '24/7',
                'daily':           'Mo-Su',
                'everyday':        'Mo-Su',
                'every day':       'Mo-Su',
                'all days':        'Mo-Su',
                '7j/7':            'Mo-Su', // I guess that it means that
                '7/7':             'Mo-Su', // I guess that it means that
                /* {{{
                 * Fixing this causes to ignore the following warning: "There should be no
                 * reason to differ more than 6 days from a constrained
                 * weekdays. If so tell us …".
                 * The following mistake is expected to occur more often.
                 */
                '7days':           'Mo-Su',
                '7 days':          'Mo-Su',
                // }}}
                '7 days a week':   'Mo-Su',
                '7 days/week':     'Mo-Su',
                '24 hours 7 days a week':   '24/7',
                '24 hours':        '00:00-24:00',
                'midday':          '12:00',
                'midnight':        '00:00',
                'holiday':         'PH',
                'holidays':        'PH',
                'public holidays': 'PH',
                'public holiday':  'PH',
                'day after public holiday':      'PH +1 day',
                'one day after public holiday':  'PH +1 day',
                'day before public holiday':     'PH -1 day',
                'one day before public holiday': 'PH -1 day',
                'school holiday':  'SH',
                'school holidays': 'SH',
                // summerholiday:  'SH',
                // summerholidays: 'SH',
                /* Not implemented {{{ */
                // 'day after school holiday':      'SH +1 day',
                // 'one day after school holiday':  'SH +1 day',
                // 'day before school holiday':     'SH -1 day',
                // 'one day before school holiday': 'SH -1 day',
                /* }}} */
                'weekend':         'Sa,Su',
                'weekends':        'Sa,Su',
                'daylight':        'sunrise-sunset'
            }, 'Please use time format in 24 hours notation ("<ko>"). If PM is used you might have to convert the hours to the 24 hours notation.': {
                'pm': '',
                'am': '',
            }, 'Please use notation "<ok>" for "<ko>". The used quote signs are not defined in the specification. See http://wiki.openstreetmap.org/wiki/Key:opening_hours/specification.': {
                "'": '"'
            }
        }, /* }}} */

        month: { /* {{{ */
            'default': {
                'jan':  0,
                'feb':  1,
                'mar':  2,
                'apr':  3,
                'may':  4,
                'jun':  5,
                'jul':  6,
                'aug':  7,
                'sep':  8,
                'oct':  9,
                'nov': 10,
                'dec': 11
            }
        }, /* }}} */

        calcday: {
            'default': {
                'day': 'day',
                'days': 'days'
            }
        },

        weekday: { // {{{ Good source: http://www.omniglot.com/language/time/days.htm */
            'default': {
                'su': 0,
                'mo': 1,
                'tu': 2,
                'we': 3,
                'th': 4,
                'fr': 5,
                'sa': 6
            }, 'Assuming "<ok>" for "<ko>"': {
                'm':          1,
                'w':          3,
                'f':          5
            }, 'Please use the abbreviation "<ok>" for "<ko>".': {
                'sun':        0,
                'sunday':     0,
                'sundays':    0,
                'mon':        1,
                'monday':     1,
                'mondays':    1,
                'tue':        2,
                'tues':       2, // Used here: http://www.westerhambeauty.co.uk/contact.php
                'tuesday':    2,
                'tuesdays':   2,
                'wed':        3,
                'weds':       3,
                'wednesday':  3,
                'wednesdays': 3,
                'thu':        4,
                'thur':       4,
                'thurs':      4,
                'thursday':   4,
                'thursdays':  4,
                'fri':        5,
                'friday':     5,
                'fridays':    5,
                'sat':        6,
                'saturday':   6,
                'saturdays':  6
            }
        }, /* }}} */

        timevar: { /* {{{ Special time variables which actual value depends on the date and the position of the facility. */
            'default': {
                'sunrise': 'sunrise',
                'sunset':  'sunset',
                'dawn':    'dawn',
                'dusk':    'dusk'
            }, 'Please use notation "<ok>" for "<ko>".': {
                'sundown':  'sunset'
            }
        }, /* }}} */

        'event': { // variable events
            'default': {
                'easter': 'easter'
            }
        }
    };
    // }}}
    // }}}

    // make the library accessible for the outside world {{{
    if (typeof exports === 'object') {
        // For nodejs
        var SunCalc = require('suncalc');
        module.exports = factory(SunCalc, holidays, word_error_correction);
    } else {
        // For browsers
        root.opening_hours = factory(root.SunCalc, holidays, word_error_correction);
    }
    /// }}}
}(this, function (SunCalc, holidays, word_error_correction) {
    return function(value, nominatiomJSON, optional_conf_parm) {
        // short constants {{{
        var word_value_replacement = { // If the correct values can not be calculated.
            dawn    : 60 * 5 + 30,
            sunrise : 60 * 6,
            sunset  : 60 * 18,
            dusk    : 60 * 18 + 30
        };
        var months   = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var weekdays = ['Su','Mo','Tu','We','Th','Fr','Sa'];
        var default_prettify_conf = {
            // Update README.md if changed.
            'zero_pad_hour': true,           // enforce ("%02d", hour)
            'one_zero_if_hour_zero': false,  // only one zero "0" if hour is zero "0"
            'leave_off_closed': true,        // leave keywords "off" and "closed" as is
            'keyword_for_off_closed': 'off', // use given keyword instead of "off" or "closed"
            'rule_sep_string': ' ',          // separate rules by string
            'print_semicolon': true,         // print token which separates normal rules
            'leave_weekday_sep_one_day_betw': true, // use the separator (either "," or "-" which is used to separate days which follow to each other like Sa,Su or Su-Mo
            'sep_one_day_between': ',',      // separator which should be used
            'zero_pad_month_and_week_numbers': false // Format week (e.g. `week 01`) and month day numbers (e.g. `Jan 01`) with "%02d".
        };

        var osm_tag_defaults = {
            'opening_hours'       :  { 'mode' :  0, 'warn_for_PH_missing' :  true },
            'collection_times'    :  { 'mode' :  2 },
            'opening_hours:.+'    :  { 'mode' :  0 },
            '.+:opening_hours'    :  { 'mode' :  0 },
            '.+:opening_hours:.+' :  { 'mode' :  0 },
            'smoking_hours'       :  { 'mode' :  0 },
            'service_times'       :  { 'mode' :  2 },
            'happy_hours'         :  { 'mode' :  0 },
            'lit'                 :  { 'mode' :  0,
                map: {
                    'yes'      : 'sunset-sunrise open "specified as yes: At night (unknown time schedule or daylight detection)"',
                    'automatic': 'unknown "specified as automatic: When someone enters the way the lights are turned on."',
                    'no'       : 'off "specified as no: There are no lights installed."',
                    'interval' : 'unknown "specified as interval"',
                    'limited'  : 'unknown "specified as limited"'
                }
            }
        };

        var minutes_in_day = 60 * 24;
        var msec_in_day    = 1000 * 60 * minutes_in_day;
        var msec_in_week   = msec_in_day * 7;

        var library_name   = 'opening_hours.js';
        var repository_url = 'https://github.com/ypid/' + library_name;
        var issues_url     = repository_url + '/issues?state=open';
        // }}}

        /* Optional constructor parameters {{{ */

        /* nominatiomJSON {{{
         *
         * required to reasonably calculate 'sunrise' and holidays.
         */
        var location_cc, location_state, lat, lon;
        if (typeof nominatiomJSON === 'object') {
            if (typeof nominatiomJSON.address !== 'undefined') {
                if (typeof nominatiomJSON.address.country_code !== 'undefined') {
                    location_cc    = nominatiomJSON.address.country_code;
                }
                if (typeof nominatiomJSON.address.state !== 'undefined') {
                    location_state = nominatiomJSON.address.state;
                } else if (typeof nominatiomJSON.address.county !== 'undefined') {
                    location_state = nominatiomJSON.address.county;
                }
            }

            if (typeof nominatiomJSON.lon !== 'undefined') { // lat will be tested later …
                lat = nominatiomJSON.lat;
                lon = nominatiomJSON.lon;
            }
        } else if (typeof nominatiomJSON !== 'undefined') {
            throw 'The nominatiomJSON parameter is of unknown type.'
                + ' Given ' + typeof(nominatiomJSON)
                + ', expected object.';
        }
        /* }}} */

        /* mode (and other things … ) {{{
         *
         * 0: time ranges (default), tags: opening_hours, lit, …
         * 1: points in time
         * 2: both (time ranges and points in time), tags: collection_times, service_times
         */

        var warnings_severity = 4;
        /* Default, currently the highest severity supported.
         * This number is expected to be >= 4. This is not explicitly checked.
         */

        var oh_mode;
        var oh_map_value = false;
        var oh_key, oh_regex_key;

        if (typeof optional_conf_parm === 'number') {
            oh_mode = optional_conf_parm;
        } else if (typeof optional_conf_parm === 'object') {
            if (checkOptionalConfParm('mode', 'number')) {
                oh_mode = optional_conf_parm['mode'];
            }
            if (checkOptionalConfParm('warnings_severity', 'number')) {
                warnings_severity = optional_conf_parm['warnings_severity'];
                if ([ 0, 1, 2, 3, 4, 5, 6, 7 ].indexOf(warnings_severity) === -1) {
                    throw 'The parameter optional_conf_parm["warnings_severity"] must be an integer number between 0 and 7 (inclusive).'
                        + ' Given ' + warnings_severity
                        + ', expected one of the following numbers: [ 0, 1, 2, 3, 4, 5, 6, 7 ].';
                }
            }
            if (checkOptionalConfParm('tag_key', 'string')) {
                oh_key = optional_conf_parm['tag_key'];
            }
            if (checkOptionalConfParm('map_value', 'boolean')) {
                oh_map_value = true;
            }
        } else if (typeof optional_conf_parm !== 'undefined') {
            throw 'The optional_conf_parm parameter is of unknown type.'
                + ' Given ' + typeof(optional_conf_parm);
        }

        if (typeof oh_key === 'string') {
            oh_regex_key = getRegexKeyForKeyFromOsmDefaults(oh_key)

            if (oh_map_value
                && typeof osm_tag_defaults[oh_regex_key]['map'] === 'object'
                && typeof osm_tag_defaults[oh_regex_key]['map'][value] === 'string'
                ) {

                value = osm_tag_defaults[oh_regex_key]['map'][value];
            }
        } else if (oh_map_value) {
            throw 'The optional_conf_parm["tag_key"] is missing, required by optional_conf_parm["map_value"].';
        }

        if (typeof oh_mode === 'undefined') {
            if (typeof oh_key === 'string') {
                if (typeof osm_tag_defaults[oh_regex_key]['mode'] === 'number') {
                    oh_mode = osm_tag_defaults[oh_regex_key]['mode'];
                } else {
                    oh_mode = 0;
                }
            } else {
                oh_mode = 0;
            }
        } else if (oh_mode !== 0 && oh_mode !== 1 && oh_mode !== 2) {
            throw 'The optional_conf_parm["mode"] parameter is a invalid number.'
                + ' Gave ' + oh_mode
                + ', expected one of the following numbers: [ 0, 1, 2 ].';
        }

        /* }}} */
        /* }}} */

        // Tokenize value and generate selector functions. {{{
        if (typeof value !== 'string') {
            throw 'The value (first parameter) is not a string.';
        }
        if (value.match(/^(?:\s*;?\s*)+$/)) {
            throw 'The value contains nothing meaningful which can be parsed.';
        }

        var parsing_warnings = []; // Elements are fed into function formatWarnErrorMessage(nrule, at, message)
        var done_with_warnings = false; // The functions which throw warnings can be called multiple times.
        var done_with_selector_reordering = false;
        var done_with_selector_reordering_warnings = false;
        var tokens = tokenize(value);
        // console.log(JSON.stringify(tokens, null, '    '));
        var prettified_value = '';
        var week_stable = true;

        var rules = [];
        var new_tokens = [];

        for (var nrule = 0; nrule < tokens.length; nrule++) {
            if (tokens[nrule][0].length === 0) {
                // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.
                parsing_warnings.push([nrule, -1,
                    'This rule does not contain anything useful. Please remove this empty rule.'
                    + (nrule === tokens.length - 1 && nrule > 0 && !tokens[nrule][1] ?
                        ' Might it be possible that you are a programmer and adding a semicolon after each statement is hardwired in your muscle memory ;) ?'
                        + ' The thing is that the semicolon in the opening_hours syntax is defined as rule separator.'
                        + ' So for compatibility reasons you should omit this last semicolon.': '')
                    ]);
                continue;
            }

            var continue_at = 0;
            var next_rule_is_additional = false;
            do {
                if (continue_at === tokens[nrule][0].length) break;
                // Additional rule does contain nothing useful e.g. second rule of '10:00-12:00,' (empty) which needs to be handled.

                var selectors = {
                    // Time selectors
                    time: [],

                    // Temporary array of selectors from time wrapped to the next day
                    wraptime: [],

                    // Date selectors
                    weekday: [],
                    holiday: [],
                    week: [],
                    month: [],
                    monthday: [],
                    year: [],

                    // Array with non-empty date selector types, with most optimal ordering
                    date: [],

                    fallback: tokens[nrule][1],
                    additional: continue_at ? true : false,
                    meaning: true,
                    unknown: false,
                    comment: undefined,
                    build_from_token_rule: undefined
                };

                selectors.build_from_token_rule = [ nrule, continue_at, new_tokens.length ];
                continue_at = parseGroup(tokens[nrule][0], continue_at, selectors, nrule);
                if (typeof continue_at === 'object') {
                    continue_at = continue_at[0];
                } else {
                    continue_at = 0;
                }

                // console.log('Current tokens: ' + JSON.stringify(tokens[nrule], null, '    '));

                new_tokens.push(
                    [
                        tokens[nrule][0].slice(
                            selectors.build_from_token_rule[1],
                            continue_at === 0
                                ? tokens[nrule][0].length
                                : continue_at
                        ),
                        tokens[nrule][1],
                        tokens[nrule][2],
                    ]
                );

                if (next_rule_is_additional && new_tokens.length > 1) {
                    // Move 'rule separator' from last token of last rule to first token of this rule.
                    new_tokens[new_tokens.length - 1][0].unshift(new_tokens[new_tokens.length - 2][0].pop());
                }

                next_rule_is_additional = continue_at === 0 ? false : true;

                if (selectors.year.length > 0)
                    selectors.date.push(selectors.year);
                if (selectors.holiday.length > 0)
                    selectors.date.push(selectors.holiday);
                if (selectors.month.length > 0)
                    selectors.date.push(selectors.month);
                if (selectors.monthday.length > 0)
                    selectors.date.push(selectors.monthday);
                if (selectors.week.length > 0)
                    selectors.date.push(selectors.week);
                if (selectors.weekday.length > 0)
                    selectors.date.push(selectors.weekday);

                // console.log('weekday: ' + JSON.stringify(selectors.weekday, null, '\t'));
                rules.push(selectors);

                // This handles selectors with time ranges wrapping over midnight (e.g. 10:00-02:00)
                // it generates wrappers for all selectors and creates a new rule.
                if (selectors.wraptime.length > 0) {
                    var wrapselectors = {
                        time: selectors.wraptime,
                        date: [],

                        meaning: selectors.meaning,
                        unknown: selectors.unknown,
                        comment: selectors.comment,

                        wrapped: true,
                        build_from_token_rule: selectors.build_from_token_rule
                    };

                    for (var dselg = 0; dselg < selectors.date.length; dselg++) {
                        wrapselectors.date.push([]);
                        for (var dsel = 0; dsel < selectors.date[dselg].length; dsel++) {
                            wrapselectors.date[wrapselectors.date.length-1].push(
                                    generateDateShifter(selectors.date[dselg][dsel], -msec_in_day)
                                );
                        }
                    }

                    rules.push(wrapselectors);
                }
            } while (continue_at);
        }
        // console.log(JSON.stringify(tokens, null, '    '));
        // console.log(JSON.stringify(new_tokens, null, '    '));
        /* }}} */

        /* Helper functions {{{ */
        /* Get regex string key from key osm_tag_defaults. {{{
         *
         * :param key: Tag key e.g. opening_hours:kitchen.
         * :returns: Regex key from osm_tag_defaults e.g. opening_hours:.*
         */
        function getRegexKeyForKeyFromOsmDefaults(key) {
            var regex_key;

            for (var osm_key in osm_tag_defaults) {
                if (key === osm_key) { // Exact match.
                    regex_key = osm_key;
                    break;
                } else if (key.match(osm_key)) {
                    regex_key = osm_key;
                }
            }
            return regex_key;
        }
        /* }}} */

        /* Check given element in optional_conf_parm. {{{
         *
         * :param key: Key of optional_conf_parm.
         * :param expected_type: Expected `typeof()` the parameter.
         * :returns: True if the expected type matches the given type.
         */
        function checkOptionalConfParm(key, expected_type) {
            if (typeof optional_conf_parm[key] === expected_type) {
                return true;
            } else if (typeof optional_conf_parm[key] !== 'undefined') {
                throw 'The optional_conf_parm["' + key + '"] parameter is of unknown type.'
                    + ' Given ' + typeof(optional_conf_parm[key])
                    + ', expected ' + expected_type + '.';
            }
            return false;
        }
        /* }}} */
        /* }}} */

        /* Format warning or error message for the user. {{{
         *
         * :param nrule: Rule number starting with zero.
         * :param at: Token position at which the issue occurred.
         * :param message: Human readable string with the message.
         * :returns: String with position of the warning or error marked for the user.
         */
        function formatWarnErrorMessage(nrule, at, message) {
            // FIXME: Change to new_tokens.
            if (typeof nrule === 'number') {
                var pos = 0;
                if (nrule === -1) { // Usage of rule index not required because we do have access to value.length.
                    pos = value.length - at;
                } else { // Issue accrued at a later time, position in string needs to be reconstructed.
                    if (typeof tokens[nrule][0][at] === 'undefined') {
                        if (typeof tokens[nrule][0] && at === -1) {
                            pos = value.length;
                            if (typeof tokens[nrule+1] === 'object' && typeof tokens[nrule+1][2] === 'number') {
                                pos -= tokens[nrule+1][2];
                            } else if (typeof tokens[nrule][2] === 'number') {
                                pos -= tokens[nrule][2];
                            }
                        } else {
                            // Given position is invalid.
                            //
                            formatLibraryBugMessage('Bug in warning generation code which could not determine the exact position of the warning or error in value.');
                            pos = value.length;
                            if (typeof tokens[nrule][2] !== 'undefined') {
                                // Fallback: Point to last token in the rule which caused the problem.
                                // Run real_test regularly to fix the problem before a user is confronted with it.
                                pos -= tokens[nrule][2];
                                console.warn('Last token for rule: ' + tokens[nrule]);
                                console.log(value.substring(0, pos) + ' <--- (' + message + ')');
                                console.log('\n');
                            } {
                                console.warn('tokens[nrule][2] is undefined. This is ok if nrule is the last rule.');
                            }
                        }
                    } else {
                        pos = value.length;
                        if (typeof tokens[nrule][0][at+1] !== 'undefined') {
                            pos -= tokens[nrule][0][at+1][2];
                        } else if (typeof tokens[nrule][2] !== 'undefined') {
                            pos -= tokens[nrule][2];
                        }
                    }
                }
                return value.substring(0, pos) + ' <--- (' + message + ')';
            } else if (typeof nrule === 'string') {
                return nrule.substring(0, at) + ' <--- (' + message + ')';
            }
        }
        // }}}

        /* Format internal library error message. {{{
         *
         * :param message: Human readable string with the error message.
         * :returns: Error message for the user.
         */
        function formatLibraryBugMessage(message) {
            if (typeof message === 'undefined')
                message = '';
            else
                message = ' ' + message;

            message = 'An error occurred during evaluation of the value "' + value + '".'
                + ' Please file a bug report here: ' + issues_url + '.'
                + message;
            console.log(message);
            return message;
        }
        // }}}

        /* Tokenize input stream. {{{
         *
         * :param value: Raw opening_hours value.
         * :returns: Tokenized list object. Complex structure. Check the
         *      internal documentation in the doc directory for details.
         */
        function tokenize(value) {
            var all_tokens       = [];
            var curr_rule_tokens = [];

            var last_rule_fallback_terminated = false;

            while (value !== '') {
                // console.log("Parsing value: " + value);
                var tmp;
                if (tmp = value.match(/^week\b/i)) {
                    // Reserved keywords.
                    curr_rule_tokens.push([tmp[0].toLowerCase(), tmp[0].toLowerCase(), value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^(?:off\b|closed\b|open\b|unknown\b)/i)) {
                    // Reserved keywords.
                    curr_rule_tokens.push([tmp[0].toLowerCase(), 'state', value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^24\/7/i)) {
                    // Reserved keyword.
                    curr_rule_tokens.push([tmp[0], tmp[0], value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^(?:PH|SH)/i)) {
                    // special day name (holidays)
                    curr_rule_tokens.push([tmp[0].toUpperCase(), 'holiday', value.length ]);
                    value = value.substr(2);
                } else if (tmp = value.match(/^(&|_|=|opening_hours\s*=|\?|~|24x7|24 hours 7 days a week|24 hours|7 ?days(?:(?: a |\/)week)?|7j?\/7|all days?|every day|(?:|-|till? |bis )?(?:late|open[ ]?end)|(?:(?:one )?day (?:before|after) )?(?:school|public) holidays?|days?\b|on work days?|sonntags?|(?:nur |an )?sonn-?(?:(?: und |\/)feiertag(?:s|en?)?)?|[a-z]+\b|mo|tu|we|th|fr|sa|su|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\.?/i)) {
                    /* Handle all remaining words and specific other characters with error tolerance.
                     *
                     * à|á: Word boundary does not work with unicode chars: 'test à test'.match(/\bà\b/i)
                     * https://stackoverflow.com/questions/10590098/javascript-regexp-word-boundaries-unicode-characters
                     * Order in the regular expression capturing group is important in some cases.
                     *
                     * mo|tu|we|th|fr|sa|su|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec: Prefer defended keywords
                     * if used in cases like 'mo12:00-14:00' (when keyword is followed by number).
                     */
                    var correct_val = returnCorrectWordOrToken(tmp[1].toLowerCase(), value.length);
                    // console.log('Error tolerance for string "' + tmp[1] + '" returned "' + correct_val + '".');
                    if (typeof correct_val === 'object') {
                        curr_rule_tokens.push([ correct_val[0], correct_val[1], value.length ]);
                        value = value.substr(tmp[0].length);
                    } else if (typeof correct_val === 'string') {
                        if (tmp[1].toLowerCase() === 'pm') {
                            var hours_token_at = curr_rule_tokens.length - 1;
                            var hours_token;
                            if (hours_token_at >= 0) {
                                if (hours_token_at -2 >= 0 &&
                                        matchTokens(
                                            curr_rule_tokens, hours_token_at - 2,
                                            'number', 'timesep', 'number'
                                        )
                                    ) {
                                    hours_token_at -= 2;
                                    hours_token = curr_rule_tokens[hours_token_at];
                                } else if (matchTokens(curr_rule_tokens, hours_token_at, 'number')) {
                                    hours_token = curr_rule_tokens[hours_token_at];
                                }

                                if (typeof hours_token === 'object' && hours_token[0] <= 12) {
                                    hours_token[0] += 12;
                                    curr_rule_tokens[hours_token_at] = hours_token;
                                }
                            }
                        }
                        var correct_tokens = tokenize(correct_val)[0];
                        if (correct_tokens[1] === true) { // last_rule_fallback_terminated
                            throw formatLibraryBugMessage();
                        }
                        for (var i = 0; i < correct_tokens[0].length; i++) {
                            curr_rule_tokens.push([correct_tokens[0][i][0], correct_tokens[0][i][1], value.length]);
                            // value.length - tmp[0].length does not have the desired effect for all test cases.
                        }

                        value = value.substr(tmp[0].length);
                        // value = correct_val + value.substr(tmp[0].length);
                        // Does not work because it would generate the wrong length for formatWarnErrorMessage.
                    } else {
                        // other single-character tokens
                        curr_rule_tokens.push([value[0].toLowerCase(), value[0].toLowerCase(), value.length - 1 ]);
                        value = value.substr(1);
                    }
                } else if (tmp = value.match(/^\d+/)) {
                    // number
                    if (Number(tmp[0]) > 1900) { // Assumed to be a year number.
                        curr_rule_tokens.push([Number(tmp[0]), 'year', value.length ]);
                        if (Number(tmp[0]) >= 2100) // Probably an error
                            parsing_warnings.push([ -1, value.length - 1,
                                'The number ' + Number(tmp[0]) + ' will be interpreted as year.'
                                + ' This is probably not intended. Times can be specified as "12:00".'
                            ]);
                    } else {
                        curr_rule_tokens.push([Number(tmp[0]), 'number', value.length ]);
                    }

                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^"([^"]+)"/)) {
                    // Comment following the specification.
                    // Any character is allowed inside the comment except " itself.
                    curr_rule_tokens.push([tmp[1], 'comment', value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^(["'„“‚‘’«「『])([^"'“”‘’»」』;|]*)(["'”“‘’»」』])/)) {
                    // Comments with error tolerance.
                    // The comments still have to be somewhat correct meaning
                    // the start and end quote signs used have to be
                    // appropriate. So “testing„ will not match as it is not a
                    // quote but rather something unknown which the user should
                    // fix first.
                    // console.log('Matched: ' + JSON.stringify(tmp));
                    for (var pos = 1; pos <= 3; pos += 2) {
                        // console.log('Pos: ' + pos + ', substring: ' + tmp[pos]);
                        var correct_val = returnCorrectWordOrToken(tmp[pos],
                            value.length - (pos === 3 ? tmp[1].length + tmp[2].length : 0)
                        );
                        if (typeof correct_val !== 'string' && tmp[pos] !== '"') {
                            throw formatLibraryBugMessage(
                                'A character for error tolerance was allowed in the regular expression'
                                + ' but is not covered by word_error_correction'
                                + ' which is needed to format a proper message for the user.'
                            );
                        }
                    }
                    curr_rule_tokens.push([tmp[2], 'comment', value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (value.match(/^;/)) {
                    // semicolon terminates rule
                    // next tokens belong to a new rule
                    all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated, value.length ]);
                    value = value.substr(1);

                    curr_rule_tokens = [];
                    last_rule_fallback_terminated = false;
                } else if (value.match(/^\|\|/)) {
                    // || terminates rule
                    // Next tokens belong to a fallback rule.
                    if (curr_rule_tokens.length === 0)
                        throw formatWarnErrorMessage(-1, value.length - 2, 'Rule before fallback rule does not contain anything useful');

                    all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated, value.length ]);
                    curr_rule_tokens = [];
                    // curr_rule_tokens = [ [ '||', 'rule separator', value.length  ] ];
                    // FIXME: Use this. Unknown bug needs to be solved in the process.
                    value = value.substr(2);

                    last_rule_fallback_terminated = true;
                } else if (tmp = value.match(/^\s+/)) {
                    // whitespace is ignored
                    value = value.substr(tmp[0].length);
                } else if (value.match(/^[:.]/)) {
                    // time separator
                    if (value[0] === '.' && !done_with_warnings)
                        parsing_warnings.push([ -1, value.length - 1, 'Please use ":" as hour/minute-separator' ]);
                    curr_rule_tokens.push([ ':', 'timesep', value.length ]);
                    value = value.substr(1);
                } else {
                    // other single-character tokens
                    curr_rule_tokens.push([value.charAt(0).toLowerCase(), value.charAt(0).toLowerCase(), value.length ]);
                    value = value.substr(1);
                }
            }

            all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated ]);

            return all_tokens;
        }
        // }}}

        /* error correction/tolerance function {{{
         * Go through word_error_correction hash and get correct value back.
         *
         * :param word: Wrong Word or character.
         * :param value_length: Current value_length (used for warnings).
         * :returns:
         *      * (valid) opening_hours sub string.
         *      * object with [ internal_value, token_name ] if value is correct.
         *      * undefined if word could not be found (and thus is not be corrected).
         */
        function returnCorrectWordOrToken(word, value_length) {
            for (var token_name in word_error_correction) {
                for (var comment in word_error_correction[token_name]) {
                    for (var old_val in word_error_correction[token_name][comment]) {
                        if (old_val === word) {
                            var val = word_error_correction[token_name][comment][old_val];
                            if (comment === 'default') {
                                // Return internal representation of word.
                                return [ val, token_name ];
                            } else if (token_name === 'wrong_words' && !done_with_warnings) {
                                // Replace wrong words or characters with correct ones.
                                // This will return a string which is then being tokenized.
                                parsing_warnings.push([ -1, value_length - old_val.length,
                                    comment.replace(/<ko>/, old_val).replace(/<ok>/, val) ]);
                                return val;
                            } else {
                                // Get correct string value from the 'default' hash and generate warning.
                                var correct_abbr;
                                for (correct_abbr in word_error_correction[token_name]['default']) {
                                    if (word_error_correction[token_name]['default'][correct_abbr] === val)
                                        break;
                                }
                                if (typeof correct_abbr === 'undefined') {
                                    throw formatLibraryBugMessage('Including the stacktrace.');
                                }
                                if (token_name !== 'timevar') {
                                    // Everything else than timevar:
                                    // E.g. 'Mo' start with a upper case letter.
                                    // It just looks better.
                                    correct_abbr = correct_abbr.charAt(0).toUpperCase()
                                        + correct_abbr.slice(1);
                                }
                                if (!done_with_warnings)
                                    parsing_warnings.push([ -1, value_length - old_val.length,
                                        comment.replace(/<ko>/, old_val).replace(/<ok>/, correct_abbr) ]);
                                return [ val, token_name ];
                            }
                        }
                    }
                }
            }
            return undefined;
        }
        // }}}

        /* return warnings as list {{{
         *
         * :param it: Iterator object if available (optional).
         * :returns: Warnings as list with one warning per element.
         */
        function getWarnings(it) {
            if (warnings_severity < 4) {
                return [];
            }

            if (!done_with_warnings && typeof it === 'object') {
                /* getWarnings was called in a state without critical errors.
                 * We can do extended tests.
                 */

                /* Place all tests in this function if an additional (high
                 * level) test is added and this does not require to rewrite
                 * big parts of (sub) selector parsers only to get the
                 * position. If that is the case, then rather place the test
                 * code in the (sub) selector parser function directly.
                 */

                var wide_range_selector_order = [ 'year', 'month', 'week', 'holiday' ];
                var small_range_selector_order = [ 'weekday', 'time', '24/7', 'state', 'comment'];

                // How many times was a selector_type used per rule? {{{
                var used_selectors = [];
                var used_selectors_types_array = [];
                var has_token = {};

                for (var nrule = 0; nrule < new_tokens.length; nrule++) {
                    if (new_tokens[nrule][0].length === 0) continue;
                    // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.

                    var selector_start_end_type = [ 0, 0, undefined ],
                        prettified_group_value  = [];
                    // console.log(new_tokens[nrule][0]);

                    used_selectors[nrule] = {};
                    used_selectors_types_array[nrule] = [];

                    do {
                        selector_start_end_type = getSelectorRange(new_tokens[nrule][0], selector_start_end_type[1]);
                        // console.log(selector_start_end_type, new_tokens[nrule][0].length);

                        for (var token_pos = 0; token_pos < selector_start_end_type[1]; token_pos++) {
                            if (typeof new_tokens[nrule][0][token_pos] === 'object' && new_tokens[nrule][0][token_pos][0] === 'PH') {
                                has_token['PH'] = true;
                            }
                        }

                        if (selector_start_end_type[0] === selector_start_end_type[1] &&
                            new_tokens[nrule][0][selector_start_end_type[0]][0] === '24/7'
                            ) {
                                has_token['24/7'] = true;
                        }

                        if (typeof used_selectors[nrule][selector_start_end_type[2]] !== 'object') {
                            used_selectors[nrule][selector_start_end_type[2]] = [ selector_start_end_type[1] ];
                        } else {
                            used_selectors[nrule][selector_start_end_type[2]].push(selector_start_end_type[1]);
                        }
                        used_selectors_types_array[nrule].push(selector_start_end_type[2]);

                        selector_start_end_type[1]++;
                    } while (selector_start_end_type[1] < new_tokens[nrule][0].length);
                }
                // console.log('used_selectors: ' + JSON.stringify(used_selectors, null, '    '));
                // }}}

                for (var nrule = 0; nrule < used_selectors.length; nrule++) {

                    /* Check if more than one not connected selector of the same type is used in one rule {{{ */
                    for (var selector_type in used_selectors[nrule]) {
                        // console.log(selector_type + ' use at: ' + used_selectors[nrule][selector_type].length);
                        if (used_selectors[nrule][selector_type].length > 1) {
                            parsing_warnings.push([nrule, used_selectors[nrule][selector_type][used_selectors[nrule][selector_type].length - 1],
                                'You have used ' + used_selectors[nrule][selector_type].length
                                + (selector_type.match(/^(?:comment|state)/) ?
                                    ' ' + selector_type
                                    + (selector_type === 'state' ? ' keywords' : 's')
                                    + ' in one rule.'
                                    + ' You may only use one in one rule.'
                                    :
                                    ' not connected ' + selector_type
                                    + (selector_type.match(/^(?:month|weekday)$/) ? 's' : ' ranges')
                                    + ' in one rule.'
                                    + ' This is probably an error.'
                                    + ' Equal selector types can (and should) always be written in conjunction separated by comma.'
                                    + ' Example for time ranges "12:00-13:00,15:00-18:00".'
                                    + ' Example for weekdays "Mo-We,Fr".'
                                  )
                                + ' Rules can be separated by ";".' ]
                            );
                            done_with_selector_reordering = true; // Correcting the selector order makes no sense if this kind of issue exists.
                        }
                    }
                    /* }}} */
                    /* Check if change default state rule is not the first rule {{{ */
                    if (   typeof used_selectors[nrule].state === 'object'
                        && Object.keys(used_selectors[nrule]).length === 1
                    ) {

                        if (nrule !== 0) {
                            parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1,
                                "This rule which changes the default state (which is closed) for all following rules is not the first rule."
                                + " The rule will overwrite all previous rules."
                                + " It can be legitimate to change the default state to open for example"
                                + " and then only specify for which times the facility is closed."
                            ]);
                        }
                    /* }}} */
                    /* Check if a rule (with state open) has no time selector {{{ */
                    } else if (typeof used_selectors[nrule].time === 'undefined') {
                        if (    (      typeof used_selectors[nrule].state === 'object'
                                    && new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'open'
                                    && typeof used_selectors[nrule].comment === 'undefined'
                                ) || ( typeof used_selectors[nrule].comment === 'undefined'
                                    && typeof used_selectors[nrule].state === 'undefined'
                                ) &&
                                typeof used_selectors[nrule]['24/7'] === 'undefined'
                        ) {

                            parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1,
                                "This rule is not very explicit because there is no time selector being used."
                                + " Please add a time selector to this rule or use a comment to make it more explicit."
                            ]);
                        }
                    }
                    /* }}} */
                    /* Check if empty comment was given {{{ */
                    if (typeof used_selectors[nrule].comment === 'object'
                        && new_tokens[nrule][0][used_selectors[nrule].comment[0]][0].length === 0
                    ) {

                        parsing_warnings.push([nrule, used_selectors[nrule].comment[0],
                            "You have used an empty comment."
                            + " Please either write something in the comment or use the keyword unknown instead."
                        ]);
                    }
                    /* }}} */
                    /* Check for valid use of <separator_for_readability> {{{ */
                    for (var i = 0; i < used_selectors_types_array[nrule].length - 1; i++) {
                        var selector_type = used_selectors_types_array[nrule][i];
                        var next_selector_type = used_selectors_types_array[nrule][i+1];
                        if (   (   wide_range_selector_order.indexOf(selector_type)       !== -1
                                && wide_range_selector_order.indexOf(next_selector_type)  !== -1
                            ) || ( small_range_selector_order.indexOf(selector_type)      !== -1
                                && small_range_selector_order.indexOf(next_selector_type) !== -1)
                            ) {

                            if (new_tokens[nrule][0][used_selectors[nrule][selector_type][0]][0] === ':') {
                                parsing_warnings.push([nrule, used_selectors[nrule][selector_type][0],
                                    "You have used the optional symbol <separator_for_readability> in the wrong place."
                                    + " Please check the syntax specification to see where it could be used or remove it."
                                ]);
                            }
                        }
                    }
                    /* }}} */

                    /* FIXME: Enable (currently disabled): Check if rule with closed|off modifier is additional {{{ */
                    if (typeof new_tokens[nrule][0][0] === 'object'
                            && new_tokens[nrule][0][0][0] === ','
                            && new_tokens[nrule][0][0][1] === 'rule separator'
                            && typeof used_selectors[nrule].state === 'object'
                            && (
                                   new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'closed'
                                || new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'off'
                               )
                    ) {

                        // parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1,
                            // "This rule will be evaluated as closed but it was specified as additional rule."
                            // + " It is enough to specify this rule as normal rule using the \";\" character."
                            // + " See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:rule_modifier:closed."
                        // ]);
                    }
                    /* }}} */

                }

                /* Check if 24/7 is used and it does not mean 24/7 because there are other rules {{{ */
                var has_advanced = it.advance();

                if (has_advanced === true && has_token['24/7'] && !done_with_warnings) {
                    parsing_warnings.push([ -1, 0,
                        'You used 24/7 in a way that is probably not interpreted as "24 hours 7 days a week".'
                        // Probably because of: "24/7; 12:00-14:00 open", ". Needs extra testing.
                        + ' For correctness you might want to use "open" or "closed"'
                        + ' for this rule and then write your exceptions which should achieve the same goal and is more clear'
                        + ' e.g. "open; Mo 12:00-14:00 off".'
                    ]);
                }
                /* }}} */

                /* Check for missing PH. {{{ */
                if (    warnings_severity >= 5
                    && !has_token['PH']
                    && !done_with_warnings
                    && (
                            (
                                typeof oh_key === 'string'
                                && osm_tag_defaults[oh_regex_key]['warn_for_PH_missing']
                            )
                            || (typeof oh_key !== 'string')
                       )
                    ) {

                    var keys_with_warn_for_PH_missing = [];
                    for (var key in osm_tag_defaults) {
                        if (osm_tag_defaults[key]['warn_for_PH_missing']) {
                            keys_with_warn_for_PH_missing.push(key);
                        }
                    }
                    parsing_warnings.push([ -1, 0,
                        'There was no PH (public holiday) specified. This is not very explicit.'
                        + (typeof oh_key !== 'string'
                            ? ' Unfortunately the tag key (e.g. "opening_hours", or "lit") is unknown to opening_hours.js'
                                // + '(see README how to provide it)' // UI of the evaluation tool does not allow to provide it (currently).
                                + '. This warning only applies to the key'
                                + (keys_with_warn_for_PH_missing.length === 1 ? ' ' : 's: ')
                                + keys_with_warn_for_PH_missing.join(', ') + '.'
                                + ' If your value is for that key than read on. If not you can ignore the following.'
                            : ''
                        )
                        + ' Please either append a "PH off" rule if the amenity is closed on all public holidays'
                        + ' or use something like "Sa,Su,PH 12:00-16:00" to say that on Saturdays, Sundays and on public holidays the amenity is open 12:00-16:00.'
                        + ' If you are not certain try to find it out. If you can’t then do not add PH to the value and ignore this warning.'
                    ]);
                }
                /* }}} */

                prettifyValue();
            }
            done_with_warnings = true;

            var warnings = [];
            // FIXME: Sort based on parsing_warnings[1], tricky …
            for (var i = 0; i < parsing_warnings.length; i++) {
                warnings.push( formatWarnErrorMessage(parsing_warnings[i][0], parsing_warnings[i][1], parsing_warnings[i][2]) );
            }
            return warnings;
        }

        /* Helpers for getWarnings {{{ */

        /* Check if token is the begin of a selector and why. {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns:
         *      * false the current token is not the begin of a selector.
         *      * Position in token array from where the decision was made that
         *        the token is the start of a selector.
         */
        function tokenIsTheBeginOfSelector(tokens, at) {
            if (typeof tokens[at][3] === 'string') {
                return 3;
            } else if (tokens[at][1] === 'comment'
                    || tokens[at][1] === 'state'
                    || tokens[at][1] === '24/7'
                    || tokens[at][1] === 'rule separator'
                ){

                return 1;
            } else {
                return false;
            }
        }
        /* }}} */

        /* Get start and end position of a selector. {{{
         * For example this value 'Mo-We,Fr' will return the position of the
         * token lexeme 'Mo' and 'Fr' e.g. there indexes [ 0, 4 ] in the
         * selector array of tokens.
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Array:
         *          0. Index of first token in selector array of tokens.
         *          1. Index of last token in selector array of tokens.
         *          2. Selector type.
         */
        function getSelectorRange(tokens, at) {
            var selector_start = at,
                selector_end,
                pos_in_token_array;

            for (; selector_start >= 0; selector_start--) {
                pos_in_token_array = tokenIsTheBeginOfSelector(tokens, selector_start);
                if (pos_in_token_array)
                    break;
            }
            selector_end = selector_start;

            if (pos_in_token_array === 1) {
                // Selector consists of a single token.

                // Include tailing colon.
                if (selector_end + 1 < tokens.length && tokens[selector_end + 1][0] === ':')
                    selector_end++;

                return [ selector_start, selector_end, tokens[selector_start][pos_in_token_array] ];
            }

            for (selector_end++; selector_end < tokens.length ; selector_end++) {
                if (tokenIsTheBeginOfSelector(tokens, selector_end))
                    return [ selector_start, selector_end - 1, tokens[selector_start][pos_in_token_array] ];
            }

            return [ selector_start, selector_end - 1, tokens[selector_start][pos_in_token_array] ];
        }
        /* }}} */
        /* }}} */
        /* }}} */

        /* Prettify raw value from user. {{{
         * The value is generated by putting the tokens back together to a string.
         *
         * :param argument_hash: Hash which can contain:
         *      'conf': Configuration hash.
         *      'get_internals: If true export internal data structures.
         *      'rule_index: Only prettify the rule with this index.
         * :returns: Prettified value string or object if get_internals is true.
         */
        function prettifyValue(argument_hash) {
            var user_conf = {};
            var get_internals = false;
            var rule_index;

            prettified_value = '';
            var prettified_value_array = [];

            if (typeof argument_hash !== 'undefined') {
                if (typeof argument_hash.conf === 'object') {
                    user_conf = argument_hash.conf;
                }

                if (typeof argument_hash.rule_index === 'number') {
                    rule_index = argument_hash.rule_index;
                }

                if (argument_hash.get_internals === true) {
                    get_internals = true;
                }
            }

            for (var key in default_prettify_conf) {
                if (typeof user_conf[key] === 'undefined')
                    user_conf[key] = default_prettify_conf[key];
            }

            for (var nrule = 0; nrule < new_tokens.length; nrule++) {
                if (new_tokens[nrule][0].length === 0) continue;
                // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.

                if (typeof rule_index === 'number') {
                    if (rule_index !== nrule) continue;
                } else {
                    if (nrule !== 0)
                        prettified_value += (
                            new_tokens[nrule][1]
                                ? user_conf.rule_sep_string + '|| '
                                : (
                                    new_tokens[nrule][0][0][1] === 'rule separator'
                                    ? ','
                                    : (
                                        user_conf.print_semicolon
                                        ? ';'
                                        : ''
                                    )
                                ) +
                            user_conf.rule_sep_string);
                }

                var selector_start_end_type = [ 0, 0, undefined ];
                var prettified_group_value = [];
                var count = 0;
                // console.log(new_tokens[nrule][0]);

                do {
                    selector_start_end_type = getSelectorRange(new_tokens[nrule][0], selector_start_end_type[1]);
                    // console.log(selector_start_end_type, new_tokens[nrule][0].length, count);

                    if (count > 50) {
                        throw formatLibraryBugMessage('infinite loop');
                    }

                    if (selector_start_end_type[2] !== 'rule separator') {
                        prettified_group_value.push(
                            [
                                selector_start_end_type,
                                prettifySelector(
                                    new_tokens[nrule][0],
                                    selector_start_end_type[0],
                                    selector_start_end_type[1],
                                    selector_start_end_type[2],
                                    user_conf
                                ),
                            ]
                        );
                    }

                    selector_start_end_type[1]++;
                    count++;
                    // console.log(selector_start_end_type, new_tokens[nrule][0].length, count);
                } while (selector_start_end_type[1] < new_tokens[nrule][0].length);
                // console.log('Prettified value: ' + JSON.stringify(prettified_group_value, null, '    '));
                var not_sorted_prettified_group_value = prettified_group_value.slice();

                if (!done_with_selector_reordering) {
                    prettified_group_value.sort(
                        function (a, b) {
                            var selector_order = [ 'year', 'month', 'week', 'holiday', 'weekday', 'time', '24/7', 'state', 'comment'];
                            return selector_order.indexOf(a[0][2]) - selector_order.indexOf(b[0][2]);
                        }
                    );
                }
                var old_prettified_value_length = prettified_value.length;

                prettified_value += prettified_group_value.map(
                    function (array) {
                        return array[1];
                    }
                ).join(' ');

                prettified_value_array.push( prettified_group_value );

                if (!done_with_selector_reordering_warnings) {
                    for (var i = 0, l = not_sorted_prettified_group_value.length; i < l; i++) {
                        if (not_sorted_prettified_group_value[i] !== prettified_group_value[i]) {
                            // console.log(i + ': ' + prettified_group_value[i][0][2]);
                            var length = i + old_prettified_value_length; // i: Number of spaces in string.
                            for (var x = 0; x <= i; x++) {
                                length += prettified_group_value[x][1].length;
                                // console.log('Length: ' + length + ' ' + prettified_group_value[x][1]);
                            }
                            // console.log(length);
                            parsing_warnings.push([ prettified_value, length,
                                'The selector "' + prettified_group_value[i][0][2] + '" was switched with'
                                + ' the selector "' + not_sorted_prettified_group_value[i][0][2] + '"'
                                + ' for readablitity and compatibiltity reasons.'
                            ]);
                        }
                    }
                }
            }

            done_with_selector_reordering_warnings = true;
            // console.log(JSON.stringify(prettified_value_array, null, '    '));

            if (get_internals) {
                return [ prettified_value_array, new_tokens ];
            } else {
                return prettified_value;
            }
        }
        // }}}

        /* Check selector array of tokens for specific token name pattern. {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position at which the matching should begin.
         * :param token_name(s): One or many token_name strings which have to match in that order.
         * :returns: true if token_name(s) match in order false otherwise.
         */
        function matchTokens(tokens, at /*, matches... */) {
            if (at + arguments.length - 2 > tokens.length)
                return false;
            for (var i = 0; i < arguments.length - 2; i++) {
                if (tokens[at + i][1] !== arguments[i + 2])
                    return false;
            }

            return true;
        }
        // }}}

        /* Generate selector wrapper with time offset {{{
         *
         * :param func: Generated selector code function.
         * :param shirt: Time to shift in milliseconds.
         * :param token_name(s): One or many token_name strings which have to match in that order.
         * :returns: See selector code.
         */
        function generateDateShifter(func, shift) {
            return function(date) {
                var res = func(new Date(date.getTime() + shift));

                if (typeof res[1] === 'undefined')
                    return res;
                return [ res[0], new Date(res[1].getTime() - shift) ];
            };
        }
        // }}}

        /* Top-level parser {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param selectors: Reference to selector object.
         * :param nrule: Rule number starting with 0.
         * :returns: See selector code.
         */
        function parseGroup(tokens, at, selectors, nrule) {
            var rule_modifier_specified = false;

            // console.log(tokens); // useful for debugging of tokenize
            while (at < tokens.length) {
                // console.log('Parsing at position', at +':', tokens[at]);
                if (matchTokens(tokens, at, 'weekday')) {
                    at = parseWeekdayRange(tokens, at, selectors);
                } else if (matchTokens(tokens, at, '24/7')) {
                    selectors.time.push(function(date) { return [true]; });
                    // Not needed. If there is no selector it automatically matches everything.
                    // WRONG: This only works if there is no other selector in this selector group ...
                    at++;
                } else if (matchTokens(tokens, at, 'holiday')) {
                    if (matchTokens(tokens, at+1, ','))
                        at = parseHoliday(tokens, at, selectors, true);
                    else
                        at = parseHoliday(tokens, at, selectors, false);
                    week_stable = false;
                } else if (matchTokens(tokens, at, 'month', 'number')
                        || matchTokens(tokens, at, 'month', 'weekday')
                        || matchTokens(tokens, at, 'year', 'month', 'number')
                        || matchTokens(tokens, at, 'year', 'event')
                        || matchTokens(tokens, at, 'event')) {

                    at = parseMonthdayRange(tokens, at, nrule);
                    week_stable = false;
                } else if (matchTokens(tokens, at, 'year')) {
                    at = parseYearRange(tokens, at);
                    week_stable = false;
                } else if (matchTokens(tokens, at, 'month')) {
                    at = parseMonthRange(tokens, at);
                    // week_stable = false; // Decided based on the actual value/tokens.
                } else if (matchTokens(tokens, at, 'week')) {
                    tokens[at][3] = 'week';
                    at = parseWeekRange(tokens, at);

                } else if (at !== 0 && at !== tokens.length - 1 && tokens[at][0] === ':') {
                    /* Ignore colon if they appear somewhere else than as time separator.
                     * Except the start or end of the value.
                     * This provides compatibility with the syntax proposed by Netzwolf:
                     * http://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#separator_for_readability
                     * Check for valid use of <separator_for_readability> is implemented in function getWarnings().
                     */

                    if (!done_with_warnings && matchTokens(tokens, at-1, 'holiday'))
                        parsing_warnings.push([nrule, at, 'Please don’t use ":" after ' + tokens[at-1][1] + '.']);

                    at++;
                } else if (matchTokens(tokens, at, 'number', 'timesep')
                        || matchTokens(tokens, at, 'timevar')
                        || matchTokens(tokens, at, '(', 'timevar')
                        || matchTokens(tokens, at, 'number', '-')) {

                    at = parseTimeRange(tokens, at, selectors, false);

                } else if (matchTokens(tokens, at, 'state')) {

                    if (tokens[at][0] === 'open') {
                        selectors.meaning = true;
                    } else if (tokens[at][0] === 'closed' || tokens[at][0] === 'off') {
                        selectors.meaning = false;
                    } else {
                        selectors.meaning = false;
                        selectors.unknown = true;
                    }

                    rule_modifier_specified = true;
                    at++;
                    if (typeof tokens[at] === 'object' && tokens[at][0] === ',') // additional rule
                        at = [ at + 1 ];

                } else if (matchTokens(tokens, at, 'comment')) {
                    selectors.comment = tokens[at][0];
                    if (!rule_modifier_specified) {
                        // Then it is unknown. Either with unknown explicitly
                        // specified or just a comment.
                        selectors.meaning = false;
                        selectors.unknown = true;
                    }

                    rule_modifier_specified = true;
                    at++;
                    if (typeof tokens[at] === 'object' && tokens[at][0] === ',') // additional rule
                        at = [ at + 1 ];
                } else if ((at === 0 || at === tokens.length - 1) && matchTokens(tokens, at, 'rule separator')) {
                    at++;
                    console.log("value: " + nrule);
                    // throw formatLibraryBugMessage('Not implemented yet.');
                } else {
                    var warnings = getWarnings();
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token: "' + tokens[at][1]
                        + '" This means that the syntax is not valid at that point or it is currently not supported.')
                        + (warnings ? (' ' + warnings.join('; ')) : '');
                }

                if (typeof at === 'object') { // additional rule
                    tokens[at[0] - 1][1] = 'rule separator';
                    break;
                }
            }

            return at;
        }

        function get_last_token_pos_in_token_group(tokens, at, last_at) {
            for (at++; at < last_at; at++) {
                if (typeof tokens[at] !== 'undefined') {
                    if (typeof tokens[at][3] === 'string'
                            || tokens[at][1] === 'comment'
                            || tokens[at][1] === 'state'){

                            return at - 1;
                    }
                }
            }
            return last_at;
        }
        // }}}

        // helper functions for sub parser {{{

        /* For given date, returns date moved to the start of the day with an offset specified in minutes. {{{
         * For example, if date is 2014-05-19_18:17:12, dateAtDayMinutes would
         * return 2014-05-19_02:00:00 for minutes=120.
         *
         * :param date: Date object.
         * :param minutes: Minutes used as offset starting from midnight of current day.
         * :returns: Moved date object.
         */
        function dateAtDayMinutes(date, minutes) {
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, minutes);
        }
        // }}}

        /* For given date, returns date moved to the specific day of week {{{
         *
         * :param date: Date object.
         * :param weekday: Integer number for day of week. Starting with zero (Sunday).
         * :returns: Moved date object.
         */
        function dateAtNextWeekday(date, weekday) {
            var delta = weekday - date.getDay();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + delta + (delta < 0 ? 7 : 0));
        }
        // }}}

        /* Function to determine whether an array contains a value {{{
         * Source: http://stackoverflow.com/a/1181586
         *
         * :param needle: Element to find.
         * :returns: Index of element if present, if not present returns -1.
         */
        function indexOf(needle) {
            if(typeof Array.prototype.indexOf === 'function') {
                indexOf = Array.prototype.indexOf;
            } else {
                indexOf = function(needle) {
                    var i = -1, index = -1;
                    for(i = 0; i < this.length; i++) {
                        if(this[i] === needle) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                };
            }
            return indexOf.call(this, needle);
        }
        // }}}

        /* Numeric list parser (1,2,3-4,-1) {{{
         * Used in weekday parser above.
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param func: Function func(from, to, at).
         * :returns: Position at which the token does not belong to the list any more.
         */
        function parseNumRange(tokens, at, func) {
            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'number', '-', 'number')) {
                    // Number range
                    func(tokens[at][0], tokens[at+2][0], at);
                    at += 3;
                } else if (matchTokens(tokens, at, '-', 'number')) {
                    // Negative number
                    func(-tokens[at+1][0], -tokens[at+1][0], at);
                    at += 2;
                } else if (matchTokens(tokens, at, 'number')) {
                    // Single number
                    func(tokens[at][0], tokens[at][0], at);
                    at++;
                } else {
                    throw formatWarnErrorMessage(nrule, at + matchTokens(tokens, at, '-'),
                        'Unexpected token in number range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* List parser for constrained weekdays in month range {{{
         * e.g. Su[-1] which selects the last Sunday of the month.
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Array:
         *          0. Constrained weekday number.
         *          1. Position at which the token does not belong to the list any more (after ']' token).
         */
        function getConstrainedWeekday(tokens, at) {
            var number = 0;
            var endat = parseNumRange(tokens, at, function(from, to, at) {

                // bad number
                if (from === 0 || from < -5 || from > 5)
                    throw formatWarnErrorMessage(nrule, at,
                        'Number between -5 and 5 (except 0) expected');

                if (from === to) {
                    if (number !== 0)
                        throw formatWarnErrorMessage(nrule, at,
                            'You can not use more than one constrained weekday in a month range');
                    number = from;
                } else {
                    throw formatWarnErrorMessage(nrule, at+2,
                        'You can not use a range of constrained weekdays in a month range');
                }
            });

            if (!matchTokens(tokens, endat, ']'))
                throw formatWarnErrorMessage(nrule, endat, '"]" expected.');

            return [ number, endat + 1 ];
        }
        // }}}

        // Check if period is ok. Period 0 or 1 don’t make much sense.
        function checkPeriod(at, period, period_type, parm_string) {
            if (done_with_warnings)
                return;

            if (period === 0) {
                throw formatWarnErrorMessage(nrule, at,
                    'You can not use '+ period_type +' ranges with period equals zero.');
            } else if (period === 1) {
                if (typeof parm_string === 'string' && parm_string === 'no_end_year')
                    parsing_warnings.push([nrule, at,
                        'Please don’t use '+ period_type +' ranges with period equals one.'
                        + ' If you want to express that a facility is open starting from a year without limit use "<year>+".']);
                else
                    parsing_warnings.push([nrule, at,
                        'Please don’t use '+ period_type +' ranges with period equals one.']);
            }
        }

        /* Get date moved to constrained weekday (and moved for add_days. {{{
         * E.g. used for 'Aug Su[-1] -1 day'.
         *
         * :param year: Year as integer.
         * :param month: Month as integer starting with zero.
         * :param weekday: Integer number for day of week. Starting with zero (Sunday).
         * :param constrained_weekday: Position where to start.
         * :returns: Date object.
         */
        function getDateForConstrainedWeekday(year, month, weekday, constrained_weekday, add_days) {
            var tmp_date = dateAtNextWeekday(
                new Date(year, month + (constrained_weekday[0] > 0 ? 0 : 1), 1), weekday);

            tmp_date.setDate(tmp_date.getDate() + (constrained_weekday[0] + (constrained_weekday[0] > 0 ? -1 : 0)) * 7);

            if (typeof add_days !== 'undefined' && add_days[1])
                tmp_date.setDate(tmp_date.getDate() + add_days[0]);

            return tmp_date;
        }
        // }}}

        /* Check if date is valid. {{{
         *
         * :param month: Month as integer starting with zero.
         * :param date: Day of month as integer.
         * :returns: undefined. There is no real return value. This function just throws an exception if something is wrong.
         */
        function checkIfDateIsValid(month, day, nrule, at) {
            // May use this instead. The problem is that this does not give feedback as precise as the code which is used in this function.
            // var testDate = new Date(year, month, day);
            // if (testDate.getDate() !== day || testDate.getMonth() !== month || testDate.getFullYear() !== year) {
            //  console.error('date not valid');
            // }

            // https://en.wikipedia.org/wiki/Month#Julian_and_Gregorian_calendars
            if (day < 1 || day > 31) {
                throw formatWarnErrorMessage(nrule, at, "The day for " + months[month] + " must be between 1 and 31.");
            } else if ((month === 3 || month === 5 || month === 8 || month === 10) && day === 31) {
                throw formatWarnErrorMessage(nrule, at, "Month " + months[month] + " doesn't have 31 days. The last day of " + months[month] + " is day 30.");
            } else if (month === 1 && day === 30) {
                throw formatWarnErrorMessage(nrule, at, "Month " + months[1]+ " either has 28 or 29 days (leap years).");
            }
        }
        // }}}
        // }}}

        /* Time range parser (10:00-12:00,14:00-16:00) {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param selectors: Reference to selector object.
         * :param extended_open_end: Used for combined time range with open end.
         * extended_open_end: <time> - <time> +
         *            param at is here A (if extended_open_end is true)
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseTimeRange(tokens, at, selectors, extended_open_end) {
            if (!extended_open_end)
                tokens[at][3] = 'time';

            for (; at < tokens.length; at++) {
                var has_time_var_calc = [], has_normal_time = []; // element 0: start time, 1: end time
                    has_normal_time[0]   = matchTokens(tokens, at, 'number', 'timesep', 'number');
                    has_time_var_calc[0] = matchTokens(tokens, at, '(', 'timevar');
                var minutes_from,
                    minutes_to;
                if (has_normal_time[0] || matchTokens(tokens, at, 'timevar') || has_time_var_calc[0]) {
                    // relying on the fact that always *one* of them is true

                    var is_point_in_time = false; // default no time range
                    var has_open_end     = false; // default no open end
                    var timevar_add      = [ 0, 0 ];
                    var timevar_string   = [];    // capture timevar string like 'sunrise' to calculate it for the current date.
                    var point_in_time_period;

                    // minutes_from
                    if (has_normal_time[0]) {
                        minutes_from = getMinutesByHoursMinutes(tokens, nrule, at+has_time_var_calc[0]);
                    } else {
                        timevar_string[0] = tokens[at+has_time_var_calc[0]][0];
                        minutes_from = word_value_replacement[timevar_string[0]];

                        if (has_time_var_calc[0]) {
                            timevar_add[0] = parseTimevarCalc(tokens, at);
                            minutes_from += timevar_add[0];
                        }
                    }

                    var at_end_time = at+(has_normal_time[0] ? 3 : (has_time_var_calc[0] ? 7 : 1))+1; // after '-'
                    if (!matchTokens(tokens, at_end_time - 1, '-')) { // not time range
                        if (matchTokens(tokens, at_end_time - 1, '+')) {
                            has_open_end = true;
                        } else {
                            if (oh_mode === 0) {
                                throw formatWarnErrorMessage(nrule,
                                    at+(
                                        has_normal_time[0] ? (
                                            typeof tokens[at+3] === 'object' ? 3 : 2
                                        ) : (
                                            has_time_var_calc[0] ? 2 : (
                                                    typeof tokens[at+1] !== 'undefined' ? 1 : 0
                                                )
                                        )
                                    ),
                                    'hyphen (-) or open end (+) in time range '
                                    + (has_time_var_calc[0] ? 'calculation ' : '') + 'expected.'
                                    + ' For working with points in time, the mode for ' + library_name + ' has to be altered.'
                                    + ' Maybe wrong tag?');
                            } else {
                                minutes_to = minutes_from + 1;
                                is_point_in_time = true;
                            }
                        }
                    }

                    // minutes_to
                    if (has_open_end) {
                        if (extended_open_end === 1)
                            minutes_from += minutes_in_day;
                        if (minutes_from >= 22 * 60)
                            minutes_to = minutes_from +  8 * 60;
                        else if (minutes_from >= 17 * 60)
                            minutes_to = minutes_from + 10 * 60;
                        else
                            minutes_to = minutes_in_day;
                    } else if (!is_point_in_time) {
                        has_normal_time[1] = matchTokens(tokens, at_end_time, 'number', 'timesep', 'number');
                        has_time_var_calc[1]      = matchTokens(tokens, at_end_time, '(', 'timevar');
                        if (!has_normal_time[1] && !matchTokens(tokens, at_end_time, 'timevar') && !has_time_var_calc[1]) {
                            throw formatWarnErrorMessage(nrule, at_end_time - (typeof tokens[at_end_time] !== 'undefined' ? 0 : 1),
                                    'Time range does not continue as expected');
                        } else {
                            if (has_normal_time[1]) {
                                minutes_to = getMinutesByHoursMinutes(tokens, nrule, at_end_time);
                            } else {
                                timevar_string[1] = tokens[at_end_time+has_time_var_calc[1]][0];
                                minutes_to = word_value_replacement[timevar_string[1]];
                            }

                            if (has_time_var_calc[1]) {
                                timevar_add[1] = parseTimevarCalc(tokens, at_end_time);
                                minutes_to += timevar_add[1];
                            }
                        }
                    }

                    at = at_end_time + (is_point_in_time ? -1 :
                            (has_normal_time[1] ? 3 : (has_time_var_calc[1] ? 7 : !has_open_end))
                        );

                    if (matchTokens(tokens, at, '/', 'number')) {
                        if (matchTokens(tokens, at + 2, 'timesep', 'number')) { // /hours:minutes
                            point_in_time_period = getMinutesByHoursMinutes(tokens, nrule, at + 1);
                            at += 4;
                        } else { // /minutes
                            point_in_time_period = tokens[at + 1][0];
                            at += 2;
                            if (matchTokens(tokens, at, 'timesep'))
                                throw formatWarnErrorMessage(nrule, at,
                                    'Time period does not continue as expected. Exampe "/01:30".');
                        }

                        // Check at this later state in the if condition to get the correct position.
                        if (oh_mode === 0)
                            throw formatWarnErrorMessage(nrule, at - 1,
                                'opening_hours is running in "time range mode". Found point in time.');

                        is_point_in_time = true;
                    } else if (matchTokens(tokens, at, '+')) {
                        parseTimeRange(tokens, at_end_time, selectors, minutes_to < minutes_from ? 1 : true);
                        at++;
                    } else if (oh_mode === 1 && !is_point_in_time) {
                        throw formatWarnErrorMessage(nrule, at_end_time,
                            'opening_hours is running in "points in time mode". Found time range.');
                    }

                    if (typeof lat !== 'undefined') { // lon will also be defined (see above)
                        if (!has_normal_time[0] || !(has_normal_time[1] || has_open_end || is_point_in_time) )
                            week_stable = false;
                    } else { // we can not calculate exact times so we use the already applied constants (word_value_replacement).
                        timevar_string = [];
                    }

                    // Normalize minutes into range.
                    if (!extended_open_end && minutes_from >= minutes_in_day)
                        throw formatWarnErrorMessage(nrule, at_end_time - 2,
                            'Time range starts outside of the current day');
                    if (minutes_to < minutes_from || ((has_normal_time[0] && has_normal_time[1]) && minutes_from === minutes_to))
                        minutes_to += minutes_in_day;
                    if (minutes_to > minutes_in_day * 2)
                        throw formatWarnErrorMessage(nrule, at_end_time + (has_normal_time[1] ? 4 : (has_time_var_calc[1] ? 7 : 1)) - 2,
                            'Time spanning more than two midnights not supported');

                    // This shortcut makes always-open range check faster.
                    if (minutes_from === 0 && minutes_to === minutes_in_day) {
                        selectors.time.push(function(date) { return [true]; });
                    } else {
                        if (minutes_to > minutes_in_day) { // has_normal_time[1] must be true
                            selectors.time.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end) { return function(date) {
                                var ourminutes = date.getHours() * 60 + date.getMinutes();

                                if (timevar_string[0]) {
                                    var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                    minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                                }
                                if (timevar_string[1]) {
                                    var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                    minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                    minutes_to += minutes_in_day;
                                    // Needs to be added because it was added by
                                    // normal times: if (minutes_to < minutes_from)
                                    // above the selector construction.
                                } else if (is_point_in_time && typeof point_in_time_period !== 'number') {
                                    minutes_to = minutes_from + 1;
                                }

                                if (typeof point_in_time_period === 'number') {
                                    if (ourminutes < minutes_from) {
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    } else if (ourminutes <= minutes_to) {
                                        for (var cur_min = minutes_from; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                            if (cur_min === ourminutes) {
                                                return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                            } else if (ourminutes < cur_min) {
                                                return [false, dateAtDayMinutes(date, cur_min)];
                                            }
                                        }
                                    }
                                    return [false, dateAtDayMinutes(date, minutes_in_day)];
                                } else {
                                    if (ourminutes < minutes_from)
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    else
                                        return [true, dateAtDayMinutes(date, minutes_to), has_open_end, extended_open_end];
                                }
                            }}(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end));

                            selectors.wraptime.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end) { return function(date) {
                                var ourminutes = date.getHours() * 60 + date.getMinutes();

                                if (timevar_string[0]) {
                                    var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                    minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                                }
                                if (timevar_string[1]) {
                                    var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                    minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                    // minutes_in_day does not need to be added.
                                    // For normal times in it was added in: if (minutes_to < // minutes_from)
                                    // above the selector construction and
                                    // subtracted in the selector construction call
                                    // which returns the selector function.
                                }

                                if (typeof point_in_time_period === 'number') {
                                    if (ourminutes <= minutes_to) {
                                        for (var cur_min = 0; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                            if (cur_min === ourminutes) {
                                                return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                            } else if (ourminutes < cur_min) {
                                                return [false, dateAtDayMinutes(date, cur_min)];
                                            }
                                        }
                                    }
                                } else {
                                    if (ourminutes < minutes_to)
                                        return [true, dateAtDayMinutes(date, minutes_to), has_open_end, extended_open_end];
                                }
                                return [false, undefined];
                            }}(minutes_from, minutes_to - minutes_in_day, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end));
                        } else {
                            selectors.time.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end) { return function(date) {
                                var ourminutes = date.getHours() * 60 + date.getMinutes();

                                if (timevar_string[0]) {
                                    var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                    minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                                }
                                if (timevar_string[1]) {
                                    var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                    minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                } else if (is_point_in_time && typeof point_in_time_period !== 'number') {
                                    minutes_to = minutes_from + 1;
                                }

                                if (typeof point_in_time_period === 'number') {
                                    if (ourminutes < minutes_from) {
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    } else if (ourminutes <= minutes_to) {
                                        for (var cur_min = minutes_from; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                            if (cur_min === ourminutes) {
                                                return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                            } else if (ourminutes < cur_min) {
                                                return [false, dateAtDayMinutes(date, cur_min)];
                                            }
                                        }
                                    }
                                    return [false, dateAtDayMinutes(date, minutes_in_day)];
                                } else {
                                    if (ourminutes < minutes_from)
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    else if (ourminutes < minutes_to)
                                        return [true, dateAtDayMinutes(date, minutes_to), has_open_end];
                                    else
                                        return [false, dateAtDayMinutes(date, minutes_from + minutes_in_day)];
                                }
                            }}(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end));
                        }
                    }

                } else if (matchTokens(tokens, at, 'number', '-', 'number')) { // "Mo 09-18" (Please don’t use this) -> "Mo 09:00-18:00".
                    minutes_from = tokens[at][0]   * 60;
                    minutes_to   = tokens[at+2][0] * 60;
                    if (!done_with_warnings)
                        parsing_warnings.push([nrule, at + 2,
                            'Time range without minutes specified. Not very explicit!'
                            + ' Please use this syntax instead "'
                            + (tokens[at][0]   < 10 ? '0' : '') + tokens[at][0]   + ':00-'
                            + (tokens[at+2][0] < 10 ? '0' : '') + tokens[at+2][0] + ':00".']);

                    if (minutes_from >= minutes_in_day)
                        throw formatWarnErrorMessage(nrule, at,
                            'Time range starts outside of the current day');
                    if (minutes_to < minutes_from)
                        minutes_to += minutes_in_day;
                    if (minutes_to > minutes_in_day * 2)
                        throw formatWarnErrorMessage(nrule, at + 2,
                            'Time spanning more than two midnights not supported');

                    if (minutes_to > minutes_in_day) {
                        selectors.time.push(function(minutes_from, minutes_to) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (ourminutes < minutes_from)
                                return [false, dateAtDayMinutes(date, minutes_from)];
                            else
                                return [true, dateAtDayMinutes(date, minutes_to)];
                        }}(minutes_from, minutes_to));

                        selectors.wraptime.push(function(minutes_from, minutes_to) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (ourminutes < minutes_to)
                                return [true, dateAtDayMinutes(date, minutes_to)];
                            else
                                return [false, undefined];
                        }}(minutes_from, minutes_to - minutes_in_day));
                    } else {
                        selectors.time.push(function(minutes_from, minutes_to) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (ourminutes < minutes_from)
                                return [false, dateAtDayMinutes(date, minutes_from)];
                            else if (ourminutes < minutes_to)
                                return [true, dateAtDayMinutes(date, minutes_to), has_open_end];
                            else
                                return [false, dateAtDayMinutes(date, minutes_from + minutes_in_day)];
                        }}(minutes_from, minutes_to));
                    }

                    at += 3;
                } else { // additional rule
                    if (matchTokens(tokens, at, '('))
                        throw formatWarnErrorMessage(nrule, at, 'Missing variable time (e.g. sunrise) after: "' + tokens[at][1] + '"');
                    if (matchTokens(tokens, at, 'number', 'timesep'))
                        throw formatWarnErrorMessage(nrule, at+1, 'Missing minutes in time range after: "' + tokens[at+1][1] + '"');
                    if (matchTokens(tokens, at, 'number'))
                        throw formatWarnErrorMessage(nrule, at + (typeof tokens[at+1] !== 'undefined' ? 1 : 0),
                                'Missing time separator in time range after: "' + tokens[at][1] + '"');
                    return [ at ];
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Helpers for time range parser {{{ */

        /* Get time in minutes from <hour>:<minute> (tokens). {{{
         * Only used if throwing an error is wanted.
         *
         * :param tokens: List of token objects.
         * :param nrule: Rule number starting with 0.
         * :param at: Position at which the time begins.
         * :returns: Time in minutes.
         */
        function getMinutesByHoursMinutes(tokens, nrule, at) {
            if (tokens[at+2][0] > 59)
                throw formatWarnErrorMessage(nrule, at+2,
                        'Minutes are greater than 59.');
            return tokens[at][0] * 60 + tokens[at+2][0];
        }
        // }}}

        /* Get time in minutes from "(sunrise-01:30)" {{{
         * Extract the added or subtracted time from "(sunrise-01:30)"
         * returns time in minutes e.g. -90.
         *
         * :param tokens: List of token objects.
         * :param at: Position where the specification for the point in time could be.
         * :returns: Time in minutes on suggest, throws an exception otherwise.
        */
        function parseTimevarCalc(tokens, at) {
            var error;
            if (matchTokens(tokens, at+2, '+') || matchTokens(tokens, at+2, '-')) {
                if (matchTokens(tokens, at+3, 'number', 'timesep', 'number')) {
                    if (matchTokens(tokens, at+6, ')')) {
                        var add_or_subtract = tokens[at+2][0] === '+' ? '1' : '-1';
                        var minutes = getMinutesByHoursMinutes(tokens, nrule, at+3) * add_or_subtract;
                        if (minutes === 0)
                            parsing_warnings.push([ nrule, at+5, 'Adding zero in a variable time calculation does not change the variable time.'
                                    + ' Please omit the calculation (example: "sunrise-(sunset-00:00)").' ]
                                );
                        return minutes;
                    } else {
                        error = [ at+6, '. Missing ")".'];
                    }
                } else {
                    error = [ at+5, ' (time).'];
                }
            } else {
                error = [ at+2, '. "+" or "-" expected.'];
            }

            if (error)
                throw formatWarnErrorMessage(nrule, error[0],
                    'Calculcation with variable time is not in the right syntax' + error[1]);
        }
        /* }}} */
        /* }}} */

        /* Weekday range parser (Mo,We-Fr,Sa[1-2,-1],PH). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where the weekday tokens could be.
         * :param selectors: Reference to selector object.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseWeekdayRange(tokens, at, selectors, in_holiday_selector) {
            if (!in_holiday_selector) {
                in_holiday_selector = true;
                tokens[at][3] = 'weekday';
            }

            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'weekday', '[')) {
                    // Conditional weekday (Mo[3])
                    var numbers = [];

                    // Get list of constraints
                    var endat = parseNumRange(tokens, at+2, function(from, to, at) {

                        // bad number
                        if (from === 0 || from < -5 || from > 5)
                            throw formatWarnErrorMessage(nrule, at,
                                'Number between -5 and 5 (except 0) expected');

                        if (from === to) {
                            numbers.push(from);
                        } else if (from < to) {
                            for (var i = from; i <= to; i++) {
                                // bad number
                                if (i === 0 || i < -5 || i > 5)
                                    throw formatWarnErrorMessage(nrule, at+2,
                                        'Number between -5 and 5 (except 0) expected.');

                                numbers.push(i);
                            }
                        } else {
                            throw formatWarnErrorMessage(nrule, at+2,
                                'Bad range: ' + from + '-' + to);
                        }
                    });

                    if (!matchTokens(tokens, endat, ']'))
                        throw formatWarnErrorMessage(nrule, endat, '"]" or more numbers expected.');

                    var add_days = getMoveDays(tokens, endat+1, 6, 'constrained weekdays');
                    week_stable = false;

                    // Create selector for each list element.
                    for (var nnumber = 0; nnumber < numbers.length; nnumber++) {

                        selectors.weekday.push(function(weekday, number, add_days) { return function(date) {
                            var date_num = getValueForDate(date, false); // Year not needed to distinguish.
                            var start_of_this_month = new Date(date.getFullYear(), date.getMonth(), 1);
                            var start_of_next_month = new Date(date.getFullYear(), date.getMonth() + 1, 1);

                            var target_day_this_month;

                            target_day_this_month = getDateForConstrainedWeekday(date.getFullYear(), date.getMonth(), weekday, [ number ]);

                            var target_day_with_added_days_this_month = new Date(target_day_this_month.getFullYear(),
                                target_day_this_month.getMonth(), target_day_this_month.getDate() + add_days);

                            // The target day with added days can be before this month
                            if (target_day_with_added_days_this_month.getTime() < start_of_this_month.getTime()) {
                                // but in this case, the target day without the days added needs to be in this month
                                if (target_day_this_month.getTime() >= start_of_this_month.getTime()) {
                                    // so we calculate it for the month
                                    // following this month and hope that the
                                    // target day will actually be this month.

                                    target_day_with_added_days_this_month = dateAtNextWeekday(
                                        new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) + 1, 1), weekday);
                                    target_day_this_month.setDate(target_day_with_added_days_this_month.getDate()
                                        + (number + (number > 0 ? -1 : 0)) * 7 + add_days);
                                } else {
                                    // Calculated target day is not inside this month
                                    // therefore the specified weekday (e.g. fifth Sunday)
                                    // does not exist this month. Try it next month.
                                    return [false, start_of_next_month];
                                }
                            } else if (target_day_with_added_days_this_month.getTime() >= start_of_next_month.getTime()) {
                                // The target day is in the next month. If the target day without the added days is not in this month
                                if (target_day_this_month.getTime() >= start_of_next_month.getTime())
                                    return [false, start_of_next_month];
                            }

                            var target_day_with_added_moved_days_this_month;
                            if (add_days > 0) {
                                target_day_with_added_moved_days_this_month = dateAtNextWeekday(
                                    new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) -1, 1), weekday);
                                target_day_with_added_moved_days_this_month.setDate(target_day_with_added_moved_days_this_month.getDate()
                                    + (number + (number > 0 ? -1 : 0)) * 7 + add_days);

                                if (date_num === getValueForDate(target_day_with_added_moved_days_this_month, false))
                                    return [true, dateAtDayMinutes(date, minutes_in_day)];
                            } else if (add_days < 0) {
                                target_day_with_added_moved_days_this_month = dateAtNextWeekday(
                                    new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) + 1, 1), weekday);
                                target_day_with_added_moved_days_this_month.setDate(target_day_with_added_moved_days_this_month.getDate()
                                    + (number + (number > 0 ? -1 : 0)) * 7 + add_days);

                                if (target_day_with_added_moved_days_this_month.getTime() >= start_of_next_month.getTime()) {
                                    if (target_day_with_added_days_this_month.getTime() >= start_of_next_month.getTime())
                                        return [false, target_day_with_added_moved_days_this_month];
                                } else {
                                    if (target_day_with_added_days_this_month.getTime() < start_of_next_month.getTime()
                                        && getValueForDate(target_day_with_added_days_this_month, false) === date_num)
                                        return [true, dateAtDayMinutes(date, minutes_in_day)];

                                    target_day_with_added_days_this_month = target_day_with_added_moved_days_this_month;
                                }
                            }

                            // we hit the target day
                            if (date.getDate() === target_day_with_added_days_this_month.getDate()) {
                                return [true, dateAtDayMinutes(date, minutes_in_day)];
                            }

                            // we're before target day
                            if (date.getDate() < target_day_with_added_days_this_month.getDate()) {
                                return [false, target_day_with_added_days_this_month];
                            }

                            // we're after target day, set check date to next month
                            return [false, start_of_next_month];
                        }}(tokens[at][0], numbers[nnumber], add_days[0]));
                    }

                    at = endat + 1 + add_days[1];
                } else if (matchTokens(tokens, at, 'weekday')) {
                    // Single weekday (Mo) or weekday range (Mo-Fr)
                    var is_range = matchTokens(tokens, at+1, '-', 'weekday');

                    var weekday_from = tokens[at][0];
                    var weekday_to = is_range ? tokens[at+2][0] : weekday_from;

                    var inside = true;

                    // handle reversed range
                    if (weekday_to < weekday_from) {
                        var tmp = weekday_to;
                        weekday_to = weekday_from - 1;
                        weekday_from = tmp + 1;
                        inside = false;
                    }

                    if (weekday_to < weekday_from) { // handle full range
                        selectors.weekday.push(function(date) { return [true]; });
                        // Not needed. If there is no selector it automatically matches everything.
                        // WRONG: This only works if there is no other selector in this selector group ...
                    } else {
                        selectors.weekday.push(function(weekday_from, weekday_to, inside) { return function(date) {
                            var ourweekday = date.getDay();

                            if (ourweekday < weekday_from || ourweekday > weekday_to) {
                                return [!inside, dateAtNextWeekday(date, weekday_from)];
                            } else {
                                return [inside, dateAtNextWeekday(date, weekday_to + 1)];
                            }
                        }}(weekday_from, weekday_to, inside));
                    }

                    at += is_range ? 3 : 1;
                } else if (matchTokens(tokens, at, 'holiday')) {
                    week_stable = false;
                    return parseHoliday(tokens, at, selectors, true, in_holiday_selector);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in weekday range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Get the number of days a date should be moved (if any). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where the date moving tokens could be.
         * :param max_differ: Maximal number of days to move (could also be zero if there are no day move tokens).
         * :returns: Array:
         *          0. Days to add.
         *          1. How many tokens.
         */
        function getMoveDays(tokens, at, max_differ, name) {
            var add_days = [ 0, 0 ]; // [ 'days to add', 'how many tokens' ]
            add_days[0] = matchTokens(tokens, at, '+') || (matchTokens(tokens, at, '-') ? -1 : 0);
            if (add_days[0] !== 0 && matchTokens(tokens, at+1, 'number', 'calcday')) {
                // continues with '+ 5 days' or something like that
                if (tokens[at+1][0] > max_differ)
                    throw formatWarnErrorMessage(nrule, at+2,
                        'There should be no reason to differ more than ' + max_differ + ' days from a ' + name + '. If so tell us …');
                add_days[0] *= tokens[at+1][0];
                if (add_days[0] === 0 && !done_with_warnings)
                    parsing_warnings.push([ nrule, at+2, 'Adding 0 does not change the date. Please omit this.' ]);
                add_days[1] = 3;
            } else {
                add_days[0] = 0;
            }
            return add_days;
        }
        // }}}

        /* Holiday parser for public and school holidays (PH,SH) {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param selectors: Reference to selector object.
         * :param push_to_weekday: Will push the selector into the weekday selector array which has the desired side effect of working in conjunction with the weekday selectors (either the holiday match or the weekday), which is the normal and expected behavior.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseHoliday(tokens, at, selectors, push_to_weekday, in_holiday_selector) {
            if (!in_holiday_selector) {

                if (push_to_weekday)
                    tokens[at][3] = 'weekday';
                else
                    tokens[at][3] = 'holiday'; // Could also be holiday but this is not important here.
            }

            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'holiday')) {
                    if (tokens[at][0] === 'PH') {
                        var applying_holidays = getMatchingHoliday(tokens[at][0]);

                        // Only allow moving one day in the past or in the future.
                        // This makes implementation easier because only one holiday is assumed to be moved to the next year.
                        var add_days = getMoveDays(tokens, at+1, 1, 'public holiday');

                        var selector = function(applying_holidays, add_days) { return function(date) {

                            var holidays = getApplyingHolidaysForYear(applying_holidays, date.getFullYear(), add_days);
                            // Needs to be calculated each time because of movable days.

                            var date_num = getValueForDate(date, true);

                            for (var i = 0; i < holidays.length; i++) {
                                var next_holiday_date_num = getValueForDate(holidays[i][0], true);

                                if (date_num < next_holiday_date_num) {

                                    if (add_days[0] > 0) {
                                        // Calculate the last holiday from previous year to tested against it.
                                        var holidays_last_year = getApplyingHolidaysForYear(applying_holidays, date.getFullYear() - 1, add_days);
                                        var last_holiday_last_year = holidays_last_year[holidays_last_year.length - 1];
                                        var last_holiday_last_year_num = getValueForDate(last_holiday_last_year[0], true);

                                        if (date_num < last_holiday_last_year_num ) {
                                            return [ false, last_holiday_last_year[0] ];
                                        } else if (date_num === last_holiday_last_year_num) {
                                            return [true, dateAtDayMinutes(last_holiday_last_year[0], minutes_in_day),
                                                'Day after ' +last_holiday_last_year[1] ];
                                        }
                                    }

                                    return [ false, holidays[i][0] ];
                                } else if (date_num === next_holiday_date_num) {
                                    return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
                                        (add_days[0] > 0 ? 'Day after ' : (add_days[0] < 0 ? 'Day before ' : '')) + holidays[i][1] ];
                                }
                            }

                            if (add_days[0] < 0) {
                                // Calculate the first holiday from next year to tested against it.
                                var holidays_next_year = getApplyingHolidaysForYear(applying_holidays, date.getFullYear() + 1, add_days);
                                var first_holidays_next_year = holidays_next_year[0];
                                var first_holidays_next_year_num = getValueForDate(first_holidays_next_year[0], true);
                                if (date_num === first_holidays_next_year_num) {
                                    return [true, dateAtDayMinutes(first_holidays_next_year[0], minutes_in_day),
                                        'Day before ' + first_holidays_next_year[1] ];
                                }
                            }

                            // continue next year
                            return [ false, new Date(holidays[0][0].getFullYear() + 1,
                                    holidays[0][0].getMonth(),
                                    holidays[0][0].getDate()) ];

                        }}(applying_holidays, add_days);

                        if (push_to_weekday)
                            selectors.weekday.push(selector);
                        else
                            selectors.holiday.push(selector);

                        at += 1 + add_days[1];
                    } else if (tokens[at][0] === 'SH') {
                        var applying_holidays = getMatchingHoliday(tokens[at][0]);

                        var holidays = []; // needs to be sorted each time because of movable days

                        var selector = function(applying_holidays) { return function(date) {
                            var date_num = getValueForDate(date);

                            // Iterate over holiday array containing the different holiday ranges.
                            for (var i = 0; i < applying_holidays.length; i++) {

                                var holiday = getSHForYear(applying_holidays[i], date.getFullYear());

                                for (var h = 0; h < holiday.length; h+=4) {
                                    var holiday_to_plus = new Date(date.getFullYear(), holiday[2+h] - 1, holiday[3+h] + 1);
                                    var holiday_from = (holiday[0+h] - 1) * 100 + holiday[1+h];
                                    var holiday_to   = (holiday[2+h] - 1) * 100 + holiday[3+h];
                                    holiday_to_plus  = getValueForDate(holiday_to_plus);

                                    var holiday_ends_next_year = holiday_to < holiday_from;

                                    if (date_num < holiday_from) { // date is before selected holiday

                                        // check if we are in the holidays from the last year spanning into this year
                                        var last_year_holiday = getSHForYear(applying_holidays[applying_holidays.length - 1], date.getFullYear() - 1, false);
                                        if (typeof last_year_holiday !== 'undefined') {
                                            var last_year_holiday_from = (last_year_holiday[last_year_holiday.length - 4] - 1) * 100
                                                + last_year_holiday[last_year_holiday.length - 3]; // e.g. 1125
                                            var last_year_holiday_to   = (last_year_holiday[last_year_holiday.length - 2] - 1) * 100
                                                + last_year_holiday[last_year_holiday.length - 1]; // e.g. 0005

                                            if (last_year_holiday_to < last_year_holiday_from && date_num < last_year_holiday_to)
                                                return [ true, new Date(date.getFullYear(),
                                                    last_year_holiday[last_year_holiday.length - 2] - 1,
                                                    last_year_holiday[last_year_holiday.length - 1] + 1),
                                                    applying_holidays[applying_holidays.length - 1].name ];
                                            else
                                                return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                        } else { // school holidays for last year are not defined.
                                            return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                        }
                                    } else if (holiday_from <= date_num && (date_num < holiday_to_plus || holiday_ends_next_year)) {
                                        return [ true, new Date(date.getFullYear() + holiday_ends_next_year, holiday[2+h] - 1, holiday[3+h] + 1),
                                            applying_holidays[i].name ];
                                    } else if (holiday_to_plus === date_num) { // selected holiday end is equal to month and day
                                        if (h + 4 < holiday.length) { // next holiday is next date range of the same holidays
                                            h += 4;
                                            return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                        } else {
                                            if (i + 1 === applying_holidays.length) { // last holidays are handled, continue all over again
                                                var holiday = getSHForYear(applying_holidays[0], date.getFullYear() + 1);
                                                return [ false, new Date(date.getFullYear() + !holiday_ends_next_year, holiday[0+h] - 1, holiday[1+h]) ];
                                            } else { // return the start of the next holidays
                                                    var holiday = getSHForYear(applying_holidays[i+1], date.getFullYear());
                                                    return [ false, new Date(date.getFullYear(), holiday[0] - 1, holiday[1]) ];
                                            }
                                        }
                                    }
                                }
                            }
                            return [ false ];
                        }}(applying_holidays);

                        if (push_to_weekday)
                            selectors.weekday.push(selector);
                        else
                            selectors.holiday.push(selector);
                        at += 1; // FIXME: test
                    }
                } else if (matchTokens(tokens, at, 'weekday')) {
                    return parseWeekdayRange(tokens, at, selectors, true);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token (holiday parser): ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }

        // Helpers for holiday parsers {{{

        /* Returns a number for a date which can then be used to compare just the dates (without the time). {{{
         * This is necessary because a selector could be called for the middle of the day and we need to tell if it matches that day.
         * Example: Returns 20150015 for Jan 01 2015
         *
         * :param date: Date object.
         * :param include_year: Boolean. If true include the year.
         * :returns: Number for the date.
         */
        function getValueForDate(date, include_year) {
            // Implicit because undefined evaluates to false.
            // include_year = typeof include_year !== 'undefined' ? include_year : false;

            return (include_year ? date.getFullYear() * 10000 : 0) + date.getMonth() * 100 + date.getDate();
        }
        // }}}

        // return the school holiday definition e.g. [ 5, 25, /* to */ 6, 5 ],
        // for the specified year
        function getSHForYear(SH_hash, year, fatal) {
            if (typeof fatal === 'undefined')
                fatal = true;

            var holiday = SH_hash[year];
            if (typeof holiday === 'undefined') {
                holiday = SH_hash['default']; // applies for any year without explicit definition
                if (typeof holiday === 'undefined') {
                    if (fatal) {
                        throw formatLibraryBugMessage('School holiday ' + SH_hash.name + ' has no definition for the year ' + year + '.'
                                + ' You can also add them: ' + repository_url);
                    } else {
                        return undefined;
                    }
                }
            }
            return holiday;
        }

        // Return closed holiday definition available.
        // First try to get the state, if missing get the country wide holidays
        // (which can be limited to some states).
        function getMatchingHoliday(type_of_holidays) {
            if (typeof location_cc !== 'undefined') {
                if (holidays.hasOwnProperty(location_cc)) {
                    if (typeof location_state !== 'undefined'
                            && holidays[location_cc][location_state]
                            && holidays[location_cc][location_state][type_of_holidays]) {
                        // if holidays for the state are specified use it
                        // and ignore lesser specific ones (for the country)
                        return holidays[location_cc][location_state][type_of_holidays];
                    } else if (holidays[location_cc][type_of_holidays]) {
                        // holidays are only defined country wide
                        var matching_holiday = {}; // holidays in the country wide scope can be limited to certain states
                        for (var holiday_name in holidays[location_cc][type_of_holidays]) {
                            if (typeof holidays[location_cc][type_of_holidays][holiday_name][2] === 'object') {
                                if (-1 !== holidays[location_cc][type_of_holidays][holiday_name][2].indexOf(location_state))
                                    matching_holiday[holiday_name] = holidays[location_cc][type_of_holidays][holiday_name];
                            } else {
                                matching_holiday[holiday_name] = holidays[location_cc][type_of_holidays][holiday_name];
                            }
                        }
                        if (Object.keys(matching_holiday).length === 0)
                        throw formatLibraryBugMessage('There are no holidays ' + type_of_holidays + ' defined for country ' + location_cc + '.'
                                + ' You can also add them: ' + repository_url);
                        return matching_holiday;
                    } else {
                        throw formatLibraryBugMessage('Holidays ' + type_of_holidays + ' are not defined for country ' + location_cc
                                + ' and state ' + location_state + '.'
                                + ' You can also add them: ' + repository_url);
                    }
                } else {
                    throw formatLibraryBugMessage('No holidays are defined for country ' + location_cc + '.'
                            + ' You can also add them: ' + repository_url);
                }
            } else { /* We have no idea which holidays do apply because the country code was not provided. */
                throw 'Country code missing which is needed to select the correct holidays (see README how to provide it)';
            }
        }

        function getMovableEventsForYear(Y) {
            // calculate easter
            var C = Math.floor(Y/100);
            var N = Y - 19*Math.floor(Y/19);
            var K = Math.floor((C - 17)/25);
            var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
            I = I - 30*Math.floor((I/30));
            I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
            var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
            J = J - 7*Math.floor(J/7);
            var L = I - J;
            var M = 3 + Math.floor((L + 40)/44);
            var D = L + 28 - 31*Math.floor(M/4);

            // calculate orthodox easter
            var oA = Y % 4;
            var oB = Y % 7;
            var oC = Y % 19;
            var oD = (19*oC + 15) % 30;
            var oE = (2*oA+4*oB - oD + 34) % 7;
            var oF = oD+oE;

            var oDate;
            if (oF < 9) {
                oDate = new Date(Y, 4-1, oF+4);
            } else {
                if ((oF+4)<31) {
                    oDate = new Date(Y, 4-1, oF+4);
                } else {
                    oDate = new Date(Y, 5-1, oF-26);
                }
            }

            // calculate last Sunday in February
            var lastFebruaryDay = new Date(Y, 2, 0);
            var lastFebruarySunday = lastFebruaryDay.getDate() - lastFebruaryDay.getDay();

            // calculate Victoria Day. last Monday before or on May 24
            var may_24 = new Date(Y, 4, 24);
            var victoriaDay = 24  - ((6 + may_24.getDay()) % 7);

            // calculate Canada Day. July 1st unless 1st is on Sunday, then July 2.
            var july_1 = new Date(Y, 6, 1);
            var canadaDay = july_1.getDay() === 0 ? 2 : 1;

            function firstWeekdayOfMonth(month, weekday){
                var first = new Date(Y, month, 1);
                return 1 + ((7 + weekday - first.getDay()) % 7);
            }

            function lastWeekdayOfMonth(month, weekday){
                var last = new Date(Y, month+1, 0);
                var offset=((7 + last.getDay() - weekday) % 7);
                return last.getDate() - offset;
            }

            return {
                'easter'                :  new Date(Y, M - 1, D),
                'orthodox easter'       :  oDate,
                'victoriaDay'           :  new Date(Y,  4, victoriaDay),
                'canadaDay'             :  new Date(Y,  6, canadaDay),
                'firstJanuaryMonday'    :  new Date(Y,  0, firstWeekdayOfMonth(0, 1)),
                'firstFebruaryMonday'   :  new Date(Y,  1, firstWeekdayOfMonth(1, 1)),
                'lastFebruarySunday'    :  new Date(Y,  1, lastFebruarySunday),
                'firstMarchMonday'      :  new Date(Y,  2, firstWeekdayOfMonth(2, 1)),
                'firstAprilMonday'      :  new Date(Y,  3, firstWeekdayOfMonth(3, 1)),
                'firstMayMonday'        :  new Date(Y,  4, firstWeekdayOfMonth(4, 1)),
                'firstJuneMonday'       :  new Date(Y,  5, firstWeekdayOfMonth(5, 1)),
                'firstJulyMonday'       :  new Date(Y,  6, firstWeekdayOfMonth(6, 1)),
                'firstAugustMonday'     :  new Date(Y,  7, firstWeekdayOfMonth(7, 1)),
                'firstSeptemberMonday'  :  new Date(Y,  8, firstWeekdayOfMonth(8, 1)),
                'firstSeptemberSunday'  :  new Date(Y,  8, firstWeekdayOfMonth(8, 0)),
                'firstOctoberMonday'    :  new Date(Y,  9, firstWeekdayOfMonth(9, 1)),
                'firstNovemberMonday'   :  new Date(Y, 10, firstWeekdayOfMonth(10, 1)),
                'firstMarchTuesday'     :  new Date(Y,  2, firstWeekdayOfMonth(2, 2)),
                'firstAugustTuesday'    :  new Date(Y,  7, firstWeekdayOfMonth(7, 2)),
                'firstAugustFriday'     :  new Date(Y,  7, firstWeekdayOfMonth(7, 5)),
                'firstNovemberThursday' :  new Date(Y, 10, firstWeekdayOfMonth(10, 4)),
                'lastMayMonday'         :  new Date(Y,  4, lastWeekdayOfMonth(4, 1)),
                'lastMarchMonday'       :  new Date(Y,  2, lastWeekdayOfMonth(2, 1)),
                'lastAprilMonday'       :  new Date(Y,  3, lastWeekdayOfMonth(3, 1)),
                'lastAprilFriday'       :  new Date(Y,  3, lastWeekdayOfMonth(3, 5)),
                'lastAugustMonday'      :  new Date(Y,  7, lastWeekdayOfMonth(7, 1)),
                'lastOctoberFriday'     :  new Date(Y,  9, lastWeekdayOfMonth(9, 5))
            };
        }

        function getApplyingHolidaysForYear(applying_holidays, year, add_days) {
            var movableDays = getMovableEventsForYear(year);

            var sorted_holidays = [];
            var next_holiday;

            for (var holiday_name in applying_holidays) {
                if (typeof applying_holidays[holiday_name][0] === 'string') {
                    var selected_movableDay = movableDays[applying_holidays[holiday_name][0]];
                    if (!selected_movableDay)
                        throw 'Movable day ' + applying_holidays[holiday_name][0] + ' can not not be calculated.'
                            + ' Please add the formula how to calculate it.';
                    next_holiday = new Date(selected_movableDay.getFullYear(),
                            selected_movableDay.getMonth(),
                            selected_movableDay.getDate()
                            + applying_holidays[holiday_name][1]
                        );
                    if (year !== next_holiday.getFullYear())
                        throw 'The movable day ' + applying_holidays[holiday_name][0] + ' plus '
                            + applying_holidays[holiday_name][1]
                            + ' days is not in the year of the movable day anymore. Currently not supported.';
                } else {
                    next_holiday = new Date(year,
                            applying_holidays[holiday_name][0] - 1,
                            applying_holidays[holiday_name][1]
                        );
                }
                if (add_days[0])
                    next_holiday.setDate(next_holiday.getDate() + add_days[0]);

                sorted_holidays.push([ next_holiday, holiday_name ]);
            }

            sorted_holidays = sorted_holidays.sort(function(a,b){
                if (a[0].getTime() < b[0].getTime()) return -1;
                if (a[0].getTime() > b[0].getTime()) return 1;
                return 0;
            });

            return sorted_holidays;
        }
        // }}}
        // }}}

        /* Year range parser (2013,2016-2018,2020/2). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseYearRange(tokens, at) {
            tokens[at][3] = 'year';
            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'year')) {
                    var is_range   = false,
                        has_period,
                        period;
                    if (matchTokens(tokens, at+1, '-', 'year', '/', 'number')) {
                        is_range   = true;
                        has_period = true;
                        period = parseInt(tokens[at+4][0]);
                        checkPeriod(at+4, period, 'year');
                    } else {
                        is_range   = matchTokens(tokens, at+1, '-', 'year');
                        has_period = matchTokens(tokens, at+1, '/', 'number');
                        if (has_period) {
                            period = parseInt(tokens[at+2][0]);
                            checkPeriod(at+2, period, 'year', 'no_end_year');
                        } else if (matchTokens(tokens, at+1, '+')) {
                            period = 1;
                            has_period = 2;
                        }
                    }

                    var year_from = parseInt(tokens[at][0]);
                    // error checking {{{
                        if (is_range && tokens[at+2][0] <= year_from) {
                            // handle reversed range
                            if (tokens[at+2][0] === year_from) {
                                throw formatWarnErrorMessage(nrule, at,
                                        'A year range in which the start year is equal to the end year does not make sense.'
                                        + ' Please remove the end year. E.g. "' + year_from + ' May 23"');
                            } else {
                                throw formatWarnErrorMessage(nrule, at,
                                        'A year range in which the start year is greater than the end year does not make sense.'
                                        + ' Please turn it over.');
                            }
                        }
                        if (!is_range && year_from < new Date().getFullYear()) {
                            parsing_warnings.push([ nrule, at, 'The year is in the past.' ]);
                        }
                        if (is_range && tokens[at+2][0] < new Date().getFullYear()) {
                            parsing_warnings.push([ nrule, at+2, 'The year is in the past.' ]);
                        }
                    // }}}

                    selectors.year.push(function(tokens, at, year_from, is_range, has_period, period) { return function(date) {
                        var ouryear = date.getFullYear();
                        var year_to = is_range ? parseInt(tokens[at+2][0]) : year_from;

                        if (ouryear < year_from ){
                            return [false, new Date(year_from, 0, 1)];
                        } else if (has_period) {
                            if (year_from <= ouryear) {
                                if (is_range && ouryear > year_to)
                                    return [false];
                                if (period > 0) {
                                    if ((ouryear - year_from) % period === 0) {
                                        return [true, new Date(ouryear + 1, 0, 1)];
                                    } else {
                                        return [false, new Date(ouryear + period - 1, 0, 1)];
                                    }
                                }
                            }
                        } else if (is_range) {
                            if (ouryear <= year_to)
                                return [true, new Date(year_to + 1, 0, 1)];
                        } else if (ouryear === year_from) {
                            return [true];
                        }

                        return [false];

                    }}(tokens, at, year_from, is_range, has_period, period));

                    at += 1 + (is_range ? 2 : 0) + (has_period ? (has_period === 2 ? 1 : 2) : 0);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in year range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Week range parser (week 11-20, week 1-53/2). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseWeekRange(tokens, at) {
            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'week')) {
                    at++;
                }
                if (matchTokens(tokens, at, 'number')) {
                    var is_range = matchTokens(tokens, at+1, '-', 'number'), period = 0;
                    var week_from = tokens[at][0];
                    var week_to   = is_range ? tokens[at+2][0] : week_from;
                    if (week_from > week_to) {
                        throw formatWarnErrorMessage(nrule, at+2,
                            'You have specified a week range in reverse order or leaping over a year. This is (currently) not supported.');
                    }
                    if (week_from < 1) {
                        throw formatWarnErrorMessage(nrule, at,
                            'You have specified a week date less then one. A valid week date range is 1-53.');
                    }
                    if (week_to > 53) {
                        throw formatWarnErrorMessage(nrule, is_range ? at+2 : at,
                            'You have specified a week date greater then 53. A valid week date range is 1-53.');
                    }
                    if (is_range) {
                        period = matchTokens(tokens, at+3, '/', 'number');
                        if (period) {
                            period = tokens[at+4][0];
                            if (period < 2) {
                                throw formatWarnErrorMessage(nrule, at+4,
                                    'You have specified a week period which is less than two.'
                                    + ' If you want to select the whole range from week ' + week_from + ' to week ' + week_to + ' then just omit the "/' + period + '".');
                            } else if (period > 26) {
                                throw formatWarnErrorMessage(nrule, at+4,
                                    'You have specified a week period which is greater than 26.'
                                    + ' 26.5 is the half of the maximum 53 week dates per year so a week date period greater than 26 would only apply once per year.'
                                    + ' Please specify the week selector as "week ' + week_from + '" if that is what you want to express.');
                            }
                        }
                    }

                    if (week_stable && (!(week_from <= 1 && week_to >= 53) || period)) {
                        week_stable = false;
                    }

                    if (!period && week_from === 1 && week_to === 53) {
                        /* Shortcut and work around bug. */
                        selectors.week.push(function(date) { return [true]; });
                    } else {

                        selectors.week.push(function(week_from, week_to, is_range, period) { return function(date) {
                            var ourweek = getWeekNumber(date);

                            // console.log("week_from: %s, week_to: %s", week_from, week_to);
                            // console.log("ourweek: %s, date: %s", ourweek, date);

                            // before range
                            if (ourweek < week_from) {
                                // console.log("Before: " + getNextDateOfISOWeek(week_from, date));
                                return [false, getNextDateOfISOWeek(week_from, date)];
                            }

                            // we're after range, set check date to next year
                            if (ourweek > week_to) {
                                // console.log("After");
                                return [false, getNextDateOfISOWeek(week_from, date)];
                            }

                            // we're in range
                            if (period) {
                                var in_period = (ourweek - week_from) % period === 0;
                                if (in_period) {
                                    return [true, getNextDateOfISOWeek(ourweek + 1, date)];
                                } else {
                                    return [false, getNextDateOfISOWeek(ourweek + period - 1, date)];
                                }
                            }

                            // console.log("Match");
                            return [true, getNextDateOfISOWeek(week_to === 53 ? 1 : week_to + 1, date)];
                        }}(week_from, week_to, is_range, period));
                    }

                    at += 1 + (is_range ? 2 : 0) + (period ? 2 : 0);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in week range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }

        // http://stackoverflow.com/a/6117889
        /* For a given date, get the ISO week number
         *
         * Based on information at:
         *
         *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
         *
         * Algorithm is to find nearest thursday, it's year
         * is the year of the week number. Then get weeks
         * between that date and the first day of that year.
         *
         * Note that dates in one year can be weeks of previous
         * or next year, overlap is up to 3 days.
         *
         * e.g. 2014/12/29 is Monday in week  1 of 2015
         *      2012/1/1   is Sunday in week 52 of 2011
         */
        function getWeekNumber(d) {
            // Copy date so don't modify original
            d = new Date(+d);
            d.setHours(0,0,0);
            // Set to nearest Thursday: current date + 4 - current day number
            // Make Sunday's day number 7
            d.setDate(d.getDate() + 4 - (d.getDay()||7));
            // Get first day of year
            var yearStart = new Date(d.getFullYear(),0,1);
            // Calculate full weeks to nearest Thursday
            return Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
        }
        // http://stackoverflow.com/a/16591175
        function getDateOfISOWeek(w, y) {
            var simple = new Date(y, 0, 1 + (w - 1) * 7);
            var dow = simple.getDay();
            var ISOweekStart = simple;
            if (dow <= 4)
                ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
            else
                ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
            return ISOweekStart;
        }
        function getNextDateOfISOWeek(week, date) {
            var next_date;
            for (var i = -1; i <= 1; i++) {
                next_date = getDateOfISOWeek(week, date.getFullYear() + i);
                if (next_date.getTime() > date.getTime()) {
                    return next_date;
                }
            }
            throw formatLibraryBugMessage();
        }
        // }}}

        /* Month range parser (Jan,Feb-Mar). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param push_to_monthday: Will push the selector into the monthday selector array which has the desired side effect of working in conjunction with the monthday selectors (either the month match or the monthday).
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseMonthRange(tokens, at, push_to_monthday, in_selector) {
            if (!in_selector)
                tokens[at][3] = 'month';

            for (; at < tokens.length; at++) {
                // Use parseMonthdayRange if '<month> <daynum>' and not '<month> <hour>:<minute>'
                if (matchTokens(tokens, at, 'month', 'number') && !matchTokens(tokens, at+2, 'timesep', 'number')) {
                    return parseMonthdayRange(tokens, at, nrule, true);
                } else if (matchTokens(tokens, at, 'month')) {
                    // Single month (Jan) or month range (Feb-Mar)
                    var is_range = matchTokens(tokens, at+1, '-', 'month');

                    var month_from = tokens[at][0];
                    var month_to = is_range ? tokens[at+2][0] : month_from;

                    if (is_range && week_stable) {
                        if (month_from !== (month_to + 1) % 12)
                            week_stable = false;
                    } else {
                        week_stable = false;
                    }

                    var inside = true;

                    // handle reversed range
                    if (month_to < month_from) {
                        var tmp = month_to;
                        month_to = month_from - 1;
                        month_from = tmp + 1;
                        inside = false;
                    }

                    var selector = function(tokens, at, month_from, month_to, is_range, inside) { return function(date) {
                        var ourmonth = date.getMonth();

                        // handle full range
                        if (month_to < month_from)
                            return [!inside];

                        if (ourmonth < month_from || ourmonth > month_to) {
                            return [!inside, dateAtNextMonth(date, month_from)];
                        } else {
                            return [inside, dateAtNextMonth(date, month_to + 1)];
                        }
                    }}(tokens, at, month_from, month_to, is_range, inside);

                    if (push_to_monthday === true)
                        selectors.monthday.push(selector);
                    else
                        selectors.month.push(selector);

                    at += is_range ? 3 : 1;
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in month range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }

        function dateAtNextMonth(date, month) {
            return new Date(date.getFullYear(), month < date.getMonth() ? month + 12 : month);
        }
        // }}}

        /* Month day range parser (Jan 26-31; Jan 26-Feb 26). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param nrule: Rule number starting with 0.
         * :param push_to_month: Will push the selector into the month selector array which has the desired side effect of working in conjunction with the month selectors (either the month match or the monthday).
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseMonthdayRange(tokens, at, nrule, push_to_month) {
            if (!push_to_month)
                tokens[at][3] = 'month';

            for (; at < tokens.length; at++) {
                var has_year = [], has_month = [], has_event = [], has_calc = [], has_constrained_weekday = [];
                has_year[0]  = matchTokens(tokens, at, 'year');
                has_month[0] = matchTokens(tokens, at+has_year[0], 'month', 'number');
                has_event[0] = matchTokens(tokens, at+has_year[0], 'event');

                if (has_event[0])
                    has_calc[0] = getMoveDays(tokens, at+has_year[0]+1, 200, 'event like easter');

                var at_range_sep;
                if (matchTokens(tokens, at+has_year[0], 'month', 'weekday', '[')) {
                    has_constrained_weekday[0] = getConstrainedWeekday(tokens, at+has_year[0]+3);
                    has_calc[0] = getMoveDays(tokens, has_constrained_weekday[0][1], 6, 'constrained weekdays');
                    at_range_sep = has_constrained_weekday[0][1] + (typeof has_calc[0] !== 'undefined' && has_calc[0][1] ? 3 : 0);
                } else {
                    at_range_sep = at+has_year[0]
                        + (has_event[0]
                            ? (typeof has_calc[0] !== 'undefined' && has_calc[0][1] ? 4 : 1)
                            : 2);
                }

                var at_sec_event_or_month;
                if ((has_month[0] || has_event[0] || has_constrained_weekday[0]) && matchTokens(tokens, at_range_sep, '-')) {
                    has_year[1] = matchTokens(tokens, at_range_sep+1, 'year');
                    at_sec_event_or_month = at_range_sep+1+has_year[1];
                    has_month[1] = matchTokens(tokens, at_sec_event_or_month, 'month', 'number');
                    if (!has_month[1]) {
                        has_event[1] = matchTokens(tokens, at_sec_event_or_month, 'event');
                        if (has_event[1]) {
                            has_calc[1] = getMoveDays(tokens, at_sec_event_or_month+1, 366, 'event like easter');
                        } else if (matchTokens(tokens, at_sec_event_or_month, 'month', 'weekday', '[')) {
                            has_constrained_weekday[1] = getConstrainedWeekday(tokens, at_sec_event_or_month+3);
                            has_calc[1] = getMoveDays(tokens, has_constrained_weekday[1][1], 6, 'constrained weekdays');
                        }
                    }
                }

                // monthday range like Jan 26-Feb 26 {{{
                if (has_year[0] === has_year[1] && (has_month[1] || has_event[1] || has_constrained_weekday[1])) {

                    if (has_month[0])
                        checkIfDateIsValid(tokens[at+has_year[0]][0], tokens[at+has_year[0]+1][0], nrule, at+has_year[0]+1);
                    if (has_month[1])
                        checkIfDateIsValid(tokens[at_sec_event_or_month][0], tokens[at_sec_event_or_month+1][0], nrule, at_sec_event_or_month+1);

                    var selector = function(tokens, at, nrule, has_year, has_event, has_calc, at_sec_event_or_month, has_constrained_weekday) { return function(date) {
                        var start_of_next_year = new Date(date.getFullYear() + 1, 0, 1);

                        var movableDays,
                            from_date;
                        if (has_event[0]) {
                            movableDays = getMovableEventsForYear(has_year[0] ? parseInt(tokens[at][0]) : date.getFullYear());
                            from_date = movableDays[tokens[at+has_year[0]][0]];

                            if (typeof has_calc[0] !== 'undefined' && has_calc[0][1]) {
                                var from_year_before_calc = from_date.getFullYear();
                                from_date.setDate(from_date.getDate() + has_calc[0][0]);
                                if (from_year_before_calc !== from_date.getFullYear())
                                    throw formatWarnErrorMessage(nrule, at+has_year[0]+has_calc[0][1]*3,
                                        'The movable day ' + tokens[at+has_year[0]][0] + ' plus ' + has_calc[0][0]
                                        + ' days is not in the year of the movable day anymore. Currently not supported.');
                            }
                        } else if (has_constrained_weekday[0]) {
                            from_date = getDateForConstrainedWeekday((has_year[0] ? tokens[at][0] : date.getFullYear()), // year
                                tokens[at+has_year[0]][0], // month
                                tokens[at+has_year[0]+1][0], // weekday
                                has_constrained_weekday[0],
                                has_calc[0]);
                        } else {
                            from_date = new Date((has_year[0] ? tokens[at][0] : date.getFullYear()),
                                tokens[at+has_year[0]][0], tokens[at+has_year[0]+1][0]);
                        }

                        var to_date;
                        if (has_event[1]) {
                            movableDays = getMovableEventsForYear(has_year[1]
                                        ? parseInt(tokens[at_sec_event_or_month-1][0])
                                        : date.getFullYear());
                            to_date = movableDays[tokens[at_sec_event_or_month][0]];

                            if (typeof has_calc[1] !== 'undefined' && has_calc[1][1]) {
                                var to_year_before_calc = to_date.getFullYear();
                                to_date.setDate(to_date.getDate() + has_calc[1][0]);
                                if (to_year_before_calc !== to_date.getFullYear())
                                    throw formatWarnErrorMessage(nrule, at_sec_event_or_month+has_calc[1][1],
                                        'The movable day ' + tokens[at_sec_event_or_month][0] + ' plus ' + has_calc[1][0]
                                        + ' days is not in the year of the movable day anymore. Currently not supported.');
                            }
                        } else if (has_constrained_weekday[1]) {
                            to_date = getDateForConstrainedWeekday((has_year[1] ? tokens[at_sec_event_or_month-1][0] : date.getFullYear()), // year
                                tokens[at_sec_event_or_month][0],   // month
                                tokens[at_sec_event_or_month+1][0], // weekday
                                has_constrained_weekday[1],
                                has_calc[1]);
                        } else {
                            to_date = new Date((has_year[1] ? tokens[at_sec_event_or_month-1][0] : date.getFullYear()),
                                tokens[at_sec_event_or_month][0], tokens[at_sec_event_or_month+1][0] + 1);
                        }

                        var inside = true;

                        if (to_date < from_date) {
                            var tmp = to_date;
                            to_date = from_date;
                            from_date = tmp;
                            inside = false;
                        }

                        if (date.getTime() < from_date.getTime()) {
                            return [!inside, from_date];
                        } else if (date.getTime() < to_date.getTime()) {
                            return [inside, to_date];
                        } else {
                            if (has_year[0]) {
                                return [!inside];
                            } else {
                                return [!inside, start_of_next_year];
                            }
                        }
                    }}(tokens, at, nrule, has_year, has_event, has_calc, at_sec_event_or_month, has_constrained_weekday);

                    if (push_to_month === true)
                        selectors.month.push(selector);
                    else
                        selectors.monthday.push(selector);

                    at = (has_constrained_weekday[1]
                            ? has_constrained_weekday[1][1]
                            : at_sec_event_or_month + (has_event[1] ? 1 : 2))
                        + (typeof has_calc[1] !== 'undefined' ? has_calc[1][1] : 0);

                    // }}}
                    // Monthday range like Jan 26-31 {{{
                } else if (has_month[0]) {

                    has_year = has_year[0];
                    var year = tokens[at][0]; // Could be month if has no year. Tested later.
                    var month = tokens[at+has_year][0];

                    var first_round = true;

                    do {
                        var range_from = tokens[at+1 + has_year][0];
                        var is_range = matchTokens(tokens, at+2+has_year, '-', 'number');
                        var period = undefined;
                        var range_to = tokens[at+has_year+(is_range ? 3 : 1)][0] + 1;
                        if (is_range && matchTokens(tokens, at+has_year+4, '/', 'number')) {
                            period = tokens[at+has_year+5][0];
                            checkPeriod(at+has_year+5, period, 'day');
                        }

                        if (first_round) {
                            var at_timesep_if_monthRange = at + has_year + 1 // at month number
                                + (is_range ? 2 : 0) + (period ? 2 : 0)
                                + !(is_range || period); // if not range nor has period, add one

                            // Check for '<month> <timespan>'
                            if (matchTokens(tokens, at_timesep_if_monthRange, 'timesep', 'number')
                                    && (matchTokens(tokens, at_timesep_if_monthRange+2, '+')
                                        || matchTokens(tokens, at_timesep_if_monthRange+2, '-')
                                        || oh_mode !== 0)) {
                                            return parseMonthRange(tokens, at, true, true);
                            }
                        }

                        // error checking {{{
                        if (range_to < range_from)
                            throw formatWarnErrorMessage(nrule, at+has_year+3,
                                    'Range in wrong order. From day is greater than to day.');

                        checkIfDateIsValid(month, range_from, nrule, at+1 + has_year);
                        checkIfDateIsValid(month, range_to - 1 /* added previously */,
                            nrule, at+has_year+(is_range ? 3 : 1));
                        // }}}

                        var selector = function(year, has_year, month, range_from, range_to, period) { return function(date) {
                            var start_of_next_year = new Date(date.getFullYear() + 1, 0, 1);

                            var from_date = new Date(has_year ? year : date.getFullYear(),
                                month, range_from);
                            if (month === 1 && range_from !== from_date.getDate()) // Only on leap years does this day exist.
                                return [false]; // If day 29 does not exist,
                                                // then the date object adds one day to date
                                                // and this selector should not match.
                            var to_date   = new Date(from_date.getFullYear(),
                                month, range_to);
                            if (month === 1 && is_range && range_to !== to_date.getDate()) // Only on leap years does this day exist.
                                return [false];

                            if (date.getTime() < from_date.getTime())
                                return [false, from_date];
                            else if (date.getTime() >= to_date.getTime())
                                return [false, start_of_next_year];
                            else if (!period)
                                return [true, to_date];

                            var nday = Math.floor((date.getTime() - from_date.getTime()) / msec_in_day);
                            var in_period = nday % period;

                            if (in_period === 0)
                                return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)];
                            else
                                return [false, new Date(date.getFullYear(), date.getMonth(), date.getDate() + period - in_period)];

                        }}(year, has_year, month, range_from, range_to, period);

                        if (push_to_month === true)
                            selectors.month.push(selector);
                        else
                            selectors.monthday.push(selector);

                        at += 2 + has_year + (is_range ? 2 : 0) + (period ? 2 : 0);

                        first_round = false;
                    }
                    while (matchTokens(tokens, at, ',', 'number'))


                    // }}}
                    // Only event like easter {{{
                } else if (has_event[0]) {

                    var selector = function(tokens, at, nrule, has_year, add_days) { return function(date) {

                        // console.log('enter selector with date: ' + date);
                        var movableDays = getMovableEventsForYear((has_year ? tokens[at][0] : date.getFullYear()));
                        var event_date = movableDays[tokens[at+has_year][0]];
                        if (!event_date)
                            throw 'Movable day ' + tokens[at+has_year][0] + ' can not not be calculated.'
                                + ' Please add the formula how to calculate it.';

                        if (add_days[0]) {
                            event_date.setDate(event_date.getDate() + add_days[0]);
                            if (date.getFullYear() !== event_date.getFullYear())
                                throw formatWarnErrorMessage(nrule, at+has_year+add_days[1], 'The movable day ' + tokens[at+has_year][0] + ' plus '
                                    + add_days[0]
                                    + ' days is not in the year of the movable day anymore. Currently not supported.');
                        }

                        if (date.getTime() < event_date.getTime())
                            return [false, event_date];
                        // else if (date.getTime() < event_date.getTime() + msec_in_day) // does not work because of daylight saving times
                        else if (event_date.getMonth() * 100 + event_date.getDate() === date.getMonth() * 100 + date.getDate())
                            return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)];
                        else
                            return [false, new Date(date.getFullYear() + 1, 0, 1)];

                    }}(tokens, at, nrule, has_year[0], has_calc[0]);

                    if (push_to_month === true)
                        selectors.month.push(selector);
                    else
                        selectors.monthday.push(selector);

                    at += has_year[0] + has_event[0] + (typeof has_calc[0][1] !== 'undefined' && has_calc[0][1] ? 3 : 0);
                    // }}}
                } else if (has_constrained_weekday[0]) {
                    at = parseMonthRange(tokens, at);
                } else if (matchTokens(tokens, at, 'month')) {
                    return parseMonthRange(tokens, at, true, true);
                } else {
                    // throw 'Unexpected token in monthday range: "' + tokens[at] + '"';
                    return at;
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Main selector traversal function (return state array for date). {{{
         * Checks for given date which rule and those which state and comment applies.
         *
         * :param date: Date object.
         * :returns: Array:
         *          0. resultstate: State: true for 'open', false for 'closed'.
         *          1. changedate: Next change as date object.
         *          2. unknown: true if state open is not sure.
         *          3. comment: Comment which applies for this time range (from date to changedate).
         *          4. match_rule: Rule number starting with 0 (nrule).
         */
        this.getStatePair = function(date) {
            var resultstate = false;
            var changedate;
            var unknown = false;
            var comment;
            var match_rule;

            var date_matching_rules = [];

            /* Go though all date selectors and check if they return something
             * else than closed for the given date.
             */
            for (var nrule = 0; nrule < rules.length; nrule++) {
                var matching_date_rule = true;
                // console.log(nrule, 'length',  rules[nrule].date.length);

                /* Try each date selector type. */
                for (var ndateselector = 0; ndateselector < rules[nrule].date.length; ndateselector++) {
                    var dateselectors = rules[nrule].date[ndateselector];
                    // console.log(nrule, ndateselector);

                    var has_matching_selector = false;
                    for (var datesel = 0; datesel < dateselectors.length; datesel++) {
                        var res = dateselectors[datesel](date);
                        if (res[0]) {
                            has_matching_selector = true;

                            if (typeof res[2] === 'string') { // holiday name
                                comment = [ res[2], nrule ];
                            }

                        }
                        if (typeof changedate === 'undefined' || (typeof res[1] !== 'undefined' && res[1].getTime() < changedate.getTime()))
                            changedate = res[1];
                    }

                    if (!has_matching_selector) {
                        matching_date_rule = false;
                        // We can ignore other date selectors, as the state won't change
                        // anyway until THIS selector matches (due to conjunction of date
                        // selectors of different types).
                        // This is also an optimization, if widest date selector types
                        // are checked first.
                        break;
                    }
                }

                if (matching_date_rule) {
                    /* The following lines implement date overwriting logic (e.g. for
                     * "Mo-Fr 10:00-20:00; We 10:00-16:00", We rule overrides Mo-Fr rule partly (We).
                     *
                     * This is the only way to be consistent. I thought about ("22:00-02:00; Tu 12:00-14:00") letting Th override 22:00-02:00 partly:
                     * Like: Th 00:00-02:00,12:00-14:00 but this would result in including 22:00-00:00 for Th which is probably not what you want.
                     */
                    if ((rules[nrule].date.length > 0 || nrule > 0 && rules[nrule].meaning && rules[nrule-1].date.length === 0)
                            && (rules[nrule].meaning || rules[nrule].unknown)
                            && !rules[nrule].wrapped && !rules[nrule].additional && !rules[nrule].fallback
                        ) {

                        // var old_date_matching_rules = date_matching_rules;
                        date_matching_rules = [];
                        // for (var nrule = 0; nrule < old_date_matching_rules.length; nrule++) {
                        //  if (!rules[old_date_matching_rules[nrule]].wrapped)
                        //      date_matching_rules.push(nrule);
                        // }
                    }
                    date_matching_rules.push(nrule);
                }
            }

            // console.log(date_matching_rules);
            rule:
            for (var nrule = 0; nrule < date_matching_rules.length; nrule++) {
                var rule = date_matching_rules[nrule];

                // console.log('Processing rule ' + rule + ': with date ' + date
                    // + ' and ' + rules[rule].time.length + ' time selectors (comment: "' + rules[rule].comment + '").');

                /* There is no time specified, state applies to the whole day. */
                if (rules[rule].time.length === 0) {
                    // console.log('there is no time', date);
                    if (!rules[rule].fallback || (rules[rule].fallback && !(resultstate || unknown))) {
                        resultstate = rules[rule].meaning;
                        unknown     = rules[rule].unknown;
                        match_rule  = rule;

                        // if (rules[rule].fallback)
                            // break rule; // fallback rule matched, no need for checking the rest
                        // WRONG: What if closing rules follow?
                    }
                }

                for (var timesel = 0; timesel < rules[rule].time.length; timesel++) {
                    var res = rules[rule].time[timesel](date);

                    // console.log('res:', res);
                    if (res[0]) {
                        if (!rules[rule].fallback || (rules[rule].fallback && !(resultstate || unknown))) {
                            resultstate = rules[rule].meaning;
                            unknown     = rules[rule].unknown;
                            match_rule  = rule;

                            /* Reset open end comment */
                            if (typeof comment === 'object' && comment[0] === 'Specified as open end. Closing time was guessed.')
                                comment = undefined;

                            // open end
                            if (res[2] === true && (resultstate || unknown)) {
                                comment = [ 'Specified as open end. Closing time was guessed.', match_rule ];

                                resultstate = false;
                                unknown     = true;

                                /* Hack to make second rule in '07:00+,12:00-16:00; 16:00-24:00 closed "needed because of open end"' obsolete {{{ */
                                if (typeof rules[rule].time[timesel+1] === 'function') {

                                    var next_res = rules[rule].time[timesel+1](date);
                                    if (  !next_res[0]
                                        // && next_res[2]
                                        && typeof next_res[1] === 'object'
                                        // && getValueForDate(next_res[1], true) !== getValueForDate(date, true) // Just to be sure.
                                        && rules[rule].time[timesel](new Date(date.getTime() - 1))[0]
                                        /* To distinguish the following two values:
                                         *   'sunrise-14:00,14:00+',
                                         *   '07:00+,12:00-16:00',
                                         */
                                        ) {

                                        // console.log("07:00+,12:00-16:00 matched.");

                                        resultstate = false;
                                        unknown     = false;
                                    }
                                }

                                /* Hack to handle '17:00+,13:00-02:00' {{{ */
                                /* Not enabled. To complicated, just don‘t use them …
                                 * It gets even crazier …
                                 * Time wrapping over midnight is
                                 * stored in the next internal rule:
                                 * '17:00-00:00 unknown "Specified as open end. Closing time was guessed.", 13:00-00:00 open' // First internal rule.
                                 * + ', ' overwritten part: 00:00-03:00 open + '00:00-02:00 open', // Second internal rule.
                                 */
                                if (    false
                                        && typeof rules[rule-1] === 'object'
                                        && rules[rule].build_from_token_rule.toString() === rules[rule-1].build_from_token_rule.toString()
                                        && typeof rules[rule] === 'object'
                                        && rules[rule].build_from_token_rule.toString() === rules[rule].build_from_token_rule.toString()
                                        ) {

                                    var last_wrapping_time_selector = rules[rule].time[rules[rule].time.length - 1];
                                    var last_w_res = last_wrapping_time_selector(new Date(date.getTime() - 1));
                                    // console.log(last_w_res);

                                    if (    last_w_res[0]
                                            &&  typeof last_w_res[2] === 'undefined'
                                            && (typeof last_w_res[2] === 'undefined' || last_w_res[2] === false) // Do not match for 'Tu 23:59-40:00+'
                                            &&  typeof last_w_res[1] === 'object'
                                            && date.getTime() === last_w_res[1].getTime()
                                        ) {

                                        // '05:00-06:00,17:00+,13:00-02:00',

                                        // console.log("17:00+,13:00-02:00 matched.");
                                        // console.log(JSON.stringify(rules, null, '    '));

                                        resultstate = false;
                                        unknown     = false;
                                    }
                                /* }}} */
                                }
                                /* }}} */
                            }

                            if (rules[rule].fallback) {
                                if (typeof changedate === 'undefined' || (typeof res[1] !== 'undefined' && res[1] < changedate))
                                    changedate = res[1];

                                // break rule; // Fallback rule matched, no need for checking the rest.
                                // WRONG: What if 'off' is used after fallback rule.
                            }
                        }
                    }
                    if (typeof changedate === 'undefined' || (typeof res[1] !== 'undefined' && res[1] < changedate))
                        changedate = res[1];
                }
            }

            if (typeof rules[match_rule] === 'object' && typeof rules[match_rule].comment === 'string') {
                /* Only use comment if one is explicitly specified. */
                comment = rules[match_rule].comment;
            } else if (typeof comment === 'object') {
                if (comment[1] === match_rule) {
                    comment = comment[0];
                } else {
                    comment = undefined;
                }
            }

            // console.log('changedate', changedate, resultstate, comment, match_rule);
            return [ resultstate, changedate, unknown, comment, match_rule ];
        };
        // }}}

        /* Generate prettified value for selector based on tokens. {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param last_at: Position where to stop.
         * :param conf: Configuration options.
         * :returns: Prettified value.
         */
        function prettifySelector(tokens, selector_start, selector_end, selector_type, conf) {

            var prettified_value = '';
            var at = selector_start;
            while (at <= selector_end) {
                // console.log('At: ' + at + ', token: ' + tokens[at]);
                if (matchTokens(tokens, at, 'weekday')) {
                    if (!conf.leave_weekday_sep_one_day_betw
                        && at - selector_start > 1 && (matchTokens(tokens, at-1, ',') || matchTokens(tokens, at-1, '-'))
                        && matchTokens(tokens, at-2, 'weekday')
                        && tokens[at][0] === (tokens[at-2][0] + 1) % 7) {
                            prettified_value = prettified_value.substring(0, prettified_value.length - 1) + conf.sep_one_day_between;
                    }
                    prettified_value += weekdays[tokens[at][0]];
                } else if (at - selector_start > 0 // e.g. '09:0' -> '09:00'
                        && selector_type === 'time'
                        && matchTokens(tokens, at-1, 'timesep')
                        && matchTokens(tokens, at, 'number')) {
                    prettified_value += (tokens[at][0] < 10 ? '0' : '') + tokens[at][0].toString();
                } else if (selector_type === 'time' // e.g. '9:00' -> ' 09:00'
                        && conf.zero_pad_hour
                        && at !== tokens.length
                        && matchTokens(tokens, at, 'number')
                        && matchTokens(tokens, at+1, 'timesep')) {
                    prettified_value += (
                            tokens[at][0] < 10 ?
                                (tokens[at][0] === 0 && conf.one_zero_if_hour_zero ?
                                 '' : '0') :
                                '') + tokens[at][0].toString();
                } else if (selector_type === 'time' // e.g. '9-18' -> '09:00-18:00'
                        && at + 2 <= selector_end
                        && matchTokens(tokens, at, 'number')
                        && matchTokens(tokens, at+1, '-')
                        && matchTokens(tokens, at+2, 'number')) {
                    prettified_value += (tokens[at][0] < 10 ?
                            (tokens[at][0] === 0 && conf.one_zero_if_hour_zero ? '' : '0')
                            : '') + tokens[at][0].toString();
                    prettified_value += ':00-'
                        + (tokens[at+2][0] < 10 ? '0' : '') + tokens[at+2][0].toString()
                        + ':00';
                    at += 2;
                } else if (matchTokens(tokens, at, 'comment')) {
                    prettified_value += '"' + tokens[at][0].toString() + '"';
                } else if (matchTokens(tokens, at, 'closed')) {
                    prettified_value += (conf.leave_off_closed ? tokens[at][0] : conf.keyword_for_off_closed);
                } else if (at - selector_start > 0 && matchTokens(tokens, at, 'number')
                        && (matchTokens(tokens, at-1, 'month') && selector_type === 'month'
                        ||  matchTokens(tokens, at-1, 'week')  && selector_type === 'week'
                        )) {
                    prettified_value += ' '
                        + (conf.zero_pad_month_and_week_numbers && tokens[at][0] < 10 ? '0' : '')
                        + tokens[at][0];
                } else if (at - selector_start > 0 && matchTokens(tokens, at, 'month')
                        && matchTokens(tokens, at-1, 'year')) {
                    prettified_value += ' ' + months[[tokens[at][0]]];
                } else if (at - selector_start > 0 && matchTokens(tokens, at, 'event')
                        && matchTokens(tokens, at-1, 'year')) {
                    prettified_value += ' ' + tokens[at][0];
                } else if (matchTokens(tokens, at, 'month')) {
                    prettified_value += months[[tokens[at][0]]];
                    if (at + 1 <= selector_end && matchTokens(tokens, at+1, 'weekday'))
                        prettified_value += ' ';
                } else if (at + 2 <= selector_end
                        && (matchTokens(tokens, at, '-') || matchTokens(tokens, at, '+'))
                        && matchTokens(tokens, at+1, 'number', 'calcday')) {
                    prettified_value += ' ' + tokens[at][0] + tokens[at+1][0] + ' day' + (Math.abs(tokens[at+1][0]) === 1 ? '' : 's');
                    at += 2;
                } else if (at === selector_end
                        && selector_type === 'weekday'
                        && tokens[at][0] === ':') {
                    // Do nothing.
                } else {
                    prettified_value += tokens[at][0].toString();
                }
                at++;
            }
            return prettified_value;
        }
        // }}}

        //======================================================================
        // Public interface {{{
        // All functions below are considered public.
        //======================================================================

        // Simple API {{{

        this.getState = function(date) {
            var it = this.getIterator(date);
            return it.getState();
        };

        this.getUnknown = function(date) {
            var it = this.getIterator(date);
            return it.getUnknown();
        };

        this.getStateString = function(date, past) {
            var it = this.getIterator(date);
            return it.getStateString(past);
        };

        this.getComment = function(date) {
            var it = this.getIterator(date);
            return it.getComment();
        };

        this.getMatchingRule = function(date) {
            var it = this.getIterator(date);
            return it.getMatchingRule();
        };

        /* Not available for iterator API {{{ */
        /* getWarnings: Get warnings, empty list if none {{{ */
        this.getWarnings = function() {
            var it = this.getIterator();
            return getWarnings(it);
        };
        /* }}} */

        /* prettifyValue: Get a nicely formated value {{{ */
        this.prettifyValue = function(argument_hash) {
            this.getWarnings();
            /* getWarnings has to be run before prettifyValue because some
             * decisions if a certain aspect makes sense to prettify or not
             * are based on the warnings.
             * Basically, both functions depend on each other in some way :(
             * See done_with_selector_reordering.
             */
            return prettifyValue(argument_hash);
        };
        /* }}} */

        /* getNextChange: Get time of next status change {{{ */
        this.getNextChange = function(date, maxdate) {
            var it = this.getIterator(date),
                originalState = it.getState(),
                infiniteLoopKillSwitch = 0;

            while (it.getState() === originalState && infiniteLoopKillSwitch < 100 ){
                if (it.advance(maxdate) === false){
                    return undefined;
                }

                infiniteLoopKillSwitch++;
            }

            if (originalState !== it.getState()){
                return it.getDate();
            } else {
                return undefined;
            }

            /*
            if (!it.advance(maxdate))
                return undefined;
            */
            return it.getDate();
        };
        /* }}} */

        /* isWeekStable: Checks whether open intervals are same for every week. {{{ */
        this.isWeekStable = function() {
            return week_stable;
        };
        /* }}} */
        /* }}} */
        /* }}} */

        // High-level API {{{
        /* getOpenIntervals: Get array of open intervals between two dates {{{ */
        this.getOpenIntervals = function(from, to) {
            var res = [];

            var it = this.getIterator(from);

            if (it.getState() || it.getUnknown())
                res.push([from, undefined, it.getUnknown(), it.getComment()]);

            while (it.advance(to)) {
                if (it.getState() || it.getUnknown()) {
                    if (res.length !== 0 && typeof res[res.length - 1][1] === 'undefined') {
                        // last state was also open or unknown
                        res[res.length - 1][1] = it.getDate();
                    }
                    res.push([it.getDate(), undefined, it.getUnknown(), it.getComment()]);
                } else {
                    if (res.length !== 0 && typeof res[res.length - 1][1] === 'undefined') {
                        // only use the first time as closing/change time and ignore closing times which might follow
                        res[res.length - 1][1] = it.getDate();
                    }
                }
            }

            if (res.length > 0 && typeof res[res.length - 1][1] === 'undefined')
                res[res.length - 1][1] = to;

            return res;
        };
        /* }}} */

        /* getOpenDuration: Get total number of milliseconds a facility is open,unknown within a given date range {{{ */
        this.getOpenDuration = function(from, to) {
        // console.log('-----------');

            var open    = 0;
            var unknown = 0;

            var it = this.getIterator(from);
            var prevdate    = (it.getState() || it.getUnknown()) ? from : undefined;
            var prevstate   = it.getState();
            var prevunknown = it.getUnknown();

            while (it.advance(to)) {
                if (it.getState() || it.getUnknown()) {

                    if (typeof prevdate !== 'undefined') {
                        // last state was also open or unknown
                        if (prevunknown) //
                            unknown += it.getDate().getTime() - prevdate.getTime();
                        else if (prevstate)
                            open    += it.getDate().getTime() - prevdate.getTime();
                    }

                    prevdate    = it.getDate();
                    prevstate   = it.getState();
                    prevunknown = it.getUnknown();
                    // console.log('if', prevdate, open / (1000 * 60 * 60), unknown / (1000 * 60 * 60));
                } else {
                    // console.log('else', prevdate);
                    if (typeof prevdate !== 'undefined') {
                        if (prevunknown)
                            unknown += it.getDate().getTime() - prevdate.getTime();
                        else
                            open    += it.getDate().getTime() - prevdate.getTime();
                        prevdate = undefined;
                    }
                }
            }

            if (typeof prevdate !== 'undefined') {
                if (prevunknown)
                    unknown += to.getTime() - prevdate.getTime();
                else
                    open    += to.getTime() - prevdate.getTime();
            }

            return [ open, unknown ];
        };
        /* }}} */
        /* }}} */

        // Iterator API {{{
        this.getIterator = function(date) {
            return new function(oh) {
                if (typeof date === 'undefined')
                    date = new Date();

                var prevstate = [ undefined, date, undefined, undefined, undefined ];
                var state = oh.getStatePair(date);

                /* getDate {{{ */
                this.getDate = function() {
                    return prevstate[1];
                };
                /* }}} */

                /* setDate {{{ */
                this.setDate = function(date) {
                    if (typeof date !== 'object')
                        throw 'Date parameter needed.';

                    prevstate = [ undefined, date, undefined, undefined, undefined ];
                    state     = oh.getStatePair(date);
                };
                /* }}} */

                /* getState: Check whether facility is `open' {{{ */
                this.getState = function() {
                    return state[0];
                };
                /* }}} */

                /* getUnknown: Checks whether the opening state is conditional or unknown {{{ */
                this.getUnknown = function() {
                    return state[2];
                };
                /* }}} */

                /* getStateString: Get state string. Either 'open', 'unknown' or 'closed' {{{ */
                this.getStateString = function(past) {
                    return (state[0] ? 'open' : (state[2] ? 'unknown' : (past ? 'closed' : 'close')));
                };
                /* }}} */

                /* getComment: Get the comment, undefined in none {{{ */
                this.getComment = function() {
                    return state[3];
                };
                /* }}} */

                /* getMatchingRule: Get the rule which matched thus deterrents the current state {{{ */
                this.getMatchingRule = function() {
                    if (typeof state[4] === 'undefined')
                        return undefined;

                    return rules[state[4]].build_from_token_rule[2];
                };
                /* }}} */

                /* advance: Advances to the next position {{{ */
                this.advance = function(datelimit) {
                    if (typeof datelimit === 'undefined')
                        datelimit = new Date(prevstate[1].getTime() + msec_in_day * 366 * 5);
                    else if (datelimit.getTime() <= prevstate[1].getTime())
                        return false; // The limit for advance needs to be after the current time.

                    do {
                        // open range, we won't be able to advance
                        if (typeof state[1] === 'undefined')
                            return false;

                        // console.log('\n' + 'previous check time:', prevstate[1]
                            // + ', current check time:',
                            // // (state[1].getHours() < 10 ? '0' : '') + state[1].getHours() +
                            // // ':'+(state[1].getMinutes() < 10 ? '0' : '')+ state[1].getMinutes(), state[1].getDate(),
                            // state[1],
                            // (state[0] ? 'open' : (state[2] ? 'unknown' : 'closed')) + ', comment:', state[3]);

                        // We're going backwards or staying at place.
                        // This always indicates coding error in a selector code.
                        if (state[1].getTime() <= prevstate[1].getTime())
                            throw 'Fatal: infinite loop in nextChange';

                        // don't advance beyond limits (same as open range)
                        if (state[1].getTime() >= datelimit.getTime())
                            return false;

                        // do advance
                        prevstate = state;
                        state = oh.getStatePair(prevstate[1]);
                    } while (state[0] === prevstate[0] && state[2] === prevstate[2] && state[3] === prevstate[3]);
                    return true;
                };
                /* }}} */
            }(this);
        };
        /* }}} */

        /* }}} */
    };
}));
// vim: set ts=4 sw=4 tw=0 noet foldmarker={{{,}}} foldlevel=0 foldmethod=marker :

/* global Handlebars */
/**
 * @fileOverview Search results component.
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.hbsHelpers = (function() {
	'use strict';

	var init = function() {

		Handlebars.registerHelper('hasVideo', function(options) {
			if(this['html-video-flag'] === true) {
				return options.fn(this);
			} else {
				return '';
			}
		});

	};

	init();

})(jQuery);

/**
 * @fileOverview Contact Mapping based on the contact model and the client context
 * @author: Robert Fleischmann <robert.fleischmann@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.timeHelpers = (function(){

    'use strict';

    // checks is time (represented as UTC ios string)
    // falls into British Summer Time (BST)
    // which starts at Last Sunday of March 01:00:00 UTC
    // and ends at Last Sunday of October 00:59:59 UTC
    var isTimeWithinBST = function(UTCtimeIsoString){

        // month = ['march', 'october']
        var lastSundayOf = function(year, month){

            var lastDay = [31,28,31,30,31,30,31,31,30,31,30,31];
            if (year % 4 === 0){
                lastDay[1] = 29;
            }

            if (month === 'march'){
                month = 2;
            } else if (month === 'october'){
                month = 9;
            } else {
                return false;
            }

            var date = new Date(year, month, lastDay[month] );
            date.setDate(date.getDate() - date.getDay());
            return date.getDate();
        };

        var year  = parseInt( (UTCtimeIsoString.split('-'))[0] , 10),
            month = parseInt( (UTCtimeIsoString.split('-'))[1] , 10),
            day   = parseInt( ((UTCtimeIsoString.split('T'))[0].split('-'))[2], 10),
            hour  = parseInt(((UTCtimeIsoString.split('T'))[1].split(':'))[0], 10);

        // if current month is (april, may, june, july, august or september) its BST
        if (month > 3 && month < 10 ){
            return true;
        }

        // if current month is (jan, feb, november or december) its NOT BST
        if (month < 3 || month > 10){
            return false;
        }

        if (month === 3){
            var lastSundayOfMarch = lastSundayOf(year, 'march');
            if (day < lastSundayOfMarch){
                return false;
            } else if (day > lastSundayOfMarch){
                return true;
            } else if (day === lastSundayOfMarch){

                if ( hour === 0){
                    return false;
                } else {
                    return true;
                }
            }
        }

        if (month === 10){
            var lastSundayOfOctober = lastSundayOf(year, 'october');
            if (day < lastSundayOfOctober){
                return true;
            } else if (day > lastSundayOfOctober){
                return false;
            } else if (day === lastSundayOfOctober){

                if (hour === 0){
                    return true;
                } else {
                    return false;
                }
            }
        }
    };

    return {
        isTimeWithinBST : isTimeWithinBST
    };

})();

/**
 * Mapping function
 * @param  {Object|String} rawContactModel   Contact model as object or JSON string
 * @param  {Object|String} rawClientContext  Client context as object or JSON string
 * @param  {Function}      openingHours      Opening Hours factory. This function should take an opening_hours string and return an opening_hours instance
 * @return {Object}                          Contextualized contact models
 */
bcpublic.helpandsupport.contactMapping = function (rawContactModel, rawClientContext, openingHours) {

    'use strict';

    // parse client context if JSON string is provided
    if (typeof rawClientContext === 'string') {
        rawClientContext = JSON.parse(rawClientContext);
    }

    /**
     * Types of nodes
     * @type {Object}
     */
    var TYPES = {
        GROUP: 'GROUP',
        CHANNEL: 'CHANNEL',
        CONTACT: 'CONTACT',
        FALLBACK: 'FALLBACK',
        SEGMENT: 'SEGMENT',
        SEGMENT_GROUP: 'SEGMENT_GROUP'
    };

    /**
     * Types of segments
     * @type {Array}
     */
    var SEGMENTS = [
        'Personal',
        'Premier',
        'Business'
    ];

    /**
     * Possible fallback layouts
     * @type {Object}
     */
    var FALLBACK_LAYOUTS = {
        ADDITION: 'DISPLAY_IN_ADDITION',
        REPLACEMENT: 'REPLACE_ORIGINAL'
    };

    /**
     * Node class for creating a node tree
     * @class Node
     */
    var Node = (function() {
        /**
         * Create a node
         * @constructor
         * @param {Mixed} type   Type of the node
         * @param {Mixed} value  Value of the node
         * @param {Node?} parent Optional parent node, omit to create a root node
         */
        function Node(type, value, parent) {
            this.type = type;
            this.value = value;
            this.parent = parent;
            this.children = [];
        }

        /**
         * Check if node is of type
         * @param  {Mixed}  types Types of the node
         * @return {Boolean}     Node is of the checked type
         */
        Node.prototype.is = function(types) {
            if (!isArray(types)) {
                types = [types];
            }
            return types.indexOf(this.type) > -1;
        };

        /**
         * Node has children
         * @return {Boolean}
         */
        Node.prototype.hasChildren = function() {
            return this.children.length > 0;
        };

        /**
         * Create and add a new child node
         * @param {Mixed} type  Type of the child node
         * @param {Mixed} value Value of the child node
         * @return {Node}       New child node
         */
        Node.prototype.add = function(type, value) {
            var node = new Node(type, value, this);
            this.children.push(node);
            return node;
        };

        /**
         * Add multiple child nodes
         * @param {Array<Node>} children Array of nodes
         */
        Node.prototype.addChildren = function(children) {
            forEach(children, function(child) {
                child.parent = this;
            }, this);
            this.children = this.children.concat(children);
        };

        /**
         * Remove this node from the tree
         * If you remove a node from a tree you delete the whole subtree
         */
        Node.prototype.remove = function() {
            this.parent.removeChild(this);
        };

        /**
         * Remove a child node
         * @param  {Node} child Child node to remove
         */
        Node.prototype.removeChild = function(child) {
            this.children.splice(this.children.indexOf(child), 1);
        };

        /**
         * Is this the root node
         * @return {Boolean}
         */
        Node.prototype.isRoot = function() {
            return !this.parent;
        };

        /**
         * Replace this node with one or more nodes, won't work on root node
         * @param  {Array<Nodes>} replacements Replacement node(s)
         */
        Node.prototype.replace = function(replacements) {
            if (this.isRoot()) {
                return false;
            }
            this.parent.replaceChild(this, replacements);
        };

        /**
         * Replace a child with one or more nodes
         * @param  {Node} child        Child node to replace
         * @param  {Array<Node>|Node} replacements Array of nodes or single replacement node
         */
        Node.prototype.replaceChild = function(child, replacements) {
            if (!isArray(replacements)) {
                replacements = [replacements];
            }
            // update the parent reference
            forEach(replacements, function(node) {
                node.parent = this;
            }, this);
            // replace node with replacements
            [].splice.apply(this.children, [this.children.indexOf(child), 1].concat(replacements));
        };

        return Node;
    }());

    /**
     * Contact class for contacts and fallbacks
     * @class
     */
    var Contact = (function() {

        /**
         * Create a new contact
         * @constructor
         * @param {Object} config Contact object from JSON
         * @param {Object} context Client context
         */
        function Contact(config, context) {
            this._config = config;
            extend(this, config);

            this.turnedOff = false;

            // default to replacement layout
            if (this.type !== Contact.TYPES.TELEPHONE || !this.displayFallbacks) {
                this.displayFallbacks = FALLBACK_LAYOUTS.REPLACEMENT;
            }

            // service not available (manually closed by author)
            if (typeof this.serviceUnavailable === 'object') {
                // unavailable contacts are closed
                this.isOpen = false;    
                // and flagged as turned off
                this.turnedOff = true;

                // add service message property
                this.serviceMessage = this.serviceUnavailable.message;

                // if fallbacks are disabled on a contact level, remove contacts and fallback message
                if (!this.serviceUnavailable.displayFallbacks) {
                    this.fallbacks = [];
                    delete this.fallbackMessage;
                    delete this.displayFallbacks;
                } else { // otherwise update fallback layout
                    this.displayFallbacks = this.serviceUnavailable.displayFallbacks;
                }

                // remove original propery
                delete this.serviceUnavailable;

            } else { // contact available: otherwise check opening hours
                var oh = openingHours(this.openingHours);
                var nowLocal = new Date(rawClientContext.currentTime),
                    nowUTC, now;

                // Invalid date (IE8) -> use custom date parser
                if (isNaN(nowLocal)) {
                    nowUTC = bcpublic.helpandsupport.openingHours.parseDateTime(rawClientContext.currentTime);
                } else {
                    nowUTC = new Date(nowLocal.getTime() + nowLocal.getTimezoneOffset() * 60 * 1000);
                }

                var extraUKTimeOffset = 0;
                if (bcpublic.helpandsupport.timeHelpers.isTimeWithinBST(rawClientContext.currentTime)){
                    extraUKTimeOffset = 60 * 60 * 1000; // +60 mins in ms
                }

                now = new Date(nowUTC.getTime() + extraUKTimeOffset);

                // since "oh" library doesn't take timezone into account we have to create new Date object (now) with "subtracted timezone offset",
                // so that now.getDate(), now.getHours(), now.getMinutes() will return correct values for the UK time (either it's BST or GMT)
                
                this.isOpen = oh.getState(now);
            }

            var isSecure = context && context.secure === 'HasSecurePin';

            if ((this.type === Contact.TYPES.WEBCHAT || this.type === Contact.TYPES.VIDEO) && this.authenticated && !isSecure) {
                this.loginRequired = true;
            }

            else if (this.type === Contact.TYPES.EMAIL && this.method === 'auth' && !isSecure) {
                this.loginRequired = true;
            }
        }

        /**
         * Contact types
         * @static
         * @type {Object}
         */
        Contact.TYPES = {
            TELEPHONE: 'telephone',
            WEBCHAT: 'webchat',
            VIDEO: 'video',
            EMAIL: 'email',
            REQUESTCALLBACK: 'requestCallback',
            BRANCH: 'branch',
            MYSITE: 'mysite',
            BRANCHDETAILS: 'branchDetails',
            ATMDETAILS: 'atmDetails',
            POST: 'post'
        };

        /**
         * Get a whitelist of all properties that should be exported to the
         * final JSON based on the contact type
         * @return {Array} Array with properties to export
         */
        Contact.prototype.getPropertyWhitelist = function() {
            var whiteList = [
                'type',
                'isOpen',
                'openingHours',
                'path',
                'legals',
                'fallbackMessage',
                'serviceMessage'
            ];

            switch(this.type) {
                case Contact.TYPES.TELEPHONE:
                    whiteList.push(
                        'name',
                        'phonenumbers',
                        'customMessage'
                    );
                    break;
                case Contact.TYPES.WEBCHAT:
                    whiteList.push(
                        'name',
                        'authenticated',
                        'linkTarget',
                        'loginRequired'
                    );
                    break;
                case Contact.TYPES.VIDEO:
                    whiteList.push(
                        'authenticated',
                        'linkTarget',
                        'loginRequired'
                    );
                    break;
                case Contact.TYPES.EMAIL:
                    whiteList.push(
                        'name',
                        'method',
                        'cta',
                        'emailAddress',
                        'customMessage',
                        'loginRequired'
                    );
                    break;
                case Contact.TYPES.REQUESTCALLBACK:
                    whiteList.push(
                        'cta',
                        'customMessage'
                    );
                    break;
                case Contact.TYPES.BRANCH:
                    whiteList.push(
                        'cta',
			'office'
                    );
                    break;
                case Contact.TYPES.MYSITE:
                    whiteList.push(
                        'cta'
                    );
                    break;
                case Contact.TYPES.BRANCHDETAILS:
                    whiteList.push(
                        'outletId',
                        'branchName',
                        'branchImagePath',
                        'address1',
                        'address2',
                        'address3',
                        'address4',
                        'city',
                        'county',
                        'postcode',
                        'country',
                        'latitude',
                        'longitude',
                        'additionalInformationTitle',
                        'additionalInformation',
                        'tags'
                    );
                    break;
                case Contact.TYPES.ATMDETAILS:
                    whiteList.push(
                        'outletId',
                        'branchName',
                        'operator',
                        'address1',
                        'address2',
                        'address3',
                        'address4',
                        'city',
                        'county',
                        'postcode',
                        'country',
                        'latitude',
                        'longitude',
                        'additionalInformationTitle',
                        'additionalInformation',
                        'tags'
                    );
                    break;
                case Contact.TYPES.POST:
                    whiteList.push(
                        'name',
                        'recipient',
                        'address1',
                        'address2',
                        'city',
                        'county',
                        'postcode',
                        'customMessage'
                    );
                    break;
            }
            return whiteList;
        };

        /**
         * Get contact export object
         * @return {Object} Get exportable object
         */
        Contact.prototype.toObjectLiteral = function() {
            var i;
            var prop;
            var whiteList = this.getPropertyWhitelist();
            var obj = {};

            for (i = 0; i < whiteList.length; i++) {
                prop = whiteList[i];
                if (typeof this[prop] !== 'undefined' && this[prop] !== '') {
                    obj[prop] = this[prop];
                }
            }

            return obj;
        };

        /**
         * Is contact in a segment
         * @param  {String} segment Segment to check
         * @return {Boolean}        Contact is in segment
         */
        Contact.prototype.inSegment = function(segment) {
            return this.customerSegments.indexOf(segment) > -1;
        };

        return Contact;
    }());

    /**
     * Transform class to walk the tree recursively and apply a set of mapping rules
     * @class
     */
    var Transform = (function() {

        /**
         * Create a new transform instance
         * @constructor
         */
        function Transform() {
            this.rules = [];
        }

        /**
         * Add a mapping rule
         * @param {Function} rule Function to be called with each node in the tree
         */
        Transform.prototype.addRule = function(rule) {
            this.rules.push(rule);
        };

        /**
         * Add a mapping rule for specific node types
         * @param {Mixed} types Node type or array of node types
         * @param {Function} rule Function to be called with each node in the tree
         */
        Transform.prototype.addRuleFor = function(types, rule) {
            if (!isArray(types)) {
                types = [types];
            }
            forEach(types, function(type) {
                this.addRule(function(node) {
                    if (node.is(type)) {
                        return rule(node);
                    }
                });
            }, this);
        };

        /**
         * Run transform rules on a tree
         * @param  {Node} tree Root node of the tree
         */
        Transform.prototype.run = function(tree) {
            // walk tree recursively and apply transformation rules
            forEach(this.rules, function(rule) {
                this.walkTree(tree, rule);
            }, this);
        };

        /**
         * Walk tree recursivly
         * @param  {Node} node Root node of the (sub)tree
         * @param  {Function} fn   mapping function
         * @return {Mixed} result of the mapping function call
         */
        Transform.prototype.walkTree = function(node, fn) {
            var mod;
            var result = fn(node);

            // if fn returns false no not walk children
            if (result !== false) {
                for (var i = 0; i < node.children.length; i++) {
                    mod = this.walkTree(node.children[i], fn);
                    if (typeof mod === 'number') {
                        i += mod;
                    }
                }
            }

            return result;
        };

        return Transform;
    }());

    /**
     * Array.filter polyfill
     * @param  {Array}   iterable Iterable to test
     * @param  {Function} fn      Filter function
     * @return {Array}            Filtered array
     */
    function filter(iterable, fn) {
        var result = [];
        for (var i = 0; i < iterable.length; i++) {
            if (fn(iterable[i])) {
                result.push(iterable[i]);
            }
        }
        return result;
    }

    /**
     * Array.forEach polyfill
     * @param  {Array}   iterable  Iterable to test
     * @param  {Function} fn       Function called with every element
     * @param  {Mixed?}   ctx      Context to call the function with
     */
    function forEach(iterable, fn, ctx) {
        for (var i = 0; i < iterable.length; i++) {
            fn.call(ctx, iterable[i], i, iterable);
        }
    }

    /**
     * Array.every polyfill
     * @param  {Array}    iterable Iterable to test
     * @param  {Function} fn       Test function
     * @param  {Mixed?}   ctx      Context to call the test function with
     * @return {Boolean}           All items pass the test
     */
    function every(iterable, fn, ctx) {
        for (var i = 0; i < iterable.length; i++) {
            if (!fn.call(ctx, iterable[i], i, iterable)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Array.map
     * @param  {Array}    iterable Iterable to map
     * @param  {Function} fn       Mapping function
     * @param  {Mixed?}   ctx      Context to call mapping function with
     * @return {Array}             Iterable with mapped values
     */
    function map(iterable, fn, ctx) {
        var result = [];
        for (var i = 0; i < iterable.length; i++) {
            result.push(fn.call(ctx, iterable[i], i, iterable));
        }
        return result;
    }

    /**
     * Array.isArray
     * @param  {Mixed}  arg Anything
     * @return {Boolean}    True if arg is array
     */
    function isArray(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }

    /**
     * Extend obj a with obj b (shallow)
     * @param  {Object} a Object a
     * @param  {Object} b Object b
     * @return {Object}   Mutated object a
     */
    function extend(a, b) {
        var p;
        for (p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) {
                a[p] = b[p];
            }
        }
        return a;
    }

    /**
     * Convert a valid rawContactModel into a node tree
     * @param  {Object|String} data rawContactModel as JSON or object
     * @return {Node} Root Node of the node tree
     */
    function obj2Tree(data) {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }

        // create root node (GROUP)
        var tree = new Node(TYPES.GROUP, {
            name: data.name,
            path: data.path
        });

        // Sort channels into the correct order, BHSTWO-1153
        var order = ['webchat', 'video', 'email', 'requestCallback', 'branch', 'telephone', 'post', 'mysite'];
        data.channels.sort(function(a, b) {
            return order.indexOf(a.type) - order.indexOf(b.type);
        });

        // add channels
        forEach(data.channels, function(channel) {

            var obj = { type: channel.type };

            // set channel layout
            if (channel.displayFallbacks) {
                obj.displayFallbacks = channel.displayFallbacks;
            }

            // create channel child node
            var channelNode = tree.add(TYPES.CHANNEL, obj);

            // add contacts to channel
            forEach(channel.contacts, function(contactObj) {
                if (typeof contactObj === 'object' && contactObj.openingHours !== undefined) {

                    var contact = new Contact(contactObj, rawClientContext);

                    var contactNode = channelNode.add(TYPES.CONTACT, contact);

                    // if the contact has fallbacks
                    if (contact.fallbacks) {

                        // add all contacts to the contact
                        forEach(contact.fallbacks, function(fallback) {
                            if (typeof fallback === 'object') {
                                contactNode.add(TYPES.FALLBACK, new Contact(fallback, rawClientContext));
                            }
                        });
                    }
                }
            });
        });

        return tree;
    }

    /**
     * Convert a node tree into an object literal
     * @param  {Node} node Root node of the tree
     * @return {Object} Object for the node tree
     */
    function tree2Obj(node) {
        var segmentGroup;
        var obj = extend({}, node.value);

        switch (node.type) {

            case TYPES.GROUP:
                obj.channels = map(node.children, tree2Obj);
                break;

            case TYPES.CHANNEL:
                if (node.hasChildren()) {
                    segmentGroup = node.children[0];

                    if (segmentGroup.is(TYPES.SEGMENT_GROUP)) {
                        var key = segmentGroup.value.sharedSegments ?  'contacts' : 'segments';

                        if (segmentGroup.value.sharedSegments) {
                            obj.sharedSegments = segmentGroup.value.sharedSegments;
                        }
                        obj[key] = map(segmentGroup.children, tree2Obj);
                    }
                }
                break;

            case TYPES.SEGMENT:
                obj.contacts = map(node.children, tree2Obj);
                break;

            case TYPES.FALLBACK:
                obj = node.value.toObjectLiteral();
                break;

            case TYPES.CONTACT:
                obj = node.value.toObjectLiteral();
                if (node.hasChildren()) {
                    segmentGroup = node.children[0];
                    if (segmentGroup.is(TYPES.SEGMENT_GROUP)) {
                        if (segmentGroup.value.sharedSegments) {
                            obj.sharedFallbackSegments = segmentGroup.value.sharedSegments;
                            obj.fallbackContacts = map(segmentGroup.children, tree2Obj);
                        } else {
                            obj.fallbackSegments = map(segmentGroup.children, tree2Obj);
                        }
                    }
                }
                break;

            case TYPES.SEGMENT_GROUP:
                // segment Group is not an object but an array
                obj = map(node.children, tree2Obj);
                break;
        }
        return obj;
    }

    /**
     * Is the node either a contact or a fallback
     * @param  {Node}  node Node to check
     * @return {Boolean}
     */
    function isContactOrFallback(node) {
        return node.is([TYPES.CONTACT, TYPES.FALLBACK]);
    }

    /**
     * Check if the client context has provided non personal segment
     * @return {Boolean} true if it is not Personal
     */
    function nonPersonalSegmentApplied() {
        return rawClientContext && typeof rawClientContext.customerSegment === 'string' && rawClientContext.customerSegment !== 'Personal';
    }

    /**
     * Remove duplicate children of a node
     * @param  {Node} node Node which children to remove
     */
    function removeChildDuplicates(node) {
        var paths = [];
        node.children = filter(node.children, function(childNode) {
            var contact = childNode.value;
            if (paths.indexOf(contact.path) > -1) {
                return false;
            }
            paths.push(contact.path);
            return true;
        });
    }

    /**
     * Shallow array equality check without respect to order
     * @param  {Array}    a Array A
     * @return {Function}   Function to receive array B and return a boolean value if A and B match
     */
    function arrayEquals(a) {
        return function(b) {
            var unmatchedB = b.slice(0);
            var unmatchedA = filter(a, function(val) {
                var indexB = unmatchedB.indexOf(val);
                if (indexB === -1) {
                    return true;
                }
                unmatchedB.splice(indexB, 1);
                return false;
            });
            return !unmatchedA.length && !unmatchedB.length;
        };
    }

    /**
     * Get customer segments of a node (contact or fallback)
     * @param  {Node}  node Contact node
     * @return {Array}      Customer segments
     */
    function getCustomerSegments(node) {
        return node.value.customerSegments;
    }

    // remove closed contacts without fallbacks transformator to apply to sub trees
    var removeClosedContacts = new Transform();
    removeClosedContacts.addRuleFor([TYPES.CONTACT, TYPES.FALLBACK], function(node) {
        var contact = node.value;
        if (!contact.isOpen && !node.hasChildren()) {
            node.remove();
            return -1;
        }
    });

    // remove unavailable contacts without fallbacks transformator to apply to sub trees
    var removeUnavailableContacts = new Transform();
    removeUnavailableContacts.addRuleFor([TYPES.CONTACT, TYPES.FALLBACK], function(node) {
        var contact = node.value;
        if (contact.turnedOff && !node.hasChildren()) {
            node.remove();
            return -1;
        }
    });

    // remove secure fallbacks from unsecure contacts transformator to apply to subtrees
    var removeSecureFallbacksFromUnsecureContacts = new Transform();
    removeSecureFallbacksFromUnsecureContacts.addRuleFor(TYPES.CONTACT, function(node) {
        var contact = node.value;
        if (node.hasChildren() && contact.method && contact.method === 'non-auth') {
            forEach(node.children, function(childNode) {
                var fallback = childNode.value;
                // nonsecure falls back to auth
                if (fallback.method && fallback.method === 'auth') {
                    childNode.remove();
                }
            });
        }
    });


    // main node tree transformator
    var mainTransform = new Transform();

    // remove closed fallbacks
    // as soon as a fallback is closed the display layout will be ADDITION
    mainTransform.addRuleFor(TYPES.FALLBACK, function(node) {
        if (!node.value.isOpen) {
            var parent = node.parent;

            node.remove();

            if (parent.is(TYPES.CONTACT)) {
                // set fallback layout to ADDITION
                parent.value.displayFallbacks = FALLBACK_LAYOUTS.ADDITION;

                // if parent node does not have any additional fallbacks
                if (!parent.hasChildren()) {
                    // remove fallback message
                    delete parent.value.fallbackMessage;
                }
            }

            // return -1 because a node has been removed
            return -1;
        }
    });

    // remove unavailable, closed or secure contacts
    mainTransform.addRuleFor(TYPES.CHANNEL, function(node) {
        // only if channel has contacts
        if (!node.hasChildren()) {
            return;
        }

        switch (node.value.type) {

            case 'telephone':
                // keep contacts in telephone channel
                break;

            // only remove unavailable contacts, keep closed ones
            case 'webchat':
                removeUnavailableContacts.run(node);
                break;

            // only remove unavailable contacts, keep closed ones
            case 'video':
                removeUnavailableContacts.run(node);
                break;

            // remove secure fallbacks, closed contacts and unavailable contacts
            case 'email':
                removeSecureFallbacksFromUnsecureContacts.run(node);
                removeClosedContacts.run(node);
                removeUnavailableContacts.run(node);
                break;

            // remove closed and unavailable contacts
            default:
                removeClosedContacts.run(node);
                removeUnavailableContacts.run(node);
                break;
        }
    });

    // for email and webchat and video: 
    // replace secure  contact with non-secure fallback when
    // user is not logged in and both of them (original and fallback are open)
    mainTransform.addRuleFor(TYPES.CONTACT, function(node) {
        var contact = node.value,
            webchatEmailorVideo = (contact.type === Contact.TYPES.WEBCHAT || contact.type === Contact.TYPES.EMAIL || contact.type === Contact.TYPES.VIDEO);

        if ( webchatEmailorVideo && contact.isOpen && node.hasChildren() &&  contact.loginRequired ) {

            var child = node.children[0].value;
            if (child.isOpen && (child.method === 'non-auth' || child.authenticated === false)) {
                node.replace(node.children);
            }
        }
    });

    // remove fallbacks from open contacts
    mainTransform.addRuleFor(TYPES.CONTACT, function(node) {
        if (node.value.isOpen) {
            node.children = [];
        }
    });

    // If a closed telephone contact doesn't have matching fallbacks for non-personal user, the original contact has to be shown.
    // Achieve this by changing the layout to 'in addition'
    if (nonPersonalSegmentApplied()) {
        mainTransform.addRuleFor(TYPES.CONTACT, function(node) {
            var contact = node.value;

            // Segments are applicable to telephones only
            if (contact.type !== 'telephone') {
                return;
            }

            if (node.hasChildren() && !contact.isOpen && contact.displayFallbacks === FALLBACK_LAYOUTS.REPLACEMENT) {
                var matchingSegments = filter(node.children, function(fallbackNode) {
                    return fallbackNode.value.customerSegments.indexOf(rawClientContext.customerSegment) > -1;
                });

                if (matchingSegments.length === 0) {
                    contact.displayFallbacks = FALLBACK_LAYOUTS.ADDITION;
                }
            }
        });
    }

    // replace closed contacts with fallbackSegments if layout is set to replacement
    mainTransform.addRuleFor(TYPES.CONTACT, function(node) {
        var contact = node.value;
        if (node.hasChildren() && !contact.isOpen && contact.displayFallbacks === FALLBACK_LAYOUTS.REPLACEMENT) {


            // filter children by selected segment
            if (nonPersonalSegmentApplied()) {

                // shim for Arrary.prototype.indexOf
                var indexOf = function(needle) {
                    if(typeof Array.prototype.indexOf === 'function') {
                        indexOf = Array.prototype.indexOf;
                    } else {
                        indexOf = function(needle) {
                            var i = -1, index = -1;

                            for(i = 0; i < this.length; i++) {
                                if(this[i] === needle) {
                                    index = i;
                                    break;
                                }
                            }
                            return index;
                        };
                    }
                    return indexOf.call(this, needle);
                };

                // if customer segment is not within original contact do not use fallbacks
                if ( indexOf.call(node.value.customerSegments, rawClientContext.customerSegment) === -1 ){
                    return false;
                }
            }

            // has a segmentGroup with fallbacks
            node.replace(node.children);
        }
    });

    // create segmentGroups for fallbacks and contacts
    mainTransform.addRuleFor([TYPES.CHANNEL, TYPES.CONTACT], function(node) {
        var segmentGroup;
        var children = node.children;

        // only if node has children and all children are contcats or fallbacks
        if (node.hasChildren() && every(children, isContactOrFallback)) {

            // if all contacts have the same groups assigned we don't need to split them
            var segmentsOfFirstChild = children[0].value.customerSegments;
            if (every(map(children, getCustomerSegments), arrayEquals(segmentsOfFirstChild))) {

                segmentGroup = new Node(TYPES.SEGMENT_GROUP, {
                    sharedSegments: segmentsOfFirstChild.slice(0)
                }, node);

                segmentGroup.addChildren(children);

            } else { // different segments -> split and duplicate contacts

                segmentGroup = new Node(TYPES.SEGMENT_GROUP, { sharedSegments: false }, node);

                forEach(SEGMENTS, function(segment) {
                    // filter all fallbacs within that segment
                    var segmentContacts = filter(children, function(c) {
                        return c.value.inSegment(segment);
                    });
                    // if segment has fallbacks
                    if (segmentContacts.length) {
                        // add segment node to segmentGroup
                        var newSegment = segmentGroup.add(TYPES.SEGMENT, { customerSegment: segment });
                        // add segment fallbacks to segment node
                        newSegment.addChildren(segmentContacts);
                    }
                });
            }
            // set children of original contact to single segment group
            node.children = [segmentGroup];
        }
    });

    // remove non matching segments if clientContext segment is provided
    if (nonPersonalSegmentApplied()) {
        mainTransform.addRuleFor(TYPES.SEGMENT_GROUP, function(node) {
            // Segment logic applies to the phone channel only
            if (node.parent.value.type !== 'telephone') {
                return;
            }

            // Show only a matching segment of fallbacks
            if (node.value.sharedSegments === false) {
                var matchingSegments = filter(node.children, function(segmentNode) {
                    return segmentNode.value.customerSegment === rawClientContext.customerSegment;
                });

                if (matchingSegments.length) {
                    forEach(matchingSegments, function(segmentNode) {
                        segmentNode.value.hasHiddenSiblings = true;
                    });
                    node.children = matchingSegments;
                } else if (node.parent.is(TYPES.CONTACT)) {
                    // Don't show any fallbacks, if there are no matching ones
                    node.remove();
                }
            } else {
                // remove fallbacks with shared segments if none of them matches the current user segment
                if (node.parent.is(TYPES.CONTACT) && node.value.sharedSegments.indexOf(rawClientContext.customerSegment) === -1) {
                    node.remove();
                }
            }
        });
    }

    // remove empty channels
    mainTransform.addRuleFor(TYPES.CHANNEL, function(node) {
        if (!node.hasChildren()) {
            node.remove();
            return -1;
        }
    });


    // clean up segment groups with only one segment containing a single segment group
    mainTransform.addRuleFor(TYPES.SEGMENT_GROUP, function(node) {
        var c =  node.children;

        if (c.length === 1                           && // segment group has only one child
            c[0].is(TYPES.SEGMENT)                   && // which is a segment
            c[0].children.length ===1                && // that has only one child
            c[0].children[0].is(TYPES.SEGMENT_GROUP)    // which is a segment group
        ) {
            // replace outer segment group with the inner one
            node.replace(c[0].children[0]);
        }
    });

    // remove duplicate contacts within one segment group
    mainTransform.addRuleFor(TYPES.SEGMENT_GROUP, function(node) {
        // segment group with shared segments
        if (node.value.sharedSegments) {
            removeChildDuplicates(node);
        }
    });

    // remove duplicate contacts within one segment
    mainTransform.addRuleFor(TYPES.SEGMENT, removeChildDuplicates);

    // the actual transformation is triggered in the next 3 LOC

    // create node tree from raw contact model
    var contactModelTree = obj2Tree(rawContactModel);
    // transform tree with the main transformer
    mainTransform.run(contactModelTree);
    // create object from node tree
    return tree2Obj(contactModelTree);
};

// needed to  require the tests via commonjs
if (typeof exports === 'object') {
    module.exports = bcpublic.helpandsupport.contactMapping;
}

/**
 * @fileOverview Render HTML elements
 * @author: Robert Fleischmann <robert.fleischmann@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.htmlRendering = (function() {
    'use strict';

    function isArray(arg) { return Object.prototype.toString.call(arg) === '[object Array]'; }
    // Disabled for lack of use due to inconsistencies with IE8 and dom elements
    // function isObject(arg) { return Object.prototype.toString.call(arg) === '[object Object]'; }

    function h(tag, props, children) {
        var el, i, child;

        /*
         * there are two cases
         * - h('li', {className:'cls-name'})
         * - h('ul', h('li', {className:'cls-name'}))
         *
         * There's a need to tell a plain object from an HTMLElement by...
         * props.nodeType
         *
         * Compatibility [BHSTWO-1087]:
         * props === HTMLElement
         * IE8: Object.prototype.toString.call(props) === [object Object]
         * Chrome: Object.prototype.toString.call(props) === [object HTMLElement]
         *
         * test for props.nodeType instead to identify if it is a dom element
         */
        if (arguments.length === 2) {
            // Treat props as children when:
            // - it is an array of dom elements (optimistically)
            // - it is a string, which is text to inside the component
            // - it's a single dom element
            // Otherwise it is a set of properties to assign to the element
            if (isArray(props) || typeof props === 'string' || props.nodeType) {
                children = props;
                props = {};
            }
        } else {
            props = props || {};
        }

        el = document.createElement(tag);

        // set properties
        for (i in props) {
            if (Object.prototype.hasOwnProperty.call(props,i) && props[i]) {
                if (i === 'className') {
                    el.setAttribute('class', props[i]);
                } else {
                    el.setAttribute(i, props[i]);
                }
            }
        }

        if (children !== undefined && !isArray(children)) {
            children = [children];
        }

        if (children && children.length) {
            for (i = 0; i < children.length; ++i) {
                child = children[i];
                if (typeof child === 'string') {
                    el.appendChild(document.createTextNode(child));
                } else if (isArray(child)) {
                    el.appendChild(h.apply(null, child));
                } else {              
                    if (child !== undefined) {
                        el.appendChild(child);
                    }
                }
            }
        }

        return el;
    }


    return {
        h: h
    };
})();
/* global opening_hours */
/**
 * @fileOverview Render opening hours
 * @author: Robert Fleischmann <robert.fleischmann@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.openingHours = (function() {
    'use strict';

    /**
     * Parse dateTime string
     * @param  {String} dateStr    date string
     * @return {Object} Date Object
     */
    function parseDateTime(dateStr) {
        var a=dateStr.split('T');
        var d=a[0].split('-');
        var t=a[1].split(':');
        var s=t[2].substr(0,t[2].length-1); // Remove Z
        var date = new Date(d[0],(d[1]-1),d[2],t[0],t[1],s);
        return date;
    }

    function getWeekDay(dateStr){
        var a=dateStr.split('T');
        var d=a[0].split('-');
        var date = new Date(d[0],(d[1]-1),d[2]);
        return (date.getDay() + 6) % 7;
    }

    function createElement(tag, textContent, props) {
        var i;
        var el = document.createElement(tag);
        props = props || {};

        // set properties
        for (i in props) {
            if (props.hasOwnProperty(i) && props[i]) {
                if (i === 'className') {
                    el.setAttribute('class', props[i]);
                } else {
                    el.setAttribute(i, props[i]);
                }
            }
        }

        // set inner text
        if (textContent) {
            el.textContent = textContent;
            el.innerText = textContent;
        }

        return el;
    }

    function createChild(appendTo, tag, textContent, props) {
        var el = createElement(tag, textContent, props);
        appendTo.appendChild(el);
        return el;
    }

    function lz(v) {
        // Fix negative values for IE8
        var str = '00' + v,
            start = str.length - 2;
        return str.substr(start);
    }

    function formatTime(date, compact) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        if (compact && minutes === 0) {
            return hours + ampm;
        }
        return hours + '.' + lz(minutes) + ampm;
    }

    function renderWeek(week, dayOfWeek) {
        var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var el = createElement('ul', '', { className: 'openinghours' });
        var child, ul;

        if (!week.isWeekStable) {
            days.push('Public holiday');
        }

        // check for 24/7
        if (week.numDays === 1 && week.days[0] && week.days[0].length === 1) {
            if (week.days[0][0].from === week.from && week.days[0][0].to === week.to) {
                createChild(el, 'li', '24/7');

                // might be off on a PH
                if (!week.isWeekStable) {
                    child = createChild(el, 'li');
                    createChild(child, 'span', days[7], { className: 'label' });
                    ul = createChild(child, 'ul', '', { className: 'times' });

                    if (week.days[7].length) {
                        createChild(ul, 'li', formatTime(week.days[7][0].from) + ' to ' + formatTime(week.days[7][0].to));
                    } else {
                        createChild(ul, 'li', 'Closed');
                    }
                }

                return el;
            }
        }

        var today = dayOfWeek !== undefined ? dayOfWeek : ((new Date()).getDay() + 6) % 7;

        for (var i = 0, xi = days.length; i < xi; i++) {
            child = createChild(el, 'li', '', { className: today === i ? 'today' : '' });
            createChild(child, 'span', days[i], { className: 'label' });
            ul = createChild(child, 'ul', '', { className: 'times' });

            if (!week.days[i] || week.days[i].length === 0) {
                createChild(ul, 'li', 'Closed');
            } else {
                for (var u = 0, xu = week.days[i].length; u < xu; u++) {
                    createChild(ul, 'li', formatTime(week.days[i][u].from) + ' to ' + formatTime(week.days[i][u].to));
                }
            }
        }

        return el;
    }

    /**
     * Get next open time from opening hours within the next week
     * @param   {String} openingHours Open street formatted opening hours
     * @param   {String} currentTime Current time, use server time from the context object
     * @return  {String}              Open next time and day string
     */
    function getRichState(openingHours, currentUTCTime, includeReopenTime ) {

        // we need to change currentUTCTime to currentTime (UK)

        var from = parseDateTime(currentUTCTime);

        var extraUKTimeOffset = 0;
        if (bcpublic.helpandsupport.timeHelpers.isTimeWithinBST(currentUTCTime)){
            extraUKTimeOffset = 60 * 60 * 1000; // +60 mins in ms
        }

        from = new Date( from.getTime() + extraUKTimeOffset );

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var oh = new opening_hours(openingHours, { address: { country_code: 'gb' } }); // jshint ignore:line

        var to = new Date(from.getTime() + 864e5 * 7); // Add 24h * 7

        var isOpen = oh.getState(from);
        var nextChange = oh.getNextChange(from, to);
        var nextChangeOnSameDay = nextChange && nextChange.getDate() === from.getDate();

        var label = [];

        if (isOpen) {
            label.push('Open');

            if (openingHours === '24/7'){

                label.push('24/7, including holidays');

            } else  if (nextChange) {
                label.push('now until');
                label.push(formatTime(nextChange, true));
                if (!nextChangeOnSameDay) {
                    label.push(days[nextChange.getDay()]);
                }
            }
        } else if (nextChange && includeReopenTime) {
            label.push('Open again at');
            
            if (!nextChangeOnSameDay) {
                label.push(formatTime(nextChange, true));
                label.push(days[nextChange.getDay()] + '.');
            } else {
                label.push(formatTime(nextChange, true) + '.');
            }
        }

        return label.join(' ');
    }

    function createOpeningHoursTable(openingHours, today) {
        var interval, day, from, to, oh, intervals, week, i, phFrom, phTo, phIntervals;

        var splitIntervalsByDays = function(intervals){

            var newIntervals = [];

            for (var i in intervals) {
                if (intervals.hasOwnProperty(i)) {

                    interval = intervals[i];
                    var daysSpan = interval[1].getDate() - interval[0].getDate(),
                        addNextDay;

                    var f = interval[0];

                    if (daysSpan > 0){

                        var newSingleInterval = [];
                        newSingleInterval.push(interval[0]);

                        for (var day=1; day <= daysSpan; day++){

                            var newDay = new Date(f.getFullYear(),f.getMonth(),f.getDate() +day, 0, 0, 0);

                            newSingleInterval.push( newDay );
                            newIntervals.push(newSingleInterval);
                            newSingleInterval = [];

                            addNextDay = !(day === daysSpan && newDay.getTime() === interval[1].getTime() );

                            if (addNextDay === true){
                                newSingleInterval.push( newDay );
                            }
                        }

                        if (addNextDay === true){
                            newSingleInterval.push(interval[1]);
                            newIntervals.push(newSingleInterval);
                        }

                    } else {
                        newIntervals.push(interval);
                    }
                }
            }

            return newIntervals;
        };

        try {
            // create start date first monday in feb
            from = new Date();
            from.setMonth(1); // Feb
            from.setDate(1);
            from.setHours(0);
            from.setMinutes(0);
            from.setSeconds(0);
            from.setMilliseconds(0);
            // get first monday in month
            while (from.getDay() !== 1) {
                // add 24h
                from = new Date(from.getTime() + 864e5);
            }
            // add one week
            to = new Date(from.getTime() + 6048e5);

            oh = new opening_hours(openingHours, { address: { country_code: 'gb' } }); // jshint ignore:line
            intervals = oh.getOpenIntervals(from, to);

            // if we have only 1 interval === 24/7 then don't split by days
            if ((intervals.length === 1 && intervals[0][0] === from && intervals[0][1] === to) === false){
                intervals = splitIntervalsByDays(intervals);
            }

            week = {
                from: from,
                to: to,
                isWeekStable: oh.isWeekStable(),
                numDays: 0,
                days: {}
            };

            // interval [ from1, to1, unknown1, comment1 ];
            for (i in intervals) {
                if (intervals.hasOwnProperty(i)) {
                    interval = intervals[i];
                    // 0=Mo, 1=Tu, ..., 6=Su
                    day = (interval[0].getDay() + 6) % 7;

                    if (!week.days[day]) {
                        week.days[day] = [];
                        week.numDays++;
                    }

                    week.days[day].push({
                        from: interval[0],
                        to: interval[1]
                    });
                }
            }

            if (!week.isWeekStable) {
                phFrom = new Date(from.getTime());
                phFrom.setDate(25); // always a bank holiday
                phFrom.setMonth(11); // 12

                phTo = new Date(phFrom.getTime());
                phTo.setHours(23);
                phTo.setMinutes(59);
                phTo.setSeconds(59);
                phTo.setMilliseconds(999);

                phIntervals = oh.getOpenIntervals(phFrom, phTo);
                week.days[7] = [];
                if (phIntervals.length) {
                    week.days[7].push({
                        from: phIntervals[0][0],
                        to: phIntervals[0][1]
                    });
                }
            }

            return renderWeek(week, today);
        } catch (e) {
            return createElement('div', 'Error: ' + e, { className: 'openinghours error' });
        }
    }

    return {
        getTable: function(openingHours, today) {
            return createOpeningHoursTable(openingHours, today);
        },
        getRichState: getRichState,
        parseDateTime: parseDateTime,
        getWeekDay: getWeekDay
    };

})(jQuery);

/*global bcpublic */
/**
 * @fileOverview Swipeable library that takes in a row element (from the Barlcays grid)
 * and slides the columns at full width one at a time when swiped on touch devices.
 * @author: Gurmukh Panesar <gurmukh.panesar@akqa.com>
 */
(function ($) {
    'use strict';

    $.fn.swipeable = function(options) {
        
        options = options || {};

        var index,
            totalColumns = this.find('.swipe-panel:not(.swipe-panel--hidden)').length || 4,
            THRESHOLD = 110,
            toutsInView,
            totalPages,
            initSlide = options.initSlide || false,

            // Slide 1 panel at a time or all across at a time?
            swipe1Panel = options.swipe1Panel || false,


            parent = options.parent || null,
            $swipeable = ($(parent).is('.swipeable')) ? parent : $('.swipeable'),
            destroy = options.destroy || false,
            beforeSwipe = options.beforeSwipe || function() {var d = $.Deferred(); d.resolve(); return d;};

        /**
         * Given the target of the swipe get the swipeable element
         * @param  {$} target jQuery element of target swipe
         * @return {$}        Row parent element
         */
        function getParent(target) {
            var self = $(target),
                relative;

            // If we targeted the swipe element
            if (self.is('.swipe')) {
                return self;
            }

            // Find out if it's a parent or child
            relative = $(target).parents('.swipe');
            return relative.length ? relative : $(target).find('.swipe');
        }

        /**
         * Before sliding, remove any existing sliding class and return
         * common row element.
         * @param  {event} e target swipe
         * @return {$}  Row element
         */
        function prepSlide(e) {
            var parent = getParent(e.target);

            // Sometimes all slide- classes are not removed, use regex instead of guessing index to remove
            if (typeof parent.attr('class') === 'string') {
                parent.attr('class', parent.attr('class').replace(/ slide-\d/g, ''));
                return parent;                
            }

            return false;
        }

        /**
         * Slide the columns to the left by one if not on the last column
         * @param  {event} e target swipe
         * @return {null}
         */
        function slideLeft(e) {
            var parent = prepSlide(e);

            if (index < totalPages) {
                index++;
            }

            if (parent) {
                parent.addClass('slide-' + index);               
            }

        }

        /**
         * Slide the columns to the right by one if not on the first column
         * @param  {event} e target swipe
         * @return {null}
         */
        function slideRight(e) {
            var parent = prepSlide(e);

            if (index > 1) {
                index--;
            }

            if (parent) {
                parent.addClass('slide-' + index);                
            }

        }

        function slideToIndex(index) {
            var parent = prepSlide({
                target: $swipeable
            });

            if (parent) {
                parent.addClass('slide-' + index);
            }
        }

        // Init

        if (destroy) {
            this.swipe('destroy');

            // enable chaining
            return this;
        }


        index = $swipeable.find('.swipe').data('initslide') || initSlide;

        if (initSlide) {
            slideToIndex(index);            
        }

        if ($swipeable.is('.swipeable-2')) {
            totalColumns = 2;
        }

        if (bcpublic.helpandsupport.global.isSmallViewportOrNarrower()) {
            toutsInView = 1;
            totalPages = totalColumns;
        }

        else if (bcpublic.helpandsupport.global.isMediumViewport()) {
            toutsInView = 2;

            // Set total number of pages dependant on whether panels slide one at a time or more
            if (swipe1Panel) {
                totalPages = totalColumns - 1;
            }
            else {
                totalPages = Math.max(totalColumns / toutsInView);
            }
        }



        // Use touchswipe library to detect touch events
        this.swipe({
            swipeLeft: function(e) {
                beforeSwipe(this)
                .then(function() {
                    slideLeft(e);
                });
            },
            swipeRight: function(e) {
                beforeSwipe(this)
                .then(function() {
                    slideRight(e);
                });
            },
            threshold: THRESHOLD,
            // Allow swiping to happen on links, by default swiping on links not allowed
            excludedElements: []
        });

        return this;
    };

}(jQuery));
/* jshint -W069 */
/**
 * @fileOverview Segment resolve component
 * @author: Max Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

// bcpublic.helpandsupport.segment
bcpublic.helpandsupport.context = (function($) {
	/**
	 * Resolves to the client context
	 * @type {Deferred}
	 */
	var resolvedContext = $.Deferred(),
	
	/**
	 * Choose where to get context info from: either from cookies or from localStorage value
	 * @type {Function}
	 */
	strategy = bcpublic.helpandsupport.contextHelpers.chooseStrategy(),
	
	/**
	 * Shortcut
	 * @type {Object}
	 */
	contextFactory = bcpublic.helpandsupport.contextHelpers.contextFactory,

	/**
	 * Helper function to apply default value if prop is undefined
	 * @param  {Mixed} prop         Property value
	 * @param  {Mixed} defaultValue Default value
	 * @return {Mixed}              Applied value
	 */
	applyDefault = function(prop, defaultValue) {
		if (typeof prop === 'undefined') {
			return defaultValue;
		} else {
			return prop;
		}
	};

	// Apply strategy
	contextFactory.setStrategy(strategy);

	// Generate the context object
	contextFactory.generate()
	.then(function(generatedObj) {
		var CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS;

		// Add R1 hardcoded properties
		generatedObj[CP.BMB] = null;
		generatedObj[CP.WEBCHAT_SUPPORTED] = null;

		// Use data coming from contextFactory, but fallback to defaults if anything is undefined
		generatedObj[CP.CUSTOMER_SEGMENT] = applyDefault(generatedObj[CP.CUSTOMER_SEGMENT], null);
		generatedObj[CP.NAV_SEGMENT] = applyDefault(generatedObj[CP.NAV_SEGMENT], null);
		generatedObj[CP.SECURE] = applyDefault(generatedObj[CP.SECURE], null);
		generatedObj[CP.TIME] = applyDefault(generatedObj[CP.TIME], (new Date()).toISOString());
		generatedObj[CP.WEBCHAT_ENABLED] = applyDefault(generatedObj[CP.WEBCHAT_ENABLED], null);
		generatedObj[CP.TIME_OPTION] = applyDefault(generatedObj[CP.TIME_OPTION], null);
		resolvedContext.resolve(generatedObj);
	});

	return resolvedContext;
})(jQuery);
/**
 * @fileOverview Provides functionality for the accordion.
 * @author: Thomas Maton <thomas.maton@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* Updates
*
* @class accordion
* @constructor
*/
bcpublic.helpandsupport.accordion = (function($) {
    'use strict';

    var $accordionWrapper = $('.accordion-list'),
        isIE8 = bcpublic.helpandsupport.global.isIE8(),

        bindEvents = function() {
            $accordionWrapper.on('change', '.accordion--control', function() {
                var ariaExpanded = this.getAttribute('aria-expanded'),
                    ariaControlId = this.getAttribute('aria-controls'),
                    $this = $(this);

                if(ariaExpanded === 'true') {

                    document.getElementById(ariaControlId).setAttribute('aria-hidden', 'true');
                    this.setAttribute('aria-expanded', 'false');

                    if (isIE8) {
                        $this.addClass('checked');
                    }

                } else {
                    document.getElementById(ariaControlId).setAttribute('aria-hidden', 'false');
                    this.setAttribute('aria-expanded', 'true');

                    if (isIE8) {
                        $this.removeClass('checked');
                    }

                }
            });
        },

        init = function() {
            bindEvents();
        };

    init();

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
/**
 * @fileOverview Provides functionality for the accordion.
 * @author: Thomas Maton <thomas.maton@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* Updates
*
* @class accordion
* @constructor
*/
bcpublic.helpandsupport.resultstab = (function($) {
    'use strict';

    var $searchResults = $('#search-results'),
        $searchResultsContainer = $searchResults.find('#search-results--sections'),
        $searchResultsOuter = $searchResults.find('.search-results--outer'),
        $resultsTabWrapper = $searchResults.find('.results-tab--list'),
        $resultsTabs = $searchResults.find('.results-tab--link'),


        /**
        * Binds events to elements of the page to provide further interactions
        *
        * @method  bindEvents
        */
        bindEvents = function() {
            // Assign the click event for the tab view
            $resultsTabWrapper.on('click', '.results-tab--link', function(e) {
                e.preventDefault();
                e.stopPropagation();

                var resultsSection = this.getAttribute('data-results-section');

                activeTabView(resultsSection);
                showTabViewResults(resultsSection);
            });

            // Assign the swipe event for the results view
            $searchResultsOuter.swipe({
                fallbackToMouseEvents: false,
                swipeLeft:function() {
                    if (isTabPanelInView()) {
                        showTabViewResults('secondary');
                        activeTabView('secondary');
                    }
                },
                swipeRight:function() {
                    if (isTabPanelInView()) {
                        showTabViewResults('primary');
                        activeTabView('primary');
                    }
                },
                threshold: 110,
                excludedElements: []
            });

            $(window).smartresize(function() {
                setTimeout(function() {
                    if (bcpublic.helpandsupport.global.isMediumViewportOrNarrower()) {
                        $resultsTabWrapper.find('.active').click();                        
                    }
                    else {
                        $searchResults.height('auto');
                    }

                }, 500);
            }, 2000);
        },

        /**
        * Activates the tab on the results tabview to show which results your're currently looking at.
        *
        * @method  activeTabView
        * @param  {String} tab tab class to be activated.
        */
        activeTabView = function(tab) {
            if(!$('.'+tab).hasClass('active')) {
                $resultsTabs.removeClass('active');
                $('.'+tab).addClass('active');
            }
        },

        /**
         * Assing new respective classes to change the panels
         */
        changePanel = function(results) {
            $searchResultsContainer.removeClass('disable-animation');
            if(results === 'primary') {
                $searchResultsContainer.removeClass('show-secondary');
            } else {
                $searchResultsContainer.removeClass('show-primary');
            }

            $searchResultsContainer.addClass('show-'+results);
            setTimeout(function() {
                $searchResultsContainer.addClass('disable-animation');
            }, 600);
        },

        /**
         * Performs transition of the panels
         * 
         * @param  {Number} delayContent Wait this time before changing the panels
         * @param  {Number} delayHeight  Wait this time before updating the height
         * @param  {Number} newHeight    New height of the container
         */
         performTransition = function(results, delayContent, delayHeight, newHeight) {
            setTimeout(function() {
                changePanel(results);
            }, delayContent);
            setTimeout(function() {
                $searchResults.animate({height: newHeight}, 600);
            }, delayHeight);
        },

        /**
        * Activates the tab on the results tabview to show which results your're currently looking at.
        *
        * @method  showTabViewResults
        * @param  {String} results The type of results to be display when switching tabs.
        */
        showTabViewResults = function(results) {
            var p = $('.section-primary'),
                s = $('.section-secondary'),
                t = $('.results-tab'),
                i = $('.instant-answer'),
                a = $('.search-results--alternative-search-term'),

                ph = p.outerHeight(true),
                sh = s.outerHeight(true),
                tabHeight = t.outerHeight(true),
                instantAnswerHeight = i.outerHeight(true),
                alternativeTermHeigth = a.outerHeight(true),
                // Identify new and old sections
                newSectionHeight = results === 'primary' ? ph : sh,
                oldSectionHeight = results === 'primary' ? sh : ph,
                // New height of the container
                resultSectionHeight = newSectionHeight + tabHeight + instantAnswerHeight + alternativeTermHeigth;

            // If the tab panel is in view make the transition immediately
            if (isTabPanelInView()) {
                performTransition(results, 0, 0, resultSectionHeight);
                return;
            }

            // If new section is longer then adjust height first and do transition later
            // For reverse conditions do the inverted order
            if (newSectionHeight < oldSectionHeight) {
                performTransition(results, 0, 600, resultSectionHeight);
            } else {
                performTransition(results, 600, 0, resultSectionHeight);
            }
        },

        isTabPanelInView = function() {
            return $resultsTabWrapper.is(':appeared');
        },

        init = function() {
            bindEvents();
        };

    init();

    return {
        bindEvents: bindEvents,
        activeTabView: activeTabView,
        showTabViewResults: showTabViewResults
    };

})(jQuery);
/**
 * @fileOverview Provides image replacement functionality.
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* Updates the images based on the container width
*
* @class responsiveImage
* @constructor
*/
bcpublic.helpandsupport.responsiveImage = (function($) {
    'use strict';

    /**
     * List of breakpoints with corresponding renditions
     * @type {Array}
     */
    var breakpoints = [
            {width: 0, rend: 'renFull'},
            {width: 1024, rend: 'renLarge'},
            {width: 768, rend: 'renMedium'},
            {width: 640, rend: 'renSmall'},
            {width: 480, rend: 'renXsmall'},
            {width: 0, rend: 'renFull'}
        ],


    /**
     * Container to measure width of
     * @type {jQuery}
     */
    $container = $(window),

    /**
     * Chooses a rendition based on the container width
     * @param  {jQuery} $this Element to ger renditions from
     * @return {String}       Rendition URL
     */
    chooseRendition = function($this) {
        return bcpublic.helpandsupport.responsiveImageHelpers.chooseRendition($container.width(), breakpoints, $this);
    },

    /**
     * Preloads image and does a callback on load.
     * @param  {String}   ref A path to image to preload
     * @param  {Function} cb  A callback to do on load.
     */
    preloadImage = function(ref, cb) {
        $('<img/>')
            .load(cb)
            .attr('src', ref);
    },

    /**
     * Replace image with required size.
     * @param  {String} elm Container for the image.
     */
    replaceImage = function(elm) {
        var $this = elm,
            rendition = chooseRendition($this),
            alt = $this.data('alt'),
            imageType = $this.data('image-type'),
            isLink = ($this.find('a').length > 0) ? true : false,
            parent = $this;

        if(rendition) {
            if(imageType === 'background') {
                $this.css('background-image', 'url('+rendition+')');

            } else {
                preloadImage(rendition, function() {
                    if (isLink) {
                        $this.find('img').remove();
                        parent = $this.find('a');
                    }
                    else {
                        $this.empty();
                    }
                    
                    parent.append($('<img/>').attr('src', rendition).attr('alt', alt).removeAttr('height', 'width'));
                });
            }
        }
    },

    /**
     * Apply responsive image treatment to images 
     * @param  {$} elem jQuery selector containing all images needing responsive image treatment
     */
    setupResponsiveImages = function(elem) {
        elem.each(function() {
            var $this = $(this);
            replaceImage($this);
            $container.smartresize(function() {
                replaceImage($this);
            });
        });
    },

    /**
     * Init component on page load
     */
    init = function() {
        setupResponsiveImages($('.responsive-image'));

        // setup the trigger for footer images loaded in via segmentation
        $(document).on('teaserLoad', function(e, teaser) {
            setupResponsiveImages($(teaser).find('.responsive-image'));
        });
    };

    $(document).ready(function() {
        init();
    });
    
})(jQuery);

/**
* Provides helpers for managing responsive images.
*
* @class responsiveImageHelpers
* @constructor
*/
bcpublic.helpandsupport.responsiveImageHelpers = (function() {
    'use strict';

    return {
        /**
         * Choose rendition based on a container width.
         *
         * Expected $imgElm markup:
         * <div data-ref="/content/dam/geometrixx-outdoors/banners/warm-and-stylish.jpg"
         *     data-alt="Who says warm and dry can't be stylish?"
         *     data-ren-full="/content/dam/geometrixx-outdoors/banners/warm-and-stylish.jpg/jcr:content/renditions/original"
         *     data-ren-large="/content/dam/geometrixx-outdoors/banners/warm-and-stylish.jpg/jcr:content/renditions/original.large.jpg"
         *     data-ren-medium="/content/dam/geometrixx-outdoors/banners/warm-and-stylish.jpg/jcr:content/renditions/original.medium.jpg"
         *     data-ren-small="/content/dam/geometrixx-outdoors/banners/warm-and-stylish.jpg/jcr:content/renditions/original.small.jpg"
         *     data-ren-xsmall="/content/dam/geometrixx-outdoors/banners/warm-and-stylish.jpg/jcr:content/renditions/original.xsmall.jpg">
         *     <noscript><img src="/content/dam/geometrixx-outdoors/banners/warm-and-stylish.jpg/jcr:content/renditions/original" alt="Who says warm and dry can't be stylish?" /></noscript>
         * </div>
         *
         * Expected breakpoints setup:
         *  var breakpoints = [
         *      {width: 0, rend: 'renFull'},
         *      {width: 1024, rend: 'renLarge'},
         *      {width: 768, rend: 'renMedium'},
         *      {width: 640, rend: 'renSmall'},
         *      {width: 480, rend: 'renXsmall'},
         *      {width: 0, rend: 'renFull'}
         *  ]
         *
         * @param  {Number} containerWidth Container width which is used for comparing
         * @param  {Object} breakpoints    Breakpoints to adjust rendtions to
         * @param  {jQuery} $imgElm        Element that contains renditions
         * @return {String}                Rendition URL
         */
        chooseRendition: function(containerWidth, breakpoints, $imgElm) {
            var i, length,
                ref;

            if (bcpublic.helpandsupport.global.isIE8()) {
                ref = $imgElm.data('renFull');
            }
            else {
                for(i = 1, length = breakpoints.length; i < length; i++) {
                    if(containerWidth > breakpoints[i].width) {
                        // Get larger rendition
                        var rendition = $imgElm.data(breakpoints[i-1].rend);
                        if(rendition) {
                            ref = rendition;
                            break;
                        }
                    }
                }
            }

            return ref;
        }
    };
})();



'use strict';
/**
 * @fileOverview Drop down interactions.
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* Updates the images based on the container width
*
* @class responsiveImage
* @constructor
*/
bcpublic.helpandsupport.SearchDropdown = (function($) {
    /**
     * Search bar that triggers the dropdown
     * @type {jQuery}
     */
    var $searchBarInput = $('#q'),

    /**
     * Common questions drop down
     * @type {jQuery}
     */
    $commonQuestions        = $('.common-questions'),

    /**
     * should we display common questions
     * @type {Boolean}
     */

    displayCommonQuestions  = $commonQuestions.data('displayCommonQuestions') === false ? false : true,
    /**
     * Main content element
     * @type {jQuery}
     */
    $main = $('#main'),

    /**
     * Window
     * @type {jQuery}
     */
    //$window = $(window),

    /***
    * fadeOutBackground
    * @type {boolean}
    */
    fadeOutBackground = $('#main > .home').length > 0 ? false : true,

    /**
     * Class to attach to overlay element
     * @type {String}
     */
    //overlayClass = 'common-questions--overlay',

    /**
     * Is open state class to attach to commonquestions container
     * @type {String}
     */
    openClass = 'is-open',
    fadeActive = false,



    /**
     * Hide common questions.
     */
    hideCommonQuestions = function() {
        if ($commonQuestions.hasClass(openClass)) {
            
            if (fadeOutBackground) {
                fadeOverlayOut();
            }

            $commonQuestions.removeClass(openClass);
            bcpublic.helpandsupport.searchBar.commonQuestionsVisible = false;
        }
    },

    /**
     * Show common questions.
     */
    showCommonQuestions = function() {
        
        if (displayCommonQuestions){

            if (fadeOutBackground) {
                fadeOverlayIn();
            }

            $commonQuestions.addClass(openClass);
            $searchBarInput.attr("aria-controls","common-questions");
            bcpublic.helpandsupport.searchBar.commonQuestionsVisible = true;
        }
    },

    fadeOverlayIn = function() {
        
        $main.addClass('set-back-prep');
        fadeActive = true;

        setTimeout(function(){
            if (fadeActive){
                $main.addClass('set-back');
            }
        }, 100);
    },

    fadeOverlayOut = function() {
        
        $main.removeClass('set-back');
        fadeActive = false;

        setTimeout(function(){

            if (fadeActive === false){
                $main.removeClass('set-back-prep');
            }

        }, 700);
    },

    /**
     * Assign events
     */
    toggleDropDown = function() {
        $searchBarInput.focus(function() {
            if(this.value.length === 0) {
                showCommonQuestions();
            }
        }).blur(function() {
            // Timeout for IE8
            setTimeout(function() {
                hideCommonQuestions();
            }, 200);
        });
    },

    /**
     * Init events
     */
    init = function() {

        toggleDropDown();

        // Check if there is a content
        bcpublic.helpandsupport.SearchDropdownDynamicContent.init($commonQuestions).then(function() {

            var keyNav = new bcpublic.helpandsupport.SearchDropdownKeyNavigation($);
            keyNav.init($searchBarInput, $commonQuestions.find('.common-questions--list li'),
                function() {
                    return $commonQuestions.hasClass(openClass);
                }); 
        });
    };

    $(document).ready(function() {
        init();
    });

    return {
        hideCommonQuestions: hideCommonQuestions,
        showCommonQuestions: showCommonQuestions,
        fadeOverlayIn: fadeOverlayIn,
        fadeOverlayOut: fadeOverlayOut,
        fadeOutBackground : fadeOutBackground
    };
})(jQuery);

bcpublic.helpandsupport.SearchDropdownDynamicContent = (function($) {
    /**
     * Questions element
     * @type {jQuery}
     */
    var $questions = null,

    /**
     * Question list element
     * @type {jQuery}
     */
    $list = null,

    /**
     * Questions items
     * @type {jQuery}
     */
    $items = null,

    /**
     * Questions list class
     * @type {String}
     */
    listClass = 'common-questions--list',

    /**
     * Questions link class
     * @type {String}
     */
    entryClass = 'common-questions--list-entry',

    /**
     * Endpoint to get content from
     * @type {String}
     */
    endpoint;
    
    if (bcpublic.helpandsupport.global.getResultsPagePath() !== undefined){
        endpoint = bcpublic.helpandsupport.global.getResultsPagePath() +'/jcr:content/search_bar.topanswers.json?_charset_=UTF-8';
    } else if (/^\/help/.test(window.location.pathname)) {
        endpoint = '/content/helpsupportpublic/results/jcr:content/search_bar.topanswers.json?_charset_=UTF-8';
    } else if (/^\/colleague-barclays-intranet/.test(window.location.pathname)) {
        endpoint = '/content/colleague-barclays-intranet/results/jcr:content/search_bar.topanswers.json?_charset_=UTF-8';
    }

    /**
     * Index of the last result to show for mobile.
     * @type {Number}
     */
    var mobileResults = 3,

    /**
     * Class for desktop only result
     * @type {String}
     */
    desktopOnlyClass = 'is-desktop-only',

    /**
     * Class for the last mobile item
     * @type {String}
     */
    isLastMobileClass = 'is-last-mobile',

    /**
     * Render content from data
     * @param  {Object} data To render from
     */
    renderContent = function(data) {
        var i, length, classes;

        for (i = 0, length = data.length; i < length; i++) {
            classes = '';

            if (i > mobileResults) {
                classes += desktopOnlyClass;
            }

            if (i === mobileResults) {
                classes += ' ' + isLastMobileClass;
            }
            
            $list.append('<li class="' + classes + '"><a href="'+data[i].url+'" class="' + entryClass + '">'+data[i].title+'</a>');
        }
        data;
    },

    /**
     * Get content from endpoint
     * @param  {Deferred} deferred Resolved on content retrieval
     */
    getContentDynamic = function(deferred) {

        if (bcpublic.helpandsupport.global.getResultsPagePath() === undefined){
            return false;
        }

        $.ajax({
            url: endpoint,
            crossDomain: true,
            jsonp: 'jsonp',
            dataType: 'jsonp'
        }).done(function(response) {
            // Render content from response
            renderContent(response);
            $items = $list.children('li');
            deferred.resolve(response);
        }).fail(function() {
            deferred.reject();
        });
    },

    /**
     * Init events
     */
    init = function(questions) {

        var deferred = $.Deferred();

        $questions = questions;
        $list = $questions.find('.' + listClass);
        $items = $list.children('li');

        // We already have content
        if ($items.length > 0) {
            deferred.resolve();
        } else {
            // Get content
            getContentDynamic(deferred);
        }


        $('#main').append('<div class="search-opacity-overlay"></div>');

        return deferred;
    };

    return {
        init: init
    };
})(jQuery);

/**
 * @class Manages keybard interactions
 * @param {jQuery} $ jQuery instance
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation = function($) {
    this.$ = $;
};

/**
 * Init dropdown keyboard events
 * @param  {jQuery} input     Element that has to be in focus to manage keyboard events.
 * @param  {jQuery} items     List of items to iterate through.
 * @param  {Function} state   If returns true, update the selection, otherwise don't do anything.
 * @param  {String} entry     Class name for an entry.
 * @param  {String} highlight Class name to highlight the currently selected item with.
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.init = function(input, items, state, entry, highlight) {
    this.$input = input;
    this.$items = items;
    this.stateCheck = state || function() {
        return true;
    };
    this.entryClass = entry || 'common-questions--list-entry';
    this.highlightClass = highlight || 'is-selected';

    this.dataSet = {
        current: -1,
        href: ''
    };

    this.keyboardNavigation();
};

/**
 * Reset the current dataSet
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.resetDataset = function() {
    this.dataSet = {
        current: -1,
        href: '',
        $link: null
    };
};

/**
 * Add listeners to track keyboard events
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.keyboardNavigation = function() {
    var self = this;

    self.$input.keydown(function(e) {
        var key = (typeof e.which === 'number') ? e.which : e.keyCode;

        // Custom check to see if need to process selection change
        if (!self.stateCheck()) {
            return;
        }

        if (key === 40 || key === 38) {
            e.preventDefault();
            e.returnValue = false;
        }

        if (key === 40) { // Down arrow
            self.selectNext(true);
        } else if (key === 38) { // Up arrow
            self.selectNext(false);
        } else if (key === 13) { // Enter key
            if (self.dataSet.current !== -1) {
                e.preventDefault();
                e.returnValue = false;

                self.followSelection();
            }
        }
    });
};

/**
 * Get the next selection.
 * Doesn't perform any checks
 * @return {Number} Next selection
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.moveNext = function() {
    return this.dataSet.current + 1;
};

/**
 * Get the prev selection.
 * Doesn't perform any checks
 * @return {Number} Prev selection
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.movePrev = function() {
    return this.dataSet.current - 1;
};

/**
 * Remove selected class from all items
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.clearSelection = function() {
    var self = this;
    self.$items.each(function() {
        $(this).removeClass(self.highlightClass);
    });
};

/**
 * Perform selection of the next item.
 * Attaches the class.
 * Updates the current selection.
 * Updates the url for enter keypress.
 * @param  {Boolean} next True if next item, false if prev.
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.selectNext = function(next) {
    var nextSelection = next ? this.moveNext() : this.movePrev(), 
        $li, $url;

    if (this.$items[nextSelection]) {
        this.clearSelection();

        $li = $(this.$items[nextSelection]);
        $url = $li.find('.' + this.entryClass);

        $li.addClass(this.highlightClass).trigger('cssClassChange');

        this.dataSet.current = nextSelection;
        this.dataSet.href = $url.attr('href');
        this.dataSet.$link = $url;
    } else if (nextSelection === -1) {
        this.clearSelection();

        this.dataSet.current = nextSelection;
        this.dataSet.href = '';
    }
};

/**
 * Go to the url stored in the selection data.
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.followSelection = function() {
    this.dataSet.$link.trigger('click');
    window.location = this.dataSet.href;
};

/**
 * Update item list to work with
 * @param  {jQuery} items New item list
 */
bcpublic.helpandsupport.SearchDropdownKeyNavigation.prototype.updateItems = function(items) {
    this.$items = items;
    this.resetDataset();
    this.selectNext(false);
};
/**
 * @fileOverview Provides functionality for the navigation.
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
*
* @class accordion
* @constructor
*/
bcpublic.helpandsupport.navigation = (function($) {
    'use strict';

    var $el,
        searchBarToggle,
        searchBar,
        navigationToggle,
        navigationBar,
        navigationBarFirstLevLinks,
        navLinks,
        slideMenuTransitionAcross = 250,
        slideMenuTransitionUp = 200,
        slideMenuTransitionDown = 200,

    cacheElements = function(){

        $el = $('#navigation');
        searchBarToggle = $el.find('#search-toggle').parent('li');
        searchBar = $('#search-bar');
        navigationToggle = $el.find('#navigation-toggle');
        navigationBar = $el.find('#main-navigation-menu');
        navigationBarFirstLevLinks = navigationBar.find('> li > a');
        navLinks = navigationBar.find('ul[class^=menu-]').prev();
    },

    stopEvent = function(e) {
        if (!e) {
            e = window.event;
        }
        e.cancelBubble = true;
        e.returnValue = false;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    },

    getWindowWidth = function() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return width;
    },

    checkSlideWidth = function(){

        var menuSize = 250,
            viewportwidth = getWindowWidth();

        if (viewportwidth > 1164) {

            $el.find('.menu-2deep, .menu-3deep').removeAttr('style');

            navigationBar.css({
                width: 'auto'
            });

            return;
        }

        if (viewportwidth > 600) {
            menuSize = 350;
        }

        if ($('body').hasClass('side-menu-open')) {

            $('body').css({
                left: menuSize + 'px'
            });

            navigationBar.css({
                width: menuSize + 'px'
            });

        } else {

            $('body').css({
                left: '0'
            });

            navigationBar.css({
                width: '-' + menuSize + 'px'
            });

            $('.lt-ie9 .main-navigation-menu').css({
                width: 'auto'
            });
        }
    },
    
    toggleSearchBar = function(el){
        $(document).trigger('toggle-search-bar', el);
    },

    closeSearchBar = function(el){
        $(document).trigger('close-search-bar', el);
    },

    openSearchBar = function(el){
        toggleSearchBar(el);
    },

    manageTabIndex = function(els, on){

        if (on) {
            els.attr('tabindex', '');
        } else {
            var activeBreakpoint = bcpublic.helpandsupport.global.getActiveBreakpoint();
            if (activeBreakpoint === 'medium' || activeBreakpoint === 'small'){
                els.attr('tabindex', '-1');
            }
        }
    },

    events = function() {
        $(window).resize(checkSlideWidth);
        manageTabIndex( navigationBarFirstLevLinks, false);

        $('body').on('click', function(){
            navLinks.parent().removeClass('hover-on');
        });

        $(document).on('click touchstart', function(e) {

            // Click outside of active navigation menu
            if ($(e.target).closest('.main-navigation-menu').length === 0) {
                if ($('body').hasClass('side-menu-open') && $(e.target).closest('#navigation-toggle').length === 0) {
                    closeNavigationBar();
                }
            }
        });

        searchBarToggle.on('click', function(event) {
            if (!searchBar.hasClass('active')) {
                openSearchBar(this);
            } else {
                closeSearchBar(this);
            }
            stopEvent(event);
        });

        searchBar.find('.close').on('click', function(event) {
            closeSearchBar();
            stopEvent(event);
        });

        navigationToggle.on('click', function(event) {
            closeSearchBar();

            if (!$('body').hasClass('side-menu-open')) {

                $('body').addClass('temp-slide').animate({
                    left: navigationBar.width() + 'px'
                }, {
                    duration: slideMenuTransitionAcross
                });

                navigationBar.animate({
                    left: '0'
                }, {
                    duration: slideMenuTransitionAcross,
                    complete: function() {
                        $('body').removeClass('temp-slide');
                        $('body, html').addClass('side-menu-open');
                        manageTabIndex( navigationBarFirstLevLinks, true);
                        checkSlideWidth();
                    }
                });

            } else {
                closeNavigationBar();
            }
            stopEvent(event);
        });

        navLinks.on('click', function(event) {
            var link = $(this),
                parentLink = link.parent(),
                menuClass = link.next().attr('class'),
                alreadyActive = parentLink.hasClass('active'),
                allLinks = $('.' + menuClass).parent();

            if (getWindowWidth() < 1164) {
                stopEvent(event);

                closeSearchBar();

                allLinks.each(function() {
                    var indivlink = $(this);
                    if(indivlink.hasClass('active')) {
                        indivlink.find(' > ul').slideUp(slideMenuTransitionUp, function() {
                            indivlink.removeClass('active');
                        });
                    }
                });

                if(!alreadyActive) {
                    
                    parentLink.find(' > ul').slideDown(slideMenuTransitionDown, function() {
                        parentLink.addClass('active');
                    });

                } else {
                  
                    parentLink.find(' > ul').slideUp(slideMenuTransitionUp, function() {
                        parentLink.removeClass('active');
                    });
                }

            } else {
                // BHS-2485
                if (!( $.trim(link.attr('href')) && link.attr('href') !== '#')){
                    stopEvent(event);
                }
            }
        });

        //primary link hover class controll by JS
        navLinks.hover(
            function(){
                $(this).parent().addClass('hover-on');
            },
            function(){
                $(this).parent().removeClass('hover-on');
            }
        );

        //key on primary link on nav
        navLinks.keydown(function(e){
            var thisParent = $(this).parent();
            
            switch ( e.which ) {
              case 13:
                thisParent.toggleClass('hover-on');
                break;
            }
        });

        //close the flyout menu if no links are on focus on it
        navigationBar.find('.menu-2deep a').keydown(function(){
            setTimeout(function(){ 
                if( $el.find('.menu-2deep').find(document.activeElement).length === 0){
                    navLinks.parent().removeClass('hover-on');
                }
            }, 100);
        });

        // Update the state of aria-expanded based on the searchbar aria-hidden state
        // Navigation is cached in sessionStorage, preventing from generating this state in jsp files
        var hiddenState = $('#search-bar-panel-outer').attr('aria-hidden');
        searchBarToggle.attr('aria-expanded', hiddenState === 'false' ? true : false);
    },

    closeNavigationBar = function() {
        if ($('body').hasClass('side-menu-open')) {
            navLinks.parent().each(function() {
                var indivlink = $(this);
                if(indivlink.hasClass('active')) {
                    indivlink.find(' > ul').slideUp(slideMenuTransitionUp, function() {
                        indivlink.removeClass('active');
                    });
                }
            });

            $('body').animate({
                left: '0'
            }, {
                duration: slideMenuTransitionAcross
            });

            navigationBar.animate({
                left: '-' + navigationBar.width() + 'px'
            }, {
                duration: slideMenuTransitionAcross,
                queue: false,
                complete: function() {
                  $('body, html').removeClass('side-menu-open');
                  manageTabIndex( navigationBarFirstLevLinks, false);
                }
            });
        }
    },


    init = function() {
        // Setup the navigation only if data from teaserLoad is of type navigation
        $(document).on('teaserLoad', function(e, data) {
            if ($(data).find('#navigation').length > 0) {
                cacheElements();
                events();
            }
        });
      
        var link = $('.historyback');
        link.on('click', function(){
          window.history.back();
        });
    };

    init();

})(jQuery);
/**
 * @fileOverview Provides functionality for the search bar.
 * @author: Thomas Maton <thomas.maton@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
 * Updates
 *
 * @class searchBar
 * @constructor
 */
bcpublic.helpandsupport.searchBar = (function ($) {
    'use strict';

    var bcpublicGlobal = bcpublic.helpandsupport.global,
        resultCountMobile = 4,
        resultCountDesktop = 10,
        colleagueResultCountDesktop = 5,
        resultCount,
        desktopBreakpoint = 800,
        delayTime = 60, //ms
        searchBarResultsUrl = (document.getElementById('search-bar')) !== null ?
            document.getElementById('search-bar').getAttribute('data-quick-search-path') :
            '/content/helpsupportpublic/results.quick-search.json?q={query}&origin={origin}&_charset_=UTF-8',
        currentHostname = window.location.hostname,
        queryUrl = searchBarResultsUrl,
        isHome = $('#main > .home').length > 0 ? true : false,
        barclays = {
            searchboxSelector: '#q',
            origin: 'www.barclays.co.uk',
            searchToggle: '#search-toggle'
        },
        helpandsupport = {
            searchboxSelector: '#q',
            origin: 'help.barclays.co.uk',
            searchToggle: '#search-toggle'
        },
        currentDomain,
        $searchBarWrapper = $('.search-bar-outer'),
        $quickSearchWrapper = $('#quick-search--wrapper'),
        numberOfCharactersToBegin = 3,
        barclaysResults = '',
        helpandsupportResults = '',
        suggestedResults = '',
        barclaysSuggestedResults = '',
        navIsSelected = $('.search-input-nav'),
        primaryResultslist = document.getElementById('primary-results-nav'),
        secondaryResultslist = document.getElementById('secondary-results-nav'),
        primaryResultslistAlt = document.getElementById('primary-results'),
        secondaryResultslistAlt = document.getElementById('secondary-results'),
        primarySuggestedTagsResultslist = document.getElementById('primary-suggested-tags-results-nav'),
        secondarySuggestedTagsResultslist = document.getElementById('secondary-suggested-tags-results-nav'),
        primarySuggestedTagsResultslistAlt = document.getElementById('primary-suggested-tags-results'),
        secondarySuggestedTagsResultslistAlt = document.getElementById('secondary-suggested-tags-results'),
        questionTerms = ['why', 'when', 'what', 'how'],
        $window = $(window),
        searchQuery,
        keyNav,
        commonQuestionsVisible = false,
        searchResultsVisible = false,
        searchBarAnimationCallback,
        searchBarFacets = '',


        /**
         * Binds events to the necessary DOM elements
         *
         * @method  bindEvents
         */
        bindEvents = function () {

            calculateNumberResults();

            if (!$searchBarWrapper.hasClass('active')) {
                manageTabIndex(false);
            }

            if (!isHome) {
                toggleSearchBar();
            }

            keyPressQuickSearch();

            //temp events
            domainSwitching();


            $window.smartresize(function () {
                calculateNumberResults();
            }, 100);
        },

        determineDomain = function () {

            currentHostname = $('.domain-switch:checked').val();

            if (currentHostname === barclays.origin) {
                return barclays;
            } else {
                return helpandsupport;
            }

        },

        domainSwitching = function () {

            $('.domain-switch').on('change', function () {
                currentDomain = determineDomain();
            });

        },

        /**
         * Binds event to the window to help determine the number of results to display .
         *
         * @method  calculateNumberResults
         */
        calculateNumberResults = function () {
            if (bcpublicGlobal.getScreenWidth() < desktopBreakpoint) {
                resultCount = resultCountMobile;

                if (searchResultsVisible) {

                    if (!window.mobile && searchQuery !== undefined) {
                        getSearchResults(searchQuery);
                    }

                } else if (commonQuestionsVisible) {
                    bcpublic.helpandsupport.SearchDropdown.showCommonQuestions();
                }

                window.mobile = true;
                window.desktop = false;
            } else {
                resultCount = resultCountDesktop;

                if (searchResultsVisible) {

                    if (!window.desktop && searchQuery !== undefined) {
                        getSearchResults(searchQuery);
                    }

                } else if (commonQuestionsVisible) {
                    bcpublic.helpandsupport.SearchDropdown.showCommonQuestions();
                }


                window.mobile = false;
                window.desktop = true;
            }
        },

        /**
         * Expands search field
         *
         * @method expandSearchField
         */
        expandSearchField = function () {
            $searchBarWrapper.removeClass('not-js-ready ready');
            if (searchBarAnimationCallback) {
                clearTimeout(searchBarAnimationCallback);
            }

            $searchBarWrapper.addClass('transition');
            $searchBarWrapper[0].outerHeight;
            $searchBarWrapper.addClass('active');
            manageTabIndex(true);

            searchBarAnimationCallback = setTimeout(function () {
                $searchBarWrapper.addClass('ready');
            }, 600);
        },

        manageTabIndex = function (on) {
            if (on) {
                $searchBarWrapper.find('input#q, button.search-bar--submit').attr('tabindex', '');
            } else {
                $searchBarWrapper.find('input#q, button.search-bar--submit').attr('tabindex', '-1');
            }
        },

        /*
        onceItsReady = function(el, callback, interval){

            var maxTryCount = 5;
            setInterval()

        },*/

        /**
         * Binds event to the search toggle button to open/close search bar
         *
         * @method  showSearchBar
         */
        toggleSearchBar = function () {
            $(document).on('toggle-search-bar', function (e, el) {
                if (!$searchBarWrapper.hasClass('active')) {
                    expandSearchField();
                } else {
                    hideSearchBar();
                }
                bcpublicGlobal.ariaCollapsible(el);
            });

            $(document).on('close-search-bar', function (e, el, noTransition) {
                if ($searchBarWrapper.hasClass('active')) {
                    hideSearchBar(noTransition);

                    if (el.length) {
                        bcpublicGlobal.ariaCollapsible(el);
                    }
                }
            });

            $(document).on('open-search-bar', function (e, el) {
                if (!$searchBarWrapper.hasClass('active')) {
                    expandSearchField();
                    bcpublicGlobal.ariaCollapsible(el);
                }
            });
        },

        /**
         * Binds event to the close button to close the search bar
         *
         * @method  hideSearchBar
         */
        hideSearchBar = function (noTransition) {

            if (noTransition !== undefined) {
                $searchBarWrapper.removeClass('transition');
                $searchBarWrapper[0].outerHeight;
            }

            hideSearchResults();
            manageTabIndex(false);

            $searchBarWrapper.removeClass('ready');
            if (searchBarAnimationCallback) {
                clearTimeout(searchBarAnimationCallback);
            }

            $searchBarWrapper.removeClass('active');
            //$searchBarWrapper.addClass('transition');
        },

        /**
         * Binds event to the keypress on the input search box
         *
         * @method  keyPressQuickSearch
         */
        keyPressQuickSearch = function () {
            keyNav = new bcpublic.helpandsupport.SearchDropdownKeyNavigation($);
            keyNav.init($(currentDomain.searchboxSelector),
                generateCombinedList(),
                function () {
                    return $quickSearchWrapper.hasClass('active');
                }, 'quick-search--list-entry');

            $(currentDomain.searchboxSelector).on('keyup', bcpublicGlobal.debounce(function (e) {
                searchQuery = this.value;

                // Del or Backspace
                if ((e.keyCode === 46 || e.keyCode === 8) && searchQuery.length < numberOfCharactersToBegin) {
                    hideSearchResults();
                    bcpublic.helpandsupport.SearchDropdown.showCommonQuestions();

                } else if ((e.keyCode !== 40 && e.keyCode !== 38) && searchQuery.length >= numberOfCharactersToBegin) {
                    // Don't trigger on up and down arrow

                    bcpublic.helpandsupport.SearchDropdown.hideCommonQuestions();

                    getSearchResults(searchQuery);

                }
            }, delayTime))
                .blur(function () {
                    // Timeout for IE8
                    setTimeout(function () {
                        hideSearchResults();
                        if (bcpublic.helpandsupport.SearchDropdown.fadeOutBackground) {
                            bcpublic.helpandsupport.SearchDropdown.fadeOverlayOut();
                        }
                    }, 200);
                });
        },

        personalizeQuickSearch = function (queryString) {
            var $searchBar = $('#search-bar');
            if (!$searchBar.data('contexthub')) {
                queryString = queryString.replace('&facets={facets}', '');
                return queryString;
            }
            if (searchBarFacets.length > 0) {
                queryString = queryString.replace('{facets}', searchBarFacets);
            } else {
                var lContextHub = localStorage.getItem("ContextHubPersistence");
                if (lContextHub) {
                    var cHub = JSON.parse(lContextHub),
                        profile = cHub.store.profile;
                    if (profile !== undefined) {
                        var countryCode = profile.CountryCode;
                        //store the facets as a data attribute for re-use ...
                        if (countryCode !== undefined && countryCode.length > 0) {
                            searchBarFacets = "family-" + countryCode.toLowerCase();
                            queryString = queryString.replace('{facets}', searchBarFacets);
                        }
                    }
                }
            }
            if (queryString.indexOf('{facets}') > -1) {
                queryString = queryString.replace('&facets={facets}', '');
            }
            return queryString;
        },

        /**
         * AJAX call to the results end point
         *
         * @method  getSearchResults
         * @param  query - query searching for in the search box.
         */
        getSearchResults = function (query) {

            if (!queryUrl) {
                hideSearchResults();
                return;
            }

            var fullQueryUrl = queryUrl.replace('{query}', encodeURIComponent(query)).replace('{origin}', encodeURIComponent(currentDomain.origin));

            fullQueryUrl = personalizeQuickSearch(fullQueryUrl);

            cacheLastSearchQuery.save(query);

            // Required for < IE9
            $.support.cors = true;

            $.ajax({
                url: fullQueryUrl,
                crossDomain: true,
                dataType: 'json'
            })
                .done(function (data) {
                    var results = data['quick-search-results'];
                    var showSearchResultFlag = false;
                    var isHasSuggestedResults = false;
                    barclaysResults = '';
                    helpandsupportResults = '';
                    suggestedResults = '';
                    barclaysSuggestedResults = '';
                    $('.quick-search--wrapper>.common-questions--header').show();

                    if (data.hasOwnProperty("suggestions")) {
                        showSearchResultFlag = true;
                        $('.quick-search--wrapper .suggested-results').show();
                        var suggestedTagsResultElement = $('.quick-search--wrapper .suggested-results .suggested-tags-results');
                        var suggestionJson = data['suggestions'];
                        var suggestedTagsJson = suggestionJson.hasOwnProperty('suggested-tags') ? suggestionJson['suggested-tags'] : [];
                        suggestedTagsResultElement.hide();
                        if(suggestedTagsJson.length > 0) {
                            isHasSuggestedResults = true;
                            suggestedTagsResultElement.show();
                        }
                        generateResultsList(suggestedTagsJson, query,true,isHasSuggestedResults);
                    } else {
                        $('.quick-search--wrapper .suggested-results').hide();
                    }

                    if (results) {
                        if (results.length === 0) {
                            $('.quick-search--wrapper>.common-questions--header').hide();
                        }
                        generateResultsList(results, query, false,isHasSuggestedResults);
                        showSearchResultFlag = true;
                    }

                    if (showSearchResultFlag) {
                        showSearchResults();
                    } else {
                        hideSearchResults();
                    }
                });
        },

        cacheLastSearchQuery = {
            load: function () {
                if (Modernizr.localstorage) {
                    var query = localStorage.getItem('lastSearchQuery');
                    return query;
                } else {
                    return false;
                }
            },

            save: function (query) {
                if (Modernizr.localstorage) {
                    localStorage.setItem('lastSearchQuery', query);
                } else {
                    return false;
                }
            }
        },

        /**
         * Replace title with predefine span element
         * @param queryRegex - query with regex
         * @param title
         * @return {String} span element with title
         */
        getStringReplace = function(queryRegex,title){
            return title.replace(queryRegex, '<span class="search-query-item">$&</span>');
        },

        /**
         * Organise the results into barclays.co.uk and help and support arrays
         * New change for colleague
         * added new suggested tags result with quick results for colleague site
         *
         * @method  generateResultsList
         * @param  {Object} - object of results returned from search query.
         * @param  {String} - search query.
         * @param  {boolean} isSuggestedTags - flag true/false for generate result for suggested tags or quick result
         * @param  {boolean} isHasSuggestedResults - flag true/false for quick results display based on suggested tags result available
         * */

        generateResultsList = function (results, rawquery, isSuggestedTags,isHasSuggestedResults) {
            var query = $.trim(rawquery),

                highlightQuery = function (query, title) {

                    var queryRegex = new RegExp(query, 'gi'),
                        regexdTitle = isSuggestedTags ? getStringReplace(queryRegex,title.term):getStringReplace(queryRegex,title.title);

                    if (regexdTitle.indexOf('<span') === -1 && query.length > 2) {
                        query = query.slice(0, query.length - 1);
                        regexdTitle = highlightQuery(query, title);
                    }

                    return regexdTitle;
                };
            var resultsCount = getColleagueResultCount(isSuggestedTags,results,isHasSuggestedResults);

            for (var i = 0; i <= resultsCount - 1; i++) {
                if (results[i] !== undefined) {

                    var listTemplate,
                        title = highlightQuery(query, results[i]);

                    listTemplate = '<li class="quick-search--results-item"><a tabindex="-1" class="quick-search--list-entry" href="' + results[i].url + '">' + title + '</a></li>';

                    if (results[i].source === 'www.barclays.co.uk') {
                        if(isSuggestedTags){
                            barclaysSuggestedResults += listTemplate;
                        }else {
                            barclaysResults += listTemplate;
                        }
                    } else {
                        if (isSuggestedTags) {
                            suggestedResults += listTemplate;
                        }
                        else {
                            helpandsupportResults += listTemplate;
                        }
                    }
                }
            }

            if (isSuggestedTags) {
                insertSuggestedSearchResults(query);
                keyNav.updateItems(generateCombinedSuggestionList());
            } else {
                insertSearchResults(query);
                keyNav.updateItems(generateCombinedList());
            }
        },

        /**
         * Get results count based on suggested tag available for quick search result if suggested tags available then only 5 quick results display
         * @param  {boolean} isSuggestedTags - flag true/false to check suggested tag results for set result count
         * @param results
         * @param  {boolean} isHasSuggestedResults - flag true/false to check suggested tag result available  for quick results count
         * @return {Integer}
         */
        getColleagueResultCount = function(isSuggestedTags,results,isHasSuggestedResults){

            if(resultCount < 5){
                return isSuggestedTags ? results.length : resultCount;
            }else {
                return isSuggestedTags ? results.length : results.length > 0 ? (( isHasSuggestedResults && results[0].source === "colleague-barclays-intranet")?colleagueResultCountDesktop:resultCount):results.length;
            }
        },

        /**
         * Generate a combined list of items for keyboard nav.
         * @return {jQuery} List of items
         */
        generateCombinedList = function () {
            if (navIsSelected.is(":focus")) {
                return $(primaryResultslist).find('ul.unstyled > li').add($(secondaryResultslist).find('ul.unstyled > li'));
            } else if (primaryResultslistAlt) {
                return $(primaryResultslistAlt).find('ul.unstyled > li').add($(secondaryResultslistAlt).find('ul.unstyled > li'));
            }
        },

        /**
         * Generate a suggested tag combined list of items for keyboard nav.
         * @return {jQuery} List of items
         */
        generateCombinedSuggestionList = function () {
            if (navIsSelected.is(":focus")) {
                return $(primarySuggestedTagsResultslist).find('ul.unstyled > li').add($(secondarySuggestedTagsResultslist).find('ul.unstyled > li'));
            } else if (primarySuggestedTagsResultslistAlt) {
                return $(primarySuggestedTagsResultslistAlt).find('ul.unstyled > li').add($(secondarySuggestedTagsResultslistAlt).find('ul.unstyled > li'));
            }
        },

        /**
         * addiing suggested tag results into quick search results list
         * @param query
         */
        insertSuggestedSearchResults = function (query) {
            var isQuestion = isQueryAQuestion(query),
                activePrimarySuggestedResultsList = navIsSelected.is(":focus") ? primarySuggestedTagsResultslist : primarySuggestedTagsResultslistAlt,
                activeSecondarySuggestedResultList = navIsSelected.is(":focus") ? secondarySuggestedTagsResultslist : secondarySuggestedTagsResultslistAlt;
            if (currentDomain.origin === 'www.barclays.co.uk' && isQuestion) {

                if (suggestedResults.length > 0) {
                    activePrimarySuggestedResultsList.innerHTML = '<ul class="unstyled">' + suggestedResults + '</ul>';
                } else {
                    activePrimarySuggestedResultsList.innerHTML = '';
                }

                if (barclaysSuggestedResults.length > 0) {
                    activeSecondarySuggestedResultList.innerHTML = '<ul class="unstyled">' + barclaysSuggestedResults + '</ul>';
                } else {
                    activeSecondarySuggestedResultList.innerHTML = '';
                }

            } else if (currentDomain.origin === 'www.barclays.co.uk' && !isQuestion) {
                if (barclaysSuggestedResults.length > 0) {
                    activePrimarySuggestedResultsList.innerHTML = '<ul class="unstyled">' + barclaysSuggestedResults + '</ul>';
                } else {
                    activePrimarySuggestedResultsList.innerHTML = '';
                }

                if (suggestedResults.length > 0) {
                    activeSecondarySuggestedResultList.innerHTML = '<ul class="unstyled">' + suggestedResults + '</ul>';
                } else {
                    activeSecondarySuggestedResultList.innerHTML = '';
                }
            } else {
                if (suggestedResults.length > 0) {
                    activePrimarySuggestedResultsList.innerHTML = '<ul class="unstyled">' + suggestedResults + '</ul>';
                } else {
                    activePrimarySuggestedResultsList.innerHTML = '';
                }

                if (barclaysSuggestedResults.length > 0) {
                    activeSecondarySuggestedResultList.innerHTML = '<ul class="unstyled">' + barclaysSuggestedResults + '</ul>';
                } else {
                    activeSecondarySuggestedResultList.innerHTML = '';
                }
            }
        },

        /**
         * Insert results into dropdown
         *
         * @method  insertSearchResults
         * @param  {String} - search query.
         * */
        insertSearchResults = function (query) {
            var isQuestion = isQueryAQuestion(query),
                activePrimaryResultslist = navIsSelected.is(":focus") ? primaryResultslist : primaryResultslistAlt,
                activeSecondaryResultslist = navIsSelected.is(":focus") ? secondaryResultslist : secondaryResultslistAlt;

            if (currentDomain.origin === 'www.barclays.co.uk' && isQuestion) {
                if (helpandsupportResults.length > 0) {
                    activePrimaryResultslist.innerHTML = '<ul class="unstyled">' + helpandsupportResults + '</ul>';
                }
                else {
                    activePrimaryResultslist.innerHTML = '';
                }

                if (barclaysResults.length > 0) {
                    activeSecondaryResultslist.innerHTML = '<ul class="unstyled">' + barclaysResults + '</ul>';
                } else {
                    activeSecondaryResultslist.innerHTML = '';
                }
            } else if (currentDomain.origin === 'www.barclays.co.uk' && !isQuestion) {
                if (barclaysResults.length > 0) {
                    activePrimaryResultslist.innerHTML = '<ul class="unstyled">' + barclaysResults + '</ul>';
                } else {
                    activePrimaryResultslist.innerHTML = '';
                }
                if (helpandsupportResults.length > 0) {
                    activeSecondaryResultslist.innerHTML = '<ul class="unstyled">' + helpandsupportResults + '</ul>';
                } else {
                    activeSecondaryResultslist.innerHTML = '';
                }
            } else {
                if (helpandsupportResults.length > 0) {
                    activePrimaryResultslist.innerHTML = '<ul class="unstyled">' + helpandsupportResults + '</ul>';
                } else {
                    activePrimaryResultslist.innerHTML = '';
                }
                if (barclaysResults.length > 0) {
                    activeSecondaryResultslist.innerHTML = '<ul class="unstyled">' + barclaysResults + '</ul>';
                } else {
                    activeSecondaryResultslist.innerHTML = '';
                }
            }
        },

        /**
         * Hide search results
         **/
        hideSearchResults = function () {
            $quickSearchWrapper.removeClass('active');
            searchResultsVisible = false;
        },

        /**
         * Show search results
         **/
        showSearchResults = function () {
            $quickSearchWrapper.addClass('active transition');
            $("#q").attr("aria-controls", "quick-search--wrapper");
            searchResultsVisible = true;
        },

        isQueryAQuestion = function (query) {
            var arrayLength = questionTerms.length;
            for (var i = 0; i < arrayLength; i++) {
                if (query.indexOf(questionTerms[i]) !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        /**
         * Initialise the JavaScript for the searchBar
         *
         * @method  init
         */
        init = function () {
            var $answerBand = $('.answer--return-band');
            currentDomain = determineDomain();

            // if we have search results hint / back to results (only on an answer page)
            if ($('.search-results--alternative-search-term').size() || ($answerBand.length && !$answerBand.hasClass('is-inactive'))) {
                $searchBarWrapper.addClass('search-bottom-copy');
            }

            if ($searchBarWrapper.hasClass('active')) {
                $searchBarWrapper.addClass('ready');
            }

            bindEvents();

            /*
            if ($('body').data('template') === '/apps/helpsupportpublic/templates/page_answer') {
                var triggerEl = $('#search-bar-toggle').parent('li');
                $(document).trigger('close-search-bar', [triggerEl, 'noTransition']);
            }*/

        };

    $(document).ready(function () {
        init();
    });

    return {
        init: init,
        bindEvents: bindEvents,
        hideSearchBar: hideSearchBar,
        toggleSearchBar: toggleSearchBar,
        keyPressQuickSearch: keyPressQuickSearch,
        cacheLastSearchQuery: cacheLastSearchQuery
    };

})(jQuery);
/* jshint -W069 */
/**
 * @fileOverview Inits the facets component
 * @author: Gurmukh Panesar <gurmukh.panesar@akqa.com>
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.facets = {};

/**
 * Helper methods
 *
 * @class facets.helpers
 * @constructor
 */
bcpublic.helpandsupport.facets.helpers = (function ($) {
    /**
     * Element holding data attributes with the endpoint and page configuration
     * @type {jQuery}
     */
    var $f = $('.facets-c'),
        $body = $('body'),
        $searchResultsSections = $('.search-results'),

        /**
         * Search params for the current page state
         * @type {Object}
         */
        searchParams = {},

        /**
         * Get a copy of searchParams
         * @return {Object} searchParams
         */
        getParams = function () {
            return $.extend({}, searchParams);
        },

        /**
         * Update the searchParams query part
         * @param {Object} obj Contains properties to update
         */
        setParamQuery = function (obj) {
            $.extend(searchParams.query, obj);
        },

        /**
         * Generate a URL from a path and params
         * @param  {String} url URL path
         * @param  {Object} p   Params
         * @param  {Boolean} force Whether to do the URL check against existing URL or not, default to true
         * @return {String}     Generated URL
         */
        generateSearchUrl = function (url, p, force) {
            var query = url,
                params = p || {};

            // sometimes results are not shown on a results page, so replace url with current URL
            if (!force && window.location.pathname !== url) {
                query = window.location.pathname;
            }

            // Prevent encoding of the params by $.param with decodeURIComponent
            // otherwise it double-encodes the search term in URL
            query += '?' + decodeURIComponent($.param(params));
            return query;
        },

        /**
         * Generates an updated query list.
         * If facetList contains newFacet, then it is removed.
         * If facetList doesn't contain newFacet, then it is added.
         * Works with arrays and strings.
         * @param  {Sting|Array} facetList A list of facets as an array or a delimited string
         * @param  {String} newFacet  New Facet to add or remove from facetList
         * @return {Array}           Updated facets list
         */
        generateFacetQuery = function (facetList, newFacet) {
            var facetQuery;

            if (!(typeof newFacet === 'undefined' || newFacet === null || newFacet.length === 0)) {
                newFacet = encodeURIComponent(newFacet);
            }

            if (typeof facetList === 'string' && facetList.length > 0) {
                facetQuery = facetList.split(',');
            } else if (Object.prototype.toString.call(facetList) === '[object Array]') {
                facetQuery = facetList.length > 0 ? facetList.slice() : [];
            } else {
                facetQuery = [];
            }

            // Nothing to append
            if (typeof newFacet === 'undefined' || newFacet === null || newFacet.length === 0) {
                return facetQuery;
            }

            var vi = facetQuery.indexOf(newFacet);
            if (vi !== -1) {
                // Remove the existing facet
                facetQuery.splice(vi, 1);
            } else {
                // Add a new facet
                facetQuery.push(newFacet);
            }

            return facetQuery;
        },

        /**
         * Get facet name by tagID
         * @param  {Object} data  Data set to use to get tag name
         * @param  {String} facet tagID of a facet
         * @return {String}       Tag name
         */
        getFacetTitle = function (data, facet) {
            var facetTitle = null,
                facetSet,
                set, i, ix, u, ux,
                isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

            if (isColleagueResults) {
                facetSet = ['customers', 'channels', 'contentTypes', 'businessAreaColleagues', 'family', 'group', 'subgroup', 'offering', 'topics'];
            } else {
                facetSet = ['customers', 'channels', 'family', 'group', 'subgroup', 'offering', 'topics', 'contentTypes'];
            }

            for (i = 0, ix = facetSet.length; i < ix; i++) {
                set = data[facetSet[i]];

                for (u = 0, ux = set.length; u < ux; u++) {
                    if (set[u].tagID === facet) {
                        facetTitle = set[u].name;
                        break;
                    }
                }

                if (facetTitle) {
                    break;
                }
            }

            return facetTitle;
        },

        /**
         * Get a param from a URI
         * @param  {String} url Url to parse
         * @param  {String} key Param to get
         * @return {String}     Value of the param
         */
        getQueryStringValue = function (url, key) {
            var search = url.match(/\?(.+)$/);
            return search[0].replace(new RegExp('^(?:.*[&\\?]' + key.replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1');
        },

        /**
         * Get all URL params as an object
         * @param  {String} url URL to parse
         * @return {Object}     A hash of params
         */
        getQueryVariable = function (url) {
            var search = urldecode(url).match(/\?(.+)$/),
                vars = search ? search[1].split('&') : [],
                i, length, pair,
                params = {},
                altTerm = $('.search-results--alternative-term');

            for (i = 0, length = vars.length; i < length; i++) {
                pair = vars[i].split('=');
                params[pair[0]] = pair[1];
            }

            // check if the correct query is being shown
            if (altTerm.length > 0 && altTerm.data('actualterm') && params.q) {
                params.q = altTerm.data('actualterm');
            }

            return params;
        },

        /**
         * Check if it's in the mobile layout
         */
        isMobile = function () {
            return bcpublic.helpandsupport.global.isMediumViewportOrNarrower();
        },

        isFacetPanelOpen = function () {
            return $body.hasClass('facets--open');
        },

        isHelpResults = function () {
            return $searchResultsSections.hasClass('help-search-results');
        },

        isColleagueResults = function () {
            return $searchResultsSections.hasClass('colleague-search-results');
        },

        getFacetStorage = function () {
            return bcpublic.helpandsupport.facetStorage;
        },

        getCustomerAllTagID = function () {
            return 'customers-all';
        },

        /**
         * URI decoder that minds plus signs
         * @param  {String} str String to decode
         * @return {String}     Decoded string
         */
        urldecode = function (str) {
            return decodeURIComponent((str + '').replace(/\+/g, '%20'));
        };

    var dynamicPath;

    if (/^\/colleague-barclays-intranet/.test(window.location.pathname)) {
        dynamicPath = /.html$/.test(document.location.pathname) ? '/content/barclaysuk/en/colleague-barclays-intranet/results.html' : '/content/barclaysuk/en/colleague-barclays-intranet/results';
    } else {
        dynamicPath = /.html$/.test(document.location.pathname) ? '/content/barclaysuk/en/help/results.html' : '/content/barclaysuk/en/help/results';
    }

    // Init searchParams from URL
    searchParams.query = getQueryVariable(document.location);
    searchParams.query['_charset_'] = 'UTF-8';

    if (/^\/colleague-barclays-intranet/.test(window.location.pathname)) {
        searchParams.endpoint = bcpublic.helpandsupport.global.externalizeUrl($f.data('endpoint') || '/content/barclaysuk/en/colleague-barclays-intranet/results.solr-search.json');
    } else {
        searchParams.endpoint = bcpublic.helpandsupport.global.externalizeUrl($f.data('endpoint') || '/content/barclaysuk/en/help/results.solr-search.json');
    }

    searchParams.page = bcpublic.helpandsupport.global.externalizeUrl($f.data('page') || dynamicPath);
    searchParams.facetsOnPage = $f.length;

    return {
        getParams: getParams,
        setParamQuery: setParamQuery,
        generateSearchUrl: generateSearchUrl,
        generateFacetQuery: generateFacetQuery,
        getQueryStringValue: getQueryStringValue,
        getQueryVariable: getQueryVariable,
        urldecode: urldecode,
        getFacetTitle: getFacetTitle,
        isMobile: isMobile,
        isHelpResults: isHelpResults,
        isColleagueResults: isColleagueResults,
        isFacetPanelOpen: isFacetPanelOpen,
        getFacetStorage: getFacetStorage,
        getCustomerAllTagID: getCustomerAllTagID
    };
})(jQuery);

/**
 * Init facets UI
 *
 * @class facets.page
 * @constructor
 */
bcpublic.helpandsupport.facets.page = (function ($) {

    var $facets = $('.facets'),
        $options = $facets.find('.facets--group-options'),
        $list = $facets.find('.facets--group-list'),
        $showFacets = $('.results-section-bhs'),
        $hideFacets = $('.facets--hide, .products--show'),
        $searchPrimary = $('.section-primary'),
        $searchSecondary = $('.section-secondary'),
        $separator = $('.search--separator'),
        $searchMain = $('.results-section--main'),
        $body = $('body'),
        closedListHeight = 46,
        openedListHeight,
        recallCount = 0,
        desktopFacetsMoved = false,
        $searchResultsSections = $('.search-results--sections'),
        $contentWrapper = $('.content-wrapper'),
        helpers = bcpublic.helpandsupport.facets.helpers,
        $type = $('.facets-type--list'),
        listItemIds = [];


    /**
     * Store widths ready for animation, also can be called on window resize
     * @return {[type]} [description]
     */
    function setupFacetPanel() {
        var outerContainerWidth = '1200px',
            // On page load, set widths explicity so outer container can be expanded
            setExplicitWidth = function (elems) {
                var elem,
                    index,
                    width,
                    isHelpResults = bcpublic.helpandsupport.facets.helpers.isHelpResults(),
                    isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

                for (index = 0; index < elems.length; index++) {

                    // Reset any previous widths set
                    elem = elems[index];
                    elem.addClass('disable-animation');
                    elem.attr('style', '');

                    // Store and set new width
                    if (isColleagueResults || isHelpResults) {
                        width = elem.width() + 20;
                    } else {
                        width = elem.width();
                    }
                    elem.width(width);
                    elem.data('original', width);
                }

                adjustHeight();

            },
            // Once widths have been stored and outer container expanded, re-enable animations on target panels
            reenableAnimations = function (elems) {
                for (var index = 0; index < elems.length; index++) {
                    elems[index].removeClass('disable-animation');
                }
            },

            panelsToFixWidth = [$searchPrimary, $separator, $searchMain];

        // Reset all widths to recalculate true width
        $searchResultsSections.attr('style', '');

        setExplicitWidth(panelsToFixWidth);

        $searchResultsSections.width(outerContainerWidth);

        reenableAnimations(panelsToFixWidth);

        // Store width to animate to
        $searchPrimary.data('expanded', $('.search-results > .container-fluid').width());

        // On resize, if facets panel is open, keep width of primary section full width
        if ($body.hasClass('facets--open')) {
            $searchPrimary.addClass('disable-animation').width($searchPrimary.data('expanded'));
            setTimeout(function () {
                $searchPrimary.removeClass('disable-animation');
            }, 200);
        }

    }

    /**
     * Dynamicly adjust height of 2nd-ary search results + facets to height of container ( for styling reasons )
     **/
    function adjustHeight() {
        if (bcpublic.helpandsupport.global.isMediumViewportOrNarrower()) {
            return false;
        }

        setTimeout(function () {
            var newHeight = $searchResultsSections.height();
            $searchSecondary.height(newHeight);
        }, 100);
    }

    /**
     * When changing widths, facets panel needs to be moved to correct place
     */
    function moveFacet() {
        var $facetsMobile = $('.viewport > .facets'),
            $facetsDesktop = $('.results-section--main > .facets'),
            isNarrow = bcpublic.helpandsupport.facets.helpers.isMobile(),
            isHelpResults = bcpublic.helpandsupport.facets.helpers.isHelpResults(),
            isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

        // Moving from desktop -> mobile
        if (isNarrow && $facetsMobile.length === 0) {
            $facetsDesktop.addClass('disable-animation');
            $('.viewport').append($facetsDesktop);
            $('.results-section--toggle-cta').removeAttr('style');
            $facetsDesktop.removeClass('disable-animation');
            // hide facets
            if (isNarrow && (isColleagueResults || isHelpResults)) {
                if ($('body').hasClass('facets--open')) {
                    hideFacets();
                }
            }
        }
        // Moving from mobile -> desktop
        else if (!isNarrow && $facetsDesktop.length === 0) {
            if (isColleagueResults || isHelpResults) {
                showFacets();
            } else {
                // If mobile facets panel is open and orientation changes to desktop, apply facets
                if ($('body').hasClass('facets--open')) {
                    bcpublic.helpandsupport.facets.presenter.applyFacets();
                }
            }

            $facetsMobile.addClass('disable-animation');
            $('.results-section--main').append($facetsMobile);
        }

        $('body').addClass('facets--ready');
    }

    /**
     * Setup event listeners for when dropdown and selects are updated
     */
    function bindEvents() {

        // Focus on the results section when the Skip to results link is clicked
        var resultElem = document.getElementById("skip-to-results");
        $('.facets__skip-link').on('click', function(e) {
            e.preventDefault();
            resultElem.focus();
        });

        var $option,
            eventType = (Modernizr.touch) ? 'touchstart' : 'click';

        // When pretty list is updated, update select
        $list.on(eventType, 'li', function (e) {
            $option = $(this);
            e.preventDefault();

            if ($option.is('.selected')) {
                toggleState();
            }

            // New option selected
            else if ($option.is(':not(.disabled)')) {
                selectItem($option);
            }
        });

        // Keyboard accessibility
        if (!Modernizr.touch) {
            $list.on('focus', 'li', function () {
            event.preventDefault();
            event.stopPropagation();
            openList();
            $("li.facets-type--item").keydown( function (event) {
                event.stopImmediatePropagation();
                var keyCode = (event.keyCode ? event.keyCode : event.which);
                listItemIds = [];
                 // Add each list item's id to the listItems array
                 $(".facets--group-list li").each( function( index, el ) {
                     listItemIds.push($(el)[0].id);
                 });
                switch (keyCode) {
                     case 40:
                       event.preventDefault();
                       event.stopPropagation();
                       focusNextListItem(40, listItemIds);
                       break;

                     case 38:
                       event.preventDefault();
                       event.stopPropagation();
                       focusNextListItem(38, listItemIds);
                       break;

                     default:
                       break;
                }
            });
        });

        //  dropdown opens on pressing enter key
        $list.keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                toggleState();
                if($('.facets--group-open')[0]){ //focus on first element of dropdown on pressing enter key
                    setTimeout(function() {
                        $('.facets-type--item-link').eq(0).focus();
                    }, 0.1);
                }
            }
        });

        $list.on('blur', 'li', function () {
            if ($(this).is(':first-child') || $(this).is(':last-child')) {
                closeList();
            }
        });
    }

        //keyboard focus background color change for dropdown list
        $('ul.facets-type--list').on('focus', function (e) {
            $(e.target).find('>:first-child').addClass("keyboard-focus");
        });
        $('ul.facets-type--list').on('focusout', function (e) {
            $(e.target).find('>:first-child').removeClass("keyboard-focus");
        });

        // When select is updated, update results
        $options.on('change', function () {
            var presenter = bcpublic.helpandsupport.facets.presenter,
                params = helpers.getParams(),
                facet = $options.find(':selected').val(),
                patternCustomer = /^customer\-/;

            // Customer type facet
            // Can only one be selected at a time.
            // Others are removed before querying.
            var facets = helpers.generateFacetQuery(params.query.facets);

            // Remove existing customers facets
            for (var i = 0, length = facets.length; i < length; i++) {
                if (facets[i].match(patternCustomer)) {
                    facets.splice(i, 1);
                    break;
                }
            }

            // Add the new customers facet only if not customers all
            if (facet === helpers.getCustomerAllTagID()) {
                facet = null;
            }

            params.query.facets = helpers.generateFacetQuery(facets, facet).join();
            params.query.origin = 'help.barclays.co.uk';
            params.query.offset = 0;

            presenter.animLoadingStart().then(function () {
                return presenter.updateFacets(params);
            })
                .then(presenter.updateSearchResults)
                .then(presenter.animLoadingEnd);
        });

        // Show hide panel
        $showFacets.on('click', '.facets--show', function (e) {
            e.preventDefault();
            showFacets();
        });

        $hideFacets.on('click', function (e) {
            e.preventDefault();
            hideFacets();
        });

        // click on button
        toggleFacets($('.results-section--toggle-cta'));

        // If user clicks side bar of facets narrow, close panel
        $facets.on('touchstart', function (e) {
            if (bcpublic.helpandsupport.facets.helpers.isMobile() && $facets.is(e.target)) {
                e.preventDefault();
                $('.facets--hide').click();
            }
        });
    }

    /**
     * When $elem is clicked, toggle facets panel state
     * @param  {$} $elem
     */
    function toggleFacets($elem) {
        $elem.off().on('click', function (e) {
            e.preventDefault();
            var isHelpResults = bcpublic.helpandsupport.facets.helpers.isHelpResults(),
                isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

            if ($body.is('.facets--open')) {
                hideFacets();
            } else {
                if (isColleagueResults || isHelpResults) {
                    $contentWrapper.css('position', 'relative');
                }
                showFacets();
            }
        });
    }

    /**
     * Animate facets into view
     */
    function showFacets() {
        var $searchMainPanel = $searchPrimary.find('.results-section--main');

        // Move facets for desktop only once
        if (!desktopFacetsMoved && (bcpublic.helpandsupport.global.isLargeViewportOrWider() || bcpublic.helpandsupport.global.isIE8())) {
            desktopFacetsMoved = true;
            $searchMainPanel.prepend($facets);

            // Ensure results container does not resize (since parent container does)
            $searchMainPanel.attr('style', '').width($searchMainPanel.width());
        }

        // Animate facets panel in
        $searchMain.off().on('transitionend', function () {
            if ($body.hasClass('facets--open')) {
                $body.addClass('facets--open-ready');

                if (bcpublic.helpandsupport.facets.helpers.isMobile()) {
                    $facets.css('top', 0);
                    // on iOS7 panel needs to reflow to allow scrolling
                    setTimeout(function () {
                        $facets.find('.facets--wrapper').css({
                            paddingBottom: 10
                        });

                        setTimeout(function () {
                            $facets.find('.facets--wrapper').css({
                                paddingBottom: 0
                            });
                        }, 10);
                    }, 10);

                }
            }
        });

        // Move narrow facets to correct position on page
        if (bcpublic.helpandsupport.facets.helpers.isMobile()) {
            $facets.first().css({
                position: 'absolute',
                top: $(window).scrollTop()
            });
        }

        $body.addClass('facets--open').removeClass('facets--closed-ready');

        // Expand primary panel
        $searchPrimary.width($searchPrimary.data('expanded'));

        setFacetHeightState();


        if (Modernizr.localstorage) {
            localStorage.setItem('facets-open', 'true');
        }

    }

    /**
     * Animate facets off canvas
     */
    function hideFacets() {
        if ($body.hasClass('facets--open')) {
            $body.addClass('facets--closing');
        }
        $body.removeClass('facets--open facets--open-ready');
        $searchPrimary.width($searchPrimary.data('original'));

        $searchMain.off().on('transitionend', function () {
            $body.removeClass('facets--closing');
            $body.addClass('facets--closed-ready');
        });

        if (Modernizr.localstorage) {
            localStorage.setItem('facets-open', 'false');
        }
    }

    /**
     * If facets panel is longer than results (which has a min height), allow scrollbars
     */
    function setFacetHeightState() {
        var $facetsWrapper = $('.facets--wrapper'),
            $results = $('.results-section--main');

        if ($facetsWrapper.height() > $results.height()) {
            $results.addClass('facets--tall');
        }
        else {
            $results.removeClass('facets--tall');
        }
    }


    /**
     * Toggle state of dropdown
     */
    function toggleState() {
        ($list.is('.facets--group-open')) ? closeList() : openList();
    }

    /**
     * Open dropdown panel to fixed height
     */
    function openList() {
        $list.height(openedListHeight);
        $list.addClass('facets--group-open');
    }

    /**
     * Close dropdown panel to fixed height
     * @return {[type]} [description]
     */
    function closeList() {
        $list.height(closedListHeight);
        $list.removeClass('facets--group-open');

    }

    function focusNextListItem(direction, listItemIds) {
      var activeElementId = $(':focus').parent().attr("id");
      if (activeElementId) {
        var currentActiveElementIndex = listItemIds.indexOf(activeElementId);
        if (direction === 40) {
          var currentActiveElementIsNotLastItem = currentActiveElementIndex < listItemIds.length - 1;
          if (currentActiveElementIsNotLastItem) {
            var nextListItemId = listItemIds[currentActiveElementIndex + 1];
            $('#' + nextListItemId).children().focus();
          }
          if (!currentActiveElementIsNotLastItem) {
              closeList();
            }
        } else if (direction === 38) {
          var currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0;
          if (currentActiveElementIsNotFirstItem) {
            var nextListItemId = listItemIds[currentActiveElementIndex - 1];
            $('#' + nextListItemId).children().focus();
          }
        }
      }
    }

    /**
     * Given a list element, update both list and dropdown
     * @param  {$} $listItem [description]
     */
    function selectItem($listItem) {
        var index = $listItem.index(),
            option = $options.find('option')[index - 1],
            optionValue = option.value,
            optionText = option.text;

        $options.val(optionValue).trigger('change');
        $list.find('.selected').text(optionText);
        $type.attr('aria-activedescendant', optionText);
        closeList();
    }

    function checkHeight() {
        recallCount++;
        // Allow rendering of the newly opened list to finish
        // If it is not yet updated, try once again
        setTimeout(function () {
            openedListHeight = $list.height();
            // The opened list should be higher than the closed one at least
            // also check for the maximum number of tries
            if (openedListHeight <= closedListHeight && recallCount < 20) {
                checkHeight();
            } else {
                closeList();
            }
        }, 20);
    }

    /**
     * On page load, save height of opened panel
     */
    function storeHeight() {
        $list.css('height', 'auto');
        recallCount = 0;
        checkHeight();
    }

    function setInitFacetState() {
        if (Modernizr.localstorage) {
            var shouldFacetsBeOpen = localStorage.getItem('facets-open'),

                // Results page, not first page
                isResultPage = (parseInt(bcpublic.helpandsupport.global.getURLParam('offset'), 10) > 0) ? true : false,
                isNarrow = bcpublic.helpandsupport.facets.helpers.isMobile(),
                isHelpResults = bcpublic.helpandsupport.facets.helpers.isHelpResults(),
                isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

            // If on page 2 or higher, preload the facets state, else set facets state to hidden
            if ((isColleagueResults || isHelpResults) && !isNarrow) {
                showFacets();
            } else {
                if (isResultPage && shouldFacetsBeOpen === 'true' && !isNarrow) {
                    showFacets();
                }
                else {
                    hideFacets();
                }
            }

            setTimeout(function () {
                adjustHeight();
            }, 500);
        }
    }

    /**
     * Only fire facets code if facets on page
     */
    function init() {

        var viewportChanged = function () {
            setupFacetPanel();
            moveFacet();
        };

        if ($options.length > 0 && $list.length > 0 && $showFacets.length > 0) {
            bindEvents();
            viewportChanged();

            /* If on device, then change facets on orientation change as opposed to window resize
               as scrolling on ios triggers a resize event */
            if (typeof window.orientation === 'number') {
                window.addEventListener('orientationchange', function () {
                    // Run twice, Nexus 5 only registers after 500 delay, whereas ios is instant
                    setTimeout(function () {
                        viewportChanged();
                    }, 500);
                    viewportChanged();
                });
            }
            else {
                $(window).smartresize(function () {
                    viewportChanged();
                }, 2000);
            }
        }
        // We're not on a page where there are no results, so hide facets panel.
        else {
            $facets.remove();
        }

        setInitFacetState();
    }

    if (!bcpublic.helpandsupport.resultPage === true || bcpublic.helpandsupport.displayFacets === true) {
        init();
    }

    return {
        setFacetHeightState: setFacetHeightState,
        storeHeight: storeHeight,
        toggleFacets: toggleFacets
    };

})(jQuery);

/**
 * Events and methods to update facets
 *
 * @class facets.presenter
 * @constructor
 */
bcpublic.helpandsupport.facets.presenter = (function ($) {

    // jQuery objects of the facet structural elements
    var $topics, $ptopics, $group, $subgroup, $offering, $topicsWrapper, $channels, $contenttype, $businessarea, $type,
        $typeSelect, $groupsSection,
        $results, $tabTitle,
        $pagination, $paginationMobile,
        $count,
        $loadingAnimationCover,
        animationInProgress = false,

        // Hide facets button for mobile
        $hideFacets,
        deferredResultsUpdate,
        defferedData,

        timerCircle,

        helpers = bcpublic.helpandsupport.facets.helpers,

        /**
         * Create a new facet list.
         * @param  {Object} facets   List of facets
         * @param  {String} template Name of an hbs template to render
         * @return {String}          HTML
         */
        createFacetsView = function (facets, template) {
            var model = [];

            for (var i = 0, length = facets.length; i < length; i++) {
                model.push({
                    facet: facets[i].tagID,
                    name: facets[i].name,
                    selected: facets[i].selected
                });
            }

            return bcpublic.helpandsupport.templates[template]({
                facets: model
            });
        },

        /**
         * Create a new customer facet model.
         * @param  {Object} customerTypes   List of customerTypes coming from json payload
         * @return {Object}          Model
         */
        createFacetsCustomers = function (customerTypes) {
            var model = {
                    selectedFacet: '',
                    facets: []
                },
                // Retrieve and update localStorage
                localList = updateLocalStorage(customerTypes),
                // Decide on the full list of customer types to show
                fullList = localList || customerTypes;

            for (var i = 0, length = fullList.length; i < length; i++) {
                model.facets.push({
                    facet: fullList[i].tagID,
                    name: fullList[i].name,
                    disabled: isCustomerTypeDisabled(localList, customerTypes, fullList[i].tagID)
                });
            }

            model.selectedFacet = getSelectedCustomerTypeTagID(fullList, customerTypes);

            return model;
        },

        /**
         * Get a name of the selected facet
         * @param  {Array} fullList      The most full list of customer types available
         * @param  {Array} customerTypes The narrow list of customerTypes
         * @return {String}               Selected customer type name
         */
        getSelectedCustomerTypeTagID = function (fullList, customerTypes) {
            var params = helpers.getParams(),
                facets = params.query.facets.split(','),
                allID = helpers.getCustomerAllTagID(),
                selectedID, selectedName;

            // Get the selected facet from the customerTypes list
            $.each(customerTypes, function (i, v) {
                if (v.selected) {
                    selectedName = v.name;
                    selectedID = v.tagID;
                    return false;
                }
            });

            // If the selected=true facet from customerTypes list is in the applied facets list,
            // It is a valid selection and should be returned
            // Otherwise it is either a customers-all tag or a default selection from the payload
            // (options that are not present in the customerTypes list can't be selected, they are disabled, except all)
            if ($.inArray(selectedID, facets) !== -1) {
                return selectedName;
            } else {
                // Try to find all tag text
                var allList = $.grep(fullList, function (item) {
                    return item.tagID === allID;
                });

                // If all is in the list, return its name
                // Otherwise we use the default selected from the payload
                if (allList.length > 0) {
                    return allList[0].name;
                } else {
                    return selectedName;
                }
            }
        },

        /**
         * Walk the list to mark items as disabled/enabled
         * The following rules apply:
         * - If nothing is in localStorage
         * - If it's customer-all tag, then it is enabled
         * - If it is in a list of
         *
         * @param  {Array}  customerTypes List of customer types
         * @param  {String}  tagID        Tag id to look for
         * @return {Boolean}              True if it's disabled, false to enable
         */
        isCustomerTypeDisabled = function (localList, customerTypes, tagID) {

            // If we don't have any stored data
            if (localList === null) {
                return false;
            }

            // All should always be available if we have stored data
            if (tagID === helpers.getCustomerAllTagID()) {
                return false;
            }

            var listMap = $.map(customerTypes, function (item) {
                return item['tagID'];
            });
            // If the tag is in the active list then make it enabled
            return $.inArray(tagID, listMap) === -1;
        },

        /**
         * Load available data into storage or retrieve if it's already there
         * @param  {Array} facets New payload
         * @return {Array|null}        Stored data. Null if it's not available in any way
         */
        updateLocalStorage = function (facets) {
            var params = helpers.getParams(),
                query = params.query.q,
                prefix = 'customerType:';

            if (Modernizr.localstorage) {
                if (params.query.facets.length === 0) {
                    // If facets are not set, we can store customer types
                    localStorage.setItem(prefix + query, JSON.stringify(facets));
                    return facets;
                } else {
                    // try to load customer types from LS
                    var list = localStorage.getItem(prefix + query);
                    return list ? JSON.parse(list) : null;
                }
            }

            return null;
        },

        /**
         * Create the search results from the server response.
         * @param  {Object} data Model
         * @return {String}      HTML
         */
        createSearchResults = function (data) {
            var params = helpers.getParams(),
                facets = helpers.generateFacetQuery(params.query.facets),
                showAppliedFacets = false,
                firstFacet = helpers.getFacetTitle(data, facets[0]) || null,
                facetRemainder = facets.length - 1,
                appliedFacetsSummary = '';

            // Exclude customers-all
            facets = $.grep(facets, function (item) {
                return item !== helpers.getCustomerAllTagID();
            });

            if (facets.length === 1) {
                showAppliedFacets = true;
                appliedFacetsSummary = bcpublic.helpandsupport.i18n.componentFacets['results.public.oneFilterApplied'];
            }

            else if (facets.length === 2) {
                showAppliedFacets = true;
                appliedFacetsSummary = bcpublic.helpandsupport.i18n.componentFacets['results.public.twoFiltersApplied'];
            }

            else if (facets.length > 2) {
                showAppliedFacets = true;
                appliedFacetsSummary = bcpublic.helpandsupport.i18n.componentFacets['results.public.moreThanTwoFiltersApplied'];
            }

            // Parse summary
            appliedFacetsSummary = appliedFacetsSummary.replace('{{filter}}', '<strong>\'' + firstFacet + '\'</strong>').replace('{{qty}}', '<strong>' + facetRemainder + '</strong>');

            return bcpublic.helpandsupport.templates['resultsBhs']({
                sectionTitle: bcpublic.helpandsupport.i18n.componentFacets['results.public.results'],
                sectionTotal: data['total-matches'],
                show2ndFiltersLink: (data['total-matches'] > 2) ? true : false,
                documents: data['search-results'][0]['documents'],
                queryString: encodeURIComponent(params.page + '?' + decodeURIComponent($.param(params.query))),
                showAppliedFacets: showAppliedFacets,
                i18nRemoveAllFilters: bcpublic.helpandsupport.i18n.componentFacets['results.public.resetFilter'],
                i18nResultsFilter: bcpublic.helpandsupport.i18n.componentFacets['results.public.filter'],
                i18nEditFilters: bcpublic.helpandsupport.i18n.componentFacets['editFilters.public.filter'],
                i18nBhsSubtitle: bcpublic.helpandsupport.i18n.componentFacets['resultspage.public.results.tab.help.subtitle'],
                i18nProductsFilter: bcpublic.helpandsupport.i18n.componentFacets['products.public.filter'],
                removeAllFiltersUrl: helpers.generateSearchUrl(params.page, $.extend({}, params.query, {facets: []})),
                appliedFacetsSummary: appliedFacetsSummary
            });
        },

        createColleagueSearchResults = function (data) {
            var params = helpers.getParams(),
                facets = helpers.generateFacetQuery(params.query.facets),
                showAppliedFacets = false,
                firstFacet = helpers.getFacetTitle(data, facets[0]) || null,
                facetRemainder = facets.length - 1,
                appliedFacetsSummary = '';

            // Exclude customers-all
            facets = $.grep(facets, function (item) {
                return item !== helpers.getCustomerAllTagID();
            });

            if (facets.length === 1) {
                showAppliedFacets = true;
                appliedFacetsSummary = bcpublic.helpandsupport.i18n.componentFacets['results.public.oneFilterApplied'];
            }

            else if (facets.length === 2) {
                showAppliedFacets = true;
                appliedFacetsSummary = bcpublic.helpandsupport.i18n.componentFacets['results.public.twoFiltersApplied'];
            }

            else if (facets.length > 2) {
                showAppliedFacets = true;
                appliedFacetsSummary = bcpublic.helpandsupport.i18n.componentFacets['results.public.moreThanTwoFiltersApplied'];
            }

            // Parse summary
            appliedFacetsSummary = appliedFacetsSummary.replace('{{filter}}', '<strong>\'' + firstFacet + '\'</strong>').replace('{{qty}}', '<strong>' + facetRemainder + '</strong>');

            return bcpublic.helpandsupport.templates['resultsBhs']({
                sectionTitle: bcpublic.helpandsupport.i18n.componentFacets['results.public.results'],
                sectionTotal: data['total-matches'],
                show2ndFiltersLink: (data['total-matches'] > 2) ? true : false,
                documents: data['search-results'][0]['documents'],
                queryString: encodeURIComponent(params.page + '?' + decodeURIComponent($.param(params.query))),
                showAppliedFacets: showAppliedFacets,
                i18nRemoveAllFilters: bcpublic.helpandsupport.i18n.componentFacets['results.public.resetFilter'],
                i18nResultsFilter: bcpublic.helpandsupport.i18n.componentFacets['results.public.filter'],
                i18nEditFilters: bcpublic.helpandsupport.i18n.componentFacets['editFilters.public.filter'],
                i18nBhsSubtitle: bcpublic.helpandsupport.i18n.componentFacets['resultspage.public.results.tab.help.subtitle'],
                i18nProductsFilter: bcpublic.helpandsupport.i18n.componentFacets['products.public.filter'],
                removeAllFiltersUrl: helpers.generateSearchUrl(params.page, $.extend({}, params.query, {facets: []})),
                appliedFacetsSummary: appliedFacetsSummary
            });
        },

        /**
         * Create the title and the results number for the tab
         * @param  {String} totalMatches Total matches
         * @return {String}      HTML
         */
        createTabTitle = function (totalMatches) {
            return bcpublic.helpandsupport.templates['resultsTabTitle']({
                sectionTitle: bcpublic.helpandsupport.i18n.componentFacets['results.public.results'],
                sectionTotal: totalMatches
            });
        },

        createColleagueTabTitle = function (totalMatches) {
            return bcpublic.helpandsupport.templates['resultsTabTitle']({
                sectionTitle: bcpublic.helpandsupport.i18n.componentFacets['results.public.results'],
                sectionTotal: totalMatches
            });
        },

        /**
         * Create the pagination model from the server response
         * @param  {Object} data Server response
         * @return {Object}      Pagination model
         */
        createPagination = function (data) {
            var totalMatches = data['total-matches'],
                offset = parseInt(data['offset'], 10),
                rows = parseInt(data['rows'], 10),
                pageNumber = Math.ceil(totalMatches / rows),
                currentPage = Math.ceil(offset / rows),
                paginationItemsNumber = 10,

                pages = [],
                model = {},

                i, length,

                i18n = bcpublic.helpandsupport.i18n,
                params = helpers.getParams();

            // No pagination for one page
            if (pageNumber <= 1) {
                return '';
            }

            // Decide the state
            model = {
                first: false,
                second: false,
                other: false
            };
            if (currentPage === 0) {
                model['first'] = true;
            } else if (currentPage === 1) {
                model['second'] = true;
            } else {
                model['other'] = true;
            }

            // Limit the number of pages to suite the rules
            if (currentPage < 5) {
                // 1:first 2 3:current 4 5 6 7 8 9 10
                i = 0;
                length = paginationItemsNumber < pageNumber ? paginationItemsNumber : pageNumber;
            } else if (currentPage > pageNumber - 4) {
                // 25 26 27 28 29 30 31 32:current 33 34:last
                i = pageNumber - paginationItemsNumber;
                length = pageNumber;
            } else {
                // 25 26 27 28 29 30:current 31 32 33 34
                i = currentPage - 5;
                length = i + paginationItemsNumber;
            }

            // Generate pages
            for (; i < length; i++) {
                var current = i === currentPage ? true : false,
                    offsetLocal = i * rows;

                pages.push({
                    current: current,
                    other: !current,
                    pageNumber: i + 1,
                    pageUrl: helpers.generateSearchUrl(params.page, $.extend({}, params.query, {offset: offsetLocal}))
                });
            }

            model['documents'] = pages;

            // Generate next/prev buttons
            if (currentPage + 1 < pageNumber) {
                model['showNext'] = true;
                model['i18nNext'] = i18n.componentFacets['results.public.pagination.next'];
                model['urlNext'] = helpers.generateSearchUrl(params.page, $.extend({}, params.query, {offset: offset + rows}));
            }

            if (currentPage > 0 && pageNumber > 1) {
                model['showPrev'] = true;
                model['i18nPrev'] = i18n.componentFacets['results.public.pagination.prev'];
                model['urlPrev'] = helpers.generateSearchUrl(params.page, $.extend({}, params.query, {offset: offset - rows}));
            }

            // Set page
            model['i18nPage'] = i18n.componentFacets['results.public.pagination.mobile.page'];
            model['currentPage'] = currentPage + 1;

            // First page
            model['urlFirst'] = helpers.generateSearchUrl(params.page, $.extend({}, params.query, {offset: 0}));

            return model;
        },

        /**
         * For onClick events of the facets
         * @param  {Event} e Event object
         */
        updateFacetEvent = function (e) {
            e.preventDefault();
            e.returnValue = false;

            // Dont allow interaction with facets panel if facets are updating
            if (animationInProgress && Modernizr.csstransitions) {
                return false;
            }

            var params = helpers.getParams(),
                facet = $(this).find('a').data('facet');

            // Regular facet
            params.query.facets = helpers.generateFacetQuery(params.query.facets, facet).join();

            params.query.origin = 'help.barclays.co.uk';
            params.query.offset = 0;

            animationInProgress = true;

            animLoadingStart()
                .then(function () {
                    return updateFacets(params);
                })
                .then(updateSearchResults)
                .then(animLoadingEnd);
        },

        /**
         * Update search results and URL
         * @param  {Object} data Data set
         */
        updateSearchResults = function (data) {
            var params = helpers.getParams(),
                totalMatches = (data['total-matches'] > 99) ? '99+' : data['total-matches'],
                $body = $('body'),
                isHelpResults = bcpublic.helpandsupport.facets.helpers.isHelpResults(),
                isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

            // Update search results, result count (and keep facets state)
            if (isColleagueResults || isHelpResults) {
                $results.find('.results-section--wrapper').html(createColleagueSearchResults(data));
            } else {
                $results.find('.results-section--wrapper').html(createSearchResults(data));
            }

            bcpublic.helpandsupport.facets.page.toggleFacets($('.results-section--toggle-cta'));

            // setting this to update on filter applied
            bcpublic.helpandsupport.context.then(function (segmentName) {
                if (typeof segmentName !== "undefined") {
                    segmentName.isResultPageLoaded = true;
                    bcpublic.helpandsupport.trackingTags.init(segmentName);
                }
            });

            // Show the correct text for toggle cta link
            if (data['total-matches'] > 0 && params.query.facets.length > 0) {
                $body.addClass('facets--applied');
            }
            else {
                $body.removeClass('facets--applied');
            }

            updateTotalResults(totalMatches, 'wide');
            if (isColleagueResults || isHelpResults) {
                $tabTitle.html(createColleagueTabTitle(totalMatches));
            } else {
                $tabTitle.html(createTabTitle(totalMatches));
            }

            // Update pagination
            var paginationModel = createPagination(data);
            $pagination.html(bcpublic.helpandsupport.templates['resultsPagination'](paginationModel));
            $paginationMobile.html(bcpublic.helpandsupport.templates['resultsPaginationMobile'](paginationModel));

            // Adjust a new height. Only for mobile
            updateColumnHeights();

            // Update URL
            if (bcpublic.helpandsupport.global.historyAPI() && !data.wasBackButtonPushed) {// Don't use pushState to push the current state onto the browser history stack if the user just clicked the back button, because that stops the user from going back any further and thus breaks the back button.
                // do not update url query q param with search suggestion
                var params2 = $.extend(true, {}, params);
                params2.query.q = bcpublic.helpandsupport.global.getURLParam('q');
                history.pushState(params, '', helpers.generateSearchUrl(params.page, params2.query));
            }

            // If Facets is no longer visible, scroll up to top of Facets
            if (!helpers.isMobile() && !bcpublic.helpandsupport.global.isVisible($results, 50)) {
                window.scrollTo($results.offset().top, 0);
            }
        },

        /**
         * to be Update instantAnswer during facet's filter results
         * @param instantAnswer
         */
        updateInstantAnswer = function (instantAnswer) {
            var hasAdditionalCTA = instantAnswer['hasAdditionalCta'],
                additionalCTALink = instantAnswer['ctaLink'],
                additionalCTATitle = instantAnswer['ctaTitle'],
                target = instantAnswer['openInNewWindow'] ? "_blank" : "",
                title = instantAnswer['title'],
                contentAvailable = instantAnswer['contentAvailable'],
                colleagueIntroHtml = instantAnswer['colleagueIntroHtml'],
                ctaStyle = instantAnswer['ctaStyle'],
                url = instantAnswer['url'],
                showInstantAnswer = instantAnswer['showInstantAnswer'],
                ctaBackToResultsData = instantAnswer['ctaBackToResultsData'],
                resultsPathExt = instantAnswer['resultsPathExt'];

            var btnPrimaryClassNames = "btn btn-primary",
                btnSecondaryClassNames = "btn btn-secondary",
                moreDetailsLabel = "More Details",
                anchorTag = "a";

            var instantAnswerElement = $(".instant-answer"),
                instantAnswerTitleElement = instantAnswerElement.find(".instant-answer--main h1"),
                instantAnswerContentElement = instantAnswerElement.find(".instant-answer--answer");

            /**
             * Checking showInstantAnswer flag true then instantAnswer element show and to be update as per available
             * data otherwise instantAnswer hide
             */
            if (showInstantAnswer) {
                instantAnswerElement.show();
                instantAnswerTitleElement.text(title);
                instantAnswerContentElement.html(colleagueIntroHtml);
                // Checking contentAvailable flag true then checking other values based on that to be create buttons
                if (contentAvailable) {
                    /**
                     * Checking hasAdditionalCTA is available then to be create buttons based on ctaStyle
                     * otherwise only one primary "More detail" button to be create
                     */
                    if (hasAdditionalCTA) {
                        var divElement = createElement("div", "", {className: "more-link"});
                        var anchorElement;
                        /**
                         * Create buttons based on ctaStyle and append in instantAnswer element
                         * if ctaStyle is primary then additionalCTATitle button is primary and "More Detail" button is
                         * secondary
                         */
                        if (ctaStyle === "primary") {
                            anchorElement = createElement(anchorTag, additionalCTATitle, {
                                href: addBackToResultsHash(additionalCTALink, ctaBackToResultsData),
                                "data-back-to-results-url": ctaBackToResultsData,
                                className: btnPrimaryClassNames,
                                target: target
                            });
                            instantAnswerContentElement.append(anchorElement);
                            anchorElement = createElement(anchorTag, moreDetailsLabel, {
                                href: addBackToResultsHash(url, resultsPathExt),
                                "data-back-to-results-url": resultsPathExt,
                                className: btnSecondaryClassNames,
                                target: target
                            });
                        }
                        /**
                         * if  ctaStyle is not primary then "More Detail" button is primary and additionalCTATitle
                         * button is secondary
                         */
                        else {
                            anchorElement = createElement(anchorTag, moreDetailsLabel, {
                                href: addBackToResultsHash(url, resultsPathExt),
                                "data-back-to-results-url": resultsPathExt,
                                className: btnPrimaryClassNames
                            });
                            instantAnswerContentElement.append(anchorElement);
                            anchorElement = createElement(anchorTag, additionalCTATitle, {
                                href: addBackToResultsHash(additionalCTALink, ctaBackToResultsData),
                                "data-back-to-results-url": ctaBackToResultsData,
                                className: btnSecondaryClassNames,
                                target: target
                            });
                        }
                        divElement.appendChild(anchorElement);
                        instantAnswerContentElement.append(divElement);
                    }
                    /**
                     * if hasAdditionalCTA is false then create only one primary button with "More detail"
                     */
                    else {
                        instantAnswerContentElement.append(createElement(anchorTag, moreDetailsLabel, {
                            href: addBackToResultsHash(url, resultsPathExt),
                            "data-back-to-results-url": resultsPathExt,
                            className: btnPrimaryClassNames
                        }));
                    }
                }
                /**
                 * checking hasAdditionalCTA is true and contentAvailable is false then create only primary button
                 * with additionalCTATitle
                 */
                else if (hasAdditionalCTA && !contentAvailable) {
                    instantAnswerContentElement.append(createElement(anchorTag, additionalCTATitle, {
                        href: addBackToResultsHash(additionalCTALink, ctaBackToResultsData),
                        "data-back-to-results-url": ctaBackToResultsData,
                        className: btnPrimaryClassNames,
                        target: target
                    }));
                }
            } else {
                instantAnswerElement.hide();
            }
        },

        /**
         * append back url to href
         * @param href
         * @param ctaBackToResultsData
         * @return {string}
         */
        addBackToResultsHash = function (href, ctaBackToResultsData) {
            var encodedUrl = encodeURIComponent(ctaBackToResultsData);
            return href.replace(".html", "/") + '#back=' + encodedUrl;
        },

        /**
         * Create element based on tag name, attributes and text.
         * @param tag
         * @param textContent
         * @param props
         * @return {HTMLElement | HTMLSelectElement | HTMLLegendElement | HTMLTableCaptionElement | HTMLTextAreaElement | HTMLModElement | HTMLHRElement | HTMLOutputElement | HTMLPreElement | HTMLEmbedElement | HTMLCanvasElement | HTMLFrameSetElement | HTMLMarqueeElement | HTMLScriptElement | HTMLInputElement | HTMLUnknownElement | HTMLMetaElement | HTMLStyleElement | HTMLObjectElement | HTMLTemplateElement | HTMLBRElement | HTMLAudioElement | HTMLIFrameElement | HTMLMapElement | HTMLTableElement | HTMLAnchorElement | HTMLMenuElement | HTMLPictureElement | HTMLParagraphElement | HTMLTableDataCellElement | HTMLTableSectionElement | HTMLQuoteElement | HTMLTableHeaderCellElement | HTMLProgressElement | HTMLLIElement | HTMLTableRowElement | HTMLFontElement | HTMLSpanElement | HTMLTableColElement | HTMLOptGroupElement | HTMLDataElement | HTMLDListElement | HTMLFieldSetElement | HTMLSourceElement | HTMLBodyElement | HTMLDirectoryElement | HTMLDivElement | HTMLUListElement | HTMLHtmlElement | HTMLAreaElement | HTMLMeterElement | HTMLAppletElement | HTMLFrameElement | HTMLOptionElement | HTMLImageElement | HTMLLinkElement | HTMLHeadingElement | HTMLSlotElement | HTMLVideoElement | HTMLBaseFontElement | HTMLTitleElement | HTMLButtonElement | HTMLHeadElement | HTMLParamElement | HTMLTrackElement | HTMLOListElement | HTMLDataListElement | HTMLLabelElement | HTMLFormElement | HTMLTimeElement | HTMLBaseElement}
         */
        createElement = function (tag, textContent, props) {
            var i;
            var el = document.createElement(tag);
            props = props || {};

            // set properties
            for (i in props) {
                if (props.hasOwnProperty(i) && props[i]) {
                    if (i === 'className') {
                        el.setAttribute('class', props[i]);
                    } else {
                        el.setAttribute(i, props[i]);
                    }
                }
            }

            // set inner text
            if (textContent) {
                el.textContent = textContent;
                el.innerText = textContent;
            }

            return el;
        },

        /**
         * Updates the page with a new state
         * @param  {searchParams} state SearchParams configuration for a new view
         * @return {Deferred}       Resolved on the page update
         */
        updateFacets = function (state, wasBackButtonPushed) {
            var deferredFacets = $.Deferred(),
                totalResults;

            bcpublic.helpandsupport.facets.dataParser.getFacetedResults(state)
                .then(function (data) {
                    // Add a property to the search results that says whether we're updating because the back button was pushed. We'll use this later to avoid doing a pushState
                    data.wasBackButtonPushed = wasBackButtonPushed;

                    // Do the fade out
                    var deferred = $.Deferred(),
                        fadeDuration = 300;

                    $groupsSection.fadeOut(fadeDuration);

                    if (helpers.isFacetPanelOpen()) {
                        setTimeout(function () {
                            deferred.resolve(data);
                        }, fadeDuration);
                    } else {
                        deferred.resolve(data);
                    }

                    return deferred;
                })
                .then(function (data) {
                    var deferred = $.Deferred(),
                        totalPTopics = data['family'].length,
                        totalTopics = data['topics'].length,
                        totalGroup = data['group'].length,
                        totalSubgroup = data['subgroup'].length,
                        totalOffering = data['offering'].length,
                        isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

                    // Update offset and applied facets
                    // Other params should stay the same
                    helpers.setParamQuery({
                        offset: data.offset,
                        facets: data['facet-query'].join()
                    });

                    $topics.html(createFacetsView(data['topics'], 'facetsTopics'));
                    $ptopics.html(createFacetsView(data['family'], 'facetsPTopics'));
                    $channels.html(createFacetsView(data['channels'], 'facetsChannels'));
                    $contenttype.html(createFacetsView(data['contentTypes'], 'facetsContentTypes'));
                    $group.html(createFacetsView(data['group'], 'facetsGroup'));
                    $subgroup.html(createFacetsView(data['subgroup'], 'facetsSubgroup'));
                    $offering.html(createFacetsView(data['offering'], 'facetsOffering'));
                    //Colleague
                    if (isColleagueResults) {
                        $businessarea.html(createFacetsView(data['businessAreaColleagues'], 'facetsBusinessArea'));
                        if (data['instantAnswer']) {
                            updateInstantAnswer(data['instantAnswer']);
                        }
                    }
                    // Mark if channels are empty
                    if (data['channels'].length === 0) {
                        $('.facets--group-channels').addClass('is-empty-set');
                    } else {
                        $('.facets--group-channels').removeClass('is-empty-set');
                    }

                    if (data['contentTypes'].length === 0) {
                        $('.facets--group-contenttypes').addClass('is-empty-set');
                    } else {
                        $('.facets--group-contenttypes').removeClass('is-empty-set');
                    }

                    if (isColleagueResults) {
                        if (data['businessAreaColleagues'].length === 0) {
                            $('.facets--group-businessarea').addClass('is-empty-set');
                        } else {
                            $('.facets--group-businessarea').removeClass('is-empty-set');
                        }
                    }
                    // Only show seperator when needed
                    if ((totalPTopics > 0 && totalGroup === 0 && totalSubgroup === 0 && totalOffering === 0 && totalTopics === 0) || (totalPTopics === 0 && totalGroup > 0 && totalSubgroup > 0 && totalOffering > 0 && totalTopics > 0)) {
                        $ptopics.addClass('facets-p-topics--none');
                    }
                    else {
                        $ptopics.removeClass('facets-p-topics--none');
                    }

                    if (totalPTopics === 0 && totalGroup === 0 && totalSubgroup === 0 && totalOffering === 0 && totalTopics === 0) {
                        $topicsWrapper.addClass('is-empty-set');
                    }
                    else {
                        $topicsWrapper.removeClass('is-empty-set');
                    }

                    //keyboard focus background change for facet topics
                     $('.facets--list a').on('focus', function (e) {
                        $(e.target).parent().addClass("keyboard-focus");
                    });
                    $('.facets--list a').on('focusout', function (e) {
                        $(e.target).parent().removeClass("keyboard-focus");
                    });

                    $type.html(bcpublic.helpandsupport.templates['facetsType'](createFacetsCustomers(data['customers'])));
                    $typeSelect.html(bcpublic.helpandsupport.templates['facetsTypeSelect'](createFacetsCustomers(data['customers'])));
                    bcpublic.helpandsupport.facets.page.storeHeight();

                    // Count
                    totalResults = data['total-matches'];
                    if (totalResults > 99) {
                        totalResults = '99+';
                    }
                    updateTotalResults(totalResults, 'narrow');

                    deferred.resolve(data);

                    return deferred;
                })
                .then(function (data) {
                    // Do the fade in
                    var deferred = $.Deferred(),
                        fadeDuration = 300;

                    // Update facets-applied class for reset link in mobile
                    if (state && state.query && helpers.isMobile()) {
                        if (state.query.facets.length > 0) {
                            $('body').addClass('facets--applied');
                        }
                        else {
                            $('body').removeClass('facets--applied');
                        }
                    }

                    $groupsSection.fadeIn(fadeDuration);

                    if (helpers.isFacetPanelOpen()) {
                        setTimeout(function () {
                            deferred.resolve(data);
                            animationInProgress = false;
                        }, fadeDuration);
                    } else {
                        animationInProgress = false;
                        deferred.resolve(data);
                    }

                    return deferred;
                })
                .then(function (data) {
                    if (helpers.isMobile() && helpers.isFacetPanelOpen()) {
                        // Store for later use and
                        // wait until the done button is pressed
                        deferredResultsUpdate = deferredFacets;
                        defferedData = data;
                    } else {
                        // Reset deferred results for mobile cta
                        deferredResultsUpdate = null;
                        // Update results immediately
                        deferredFacets.resolve(data);
                    }

                    bcpublic.helpandsupport.facets.page.setFacetHeightState();
                });

            return deferredFacets;
        },

        /**
         * Update DOM with total results
         * @param  {number} totalResults    Total Results
         * @param  {String} section         Section key to update
         */
        updateTotalResults = function (totalResults, section) {

            var $oldResults,
                $newResults,
                resultsCount,
                animate,
                hideResults = function ($results) {
                    return $results.removeClass('show').addClass('hide');
                },
                showResults = function ($results, $oldResults, animate) {

                    if (animate && Modernizr.csstransitions) {
                        setTimeout(function () {
                            $results.one('transitionend', function () {
                                $oldResults.remove();
                            });

                            $results.removeClass('hide').addClass('show');
                        }, 150);
                    }

                    else {
                        $oldResults.remove();
                        $results.removeClass('hide').addClass('show');
                    }
                },

                // Update results in both wide and narrow since user can change viewport
                resultsConfig = {
                    narrow: {
                        oldResults: $('.facets--results-count'),
                        resultsCount: '.facets--results-count-number',
                        narrow: true
                    },
                    wide: {
                        oldResults: $('.results-section--title-total'),
                        resultsCount: '.results-section--title-number',
                        narrow: false
                    }
                },

                resultsSet = resultsConfig[section];

            $oldResults = resultsSet.oldResults;
            resultsCount = resultsSet.resultsCount;

            $newResults = $oldResults.clone();

            // Append the words to total count as they all fade in
            if (section === 'wide') {
                var isHelpResults = bcpublic.helpandsupport.facets.helpers.isHelpResults(),
                    isColleagueResults = bcpublic.helpandsupport.facets.helpers.isColleagueResults();

                if (isColleagueResults || isHelpResults) {
                    if (totalResults === 1) {
                        totalResults = totalResults + ' ' + bcpublic.helpandsupport.i18n.componentFacets['results.public.result'];
                    } else {
                        totalResults = totalResults + ' ' + bcpublic.helpandsupport.i18n.componentFacets['results.public.results'];
                    }
                } else {
                    totalResults = totalResults + ' ' + bcpublic.helpandsupport.i18n.componentFacets['results.public.faq'];
                }
            }

            hideResults($newResults).find(resultsCount).html(totalResults);
            hideResults($oldResults).after($newResults);

            // Animate if narrow viewport and narrow markup, or wide viewport and wide markup
            animate = ((resultsSet.narrow && helpers.isMobile()) || (!resultsSet.narrow && !helpers.isMobile())) ? true : false;

            showResults($newResults, $oldResults, animate);
        },

        updateColumnHeights = function () {
            // Adjust a new height. Only for mobile
            if (helpers.isMobile()) {
                var section = $('.section-bhs'),
                    ordinal = section.hasClass('section-primary') ? 'primary' : 'secondary';
                bcpublic.helpandsupport.resultstab.showTabViewResults(ordinal);
            }
        },

        applyFacets = function () {
            if (deferredResultsUpdate && defferedData) {
                deferredResultsUpdate.resolve(defferedData);
            } else {
                // The results are already updated
                // adjust heights only
                updateColumnHeights();
            }
        },

        resetFacets = function (e) {
            var $resultsSectionTitle = $('.section-primary .results-section--title');

            e.preventDefault();
            e.returnValue = false;

            // Scroll to top
            if (helpers.isMobile()) {
                $('.facets--wrapper').scrollTop(0);
            }

            // Scroll to top of facets if header not in view
            else if (!bcpublic.helpandsupport.global.isVisible($resultsSectionTitle)) {
                $(window).scrollTop($resultsSectionTitle.offset().top);
            }

            var params = helpers.getParams();

            params.query.facets = [];
            params.query.origin = 'help.barclays.co.uk';
            params.query.offset = 0;

            updateFacets(params)
                .then(updateSearchResults);
        },

        animLoadingStart = function () {
            var deferred = $.Deferred();

            if (!helpers.isMobile()) {
                var width = $results.width();
                $loadingAnimationCover.addClass('active-start').css('width', width + 'px');
                setTimeout(function () {
                    $loadingAnimationCover.addClass('active');
                    deferred.resolve();
                }, 100);

                timerCircle = setTimeout(function () {
                    if ($loadingAnimationCover.hasClass('active')) {
                        // Show the circle
                        $loadingAnimationCover.addClass('circle');
                    }
                }, 3000);
            } else {
                deferred.resolve();
            }

            return deferred;
        },

        animLoadingEnd = function () {
            var deferred = $.Deferred();

            if (!helpers.isMobile()) {
                clearTimeout(timerCircle);
                $loadingAnimationCover.removeClass('active').removeClass('circle');
                setTimeout(function () {
                    $loadingAnimationCover.removeClass('active-start');
                    deferred.resolve();
                }, 300);
            } else {
                deferred.resolve();
            }

            return deferred;
        },

        init = function () {
            $topics = $('.facets-topics--list');
            $ptopics = $('.facets-p-topics--list');
            $topicsWrapper = $ptopics.parent('.facets--group-topics');
            $channels = $('.facets-channels--list');
            $type = $('.facets-type--list');
            $typeSelect = $('.facets--group-options');
            $results = $('.results-section-bhs');
            $pagination = $('.section-bhs .results-section--pagination-section');
            $paginationMobile = $('.section-bhs .results-section--pagination-section-mobile');
            $tabTitle = $('.results-tab--link.tab-bhs');
            $count = $('.facets--results-count');
            $hideFacets = $('.facets--hide');
            $loadingAnimationCover = $('.results--loader-animation-cover');
            $groupsSection = $('.facets--group-section');
            $group = $('.facets-group--list');
            $subgroup = $('.facets-subgroup--list');
            $offering = $('.facets-offering--list');
            $contenttype = $('.facets-contenttypes--list');
            //Colleague
            $businessarea = $('.facets-businessarea--list');

            $topics.on('click', 'li', updateFacetEvent);
            $ptopics.on('click', 'li', updateFacetEvent);
            $channels.on('click', 'li', updateFacetEvent);
            $group.on('click', 'li', updateFacetEvent);
            $subgroup.on('click', 'li', updateFacetEvent);
            $offering.on('click', 'li', updateFacetEvent);
            $results.on('click', 'a.facets--reset', resetFacets);
            $contenttype.on('click', 'li', updateFacetEvent);
            //Colleague
            $businessarea.on('click', 'li', updateFacetEvent);


            $('.facets').on('click', '.facets--reset', function (e) {
                if (helpers.isMobile()) {
                    resetFacets(e);
                }
            });

            $hideFacets.on('click', applyFacets);

            // Facets applied class needs to be at higher level
            if ($results.is('.facets--applied')) {
                $results.removeClass('facets--applied');
                $('body').addClass('facets--applied');
            }
        };

    init();

    $(document).ready(function () {
        var params = helpers.getParams();

        if (params.facetsOnPage && bcpublic.helpandsupport.global.historyAPI()) {
            window.addEventListener('popstate', function (e) {
                var state = e.state;

                if (Object.prototype.toString.call(state) === '[object Object]' &&
                    typeof state.query !== 'undefined' && typeof state.query.facets !== 'undefined') {

                    updateFacets(state, true)// The second argument indicates that the back button was pressed, so pushState should not be called after results are updated
                        .then(updateSearchResults);
                }
            });
        }

        if (helpers.getFacetStorage()) {
            updateFacets()
                .then(function () {
                    var params = helpers.getParams();
                    // Replace the state only for H&S
                    if (bcpublic.helpandsupport.global.historyAPI() && (params.query.origin === 'help.barclays.co.uk' || params.query.origin === 'colleague-barclays-intranet')) {
                        // do not update url query q param with search suggestion
                        var params2 = $.extend(true, {}, params);
                        params2.query.q = bcpublic.helpandsupport.global.getURLParam('q');
                        history.replaceState(params, '', helpers.generateSearchUrl(params.page, params2.query));
                    }
                });
        }
    });

    return {
        createPagination: createPagination,
        updateFacets: updateFacets,
        applyFacets: applyFacets,
        updateSearchResults: updateSearchResults,
        animLoadingStart: animLoadingStart,
        animLoadingEnd: animLoadingEnd
    };
})(jQuery);

/**
 * Methods to retrieve data
 *
 * @class facets.dataParser
 * @constructor
 */
bcpublic.helpandsupport.facets.dataParser = (function ($) {

    /**
     * Get results from the server
     * @param  {Object} state searchParams object, containing params for the results
     * @return {Deferred}       Resolved on data availability
     */
    var getFacetedResults = function (state) {
        var deferred = $.Deferred(),
            helpers = bcpublic.helpandsupport.facets.helpers;

        if (!state) {
            deferred.resolve(helpers.getFacetStorage());
            return deferred;
        }

        // If no search term defined in url, look for fallback in page config
        if (!state.query.q) {
            state.query.q = $('#search-query').data('q');
        }
        state.query.q = encodeURIComponent($('.search-bar--searchbox').val());

        var url = helpers.generateSearchUrl(state.endpoint, state.query, true);

        $.get(url)
            .done(function (data) {
                deferred.resolve(data);
            })
            .fail(function () {
                deferred.reject();
            });

        return deferred;
    };

    return {
        getFacetedResults: getFacetedResults
    };
})(jQuery);
/**
 * @fileOverview Provides functionality for the multi tab.
 * @author: Remi Rynkiewicz <remi.rynkiewicz@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};


bcpublic.helpandsupport.multiTab = (function($) {
    'use strict';

    var 
        $window             = $(window),
        $body               = $('body'),
        labelsType          = 'full', // full / short
        touchSupported      = Modernizr.touch,
        $el,
        $tabsWrapper,
        $tabs,
        $windowWidth,
        $tabsEls,
        $tabsAlt,
        $tabsAltEls,
        $content,
        $contentList,
        $contentEls,
        $theresMoreLeft,
        $theresMoreRight,

        cacheElements = function() {
            $el                 = $('#multi-tab');
            $tabsWrapper        = $el.find('.tabs-wrapper');
            $tabs               = $tabsWrapper.find('ul.tabs');
            $windowWidth        =  $window.width();
            $tabsEls            = $tabs.find(' > li');
            $tabsAlt            = $tabs.find(' > li#second-tab');
            $content            = $el.find('> div.content');
            $contentList        = $content.find('> ul');
            $contentEls         = $content.find('li');
            $theresMoreLeft     = $el.find('.theres-more.left');
            $theresMoreRight    = $el.find('.theres-more.right');
        },

        /**
        * Binds events to the necessary DOM elements
        *
        * @method  bindEvents
        */
        bindEvents = function() {
            $tabs.on('click', 'li a', function() {

                var $this = $(this);

                $this.blur(); 

                var $tab = $this.parent('li');
                selectTab( $tab );

                $el.trigger('tab-selected', $tab );
            });

            $window.smartresize(function() {
                reCalculateTabs();
            }, 500);

            if (touchSupported) {
                touchEvents();
            }


            function locationHashChanged(e) {
                e.preventDefault();
                handleDeepLink();
            }

            window.onhashchange = locationHashChanged;

        },

        removeIdsFromContentEls = function() {

            var id;

            $contentEls.each(function() {

                var $this = $(this);

                id = $this.attr('id');
                $this[0].removeAttribute('id');
                $this.attr('data-name', id);
            });
        },

        touchEvents = function() {

            var reCalculateVisualClue = function() {

                var scrolledFromLeft            = $tabsWrapper.scrollLeft(),
                    scrolledFromRight           = $tabs.width() - $tabsWrapper.width() - scrolledFromLeft,
                    theresMoreLeftLeft,
                    theresMoreRightRight;

                theresMoreLeftLeft = -45 + scrolledFromLeft;
                if (theresMoreLeftLeft > 0){
                    theresMoreLeftLeft = 0;
                }

                theresMoreRightRight = -45 + scrolledFromRight;
                if (theresMoreRightRight > 0){
                    theresMoreRightRight = 0;
                }

                $theresMoreLeft.css('left', theresMoreLeftLeft);
                $theresMoreRight.css('right', theresMoreRightRight);
            },

            scrollTabsWrapperToCenter = function(tab){


                var tabPosition     = tab.position(),
                    tabCenter       = ( 2 * tabPosition.left + tab.width() ) / 2,
                    toScrollLeft    = tabCenter - $tabsWrapper.width() / 2,
                    maxLeftScroll   = $tabs.width() - $tabsWrapper.width();

                    if (maxLeftScroll <= 0) {
                        return false;
                    }

                    if (toScrollLeft < 0){
                        toScrollLeft = 0;
                    }

                    if (toScrollLeft > maxLeftScroll){
                        toScrollLeft = maxLeftScroll;
                    }

                    $tabsWrapper.animate({
                        scrollLeft : toScrollLeft
                    }, 500);

            };

            $tabsWrapper.on('scroll', function(){
                reCalculateVisualClue();
            });

            reCalculateVisualClue();

            $el.on('tab-selected', function(e, $tab){
                scrollTabsWrapperToCenter($($tab));
            });

        },

        moreTabHelpers = {

            shouldIHighlightMoreLabel : function(){

                var active = $tabsAltEls.filter('.active');

                if ( active.hasClass('hidden') ){
                    $tabsAlt.removeClass('active');

                } else {
                    $tabsAlt.addClass('active');
                }
            },

            overflowTabs: function() {

                var width = $el.width(),
                    tempWidth = 0,
                    
                    // calculate amount of label tabs we can fit
                    weCanFit = (function(){
                        for (var i=0; i < $tabsEls.length; i++ ){

                            tempWidth += $tabsEls.filter(':eq('+ i +')').width();
                            if ( tempWidth > width ){
                                return ( i - 1 );
                            }
                        }
                    })();

                //not enoughSpace so we only show ' + weCanFit + ' elements plus dropdown
                $tabs.addClass('not-enough-space');
                $tabsEls.removeClass('hidden').filter(':gt(' + (weCanFit - 1) + ')').not('#second-tab').addClass('hidden');
                $tabsAltEls.removeClass('hidden first-of-visible').filter(':lt(' + weCanFit +')').addClass('hidden');
                $tabsAltEls.filter(':eq('+weCanFit+')').addClass('first-of-visible');

                $el.css('min-height', $tabsAlt.find('> ul').height() );
            },

            populateSecondDropdown: function(){
                $tabsAlt.append('<ul></ul>');
                $tabsEls.not('#second-tab').clone().appendTo( $tabsAlt.find('> ul'));

                $tabsAltEls = $tabsAlt.find(' > ul > li');
            }

        },

        bindAuthorEvents = function() {
            $tabs.on('click', 'li a', function(e){
                e.preventDefault();
            });
        },

        selectTab = function($tab) {
            if ($tab.hasClass('active')){
                // close more dropdown
            } else {
                changeTab( $tab );
            }
        },

        changeTab = function($tab) {
            var tabName                 = $tab.find('> a').attr('href'),
                $activeContent          = $contentEls.filter('.active'),
                $contentElToActivate,

                switchActiveTab  = function(){

                    $tabsEls.removeClass('active');
                    $tabsEls.filter('[data-name="' + tabName  + '"]').addClass('active');

                    if ( touchSupported === false ){
                        $tabsAltEls.removeClass('active');
                        $tabsAltEls.filter('[data-name="' + tabName  + '"]').addClass('active');
                        moreTabHelpers.shouldIHighlightMoreLabel();
                    }

                },

                swithcActiveContent = function() {
                    $contentList.height(
                        $activeContent.outerHeight()
                    );

                    $activeContent.css({
                        position: 'absolute'
                    });

                    $contentEls.removeClass('active');

                    setTimeout(function() {
                        $contentElToActivate.addClass('active');

                        $contentElToActivate.css({ position    : 'static' });
                        $contentList.height('auto');

                    }, 350 );
                };

            if (tabName === undefined) {
                return false;
            }

            tabName                 = tabName.slice(1);
            $contentElToActivate    = $contentEls.filter('[data-name="' + tabName  + '"]');

            switchActiveTab();
            swithcActiveContent();

        },

        isThereEnoughSpace = function() {
            function disableTabsOverflow(){
                $tabsEls.removeClass('hidden');
                $tabsAltEls.removeClass('hidden');
                $tabs.removeClass('not-enough-space');
            }

            if (touchSupported === false){
                disableTabsOverflow();
            }

            var width = $tabsWrapper.width(),
                tabsWidth = $tabs.width();

            if (tabsWidth > width) {
                return false;

            } else {

                return true;
            }
        },

        determineAndSetLabelsType = function() {
            var setLabelsType = function(type) {

                if (type === 'short' || type === 'full') {
                    labelsType = type;

                    $el.removeClass('labels-type-short labels-type-full');
                    $el.addClass('labels-type-' + type);

                } 
            };

            if ($windowWidth > 599) {
                setLabelsType('full');
            } else {
                setLabelsType('short');
            }

            if ( isThereEnoughSpace() === false ) {
                setLabelsType('short');
            }
        },

        reCalculateTabs = function() {
            $windowWidth         =  $window.width();
            determineAndSetLabelsType();

            if (isThereEnoughSpace() === false) {
                if (touchSupported === false) {
                    moreTabHelpers.overflowTabs();
                    moreTabHelpers.shouldIHighlightMoreLabel();
                }
            }
        },

        handleDeepLink = function() {
            var hashRaw = window.location.hash.slice(1),
                hash = hashRaw.replace(/"/g, '\\"'),
                $tabToActivate   = $tabsEls.filter('[data-name="' + hash  + '"]').first();

            if (hash) {
                if ($tabToActivate.length > 0) {
                    changeTab( $tabToActivate );
                    $el.trigger('tab-selected', $tabToActivate);

                    return true;
                }
                manageNullDeepLink();
            }
            manageNullDeepLink();
        },

        manageNullDeepLink = function() {
            var $appFlagDefaultToTab = $tabsEls.filter('[data-should-we-activate="true"]');

            if ($appFlagDefaultToTab.size() === 1) {
                changeTab($appFlagDefaultToTab);
            } else {
                changeTab($tabsEls.first());
            }
        },

        /**
        * Initialise the JavaScript for the multi tab
        *
        * @method  init
        */
        init = function() {
            var isLastElementInParent = function(){

                var lastOne = $el.parent('div').find(' > div:last');

                if (lastOne && ( lastOne.attr('id') === $el.attr('id') ) ){
                    return true;
                } else {
                    return false;
                }
            };

            cacheElements();
            removeIdsFromContentEls();

            if ( touchSupported === false ) {
                moreTabHelpers.populateSecondDropdown();
            }

            if (isLastElementInParent()) {
                $el.addClass('last-el-in-parent');
            }

            // do not run js for CQ author mode
            if ($body.hasClass('cq-wcm-edit') || $body.hasClass('cq-wcm-design')) {
                bindAuthorEvents();
                return false;
            }

            reCalculateTabs();
            bindEvents();

            handleDeepLink();

        };

    $(document).ready(function() {
        init();
    });

    return {
        init: init,
        reCalculateTabs: reCalculateTabs
    };
})(jQuery);

/**
 * @fileOverview Rewrites urls for results page
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.searchResults = (function ($) {
    'use strict';

    $(function() {
        $('.results-section .results-section--item[data-back-to-results]').each(function() {
            var $el = $(this);
            var oldHref = $el.attr('href');
            $el.attr('href', oldHref + '#back=' + encodeURIComponent($el.data('back-to-results')));
        });
    });

})(jQuery);

/**
 * @fileOverview Rewrites urls for results page
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};
bcpublic.helpandsupport.groupData = bcpublic.helpandsupport.groupData || {};
bcpublic.helpandsupport.groupData.groups = bcpublic.helpandsupport.groupData.groups || {};
bcpublic.helpandsupport.i18n = bcpublic.helpandsupport.i18n || {};

bcpublic.helpandsupport.dpanel = (function($) {
    'use strict';

    var i18n = {
        messages: bcpublic.helpandsupport.i18n.contactusGroup || {},
        getMessage: function (key, def) {
            return bcpublic.helpandsupport.global.getI18nMessage(key, def, this.messages);
        }
    };

    var h = bcpublic.helpandsupport.htmlRendering.h;

    // Set to true when events are set first time=
    var dpanelRendered = false,
        tabStates,
        openClass = 'display-panel-open',
        activeClass = 'active',
        lockScrollingClass = 'lock-scrolling',

        groupSelectClass = 'display-panel-group-select',
        singleGroupClass = 'display-panel-single-group',
        channelClass     = 'display-panel-channel-select',
        channelSingleClass  = 'display-panel-channel-single-select',
        $window          = $(window);

        // Tests if there is one channel only, which can be skipped to
        // The assumption is that it can only be a telephone, but...
        // if it is deactivated, it can be anything
        // BHSTWO-1155
    var isSingleChannel = function() {
            var $channels = $('.display-panel .channel');
            return $channels.length === 1 && $channels.find('.channel-inner').length === 1;
        },

        isSingleGroup = function(){
            return (bcpublic.helpandsupport.contextualizedGroupData.length === 1);
        },

        //to insert directory link straight into panel
        insertDirLink = function() {
            //get link from DOM and manipulate
            var link = $('.display-panel-dirlink')
                .removeClass('btn')
                .html(function() {
                    return $(this).data('dpanel-text');
                }).clone();

            //if only one group
            if (isSingleGroup()) {

                //if only a channel level exists
                //insert link at channel level and before legals
                if (isSingleChannel()) {

                    link = $('<div class="directory-link">').append(link);
                    $('.channel-inner > div').last().after(link);

                    if ($('.channel').hasClass('has-children')){
                        $('.channel-title').text(bcpublic.helpandsupport.i18n.contactusGroup['dpanel.public.cta.header']);
                    }

                }

                //if only group level exists
                //insert link at group level and before legals
                else {
                    link = $('<li class="directory-link">').append(link);
                    $('.channel').last().after(link);
                }
            }
            //if multiple groups, insert link at groups level
            else {
                link = $('<div class="directory-link">').append(link);
                $('.contact-groups').append(link);
            }

            link.on('click', function(){
                $window.trigger('display-panel-directory-link-clicked');
            });
        },

        scrollOffset = {

            condition : function(){
                return Modernizr.mq('(max-width: 799px)');
            },
            save : function(){
                this.savedOffset = window.scrollY;
            },
            restore : function(){
                if (this.savedOffset){
                    window.scrollTo(0, this.savedOffset);
                }
            }
        },

        openSingleAccordion = function(div) {
          if ( (div.find('.contact-group--channels > li .accordion-wrapper').length === 1) && (div.find('.contact-group--channels > li .channel-cta').length === 0) ) {
            if ( div.find('.contact-group--channels > li .accordion-wrapper.open').length === 1 ) {
               return false;
            }
            div.find('.contact-group--channels > li .accordion-wrapper .accordion-control h3').click();
          }

          if ( (div.find('.contact-group--content > li .accordion-wrapper').length === 1) && (div.find('.contact-group--content > li .channel-cta').length === 0) ) {
            if ( div.find('.contact-group--content > li .accordion-wrapper.open').length === 1 ) {
               return false;
            }
            div.find('.contact-group--content > li .accordion-wrapper .accordion-control h3').click();
          }
        },

        addGetInTouchHeader = function (item) {
            var contactGroupHeaderText = i18n.getMessage('page.public.getInTouch');

            var GetInTouchHeader = h('h2', {
                    className: 'text-center'
                },
                [].concat(contactGroupHeaderText)
            );

            item.find('> h2').remove();
            item.find('> li:first-child > h2').remove();
            item.find('> li:first-child:empty').remove();
            item.prepend(GetInTouchHeader);

            $('.display_panel .contact-group--content').addClass('bgwhite');
        },

        addGetInTouchOtherHeader = function (item) {
            var contactOtherGroupHeaderText = i18n.getMessage('page.public.getInTouchOther');

            var GetInTouchOtherHeader = h('h2', {
                    className: 'text-center'
                },
                [].concat(contactOtherGroupHeaderText)
            );

            item.find('> h2').remove();
            item.find('> li:first-child > h2').remove();
            item.find('> li:first-child:empty').remove();
            item.prepend(GetInTouchOtherHeader);
        },

        addGetInTouchOnlineHeader = function (item) {
            var contactOnlineGroupHeaderText = i18n.getMessage('page.public.getInTouchOnline');

            var GetInTouchOnlineHeader = h('h2', {
                    className: 'text-center'
                },
                [].concat(contactOnlineGroupHeaderText)
            );

            item.find('> h2').remove();
            item.find('> li:first-child > h2').remove().parent().remove();
            item.find('> li:first-child:empty').remove();
            item.prepend(GetInTouchOnlineHeader);
        },
  
        createCardSections = function(div){
            //render section titles
            if ( (div.find('.contact-group--channels > li').length !== 0) && (div.find('.contact-group--content > li').length === 0) ) {
                addGetInTouchOnlineHeader(div.find('.contact-group--channels'));
            }

            if ( (div.find('.contact-group--channels > li').length !== 0) && (div.find('.contact-group--content > li').length !== 0) ) {
                if (div.find('.contact-group--channels > li').length !== 0) {
                    addGetInTouchOnlineHeader(div.find('.contact-group--channels'));
                }

                if (div.find('.contact-group--content > li').length !== 0) {
                    addGetInTouchOtherHeader(div.find('.contact-group--content'));
                }
            }

            if ( (div.find('.contact-group--channels > li').length === 0) && (div.find('.contact-group--content > li').length !== 0) ) {
              addGetInTouchHeader(div.find('.contact-group--channels'));
            }
          
            openSingleAccordion(div);

            headingFix();
        },

        setLevel = function(fromCta) {

            //skip straight to group level if only one group
            if (isSingleGroup()) {

                $('html').addClass(singleGroupClass);
                $('.contact-group').addClass(activeClass);

                //skip straight to channel level if only one channel
                if (isSingleChannel()) {
                    // channel screen
                    $('html').addClass('display-panel-single-channel');
                    $('.display-panel .channel').addClass(activeClass);
                    var $singleChannel = $('.display-panel .contact-group .channel');
                    tabStates.screens.channel.enable($singleChannel);
                } else {
                    // group scren
                    var $group = $('.display-panel .contact-group');
                    tabStates.screens.group.enable($group);

                    createCardSections($group);
                }

            } else {
                // select group screen
                if (fromCta !== undefined){
                    tabStates.screens.groups.enable();
                }
            }
        },

        openPanel = function(fromCta) {

            if (fromCta !== undefined){
                $('.display-panel .active').removeClass(activeClass);
            }

            scrollOffset.condition() && scrollOffset.save();
            setLevel(fromCta);
            $('html').addClass(openClass).addClass(lockScrollingClass);
            $('.display-panel-header').focus();
            $(window).trigger('display-panel-opened');

            // Make other content areas have aria-hidden = true
            $('.skiplinks, HEADER, BODY > .wrapper, #main > .container-fluid > .col-md-8, #main > .container-fluid > .row > .col-md-3 > .answer-wrapper > ARTICLE > .links, #main > .container-fluid > .row > .col-md-3 > .answer-wrapper > ARTICLE > .display_panel > .display-panel-cta, .footer').attr('aria-hidden', 'true');

        },

        closePanel = function() {
            var $html = $('html'),
                panelWasOpen = $html.hasClass(openClass);

            $html.removeClass(openClass)
                .removeClass(lockScrollingClass)
                .removeClass(groupSelectClass)
                .removeClass(channelClass)
                .removeClass(channelSingleClass);

            $('.display-panel .channel.active').removeClass(activeClass);

            tabStates.disableAll();
            $(window).trigger('display-panel-closed', {
                panelWasOpen: panelWasOpen
            });
            scrollOffset.condition() && scrollOffset.restore();

            // Make other content areas have aria-hidden = false
            $('.skiplinks, HEADER, BODY > .wrapper, #main > .container-fluid > .col-md-8, #main > .container-fluid > .row > .col-md-3 > .answer-wrapper > ARTICLE > .links, #main > .container-fluid > .row > .col-md-3 > .answer-wrapper > ARTICLE > .display_panel > .display-panel-cta, .footer').attr('aria-hidden', 'false');

        },

        trapFocus = function(e) {
            var focusedItem = jQuery(':focus'),
                tabbableItems = $('.display-panel:visible a, .display-panel:visible .close, .display-panel-header'),
                noOFTabbable = tabbableItems.length,
                indexofCurrent = tabbableItems.index(focusedItem);

            if (e.shiftKey) { // backward tabbing. From first tabbable element, go to the last.
                if (indexofCurrent === 0) {
                    tabbableItems.eq(noOFTabbable - 1).focus();
                }

            } else { // forward tabbing. From last tabbable item, go back to the first.
                if (indexofCurrent === noOFTabbable - 1) {
                    tabbableItems.eq(0).focus();
                }
            }
        },

        selectGroup = function(group) {
            // Check if the group exists
            var $contactGroups = $('.contact-group'),
                $selGroup = $contactGroups.eq(group);

            if (!$selGroup.length) {
                // Reset selection if no contact group was found by the given index
                setStateByPath('0');
                return;
            }

            var groupName = $selGroup.find('.contact-group--title').text();

            $('html').addClass(openClass).addClass(groupSelectClass).addClass(lockScrollingClass);
            $('.display-panel .active').removeClass(activeClass);
            $selGroup.addClass(activeClass);

            tabStates.disableAll();
            tabStates.screens.group.enable($selGroup);

            createCardSections($selGroup);
            $(window).trigger('display-panel-group-opened', groupName);
        },
        fixAndroidDrawingIssue = function(){
            if (Modernizr.touch && bcpublic.helpandsupport.global.isMediumViewportOrNarrower()){

                var $channel = $('.channel'),
                    z = function(){
                        $(window).resize();
                    };

                z();

                if (bcpublic.helpandsupport.dpanel.fixAndroidDrawingIssueRun){
                    return false;
                }

                $channel.off('touchstart').off('touchend');
                $channel.on('touchstart', z).on('touchend', z);

                bcpublic.helpandsupport.dpanel.fixAndroidDrawingIssueRun = true;
            }
        },
        selectChannel = function(group, channel) {
            // Check if the group exists
            var $contactGroups = $('.contact-group'),
                $selGroup = $contactGroups.eq(group);

            if (!$selGroup.length) {
                // Reset selection if no contact group was found by the given index
                setStateByPath('0');
                return;
            }

            // Select the group
            $('html').addClass(openClass).addClass(groupSelectClass).addClass(lockScrollingClass);
            $('.display-panel .active').removeClass(activeClass);
            $selGroup.addClass(activeClass);

            // Check if the channel exists
            var $channels = $('.display-panel .contact-group.active .channel'),
                $selectChannel = $channels.eq(channel);

            if (!$selectChannel.length) {
                // Reset the selection of a channel if the group was found, but the channel was not
                setStateByPath('0/'+group);
                return;
            }

            $('.display-panel .channel.active').removeClass(activeClass);
            $selectChannel.addClass(activeClass);

            tabStates.disableAll();
            tabStates.screens.channel.enable($selectChannel);
            fixAndroidDrawingIssue();
        },
        pushHistory = function(path) {
            if (bcpublic.helpandsupport.global.historyAPI()) {

                var fullPath = path.length === 0 ? location.href.split('?')[0] : '?contactpanel=' + path;

                window.history.pushState({
                    path: path
                }, '', fullPath);
            }
        },
        setStateByPath = function(path) {
            path = path.split('/');

            //if a group level
            if (path.length === 1) {
                $('html').removeClass(groupSelectClass).removeClass(channelClass).removeClass(channelSingleClass);
                $('.display-panel .channel.active').removeClass(activeClass);
                tabStates.disableAll();
                setLevel();
            }

            //if a group level
            if (path.length === 2) {
                $('html').addClass(groupSelectClass).removeClass(channelClass).removeClass(channelSingleClass);
                selectGroup(path[1]);
            }

            //if a channel level
            if (path.length === 3) {
                $('html').addClass(groupSelectClass).addClass(channelClass);
                selectChannel(path[1], path[2]);
            }
        },
        TabStates = function(){

            var self = this,
            cacheEls = function() {

                self.selectors = 'a, .btn, .close, .contact-group--title, .channel, .display-panel-header, .accordion-control, .channel-inner, .panel-content';
                self.$el = $('.display-panel');
                self.$elContent = self.$el.find('.panel-content');

            },
            disable = function(selectors){
                self.$el.find(selectors).attr('tabindex', -1);
            },
            enable = function(selectors){
                self.$el.find(selectors).attr('tabindex', 0);
            },
            disableAll = function() {
                disable( self.selectors );
            },

            screens = {
                groups : {

                    selectors : '.close, .contact-groups > .directory-link a, .contact-groups .contact-group--title',

                    enable : function(){
                        enable(this.selectors);
                    },
                    disable : function(){
                        disable(this.selectors);
                    }
                },

                group : {
                    groupSelectors : '.contact-group--channels > .channel, .contact-group--channels > .contact-group--content > .channel > A, .contact-group--channels > .contact-group--content > .channel .accordion-control, .contact-group--channels > .contact-group--content > .channel .accordion-content A, .directory-link a',
                    generalSelectors : '.display-panel-header, .close',

                    enable : function($group){
                        enable($group.find(this.groupSelectors));
                        enable(this.generalSelectors);
                    }
                },

                channel : {
                    channelSelectors : '.accordion-control, .directory-link a, .phonenumbers a, .legal-text a',
                    generalSelectors : '.close',

                    enable : function($channel){
                        enable($channel.find(this.channelSelectors));
                        enable(this.generalSelectors);
                        enable($channel);
                    }
                }
            },

            init = function(){
                cacheEls();
            };

            init();

            return {
                disable : disable,
                enable : enable,
                disableAll : disableAll,
                screens : screens
            };
        },

        getChannelsPerGroup = function($group){
            return $group.find(' > .contact-group--channels > .channel');
        },

        actions = {

            closePanel : function(e) {
                if (e){
                    e.preventDefault();
                }
                closePanel();
                pushHistory('');
            },

            selectGroup : function(e, $this) {
                var $group = $this.closest('.contact-group'),
                    groupName = $group.find('.contact-group--title').text(),
                    $channels = getChannelsPerGroup($group),
                    channelsLength = $channels.length,
                    index = $group.index(),
                    historyPath = '0/' + index;

                e.preventDefault();

                if (channelsLength === 1 && $channels.hasClass('channel-telephone')) {

                    selectChannel(index, 0);
                    historyPath += '/0';

                    $('html').addClass(groupSelectClass).addClass(channelSingleClass).addClass(channelClass);
                    //open single accordion
                    if ($('.contact-group').find('.accordion-wrapper.open').length === 0) {
                      $group.find('.accordion-wrapper .accordion-control h3').click();
                    }

                    $(window).trigger('display-panel-group-opened', groupName);

                } else {

                    selectGroup(index);
                }

                pushHistory(historyPath);
            },

            selectChannelWithChildren : function(e, $this) {
                
                var isChannelInner = !!($(e.target).parents('.channel-inner').length || $(e.target).hasClass('channel-inner')),
                $group, groupIndex, channelIndex, historyPath, channelsLength;

                //clicking on the cta of a channel will navigate to the channel details
                if (!isChannelInner) {

                    e.preventDefault();

                    $group = $this.closest('.contact-group');
                    channelsLength = getChannelsPerGroup($group).length;
                    groupIndex = $group.index();
                    channelIndex = $(e.currentTarget).index();

                    $('html').toggleClass(channelClass).removeClass(channelSingleClass);

                    selectChannel(groupIndex, channelIndex);

                    //set new history state dependant on weather we are on channel or group level
                    if ($('html').hasClass(channelClass)) {
                        historyPath = '0/' + groupIndex + '/' + channelIndex;
                    } else {

                        if (channelsLength === 1){

                            historyPath = '0';
                            actions.goBack();

                        } else {

                            $group.find('.channel').removeClass('active');

                            historyPath = '0/' + groupIndex;
                            var groupToOpen = $('.contact-group').eq(groupIndex);
                            tabStates.disableAll();
                            tabStates.screens.group.enable(groupToOpen);

                            $window.trigger('display-panel-back-to-channels');
                        }

                    }
                    pushHistory(historyPath);
                }
            },

            goBack : function(){
                //go back to select group level if more than one group exists
                if (bcpublic.helpandsupport.groupData.groups.length > 1) {

                    tabStates.disableAll();
                    tabStates.screens.groups.enable();
                    pushHistory('0');

                    $('html').addClass(openClass).addClass(lockScrollingClass).removeClass(groupSelectClass).removeClass(channelClass).removeClass(channelSingleClass);
                }
            }
        },

        markContactGroupsWithOnlyTelephoneChannel = function(){
            $('.contact-group--channels').each(function(){
                var $channels = $(this).find('.channel');
                if ($channels.length === 1 && $channels.hasClass('channel-telephone')){
                    $(this).parent('.contact-group').addClass('only-one');
                }
            });
        },

        headingFix = function(){
            // Remove multiple headings
            $('UL > H2:first-child + UL > H2:first-child').remove();

            // Move Headings inside LI
            $('UL > H2').each(function(){
                var $parentUL = $(this).parent();
                var $liForHeading = $('<LI/>').append(this);
                $liForHeading.prependTo($parentUL);
            });
        },

        initDisplayPanel = function() {

            var $body                   = $('body'),
                displayPanelTrigger     = '.display-panel-launch',
                closeTriggers           = '.display-panel .tint, .display-panel .close',
                closeButton             = '.display-panel .close',
                tabFocus                = '.display-panel .close, .display-panel-dirlink, .display-panel-header',
                contactGroupTitle       = '.display-panel .contact-group--title',
                header                  = '.display-panel .display-panel-header',
                channelWithChildren     = '.display-panel .channel.has-children',
                allChannels             = '.display-panel .channel',
                $channelWithChildrenInner= $(channelWithChildren).find('.channel-inner'),
                $firstTabbableElementAfterDisplayPanel = $('.wrapper :tabbable').first();

            var clickOrEnter = function(selector, action){

                $body.on('click keypress', selector, function(e) {

                    if (e.type !== 'keypress') {
                        $(this).blur();
                    }

                    if (e.keyCode === undefined || e.keyCode === 13 ){
                        action(e, $(this));
                    }
                });
            };

            //open panel on button click
            $body.on('click', displayPanelTrigger, function(e) {
                e.preventDefault();
                openPanel('from-cta');
                pushHistory('0');
            });

            //close panel on click of tint and close button
            $body.on('click', closeTriggers, function(e) {
                actions.closePanel(e);
            });

            // Check and close panel if user has got to next tabbable element (i.e. Though Voice-Over Swipe on iOS device)
            $firstTabbableElementAfterDisplayPanel.on('focus', function(){
                if ($('HTML').hasClass('display-panel-open')){
                    closePanel();
                    pushHistory('');
                }
            });

            // Enter pressed on Close button
            $body.on('keypress', closeButton, function(e) {
                if (e.keyCode === 13){
                    actions.closePanel(e);
                }
            });

            // Esc pressed
            $body.keyup(function(e){
                if (e.keyCode === 27 && $('HTML').hasClass('display-panel-open')){
                    actions.closePanel(e);
                }
            });

            $body.on('keydown', tabFocus , function(e) {
                if (e.keyCode === 9){
                    trapFocus(e);
                }
            });

            clickOrEnter($channelWithChildrenInner, function(e){
                e.stopPropagation();
            });

            //select group click
            clickOrEnter(contactGroupTitle, actions.selectGroup);

            // go back to select group level
            clickOrEnter(header, actions.goBack );

            //click channel with children
            clickOrEnter(channelWithChildren, actions.selectChannelWithChildren);

            // dispatch click event when navigation the dpanel with keyboard
            $body.on('keypress', allChannels, function(e) {
                // Press enter
                if (e.keyCode === 13) {
                    var $elm = $(this);
                    if (!$elm.hasClass('has-children')) {
                        // Trigger native events
                        $.each(['channel-webchat', 'channel-video', 'channel-email', 'channel-requestCallback', 'channel-branch', 'channel-mysite'], function(i, channel) {
                            if ($elm.hasClass(channel)) {
                                var elm = $elm.find('a.cta-wrapper')[0];
                                // JQuery is not used, because it can't trigger native events
                                bcpublic.helpandsupport.global.dispatchEvent(elm, 'click');
                                return false;
                            }
                        });

                    }
                }
            });

            if (bcpublic.helpandsupport.global.historyAPI()) {
                window.onpopstate = function(e) {
                    if (e.state && e.state.hasOwnProperty('path')) {
                        setStateByPath(e.state.path);
                    } else {
                        closePanel();
                    }
                };
            }

            tabStates.disableAll();

            //if a contact panel param is set then load it to that state
            var urlParams = bcpublic.helpandsupport.global.getURLParam('contactpanel');
            if (urlParams) {
                setStateByPath(urlParams);
                openPanel();
            }

            insertDirLink();

            markContactGroupsWithOnlyTelephoneChannel();
            
        },

        /**
         * Buttons in the panel component
         * @type {Object}
         */
        PANELCTA = {
            DIRECTORY: 'directory',
            VIEWNOW: 'viewnow'
        },

        /**
         * Reveals and hides either of two buttons
         * @param  {PANELCTA} state Which button to reveal
         */
        revealPanelCTA = function(state) {
            var isHidden = 'is-hidden',
                ctaView = $('.display-panel-launch'),
                ctaCD = $('.check-the-directory');

            switch(state) {
                case PANELCTA.DIRECTORY:
                    ctaCD.removeClass(isHidden);
                    ctaView.addClass(isHidden);
                    break;
                case PANELCTA.VIEWNOW: // jshint ignore:line
                default:
                    ctaView.removeClass(isHidden);
            }
        };

    $(window).on('populatedGroup', function() {
        if (!bcpublic.helpandsupport.contextualizedGroupData.length) {
            // BHSTWO-1344
            // The group has been populated with no data, e.g. in case if the phone channel is deactivated.
            // Show the directory link and hide the view now button.
            revealPanelCTA(PANELCTA.DIRECTORY);
            return;
        }
        if ($('.display-panel').length) {
            revealPanelCTA(PANELCTA.VIEWNOW);
            tabStates = new TabStates();
            if (!dpanelRendered) {
                setLevel();
                // Attach all callbacks on first render
                initDisplayPanel();
                dpanelRendered = true;
            } else {
                // Only update the view our contact directory link
                insertDirLink();
                setLevel();
                setStateByPath(bcpublic.helpandsupport.global.getURLParam('contactpanel'));
                $('html').addClass(openClass).addClass(lockScrollingClass);
                markContactGroupsWithOnlyTelephoneChannel();
            }
        }
    });


    return {
    	fixiOSScrollIssue: function () {
    		// Work around odd iOS issue where sometimes the height of the content in a scrolling element (i.e. one with overflow-y:auto or overflow-y:scroll) won't be correctly calculated at the right time, resulting in the content not being scrollable.

    		// Work around taken from http://stackoverflow.com/a/16628505/20578

    		var $panelContent = $('.panel-content');

    		if ($panelContent.length) {
    			var originalDisplayValue = $panelContent.css('display');

    			$panelContent.css('display', 'none');
    			$panelContent.get(0).offsetHeight;
    			$panelContent.css('display', originalDisplayValue);
    		}
    	}
    };
})(jQuery);
/**
 * @fileOverview Render a ContactUs group
 * @author: Max Cherniavskyi <maxim.chernyavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */


var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};
bcpublic.helpandsupport.i18n = bcpublic.helpandsupport.i18n || {};

bcpublic.helpandsupport.contactgroup = (function ($) {
    'use strict';
    var i18n = {
        messages: bcpublic.helpandsupport.i18n.contactusGroup || {},
        getMessage: function (key, def) {
            return bcpublic.helpandsupport.global.getI18nMessage(key, def, this.messages);
        }
    };

    var $window         = $(window),
        $document       = $(document),
        isCqEdit        = window.CQ && CQ.WCM && CQ.WCM.isEditMode();


    function isArray(arg) { return Object.prototype.toString.call(arg) === '[object Array]'; }
    function not(fn) { return function() { return !fn.apply(this, [].slice.call(arguments, 0)); }; }
    var h;// This will have bcpublic.helpandsupport.htmlRendering.h assigned to it in the jQuery document ready call below.

    function recursivelyFindLegals(obj) {
        var legals = [],
            i;

        for (i in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, i)) {
                // property is legals array
                if (i === 'legals') {
                    legals = legals.concat(obj.legals);
                } else if (typeof obj[i] === 'object') {
                    // check sub object
                    legals = legals.concat(recursivelyFindLegals(obj[i]));
                }
            }
        }
        return legals;
    }

    function getLegals(obj) {
        // hash map
        var legals = {};
        $.each(recursivelyFindLegals(obj), function() {
            if (this.active === true || isCqEdit === true){
                legals[this.path] = this;
            }
        });

        // to array
        return $.map(Object.keys(legals), function(key) {
            return legals[key];
        });
    }

    function renderLegalSymbols(legals) {
        if (!legals || !legals.length) {
            return [];
        }
        return h('sup', { className: 'legals-symbols' }, $.map(legals, function(legal) {
            if (legal.active || isCqEdit === true){
                return legal.symbol || '';
            } else {
                return '';
            }
        }).join(' '));
    }

    function renderLegals(legals) {
        var title;
        if (!legals || !legals.length) {
            return [];
        }
        title = [h('li',{ className: 'legals-title' }, i18n.getMessage('contactgroup.public.legals.label'))];
        return h('ul', { className: 'legals' }, title.concat($.map(legals, function(legal) {
            var text = h('div', { className: 'legal-text' });
            text.innerHTML = legal.text;
            return h('li', [
                h('div', { className: 'legal-symbol' }, legal.symbol),
                text
            ]);
        })));
    }

    function renderNumber(n, legals, contact) {

        var getLinkAttrs = function (attrs) {
            attrs = attrs || {};
            attrs['href'] = 'tel:' + n.number.replace(/ /g, '');
            attrs['className'] = 'tel-cta';
            attrs['data-title'] = contact.name;
            attrs['data-label'] = n.label;
            attrs['data-number'] = n.number;
            return attrs;
        };

        switch (n.label) {

            // any (- custom) type
            case 'landline' :
            case 'overseas':
            case 'mobile':
            case 'textphone':
                return h('li', { className: 'phonenumber number-' + n.label }, [].concat( h('p', {className:'dpanel-telephone-num'} ,[].concat(
                    h('span', { className: 'label' }, i18n.getMessage('contactgroup.public.telephone.label.' + n.label) + ':'),
                    h('a', getLinkAttrs(), n.number),
                    renderLegalSymbols(legals)))
                ));
            // custom label
            default:
                return h('li', { className: 'phonenumber number-customlabel' }, [].concat( h('p', {className:'dpanel-telephone-num'} ,[].concat(
                    h('span', { className: 'label' }, n.label + ':'),
                    h('a', getLinkAttrs(), n.number),
                    renderLegalSymbols(legals) ))
                ));
        }
    }

    function renderPhoneNumbers(contact) {
        var numbers = contact.phonenumbers;
        var legals = contact.legals;
        if (!isArray(numbers)) {
            numbers = [numbers];
        }
        return h('ul', { className: 'phonenumbers' }, $.map(numbers, function(number) {
            return renderNumber(number, legals, contact);
        }));
    }

    function emptyGroupComponent() {
        if (isCqEdit){
            return false;
        }

        $('.contact-group').html('<div class="container-fluid"><div class="row"><div class="col-md-8 col-md-offset-2"><div class="faq-carousel-component-wrapper"></div></div></div></div><div class="container-fluid"><div class="row"><div class="col-md-8 col-md-offset-2"><div class="contact-group--channels-wrapper"></div></div></div></div><div class="container-fluid"><div class="row"><div class="col-md-8 col-md-offset-2"><div class="contact-group--content-wrapper"></div></div></div></div>');
    }

    function prepareGroupContainer() {
        if (isCqEdit){
            return false;
        }

        var $root = $('.contact-directory-group');

        if ($root.find('.contact-group').length === 0 ){
            $root.append('<div class="contact-group"></div>');
            emptyGroupComponent();
        }
    }

    function addGetInTouchHeader(item) {
        var contactGroupHeaderText = i18n.getMessage('page.public.getInTouch');

        var GetInTouchHeader = h('h2', {
                className: 'text-center'
            },
            [].concat(contactGroupHeaderText)
        );

        item.prepend(GetInTouchHeader);
    }

    function addGetInTouchOtherHeader(item) {
        var contactOtherGroupHeaderText = i18n.getMessage('page.public.getInTouchOther');

        var GetInTouchOtherHeader = h('h2', {
                className: 'text-center'
            },
            [].concat(contactOtherGroupHeaderText)
        );

        item.prepend(GetInTouchOtherHeader);
    }

    function addGetInTouchOnlineHeader(item) {
        var contactOnlineGroupHeaderText = i18n.getMessage('page.public.getInTouchOnline');

        var GetInTouchOnlineHeader = h('h2', {
                className: 'text-center'
            },
            [].concat(contactOnlineGroupHeaderText)
        );

        item.prepend(GetInTouchOnlineHeader);
    }

    var populateGroupComponent = function(groups, isNarrow){

        if (groups === undefined){
            return false;
        }

        //render only one group (used for directory pages)
        if(bcpublic.helpandsupport.groupData.channels){

            prepareGroupContainer();

            $('.contact-group .contact-group--channels-wrapper').html(groups[0][0] || []);
            $('.contact-group .contact-group--content-wrapper').html(groups[0][1] || []);

            //remove empty groups
            if ($('.contact-group--channels-wrapper').html() === '') {
                $('.contact-group--channels-wrapper').closest('.wrapper').remove();
            }

            if ($('.contact-group--content-wrapper').html() === '') {
                $('.contact-group--content-wrapper').closest('.wrapper').remove();
            }

            //render section titles
            if (($('.contact-group--channels-wrapper').length !== 0)) {
                if ($('.contact-group--channels-wrapper').html().length !== 0) {
                    addGetInTouchOnlineHeader($('.contact-group .contact-group--channels-wrapper'));
                }
            }

            if (($('.contact-group--channels-wrapper').length !== 0) && ($('.contact-group--content-wrapper').length !== 0)) {
                if (($('.contact-group--channels-wrapper').html().length !== 0) && ($('.contact-group--content-wrapper').html().length > 103)) {
                    addGetInTouchOtherHeader($('.contact-group .contact-group--content-wrapper'));
                }

                if (($('.contact-group--channels-wrapper').html().length === 0) && ($('.contact-group--content-wrapper').html().length > 103)) {
                    addGetInTouchHeader($('.contact-group .contact-group--content-wrapper'));
                }
            }

        }

        //render for multiple groups (used for display panel component)
        else {
            $('.contact-groups').empty();
            $.each(groups,function(i, group){
                var groupTitle = '';

                //If there is more than one group, append a parent level
                if(groups.length > 1){
                    groupTitle = h('h3',{ className: 'contact-group--title' }, bcpublic.helpandsupport.groupData.groups[i].name);
                }

                $('.contact-groups').append(h('div', { className: 'contact-group' }, [groupTitle, group[0]]));
            });
        }

        $window.trigger('populatedGroup');

    };

    // Personal segment should be always first
    function sortSegments(a, b) {
        if (a.customerSegment === 'Personal') {
            return -1;
        }
        if (b.customerSegment === 'Personal') {
            return 1;
        }
        return 0;
    }

    // functional wrapper for accordions
    function renderAccordion(title, content, className, idDataAttr) {

        var titleAttrs = { className: 'accordion-control' };

        if (idDataAttr){
            titleAttrs['data-id'] = idDataAttr;
        }
        titleAttrs['role'] = 'button';

        var titleEl = h('div', titleAttrs, [].concat(h('h3', {className:''}, title)));
        var wrapper = h('div', { className: 'accordion-wrapper' + (className ? (' ' + className) : '') }, [
            titleEl,
            h('div', { className: 'accordion-content' }, content)
        ]);

        titleEl.addEventListener('click', function(e) {
            if ($(titleEl).hasParent('.additional-segment.open .accordion-content')) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            e.preventDefault();
            e.stopPropagation();
            $(wrapper).toggleClass('open').attr('aria-expanded', $(wrapper).hasClass('open') ? 'true' : 'false');
            setAriaExpanded('.accordion-wrapper.contact-telephone .accordion-control');
            $window.trigger('accordion-state-changed', e.currentTarget);

            bcpublic.helpandsupport.dpanel.fixiOSScrollIssue();

            if ( ($('.contact-directory-group')) && ($(wrapper).hasClass('accordion-wrapper')) ) {
              var requiredBackgroundHeight = $('.contact-group').outerHeight(true);
              $('.contact-directory-group').height(requiredBackgroundHeight);
            }
        });

        titleEl.addEventListener('keypress', function(e) {

            if (e.keyCode && e.keyCode === 13){
                $(wrapper).toggleClass('open');
                setAriaExpanded('.accordion-wrapper.contact-telephone .accordion-control');
                $window.trigger('accordion-state-changed', e.currentTarget);
            }
        });

        return wrapper;
    }

    function setAriaExpanded(selector) {
        return ($(selector).parent().hasClass('open') ? $(selector).attr("aria-expanded","true") : $(selector).attr("aria-expanded","false"));
    }

    //Reset contact Dir Height
    function resetDirectoryHeight() {
        if ( $('.contact-directory-group') ) {
            var requiredBackgroundHeight = $('.contact-group').outerHeight(true);
            $('.contact-directory-group').height(requiredBackgroundHeight);
        }
    }

    //reopen telephone accordion and remove hidden content
    function reopenTelAccordion() {
        if ($('.display-panel').length === 0) {
            $('.contact-group--content .contact-telephone .accordion-control h3').click();
        }

        $('.contact-group--content .contact-telephone .accordion-content .contact-segment').removeClass('hidden');

        resetDirectoryHeight();
    }

    //remove hidden fallback content
    function showFallback() {
        var el = $('.channel.channel-telephone'),
            fallbackSegment = el.find('.card.fallbacks');

        if (fallbackSegment) {
            fallbackSegment.removeClass('hidden');
        }

        resetDirectoryHeight();
    }

    //remove hidden fallback content
    function showUrgentSegment(el) {
        var fallbackSegment = el.closest('.contact-telephone').find('.card.fallbacks'),
            contactHeaderContent = el.closest('.contact--content').parent().children('.contact--header'),
            ohstateContent = el.closest('.card').children('.ohstate'),
            phoneContent = el.closest('.card').children('.phonenumbers'),
            custmsgContent = el.closest('.card').children('.custom-message'),
            openinghoursContent = el.closest('.card').children('.openinghours'),
            sermsgContent = el.closest('.card').children('.service-message'),
            selFallbackSegment = el.siblings('.selfallbacklabel');

        if (fallbackSegment.hasClass('hidden')) {
            contactHeaderContent.addClass('hidden');
            ohstateContent.addClass('hidden');
            phoneContent.addClass('hidden');
            custmsgContent.addClass('hidden');
            openinghoursContent.addClass('hidden');
            sermsgContent.addClass('hidden');
            el.addClass('hidden');
            selFallbackSegment.removeClass('hidden');
            fallbackSegment.removeClass('hidden');
        } else {
            contactHeaderContent.removeClass('hidden');
            ohstateContent.removeClass('hidden');
            phoneContent.removeClass('hidden');
            custmsgContent.removeClass('hidden');
            openinghoursContent.removeClass('hidden');
            sermsgContent.removeClass('hidden');
            el.removeClass('hidden');
            selFallbackSegment.addClass('hidden');
            fallbackSegment.addClass('hidden');
        }

        resetDirectoryHeight();
    }

    //Show segment content only
    function showFallbackClick() {
        var el = $('.channel.channel-telephone'),
            fallbackSegment = el.find('.card.fallbacks'),
            fallbackLabelSegment = fallbackSegment.parent().siblings('.contact--header').find('.fallbacklabel');

        fallbackLabelSegment.bind("click", function () {
            showUrgentSegment($(this));
        });

        if (fallbackSegment.hasClass('hidden')) {
            $('.fallbacklabel').click().click();
        } else {
            $('.fallbacklabel').click().click();
        }

        resetDirectoryHeight();
    }

    function contactCard(type, title, content, hasHiddenSiblings, customerSegment, numSegments) {

        var headerContent = [h('h4', {className: 'title'}, title)];

        var notAKnownSegmentLink,
            customerSegmentLabel;

        if (hasHiddenSiblings === true){

            var notASegmentLink = h('a', {}, 'Not a ' + customerSegment + ' customer?');

            notASegmentLink.addEventListener('click', function() {
                $window.trigger('not-a-segment-customer', customerSegment);

                bcpublic.helpandsupport.context.then(function(context) {
                    context.customerSegment = null;
                    displayContactGroup(null, false, context, numSegments);
                    // update customer segment option on contextUI comp
                    if (bcpublic.helpandsupport.contextUI && bcpublic.helpandsupport.contextUI.setCustomerSegment) {
                        bcpublic.helpandsupport.contextUI.setCustomerSegment(context.customerSegment);
                    }
                });

                //reopen telephone accordion and remove hidden content
                if ($('.display-panel').length === 0) {
                    $('.contact-group--content .contact-telephone .accordion-control h3').click();
                }

                resetDirectoryHeight();
            });

            if (customerSegment === 'Premier') {
                customerSegmentLabel = 'Business';
            }

            if (customerSegment === 'Business') {
                customerSegmentLabel = 'Premier';
            }

            if (numSegments > 2) {
                notAKnownSegmentLink = h('a', {}, 'Are you ' + customerSegmentLabel + ' customer?');
            } else {
                notAKnownSegmentLink = h('span', {}, '');
            }

            notAKnownSegmentLink.addEventListener('click', function () {
                $window.trigger('not-a-knownsegment-customer', customerSegmentLabel);

                bcpublic.helpandsupport.context.then(function (context) {
                    context.customerSegment = customerSegmentLabel;
                    displayContactGroup(null, false, context, numSegments);
                    // update customer segment option on contextUI comp
                    if (bcpublic.helpandsupport.contextUI && bcpublic.helpandsupport.contextUI.setCustomerSegment) {
                        bcpublic.helpandsupport.contextUI.setCustomerSegment(context.customerSegment);
                    }
                });

                reopenTelAccordion();
                showFallback();
                showFallbackClick();
            });

            headerContent = headerContent.concat(
                h('span', {className: 'hiddenSiblings'}, notASegmentLink )
            );

          return h('div', { className: 'contact contact-' + type }, [
              h('div', { className: 'contact--header' },
                 headerContent
              ),
              h('div', { className: 'contact--content' }, content ),
              h('div', { className: 'hiddenSiblings' }, notAKnownSegmentLink )
          ]);
        }

        return h('div', { className: 'contact contact-' + type }, [
            h('div', { className: 'contact--header' },
               headerContent
            ),
            h('div', { className: 'contact--content' }, content)
        ]);
    }

    function getLabelWithLegals(label, channel) {
        var legals = getLegals(channel);

        if (legals.length) {
            legals = renderLegalSymbols(legals);
        }

        return [].concat(label, legals);
    }

    /**
     * Collects contacts from the email channel,
     * working around the differences in the data structure resulting from assigning non-shared segments.
     *
     * @return {Object}     Contains a boolean if any of the contacts are of the email method
     *                      and an array of contacts in the channel
     */
    function emailContacts(channel) {
        if (channel.type !== 'email') {
            return null;
        }

        var hasEmailMethod = false,
            contacts = [];

        if (channel.sharedSegments) {
            contacts = channel.contacts;
        } else if (channel.segments) {
            var uniquePaths = [];
            // Collect contacts from every segment
            var dupedContacts = $.map(channel.segments, function(segment) {
                return segment.contacts;
            });

            // Dedupe them
            contacts = $.grep(dupedContacts, function(contact) {
                if (uniquePaths.indexOf(contact.path) === -1) {
                    uniquePaths.push(contact.path);
                    return true;
                }
                return false;
            });
        } else {
            throw new Error('Invalid channel data structure');
        }

        $.each(contacts, function(i, contact) {
            if (contact.method === 'email') {
                hasEmailMethod = true;
            }
        });

        return {
            hasEmailMethod: hasEmailMethod,
            contacts: contacts
        };
    }

    function showChannel(el, withoutAnimation) {
        var $channel = $(el),
            $inner = $channel.find('.channel-inner');

        if($inner.length){
            var $container = $channel.closest('.contact_group').parent();

            if ($container.length === 0) {
                $container = $('.contact-directory-group .contact-group');
            }

            if (withoutAnimation === 'without-animation'){
                $container.addClass('disable-animation');
                $container[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
            }

            $('.channel-inner.active').removeClass('active');
            $container.addClass('channel-show-details channel-group-slide');
            $inner.addClass('active');

            $container.removeClass('disable-animation');
        }
    }

    //click events
    function channelCtaClick(el){
        return showChannel(el);
    }

    function channelInSideBar(channel) {
        return ['video', 'webchat', 'requestCallback', 'email', 'mysite'].indexOf(channel.type) > -1;
    }

    function renderContactGroup(groupData, isNarrow, overrideContext, numSegments) {
        return bcpublic.helpandsupport.context.then(function(clientContext) {
            if (!groupData) {
                return;
            }

            var context = overrideContext || clientContext,
                contextualizedData = [],
                group;

            if (bcpublic.helpandsupport.groupData.channels) {
                group = bcpublic.helpandsupport.contactMapping(groupData, context, function(ohString) {
                    return new opening_hours(ohString, { address: { country_code: 'gb' } });
                });

                contextualizedData.push(group);
            }

            //check if the json is being served in multiple groups - used by display panel
            else {
                $.each(bcpublic.helpandsupport.groupData.groups, function(index, group){
                    group = bcpublic.helpandsupport.contactMapping(group, context, function(ohString) {
                            return new opening_hours(ohString, { address: { country_code: 'gb' } });
                        });
                    if (group && group.channels && group.channels.length > 0){
                        contextualizedData.push(group);
                    }
                });
                //display panel forces narrow to be true
                isNarrow = true;
            }

            bcpublic.helpandsupport.contextualizedGroupData = contextualizedData;

            var contactRenderer = {
                telephone: function (contact, i, singleContact) {

                    var label = [
                        contact.serviceMessage ? 'Currently unavailable' : 'Closed now'
                    ];

                    var closedContactCardClass = 'closed-contact';
                    if (contact.serviceMessage) {
                        closedContactCardClass += ' unavailable-contact';
                    }

                    var fallbacks;

                    if (contact.fallbackContacts) {
                        fallbacks = $.map(contact.fallbackContacts, contactRenderer.telephone);
                    } else if (contact.fallbackSegments) {
                    	fallbacks = h('div', { className: 'fallback-segments', 'data-fallback': 'true' }, $.map(contact.fallbackSegments, function(segment, i) {
                            var fallback = true;
                            return renderSegment(segment, i, contact.fallbackSegments, fallback);
                        }));
                    }

                    if (fallbacks) {
                        var fallbackLabel = h('a', { className: 'fallbacklabel'} , 'Is this urgent?'),
                            selFallbackLabel = h('a', { className: 'selfallbacklabel hidden'} , contact.name + ' (' + label + ')');

                        fallbacks = contactCard('telephone', [].concat(fallbackLabel, selFallbackLabel), h('div', { className: 'card fallbacks hidden' }, fallbacks));

                        fallbackLabel.addEventListener('click', function() {
                            showUrgentSegment($(this));
                        });

                        selFallbackLabel.addEventListener('click', function () {
                            $window.trigger('urgentsegment-customer', context);

                            bcpublic.helpandsupport.context.then(function(context) {
                                context.customerSegment = null;
                                displayContactGroup(null, false, context, numSegments);
                                // update customer segment option on contextUI comp
                                if (bcpublic.helpandsupport.contextUI && bcpublic.helpandsupport.contextUI.setCustomerSegment){
                                    bcpublic.helpandsupport.contextUI.setCustomerSegment(context.customerSegment);
                                }
                            });

                            reopenTelAccordion();
                        });
                    }

                    // 0-6 mon-sun, 7 - public holiday
                    var today = bcpublic.helpandsupport.openingHours.getWeekDay(context.currentTime),
                        openingHours = bcpublic.helpandsupport.openingHours.getTable(contact.openingHours, today),
                        richState = bcpublic.helpandsupport.openingHours.getRichState(contact.openingHours, context.currentTime);

                    var cclass = 'ohstate ';
                    if (contact.isOpen){
                        cclass += 'open';
                    } else {
                        cclass += 'closed';
                    }

                    var ohState = h('div', { className: cclass }, richState );

                    if (contact.isOpen) {

                      return contactCard('telephone', contact.name, h('div', { className: 'card', 'data-status': 'open' }, [].concat(
                        ohState,
                        renderPhoneNumbers(contact),
                        contact.customMessage ? h('p', { className: 'custom-message' }, contact.customMessage) : [],
                        contact.openingHours !== '24/7' ? openingHours : '',
                        fallbacks ? fallbacks : []
                      )), contact.hasHiddenSiblings, contact.customerSegment, numSegments);
                    }

                    var serState = h('div', { className: cclass }, label );

                    return contactCard('telephone', contact.name, h('div', { className: 'card closedContactCardClass', 'data-status': (contact.serviceMessage ? 'unavailable' : 'closed') }, [].concat(
                        serState,
                        renderPhoneNumbers(contact),
                        contact.customMessage ? h('p', { className: 'custom-message' }, contact.customMessage) : [],
                        contact.openingHours !== '24/7' ? openingHours : '',
                        contact.serviceMessage ? h('p', { className: 'service-message' }, contact.serviceMessage) : [],
                        fallbacks ? fallbacks : []
                      )), contact.hasHiddenSiblings, contact.customerSegment, numSegments);
                },
                webchat: function(contact) {
                    // max 1 contact
                    var ohState = h('div', { className: 'ohstate ' + (contact.isOpen ? 'open' : 'closed') }, bcpublic.helpandsupport.openingHours.getRichState(contact.openingHours, context.currentTime, 'include reopen time'));
                    var label = getLabelWithLegals(i18n.getMessage(contact.loginRequired ? 'contactgroup.public.webchat.loginCTA' : 'contactgroup.public.webchat.CTA'), contact);

                    var today = bcpublic.helpandsupport.openingHours.getWeekDay(context.currentTime),
                        openingHours = bcpublic.helpandsupport.openingHours.getTable(contact.openingHours, today);

                    if (contact.linkTarget.disableCta || !contact.isOpen) {
                        return contactCard('webchat', contact.name,
                            h('div', { className: 'card closedContactCardClass', 'data-status': (contact.serviceMessage ? 'unavailable' : 'closed') }, [].concat(
                                h('span', { className: 'cta-wrapper closed'},
                                    h('div', { className: 'channel-cta' },
                                        [
                                            h('span', contact.isOpen ? label : getLabelWithLegals(i18n.getMessage('contactgroup.public.webchat.closed'), contact)),
                                            ohState
                                        ]
                                    )
                                ),
                                contact.openingHours !== '24/7' ? openingHours : ''
                                )
                            ), contact.hasHiddenSiblings, contact.customerSegment, numSegments);
                    }
                    return contactCard('webchat', contact.name,
                        h('div', { className: 'card closedContactCardClass', 'data-status': 'open' } ,
                            [].concat(
                                h('a', {
                                        href: contact.linkTarget.url,
                                        onclick : 'window.open("' +  contact.linkTarget.url + '" , "Webchat", "width=600,height=510");return false',
                                        target: contact.linkTarget.openInNewWindow ? '_blank' : '_top',
                                        className: 'cta-wrapper open',
                                        'data-secure': contact.loginRequired
                                    },
                                    h('div', { className: 'channel-cta' },
                                        [
                                            h('h3', {
                                                className: 'channel-title'
                                            }, label),
                                            ohState
                                        ]
                                    )
                                ), contact.openingHours !== '24/7' ? openingHours : ''
                            )), contact.hasHiddenSiblings, contact.customerSegment, numSegments);

                },
                post: function(contact) {
                      return contactCard('post', (contact.name || ''), h('div', { className: 'card' }, [].concat(
                          h('div', { className: 'address' }, [].concat(
                              contact.recipient ? [contact.recipient, h('br')] : [],
                              contact.address1,
                              h('br'),
                              contact.address2 ? [contact.address2, h('br')] : [],
                              [contact.postcode + ' ' + contact.city, h('br')],
                              [contact.county ? contact.county : '']
                          )),
                          contact.customMessage ? h('p', { className: 'custom-message' }, contact.customMessage) : []
                      )));
                },

                email: function(contact) {
                    var content = [];

                    var legals = getLegals(contact);
                    if (legals.length) {
                        legals = renderLegalSymbols(legals);
                    }

                    var isSecure = contact.method === 'auth' ? 'Secure' : 'NonSecure';

                    switch (contact.method) {
                        case 'auth':
                        case 'non-auth':
                            content = [].concat(
                                contact.customMessage ? h('div', { className: 'custom-message' }, contact.customMessage) : [],
                                h('a', { className: 'btn', href: contact.cta.url, target: contact.cta.openInNewWindow ? '_blank' : '_top', 'data-secure': isSecure }, [].concat(
                                    i18n.getMessage(contact.loginRequired ? 'contactgroup.public.email.loginCTA' : 'contactgroup.public.email.CTA'),
                                    legals
                                ))
                            );
                            break;
                    	case 'email':
                    		var linkAttrs = { href: 'mailto:' + contact.emailAddress, className: 'emailaddress', 'data-secure': isSecure };
                            content = [].concat(
                                h('a', linkAttrs, [].concat(
                                    contact.emailAddress,
                                    legals
                                )),
                                contact.customMessage ? h('div', { className: 'custom-message' }, contact.customMessage): []
                            );
                            break;
                    }

                  return contactCard('email', contact.name, h('div', { className: 'card', 'data-secure': isSecure }, content));
                }

            };

            var renderSegment = function(segment, i, segments, fallback) {

                var contacts = $.map(segment.contacts, function(val, i){
                    if (segment.hasHiddenSiblings === true){
                        val.hasHiddenSiblings = true;
                        val.customerSegment = segment.customerSegment;
                    }

                    return contactRenderer.telephone(val, i, segment.contacts.length === 1);
                });

                var segmentHideClass;
                // hide segment if Business/Premier
                if ( (segment.customerSegment === 'Premier' || segment.customerSegment === 'Business') && segments.length > 1 ) {
                  segmentHideClass = 'hidden';
                }

                // add segment label links
                if (segment.customerSegment === 'Premier' && segments.length > 1) {
                    var notAPremierSegmentLink;

                    notAPremierSegmentLink = h('a', {}, 'Are you ' + segment.customerSegment + ' customer?');

                    notAPremierSegmentLink.addEventListener('click', function() {
                        $window.trigger('not-a-premiersegment-customer', segment.customerSegment);

                        bcpublic.helpandsupport.context.then(function(context) {
                            context.customerSegment = segment.customerSegment;
                            displayContactGroup(null, false, context, segments.length);
                            // update customer segment option on contextUI comp
                            if (bcpublic.helpandsupport.contextUI && bcpublic.helpandsupport.contextUI.setCustomerSegment){
                                bcpublic.helpandsupport.contextUI.setCustomerSegment(context.customerSegment);
                            }
                        });

                        reopenTelAccordion();
                        showFallback();
                        showFallbackClick();
                    });

                    return h('div', { className: 'hiddenSiblings' }, notAPremierSegmentLink );
                }

                if (segment.customerSegment === 'Business' && segments.length > 1) {
                    var notABusinessSegmentLink;

                    notABusinessSegmentLink = h('a', {}, 'Are you ' + segment.customerSegment + ' customer?');

                    notABusinessSegmentLink.addEventListener('click', function() {
                        $window.trigger('not-a-premiersegment-customer', segment.customerSegment);

                        bcpublic.helpandsupport.context.then(function(context) {
                            context.customerSegment = segment.customerSegment;
                            displayContactGroup(null, false, context, segments.length);
                            // update customer segment option on contextUI comp
                            if (bcpublic.helpandsupport.contextUI && bcpublic.helpandsupport.contextUI.setCustomerSegment){
                                bcpublic.helpandsupport.contextUI.setCustomerSegment(context.customerSegment);
                            }
                        });

                        reopenTelAccordion();
                        showFallback();
                        showFallbackClick();
                    });

                    return h('div', { className: 'hiddenSiblings' }, notABusinessSegmentLink );
                }

                return h('div', { className: 'contact-segment ' + segmentHideClass }, [].concat(
                    contacts
                ));
            };

            var channelContentRenderer = {
                email: function(channel) {
                    var emails = emailContacts(channel);
                    return $.map(emails.contacts, contactRenderer.email);
                },
                telephone: function(channel) {
                    if (channel.sharedSegments) {
                        if (channel.contacts.length === 1) {
                            return [].concat(contactRenderer.telephone(channel.contacts[0], 0, true));
                        }
                        return $.map(channel.contacts, contactRenderer.telephone);
                    }

                    // sort so that the personal segment is the first, then map to render function
                    var sorted = channel.segments.sort(sortSegments);
                    var mapped = $.map(sorted, function (segment, i) {
                        return renderSegment(segment, i, channel.segments);
                    });
                    return mapped;

                },
                webchat: function(channel) {
                    if (channel.sharedSegments) {
                        if (channel.contacts.length === 1) {
                            return [].concat(contactRenderer.webchat(channel.contacts[0]));
                        }
                        return $.map(channel.contacts, contactRenderer.webchat);

                    }

                    var sorted = channel.segments.sort(sortSegments);
                    var mapped = $.map(sorted, function (segment, i) {
                        return renderSegment(segment, i, channel.segments);
                    });
                    return mapped;
                },
                post: function(channel) {
                    return $.map(channel.contacts, contactRenderer.post);
                }
            };

            var delayClick = function (e) {

                var target = $(e.currentTarget);
                e.preventDefault();

                setTimeout(function(){

                    if (target.attr('target') === '_blank'){
                        window.open(target.attr('href'));
                    } else {
                        document.location = target.attr('href');
                    }

                }, 500);
            };

            var channelRenderer = {
                webchat: function(channel) {
                    var channelInner = channelContentRenderer.webchat(channel);
                    return renderAccordion(i18n.getMessage('contactgroup.public.webchat.CTA'), channelInner, 'contact-webchat', 'contact-webchat');
                },
                video: function(channel) {
                    // max 1 contact
                    var contact = channel.contacts[0];
                    var ohState = h('div', { className: 'ohstate ' + (contact.isOpen ? 'open' : 'closed') }, bcpublic.helpandsupport.openingHours.getRichState(contact.openingHours, context.currentTime, 'include reopen time'));

                    if (!contact.isOpen) {
                        return [
                            h('span', {
                                    className: 'cta-wrapper closed'
                                },

                                h('div', { className: 'channel-cta' },
                                    [
                                        h('span', getLabelWithLegals(i18n.getMessage('contactgroup.public.video.closed'), channel)),
                                        ohState
                                    ]
                                )
                            )
                        ];
                    }

                    var label = getLabelWithLegals(i18n.getMessage(contact.loginRequired ? 'contactgroup.public.video.loginCTA' : 'contactgroup.public.video.CTA'), channel);

                    return [
                        h('a', {
                                href: contact.linkTarget.url,
                                onclick : 'window.open("' +  contact.linkTarget.url + '" , "Video", "width=600,height=510");return false',
                                target: contact.linkTarget.openInNewWindow ? '_blank' : '_top',
                                className: 'cta-wrapper open',
                                title: i18n.getMessage('contactgroup.public.video.a.title'),
                                'data-secure': contact.loginRequired
                            },

                            h('div', { className: 'channel-cta' },
                                [
                                    h('h3', {
                                        className: 'channel-title'
                                    }, label),
                                    ohState
                                ]
                            )
                        )
                    ];
                },

                email: function(channel) {
                    var emails = emailContacts(channel),
                        channelInner = channelContentRenderer.email(channel);

                    if (emails.contacts.length > 1 || emails.hasEmailMethod) {
                        return renderAccordion(i18n.getMessage('contactgroup.public.email.label'), channelInner, 'contact-email', 'contact-email');
                    }

                    var contact;
                    // single contact 1 contact
                    if (channel.contacts) {
                        contact = channel.contacts[0];
                    } else if (channel.segments){
                        contact = channel.segments[0].contacts[0];
                    } else {
                        return [];
                    }

                    var legals = getLegals(channel);
                    if (legals.length) {
                        legals = renderLegalSymbols(legals);
                    }

                    var label = [].concat(
                        i18n.getMessage(contact.loginRequired ? 'contactgroup.public.email.loginCTA' : 'contactgroup.public.email.CTA'),
                        legals
                    );

                    return [].concat(
                        h('a', {
                                href: contact.cta.url,
                                target: contact.cta.openInNewWindow ? '_blank' : '_top',
                                className: 'cta-wrapper open',
                                'data-secure': contact.method
                            },
                            h('div', {className: 'channel-cta'},
                                [
                                    h('h3', {
                                        className: 'channel-title'
                                    }, label),
                                    contact.customMessage ? h('div', {className: 'custom-message'}, contact.customMessage) : []
                                ]
                            )
                        )
                    );
                },

                post: function(channel) {
                    var channelInner = channelContentRenderer.post(channel);

                    return renderAccordion(i18n.getMessage('contactgroup.public.post.label'), channelInner, 'contact-post', 'contact-post');
                },

                telephone: function(channel) {
                    var channelInner = channelContentRenderer.telephone(channel);

                    return renderAccordion(i18n.getMessage('contactgroup.public.telephone.label'), channelInner, 'contact-telephone', 'contact-telephone');
                },

                branch: function(channel) {
                    // max 1 contact
                    var contact = channel.contacts[0],
                        isBranch = ('undefined' === typeof contact.office || null === contact.office || 'false' === contact.office || "" === contact.office);

                    var a = h('a', {
                            href: contact.cta.url,
                            target: contact.cta.openInNewWindow ? '_blank' : '_top',
                            className: 'cta-wrapper open'
                        },

                        h('div', {className: 'channel-cta'},
                            [
                                h('h3', {
                                    className: 'channel-title'
                                }, getLabelWithLegals(isBranch ? i18n.getMessage('contactgroup.public.branch.label') : i18n.getMessage('contactgroup.public.office.label'), channel))
                            ]
                        )
                    );

                    a.addEventListener('click', delayClick);
                    return a;
                },
                    
                mysite: function(channel) {
                    // max 1 contact
                    var contact = channel.contacts[0];

                    var a =  h('a', {
                            href: contact.cta.url,
                            target: contact.cta.openInNewWindow ? '_blank' : '_top',
                            className: 'cta-wrapper open'
                        },

                        h('div', { className: 'channel-cta' },
                            [
                                h('h3', {
                                    className: 'channel-title'
                                }, getLabelWithLegals(i18n.getMessage('contactgroup.public.mysite.label'), channel))
                            ]
                        )
                    );

                    a.addEventListener('click', delayClick);
                    return a;
                },

                requestCallback: function(channel) {
                    // max 1 contact
                    var contact = channel.contacts[0];

                    var a = h('a', {
                            href: contact.cta.url,
                            target: contact.cta.openInNewWindow ? '_blank' : '_top',
                            className: 'cta-wrapper open'
                        },

                        h('div', {className: 'channel-cta'},
                            [
                                h('h3', {
                                        className: 'channel-title'
                                    },
                                    getLabelWithLegals(i18n.getMessage('contactgroup.public.callback.label'), channel)),
                                contact.customMessage ? h('div', {className: 'custom-message'}, contact.customMessage) : []
                            ]
                        )
                    );

                    a.addEventListener('click', delayClick);
                    return a;
                }
            };

            var renderChannel = function (channel) {
                var channelContent,
                    hasChildrenClass = '',
					attributes = {};

                if (!channelRenderer[channel.type]) {
                    channelContent = 'No renderer found for channel of type: ' + channel.type;
                } else {
                    channelContent = channelRenderer[channel.type](channel);

                    if (channelContent && channelContent[0] && channelContent[0].children.length > 1) {
                        hasChildrenClass = ' has-children';
                    }
                }

                // set attributes
                attributes['className'] = 'channel channel-' + channel.type + hasChildrenClass;
                attributes['className'] += $(channelContent).hasClass('closed') ? ' closed ' : '';
                attributes['data-channel'] = channel.type.capitalizeFirstLetter();

                return h('li', attributes, channelContent);
            };

            var renderPanelChannel = function(channel) {
                var channelEl = renderChannel(channel);
                var legals = getLegals(channel);
                if (legals.length && !channelInSideBar(channel)) {
                    $(channelEl).find('.accordion-content').append(renderLegals(legals));
                }
                return channelEl;
            };

            var contactGroups = [];
            var contactGroup = [];

            //loop through groups and render
            $.each(contextualizedData,function(index, contextualizedData){
                var channelContent,
                    channelContentContent,
                    sideBarChannels = $.grep(contextualizedData.channels, channelInSideBar),
                    contentChannels = $.grep(contextualizedData.channels, not(channelInSideBar));

                //sort contentChannels types descending so telephone is first
                contentChannels.sort(function (a, b) {
                    var nameA = a.type.toLowerCase(), nameB = b.type.toLowerCase();

                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }
                    return 0;
                });

                contactGroups[index] = [];
                if (isNarrow) { // contact panel render
                    var level1Legals = getLegals($.grep(contextualizedData.channels, channelInSideBar));
                    if (level1Legals.length) {
                        level1Legals = h('li', renderLegals(level1Legals));
                    }
                    if (contentChannels.length) {
                        channelContentContent = h('ul', { className: 'contact-group--content' }, $.map(contentChannels, renderPanelChannel).concat(level1Legals) );
                    }
                    channelContent = h('ul', { className: 'contact-group--channels' }, $.map(sideBarChannels, renderPanelChannel).concat(channelContentContent) );
                    contactGroups[index][0] = channelContent;
                } else {
                    // get all legals
                    var legals = getLegals(contextualizedData.channels);
                    if (legals) {
                        legals = h('li', renderLegals(legals));
                    }

                    // BHSTWO-1343, a negative scenario
                    // When any of the sidebar channels exist with a legal and no content bar channels exist,
                    // legals still need to be rendered in the main bar
                    var contentBar = [];

                    if (contentChannels.length > 0 || legals.length > 0) {
                        contentBar = contentChannels.length ? $.map(contentChannels, renderChannel) : [];
                        contentBar = legals ? contentBar.concat(legals) : [];
                    }

                    contactGroup = [
                        sideBarChannels.length ? h('ul', { className: 'contact-group--channels' }, $.map(sideBarChannels, renderChannel)) : [],
                        contentBar.length > 0 ? h('ul', { className: 'contact-group--content' }, contentBar) : []
                    ];

                    contactGroups[index][0] = $(contactGroup[0]);
                    contactGroups[index][1] = $(contactGroup[1]);
                }
            });

            $('html').on('click','.channel.has-children',function(){channelCtaClick(this);});

            return contactGroups;
        });
    }

    function displayContactGroup(groupData, isNarrow, overrideContext, numSegments) {
        var groupDataToDisplay = groupData || bcpublic.helpandsupport.groupData;

        if (groupDataToDisplay) {
            // If this function is being called from navigation.js, the groupData has come from an Ajax call. So, store it in a global object in case we need to re-render it in the resize event handler below
            bcpublic.helpandsupport.groupData = groupDataToDisplay;

            renderContactGroup(groupDataToDisplay, isNarrow, overrideContext, numSegments).then(function(contactGroup) {
                populateGroupComponent(contactGroup, isNarrow);
            });
        }
    }

    function closeChannelDetail(){
        $('.channel-inner.active').removeClass('active');
        $('.channel-show-details').removeClass('channel-show-details');
    }

    function manageTabIndexes(){

        var groupChanged = function(el){

            if ($(el).hasClass('accordion-control')) {
                // if we get accordion-control as a context
                el = $(el).next();

            } else if ($('.display-panel').length > 0){
                // if we are on a page with displya panel
                return false;

            } else if ($(el).length === 0) {
                // if we dont have a context
                el = document;
            }

            $(el).find('.accordion-control').attr('tabindex', -1);
            $(el).find('.accordion-control:visible').attr('tabindex', 0);
        };

        $window.on('accordion-state-changed', function(e, el){
            groupChanged(el);

            // open accordion if inside additional-segement.open
            if (($(el).parent().hasClass('additional-segment')) && ($(el).parent().hasClass('open'))) {
                $(el).next().find('.accordion-wrapper').addClass('open');
            }
        });

        $window.on('populatedGroup', function(){
            groupChanged($document);
        });

        groupChanged($document);
    }

    $(function() {
        var isNarrow = false;
        h = bcpublic.helpandsupport.htmlRendering.h;

        displayContactGroup(null, isNarrow);

        manageTabIndexes();
        setAriaExpanded('.accordion-wrapper.contact-telephone .accordion-control');
    });

    return {
        displayContactGroup: displayContactGroup,
        emptyGroupComponent: emptyGroupComponent,
        showChannel: showChannel,
        closeChannelDetail: closeChannelDetail
    };
}(jQuery));
/**
 * @fileOverview Navigation for the Contact Directory (also referred to as “Contact Us”)
 * @author: Paul Waite <paul.waite@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};
bcpublic.helpandsupport.i18n = bcpublic.helpandsupport.i18n || {};

bcpublic.helpandsupport.contactusNavigation = (function($) {

    var navigationJson;
    var h;
    var indexedNavigationItems;
    var $contactDirectoryNav;
    var i18n = {
        messages: bcpublic.helpandsupport.i18n.contactusNavigation || {},
        getMessage: function (key, def) {
            return bcpublic.helpandsupport.global.getI18nMessage(key, def, this.messages);
        }
    };
    var doTransitionIfSupported = function(el, transitionEventNameSpace, beforeTransition, afterTransition) {
        if (Modernizr.csstransitions) {
            
            $(el).on('transitionend.'+transitionEventNameSpace, function() {
                $(el).off('transitionend.'+transitionEventNameSpace);

                afterTransition();
            });
            beforeTransition();
        }
        else {
            beforeTransition();
            afterTransition();
        }
    };
    var contactGroupJsonByEndpoint = {},
        contactDirectoryRootTitle,
        contactDirectoryRootShortTitle,
        contactDirectoryPageTitle = $('.contact-wrapper h1');


    function init() {
      var isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower();

        if (bcpublic.helpandsupport.contactusNavigationJson) {
            loadNavigationJson(bcpublic.helpandsupport.contactusNavigationJson);
        }
        else {
            return;
        }

        h = bcpublic.helpandsupport.htmlRendering.h;

        $contactDirectoryNav = $('#contact-directory-nav');
        
        var $contactDirectoryBreadcrumb = $('.contact-directory-breadcrumb');
        contactDirectoryRootTitle = $contactDirectoryBreadcrumb.attr('data-root-title');
        contactDirectoryRootShortTitle = $contactDirectoryBreadcrumb.attr('data-root-short-title');

        setNarrowClass();
        setUpNavigationState();

        contactDirectoryPageTitle.show();

        $('#contact-directory').on('click', 'a.navigation-item, a.breadcrumb-item', function (e) {
            var item = getItemFromNavigationLinkEl(e.target),
                isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower(),
                itemPath;

            bcpublic.helpandsupport.contactgroup.emptyGroupComponent();
            // If we can't get an item... (and ), basically fall back to non-JavaScript navigation.
            if (item === undefined) {
                // ... then if that's because the user clicked on the root breadcrumb link (which is not currently an item in the navigation JSON), then get the itemPath value from the link itself so that it can be used in tracking later.
                if ( $(e.target).hasClass('is-root') ) {
                    itemPath = getItemPathFromNavigationLinkEl(e.target);
                } else { // Otherwise, just fall back to the non-JavaScript navigation
                    return true;
                }
            } else {
                itemPath = item.path;
            }

            e.preventDefault();

            if (isNarrow){
              if ($(e.target).hasClass('is-root')) {
                contactDirectoryPageTitle.show();
              } else {
                contactDirectoryPageTitle.hide();
              }
            } else {
              contactDirectoryPageTitle.show();
            }

            updateAddressBarFromNavigationLink(e.target, itemPath);

            updateNavigationForItem(item, e.target);

            updateContactGroupForItem(item);

            return false;
        });

        $('#contact-directory').on('click', '.channel.has-children', function () {
            var isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower(),
                isChannelDisplayed = isNarrow && $('.contact-directory-group').hasClass('directory-detail-single-channel');

            if (!isNarrow || isChannelDisplayed) {
                return;
            }

            var item = getChannelItem( getCurrentPageItem() );
            var $channel = $(this);

            updateNavigationForItem(item);
            updateAddressBarFromChannelLink($channel);
            setHeightForChannelDetail($channel);
        });

        if (bcpublic.helpandsupport.global.historyAPI()) {
            // On page load, replace state with our object so that when the user navigates back here using the back button, we can distinguish the popstate event from the stateless popstate event that iOS Safari fires on page load.
            window.history.replaceState({wasPushed: true}, '');

            window.addEventListener('popstate', function(e) {
                // Ignore popstate event if we didn’t push this history item in the first place (i.e. if popstate is being fired on page load, like in iOS Safari)
                if (!e || (e && !e.state) || (e && e.state && !e.state.wasPushed)) {
                    return true;
                }

                var itemPath = getItemPathFromUrlPath(window.location.pathname);
                var item = indexedNavigationItems[itemPath];

                // People can use the breadcrumb to navigate from a channel detail page to (for example) a topic page, so we might actually be on a channel detail page after the user hits the back button
                var currentPageChannelParam = bcpublic.helpandsupport.global.getURLParam('channel');
                if (currentPageChannelParam) {
                    item = getChannelItem(item);
                }

                // update thisPageStrongPath
                window.thisPageStrongPath = (item && item.path) ? item.path : itemPath;

                updateNavigationForItem(item);

                updateContactGroupForItem(item);
            });
        }

        $contactDirectoryNav.on('click', 'a.toggle-level-1', function (e) {
            e.preventDefault();

            var $level1 = $('#contact-directory-nav-topics');

            if ($level1.hasClass('collapsed')) {
                expandLevel1($level1);
            }
            else {
                collapseLevel1($level1);
            }
            return false;
        });

        $contactDirectoryNav.on('click', 'a.toggle-level-2', function (e) {
            e.preventDefault();

            var $level2 = $('#contact-directory-nav-rest');

            if ($level2.hasClass('collapsed')) {
                expandLevel2($level2);
            }
            else {
                collapseLevel2($level2);
            }
            return false;
        });

        $contactDirectoryNav.on('mouseover focus', 'a.toggle-level-1, a.toggle-level-2', function (e) {
            $(e.target).parents('.header').addClass('hover');
        });

        $contactDirectoryNav.on('mouseout blur', 'a.toggle-level-1, a.toggle-level-2', function (e) {
            $(e.target).parents('.header').removeClass('hover');
        });

        $(window).on('accordion-state-changed', function(e, accordionControlEl){
          
            var $channel = $(accordionControlEl).parents('.channel');

            setHeightForChannelDetail($channel);
        });

        $(window).smartresize(function() {
            var isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower(),
                currentPageItem = getCurrentPageItem();

            setNarrowClass(isNarrow);

            if (currentPageItem) {
              if (currentPageItem.title) {
                updateContactGroupHeader(currentPageItem);
              }
            }

            if (isNarrow) {
              if ( ($('#contact-directory-nav-topics').hasClass('isCollapsed')) || ($('#contact-directory-nav-topics').hasClass('previous expanded')) ) {
                contactDirectoryPageTitle.hide();
              }

              updateBreadcrumb(currentPageItem, isNarrow);
            } else {
              contactDirectoryPageTitle.show();
              removeBreadcrumb();
            }

            unsetHeightForChannelDetail();

        }, 100);
    }

    function loadNavigationJson(theJson) {
        navigationJson = theJson;

        indexedNavigationItems = getIndexedNavigationItems(navigationJson.subtopics, 1);
    }

    function getIndexedNavigationItems(items, level) {
        var indexedNavigationItems = {};
        var subitems;


        for (var i=0; i<items.length; i++) {
            var item = items[i];
            var itemUrl = getItemUrl(item);

            item.level = level;
            item.isTopic = (item.subtopics && item.subtopics.length > 0 ? true : false);

            indexedNavigationItems[itemUrl] = item;

            if (item.subtopics && item.subtopics.length) {
                subitems = getIndexedNavigationItems(item.subtopics, level+1);
                $.extend(indexedNavigationItems, subitems);
            }
        }

        return indexedNavigationItems;
    }


    function setUpNavigationState() {
        var currentPageItem = getCurrentPageItem();

        if (currentPageItem) {
            setCollapsedLevel1();
            updateLevel1HeaderText(currentPageItem);
            addLevel1HeaderLink(true);

            if (!currentPageItem.isTopic) {
                addLevel2HeaderLink(true);
                setCollapsedLevel2();
                $('#contact-directory-nav-rest').addClass('detail-page-displayed');
                updateContactGroupHeader(currentPageItem);
            }

            updateBreadcrumb(currentPageItem);
            updateRelevantFaqNarrow(currentPageItem);
            setNavLevelAsCurrent(currentPageItem.level+1);

            if (currentPageItem.isChannel) {
                showCurrentPageChannel();
                $('.contact-group-header').addClass('channel-displayed');
            }
        }
        else {
            // BHSTWO-1321
            // If the current item is missing (hasn't been activated) on publish,
            //  it's 404 and a user is redirected to the CD root
            // If the current item is deactivated on author in preview,
            //  the original page is still shown, but keep the jsp markup for the navigation
            if(typeof window.CQ !== "undefined" && typeof window.CQ.WCM !== "undefined") {
                var previewMode = window.CQ.WCM.getMode() === 'preview';
                if (!previewMode) {
                    setNavLevelAsCurrent(1);
                }
            }
        }
    }

    function showCurrentPageChannel(withoutAnimation) {
        var currentPageChannelParam = bcpublic.helpandsupport.global.getURLParam('channel');
        var $channel = false;

        if (currentPageChannelParam) {
            $channel = $('.channel-'+currentPageChannelParam);
        }
        else if ($('.contact-directory-group').hasClass('directory-detail-single-channel')) {
            $channel = $('.channel');
        }

        if ($channel) {
            bcpublic.helpandsupport.contactgroup.showChannel($channel, withoutAnimation);

            setHeightForChannelDetail($channel);
        }
    }

    function getCurrentPageItem() {
        var currentPageItemPath = getItemPathFromUrlPath(window.location.pathname);
        var currentPageChannelParam = bcpublic.helpandsupport.global.getURLParam('channel');
        var item;

        for (var itemPath in indexedNavigationItems) {
            if ((itemPath === currentPageItemPath) || (itemPath + '/' === currentPageItemPath) || (itemPath + '.html' === currentPageItemPath)) {
                item = indexedNavigationItems[itemPath];
                break;
            }
        }

        if (currentPageChannelParam) {
            item = getChannelItem(item);
        }

        return item;
    }

    function setNarrowClass(isNarrow) {
        isNarrow = isNarrow || bcpublic.helpandsupport.global.isMediumViewportOrNarrower();

        if (isNarrow) {
            $contactDirectoryNav.addClass('narrow').removeClass('wide');
            $('.h1').addClass('contact-directory-nav-narrow');
            $('.contact-group-header').addClass('narrow');
            $('#main').addClass('loaded');
        }
        else {
            $contactDirectoryNav.addClass('wide').removeClass('narrow');
            $('.h1').removeClass('contact-directory-nav-narrow');
            $('.contact-group-header').removeClass('narrow');
        }
    }


    function updateNavigationForItem(item, itemLinkEl) {
        var parentItem;
        var grandparentItem;
        var greatgrandparentItem;
        var isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower();
        var isGoingToTrack = false;
        var $contactDirectory = $('#contact-directory');

        if (isNarrow) {
            updateBreadcrumb(item, isNarrow);

            if (item && item.isChannel) {
                $('.contact-group-header').addClass('channel-displayed');
            }
            else {
                $('.contact-group-header').removeClass('channel-displayed');
            }
        }

        if (!item) {// i.e. Contact Directory root
            clearActiveNavigationLinks(1);

            if (isNarrow) {
                setCollapsedLevel2();
                removeLevel2();
                updateLevel1HeaderText();
                expandLevel1();
                updateRelevantFaqNarrow();
            }
            else {
            	isGoingToTrack = true;
                collapseLevel2(null, function() {
                    removeLevel2();

                    window.setTimeout(function() {
                        updateLevel1HeaderText();
                        expandLevel1();

                    	// trigger event for nav change
                        $contactDirectory.trigger('ContactDirectory:Navigation:Change');

                    }, 200);
                });
            }

            setNavLevelAsCurrent(1);

            if (!isGoingToTrack) { // some tracking needs to happen after a timeout... if it happens on a timeout we dont want to do it here
            	// trigger event for nav change
            	$contactDirectory.trigger('ContactDirectory:Navigation:Change', item);
            }

            return;
        }

        if (item.level === 1) {
            clearActiveNavigationLinks(1);
            setNavigationLinkActiveForItem(item);

            clearActiveNavigationLinks(2);

            if (item.isTopic) {
                if (isNarrow) {
                    removeHeaderLevel2(undefined, true);
                    setCollapsedLevel1();
                    updateLevel1HeaderText(item);
                    addLevel1HeaderLink(true);
                    clearLevelsFrom(3);
                    updateLevel2(item, true);
                    expandLevel2();
                    updateRelevantFaqNarrow(item);
                }
                else {
                	removeLevel2();
                	isGoingToTrack = true;
                    collapseLevel1(null, function() {
                        updateLevel1HeaderText(item);
                        addLevel1HeaderLink(true);
                        
                        window.setTimeout(function () {
                            clearLevelsFrom(3);
                            updateLevel2(item, true);
                            expandLevel2();

                        	// trigger event for nav change
                            $contactDirectory.trigger('ContactDirectory:Navigation:Change', item);

                        }, 200);
                    });
                }
            }
            else {
                // Note: the contents of the detail page, i.e the Contact Group, is shown by the calls to showContactGroup() in the click and popstate event handlers
                if (isNarrow) {
                    setCollapsedLevel1();
                    updateLevel1HeaderText(item);
                    removeLevel2();
                }
                else{
                    collapseLevel1(null, function() {
                        addLevel1HeaderLink(true);
                    });
                    updateLevel1HeaderText(item);
                    removeLevel2();
                }
            }

            setNavLevelAsCurrent(2);
        }
        if (item.level === 2) {
            updateLevel1HeaderText(item);

            isNarrow ? removeHeaderLevel2(undefined, true) : removeHeaderLevel2();

            parentItem = getParentItem(item);
            updateLevel2(parentItem, false, item);

            clearActiveNavigationLinks(1);
            setNavigationLinkActiveForItem(parentItem);

            updateLevel3(item, true);

            clearActiveNavigationLinks(3);

            clearLevelsFrom(4);
            expandLevel2();

            setNavLevelAsCurrent(3);
        }
        if (item.level === 3) {
            updateLevel1HeaderText(item);

            isNarrow ? removeHeaderLevel2(undefined, true) : removeHeaderLevel2();

            parentItem = getParentItem(item);
            grandparentItem = getParentItem(parentItem);

            updateLevel2(grandparentItem, false, item);
            updateLevel3(parentItem, false);

            clearActiveNavigationLinks(1);
            setNavigationLinkActiveForItem(grandparentItem);
            clearActiveNavigationLinks(2);
            setNavigationLinkActiveForItem(parentItem);

            updateLevel4(item, true);

            clearActiveNavigationLinks(4);

            expandLevel2();

            setNavLevelAsCurrent(4);
        }
        if (item.level === 4) {
            updateLevel1HeaderText(item);
            
            parentItem = getParentItem(item);
            grandparentItem = getParentItem(parentItem);
            greatgrandparentItem = getParentItem(grandparentItem);

            updateLevel2(greatgrandparentItem, false, item);
            updateLevel3(grandparentItem, false);

            clearActiveNavigationLinks(1);
            setNavigationLinkActiveForItem(greatgrandparentItem);
            clearActiveNavigationLinks(2);
            setNavigationLinkActiveForItem(grandparentItem);
            clearActiveNavigationLinks(3);
            setNavigationLinkActiveForItem(parentItem);

            updateLevel4(parentItem, true);
            updateLevel4Active();
            expandLevel2();

            setNavLevelAsCurrent(5);
        }

        if (!item.isTopic) {// i.e. item is a detail page
            $('#contact-directory-nav-rest').addClass('detail-page-displayed');

            if (item.level > 1) {
                addHeaderLevel2(item, true);
            }

            if (isNarrow) {
                setCollapsedLevel2();
            }
            else {
                collapseLevel2();
            }

            // Note: the contents of the detail page, i.e the Contact Group, is shown by the calls to showContactGroup() in the click and popstate event handlers
        }
        else {
            $('#contact-directory-nav-rest').removeClass('detail-page-displayed');
        }

        clearActiveNavigationLinks(item.level);
        if (itemLinkEl === undefined) {
            if (!item.isChannel) {
            	setNavigationLinkActiveForItem(item);
            	if (!isGoingToTrack) { // some tracking needs to happen after a timeout... if it happens on a timeout we dont want to do it here
            		// trigger event for nav change
            		$contactDirectory.trigger('ContactDirectory:Navigation:Change', item);
            	}
            }
        }
        else {
        	setNavigationLinkActive(itemLinkEl);

        	if (!isGoingToTrack){ // some tracking needs to happen after a timeout... if it happens on a timeout we dont want to do it here
        		// trigger event for nav change
        		$contactDirectory.trigger('ContactDirectory:Navigation:Change', item);
			}
        }
    }

    function updateAddressBarFromNavigationLink(navigationLinkEl, cqPath) {
        if (!bcpublic.helpandsupport.global.historyAPI()) {
            return;
        }

        var newPagePath = getPagePath(navigationLinkEl);

        updateAddressBar(newPagePath);
    	// update thisPageStrongPath
        var internalSiteCatURL = "";
        var internalSiteCatURL = window.thisPageStrongPath.substring(0,29);
        window.thisPageStrongPath = internalSiteCatURL + cqPath;
    }

    function updateAddressBarFromChannelLink($channelEl) {
        if (!bcpublic.helpandsupport.global.historyAPI()) {
            return;
        }

        var newPagePath = getNewPagePathFromChannelEl($channelEl);

        updateAddressBar(newPagePath);
    }

    function updateAddressBar(newPagePath) {
        if (!bcpublic.helpandsupport.global.historyAPI()) {
            return;
        }

        // Include our own property in the history state, so that we can distinguish back button popstate events from the popstate event that iOS Safari fires on page load.
        window.history.pushState({wasPushed: true}, '', newPagePath);
    }

    function addQueryStringParameter(parameterName, parameterValue, url) {
        var urlWithParameterAdded;
        var parameter = parameterName + '=' + parameterValue;

        var currentQueryString = url.split('?')[1];

        if (currentQueryString && currentQueryString.indexOf(parameter) > -1) {
            return url;
        }

        if (url.indexOf('?') > -1) {
            urlWithParameterAdded = url + '&' + parameter;
        }
        else {
            urlWithParameterAdded = url + '?' + parameter;
        }

        return urlWithParameterAdded;
    }

    function clearActiveNavigationLinks(level) {
        var $navigationSection;
        var $activeNavLinks;

        if (level === 1) {
            $navigationSection = $('#contact-directory-nav-topics');
        }
        else {
            $navigationSection = $('#contact-directory-nav-rest .column-'+level);
        }

        $activeNavLinks = $navigationSection.find('li.active');

        $activeNavLinks.removeClass('active');
    }

    function setNavigationLinkActive(navigationLinkEl) {
        var isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower(),
            $parent = $(navigationLinkEl).parent(),
            $column = $(parent).closest('.column');

        $parent.addClass('active');
        $column.addClass('active');
    }

    function setNavigationLinkActiveForItem(item) {
        if (item) {
            var isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower(),
                navigationLinkEl = getNavigationLinkElForItem(item);

            setNavigationLinkActive(navigationLinkEl);
        }
    }

    function getNavigationLinkElForItem(item) {
        var itemUrl = getItemUrl(item);

        var navigationLinkEl = $('#contact-directory-nav').find('a[href="' + itemUrl + '"]').get(0);

        return navigationLinkEl;
    }

    function getItemPathFromNavigationLinkEl(navigationLinkEl) {
        // IE8 reports the link pathname without the initial slash, so re-add it if necessary
        var navigationLinkElPathname = (navigationLinkEl.pathname.charAt(0) === '/' ? navigationLinkEl.pathname : '/'+navigationLinkEl.pathname);
        var itemPath = getItemPathFromUrlPath(navigationLinkElPathname);

        return itemPath;
    }

    function getItemFromNavigationLinkEl(navigationLinkEl) {
        var itemPath = getItemPathFromNavigationLinkEl(navigationLinkEl);

        var item = indexedNavigationItems[itemPath];

        return item;
    }

    function getPagePath(navigationItemLinkEl) {
        var linkPath = navigationItemLinkEl.pathname;
        var pagePath = linkPath;

        return pagePath;
    }

    function getNewPagePathFromChannelEl($channelEl) {
        var classNames = $channelEl.attr('class').split(' ');
        var newPagePath;

        for (var i=0; i<classNames.length; i++) {
            var className = classNames[i];

            if (className.indexOf('channel-') > -1) {
                var channel = className.split('-')[1];

                newPagePath = addQueryStringParameter('channel', channel, window.location.pathname+window.location.search);

                break;
            }
        }

        return newPagePath;
    }

    
    function getItemPathFromUrlPath(path) {
        //var itemPath = path.replace('?wcmmode=disabled', '').replace('&wcmmode=disabled', '');
        return path;
    }

    function getItemUrl(item) {
        var itemUrl = bcpublic.helpandsupport.global.externalizeUrl(item.path);

        return itemUrl;
    }

    function getFaqUrl(faq) {
        var faqUrl = bcpublic.helpandsupport.global.externalizeUrl(faq.url);

        return faqUrl;
    }
  
    function getChannelItem(item) {
        var channelItem = $.extend({}, item);// Copy the original item object, so we don’t permanenty change its properties here.

        channelItem.isChannel = true;
        channelItem.level = 5;

        return channelItem;
    }

    function getContactGroupJsonForItem(item) {
        var deferred = new $.Deferred();
        var contactGroupJsonEndpoint = item.path+'/_jcr_content.group.json';
        var bustServerCache = '?cachebust='+( (new Date()).getTime() );
        var cachedJson = contactGroupJsonByEndpoint[contactGroupJsonEndpoint];


        if (cachedJson) {
            deferred.resolve(cachedJson);
        }
        else {
            $.get(contactGroupJsonEndpoint + bustServerCache)
                .done(function(data) {
                    contactGroupJsonByEndpoint[contactGroupJsonEndpoint] = data;

                    deferred.resolve(data);
                })
                .fail(function() {
                    deferred.reject();
                });
        }

        return deferred;
    }

    function updateContactGroupForItem(item) {
        if ( !(bcpublic.helpandsupport.global.isMediumViewportOrNarrower() && (item && !item.isTopic)) ) {
            bcpublic.helpandsupport.contactgroup.emptyGroupComponent();
        }

        if (item === undefined || item.isTopic) {
          removeContactGroupHeader();

          if ($('.contact-group .wrapper').length === 0) {
            if ($('.content-directory-footer .extra-wrapper').length === 0) {
               $('.content-directory-footer .wrapper').first().before('<div class="extra-wrapper"></div>');
            }
          }
        }
        else if (!item.isChannel) {// i.e. if the item is a Contact Details page
            loadContactGroup(item);
        }
    }

    function updateContactGroupHeader(item) {
        var isMedium = bcpublic.helpandsupport.global.isMediumViewportOrNarrower(),
            contactGroupHeaderText = (isMedium && item ? item.title : i18n.getMessage('contactdirectory.public.getintouch', 'Ways to get in touch'));

        $('.contact-group-header').text(contactGroupHeaderText);
    }

    function removeEmptyGroups() {
      if ($('.contact-group--channels-wrapper').html() === '') {
        $('.contact-group--channels-wrapper').closest('.container-fluid').remove();
      }

      if ($('.contact-group--content-wrapper').html() === '') {
        $('.contact-group--content-wrapper').closest('.container-fluid').remove();
      }
    }

    function removeEmptyFAQ() {
      if ($('.faq-carousel-component-wrapper').html() === '') {
        $('.faq-carousel-component-wrapper').closest('.wrapper').remove();
      }
    }

    function addContentGroupWrapper(div) {
      $(div).each(function () {
        $(this).wrap('<div class="wrapper"></div>');
      });
    }

    function removeExtraWrapper() {
      var contactGroupWrapper = $('.contact-group .wrapper'),
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

    function openSingleAccordion() {
      if ( ($('.contact-group--channels-wrapper .accordion-wrapper').length === 1) && ($('.contact-group--channels-wrapper .channel-cta').length === 0) ) {
        $('.contact-group--channels-wrapper .accordion-wrapper .accordion-control h3').click();
      }

      if ( ($('.contact-group--content-wrapper .accordion-wrapper').length === 1) && ($('.contact-group--content-wrapper .channel-cta').length === 0) ) {
        $('.contact-group--content-wrapper .accordion-wrapper .accordion-control h3').click();
      }
    }

    function loadContactGroup(item) {
        showSpinner();// TODO: maybe actually make this do something

        getContactGroupJsonForItem(item).then(function(contactGroupJson){
            hideSpinner();// TODO: maybe actually make this do something

            var $activeChannel = $('.channel-inner.active');// TODO: maybe we should do this before getting the JSON?

            if ($activeChannel.length) {
                bcpublic.helpandsupport.contactgroup.closeChannelDetail();
            }
            else {
                if ( groupIsPhoneOnly(contactGroupJson.group) ) {
                    // BHSTWO-881 && BHSTWO-1338
                    // If there's one channel only (the phone channel),
                    // the interface navigates into it automatically
                    $('.contact-directory-group').addClass('directory-detail-single-channel');
                    updateBreadcrumb(getCurrentPageItem());
                }
                else {
                    $('.contact-directory-group').removeClass('directory-detail-single-channel');
                }

                $(window).on('populatedGroup', function() {
                    $('.contact-group').removeClass('channel-show-details channel-group-slide');
                });

                bcpublic.helpandsupport.contactgroup.displayContactGroup(contactGroupJson.group);
                removeEmptyGroups();
                addContentGroupWrapper($('.contact-directory-group .container-fluid'));
            }
            addContactGroupHeader(item);
            unsetHeightForChannelDetail();
            $(window).trigger('new-faq-carousel', contactGroupJson.faqParsys);
            removeEmptyFAQ();
            removeExtraWrapper();

            if ( $('.contact-group--channels-wrapper .accordion-wrapper').length > 0 || $('.contact-group--content-wrapper .accordion-wrapper').length > 0 ) {
              openSingleAccordion();
            }
        });
    }

    function groupIsPhoneOnly(groupJson) {
        // BHSTWO-881 && BHSTWO-1338
        // A group might not contain a phone channel
        // if it hadn't been activated properly or contains errors
        var hasPhone = false;
        var hasOtherChannels = false;
        var channels = groupJson.channels;

        $.each(channels, function(i, channel) {
            if (channel.type !== 'telephone' && channel.contacts && channel.contacts.length > 0) {
                hasOtherChannels = true;
            } else if (channel.type === 'telephone' && channel.contacts && channel.contacts.length > 0) {
                hasPhone = true;
            }
        });

        return hasPhone && !hasOtherChannels;
    }

    function setHeightForChannelDetail($channel) {
        var isNarrow = bcpublic.helpandsupport.global.isSmallViewportOrNarrower();

        if (!isNarrow) {
            return false;
        }

        var $channelDetail = $channel.find('.channel-inner');
        var requiredBackgroundHeight = $channelDetail.outerHeight(true);

        $('.contact-directory-group').height(requiredBackgroundHeight);
    }

    function unsetHeightForChannelDetail() {
        $('.contact-directory-group').height('auto');
    }

    function showSpinner() {
        // TODO: possibly see bcpublic.helpandsupport.facets.presenter.animLoadingStart() and animLoadingEnd()
    }

    function hideSpinner() {
        // TODO: possibly see bcpublic.helpandsupport.facets.presenter.animLoadingStart() and animLoadingEnd()
    }

    function addContactGroupHeader(item) {
        var isMedium = bcpublic.helpandsupport.global.isMediumViewportOrNarrower();
        var contactGroupHeaderText = (isMedium ? item.title : i18n.getMessage('contactdirectory.public.getintouch', 'Ways to get in touch'));

        if ($('.contact-group-header').length > 0) {
            return false;
        }

        var contactGroupHeader = h('h2', {
                className: 'h1 contact-group-header'
            },
            [].concat(contactGroupHeaderText)
        );

        $('.contact-group .wrapper').first().before(contactGroupHeader);
        setNarrowClass();
    }

    function removeContactGroupHeader() {
        var $contactGroupHeader = $('.contact-group-header');

        $contactGroupHeader.remove();
    }



    function collapseLevel1($level1, callback) {
        $level1 = $level1 || $('#contact-directory-nav-topics');
        var $l1Content = $level1.children('.content');

        if ($level1.hasClass('expanded')) {
            doTransitionIfSupported($level1, 'collapse', function() {
                $level1.removeClass('expanded').addClass('collapsed').addClass('isCollapsed');
            }, function() {
                $level1.addClass('isCollapsed');
                $l1Content.attr('aria-hidden', 'true');
                $level1.find('.header .toggle-level-1').attr('aria-expanded', 'false').find('span').text( i18n.getMessage('contactdirectory.public.showtopics', 'View all topics') );
                $l1Content.find('a').attr('tabindex', '-1');
                callback && callback();
            });

        }
        else {
            callback && callback();
        }
    }

    function setCollapsedLevel1() {
        var $level1 = $('#contact-directory-nav-topics');
        var $l1Content = $level1.children('.content');
        // Make the DOM changes to level 1 to get it into its collapsed state, without any delay.
        $level1.removeClass('expanded').addClass('collapsed isCollapsed');
        $l1Content.attr('aria-hidden', 'true');
        $level1.find('.header .toggle-level-1').attr('aria-expanded', 'false').find('span').text( i18n.getMessage('contactdirectory.public.showtopics', 'View all topics') );
        $l1Content.find('a').attr('tabindex', '-1');
    }

    function expandLevel1($level1) {
        $level1 = $level1 || $('#contact-directory-nav-topics');
        var $l1Content = $level1.children('.content');

        $level1.removeClass('collapsed isCollapsed').addClass('expanded');
        $l1Content.attr('aria-hidden', 'false');
        $level1.find('.header .toggle-level-1').attr('aria-expanded', 'true').find('span').text( i18n.getMessage('contactdirectory.public.hidetopics', 'Hide all topics') );

        $l1Content.find('a').removeAttr('tabindex');
    }

    function collapseLevel2($level2, callback) {
        $level2 = $level2 || $('#contact-directory-nav-rest');
        var $l2Content = $level2.children('.content');

        if ($level2.hasClass('expanded')) {

            doTransitionIfSupported($level2, 'collapse', function() {
                $level2.removeClass('expanded isExpanded').addClass('collapsed');
            }, function() {
                $level2.addClass('isCollapsed');
                $l2Content.attr('aria-hidden', 'true');
                $level2.find('.header .toggle-level-2').attr('aria-expanded', 'false').find('span').text( i18n.getMessage('contactdirectory.public.showoptions', 'View all options') );
                $l2Content.find('a').attr('tabindex', '-1');
                callback && callback();
            });

        }
        else {
            callback && callback();
        }
    }

    function setCollapsedLevel2() {
        var $level2 = $('#contact-directory-nav-rest');
        var $l2Content = $level2.children('.content');

        $level2.removeClass('expanded isExpanded').addClass('collapsed isCollapsed');
        $l2Content.attr('aria-hidden', 'true');
        $level2.find('.header .toggle-level-2').attr('aria-expanded', 'false').find('span').text( i18n.getMessage('contactdirectory.public.showoptions', 'View all options') );
        $l2Content.find('a').attr('tabindex', '-1');
    }

    function expandLevel2($level2) {
        $level2 = $level2 || $('#contact-directory-nav-rest');
        var $l2Content = $level2.children('.content');

        $level2.children().each(function () {// Reading the height of each child element for some reason allows the transition on .content to take effect when the level 2 navigation is first added to the page.
            $(this).height();
        });

        if ($level2.hasClass('collapsed')) {
            doTransitionIfSupported($level2, 'expand', function() {
                $level2.removeClass('collapsed isCollapsed').addClass('expanded');
                $level2.find('.content a').removeAttr('tabindex');
            }, function() {
                $level2.addClass('isExpanded');
                $l2Content.attr('aria-hidden', 'false');
                $level2.find(' .header .toggle-level-2').attr('aria-expanded', 'true').find('span').text( i18n.getMessage('contactdirectory.public.hideoptions', 'Hide all options') );
            });
        }

        equalColumnHeight();
    }


    function updateLevel1HeaderText(item) {
        var level1Item = getLevel1Item(item);

        var headerText = (level1Item ? i18n.getMessage('contactdirectory.public.yourtopic', 'Your topic:')+' '+(level1Item.title) : i18n.getMessage('contactdirectory.public.menutitle', 'Choose your topic'));

        $('#contact-directory-nav-topics .header h2').text(headerText);

        addLevel1HeaderLink(true);
    }

    function getLevel1Item(item) {
        var level1Item;

        if (!item) {
            return;
        }

        if (item.level === 1) {
            level1Item = item;
        }
        else {
            level1Item = getLevel1Item( getParentItem(item) );
        }

        return level1Item;
    }

    function addLevel1HeaderLink(isCollapsed) {
        var $level1Header = $('#contact-directory-nav-topics .header');

        if ($level1Header.find('.toggle-level-1').length === 0) {
            $level1Header.prepend(renderLevel1HeaderLink(isCollapsed));
        }
    }

    function addHeaderLevel2(item, isCollapsed) {
        removeHeaderLevel2(false, true);

        var headerLevel2El = renderLevel2Header(item, isCollapsed);

        $('#contact-directory-nav-rest .content').before(headerLevel2El);

        $(headerLevel2El).removeClass('closed');
    }

    function removeHeaderLevel2(shouldExpandLevel2, removeWithoutAnimation) {
        var $level2 = $('#contact-directory-nav-rest');
        var $level2Header = $level2.find(' .header');

        if (removeWithoutAnimation) {
            actuallyRemoveHeaderLevel2($level2, $level2Header, shouldExpandLevel2);
        }
        else {
            doTransitionIfSupported($level2Header, 'removeL2Header', function() {
                $level2Header.addClass('closed');
            }, function() {
                actuallyRemoveHeaderLevel2($level2, $level2Header, shouldExpandLevel2);
            });

        }
    }

    function actuallyRemoveHeaderLevel2($level2, $level2Header, shouldExpandLevel2) {
        $level2Header.remove();

        if (shouldExpandLevel2 !== false) {
            expandLevel2($level2);
        }
    }

    function addLevel2HeaderLink(isCollapsed) {
        var $level2Header = $('#contact-directory-nav-rest .header');

        if ($level2Header.find('.toggle-level-2').length === 0) {
            $level2Header.prepend(renderLevel2HeaderLink(isCollapsed));
        }
    }

    function updateLevel2(level1ActiveItem, isActiveItem, currentActiveItem) {
        var $navLowerLevels = $('#contact-directory-nav-rest');
        var $existingLevel2;
        var isLevel2AlreadyUpdated = false;

        if ($navLowerLevels.length === 0) {
            $navLowerLevels = $('<div id="contact-directory-nav-rest" class="collapsed isCollapsed"></div>');
            $('#contact-directory-nav-topics').after($navLowerLevels);
        }
        else {
            $existingLevel2 = $navLowerLevels.find('[data-parentItemPath="' + level1ActiveItem.path + '"]');
            if ($existingLevel2.length > 0) {
                isLevel2AlreadyUpdated = true;
            }
        }

        if (isActiveItem) {
            $navLowerLevels.find('.column-3 .topic-help, .column-4 .topic-help').remove();
        }

        // Render and append level 2 content, but only if it’s not already there.
        if (isLevel2AlreadyUpdated) {
            if (level1ActiveItem.helpWithOptions && isActiveItem && $existingLevel2.find('.topic-help').length === 0) {
                var topicHelp = renderTopicHelp(level1ActiveItem);
                $existingLevel2.append(topicHelp);
                bcpublic.helpandsupport.topicHelp.init(topicHelp);
            }

            updateRelevantFaq(currentActiveItem);
        }
        else {
            var level2ContentEl = renderLevel2Content(level1ActiveItem, currentActiveItem);
            $navLowerLevels.empty();
            $navLowerLevels.append(level2ContentEl);
        }

        equalColumnHeight();
    }

    function updateRelevantFaq(item) {
        if (item && item.faq && item.faq.isCurrentlySelected) {
            var relevantFaqEl = renderRelevantFaq(item);
            $('.quick-answer').replaceWith(relevantFaqEl);

            updateRelevantFaqNarrow(null, relevantFaqEl);
        }
        else {
            $('.quick-answer').empty();
            updateRelevantFaqNarrow();
        }
    }

    function updateRelevantFaqNarrow(item, relevantFaqEl) {
        if (item && item.faq && item.faq.isCurrentlySelected) {
            relevantFaqEl = renderRelevantFaq(item);
        }

        if (relevantFaqEl) {
            var $relevantFaqNarrow = $(relevantFaqEl).clone().removeClass('quick-answer').addClass('quick-answer-narrow quick-answer-bg');
            $('.quick-answer-narrow').removeClass('quick-answer-narrow-empty').replaceWith($relevantFaqNarrow);
        }
        else {
            $('.quick-answer-narrow').empty().removeClass('quick-answer-bg').addClass('quick-answer-narrow-empty');
        }
    }

    function removeLevel2() {
        var $level2 = $('#contact-directory-nav-rest');

        $level2.remove();
    }

    function updateLevel3(parentItem, isActiveItem) {
        var $navLowerLevels = $('#contact-directory-nav-rest');
        var $existingLevel3 = $navLowerLevels.find('[data-parentItemPath="' + parentItem.path + '"]');
        var isLevel3AlreadyUpdated = $existingLevel3.length > 0;

        if (isActiveItem) {
            $navLowerLevels.find('.column-2 .topic-help, .column-4 .topic-help').remove();
        }

        if (isLevel3AlreadyUpdated) {
            if (parentItem.helpWithOptions && isActiveItem && $existingLevel3.find('.topic-help').length === 0) {
                var topicHelp = renderTopicHelp(parentItem);
                $existingLevel3.append(topicHelp);
                bcpublic.helpandsupport.topicHelp.init(topicHelp);
            }
        }
        else {
            if (isActiveItem) {
                $navLowerLevels.find('.column-3, .column-4').remove();
            }

            if (parentItem.subtopics.length) {
                $navLowerLevels.find('.content').append(renderNavColumn(parentItem, 3));
            }
        }
    }

    function updateLevel4(parentItem, isActiveItem) {
        var $navLowerLevels = $('#contact-directory-nav-rest');
        var $existingLevel4 = $navLowerLevels.find('[data-parentItemPath="' + parentItem.path + '"]');
        var isLevel4AlreadyUpdated = $existingLevel4.length > 0;

        if (isActiveItem) {
            $navLowerLevels.find('.column-2 .topic-help, .column-3 .topic-help').remove();
        }

        if (isLevel4AlreadyUpdated) {
            if (parentItem.helpWithOptions && isActiveItem && $existingLevel4.find('.topic-help').length === 0) {
                var topicHelp = renderTopicHelp(parentItem);
                $existingLevel4.append(topicHelp);
                bcpublic.helpandsupport.topicHelp.init(topicHelp);
            }
        }
        else {
            if (isActiveItem) {
                $navLowerLevels.find('.column-4').remove();
            }

            if (parentItem.subtopics.length) {
                $navLowerLevels.find('.content').append(renderNavColumn(parentItem, 4));
            }
        }
    }

    /**
     * Called when an item on the 4th level is selected
     */
    function updateLevel4Active() {
        // remove 'help with these topics'
        // because an item is a detail page and there are no options afterwards
        var $navLowerLevels = $('#contact-directory-nav-rest');
        $navLowerLevels.find('.column-4 .topic-help').remove();
    }

    function clearLevelsFrom(level) {
        var isNarrow = bcpublic.helpandsupport.global.isMediumViewportOrNarrower();

        if (!isNarrow) {
            // If isNarrow is true, then setNavLevelAsCurrent() will have been called elsewhere, and will deal with clearing levels
            for (var i=level; i<=4; i++) {
                $('#contact-directory-nav-rest .column-'+i).remove();
            }
        }
    }

    function setNavLevelAsCurrent(level) {
        var levelSelectors = [
            '#contact-directory-nav-topics',
            '#contact-directory-nav-rest .column-2',
            '#contact-directory-nav-rest .column-3',
            '#contact-directory-nav-rest .column-4'
        ];
        var levelIndex = level-1;

        var currentLevelSelector = levelSelectors[levelIndex];
        var previousLevelsSelector = levelSelectors.slice(0, levelIndex).join(',');
        var nextLevelsSelector = levelSelectors.slice(levelIndex+1).join(',');

        $(currentLevelSelector).addClass('current').removeClass('previous next');
        $(previousLevelsSelector).addClass('previous').removeClass('current next');

        // Remove next levels, because if we switch to wide view, we’ll need them gone.
        $(nextLevelsSelector).remove();

    }

    function getParentItem(item) {
        var parentItem;

        if (item) {
            if (item.isChannel) {
                parentItem = $.extend({}, item);
                parentItem.level = 4;
                parentItem.isChannel = false;
            }
            else {
                var parentPath = item.path.split('/').slice(0,-1).join('/');
                var parentUrl = getItemUrl( {path:parentPath} );
                parentItem = indexedNavigationItems[parentUrl];
            }
        }

        return parentItem;
    }

    function updateBreadcrumb(item, isNarrow) {
        if (!item || isNarrow === false) {
            removeBreadcrumb();
            return;
        }

        isNarrow = isNarrow || bcpublic.helpandsupport.global.isMediumViewportOrNarrower();

        if (isNarrow) {
            $('.contact-directory-breadcrumb').replaceWith(renderBreadcrumb(item));
        }
        else {
            removeBreadcrumb();
        }
    }

    function removeBreadcrumb() {
        var $breadcrumb = $('.contact-directory-breadcrumb');

        $breadcrumb.empty();
    }


    function renderLevel1HeaderLink(isCollapsed) {
        var renderedLevel1HeaderLink = h('a', {
                    className: 'toggle-level-1',
                    href: '#',
                    'aria-controls': 'contact-directory-nav-topics-content',
                    'aria-expanded': (isCollapsed ? 'false' : 'true')
                },
                [].concat(
                    h('span', {}, [(isCollapsed ? i18n.getMessage('contactdirectory.public.showtopics', 'View all topics') : i18n.getMessage('contactdirectory.public.hidetopics', 'Hide all topics'))]),
                    h('i')
                )
            );

        return renderedLevel1HeaderLink;
    }

    function renderLevel2Header(item, isCollapsed) {
        var renderedLevel2Header = h('div', {
                    className: 'header closed'
                },
                [
                    renderLevel2HeaderLink(isCollapsed),
                    h('h3', { className: 'h4'}, [item.customNavTitle || item.title])
                ]
            );

        return renderedLevel2Header;
    }

    function renderLevel2HeaderLink(isCollapsed) {
        var renderedLevel2HeaderLink = h('a', {
                    className: 'toggle-level-2',
                    href: '#',
                    'aria-controls': 'contact-directory-nav-rest-content',
                    'aria-expanded': (isCollapsed ? 'false' : 'true')
                },
                [].concat(
                    h('span', {}, [(isCollapsed ? i18n.getMessage('contactdirectory.public.showoptions', 'View all options') : i18n.getMessage('contactdirectory.public.hideoptions', 'Hide all options'))]),
                    h('i')
                )
            );

        return renderedLevel2HeaderLink;
    }

    function renderLevel2Content(level1ActiveItem, currentActiveItem) {
        var relevantFaq = (currentActiveItem ? renderRelevantFaq(currentActiveItem) : renderRelevantFaq(level1ActiveItem));

        var renderedLevel2Content = h('div', {
                className: 'content clearfix'
            },
            [
                h('div', {
                        className: 'column column-1'
                    },
                    [
                        h('div', {
                                className: 'top'
                            },
                            [].concat(
                                h('h3', {
                                	className: 'h4 level-1-topic',
                                	'data-name': level1ActiveItem.name
                                }, [level1ActiveItem.title]),
                                h('p', {}, [i18n.getMessage('contactdirectory.public.bestoption', 'Choose the best option.')])
                            )
                        ),
                        relevantFaq
                    ]
                ),
                renderNavColumn(level1ActiveItem, 2)
            ]
        );

        return renderedLevel2Content;
    }

    function equalColumnHeight(){

        if (Modernizr.flexbox){
            return true;
        }
        
        var $columns = $('#contact-directory-nav-rest.expanded.isExpanded .column'),
            maxHeight = 0;

        $columns.each(function(){
            if ($(this).height() > maxHeight){
                maxHeight = $(this).height();
            }
        });

        $columns.height( maxHeight );
    }

    function renderNavColumn(parentItem, level) {
        var columnChildren = [h('ul', {},
            $.map(parentItem.subtopics, function(item) {
            	var itemEl = h('li', {
            			'data-name': item.name,
						className: 'level-' + level + '-topic'
                    },
                    [h('a', {
                            href: getItemUrl(item),
                            className: 'navigation-item'
                        },
                        [item.title]
                    )]
                );

                return itemEl;
            })
        )], 
        columnNarrowTitle = [h('div', {
                            className: 'column-title'
            }, [h('h2',{ className: 'h1'},parentItem.title),h('p',{className: 'h4 column-choose'}, i18n.getMessage('contactdirectory.public.narrowsubmenutitle', 'Choose your option'))])];

        if (parentItem.helpWithOptions) {
            var topicHelp = renderTopicHelp(parentItem);
            columnChildren.push(topicHelp);
            bcpublic.helpandsupport.topicHelp.init(topicHelp);
        }

        var columnEl = h('div', {
                className: 'column column-'+parentItem.subtopics[0].level+' next',
                'data-parentItemPath': parentItem.path
            },
            columnNarrowTitle.concat(columnChildren)
        );

        return columnEl;
    }

    function renderTopicHelp(item) {
        var topicHelp;

        if (item.helpWithOptions) {
            topicHelp = h('div', {
                    className: 'topic-help'
                },
                [].concat(h('a', {
                            className: 'topic-help-click',
                            tabindex: '0',
                            href: '#'
                        },
                        [].concat( i18n.getMessage('contactdirectory.public.helpwithoptions', 'Help with these topics') )
                    ),
                    h('div', {
                            className: 'topic-help-content'
                        },
                        [].concat(
                            h('a', {
                                   className: 'topic-help-close',
                                   href: '#'
                                }
                            ),
                            h('h3', {
                                   className: 'h4 topic-help-heading'
                                },
                                [].concat( i18n.getMessage('contactdirectory.public.helpwithoptions', 'Help with these topics') )
                            ),
                            h('div', {
                                    className: 'topic-help-content-wrapper'
                                },
                                [].concat(item.helpWithOptions)
                            )
                        )
                    )
                )
            );
        }

        return topicHelp;
    }

    function renderRelevantFaq(item) {
        var relevantFaqContent = [];

        if (item.faq && item.faq.isCurrentlySelected) {
            relevantFaqContent = [].concat(
                i18n.getMessage('contactdirectory.public.getanswer', 'Get an answer now'),
                h('br'),
                h('a', {
                        href: getFaqUrl(item.faq)
                    },
                    [item.faq.title]
                )
            );
        }

        var relevantFaq = h('p', {
                className: 'quick-answer'
            },
            relevantFaqContent
        );

        return relevantFaq;
    }

    function renderBreadcrumb(item) {
        var breadcrumbItems = getBreadcrumbItems(item);
        var topBreadcrumbItem = (breadcrumbItems.length ? breadcrumbItems[0] : item);

        // First breadcrumb item is always a link to the Contact Directory root page, but we don’t know the path to that until we’ve got to the last parent item of item (and item may not even have a parent, hence topBreadcrumbItem).
        breadcrumbItems.unshift({
            path: topBreadcrumbItem.path.split('/').slice(0, -1).join('/'),
            title: contactDirectoryRootTitle,
            shortTitle: contactDirectoryRootShortTitle,
            isRoot: true
        });

        var breadcrumb = h('div', {
                    className: 'contact-directory-breadcrumb'
                },
                [].concat(
                    h('span', {
                        className: 'sr-only'},
                        [].concat('Parent topics:')
                    ),
                    h('ul', {}, $.map(breadcrumbItems, renderBreadcrumbItem))
                )
            );

        return breadcrumb;
    }

    function getBreadcrumbItems(item) {
        var breadcrumbItems = [];
        var parentItem = getParentItem(item);

        if (parentItem) {
            breadcrumbItems.push(parentItem);

            if (bcpublic.helpandsupport.global.isMediumViewportOrNarrower() && item.isChannel === undefined && item.detailsPage === true){
                breadcrumbItems.push(item);
            }

            breadcrumbItems = getBreadcrumbItems(parentItem).concat(breadcrumbItems);
        }

        return breadcrumbItems;
    }

    function renderBreadcrumbItem(item) {
        var itemUrl = getItemUrl(item),
            currentPageItem = getCurrentPageItem(),
            lastOne = false;
        //var wcmmode = (bcpublic.helpandsupport.global.isRunModePublish() ? '' : '?wcmmode=disabled');

        if (currentPageItem.name === item.name && currentPageItem.level === item.level && (!item.isChannel)){
            lastOne = true;
            return;
        }

        var breadcrumbItem = h('li', {},
            [].concat(h('a', {
                    className: 'breadcrumb-item'+(item.isRoot ? ' is-root' : '')+(lastOne ? ' current-page' : ''),
                    href: itemUrl//+wcmmode
                },
                [].concat(item.shortTitle || item.title || '')
            ))
        );

        return breadcrumbItem;
    }

    $(window).on('populatedGroup', function() {
        var isReallyNarrow = bcpublic.helpandsupport.global.isSmallViewportOrNarrower();

        if (isReallyNarrow) {
            showCurrentPageChannel('without-animation');
        }
    });

    $(function() {
        bcpublic.helpandsupport.contactusNavigation.init();
    });


    return {
        init: init
    };
})(jQuery);
/**
 * @fileOverview "Help with these topics" pop-up
 * @author: Tim McDonald <tim.mcdonald@akqa.com>
 * @namespace bcpublic.helpandsupport.topicHelp
 */
/* jshint nonew: false */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};


bcpublic.helpandsupport.topicHelp = (function($) {
    'use strict';

    var idCounter = 0;


    function TopicHelp(el) {
        var that = this;
        var idValue = 'topic-help-'+idCounter;
        var gu = bcpublic.helpandsupport.global;
        idCounter++;

        this.$el = $(el);

        if (this.$el.hasClass('open')) {
            this.isOpen = true;
        }
        else {
            this.isOpen = false;
        }

        this.$content = this.$el.find('.topic-help-content');
        this.$open = this.$el.find('.topic-help-click');
        this.$close = this.$el.find('.topic-help-close');
        this.$contentWrapper = this.$el.find('.topic-help-content-wrapper');

        this.$content.attr('id', idValue).attr('aria-hidden', (this.isOpen ? 'false' : 'true'));
        this.$open.attr('aria-controls', idValue).attr('aria-expanded', (this.isOpen ? 'true' : 'false'));
        this.$close.attr('aria-controls', idValue).attr('aria-expanded', (this.isOpen ? 'true' : 'false'));

        this.$open.on('click', function(e) {
            // Don't use the CTA to close on narrow. See the spec and BHSTWO-933
            var openOnly = gu.supportsMq() ? !gu.isLargeViewportOrWider() : false;
            return that.onClickOpen(e, openOnly);
        });

        this.$close.on('click', function(e) {
            return that.onClickClose(e);
        });

        $(document).click(function(e) {
            if (gu.supportsMq() ? gu.isLargeViewportOrWider() : true) {
                that.onClickClose(e);
            }
        });
    }
    TopicHelp.prototype = {
        toggleOpen: function(openOnly) {
            if (this.isOpen && !openOnly) {
                this.close();
            }
            else {
                this.open();
            }
        },

        close: function() {
            this.$el.removeClass('open');
            this.$content.attr('aria-hidden', 'true');
            this.$open.attr('aria-expanded', 'false');
            this.$close.attr('aria-expanded', 'false');
            this.unlockScrolling();
            this.unwatchScrollLock();
            this.$contentWrapper.removeAttr('tabindex');

            this.isOpen = false;
        },

        open: function() {
            this.$el.addClass('open');
            this.$content.attr('aria-hidden', 'false');
            this.$open.attr('aria-expanded', 'true');
            this.$close.attr('aria-expanded', 'true');
            this.lockScrolling();
            this.watchScrollLock();
            this.$contentWrapper.attr('tabindex', '0');// Allow keyboard focus to allow scrolling of content via keyboard, if required

            this.isOpen = true;
        },

        lockScrolling: function() {
            if ( bcpublic.helpandsupport.global.isMediumViewportOrNarrower() ) {
                $('html').addClass('lock-scrolling');
            }
        },

        unlockScrolling: function() {
            $('html').removeClass('lock-scrolling');
        },

        watchScrollLock: function() {
            var that = this;
            
            $(window).on('resize.topicHelpUnlockScrolling', function() {
                if ( bcpublic.helpandsupport.global.isMediumViewportOrNarrower() ) {
                    that.lockScrolling();
                }
                else {
                    that.unlockScrolling();
                }
            });
        },

        unwatchScrollLock: function() {
            $(window).off('resize.topicHelpUnlockScrolling');
        },

        onClickOpen: function(e, openOnly) {
            e.preventDefault();

            this.toggleOpen(openOnly);

            return false;
        },

        onClickClose: function(e) {
            if (!this.isOpen) {
                return true;
            }
            else {
                e.preventDefault();

                this.close();

                return false;
            }
        }
    };


    var init = function(el) {
        if (el) {
            return new TopicHelp(el);
        }
        else {
            $('.topic-help').each(function() {
                new TopicHelp(this);
            });
        }
    };

    $(document).ready(function() {
        init();
    });

    return {
        init: init
    };

})(jQuery);
