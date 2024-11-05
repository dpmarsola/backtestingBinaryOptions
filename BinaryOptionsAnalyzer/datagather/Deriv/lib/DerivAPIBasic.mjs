var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
/*! For license information please see DerivAPIBasic.js.LICENSE.txt */
var __VIRTUAL_FILE = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(typeof self != "undefined" ? self : commonjsGlobal, () => (() => {
    var e = {768: (e2, t2, r2) => {
      var n2 = r2(604), i = r2(572), o = i(n2("String.prototype.indexOf"));
      e2.exports = function(e3, t3) {
        var r3 = n2(e3, !!t3);
        return typeof r3 == "function" && o(e3, ".prototype.") > -1 ? i(r3) : r3;
      };
    }, 572: (e2, t2, r2) => {
      var n2 = r2(268), i = r2(604), o = r2(392), s = r2(556), u = i("%Function.prototype.apply%"), a = i("%Function.prototype.call%"), c = i("%Reflect.apply%", true) || n2.call(a, u), p = i("%Object.defineProperty%", true), d = i("%Math.max%");
      if (p)
        try {
          p({}, "a", {value: 1});
        } catch (e3) {
          p = null;
        }
      e2.exports = function(e3) {
        if (typeof e3 != "function")
          throw new s("a function is required");
        var t3 = c(n2, a, arguments);
        return o(t3, 1 + d(0, e3.length - (arguments.length - 1)), true);
      };
      var y = function() {
        return c(n2, u, arguments);
      };
      p ? p(e2.exports, "apply", {value: y}) : e2.exports.apply = y;
    }, 456: (e2, t2, r2) => {
      var n2 = r2(188)(), i = r2(604), o = n2 && i("%Object.defineProperty%", true);
      if (o)
        try {
          o({}, "a", {value: 1});
        } catch (e3) {
          o = false;
        }
      var s = r2(668), u = r2(556), a = r2(872);
      e2.exports = function(e3, t3, r3) {
        if (!e3 || typeof e3 != "object" && typeof e3 != "function")
          throw new u("`obj` must be an object or a function`");
        if (typeof t3 != "string" && typeof t3 != "symbol")
          throw new u("`property` must be a string or a symbol`");
        if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
          throw new u("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
          throw new u("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
          throw new u("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && typeof arguments[6] != "boolean")
          throw new u("`loose`, if provided, must be a boolean");
        var n3 = arguments.length > 3 ? arguments[3] : null, i2 = arguments.length > 4 ? arguments[4] : null, c = arguments.length > 5 ? arguments[5] : null, p = arguments.length > 6 && arguments[6], d = !!a && a(e3, t3);
        if (o)
          o(e3, t3, {configurable: c === null && d ? d.configurable : !c, enumerable: n3 === null && d ? d.enumerable : !n3, value: r3, writable: i2 === null && d ? d.writable : !i2});
        else {
          if (!p && (n3 || i2 || c))
            throw new s("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
          e3[t3] = r3;
        }
      };
    }, 576: (e2) => {
      e2.exports = EvalError;
    }, 772: (e2) => {
      e2.exports = Error;
    }, 360: (e2) => {
      e2.exports = RangeError;
    }, 380: (e2) => {
      e2.exports = ReferenceError;
    }, 668: (e2) => {
      e2.exports = SyntaxError;
    }, 556: (e2) => {
      e2.exports = TypeError;
    }, 568: (e2) => {
      e2.exports = URIError;
    }, 840: (e2) => {
      var t2 = Object.prototype.toString, r2 = Math.max, n2 = function(e3, t3) {
        for (var r3 = [], n3 = 0; n3 < e3.length; n3 += 1)
          r3[n3] = e3[n3];
        for (var i = 0; i < t3.length; i += 1)
          r3[i + e3.length] = t3[i];
        return r3;
      };
      e2.exports = function(e3) {
        var i = this;
        if (typeof i != "function" || t2.apply(i) !== "[object Function]")
          throw new TypeError("Function.prototype.bind called on incompatible " + i);
        for (var o, s = function(e4, t3) {
          for (var r3 = [], n3 = 1, i2 = 0; n3 < e4.length; n3 += 1, i2 += 1)
            r3[i2] = e4[n3];
          return r3;
        }(arguments), u = r2(0, i.length - s.length), a = [], c = 0; c < u; c++)
          a[c] = "$" + c;
        if (o = Function("binder", "return function (" + function(e4, t3) {
          for (var r3 = "", n3 = 0; n3 < e4.length; n3 += 1)
            r3 += e4[n3], n3 + 1 < e4.length && (r3 += ",");
          return r3;
        }(a) + "){ return binder.apply(this,arguments); }")(function() {
          if (this instanceof o) {
            var t3 = i.apply(this, n2(s, arguments));
            return Object(t3) === t3 ? t3 : this;
          }
          return i.apply(e3, n2(s, arguments));
        }), i.prototype) {
          var p = function() {
          };
          p.prototype = i.prototype, o.prototype = new p(), p.prototype = null;
        }
        return o;
      };
    }, 268: (e2, t2, r2) => {
      var n2 = r2(840);
      e2.exports = Function.prototype.bind || n2;
    }, 604: (e2, t2, r2) => {
      var n2, i = r2(772), o = r2(576), s = r2(360), u = r2(380), a = r2(668), c = r2(556), p = r2(568), d = Function, y = function(e3) {
        try {
          return d('"use strict"; return (' + e3 + ").constructor;")();
        } catch (e4) {
        }
      }, l = Object.getOwnPropertyDescriptor;
      if (l)
        try {
          l({}, "");
        } catch (e3) {
          l = null;
        }
      var f = function() {
        throw new c();
      }, h = l ? function() {
        try {
          return f;
        } catch (e3) {
          try {
            return l(arguments, "callee").get;
          } catch (e4) {
            return f;
          }
        }
      }() : f, g = r2(308)(), _ = r2(608)(), m = Object.getPrototypeOf || (_ ? function(e3) {
        return e3.__proto__;
      } : null), v = {}, b = typeof Uint8Array != "undefined" && m ? m(Uint8Array) : n2, q = {__proto__: null, "%AggregateError%": typeof AggregateError == "undefined" ? n2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? n2 : ArrayBuffer, "%ArrayIteratorPrototype%": g && m ? m([][Symbol.iterator]()) : n2, "%AsyncFromSyncIteratorPrototype%": n2, "%AsyncFunction%": v, "%AsyncGenerator%": v, "%AsyncGeneratorFunction%": v, "%AsyncIteratorPrototype%": v, "%Atomics%": typeof Atomics == "undefined" ? n2 : Atomics, "%BigInt%": typeof BigInt == "undefined" ? n2 : BigInt, "%BigInt64Array%": typeof BigInt64Array == "undefined" ? n2 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array == "undefined" ? n2 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView == "undefined" ? n2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": i, "%eval%": eval, "%EvalError%": o, "%Float32Array%": typeof Float32Array == "undefined" ? n2 : Float32Array, "%Float64Array%": typeof Float64Array == "undefined" ? n2 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? n2 : FinalizationRegistry, "%Function%": d, "%GeneratorFunction%": v, "%Int8Array%": typeof Int8Array == "undefined" ? n2 : Int8Array, "%Int16Array%": typeof Int16Array == "undefined" ? n2 : Int16Array, "%Int32Array%": typeof Int32Array == "undefined" ? n2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": g && m ? m(m([][Symbol.iterator]())) : n2, "%JSON%": typeof JSON == "object" ? JSON : n2, "%Map%": typeof Map == "undefined" ? n2 : Map, "%MapIteratorPrototype%": typeof Map != "undefined" && g && m ? m(new Map()[Symbol.iterator]()) : n2, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise == "undefined" ? n2 : Promise, "%Proxy%": typeof Proxy == "undefined" ? n2 : Proxy, "%RangeError%": s, "%ReferenceError%": u, "%Reflect%": typeof Reflect == "undefined" ? n2 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set == "undefined" ? n2 : Set, "%SetIteratorPrototype%": typeof Set != "undefined" && g && m ? m(new Set()[Symbol.iterator]()) : n2, "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? n2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": g && m ? m(""[Symbol.iterator]()) : n2, "%Symbol%": g ? Symbol : n2, "%SyntaxError%": a, "%ThrowTypeError%": h, "%TypedArray%": b, "%TypeError%": c, "%Uint8Array%": typeof Uint8Array == "undefined" ? n2 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? n2 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array == "undefined" ? n2 : Uint16Array, "%Uint32Array%": typeof Uint32Array == "undefined" ? n2 : Uint32Array, "%URIError%": p, "%WeakMap%": typeof WeakMap == "undefined" ? n2 : WeakMap, "%WeakRef%": typeof WeakRef == "undefined" ? n2 : WeakRef, "%WeakSet%": typeof WeakSet == "undefined" ? n2 : WeakSet};
      if (m)
        try {
          null.error;
        } catch (e3) {
          var w = m(m(e3));
          q["%Error.prototype%"] = w;
        }
      var k = function e3(t3) {
        var r3;
        if (t3 === "%AsyncFunction%")
          r3 = y("async function () {}");
        else if (t3 === "%GeneratorFunction%")
          r3 = y("function* () {}");
        else if (t3 === "%AsyncGeneratorFunction%")
          r3 = y("async function* () {}");
        else if (t3 === "%AsyncGenerator%") {
          var n3 = e3("%AsyncGeneratorFunction%");
          n3 && (r3 = n3.prototype);
        } else if (t3 === "%AsyncIteratorPrototype%") {
          var i2 = e3("%AsyncGenerator%");
          i2 && m && (r3 = m(i2.prototype));
        }
        return q[t3] = r3, r3;
      }, A = {__proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"]}, x = r2(268), S = r2(176), O = x.call(Function.call, Array.prototype.concat), R = x.call(Function.apply, Array.prototype.splice), P = x.call(Function.call, String.prototype.replace), M = x.call(Function.call, String.prototype.slice), j = x.call(Function.call, RegExp.prototype.exec), E = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, I = /\\(\\)?/g, T = function(e3, t3) {
        var r3, n3 = e3;
        if (S(A, n3) && (n3 = "%" + (r3 = A[n3])[0] + "%"), S(q, n3)) {
          var i2 = q[n3];
          if (i2 === v && (i2 = k(n3)), i2 === void 0 && !t3)
            throw new c("intrinsic " + e3 + " exists, but is not available. Please file an issue!");
          return {alias: r3, name: n3, value: i2};
        }
        throw new a("intrinsic " + e3 + " does not exist!");
      };
      e2.exports = function(e3, t3) {
        if (typeof e3 != "string" || e3.length === 0)
          throw new c("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof t3 != "boolean")
          throw new c('"allowMissing" argument must be a boolean');
        if (j(/^%?[^%]*%?$/, e3) === null)
          throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var r3 = function(e4) {
          var t4 = M(e4, 0, 1), r4 = M(e4, -1);
          if (t4 === "%" && r4 !== "%")
            throw new a("invalid intrinsic syntax, expected closing `%`");
          if (r4 === "%" && t4 !== "%")
            throw new a("invalid intrinsic syntax, expected opening `%`");
          var n4 = [];
          return P(e4, E, function(e5, t5, r5, i3) {
            n4[n4.length] = r5 ? P(i3, I, "$1") : t5 || e5;
          }), n4;
        }(e3), n3 = r3.length > 0 ? r3[0] : "", i2 = T("%" + n3 + "%", t3), o2 = i2.name, s2 = i2.value, u2 = false, p2 = i2.alias;
        p2 && (n3 = p2[0], R(r3, O([0, 1], p2)));
        for (var d2 = 1, y2 = true; d2 < r3.length; d2 += 1) {
          var f2 = r3[d2], h2 = M(f2, 0, 1), g2 = M(f2, -1);
          if ((h2 === '"' || h2 === "'" || h2 === "`" || g2 === '"' || g2 === "'" || g2 === "`") && h2 !== g2)
            throw new a("property names with quotes must have matching quotes");
          if (f2 !== "constructor" && y2 || (u2 = true), S(q, o2 = "%" + (n3 += "." + f2) + "%"))
            s2 = q[o2];
          else if (s2 != null) {
            if (!(f2 in s2)) {
              if (!t3)
                throw new c("base intrinsic for " + e3 + " exists, but the property is not available.");
              return;
            }
            if (l && d2 + 1 >= r3.length) {
              var _2 = l(s2, f2);
              s2 = (y2 = !!_2) && "get" in _2 && !("originalValue" in _2.get) ? _2.get : s2[f2];
            } else
              y2 = S(s2, f2), s2 = s2[f2];
            y2 && !u2 && (q[o2] = s2);
          }
        }
        return s2;
      };
    }, 872: (e2, t2, r2) => {
      var n2 = r2(604)("%Object.getOwnPropertyDescriptor%", true);
      if (n2)
        try {
          n2([], "length");
        } catch (e3) {
          n2 = null;
        }
      e2.exports = n2;
    }, 188: (e2, t2, r2) => {
      var n2 = r2(604)("%Object.defineProperty%", true), i = function() {
        if (n2)
          try {
            return n2({}, "a", {value: 1}), true;
          } catch (e3) {
            return false;
          }
        return false;
      };
      i.hasArrayLengthDefineBug = function() {
        if (!i())
          return null;
        try {
          return n2([], "length", {value: 1}).length !== 1;
        } catch (e3) {
          return true;
        }
      }, e2.exports = i;
    }, 608: (e2) => {
      var t2 = {foo: {}}, r2 = Object;
      e2.exports = function() {
        return {__proto__: t2}.foo === t2.foo && !({__proto__: null} instanceof r2);
      };
    }, 308: (e2, t2, r2) => {
      var n2 = typeof Symbol != "undefined" && Symbol, i = r2(968);
      e2.exports = function() {
        return typeof n2 == "function" && typeof Symbol == "function" && typeof n2("foo") == "symbol" && typeof Symbol("bar") == "symbol" && i();
      };
    }, 968: (e2) => {
      e2.exports = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
          return false;
        if (typeof Symbol.iterator == "symbol")
          return true;
        var e3 = {}, t2 = Symbol("test"), r2 = Object(t2);
        if (typeof t2 == "string")
          return false;
        if (Object.prototype.toString.call(t2) !== "[object Symbol]")
          return false;
        if (Object.prototype.toString.call(r2) !== "[object Symbol]")
          return false;
        for (t2 in e3[t2] = 42, e3)
          return false;
        if (typeof Object.keys == "function" && Object.keys(e3).length !== 0)
          return false;
        if (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e3).length !== 0)
          return false;
        var n2 = Object.getOwnPropertySymbols(e3);
        if (n2.length !== 1 || n2[0] !== t2)
          return false;
        if (!Object.prototype.propertyIsEnumerable.call(e3, t2))
          return false;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var i = Object.getOwnPropertyDescriptor(e3, t2);
          if (i.value !== 42 || i.enumerable !== true)
            return false;
        }
        return true;
      };
    }, 176: (e2, t2, r2) => {
      var n2 = Function.prototype.call, i = Object.prototype.hasOwnProperty, o = r2(268);
      e2.exports = o.call(n2, i);
    }, 600: (e2) => {
      var t2 = {}.toString;
      e2.exports = Array.isArray || function(e3) {
        return t2.call(e3) == "[object Array]";
      };
    }, 532: (e2, t2, r2) => {
      var n2 = (typeof JSON != "undefined" ? JSON : r2(0)).stringify, i = r2(600), o = r2(56), s = r2(572), u = r2(768), a = u("Array.prototype.join"), c = u("Array.prototype.push"), p = function(e3, t3) {
        for (var r3 = "", n3 = 0; n3 < e3; n3 += 1)
          r3 += t3;
        return r3;
      }, d = function(e3, t3, r3) {
        return r3;
      };
      e2.exports = function(e3) {
        var t3 = arguments.length > 1 ? arguments[1] : void 0, r3 = t3 && t3.space || "";
        typeof r3 == "number" && (r3 = p(r3, " "));
        var u2 = !!t3 && typeof t3.cycles == "boolean" && t3.cycles, y = t3 && t3.replacer ? s(t3.replacer) : d, l = typeof t3 == "function" ? t3 : t3 && t3.cmp, f = l && function(e4) {
          var t4 = l.length > 2 && function(t5) {
            return e4[t5];
          };
          return function(r4, n3) {
            return l({key: r4, value: e4[r4]}, {key: n3, value: e4[n3]}, t4 ? {__proto__: null, get: t4} : void 0);
          };
        }, h = [];
        return function e4(t4, s2, d2, l2) {
          var g = r3 ? "\n" + p(l2, r3) : "", _ = r3 ? ": " : ":";
          if (d2 && d2.toJSON && typeof d2.toJSON == "function" && (d2 = d2.toJSON()), (d2 = y(t4, s2, d2)) !== void 0) {
            if (typeof d2 != "object" || d2 === null)
              return n2(d2);
            if (i(d2)) {
              for (var m = [], v = 0; v < d2.length; v++) {
                var b = e4(d2, v, d2[v], l2 + 1) || n2(null);
                c(m, g + r3 + b);
              }
              return "[" + a(m, ",") + g + "]";
            }
            if (h.indexOf(d2) !== -1) {
              if (u2)
                return n2("__cycle__");
              throw new TypeError("Converting circular structure to JSON");
            }
            c(h, d2);
            var q = o(d2).sort(f && f(d2));
            for (m = [], v = 0; v < q.length; v++) {
              var w = e4(d2, s2 = q[v], d2[s2], l2 + 1);
              if (w) {
                var k = n2(s2) + _ + w;
                c(m, g + r3 + k);
              }
            }
            return h.splice(h.indexOf(d2), 1), "{" + a(m, ",") + g + "}";
          }
        }({"": e3}, "", e3, 0);
      };
    }, 0: (e2, t2, r2) => {
      t2.parse = r2(960), t2.stringify = r2(136);
    }, 960: (e2) => {
      var t2, r2, n2, i = {'"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "	"};
      function o(e3) {
        throw {name: "SyntaxError", message: e3, at: t2, text: n2};
      }
      function s(e3) {
        return e3 && e3 !== r2 && o("Expected '" + e3 + "' instead of '" + r2 + "'"), r2 = n2.charAt(t2), t2 += 1, r2;
      }
      function u() {
        var e3, t3 = "";
        for (r2 === "-" && (t3 = "-", s("-")); r2 >= "0" && r2 <= "9"; )
          t3 += r2, s();
        if (r2 === ".")
          for (t3 += "."; s() && r2 >= "0" && r2 <= "9"; )
            t3 += r2;
        if (r2 === "e" || r2 === "E")
          for (t3 += r2, s(), r2 !== "-" && r2 !== "+" || (t3 += r2, s()); r2 >= "0" && r2 <= "9"; )
            t3 += r2, s();
        return e3 = Number(t3), isFinite(e3) || o("Bad number"), e3;
      }
      function a() {
        var e3, t3, n3, u2 = "";
        if (r2 === '"')
          for (; s(); ) {
            if (r2 === '"')
              return s(), u2;
            if (r2 === "\\")
              if (s(), r2 === "u") {
                for (n3 = 0, t3 = 0; t3 < 4 && (e3 = parseInt(s(), 16), isFinite(e3)); t3 += 1)
                  n3 = 16 * n3 + e3;
                u2 += String.fromCharCode(n3);
              } else {
                if (typeof i[r2] != "string")
                  break;
                u2 += i[r2];
              }
            else
              u2 += r2;
          }
        o("Bad string");
      }
      function c() {
        for (; r2 && r2 <= " "; )
          s();
      }
      function p() {
        switch (c(), r2) {
          case "{":
            return function() {
              var e3, t3 = {};
              if (r2 === "{") {
                if (s("{"), c(), r2 === "}")
                  return s("}"), t3;
                for (; r2; ) {
                  if (e3 = a(), c(), s(":"), Object.prototype.hasOwnProperty.call(t3, e3) && o('Duplicate key "' + e3 + '"'), t3[e3] = p(), c(), r2 === "}")
                    return s("}"), t3;
                  s(","), c();
                }
              }
              o("Bad object");
            }();
          case "[":
            return function() {
              var e3 = [];
              if (r2 === "[") {
                if (s("["), c(), r2 === "]")
                  return s("]"), e3;
                for (; r2; ) {
                  if (e3.push(p()), c(), r2 === "]")
                    return s("]"), e3;
                  s(","), c();
                }
              }
              o("Bad array");
            }();
          case '"':
            return a();
          case "-":
            return u();
          default:
            return r2 >= "0" && r2 <= "9" ? u() : function() {
              switch (r2) {
                case "t":
                  return s("t"), s("r"), s("u"), s("e"), true;
                case "f":
                  return s("f"), s("a"), s("l"), s("s"), s("e"), false;
                case "n":
                  return s("n"), s("u"), s("l"), s("l"), null;
                default:
                  o("Unexpected '" + r2 + "'");
              }
            }();
        }
      }
      e2.exports = function(e3, i2) {
        var s2;
        return n2 = e3, t2 = 0, r2 = " ", s2 = p(), c(), r2 && o("Syntax error"), typeof i2 == "function" ? function e4(t3, r3) {
          var n3, o2, s3 = t3[r3];
          if (s3 && typeof s3 == "object")
            for (n3 in p)
              Object.prototype.hasOwnProperty.call(s3, n3) && ((o2 = e4(s3, n3)) === void 0 ? delete s3[n3] : s3[n3] = o2);
          return i2.call(t3, r3, s3);
        }({"": s2}, "") : s2;
      };
    }, 136: (e2) => {
      var t2, r2, n2, i = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
      function s(e3) {
        return i.lastIndex = 0, i.test(e3) ? '"' + e3.replace(i, function(e4) {
          var t3 = o[e4];
          return typeof t3 == "string" ? t3 : "\\u" + ("0000" + e4.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + e3 + '"';
      }
      function u(e3, i2) {
        var o2, a, c, p, d, y = t2, l = i2[e3];
        switch (l && typeof l == "object" && typeof l.toJSON == "function" && (l = l.toJSON(e3)), typeof n2 == "function" && (l = n2.call(i2, e3, l)), typeof l) {
          case "string":
            return s(l);
          case "number":
            return isFinite(l) ? String(l) : "null";
          case "boolean":
          case "null":
            return String(l);
          case "object":
            if (!l)
              return "null";
            if (t2 += r2, d = [], Object.prototype.toString.apply(l) === "[object Array]") {
              for (p = l.length, o2 = 0; o2 < p; o2 += 1)
                d[o2] = u(o2, l) || "null";
              return c = d.length === 0 ? "[]" : t2 ? "[\n" + t2 + d.join(",\n" + t2) + "\n" + y + "]" : "[" + d.join(",") + "]", t2 = y, c;
            }
            if (n2 && typeof n2 == "object")
              for (p = n2.length, o2 = 0; o2 < p; o2 += 1)
                typeof (a = n2[o2]) == "string" && (c = u(a, l)) && d.push(s(a) + (t2 ? ": " : ":") + c);
            else
              for (a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (c = u(a, l)) && d.push(s(a) + (t2 ? ": " : ":") + c);
            return c = d.length === 0 ? "{}" : t2 ? "{\n" + t2 + d.join(",\n" + t2) + "\n" + y + "}" : "{" + d.join(",") + "}", t2 = y, c;
        }
      }
      e2.exports = function(e3, i2, o2) {
        var s2;
        if (t2 = "", r2 = "", typeof o2 == "number")
          for (s2 = 0; s2 < o2; s2 += 1)
            r2 += " ";
        else
          typeof o2 == "string" && (r2 = o2);
        if (n2 = i2, i2 && typeof i2 != "function" && (typeof i2 != "object" || typeof i2.length != "number"))
          throw new Error("JSON.stringify");
        return u("", {"": e3});
      };
    }, 816: (e2, t2, r2) => {
      var n2;
      if (!Object.keys) {
        var i = Object.prototype.hasOwnProperty, o = Object.prototype.toString, s = r2(428), u = Object.prototype.propertyIsEnumerable, a = !u.call({toString: null}, "toString"), c = u.call(function() {
        }, "prototype"), p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], d = function(e3) {
          var t3 = e3.constructor;
          return t3 && t3.prototype === e3;
        }, y = {$applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true}, l = function() {
          if (typeof window == "undefined")
            return false;
          for (var e3 in window)
            try {
              if (!y["$" + e3] && i.call(window, e3) && window[e3] !== null && typeof window[e3] == "object")
                try {
                  d(window[e3]);
                } catch (e4) {
                  return true;
                }
            } catch (e4) {
              return true;
            }
          return false;
        }();
        n2 = function(e3) {
          var t3 = e3 !== null && typeof e3 == "object", r3 = o.call(e3) === "[object Function]", n3 = s(e3), u2 = t3 && o.call(e3) === "[object String]", y2 = [];
          if (!t3 && !r3 && !n3)
            throw new TypeError("Object.keys called on a non-object");
          var f = c && r3;
          if (u2 && e3.length > 0 && !i.call(e3, 0))
            for (var h = 0; h < e3.length; ++h)
              y2.push(String(h));
          if (n3 && e3.length > 0)
            for (var g = 0; g < e3.length; ++g)
              y2.push(String(g));
          else
            for (var _ in e3)
              f && _ === "prototype" || !i.call(e3, _) || y2.push(String(_));
          if (a)
            for (var m = function(e4) {
              if (typeof window == "undefined" || !l)
                return d(e4);
              try {
                return d(e4);
              } catch (e5) {
                return false;
              }
            }(e3), v = 0; v < p.length; ++v)
              m && p[v] === "constructor" || !i.call(e3, p[v]) || y2.push(p[v]);
          return y2;
        };
      }
      e2.exports = n2;
    }, 56: (e2, t2, r2) => {
      var n2 = Array.prototype.slice, i = r2(428), o = Object.keys, s = o ? function(e3) {
        return o(e3);
      } : r2(816), u = Object.keys;
      s.shim = function() {
        if (Object.keys) {
          var e3 = function() {
            var e4 = Object.keys(arguments);
            return e4 && e4.length === arguments.length;
          }(1, 2);
          e3 || (Object.keys = function(e4) {
            return i(e4) ? u(n2.call(e4)) : u(e4);
          });
        } else
          Object.keys = s;
        return Object.keys || s;
      }, e2.exports = s;
    }, 428: (e2) => {
      var t2 = Object.prototype.toString;
      e2.exports = function(e3) {
        var r2 = t2.call(e3), n2 = r2 === "[object Arguments]";
        return n2 || (n2 = r2 !== "[object Array]" && e3 !== null && typeof e3 == "object" && typeof e3.length == "number" && e3.length >= 0 && t2.call(e3.callee) === "[object Function]"), n2;
      };
    }, 392: (e2, t2, r2) => {
      var n2 = r2(604), i = r2(456), o = r2(188)(), s = r2(872), u = r2(556), a = n2("%Math.floor%");
      e2.exports = function(e3, t3) {
        if (typeof e3 != "function")
          throw new u("`fn` is not a function");
        if (typeof t3 != "number" || t3 < 0 || t3 > 4294967295 || a(t3) !== t3)
          throw new u("`length` must be a positive 32-bit integer");
        var r3 = arguments.length > 2 && !!arguments[2], n3 = true, c = true;
        if ("length" in e3 && s) {
          var p = s(e3, "length");
          p && !p.configurable && (n3 = false), p && !p.writable && (c = false);
        }
        return (n3 || c || !r3) && (o ? i(e3, "length", t3, true, true) : i(e3, "length", t3)), e3;
      };
    }, 636: (e2, t2, r2) => {
      var n2 = r2(848).default;
      function i() {
        e2.exports = i = function() {
          return r3;
        }, e2.exports.__esModule = true, e2.exports.default = e2.exports;
        var t3, r3 = {}, o = Object.prototype, s = o.hasOwnProperty, u = Object.defineProperty || function(e3, t4, r4) {
          e3[t4] = r4.value;
        }, a = typeof Symbol == "function" ? Symbol : {}, c = a.iterator || "@@iterator", p = a.asyncIterator || "@@asyncIterator", d = a.toStringTag || "@@toStringTag";
        function y(e3, t4, r4) {
          return Object.defineProperty(e3, t4, {value: r4, enumerable: true, configurable: true, writable: true}), e3[t4];
        }
        try {
          y({}, "");
        } catch (t4) {
          y = function(e3, t5, r4) {
            return e3[t5] = r4;
          };
        }
        function l(e3, t4, r4, n3) {
          var i2 = t4 && t4.prototype instanceof b ? t4 : b, o2 = Object.create(i2.prototype), s2 = new I(n3 || []);
          return u(o2, "_invoke", {value: P(e3, r4, s2)}), o2;
        }
        function f(e3, t4, r4) {
          try {
            return {type: "normal", arg: e3.call(t4, r4)};
          } catch (e4) {
            return {type: "throw", arg: e4};
          }
        }
        r3.wrap = l;
        var h = "suspendedStart", g = "suspendedYield", _ = "executing", m = "completed", v = {};
        function b() {
        }
        function q() {
        }
        function w() {
        }
        var k = {};
        y(k, c, function() {
          return this;
        });
        var A = Object.getPrototypeOf, x = A && A(A(T([])));
        x && x !== o && s.call(x, c) && (k = x);
        var S = w.prototype = b.prototype = Object.create(k);
        function O(e3) {
          ["next", "throw", "return"].forEach(function(t4) {
            y(e3, t4, function(e4) {
              return this._invoke(t4, e4);
            });
          });
        }
        function R(e3, t4) {
          function r4(i3, o2, u2, a2) {
            var c2 = f(e3[i3], e3, o2);
            if (c2.type !== "throw") {
              var p2 = c2.arg, d2 = p2.value;
              return d2 && n2(d2) == "object" && s.call(d2, "__await") ? t4.resolve(d2.__await).then(function(e4) {
                r4("next", e4, u2, a2);
              }, function(e4) {
                r4("throw", e4, u2, a2);
              }) : t4.resolve(d2).then(function(e4) {
                p2.value = e4, u2(p2);
              }, function(e4) {
                return r4("throw", e4, u2, a2);
              });
            }
            a2(c2.arg);
          }
          var i2;
          u(this, "_invoke", {value: function(e4, n3) {
            function o2() {
              return new t4(function(t5, i3) {
                r4(e4, n3, t5, i3);
              });
            }
            return i2 = i2 ? i2.then(o2, o2) : o2();
          }});
        }
        function P(e3, r4, n3) {
          var i2 = h;
          return function(o2, s2) {
            if (i2 === _)
              throw new Error("Generator is already running");
            if (i2 === m) {
              if (o2 === "throw")
                throw s2;
              return {value: t3, done: true};
            }
            for (n3.method = o2, n3.arg = s2; ; ) {
              var u2 = n3.delegate;
              if (u2) {
                var a2 = M(u2, n3);
                if (a2) {
                  if (a2 === v)
                    continue;
                  return a2;
                }
              }
              if (n3.method === "next")
                n3.sent = n3._sent = n3.arg;
              else if (n3.method === "throw") {
                if (i2 === h)
                  throw i2 = m, n3.arg;
                n3.dispatchException(n3.arg);
              } else
                n3.method === "return" && n3.abrupt("return", n3.arg);
              i2 = _;
              var c2 = f(e3, r4, n3);
              if (c2.type === "normal") {
                if (i2 = n3.done ? m : g, c2.arg === v)
                  continue;
                return {value: c2.arg, done: n3.done};
              }
              c2.type === "throw" && (i2 = m, n3.method = "throw", n3.arg = c2.arg);
            }
          };
        }
        function M(e3, r4) {
          var n3 = r4.method, i2 = e3.iterator[n3];
          if (i2 === t3)
            return r4.delegate = null, n3 === "throw" && e3.iterator.return && (r4.method = "return", r4.arg = t3, M(e3, r4), r4.method === "throw") || n3 !== "return" && (r4.method = "throw", r4.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), v;
          var o2 = f(i2, e3.iterator, r4.arg);
          if (o2.type === "throw")
            return r4.method = "throw", r4.arg = o2.arg, r4.delegate = null, v;
          var s2 = o2.arg;
          return s2 ? s2.done ? (r4[e3.resultName] = s2.value, r4.next = e3.nextLoc, r4.method !== "return" && (r4.method = "next", r4.arg = t3), r4.delegate = null, v) : s2 : (r4.method = "throw", r4.arg = new TypeError("iterator result is not an object"), r4.delegate = null, v);
        }
        function j(e3) {
          var t4 = {tryLoc: e3[0]};
          1 in e3 && (t4.catchLoc = e3[1]), 2 in e3 && (t4.finallyLoc = e3[2], t4.afterLoc = e3[3]), this.tryEntries.push(t4);
        }
        function E(e3) {
          var t4 = e3.completion || {};
          t4.type = "normal", delete t4.arg, e3.completion = t4;
        }
        function I(e3) {
          this.tryEntries = [{tryLoc: "root"}], e3.forEach(j, this), this.reset(true);
        }
        function T(e3) {
          if (e3 || e3 === "") {
            var r4 = e3[c];
            if (r4)
              return r4.call(e3);
            if (typeof e3.next == "function")
              return e3;
            if (!isNaN(e3.length)) {
              var i2 = -1, o2 = function r5() {
                for (; ++i2 < e3.length; )
                  if (s.call(e3, i2))
                    return r5.value = e3[i2], r5.done = false, r5;
                return r5.value = t3, r5.done = true, r5;
              };
              return o2.next = o2;
            }
          }
          throw new TypeError(n2(e3) + " is not iterable");
        }
        return q.prototype = w, u(S, "constructor", {value: w, configurable: true}), u(w, "constructor", {value: q, configurable: true}), q.displayName = y(w, d, "GeneratorFunction"), r3.isGeneratorFunction = function(e3) {
          var t4 = typeof e3 == "function" && e3.constructor;
          return !!t4 && (t4 === q || (t4.displayName || t4.name) === "GeneratorFunction");
        }, r3.mark = function(e3) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e3, w) : (e3.__proto__ = w, y(e3, d, "GeneratorFunction")), e3.prototype = Object.create(S), e3;
        }, r3.awrap = function(e3) {
          return {__await: e3};
        }, O(R.prototype), y(R.prototype, p, function() {
          return this;
        }), r3.AsyncIterator = R, r3.async = function(e3, t4, n3, i2, o2) {
          o2 === void 0 && (o2 = Promise);
          var s2 = new R(l(e3, t4, n3, i2), o2);
          return r3.isGeneratorFunction(t4) ? s2 : s2.next().then(function(e4) {
            return e4.done ? e4.value : s2.next();
          });
        }, O(S), y(S, d, "Generator"), y(S, c, function() {
          return this;
        }), y(S, "toString", function() {
          return "[object Generator]";
        }), r3.keys = function(e3) {
          var t4 = Object(e3), r4 = [];
          for (var n3 in t4)
            r4.push(n3);
          return r4.reverse(), function e4() {
            for (; r4.length; ) {
              var n4 = r4.pop();
              if (n4 in t4)
                return e4.value = n4, e4.done = false, e4;
            }
            return e4.done = true, e4;
          };
        }, r3.values = T, I.prototype = {constructor: I, reset: function(e3) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(E), !e3)
            for (var r4 in this)
              r4.charAt(0) === "t" && s.call(this, r4) && !isNaN(+r4.slice(1)) && (this[r4] = t3);
        }, stop: function() {
          this.done = true;
          var e3 = this.tryEntries[0].completion;
          if (e3.type === "throw")
            throw e3.arg;
          return this.rval;
        }, dispatchException: function(e3) {
          if (this.done)
            throw e3;
          var r4 = this;
          function n3(n4, i3) {
            return u2.type = "throw", u2.arg = e3, r4.next = n4, i3 && (r4.method = "next", r4.arg = t3), !!i3;
          }
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var o2 = this.tryEntries[i2], u2 = o2.completion;
            if (o2.tryLoc === "root")
              return n3("end");
            if (o2.tryLoc <= this.prev) {
              var a2 = s.call(o2, "catchLoc"), c2 = s.call(o2, "finallyLoc");
              if (a2 && c2) {
                if (this.prev < o2.catchLoc)
                  return n3(o2.catchLoc, true);
                if (this.prev < o2.finallyLoc)
                  return n3(o2.finallyLoc);
              } else if (a2) {
                if (this.prev < o2.catchLoc)
                  return n3(o2.catchLoc, true);
              } else {
                if (!c2)
                  throw new Error("try statement without catch or finally");
                if (this.prev < o2.finallyLoc)
                  return n3(o2.finallyLoc);
              }
            }
          }
        }, abrupt: function(e3, t4) {
          for (var r4 = this.tryEntries.length - 1; r4 >= 0; --r4) {
            var n3 = this.tryEntries[r4];
            if (n3.tryLoc <= this.prev && s.call(n3, "finallyLoc") && this.prev < n3.finallyLoc) {
              var i2 = n3;
              break;
            }
          }
          i2 && (e3 === "break" || e3 === "continue") && i2.tryLoc <= t4 && t4 <= i2.finallyLoc && (i2 = null);
          var o2 = i2 ? i2.completion : {};
          return o2.type = e3, o2.arg = t4, i2 ? (this.method = "next", this.next = i2.finallyLoc, v) : this.complete(o2);
        }, complete: function(e3, t4) {
          if (e3.type === "throw")
            throw e3.arg;
          return e3.type === "break" || e3.type === "continue" ? this.next = e3.arg : e3.type === "return" ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : e3.type === "normal" && t4 && (this.next = t4), v;
        }, finish: function(e3) {
          for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
            var r4 = this.tryEntries[t4];
            if (r4.finallyLoc === e3)
              return this.complete(r4.completion, r4.afterLoc), E(r4), v;
          }
        }, catch: function(e3) {
          for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
            var r4 = this.tryEntries[t4];
            if (r4.tryLoc === e3) {
              var n3 = r4.completion;
              if (n3.type === "throw") {
                var i2 = n3.arg;
                E(r4);
              }
              return i2;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(e3, r4, n3) {
          return this.delegate = {iterator: T(e3), resultName: r4, nextLoc: n3}, this.method === "next" && (this.arg = t3), v;
        }}, r3;
      }
      e2.exports = i, e2.exports.__esModule = true, e2.exports.default = e2.exports;
    }, 848: (e2) => {
      function t2(r2) {
        return e2.exports = t2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        }, e2.exports.__esModule = true, e2.exports.default = e2.exports, t2(r2);
      }
      e2.exports = t2, e2.exports.__esModule = true, e2.exports.default = e2.exports;
    }, 248: (e2, t2, r2) => {
      var n2 = r2(636)();
      e2.exports = n2;
      try {
        regeneratorRuntime = n2;
      } catch (e3) {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = n2 : Function("r", "regeneratorRuntime = r")(n2);
      }
    }}, t = {};
    function r(n2) {
      var i = t[n2];
      if (i !== void 0)
        return i.exports;
      var o = t[n2] = {exports: {}};
      return e[n2](o, o.exports, r), o.exports;
    }
    r.n = (e2) => {
      var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
      return r.d(t2, {a: t2}), t2;
    }, r.d = (e2, t2) => {
      for (var n2 in t2)
        r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, {enumerable: true, get: t2[n2]});
    }, r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
    var n = {};
    return (() => {
      function e2(e3, t3) {
        (t3 == null || t3 > e3.length) && (t3 = e3.length);
        for (var r2 = 0, n2 = new Array(t3); r2 < t3; r2++)
          n2[r2] = e3[r2];
        return n2;
      }
      function t2(e3) {
        return t2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
          return typeof e4;
        } : function(e4) {
          return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        }, t2(e3);
      }
      function i(e3, t3, r2, n2, i2, o2, s2) {
        try {
          var u2 = e3[o2](s2), a2 = u2.value;
        } catch (e4) {
          return void r2(e4);
        }
        u2.done ? t3(a2) : Promise.resolve(a2).then(n2, i2);
      }
      function o(e3) {
        return function() {
          var t3 = this, r2 = arguments;
          return new Promise(function(n2, o2) {
            var s2 = e3.apply(t3, r2);
            function u2(e4) {
              i(s2, n2, o2, u2, a2, "next", e4);
            }
            function a2(e4) {
              i(s2, n2, o2, u2, a2, "throw", e4);
            }
            u2(void 0);
          });
        };
      }
      function s(e3, t3) {
        if (!(e3 instanceof t3))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e3) {
        var r2 = function(e4, r3) {
          if (t2(e4) != "object" || !e4)
            return e4;
          var n2 = e4[Symbol.toPrimitive];
          if (n2 !== void 0) {
            var i2 = n2.call(e4, "string");
            if (t2(i2) != "object")
              return i2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e4);
        }(e3);
        return t2(r2) == "symbol" ? r2 : String(r2);
      }
      function a(e3, t3) {
        for (var r2 = 0; r2 < t3.length; r2++) {
          var n2 = t3[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, u(n2.key), n2);
        }
      }
      function c(e3, t3, r2) {
        return t3 && a(e3.prototype, t3), r2 && a(e3, r2), Object.defineProperty(e3, "prototype", {writable: false}), e3;
      }
      function p(e3) {
        if (e3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e3;
      }
      function d(e3, r2) {
        if (r2 && (t2(r2) === "object" || typeof r2 == "function"))
          return r2;
        if (r2 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return p(e3);
      }
      function y(e3) {
        return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
          return e4.__proto__ || Object.getPrototypeOf(e4);
        }, y(e3);
      }
      function l(e3, t3) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
          return e4.__proto__ = t4, e4;
        }, l(e3, t3);
      }
      function f(e3, t3) {
        if (typeof t3 != "function" && t3 !== null)
          throw new TypeError("Super expression must either be null or a function");
        e3.prototype = Object.create(t3 && t3.prototype, {constructor: {value: e3, writable: true, configurable: true}}), Object.defineProperty(e3, "prototype", {writable: false}), t3 && l(e3, t3);
      }
      r.d(n, {default: () => ze});
      var h = r(248), g = r.n(h);
      function _(e3) {
        var t3 = e3(function(e4) {
          Error.call(e4), e4.stack = new Error().stack;
        });
        return t3.prototype = Object.create(Error.prototype), t3.prototype.constructor = t3, t3;
      }
      var m = _(function(e3) {
        return function() {
          e3(this), this.name = "EmptyError", this.message = "no elements in sequence";
        };
      });
      function v(e3) {
        return typeof e3 == "function";
      }
      function b(e3) {
        return function(t3) {
          if (function(e4) {
            return v(e4 == null ? void 0 : e4.lift);
          }(t3))
            return t3.lift(function(t4) {
              try {
                return e3(t4, this);
              } catch (e4) {
                this.error(e4);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      var q = function(e3, t3) {
        return q = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
          e4.__proto__ = t4;
        } || function(e4, t4) {
          for (var r2 in t4)
            Object.prototype.hasOwnProperty.call(t4, r2) && (e4[r2] = t4[r2]);
        }, q(e3, t3);
      };
      function w(e3, t3) {
        if (typeof t3 != "function" && t3 !== null)
          throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
        function r2() {
          this.constructor = e3;
        }
        q(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
      }
      function k(e3, t3) {
        var r2, n2, i2, o2, s2 = {label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: []};
        return o2 = {next: u2(0), throw: u2(1), return: u2(2)}, typeof Symbol == "function" && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function u2(u3) {
          return function(a2) {
            return function(u4) {
              if (r2)
                throw new TypeError("Generator is already executing.");
              for (; o2 && (o2 = 0, u4[0] && (s2 = 0)), s2; )
                try {
                  if (r2 = 1, n2 && (i2 = 2 & u4[0] ? n2.return : u4[0] ? n2.throw || ((i2 = n2.return) && i2.call(n2), 0) : n2.next) && !(i2 = i2.call(n2, u4[1])).done)
                    return i2;
                  switch (n2 = 0, i2 && (u4 = [2 & u4[0], i2.value]), u4[0]) {
                    case 0:
                    case 1:
                      i2 = u4;
                      break;
                    case 4:
                      return s2.label++, {value: u4[1], done: false};
                    case 5:
                      s2.label++, n2 = u4[1], u4 = [0];
                      continue;
                    case 7:
                      u4 = s2.ops.pop(), s2.trys.pop();
                      continue;
                    default:
                      if (!((i2 = (i2 = s2.trys).length > 0 && i2[i2.length - 1]) || u4[0] !== 6 && u4[0] !== 2)) {
                        s2 = 0;
                        continue;
                      }
                      if (u4[0] === 3 && (!i2 || u4[1] > i2[0] && u4[1] < i2[3])) {
                        s2.label = u4[1];
                        break;
                      }
                      if (u4[0] === 6 && s2.label < i2[1]) {
                        s2.label = i2[1], i2 = u4;
                        break;
                      }
                      if (i2 && s2.label < i2[2]) {
                        s2.label = i2[2], s2.ops.push(u4);
                        break;
                      }
                      i2[2] && s2.ops.pop(), s2.trys.pop();
                      continue;
                  }
                  u4 = t3.call(e3, s2);
                } catch (e4) {
                  u4 = [6, e4], n2 = 0;
                } finally {
                  r2 = i2 = 0;
                }
              if (5 & u4[0])
                throw u4[1];
              return {value: u4[0] ? u4[1] : void 0, done: true};
            }([u3, a2]);
          };
        }
      }
      function A(e3) {
        var t3 = typeof Symbol == "function" && Symbol.iterator, r2 = t3 && e3[t3], n2 = 0;
        if (r2)
          return r2.call(e3);
        if (e3 && typeof e3.length == "number")
          return {next: function() {
            return e3 && n2 >= e3.length && (e3 = void 0), {value: e3 && e3[n2++], done: !e3};
          }};
        throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function x(e3, t3) {
        var r2 = typeof Symbol == "function" && e3[Symbol.iterator];
        if (!r2)
          return e3;
        var n2, i2, o2 = r2.call(e3), s2 = [];
        try {
          for (; (t3 === void 0 || t3-- > 0) && !(n2 = o2.next()).done; )
            s2.push(n2.value);
        } catch (e4) {
          i2 = {error: e4};
        } finally {
          try {
            n2 && !n2.done && (r2 = o2.return) && r2.call(o2);
          } finally {
            if (i2)
              throw i2.error;
          }
        }
        return s2;
      }
      function S(e3, t3, r2) {
        if (r2 || arguments.length === 2)
          for (var n2, i2 = 0, o2 = t3.length; i2 < o2; i2++)
            !n2 && i2 in t3 || (n2 || (n2 = Array.prototype.slice.call(t3, 0, i2)), n2[i2] = t3[i2]);
        return e3.concat(n2 || Array.prototype.slice.call(t3));
      }
      function O(e3) {
        return this instanceof O ? (this.v = e3, this) : new O(e3);
      }
      typeof SuppressedError == "function" && SuppressedError;
      var R = _(function(e3) {
        return function(t3) {
          e3(this), this.message = t3 ? t3.length + " errors occurred during unsubscription:\n" + t3.map(function(e4, t4) {
            return t4 + 1 + ") " + e4.toString();
          }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t3;
        };
      });
      function P(e3, t3) {
        if (e3) {
          var r2 = e3.indexOf(t3);
          0 <= r2 && e3.splice(r2, 1);
        }
      }
      var M = function() {
        function e3(e4) {
          this.initialTeardown = e4, this.closed = false, this._parentage = null, this._finalizers = null;
        }
        return e3.prototype.unsubscribe = function() {
          var e4, t4, r2, n2, i2;
          if (!this.closed) {
            this.closed = true;
            var o2 = this._parentage;
            if (o2)
              if (this._parentage = null, Array.isArray(o2))
                try {
                  for (var s2 = A(o2), u2 = s2.next(); !u2.done; u2 = s2.next())
                    u2.value.remove(this);
                } catch (t5) {
                  e4 = {error: t5};
                } finally {
                  try {
                    u2 && !u2.done && (t4 = s2.return) && t4.call(s2);
                  } finally {
                    if (e4)
                      throw e4.error;
                  }
                }
              else
                o2.remove(this);
            var a2 = this.initialTeardown;
            if (v(a2))
              try {
                a2();
              } catch (e5) {
                i2 = e5 instanceof R ? e5.errors : [e5];
              }
            var c2 = this._finalizers;
            if (c2) {
              this._finalizers = null;
              try {
                for (var p2 = A(c2), d2 = p2.next(); !d2.done; d2 = p2.next()) {
                  var y2 = d2.value;
                  try {
                    I(y2);
                  } catch (e5) {
                    i2 = i2 != null ? i2 : [], e5 instanceof R ? i2 = S(S([], x(i2)), x(e5.errors)) : i2.push(e5);
                  }
                }
              } catch (e5) {
                r2 = {error: e5};
              } finally {
                try {
                  d2 && !d2.done && (n2 = p2.return) && n2.call(p2);
                } finally {
                  if (r2)
                    throw r2.error;
                }
              }
            }
            if (i2)
              throw new R(i2);
          }
        }, e3.prototype.add = function(t4) {
          var r2;
          if (t4 && t4 !== this)
            if (this.closed)
              I(t4);
            else {
              if (t4 instanceof e3) {
                if (t4.closed || t4._hasParent(this))
                  return;
                t4._addParent(this);
              }
              (this._finalizers = (r2 = this._finalizers) !== null && r2 !== void 0 ? r2 : []).push(t4);
            }
        }, e3.prototype._hasParent = function(e4) {
          var t4 = this._parentage;
          return t4 === e4 || Array.isArray(t4) && t4.includes(e4);
        }, e3.prototype._addParent = function(e4) {
          var t4 = this._parentage;
          this._parentage = Array.isArray(t4) ? (t4.push(e4), t4) : t4 ? [t4, e4] : e4;
        }, e3.prototype._removeParent = function(e4) {
          var t4 = this._parentage;
          t4 === e4 ? this._parentage = null : Array.isArray(t4) && P(t4, e4);
        }, e3.prototype.remove = function(t4) {
          var r2 = this._finalizers;
          r2 && P(r2, t4), t4 instanceof e3 && t4._removeParent(this);
        }, e3.EMPTY = ((t3 = new e3()).closed = true, t3), e3;
        var t3;
      }(), j = M.EMPTY;
      function E(e3) {
        return e3 instanceof M || e3 && "closed" in e3 && v(e3.remove) && v(e3.add) && v(e3.unsubscribe);
      }
      function I(e3) {
        v(e3) ? e3() : e3.unsubscribe();
      }
      var T = {onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false}, F = {setTimeout: function(e3, t3) {
        for (var r2 = [], n2 = 2; n2 < arguments.length; n2++)
          r2[n2 - 2] = arguments[n2];
        var i2 = F.delegate;
        return (i2 == null ? void 0 : i2.setTimeout) ? i2.setTimeout.apply(i2, S([e3, t3], x(r2))) : setTimeout.apply(void 0, S([e3, t3], x(r2)));
      }, clearTimeout: function(e3) {
        var t3 = F.delegate;
        return ((t3 == null ? void 0 : t3.clearTimeout) || clearTimeout)(e3);
      }, delegate: void 0};
      function C(e3) {
        F.setTimeout(function() {
          throw e3;
        });
      }
      function U() {
      }
      function D(e3) {
        e3();
      }
      var G = function(e3) {
        function t3(t4) {
          var r2 = e3.call(this) || this;
          return r2.isStopped = false, t4 ? (r2.destination = t4, E(t4) && t4.add(r2)) : r2.destination = Y, r2;
        }
        return w(t3, e3), t3.create = function(e4, t4, r2) {
          return new H(e4, t4, r2);
        }, t3.prototype.next = function(e4) {
          this.isStopped ? V() : this._next(e4);
        }, t3.prototype.error = function(e4) {
          this.isStopped ? V() : (this.isStopped = true, this._error(e4));
        }, t3.prototype.complete = function() {
          this.isStopped ? V() : (this.isStopped = true, this._complete());
        }, t3.prototype.unsubscribe = function() {
          this.closed || (this.isStopped = true, e3.prototype.unsubscribe.call(this), this.destination = null);
        }, t3.prototype._next = function(e4) {
          this.destination.next(e4);
        }, t3.prototype._error = function(e4) {
          try {
            this.destination.error(e4);
          } finally {
            this.unsubscribe();
          }
        }, t3.prototype._complete = function() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }, t3;
      }(M), $ = Function.prototype.bind;
      function z(e3, t3) {
        return $.call(e3, t3);
      }
      var W = function() {
        function e3(e4) {
          this.partialObserver = e4;
        }
        return e3.prototype.next = function(e4) {
          var t3 = this.partialObserver;
          if (t3.next)
            try {
              t3.next(e4);
            } catch (e5) {
              J(e5);
            }
        }, e3.prototype.error = function(e4) {
          var t3 = this.partialObserver;
          if (t3.error)
            try {
              t3.error(e4);
            } catch (e5) {
              J(e5);
            }
          else
            J(e4);
        }, e3.prototype.complete = function() {
          var e4 = this.partialObserver;
          if (e4.complete)
            try {
              e4.complete();
            } catch (e5) {
              J(e5);
            }
        }, e3;
      }(), H = function(e3) {
        function t3(t4, r2, n2) {
          var i2, o2, s2 = e3.call(this) || this;
          return v(t4) || !t4 ? i2 = {next: t4 != null ? t4 : void 0, error: r2 != null ? r2 : void 0, complete: n2 != null ? n2 : void 0} : s2 && T.useDeprecatedNextContext ? ((o2 = Object.create(t4)).unsubscribe = function() {
            return s2.unsubscribe();
          }, i2 = {next: t4.next && z(t4.next, o2), error: t4.error && z(t4.error, o2), complete: t4.complete && z(t4.complete, o2)}) : i2 = t4, s2.destination = new W(i2), s2;
        }
        return w(t3, e3), t3;
      }(G);
      function J(e3) {
        C(e3);
      }
      function V(e3, t3) {
      }
      var Y = {closed: true, next: U, error: function(e3) {
        throw e3;
      }, complete: U};
      function K(e3, t3, r2, n2, i2) {
        return new X(e3, t3, r2, n2, i2);
      }
      var X = function(e3) {
        function t3(t4, r2, n2, i2, o2, s2) {
          var u2 = e3.call(this, t4) || this;
          return u2.onFinalize = o2, u2.shouldUnsubscribe = s2, u2._next = r2 ? function(e4) {
            try {
              r2(e4);
            } catch (e5) {
              t4.error(e5);
            }
          } : e3.prototype._next, u2._error = i2 ? function(e4) {
            try {
              i2(e4);
            } catch (e5) {
              t4.error(e5);
            } finally {
              this.unsubscribe();
            }
          } : e3.prototype._error, u2._complete = n2 ? function() {
            try {
              n2();
            } catch (e4) {
              t4.error(e4);
            } finally {
              this.unsubscribe();
            }
          } : e3.prototype._complete, u2;
        }
        return w(t3, e3), t3.prototype.unsubscribe = function() {
          var t4;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var r2 = this.closed;
            e3.prototype.unsubscribe.call(this), !r2 && ((t4 = this.onFinalize) === null || t4 === void 0 || t4.call(this));
          }
        }, t3;
      }(G);
      function Z(e3, t3) {
        return b(function(r2, n2) {
          var i2 = 0;
          r2.subscribe(K(n2, function(r3) {
            return e3.call(t3, r3, i2++) && n2.next(r3);
          }));
        });
      }
      var Q = typeof Symbol == "function" && Symbol.observable || "@@observable";
      function ee(e3) {
        return e3;
      }
      var te = function() {
        function e3(e4) {
          e4 && (this._subscribe = e4);
        }
        return e3.prototype.lift = function(t3) {
          var r2 = new e3();
          return r2.source = this, r2.operator = t3, r2;
        }, e3.prototype.subscribe = function(e4, t3, r2) {
          var n2, i2 = this, o2 = (n2 = e4) && n2 instanceof G || function(e5) {
            return e5 && v(e5.next) && v(e5.error) && v(e5.complete);
          }(n2) && E(n2) ? e4 : new H(e4, t3, r2);
          return D(function() {
            var e5 = i2, t4 = e5.operator, r3 = e5.source;
            o2.add(t4 ? t4.call(o2, r3) : r3 ? i2._subscribe(o2) : i2._trySubscribe(o2));
          }), o2;
        }, e3.prototype._trySubscribe = function(e4) {
          try {
            return this._subscribe(e4);
          } catch (t3) {
            e4.error(t3);
          }
        }, e3.prototype.forEach = function(e4, t3) {
          var r2 = this;
          return new (t3 = re(t3))(function(t4, n2) {
            var i2 = new H({next: function(t5) {
              try {
                e4(t5);
              } catch (e5) {
                n2(e5), i2.unsubscribe();
              }
            }, error: n2, complete: t4});
            r2.subscribe(i2);
          });
        }, e3.prototype._subscribe = function(e4) {
          var t3;
          return (t3 = this.source) === null || t3 === void 0 ? void 0 : t3.subscribe(e4);
        }, e3.prototype[Q] = function() {
          return this;
        }, e3.prototype.pipe = function() {
          for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
            e4[t3] = arguments[t3];
          return ((r2 = e4).length === 0 ? ee : r2.length === 1 ? r2[0] : function(e5) {
            return r2.reduce(function(e6, t4) {
              return t4(e6);
            }, e5);
          })(this);
          var r2;
        }, e3.prototype.toPromise = function(e4) {
          var t3 = this;
          return new (e4 = re(e4))(function(e5, r2) {
            var n2;
            t3.subscribe(function(e6) {
              return n2 = e6;
            }, function(e6) {
              return r2(e6);
            }, function() {
              return e5(n2);
            });
          });
        }, e3.create = function(t3) {
          return new e3(t3);
        }, e3;
      }();
      function re(e3) {
        var t3;
        return (t3 = e3 != null ? e3 : T.Promise) !== null && t3 !== void 0 ? t3 : Promise;
      }
      function ie() {
        return new m();
      }
      function oe(e3, t3) {
        var r2 = arguments.length >= 2;
        return function(n2) {
          return n2.pipe(e3 ? Z(function(t4, r3) {
            return e3(t4, r3, n2);
          }) : ee, b(function(e4, t4) {
            var r3 = 0;
            e4.subscribe(K(t4, function(e5) {
              ++r3 <= 1 && (t4.next(e5), 1 <= r3 && t4.complete());
            }));
          }), r2 ? function(e4) {
            return b(function(t4, r3) {
              var n3 = false;
              t4.subscribe(K(r3, function(e5) {
                n3 = true, r3.next(e5);
              }, function() {
                n3 || r3.next(e4), r3.complete();
              }));
            });
          }(t3) : function(e4) {
            return e4 === void 0 && (e4 = ie), b(function(t4, r3) {
              var n3 = false;
              t4.subscribe(K(r3, function(e5) {
                n3 = true, r3.next(e5);
              }, function() {
                return n3 ? r3.complete() : r3.error(e4());
              }));
            });
          }(function() {
            return new m();
          }));
        };
      }
      var se = function(e3) {
        return e3 && typeof e3.length == "number" && typeof e3 != "function";
      }, ue = typeof Symbol == "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";
      function ae(e3) {
        if (e3 instanceof te)
          return e3;
        if (e3 != null) {
          if (function(e4) {
            return v(e4[Q]);
          }(e3))
            return o2 = e3, new te(function(e4) {
              var t4 = o2[Q]();
              if (v(t4.subscribe))
                return t4.subscribe(e4);
              throw new TypeError("Provided object does not correctly implement Symbol.observable");
            });
          if (se(e3))
            return i2 = e3, new te(function(e4) {
              for (var t4 = 0; t4 < i2.length && !e4.closed; t4++)
                e4.next(i2[t4]);
              e4.complete();
            });
          if (v((n2 = e3) == null ? void 0 : n2.then))
            return r2 = e3, new te(function(e4) {
              r2.then(function(t4) {
                e4.closed || (e4.next(t4), e4.complete());
              }, function(t4) {
                return e4.error(t4);
              }).then(null, C);
            });
          if (function(e4) {
            return Symbol.asyncIterator && v(e4 == null ? void 0 : e4[Symbol.asyncIterator]);
          }(e3))
            return ce(e3);
          if (function(e4) {
            return v(e4 == null ? void 0 : e4[ue]);
          }(e3))
            return t3 = e3, new te(function(e4) {
              var r3, n3;
              try {
                for (var i3 = A(t3), o3 = i3.next(); !o3.done; o3 = i3.next()) {
                  var s2 = o3.value;
                  if (e4.next(s2), e4.closed)
                    return;
                }
              } catch (e5) {
                r3 = {error: e5};
              } finally {
                try {
                  o3 && !o3.done && (n3 = i3.return) && n3.call(i3);
                } finally {
                  if (r3)
                    throw r3.error;
                }
              }
              e4.complete();
            });
          if (function(e4) {
            return v(e4 == null ? void 0 : e4.getReader);
          }(e3))
            return ce(function(e4) {
              return function(e5, t4, r3) {
                if (!Symbol.asyncIterator)
                  throw new TypeError("Symbol.asyncIterator is not defined.");
                var n3, i3 = r3.apply(e5, t4 || []), o3 = [];
                return n3 = {}, s2("next"), s2("throw"), s2("return"), n3[Symbol.asyncIterator] = function() {
                  return this;
                }, n3;
                function s2(e6) {
                  i3[e6] && (n3[e6] = function(t5) {
                    return new Promise(function(r4, n4) {
                      o3.push([e6, t5, r4, n4]) > 1 || u2(e6, t5);
                    });
                  });
                }
                function u2(e6, t5) {
                  try {
                    (r4 = i3[e6](t5)).value instanceof O ? Promise.resolve(r4.value.v).then(a2, c2) : p2(o3[0][2], r4);
                  } catch (e7) {
                    p2(o3[0][3], e7);
                  }
                  var r4;
                }
                function a2(e6) {
                  u2("next", e6);
                }
                function c2(e6) {
                  u2("throw", e6);
                }
                function p2(e6, t5) {
                  e6(t5), o3.shift(), o3.length && u2(o3[0][0], o3[0][1]);
                }
              }(this, arguments, function() {
                var t4, r3, n3;
                return k(this, function(i3) {
                  switch (i3.label) {
                    case 0:
                      t4 = e4.getReader(), i3.label = 1;
                    case 1:
                      i3.trys.push([1, , 9, 10]), i3.label = 2;
                    case 2:
                      return [4, O(t4.read())];
                    case 3:
                      return r3 = i3.sent(), n3 = r3.value, r3.done ? [4, O(void 0)] : [3, 5];
                    case 4:
                      return [2, i3.sent()];
                    case 5:
                      return [4, O(n3)];
                    case 6:
                      return [4, i3.sent()];
                    case 7:
                      return i3.sent(), [3, 2];
                    case 8:
                      return [3, 10];
                    case 9:
                      return t4.releaseLock(), [7];
                    case 10:
                      return [2];
                  }
                });
              });
            }(e3));
        }
        var t3, r2, n2, i2, o2;
        throw function(e4) {
          return new TypeError("You provided " + (e4 !== null && typeof e4 == "object" ? "an invalid object" : "'" + e4 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
        }(e3);
      }
      function ce(e3) {
        return new te(function(t3) {
          (function(e4, t4) {
            var r2, n2, i2, o2, s2, u2, a2, c2;
            return s2 = this, u2 = void 0, c2 = function() {
              var s3, u3;
              return k(this, function(a3) {
                switch (a3.label) {
                  case 0:
                    a3.trys.push([0, 5, 6, 11]), r2 = function(e5) {
                      if (!Symbol.asyncIterator)
                        throw new TypeError("Symbol.asyncIterator is not defined.");
                      var t5, r3 = e5[Symbol.asyncIterator];
                      return r3 ? r3.call(e5) : (e5 = A(e5), t5 = {}, n3("next"), n3("throw"), n3("return"), t5[Symbol.asyncIterator] = function() {
                        return this;
                      }, t5);
                      function n3(r4) {
                        t5[r4] = e5[r4] && function(t6) {
                          return new Promise(function(n4, i3) {
                            !function(e6, t7, r5, n5) {
                              Promise.resolve(n5).then(function(t8) {
                                e6({value: t8, done: r5});
                              }, t7);
                            }(n4, i3, (t6 = e5[r4](t6)).done, t6.value);
                          });
                        };
                      }
                    }(e4), a3.label = 1;
                  case 1:
                    return [4, r2.next()];
                  case 2:
                    if ((n2 = a3.sent()).done)
                      return [3, 4];
                    if (s3 = n2.value, t4.next(s3), t4.closed)
                      return [2];
                    a3.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return u3 = a3.sent(), i2 = {error: u3}, [3, 11];
                  case 6:
                    return a3.trys.push([6, , 9, 10]), n2 && !n2.done && (o2 = r2.return) ? [4, o2.call(r2)] : [3, 8];
                  case 7:
                    a3.sent(), a3.label = 8;
                  case 8:
                    return [3, 10];
                  case 9:
                    if (i2)
                      throw i2.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t4.complete(), [2];
                }
              });
            }, new ((a2 = void 0) || (a2 = Promise))(function(e5, t5) {
              function r3(e6) {
                try {
                  i3(c2.next(e6));
                } catch (e7) {
                  t5(e7);
                }
              }
              function n3(e6) {
                try {
                  i3(c2.throw(e6));
                } catch (e7) {
                  t5(e7);
                }
              }
              function i3(t6) {
                var i4;
                t6.done ? e5(t6.value) : (i4 = t6.value, i4 instanceof a2 ? i4 : new a2(function(e6) {
                  e6(i4);
                })).then(r3, n3);
              }
              i3((c2 = c2.apply(s2, u2 || [])).next());
            });
          })(e3, t3).catch(function(e4) {
            return t3.error(e4);
          });
        });
      }
      var pe = _(function(e3) {
        return function() {
          e3(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
        };
      }), de = function(e3) {
        function t3() {
          var t4 = e3.call(this) || this;
          return t4.closed = false, t4.currentObservers = null, t4.observers = [], t4.isStopped = false, t4.hasError = false, t4.thrownError = null, t4;
        }
        return w(t3, e3), t3.prototype.lift = function(e4) {
          var t4 = new ye(this, this);
          return t4.operator = e4, t4;
        }, t3.prototype._throwIfClosed = function() {
          if (this.closed)
            throw new pe();
        }, t3.prototype.next = function(e4) {
          var t4 = this;
          D(function() {
            var r2, n2;
            if (t4._throwIfClosed(), !t4.isStopped) {
              t4.currentObservers || (t4.currentObservers = Array.from(t4.observers));
              try {
                for (var i2 = A(t4.currentObservers), o2 = i2.next(); !o2.done; o2 = i2.next())
                  o2.value.next(e4);
              } catch (e5) {
                r2 = {error: e5};
              } finally {
                try {
                  o2 && !o2.done && (n2 = i2.return) && n2.call(i2);
                } finally {
                  if (r2)
                    throw r2.error;
                }
              }
            }
          });
        }, t3.prototype.error = function(e4) {
          var t4 = this;
          D(function() {
            if (t4._throwIfClosed(), !t4.isStopped) {
              t4.hasError = t4.isStopped = true, t4.thrownError = e4;
              for (var r2 = t4.observers; r2.length; )
                r2.shift().error(e4);
            }
          });
        }, t3.prototype.complete = function() {
          var e4 = this;
          D(function() {
            if (e4._throwIfClosed(), !e4.isStopped) {
              e4.isStopped = true;
              for (var t4 = e4.observers; t4.length; )
                t4.shift().complete();
            }
          });
        }, t3.prototype.unsubscribe = function() {
          this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
        }, Object.defineProperty(t3.prototype, "observed", {get: function() {
          var e4;
          return ((e4 = this.observers) === null || e4 === void 0 ? void 0 : e4.length) > 0;
        }, enumerable: false, configurable: true}), t3.prototype._trySubscribe = function(t4) {
          return this._throwIfClosed(), e3.prototype._trySubscribe.call(this, t4);
        }, t3.prototype._subscribe = function(e4) {
          return this._throwIfClosed(), this._checkFinalizedStatuses(e4), this._innerSubscribe(e4);
        }, t3.prototype._innerSubscribe = function(e4) {
          var t4 = this, r2 = this, n2 = r2.hasError, i2 = r2.isStopped, o2 = r2.observers;
          return n2 || i2 ? j : (this.currentObservers = null, o2.push(e4), new M(function() {
            t4.currentObservers = null, P(o2, e4);
          }));
        }, t3.prototype._checkFinalizedStatuses = function(e4) {
          var t4 = this, r2 = t4.hasError, n2 = t4.thrownError, i2 = t4.isStopped;
          r2 ? e4.error(n2) : i2 && e4.complete();
        }, t3.prototype.asObservable = function() {
          var e4 = new te();
          return e4.source = this, e4;
        }, t3.create = function(e4, t4) {
          return new ye(e4, t4);
        }, t3;
      }(te), ye = function(e3) {
        function t3(t4, r2) {
          var n2 = e3.call(this) || this;
          return n2.destination = t4, n2.source = r2, n2;
        }
        return w(t3, e3), t3.prototype.next = function(e4) {
          var t4, r2;
          (r2 = (t4 = this.destination) === null || t4 === void 0 ? void 0 : t4.next) === null || r2 === void 0 || r2.call(t4, e4);
        }, t3.prototype.error = function(e4) {
          var t4, r2;
          (r2 = (t4 = this.destination) === null || t4 === void 0 ? void 0 : t4.error) === null || r2 === void 0 || r2.call(t4, e4);
        }, t3.prototype.complete = function() {
          var e4, t4;
          (t4 = (e4 = this.destination) === null || e4 === void 0 ? void 0 : e4.complete) === null || t4 === void 0 || t4.call(e4);
        }, t3.prototype._subscribe = function(e4) {
          var t4, r2;
          return (r2 = (t4 = this.source) === null || t4 === void 0 ? void 0 : t4.subscribe(e4)) !== null && r2 !== void 0 ? r2 : j;
        }, t3;
      }(de);
      function le(e3) {
        e3 === void 0 && (e3 = {});
        var t3 = e3.connector, r2 = t3 === void 0 ? function() {
          return new de();
        } : t3, n2 = e3.resetOnError, i2 = n2 === void 0 || n2, o2 = e3.resetOnComplete, s2 = o2 === void 0 || o2, u2 = e3.resetOnRefCountZero, a2 = u2 === void 0 || u2;
        return function(e4) {
          var t4, n3, o3, u3 = 0, c2 = false, p2 = false, d2 = function() {
            n3 == null || n3.unsubscribe(), n3 = void 0;
          }, y2 = function() {
            d2(), t4 = o3 = void 0, c2 = p2 = false;
          }, l2 = function() {
            var e5 = t4;
            y2(), e5 == null || e5.unsubscribe();
          };
          return b(function(e5, f2) {
            u3++, p2 || c2 || d2();
            var h2 = o3 = o3 != null ? o3 : r2();
            f2.add(function() {
              --u3 != 0 || p2 || c2 || (n3 = fe(l2, a2));
            }), h2.subscribe(f2), !t4 && u3 > 0 && (t4 = new H({next: function(e6) {
              return h2.next(e6);
            }, error: function(e6) {
              p2 = true, d2(), n3 = fe(y2, i2, e6), h2.error(e6);
            }, complete: function() {
              c2 = true, d2(), n3 = fe(y2, s2), h2.complete();
            }}), ae(e5).subscribe(t4));
          })(e4);
        };
      }
      function fe(e3, t3) {
        for (var r2 = [], n2 = 2; n2 < arguments.length; n2++)
          r2[n2 - 2] = arguments[n2];
        if (t3 !== true) {
          if (t3 !== false) {
            var i2 = new H({next: function() {
              i2.unsubscribe(), e3();
            }});
            return ae(t3.apply(void 0, S([], x(r2)))).subscribe(i2);
          }
        } else
          e3();
      }
      function he(e3, t3, r2) {
        return (t3 = u(t3)) in e3 ? Object.defineProperty(e3, t3, {value: r2, enumerable: true, configurable: true, writable: true}) : e3[t3] = r2, e3;
      }
      var ge = function() {
        function e3() {
          s(this, e3);
        }
        return c(e3, [{key: "accountClosure", value: function() {
          var e4 = {method: "account_closure", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_closure: {required: 1, type: "numeric"}, passthrough: {}, reason: {required: 1, type: "string"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "accountSecurity", value: function() {
          var e4 = {method: "account_security", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_security: {required: 1, type: "numeric"}, otp: {type: "string"}, passthrough: {}, req_id: {type: "numeric"}, totp_action: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "accountStatistics", value: function() {
          var e4 = {method: "account_statistics", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_statistics: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "activeSymbols", value: function() {
          var e4 = {method: "active_symbols", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {active_symbols: {required: 1, type: "string"}, landing_company: {type: "string"}, passthrough: {}, product_type: {type: "string"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "affiliateAccountAdd", value: function() {
          var e4 = {method: "affiliate_account_add", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {address_city: {required: 1, type: "string"}, address_line_1: {required: 1, type: "string"}, address_line_2: {type: "string"}, address_postcode: {required: 1, type: "string"}, address_state: {required: 1, type: "string"}, affiliate_account_add: {required: 1, type: "numeric"}, country: {required: 1, type: "string"}, first_name: {required: 1, type: "string"}, last_name: {required: 1, type: "string"}, non_pep_declaration: {required: 1, type: "numeric"}, passthrough: {}, password: {required: 1, type: "string"}, phone: {required: 1, type: "string"}, req_id: {type: "numeric"}, tnc_accepted: {required: 1, type: "numeric"}, username: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "apiToken", value: function() {
          var e4 = {method: "api_token", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {api_token: {required: 1, type: "numeric"}, delete_token: {type: "string"}, new_token: {type: "string"}, new_token_scopes: {}, passthrough: {}, req_id: {type: "numeric"}, valid_for_current_ip_only: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "appDelete", value: function() {
          var e4 = {method: "app_delete", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {app_delete: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "appGet", value: function() {
          var e4 = {method: "app_get", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {app_get: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "appList", value: function() {
          var e4 = {method: "app_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {app_list: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "appMarkupDetails", value: function() {
          var e4 = {method: "app_markup_details", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {app_id: {type: "numeric"}, app_markup_details: {required: 1, type: "numeric"}, client_loginid: {type: "string"}, date_from: {required: 1, type: "string"}, date_to: {required: 1, type: "string"}, description: {type: "numeric"}, limit: {type: "numeric"}, offset: {type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, sort: {type: "string"}, sort_fields: {}}};
          return this.processRequest(e4);
        }}, {key: "appRegister", value: function() {
          var e4 = {method: "app_register", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {app_markup_percentage: {type: "numeric"}, app_register: {required: 1, type: "numeric"}, appstore: {type: "string"}, github: {type: "string"}, googleplay: {type: "string"}, homepage: {type: "string"}, name: {required: 1, type: "string"}, passthrough: {}, redirect_uri: {type: "string"}, req_id: {type: "numeric"}, scopes: {required: 1}, verification_uri: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "appUpdate", value: function() {
          var e4 = {method: "app_update", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {app_markup_percentage: {type: "numeric"}, app_update: {required: 1, type: "numeric"}, appstore: {type: "string"}, github: {type: "string"}, googleplay: {type: "string"}, homepage: {type: "string"}, name: {required: 1, type: "string"}, passthrough: {}, redirect_uri: {type: "string"}, req_id: {type: "numeric"}, scopes: {required: 1}, verification_uri: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "assetIndex", value: function() {
          var e4 = {method: "asset_index", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {asset_index: {required: 1, type: "numeric"}, landing_company: {type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "authorize", value: function() {
          var e4 = {method: "authorize", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {add_to_login_history: {type: "numeric"}, authorize: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "balance", value: function() {
          var e4 = {method: "balance", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account: {type: "string"}, balance: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "buy", value: function() {
          var e4 = {method: "buy", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {buy: {required: 1, type: "string"}, parameters: {amount: {type: "numeric"}, app_markup_percentage: {type: "numeric"}, barrier: {type: "string"}, barrier2: {type: "string"}, barrier_range: {type: "string"}, basis: {type: "string"}, cancellation: {type: "string"}, contract_type: {required: 1, type: "string"}, currency: {required: 1, type: "string"}, date_expiry: {type: "numeric"}, date_start: {type: "numeric"}, duration: {type: "numeric"}, duration_unit: {type: "string"}, limit_order: {stop_loss: {type: "numeric"}, take_profit: {type: "numeric"}}, multiplier: {type: "numeric"}, product_type: {type: "string"}, selected_tick: {type: "numeric"}, symbol: {required: 1, type: "string"}, trading_period_start: {type: "numeric"}}, passthrough: {}, price: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "buyContractForMultipleAccounts", value: function() {
          var e4 = {method: "buy_contract_for_multiple_accounts", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {buy_contract_for_multiple_accounts: {required: 1, type: "string"}, parameters: {amount: {type: "numeric"}, app_markup_percentage: {type: "numeric"}, barrier: {type: "string"}, barrier2: {type: "string"}, basis: {type: "string"}, contract_type: {required: 1, type: "string"}, currency: {required: 1, type: "string"}, date_expiry: {type: "numeric"}, date_start: {type: "numeric"}, duration: {type: "numeric"}, duration_unit: {type: "string"}, multiplier: {type: "numeric"}, selected_tick: {type: "numeric"}, symbol: {required: 1, type: "string"}}, passthrough: {}, price: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, tokens: {required: 1}}};
          return this.processRequest(e4);
        }}, {key: "cancel", value: function() {
          var e4 = {method: "cancel", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {cancel: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "cashier", value: function() {
          var e4 = {method: "cashier", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {address: {type: "string"}, amount: {type: "numeric"}, cashier: {required: 1, type: "string"}, dry_run: {type: "numeric"}, passthrough: {}, provider: {type: "string"}, req_id: {type: "numeric"}, type: {type: "string"}, verification_code: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "cashierPayments", value: function() {
          var e4 = {method: "cashier_payments", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {cashier_payments: {required: 1, type: "numeric"}, passthrough: {}, provider: {type: "string"}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}, transaction_type: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "cashierWithdrawalCancel", value: function() {
          var e4 = {method: "cashier_withdrawal_cancel", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {cashier_withdrawal_cancel: {required: 1, type: "numeric"}, id: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "changeEmail", value: function() {
          var e4 = {method: "change_email", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {change_email: {required: 1, type: "string"}, new_email: {required: 1, type: "string"}, new_password: {type: "string"}, passthrough: {}, req_id: {type: "numeric"}, verification_code: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "changePassword", value: function() {
          var e4 = {method: "change_password", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {change_password: {required: 1, type: "numeric"}, new_password: {required: 1, type: "string"}, old_password: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "contractUpdate", value: function() {
          var e4 = {method: "contract_update", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contract_id: {required: 1, type: "numeric"}, contract_update: {required: 1, type: "numeric"}, limit_order: {stop_loss: {}, take_profit: {}}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "contractUpdateHistory", value: function() {
          var e4 = {method: "contract_update_history", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contract_id: {required: 1, type: "numeric"}, contract_update_history: {required: 1, type: "numeric"}, limit: {type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "contractsFor", value: function() {
          var e4 = {method: "contracts_for", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contracts_for: {required: 1, type: "string"}, currency: {type: "string"}, landing_company: {type: "string"}, passthrough: {}, product_type: {type: "string"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "copyStart", value: function() {
          var e4 = {method: "copy_start", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {assets: {}, copy_start: {required: 1, type: "string"}, max_trade_stake: {type: "numeric"}, min_trade_stake: {type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, trade_types: {}}};
          return this.processRequest(e4);
        }}, {key: "copyStop", value: function() {
          var e4 = {method: "copy_stop", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {copy_stop: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "copytradingList", value: function() {
          var e4 = {method: "copytrading_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {copytrading_list: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "copytradingStatistics", value: function() {
          var e4 = {method: "copytrading_statistics", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {copytrading_statistics: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, trader_id: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "cryptoConfig", value: function() {
          var e4 = {method: "crypto_config", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {crypto_config: {required: 1, type: "numeric"}, currency_code: {type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "documentUpload", value: function() {
          var e4 = {method: "document_upload", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {document_format: {required: 1, type: "string"}, document_id: {type: "string"}, document_issuing_country: {type: "string"}, document_type: {required: 1, type: "string"}, document_upload: {required: 1, type: "numeric"}, expected_checksum: {required: 1, type: "string"}, expiration_date: {type: "string"}, file_size: {required: 1, type: "numeric"}, lifetime_valid: {type: "numeric"}, page_type: {type: "string"}, passthrough: {}, proof_of_ownership: {details: {required: 1}, id: {required: 1, type: "numeric"}}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "economicCalendar", value: function() {
          var e4 = {method: "economic_calendar", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {currency: {type: "string"}, economic_calendar: {required: 1, type: "numeric"}, end_date: {type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, start_date: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "exchangeRates", value: function() {
          var e4 = {method: "exchange_rates", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {base_currency: {required: 1, type: "string"}, exchange_rates: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}, target_currency: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "forget", value: function() {
          var e4 = {method: "forget", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {forget: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "forgetAll", value: function() {
          var e4 = {method: "forget_all", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {forget_all: {required: 1}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "getAccountStatus", value: function() {
          var e4 = {method: "get_account_status", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {get_account_status: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "getAccountTypes", value: function() {
          var e4 = {method: "get_account_types", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {get_account_types: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "getAvailableAccountsToTransfer", value: function() {
          var e4 = {method: "get_available_accounts_to_transfer", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {get_available_accounts_to_transfer: {required: 1, type: "numeric"}, loginid: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "getFinancialAssessment", value: function() {
          var e4 = {method: "get_financial_assessment", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {get_financial_assessment: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "getLimits", value: function() {
          var e4 = {method: "get_limits", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {get_limits: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "getSelfExclusion", value: function() {
          var e4 = {method: "get_self_exclusion", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {get_self_exclusion: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "getSettings", value: function() {
          var e4 = {method: "get_settings", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {get_settings: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "identityVerificationDocumentAdd", value: function() {
          var e4 = {method: "identity_verification_document_add", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {document_number: {required: 1, type: "string"}, document_type: {required: 1, type: "string"}, identity_verification_document_add: {required: 1, type: "numeric"}, issuing_country: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "landingCompany", value: function() {
          var e4 = {method: "landing_company", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {landing_company: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "landingCompanyDetails", value: function() {
          var e4 = {method: "landing_company_details", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {landing_company_details: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "linkWallet", value: function() {
          var e4 = {method: "link_wallet", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {client_id: {required: 1, type: "string"}, link_wallet: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, wallet_id: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "loginHistory", value: function() {
          var e4 = {method: "login_history", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {limit: {type: "numeric"}, login_history: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "logout", value: function() {
          var e4 = {method: "logout", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {logout: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "mt5Deposit", value: function() {
          var e4 = {method: "mt5_deposit", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {type: "numeric"}, from_binary: {type: "string"}, mt5_deposit: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, to_mt5: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "mt5GetSettings", value: function() {
          var e4 = {method: "mt5_get_settings", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {login: {required: 1, type: "string"}, mt5_get_settings: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "mt5LoginList", value: function() {
          var e4 = {method: "mt5_login_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {mt5_login_list: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "mt5NewAccount", value: function() {
          var e4 = {method: "mt5_new_account", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_type: {required: 1, type: "string"}, address: {type: "string"}, city: {type: "string"}, company: {type: "string"}, country: {type: "string"}, currency: {type: "string"}, dry_run: {type: "numeric"}, email: {required: 1, type: "string"}, investPassword: {type: "string"}, leverage: {required: 1, type: "numeric"}, mainPassword: {required: 1, type: "string"}, mt5_account_category: {type: "string"}, mt5_account_type: {type: "string"}, mt5_new_account: {required: 1, type: "numeric"}, name: {required: 1, type: "string"}, passthrough: {}, phone: {type: "string"}, phonePassword: {type: "string"}, req_id: {type: "numeric"}, server: {}, state: {type: "string"}, zipCode: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "mt5PasswordChange", value: function() {
          var e4 = {method: "mt5_password_change", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {login: {required: 1, type: "string"}, mt5_password_change: {required: 1, type: "numeric"}, new_password: {required: 1, type: "string"}, old_password: {required: 1, type: "string"}, passthrough: {}, password_type: {type: "string"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "mt5PasswordCheck", value: function() {
          var e4 = {method: "mt5_password_check", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {login: {required: 1, type: "string"}, mt5_password_check: {required: 1, type: "numeric"}, passthrough: {}, password: {required: 1, type: "string"}, password_type: {type: "string"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "mt5PasswordReset", value: function() {
          var e4 = {method: "mt5_password_reset", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {login: {required: 1, type: "string"}, mt5_password_reset: {required: 1, type: "numeric"}, new_password: {required: 1, type: "string"}, passthrough: {}, password_type: {type: "string"}, req_id: {type: "numeric"}, verification_code: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "mt5Withdrawal", value: function() {
          var e4 = {method: "mt5_withdrawal", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {required: 1, type: "numeric"}, from_mt5: {required: 1, type: "string"}, mt5_withdrawal: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, to_binary: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "newAccountMaltainvest", value: function() {
          var e4 = {method: "new_account_maltainvest", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {accept_risk: {required: 1, type: "numeric"}, account_opening_reason: {type: "string"}, account_turnover: {type: "string"}, address_city: {required: 1, type: "string"}, address_line_1: {required: 1, type: "string"}, address_line_2: {type: "string"}, address_postcode: {type: "string"}, address_state: {type: "string"}, affiliate_token: {type: "string"}, binary_options_trading_experience: {type: "string"}, binary_options_trading_frequency: {type: "string"}, cfd_trading_experience: {type: "string"}, cfd_trading_frequency: {type: "string"}, citizen: {type: "string"}, client_type: {type: "string"}, currency: {type: "string"}, date_of_birth: {required: 1, type: "string"}, education_level: {required: 1, type: "string"}, employment_industry: {required: 1, type: "string"}, employment_status: {type: "string"}, estimated_worth: {required: 1, type: "string"}, first_name: {required: 1, type: "string"}, forex_trading_experience: {type: "string"}, forex_trading_frequency: {type: "string"}, income_source: {required: 1, type: "string"}, last_name: {required: 1, type: "string"}, net_income: {required: 1, type: "string"}, new_account_maltainvest: {required: 1, type: "numeric"}, non_pep_declaration: {type: "numeric"}, occupation: {required: 1, type: "string"}, other_instruments_trading_experience: {type: "string"}, other_instruments_trading_frequency: {type: "string"}, passthrough: {}, phone: {}, place_of_birth: {type: "string"}, req_id: {type: "numeric"}, residence: {required: 1, type: "string"}, salutation: {required: 1, type: "string"}, secret_answer: {type: "string"}, secret_question: {type: "string"}, source_of_wealth: {type: "string"}, tax_identification_number: {required: 1, type: "string"}, tax_residence: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "newAccountReal", value: function() {
          var e4 = {method: "new_account_real", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_opening_reason: {type: "string"}, account_turnover: {type: "string"}, address_city: {type: "string"}, address_line_1: {type: "string"}, address_line_2: {type: "string"}, address_postcode: {type: "string"}, address_state: {type: "string"}, affiliate_token: {type: "string"}, citizen: {}, client_type: {type: "string"}, currency: {type: "string"}, date_of_birth: {type: "string"}, first_name: {type: "string"}, last_name: {type: "string"}, new_account_real: {required: 1, type: "numeric"}, non_pep_declaration: {type: "numeric"}, passthrough: {}, phone: {}, place_of_birth: {type: "string"}, req_id: {type: "numeric"}, residence: {type: "string"}, salutation: {type: "string"}, secret_answer: {type: "string"}, secret_question: {type: "string"}, tax_identification_number: {type: "string"}, tax_residence: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "newAccountVirtual", value: function() {
          var e4 = {method: "new_account_virtual", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {affiliate_token: {type: "string"}, client_password: {type: "string"}, date_first_contact: {type: "string"}, email_consent: {type: "numeric"}, gclid_url: {type: "string"}, new_account_virtual: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, residence: {type: "string"}, signup_device: {type: "string"}, type: {type: "string"}, utm_ad_id: {}, utm_adgroup_id: {}, utm_adrollclk_id: {}, utm_campaign: {}, utm_campaign_id: {}, utm_content: {}, utm_fbcl_id: {}, utm_gl_client_id: {}, utm_medium: {}, utm_msclk_id: {}, utm_source: {}, utm_term: {}, verification_code: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "newAccountWallet", value: function() {
          var e4 = {method: "new_account_wallet", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {address_city: {type: "string"}, address_line_1: {type: "string"}, address_line_2: {type: "string"}, address_postcode: {type: "string"}, address_state: {type: "string"}, currency: {required: 1, type: "string"}, date_of_birth: {type: "string"}, first_name: {type: "string"}, last_name: {type: "string"}, new_account_wallet: {required: 1, type: "numeric"}, non_pep_declaration: {type: "numeric"}, passthrough: {}, payment_method: {required: 1, type: "string"}, phone: {type: "string"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "notificationEvent", value: function() {
          var e4 = {method: "notification_event", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {args: {documents: {}}, category: {required: 1, type: "string"}, event: {required: 1, type: "string"}, notification_event: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "oauthApps", value: function() {
          var e4 = {method: "oauth_apps", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {oauth_apps: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertCreate", value: function() {
          var e4 = {method: "p2p_advert_create", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {required: 1, type: "numeric"}, contact_info: {type: "string"}, description: {type: "string"}, local_currency: {type: "string"}, max_order_amount: {required: 1, type: "numeric"}, min_order_amount: {required: 1, type: "numeric"}, p2p_advert_create: {required: 1, type: "numeric"}, passthrough: {}, payment_info: {type: "string"}, payment_method: {type: "string"}, payment_method_ids: {}, payment_method_names: {}, rate: {required: 1, type: "numeric"}, rate_type: {type: "string"}, req_id: {type: "numeric"}, type: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertInfo", value: function() {
          var e4 = {method: "p2p_advert_info", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {id: {type: "string"}, p2p_advert_info: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}, use_client_limits: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertList", value: function() {
          var e4 = {method: "p2p_advert_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {advertiser_id: {type: "string"}, advertiser_name: {type: "string"}, amount: {type: "numeric"}, counterparty_type: {type: "string"}, favourites_only: {type: "numeric"}, limit: {type: "numeric"}, local_currency: {type: "string"}, offset: {type: "numeric"}, p2p_advert_list: {required: 1, type: "numeric"}, passthrough: {}, payment_method: {}, req_id: {type: "numeric"}, sort_by: {type: "string"}, use_client_limits: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertUpdate", value: function() {
          var e4 = {method: "p2p_advert_update", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contact_info: {type: "string"}, delete: {type: "numeric"}, description: {type: "string"}, id: {required: 1, type: "string"}, is_active: {type: "numeric"}, local_currency: {type: "string"}, max_order_amount: {type: "numeric"}, min_order_amount: {type: "numeric"}, p2p_advert_update: {required: 1, type: "numeric"}, passthrough: {}, payment_info: {type: "string"}, payment_method_ids: {}, payment_method_names: {}, rate: {type: "numeric"}, rate_type: {type: "string"}, remaining_amount: {type: "numeric"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertiserAdverts", value: function() {
          var e4 = {method: "p2p_advertiser_adverts", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {limit: {type: "numeric"}, offset: {type: "numeric"}, p2p_advertiser_adverts: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertiserCreate", value: function() {
          var e4 = {method: "p2p_advertiser_create", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contact_info: {type: "string"}, default_advert_description: {type: "string"}, name: {required: 1, type: "string"}, p2p_advertiser_create: {required: 1, type: "numeric"}, passthrough: {}, payment_info: {type: "string"}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertiserInfo", value: function() {
          var e4 = {method: "p2p_advertiser_info", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {id: {type: "string"}, p2p_advertiser_info: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertiserPaymentMethods", value: function() {
          var e4 = {method: "p2p_advertiser_payment_methods", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {create: {}, delete: {}, p2p_advertiser_payment_methods: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, update: {}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertiserRelations", value: function() {
          var e4 = {method: "p2p_advertiser_relations", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {add_blocked: {}, add_favourites: {}, p2p_advertiser_relations: {required: 1, type: "numeric"}, passthrough: {}, remove_blocked: {}, remove_favourites: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pAdvertiserUpdate", value: function() {
          var e4 = {method: "p2p_advertiser_update", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contact_info: {type: "string"}, default_advert_description: {type: "string"}, is_listed: {type: "numeric"}, p2p_advertiser_update: {required: 1, type: "numeric"}, passthrough: {}, payment_info: {type: "string"}, req_id: {type: "numeric"}, show_name: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pChatCreate", value: function() {
          var e4 = {method: "p2p_chat_create", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {order_id: {required: 1, type: "string"}, p2p_chat_create: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pOrderCancel", value: function() {
          var e4 = {method: "p2p_order_cancel", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {id: {required: 1, type: "string"}, p2p_order_cancel: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pOrderConfirm", value: function() {
          var e4 = {method: "p2p_order_confirm", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {id: {required: 1, type: "string"}, p2p_order_confirm: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pOrderCreate", value: function() {
          var e4 = {method: "p2p_order_create", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {advert_id: {required: 1, type: "string"}, amount: {required: 1, type: "numeric"}, contact_info: {type: "string"}, p2p_order_create: {required: 1, type: "numeric"}, passthrough: {}, payment_info: {type: "string"}, payment_method_ids: {}, rate: {type: "numeric"}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pOrderDispute", value: function() {
          var e4 = {method: "p2p_order_dispute", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {dispute_reason: {required: 1, type: "string"}, id: {required: 1, type: "string"}, p2p_order_dispute: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pOrderInfo", value: function() {
          var e4 = {method: "p2p_order_info", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {id: {required: 1, type: "string"}, p2p_order_info: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pOrderList", value: function() {
          var e4 = {method: "p2p_order_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {active: {type: "numeric"}, advert_id: {type: "string"}, limit: {type: "numeric"}, offset: {type: "numeric"}, p2p_order_list: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pOrderReview", value: function() {
          var e4 = {method: "p2p_order_review", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {order_id: {required: 1, type: "string"}, p2p_order_review: {required: 1, type: "numeric"}, passthrough: {}, rating: {required: 1, type: "numeric"}, recommended: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pPaymentMethods", value: function() {
          var e4 = {method: "p2p_payment_methods", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {p2p_payment_methods: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "p2pPing", value: function() {
          var e4 = {method: "p2p_ping", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {p2p_ping: {required: 1, type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "paymentMethods", value: function() {
          var e4 = {method: "payment_methods", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {country: {type: "string"}, passthrough: {}, payment_methods: {required: 1, type: "numeric"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "paymentagentCreate", value: function() {
          var e4 = {method: "paymentagent_create", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {affiliate_id: {type: "string"}, code_of_conduct_approval: {required: 1, type: "numeric"}, commission_deposit: {required: 1, type: "numeric"}, commission_withdrawal: {required: 1, type: "numeric"}, email: {required: 1, type: "string"}, information: {required: 1, type: "string"}, passthrough: {}, payment_agent_name: {required: 1, type: "string"}, paymentagent_create: {required: 1, type: "numeric"}, phone_numbers: {}, req_id: {type: "numeric"}, supported_payment_methods: {required: 1}, urls: {required: 1}}};
          return this.processRequest(e4);
        }}, {key: "paymentagentDetails", value: function() {
          var e4 = {method: "paymentagent_details", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, paymentagent_details: {required: 1, type: "numeric"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "paymentagentList", value: function() {
          var e4 = {method: "paymentagent_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {currency: {type: "string"}, passthrough: {}, paymentagent_list: {required: 1, type: "string"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "paymentagentTransfer", value: function() {
          var e4 = {method: "paymentagent_transfer", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {required: 1, type: "numeric"}, currency: {required: 1, type: "string"}, description: {type: "string"}, dry_run: {type: "numeric"}, passthrough: {}, paymentagent_transfer: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, transfer_to: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "paymentagentWithdraw", value: function() {
          var e4 = {method: "paymentagent_withdraw", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {required: 1, type: "numeric"}, currency: {required: 1, type: "string"}, description: {type: "string"}, dry_run: {type: "numeric"}, passthrough: {}, paymentagent_loginid: {required: 1, type: "string"}, paymentagent_withdraw: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, verification_code: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "payoutCurrencies", value: function() {
          var e4 = {method: "payout_currencies", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, payout_currencies: {required: 1, type: "numeric"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "ping", value: function() {
          var e4 = {method: "ping", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, ping: {required: 1, type: "numeric"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "portfolio", value: function() {
          var e4 = {method: "portfolio", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contract_type: {}, passthrough: {}, portfolio: {required: 1, type: "numeric"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "profitTable", value: function() {
          var e4 = {method: "profit_table", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contract_type: {}, date_from: {type: "string"}, date_to: {type: "string"}, description: {type: "numeric"}, limit: {type: "numeric"}, offset: {type: "numeric"}, passthrough: {}, profit_table: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, sort: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "proposal", value: function() {
          var e4 = {method: "proposal", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {type: "numeric"}, barrier: {type: "string"}, barrier2: {type: "string"}, barrier_range: {type: "string"}, basis: {type: "string"}, cancellation: {type: "string"}, contract_type: {required: 1, type: "string"}, currency: {required: 1, type: "string"}, date_expiry: {type: "numeric"}, date_start: {type: "numeric"}, duration: {type: "numeric"}, duration_unit: {type: "string"}, limit_order: {stop_loss: {type: "numeric"}, take_profit: {type: "numeric"}}, multiplier: {type: "numeric"}, passthrough: {}, product_type: {type: "string"}, proposal: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, selected_tick: {type: "numeric"}, subscribe: {type: "numeric"}, symbol: {required: 1, type: "string"}, trading_period_start: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "proposalOpenContract", value: function() {
          var e4 = {method: "proposal_open_contract", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {contract_id: {type: "numeric"}, passthrough: {}, proposal_open_contract: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "realityCheck", value: function() {
          var e4 = {method: "reality_check", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, reality_check: {required: 1, type: "numeric"}, req_id: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "requestReport", value: function() {
          var e4 = {method: "request_report", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {date_from: {required: 1, type: "numeric"}, date_to: {required: 1, type: "numeric"}, passthrough: {}, report_type: {required: 1, type: "string"}, req_id: {type: "numeric"}, request_report: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "resetPassword", value: function() {
          var e4 = {method: "reset_password", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {date_of_birth: {type: "string"}, new_password: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}, reset_password: {required: 1, type: "numeric"}, verification_code: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "residenceList", value: function() {
          var e4 = {method: "residence_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, residence_list: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "revokeOauthApp", value: function() {
          var e4 = {method: "revoke_oauth_app", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, revoke_oauth_app: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "sell", value: function() {
          var e4 = {method: "sell", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, price: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, sell: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "sellContractForMultipleAccounts", value: function() {
          var e4 = {method: "sell_contract_for_multiple_accounts", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, price: {required: 1, type: "numeric"}, req_id: {type: "numeric"}, sell_contract_for_multiple_accounts: {required: 1, type: "numeric"}, shortcode: {required: 1, type: "string"}, tokens: {required: 1}}};
          return this.processRequest(e4);
        }}, {key: "sellExpired", value: function() {
          var e4 = {method: "sell_expired", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, sell_expired: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "serviceToken", value: function() {
          var e4 = {method: "service_token", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {country: {type: "string"}, passthrough: {}, referrer: {type: "string"}, req_id: {type: "numeric"}, server: {type: "string"}, service: {required: 1}, service_token: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "setAccountCurrency", value: function() {
          var e4 = {method: "set_account_currency", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, set_account_currency: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "setFinancialAssessment", value: function() {
          var e4 = {method: "set_financial_assessment", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_turnover: {type: "string"}, binary_options_trading_experience: {type: "string"}, binary_options_trading_frequency: {type: "string"}, cfd_trading_experience: {type: "string"}, cfd_trading_frequency: {type: "string"}, education_level: {required: 1, type: "string"}, employment_industry: {required: 1, type: "string"}, employment_status: {type: "string"}, estimated_worth: {required: 1, type: "string"}, forex_trading_experience: {type: "string"}, forex_trading_frequency: {type: "string"}, income_source: {required: 1, type: "string"}, net_income: {required: 1, type: "string"}, occupation: {required: 1, type: "string"}, other_instruments_trading_experience: {type: "string"}, other_instruments_trading_frequency: {type: "string"}, passthrough: {}, req_id: {type: "numeric"}, set_financial_assessment: {required: 1, type: "numeric"}, source_of_wealth: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "setSelfExclusion", value: function() {
          var e4 = {method: "set_self_exclusion", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {exclude_until: {}, max_30day_deposit: {}, max_30day_losses: {}, max_30day_turnover: {}, max_7day_deposit: {}, max_7day_losses: {}, max_7day_turnover: {}, max_balance: {}, max_deposit: {}, max_losses: {}, max_open_bets: {}, max_turnover: {}, passthrough: {}, req_id: {type: "numeric"}, session_duration_limit: {}, set_self_exclusion: {required: 1, type: "numeric"}, timeout_until: {}}};
          return this.processRequest(e4);
        }}, {key: "setSettings", value: function() {
          var e4 = {method: "set_settings", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_opening_reason: {type: "string"}, address_city: {type: "string"}, address_line_1: {type: "string"}, address_line_2: {}, address_postcode: {type: "string"}, address_state: {type: "string"}, allow_copiers: {type: "numeric"}, citizen: {}, date_of_birth: {type: "string"}, email_consent: {type: "numeric"}, feature_flag: {wallet: {type: "numeric"}}, first_name: {type: "string"}, last_name: {type: "string"}, non_pep_declaration: {type: "numeric"}, passthrough: {}, phone: {}, place_of_birth: {type: "string"}, preferred_language: {}, req_id: {type: "numeric"}, request_professional_status: {type: "numeric"}, residence: {}, salutation: {type: "string"}, secret_answer: {type: "string"}, secret_question: {type: "string"}, set_settings: {required: 1, type: "numeric"}, tax_identification_number: {type: "string"}, tax_residence: {type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "statement", value: function() {
          var e4 = {method: "statement", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {action_type: {type: "string"}, date_from: {type: "numeric"}, date_to: {type: "numeric"}, description: {type: "numeric"}, limit: {type: "numeric"}, offset: {type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, statement: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "statesList", value: function() {
          var e4 = {method: "states_list", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, states_list: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "ticks", value: function() {
          var e4 = {method: "ticks", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}, ticks: {required: 1}}};
          return this.processRequest(e4);
        }}, {key: "ticksHistory", value: function() {
          var e4 = {method: "ticks_history", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {adjust_start_time: {type: "numeric"}, count: {type: "numeric"}, end: {required: 1, type: "string"}, granularity: {type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, start: {type: "numeric"}, style: {type: "string"}, subscribe: {type: "numeric"}, ticks_history: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "time", value: function() {
          var e4 = {method: "time", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, time: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tncApproval", value: function() {
          var e4 = {method: "tnc_approval", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {affiliate_coc_agreement: {type: "numeric"}, passthrough: {}, req_id: {type: "numeric"}, tnc_approval: {required: 1, type: "numeric"}, ukgc_funds_protection: {type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "topupVirtual", value: function() {
          var e4 = {method: "topup_virtual", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, topup_virtual: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingDurations", value: function() {
          var e4 = {method: "trading_durations", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {landing_company: {type: "string"}, passthrough: {}, req_id: {type: "numeric"}, trading_durations: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformAccounts", value: function() {
          var e4 = {method: "trading_platform_accounts", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, trading_platform_accounts: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformDeposit", value: function() {
          var e4 = {method: "trading_platform_deposit", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {type: "numeric"}, from_account: {type: "string"}, passthrough: {}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, to_account: {required: 1, type: "string"}, trading_platform_deposit: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformInvestorPasswordChange", value: function() {
          var e4 = {method: "trading_platform_investor_password_change", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_id: {required: 1, type: "string"}, new_password: {required: 1, type: "string"}, old_password: {required: 1, type: "string"}, passthrough: {}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, trading_platform_investor_password_change: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformInvestorPasswordReset", value: function() {
          var e4 = {method: "trading_platform_investor_password_reset", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_id: {required: 1, type: "string"}, new_password: {required: 1, type: "string"}, passthrough: {}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, trading_platform_investor_password_reset: {required: 1, type: "numeric"}, verification_code: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformNewAccount", value: function() {
          var e4 = {method: "trading_platform_new_account", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_type: {required: 1, type: "string"}, currency: {type: "string"}, dry_run: {type: "numeric"}, market_type: {required: 1, type: "string"}, passthrough: {}, password: {required: 1, type: "string"}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, sub_account_type: {type: "string"}, trading_platform_new_account: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformPasswordChange", value: function() {
          var e4 = {method: "trading_platform_password_change", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {new_password: {required: 1, type: "string"}, old_password: {type: "string"}, passthrough: {}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, trading_platform_password_change: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformPasswordReset", value: function() {
          var e4 = {method: "trading_platform_password_reset", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {new_password: {required: 1, type: "string"}, passthrough: {}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, trading_platform_password_reset: {required: 1, type: "numeric"}, verification_code: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformProductListing", value: function() {
          var e4 = {method: "trading_platform_product_listing", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {app_id: {}, country_code: {required: 1, type: "string"}, passthrough: {}, req_id: {type: "numeric"}, trading_platform_product_listing: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingPlatformWithdrawal", value: function() {
          var e4 = {method: "trading_platform_withdrawal", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {amount: {required: 1, type: "numeric"}, from_account: {required: 1, type: "string"}, passthrough: {}, platform: {required: 1, type: "string"}, req_id: {type: "numeric"}, to_account: {required: 1, type: "string"}, trading_platform_withdrawal: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingServers", value: function() {
          var e4 = {method: "trading_servers", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_type: {type: "string"}, environment: {type: "string"}, market_type: {type: "string"}, passthrough: {}, platform: {type: "string"}, req_id: {type: "numeric"}, trading_servers: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "tradingTimes", value: function() {
          var e4 = {method: "trading_times", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, trading_times: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "transaction", value: function() {
          var e4 = {method: "transaction", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, subscribe: {required: 1, type: "numeric"}, transaction: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "transferBetweenAccounts", value: function() {
          var e4 = {method: "transfer_between_accounts", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {account_from: {type: "string"}, account_to: {type: "string"}, accounts: {type: "string"}, amount: {type: "numeric"}, currency: {type: "string"}, passthrough: {}, req_id: {type: "numeric"}, transfer_between_accounts: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "verifyEmail", value: function() {
          var e4 = {method: "verify_email", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, type: {required: 1, type: "string"}, url_parameters: {affiliate_token: {type: "string"}, date_first_contact: {type: "string"}, gclid_url: {type: "string"}, pa_amount: {type: "numeric"}, pa_currency: {type: "string"}, pa_loginid: {type: "string"}, pa_remarks: {type: "string"}, redirect_to: {type: "numeric"}, signup_device: {type: "string"}, utm_ad_id: {}, utm_adgroup_id: {}, utm_adrollclk_id: {}, utm_campaign: {}, utm_campaign_id: {}, utm_content: {}, utm_fbcl_id: {}, utm_gl_client_id: {}, utm_medium: {}, utm_msclk_id: {}, utm_source: {}, utm_term: {}}, verify_email: {required: 1, type: "string"}}};
          return this.processRequest(e4);
        }}, {key: "websiteStatus", value: function() {
          var e4 = {method: "website_status", needsMethodArg: "1", args: arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, config: {passthrough: {}, req_id: {type: "numeric"}, subscribe: {type: "numeric"}, website_status: {required: 1, type: "numeric"}}};
          return this.processRequest(e4);
        }}, {key: "processRequest", value: function(e4) {
          var r2 = e4.config, n2 = function(e5) {
            var t3 = e5.config, r3 = e5.args, n3 = e5.method, i3 = e5.needsMethodArg, o2 = r3;
            return i3 && !_e(o2) && (o2 = he({}, n3, o2)), o2[n3] = o2[n3] || 1, Object.keys(o2).forEach(function(e6) {
              var r4 = o2[e6];
              e6 in t3 && (t3[e6].type === "string" ? o2[e6] = "".concat(r4) : t3[e6].type === "numeric" ? o2[e6] = parseFloat(r4) : t3[e6].type === "boolean" && (o2[e6] = +r4));
            }), o2;
          }(e4), i2 = function(e5) {
            var r3 = e5.config, n3 = e5.args;
            if (!_e(n3))
              return "Requires an object but a ".concat(t2(n3), " is passed.");
            var i3 = [], o2 = Object.keys(r3).filter(function(e6) {
              return (r3[e6] || {}).required && !(e6 in n3);
            });
            return o2.length && i3.push("Required parameters missing: ".concat(o2.join(", "))), Object.keys(n3).forEach(function(e6) {
              var o3 = n3[e6];
              if (e6 in r3) {
                var s2 = r3[e6].type;
                s2 && (me[s2](o3) || i3.push("".concat(s2, " value expected but found ").concat(t2(o3), ": ").concat(e6)));
              }
            }), i3.length ? i3.join(" - ") : "";
          }({config: r2, args: n2});
          return i2 ? Promise.reject(i2) : this.send(n2);
        }}]), e3;
      }(), _e = function(e3) {
        return e3 instanceof Object;
      }, me = {object: _e, numeric: function(e3) {
        return !Number.isNaN(1 * e3);
      }, string: function(e3) {
        return typeof e3 == "string";
      }, boolean: function(e3) {
        return [true, false, 0, 1].includes(e3);
      }};
      function ve() {
        try {
          var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (e4) {
        }
        return (ve = function() {
          return !!e3;
        })();
      }
      function be(e3) {
        var t3 = typeof Map == "function" ? new Map() : void 0;
        return be = function(e4) {
          if (e4 === null || !function(e5) {
            try {
              return Function.toString.call(e5).indexOf("[native code]") !== -1;
            } catch (t4) {
              return typeof e5 == "function";
            }
          }(e4))
            return e4;
          if (typeof e4 != "function")
            throw new TypeError("Super expression must either be null or a function");
          if (t3 !== void 0) {
            if (t3.has(e4))
              return t3.get(e4);
            t3.set(e4, r2);
          }
          function r2() {
            return function(e5, t4, r3) {
              if (ve())
                return Reflect.construct.apply(null, arguments);
              var n2 = [null];
              n2.push.apply(n2, t4);
              var i2 = new (e5.bind.apply(e5, n2))();
              return r3 && l(i2, r3.prototype), i2;
            }(e4, arguments, y(this).constructor);
          }
          return r2.prototype = Object.create(e4.prototype, {constructor: {value: r2, enumerable: false, writable: true, configurable: true}}), l(r2, e4);
        }, be(e3);
      }
      function qe(e3, t3, r2) {
        return t3 = y(t3), d(e3, we() ? Reflect.construct(t3, r2 || [], y(e3).constructor) : t3.apply(e3, r2));
      }
      function we() {
        try {
          var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (e4) {
        }
        return (we = function() {
          return !!e3;
        })();
      }
      function ke(e3) {
        return function(t3) {
          function r2(t4) {
            var n2;
            return s(this, r2), (n2 = qe(this, r2)).type = e3, n2.message = t4, n2;
          }
          return f(r2, t3), c(r2, [{key: "toString", value: function() {
            return "".concat(this.type, ": ").concat(this.message);
          }}]), r2;
        }(be(Error));
      }
      var Ae = function(e3) {
        function t3() {
          return s(this, t3), qe(this, t3, arguments);
        }
        return f(t3, e3), c(t3);
      }(ke("APIError")), xe = function(e3) {
        function t3() {
          return s(this, t3), qe(this, t3, arguments);
        }
        return f(t3, e3), c(t3);
      }(ke("ConstructionError")), Se = r(532), Oe = r.n(Se);
      function Re(e3, t3) {
        var r2 = Object.keys(e3);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(e3);
          t3 && (n2 = n2.filter(function(t4) {
            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function Pe(e3) {
        var t3 = function(e4) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var r2 = arguments[t4] != null ? arguments[t4] : {};
            t4 % 2 ? Re(Object(r2), true).forEach(function(t5) {
              he(e4, t5, r2[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r2)) : Re(Object(r2)).forEach(function(t5) {
              Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(r2, t5));
            });
          }
          return e4;
        }({}, e3);
        return delete t3.req_id, delete t3.passthrough, delete t3.subscribe, Oe()(t3);
      }
      function Me(e3, t3, r2) {
        return t3 = y(t3), d(e3, je() ? Reflect.construct(t3, r2 || [], y(e3).constructor) : t3.apply(e3, r2));
      }
      function je() {
        try {
          var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (e4) {
        }
        return (je = function() {
          return !!e3;
        })();
      }
      var Ee = function(e3) {
        function t3(e4, r3) {
          var n3;
          if (s(this, t3), !e4)
            throw new xe("Cache object needs an API to work");
          return (n3 = Me(this, t3)).api = e4, n3.storage = r3, n3;
        }
        var r2, n2, i2, u2, a2;
        return f(t3, e3), c(t3, [{key: "send", value: (a2 = o(g().mark(function e4(t4) {
          var r3;
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  return e5.next = 2, this.has(t4);
                case 2:
                  if (!e5.sent) {
                    e5.next = 4;
                    break;
                  }
                  return e5.abrupt("return", this.get(t4));
                case 4:
                  return e5.next = 6, this.api.send(t4);
                case 6:
                  return r3 = e5.sent, e5.next = 9, this.set(t4, r3);
                case 9:
                  return e5.abrupt("return", r3);
                case 10:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function(e4) {
          return a2.apply(this, arguments);
        })}, {key: "has", value: (u2 = o(g().mark(function e4(t4) {
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  return e5.abrupt("return", this.storage.has(Pe(t4)));
                case 1:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function(e4) {
          return u2.apply(this, arguments);
        })}, {key: "get", value: (i2 = o(g().mark(function e4(t4) {
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  return e5.abrupt("return", this.storage.get(Pe(t4)));
                case 1:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function(e4) {
          return i2.apply(this, arguments);
        })}, {key: "getByMsgType", value: (n2 = o(g().mark(function e4(t4) {
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  return e5.abrupt("return", this.storage.getByMsgType(t4));
                case 1:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function(e4) {
          return n2.apply(this, arguments);
        })}, {key: "set", value: (r2 = o(g().mark(function e4(t4, r3) {
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  return e5.abrupt("return", this.storage.set(Pe(t4), r3));
                case 1:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function(e4, t4) {
          return r2.apply(this, arguments);
        })}]), t3;
      }(ge);
      function Ie(e3, t3, r2) {
        return t3 = y(t3), d(e3, Te() ? Reflect.construct(t3, r2 || [], y(e3).constructor) : t3.apply(e3, r2));
      }
      function Te() {
        try {
          var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (e4) {
        }
        return (Te = function() {
          return !!e3;
        })();
      }
      var Fe = function(e3) {
        function t3() {
          var e4, r2, n2, i2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
          };
          return s(this, t3), e4 = Ie(this, t3, [function(e5, t4) {
            r2 = e5, n2 = t4;
          }]), i2(r2, n2), e4.resolveCallback = r2, e4.rejectCallback = n2, e4.state = "pending", e4;
        }
        return f(t3, e3), c(t3, [{key: "resolve", value: function(e4) {
          return this.resolveCallback(e4), this.state = "resolved", this;
        }}, {key: "reject", value: function(e4) {
          return this.rejectCallback(e4), this.state = "rejected", this;
        }}, {key: "isPending", value: function() {
          return this.state === "pending";
        }}, {key: "isRejected", value: function() {
          return this.state === "rejected";
        }}, {key: "isResolved", value: function() {
          return this.state === "resolved";
        }}], [{key: "wrap", value: function(e4) {
          if (e4 instanceof this)
            return e4;
          var t4 = new this();
          return e4.then(t4.resolve.bind(t4), t4.reject.bind(t4)), t4;
        }}]), t3;
      }(be(Promise)), Ce = function() {
        function e3() {
          s(this, e3), this.store = {by_msg_type: {}};
        }
        return c(e3, [{key: "has", value: function(e4) {
          return e4 in this.store;
        }}, {key: "get", value: function(e4) {
          return this.store[e4];
        }}, {key: "getByMsgType", value: function(e4) {
          return this.store.by_msg_type[e4];
        }}, {key: "set", value: function(e4, t3) {
          this.store.by_msg_type[t3.msg_type] = t3, this.store[e4] = t3;
        }}]), e3;
      }();
      const Ue = ["balance", "buy", "cashier_payments", "exchange_rates", "p2p_advert_info", "p2p_advertiser_create", "p2p_advertiser_info", "p2p_order_create", "p2p_order_info", "p2p_order_list", "proposal", "proposal_open_contract", "ticks", "ticks_history", "transaction", "website_status"];
      function Be(e3, t3) {
        var r2 = Object.keys(e3);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(e3);
          t3 && (n2 = n2.filter(function(t4) {
            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function Ne(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var r2 = arguments[t3] != null ? arguments[t3] : {};
          t3 % 2 ? Be(Object(r2), true).forEach(function(t4) {
            he(e3, t4, r2[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r2)) : Be(Object(r2)).forEach(function(t4) {
            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r2, t4));
          });
        }
        return e3;
      }
      var Le = function() {
        function e3(t3) {
          s(this, e3), this.api = t3, this.sources = {}, this.subs_id_to_key = {}, this.key_to_subs_id = {}, this.buy_key_to_contract_id = {}, this.subs_per_msg_type = [], this.streams_list = Ue;
        }
        return c(e3, [{key: "subscribe", value: function(e4) {
          return this.sourceExists(e4) ? this.getSource(e4) : this.createNewSource(Ne(Ne({}, e4), {}, {subscribe: 1}));
        }}, {key: "getSource", value: function(e4) {
          var t3 = De(e4);
          if (t3 in this.sources)
            return this.sources[t3];
          if (e4.proposal_open_contract && e4.contract_id) {
            var r2 = Object.values(this.buy_key_to_contract_id).find(function(t4) {
              return t4.contract_id === e4.contract_id;
            });
            if (r2)
              return this.sources[r2.buy_key];
          }
        }}, {key: "sourceExists", value: function(e4) {
          return this.getSource(e4);
        }}, {key: "createNewSource", value: function(e4) {
          var t3, r2 = this, n2 = De(e4), i2 = this.api.sendAndGetSource(e4).pipe((t3 = function() {
            n2 in r2.key_to_subs_id && r2.forget(r2.key_to_subs_id[n2]).then(function() {
            }, function() {
            });
          }, b(function(e5, r3) {
            try {
              e5.subscribe(r3);
            } finally {
              r3.add(t3);
            }
          })), le());
          return this.sources[n2] = i2, this.saveSubsPerMsgType(e4, n2), i2.pipe(oe()).toPromise().then(function(t4) {
            e4.buy && (r2.buy_key_to_contract_id[n2] = {contract_id: t4.buy.contract_id, buy_key: n2}), r2.saveSubsId(n2, t4);
          }, this.removeKeyOnError(n2)), i2;
        }}, {key: "forget", value: function(e4) {
          return this.completeSubsByIds(e4), this.api.send({forget: e4});
        }}, {key: "forgetAll", value: function() {
          for (var e4 = this, t3 = arguments.length, r2 = new Array(t3), n2 = 0; n2 < t3; n2++)
            r2[n2] = arguments[n2];
          return r2.forEach(function(t4) {
            (e4.subs_per_msg_type[t4] || []).forEach(function(t5) {
              return e4.completeSubsByKey(t5);
            }), e4.subs_per_msg_type[t4] = [];
          }), this.api.send({forget_all: r2});
        }}, {key: "completeSubsByIds", value: function() {
          for (var e4 = this, t3 = arguments.length, r2 = new Array(t3), n2 = 0; n2 < t3; n2++)
            r2[n2] = arguments[n2];
          r2.forEach(function(t4) {
            var r3 = e4.subs_id_to_key[t4];
            delete e4.subs_id_to_key[t4], e4.completeSubsByKey(r3);
          });
        }}, {key: "saveSubsId", value: function(e4, t3) {
          var r2 = t3.subscription;
          if (!r2)
            return this.completeSubsByKey(e4);
          var n2 = r2.id;
          n2 in this.subs_id_to_key || (this.subs_id_to_key[n2] = e4, this.key_to_subs_id[e4] = n2);
        }}, {key: "saveSubsPerMsgType", value: function(e4, t3) {
          var r2 = this.getMsgType(e4);
          r2 ? (this.subs_per_msg_type[r2] = this.subs_per_msg_type[r2] || [], this.subs_per_msg_type[r2].push(t3)) : this.api.sanityErrors.next(new Ae("Subscription type is not found in deriv-api"));
        }}, {key: "removeKeyOnError", value: function(e4) {
          var t3 = this;
          return function() {
            return t3.completeSubsByKey(e4);
          };
        }}, {key: "completeSubsByKey", value: function(e4) {
          if (e4 && this.sources[e4]) {
            var t3 = this.sources[e4];
            delete this.sources[e4];
            var r2 = this.key_to_subs_id[e4];
            delete this.subs_id_to_key[r2], delete this.key_to_subs_id[e4], delete this.buy_key_to_contract_id[e4], t3.complete();
          }
        }}, {key: "getMsgType", value: function(e4) {
          return this.streams_list.find(function(t3) {
            return t3 in e4;
          });
        }}]), e3;
      }();
      function De(e3) {
        return Pe(e3);
      }
      function Ge(e3, t3, r2) {
        return t3 = y(t3), d(e3, $e() ? Reflect.construct(t3, r2 || [], y(e3).constructor) : t3.apply(e3, r2));
      }
      function $e() {
        try {
          var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (e4) {
        }
        return ($e = function() {
          return !!e3;
        })();
      }
      var ze = function(e3) {
        function t3() {
          var e4, r3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n3 = r3.storage, i3 = r3.app_id, o2 = r3.connection, u3 = r3.cache, a2 = u3 === void 0 ? new Ce() : u3, c2 = r3.endpoint, d2 = c2 === void 0 ? "ws.derivws.com" : c2, y2 = r3.lang, l2 = y2 === void 0 ? "EN" : y2, f2 = r3.brand, h2 = f2 === void 0 ? "" : f2, g2 = r3.middleware, _2 = g2 === void 0 ? {} : g2, m2 = r3.excluded_request_block, v2 = m2 === void 0 ? ["website_status", "authorize"] : m2;
          if (s(this, t3), (e4 = Ge(this, t3)).events = new de(), o2)
            e4.connection = o2;
          else {
            if (!i3)
              throw Error("An app_id is required to connect to the API");
            e4.shouldReconnect = true, e4.connectionArgs = {app_id: i3, endpointUrl: We(d2), lang: l2.toUpperCase(), brand: h2.toLowerCase()}, e4.connect();
          }
          return e4.lang = l2, e4.reqId = 0, e4.connected = new Fe(), e4.sanityErrors = new de(), e4.middleware = _2, e4.pendingRequests = {}, e4.expect_response_types = {}, e4.subscription_manager = new Le(p(e4)), e4.reconnect_timeout = false, e4.keep_alive_interval = false, e4.is_request_blocked = false, e4.excluded_request_block = v2, n3 && (e4.storage = new Ee(p(e4), n3)), e4.cache = new Ee(e4.storage ? e4.storage : p(e4), a2), e4.connectionHandlers(), e4;
        }
        var r2, n2, i2, u2;
        return f(t3, e3), c(t3, [{key: "blockRequest", value: function(e4) {
          this.is_request_blocked = e4;
        }}, {key: "connectionHandlers", value: function() {
          this.connection.onopen = this.openHandler.bind(this), this.connection.onclose = this.closeHandler.bind(this), this.connection.onmessage = this.messageHandler.bind(this), this.connection.onerror = this.errorHandler.bind(this);
        }}, {key: "connect", value: function() {
          if (!this.connectionArgs)
            throw new xe("Connection arguments are required to create a connection.");
          this.events.next({name: "connect"});
          var e4 = this.connectionArgs, t4 = e4.endpointUrl, r3 = e4.lang, n3 = e4.app_id, i3 = e4.brand;
          this.connection = new WebSocket("".concat(t4.toString(), "websockets/v3?app_id=").concat(n3, "&l=").concat(r3, "&brand=").concat(i3));
        }}, {key: "disconnect", value: function() {
          this.shouldReconnect = false, this.connection.close();
        }}, {key: "isConnectionClosed", value: function() {
          return this.connection.readyState === 2 || this.connection.readyState === 3;
        }}, {key: "sendAndGetSource", value: function(e4) {
          var t4 = this, r3 = new de();
          return e4.req_id = e4.req_id || ++this.reqId, this.pendingRequests[e4.req_id] = r3, this.connected.then(function() {
            t4.isConnectionClosed() || t4.connection.send(JSON.stringify(e4));
          }).catch(function(e5) {
            return r3.error(e5);
          }), r3;
        }}, {key: "send", value: (u2 = o(g().mark(function e4() {
          var t4, r3, n3, i3, o2, s2, u3, a2, c2, p2 = this, d2 = arguments;
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  for (t4 = d2.length, r3 = new Array(t4), n3 = 0; n3 < t4; n3++)
                    r3[n3] = d2[n3];
                  if (i3 = Object.keys(r3[0])[0], !this.is_request_blocked || this.excluded_request_block.includes(i3)) {
                    e5.next = 4;
                    break;
                  }
                  return e5.abrupt("return", new Promise(function() {
                  }));
                case 4:
                  if (!(o2 = this.callMiddleware("sendWillBeCalled", {args: r3}))) {
                    e5.next = 7;
                    break;
                  }
                  return e5.abrupt("return", o2);
                case 7:
                  if (s2 = r3[0], u3 = this.callMiddleware("requestDataTransformer", s2) || s2, this.events.next({name: "send", data: u3}), this.deleteFromExpectResponse(u3), (a2 = this.sendAndGetSource(u3).pipe(oe()).toPromise()).then(function(e6) {
                    p2.cache.set(u3, e6), p2.storage && p2.storage.set(u3, e6);
                  }, function() {
                  }), !(c2 = this.callMiddleware("sendIsCalled", {response_promise: a2, args: r3}))) {
                    e5.next = 16;
                    break;
                  }
                  return e5.abrupt("return", c2);
                case 16:
                  return e5.abrupt("return", a2);
                case 17:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function() {
          return u2.apply(this, arguments);
        })}, {key: "callMiddleware", value: function(e4, t4) {
          if (e4 in this.middleware)
            return this.middleware[e4](t4);
        }}, {key: "subscribe", value: function(e4) {
          if (this.is_request_blocked)
            return new de();
          var t4 = this.callMiddleware("requestDataTransformer", e4) || e4;
          return this.subscription_manager.subscribe(t4);
        }}, {key: "forget", value: (i2 = o(g().mark(function e4(t4) {
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  return e5.abrupt("return", this.subscription_manager.forget(t4));
                case 1:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function(e4) {
          return i2.apply(this, arguments);
        })}, {key: "forgetAll", value: (n2 = o(g().mark(function e4() {
          var t4, r3 = arguments;
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  return e5.abrupt("return", (t4 = this.subscription_manager).forgetAll.apply(t4, r3));
                case 1:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function() {
          return n2.apply(this, arguments);
        })}, {key: "keepAlivePing", value: function() {
          this.ping({ping: 1}), this.reconnect_timeout = setTimeout(this.reconnect.bind(this), 5e3);
        }}, {key: "pong", value: function() {
          this.reconnect_timeout && (clearTimeout(this.reconnect_timeout), this.reconnect_timeout = false);
        }}, {key: "openHandler", value: function() {
          this.events.next({name: "open"}), this.shouldReconnect && (this.keep_alive_interval = setInterval(this.keepAlivePing.bind(this), 3e4)), this.connection.readyState === 1 ? this.connected.resolve() : setTimeout(this.openHandler.bind(this), 50);
        }}, {key: "messageHandler", value: function(e4) {
          if (e4.data) {
            var t4 = JSON.parse(e4.data);
            this.reconnect_timeout && t4.ping === "pong" && this.pong(), this.events.next({name: "message", data: t4});
            var r3 = t4.req_id;
            if (r3 in this.pendingRequests) {
              var n3 = this.expect_response_types[t4.msg_type];
              n3 && n3.isPending() && n3.resolve(t4);
              var i3 = t4.echo_req, o2 = i3 && i3.proposal_open_contract && !i3.contract_id;
              if (t4.error && !o2)
                this.pendingRequests[r3].error(t4);
              else if (this.pendingRequests[r3].isStopped && t4.subscription) {
                var s2 = t4.subscription.id;
                this.forget(s2);
              } else
                this.pendingRequests[r3].next(t4);
            } else
              this.sanityErrors.next(new Ae("Extra response"));
          } else
            this.sanityErrors.next(new Ae("Something went wrong while receiving the response from API."));
        }}, {key: "closeHandler", value: function() {
          this.events.next({name: "close"}), this.shouldReconnect && (this.events.next({name: "reconnecting"}), this.reconnect());
        }}, {key: "reconnect", value: function() {
          this.shouldReconnect && (this.keep_alive_interval && (clearInterval(this.keep_alive_interval), this.keep_alive_interval = false), this.pong(), this.connect(), this.connectionHandlers());
        }}, {key: "errorHandler", value: function() {
          this.sanityErrors.next(new Ae("Something went wrong while receiving the response from API."));
        }}, {key: "onClose", value: function() {
          return this.events.pipe(Z(function(e4) {
            return e4.name === "close";
          }), le());
        }}, {key: "onOpen", value: function() {
          return this.events.pipe(Z(function(e4) {
            return e4.name === "open";
          }), le());
        }}, {key: "onMessage", value: function() {
          return this.events.pipe(Z(function(e4) {
            return e4.name === "message";
          }), le());
        }}, {key: "expectResponse", value: (r2 = o(g().mark(function e4() {
          var t4, r3, n3, i3 = this, o2 = arguments;
          return g().wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  for (t4 = o2.length, r3 = new Array(t4), n3 = 0; n3 < t4; n3++)
                    r3[n3] = o2[n3];
                  if (r3.forEach(function(e6) {
                    var t5;
                    e6 in i3.expect_response_types || (i3.expect_response_types[e6] = (t5 = i3.cache.getByMsgType(e6).then(function(t6) {
                      return !t6 && i3.storage ? i3.storage.getByMsgType(e6) : t6;
                    }), Fe.wrap(t5.then(function(e7) {
                      return e7 || new Fe();
                    }))));
                  }), r3.length !== 1) {
                    e5.next = 4;
                    break;
                  }
                  return e5.abrupt("return", this.expect_response_types[r3[0]]);
                case 4:
                  return e5.abrupt("return", Promise.all(r3.map(function(e6) {
                    return i3.expect_response_types[e6];
                  })));
                case 5:
                case "end":
                  return e5.stop();
              }
          }, e4, this);
        })), function() {
          return r2.apply(this, arguments);
        })}, {key: "deleteFromExpectResponse", value: function(e4) {
          var t4 = Object.keys(this.expect_response_types).find(function(t5) {
            return t5 in e4;
          });
          this.expect_response_types[t4] && !this.expect_response_types[t4].isPending() && delete this.expect_response_types[t4];
        }}]), t3;
      }(ge);
      function We(r2) {
        if (typeof r2 != "string")
          throw new xe("Endpoint must be a string, passed: ".concat(t2(r2)));
        var n2, i2, o2;
        try {
          var s2 = (i2 = r2.match(/((?:\w*:\/\/)*)(.*)/), o2 = 3, function(e3) {
            if (Array.isArray(e3))
              return e3;
          }(i2) || function(e3, t3) {
            var r3 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
            if (r3 != null) {
              var n3, i3, o3, s3, u3 = [], a3 = true, c2 = false;
              try {
                if (o3 = (r3 = r3.call(e3)).next, t3 === 0) {
                  if (Object(r3) !== r3)
                    return;
                  a3 = false;
                } else
                  for (; !(a3 = (n3 = o3.call(r3)).done) && (u3.push(n3.value), u3.length !== t3); a3 = true)
                    ;
              } catch (e4) {
                c2 = true, i3 = e4;
              } finally {
                try {
                  if (!a3 && r3.return != null && (s3 = r3.return(), Object(s3) !== s3))
                    return;
                } finally {
                  if (c2)
                    throw i3;
                }
              }
              return u3;
            }
          }(i2, o2) || function(t3, r3) {
            if (t3) {
              if (typeof t3 == "string")
                return e2(t3, r3);
              var n3 = Object.prototype.toString.call(t3).slice(8, -1);
              return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? e2(t3, r3) : void 0;
            }
          }(i2, o2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }()), u2 = (s2[0], s2[1]), a2 = s2[2];
          n2 = new URL("".concat(u2 === "ws://" ? u2 : "wss://").concat(a2));
        } catch (e3) {
          throw new xe("Invalid URL: ".concat(r2));
        }
        return n2;
      }
    })(), n.default;
  })());
});
var __VIRTUAL_FILE$1 = /* @__PURE__ */ getDefaultExportFromCjs(__VIRTUAL_FILE);
export default __VIRTUAL_FILE$1;

