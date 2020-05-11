/*!
 * Project-specific code is Copyright (c) 2020 Cameron Beccario
 *
 * See https://earth.nullschool.net/bundle.js for a readable version of this source, including licenses.
 * See https://github.com/cambecc/earth for a free version of this project.
 *
 */
! function (t) {
    var n = {};

    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    e.m = t, e.c = n, e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        })
    }, e.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var i in t) e.d(r, i, function (n) {
                return t[n]
            }.bind(null, i));
        return r
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 31)
}([function (t, n, e) {
    (function (t, e) {
        var r;

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }! function () {
            var o = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self.self === self && self || "object" == (void 0 === t ? "undefined" : i(t)) && t.global === t && t || this || {},
                a = o._,
                u = Array.prototype,
                c = Object.prototype,
                l = "undefined" != typeof Symbol ? Symbol.prototype : null,
                s = u.push,
                f = u.slice,
                h = c.toString,
                d = c.hasOwnProperty,
                p = Array.isArray,
                v = Object.keys,
                m = Object.create,
                y = function () {},
                g = function t(n) {
                    return n instanceof t ? n : this instanceof t ? void(this._wrapped = n) : new t(n)
                };
            n.nodeType ? o._ = g : (!e.nodeType && e.exports && (n = e.exports = g), n._ = g), g.VERSION = "1.9.1";
            var b, w = function (t, n, e) {
                    if (void 0 === n) return t;
                    switch (null == e ? 3 : e) {
                        case 1:
                            return function (e) {
                                return t.call(n, e)
                            };
                        case 3:
                            return function (e, r, i) {
                                return t.call(n, e, r, i)
                            };
                        case 4:
                            return function (e, r, i, o) {
                                return t.call(n, e, r, i, o)
                            }
                    }
                    return function () {
                        return t.apply(n, arguments)
                    }
                },
                _ = function (t, n, e) {
                    return g.iteratee !== b ? g.iteratee(t, n) : null == t ? g.identity : g.isFunction(t) ? w(t, n, e) : g.isObject(t) && !g.isArray(t) ? g.matcher(t) : g.property(t)
                };
            g.iteratee = b = function (t, n) {
                return _(t, n, 1 / 0)
            };
            var x = function (t, n) {
                    return n = null == n ? t.length - 1 : +n,
                        function () {
                            for (var e = Math.max(arguments.length - n, 0), r = Array(e), i = 0; i < e; i++) r[i] = arguments[i + n];
                            switch (n) {
                                case 0:
                                    return t.call(this, r);
                                case 1:
                                    return t.call(this, arguments[0], r);
                                case 2:
                                    return t.call(this, arguments[0], arguments[1], r)
                            }
                            var o = Array(n + 1);
                            for (i = 0; i < n; i++) o[i] = arguments[i];
                            return o[n] = r, t.apply(this, o)
                        }
                },
                M = function (t) {
                    if (!g.isObject(t)) return {};
                    if (m) return m(t);
                    y.prototype = t;
                    var n = new y;
                    return y.prototype = null, n
                },
                T = function (t) {
                    return function (n) {
                        return null == n ? void 0 : n[t]
                    }
                },
                k = function (t, n) {
                    return null != t && d.call(t, n)
                },
                E = function (t, n) {
                    for (var e = n.length, r = 0; r < e; r++) {
                        if (null == t) return;
                        t = t[n[r]]
                    }
                    return e ? t : void 0
                },
                S = Math.pow(2, 53) - 1,
                j = T("length"),
                A = function (t) {
                    var n = j(t);
                    return "number" == typeof n && n >= 0 && n <= S
                };
            g.each = g.forEach = function (t, n, e) {
                var r, i;
                if (n = w(n, e), A(t))
                    for (r = 0, i = t.length; r < i; r++) n(t[r], r, t);
                else {
                    var o = g.keys(t);
                    for (r = 0, i = o.length; r < i; r++) n(t[o[r]], o[r], t)
                }
                return t
            }, g.map = g.collect = function (t, n, e) {
                n = _(n, e);
                for (var r = !A(t) && g.keys(t), i = (r || t).length, o = Array(i), a = 0; a < i; a++) {
                    var u = r ? r[a] : a;
                    o[a] = n(t[u], u, t)
                }
                return o
            };
            var O = function (t) {
                var n = function (n, e, r, i) {
                    var o = !A(n) && g.keys(n),
                        a = (o || n).length,
                        u = t > 0 ? 0 : a - 1;
                    for (i || (r = n[o ? o[u] : u], u += t); u >= 0 && u < a; u += t) {
                        var c = o ? o[u] : u;
                        r = e(r, n[c], c, n)
                    }
                    return r
                };
                return function (t, e, r, i) {
                    var o = arguments.length >= 3;
                    return n(t, w(e, i, 4), r, o)
                }
            };
            g.reduce = g.foldl = g.inject = O(1), g.reduceRight = g.foldr = O(-1), g.find = g.detect = function (t, n, e) {
                var r = (A(t) ? g.findIndex : g.findKey)(t, n, e);
                if (void 0 !== r && -1 !== r) return t[r]
            }, g.filter = g.select = function (t, n, e) {
                var r = [];
                return n = _(n, e), g.each(t, (function (t, e, i) {
                    n(t, e, i) && r.push(t)
                })), r
            }, g.reject = function (t, n, e) {
                return g.filter(t, g.negate(_(n)), e)
            }, g.every = g.all = function (t, n, e) {
                n = _(n, e);
                for (var r = !A(t) && g.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                    var a = r ? r[o] : o;
                    if (!n(t[a], a, t)) return !1
                }
                return !0
            }, g.some = g.any = function (t, n, e) {
                n = _(n, e);
                for (var r = !A(t) && g.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                    var a = r ? r[o] : o;
                    if (n(t[a], a, t)) return !0
                }
                return !1
            }, g.contains = g.includes = g.include = function (t, n, e, r) {
                return A(t) || (t = g.values(t)), ("number" != typeof e || r) && (e = 0), g.indexOf(t, n, e) >= 0
            }, g.invoke = x((function (t, n, e) {
                var r, i;
                return g.isFunction(n) ? i = n : g.isArray(n) && (r = n.slice(0, -1), n = n[n.length - 1]), g.map(t, (function (t) {
                    var o = i;
                    if (!o) {
                        if (r && r.length && (t = E(t, r)), null == t) return;
                        o = t[n]
                    }
                    return null == o ? o : o.apply(t, e)
                }))
            })), g.pluck = function (t, n) {
                return g.map(t, g.property(n))
            }, g.where = function (t, n) {
                return g.filter(t, g.matcher(n))
            }, g.findWhere = function (t, n) {
                return g.find(t, g.matcher(n))
            }, g.max = function (t, n, e) {
                var r, o, a = -1 / 0,
                    u = -1 / 0;
                if (null == n || "number" == typeof n && "object" != i(t[0]) && null != t)
                    for (var c = 0, l = (t = A(t) ? t : g.values(t)).length; c < l; c++) null != (r = t[c]) && r > a && (a = r);
                else n = _(n, e), g.each(t, (function (t, e, r) {
                    ((o = n(t, e, r)) > u || o === -1 / 0 && a === -1 / 0) && (a = t, u = o)
                }));
                return a
            }, g.min = function (t, n, e) {
                var r, o, a = 1 / 0,
                    u = 1 / 0;
                if (null == n || "number" == typeof n && "object" != i(t[0]) && null != t)
                    for (var c = 0, l = (t = A(t) ? t : g.values(t)).length; c < l; c++) null != (r = t[c]) && r < a && (a = r);
                else n = _(n, e), g.each(t, (function (t, e, r) {
                    ((o = n(t, e, r)) < u || o === 1 / 0 && a === 1 / 0) && (a = t, u = o)
                }));
                return a
            }, g.shuffle = function (t) {
                return g.sample(t, 1 / 0)
            }, g.sample = function (t, n, e) {
                if (null == n || e) return A(t) || (t = g.values(t)), t[g.random(t.length - 1)];
                var r = A(t) ? g.clone(t) : g.values(t),
                    i = j(r);
                n = Math.max(Math.min(n, i), 0);
                for (var o = i - 1, a = 0; a < n; a++) {
                    var u = g.random(a, o),
                        c = r[a];
                    r[a] = r[u], r[u] = c
                }
                return r.slice(0, n)
            }, g.sortBy = function (t, n, e) {
                var r = 0;
                return n = _(n, e), g.pluck(g.map(t, (function (t, e, i) {
                    return {
                        value: t,
                        index: r++,
                        criteria: n(t, e, i)
                    }
                })).sort((function (t, n) {
                    var e = t.criteria,
                        r = n.criteria;
                    if (e !== r) {
                        if (e > r || void 0 === e) return 1;
                        if (e < r || void 0 === r) return -1
                    }
                    return t.index - n.index
                })), "value")
            };
            var N = function (t, n) {
                return function (e, r, i) {
                    var o = n ? [
                        [],
                        []
                    ] : {};
                    return r = _(r, i), g.each(e, (function (n, i) {
                        var a = r(n, i, e);
                        t(o, n, a)
                    })), o
                }
            };
            g.groupBy = N((function (t, n, e) {
                k(t, e) ? t[e].push(n) : t[e] = [n]
            })), g.indexBy = N((function (t, n, e) {
                t[e] = n
            })), g.countBy = N((function (t, n, e) {
                k(t, e) ? t[e]++ : t[e] = 1
            }));
            var P = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
            g.toArray = function (t) {
                return t ? g.isArray(t) ? f.call(t) : g.isString(t) ? t.match(P) : A(t) ? g.map(t, g.identity) : g.values(t) : []
            }, g.size = function (t) {
                return null == t ? 0 : A(t) ? t.length : g.keys(t).length
            }, g.partition = N((function (t, n, e) {
                t[e ? 0 : 1].push(n)
            }), !0), g.first = g.head = g.take = function (t, n, e) {
                return null == t || t.length < 1 ? null == n ? void 0 : [] : null == n || e ? t[0] : g.initial(t, t.length - n)
            }, g.initial = function (t, n, e) {
                return f.call(t, 0, Math.max(0, t.length - (null == n || e ? 1 : n)))
            }, g.last = function (t, n, e) {
                return null == t || t.length < 1 ? null == n ? void 0 : [] : null == n || e ? t[t.length - 1] : g.rest(t, Math.max(0, t.length - n))
            }, g.rest = g.tail = g.drop = function (t, n, e) {
                return f.call(t, null == n || e ? 1 : n)
            }, g.compact = function (t) {
                return g.filter(t, Boolean)
            };
            var R = function t(n, e, r, i) {
                for (var o = (i = i || []).length, a = 0, u = j(n); a < u; a++) {
                    var c = n[a];
                    if (A(c) && (g.isArray(c) || g.isArguments(c)))
                        if (e)
                            for (var l = 0, s = c.length; l < s;) i[o++] = c[l++];
                        else t(c, e, r, i), o = i.length;
                    else r || (i[o++] = c)
                }
                return i
            };
            g.flatten = function (t, n) {
                return R(t, n, !1)
            }, g.without = x((function (t, n) {
                return g.difference(t, n)
            })), g.uniq = g.unique = function (t, n, e, r) {
                g.isBoolean(n) || (r = e, e = n, n = !1), null != e && (e = _(e, r));
                for (var i = [], o = [], a = 0, u = j(t); a < u; a++) {
                    var c = t[a],
                        l = e ? e(c, a, t) : c;
                    n && !e ? (a && o === l || i.push(c), o = l) : e ? g.contains(o, l) || (o.push(l), i.push(c)) : g.contains(i, c) || i.push(c)
                }
                return i
            }, g.union = x((function (t) {
                return g.uniq(R(t, !0, !0))
            })), g.intersection = function (t) {
                for (var n = [], e = arguments.length, r = 0, i = j(t); r < i; r++) {
                    var o = t[r];
                    if (!g.contains(n, o)) {
                        var a;
                        for (a = 1; a < e && g.contains(arguments[a], o); a++);
                        a === e && n.push(o)
                    }
                }
                return n
            }, g.difference = x((function (t, n) {
                return n = R(n, !0, !0), g.filter(t, (function (t) {
                    return !g.contains(n, t)
                }))
            })), g.unzip = function (t) {
                for (var n = t && g.max(t, j).length || 0, e = Array(n), r = 0; r < n; r++) e[r] = g.pluck(t, r);
                return e
            }, g.zip = x(g.unzip), g.object = function (t, n) {
                for (var e = {}, r = 0, i = j(t); r < i; r++) n ? e[t[r]] = n[r] : e[t[r][0]] = t[r][1];
                return e
            };
            var z = function (t) {
                return function (n, e, r) {
                    e = _(e, r);
                    for (var i = j(n), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t)
                        if (e(n[o], o, n)) return o;
                    return -1
                }
            };
            g.findIndex = z(1), g.findLastIndex = z(-1), g.sortedIndex = function (t, n, e, r) {
                for (var i = (e = _(e, r, 1))(n), o = 0, a = j(t); o < a;) {
                    var u = Math.floor((o + a) / 2);
                    e(t[u]) < i ? o = u + 1 : a = u
                }
                return o
            };
            var F = function (t, n, e) {
                return function (r, i, o) {
                    var a = 0,
                        u = j(r);
                    if ("number" == typeof o) t > 0 ? a = o >= 0 ? o : Math.max(o + u, a) : u = o >= 0 ? Math.min(o + 1, u) : o + u + 1;
                    else if (e && o && u) return r[o = e(r, i)] === i ? o : -1;
                    if (i != i) return (o = n(f.call(r, a, u), g.isNaN)) >= 0 ? o + a : -1;
                    for (o = t > 0 ? a : u - 1; o >= 0 && o < u; o += t)
                        if (r[o] === i) return o;
                    return -1
                }
            };
            g.indexOf = F(1, g.findIndex, g.sortedIndex), g.lastIndexOf = F(-1, g.findLastIndex), g.range = function (t, n, e) {
                null == n && (n = t || 0, t = 0), e || (e = n < t ? -1 : 1);
                for (var r = Math.max(Math.ceil((n - t) / e), 0), i = Array(r), o = 0; o < r; o++, t += e) i[o] = t;
                return i
            }, g.chunk = function (t, n) {
                if (null == n || n < 1) return [];
                for (var e = [], r = 0, i = t.length; r < i;) e.push(f.call(t, r, r += n));
                return e
            };
            var C = function (t, n, e, r, i) {
                if (!(r instanceof n)) return t.apply(e, i);
                var o = M(t.prototype),
                    a = t.apply(o, i);
                return g.isObject(a) ? a : o
            };
            g.bind = x((function (t, n, e) {
                if (!g.isFunction(t)) throw new TypeError("Bind must be called on a function");
                var r = x((function (i) {
                    return C(t, r, n, this, e.concat(i))
                }));
                return r
            })), g.partial = x((function (t, n) {
                var e = g.partial.placeholder;
                return function r() {
                    for (var i = 0, o = n.length, a = Array(o), u = 0; u < o; u++) a[u] = n[u] === e ? arguments[i++] : n[u];
                    for (; i < arguments.length;) a.push(arguments[i++]);
                    return C(t, r, this, this, a)
                }
            })), g.partial.placeholder = g, g.bindAll = x((function (t, n) {
                var e = (n = R(n, !1, !1)).length;
                if (e < 1) throw new Error("bindAll must be passed function names");
                for (; e--;) {
                    var r = n[e];
                    t[r] = g.bind(t[r], t)
                }
            })), g.memoize = function (t, n) {
                var e = function e(r) {
                    var i = e.cache,
                        o = "" + (n ? n.apply(this, arguments) : r);
                    return k(i, o) || (i[o] = t.apply(this, arguments)), i[o]
                };
                return e.cache = {}, e
            }, g.delay = x((function (t, n, e) {
                return setTimeout((function () {
                    return t.apply(null, e)
                }), n)
            })), g.defer = g.partial(g.delay, g, 1), g.throttle = function (t, n, e) {
                var r, i, o, a, u = 0;
                e || (e = {});
                var c = function () {
                        u = !1 === e.leading ? 0 : g.now(), r = null, a = t.apply(i, o), r || (i = o = null)
                    },
                    l = function () {
                        var l = g.now();
                        u || !1 !== e.leading || (u = l);
                        var s = n - (l - u);
                        return i = this, o = arguments, s <= 0 || s > n ? (r && (clearTimeout(r), r = null), u = l, a = t.apply(i, o), r || (i = o = null)) : r || !1 === e.trailing || (r = setTimeout(c, s)), a
                    };
                return l.cancel = function () {
                    clearTimeout(r), u = 0, r = i = o = null
                }, l
            }, g.debounce = function (t, n, e) {
                var r, i, o = function (n, e) {
                        r = null, e && (i = t.apply(n, e))
                    },
                    a = x((function (a) {
                        if (r && clearTimeout(r), e) {
                            var u = !r;
                            r = setTimeout(o, n), u && (i = t.apply(this, a))
                        } else r = g.delay(o, n, this, a);
                        return i
                    }));
                return a.cancel = function () {
                    clearTimeout(r), r = null
                }, a
            }, g.wrap = function (t, n) {
                return g.partial(n, t)
            }, g.negate = function (t) {
                return function () {
                    return !t.apply(this, arguments)
                }
            }, g.compose = function () {
                var t = arguments,
                    n = t.length - 1;
                return function () {
                    for (var e = n, r = t[n].apply(this, arguments); e--;) r = t[e].call(this, r);
                    return r
                }
            }, g.after = function (t, n) {
                return function () {
                    if (--t < 1) return n.apply(this, arguments)
                }
            }, g.before = function (t, n) {
                var e;
                return function () {
                    return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = null), e
                }
            }, g.once = g.partial(g.before, 2), g.restArguments = x;
            var L = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                D = function (t, n) {
                    var e = I.length,
                        r = t.constructor,
                        i = g.isFunction(r) && r.prototype || c,
                        o = "constructor";
                    for (k(t, o) && !g.contains(n, o) && n.push(o); e--;)(o = I[e]) in t && t[o] !== i[o] && !g.contains(n, o) && n.push(o)
                };
            g.keys = function (t) {
                if (!g.isObject(t)) return [];
                if (v) return v(t);
                var n = [];
                for (var e in t) k(t, e) && n.push(e);
                return L && D(t, n), n
            }, g.allKeys = function (t) {
                if (!g.isObject(t)) return [];
                var n = [];
                for (var e in t) n.push(e);
                return L && D(t, n), n
            }, g.values = function (t) {
                for (var n = g.keys(t), e = n.length, r = Array(e), i = 0; i < e; i++) r[i] = t[n[i]];
                return r
            }, g.mapObject = function (t, n, e) {
                n = _(n, e);
                for (var r = g.keys(t), i = r.length, o = {}, a = 0; a < i; a++) {
                    var u = r[a];
                    o[u] = n(t[u], u, t)
                }
                return o
            }, g.pairs = function (t) {
                for (var n = g.keys(t), e = n.length, r = Array(e), i = 0; i < e; i++) r[i] = [n[i], t[n[i]]];
                return r
            }, g.invert = function (t) {
                for (var n = {}, e = g.keys(t), r = 0, i = e.length; r < i; r++) n[t[e[r]]] = e[r];
                return n
            }, g.functions = g.methods = function (t) {
                var n = [];
                for (var e in t) g.isFunction(t[e]) && n.push(e);
                return n.sort()
            };
            var q = function (t, n) {
                return function (e) {
                    var r = arguments.length;
                    if (n && (e = Object(e)), r < 2 || null == e) return e;
                    for (var i = 1; i < r; i++)
                        for (var o = arguments[i], a = t(o), u = a.length, c = 0; c < u; c++) {
                            var l = a[c];
                            n && void 0 !== e[l] || (e[l] = o[l])
                        }
                    return e
                }
            };
            g.extend = q(g.allKeys), g.extendOwn = g.assign = q(g.keys), g.findKey = function (t, n, e) {
                n = _(n, e);
                for (var r, i = g.keys(t), o = 0, a = i.length; o < a; o++)
                    if (n(t[r = i[o]], r, t)) return r
            };
            var U, H, G = function (t, n, e) {
                return n in e
            };
            g.pick = x((function (t, n) {
                var e = {},
                    r = n[0];
                if (null == t) return e;
                g.isFunction(r) ? (n.length > 1 && (r = w(r, n[1])), n = g.allKeys(t)) : (r = G, n = R(n, !1, !1), t = Object(t));
                for (var i = 0, o = n.length; i < o; i++) {
                    var a = n[i],
                        u = t[a];
                    r(u, a, t) && (e[a] = u)
                }
                return e
            })), g.omit = x((function (t, n) {
                var e, r = n[0];
                return g.isFunction(r) ? (r = g.negate(r), n.length > 1 && (e = n[1])) : (n = g.map(R(n, !1, !1), String), r = function (t, e) {
                    return !g.contains(n, e)
                }), g.pick(t, r, e)
            })), g.defaults = q(g.allKeys, !0), g.create = function (t, n) {
                var e = M(t);
                return n && g.extendOwn(e, n), e
            }, g.clone = function (t) {
                return g.isObject(t) ? g.isArray(t) ? t.slice() : g.extend({}, t) : t
            }, g.tap = function (t, n) {
                return n(t), t
            }, g.isMatch = function (t, n) {
                var e = g.keys(n),
                    r = e.length;
                if (null == t) return !r;
                for (var i = Object(t), o = 0; o < r; o++) {
                    var a = e[o];
                    if (n[a] !== i[a] || !(a in i)) return !1
                }
                return !0
            }, U = function (t, n, e, r) {
                if (t === n) return 0 !== t || 1 / t == 1 / n;
                if (null == t || null == n) return !1;
                if (t != t) return n != n;
                var o = i(t);
                return ("function" === o || "object" === o || "object" == i(n)) && H(t, n, e, r)
            }, H = function (t, n, e, r) {
                t instanceof g && (t = t._wrapped), n instanceof g && (n = n._wrapped);
                var o = h.call(t);
                if (o !== h.call(n)) return !1;
                switch (o) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + n;
                    case "[object Number]":
                        return +t != +t ? +n != +n : 0 == +t ? 1 / +t == 1 / n : +t == +n;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +n;
                    case "[object Symbol]":
                        return l.valueOf.call(t) === l.valueOf.call(n)
                }
                var a = "[object Array]" === o;
                if (!a) {
                    if ("object" != i(t) || "object" != i(n)) return !1;
                    var u = t.constructor,
                        c = n.constructor;
                    if (u !== c && !(g.isFunction(u) && u instanceof u && g.isFunction(c) && c instanceof c) && "constructor" in t && "constructor" in n) return !1
                }
                r = r || [];
                for (var s = (e = e || []).length; s--;)
                    if (e[s] === t) return r[s] === n;
                if (e.push(t), r.push(n), a) {
                    if ((s = t.length) !== n.length) return !1;
                    for (; s--;)
                        if (!U(t[s], n[s], e, r)) return !1
                } else {
                    var f, d = g.keys(t);
                    if (s = d.length, g.keys(n).length !== s) return !1;
                    for (; s--;)
                        if (f = d[s], !k(n, f) || !U(t[f], n[f], e, r)) return !1
                }
                return e.pop(), r.pop(), !0
            }, g.isEqual = function (t, n) {
                return U(t, n)
            }, g.isEmpty = function (t) {
                return null == t || (A(t) && (g.isArray(t) || g.isString(t) || g.isArguments(t)) ? 0 === t.length : 0 === g.keys(t).length)
            }, g.isElement = function (t) {
                return !(!t || 1 !== t.nodeType)
            }, g.isArray = p || function (t) {
                return "[object Array]" === h.call(t)
            }, g.isObject = function (t) {
                var n = i(t);
                return "function" === n || "object" === n && !!t
            }, g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], (function (t) {
                g["is" + t] = function (n) {
                    return h.call(n) === "[object " + t + "]"
                }
            })), g.isArguments(arguments) || (g.isArguments = function (t) {
                return k(t, "callee")
            });
            var X = o.document && o.document.childNodes;
            "object" != ("undefined" == typeof Int8Array ? "undefined" : i(Int8Array)) && "function" != typeof X && (g.isFunction = function (t) {
                return "function" == typeof t || !1
            }), g.isFinite = function (t) {
                return !g.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t))
            }, g.isNaN = function (t) {
                return g.isNumber(t) && isNaN(t)
            }, g.isBoolean = function (t) {
                return !0 === t || !1 === t || "[object Boolean]" === h.call(t)
            }, g.isNull = function (t) {
                return null === t
            }, g.isUndefined = function (t) {
                return void 0 === t
            }, g.has = function (t, n) {
                if (!g.isArray(n)) return k(t, n);
                for (var e = n.length, r = 0; r < e; r++) {
                    var i = n[r];
                    if (null == t || !d.call(t, i)) return !1;
                    t = t[i]
                }
                return !!e
            }, g.noConflict = function () {
                return o._ = a, this
            }, g.identity = function (t) {
                return t
            }, g.constant = function (t) {
                return function () {
                    return t
                }
            }, g.noop = function () {}, g.property = function (t) {
                return g.isArray(t) ? function (n) {
                    return E(n, t)
                } : T(t)
            }, g.propertyOf = function (t) {
                return null == t ? function () {} : function (n) {
                    return g.isArray(n) ? E(t, n) : t[n]
                }
            }, g.matcher = g.matches = function (t) {
                return t = g.extendOwn({}, t),
                    function (n) {
                        return g.isMatch(n, t)
                    }
            }, g.times = function (t, n, e) {
                var r = Array(Math.max(0, t));
                n = w(n, e, 1);
                for (var i = 0; i < t; i++) r[i] = n(i);
                return r
            }, g.random = function (t, n) {
                return null == n && (n = t, t = 0), t + Math.floor(Math.random() * (n - t + 1))
            }, g.now = Date.now || function () {
                return (new Date).getTime()
            };
            var W = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                B = g.invert(W),
                V = function (t) {
                    var n = function (n) {
                            return t[n]
                        },
                        e = "(?:" + g.keys(t).join("|") + ")",
                        r = RegExp(e),
                        i = RegExp(e, "g");
                    return function (t) {
                        return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, n) : t
                    }
                };
            g.escape = V(W), g.unescape = V(B), g.result = function (t, n, e) {
                g.isArray(n) || (n = [n]);
                var r = n.length;
                if (!r) return g.isFunction(e) ? e.call(t) : e;
                for (var i = 0; i < r; i++) {
                    var o = null == t ? void 0 : t[n[i]];
                    void 0 === o && (o = e, i = r), t = g.isFunction(o) ? o.call(t) : o
                }
                return t
            };
            var $ = 0;
            g.uniqueId = function (t) {
                var n = ++$ + "";
                return t ? t + n : n
            }, g.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var Y = /(.)^/,
                K = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                J = /\\|'|\r|\n|\u2028|\u2029/g,
                Z = function (t) {
                    return "\\" + K[t]
                };
            g.template = function (t, n, e) {
                !n && e && (n = e), n = g.defaults({}, n, g.templateSettings);
                var r, i = RegExp([(n.escape || Y).source, (n.interpolate || Y).source, (n.evaluate || Y).source].join("|") + "|$", "g"),
                    o = 0,
                    a = "__p+='";
                t.replace(i, (function (n, e, r, i, u) {
                    return a += t.slice(o, u).replace(J, Z), o = u + n.length, e ? a += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), n
                })), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                try {
                    r = new Function(n.variable || "obj", "_", a)
                } catch (t) {
                    throw t.source = a, t
                }
                var u = function (t) {
                        return r.call(this, t, g)
                    },
                    c = n.variable || "obj";
                return u.source = "function(" + c + "){\n" + a + "}", u
            }, g.chain = function (t) {
                var n = g(t);
                return n._chain = !0, n
            };
            var Q = function (t, n) {
                return t._chain ? g(n).chain() : n
            };
            g.mixin = function (t) {
                return g.each(g.functions(t), (function (n) {
                    var e = g[n] = t[n];
                    g.prototype[n] = function () {
                        var t = [this._wrapped];
                        return s.apply(t, arguments), Q(this, e.apply(g, t))
                    }
                })), g
            }, g.mixin(g), g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function (t) {
                var n = u[t];
                g.prototype[t] = function () {
                    var e = this._wrapped;
                    return n.apply(e, arguments), "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0], Q(this, e)
                }
            })), g.each(["concat", "join", "slice"], (function (t) {
                var n = u[t];
                g.prototype[t] = function () {
                    return Q(this, n.apply(this._wrapped, arguments))
                }
            })), g.prototype.value = function () {
                return this._wrapped
            }, g.prototype.valueOf = g.prototype.toJSON = g.prototype.value, g.prototype.toString = function () {
                return String(this._wrapped)
            }, void 0 === (r = function () {
                return g
            }.apply(n, [])) || (e.exports = r)
        }()
    }).call(this, e(11), e(36)(t))
}, function (t, n, e) {
    "use strict";
    e.d(n, "n", (function () {
        return c
    })), e.d(n, "B", (function () {
        return l
    })), e.d(n, "A", (function () {
        return s
    })), e.d(n, "u", (function () {
        return f
    })), e.d(n, "v", (function () {
        return h
    })), e.d(n, "e", (function () {
        return d
    })), e.d(n, "g", (function () {
        return p
    })), e.d(n, "z", (function () {
        return v
    })), e.d(n, "d", (function () {
        return m
    })), e.d(n, "p", (function () {
        return y
    })), e.d(n, "r", (function () {
        return g
    })), e.d(n, "t", (function () {
        return b
    })), e.d(n, "o", (function () {
        return w
    })), e.d(n, "c", (function () {
        return _
    })), e.d(n, "D", (function () {
        return x
    })), e.d(n, "y", (function () {
        return M
    })), e.d(n, "x", (function () {
        return T
    })), e.d(n, "E", (function () {
        return k
    })), e.d(n, "h", (function () {
        return E
    })), e.d(n, "i", (function () {
        return S
    })), e.d(n, "j", (function () {
        return j
    })), e.d(n, "f", (function () {
        return O
    })), e.d(n, "k", (function () {
        return N
    })), e.d(n, "s", (function () {
        return P
    })), e.d(n, "q", (function () {
        return R
    })), e.d(n, "m", (function () {
        return z
    })), e.d(n, "b", (function () {
        return F
    })), e.d(n, "w", (function () {
        return C
    })), e.d(n, "C", (function () {
        return L
    })), e.d(n, "a", (function () {
        return D
    })), e.d(n, "l", (function () {
        return q
    })), e.d(n, "F", (function () {
        return U
    }));
    var r = e(0),
        i = e(23),
        o = e(2),
        a = e(3);

    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c() {
        return 8081 == +window.location.port
    }

    function l() {
        return i.a("html").attr("lang") || "en"
    }

    function s() {
        var t = (window.location.hostname.match(/(.*)\.nullschool\.net$/) || [])[1] || "earth";
        return "earth" === t ? "" : t
    }

    function f(t) {
        return !!t
    }

    function h(t) {
        return null != t
    }

    function d(t, n) {
        return h(t) ? t : n
    }

    function p(t) {
        return r.isString(t) && t.indexOf("/") >= 0 && (t = t.split("/")), q(t) && 2 === t.length ? t[0] / t[1] : +t
    }

    function v(t) {
        return q(t) ? t[2] : t
    }

    function m(t) {
        return 0 === t.length ? t : t.charAt(0).toUpperCase() + t.substr(1)
    }

    function y() {
        return /firefox/i.test(navigator.userAgent)
    }

    function g() {
        var t = navigator.userAgent;
        return /ipad|iphone|ipod/i.test(t) || /macintosh/i.test(t) && navigator.maxTouchPoints > 2
    }

    function b() {
        return /android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i.test(navigator.userAgent)
    }

    function w() {
        return self !== top
    }

    function _(t, n) {
        return h(t) && t[n] ? t[n].bind(t) : null
    }

    function x() {
        var t = document.getElementById("display"),
            n = t.clientWidth,
            e = t.clientHeight;
        return {
            xMin: 0,
            yMin: 0,
            xMax: n - 1,
            yMax: e - 1,
            width: n,
            height: e
        }
    }

    function M(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function T() {
        try {
            return new MouseEvent("click", {
                view: window,
                bubbles: !0,
                cancelable: !0
            })
        } catch (n) {
            var t = document.createEvent("MouseEvents");
            return t.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t
        }
    }

    function k(t, n) {
        for (var e = [], r = 85; r <= 255; r += t) e.push("rgb(".concat(r, ",").concat(r, ",").concat(r, ")"));
        return e.indexFor = function (t) {
            return Math.floor(Math.min(t, n) / n * (e.length - 1))
        }, e
    }

    function E(t, n) {
        return Math.abs(n).toFixed(2) + "° " + (n >= 0 ? "N" : "S") + ", " + Math.abs(t).toFixed(2) + "° " + (t >= 0 ? "E" : "W")
    }

    function S(t, n) {
        return n.conversion(t).toFixed(n.precision)
    }

    function j(t, n) {
        t = "into" === n.convention ? [-t[0], -t[1]] : t;
        var e = Object(a.h)(Object(a.j)(t), 5);
        return "".concat(e.toFixed(0), "° @ ").concat(S(Object(a.e)(t), n))
    }

    function A(t) {
        return r.object(t.split(/[?&]/).filter(f).map((function (t) {
            return t.split("=").map(decodeURIComponent).concat([null])
        })))
    }

    function O(t) {
        return {
            date: o.d(t)
        }
    }

    function N() {
        return r.has(A(window.location.search), "app")
    }

    function P() {
        var t = document.referrer.split("/")[2] || "",
            n = /dailymail/i.test(t);
        return r.has(A(window.location.search), "kiosk") && !n
    }

    function R() {
        return r.has(A(window.location.search), "fixed")
    }

    function z() {
        return r.has(A(window.location.search), "debug")
    }

    function F(t, n) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e],
                i = n[e];
            if (r !== i && !(r != r && i != i || q(r) && F(r, i))) return !1
        }
        return t.length === n.length
    }

    function C(t, n) {
        for (var e = new Float32Array(2 * t.length), r = 0; r < t.length; r++) {
            var i = 2 * r;
            e[i] = t[r], e[i + 1] = n[r]
        }
        return e
    }

    function L(t) {
        return Array.prototype.slice.call(t)
    }

    function I(t, n) {
        for (var e = new Int32Array([t.byteLength]), r = Math.max(t.length / n, 1), i = 0; i < t.length; i += r) e[0] = 31 * e[0] + t[Math.floor(i)];
        return e[0]
    }

    function D(t) {
        var n, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
        switch (t.byteLength % 4) {
            case 0:
                n = new Int32Array(t.buffer);
                break;
            case 2:
                n = new Int16Array(t.buffer);
                break;
            default:
                n = new Int8Array(t.buffer)
        }
        return I(n, e)
    }

    function q(t) {
        if (Array.isArray(t)) return !0;
        if ("object" !== u(t) || !t) return !1;
        var n = t.length;
        return "number" == typeof n && n >= 0
    }

    function U(t) {
        return Object.assign.apply(Object, [Object.create(null)].concat(Array.prototype.slice.call(arguments)))
    }
}, function (t, n, e) {
    "use strict";
    e.d(n, "f", (function () {
        return c
    })), e.d(n, "c", (function () {
        return l
    })), e.d(n, "b", (function () {
        return s
    })), e.d(n, "d", (function () {
        return f
    })), e.d(n, "a", (function () {
        return d
    })), e.d(n, "g", (function () {
        return p
    })), e.d(n, "e", (function () {
        return v
    })), e.d(n, "h", (function () {
        return m
    }));
    var r = e(0),
        i = e(14),
        o = ["year", "month", "day", "hour", "minute", "second", "milli"];

    function a(t, n) {
        return null != t ? t : n
    }

    function u(t) {
        return t = a(t, ""), (r.isString(t) || r.isNumber(t)) && (t = new Date(t)), t
    }

    function c(t) {
        return {
            year: (t = u(t)).getUTCFullYear(),
            month: t.getUTCMonth() + 1,
            day: t.getUTCDate(),
            hour: t.getUTCHours(),
            minute: t.getUTCMinutes(),
            second: t.getUTCSeconds(),
            milli: t.getUTCMilliseconds()
        }
    }

    function l(t) {
        return {
            year: (t = u(t)).getFullYear(),
            month: t.getMonth() + 1,
            day: t.getDate(),
            hour: t.getHours(),
            minute: t.getMinutes(),
            second: t.getSeconds(),
            milli: t.getMilliseconds()
        }
    }

    function s(t) {
        var n = +a(t.year, 0),
            e = new Date(Date.UTC(n, a(t.month, 1) - 1, a(t.day, 1), a(t.hour, 0), a(t.minute, 0), a(t.second, 0), a(t.milli, 0)));
        return +e == +e && 0 <= n && n <= 99 && e.setUTCFullYear(n), e
    }

    function f(t) {
        return h(s(t))
    }
    var h = c;

    function d(t, n) {
        var e = r.clone(t);
        return r.intersection(Object.keys(n), o).forEach((function (t) {
            e[t] = +a(e[t], 0) + +n[t]
        })), e
    }

    function p(t, n) {
        for (var e = [], r = 0; r < n.length; r++) {
            var o = n[r];
            if ("{" === o) {
                var a = "";
                for (r++; r < n.length; r++) {
                    if ("}" === (o = n[r])) {
                        var u = NaN;
                        switch (a[0]) {
                            case "y":
                                u = +t.year;
                                break;
                            case "M":
                                u = +t.month;
                                break;
                            case "d":
                                u = +t.day;
                                break;
                            case "h":
                                u = +t.hour;
                                break;
                            case "m":
                                u = +t.minute;
                                break;
                            case "s":
                                u = +t.second;
                                break;
                            case "S":
                                u = +t.milli
                        }
                        u == u ? e.push(Object(i.a)(u, a.length)) : e.push("{", a, "}");
                        break
                    }
                    a += o
                }
            } else e.push(o)
        }
        return e.join("")
    }

    function v(t, n, e) {
        var r = {};

        function i(t, n) {
            n == n && (r[t] = n)
        }
        e = e || {
            year: 1,
            month: 2,
            day: 3,
            hour: 4,
            minute: 5,
            second: 6,
            milli: 7
        };
        var o = n.exec(t);
        return o && (i("year", +o[e.year]), i("month", +o[e.month]), i("day", +o[e.day]), i("hour", +o[e.hour]), i("minute", +o[e.minute]), i("second", +o[e.second]), i("milli", +o[e.milli])), r
    }

    function m(t) {
        return s(t).toISOString()
    }
}, function (t, n, e) {
    "use strict";
    e.d(n, "c", (function () {
        return o
    })), e.d(n, "g", (function () {
        return a
    })), e.d(n, "h", (function () {
        return u
    })), e.d(n, "a", (function () {
        return c
    })), e.d(n, "f", (function () {
        return l
    })), e.d(n, "i", (function () {
        return s
    })), e.d(n, "e", (function () {
        return f
    })), e.d(n, "b", (function () {
        return h
    })), e.d(n, "j", (function () {
        return d
    })), e.d(n, "d", (function () {
        return p
    }));
    var r = e(4);

    function i(t, n) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, n) {
            if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
            var e = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return e
        }(t, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function o(t, n) {
        var e = t - n * Math.floor(t / n);
        return e === n ? 0 : e
    }

    function a(t) {
        var n = 4503599627370496,
            e = Math.abs(t);
        return e < n && (e += n, e -= n), Math.sign(t) * e
    }

    function u(t, n) {
        return a(t / n) * n
    }

    function c(t, n, e) {
        return Math.max(n, Math.min(t, e))
    }

    function l(t, n, e) {
        return (t - n) / (e - n)
    }

    function s(t, n, e) {
        return t * (e - n) + n
    }

    function f(t) {
        var n = i(t, 2),
            e = n[0],
            r = n[1];
        return Math.sqrt(e * e + r * r)
    }

    function h(t, n) {
        return f([n[0] - t[0], n[1] - t[1]])
    }

    function d(t) {
        return (Math.atan2(t[0], t[1]) * r.a + 360) % 360
    }

    function p(t, n, e, i, o) {
        var a = 1e-7,
            u = e < 0 ? a : -a,
            c = t(n + a, e),
            l = t(n, e + u),
            s = a * Math.cos(e * r.c);
        return [(c[0] - i) / s, (c[1] - o) / s, (l[0] - i) / u, (l[1] - o) / u]
    }
}, function (t, n, e) {
    "use strict";
    e.d(n, "d", (function () {
        return r
    })), e.d(n, "e", (function () {
        return i
    })), e.d(n, "a", (function () {
        return o
    })), e.d(n, "c", (function () {
        return a
    })), e.d(n, "b", (function () {
        return u
    }));
    var r = Math.PI,
        i = 2 * r,
        o = 360 / i,
        a = i / 360,
        u = 6e4
}, , , function (t, n, e) {
    "use strict";
    e.d(n, "c", (function () {
        return J
    })), e.d(n, "a", (function () {
        return Z
    }));
    var r = e(15),
        i = e(27),
        o = e(28),
        a = function (t) {
            return new Array(t.length)
        };

    function u(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }
    u.prototype = {
        constructor: u,
        appendChild: function (t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function (t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t)
        }
    };

    function c(t, n, e, r, i, o) {
        for (var a, c = 0, l = n.length, s = o.length; c < s; ++c)(a = n[c]) ? (a.__data__ = o[c], r[c] = a) : e[c] = new u(t, o[c]);
        for (; c < l; ++c)(a = n[c]) && (i[c] = a)
    }

    function l(t, n, e, r, i, o, a) {
        var c, l, s, f = {},
            h = n.length,
            d = o.length,
            p = new Array(h);
        for (c = 0; c < h; ++c)(l = n[c]) && (p[c] = s = "$" + a.call(l, l.__data__, c, n), s in f ? i[c] = l : f[s] = l);
        for (c = 0; c < d; ++c)(l = f[s = "$" + a.call(t, o[c], c, o)]) ? (r[c] = l, l.__data__ = o[c], f[s] = null) : e[c] = new u(t, o[c]);
        for (c = 0; c < h; ++c)(l = n[c]) && f[p[c]] === l && (i[c] = l)
    }

    function s(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    var f = e(16);

    function h(t) {
        return function () {
            this.removeAttribute(t)
        }
    }

    function d(t) {
        return function () {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function p(t, n) {
        return function () {
            this.setAttribute(t, n)
        }
    }

    function v(t, n) {
        return function () {
            this.setAttributeNS(t.space, t.local, n)
        }
    }

    function m(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }

    function y(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }
    var g = e(29);

    function b(t) {
        return function () {
            delete this[t]
        }
    }

    function w(t, n) {
        return function () {
            this[t] = n
        }
    }

    function _(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }

    function x(t) {
        return t.trim().split(/^|\s+/)
    }

    function M(t) {
        return t.classList || new T(t)
    }

    function T(t) {
        this._node = t, this._names = x(t.getAttribute("class") || "")
    }

    function k(t, n) {
        for (var e = M(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }

    function E(t, n) {
        for (var e = M(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }

    function S(t) {
        return function () {
            k(this, t)
        }
    }

    function j(t) {
        return function () {
            E(this, t)
        }
    }

    function A(t, n) {
        return function () {
            (n.apply(this, arguments) ? k : E)(this, t)
        }
    }
    T.prototype = {
        add: function (t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function (t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function (t) {
            return this._names.indexOf(t) >= 0
        }
    };

    function O() {
        this.textContent = ""
    }

    function N(t) {
        return function () {
            this.textContent = t
        }
    }

    function P(t) {
        return function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        }
    }

    function R() {
        this.innerHTML = ""
    }

    function z(t) {
        return function () {
            this.innerHTML = t
        }
    }

    function F(t) {
        return function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        }
    }

    function C() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function L() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    var I = e(9);

    function D(t) {
        return function () {
            var n = this.ownerDocument,
                e = this.namespaceURI;
            return e === I.b && n.documentElement.namespaceURI === I.b ? n.createElement(t) : n.createElementNS(e, t)
        }
    }

    function q(t) {
        return function () {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    var U = function (t) {
        var n = Object(f.a)(t);
        return (n.local ? q : D)(n)
    };

    function H() {
        return null
    }

    function G() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function X() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }

    function W() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    var B = e(18),
        V = e(17);

    function $(t, n, e) {
        var r = Object(V.a)(t),
            i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function Y(t, n) {
        return function () {
            return $(this, t, n)
        }
    }

    function K(t, n) {
        return function () {
            return $(this, t, n.apply(this, arguments))
        }
    }
    var J = [null];

    function Z(t, n) {
        this._groups = t, this._parents = n
    }

    function Q() {
        return new Z([
            [document.documentElement]
        ], J)
    }
    Z.prototype = Q.prototype = {
        constructor: Z,
        select: function (t) {
            "function" != typeof t && (t = Object(r.a)(t));
            for (var n = this._groups, e = n.length, i = new Array(e), o = 0; o < e; ++o)
                for (var a, u, c = n[o], l = c.length, s = i[o] = new Array(l), f = 0; f < l; ++f)(a = c[f]) && (u = t.call(a, a.__data__, f, c)) && ("__data__" in a && (u.__data__ = a.__data__), s[f] = u);
            return new Z(i, this._parents)
        },
        selectAll: function (t) {
            "function" != typeof t && (t = Object(i.a)(t));
            for (var n = this._groups, e = n.length, r = [], o = [], a = 0; a < e; ++a)
                for (var u, c = n[a], l = c.length, s = 0; s < l; ++s)(u = c[s]) && (r.push(t.call(u, u.__data__, s, c)), o.push(u));
            return new Z(r, o)
        },
        filter: function (t) {
            "function" != typeof t && (t = Object(o.a)(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var a, u = n[i], c = u.length, l = r[i] = [], s = 0; s < c; ++s)(a = u[s]) && t.call(a, a.__data__, s, u) && l.push(a);
            return new Z(r, this._parents)
        },
        data: function (t, n) {
            if (!t) return m = new Array(this.size()), h = -1, this.each((function (t) {
                m[++h] = t
            })), m;
            var e, r = n ? l : c,
                i = this._parents,
                o = this._groups;
            "function" != typeof t && (e = t, t = function () {
                return e
            });
            for (var a = o.length, u = new Array(a), s = new Array(a), f = new Array(a), h = 0; h < a; ++h) {
                var d = i[h],
                    p = o[h],
                    v = p.length,
                    m = t.call(d, d && d.__data__, h, i),
                    y = m.length,
                    g = s[h] = new Array(y),
                    b = u[h] = new Array(y);
                r(d, p, g, b, f[h] = new Array(v), m, n);
                for (var w, _, x = 0, M = 0; x < y; ++x)
                    if (w = g[x]) {
                        for (x >= M && (M = x + 1); !(_ = b[M]) && ++M < y;);
                        w._next = _ || null
                    }
            }
            return (u = new Z(u, i))._enter = s, u._exit = f, u
        },
        enter: function () {
            return new Z(this._enter || this._groups.map(a), this._parents)
        },
        exit: function () {
            return new Z(this._exit || this._groups.map(a), this._parents)
        },
        join: function (t, n, e) {
            var r = this.enter(),
                i = this,
                o = this.exit();
            return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
        },
        merge: function (t) {
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, l = n[u], s = e[u], f = l.length, h = a[u] = new Array(f), d = 0; d < f; ++d)(c = l[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) a[u] = n[u];
            return new Z(a, this._parents)
        },
        order: function () {
            for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;)(r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);
            return this
        },
        sort: function (t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = s);
            for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                for (var a, u = e[o], c = u.length, l = i[o] = new Array(c), f = 0; f < c; ++f)(a = u[f]) && (l[f] = a);
                l.sort(n)
            }
            return new Z(i, this._parents).order()
        },
        call: function () {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        },
        nodes: function () {
            var t = new Array(this.size()),
                n = -1;
            return this.each((function () {
                t[++n] = this
            })), t
        },
        node: function () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                    var a = r[i];
                    if (a) return a
                }
            return null
        },
        size: function () {
            var t = 0;
            return this.each((function () {
                ++t
            })), t
        },
        empty: function () {
            return !this.node()
        },
        each: function (t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)(i = o[a]) && t.call(i, i.__data__, a, o);
            return this
        },
        attr: function (t, n) {
            var e = Object(f.a)(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? d : h : "function" == typeof n ? e.local ? y : m : e.local ? v : p)(e, n))
        },
        style: g.a,
        property: function (t, n) {
            return arguments.length > 1 ? this.each((null == n ? b : "function" == typeof n ? _ : w)(t, n)) : this.node()[t]
        },
        classed: function (t, n) {
            var e = x(t + "");
            if (arguments.length < 2) {
                for (var r = M(this.node()), i = -1, o = e.length; ++i < o;)
                    if (!r.contains(e[i])) return !1;
                return !0
            }
            return this.each(("function" == typeof n ? A : n ? S : j)(e, n))
        },
        text: function (t) {
            return arguments.length ? this.each(null == t ? O : ("function" == typeof t ? P : N)(t)) : this.node().textContent
        },
        html: function (t) {
            return arguments.length ? this.each(null == t ? R : ("function" == typeof t ? F : z)(t)) : this.node().innerHTML
        },
        raise: function () {
            return this.each(C)
        },
        lower: function () {
            return this.each(L)
        },
        append: function (t) {
            var n = "function" == typeof t ? t : U(t);
            return this.select((function () {
                return this.appendChild(n.apply(this, arguments))
            }))
        },
        insert: function (t, n) {
            var e = "function" == typeof t ? t : U(t),
                i = null == n ? H : "function" == typeof n ? n : Object(r.a)(n);
            return this.select((function () {
                return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
            }))
        },
        remove: function () {
            return this.each(G)
        },
        clone: function (t) {
            return this.select(t ? W : X)
        },
        datum: function (t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: B.b,
        dispatch: function (t, n) {
            return this.each(("function" == typeof n ? K : Y)(t, n))
        }
    };
    n.b = Q
}, , function (t, n, e) {
    "use strict";
    e.d(n, "b", (function () {
        return r
    }));
    var r = "http://www.w3.org/1999/xhtml";
    n.a = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }
}, , function (t, n) {
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : e(window)) && (r = window)
    }
    t.exports = r
}, , function (t, n, e) {
    "use strict";
    n.a = function (t) {
        var n = this.constructor;
        return this.then((function (e) {
            return n.resolve(t()).then((function () {
                return e
            }))
        }), (function (e) {
            return n.resolve(t()).then((function () {
                return n.reject(e)
            }))
        }))
    }
}, function (t, n, e) {
    "use strict";

    function r(t, n, e) {
        var r = t.toString(),
            i = Math.max(n - r.length, 0);
        return new Array(i + 1).join(e || "0") + r
    }
    e.d(n, "a", (function () {
        return r
    }))
}, function (t, n, e) {
    "use strict";

    function r() {}
    n.a = function (t) {
        return null == t ? r : function () {
            return this.querySelector(t)
        }
    }
}, function (t, n, e) {
    "use strict";
    var r = e(9);
    n.a = function (t) {
        var n = t += "",
            e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.a.hasOwnProperty(n) ? {
            space: r.a[n],
            local: t
        } : t
    }
}, function (t, n, e) {
    "use strict";
    n.a = function (t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    }
}, function (t, n, e) {
    "use strict";
    e.d(n, "c", (function () {
        return i
    })), e.d(n, "a", (function () {
        return s
    }));
    var r = {},
        i = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (r = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));

    function o(t, n, e) {
        return t = a(t, n, e),
            function (n) {
                var e = n.relatedTarget;
                e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
            }
    }

    function a(t, n, e) {
        return function (r) {
            var o = i;
            i = r;
            try {
                t.call(this, this.__data__, n, e)
            } finally {
                i = o
            }
        }
    }

    function u(t) {
        return t.trim().split(/^|\s+/).map((function (t) {
            var n = "",
                e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                type: t,
                name: n
            }
        }))
    }

    function c(t) {
        return function () {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                ++i ? n.length = i : delete this.__on
            }
        }
    }

    function l(t, n, e) {
        var i = r.hasOwnProperty(t.type) ? o : a;
        return function (r, o, a) {
            var u, c = this.__on,
                l = i(n, o, a);
            if (c)
                for (var s = 0, f = c.length; s < f; ++s)
                    if ((u = c[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = l, u.capture = e), void(u.value = n);
            this.addEventListener(t.type, l, e), u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: l,
                capture: e
            }, c ? c.push(u) : this.__on = [u]
        }
    }

    function s(t, n, e, r) {
        var o = i;
        t.sourceEvent = i, i = t;
        try {
            return n.apply(e, r)
        } finally {
            i = o
        }
    }
    n.b = function (t, n, e) {
        var r, i, o = u(t + ""),
            a = o.length;
        if (!(arguments.length < 2)) {
            for (s = n ? l : c, null == e && (e = !1), r = 0; r < a; ++r) this.each(s(o[r], n, e));
            return this
        }
        var s = this.node().__on;
        if (s)
            for (var f, h = 0, d = s.length; h < d; ++h)
                for (r = 0, f = s[h]; r < a; ++r)
                    if ((i = o[r]).type === f.type && i.name === f.name) return f.value
    }
}, function (t, n, e) {
    "use strict";
    var r = console;
    n.a = function (t) {
        function n(t, n) {
            return "function" == typeof n ? n.bind(t) : function () {}
        }
        return {
            debug: n(t = t || r || {}, t.log),
            info: n(t, t.info),
            warn: n(t, t.warn),
            error: n(t, t.error),
            time: n(t, t.time),
            timeEnd: n(t, t.timeEnd)
        }
    }
}, , function (t, n, e) {
    "use strict";
    e.d(n, "a", (function () {
        return o
    })), e.d(n, "b", (function () {
        return a
    }));
    var r = e(23),
        i = [/dailymail/i, /tamilinstanews/i, /xtremeweatherforecast/i, /oracle77.asuscomm/i];

    function o(t) {
        var n = t.split("/")[2] || "";
        return i.some((function (t) {
            return t.test(n)
        }))
    }

    function a() {
        return r.a("body").attr("style", "font-size: 12em; color: red;").text("XX - contact @cambecc").selectAll("*").remove()
    }
}, function (t, n, e) {
    "use strict";
    e.d(n, "a", (function () {
        return ds
    }));
    var r = {};
    e.r(r), e.d(r, "atlantis", (function () {
        return Wa
    })), e.d(r, "conic_equidistant", (function () {
        return Ba
    })), e.d(r, "equirectangular", (function () {
        return Va
    })), e.d(r, "orthographic", (function () {
        return $a
    })), e.d(r, "patterson", (function () {
        return Ya
    })), e.d(r, "stereographic", (function () {
        return Ka
    })), e.d(r, "waterman", (function () {
        return Ja
    })), e.d(r, "winkel3", (function () {
        return Za
    }));
    var i = e(4),
        o = e(3),
        a = e(0),
        u = {
            value: function () {}
        };

    function c() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new l(r)
    }

    function l(t) {
        this._ = t
    }

    function s(t, n) {
        return t.trim().split(/^|\s+/).map((function (t) {
            var e = "",
                r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
                type: t,
                name: e
            }
        }))
    }

    function f(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)
            if ((e = t[r]).name === n) return e.value
    }

    function h(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) {
                t[r] = u, t = t.slice(0, r).concat(t.slice(r + 1));
                break
            } return null != e && t.push({
            name: n,
            value: e
        }), t
    }
    l.prototype = c.prototype = {
        constructor: l,
        on: function (t, n) {
            var e, r = this._,
                i = s(t + "", r),
                o = -1,
                a = i.length;
            if (!(arguments.length < 2)) {
                if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                for (; ++o < a;)
                    if (e = (t = i[o]).type) r[e] = h(r[e], t.name, n);
                    else if (null == n)
                    for (e in r) r[e] = h(r[e], t.name, null);
                return this
            }
            for (; ++o < a;)
                if ((e = (t = i[o]).type) && (e = f(r[e], t.name))) return e
        },
        copy: function () {
            var t = {},
                n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new l(t)
        },
        call: function (t, n) {
            if ((e = arguments.length - 2) > 0)
                for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
        },
        apply: function (t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
        }
    };
    var d = c;
    var p = e(23),
        v = e(18),
        m = function () {
            for (var t, n = v.c; t = n.sourceEvent;) n = t;
            return n
        },
        y = function (t, n) {
            var e = t.ownerSVGElement || t;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
        },
        g = function (t) {
            var n = m();
            return n.changedTouches && (n = n.changedTouches[0]), y(t, n)
        };

    function b() {
        v.c.stopImmediatePropagation()
    }
    var w = function () {
            v.c.preventDefault(), v.c.stopImmediatePropagation()
        },
        _ = function (t) {
            var n = t.document.documentElement,
                e = Object(p.a)(t).on("dragstart.drag", w, !0);
            "onselectstart" in n ? e.on("selectstart.drag", w, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
        };

    function x(t, n) {
        var e = t.document.documentElement,
            r = Object(p.a)(t).on("dragstart.drag", null);
        n && (r.on("click.drag", w, !0), setTimeout((function () {
            r.on("click.drag", null)
        }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }
    var M = Math.SQRT2;

    function T(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }
    var k = function (t, n) {
            var e, r, i = t[0],
                o = t[1],
                a = t[2],
                u = n[0],
                c = n[1],
                l = n[2],
                s = u - i,
                f = c - o,
                h = s * s + f * f;
            if (h < 1e-12) r = Math.log(l / a) / M, e = function (t) {
                return [i + t * s, o + t * f, a * Math.exp(M * t * r)]
            };
            else {
                var d = Math.sqrt(h),
                    p = (l * l - a * a + 4 * h) / (2 * a * 2 * d),
                    v = (l * l - a * a - 4 * h) / (2 * l * 2 * d),
                    m = Math.log(Math.sqrt(p * p + 1) - p),
                    y = Math.log(Math.sqrt(v * v + 1) - v);
                r = (y - m) / M, e = function (t) {
                    var n, e = t * r,
                        u = T(m),
                        c = a / (2 * d) * (u * (n = M * e + m, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function (t) {
                            return ((t = Math.exp(t)) - 1 / t) / 2
                        }(m));
                    return [i + c * s, o + c * f, a * u / T(M * e + m)]
                }
            }
            return e.duration = 1e3 * r, e
        },
        E = function (t, n, e) {
            arguments.length < 3 && (e = n, n = m().changedTouches);
            for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
                if ((r = n[i]).identifier === e) return y(t, r);
            return null
        },
        S = e(7);

    function j(t) {
        return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var A, O, N = 0,
        P = 0,
        R = 0,
        z = 0,
        F = 0,
        C = 0,
        L = "object" === ("undefined" == typeof performance ? "undefined" : j(performance)) && performance.now ? performance : Date,
        I = "object" === ("undefined" == typeof window ? "undefined" : j(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
            setTimeout(t, 17)
        };

    function D() {
        return F || (I(q), F = L.now() + C)
    }

    function q() {
        F = 0
    }

    function U() {
        this._call = this._time = this._next = null
    }

    function H(t, n, e) {
        var r = new U;
        return r.restart(t, n, e), r
    }

    function G() {
        F = (z = L.now()) + C, N = P = 0;
        try {
            ! function () {
                D(), ++N;
                for (var t, n = A; n;)(t = F - n._time) >= 0 && n._call.call(null, t), n = n._next;
                --N
            }()
        } finally {
            N = 0,
                function () {
                    var t, n, e = A,
                        r = 1 / 0;
                    for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : A = n);
                    O = t, W(r)
                }(), F = 0
        }
    }

    function X() {
        var t = L.now(),
            n = t - z;
        n > 1e3 && (C -= n, z = t)
    }

    function W(t) {
        N || (P && (P = clearTimeout(P)), t - F > 24 ? (t < 1 / 0 && (P = setTimeout(G, t - L.now() - C)), R && (R = clearInterval(R))) : (R || (z = L.now(), R = setInterval(X, 1e3)), N = 1, I(G)))
    }
    U.prototype = H.prototype = {
        constructor: U,
        restart: function (t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? D() : +e) + (null == n ? 0 : +n), this._next || O === this || (O ? O._next = this : A = this, O = this), this._call = t, this._time = e, W()
        },
        stop: function () {
            this._call && (this._call = null, this._time = 1 / 0, W())
        }
    };
    var B = function (t, n, e) {
            var r = new U;
            return n = null == n ? 0 : +n, r.restart((function (e) {
                r.stop(), t(e + n)
            }), n, e), r
        },
        V = d("start", "end", "cancel", "interrupt"),
        $ = [],
        Y = function (t, n, e, r, i, o) {
            var a = t.__transition;
            if (a) {
                if (e in a) return
            } else t.__transition = {};
            ! function (t, n, e) {
                var r, i = t.__transition;

                function o(c) {
                    var l, s, f, h;
                    if (1 !== e.state) return u();
                    for (l in i)
                        if ((h = i[l]).name === e.name) {
                            if (3 === h.state) return B(o);
                            4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[l]) : +l < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[l])
                        } if (B((function () {
                            3 === e.state && (e.state = 4, e.timer.restart(a, e.delay, e.time), a(c))
                        })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                        for (e.state = 3, r = new Array(f = e.tween.length), l = 0, s = -1; l < f; ++l)(h = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                        r.length = s + 1
                    }
                }

                function a(n) {
                    for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = 5, 1), o = -1, a = r.length; ++o < a;) r[o].call(t, i);
                    5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), u())
                }

                function u() {
                    for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                    delete t.__transition
                }
                i[n] = e, e.timer = H((function (t) {
                    e.state = 1, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
                }), 0, e.time)
            }(t, e, {
                name: n,
                index: r,
                group: i,
                on: V,
                tween: $,
                time: o.time,
                delay: o.delay,
                duration: o.duration,
                ease: o.ease,
                timer: null,
                state: 0
            })
        };

    function K(t, n) {
        var e = Z(t, n);
        if (e.state > 0) throw new Error("too late; already scheduled");
        return e
    }

    function J(t, n) {
        var e = Z(t, n);
        if (e.state > 3) throw new Error("too late; already running");
        return e
    }

    function Z(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e
    }
    var Q, tt, nt, et, rt = function (t, n) {
            var e, r, i, o = t.__transition,
                a = !0;
            if (o) {
                for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
                a && delete t.__transition
            }
        },
        it = function (t, n) {
            return n -= t = +t,
                function (e) {
                    return t + n * e
                }
        },
        ot = 180 / Math.PI,
        at = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        },
        ut = function (t, n, e, r, i, o) {
            var a, u, c;
            return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
                translateX: i,
                translateY: o,
                rotate: Math.atan2(n, t) * ot,
                skewX: Math.atan(c) * ot,
                scaleX: a,
                scaleY: u
            }
        };

    function ct(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " " : ""
        }
        return function (o, a) {
            var u = [],
                c = [];
            return o = t(o), a = t(a),
                function (t, r, i, o, a, u) {
                    if (t !== i || r !== o) {
                        var c = a.push("translate(", null, n, null, e);
                        u.push({
                            i: c - 4,
                            x: it(t, i)
                        }, {
                            i: c - 2,
                            x: it(r, o)
                        })
                    } else(i || o) && a.push("translate(" + i + n + o + e)
                }(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
                function (t, n, e, o) {
                    t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                        i: e.push(i(e) + "rotate(", null, r) - 2,
                        x: it(t, n)
                    })) : n && e.push(i(e) + "rotate(" + n + r)
                }(o.rotate, a.rotate, u, c),
                function (t, n, e, o) {
                    t !== n ? o.push({
                        i: e.push(i(e) + "skewX(", null, r) - 2,
                        x: it(t, n)
                    }) : n && e.push(i(e) + "skewX(" + n + r)
                }(o.skewX, a.skewX, u, c),
                function (t, n, e, r, o, a) {
                    if (t !== e || n !== r) {
                        var u = o.push(i(o) + "scale(", null, ",", null, ")");
                        a.push({
                            i: u - 4,
                            x: it(t, e)
                        }, {
                            i: u - 2,
                            x: it(n, r)
                        })
                    } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c), o = a = null,
                function (t) {
                    for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t);
                    return u.join("")
                }
        }
    }
    var lt = ct((function (t) {
            return "none" === t ? at : (Q || (Q = document.createElement("DIV"), tt = document.documentElement, nt = document.defaultView), Q.style.transform = t, t = nt.getComputedStyle(tt.appendChild(Q), null).getPropertyValue("transform"), tt.removeChild(Q), t = t.slice(7, -1).split(","), ut(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }), "px, ", "px)", "deg)"),
        st = ct((function (t) {
            return null == t ? at : (et || (et = document.createElementNS("http://www.w3.org/2000/svg", "g")), et.setAttribute("transform", t), (t = et.transform.baseVal.consolidate()) ? (t = t.matrix, ut(t.a, t.b, t.c, t.d, t.e, t.f)) : at)
        }), ", ", ")", ")"),
        ft = e(16);

    function ht(t, n) {
        var e, r;
        return function () {
            var i = J(this, t),
                o = i.tween;
            if (o !== e)
                for (var a = 0, u = (r = e = o).length; a < u; ++a)
                    if (r[a].name === n) {
                        (r = r.slice()).splice(a, 1);
                        break
                    } i.tween = r
        }
    }

    function dt(t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error;
        return function () {
            var o = J(this, t),
                a = o.tween;
            if (a !== r) {
                i = (r = a).slice();
                for (var u = {
                        name: n,
                        value: e
                    }, c = 0, l = i.length; c < l; ++c)
                    if (i[c].name === n) {
                        i[c] = u;
                        break
                    } c === l && i.push(u)
            }
            o.tween = i
        }
    }

    function pt(t, n, e) {
        var r = t._id;
        return t.each((function () {
                var t = J(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments)
            })),
            function (t) {
                return Z(t, r).value[n]
            }
    }
    var vt = function (t, n, e) {
        t.prototype = n.prototype = e, e.constructor = t
    };

    function mt(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }

    function yt() {}
    var gt = "\\s*([+-]?\\d+)\\s*",
        bt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        wt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        _t = /^#([0-9a-f]{3,8})$/,
        xt = new RegExp("^rgb\\(" + [gt, gt, gt] + "\\)$"),
        Mt = new RegExp("^rgb\\(" + [wt, wt, wt] + "\\)$"),
        Tt = new RegExp("^rgba\\(" + [gt, gt, gt, bt] + "\\)$"),
        kt = new RegExp("^rgba\\(" + [wt, wt, wt, bt] + "\\)$"),
        Et = new RegExp("^hsl\\(" + [bt, wt, wt] + "\\)$"),
        St = new RegExp("^hsla\\(" + [bt, wt, wt, bt] + "\\)$"),
        jt = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };

    function At() {
        return this.rgb().formatHex()
    }

    function Ot() {
        return this.rgb().formatRgb()
    }

    function Nt(t) {
        var n, e;
        return t = (t + "").trim().toLowerCase(), (n = _t.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? Pt(n) : 3 === e ? new Ct(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? new Ct(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? new Ct(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = xt.exec(t)) ? new Ct(n[1], n[2], n[3], 1) : (n = Mt.exec(t)) ? new Ct(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Tt.exec(t)) ? Rt(n[1], n[2], n[3], n[4]) : (n = kt.exec(t)) ? Rt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Et.exec(t)) ? qt(n[1], n[2] / 100, n[3] / 100, 1) : (n = St.exec(t)) ? qt(n[1], n[2] / 100, n[3] / 100, n[4]) : jt.hasOwnProperty(t) ? Pt(jt[t]) : "transparent" === t ? new Ct(NaN, NaN, NaN, 0) : null
    }

    function Pt(t) {
        return new Ct(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function Rt(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new Ct(t, n, e, r)
    }

    function zt(t) {
        return t instanceof yt || (t = Nt(t)), t ? new Ct((t = t.rgb()).r, t.g, t.b, t.opacity) : new Ct
    }

    function Ft(t, n, e, r) {
        return 1 === arguments.length ? zt(t) : new Ct(t, n, e, null == r ? 1 : r)
    }

    function Ct(t, n, e, r) {
        this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
    }

    function Lt() {
        return "#" + Dt(this.r) + Dt(this.g) + Dt(this.b)
    }

    function It() {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }

    function Dt(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function qt(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Gt(t, n, e, r)
    }

    function Ut(t) {
        if (t instanceof Gt) return new Gt(t.h, t.s, t.l, t.opacity);
        if (t instanceof yt || (t = Nt(t)), !t) return new Gt;
        if (t instanceof Gt) return t;
        var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            o = Math.max(n, e, r),
            a = NaN,
            u = o - i,
            c = (o + i) / 2;
        return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new Gt(a, u, c, t.opacity)
    }

    function Ht(t, n, e, r) {
        return 1 === arguments.length ? Ut(t) : new Gt(t, n, e, null == r ? 1 : r)
    }

    function Gt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Xt(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }

    function Wt(t, n, e, r, i) {
        var o = t * t,
            a = o * t;
        return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
    }
    vt(yt, Nt, {
        copy: function (t) {
            return Object.assign(new this.constructor, this, t)
        },
        displayable: function () {
            return this.rgb().displayable()
        },
        hex: At,
        formatHex: At,
        formatHsl: function () {
            return Ut(this).formatHsl()
        },
        formatRgb: Ot,
        toString: Ot
    }), vt(Ct, Ft, mt(yt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ct(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Ct(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function () {
            return this
        },
        displayable: function () {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: Lt,
        formatHex: Lt,
        formatRgb: It,
        toString: It
    })), vt(Gt, Ht, mt(yt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Gt(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Gt(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function () {
            var t = this.h % 360 + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n,
                i = 2 * e - r;
            return new Ct(Xt(t >= 240 ? t - 240 : t + 120, i, r), Xt(t, i, r), Xt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl: function () {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
        }
    }));
    var Bt = function (t) {
            var n = t.length - 1;
            return function (e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                    i = t[r],
                    o = t[r + 1],
                    a = r > 0 ? t[r - 1] : 2 * i - o,
                    u = r < n - 1 ? t[r + 2] : 2 * o - i;
                return Wt((e - r / n) * n, a, i, o, u)
            }
        },
        Vt = function (t) {
            return function () {
                return t
            }
        };

    function $t(t, n) {
        return function (e) {
            return t + e * n
        }
    }

    function Yt(t, n) {
        var e = n - t;
        return e ? $t(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Vt(isNaN(t) ? n : t)
    }

    function Kt(t) {
        return 1 == (t = +t) ? Jt : function (n, e) {
            return e - n ? function (t, n, e) {
                return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                    function (r) {
                        return Math.pow(t + r * n, e)
                    }
            }(n, e, t) : Vt(isNaN(n) ? e : n)
        }
    }

    function Jt(t, n) {
        var e = n - t;
        return e ? $t(t, e) : Vt(isNaN(t) ? n : t)
    }
    var Zt = function t(n) {
        var e = Kt(n);

        function r(t, n) {
            var r = e((t = Ft(t)).r, (n = Ft(n)).r),
                i = e(t.g, n.g),
                o = e(t.b, n.b),
                a = Jt(t.opacity, n.opacity);
            return function (n) {
                return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + ""
            }
        }
        return r.gamma = t, r
    }(1);

    function Qt(t) {
        return function (n) {
            var e, r, i = n.length,
                o = new Array(i),
                a = new Array(i),
                u = new Array(i);
            for (e = 0; e < i; ++e) r = Ft(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;
            return o = t(o), a = t(a), u = t(u), r.opacity = 1,
                function (t) {
                    return r.r = o(t), r.g = a(t), r.b = u(t), r + ""
                }
        }
    }
    Qt(Bt), Qt((function (t) {
        var n = t.length;
        return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                o = t[r % n],
                a = t[(r + 1) % n],
                u = t[(r + 2) % n];
            return Wt((e - r / n) * n, i, o, a, u)
        }
    }));
    var tn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        nn = new RegExp(tn.source, "g");
    var en = function (t, n) {
            var e, r, i, o = tn.lastIndex = nn.lastIndex = 0,
                a = -1,
                u = [],
                c = [];
            for (t += "", n += "";
                (e = tn.exec(t)) && (r = nn.exec(n));)(i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({
                i: a,
                x: it(e, r)
            })), o = nn.lastIndex;
            return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? c[0] ? function (t) {
                return function (n) {
                    return t(n) + ""
                }
            }(c[0].x) : function (t) {
                return function () {
                    return t
                }
            }(n) : (n = c.length, function (t) {
                for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
                return u.join("")
            })
        },
        rn = function (t, n) {
            var e;
            return ("number" == typeof n ? it : n instanceof Nt ? Zt : (e = Nt(n)) ? (n = e, Zt) : en)(t, n)
        };

    function on(t) {
        return function () {
            this.removeAttribute(t)
        }
    }

    function an(t) {
        return function () {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function un(t, n, e) {
        var r, i, o = e + "";
        return function () {
            var a = this.getAttribute(t);
            return a === o ? null : a === r ? i : i = n(r = a, e)
        }
    }

    function cn(t, n, e) {
        var r, i, o = e + "";
        return function () {
            var a = this.getAttributeNS(t.space, t.local);
            return a === o ? null : a === r ? i : i = n(r = a, e)
        }
    }

    function ln(t, n, e) {
        var r, i, o;
        return function () {
            var a, u, c = e(this);
            if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
            this.removeAttribute(t)
        }
    }

    function sn(t, n, e) {
        var r, i, o;
        return function () {
            var a, u, c = e(this);
            if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function fn(t, n) {
        return function (e) {
            this.setAttribute(t, n(e))
        }
    }

    function hn(t, n) {
        return function (e) {
            this.setAttributeNS(t.space, t.local, n(e))
        }
    }

    function dn(t, n) {
        var e, r;

        function i() {
            var i = n.apply(this, arguments);
            return i !== r && (e = (r = i) && hn(t, i)), e
        }
        return i._value = n, i
    }

    function pn(t, n) {
        var e, r;

        function i() {
            var i = n.apply(this, arguments);
            return i !== r && (e = (r = i) && fn(t, i)), e
        }
        return i._value = n, i
    }

    function vn(t, n) {
        return function () {
            K(this, t).delay = +n.apply(this, arguments)
        }
    }

    function mn(t, n) {
        return n = +n,
            function () {
                K(this, t).delay = n
            }
    }

    function yn(t, n) {
        return function () {
            J(this, t).duration = +n.apply(this, arguments)
        }
    }

    function gn(t, n) {
        return n = +n,
            function () {
                J(this, t).duration = n
            }
    }

    function bn(t, n) {
        if ("function" != typeof n) throw new Error;
        return function () {
            J(this, t).ease = n
        }
    }
    var wn = e(28);

    function _n(t, n, e) {
        var r, i, o = function (t) {
            return (t + "").trim().split(/^|\s+/).every((function (t) {
                var n = t.indexOf(".");
                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
            }))
        }(n) ? K : J;
        return function () {
            var a = o(this, t),
                u = a.on;
            u !== r && (i = (r = u).copy()).on(n, e), a.on = i
        }
    }
    var xn = e(15),
        Mn = e(27),
        Tn = S.b.prototype.constructor,
        kn = e(29);

    function En(t) {
        return function () {
            this.style.removeProperty(t)
        }
    }

    function Sn(t, n, e) {
        return function (r) {
            this.style.setProperty(t, n(r), e)
        }
    }

    function jn(t, n, e) {
        var r, i;

        function o() {
            var o = n.apply(this, arguments);
            return o !== i && (r = (i = o) && Sn(t, o, e)), r
        }
        return o._value = n, o
    }
    var An = 0;

    function On(t, n, e, r) {
        this._groups = t, this._parents = n, this._name = e, this._id = r
    }

    function Nn() {
        return ++An
    }
    var Pn = S.b.prototype;
    On.prototype = function (t) {
        return Object(S.b)().transition(t)
    }.prototype = {
        constructor: On,
        select: function (t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = Object(xn.a)(t));
            for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                for (var u, c, l = r[a], s = l.length, f = o[a] = new Array(s), h = 0; h < s; ++h)(u = l[h]) && (c = t.call(u, u.__data__, h, l)) && ("__data__" in u && (c.__data__ = u.__data__), f[h] = c, Y(f[h], n, e, h, f, Z(u, e)));
            return new On(o, this._parents, n, e)
        },
        selectAll: function (t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = Object(Mn.a)(t));
            for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
                for (var c, l = r[u], s = l.length, f = 0; f < s; ++f)
                    if (c = l[f]) {
                        for (var h, d = t.call(c, c.__data__, f, l), p = Z(c, e), v = 0, m = d.length; v < m; ++v)(h = d[v]) && Y(h, n, e, v, d, p);
                        o.push(d), a.push(c)
                    } return new On(o, a, n, e)
        },
        filter: function (t) {
            "function" != typeof t && (t = Object(wn.a)(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, c = r[i] = [], l = 0; l < u; ++l)(o = a[l]) && t.call(o, o.__data__, l, a) && c.push(o);
            return new On(r, this._parents, this._name, this._id)
        },
        merge: function (t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, l = n[u], s = e[u], f = l.length, h = a[u] = new Array(f), d = 0; d < f; ++d)(c = l[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) a[u] = n[u];
            return new On(a, this._parents, this._name, this._id)
        },
        selection: function () {
            return new Tn(this._groups, this._parents)
        },
        transition: function () {
            for (var t = this._name, n = this._id, e = Nn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, u = r[o], c = u.length, l = 0; l < c; ++l)
                    if (a = u[l]) {
                        var s = Z(a, n);
                        Y(a, t, e, l, u, {
                            time: s.time + s.delay + s.duration,
                            delay: 0,
                            duration: s.duration,
                            ease: s.ease
                        })
                    } return new On(r, this._parents, t, e)
        },
        call: Pn.call,
        nodes: Pn.nodes,
        node: Pn.node,
        size: Pn.size,
        empty: Pn.empty,
        each: Pn.each,
        on: function (t, n) {
            var e = this._id;
            return arguments.length < 2 ? Z(this.node(), e).on.on(t) : this.each(_n(e, t, n))
        },
        attr: function (t, n) {
            var e = Object(ft.a)(t),
                r = "transform" === e ? st : rn;
            return this.attrTween(t, "function" == typeof n ? (e.local ? sn : ln)(e, r, pt(this, "attr." + t, n)) : null == n ? (e.local ? an : on)(e) : (e.local ? cn : un)(e, r, n))
        },
        attrTween: function (t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = Object(ft.a)(t);
            return this.tween(e, (r.local ? dn : pn)(r, n))
        },
        style: function (t, n, e) {
            var r = "transform" == (t += "") ? lt : rn;
            return null == n ? this.styleTween(t, function (t, n) {
                var e, r, i;
                return function () {
                    var o = Object(kn.b)(this, t),
                        a = (this.style.removeProperty(t), Object(kn.b)(this, t));
                    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a)
                }
            }(t, r)).on("end.style." + t, En(t)) : "function" == typeof n ? this.styleTween(t, function (t, n, e) {
                var r, i, o;
                return function () {
                    var a = Object(kn.b)(this, t),
                        u = e(this),
                        c = u + "";
                    return null == u && (this.style.removeProperty(t), c = u = Object(kn.b)(this, t)), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u))
                }
            }(t, r, pt(this, "style." + t, n))).each(function (t, n) {
                var e, r, i, o, a = "style." + n,
                    u = "end." + a;
                return function () {
                    var c = J(this, t),
                        l = c.on,
                        s = null == c.value[a] ? o || (o = En(n)) : void 0;
                    l === e && i === s || (r = (e = l).copy()).on(u, i = s), c.on = r
                }
            }(this._id, t)) : this.styleTween(t, function (t, n, e) {
                var r, i, o = e + "";
                return function () {
                    var a = Object(kn.b)(this, t);
                    return a === o ? null : a === r ? i : i = n(r = a, e)
                }
            }(t, r, n), e).on("end.style." + t, null)
        },
        styleTween: function (t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, jn(t, n, null == e ? "" : e))
        },
        text: function (t) {
            return this.tween("text", "function" == typeof t ? function (t) {
                return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n
                }
            }(pt(this, "text", t)) : function (t) {
                return function () {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        remove: function () {
            return this.on("end.remove", (t = this._id, function () {
                var n = this.parentNode;
                for (var e in this.__transition)
                    if (+e !== t) return;
                n && n.removeChild(this)
            }));
            var t
        },
        tween: function (t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = Z(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
                    if ((r = i[o]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? ht : dt)(e, t, n))
        },
        delay: function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? vn : mn)(n, t)) : Z(this.node(), n).delay
        },
        duration: function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? yn : gn)(n, t)) : Z(this.node(), n).duration
        },
        ease: function (t) {
            var n = this._id;
            return arguments.length ? this.each(bn(n, t)) : Z(this.node(), n).ease
        },
        end: function () {
            var t, n, e = this,
                r = e._id,
                i = e.size();
            return new Promise((function (o, a) {
                var u = {
                        value: a
                    },
                    c = {
                        value: function () {
                            0 == --i && o()
                        }
                    };
                e.each((function () {
                    var e = J(this, r),
                        i = e.on;
                    i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), e.on = n
                }))
            }))
        }
    };
    var Rn = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
    };

    function zn(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);)
            if (!(t = t.parentNode)) return Rn.time = D(), Rn;
        return e
    }
    S.b.prototype.interrupt = function (t) {
        return this.each((function () {
            rt(this, t)
        }))
    }, S.b.prototype.transition = function (t) {
        var n, e;
        t instanceof On ? (n = t._id, t = t._name) : (n = Nn(), (e = Rn).time = D(), t = null == t ? null : t + "");
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, u = r[o], c = u.length, l = 0; l < c; ++l)(a = u[l]) && Y(a, t, n, l, u, e || zn(a, n));
        return new On(r, this._parents, t, n)
    };
    var Fn = function (t) {
        return function () {
            return t
        }
    };

    function Cn(t, n, e) {
        this.target = t, this.type = n, this.transform = e
    }

    function Ln(t, n, e) {
        this.k = t, this.x = n, this.y = e
    }
    Ln.prototype = {
        constructor: Ln,
        scale: function (t) {
            return 1 === t ? this : new Ln(this.k * t, this.x, this.y)
        },
        translate: function (t, n) {
            return 0 === t & 0 === n ? this : new Ln(this.k, this.x + this.k * t, this.y + this.k * n)
        },
        apply: function (t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function (t) {
            return t * this.k + this.x
        },
        applyY: function (t) {
            return t * this.k + this.y
        },
        invert: function (t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function (t) {
            return (t - this.x) / this.k
        },
        invertY: function (t) {
            return (t - this.y) / this.k
        },
        rescaleX: function (t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function (t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function () {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var In = new Ln(1, 0, 0);

    function Dn() {
        v.c.stopImmediatePropagation()
    }
    Ln.prototype;
    var qn = function () {
        v.c.preventDefault(), v.c.stopImmediatePropagation()
    };

    function Un() {
        return !v.c.ctrlKey && !v.c.button
    }

    function Hn() {
        var t = this;
        return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
            [(t = t.viewBox.baseVal).x, t.y],
            [t.x + t.width, t.y + t.height]
        ] : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ] : [
            [0, 0],
            [t.clientWidth, t.clientHeight]
        ]
    }

    function Gn() {
        return this.__zoom || In
    }

    function Xn() {
        return -v.c.deltaY * (1 === v.c.deltaMode ? .05 : v.c.deltaMode ? 1 : .002)
    }

    function Wn() {
        return navigator.maxTouchPoints || "ontouchstart" in this
    }

    function Bn(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
            i = t.invertX(n[1][0]) - e[1][0],
            o = t.invertY(n[0][1]) - e[0][1],
            a = t.invertY(n[1][1]) - e[1][1];
        return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a))
    }
    var Vn = function (t) {
        return function () {
            return t
        }
    };

    function $n(t, n, e, r, i, o, a, u, c, l) {
        this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = a, this.dx = u, this.dy = c, this._ = l
    }

    function Yn() {
        return !v.c.ctrlKey && !v.c.button
    }

    function Kn() {
        return this.parentNode
    }

    function Jn(t) {
        return null == t ? {
            x: v.c.x,
            y: v.c.y
        } : t
    }

    function Zn() {
        return navigator.maxTouchPoints || "ontouchstart" in this
    }
    $n.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    };
    var Qn = function (t) {
        return t
    };

    function te(t, n) {
        t && ee.hasOwnProperty(t.type) && ee[t.type](t, n)
    }
    var ne = {
            Feature: function (t, n) {
                te(t.geometry, n)
            },
            FeatureCollection: function (t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;) te(e[r].geometry, n)
            }
        },
        ee = {
            Sphere: function (t, n) {
                n.sphere()
            },
            Point: function (t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            },
            MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
            },
            LineString: function (t, n) {
                re(t.coordinates, n, 0)
            },
            MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) re(e[r], n, 0)
            },
            Polygon: function (t, n) {
                ie(t.coordinates, n)
            },
            MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) ie(e[r], n)
            },
            GeometryCollection: function (t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;) te(e[r], n)
            }
        };

    function re(t, n, e) {
        var r, i = -1,
            o = t.length - e;
        for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }

    function ie(t, n) {
        var e = -1,
            r = t.length;
        for (n.polygonStart(); ++e < r;) re(t[e], n, 1);
        n.polygonEnd()
    }
    var oe = function (t, n) {
            t && ne.hasOwnProperty(t.type) ? ne[t.type](t, n) : te(t, n)
        },
        ae = function () {
            return new ue
        };

    function ue() {
        this.reset()
    }
    ue.prototype = {
        constructor: ue,
        reset: function () {
            this.s = this.t = 0
        },
        add: function (t) {
            le(ce, t, this.t), le(this, ce.s, this.s), this.s ? this.t += ce.t : this.s = ce.t
        },
        valueOf: function () {
            return this.s
        }
    };
    var ce = new ue;

    function le(t, n, e) {
        var r = t.s = n + e,
            i = r - n,
            o = r - i;
        t.t = n - o + (e - i)
    }
    var se = 1e-6,
        fe = Math.PI,
        he = fe / 2,
        de = fe / 4,
        pe = 2 * fe,
        ve = 180 / fe,
        me = fe / 180,
        ye = Math.abs,
        ge = Math.atan,
        be = Math.atan2,
        we = Math.cos,
        _e = Math.ceil,
        xe = (Math.exp, Math.floor, Math.log, Math.pow, Math.sin),
        Me = Math.sign || function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        },
        Te = Math.sqrt;
    Math.tan;

    function ke(t) {
        return t > 1 ? he : t < -1 ? -he : Math.asin(t)
    }

    function Ee(t) {
        return (t = xe(t / 2)) * t
    }

    function Se() {}
    var je, Ae, Oe, Ne, Pe = ae(),
        Re = ae(),
        ze = {
            point: Se,
            lineStart: Se,
            lineEnd: Se,
            polygonStart: function () {
                ze.lineStart = Fe, ze.lineEnd = Ie
            },
            polygonEnd: function () {
                ze.lineStart = ze.lineEnd = ze.point = Se, Pe.add(ye(Re)), Re.reset()
            },
            result: function () {
                var t = Pe / 2;
                return Pe.reset(), t
            }
        };

    function Fe() {
        ze.point = Ce
    }

    function Ce(t, n) {
        ze.point = Le, je = Oe = t, Ae = Ne = n
    }

    function Le(t, n) {
        Re.add(Ne * t - Oe * n), Oe = t, Ne = n
    }

    function Ie() {
        Le(je, Ae)
    }
    var De = ze,
        qe = 1 / 0,
        Ue = qe,
        He = -qe,
        Ge = He;
    var Xe, We, Be, Ve, $e = {
            point: function (t, n) {
                t < qe && (qe = t);
                t > He && (He = t);
                n < Ue && (Ue = n);
                n > Ge && (Ge = n)
            },
            lineStart: Se,
            lineEnd: Se,
            polygonStart: Se,
            polygonEnd: Se,
            result: function () {
                var t = [
                    [qe, Ue],
                    [He, Ge]
                ];
                return He = Ge = -(Ue = qe = 1 / 0), t
            }
        },
        Ye = 0,
        Ke = 0,
        Je = 0,
        Ze = 0,
        Qe = 0,
        tr = 0,
        nr = 0,
        er = 0,
        rr = 0,
        ir = {
            point: or,
            lineStart: ar,
            lineEnd: lr,
            polygonStart: function () {
                ir.lineStart = sr, ir.lineEnd = fr
            },
            polygonEnd: function () {
                ir.point = or, ir.lineStart = ar, ir.lineEnd = lr
            },
            result: function () {
                var t = rr ? [nr / rr, er / rr] : tr ? [Ze / tr, Qe / tr] : Je ? [Ye / Je, Ke / Je] : [NaN, NaN];
                return Ye = Ke = Je = Ze = Qe = tr = nr = er = rr = 0, t
            }
        };

    function or(t, n) {
        Ye += t, Ke += n, ++Je
    }

    function ar() {
        ir.point = ur
    }

    function ur(t, n) {
        ir.point = cr, or(Be = t, Ve = n)
    }

    function cr(t, n) {
        var e = t - Be,
            r = n - Ve,
            i = Te(e * e + r * r);
        Ze += i * (Be + t) / 2, Qe += i * (Ve + n) / 2, tr += i, or(Be = t, Ve = n)
    }

    function lr() {
        ir.point = or
    }

    function sr() {
        ir.point = hr
    }

    function fr() {
        dr(Xe, We)
    }

    function hr(t, n) {
        ir.point = dr, or(Xe = Be = t, We = Ve = n)
    }

    function dr(t, n) {
        var e = t - Be,
            r = n - Ve,
            i = Te(e * e + r * r);
        Ze += i * (Be + t) / 2, Qe += i * (Ve + n) / 2, tr += i, nr += (i = Ve * t - Be * n) * (Be + t), er += i * (Ve + n), rr += 3 * i, or(Be = t, Ve = n)
    }
    var pr = ir;

    function vr(t) {
        this._context = t
    }
    vr.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
            return this._radius = t, this
        },
        polygonStart: function () {
            this._line = 0
        },
        polygonEnd: function () {
            this._line = NaN
        },
        lineStart: function () {
            this._point = 0
        },
        lineEnd: function () {
            0 === this._line && this._context.closePath(), this._point = NaN
        },
        point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, pe)
            }
        },
        result: Se
    };
    var mr, yr, gr, br, wr, _r = ae(),
        xr = {
            point: Se,
            lineStart: function () {
                xr.point = Mr
            },
            lineEnd: function () {
                mr && Tr(yr, gr), xr.point = Se
            },
            polygonStart: function () {
                mr = !0
            },
            polygonEnd: function () {
                mr = null
            },
            result: function () {
                var t = +_r;
                return _r.reset(), t
            }
        };

    function Mr(t, n) {
        xr.point = Tr, yr = br = t, gr = wr = n
    }

    function Tr(t, n) {
        br -= t, wr -= n, _r.add(Te(br * br + wr * wr)), br = t, wr = n
    }
    var kr = xr;

    function Er() {
        this._string = []
    }

    function Sr(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    Er.prototype = {
        _radius: 4.5,
        _circle: Sr(4.5),
        pointRadius: function (t) {
            return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
        },
        polygonStart: function () {
            this._line = 0
        },
        polygonEnd: function () {
            this._line = NaN
        },
        lineStart: function () {
            this._point = 0
        },
        lineEnd: function () {
            0 === this._line && this._string.push("Z"), this._point = NaN
        },
        point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    null == this._circle && (this._circle = Sr(this._radius)), this._string.push("M", t, ",", n, this._circle)
            }
        },
        result: function () {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [], t
            }
            return null
        }
    };
    var jr = function (t, n) {
            var e, r, i = 4.5;

            function o(t) {
                return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), oe(t, e(r))), r.result()
            }
            return o.area = function (t) {
                return oe(t, e(De)), De.result()
            }, o.measure = function (t) {
                return oe(t, e(kr)), kr.result()
            }, o.bounds = function (t) {
                return oe(t, e($e)), $e.result()
            }, o.centroid = function (t) {
                return oe(t, e(pr)), pr.result()
            }, o.projection = function (n) {
                return arguments.length ? (e = null == n ? (t = null, Qn) : (t = n).stream, o) : t
            }, o.context = function (t) {
                return arguments.length ? (r = null == t ? (n = null, new Er) : new vr(n = t), "function" != typeof i && r.pointRadius(i), o) : n
            }, o.pointRadius = function (t) {
                return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i
            }, o.projection(t).context(n)
        },
        Ar = function (t) {
            return "string" == typeof t ? new S.a([document.querySelectorAll(t)], [document.documentElement]) : new S.a([null == t ? [] : t], S.c)
        },
        Or = function (t) {
            return t
        },
        Nr = function (t) {
            if (null == t) return Or;
            var n, e, r = t.scale[0],
                i = t.scale[1],
                o = t.translate[0],
                a = t.translate[1];
            return function (t, u) {
                u || (n = e = 0);
                var c = 2,
                    l = t.length,
                    s = new Array(l);
                for (s[0] = (n += t[0]) * r + o, s[1] = (e += t[1]) * i + a; c < l;) s[c] = t[c], ++c;
                return s
            }
        },
        Pr = function (t, n) {
            return "GeometryCollection" === n.type ? {
                type: "FeatureCollection",
                features: n.geometries.map((function (n) {
                    return Rr(t, n)
                }))
            } : Rr(t, n)
        };

    function Rr(t, n) {
        var e = n.id,
            r = n.bbox,
            i = null == n.properties ? {} : n.properties,
            o = zr(t, n);
        return null == e && null == r ? {
            type: "Feature",
            properties: i,
            geometry: o
        } : null == r ? {
            type: "Feature",
            id: e,
            properties: i,
            geometry: o
        } : {
            type: "Feature",
            id: e,
            bbox: r,
            properties: i,
            geometry: o
        }
    }

    function zr(t, n) {
        var e = Nr(t.transform),
            r = t.arcs;

        function i(t, n) {
            n.length && n.pop();
            for (var i = r[t < 0 ? ~t : t], o = 0, a = i.length; o < a; ++o) n.push(e(i[o], o));
            t < 0 && function (t, n) {
                for (var e, r = t.length, i = r - n; i < --r;) e = t[i], t[i++] = t[r], t[r] = e
            }(n, a)
        }

        function o(t) {
            return e(t)
        }

        function a(t) {
            for (var n = [], e = 0, r = t.length; e < r; ++e) i(t[e], n);
            return n.length < 2 && n.push(n[0]), n
        }

        function u(t) {
            for (var n = a(t); n.length < 4;) n.push(n[0]);
            return n
        }

        function c(t) {
            return t.map(u)
        }
        return function t(n) {
            var e, r = n.type;
            switch (r) {
                case "GeometryCollection":
                    return {
                        type: r, geometries: n.geometries.map(t)
                    };
                case "Point":
                    e = o(n.coordinates);
                    break;
                case "MultiPoint":
                    e = n.coordinates.map(o);
                    break;
                case "LineString":
                    e = a(n.arcs);
                    break;
                case "MultiLineString":
                    e = n.arcs.map(a);
                    break;
                case "Polygon":
                    e = c(n.arcs);
                    break;
                case "MultiPolygon":
                    e = n.arcs.map(c);
                    break;
                default:
                    return null
            }
            return {
                type: r,
                coordinates: e
            }
        }(n)
    }
    var Fr = e(1),
        Cr = e(2),
        Lr = function (t, n, e) {
            t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
            for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
            return o
        };

    function Ir(t, n, e) {
        var r = Lr(t, n - se, e).concat(n);
        return function (t) {
            return r.map((function (n) {
                return [t, n]
            }))
        }
    }

    function Dr(t, n, e) {
        var r = Lr(t, n - se, e).concat(n);
        return function (t) {
            return r.map((function (n) {
                return [n, t]
            }))
        }
    }

    function qr() {
        var t, n, e, r, i, o, a, u, c, l, s, f, h = 10,
            d = h,
            p = 90,
            v = 360,
            m = 2.5;

        function y() {
            return {
                type: "MultiLineString",
                coordinates: g()
            }
        }

        function g() {
            return Lr(_e(r / p) * p, e, p).map(s).concat(Lr(_e(u / v) * v, a, v).map(f)).concat(Lr(_e(n / h) * h, t, h).filter((function (t) {
                return ye(t % p) > se
            })).map(c)).concat(Lr(_e(o / d) * d, i, d).filter((function (t) {
                return ye(t % v) > se
            })).map(l))
        }
        return y.lines = function () {
            return g().map((function (t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            }))
        }, y.outline = function () {
            return {
                type: "Polygon",
                coordinates: [s(r).concat(f(a).slice(1), s(e).reverse().slice(1), f(u).reverse().slice(1))]
            }
        }, y.extent = function (t) {
            return arguments.length ? y.extentMajor(t).extentMinor(t) : y.extentMinor()
        }, y.extentMajor = function (t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], u = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), u > a && (t = u, u = a, a = t), y.precision(m)) : [
                [r, u],
                [e, a]
            ]
        }, y.extentMinor = function (e) {
            return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), y.precision(m)) : [
                [n, o],
                [t, i]
            ]
        }, y.step = function (t) {
            return arguments.length ? y.stepMajor(t).stepMinor(t) : y.stepMinor()
        }, y.stepMajor = function (t) {
            return arguments.length ? (p = +t[0], v = +t[1], y) : [p, v]
        }, y.stepMinor = function (t) {
            return arguments.length ? (h = +t[0], d = +t[1], y) : [h, d]
        }, y.precision = function (h) {
            return arguments.length ? (m = +h, c = Ir(o, i, 90), l = Dr(n, t, m), s = Ir(u, a, 90), f = Dr(r, e, m), y) : m
        }, y.extentMajor([
            [-180, -90 + se],
            [180, 90 - se]
        ]).extentMinor([
            [-180, -80 - se],
            [180, 80 + se]
        ])
    }

    function Ur() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            e = document.createElement("canvas");
        return e.width = t, e.height = n, e
    }

    function Hr(t) {
        var n = t.canvas,
            e = n.width,
            r = n.height;
        t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, e, r), t.restore()
    }

    function Gr(t) {
        Hr(t.getContext("2d"))
    }

    function Xr(t, n) {
        return {
            renderTo: function (e, r) {
                Object.assign(e, n), e.beginPath(), r(t), e.stroke()
            }
        }
    }

    function Wr(t) {
        return {
            renderTo: function (n, e) {
                Hr(n), e.context(n), n.lineJoin = "bevel", t.forEach((function (t) {
                    return t.renderTo(n, e)
                }))
            }
        }
    }
    var Br = function () {
            var t, n = [];
            return {
                point: function (n, e) {
                    t.push([n, e])
                },
                lineStart: function () {
                    n.push(t = [])
                },
                lineEnd: Se,
                rejoin: function () {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                },
                result: function () {
                    var e = n;
                    return n = [], t = null, e
                }
            }
        },
        Vr = function (t, n) {
            return ye(t[0] - n[0]) < se && ye(t[1] - n[1]) < se
        };

    function $r(t, n, e, r) {
        this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }
    var Yr = function (t, n, e, r, i) {
        var o, a, u = [],
            c = [];
        if (t.forEach((function (t) {
                if (!((n = t.length - 1) <= 0)) {
                    var n, e, r = t[0],
                        a = t[n];
                    if (Vr(r, a)) {
                        for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                        i.lineEnd()
                    } else u.push(e = new $r(r, t, null, !0)), c.push(e.o = new $r(r, null, e, !1)), u.push(e = new $r(a, t, null, !1)), c.push(e.o = new $r(a, null, e, !0))
                }
            })), u.length) {
            for (c.sort(n), Kr(u), Kr(c), o = 0, a = c.length; o < a; ++o) c[o].e = e = !e;
            for (var l, s, f = u[0];;) {
                for (var h = f, d = !0; h.v;)
                    if ((h = h.n) === f) return;
                l = h.z, i.lineStart();
                do {
                    if (h.v = h.o.v = !0, h.e) {
                        if (d)
                            for (o = 0, a = l.length; o < a; ++o) i.point((s = l[o])[0], s[1]);
                        else r(h.x, h.n.x, 1, i);
                        h = h.n
                    } else {
                        if (d)
                            for (l = h.p.z, o = l.length - 1; o >= 0; --o) i.point((s = l[o])[0], s[1]);
                        else r(h.x, h.p.x, -1, i);
                        h = h.p
                    }
                    l = (h = h.o).z, d = !d
                } while (!h.v);
                i.lineEnd()
            }
        }
    };

    function Kr(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
            i.n = e = t[0], e.p = i
        }
    }

    function Jr(t) {
        return [be(t[1], t[0]), ke(t[2])]
    }

    function Zr(t) {
        var n = t[0],
            e = t[1],
            r = we(e);
        return [r * we(n), r * xe(n), xe(e)]
    }

    function Qr(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function ti(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function ni(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function ei(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }

    function ri(t) {
        var n = Te(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }
    var ii = ae();

    function oi(t) {
        return ye(t[0]) <= fe ? t[0] : Me(t[0]) * ((ye(t[0]) + fe) % pe - fe)
    }
    var ai = function (t) {
            for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length;
            for (e = new Array(a); --i >= 0;)
                for (n = (r = t[i]).length; --n >= 0;) e[--a] = r[n];
            return e
        },
        ui = function (t, n, e, r) {
            return function (i) {
                var o, a, u, c = n(i),
                    l = Br(),
                    s = n(l),
                    f = !1,
                    h = {
                        point: d,
                        lineStart: v,
                        lineEnd: m,
                        polygonStart: function () {
                            h.point = y, h.lineStart = g, h.lineEnd = b, a = [], o = []
                        },
                        polygonEnd: function () {
                            h.point = d, h.lineStart = v, h.lineEnd = m, a = ai(a);
                            var t = function (t, n) {
                                var e = oi(n),
                                    r = n[1],
                                    i = xe(r),
                                    o = [xe(e), -we(e), 0],
                                    a = 0,
                                    u = 0;
                                ii.reset(), 1 === i ? r = he + se : -1 === i && (r = -he - se);
                                for (var c = 0, l = t.length; c < l; ++c)
                                    if (f = (s = t[c]).length)
                                        for (var s, f, h = s[f - 1], d = oi(h), p = h[1] / 2 + de, v = xe(p), m = we(p), y = 0; y < f; ++y, d = b, v = _, m = x, h = g) {
                                            var g = s[y],
                                                b = oi(g),
                                                w = g[1] / 2 + de,
                                                _ = xe(w),
                                                x = we(w),
                                                M = b - d,
                                                T = M >= 0 ? 1 : -1,
                                                k = T * M,
                                                E = k > fe,
                                                S = v * _;
                                            if (ii.add(be(S * T * xe(k), m * x + S * we(k))), a += E ? M + T * pe : M, E ^ d >= e ^ b >= e) {
                                                var j = ti(Zr(h), Zr(g));
                                                ri(j);
                                                var A = ti(o, j);
                                                ri(A);
                                                var O = (E ^ M >= 0 ? -1 : 1) * ke(A[2]);
                                                (r > O || r === O && (j[0] || j[1])) && (u += E ^ M >= 0 ? 1 : -1)
                                            }
                                        }
                                return (a < -se || a < se && ii < -se) ^ 1 & u
                            }(o, r);
                            a.length ? (f || (i.polygonStart(), f = !0), Yr(a, li, t, e, i)) : t && (f || (i.polygonStart(), f = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), f && (i.polygonEnd(), f = !1), a = o = null
                        },
                        sphere: function () {
                            i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                        }
                    };

                function d(n, e) {
                    t(n, e) && i.point(n, e)
                }

                function p(t, n) {
                    c.point(t, n)
                }

                function v() {
                    h.point = p, c.lineStart()
                }

                function m() {
                    h.point = d, c.lineEnd()
                }

                function y(t, n) {
                    u.push([t, n]), s.point(t, n)
                }

                function g() {
                    s.lineStart(), u = []
                }

                function b() {
                    y(u[0][0], u[0][1]), s.lineEnd();
                    var t, n, e, r, c = s.clean(),
                        h = l.result(),
                        d = h.length;
                    if (u.pop(), o.push(u), u = null, d)
                        if (1 & c) {
                            if ((n = (e = h[0]).length - 1) > 0) {
                                for (f || (i.polygonStart(), f = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                                i.lineEnd()
                            }
                        } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(ci))
                }
                return h
            }
        };

    function ci(t) {
        return t.length > 1
    }

    function li(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - he - se : he - t[1]) - ((n = n.x)[0] < 0 ? n[1] - he - se : he - n[1])
    }
    var si = ui((function () {
        return !0
    }), (function (t) {
        var n, e = NaN,
            r = NaN,
            i = NaN;
        return {
            lineStart: function () {
                t.lineStart(), n = 1
            },
            point: function (o, a) {
                var u = o > 0 ? fe : -fe,
                    c = ye(o - e);
                ye(c - fe) < se ? (t.point(e, r = (r + a) / 2 > 0 ? he : -he), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && c >= fe && (ye(e - i) < se && (e -= i * se), ye(o - u) < se && (o -= u * se), r = function (t, n, e, r) {
                    var i, o, a = xe(t - e);
                    return ye(a) > se ? ge((xe(n) * (o = we(r)) * xe(e) - xe(r) * (i = we(n)) * xe(t)) / (i * o * a)) : (n + r) / 2
                }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u
            },
            lineEnd: function () {
                t.lineEnd(), e = r = NaN
            },
            clean: function () {
                return 2 - n
            }
        }
    }), (function (t, n, e, r) {
        var i;
        if (null == t) i = e * he, r.point(-fe, i), r.point(0, i), r.point(fe, i), r.point(fe, 0), r.point(fe, -i), r.point(0, -i), r.point(-fe, -i), r.point(-fe, 0), r.point(-fe, i);
        else if (ye(t[0] - n[0]) > se) {
            var o = t[0] < n[0] ? fe : -fe;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
        } else r.point(n[0], n[1])
    }), [-fe, -he]);
    var fi = function (t, n) {
        function e(e, r) {
            return e = t(e, r), n(e[0], e[1])
        }
        return t.invert && n.invert && (e.invert = function (e, r) {
            return (e = n.invert(e, r)) && t.invert(e[0], e[1])
        }), e
    };

    function hi(t, n) {
        return [ye(t) > fe ? t + Math.round(-t / pe) * pe : t, n]
    }

    function di(t, n, e) {
        return (t %= pe) ? n || e ? fi(vi(t), mi(n, e)) : vi(t) : n || e ? mi(n, e) : hi
    }

    function pi(t) {
        return function (n, e) {
            return [(n += t) > fe ? n - pe : n < -fe ? n + pe : n, e]
        }
    }

    function vi(t) {
        var n = pi(t);
        return n.invert = pi(-t), n
    }

    function mi(t, n) {
        var e = we(t),
            r = xe(t),
            i = we(n),
            o = xe(n);

        function a(t, n) {
            var a = we(n),
                u = we(t) * a,
                c = xe(t) * a,
                l = xe(n),
                s = l * e + u * r;
            return [be(c * i - s * o, u * e - l * r), ke(s * i + c * o)]
        }
        return a.invert = function (t, n) {
            var a = we(n),
                u = we(t) * a,
                c = xe(t) * a,
                l = xe(n),
                s = l * i - c * o;
            return [be(c * i + l * o, u * e + s * r), ke(s * e - u * r)]
        }, a
    }
    hi.invert = hi;

    function yi(t, n, e, r, i, o) {
        if (e) {
            var a = we(n),
                u = xe(n),
                c = r * e;
            null == i ? (i = n + r * pe, o = n - c / 2) : (i = gi(a, i), o = gi(a, o), (r > 0 ? i < o : i > o) && (i += r * pe));
            for (var l, s = i; r > 0 ? s > o : s < o; s -= c) l = Jr([a, -u * we(s), -u * xe(s)]), t.point(l[0], l[1])
        }
    }

    function gi(t, n) {
        (n = Zr(n))[0] -= t, ri(n);
        var e, r = (e = -n[1]) > 1 ? 0 : e < -1 ? fe : Math.acos(e);
        return ((-n[2] < 0 ? -r : r) + pe - se) % pe
    }
    var bi = function (t) {
        var n = we(t),
            e = 6 * me,
            r = n > 0,
            i = ye(n) > se;

        function o(t, e) {
            return we(t) * we(e) > n
        }

        function a(t, e, r) {
            var i = [1, 0, 0],
                o = ti(Zr(t), Zr(e)),
                a = Qr(o, o),
                u = o[0],
                c = a - u * u;
            if (!c) return !r && t;
            var l = n * a / c,
                s = -n * u / c,
                f = ti(i, o),
                h = ei(i, l);
            ni(h, ei(o, s));
            var d = f,
                p = Qr(h, d),
                v = Qr(d, d),
                m = p * p - v * (Qr(h, h) - 1);
            if (!(m < 0)) {
                var y = Te(m),
                    g = ei(d, (-p - y) / v);
                if (ni(g, h), g = Jr(g), !r) return g;
                var b, w = t[0],
                    _ = e[0],
                    x = t[1],
                    M = e[1];
                _ < w && (b = w, w = _, _ = b);
                var T = _ - w,
                    k = ye(T - fe) < se;
                if (!k && M < x && (b = x, x = M, M = b), k || T < se ? k ? x + M > 0 ^ g[1] < (ye(g[0] - w) < se ? x : M) : x <= g[1] && g[1] <= M : T > fe ^ (w <= g[0] && g[0] <= _)) {
                    var E = ei(d, (-p + y) / v);
                    return ni(E, h), [g, Jr(E)]
                }
            }
        }

        function u(n, e) {
            var i = r ? t : fe - t,
                o = 0;
            return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o
        }
        return ui(o, (function (t) {
            var n, e, c, l, s;
            return {
                lineStart: function () {
                    l = c = !1, s = 1
                },
                point: function (f, h) {
                    var d, p = [f, h],
                        v = o(f, h),
                        m = r ? v ? 0 : u(f, h) : v ? u(f + (f < 0 ? fe : -fe), h) : 0;
                    if (!n && (l = c = v) && t.lineStart(), v !== c && (!(d = a(n, p)) || Vr(n, d) || Vr(p, d)) && (p[0] += se, p[1] += se, v = o(p[0], p[1])), v !== c) s = 0, v ? (t.lineStart(), d = a(p, n), t.point(d[0], d[1])) : (d = a(n, p), t.point(d[0], d[1]), t.lineEnd()), n = d;
                    else if (i && n && r ^ v) {
                        var y;
                        m & e || !(y = a(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                    }!v || n && Vr(n, p) || t.point(p[0], p[1]), n = p, c = v, e = m
                },
                lineEnd: function () {
                    c && t.lineEnd(), n = null
                },
                clean: function () {
                    return s | (l && c) << 1
                }
            }
        }), (function (n, r, i, o) {
            yi(o, t, e, i, n, r)
        }), r ? [0, -t] : [-fe, t - fe])
    };

    function wi(t, n, e, r) {
        function i(i, o) {
            return t <= i && i <= e && n <= o && o <= r
        }

        function o(i, o, u, l) {
            var s = 0,
                f = 0;
            if (null == i || (s = a(i, u)) !== (f = a(o, u)) || c(i, o) < 0 ^ u > 0)
                do {
                    l.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
                } while ((s = (s + u + 4) % 4) !== f);
            else l.point(o[0], o[1])
        }

        function a(r, i) {
            return ye(r[0] - t) < se ? i > 0 ? 0 : 3 : ye(r[0] - e) < se ? i > 0 ? 2 : 1 : ye(r[1] - n) < se ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function u(t, n) {
            return c(t.x, n.x)
        }

        function c(t, n) {
            var e = a(t, 1),
                r = a(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }
        return function (a) {
            var c, l, s, f, h, d, p, v, m, y, g, b = a,
                w = Br(),
                _ = {
                    point: x,
                    lineStart: function () {
                        _.point = M, l && l.push(s = []);
                        y = !0, m = !1, p = v = NaN
                    },
                    lineEnd: function () {
                        c && (M(f, h), d && m && w.rejoin(), c.push(w.result()));
                        _.point = x, m && b.lineEnd()
                    },
                    polygonStart: function () {
                        b = w, c = [], l = [], g = !0
                    },
                    polygonEnd: function () {
                        var n = function () {
                                for (var n = 0, e = 0, i = l.length; e < i; ++e)
                                    for (var o, a, u = l[e], c = 1, s = u.length, f = u[0], h = f[0], d = f[1]; c < s; ++c) o = h, a = d, f = u[c], h = f[0], d = f[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
                                return n
                            }(),
                            e = g && n,
                            i = (c = ai(c)).length;
                        (e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && Yr(c, u, n, o, a), a.polygonEnd());
                        b = a, c = l = s = null
                    }
                };

            function x(t, n) {
                i(t, n) && b.point(t, n)
            }

            function M(o, a) {
                var u = i(o, a);
                if (l && s.push([o, a]), y) f = o, h = a, d = u, y = !1, u && (b.lineStart(), b.point(o, a));
                else if (u && m) b.point(o, a);
                else {
                    var c = [p = Math.max(-1e9, Math.min(1e9, p)), v = Math.max(-1e9, Math.min(1e9, v))],
                        w = [o = Math.max(-1e9, Math.min(1e9, o)), a = Math.max(-1e9, Math.min(1e9, a))];
                    ! function (t, n, e, r, i, o) {
                        var a, u = t[0],
                            c = t[1],
                            l = 0,
                            s = 1,
                            f = n[0] - u,
                            h = n[1] - c;
                        if (a = e - u, f || !(a > 0)) {
                            if (a /= f, f < 0) {
                                if (a < l) return;
                                a < s && (s = a)
                            } else if (f > 0) {
                                if (a > s) return;
                                a > l && (l = a)
                            }
                            if (a = i - u, f || !(a < 0)) {
                                if (a /= f, f < 0) {
                                    if (a > s) return;
                                    a > l && (l = a)
                                } else if (f > 0) {
                                    if (a < l) return;
                                    a < s && (s = a)
                                }
                                if (a = r - c, h || !(a > 0)) {
                                    if (a /= h, h < 0) {
                                        if (a < l) return;
                                        a < s && (s = a)
                                    } else if (h > 0) {
                                        if (a > s) return;
                                        a > l && (l = a)
                                    }
                                    if (a = o - c, h || !(a < 0)) {
                                        if (a /= h, h < 0) {
                                            if (a > s) return;
                                            a > l && (l = a)
                                        } else if (h > 0) {
                                            if (a < l) return;
                                            a < s && (s = a)
                                        }
                                        return l > 0 && (t[0] = u + l * f, t[1] = c + l * h), s < 1 && (n[0] = u + s * f, n[1] = c + s * h), !0
                                    }
                                }
                            }
                        }
                    }(c, w, t, n, e, r) ? u && (b.lineStart(), b.point(o, a), g = !1): (m || (b.lineStart(), b.point(c[0], c[1])), b.point(w[0], w[1]), u || b.lineEnd(), g = !1)
                }
                p = o, v = a, m = u
            }
            return _
        }
    }

    function _i(t) {
        return function (n) {
            var e = new xi;
            for (var r in t) e[r] = t[r];
            return e.stream = n, e
        }
    }

    function xi() {}

    function Mi(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), oe(e, t.stream($e)), n($e.result()), null != r && t.clipExtent(r), t
    }

    function Ti(t, n, e) {
        return Mi(t, (function (e) {
            var r = n[1][0] - n[0][0],
                i = n[1][1] - n[0][1],
                o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
                u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([a, u])
        }), e)
    }
    xi.prototype = {
        constructor: xi,
        point: function (t, n) {
            this.stream.point(t, n)
        },
        sphere: function () {
            this.stream.sphere()
        },
        lineStart: function () {
            this.stream.lineStart()
        },
        lineEnd: function () {
            this.stream.lineEnd()
        },
        polygonStart: function () {
            this.stream.polygonStart()
        },
        polygonEnd: function () {
            this.stream.polygonEnd()
        }
    };
    var ki = we(30 * me),
        Ei = function (t, n) {
            return +n ? function (t, n) {
                function e(r, i, o, a, u, c, l, s, f, h, d, p, v, m) {
                    var y = l - r,
                        g = s - i,
                        b = y * y + g * g;
                    if (b > 4 * n && v--) {
                        var w = a + h,
                            _ = u + d,
                            x = c + p,
                            M = Te(w * w + _ * _ + x * x),
                            T = ke(x /= M),
                            k = ye(ye(x) - 1) < se || ye(o - f) < se ? (o + f) / 2 : be(_, w),
                            E = t(k, T),
                            S = E[0],
                            j = E[1],
                            A = S - r,
                            O = j - i,
                            N = g * A - y * O;
                        (N * N / b > n || ye((y * A + g * O) / b - .5) > .3 || a * h + u * d + c * p < ki) && (e(r, i, o, a, u, c, S, j, k, w /= M, _ /= M, x, v, m), m.point(S, j), e(S, j, k, w, _, x, l, s, f, h, d, p, v, m))
                    }
                }
                return function (n) {
                    var r, i, o, a, u, c, l, s, f, h, d, p, v = {
                        point: m,
                        lineStart: y,
                        lineEnd: b,
                        polygonStart: function () {
                            n.polygonStart(), v.lineStart = w
                        },
                        polygonEnd: function () {
                            n.polygonEnd(), v.lineStart = y
                        }
                    };

                    function m(e, r) {
                        e = t(e, r), n.point(e[0], e[1])
                    }

                    function y() {
                        s = NaN, v.point = g, n.lineStart()
                    }

                    function g(r, i) {
                        var o = Zr([r, i]),
                            a = t(r, i);
                        e(s, f, l, h, d, p, s = a[0], f = a[1], l = r, h = o[0], d = o[1], p = o[2], 16, n), n.point(s, f)
                    }

                    function b() {
                        v.point = m, n.lineEnd()
                    }

                    function w() {
                        y(), v.point = _, v.lineEnd = x
                    }

                    function _(t, n) {
                        g(r = t, n), i = s, o = f, a = h, u = d, c = p, v.point = g
                    }

                    function x() {
                        e(s, f, l, h, d, p, i, o, r, a, u, c, 16, n), v.lineEnd = b, b()
                    }
                    return v
                }
            }(t, n) : function (t) {
                return _i({
                    point: function (n, e) {
                        n = t(n, e), this.stream.point(n[0], n[1])
                    }
                })
            }(t)
        };
    var Si = _i({
        point: function (t, n) {
            this.stream.point(t * me, n * me)
        }
    });

    function ji(t, n, e) {
        function r(r, i) {
            return [n + t * r, e - t * i]
        }
        return r.invert = function (r, i) {
            return [(r - n) / t, (e - i) / t]
        }, r
    }

    function Ai(t, n, e, r) {
        var i = we(r),
            o = xe(r),
            a = i * t,
            u = o * t,
            c = i / t,
            l = o / t,
            s = (o * e - i * n) / t,
            f = (o * n + i * e) / t;

        function h(t, r) {
            return [a * t - u * r + n, e - u * t - a * r]
        }
        return h.invert = function (t, n) {
            return [c * t - l * n + s, f - l * t - c * n]
        }, h
    }

    function Oi(t) {
        return Ni((function () {
            return t
        }))()
    }

    function Ni(t) {
        var n, e, r, i, o, a, u, c, l, s, f = 150,
            h = 480,
            d = 250,
            p = 0,
            v = 0,
            m = 0,
            y = 0,
            g = 0,
            b = 0,
            w = null,
            _ = si,
            x = null,
            M = Qn,
            T = .5;

        function k(t) {
            return c(t[0] * me, t[1] * me)
        }

        function E(t) {
            return (t = c.invert(t[0], t[1])) && [t[0] * ve, t[1] * ve]
        }

        function S() {
            var t = Ai(f, 0, 0, b).apply(null, n(p, v)),
                r = (b ? Ai : ji)(f, h - t[0], d - t[1], b);
            return e = di(m, y, g), u = fi(n, r), c = fi(e, u), a = Ei(u, T), j()
        }

        function j() {
            return l = s = null, k
        }
        return k.stream = function (t) {
                return l && s === t ? l : l = Si(function (t) {
                    return _i({
                        point: function (n, e) {
                            var r = t(n, e);
                            return this.stream.point(r[0], r[1])
                        }
                    })
                }(e)(_(a(M(s = t)))))
            }, k.preclip = function (t) {
                return arguments.length ? (_ = t, w = void 0, j()) : _
            }, k.postclip = function (t) {
                return arguments.length ? (M = t, x = r = i = o = null, j()) : M
            }, k.clipAngle = function (t) {
                return arguments.length ? (_ = +t ? bi(w = t * me) : (w = null, si), j()) : w * ve
            }, k.clipExtent = function (t) {
                return arguments.length ? (M = null == t ? (x = r = i = o = null, Qn) : wi(x = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), j()) : null == x ? null : [
                    [x, r],
                    [i, o]
                ]
            }, k.scale = function (t) {
                return arguments.length ? (f = +t, S()) : f
            }, k.translate = function (t) {
                return arguments.length ? (h = +t[0], d = +t[1], S()) : [h, d]
            }, k.center = function (t) {
                return arguments.length ? (p = t[0] % 360 * me, v = t[1] % 360 * me, S()) : [p * ve, v * ve]
            }, k.rotate = function (t) {
                return arguments.length ? (m = t[0] % 360 * me, y = t[1] % 360 * me, g = t.length > 2 ? t[2] % 360 * me : 0, S()) : [m * ve, y * ve, g * ve]
            }, k.angle = function (t) {
                return arguments.length ? (b = t % 360 * me, S()) : b * ve
            }, k.precision = function (t) {
                return arguments.length ? (a = Ei(u, T = t * t), j()) : Te(T)
            }, k.fitExtent = function (t, n) {
                return Ti(k, t, n)
            }, k.fitSize = function (t, n) {
                return function (t, n, e) {
                    return Ti(t, [
                        [0, 0], n
                    ], e)
                }(k, t, n)
            }, k.fitWidth = function (t, n) {
                return function (t, n, e) {
                    return Mi(t, (function (e) {
                        var r = +n,
                            i = r / (e[1][0] - e[0][0]),
                            o = (r - i * (e[1][0] + e[0][0])) / 2,
                            a = -i * e[0][1];
                        t.scale(150 * i).translate([o, a])
                    }), e)
                }(k, t, n)
            }, k.fitHeight = function (t, n) {
                return function (t, n, e) {
                    return Mi(t, (function (e) {
                        var r = +n,
                            i = r / (e[1][1] - e[0][1]),
                            o = -i * e[0][0],
                            a = (r - i * (e[1][1] + e[0][1])) / 2;
                        t.scale(150 * i).translate([o, a])
                    }), e)
                }(k, t, n)
            },
            function () {
                return n = t.apply(this, arguments), k.invert = n.invert && E, S()
            }
    }

    function Pi(t, n) {
        return [t, n]
    }
    Pi.invert = Pi;

    function Ri(t, n) {
        var e = we(t),
            r = t === n ? xe(t) : (e - we(n)) / (n - t),
            i = e / r + t;
        if (ye(r) < se) return Pi;

        function o(t, n) {
            var e = i - n,
                o = r * t;
            return [e * xe(o), i - e * we(o)]
        }
        return o.invert = function (t, n) {
            var e = i - n;
            return [be(t, ye(e)) / r * Me(e), i - Me(r) * Te(t * t + e * e)]
        }, o
    }
    var zi = function () {
            return (t = Ri, n = 0, e = fe / 3, r = Ni(t), i = r(n, e), i.parallels = function (t) {
                return arguments.length ? r(n = t[0] * me, e = t[1] * me) : [n * ve, e * ve]
            }, i).scale(131.154).center([0, 13.9389]);
            var t, n, e, r, i
        },
        Fi = Math.abs,
        Ci = (Math.atan, Math.atan2),
        Li = (Math.ceil, Math.cos),
        Ii = (Math.exp, Math.floor, Math.log, Math.max),
        Di = Math.min,
        qi = (Math.pow, Math.round, Math.sign, Math.sin),
        Ui = (Math.tan, Math.PI),
        Hi = Ui / 2,
        Gi = (Math.SQRT1_2, $i(2)),
        Xi = ($i(Ui), 180 / Ui),
        Wi = Ui / 180;

    function Bi(t) {
        return t > 1 ? Hi : t < -1 ? -Hi : Math.asin(t)
    }

    function Vi(t) {
        return t > 1 ? 0 : t < -1 ? Ui : Math.acos(t)
    }

    function $i(t) {
        return t > 0 ? Math.sqrt(t) : 0
    }

    function Yi(t, n) {
        var e, r = t * qi(n),
            i = 30;
        do {
            n -= e = (n + qi(n) - r) / (1 + Li(n))
        } while (Fi(e) > 1e-6 && --i > 0);
        return n / 2
    }
    var Ki = function (t, n, e) {
        function r(r, i) {
            return [t * r * Li(i = Yi(e, i)), n * qi(i)]
        }
        return r.invert = function (r, i) {
            return i = Bi(i / n), [r / (t * Li(i)), Bi((2 * i + qi(2 * i)) / e)]
        }, r
    }(Gi / Hi, Gi, Ui);

    function Ji(t) {
        return function (n, e) {
            var r = Te(n * n + e * e),
                i = t(r),
                o = xe(i),
                a = we(i);
            return [be(n * o, r * a), ke(r && e * o / r)]
        }
    }

    function Zi(t, n) {
        return [we(n) * xe(t), xe(n)]
    }
    Zi.invert = Ji(ke);

    function Qi(t, n) {
        var e = n * n;
        return [t, n * (1.0148 + e * e * (.23185 + e * (.02406 * e - .14499)))]
    }
    Qi.invert = function (t, n) {
        n > 1.790857183 ? n = 1.790857183 : n < -1.790857183 && (n = -1.790857183);
        var e, r = n;
        do {
            var i = r * r;
            r -= e = (r * (1.0148 + i * i * (.23185 + i * (.02406 * i - .14499))) - n) / (1.0148 + i * i * (5 * .23185 + i * (.21654 * i - 1.01493)))
        } while (Fi(e) > 1e-6);
        return [t, r]
    };
    var to, no, eo, ro, io, oo, ao, uo, co, lo, so, fo, ho, po, vo, mo, yo = {
        sphere: Se,
        point: go,
        lineStart: wo,
        lineEnd: Mo,
        polygonStart: function () {
            yo.lineStart = To, yo.lineEnd = ko
        },
        polygonEnd: function () {
            yo.lineStart = wo, yo.lineEnd = Mo
        }
    };

    function go(t, n) {
        t *= me;
        var e = we(n *= me);
        bo(e * we(t), e * xe(t), xe(n))
    }

    function bo(t, n, e) {
        ++to, eo += (t - eo) / to, ro += (n - ro) / to, io += (e - io) / to
    }

    function wo() {
        yo.point = _o
    }

    function _o(t, n) {
        t *= me;
        var e = we(n *= me);
        po = e * we(t), vo = e * xe(t), mo = xe(n), yo.point = xo, bo(po, vo, mo)
    }

    function xo(t, n) {
        t *= me;
        var e = we(n *= me),
            r = e * we(t),
            i = e * xe(t),
            o = xe(n),
            a = be(Te((a = vo * o - mo * i) * a + (a = mo * r - po * o) * a + (a = po * i - vo * r) * a), po * r + vo * i + mo * o);
        no += a, oo += a * (po + (po = r)), ao += a * (vo + (vo = i)), uo += a * (mo + (mo = o)), bo(po, vo, mo)
    }

    function Mo() {
        yo.point = go
    }

    function To() {
        yo.point = Eo
    }

    function ko() {
        So(fo, ho), yo.point = go
    }

    function Eo(t, n) {
        fo = t, ho = n, t *= me, n *= me, yo.point = So;
        var e = we(n);
        po = e * we(t), vo = e * xe(t), mo = xe(n), bo(po, vo, mo)
    }

    function So(t, n) {
        t *= me;
        var e = we(n *= me),
            r = e * we(t),
            i = e * xe(t),
            o = xe(n),
            a = vo * o - mo * i,
            u = mo * r - po * o,
            c = po * i - vo * r,
            l = Te(a * a + u * u + c * c),
            s = ke(l),
            f = l && -s / l;
        co += f * a, lo += f * u, so += f * c, no += s, oo += s * (po + (po = r)), ao += s * (vo + (vo = i)), uo += s * (mo + (mo = o)), bo(po, vo, mo)
    }
    var jo = function (t) {
        to = no = eo = ro = io = oo = ao = uo = co = lo = so = 0, oe(t, yo);
        var n = co,
            e = lo,
            r = so,
            i = n * n + e * e + r * r;
        return i < 1e-12 && (n = oo, e = ao, r = uo, no < se && (n = eo, e = ro, r = io), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [be(e, n) * ve, ke(r / Te(i)) * ve]
    };

    function Ao(t, n) {
        var e = we(n),
            r = we(t) * e;
        return [e * xe(t) / r, xe(n) / r]
    }
    Ao.invert = Ji(ge);
    var Oo, No, Po, Ro, zo, Fo = ae(),
        Co = ae(),
        Lo = {
            point: Se,
            lineStart: Se,
            lineEnd: Se,
            polygonStart: function () {
                Fo.reset(), Lo.lineStart = Io, Lo.lineEnd = Do
            },
            polygonEnd: function () {
                var t = +Fo;
                Co.add(t < 0 ? pe + t : t), this.lineStart = this.lineEnd = this.point = Se
            },
            sphere: function () {
                Co.add(pe)
            }
        };

    function Io() {
        Lo.point = qo
    }

    function Do() {
        Uo(Oo, No)
    }

    function qo(t, n) {
        Lo.point = Uo, Oo = t, No = n, Po = t *= me, Ro = we(n = (n *= me) / 2 + de), zo = xe(n)
    }

    function Uo(t, n) {
        var e = (t *= me) - Po,
            r = e >= 0 ? 1 : -1,
            i = r * e,
            o = we(n = (n *= me) / 2 + de),
            a = xe(n),
            u = zo * a,
            c = Ro * o + u * we(i),
            l = u * r * xe(i);
        Fo.add(be(l, c)), Po = t, Ro = o, zo = a
    }
    var Ho, Go, Xo, Wo, Bo, Vo, $o, Yo, Ko, Jo, Zo = ae(),
        Qo = {
            point: ta,
            lineStart: ea,
            lineEnd: ra,
            polygonStart: function () {
                Qo.point = ia, Qo.lineStart = oa, Qo.lineEnd = aa, Zo.reset(), Lo.polygonStart()
            },
            polygonEnd: function () {
                Lo.polygonEnd(), Qo.point = ta, Qo.lineStart = ea, Qo.lineEnd = ra, Fo < 0 ? (Ho = -(Xo = 180), Go = -(Wo = 90)) : Zo > se ? Wo = 90 : Zo < -se && (Go = -90), Jo[0] = Ho, Jo[1] = Xo
            },
            sphere: function () {
                Ho = -(Xo = 180), Go = -(Wo = 90)
            }
        };

    function ta(t, n) {
        Ko.push(Jo = [Ho = t, Xo = t]), n < Go && (Go = n), n > Wo && (Wo = n)
    }

    function na(t, n) {
        var e = Zr([t * me, n * me]);
        if (Yo) {
            var r = ti(Yo, e),
                i = ti([r[1], -r[0], 0], r);
            ri(i), i = Jr(i);
            var o, a = t - Bo,
                u = a > 0 ? 1 : -1,
                c = i[0] * ve * u,
                l = ye(a) > 180;
            l ^ (u * Bo < c && c < u * t) ? (o = i[1] * ve) > Wo && (Wo = o) : l ^ (u * Bo < (c = (c + 360) % 360 - 180) && c < u * t) ? (o = -i[1] * ve) < Go && (Go = o) : (n < Go && (Go = n), n > Wo && (Wo = n)), l ? t < Bo ? ua(Ho, t) > ua(Ho, Xo) && (Xo = t) : ua(t, Xo) > ua(Ho, Xo) && (Ho = t) : Xo >= Ho ? (t < Ho && (Ho = t), t > Xo && (Xo = t)) : t > Bo ? ua(Ho, t) > ua(Ho, Xo) && (Xo = t) : ua(t, Xo) > ua(Ho, Xo) && (Ho = t)
        } else Ko.push(Jo = [Ho = t, Xo = t]);
        n < Go && (Go = n), n > Wo && (Wo = n), Yo = e, Bo = t
    }

    function ea() {
        Qo.point = na
    }

    function ra() {
        Jo[0] = Ho, Jo[1] = Xo, Qo.point = ta, Yo = null
    }

    function ia(t, n) {
        if (Yo) {
            var e = t - Bo;
            Zo.add(ye(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else Vo = t, $o = n;
        Lo.point(t, n), na(t, n)
    }

    function oa() {
        Lo.lineStart()
    }

    function aa() {
        ia(Vo, $o), Lo.lineEnd(), ye(Zo) > se && (Ho = -(Xo = 180)), Jo[0] = Ho, Jo[1] = Xo, Yo = null
    }

    function ua(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }

    function ca(t, n) {
        return t[0] - n[0]
    }

    function la(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }
    var sa = function (t, n) {
            var e = t[0] * me,
                r = t[1] * me,
                i = n[0] * me,
                o = n[1] * me,
                a = we(r),
                u = xe(r),
                c = we(o),
                l = xe(o),
                s = a * we(e),
                f = a * xe(e),
                h = c * we(i),
                d = c * xe(i),
                p = 2 * ke(Te(Ee(o - r) + a * c * Ee(i - e))),
                v = xe(p),
                m = p ? function (t) {
                    var n = xe(t *= p) / v,
                        e = xe(p - t) / v,
                        r = e * s + n * h,
                        i = e * f + n * d,
                        o = e * u + n * l;
                    return [be(i, r) * ve, be(o, Te(r * r + i * i)) * ve]
                } : function () {
                    return [e * ve, r * ve]
                };
            return m.distance = p, m
        },
        fa = function (t, n) {
            var e = da(t[1], t[0]),
                r = da(n[1], n[0]),
                i = function (t, n) {
                    return Ci(t[0] * n[1] - t[1] * n[0], t[0] * n[0] + t[1] * n[1])
                }(e, r),
                o = pa(e) / pa(r);
            return ha([1, 0, t[0][0], 0, 1, t[0][1]], ha([o, 0, 0, 0, o, 0], ha([Li(i), qi(i), 0, -qi(i), Li(i), 0], [1, 0, -n[0][0], 0, 1, -n[0][1]])))
        };

    function ha(t, n) {
        return [t[0] * n[0] + t[1] * n[3], t[0] * n[1] + t[1] * n[4], t[0] * n[2] + t[1] * n[5] + t[2], t[3] * n[0] + t[4] * n[3], t[3] * n[1] + t[4] * n[4], t[3] * n[2] + t[4] * n[5] + t[5]]
    }

    function da(t, n) {
        return [t[0] - n[0], t[1] - n[1]]
    }

    function pa(t) {
        return $i(t[0] * t[0] + t[1] * t[1])
    }
    var va = function (t, n, e) {
        function r(t, e) {
            var r, i = n(t, e),
                o = i.project([t * Xi, e * Xi]);
            return (r = i.transform) ? [r[0] * o[0] + r[1] * o[1] + r[2], -(r[3] * o[0] + r[4] * o[1] + r[5])] : (o[1] = -o[1], o)
        }! function t(n, e) {
            if (n.edges = function (t) {
                    for (var n = t.length, e = [], r = t[n - 1], i = 0; i < n; ++i) e.push([r, r = t[i]]);
                    return e
                }(n.face), e.face) {
                var r = n.shared = function (t, n) {
                        for (var e, r, i = t.length, o = null, a = 0; a < i; ++a) {
                            e = t[a];
                            for (var u = n.length; --u >= 0;)
                                if (r = n[u], e[0] === r[0] && e[1] === r[1]) {
                                    if (o) return [o, e];
                                    o = e
                                }
                        }
                    }(n.face, e.face),
                    i = fa(r.map(e.project), r.map(n.project));
                n.transform = e.transform ? ha(e.transform, i) : i;
                for (var o = e.edges, a = 0, u = o.length; a < u; ++a) ma(r[0], o[a][1]) && ma(r[1], o[a][0]) && (o[a] = n), ma(r[0], o[a][0]) && ma(r[1], o[a][1]) && (o[a] = n);
                for (o = n.edges, a = 0, u = o.length; a < u; ++a) ma(r[0], o[a][0]) && ma(r[1], o[a][1]) && (o[a] = e), ma(r[0], o[a][1]) && ma(r[1], o[a][0]) && (o[a] = e)
            } else n.transform = e.transform;
            n.children && n.children.forEach((function (e) {
                t(e, n)
            }));
            return n
        }(t, {
            transform: null
        }), ya(t) && (r.invert = function (e, r) {
            var i = function t(e, r) {
                var i = e.project.invert,
                    o = e.transform,
                    a = r;
                o && (c = 1 / ((u = o)[0] * u[4] - u[1] * u[3]), o = [c * u[4], -c * u[1], c * (u[1] * u[5] - u[2] * u[4]), -c * u[3], c * u[0], c * (u[2] * u[3] - u[0] * u[5])], a = [o[0] * a[0] + o[1] * a[1] + o[2], o[3] * a[0] + o[4] * a[1] + o[5]]);
                var u, c;
                if (i && e === function (t) {
                        return n(t[0] * Wi, t[1] * Wi)
                    }(l = i(a))) return l;
                for (var l, s = e.children, f = 0, h = s && s.length; f < h; ++f)
                    if (l = t(s[f], r)) return l
            }(t, [e, -r]);
            return i && (i[0] *= Wi, i[1] *= Wi, i)
        });
        var i = Oi(r),
            o = i.stream;
        return i.stream = function (n) {
            var e = i.rotate(),
                r = o(n),
                a = (i.rotate([0, 0]), o(n));
            return i.rotate(e), r.sphere = function () {
                a.polygonStart(), a.lineStart(),
                    function t(n, e, r) {
                        var i, o, a = e.edges,
                            u = a.length,
                            c = {
                                type: "MultiPoint",
                                coordinates: e.face
                            },
                            l = e.face.filter((function (t) {
                                return 90 !== Fi(t[1])
                            })),
                            s = function (t) {
                                var n, e, r, i, o, a, u;
                                if (Wo = Xo = -(Ho = Go = 1 / 0), Ko = [], oe(t, Qo), e = Ko.length) {
                                    for (Ko.sort(ca), n = 1, o = [r = Ko[0]]; n < e; ++n) la(r, (i = Ko[n])[0]) || la(r, i[1]) ? (ua(r[0], i[1]) > ua(r[0], r[1]) && (r[1] = i[1]), ua(i[0], r[1]) > ua(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                                    for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (u = ua(r[1], i[0])) > a && (a = u, Ho = i[0], Xo = r[1])
                                }
                                return Ko = Jo = null, Ho === 1 / 0 || Go === 1 / 0 ? [
                                    [NaN, NaN],
                                    [NaN, NaN]
                                ] : [
                                    [Ho, Go],
                                    [Xo, Wo]
                                ]
                            }({
                                type: "MultiPoint",
                                coordinates: l
                            }),
                            f = !1,
                            h = -1,
                            d = s[1][0] - s[0][0],
                            p = 180 === d || 360 === d ? [(s[0][0] + s[1][0]) / 2, (s[0][1] + s[1][1]) / 2] : jo(c);
                        if (r)
                            for (; ++h < u && a[h] !== r;);
                        ++h;
                        for (var v = 0; v < u; ++v) o = a[(v + h) % u], Array.isArray(o) ? (f || (n.point((i = sa(o[0], p)(1e-6))[0], i[1]), f = !0), n.point((i = sa(o[1], p)(1e-6))[0], i[1])) : (f = !1, o !== r && t(n, o, e))
                    }(a, t), a.lineEnd(), a.polygonEnd()
            }, r
        }, i.angle(null == e ? -30 : e * Xi)
    };

    function ma(t, n) {
        return t && n && t[0] === n[0] && t[1] === n[1]
    }

    function ya(t) {
        return t.project.invert || t.children && t.children.some(ya)
    }
    var ga = [
            [0, 90],
            [-90, 0],
            [0, 0],
            [90, 0],
            [180, 0],
            [0, -90]
        ],
        ba = [
            [0, 2, 1],
            [0, 3, 2],
            [5, 1, 2],
            [5, 2, 3],
            [0, 1, 4],
            [0, 4, 3],
            [5, 4, 1],
            [5, 3, 4]
        ].map((function (t) {
            return t.map((function (t) {
                return ga[t]
            }))
        })),
        wa = function (t) {
            t = t || function (t) {
                var n = 6 === t.length ? jo({
                    type: "MultiPoint",
                    coordinates: t
                }) : t[0];
                return Oi(Ao).scale(144.049).clipAngle(60).scale(1).translate([0, 0]).rotate([-n[0], -n[1]])
            };
            var n = ba.map((function (t) {
                    for (var n, e = t.map(Ma), r = e.length, i = e[r - 1], o = [], a = 0; a < r; ++a) n = e[a], o.push(xa([.9486832980505138 * i[0] + .31622776601683794 * n[0], .9486832980505138 * i[1] + .31622776601683794 * n[1], .9486832980505138 * i[2] + .31622776601683794 * n[2]]), xa([.9486832980505138 * n[0] + .31622776601683794 * i[0], .9486832980505138 * n[1] + .31622776601683794 * i[1], .9486832980505138 * n[2] + .31622776601683794 * i[2]])), i = n;
                    return o
                })),
                e = [],
                r = [-1, 0, 0, 1, 0, 1, 4, 5];
            n.forEach((function (t, i) {
                for (var o, a, u = ba[i], c = u.length, l = e[i] = [], s = 0; s < c; ++s) n.push([u[s], t[(2 * s + 2) % (2 * c)], t[(2 * s + 1) % (2 * c)]]), r.push(i), l.push((o = Ma(t[(2 * s + 2) % (2 * c)]), a = Ma(t[(2 * s + 1) % (2 * c)]), [o[1] * a[2] - o[2] * a[1], o[2] * a[0] - o[0] * a[2], o[0] * a[1] - o[1] * a[0]]))
            }));
            var i = n.map((function (n) {
                return {
                    project: t(n),
                    face: n
                }
            }));
            return r.forEach((function (t, n) {
                var e = i[t];
                e && (e.children || (e.children = [])).push(i[n])
            })), va(i[0], (function (t, n) {
                var r = Li(n),
                    o = [r * Li(t), r * qi(t), qi(n)],
                    a = t < -Ui / 2 ? n < 0 ? 6 : 4 : t < 0 ? n < 0 ? 2 : 0 : t < Ui / 2 ? n < 0 ? 3 : 1 : n < 0 ? 7 : 5,
                    u = e[a];
                return i[_a(u[0], o) < 0 ? 8 + 3 * a : _a(u[1], o) < 0 ? 8 + 3 * a + 1 : _a(u[2], o) < 0 ? 8 + 3 * a + 2 : a]
            })).angle(-30).scale(110.625).center([0, 45])
        };

    function _a(t, n) {
        for (var e = 0, r = t.length, i = 0; e < r; ++e) i += t[e] * n[e];
        return i
    }

    function xa(t) {
        return [Ci(t[1], t[0]) * Xi, Bi(Ii(-1, Di(1, t[2]))) * Xi]
    }

    function Ma(t) {
        var n = t[0] * Wi,
            e = t[1] * Wi,
            r = Li(e);
        return [r * Li(n), r * qi(n), qi(e)]
    }

    function Ta(t, n) {
        var e = we(n),
            r = 1 + we(t) * e;
        return [e * xe(t) / r, xe(n) / r]
    }
    Ta.invert = Ji((function (t) {
        return 2 * ge(t)
    }));

    function ka(t, n) {
        var e = Li(n),
            r = function (t) {
                return t ? t / Math.sin(t) : 1
            }(Vi(e * Li(t /= 2)));
        return [2 * e * qi(t) * r, qi(n) * r]
    }
    ka.invert = function (t, n) {
        if (!(t * t + 4 * n * n > Ui * Ui + 1e-6)) {
            var e = t,
                r = n,
                i = 25;
            do {
                var o, a = qi(e),
                    u = qi(e / 2),
                    c = Li(e / 2),
                    l = qi(r),
                    s = Li(r),
                    f = qi(2 * r),
                    h = l * l,
                    d = s * s,
                    p = u * u,
                    v = 1 - d * c * c,
                    m = v ? Vi(s * c) * $i(o = 1 / v) : o = 0,
                    y = 2 * m * s * u - t,
                    g = m * l - n,
                    b = o * (d * p + m * s * c * h),
                    w = o * (.5 * a * f - 2 * m * l * u),
                    _ = .25 * o * (f * u - m * l * d * a),
                    x = o * (h * c + m * p * s),
                    M = w * _ - x * b;
                if (!M) break;
                var T = (g * w - y * x) / M,
                    k = (y * _ - g * b) / M;
                e -= T, r -= k
            } while ((Fi(T) > 1e-6 || Fi(k) > 1e-6) && --i > 0);
            return [e, r]
        }
    };

    function Ea(t, n) {
        var e = ka(t, n);
        return [(e[0] + t / Hi) / 2, (e[1] + n) / 2]
    }
    Ea.invert = function (t, n) {
        var e = t,
            r = n,
            i = 25;
        do {
            var o, a = Li(r),
                u = qi(r),
                c = qi(2 * r),
                l = u * u,
                s = a * a,
                f = qi(e),
                h = Li(e / 2),
                d = qi(e / 2),
                p = d * d,
                v = 1 - s * h * h,
                m = v ? Vi(a * h) * $i(o = 1 / v) : o = 0,
                y = .5 * (2 * m * a * d + e / Hi) - t,
                g = .5 * (m * u + r) - n,
                b = .5 * o * (s * p + m * a * h * l) + .5 / Hi,
                w = o * (f * c / 4 - m * u * d),
                _ = .125 * o * (c * d - m * u * s * f),
                x = .5 * o * (l * h + m * p * a) + .5,
                M = w * _ - x * b,
                T = (g * w - y * x) / M,
                k = (y * _ - g * b) / M;
            e -= T, r -= k
        } while ((Fi(T) > 1e-6 || Fi(k) > 1e-6) && --i > 0);
        return [e, r]
    };

    function Sa(t, n) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, n) {
            if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
            var e = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return e
        }(t, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ja(t, n, e, r, a) {
        var u = Object(o.c)(e + 90, 360),
            c = 180 < u ? -1 : 1;
        c < 0 ? (e = 270 - u, n += 180) : e = u - 90, e *= i.c, n = (Object(o.c)(n + 180, 360) - 180) * i.c;
        var l = t * t,
            s = Math.sin(e),
            f = Math.cos(e),
            h = t * f,
            d = f / t,
            p = [r, a];
        return {
            project: function (e, o) {
                var u = e * i.c,
                    l = o * i.c,
                    f = u - n,
                    d = Math.sin(f),
                    p = Math.cos(f),
                    v = Math.sin(l),
                    m = Math.cos(l),
                    y = t * m;
                return [y * d * c + r, (y * p * s - h * v) * c + a]
            },
            invert: function (t, e) {
                var o = (t - r) * c,
                    u = (a - e) * c,
                    f = 1 - (o * o + u * u) / l;
                if (f >= 0) {
                    var p = Math.sqrt(f),
                        v = n + Math.atan2(o, p * h - u * s),
                        m = Math.asin(p * s + u * d);
                    return [v * i.a, m * i.a]
                }
                return [NaN, NaN]
            },
            webgl: function (t) {
                return {
                    shaderSource: function () {
                        return "\nuniform vec2 u_translate;   // screen coords translation (x0, y0)\nuniform float u_R2;         // scale R, squared\nuniform float u_lon0;       // origin longitude\nuniform float u_sinlat0;    // sin(lat0)\nuniform float u_Rcoslat0;   // R * cos(lat0)\nuniform float u_coslat0dR;  // cos(lat0) / R\nuniform float u_flip;       // 1.0 if lat0 in range [-90deg, +90deg], otherwise -1.0\n\n// Handbook of Mathematical Functions, M. Abramowitz and I.A. Stegun, Ed. For input on range [-1, +1]\n// http://http.developer.nvidia.com/Cg/asin.html\nfloat arcsin(in float v) {\n    float x = abs(v);\n    float ret = -0.0187293;\n    ret *= x;\n    ret += 0.0742610;\n    ret *= x;\n    ret -= 0.2121144;\n    ret *= x;\n    ret += 1.5707288;\n    ret = PI / 2.0 - sqrt(1.0 - x) * ret;\n    return sign(v) * ret;\n}\n\n/** @returns [lon, lat] in radians for the specified point [x, y], or [7e37, 7e37] if the point is unprojectable. */\nvec2 invert(in vec2 point) {\n    vec2 pt = (point - u_translate) * u_flip;\n    float d = 1.0 - dot(pt, pt) / u_R2;\n    if (d >= 0.0) {  // CONSIDER: step() to remove branch... worth it?\n        float cosc = sqrt(d);\n        float lon = u_lon0 + atan(pt.x, cosc * u_Rcoslat0 - pt.y * u_sinlat0);  // u_lon0 + [-pi/2, pi/2]\n        float lat = arcsin(cosc * u_sinlat0 + pt.y * u_coslat0dR);              // [-π/2, π/2] [-90°, +90°]\n        return vec2(lon, lat);\n    }\n    return vec2(7e37);  // outside of projection\n}\n"
                    },
                    textures: function () {
                        return {}
                    },
                    uniforms: function () {
                        return {
                            u_translate: p,
                            u_R2: l,
                            u_lon0: n,
                            u_sinlat0: s,
                            u_Rcoslat0: h,
                            u_coslat0dR: d,
                            u_flip: c
                        }
                    }
                }
            }
        }
    }

    function Aa(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                return e
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var Oa = {
        conicEquidistant: Pa,
        equirectangular: Ra,
        mollweide: za,
        orthographic: Fa,
        patterson: Ca,
        polyhedralWaterman: La,
        stereographic: Ia,
        winkel3: Da
    };

    function Na() {
        var t = function (t) {
                var n = JSON.parse(t),
                    e = n[0],
                    r = Oa[e];
                if (void 0 === r) throw new Error("Unknown projection: " + e);
                return r().clipAngle(n[1]).clipExtent(n[2]).scale(n[3]).translate(n[4]).center(n[5]).angle(n[6]).rotate(n[7]).precision(n[8])
            }(function (t) {
                if (void 0 === Oa[t.key]) throw new Error("Unsupported projection: " + t);
                return JSON.stringify([t.key, t.clipAngle(), t.clipExtent(), t.scale(), t.translate(), t.center(), t.angle(), t.rotate(), t.precision()])
            }(this)),
            n = t.invert.bind(t),
            e = [NaN, NaN];
        return {
            project: function (n, r) {
                return e[0] = n, e[1] = r, t(e)
            },
            invert: function (t, r) {
                return e[0] = t, e[1] = r, n(e)
            }
        }
    }

    function Pa() {
        return Object.assign(zi(), {
            key: "conicEquidistant",
            optimize: Na
        })
    }

    function Ra() {
        return Object.assign(Oi(Pi).scale(152.63), {
            key: "equirectangular",
            optimize: Na
        })
    }

    function za() {
        return Object.assign(Oi(Ki).scale(169.529), {
            key: "mollweide",
            optimize: Na
        })
    }

    function Fa() {
        return Object.assign(Oi(Zi).scale(249.5).clipAngle(90 + se), {
            key: "orthographic",
            optimize: function () {
                return ja.apply(void 0, Aa((n = Sa((t = this).rotate(), 2), e = n[0], r = n[1], i = Sa(t.translate(), 2), o = i[0], a = i[1], [t.scale(), -e, -r, o, a])));
                var t, n, e, r, i, o, a
            }
        })
    }

    function Ca() {
        return Object.assign(Oi(Qi).scale(139.319), {
            key: "patterson",
            optimize: Na
        })
    }

    function La() {
        return Object.assign(wa(), {
            key: "polyhedralWaterman",
            optimize: Na
        })
    }

    function Ia() {
        return Object.assign(Oi(Ta).scale(250).clipAngle(142), {
            key: "stereographic",
            optimize: Na
        })
    }

    function Da() {
        return Object.assign(Oi(Ea).scale(158.837), {
            key: "winkel3",
            optimize: Na
        })
    }

    function qa(t, n) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, n) {
            if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
            var e = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return e
        }(t, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Ua() {
        return [Object(o.c)((new Date).getTimezoneOffset() / 4, 360), 0]
    }

    function Ha(t, n) {
        return a.isFinite(t) || t === 1 / 0 || t === -1 / 0 ? t : n
    }

    function Ga(t, n) {
        var e = qa(jr().projection(t).bounds({
                type: "Sphere"
            }), 2),
            r = qa(e[0], 2),
            i = r[0],
            o = r[1],
            a = qa(e[1], 2),
            u = a[0],
            c = a[1],
            l = (u - i) / t.scale(),
            s = (c - o) / t.scale(),
            f = .9 * Math.min(n.width / l, n.height / s),
            h = [n.width / 2, n.height / 2];
        return t.scale(f).translate(h)
    }

    function Xa(t, n) {
        var e = Object.assign({
            projection: null,
            newProjection: function (t) {
                throw new Error("method must be overridden")
            },
            bounds: function (t) {
                var n = qa(jr().projection(this.projection).bounds({
                        type: "Sphere"
                    }), 2),
                    e = qa(n[0], 2),
                    r = e[0],
                    i = e[1],
                    o = qa(n[1], 2),
                    a = o[0],
                    u = o[1],
                    c = Math.max(Math.floor(Ha(r, 0)), 0),
                    l = Math.max(Math.floor(Ha(i, 0)), 0),
                    s = Math.min(Math.ceil(Ha(a, t.width)), t.width - 1),
                    f = Math.min(Math.ceil(Ha(u, t.height)), t.height - 1);
                return {
                    xMin: c,
                    yMin: l,
                    xMax: s,
                    yMax: f,
                    width: s - c + 1,
                    height: f - l + 1
                }
            },
            fit: function (t) {
                return Fr.o() && "tara" === Fr.A() ? 700 : this.newProjection(t).scale()
            },
            center: function (t) {
                return [t.width / 2, t.height / 2]
            },
            scaleExtent: function () {
                return [25, 3e3]
            },
            orientation: function (t, n) {
                var e = this.projection,
                    r = e.rotate();
                if (n) {
                    var i = a.isString(t) ? t.split(",") : [],
                        u = +i[0],
                        c = +i[1],
                        l = +i[2],
                        s = this.scaleExtent();
                    return e.rotate(a.isFinite(u) && a.isFinite(c) ? [-u, -c, r[2]] : this.newProjection(n).rotate()), e.scale(a.isFinite(l) ? Object(o.a)(l, s[0], s[1]) : this.fit(n)), e.translate(this.center(n)), this
                }
                return [(-r[0]).toFixed(2), (-r[1]).toFixed(2), Math.round(e.scale())].join(",")
            },
            manipulator: function (t, n) {
                var e = this.projection,
                    r = 60 / n,
                    i = [e.rotate()[0] / r, -e.rotate()[1] / r],
                    o = e.precision();
                return e.precision(10 * o), {
                    move: function (n, o) {
                        if (n) {
                            var a = n[0] - t[0] + i[0],
                                u = n[1] - t[1] + i[1];
                            e.rotate([a * r, -u * r, e.rotate()[2]])
                        }
                        e.scale(o)
                    },
                    end: function () {
                        e.precision(o)
                    }
                }
            },
            locate: function (t) {
                return null
            },
            defineMask: function (t) {
                return jr().projection(this.projection).context(t)({
                    type: "Sphere"
                }), t
            },
            backgroundRenderer: function () {
                return {
                    renderTo: function (t, n) {
                        t.fillStyle = "#303030", t.beginPath(), n({
                            type: "Sphere"
                        }), t.fill()
                    }
                }
            },
            graticuleRenderer: function () {
                var t = qr()(),
                    n = qr().extentMinor([
                        [0, 0],
                        [0, 0]
                    ]).stepMajor([0, 90])(),
                    e = Xr(t, {
                        strokeStyle: "#505050",
                        lineWidth: 1
                    }),
                    r = Xr(n, {
                        strokeStyle: "#808080",
                        lineWidth: 1
                    });
                return {
                    renderTo: function (t, n) {
                        e.renderTo(t, n), r.renderTo(t, n)
                    }
                }
            },
            foregroundRenderer: function () {
                return {
                    renderTo: function (t, n) {
                        t.strokeStyle = "#000005", t.lineWidth = 4, t.beginPath(), n({
                            type: "Sphere"
                        }), t.stroke()
                    }
                }
            }
        }, t);
        return e.projection = e.newProjection(n), e
    }

    function Wa(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(za().rotate([30, -45, 90]).precision(.1), t)
            }
        }, t)
    }

    function Ba(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(Pa().rotate(Ua()).precision(.1), t)
            }
        }, t)
    }

    function Va(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(Ra().rotate(Ua()).precision(.1), t)
            }
        }, t)
    }

    function $a(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(Fa().rotate(Ua()).precision(.1).clipAngle(90), t)
            },
            backgroundRenderer: function () {
                return {
                    renderTo: function (t, n) {
                        var e = n.projection(),
                            r = qa(e.translate(), 2),
                            i = r[0],
                            o = r[1],
                            a = e.scale(),
                            u = t.createRadialGradient(i, o, 0, i, o, a);
                        u.addColorStop(.69, "#303030"), u.addColorStop(.91, "#202020"), u.addColorStop(.96, "#000005"), t.fillStyle = u, t.fillRect(i - a, o - a, 2 * a, 2 * a)
                    }
                }
            },
            foregroundRenderer: function () {
                return {
                    renderTo: function (t, n) {
                        var e = n.projection(),
                            r = qa(e.translate(), 2),
                            o = r[0],
                            a = r[1],
                            u = e.scale();
                        t.fillStyle = "#000005", t.beginPath(), t.arc(o, a, u - 2, 0, i.e, !0), t.arc(o, a, u + 4, 0, i.e, !0), t.fill("evenodd")
                    }
                }
            },
            locate: function (t) {
                return [-t[0], -t[1], this.projection.rotate()[2]]
            }
        }, t)
    }

    function Ya(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(Ca().precision(.1), t)
            }
        }, t)
    }

    function Ka(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(Ia().rotate([-43, -20]).precision(1).clipAngle(179.9999).clipExtent([
                    [0, 0],
                    [t.width, t.height]
                ]), t)
            },
            foregroundRenderer: function () {
                return {
                    renderTo: function (t, n) {}
                }
            }
        }, t)
    }

    function Ja(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(La().rotate([20, 0]).precision(.1), t)
            },
            foregroundRenderer: function () {
                return {
                    renderTo: function (t, n) {
                        var e = t.canvas,
                            r = e.width,
                            i = e.height;
                        t.fillStyle = t.strokeStyle = "#000005", t.lineWidth = 4, t.beginPath(), n({
                            type: "Sphere"
                        }), t.stroke(), t.moveTo(0, 0), t.lineTo(r, 0), t.lineTo(r, i), t.lineTo(0, i), t.lineTo(0, 0), t.fill("evenodd")
                    }
                }
            }
        }, t)
    }

    function Za(t) {
        return Xa({
            newProjection: function (t) {
                return Ga(Da().precision(.1), t)
            }
        }, t)
    }

    function Qa() {}

    function tu(t, n) {
        var e = new Qa;
        if (t instanceof Qa) t.each((function (t, n) {
            e.set(n, t)
        }));
        else if (Array.isArray(t)) {
            var r, i = -1,
                o = t.length;
            if (null == n)
                for (; ++i < o;) e.set(i, t[i]);
            else
                for (; ++i < o;) e.set(n(r = t[i], i, t), r)
        } else if (t)
            for (var a in t) e.set(a, t[a]);
        return e
    }
    Qa.prototype = tu.prototype = {
        constructor: Qa,
        has: function (t) {
            return "$" + t in this
        },
        get: function (t) {
            return this["$" + t]
        },
        set: function (t, n) {
            return this["$" + t] = n, this
        },
        remove: function (t) {
            var n = "$" + t;
            return n in this && delete this[n]
        },
        clear: function () {
            for (var t in this) "$" === t[0] && delete this[t]
        },
        keys: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push(n.slice(1));
            return t
        },
        values: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push(this[n]);
            return t
        },
        entries: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push({
                key: n.slice(1),
                value: this[n]
            });
            return t
        },
        size: function () {
            var t = 0;
            for (var n in this) "$" === n[0] && ++t;
            return t
        },
        empty: function () {
            for (var t in this)
                if ("$" === t[0]) return !1;
            return !0
        },
        each: function (t) {
            for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
        }
    };
    var nu = tu;

    function eu() {}
    var ru = nu.prototype;

    function iu(t, n) {
        var e = new eu;
        if (t instanceof eu) t.each((function (t) {
            e.add(t)
        }));
        else if (t) {
            var r = -1,
                i = t.length;
            if (null == n)
                for (; ++r < i;) e.add(t[r]);
            else
                for (; ++r < i;) e.add(n(t[r], r, t))
        }
        return e
    }
    eu.prototype = iu.prototype = {
        constructor: eu,
        has: ru.has,
        add: function (t) {
            return this["$" + (t += "")] = t, this
        },
        remove: ru.remove,
        clear: ru.clear,
        values: ru.keys,
        size: ru.size,
        empty: ru.empty,
        each: ru.each
    };
    var ou = iu,
        au = cu,
        uu = {
            skew: 0
        };
    Promise.resolve(uu);

    function cu() {
        return Date.now() + uu.skew
    }

    function lu() {
        return au()
    }

    function su(t, n, e) {
        var r = t[0].header,
            i = Cr.a(Cr.f(r.refTime), {
                hour: r.forecastTime
            }),
            o = {
                time: {
                    data: [Cr.h(i)]
                },
                lat: {
                    sequence: {
                        start: r.la1,
                        delta: -r.dy,
                        size: r.ny
                    }
                },
                lon: {
                    sequence: {
                        start: r.lo1,
                        delta: r.dx,
                        size: r.nx
                    }
                }
            },
            a = [];
        return n.forEach((function (n, r) {
            o[n] = {
                dimensions: e || ["time", "lat", "lon"],
                data: {
                    block: r
                }
            }, a[r] = new Float32Array(t[r].data)
        })), {
            header: {
                variables: o
            },
            blocks: a
        }
    }

    function fu(t, n) {
        var e = Math.floor(t.size),
            r = Math.floor(n.size),
            a = e * r,
            u = Fr.g(t.delta),
            c = Fr.g(n.delta),
            l = Fr.g(t.start),
            s = Fr.g(n.start),
            f = l + u * (e - 1),
            h = s + c * (r - 1),
            d = (l - u / 2) * i.c,
            p = (f + u / 2) * i.c - d,
            v = (s - c / 2) * i.c,
            m = (h + c / 2) * i.c,
            y = [d, v],
            g = [p, m - v],
            b = Math.floor(e * u) >= 360;
        return {
            dimensions: function () {
                return {
                    width: e,
                    height: r
                }
            },
            isCylindrical: function () {
                return b
            },
            forEach: function (t, n) {
                for (var r = n || 0; r < a; r++) {
                    var i = r % e,
                        o = Math.floor(r / e);
                    if (t(l + i * u, s + o * c, r)) return r + 1
                }
                return NaN
            },
            closest: function (t, n) {
                if (t == t && n == n) {
                    var i = Object(o.c)(t - l, 360) / u,
                        a = (n - s) / c,
                        f = Math.round(i),
                        h = Math.round(a);
                    if (0 <= h && h < r && 0 <= f && (f < e || f === e && b)) {
                        var d = h * e + f;
                        return f === e ? d - e : d
                    }
                }
                return NaN
            },
            closest4: function (t, n) {
                if (t == t && n == n) {
                    var i = Object(o.c)(t - l, 360) / u,
                        a = (n - s) / c,
                        f = Math.floor(i),
                        h = Math.floor(a),
                        d = f + 1;
                    if (0 <= h && h + 1 < r && 0 <= f && (d < e || d === e && b)) {
                        var p = h * e + f,
                            v = p + 1,
                            m = p + e,
                            y = m + 1;
                        return d === e && (v -= e, y -= e), [p, v, m, y, i - f, a - h]
                    }
                }
                return [NaN, NaN, NaN, NaN, NaN, NaN]
            },
            webgl: function () {
                return {
                    shaderSource: function () {
                        return "\nuniform vec2 u_Low;\nuniform vec2 u_Size;\n\nvec2 grid(in vec2 coord) {\n    vec2 tex = (coord - u_Low) / u_Size;\n    float s = tex.s;\n    float t = tex.t;\n\n    if (t < 0.0 || 1.0 < t) discard;  // lat out of bounds, so nothing to draw\n\n    return vec2(fract(s), t);  // UNDONE: fract used here only because lon is circular.\n}\n"
                    },
                    textures: function () {
                        return {}
                    },
                    uniforms: function () {
                        return {
                            u_Low: y,
                            u_Size: g
                        }
                    }
                }
            }
        }
    }

    function hu(t, n) {
        var e = t.context,
            r = n.width,
            i = n.height;
        return {
            shaderSourceTexture2D: function () {
                return "\nuniform sampler2D u_Data;\n\nfloat lookup(in vec2 st) {\n    vec4 h = texture2D(u_Data, st);\n    return scalarize(h);\n}\n"
            },
            shaderSourceBilinearWrap: function () {
                return "\nuniform sampler2D u_Data;\nuniform vec2 u_TextureSize;\n\nvec4 getSample(in vec2 st) {\n    // Use of fract below assumes cylindrical x axis (usually lon) and non-cylindrical y axis (usually lat).\n    return texture2D(u_Data, vec2(fract(st.s), st.t));\n}\n\nfloat lookup(in vec2 st) {\n    // adapted from http://www.iquilezles.org/www/articles/hwinterpolation/hwinterpolation.htm\n    vec2 uv = st * u_TextureSize - 0.5;\n    vec2 iuv = floor(uv);\n    vec2 fuv = fract(uv);\n    vec2 ruv = 1.0 - fuv;\n\n    vec4 a = getSample((iuv + vec2(0.5, 0.5)) / u_TextureSize);  // LL\n    vec4 b = getSample((iuv + vec2(1.5, 0.5)) / u_TextureSize);  // LR\n    vec4 c = getSample((iuv + vec2(0.5, 1.5)) / u_TextureSize);  // UL\n    vec4 d = getSample((iuv + vec2(1.5, 1.5)) / u_TextureSize);  // UR\n    vec4 h;\n\n    int tag = int(dot(step(7e37, vec4(a.x, b.x, c.x, d.x)), vec4(1.0, 2.0, 4.0, 8.0)));\n    if (tag == 0) {\n        // a b c d\n        h = mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    } else if (tag == 1 && ruv.y < fuv.x) {\n        // d b c\n        h = d + ruv.x * (c - d) + ruv.y * (b - d);\n    } else if (tag == 2 && fuv.x < fuv.y) {\n        // c a d\n        h = c + fuv.x * (d - c) + ruv.y * (a - c);\n    } else if (tag == 4 && fuv.x >= fuv.y) {\n        // b a d\n        h = b + ruv.x * (a - b) + fuv.y * (d - b);\n    } else if (tag == 8 && fuv.x <= ruv.y) {\n        // a b c\n        h = a + fuv.x * (b - a) + fuv.y * (c - a);\n    } else {\n        // not enough points to interpolate\n        h = vec4(7e37);\n    }\n\n    return scalarize(h);\n}\n"
            },
            scalarSource: function () {
                return "\nfloat scalarize(in vec4 h) {\n    return h.x;\n}\n"
            },
            vectorSource: function () {
                return "\nfloat scalarize(in vec4 h) {\n    float isMissing = step(7e37, h.x);\n    return length((1.0 - isMissing) * h.xw) + isMissing * 7e37;\n}\n"
            },
            scalarTexture: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.assign({
                    format: e.LUMINANCE,
                    type: e.FLOAT,
                    width: r,
                    height: i,
                    data: t
                }, n)
            },
            vectorTexture: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.assign({
                    format: e.LUMINANCE_ALPHA,
                    type: e.FLOAT,
                    width: r,
                    height: i,
                    data: t
                }, n)
            }
        }
    }

    function du(t, n) {
        var e = Fr.a(n, 1e3);

        function r(e, r) {
            var i = t.closest(e, r);
            return i == i ? n[i] : 7e37
        }
        return r.webgl = function (r) {
            var i = r.context,
                o = hu(r, t.dimensions());
            return {
                shaderSource: function () {
                    return [o.scalarSource(), o.shaderSourceTexture2D()]
                },
                textures: function () {
                    return {
                        weather_data: o.scalarTexture(n, {
                            hash: e,
                            TEXTURE_MIN_FILTER: i.NEAREST,
                            TEXTURE_MAG_FILTER: i.NEAREST
                        })
                    }
                },
                uniforms: function () {
                    return {
                        u_Data: "weather_data"
                    }
                }
            }
        }, r
    }

    function pu(t, n) {
        var e = Fr.a(n, 1e3);

        function r(e, r) {
            var i = 2 * t.closest(e, r);
            if (i == i) {
                var o = n[i],
                    a = n[i + 1];
                if (o < 7e37 && a < 7e37) return [o, a, Math.sqrt(o * o + a * a)]
            }
            return [7e37, 7e37, 7e37]
        }
        return r.webgl = function (r) {
            var i = r.context,
                o = hu(r, t.dimensions());
            return {
                shaderSource: function () {
                    return [o.vectorSource(), o.shaderSourceTexture2D()]
                },
                textures: function () {
                    return {
                        weather_data: o.vectorTexture(n, {
                            hash: e,
                            TEXTURE_MIN_FILTER: i.NEAREST,
                            TEXTURE_MAG_FILTER: i.NEAREST
                        })
                    }
                },
                uniforms: function () {
                    return {
                        u_Data: "weather_data"
                    }
                }
            }
        }, r
    }

    function vu(t, n) {
        var e = Fr.a(n, 1e3);

        function r(e, r) {
            var i = t.closest4(e, r),
                o = i[0];
            if (o == o) {
                var a = i[1],
                    u = i[2],
                    c = i[3],
                    l = i[4],
                    s = i[5],
                    f = 1 - l,
                    h = 1 - s,
                    d = n[o],
                    p = n[a],
                    v = n[u],
                    m = n[c];
                if (d < 7e37) {
                    if (p < 7e37 && v < 7e37 && m < 7e37) return d * (f * h) + p * (l * h) + v * (f * s) + m * (l * s);
                    if (m < 7e37 && p < 7e37 && l >= s) return p + f * (d - p) + s * (m - p);
                    if (v < 7e37 && m < 7e37 && l < s) return v + l * (m - v) + h * (d - v);
                    if (v < 7e37 && p < 7e37 && l <= h) return d + l * (p - d) + s * (v - d)
                } else if (m < 7e37 && v < 7e37 && p < 7e37 && l > h) return m + f * (v - m) + h * (p - m)
            }
            return 7e37
        }
        return r.webgl = function (r) {
            var i = r.context,
                o = hu(r, t.dimensions()),
                a = t.dimensions(),
                u = [a.width, a.height];
            return {
                shaderSource: function () {
                    return [o.scalarSource(), o.shaderSourceBilinearWrap()]
                },
                textures: function () {
                    return {
                        weather_data: o.scalarTexture(n, {
                            hash: e,
                            TEXTURE_MIN_FILTER: i.NEAREST,
                            TEXTURE_MAG_FILTER: i.NEAREST
                        })
                    }
                },
                uniforms: function () {
                    var t = {
                        u_Data: "weather_data"
                    };
                    return t.u_TextureSize = u, t
                }
            }
        }, r
    }

    function mu(t, n) {
        var e = Fr.a(n, 1e3);

        function r(t, n, e, r, i, o, a, u) {
            var c = e + t * (a - e) + n * (i - e),
                l = r + t * (u - r) + n * (o - r);
            return [c, l, Math.sqrt(c * c + l * l)]
        }

        function i(e, i) {
            var o = t.closest4(e, i),
                a = 2 * o[0];
            if (a == a) {
                var u = 2 * o[1],
                    c = 2 * o[2],
                    l = 2 * o[3],
                    s = o[4],
                    f = o[5],
                    h = 1 - s,
                    d = 1 - f,
                    p = n[a],
                    v = n[a + 1],
                    m = n[u],
                    y = n[u + 1],
                    g = n[c],
                    b = n[c + 1],
                    w = n[l],
                    _ = n[l + 1];
                if (v < 7e37) {
                    if (y < 7e37 && b < 7e37 && _ < 7e37) {
                        var x = h * d,
                            M = s * d,
                            T = h * f,
                            k = s * f,
                            E = p * x + m * M + g * T + w * k,
                            S = v * x + y * M + b * T + _ * k;
                        return [E, S, Math.sqrt(E * E + S * S)]
                    }
                    if (_ < 7e37 && y < 7e37 && s >= f) return r(h, f, m, y, w, _, p, v);
                    if (b < 7e37 && _ < 7e37 && s < f) return r(s, d, g, b, p, v, w, _);
                    if (b < 7e37 && y < 7e37 && s <= d) return r(s, f, p, v, g, b, m, y)
                } else if (_ < 7e37 && b < 7e37 && y < 7e37 && s > d) return r(h, d, w, _, m, y, g, b)
            }
            return [7e37, 7e37, 7e37]
        }
        return i.webgl = function (r) {
            var i = r.context,
                o = hu(r, t.dimensions()),
                a = t.dimensions(),
                u = [a.width, a.height];
            return {
                shaderSource: function () {
                    return [o.vectorSource(), o.shaderSourceBilinearWrap()]
                },
                textures: function () {
                    return {
                        weather_data: o.vectorTexture(n, {
                            hash: e,
                            TEXTURE_MIN_FILTER: i.NEAREST,
                            TEXTURE_MAG_FILTER: i.NEAREST
                        })
                    }
                },
                uniforms: function () {
                    var t = {
                        u_Data: "weather_data"
                    };
                    return t.u_TextureSize = u, t
                }
            }
        }, i
    }
    var yu = function (t, n, e, r, i) {
        Array.isArray(t) && (t = su(t, r)), t.blocks || (t = function (t, n) {
            var e = t.variables,
                r = [];
            return Object.keys(e).forEach((function (t) {
                if (n.test(t)) {
                    var i = e[t];
                    r.push(new Float32Array(i.data)), i.data = {
                        block: r.length - 1
                    }
                }
            })), {
                header: t,
                blocks: r
            }
        }(t, n));
        var o = t,
            u = o.header.variables,
            c = u[a.find(Object.keys(u), (function (t) {
                return n.test(t)
            }))],
            l = c.dimensions,
            s = u[l[0]],
            f = u[a.last(l, 2)[0]],
            h = u[a.last(l, 2)[1]],
            d = o.blocks[c.data.block];
        a.isFunction(i) && i(d);
        var p = fu(h.sequence, f.sequence),
            v = {
                type: "scalar",
                valueAt: function (t) {
                    return d[t]
                },
                nearest: du(p, d),
                bilinear: vu(p, d)
            };
        return {
            sourceHTML: e,
            date: function () {
                return Cr.f(s.data[0])
            },
            grid: function () {
                return p
            },
            field: function () {
                return v
            },
            interpolate: function (t, n) {
                return v.bilinear(t, n)
            }
        }
    };

    function gu(t) {
        for (var n = [], e = 0; e < t.length;) {
            var r = t[e++];
            switch (r >> 4) {
                case 12:
                case 13:
                    r = (31 & r) << 6 | 63 & t[e++];
                    break;
                case 14:
                    r = (15 & r) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]
            }
            n.push(r)
        }
        return String.fromCharCode.apply(null, n)
    }

    function bu(t, n, e, r, i) {
        var o = new Float32Array(n * e * r);
        return function (t, n) {
                for (var e = 0, r = 0; e < n.length;) {
                    var i = n[e++];
                    if (i < 128) i = i << 25 >> 25;
                    else switch (i >> 4) {
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            i = i << 26 >> 18 | n[e++];
                            break;
                        case 12:
                        case 13:
                            i = i << 27 >> 11 | n[e++] << 8 | n[e++];
                            break;
                        case 14:
                            i = i << 28 >> 4 | n[e++] << 16 | n[e++] << 8 | n[e++];
                            break;
                        case 15:
                            if (255 === i) {
                                for (var o = 1 + n[e++]; o > 0; o--) t[r++] = NaN;
                                continue
                            }
                            i = n[e++] << 24 | n[e++] << 16 | n[e++] << 8 | n[e++]
                    }
                    t[r++] = i
                }
            }(o, t),
            function (t, n, e, r) {
                var i, o, a, u, c, l, s;
                for (a = 0; a < r; a++) {
                    for (l = a * n * e, i = 1; i < n; i++) s = t[(u = l + i) - 1], t[u] += s == s ? s : 0;
                    for (o = 1; o < e; o++)
                        for (s = t[(c = l + o * n) - n], t[c] += s == s ? s : 0, i = 1; i < n; i++) {
                            var f = t[(u = c + i) - 1],
                                h = t[u - n],
                                d = t[u - n - 1];
                            s = f + h - d, t[u] += s == s ? s : f == f ? f : h == h ? h : d == d ? d : 0
                        }
                }
            }(o, n, e, r),
            function (t, n) {
                for (var e = Math.pow(10, n), r = 0; r < t.length; r++) {
                    var i = t[r];
                    t[r] = i == i ? i / e : 7e37
                }
            }(o, i), o
    }

    function wu(t, n, e, r) {
        var i = new DataView(n, e, r),
            o = new Uint8Array(n, e + 16, r - 16),
            a = i.getInt32(0),
            u = i.getInt32(4),
            c = i.getInt32(8),
            l = i.getFloat32(12);
        return {
            metadata: {
                type: t,
                cols: a,
                rows: u,
                grids: c,
                scaleFactor: l
            },
            values: bu(o, a, u, c, l)
        }
    }
    var _u = function (t) {
            var n = t.Conventions,
                e = (t.title, t.institution, t.source),
                r = (t.references, t.units, t.date),
                i = (t.init, t.encoding);
            if ("earth.nullschool.net/flat-1.0" !== n) throw new Error("Unsupported data conventions: ".concat(a.escape(n)));
            var u = {
                    start: +t.lon.start,
                    delta: +t.lon.delta,
                    size: Object(o.a)(+t.lon.size, 0, 8192)
                },
                c = {
                    start: +t.lat.start,
                    delta: +t.lat.delta,
                    size: Object(o.a)(+t.lat.size, 0, 8192)
                },
                l = Array.isArray(t.data) ? t.data : [],
                s = function (t) {
                    return t
                };
            if (i) switch (i.type) {
                case "packed_delta_rle":
                    var f = i.scale_factor,
                        h = void 0 === f ? 1 : f,
                        d = i.add_offset,
                        p = void 0 === d ? 0 : d;
                    s = function (t) {
                        return function (t, n, e, r) {
                            for (var i = new Float32Array(r), a = 0, u = 0, c = 0; u < t.length && a < r; u++) {
                                var l = t[u],
                                    s = Array.isArray(l),
                                    f = s ? l[0] : l,
                                    h = s ? Object(o.a)(+l[1] + a, a, r) : a + 1,
                                    d = +f;
                                if (null === f || d != d) {
                                    if (!(a < h)) continue;
                                    for (; a < h;) i[a++] = 7e37;
                                    c = 0
                                } else
                                    for (; a < h;) {
                                        var p = (c += d) * n + e;
                                        i[a++] = p == p ? p : 7e37
                                    }
                            }
                            for (; a < r;) i[a++] = 7e37;
                            return i
                        }(t, +h, +p, u.size)
                    };
                    break;
                default:
                    throw new Error("Unsupported encoding: ".concat(a.escape(i.type)))
            }
            var v = new Float32Array(u.size * c.size),
                m = 0;
            l.filter(Array.isArray).forEach((function (t) {
                var n = s(t);
                v.set(n, m), m += n.length
            }));
            var y = fu(u, c),
                g = {
                    type: "scalar",
                    valueAt: function (t) {
                        return v[t]
                    },
                    nearest: du(y, v),
                    bilinear: vu(y, v)
                };
            return {
                sourceHTML: a.escape(e),
                date: function () {
                    return Cr.f(r)
                },
                grid: function () {
                    return y
                },
                field: function () {
                    return g
                },
                interpolate: function (t, n) {
                    return g.bilinear(t, n)
                }
            }
        },
        xu = Fr.s() ? "" : " [<a href='about.html#co2' class='internal-link'>important note</a>]",
        Mu = "CAMS / Copernicus / EC + ECMWF",
        Tu = "GEOS-5 / GMAO / NASA",
        ku = "GEOS-5 / GMAO / NASA" + xu,
        Eu = "GFS / NCEP / US National Weather Service",
        Su = "SOM-FFN / Landschützer et al. / MPI-M",
        ju = "WAVEWATCH III / NCEP / NWS",
        Au = function (t, n) {
            var e, r, i, o, a = d("beforesend", "progress", "load", "error"),
                u = nu(),
                c = new XMLHttpRequest,
                l = null,
                s = null,
                f = 0;

            function h(t) {
                var n, r = c.status;
                if (!r && function (t) {
                        var n = t.responseType;
                        return n && "text" !== n ? t.response : t.responseText
                    }(c) || r >= 200 && r < 300 || 304 === r) {
                    if (i) try {
                        n = i.call(e, c)
                    } catch (t) {
                        return void a.call("error", e, t)
                    } else n = c;
                    a.call("load", e, n)
                } else a.call("error", e, t)
            }
            if ("undefined" != typeof XDomainRequest && !("withCredentials" in c) && /^(http(s)?:)?\/\//.test(t) && (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = c.ontimeout = h : c.onreadystatechange = function (t) {
                    c.readyState > 3 && h(t)
                }, c.onprogress = function (t) {
                    a.call("progress", e, t)
                }, e = {
                    header: function (t, n) {
                        return t = (t + "").toLowerCase(), arguments.length < 2 ? u.get(t) : (null == n ? u.remove(t) : u.set(t, n + ""), e)
                    },
                    mimeType: function (t) {
                        return arguments.length ? (r = null == t ? null : t + "", e) : r
                    },
                    responseType: function (t) {
                        return arguments.length ? (o = t, e) : o
                    },
                    timeout: function (t) {
                        return arguments.length ? (f = +t, e) : f
                    },
                    user: function (t) {
                        return arguments.length < 1 ? l : (l = null == t ? null : t + "", e)
                    },
                    password: function (t) {
                        return arguments.length < 1 ? s : (s = null == t ? null : t + "", e)
                    },
                    response: function (t) {
                        return i = t, e
                    },
                    get: function (t, n) {
                        return e.send("GET", t, n)
                    },
                    post: function (t, n) {
                        return e.send("POST", t, n)
                    },
                    send: function (n, i, h) {
                        return c.open(n, t, !0, l, s), null == r || u.has("accept") || u.set("accept", r + ",*/*"), c.setRequestHeader && u.each((function (t, n) {
                            c.setRequestHeader(n, t)
                        })), null != r && c.overrideMimeType && c.overrideMimeType(r), null != o && (c.responseType = o), f > 0 && (c.timeout = f), null == h && "function" == typeof i && (h = i, i = null), null != h && 1 === h.length && (h = function (t) {
                            return function (n, e) {
                                t(null == n ? e : null)
                            }
                        }(h)), null != h && e.on("error", h).on("load", (function (t) {
                            h(null, t)
                        })), a.call("beforesend", e, c), c.send(null == i ? null : i), e
                    },
                    abort: function () {
                        return c.abort(), e
                    },
                    on: function () {
                        var t = a.on.apply(a, arguments);
                        return t === a ? e : t
                    }
                }, null != n) {
                if ("function" != typeof n) throw new Error("invalid callback: " + n);
                return e.get(n)
            }
            return e
        };
    var Ou, Nu, Pu = (Ou = "application/json", Nu = function (t) {
        return JSON.parse(t.responseText)
    }, function (t, n) {
        var e = Au(t).mimeType(Ou).response(Nu);
        if (null != n) {
            if ("function" != typeof n) throw new Error("invalid callback: " + n);
            return e.get(n)
        }
        return e
    });

    function Ru(t, n, e, r, i) {
        var o = (r || {}).target;
        return o ? o.status ? e({
            status: o.status,
            message: o.statusText,
            resource: t,
            error: r
        }) : e({
            status: -1,
            message: "Cannot load ".concat(t, ": ").concat(r),
            resource: t,
            error: r
        }) : n(i)
    }

    function zu(t) {
        return new Promise((function (n, e) {
            Pu(t, (function (r, i) {
                return Ru(t, n, e, r, i)
            }))
        }))
    }
    var Fu = a.memoize(zu);

    function Cu(t) {
        return new Promise((function (n, e) {
            Au(t).responseType("arraybuffer").response((function (t) {
                return function (t, n) {
                    var e = !!(n || {}).headerOnly,
                        r = 0,
                        i = new DataView(t),
                        o = gu(new Uint8Array(t, r, 4));
                    if (r += 4, "head" !== o) throw new Error("expected 'head' but found '" + o + "'");
                    var a = i.getInt32(r);
                    r += 4;
                    var u, c = JSON.parse(gu(new Uint8Array(t, r, a)));
                    r += a;
                    for (var l, s = [], f = [];
                        "tail" !== (l = gu(new Uint8Array(t, r, 4))) && !e;) {
                        switch (r += 4, a = i.getInt32(r), r += 4, l) {
                            case "ppak":
                            case "ppk2":
                                u = wu(l, t, r, a);
                                break;
                            default:
                                throw new Error("unknown block type: " + l)
                        }
                        s.push(u.values), f.push(u.metadata), r += a
                    }
                    return {
                        header: c,
                        blocks: s,
                        metadata: f
                    }
                }(t.response)
            })).get((function (r, i) {
                return Ru(t, n, e, r, i)
            }))
        }))
    }

    function Lu(t) {
        return /\.epak([/?#]|$)/.test(t) ? Cu(t) : zu(t)
    }

    function Iu(t, n) {
        return Promise.all(t.map((function (t) {
            return function (t, n) {
                var e = t.product,
                    r = t.paths;
                return n.requested ? Promise.resolve([null]) : Promise.all(r.map(Lu)).then((function (t) {
                    return n.requested ? null : Object.assign(e, e.builder.apply(e, t))
                }))
            }(t, n)
        })))
    }

    function Du(t) {
        var n = (Object(Fr.n)() ? "" : "https://gaia.nullschool.net") + t,
            e = Object(Fr.A)();
        return e ? n + "?" + e : n
    }

    function qu(t) {
        return Du("/data/oscar/" + t)
    }

    function Uu(t) {
        return Du("/data/tara/" + t)
    }
    var Hu = Cr.b({
        year: 2019,
        month: 9,
        day: 1
    });

    function Gu(t) {
        return "current" === t || Cr.b(t) > Hu ? {
            hour: 1
        } : {
            hour: 3
        }
    }

    function Xu(t, n, e) {
        var r = 60 * n.hour * 60 * 1e3,
            i = "current" === t ? lu() : Cr.b(t);
        i = Math.floor(i / r) * r;
        var o = Cr.f(i);
        return e && (o = Cr.d(Cr.a(o, e))), o
    }

    function Wu(t, n, e, r) {
        var i = function (t, n, e) {
                if ("current" === t.date) return {
                    dir: "current",
                    stamp: "current",
                    date: Xu(t.date, n, e)
                };
                var r = Xu(t.date, n, e);
                return {
                    dir: Cr.g(r, "{yyyy}/{MM}/{dd}"),
                    stamp: Cr.g(r, "{hh}{mm}"),
                    date: r
                }
            }(t, e, r),
            o = [i.stamp, n, "geos.epak"].join("-");
        return Du("/data/geos/" + (i.dir + "/" + o))
    }

    function Bu(t, n, e) {
        var r = (n > 1 ? 8 : n < -1 ? -8 : n) * e.hour;
        return Cr.a(t, {
            hour: r
        })
    }

    function Vu(t, n) {
        var e = "current" === t.date ? "201712" : Cr.g(t.date, "{yyyy}{MM}");
        return Du("/data/somffn/" + "".concat(e, "-").concat(n, ".epak"))
    }

    function $u(t) {
        return "current" === t ? {
            year: 2017,
            month: 12,
            day: 1
        } : a.clone(t)
    }

    function Yu(t, n) {
        var e = n > 1 ? 12 : n < -1 ? -12 : n;
        return Cr.a(t, {
            month: e
        })
    }

    function Ku(t, n) {
        var e = "sea_surface_temp",
            r = "sea_surface_temp_anomaly";
        return n === e ? t.hd ? {
            tag: e,
            res: "0.1",
            selector: /analysed_sst/
        } : {
            tag: e,
            res: "0.5",
            selector: /analysed_sst/
        } : n === r ? t.hd ? {
            tag: r,
            res: "0.25",
            selector: /sst_anomaly/
        } : {
            tag: r,
            res: "0.5",
            selector: /sst_anomaly/
        } : void 0
    }

    function Ju(t, n) {
        var e = Ku(t, n),
            r = "current" === t.date,
            i = r ? "current" : Cr.g(t.date, "{yyyy}/{MM}"),
            o = r ? "current" : Cr.g(t.date, "{yyyy}{MM}{dd}"),
            a = "".concat(o, "-").concat(e.tag, "-ostia-").concat(e.res, ".epak");
        return Du("/data/ostia/" + "".concat(i, "/").concat(a))
    }
    var Zu = {
        sea_surface_temp: {
            selector: /Temperature_surface_sparse/
        },
        sea_surface_temp_anomaly: {
            selector: /Temperature_surface_anomaly_sparse/
        }
    };

    function Qu(t, n) {
        var e = "current" === t.date,
            r = e ? "current" : Cr.g(t.date, "{yyyy}/{MM}"),
            i = e ? "current" : Cr.g(t.date, "{yyyy}{MM}{dd}"),
            o = "".concat(i, "-").concat(n, "-rtg-0.5.epak");
        return Du("/data/rtgsst/" + "".concat(r, "/").concat(o))
    }
    var tc = Cr.b({
        year: 2019,
        month: 12,
        day: 15
    });

    function nc(t) {
        return "current" === t || Cr.b(t) >= tc
    }

    function ec(t) {
        return nc(t) ? function (t) {
            var n;
            if ("current" === t) {
                var e = a.pick(Cr.f(lu()), "year", "month", "day");
                n = Cr.a(e, {
                    day: -1
                })
            } else n = a.clone(t);
            return n
        }(t) : function (t) {
            var n;
            if ("current" === t) {
                var e = a.pick(Cr.f(lu()), "year", "month", "day");
                n = Cr.a(e, {
                    day: -1
                })
            } else n = a.clone(t);
            return n
        }(t)
    }

    function rc(t, n) {
        return nc(t) ? function (t, n) {
            var e = n > 1 ? 5 : n < -1 ? -5 : n;
            return Cr.a(t, {
                day: e
            })
        }(t, n) : function (t, n) {
            var e = n > 1 ? 5 : n < -1 ? -5 : n;
            return Cr.a(t, {
                day: e
            })
        }(t, n)
    }

    function ic(t, n) {
        return nc(t.date) ? Ju(t, n) : Qu(t, n)
    }

    function oc(t, n, e) {
        return nc(t.date) ? function (t, n, e) {
            var r = Ku(t, e);
            return yu(n, r.selector, "OSTIA / UK Met Office + GHRSST + CMEMS")
        }(t, n, e) : function (t, n) {
            return yu(t, Zu[n].selector, "RTG-SST / NCEP / US National Weather Service")
        }(n, e)
    }
    var ac = function (t) {
            Array.isArray(t) && (t = su(t, ["u", "v"], ["time", "level", "lat", "lon"]));
            var n = t,
                e = n.header.variables,
                r = e.U || e.u || e["u-component_of_wind_isobaric"] || e["u-component_of_wind_height_above_ground"],
                i = e.V || e.v || e["v-component_of_wind_isobaric"] || e["v-component_of_wind_height_above_ground"],
                o = e[r.dimensions[0]],
                a = e[r.dimensions[2]],
                u = e[r.dimensions[3]],
                c = Fr.w(n.blocks[r.data.block], n.blocks[i.data.block]),
                l = fu(u.sequence, a.sequence),
                s = mu(l, c);
            return {
                sourceHTML: Eu,
                date: function () {
                    return Cr.f(o.data[0])
                },
                grid: function () {
                    return l
                },
                field: function () {
                    return {
                        type: "vector",
                        valueAt: function (t) {
                            var n = 2 * t,
                                e = c[n],
                                r = c[n + 1];
                            return [e, r, Math.sqrt(e * e + r * r)]
                        },
                        nearest: pu(l, c),
                        bilinear: mu(l, c)
                    }
                },
                interpolate: function (t, n) {
                    return s(t, n)
                }
            }
        },
        uc = Math.PI / 180,
        cc = 180 / Math.PI;

    function lc(t) {
        if (t instanceof fc) return new fc(t.l, t.a, t.b, t.opacity);
        if (t instanceof gc) return bc(t);
        t instanceof Ct || (t = zt(t));
        var n, e, r = vc(t.r),
            i = vc(t.g),
            o = vc(t.b),
            a = hc((.2225045 * r + .7168786 * i + .0606169 * o) / 1);
        return r === i && i === o ? n = e = a : (n = hc((.4360747 * r + .3850649 * i + .1430804 * o) / .96422), e = hc((.0139322 * r + .0971045 * i + .7141733 * o) / .82521)), new fc(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity)
    }

    function sc(t, n, e, r) {
        return 1 === arguments.length ? lc(t) : new fc(t, n, e, null == r ? 1 : r)
    }

    function fc(t, n, e, r) {
        this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
    }

    function hc(t) {
        return t > 6 / 29 * (6 / 29) * (6 / 29) ? Math.pow(t, 1 / 3) : t / (6 / 29 * 3 * (6 / 29)) + 4 / 29
    }

    function dc(t) {
        return t > 6 / 29 ? t * t * t : 6 / 29 * 3 * (6 / 29) * (t - 4 / 29)
    }

    function pc(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function vc(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function mc(t) {
        if (t instanceof gc) return new gc(t.h, t.c, t.l, t.opacity);
        if (t instanceof fc || (t = lc(t)), 0 === t.a && 0 === t.b) return new gc(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * cc;
        return new gc(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }

    function yc(t, n, e, r) {
        return 1 === arguments.length ? mc(t) : new gc(t, n, e, null == r ? 1 : r)
    }

    function gc(t, n, e, r) {
        this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
    }

    function bc(t) {
        if (isNaN(t.h)) return new fc(t.l, 0, 0, t.opacity);
        var n = t.h * uc;
        return new fc(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
    }

    function wc(t) {
        return function (n, e) {
            var r = t((n = yc(n)).h, (e = yc(e)).h),
                i = Jt(n.c, e.c),
                o = Jt(n.l, e.l),
                a = Jt(n.opacity, e.opacity);
            return function (t) {
                return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + ""
            }
        }
    }
    vt(fc, sc, mt(yt, {
        brighter: function (t) {
            return new fc(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function (t) {
            return new fc(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function () {
            var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
            return new Ct(pc(3.1338561 * (n = .96422 * dc(n)) - 1.6168667 * (t = 1 * dc(t)) - .4906146 * (e = .82521 * dc(e))), pc(-.9787684 * n + 1.9161415 * t + .033454 * e), pc(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
        }
    })), vt(gc, yc, mt(yt, {
        brighter: function (t) {
            return new gc(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        },
        darker: function (t) {
            return new gc(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        },
        rgb: function () {
            return bc(this).rgb()
        }
    }));
    var _c = wc(Yt);
    wc(Jt);

    function xc(t) {
        return function (n, e) {
            var r = t((n = Ht(n)).h, (e = Ht(e)).h),
                i = Jt(n.s, e.s),
                o = Jt(n.l, e.l),
                a = Jt(n.opacity, e.opacity);
            return function (t) {
                return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + ""
            }
        }
    }
    var Mc = xc(Yt),
        Tc = (xc(Jt), -.90649),
        kc = 1.97294 * Tc,
        Ec = 3.5172982438,
        Sc = -.6557636667999999;

    function jc(t) {
        if (t instanceof Oc) return new Oc(t.h, t.s, t.l, t.opacity);
        t instanceof Ct || (t = zt(t));
        var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = (Sc * r + kc * n - Ec * e) / (Sc + kc - Ec),
            o = r - i,
            a = (1.97294 * (e - i) - -.29227 * o) / Tc,
            u = Math.sqrt(a * a + o * o) / (1.97294 * i * (1 - i)),
            c = u ? Math.atan2(a, o) * cc - 120 : NaN;
        return new Oc(c < 0 ? c + 360 : c, u, i, t.opacity)
    }

    function Ac(t, n, e, r) {
        return 1 === arguments.length ? jc(t) : new Oc(t, n, e, null == r ? 1 : r)
    }

    function Oc(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Nc(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Ac(n)).h, (r = Ac(r)).h),
                    o = Jt(n.s, r.s),
                    a = Jt(n.l, r.l),
                    u = Jt(n.opacity, r.opacity);
                return function (t) {
                    return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + ""
                }
            }
            return e = +e, r.gamma = n, r
        }(1)
    }
    vt(Oc, Ac, mt(yt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Oc(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Oc(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * uc,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t),
                i = Math.sin(t);
            return new Ct(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (-.29227 * r + Tc * i)), 255 * (n + e * (1.97294 * r)), this.opacity)
        }
    }));
    Nc(Yt);
    var Pc = Nc(Jt)(Ac(300, .5, 0), Ac(-240, .5, 1)),
        Rc = "\nfloat fmap(in float v) {\n    return log(v);\n}\n",
        zc = "\nuniform vec2 u_Range;  // [min, size]\nuniform lowp sampler2D u_Palette;\nuniform lowp float u_Alpha;\n\nlowp vec4 colorize(in float v) {\n    vec2 st = vec2((fmap(v) - u_Range.x) / u_Range.y, 0.5);\n    lowp vec4 color = texture2D(u_Palette, st);\n    lowp float alpha = (1.0 - step(7e37, v)) * u_Alpha;\n    return vec4(color.rgb * alpha, alpha);  // premultiply alpha\n}\n";

    function Fc(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function Cc(t, n) {
        for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Lc(t, n, e) {
        return n && Cc(t.prototype, n), e && Cc(t, e), t
    }

    function Ic(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                return e
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Dc(t, n) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, n) {
            if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
            var e = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return e
        }(t, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function qc(t) {
        if (Array.isArray(t)) {
            var n = Dc(t, 4);
            return Ft(n[0], n[1], n[2], n[3])
        }
        return Nt(t)
    }

    function Uc(t, n) {
        var e = Dc(t, 3),
            r = e[0],
            i = e[1],
            a = e[2],
            u = n[0] - r,
            c = n[1] - i,
            l = n[2] - a;
        return function (t) {
            return [Math.floor(r + t * u), Math.floor(i + t * c), Math.floor(a + t * l)].map((function (t) {
                return Object(o.a)(t, 0, 255)
            }))
        }
    }

    function Hc(t, n, e) {
        switch (t) {
            case "rgb":
                return Zt(n, e);
            case "lab":
                return function (t, n) {
                    var e = Jt((t = sc(t)).l, (n = sc(n)).l),
                        r = Jt(t.a, n.a),
                        i = Jt(t.b, n.b),
                        o = Jt(t.opacity, n.opacity);
                    return function (n) {
                        return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
                    }
                }(n, e);
            case "hcl":
                return _c(n, e);
            case "hsl":
                return Mc(n, e);
            default:
                throw new Error("unsupported color space: ".concat(t))
        }
    }

    function Gc(t, n) {
        var e = Hc(t.mode, qc(t.color), qc(n.color));
        return e.domain = function () {
            return [t.p, n.p]
        }, e.mode = function () {
            return t.mode
        }, e
    }

    function Xc(t) {
        var n = function (t) {
            return Pc(t)
        };
        return n.domain = function () {
            return t
        }, n.mode = function () {
            return "cubehelix"
        }, n
    }

    function Wc(t) {
        var n = t * i.e * 5 / 6;
        n *= .75;
        var e = Math.sin(n),
            r = Math.cos(n);
        return [Math.floor(255 * Math.max(0, -r)), Math.floor(255 * Math.max(e, 0)), Math.floor(255 * Math.max(r, 0, -e))]
    }
    var Bc = Uc(Wc(1), [255, 255, 255]);

    function Vc(t) {
        return t <= .45 ? Wc(t / .45) : Bc((t - .45) / .55)
    }

    function $c(t) {
        for (var n = [], e = 0; e < t.length - 1; e++) n.push(Gc(t[e], t[e + 1]));
        return n
    }

    function Yc(t, n, e) {
        var r = t[n],
            i = t[n + 1],
            a = o.f.apply(void 0, [e[0]].concat(Ic(r.domain()))),
            u = o.f.apply(void 0, [e[1]].concat(Ic(i.domain()))),
            c = Gc({
                color: Nt(r(0)),
                mode: r.mode(),
                p: r.domain()[0]
            }, {
                color: Nt(r(a)),
                mode: r.mode(),
                p: e[0]
            }),
            l = function (t, n) {
                for (var e = [], r = [], i = [], o = 0; o < t.length; o++) {
                    var a = sc(t[o]);
                    e[o] = a.l, r[o] = a.a, i[o] = a.b
                }
                var u = Bt(e),
                    c = Bt(r),
                    l = Bt(i),
                    s = function (t) {
                        return sc(u(t), c(t), l(t)) + ""
                    };
                return s.domain = function () {
                    return n
                }, s.mode = function () {
                    return "lab"
                }, s
            }([r(a), r(1), i(u)], e),
            s = Gc({
                color: Nt(i(u)),
                mode: i.mode(),
                p: e[1]
            }, {
                color: Nt(i(1)),
                mode: i.mode(),
                p: i.domain()[1]
            });
        return [].concat(t.slice(0, n), [c, l, s], t.slice(n + 2))
    }

    function Kc(t, n, e, r) {
        for (var i = Dc(n, 2), a = i[0], u = i[1], c = Dc(e, 2), l = c[0], s = c[1], f = Math.floor(t.length / 4), h = (u - a) / (f - 1), d = Object(o.g)((l - a) / h), p = Math.max(d, 0); p < f; p++) {
            var v = l + (p - d) * h;
            if (v > s) break;
            var m = r(v),
                y = 4 * p;
            t[y] = m[0], t[y + 1] = m[1], t[y + 2] = m[2], t[y + 3] = m.length > 3 ? Object(o.a)(Object(o.i)(m[3], 0, 255), 0, 255) : 255
        }
    }

    function Jc(t, n, e) {
        var r = new Uint8Array(4 * e);
        return n.forEach((function (n) {
            var e = n.domain();
            Kc(r, t, e, (function (t) {
                var r = Nt(n(o.f.apply(void 0, [t].concat(Ic(e)))));
                return [r.r, r.g, r.b, r.opacity]
            }))
        })), r
    }

    function Zc(t, n, e) {
        return tl(t, Jc(t, n, e))
    }

    function Qc(t, n, e) {
        var r = function (t) {
                for (var n = [], e = [], r = [], i = 0; i < t.length - 1; i++) n.push(t[i + 1][0]), e.push(Uc(t[i][1], t[i + 1][1])), r.push([t[i][0], t[i + 1][0]]);
                return function (t) {
                    var i;
                    for (i = 0; i < n.length - 1 && !(t <= n[i]); i++);
                    var a = o.f.apply(void 0, [t].concat(Ic(r[i])));
                    return e[i](a)
                }
            }(n),
            i = new Uint8Array(4 * e);
        return Kc(i, t, t, r), tl(t, i)
    }

    function tl(t, n) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (t) {
                return t
            },
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function (t) {
                return t
            },
            i = e(t[0]),
            a = e(t[1]),
            u = n.length / 4 - 1,
            c = u / (a - i),
            l = Fr.a(n, 1e3),
            s = (a - i) / (2 * u),
            f = i - s,
            h = a + s,
            d = [f, h - f];
        return new(function () {
            function a() {
                Fc(this, a)
            }
            return Lc(a, [{
                key: "indexOf",
                value: function (t) {
                    var n = Math.round((e(t) - i) * c);
                    return Object(o.a)(n, 0, u)
                }
            }, {
                key: "valueFor",
                value: function (t) {
                    return r(t / c + i)
                }
            }, {
                key: "rgba",
                value: function (t) {
                    var e = 4 * this.indexOf(t);
                    return [n[e], n[e + 1], n[e + 2], n[e + 3]]
                }
            }, {
                key: "webgl",
                value: function (t) {
                    var r = t.context;
                    return {
                        shaderSource: function () {
                            return [e === Math.log ? Rc : "\nfloat fmap(in float v) {\n    return v;\n}\n", zc]
                        },
                        textures: function () {
                            return {
                                color_scale: {
                                    format: r.RGBA,
                                    type: r.UNSIGNED_BYTE,
                                    width: n.length / 4,
                                    height: 1,
                                    data: n,
                                    hash: l
                                }
                            }
                        },
                        uniforms: function () {
                            return {
                                u_Range: d,
                                u_Palette: "color_scale",
                                u_Alpha: 1
                            }
                        }
                    }
                }
            }, {
                key: "colors",
                get: function () {
                    return n
                }
            }, {
                key: "bounds",
                get: function () {
                    return t
                }
            }]), a
        }())
    }
    var nl = function (t) {
            for (var n = new Uint8Array(t.length / 3 * 4), e = 0, r = 0; e < t.length; e += 3, r += 4) n[r] = t[e], n[r + 1] = t[e + 1], n[r + 2] = t[e + 2], n[r + 3] = 255;
            return n
        }([4, 4, 4, 10, 3, 8, 13, 4, 11, 16, 5, 14, 18, 5, 16, 21, 6, 18, 22, 7, 19, 24, 8, 21, 26, 8, 22, 27, 9, 24, 28, 10, 25, 30, 11, 26, 31, 12, 27, 32, 12, 28, 33, 13, 29, 35, 14, 31, 36, 14, 32, 37, 15, 32, 38, 15, 33, 39, 16, 34, 40, 17, 35, 41, 17, 36, 42, 18, 38, 43, 19, 38, 44, 19, 39, 46, 20, 41, 46, 20, 45, 46, 21, 50, 45, 21, 55, 45, 21, 60, 45, 22, 64, 45, 23, 67, 45, 23, 71, 45, 24, 75, 45, 24, 77, 45, 25, 81, 45, 25, 84, 44, 26, 87, 44, 27, 90, 45, 27, 92, 45, 28, 95, 44, 29, 98, 44, 29, 100, 44, 30, 103, 44, 31, 106, 44, 31, 109, 44, 32, 110, 44, 33, 113, 44, 34, 116, 43, 34, 118, 42, 35, 121, 40, 38, 120, 38, 40, 119, 36, 42, 120, 34, 44, 120, 33, 46, 120, 32, 47, 120, 31, 49, 121, 30, 50, 122, 30, 51, 123, 29, 52, 123, 29, 53, 125, 28, 55, 125, 28, 56, 126, 27, 57, 127, 28, 58, 128, 28, 59, 129, 27, 60, 129, 27, 61, 131, 27, 62, 132, 27, 63, 133, 28, 64, 134, 27, 65, 135, 27, 66, 136, 27, 68, 137, 27, 69, 138, 25, 71, 136, 22, 73, 134, 21, 74, 133, 20, 76, 131, 17, 78, 129, 16, 79, 128, 15, 81, 126, 14, 82, 125, 10, 84, 123, 10, 85, 122, 9, 87, 120, 8, 88, 119, 7, 89, 118, 6, 91, 117, 4, 92, 115, 4, 94, 114, 4, 95, 114, 3, 96, 112, 1, 98, 111, 1, 99, 110, 0, 100, 109, 0, 101, 108, 0, 103, 107, 0, 104, 106, 0, 105, 105, 0, 107, 104, 0, 108, 101, 0, 110, 100, 0, 111, 99, 0, 112, 98, 0, 114, 96, 0, 115, 95, 0, 116, 93, 0, 118, 92, 0, 119, 90, 0, 120, 89, 0, 121, 88, 0, 123, 86, 0, 124, 85, 0, 125, 83, 0, 127, 82, 0, 128, 80, 0, 129, 79, 0, 131, 77, 0, 132, 75, 0, 133, 73, 0, 134, 72, 0, 136, 70, 0, 137, 68, 0, 138, 66, 0, 139, 65, 0, 141, 64, 0, 142, 63, 0, 143, 61, 0, 145, 60, 0, 146, 60, 0, 147, 58, 0, 149, 57, 0, 150, 56, 0, 151, 55, 0, 153, 53, 0, 154, 52, 0, 155, 51, 0, 157, 50, 0, 158, 48, 0, 159, 47, 0, 160, 45, 0, 162, 44, 0, 163, 42, 0, 164, 41, 0, 165, 39, 0, 167, 36, 0, 168, 34, 0, 169, 31, 0, 170, 23, 0, 169, 8, 9, 170, 0, 20, 171, 0, 29, 172, 0, 35, 173, 0, 40, 174, 0, 45, 175, 0, 48, 176, 0, 52, 177, 0, 55, 178, 0, 59, 179, 0, 61, 180, 0, 64, 181, 0, 66, 182, 0, 68, 183, 0, 71, 184, 0, 73, 185, 0, 76, 186, 0, 78, 187, 0, 79, 188, 0, 81, 189, 0, 83, 190, 0, 85, 191, 0, 87, 192, 0, 92, 193, 0, 99, 193, 0, 106, 193, 0, 114, 193, 0, 119, 194, 0, 125, 194, 0, 130, 194, 0, 135, 195, 0, 140, 195, 0, 145, 195, 0, 149, 196, 0, 153, 196, 0, 157, 197, 0, 161, 197, 0, 165, 197, 0, 169, 198, 0, 172, 198, 0, 176, 199, 0, 180, 199, 0, 184, 199, 0, 186, 200, 0, 190, 201, 0, 193, 201, 0, 197, 201, 0, 200, 202, 0, 201, 201, 24, 203, 202, 51, 206, 202, 65, 207, 203, 77, 209, 203, 87, 212, 203, 95, 213, 204, 103, 215, 205, 109, 218, 205, 116, 219, 206, 121, 221, 207, 127, 223, 207, 132, 226, 207, 138, 227, 208, 143, 229, 209, 147, 231, 209, 151, 232, 210, 155, 235, 211, 159, 237, 211, 164, 238, 212, 168, 240, 212, 172, 243, 213, 175, 243, 214, 179, 245, 214, 183, 248, 215, 186, 248, 216, 189, 248, 218, 193, 247, 219, 195, 247, 220, 198, 247, 222, 201, 248, 223, 204, 247, 224, 206, 247, 226, 209, 247, 227, 211, 247, 229, 214, 247, 230, 216, 247, 231, 218, 247, 232, 220, 248, 234, 224, 247, 235, 225, 247, 236, 229, 247, 238, 231, 247, 239, 232, 248, 240, 235, 248, 242, 237, 247, 243, 239, 248, 244, 241, 248, 246, 244, 248, 247, 246, 248, 248, 248, 249, 249, 249, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 255, 255, 255]),
        el = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                n = [0, 1.5],
                e = [
                    [0, [0, 0, 0]],
                    [1.5, [255, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        rl = (a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [270 - 273.15, 31.5],
                e = [
                    [270 - 273.15, [255, 255, 255]],
                    [271.25 - 273.15, [255, 255, 255]],
                    [271.3 - 273.15, [15, 4, 168]],
                    [0, [15, 54, 208]],
                    [273.25 - 273.15, [15, 54, 188]],
                    [2.5, [15, 4, 168]],
                    [8.5, [24, 132, 14]],
                    [18, [247, 251, 59]],
                    [295 - 273.15, [235, 167, 0]],
                    [26.5, [245, 0, 39]],
                    [303 - 273.15, [87, 17, 0]],
                    [31.5, [238, 0, 242]]
                ];
            return Qc(n, e, t)
        })), a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [-10, 10],
                e = [
                    [-10, [0, 75, 30]],
                    [-6, [0, 150, 0]],
                    [-.5, [161, 217, 155]],
                    [0, [255, 255, 255]],
                    [.5, [255, 175, 100]],
                    [6, [255, 111, 0]],
                    [10, [166, 50, 0]]
                ];
            return Qc(n, e, t)
        })), a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [34, 36],
                e = [
                    [34, [0, 155, 210]],
                    [34.3, [2, 169, 210]],
                    [34.7, [150, 200, 220]],
                    [34.94, [200, 215, 220]],
                    [35, [230, 220, 200]],
                    [35.5, [235, 205, 140]],
                    [36, [240, 190, 70]]
                ];
            return Qc(n, e, t)
        })), a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [-.8, .8],
                e = [
                    [-.8, [7, 62, 94]],
                    [-.3, [27, 88, 121]],
                    [-.2, [47, 113, 148]],
                    [-.05, [74, 138, 175]],
                    [-.025, [101, 163, 201]],
                    [.025, [249, 163, 120]],
                    [.05, [222, 135, 100]],
                    [.2, [194, 106, 80]],
                    [.3, [166, 77, 40]],
                    [.8, [138, 48, 0]]
                ];
            return Qc(n, e, t)
        })), a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 100],
                e = [{
                    color: [0, 0, 0],
                    mode: "lab",
                    p: n[0]
                }, {
                    color: [4, 8, 34],
                    mode: "lab",
                    p: 5
                }, {
                    color: [78, 255, 103],
                    mode: "lab",
                    p: 40
                }, {
                    color: [252, 255, 57],
                    mode: "lab",
                    p: 60
                }, {
                    color: [219, 75, 255],
                    mode: "lab",
                    p: n[1]
                }],
                r = $c(e);
            return r = Yc(r, 1, [35, 45]), Zc(n, r = Yc(r, 3, [55, 65]), t)
        }))),
        il = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 5e3],
                e = [
                    [0, [5, 48, 97]],
                    [500, [33, 102, 172]],
                    [1e3, [67, 147, 195]],
                    [1500, [146, 197, 222]],
                    [2e3, [209, 229, 240]],
                    [2500, [247, 247, 247]],
                    [3e3, [253, 219, 199]],
                    [3500, [244, 165, 130]],
                    [4e3, [214, 96, 77]],
                    [4500, [178, 24, 43]],
                    [5e3, [103, 0, 31]]
                ];
            return Qc(n, e, t)
        })),
        ol = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [3578e-7, 377e-6],
                e = [{
                    color: [0, 0, 0],
                    mode: "hcl",
                    p: n[0]
                }, {
                    color: [100, 0, 0],
                    mode: "hcl",
                    p: 365e-6
                }, {
                    color: [164, 36, 0],
                    mode: "hcl",
                    p: 3675e-7
                }, {
                    color: [255, 220, 140],
                    mode: "hcl",
                    p: 371e-6
                }, {
                    color: [255, 255, 255],
                    mode: "hcl",
                    p: n[1]
                }],
                r = $c(e);
            return Zc(n, r = Yc(r, 2, [37e-5, 372e-6]), t)
        })),
        al = a.memoize((function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                e = [360 + t, 470 + t],
                r = [{
                    color: [0, 0, 0],
                    mode: "hcl",
                    p: e[0]
                }, {
                    color: [100, 0, 0],
                    mode: "hcl",
                    p: 400 + t
                }, {
                    color: [164, 36, 0],
                    mode: "hcl",
                    p: 405 + t
                }, {
                    color: [255, 220, 140],
                    mode: "hcl",
                    p: 420 + t
                }, {
                    color: [255, 255, 255],
                    mode: "hcl",
                    p: 450 + t
                }, {
                    color: [0, 210, 255],
                    mode: "hcl",
                    p: e[1]
                }],
                i = r[3].p,
                o = r[4].p,
                a = r[1].p,
                u = $c(r);
            return u = Yc(u, 0, [a - 2, a + 2]), u = Yc(u, 3, [i - 2, i + 2]), Zc(e, u = Yc(u, 5, [o - 2, o + 2]), n)
        })),
        ul = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [380, 510],
                e = [{
                    color: [0, 0, 0],
                    mode: "hcl",
                    p: n[0]
                }, {
                    color: [100, 0, 0],
                    mode: "hcl",
                    p: 412
                }, {
                    color: [164, 36, 0],
                    mode: "hcl",
                    p: 418
                }, {
                    color: [255, 220, 140],
                    mode: "hcl",
                    p: 438
                }, {
                    color: [0, 220, 180],
                    mode: "hcl",
                    p: 485
                }, {
                    color: [0, 255, 255],
                    mode: "hcl",
                    p: n[1]
                }],
                r = e[3].p,
                i = e[4].p,
                o = e[1].p,
                a = $c(e);
            return a = Yc(a, 0, [o - 3, o + 2]), a = Yc(a, 3, [r - 3, r + 3]), Zc(n, a = Yc(a, 5, [i - 3, i + 3]), t)
        })),
        cl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3,
                n = [40, 2500],
                e = [{
                    color: [0, 38, 40],
                    mode: "lab",
                    p: n[0]
                }, {
                    color: [255, 255, 224],
                    mode: "hcl",
                    p: 400
                }, {
                    color: [0, 0, 154],
                    mode: "lab",
                    p: 1800
                }, {
                    color: [0, 0, 0],
                    mode: "lab",
                    p: n[1]
                }],
                r = $c(e);
            return r = Yc(r, 0, [340, 460]), Zc(n, r = Yc(r, 2, [1500, 2100]), t)
        })),
        ll = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 1.5],
                e = [
                    [0, [10, 25, 68]],
                    [.15, [10, 25, 250]],
                    [.4, [24, 255, 93]],
                    [.65, [255, 233, 102]],
                    [1, [255, 233, 15]],
                    [1.5, [255, 15, 15]]
                ];
            return Qc(n, e, t)
        })),
        sl = a.memoize((function () {
            return tl([1e-4, 3], nl, Math.log, Math.exp)
        })),
        fl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [-10, 10],
                e = [{
                    color: [216, 218, 235],
                    mode: "lab",
                    p: -10
                }, {
                    color: [178, 171, 210],
                    mode: "lab",
                    p: -8
                }, {
                    color: [128, 115, 172],
                    mode: "lab",
                    p: -6
                }, {
                    color: [84, 39, 136],
                    mode: "lab",
                    p: -3.5
                }, {
                    color: [45, 0, 75],
                    mode: "lab",
                    p: -.75
                }, {
                    color: [18, 18, 18],
                    mode: "lab",
                    p: 0
                }, {
                    color: [127, 59, 8],
                    mode: "lab",
                    p: 2
                }, {
                    color: [179, 88, 6],
                    mode: "lab",
                    p: 4
                }, {
                    color: [224, 130, 20],
                    mode: "lab",
                    p: 6
                }, {
                    color: [253, 184, 99],
                    mode: "lab",
                    p: 8
                }, {
                    color: [254, 224, 182],
                    mode: "lab",
                    p: 10
                }],
                r = $c(e);
            return Zc(n, r, t)
        })),
        hl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 15],
                e = [
                    [0, [8, 29, 88]],
                    [1, [37, 52, 148]],
                    [2, [34, 94, 168]],
                    [3, [29, 145, 192]],
                    [4, [65, 182, 196]],
                    [5, [127, 205, 187]],
                    [6, [199, 233, 180]],
                    [7, [237, 248, 177]],
                    [8, [254, 204, 92]],
                    [10, [253, 141, 60]],
                    [12, [240, 59, 32]],
                    [14, [189, 0, 38]]
                ];
            return Qc(n, e, t)
        })),
        dl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [236, 332],
                e = [
                    [241, [255, 255, 255]],
                    [245.5, [6, 82, 255]],
                    [250, [6, 82, 255]],
                    [258, [46, 131, 255]],
                    [266, [46, 131, 255]],
                    [280, [0, 0, 0]],
                    [300, [0, 0, 0]],
                    [305, [247, 20, 35]],
                    [309.5, [247, 20, 35]],
                    [314, [245, 210, 5]],
                    [320.5, [245, 210, 5]],
                    [327, [255, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        pl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [92e3, 105e3],
                e = [
                    [92e3, [40, 0, 0]],
                    [95e3, [187, 60, 31]],
                    [96500, [137, 32, 30]],
                    [98e3, [16, 1, 43]],
                    [100500, [36, 1, 93]],
                    [101300, [241, 254, 18]],
                    [103e3, [228, 246, 223]],
                    [105e3, [255, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        vl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [1e-9, 1e-6],
                e = n.map(Math.log),
                r = [{
                    color: [8, 29, 88],
                    mode: "hcl",
                    p: e[0]
                }, {
                    color: [37, 52, 148],
                    mode: "hcl",
                    p: Math.log(4e-9)
                }, {
                    color: [34, 94, 168],
                    mode: "hcl",
                    p: Math.log(6e-9)
                }, {
                    color: [29, 145, 192],
                    mode: "hcl",
                    p: Math.log(8e-9)
                }, {
                    color: [65, 182, 196],
                    mode: "hcl",
                    p: Math.log(1e-8)
                }, {
                    color: [127, 205, 187],
                    mode: "hcl",
                    p: Math.log(16e-9)
                }, {
                    color: [199, 233, 180],
                    mode: "hcl",
                    p: Math.log(24e-9)
                }, {
                    color: [237, 248, 177],
                    mode: "hcl",
                    p: Math.log(28e-9)
                }, {
                    color: [255, 255, 210],
                    mode: "hcl",
                    p: Math.log(32e-9)
                }, {
                    color: [255, 237, 160],
                    mode: "hcl",
                    p: Math.log(42e-9)
                }, {
                    color: [254, 217, 118],
                    mode: "hcl",
                    p: Math.log(47e-9)
                }, {
                    color: [254, 178, 76],
                    mode: "hcl",
                    p: Math.log(57e-9)
                }, {
                    color: [253, 141, 60],
                    mode: "hcl",
                    p: Math.log(67e-9)
                }, {
                    color: [252, 78, 42],
                    mode: "hcl",
                    p: Math.log(11e-8)
                }, {
                    color: [227, 26, 28],
                    mode: "hcl",
                    p: Math.log(25e-8)
                }, {
                    color: [189, 0, 38],
                    mode: "hcl",
                    p: Math.log(5e-7)
                }, {
                    color: [128, 0, 38],
                    mode: "hcl",
                    p: e[1]
                }],
                i = $c(r),
                o = Jc(e, i = Yc(i, 7, [Math.log(3e-8), Math.log(35e-9)]), t);
            return tl(n, o, Math.log, Math.exp)
        })),
        ml = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3,
                n = [0, 150],
                e = [{
                    color: [37, 79, 92],
                    mode: "hcl",
                    p: n[0]
                }, {
                    color: "aliceblue",
                    mode: "hcl",
                    p: 2
                }, {
                    color: [51, 26, 155],
                    mode: "hcl",
                    p: 15
                }, {
                    color: "gold",
                    mode: "hcl",
                    p: 100
                }, {
                    color: "white",
                    mode: "hcl",
                    p: n[1]
                }],
                r = $c(e);
            return r = Yc(r, 0, [.6, 3.4]), Zc(n, r = Yc(r, 2, [12, 18]), t)
        })),
        yl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 25],
                e = [
                    [0, [0, 0, 0]],
                    [25, [21, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        gl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 100],
                e = [
                    [0, [230, 165, 30]],
                    [25, [120, 100, 95]],
                    [60, [40, 44, 92]],
                    [75, [21, 13, 193]],
                    [90, [75, 63, 235]],
                    [100, [25, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        bl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                n = [1e-13, 888e-9],
                e = n.map(Math.log),
                r = [{
                    color: [134, 134, 107],
                    mode: "hcl",
                    p: e[0]
                }, {
                    color: [144, 144, 117],
                    mode: "hcl",
                    p: Math.log(1e-12)
                }, {
                    color: [255, 255, 224],
                    mode: "hcl",
                    p: Math.log(7e-11)
                }, {
                    color: [0, 0, 128],
                    mode: "lab",
                    p: Math.log(19e-8)
                }, {
                    color: [23, 20, 18],
                    mode: "lab",
                    p: e[1]
                }],
                i = $c(r);
            i = Yc(i, 1, [Math.log(5e-11), Math.log(9e-11)]);
            var o = Jc(e, i = Yc(i, 3, [Math.log(8e-8), Math.log(4e-7)]), t);
            return tl(n, o, Math.log, Math.exp)
        })),
        wl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
                n = [200, 560],
                e = Xc(n),
                r = Jc(n, [e], t);
            return tl(n, r)
        })),
        _l = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [270, 304.65],
                e = [
                    [270, [255, 255, 255]],
                    [271.25, [255, 255, 255]],
                    [271.3, [15, 4, 168]],
                    [273.15, [15, 54, 208]],
                    [273.25, [15, 54, 188]],
                    [275.65, [15, 4, 168]],
                    [281.65, [24, 132, 14]],
                    [291.15, [247, 251, 59]],
                    [295, [235, 167, 0]],
                    [299.65, [245, 0, 39]],
                    [303, [87, 17, 0]],
                    [304.65, [238, 0, 242]]
                ];
            return Qc(n, e, t)
        })),
        xl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [-11, 11],
                e = [
                    [-11, [255, 255, 255]],
                    [-3, [7, 252, 254]],
                    [-1.5, [66, 42, 253]],
                    [-.75, [34, 55, 134]],
                    [0, [0, 0, 6]],
                    [.75, [134, 55, 34]],
                    [1.5, [253, 14, 16]],
                    [3, [254, 252, 0]],
                    [11, [255, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        Ml = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
                n = [.002, 2.5],
                e = n.map(Math.log),
                r = Xc(e),
                i = Jc(e, [r], t);
            return tl(n, i, Math.log, Math.exp)
        })),
        Tl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 1],
                e = [
                    [0, [5, 5, 89]],
                    [.2, [170, 170, 230]],
                    [1, [255, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        kl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3,
                n = [193, 328],
                e = [
                    [193, [37, 4, 42]],
                    [206, [41, 10, 130]],
                    [219, [81, 40, 40]],
                    [233.15, [192, 37, 149]],
                    [255.372, [70, 215, 215]],
                    [273.15, [21, 84, 187]],
                    [275.15, [24, 132, 14]],
                    [291, [247, 251, 59]],
                    [298, [235, 167, 21]],
                    [311, [230, 71, 39]],
                    [328, [88, 27, 67]]
                ];
            return Qc(n, e, t)
        })),
        El = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 70],
                e = [
                    [0, [230, 165, 30]],
                    [10, [120, 100, 95]],
                    [20, [40, 44, 92]],
                    [30, [21, 13, 193]],
                    [40, [75, 63, 235]],
                    [60, [25, 255, 255]],
                    [70, [150, 255, 255]]
                ];
            return Qc(n, e, t)
        })),
        Sl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                n = [0, 100],
                e = new Uint8Array(4 * t);
            return Kc(e, [0, 1], [0, 1], Vc), tl(n, e)
        })),
        jl = a.memoize((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4,
                n = [0, 8e4],
                e = [
                    [0, [15, 4, 96]],
                    [250, [30, 8, 180]],
                    [1e3, [121, 102, 2]],
                    [2e3, [118, 161, 66]],
                    [4e3, [50, 102, 219]],
                    [8e3, [19, 131, 193]],
                    [16e3, [59, 204, 227]],
                    [64e3, [241, 1, 45]],
                    [8e4, [243, 0, 241]]
                ];
            return Qc(n, e, t)
        })),
        Al = {};

    function Ol(t) {
        var n = t.type,
            e = t.key,
            r = t.ctrlKey,
            i = t.altKey,
            o = t.shiftKey,
            a = t.metaKey,
            u = +t.which;
        return function (t, n, e, r, i) {
            var o = [];
            return n && (o[0] = "Control"), e && t.length > 1 && (o[1] = "Alt"), r && (t.length > 1 || i && !e && !n) && (o[2] = "Shift"), i && (o[3] = "Meta"), "Control" !== t && "Alt" !== t && "Shift" !== t && "Meta" !== t && (o[4] = t), o.filter((function (t) {
                return void 0 !== t
            })).join("-")
        }(function (t, n, e, r) {
            if (n) {
                switch (n) {
                    case "Down":
                        return "ArrowDown";
                    case "Esc":
                        return "Escape";
                    case "Left":
                        return "ArrowLeft";
                    case "Right":
                        return "ArrowRight";
                    case "Up":
                        return "ArrowUp"
                }
                return n
            }
            switch (e) {
                case 27:
                    return "Escape";
                case 37:
                    return "ArrowLeft";
                case 38:
                    return "ArrowUp";
                case 39:
                    return "ArrowRight";
                case 40:
                    return "ArrowDown"
            }
            return "keypress" === t && r ? r : "NYI"
        }(n, e, u, String.fromCharCode(u)), r, i, o, a)
    }

    function Nl(t) {
        return function () {
            var n = v.c;
            n.defaultPrevented || n.isComposing || 229 === n.keyCode || t.call.apply(t, [this, Ol(n)].concat(Array.prototype.slice.call(arguments))) && n.preventDefault()
        }
    }! function () {
        var t = Fr.s() ? "" : "(<a href='about.html#aot' class='internal-link'>AOT</a>)";

        function n(t) {
            return Object.assign({
                descriptionHTML: "",
                paths: [],
                date: function () {
                    return null
                },
                dateFormat: function () {
                    return "{yyyy}-{MM}-{dd} {hh}:{mm}"
                },
                navigate: function (t) {
                    return function (t, n) {
                        var e = 3 * (n > 1 ? 8 : n < -1 ? -8 : n);
                        return Cr.a(t, {
                            hour: e
                        })
                    }(this.date(), t)
                },
                navigateTo: function (t) {
                    return e(t)
                },
                alpha: {
                    single: 160,
                    animated: 112
                }
            }, t)
        }

        function e(t, n) {
            var e = "current" === t ? a.pick(Cr.f(lu()), "year", "month", "day", "hour") : a.clone(t);
            return e.hour = 3 * Math.floor(e.hour / 3), e.minute = 0, n && (e = Cr.d(Cr.a(e, n))), e
        }

        function r(t, n) {
            if ("current" === t.date) return {
                dir: "current",
                stamp: "current",
                date: e(t.date, n)
            };
            var r = e(t.date, n);
            return {
                dir: Cr.g(r, "{yyyy}/{MM}/{dd}"),
                stamp: Cr.g(r, "{hh}{mm}"),
                date: r
            }
        }

        function o(t, n, e, i) {
            var o = r(t),
                a = Cr.b(o.date),
                u = a >= new Date("2014/11/24") ? ".epak" : ".json",
                c = "0.5";
            a < new Date("2015/03/11") || Fr.o() && !Fr.s() ? c = "1.0" : a > new Date("2016/06/22") && t.hd && (c = "0.25");
            var l = [o.stamp, n, e, i, "gfs", c].filter(Fr.v).join("-") + u;
            return Du("/data/gfs/" + (o.dir + "/" + l))
        }

        function u(t, n) {
            var e = "current" === t ? Cr.f(lu()) : t,
                r = e.year,
                i = e.month,
                o = e.day,
                a = e.hour;
            return {
                year: r,
                month: i,
                day: o,
                hour: Math.floor(a / n) * n,
                minute: 0
            }
        }

        function c(t, n, e) {
            var r = (e > 1 ? 8 : e < -1 ? -8 : e) * n;
            return Cr.a(t, {
                hour: r
            })
        }

        function l(t, n, e) {
            var r = u(t.date, e),
                i = "current" === t.date,
                o = i ? "current" : Cr.g(r, "{yyyy}/{MM}/{dd}"),
                a = i ? "current" : Cr.g(r, "{hh}{mm}");
            return Du("/data/cams/" + "".concat(o, "/").concat(a, "-").concat(n, "-cams.epak"))
        }

        function s(t, n, e, i) {
            var o = r(t),
                a = [o.stamp, n, e, i, "wave", "30m"].filter(Fr.v).join("-") + ".epak";
            return Du("/data/ww3/" + (o.dir + "/" + a))
        }

        function f(t, n, e) {
            if (e = +e || 0, "current" === n) return t[t.length - 1 + e];
            var r = Cr.g(n, "{yyyy}{MM}{dd}"),
                i = a.sortedIndex(t, r);
            return t[(i = 0 === (t[i] || "").indexOf(r) ? i : i - 1) + e]
        }

        function h(t, n, e) {
            var r = f(t, n, e > 1 ? 6 : e < -1 ? -6 : e);
            return r ? Cr.e(r, /(\d{4})(\d\d)(\d\d)/) : null
        }

        function d(t, n) {
            var e = f(t, n.date);
            return e ? qu(e) : null
        }

        function p(t) {
            var n = "current" === t ? Cr.f(lu()) : t,
                e = n.year,
                r = n.month,
                i = n.day,
                o = n.hour,
                a = n.minute;
            return {
                year: e,
                month: r,
                day: i,
                hour: o,
                minute: 5 * Math.floor(a / 5)
            }
        }

        function v(t) {
            var n = p(t.date),
                e = "current" === t.date,
                r = e ? "current" : Cr.g(n, "{yyyy}/{MM}/{dd}"),
                i = e ? "current" : Cr.g(n, "{yyyy}{MM}{dd}{hh}{mm}");
            return Du("/data/ovation/" + "".concat(r, "/").concat(i, "-ovation.json"))
        }

        function m(t) {
            return "surface" === t.surface ? "Surface" : Fr.d(t.level)
        }

        function y(t) {
            return "surface" === t.surface ? "地上" : Fr.d(t.level)
        }

        function g(t) {
            return function (n) {
                var e = {};
                return a.forEach(t, (function (t, r) {
                    e[r] = t[n] || t.en || t
                })), e
            }
        }
        var b, w, _ = {
            wind: {
                matchesPrimary: function () {
                    return !0
                },
                matchesOverlay: a.matches({
                    overlayType: "wind"
                }),
                create: function (t) {
                    return n({
                        type: "wind",
                        descriptionHTML: g({
                            name: {
                                en: "Wind",
                                ja: "風速"
                            },
                            qualifier: {
                                en: " @ " + m(t),
                                ja: "＠" + y(t)
                            }
                        }),
                        paths: [o(t, "wind", t.surface, t.level)],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return ac(t)
                        },
                        units: [{
                            label: "km/h",
                            conversion: function (t) {
                                return 3.6 * t
                            },
                            precision: 0,
                            convention: "into"
                        }, {
                            label: "m/s",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1,
                            convention: "into"
                        }, {
                            label: "kn",
                            conversion: function (t) {
                                return 1.943844 * t
                            },
                            precision: 0,
                            convention: "into"
                        }, {
                            label: "mph",
                            conversion: function (t) {
                                return 2.236936 * t
                            },
                            precision: 0,
                            convention: "into"
                        }],
                        scale: Sl(),
                        particles: {
                            velocityScale: .01,
                            maxIntensity: 15
                        }
                    })
                }
            },
            temp: {
                matchesOverlay: a.matches({
                    overlayType: "temp"
                }),
                create: function (t) {
                    return n({
                        type: "temp",
                        descriptionHTML: g({
                            name: {
                                en: "Temp",
                                ja: "気温"
                            },
                            qualifier: {
                                en: " @ " + m(t),
                                ja: " @ " + y(t)
                            }
                        }),
                        paths: [o(t, "temp", t.surface, t.level)],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /Temperature/, Eu, ["Temperature"])
                        },
                        units: [{
                            label: "°C",
                            conversion: function (t) {
                                return t - 273.15
                            },
                            precision: 1
                        }, {
                            label: "°F",
                            conversion: function (t) {
                                return 9 * t / 5 - 459.67
                            },
                            precision: 1
                        }, {
                            label: "K",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1
                        }],
                        scale: kl()
                    })
                }
            },
            relative_humidity: {
                matchesOverlay: a.matches({
                    overlayType: "relative_humidity"
                }),
                create: function (t) {
                    return n({
                        type: "relative_humidity",
                        descriptionHTML: g({
                            name: {
                                en: "Relative Humidity",
                                ja: "相対湿度"
                            },
                            qualifier: {
                                en: " @ " + m(t),
                                ja: " @ " + y(t)
                            }
                        }),
                        paths: [o(t, "relative_humidity", t.surface, t.level)],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /Relative_humidity/, Eu)
                        },
                        units: [{
                            label: "%",
                            conversion: function (t) {
                                return t
                            },
                            precision: 0
                        }],
                        scale: gl()
                    })
                }
            },
            air_density: {
                matchesOverlay: a.matches({
                    overlayType: "air_density"
                }),
                create: function (t) {
                    return n({
                        type: "air_density",
                        descriptionHTML: g({
                            name: {
                                en: "Air Density",
                                ja: "空気密度"
                            },
                            qualifier: {
                                en: " @ " + m(t),
                                ja: " @ " + y(t)
                            }
                        }),
                        paths: [o(t, "air_density", t.surface, t.level)],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /air_density/, Eu)
                        },
                        units: [{
                            label: "kg/m³",
                            conversion: function (t) {
                                return t
                            },
                            precision: 2
                        }],
                        scale: el()
                    })
                }
            },
            wind_power_density: {
                matchesOverlay: a.matches({
                    overlayType: "wind_power_density"
                }),
                create: function (t) {
                    var r = _.wind.create(t),
                        i = _.air_density.create(t);
                    return n({
                        type: "wind_power_density",
                        descriptionHTML: g({
                            name: {
                                en: "Instant Wind Power Density",
                                ja: "風力エネルギー密度"
                            },
                            qualifier: {
                                en: " @ " + m(t),
                                ja: " @ " + y(t)
                            }
                        }),
                        paths: [r.paths[0], i.paths[0]],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t, n) {
                            return function (t, n) {
                                var e = ac(t),
                                    r = yu(n, /air_density/, Eu, ["air_density"]),
                                    i = e.field().valueAt,
                                    o = e.field().nearest,
                                    a = e.field().bilinear,
                                    u = r.field().valueAt,
                                    c = r.field().nearest,
                                    l = r.field().bilinear;

                                function s(t, n) {
                                    var e = t[2];
                                    return .5 * n * e * e * e
                                }

                                function f(t) {
                                    return s(i(t), u(t))
                                }

                                function h(t, n) {
                                    return s(o(t, n), c(t, n))
                                }

                                function d(t, n) {
                                    return s(a(t, n), l(t, n))
                                }
                                return Object.assign(r, {
                                    field: function () {
                                        return {
                                            type: "scalar",
                                            valueAt: f,
                                            nearest: h,
                                            bilinear: d
                                        }
                                    },
                                    interpolate: function (t, n) {
                                        return d(t, n)
                                    }
                                })
                            }(t, n)
                        },
                        units: [{
                            label: "kW/m<sup>2</sup>",
                            tooltip: "kW/m²",
                            conversion: function (t) {
                                return t / 1e3
                            },
                            precision: 1
                        }, {
                            label: "W/m<sup>2</sup>",
                            tooltip: "W/m²",
                            conversion: function (t) {
                                return t
                            },
                            precision: 0
                        }],
                        scale: jl()
                    })
                }
            },
            misery_index: {
                matchesOverlay: a.matches({
                    overlayType: "misery_index"
                }),
                create: function (t) {
                    return n({
                        type: "misery_index",
                        descriptionHTML: g({
                            name: {
                                en: "Misery (Wind Chill & Heat Index)",
                                ja: "体感温度"
                            },
                            qualifier: {
                                en: " @ " + m(t),
                                ja: " @ " + y(t)
                            }
                        }),
                        paths: [o(t, "misery_index")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /misery_index/, Eu)
                        },
                        units: (i = (r = {
                            en: " (feels like)",
                            ja: "（体感温度）"
                        })[Fr.B()] || r.en, [{
                            label: "°C" + i,
                            conversion: function (t) {
                                return t - 273.15
                            },
                            precision: 1
                        }, {
                            label: "°F" + i,
                            conversion: function (t) {
                                return 9 * t / 5 - 459.67
                            },
                            precision: 1
                        }, {
                            label: "K" + i,
                            conversion: function (t) {
                                return t
                            },
                            precision: 1
                        }]),
                        scale: dl()
                    });
                    var r, i
                }
            },
            total_cloud_water: {
                matchesOverlay: a.matches({
                    overlayType: "total_cloud_water"
                }),
                create: function (t) {
                    return n({
                        type: "total_cloud_water",
                        descriptionHTML: g({
                            name: {
                                en: "Total Cloud Water",
                                ja: "雲水量"
                            },
                            qualifier: ""
                        }),
                        paths: [o(t, "total_cloud_water")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /Cloud_water/, Eu, ["Cloud_water"])
                        },
                        units: [{
                            label: "kg/m<sup>2</sup>",
                            tooltip: "kg/m²",
                            conversion: function (t) {
                                return t
                            },
                            precision: 3
                        }],
                        scale: Tl()
                    })
                }
            },
            total_precipitable_water: {
                matchesOverlay: a.matches({
                    overlayType: "total_precipitable_water"
                }),
                create: function (t) {
                    return n({
                        type: "total_precipitable_water",
                        descriptionHTML: g({
                            name: {
                                en: "Total Precipitable Water",
                                ja: "可降水量"
                            },
                            qualifier: ""
                        }),
                        paths: [o(t, "total_precipitable_water")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /Precipitable_water/, Eu, ["Precipitable_water"])
                        },
                        units: [{
                            label: "kg/m<sup>2</sup>",
                            tooltip: "kg/m²",
                            conversion: function (t) {
                                return t
                            },
                            precision: 3
                        }],
                        scale: El()
                    })
                }
            },
            mean_sea_level_pressure: {
                matchesOverlay: a.matches({
                    overlayType: "mean_sea_level_pressure"
                }),
                create: function (t) {
                    return n({
                        type: "mean_sea_level_pressure",
                        descriptionHTML: g({
                            name: {
                                en: "Mean Sea Level Pressure",
                                ja: "海面更正気圧"
                            },
                            qualifier: ""
                        }),
                        paths: [o(t, "mean_sea_level_pressure")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /Pressure_reduced_to_MSL/, Eu, ["Pressure_reduced_to_MSL"])
                        },
                        units: [{
                            label: "hPa",
                            conversion: function (t) {
                                return t / 100
                            },
                            precision: 0
                        }, {
                            label: "mmHg",
                            conversion: function (t) {
                                return t / 133.322387415
                            },
                            precision: 0
                        }, {
                            label: "inHg",
                            conversion: function (t) {
                                return t / 3386.389
                            },
                            precision: 1
                        }],
                        scale: pl()
                    })
                }
            },
            precip_3hr: {
                matchesOverlay: a.matches({
                    overlayType: "precip_3hr"
                }),
                create: function (t) {
                    return n({
                        type: "precip_3hr",
                        descriptionHTML: g({
                            name: {
                                en: "Next 3-hr Precip Accumulation",
                                ja: "3時間の降水量"
                            },
                            qualifier: ""
                        }),
                        paths: [o(t, "precip_3hr")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /precip_accumulation_3hr/, Eu)
                        },
                        units: [{
                            label: "mm",
                            tooltip: "mm",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1
                        }, {
                            label: "in",
                            tooltip: "in",
                            conversion: function (t) {
                                return t / 25.4
                            },
                            precision: 2
                        }, {
                            label: "kg/m<sup>2</sup>",
                            tooltip: "kg/m²",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1
                        }],
                        alpha: {
                            single: 160,
                            animated: 160
                        },
                        scale: ml()
                    })
                }
            },
            cape: {
                matchesOverlay: a.matches({
                    overlayType: "cape"
                }),
                create: function (t) {
                    return n({
                        type: "cape",
                        descriptionHTML: g({
                            name: {
                                en: "CAPE (Surface)",
                                ja: "対流有効位置エネルギー（地上）"
                            },
                            qualifier: ""
                        }),
                        paths: [o(t, "cape")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /Convective_available_potential_energy_surface/, Eu)
                        },
                        units: [{
                            label: "J/kg",
                            tooltip: "J/kg",
                            conversion: function (t) {
                                return t
                            },
                            precision: 0
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: il()
                    })
                }
            },
            co2: {
                matchesOverlay: a.matches({
                    overlayType: "co2"
                }),
                create: function (t) {
                    var e = Gu(t.date);
                    return n({
                        type: "co2",
                        descriptionHTML: g({
                            name: {
                                en: "Carbon Dioxide Mixing Ratio",
                                ja: "二酸化炭素混合比"
                            },
                            qualifier: ""
                        }),
                        paths: [Wu(t, "co2", e)],
                        date: function () {
                            return Xu(t.date, e)
                        },
                        navigate: function (t) {
                            return Bu(this.date(), t, e)
                        },
                        navigateTo: function (t) {
                            return Xu(t, e)
                        },
                        builder: function (t) {
                            return yu(t, /CO2CL/, Tu)
                        },
                        units: [{
                            label: "µmol/mol",
                            conversion: function (t) {
                                return 1e6 * t
                            },
                            precision: 1
                        }],
                        alpha: {
                            single: 160,
                            animated: 160
                        },
                        scale: ol()
                    })
                }
            },
            cosc: {
                matchesOverlay: a.matches({
                    overlayType: "cosc"
                }),
                create: function (t) {
                    var e = Gu(t.date);
                    return n({
                        type: "cosc",
                        descriptionHTML: g({
                            name: {
                                en: "Carbon Monoxide Conc.",
                                ja: "一酸化炭素濃度"
                            },
                            qualifier: {
                                en: " @ Surface",
                                ja: "＠地上"
                            }
                        }),
                        paths: [Wu(t, "cosc", e)],
                        date: function () {
                            return Xu(t.date, e)
                        },
                        navigate: function (t) {
                            return Bu(this.date(), t, e)
                        },
                        navigateTo: function (t) {
                            return Xu(t, e)
                        },
                        builder: function (t) {
                            return yu(t, /COSC/, Tu)
                        },
                        units: [{
                            label: "ppbv",
                            conversion: function (t) {
                                return t
                            },
                            precision: 0
                        }, {
                            label: "ppmv",
                            conversion: function (t) {
                                return t / 1e3
                            },
                            precision: 2
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: cl()
                    })
                }
            },
            so2smass: {
                matchesOverlay: a.matches({
                    overlayType: "so2smass"
                }),
                create: function (t) {
                    var e = Gu(t.date);
                    return n({
                        type: "so2smass",
                        descriptionHTML: g({
                            name: {
                                en: "Sulfur Dioxide Mass",
                                ja: "二酸化硫黄質量"
                            },
                            qualifier: {
                                en: " @ Surface",
                                ja: "＠地上"
                            }
                        }),
                        paths: [Wu(t, "so2smass", e)],
                        date: function () {
                            return Xu(t.date, e)
                        },
                        navigate: function (t) {
                            return Bu(this.date(), t, e)
                        },
                        navigateTo: function (t) {
                            return Xu(t, e)
                        },
                        builder: function (t) {
                            return yu(t, /SO2SMASS/, Tu)
                        },
                        units: [{
                            label: "µg/m<sup>3</sup>",
                            tooltip: "µg/m³",
                            conversion: function (t) {
                                return 1e9 * t
                            },
                            precision: 2
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: bl()
                    })
                }
            },
            duexttau: {
                matchesOverlay: a.matches({
                    overlayType: "duexttau"
                }),
                create: function (e) {
                    var r = Gu(e.date);
                    return n({
                        type: "duexttau",
                        descriptionHTML: g({
                            name: {
                                en: "Dust Extinction " + t,
                                ja: "粒子消散係数 " + t
                            },
                            qualifier: ""
                        }),
                        paths: [Wu(e, "duexttau", r)],
                        date: function () {
                            return Xu(e.date, r)
                        },
                        navigate: function (t) {
                            return Bu(this.date(), t, r)
                        },
                        navigateTo: function (t) {
                            return Xu(t, r)
                        },
                        builder: function (t) {
                            return yu(t, /DUEXTTAU/, Tu)
                        },
                        units: [{
                            label: "τ",
                            conversion: function (t) {
                                return t
                            },
                            precision: 4
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: sl()
                    })
                }
            },
            suexttau: {
                matchesOverlay: a.matches({
                    overlayType: "suexttau"
                }),
                create: function (e) {
                    var r = Gu(e.date);
                    return n({
                        type: "suexttau",
                        descriptionHTML: g({
                            name: {
                                en: "Sulfate Extinction " + t,
                                ja: "硫酸塩消散係数 " + t
                            },
                            qualifier: ""
                        }),
                        paths: [Wu(e, "suexttau", r)],
                        date: function () {
                            return Xu(e.date, r)
                        },
                        navigate: function (t) {
                            return Bu(this.date(), t, r)
                        },
                        navigateTo: function (t) {
                            return Xu(t, r)
                        },
                        builder: function (t) {
                            return yu(t, /SUEXTTAU/, Tu)
                        },
                        units: [{
                            label: "τ",
                            conversion: function (t) {
                                return t
                            },
                            precision: 3
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: Ml()
                    })
                }
            },
            co2sc: {
                matchesOverlay: a.matches({
                    overlayType: "co2sc"
                }),
                create: function (t) {
                    var e = {
                            hour: 3
                        },
                        r = {
                            minute: 90
                        },
                        i = Xu(t.date, e, r),
                        o = Cr.b({
                            year: 2017,
                            month: 1,
                            day: 24,
                            hour: 4,
                            minute: 30
                        }),
                        a = Cr.b(i) < o,
                        u = a ? 32 : 0,
                        c = Cr.b({
                            year: 2018,
                            month: 7,
                            day: 11,
                            hour: 4,
                            minute: 30
                        }),
                        l = Cr.b(i) < c ? "A" : "B";
                    return n({
                        type: "co2sc",
                        descriptionHTML: g({
                            name: {
                                en: "Carbon Dioxide Concentration",
                                ja: "二酸化炭素濃度"
                            },
                            qualifier: {
                                en: " @ Surface",
                                ja: "＠地上"
                            }
                        }),
                        paths: [Wu(t, "co2sc", e, r)],
                        date: function () {
                            return i
                        },
                        navigate: function (t) {
                            return Bu(this.date(), t, e)
                        },
                        navigateTo: function (t) {
                            return Xu(t, e, r)
                        },
                        builder: function (t) {
                            return yu(t, /CO2SC/, a ? ku : Tu, null, (function (t) {
                                for (var n = 0; n < t.length; n++) t[n] += u
                            }))
                        },
                        units: [{
                            label: "ppmv",
                            conversion: function (t) {
                                return t
                            },
                            precision: 0
                        }],
                        alpha: {
                            single: 200,
                            animated: 150
                        },
                        scale: "A" === l ? al(a ? -8 : 0) : ul()
                    })
                }
            },
            currents: {
                matchesPrimary: (b = a.matches({
                    surface: "surface",
                    level: "currents"
                }), w = a.matches({
                    param: "argo",
                    surface: "pressure"
                }), function (t) {
                    return b(t) || w(t)
                }),
                matchesOverlay: a.matches({
                    overlayType: "currents"
                }),
                create: function (t) {
                    return Fu(qu("oscar-catalog.json")).then((function (e) {
                        return n({
                            type: "currents",
                            descriptionHTML: g({
                                name: {
                                    en: "Ocean Currents",
                                    ja: "海流"
                                },
                                qualifier: {
                                    en: " @ Surface",
                                    ja: "＠地上"
                                }
                            }),
                            paths: [d(e, t)],
                            date: function () {
                                return function (t, n) {
                                    var e = f(t, n);
                                    return e ? Cr.e(e, /(\d{4})(\d\d)(\d\d)/) : null
                                }(e, t.date)
                            },
                            navigate: function (t) {
                                return h(e, this.date(), t)
                            },
                            navigateTo: function (t) {
                                return h(e, t, 0)
                            },
                            builder: function (t) {
                                return function (t) {
                                    var n = t,
                                        e = n.header.variables,
                                        r = e.u,
                                        i = e.v,
                                        o = e[r.dimensions[0]],
                                        a = e[r.dimensions[2]],
                                        u = e[r.dimensions[3]],
                                        c = Fr.w(n.blocks[r.data.block], n.blocks[i.data.block]),
                                        l = fu(u.sequence, a.sequence),
                                        s = mu(l, c);
                                    return {
                                        sourceHTML: "OSCAR / Earth & Space Research",
                                        date: function () {
                                            return Cr.f(o.data[0])
                                        },
                                        grid: function () {
                                            return l
                                        },
                                        field: function () {
                                            return {
                                                type: "vector",
                                                valueAt: function (t) {
                                                    var n = 2 * t,
                                                        e = c[n],
                                                        r = c[n + 1];
                                                    return [e, r, Math.sqrt(e * e + r * r)]
                                                },
                                                nearest: pu(l, c),
                                                bilinear: mu(l, c)
                                            }
                                        },
                                        interpolate: function (t, n) {
                                            return s(t, n)
                                        }
                                    }
                                }(t)
                            },
                            units: [{
                                label: "m/s",
                                conversion: function (t) {
                                    return t
                                },
                                precision: 2,
                                convention: "with"
                            }, {
                                label: "km/h",
                                conversion: function (t) {
                                    return 3.6 * t
                                },
                                precision: 1,
                                convention: "with"
                            }, {
                                label: "kn",
                                conversion: function (t) {
                                    return 1.943844 * t
                                },
                                precision: 1,
                                convention: "with"
                            }, {
                                label: "mph",
                                conversion: function (t) {
                                    return 2.236936 * t
                                },
                                precision: 1,
                                convention: "with"
                            }],
                            scale: ll(),
                            particles: {
                                velocityScale: 1 / 7,
                                maxIntensity: .7
                            }
                        })
                    }))
                }
            },
            primary_waves: {
                matchesPrimary: a.matches({
                    param: "ocean",
                    surface: "primary",
                    level: "waves"
                }),
                matchesOverlay: a.matches({
                    overlayType: "primary_waves"
                }),
                create: function (t) {
                    return n({
                        type: "primary_waves",
                        descriptionHTML: g({
                            name: {
                                en: "Peak Wave Period",
                                ja: "ピーク波周期"
                            },
                            qualifier: ""
                        }),
                        paths: [s(t, "primary")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return function (t) {
                                for (var n = t, e = n.header.variables, r = e.Primary_wave_direction_surface, o = e.Primary_wave_mean_period_surface, a = e[r.dimensions[0]], u = e[r.dimensions[1]], c = e[r.dimensions[2]], l = n.blocks[r.data.block], s = n.blocks[o.data.block], f = new Float32Array(2 * l.length), h = 0; h < l.length; h++) {
                                    var d = 2 * h,
                                        p = l[h] * i.c,
                                        v = s[h];
                                    p < 7e37 && v < 7e37 ? (f[d] = -v * Math.sin(p), f[d + 1] = -v * Math.cos(p)) : f[d] = f[d + 1] = 7e37
                                }
                                var m = fu(c.sequence, u.sequence),
                                    y = mu(m, f);
                                return {
                                    sourceHTML: ju,
                                    date: function () {
                                        return Cr.f(a.data[0])
                                    },
                                    grid: function () {
                                        return m
                                    },
                                    field: function () {
                                        return {
                                            type: "vector",
                                            valueAt: function (t) {
                                                var n = 2 * t,
                                                    e = f[n],
                                                    r = f[n + 1];
                                                return [e, r, Math.sqrt(e * e + r * r)]
                                            },
                                            nearest: pu(m, f),
                                            bilinear: mu(m, f)
                                        }
                                    },
                                    interpolate: function (t, n) {
                                        return y(t, n)
                                    }
                                }
                            }(t)
                        },
                        units: [{
                            label: "sec",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1,
                            convention: "into"
                        }],
                        scale: yl(),
                        particles: {
                            velocityScale: 1 / 612,
                            maxIntensity: 12,
                            waves: !0
                        }
                    })
                }
            },
            sea_surface_temp: {
                matchesOverlay: a.matches({
                    overlayType: "sea_surface_temp"
                }),
                create: function (t) {
                    var e = "sea_surface_temp";
                    return n({
                        type: e,
                        descriptionHTML: g({
                            name: {
                                en: "Sea Surface Temp",
                                ja: "海面水温"
                            },
                            qualifier: ""
                        }),
                        paths: [ic(t, e)],
                        date: function () {
                            return ec(t.date)
                        },
                        navigate: function (t) {
                            return rc(this.date(), t)
                        },
                        navigateTo: function (t) {
                            return rc(t, 0)
                        },
                        builder: function (n) {
                            return oc(t, n, e)
                        },
                        units: [{
                            label: "°C",
                            conversion: function (t) {
                                return t - 273.15
                            },
                            precision: 1
                        }, {
                            label: "°F",
                            conversion: function (t) {
                                return 9 * t / 5 - 459.67
                            },
                            precision: 1
                        }, {
                            label: "K",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1
                        }],
                        scale: _l()
                    })
                }
            },
            sea_surface_temp_anomaly: {
                matchesOverlay: a.matches({
                    overlayType: "sea_surface_temp_anomaly"
                }),
                create: function (t) {
                    var e = "sea_surface_temp_anomaly";
                    return n({
                        type: e,
                        descriptionHTML: g({
                            name: {
                                en: "SST Anomaly",
                                ja: "海面水温異常"
                            },
                            qualifier: ""
                        }),
                        paths: [ic(t, e)],
                        date: function () {
                            return ec(t.date)
                        },
                        navigate: function (t) {
                            return rc(this.date(), t)
                        },
                        navigateTo: function (t) {
                            return rc(t, 0)
                        },
                        builder: function (n) {
                            return oc(t, n, e)
                        },
                        units: [{
                            label: "°C",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1
                        }, {
                            label: "°F",
                            conversion: function (t) {
                                return 9 * t / 5
                            },
                            precision: 1
                        }, {
                            label: "K",
                            conversion: function (t) {
                                return t
                            },
                            precision: 1
                        }],
                        scale: xl()
                    })
                }
            },
            significant_wave_height: {
                matchesOverlay: a.matches({
                    overlayType: "significant_wave_height"
                }),
                create: function (t) {
                    return n({
                        type: "significant_wave_height",
                        descriptionHTML: g({
                            name: {
                                en: "Significant Wave Height",
                                ja: "有義波高"
                            },
                            qualifier: ""
                        }),
                        paths: [s(t, "sig_height")],
                        date: function () {
                            return e(t.date)
                        },
                        builder: function (t) {
                            return yu(t, /Significant_height/, ju)
                        },
                        units: [{
                            label: "m",
                            conversion: function (t) {
                                return t
                            },
                            precision: 2
                        }, {
                            label: "ft",
                            conversion: function (t) {
                                return 100 * t / 2.54 / 12
                            },
                            precision: 1
                        }],
                        scale: hl()
                    })
                }
            },
            spco2: {
                matchesOverlay: a.matches({
                    overlayType: "spco2"
                }),
                create: function (t) {
                    return n({
                        type: "spco2",
                        descriptionHTML: g({
                            name: {
                                en: "CO<sub>2</sub> Partial Pressure",
                                ja: ""
                            },
                            qualifier: {
                                en: " @ Surface",
                                ja: "＠地上"
                            }
                        }),
                        paths: [Vu(t, "spco2")],
                        date: function () {
                            return $u(t.date)
                        },
                        dateFormat: function () {
                            return "{yyyy}-{MM}"
                        },
                        navigate: function (t) {
                            return Yu(this.date(), t)
                        },
                        navigateTo: function (t) {
                            return Yu(t, 0)
                        },
                        builder: function (t) {
                            return yu(t, /spco2_smoothed/, Su)
                        },
                        units: [{
                            label: "µatm",
                            conversion: function (t) {
                                return t
                            },
                            precision: 2
                        }],
                        scale: wl()
                    })
                }
            },
            fgco2: {
                matchesOverlay: a.matches({
                    overlayType: "fgco2"
                }),
                create: function (t) {
                    return n({
                        type: "fgco2",
                        descriptionHTML: g({
                            name: {
                                en: "Sea-Air CO<sub>2</sub> Flux Density",
                                ja: ""
                            },
                            qualifier: ""
                        }),
                        paths: [Vu(t, "fgco2")],
                        date: function () {
                            return $u(t.date)
                        },
                        dateFormat: function () {
                            return "{yyyy}-{MM}"
                        },
                        navigate: function (t) {
                            return Yu(this.date(), t)
                        },
                        navigateTo: function (t) {
                            return Yu(t, 0)
                        },
                        builder: function (t) {
                            return yu(t, /fgco2_smoothed/, Su)
                        },
                        units: [{
                            label: "mol/m²yr",
                            conversion: function (t) {
                                return t
                            },
                            precision: 2
                        }],
                        scale: fl()
                    })
                }
            },
            aurora: {
                matchesOverlay: a.matches({
                    overlayType: "aurora"
                }),
                create: function (t) {
                    function e() {
                        return p(t.date)
                    }
                    return n({
                        type: "aurora",
                        descriptionHTML: g({
                            name: {
                                en: "Probability of Visible Aurora",
                                ja: "オーロラが見える確率"
                            },
                            qualifier: ""
                        }),
                        paths: [v(t)],
                        date: e,
                        navigate: function (t) {
                            return function (t, n) {
                                var e = n > 1 ? 12 : n < -1 ? -12 : n;
                                return Cr.d(Cr.a(t, {
                                    minute: 5 * e
                                }))
                            }(e(), t)
                        },
                        navigateTo: function (t) {
                            return p(t)
                        },
                        builder: function (t) {
                            return Object.assign(_u(t), {
                                sourceHTML: "OVATION / SWPC / NCEP / NWS / NOAA"
                            })
                        },
                        units: [{
                            label: "% Visibility Chance",
                            tooltip: "% Visibility Chance",
                            conversion: function (t) {
                                return t
                            },
                            precision: 0
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: rl()
                    })
                }
            },
            pm1: {
                matchesOverlay: a.matches({
                    overlayType: "pm1"
                }),
                create: function (t) {
                    return n({
                        type: "pm1",
                        descriptionHTML: g({
                            name: {
                                en: "Particulate Matter < 1 µm",
                                ja: "粒子径1µm以下（PM<sub>1</sub>）"
                            },
                            qualifier: {
                                en: " @ Surface",
                                ja: "＠地上"
                            }
                        }),
                        paths: [l(t, "pm1", 1)],
                        date: function () {
                            return u(t.date, 1)
                        },
                        navigate: function (t) {
                            return c(this.date(), 1, t)
                        },
                        navigateTo: function (t) {
                            return u(t, 1)
                        },
                        builder: function (t) {
                            return yu(t, /pm1/, Mu)
                        },
                        units: [{
                            label: "µg/m<sup>3</sup>",
                            tooltip: "µg/m³",
                            conversion: function (t) {
                                return 1e9 * t
                            },
                            precision: 0
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: vl()
                    })
                }
            },
            "pm2.5": {
                matchesOverlay: a.matches({
                    overlayType: "pm2.5"
                }),
                create: function (t) {
                    return n({
                        type: "pm2.5",
                        descriptionHTML: g({
                            name: {
                                en: "Particulate Matter < 2.5 µm",
                                ja: "微小粒子状物質（PM<sub>2.5</sub>）"
                            },
                            qualifier: {
                                en: " @ Surface",
                                ja: "＠地上"
                            }
                        }),
                        paths: [l(t, "pm2p5", 1)],
                        date: function () {
                            return u(t.date, 1)
                        },
                        navigate: function (t) {
                            return c(this.date(), 1, t)
                        },
                        navigateTo: function (t) {
                            return u(t, 1)
                        },
                        builder: function (t) {
                            return yu(t, /pm2p5/, Mu)
                        },
                        units: [{
                            label: "µg/m<sup>3</sup>",
                            tooltip: "µg/m³",
                            conversion: function (t) {
                                return 1e9 * t
                            },
                            precision: 0
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: vl()
                    })
                }
            },
            pm10: {
                matchesOverlay: a.matches({
                    overlayType: "pm10"
                }),
                create: function (t) {
                    return n({
                        type: "pm10",
                        descriptionHTML: g({
                            name: {
                                en: "Particulate Matter < 10 µm",
                                ja: "粒子径10µm以下（PM<sub>10</sub>）"
                            },
                            qualifier: {
                                en: " @ Surface",
                                ja: "＠地上"
                            }
                        }),
                        paths: [l(t, "pm10", 1)],
                        date: function () {
                            return u(t.date, 1)
                        },
                        navigate: function (t) {
                            return c(this.date(), 1, t)
                        },
                        navigateTo: function (t) {
                            return u(t, 1)
                        },
                        builder: function (t) {
                            return yu(t, /pm10/, Mu)
                        },
                        units: [{
                            label: "µg/m<sup>3</sup>",
                            tooltip: "µg/m³",
                            conversion: function (t) {
                                return 1e9 * t
                            },
                            precision: 0
                        }],
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: vl()
                    })
                }
            },
            off: {
                matchesOverlay: a.matches({
                    overlayType: "off"
                }),
                create: function () {
                    return null
                }
            }
        };
        Al.productsFor = function (t) {
            var n = null,
                e = null;
            a.values(_).forEach((function (r) {
                a.isFunction(r.matchesPrimary) && r.matchesPrimary(t) && (n = r), a.isFunction(r.matchesOverlay) && r.matchesOverlay(t) && r !== n && (e = r)
            }));
            var r = [];
            return n && r.push(n.create(t)), e && r.push(e.create(t)), r.filter(Fr.u)
        }, Al.overlayTypes = function () {
            return ou(Object.keys(_))
        }
    }();
    var Pl = e(14);

    function Rl(t, n) {
        for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function zl(t) {
        var n = Object.keys(t),
            e = d.apply(void 0, ["change"].concat(n.map((function (t) {
                return "change:".concat(t)
            })))),
            r = Object(Fr.F)(t),
            i = 0;

        function o(t) {
            return t.trim().split(/^|\s+/).map((function (t) {
                return t.replace("?", i++)
            }))
        }
        return new(function () {
            function t() {
                ! function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var n, i, u;
            return n = t, (i = [{
                key: "on",
                value: function (t, n) {
                    var r = o(t),
                        i = e.on(r.join(" "), n);
                    return arguments.length < 2 ? i : r
                }
            }, {
                key: "get",
                value: function (t) {
                    return r[t]
                }
            }, {
                key: "getAll",
                value: function () {
                    return Object(Fr.F)(r)
                }
            }, {
                key: "save",
                value: function (t, n) {
                    var i = Object(Fr.F)(),
                        o = Object(Fr.F)();
                    Object.keys(t).forEach((function (n) {
                        if (!(n in r)) throw new Error("unknown key: ".concat(n));
                        var e = t[n],
                            u = r[n];
                        a.isEqual(e, u) || (i[n] = e, o[n] = u)
                    }));
                    var u = Object.keys(i);
                    u.length > 0 && (u.forEach((function (t) {
                        return r[t] = i[t]
                    })), u.forEach((function (t) {
                        return e.call("change:".concat(t), null, i[t], o[t], n)
                    })), e.call("change", null, i, o, n))
                }
            }]) && Rl(n.prototype, i), u && Rl(n, u), t
        }())
    }
    var Fl = Al.overlayTypes();

    function Cl() {
        return Object(Fr.F)({
            date: "current",
            param: "wind",
            surface: "surface",
            level: "level",
            projection: "orthographic",
            orientation: "",
            overlayType: "default",
            showGridPoints: !1,
            animate: !0,
            loc: null,
            argoFloat: null
        })
    }

    function Ll(t) {
        var n = t.date,
            e = t.param,
            r = t.surface,
            i = t.level,
            o = t.projection,
            a = t.orientation,
            u = t.overlayType,
            c = t.showGridPoints,
            l = t.animate,
            s = t.loc,
            f = t.argoFloat;
        return "#" + ["current" === n ? "current" : Cr.g(n, "{yyyy}/{MM}/{dd}/{hh}{mm}Z"), e, r, i, l ? "" : "anim=off", u && "default" !== u ? "overlay=" + u : "", c ? "grid=on" : "", f ? "argo=" + f : "", [o, a].filter((function (t) {
            return t
        })).join("="), s ? "loc=" + s.map((function (t) {
            return t.toFixed(3)
        })).join(",") : ""].filter((function (t) {
            return t
        })).join("/")
    }
    var Il, Dl = zl((Il = Object(Fr.F)(), Object.keys(Cl()).forEach((function (t) {
        return Il[t] = void 0
    })), Il));

    function ql() {
        var t = function (t) {
            var n, e = /^#(current|(\d{4})\/(\d{1,2})\/(\d{1,2})\/(\d{3,4})Z)\/(\w+)\/(\w+)\/(\w+)([\/].+)?/.exec(t);
            if (!e) return Cl();
            var i = "current" === e[1] ? "current" : {
                year: +e[2],
                month: +e[3],
                day: +e[4]
            };
            if ("current" !== i) {
                var o = (3 === e[5].length ? "0" : "") + e[5];
                i.hour = +o.substr(0, 2), i.minute = +o.substr(2)
            }
            var u = Cl();
            return u.date = i, u.param = e[6], u.surface = e[7], u.level = e[8], Object(Fr.e)(e[9], "").split("/").forEach((function (t) {
                if (n = /^(\w+)(=([\d\-.,]*))?$/.exec(t)) {
                    if (a.has(r, n[1])) u.projection = n[1], u.orientation = Object(Fr.e)(n[3], "");
                    else if ("loc" === n[1]) {
                        var e = a.isString(n[3]) ? n[3].split(",") : [],
                            i = +e[0],
                            o = +e[1];
                        i == i && o == o && (u.loc = [i, o])
                    }
                } else if (n = /^overlay=([\w.]+)$/.exec(t))(Fl.has(n[1]) || "default" === n[1]) && (u.overlayType = n[1]);
                else if (n = /^grid=(\w+)$/.exec(t)) "on" === n[1] && (u.showGridPoints = !0);
                else if (n = /^anim=(\w+)$/.exec(t)) "off" === n[1] && (u.animate = !1);
                else if (n = /^argo=(\w+)$/.exec(t)) switch (n[1]) {
                    case "planned":
                    case "recent":
                    case "operational":
                    case "dead":
                        u.argoFloat = n[1]
                }
            })), u
        }(window.location.hash);
        Dl.save(t, {
            source: "hash"
        })
    }

    function Ul(t, n) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = Dl.getAll(),
            i = Ll(r);
        window.location.hash !== i && "hash" !== e.source && (window.location.hash = i)
    }
    var Hl = {
        year: NaN,
        month: NaN,
        day: NaN
    };

    function Gl() {
        return p.a("#data-date").classed("local")
    }

    function Xl(t, n) {
        Ar("[".concat(t, "]")).classed("highlighted", !1), isNaN(n) || Ar("[".concat(t, '="').concat(n, '"]')).classed("highlighted", !0)
    }

    function Wl() {
        ! function () {
            if (!isNaN(Hl.year) && !isNaN(Hl.month)) {
                var t = new Date(Hl.year, Hl.month, 0).getDate(),
                    n = new Date(Hl.year, Hl.month - 1, 1).getDay();
                Ar("[data-day]").each((function (e, r) {
                    var i = r - n + 1,
                        o = i < 1 || t < i ? 0 : i;
                    p.a(this).text(Object(Pl.a)(o, 2)).attr("data-day", o).classed("cloaked", 0 === o)
                }))
            }
        }(), Xl("data-year", Hl.year), Xl("data-month", Hl.month), Xl("data-day", Hl.day)
    }

    function Bl() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = +t.year,
            e = +t.month,
            r = +t.day,
            i = +t.hour,
            o = +t.minute,
            a = {
                year: n,
                month: e,
                day: r,
                hour: i,
                minute: o
            },
            u = Gl() ? Cr.c(Cr.b(a)) : a;
        Hl.year = u.year, Hl.month = u.month, Hl.day = u.day, Wl()
    }

    function Vl(t) {
        for (var n = {
                language: "",
                script: "",
                region: ""
            }, e = (t || "").toLowerCase().split("-"), r = 0; r < e.length; r++) {
            var i = e[r];
            if (1 === i.length) break;
            0 === r ? n.language = i : /^[a-z]{4}$/.test(i) ? n.script = i.substring(0, 1).toUpperCase() + i.substring(1) : /^([a-z]{2}|\d{3})$/.test(i) && (n.region = i.toUpperCase())
        }
        return n
    }

    function $l(t) {
        switch (t.language) {
            case "en":
                return "en";
            case "cs":
                return "cs";
            case "fr":
                return "fr";
            case "ja":
                return "ja";
            case "ko":
                return "ko";
            case "pt":
                return "pt";
            case "ru":
                return "ru";
            case "zh":
                switch (t.script) {
                    case "Hant":
                        return "zh-TW";
                    case "Hans":
                        return "zh-CN"
                }
                switch (t.region) {
                    case "HK":
                    case "MO":
                    case "TW":
                        return "zh-TW";
                    case "SG":
                    case "CN":
                        return "zh-CN"
                }
        }
        return ""
    }
    Ar("[data-year]").on("click", (function () {
        Hl.year = +p.a(this).attr("data-year"), Wl()
    })), Ar("[data-month]").on("click", (function () {
        Hl.month = +p.a(this).attr("data-month"), Wl()
    })), Ar("[data-day]").on("click", (function () {
        Hl.day = +p.a(this).attr("data-day"), Wl()
    })), p.a("#calendar-apply").on("click", (function () {
        p.a("#calendar-wrapper").classed("hidden", !0);
        var t = Gl() ? Cr.f(new Date(Hl.year, Hl.month - 1, Hl.day)) : Hl,
            n = t.year,
            e = t.month,
            r = t.day,
            i = t.hour,
            o = t.minute;
        Dl.save({
            date: {
                year: n,
                month: e,
                day: r,
                hour: i || 0,
                minute: o || 0
            }
        })
    }));
    var Yl = e(19),
        Kl = "precision highp float;\n\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\n\nvarying vec2 v_TexCoord;\n\nvoid main() {\n    gl_Position = vec4(a_Position, 0.0, 1.0);\n    v_TexCoord = a_TexCoord;\n}\n";

    function Jl(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function Zl(t, n) {
        for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ql(t, n, e) {
        return n && Zl(t.prototype, n), e && Zl(t, e), t
    }
    var ts = Object(Yl.a)();

    function ns(t) {
        throw new Error(t)
    }
    var es = function () {
            function t() {
                Jl(this, t)
            }
            return Ql(t, null, [{
                key: "getWebGL",
                value: function (t, n) {
                    var e;
                    try {
                        e = t.getContext("webgl", n)
                    } catch (t) {}
                    if (!e) try {
                        e = t.getContext("experimental-webgl", n)
                    } catch (t) {}
                    return e || void 0
                }
            }, {
                key: "planeVertexShader",
                value: function () {
                    return Kl
                }
            }, {
                key: "unitPlaneAttributes",
                value: function () {
                    return {
                        a_Position: new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                        a_TexCoord: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
                    }
                }
            }, {
                key: "attach",
                value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ns,
                        e = {
                            PACK_ALIGNMENT: 1,
                            UNPACK_ALIGNMENT: 1,
                            UNPACK_FLIP_Y_WEBGL: !1,
                            UNPACK_PREMULTIPLY_ALPHA_WEBGL: !1,
                            UNPACK_COLORSPACE_CONVERSION_WEBGL: t.BROWSER_DEFAULT_WEBGL
                        },
                        r = Object.keys(e),
                        i = {
                            TEXTURE_MIN_FILTER: t.NEAREST,
                            TEXTURE_MAG_FILTER: t.NEAREST,
                            TEXTURE_WRAP_S: t.CLAMP_TO_EDGE,
                            TEXTURE_WRAP_T: t.CLAMP_TO_EDGE
                        },
                        o = Object.keys(i);

                    function u(e) {
                        var r = t.getError();
                        r && n("".concat(r, ":").concat(e))
                    }
                    return new(function () {
                        function c() {
                            Jl(this, c)
                        }
                        return Ql(c, [{
                            key: "makePlaneVertexShader",
                            value: function () {
                                return this.makeShader(t.VERTEX_SHADER, Kl)
                            }
                        }, {
                            key: "unitPlaneAttributes",
                            value: function () {
                                return {
                                    a_Position: new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                                    a_TexCoord: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
                                }
                            }
                        }, {
                            key: "makeShader",
                            value: function (e, r) {
                                var i = t.createShader(e);
                                u("createShader:".concat(e)), t.shaderSource(i, r), u("shaderSource:".concat(e)), t.compileShader(i), u("compileShader:".concat(e));
                                var o = t.getShaderParameter(i, t.COMPILE_STATUS);
                                if (u("getShaderParameter:".concat(e)), !o) {
                                    var a = t.getShaderInfoLog(i);
                                    return u("getShaderInfoLog:".concat(e)), t.deleteShader(i), u("deleteShader:".concat(e)), n(a), null
                                }
                                return i
                            }
                        }, {
                            key: "makeProgram",
                            value: function (e) {
                                var r = t.createProgram();
                                u("createProgram"), e.forEach((function (n) {
                                    t.attachShader(r, n), u("attachShader")
                                })), t.linkProgram(r), u("linkProgram");
                                var i = t.getProgramParameter(r, t.LINK_STATUS);
                                if (u("getProgramParameter"), !i) {
                                    var o = t.getProgramInfoLog(r);
                                    return u("getProgramInfoLog"), t.deleteProgram(r), u("deleteProgram"), n(o), null
                                }
                                return r
                            }
                        }, {
                            key: "makeFramebufferTexture2D",
                            value: function (n) {
                                var e = t.createFramebuffer();
                                u("createFramebuffer"), t.bindFramebuffer(t.FRAMEBUFFER, e), u("bindFramebuffer"), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0), u("framebufferTexture2D");
                                var r = t.checkFramebufferStatus(t.FRAMEBUFFER);
                                return u("checkFramebufferStatus"), r !== t.FRAMEBUFFER_COMPLETE ? (t.deleteFramebuffer(e), u("deleteFramebuffer"), callback("framebuffer: " + r), null) : e
                            }
                        }, {
                            key: "uniforms",
                            value: function (n, e) {
                                var r = {},
                                    i = t.getProgramParameter(n, t.ACTIVE_UNIFORMS);
                                return u("getProgramParameter"), a.range(i).map((function (e) {
                                    var r = t.getActiveUniform(n, e);
                                    return u("getActiveUniform:".concat(e)), r
                                })).filter((function (t) {
                                    return !!t
                                })).forEach((function (e) {
                                    var i = t.getUniformLocation(n, e.name);
                                    u("getUniformLocation:".concat(e.name)), r[e.name] = {
                                        name: e.name,
                                        type: e.type,
                                        size: e.size,
                                        location: i
                                    }
                                })), new(function () {
                                    function n() {
                                        Jl(this, n)
                                    }
                                    return Ql(n, [{
                                        key: "decls",
                                        value: function () {
                                            return r
                                        }
                                    }, {
                                        key: "set",
                                        value: function (n) {
                                            return Object.keys(n).forEach((function (i) {
                                                ! function (n, i) {
                                                    var o = r[n] || {},
                                                        a = o.location;
                                                    switch (o.type) {
                                                        case t.FLOAT:
                                                            return Fr.l(i) ? t.uniform1fv(a, i) : t.uniform1f(a, i);
                                                        case t.FLOAT_VEC2:
                                                            return t.uniform2fv(a, i);
                                                        case t.FLOAT_VEC3:
                                                            return t.uniform3fv(a, i);
                                                        case t.FLOAT_VEC4:
                                                            return t.uniform4fv(a, i);
                                                        case t.INT:
                                                            return Fr.l(i) ? t.uniform1iv(a, i) : t.uniform1i(a, i);
                                                        case t.INT_VEC2:
                                                            return t.uniform2iv(a, i);
                                                        case t.INT_VEC3:
                                                            return t.uniform3iv(a, i);
                                                        case t.INT_VEC4:
                                                            return t.uniform4iv(a, i);
                                                        case t.SAMPLER_2D:
                                                            var u = e[i];
                                                            return u ? void t.uniform1i(a, u.unit) : void ts.warn("uniform '".concat(n, "' refers to unknown texture '").concat(i, "'"));
                                                        default:
                                                            ts.warn("uniform '".concat(n, "' has unsupported type: ").concat(JSON.stringify(o)))
                                                    }
                                                }(i, n[i]), u("assign-uniform:".concat(i))
                                            })), this
                                        }
                                    }]), n
                                }())
                            }
                        }, {
                            key: "attribs",
                            value: function (n) {
                                var e = {},
                                    r = t.getProgramParameter(n, t.ACTIVE_ATTRIBUTES);
                                return u("getProgramParameter"), a.range(r).map((function (e) {
                                    var r = t.getActiveAttrib(n, e);
                                    return u("getActiveAttrib:".concat(e)), r
                                })).filter((function (t) {
                                    return !!t
                                })).forEach((function (r) {
                                    var i = t.getAttribLocation(n, r.name);
                                    u("getAttribLocation:".concat(r.name)), e[r.name] = {
                                        name: r.name,
                                        type: r.type,
                                        size: r.size,
                                        location: i
                                    }
                                })), new(function () {
                                    function n() {
                                        Jl(this, n)
                                    }
                                    return Ql(n, [{
                                        key: "decls",
                                        value: function () {
                                            return e
                                        }
                                    }, {
                                        key: "set",
                                        value: function (n) {
                                            return Object.keys(n).forEach((function (r) {
                                                ! function (n, r) {
                                                    var i = e[n] || {},
                                                        o = i.location;
                                                    switch (i.type) {
                                                        case t.FLOAT_VEC2:
                                                            var a = t.createBuffer();
                                                            return u("createBuffer:".concat(n)), t.bindBuffer(t.ARRAY_BUFFER, a), u("bindBuffer:".concat(n)), t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW), u("bufferData:".concat(n)), t.enableVertexAttribArray(o), u("enableVertexAttribArray:".concat(n)), t.vertexAttribPointer(o, 2, t.FLOAT, !1, 0, 0);
                                                        default:
                                                            ts.warn("attribute '".concat(n, "' has unsupported type: ").concat(JSON.stringify(i)))
                                                    }
                                                }(r, n[r]), u("assign-attrib:".concat(r))
                                            })), this
                                        }
                                    }]), n
                                }())
                            }
                        }, {
                            key: "makeTexture2D",
                            value: function (n) {
                                var a = t.createTexture();
                                u("createTexture"), t.activeTexture(t.TEXTURE0), u("activeTexture"), t.bindTexture(t.TEXTURE_2D, a), u("bindTexture");
                                var c = Object.assign({}, e, i, n),
                                    l = c.format,
                                    s = c.type,
                                    f = c.width,
                                    h = c.height,
                                    d = c.data;
                                return r.forEach((function (n) {
                                    t.pixelStorei(t[n], c[n]), u("pixelStorei:".concat(n))
                                })), t.texImage2D(t.TEXTURE_2D, 0, l, f, h, 0, l, s, d), u("texImage2D"), o.forEach((function (n) {
                                    t.texParameteri(t.TEXTURE_2D, t[n], c[n]), u("texParameteri:".concat(n))
                                })), t.bindTexture(t.TEXTURE_2D, null), u("bindTexture"), a
                            }
                        }, {
                            key: "updateTexture2D",
                            value: function (n, a) {
                                t.activeTexture(t.TEXTURE0), u("activeTexture"), t.bindTexture(t.TEXTURE_2D, n), u("bindTexture");
                                var c = Object.assign({}, e, i, a),
                                    l = c.format,
                                    s = c.type,
                                    f = c.width,
                                    h = c.height,
                                    d = c.data;
                                return r.forEach((function (n) {
                                    t.pixelStorei(t[n], c[n]), u("pixelStorei:".concat(n))
                                })), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, f, h, l, s, d), u("texSubImage2D"), o.forEach((function (n) {
                                    t.texParameteri(t.TEXTURE_2D, t[n], c[n]), u("texParameteri:".concat(n))
                                })), t.bindTexture(t.TEXTURE_2D, null), u("bindTexture"), n
                            }
                        }, {
                            key: "updateTexture2DParams",
                            value: function (n, e, r) {
                                for (var a = !1, c = 0; c < o.length; c++) {
                                    var l = o[c],
                                        s = i[l],
                                        f = e[l] || s;
                                    f !== (r[l] || s) && (a || (a = !0, t.activeTexture(t.TEXTURE0), u("activeTexture"), t.bindTexture(t.TEXTURE_2D, n), u("bindTexture")), t.texParameteri(t.TEXTURE_2D, t[l], f), u("texParameteri:".concat(l)))
                                }
                                return a && (t.bindTexture(t.TEXTURE_2D, null), u("bindTexture")), a
                            }
                        }, {
                            key: "context",
                            get: function () {
                                return t
                            }
                        }]), c
                    }())
                }
            }]), t
        }(),
        rs = function (t, n, e, r, i) {
            var o = void 0 !== n,
                u = o ? n : t,
                c = o ? t.getContext("2d") : void 0,
                l = es.getWebGL(u),
                s = es.attach(l);
            l.getExtension("OES_texture_float"), l.getExtension("OES_texture_float_linear"), l.disable(l.DEPTH_TEST), l.clearColor(0, 0, 0, 0);
            var f = s.makeShader(l.VERTEX_SHADER, es.planeVertexShader()),
                h = {},
                d = a.range(8).map((function () {
                    return null
                })),
                p = 1,
                v = [],
                m = null,
                y = -1,
                g = -1;

            function b(t) {
                return Object.keys(t).map((function (n) {
                    return h[n] = function (t, n) {
                        if (n) {
                            var e = n.def;
                            if (t.hash === e.hash) return s.updateTexture2DParams(n.texture, t, e) ? {
                                def: a.omit(t, "data"),
                                texture: n.texture
                            } : n;
                            if (t.width === e.width && t.height === e.height && t.format === e.format && t.type === e.type) return s.updateTexture2D(n.texture, t), {
                                def: a.omit(t, "data"),
                                texture: n.texture
                            };
                            l.deleteTexture(n.texture)
                        }
                        var r = s.makeTexture2D(t);
                        return {
                            def: a.omit(t, "data"),
                            texture: r
                        }
                    }(t[n], h[n])
                }))
            }

            function w(t) {
                var n = l.getError();
                if (0 !== n) throw new Error("".concat(n, ":").concat(t))
            }

            function _() {
                var n = r();
                ! function (n) {
                    var e = Math.round(n.width * n.pixelRatio),
                        r = Math.round(n.height * n.pixelRatio);
                    e === y && r === g || (t.width = u.width = e, t.height = u.height = r, l.viewport(0, 0, e, r), y = e, g = r)
                }(n), w("fast_resize"), l.clear(l.COLOR_BUFFER_BIT), c && Hr(c), w("fast_clear");
                var _ = i(s);
                if (0 === _.length) return !1;
                var x = a.flatten(_.map((function (t) {
                    return t.shaderSource()
                })));
                for (Fr.b(v, x) || function (t) {
                        var n = "precision highp float;\nprecision highp sampler2D;\n\nconst float TAU = 6.283185307179586;\nconst float PI = 3.141592653589793;\n" + t.join("") + "\nuniform float u_Detail;\n\nvoid main() {\n    vec2 coord = invert(gl_FragCoord.xy / u_Detail);\n    vec2 st = grid(coord);\n    float v = lookup(st);\n    lowp vec4 color = colorize(v);\n    gl_FragColor = color;\n}\n",
                            e = s.makeShader(l.FRAGMENT_SHADER, n),
                            r = s.makeProgram([f, e]);
                        s.attribs(r).set(es.unitPlaneAttributes()), v = t, r, m = s.uniforms(r, h), l.useProgram(r)
                    }(x), w("fast_program"), p = 1, _.forEach((function (t) {
                        b(t.textures()).forEach((function (t) {
                            var n = t.texture;
                            d[p] !== n && (d[p] = n, l.activeTexture(l.TEXTURE0 + p), l.bindTexture(l.TEXTURE_2D, n)), t.unit = p++
                        }))
                    })); p < d.length;) d[p++] = null;
                return w("fast_textures"), _.forEach((function (t) {
                    return m.set(t.uniforms())
                })), m.set({
                    u_Detail: n.pixelRatio,
                    u_Alpha: e()
                }), w("fast_uniforms"), l.drawArrays(l.TRIANGLES, 0, 6), w("fast_draw"), o && c.drawImage(u, 0, 0), !0
            }
            return {
                draw: function () {
                    try {
                        var t = _();
                        return w("fast_done"), {
                            pass: t
                        }
                    } catch (t) {
                        return {
                            pass: !1,
                            err: t.toString()
                        }
                    }
                }
            }
        },
        is = ja(150, 0, 0, 150, 150),
        os = fu({
            start: 0,
            delta: 120,
            size: 3
        }, {
            start: 60,
            delta: -60,
            size: 3
        }),
        as = new Float32Array([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 8, 0, 6, 0, 8, 0, 7e37, 7e37]),
        us = mu(os, as),
        cs = Qc([0, 7], [
            [0, [255, 255, 255]],
            [1, [0, 0, 255]],
            [2, [0, 255, 0]],
            [3, [0, 255, 255]],
            [4, [255, 0, 0]],
            [5, [255, 0, 255]],
            [6, [255, 255, 0]],
            [7, [255, 255, 255]]
        ], 8);

    function ls(t, n, e) {
        var r = new Uint8Array(4);
        return t.readPixels(n, e, 1, 1, t.RGBA, t.UNSIGNED_BYTE, r), r
    }
    var ss = zl({
        hd: void 0,
        topology: void 0
    });

    function fs(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                return e
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function hs(t, n) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, n) {
            if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
            var e = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return e
        }(t, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ds(t) {
        var n = t.log,
            e = t.bridge;
        n.debug("start...");
        var u, c, l, s, f = [7e37, 7e37, 7e37],
            h = [7e37, 7e37, 0],
            m = [0, 0, 0, 0],
            y = Fr.D(),
            M = (u = p.a("#status"), c = p.a("#progress"), l = "▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫".length, s = Fr.c(e, "showMessage") || function (t) {
                u.text(t)
            }, {
                status: function (t) {
                    return u.classed("bad") ? u : s(t, !1)
                },
                error: function (t, e) {
                    var r = t.status ? "".concat(t.status, " ").concat(t.message) : t.message || t;
                    switch (t.status) {
                        case -1:
                            r = "Server Down";
                            break;
                        case 404:
                            r = "No Data"
                    }
                    e && n.error("context", e + ""), n.error("error", t), t.stack && n.error("stack", t.stack), u.classed("bad", !0), s(r, !0)
                },
                reset: function () {
                    u.classed("bad", !1), s("", !1)
                },
                progress: Fr.c(e, "showProgress") || function (t) {
                    if (0 <= t && t < 100) {
                        var n = Math.ceil(t / 100 * l),
                            e = "▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪".substr(0, n) + "▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫".substr(0, l - n);
                        return c.classed("hidden", !1).text(e)
                    }
                    return c.classed("hidden", !0).text("")
                }
            });

        function T(t, n) {
            return function (t) {
                var n = t.name,
                    e = t.initial,
                    r = t.events,
                    i = (void 0 === r ? [] : r).concat(["submit", "update", "reject", "fail"]),
                    o = d.apply(void 0, i);

                function u() {
                    return function t() {
                        return t.requested = !0, s
                    }
                }
                var c = e,
                    l = a.debounce((function (t, n) {
                        var e;

                        function r(t) {
                            o.call("fail", null, t, s)
                        }
                        try {
                            e = n[0], Promise.all(a.tail(n)).then((function (n) {
                                return t.requested ? null : a.isFunction(e) ? e.apply(s, n) : e
                            })).then((function (n) {
                                t.requested || (c = n, o.call("update", null, n, s))
                            }), (function (n) {
                                t.requested || o.call("reject", null, n, s)
                            })).catch(r), o.call("submit", null, s)
                        } catch (t) {
                            r(t)
                        }
                    }), 0),
                    s = Object.assign(o, {
                        value: function () {
                            return c
                        },
                        cancel: u(),
                        submit: function (t, n, e, r) {
                            return this.cancel(), l(this.cancel = u(), arguments), this
                        },
                        toString: function () {
                            return n
                        }
                    });
                return s
            }({
                name: t,
                events: n
            }).on("reject.affects-report fail.affects-report", M.error)
        }
        var S = function () {
                var t, n = d("moveStart", "move", "moveEnd", "click"),
                    e = null,
                    r = {
                        time: 0,
                        mouse: [0, 0]
                    };

                function i(n, e) {
                    return {
                        type: "click",
                        startMouse: n,
                        startScale: e,
                        manipulator: t.manipulator(n, e)
                    }
                }

                function a() {
                    e = e || i(g(this), t.projection.scale())
                }

                function u() {
                    var r = v.c.transform || {},
                        a = g(this),
                        u = Fr.e(r.k, t.projection.scale());
                    if ("click" === (e = e || i(a, 1)).type) {
                        var c = Object(o.b)(a, e.startMouse);
                        if (u === e.startScale && (c < 6 || isNaN(c))) return;
                        n.call("moveStart"), e.type = "drag"
                    }(u !== e.startScale || isNaN(a[0])) && (e.type = "zoom"), e.manipulator.move("zoom" === e.type ? null : a, u), n.call("move")
                }

                function c() {
                    null !== e && (e.manipulator.end(), "click" === e.type ? (Date.now() - r.time > 500 || Object(o.b)(r.mouse, e.startMouse) >= 6) && (n.call("click", null, e.startMouse, t.projection.invert(e.startMouse) || []), r = {
                        time: Date.now(),
                        mouse: e.startMouse
                    }) : s(), e = null)
                }
                var l = null;

                function s() {
                    l && clearTimeout(l), l = setTimeout((function () {
                        l = null, (!e || "drag" !== e.type && "zoom" !== e.type) && (Dl.save({
                            orientation: t.orientation()
                        }, {
                            source: "moveEnd"
                        }), n.call("moveEnd"))
                    }), 750)
                }
                var f = function () {
                        var t, n, e = Un,
                            r = Hn,
                            i = Bn,
                            o = Xn,
                            a = Wn,
                            u = [0, 1 / 0],
                            c = [
                                [-1 / 0, -1 / 0],
                                [1 / 0, 1 / 0]
                            ],
                            l = 250,
                            s = k,
                            f = d("start", "zoom", "end"),
                            h = 0;

                        function m(t) {
                            t.property("__zoom", Gn).on("wheel.zoom", j).on("mousedown.zoom", A).on("dblclick.zoom", O).filter(a).on("touchstart.zoom", N).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", R).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                        }

                        function y(t, n) {
                            return (n = Math.max(u[0], Math.min(u[1], n))) === t.k ? t : new Ln(n, t.x, t.y)
                        }

                        function b(t, n, e) {
                            var r = n[0] - e[0] * t.k,
                                i = n[1] - e[1] * t.k;
                            return r === t.x && i === t.y ? t : new Ln(t.k, r, i)
                        }

                        function w(t) {
                            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                        }

                        function M(t, n, e) {
                            t.on("start.zoom", (function () {
                                T(this, arguments).start()
                            })).on("interrupt.zoom end.zoom", (function () {
                                T(this, arguments).end()
                            })).tween("zoom", (function () {
                                var t = this,
                                    i = arguments,
                                    o = T(t, i),
                                    a = r.apply(t, i),
                                    u = null == e ? w(a) : "function" == typeof e ? e.apply(t, i) : e,
                                    c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                                    l = t.__zoom,
                                    f = "function" == typeof n ? n.apply(t, i) : n,
                                    h = s(l.invert(u).concat(c / l.k), f.invert(u).concat(c / f.k));
                                return function (t) {
                                    if (1 === t) t = f;
                                    else {
                                        var n = h(t),
                                            e = c / n[2];
                                        t = new Ln(e, u[0] - n[0] * e, u[1] - n[1] * e)
                                    }
                                    o.zoom(null, t)
                                }
                            }))
                        }

                        function T(t, n, e) {
                            return !e && t.__zooming || new S(t, n)
                        }

                        function S(t, n) {
                            this.that = t, this.args = n, this.active = 0, this.extent = r.apply(t, n), this.taps = 0
                        }

                        function j() {
                            if (e.apply(this, arguments)) {
                                var t = T(this, arguments),
                                    n = this.__zoom,
                                    r = Math.max(u[0], Math.min(u[1], n.k * Math.pow(2, o.apply(this, arguments)))),
                                    a = g(this);
                                if (t.wheel) t.mouse[0][0] === a[0] && t.mouse[0][1] === a[1] || (t.mouse[1] = n.invert(t.mouse[0] = a)), clearTimeout(t.wheel);
                                else {
                                    if (n.k === r) return;
                                    t.mouse = [a, n.invert(a)], rt(this), t.start()
                                }
                                qn(), t.wheel = setTimeout(l, 150), t.zoom("mouse", i(b(y(n, r), t.mouse[0], t.mouse[1]), t.extent, c))
                            }

                            function l() {
                                t.wheel = null, t.end()
                            }
                        }

                        function A() {
                            if (!n && e.apply(this, arguments)) {
                                var t = T(this, arguments, !0),
                                    r = Object(p.a)(v.c.view).on("mousemove.zoom", l, !0).on("mouseup.zoom", s, !0),
                                    o = g(this),
                                    a = v.c.clientX,
                                    u = v.c.clientY;
                                _(v.c.view), Dn(), t.mouse = [o, this.__zoom.invert(o)], rt(this), t.start()
                            }

                            function l() {
                                if (qn(), !t.moved) {
                                    var n = v.c.clientX - a,
                                        e = v.c.clientY - u;
                                    t.moved = n * n + e * e > h
                                }
                                t.zoom("mouse", i(b(t.that.__zoom, t.mouse[0] = g(t.that), t.mouse[1]), t.extent, c))
                            }

                            function s() {
                                r.on("mousemove.zoom mouseup.zoom", null), x(v.c.view, t.moved), qn(), t.end()
                            }
                        }

                        function O() {
                            if (e.apply(this, arguments)) {
                                var t = this.__zoom,
                                    n = g(this),
                                    o = t.invert(n),
                                    a = t.k * (v.c.shiftKey ? .5 : 2),
                                    u = i(b(y(t, a), n, o), r.apply(this, arguments), c);
                                qn(), l > 0 ? Object(p.a)(this).transition().duration(l).call(M, u, n) : Object(p.a)(this).call(m.transform, u)
                            }
                        }

                        function N() {
                            if (e.apply(this, arguments)) {
                                var n, r, i, o, a = v.c.touches,
                                    u = a.length,
                                    c = T(this, arguments, v.c.changedTouches.length === u);
                                for (Dn(), r = 0; r < u; ++r) i = a[r], o = [o = E(this, a, i.identifier), this.__zoom.invert(o), i.identifier], c.touch0 ? c.touch1 || c.touch0[2] === o[2] || (c.touch1 = o, c.taps = 0) : (c.touch0 = o, n = !0, c.taps = 1 + !!t);
                                t && (t = clearTimeout(t)), n && (c.taps < 2 && (t = setTimeout((function () {
                                    t = null
                                }), 500)), rt(this), c.start())
                            }
                        }

                        function P() {
                            if (this.__zooming) {
                                var n, e, r, o, a = T(this, arguments),
                                    u = v.c.changedTouches,
                                    l = u.length;
                                for (qn(), t && (t = clearTimeout(t)), a.taps = 0, n = 0; n < l; ++n) e = u[n], r = E(this, u, e.identifier), a.touch0 && a.touch0[2] === e.identifier ? a.touch0[0] = r : a.touch1 && a.touch1[2] === e.identifier && (a.touch1[0] = r);
                                if (e = a.that.__zoom, a.touch1) {
                                    var s = a.touch0[0],
                                        f = a.touch0[1],
                                        h = a.touch1[0],
                                        d = a.touch1[1],
                                        p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
                                        m = (m = d[0] - f[0]) * m + (m = d[1] - f[1]) * m;
                                    e = y(e, Math.sqrt(p / m)), r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2], o = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2]
                                } else {
                                    if (!a.touch0) return;
                                    r = a.touch0[0], o = a.touch0[1]
                                }
                                a.zoom("touch", i(b(e, r, o), a.extent, c))
                            }
                        }

                        function R() {
                            if (this.__zooming) {
                                var t, e, r = T(this, arguments),
                                    i = v.c.changedTouches,
                                    o = i.length;
                                for (Dn(), n && clearTimeout(n), n = setTimeout((function () {
                                        n = null
                                    }), 500), t = 0; t < o; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                                if (r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0) r.touch0[1] = this.__zoom.invert(r.touch0[0]);
                                else if (r.end(), 2 === r.taps) {
                                    var a = Object(p.a)(this).on("dblclick.zoom");
                                    a && a.apply(this, arguments)
                                }
                            }
                        }
                        return m.transform = function (t, n, e) {
                            var r = t.selection ? t.selection() : t;
                            r.property("__zoom", Gn), t !== r ? M(t, n, e) : r.interrupt().each((function () {
                                T(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                            }))
                        }, m.scaleBy = function (t, n, e) {
                            m.scaleTo(t, (function () {
                                var t = this.__zoom.k,
                                    e = "function" == typeof n ? n.apply(this, arguments) : n;
                                return t * e
                            }), e)
                        }, m.scaleTo = function (t, n, e) {
                            m.transform(t, (function () {
                                var t = r.apply(this, arguments),
                                    o = this.__zoom,
                                    a = null == e ? w(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                                    u = o.invert(a),
                                    l = "function" == typeof n ? n.apply(this, arguments) : n;
                                return i(b(y(o, l), a, u), t, c)
                            }), e)
                        }, m.translateBy = function (t, n, e) {
                            m.transform(t, (function () {
                                return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), c)
                            }))
                        }, m.translateTo = function (t, n, e, o) {
                            m.transform(t, (function () {
                                var t = r.apply(this, arguments),
                                    a = this.__zoom,
                                    u = null == o ? w(t) : "function" == typeof o ? o.apply(this, arguments) : o;
                                return i(In.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
                            }), o)
                        }, S.prototype = {
                            start: function () {
                                return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
                            },
                            zoom: function (t, n) {
                                return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                            },
                            end: function () {
                                return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
                            },
                            emit: function (t) {
                                Object(v.a)(new Cn(m, t, this.that.__zoom), f.apply, f, [t, this.that, this.args])
                            }
                        }, m.wheelDelta = function (t) {
                            return arguments.length ? (o = "function" == typeof t ? t : Fn(+t), m) : o
                        }, m.filter = function (t) {
                            return arguments.length ? (e = "function" == typeof t ? t : Fn(!!t), m) : e
                        }, m.touchable = function (t) {
                            return arguments.length ? (a = "function" == typeof t ? t : Fn(!!t), m) : a
                        }, m.extent = function (t) {
                            return arguments.length ? (r = "function" == typeof t ? t : Fn([
                                [+t[0][0], +t[0][1]],
                                [+t[1][0], +t[1][1]]
                            ]), m) : r
                        }, m.scaleExtent = function (t) {
                            return arguments.length ? (u[0] = +t[0], u[1] = +t[1], m) : [u[0], u[1]]
                        }, m.translateExtent = function (t) {
                            return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], m) : [
                                [c[0][0], c[0][1]],
                                [c[1][0], c[1][1]]
                            ]
                        }, m.constrain = function (t) {
                            return arguments.length ? (i = t, m) : i
                        }, m.duration = function (t) {
                            return arguments.length ? (l = +t, m) : l
                        }, m.interpolate = function (t) {
                            return arguments.length ? (s = t, m) : s
                        }, m.on = function () {
                            var t = f.on.apply(f, arguments);
                            return t === f ? m : t
                        }, m.clickDistance = function (t) {
                            return arguments.length ? (h = (t = +t) * t, m) : Math.sqrt(h)
                        }, m
                    }().on("start", a).on("zoom", u).on("end", c),
                    h = function () {
                        var t, n, e, r, i = Yn,
                            o = Kn,
                            a = Jn,
                            u = Zn,
                            c = {},
                            l = d("start", "drag", "end"),
                            s = 0,
                            f = 0;

                        function h(t) {
                            t.on("mousedown.drag", m).filter(u).on("touchstart.drag", T).on("touchmove.drag", k).on("touchend.drag touchcancel.drag", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                        }

                        function m() {
                            if (!r && i.apply(this, arguments)) {
                                var a = j("mouse", o.apply(this, arguments), g, this, arguments);
                                a && (Object(p.a)(v.c.view).on("mousemove.drag", y, !0).on("mouseup.drag", M, !0), _(v.c.view), b(), e = !1, t = v.c.clientX, n = v.c.clientY, a("start"))
                            }
                        }

                        function y() {
                            if (w(), !e) {
                                var r = v.c.clientX - t,
                                    i = v.c.clientY - n;
                                e = r * r + i * i > f
                            }
                            c.mouse("drag")
                        }

                        function M() {
                            Object(p.a)(v.c.view).on("mousemove.drag mouseup.drag", null), x(v.c.view, e), w(), c.mouse("end")
                        }

                        function T() {
                            if (i.apply(this, arguments)) {
                                var t, n, e = v.c.changedTouches,
                                    r = o.apply(this, arguments),
                                    a = e.length;
                                for (t = 0; t < a; ++t)(n = j(e[t].identifier, r, E, this, arguments)) && (b(), n("start"))
                            }
                        }

                        function k() {
                            var t, n, e = v.c.changedTouches,
                                r = e.length;
                            for (t = 0; t < r; ++t)(n = c[e[t].identifier]) && (w(), n("drag"))
                        }

                        function S() {
                            var t, n, e = v.c.changedTouches,
                                i = e.length;
                            for (r && clearTimeout(r), r = setTimeout((function () {
                                    r = null
                                }), 500), t = 0; t < i; ++t)(n = c[e[t].identifier]) && (b(), n("end"))
                        }

                        function j(t, n, e, r, i) {
                            var o, u, f, d = e(n, t),
                                p = l.copy();
                            if (Object(v.a)(new $n(h, "beforestart", o, t, s, d[0], d[1], 0, 0, p), (function () {
                                    return null != (v.c.subject = o = a.apply(r, i)) && (u = o.x - d[0] || 0, f = o.y - d[1] || 0, !0)
                                }))) return function a(l) {
                                var m, y = d;
                                switch (l) {
                                    case "start":
                                        c[t] = a, m = s++;
                                        break;
                                    case "end":
                                        delete c[t], --s;
                                    case "drag":
                                        d = e(n, t), m = s
                                }
                                Object(v.a)(new $n(h, l, o, t, m, d[0] + u, d[1] + f, d[0] - y[0], d[1] - y[1], p), p.apply, p, [l, r, i])
                            }
                        }
                        return h.filter = function (t) {
                            return arguments.length ? (i = "function" == typeof t ? t : Vn(!!t), h) : i
                        }, h.container = function (t) {
                            return arguments.length ? (o = "function" == typeof t ? t : Vn(t), h) : o
                        }, h.subject = function (t) {
                            return arguments.length ? (a = "function" == typeof t ? t : Vn(t), h) : a
                        }, h.touchable = function (t) {
                            return arguments.length ? (u = "function" == typeof t ? t : Vn(!!t), h) : u
                        }, h.on = function () {
                            var t = l.on.apply(l, arguments);
                            return t === l ? h : t
                        }, h.clickDistance = function (t) {
                            return arguments.length ? (f = (t = +t) * t, h) : Math.sqrt(f)
                        }, h
                    }().on("start", a).on("drag", u).on("end", c),
                    m = p.a("#display");
                Fr.q() ? m.on("click", (function () {
                    a.call(this), c.call(this)
                })) : Fr.o() && !Fr.s() ? m.call(h) : m.call(f).on("wheel", (function () {
                    return v.c.preventDefault()
                }));

                function T(e, r) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    t && "moveEnd" !== i.source && (n.call("moveStart"), t.orientation(Dl.get("orientation"), y), f.transform(m, In.scale(t.projection.scale())), n.call("moveEnd"))
                }
                return p.a("#show-location").on("click", (function () {
                    navigator.geolocation && (M.status("Finding current position..."), navigator.geolocation.getCurrentPosition((function (t) {
                        M.status(""), D(t.coords.longitude, t.coords.latitude)
                    }), M.error))
                })), Dl.on("change:orientation.?", T), Object.assign(n, {
                    globe: function (n) {
                        return n && (t = n, f.scaleExtent(t.scaleExtent()), T()), n ? this : t
                    },
                    cancelMove: function () {
                        c()
                    },
                    hotkey: function (e, r) {
                        if ("zoom" === e) return f.scaleBy(m, r), !0;
                        l || n.call("moveStart");
                        var i = t.projection,
                            o = i.rotate(),
                            a = r / 8;
                        switch (e) {
                            case "left":
                                i.rotate([o[0] + a, o[1]]);
                                break;
                            case "right":
                                i.rotate([o[0] - a, o[1]]);
                                break;
                            case "up":
                                i.rotate([o[0], o[1] - a]);
                                break;
                            case "down":
                                i.rotate([o[0], o[1] + a])
                        }
                        return n.call("move"), s(), !0
                    }
                })
            }(),
            j = T("mesh"),
            A = T("globe"),
            O = T("grid"),
            N = T("renderer", ["start", "render", "redraw"]),
            P = T("field"),
            R = T("fastoverlay"),
            z = T("animator"),
            F = T("overlay"),
            C = T("overlayGrid"),
            L = T("button");

        function I(t) {
            var n = A.value();
            if (n) {
                var e = n.locate(t);
                e && (n.projection.rotate(e), Dl.save({
                    orientation: n.orientation()
                }))
            }
        }

        function D(t, n) {
            var e = +t,
                r = +n,
                i = [e, r];
            e == e && r == r ? (it(null, i), I(i)) : ot()
        }

        function q(t) {
            var e = this.cancel;
            M.status("Downloading...");
            var r = [];
            return r.push(zu(t)), "tara" === Fr.A() && (r.push(zu(Uu("tara-plan-20170829.json"))), r.push(zu(Uu("tara-track.json")))), Promise.all(r).then((function (t) {
                var r = hs(t, 3),
                    i = r[0],
                    o = r[1],
                    a = r[2];
                if (e.requested) return null;
                n.time("building meshes");
                var u = i.objects,
                    c = Pr(i, Fr.t() ? u.coastline_tiny : u.coastline_110m),
                    l = Pr(i, Fr.t() ? u.coastline_110m : u.coastline_50m),
                    s = Pr(i, Fr.t() ? u.lakes_tiny : u.lakes_110m),
                    f = Pr(i, Fr.t() ? u.lakes_110m : u.lakes_50m),
                    h = Pr(i, Fr.t() ? u.rivers_tiny : u.rivers_110m),
                    d = Pr(i, Fr.t() ? u.rivers_110m : u.rivers_50m);
                return n.timeEnd("building meshes"), {
                    coastLo: c,
                    coastHi: l,
                    lakesLo: s,
                    lakesHi: f,
                    riversLo: h,
                    riversHi: d,
                    tara: {
                        plan: o,
                        track: a
                    }
                }
            }))
        }

        function U(t) {
            var n = r[t];
            return n ? n(y) : Promise.reject("Unknown projection: " + t)
        }
        var H = 0,
            G = NaN;

        function X(t) {
            M.status("Downloading..."), n.time("build grids");
            var e = this.cancel;
            H++;
            var r = Object(Fr.F)(Dl.getAll(), ss.getAll());
            return Promise.all(Al.productsFor(r)).then((function (n) {
                return function (t, n) {
                    return Iu(t.map((function (t) {
                        return {
                            product: t,
                            paths: t.paths
                        }
                    })), n)
                }(n, e).then((function (n) {
                    return {
                        primaryGrid: n[0],
                        overlayGrid: n[1] || n[0],
                        isNewPrimaryGrid: t
                    }
                })).catch((function (e) {
                    return M.error(e), {
                        primaryGrid: n[1] || n[0],
                        overlayGrid: n[1] || n[0],
                        isNewPrimaryGrid: t
                    }
                }))
            })).finally((function () {
                H--, n.timeEnd("build grids"), clearInterval(G), G = "current" === Dl.get("date") ? setInterval((function () {
                    return O.submit(X, !0)
                }), 60 * i.b) : NaN
            }))
        }

        function W(t) {
            if (H > 0) n.debug("Download in progress--ignoring nav request.");
            else {
                var e = O.value().overlayGrid.navigate(t);
                e && Dl.save(Fr.f(e))
            }
        }

        function B(t, e) {
            if (!t || !e) return null;
            M.status("Rendering Globe..."), n.time("rendering map");
            var r = p.a("#map").node().getContext("2d"),
                i = p.a("#foreground").node().getContext("2d"),
                o = p.a("#annotation"),
                u = Dl.get("orientation");
            Fr.y(o.node()), e.orientation(u, y);
            var c = jr().projection(e.projection).pointRadius((function (t) {
                return t.size || 7
            }));
            "tara" === Fr.A() && function (t, n, e) {
                var r = t.append("g"),
                    i = {
                        type: "LineString",
                        coordinates: n.plan.coordinates.filter((function (t, n) {
                            return n > 253
                        }))
                    };
                r.append("path").attr("class", "tara-route tara-plan").datum(i);
                var o = n.track.geometries;
                o = o.filter((function (t, n) {
                    return n > o.length - 10 || n % 3 == 0
                }));
                var u = {
                        type: "LineString",
                        coordinates: a.map(o, a.property("coordinates"))
                    },
                    c = {
                        type: "LineString",
                        coordinates: u.coordinates.slice(0, 3400)
                    },
                    l = {
                        type: "LineString",
                        coordinates: u.coordinates.slice(3400)
                    };
                r.append("path").attr("class", "tara-route tara-track-border").datum(u), r.append("path").attr("class", "tara-route tara-track-old").datum(c), r.append("path").attr("class", "tara-route tara-track").datum(l);
                var s = {
                    type: "Point",
                    coordinates: a.last(u.coordinates),
                    size: 4
                };
                "" !== e && ",," !== e.substr(0, 2) || I(s.coordinates), r.append("path").attr("class", "tara-loc").datum(s);
                var f = a.last(o),
                    h = {
                        date: f.date,
                        heading: +Fr.e(f.heading, NaN),
                        speed: 3.6 * +Fr.e(f.speed, NaN),
                        air_temp: +Fr.e(f.air_temp, NaN),
                        water_temp: +Fr.e(f.water_temp, NaN),
                        pressure: +Fr.e(f.pressure, NaN)
                    },
                    d = {
                        date: Cr.g(Cr.c(h.date), "{yyyy}-{MM}-{dd} {hh}:{mm}"),
                        heading: isNaN(h.heading) ? "N/A" : h.heading.toFixed(0),
                        speed: isNaN(h.speed) ? "N/A" : h.speed.toFixed(1),
                        air_temp: isNaN(h.air_temp) ? "N/A" : h.air_temp.toFixed(1),
                        water_temp: isNaN(h.water_temp) ? "N/A" : h.water_temp.toFixed(1),
                        pressure: isNaN(h.pressure) ? "N/A" : h.pressure.toFixed(0)
                    },
                    v = p.a("#tara-stats");
                v.selectAll("*").remove(), v.append("p").text("Tara stats:"), v.append("p").classed("stat", !0).text(d.heading + "° @ " + d.speed + " km/h"), v.append("p").classed("stat", !0).text(d.air_temp + " °C (air)"), v.append("p").classed("stat", !0).text(d.water_temp + " °C (water)"), v.append("p").classed("stat", !0).text(d.pressure + " hPa"), v.append("p").text(d.date), v.selectAll(".stat").attr("style", "padding-left: 1em"), v.classed("hidden", !1)
            }(o, t.tara, u), et();
            var l = a.throttle((function t() {
                    o.selectAll("path").attr("d", c), T(!1), N.call("redraw"), l = a.throttle(t, 5, {
                        leading: !1
                    })
                }), 5, {
                    leading: !1
                }),
                s = e.backgroundRenderer(),
                f = e.graticuleRenderer(),
                h = Xr(t.coastLo, {
                    strokeStyle: "#ffffff",
                    lineWidth: 1.25
                }),
                d = Xr(t.lakesLo, {
                    strokeStyle: "#ffffff",
                    lineWidth: 1.25
                }),
                v = Xr(t.riversLo, {
                    strokeStyle: "#808080",
                    lineWidth: 1.25
                }),
                m = Xr(t.coastHi, {
                    strokeStyle: "#ffffff",
                    lineWidth: 1.25
                }),
                g = Xr(t.lakesHi, {
                    strokeStyle: "#ffffff",
                    lineWidth: 1.25
                }),
                b = Xr(t.riversHi, {
                    strokeStyle: "#808080",
                    lineWidth: 1.25
                }),
                w = Wr([s, f, h, d, v]),
                _ = Wr([s, f, m, g, b]),
                x = Wr([e.foregroundRenderer()]);

            function T(t) {
                (t ? _ : w).renderTo(r, c), x.renderTo(i, c), c.context(null)
            }
            return S.on("moveStart.renderer", (function () {
                N.call("start")
            })), S.on("move.renderer", (function () {
                l()
            })), S.on("moveEnd.renderer", (function () {
                o.selectAll("path").attr("d", c), T(!0), N.call("render")
            })), Promise.resolve().then((function () {
                S.globe(e)
            })).catch(M.error), n.timeEnd("rendering map"), "ready"
        }

        function V(t) {
            if (!t) return null;
            n.time("render mask");
            var e = y.width,
                r = y.height,
                i = p.a(document.createElement("canvas")).attr("width", e).attr("height", r).node(),
                o = t.defineMask(i.getContext("2d"));
            o.fillStyle = "rgba(255, 0, 0, 1)", o.fill();
            var u = o.createImageData(e, r),
                c = u.data;
            return function (t, n) {
                if (a.isFunction(t.set)) t.set(n);
                else
                    for (var e = 0; e < n.length; e++) t[e] = n[e]
            }(c, o.getImageData(0, 0, e, r).data), n.timeEnd("render mask"), {
                imageData: u,
                isVisible: function (t, n) {
                    return c[4 * (n * e + t) + 3] > 0
                },
                set: function (t, n, r) {
                    var i = 4 * (n * e + t);
                    return c[i] = r[0], c[i + 1] = r[1], c[i + 2] = r[2], c[i + 3] = r[3], this
                }
            }
        }

        function $(t, n, e, r, i, a, u) {
            var c = Object(o.d)(t, n, e, r, i),
                l = hs(u, 2),
                s = l[0],
                f = l[1];
            return u[0] = (c[0] * s + c[2] * f) * a, u[1] = (c[1] * s + c[3] * f) * a, u
        }
        var Y = !1;

        function K(t, e) {
            if (!t || !e || !N.value()) return null;
            var r = R.value(),
                i = void 0 !== r && r.draw() || {
                    pass: !1
                },
                o = i.pass;
            if (i.err && !Y) {
                Y = !0;
                var a = JSON.stringify(i);
                n.debug("fastoverlay failure: ".concat(a)), window.ga("send", "event", "gl", a)
            }
            var u = V(t),
                c = e.primaryGrid,
                l = e.overlayGrid,
                s = c !== l;
            if (!c.field || !l.field) return null;
            var d = c.field(),
                p = l.field(),
                v = d.bilinear,
                g = p.bilinear;
            n.time("interpolating field");
            var b = this.cancel,
                w = t.projection.optimize(),
                _ = w.project,
                x = w.invert,
                T = t.bounds(y),
                k = T.xMin,
                E = T.yMin,
                S = T.xMax,
                j = T.yMax,
                A = T.width,
                O = T.height,
                P = c.particles.velocityScale,
                z = [],
                F = E,
                C = l.scale,
                L = ss.get("hd"),
                I = L ? 1 : 2;

            function D(t) {
                for (var n = t === j, e = new Float32Array(3 * A), r = k, i = 0; r <= S; r += I, i += 3 * I) {
                    var a = r === S,
                        c = f;
                    if (u.isVisible(r, t)) {
                        var p = x(r, t),
                            y = m;
                        if (p) {
                            var b = hs(p, 2),
                                w = b[0],
                                M = b[1];
                            if (w == w) {
                                var T = (c = v(w, M))[2];
                                T < 7e37 ? T = (c = $(_, w, M, r, t, P, c))[2] : c = h, o || ((s || "scalar" === d.type) && (T = Fr.z(g(w, M))), T < 7e37 && ((y = C.rgba(T))[3] = l.alpha.animated))
                            }
                        }
                        u.set(r, t, y), L || (a || (u.set(r + 1, t, y), n || u.set(r + 1, t + 1, y)), n || u.set(r, t + 1, y))
                    }
                    e[i] = c[0], e[i + 1] = c[1], e[i + 2] = c[2], L || a || (e[i + 3] = c[0], e[i + 4] = c[1], e[i + 5] = c[2])
                }
                z[t] = e, L || (z[t + 1] = e)
            }
            return M.status(""), M.progress(0), new Promise((function (t, e) {
                ! function r() {
                    try {
                        if (!b.requested)
                            for (var i = Date.now(); F <= j;)
                                if (D(F), F += I, Date.now() - i > 150) return M.progress(Math.round((F - E + 1) / O * 100)), void setTimeout(r, 10);
                        t(function (t, n, e) {
                            var r = e.xMin,
                                i = {
                                    move: function (n, e, i, o) {
                                        var a = Math.round(e);
                                        if (0 <= a && a < t.length) {
                                            var u = t[a],
                                                c = 3 * (Math.round(n) - r);
                                            if (u && 0 <= c && c < u.length) return i[o] = n, i[o + 1] = e, i[o + 2] = u[c], i[o + 3] = u[c + 1], void(i[o + 4] = u[c + 2])
                                        }
                                        i[o] = n, i[o + 1] = e, i[o + 2] = 7e37, i[o + 3] = 7e37, i[o + 4] = 7e37
                                    },
                                    isDefined: function (n, e) {
                                        var i = Math.round(e);
                                        if (0 <= i && i < t.length) {
                                            var o = t[i],
                                                a = 3 * (Math.round(n) - r);
                                            if (o && 0 <= a && a < o.length) return o[a] < 7e37
                                        }
                                        return !1
                                    },
                                    isInsideBoundary: function (t, n) {
                                        var e = new Float32Array(5);
                                        return i.move(t, n, e, 0), e[4] < 7e37
                                    }
                                };
                            return i.overlay = n.imageData, i
                        }(z, u, T))
                    } catch (t) {
                        e(t)
                    }
                    M.progress(100), n.timeEnd("interpolating field")
                }()
            }))
        }

        function J(t, e) {
            if (!(t && P.value() && e && Dl.get("animate"))) return !1;
            e.isNewPrimaryGrid && Gr(p.a("#animation").node());
            var r = this.cancel,
                o = t.bounds(y),
                u = o.xMin,
                c = o.yMin,
                l = o.width,
                s = o.height,
                f = Fr.E(10, e.primaryGrid.particles.maxIntensity),
                h = Math.round(7 * l);
            Fr.t() && (h = Math.floor(.75 * h)), n.debug("particle count: %s", h);
            var d, v, m = new Float32Array(5 * h),
                g = new Int32Array(h),
                b = f.map((function () {
                    return new Float32Array(4 * h)
                })),
                w = new Int32Array(b.length),
                _ = t.projection.scale();

            function x(t, n) {
                var e = u + Math.random() * l,
                    r = c + Math.random() * s;
                n.move(e, r, m, t)
            }

            function M(t, n) {
                for (var e = 0; e < 10; e++)
                    if (x(t, n), m[t + 2] < 7e37) return
            }
            var T = p.a("#animation").node().getContext("2d");
            e.primaryGrid.particles.waves ? (d = 40, v = function () {
                for (var t = P.value(), n = 600 / _ * Math.pow(Math.log(_) / Math.log(600), 2.5), e = 0; e < w.length; e++) w[e] = 0;
                for (var r = 0, i = 0; r < h; r += 1, i += 5) {
                    ++g[r] >= d && (g[r] = 0, x(i, t));
                    var o = m[i],
                        a = m[i + 1],
                        u = m[i + 2],
                        c = m[i + 3],
                        l = o + u * n,
                        s = a + c * n,
                        p = m[i + 4];
                    if (p == p && t.isDefined(l, s)) {
                        m[i] = l, m[i + 1] = s;
                        var v = Math.sqrt(u * u + c * c) / 2.5;
                        u /= v, c /= v;
                        var y = f.indexFor(p * S[g[r]]),
                            M = 4 * w[y]++,
                            T = b[y];
                        T[M] = o - c, T[M + 1] = a + u, T[M + 2] = o + c, T[M + 3] = a - u
                    } else g[r] = d
                }
            }, T.fillStyle = "rgba(0, 0, 0, 0.90)") : (d = 100, v = function () {
                for (var t = P.value(), n = 0; n < w.length; n++) w[n] = 0;
                for (var e = 0, r = 0; e < h; e += 1, r += 5) {
                    ++g[e] >= d && (g[e] = 0, x(r, t));
                    var i = m[r],
                        o = m[r + 1],
                        a = i + m[r + 2],
                        u = o + m[r + 3],
                        c = m[r + 4];
                    if (a < 7e37)
                        if (t.move(a, u, m, r), m[r + 2] < 7e37) {
                            var l = f.indexFor(c),
                                s = 4 * w[l]++,
                                p = b[l];
                            p[s] = i, p[s + 1] = o, p[s + 2] = a, p[s + 3] = u
                        } else g[e] = d;
                    else g[e] = d
                }
            }, T.fillStyle = Fr.p() ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.97)"), T.lineWidth = 1;
            for (var k = 0, E = 0; k < h; k += 1, E += 5) g[k] = a.random(0, d), M(E, P.value());
            for (var S = new Float32Array(d), j = 0; j < S.length; j++) S[j] = Math.sin(-i.d / 2 + j / 7) / 2 + .5;

            function A() {
                return !r.requested && (v(), function () {
                    T.globalCompositeOperation = "destination-in", T.fillRect(u, c, l, s), T.globalCompositeOperation = "source-over";
                    for (var t = 0; t < b.length; t++) {
                        var n = b[t],
                            e = 4 * w[t];
                        if (e > 0) {
                            T.beginPath(), T.strokeStyle = f[t];
                            for (var r = 0; r < e; r += 4) T.moveTo(n[r], n[r + 1]), T.lineTo(n[r + 2], n[r + 3]);
                            T.stroke()
                        }
                    }
                }(), setTimeout(A, 40), !0)
            }
            return A(), {
                frame: A
            }
        }

        function Z(t, n, e) {
            if (n && e && Dl.get("showGridPoints")) {
                t.fillStyle = "rgba(255, 255, 255, 0.75)";
                var r = y.width,
                    i = y.height,
                    a = e.projection.stream({
                        point: function (n, e) {
                            0 <= n && n < r && 0 <= e && e < i && t.fillRect(Math.round(n), Math.round(e), 1, 1)
                        }
                    }),
                    u = this.cancel,
                    c = n.grid(),
                    l = n.field().valueAt,
                    s = 0;
                ! function t() {
                    if (!u.requested) {
                        var n = Date.now() + 37.5;
                        (s = c.forEach((function (t, e, r) {
                            return Fr.z(l(r)) < 7e37 && (t = Object(o.c)(180 + t, 360) - 180, a.point(t, e)), Date.now() > n
                        }), s)) == s && setTimeout(t, 10)
                    }
                }()
            }
        }

        function Q(t, n, e) {
            if (t && N.value()) {
                var r = p.a("#overlay").node().getContext("2d"),
                    i = (O.value() || {}).overlayGrid;
                if (Hr(r), Gr(p.a("#scale").node()), n && ("off" !== n && (e || function (t, n) {
                        for (var e = 3; e < t.length; e += 4) 0 !== t[e] && (t[e] = n)
                    }(t.overlay.data, i.alpha.single), r.putImageData(t.overlay, 0, 0)), C.submit(Z, r, i, A.value())), i) {
                    for (var o = p.a("#scale"), a = o.node(), u = a.getContext("2d"), c = a.width - 1, l = i.scale, s = l.colors, f = s.length / 4 - 1, h = 0; h < a.width; h++) {
                        var d = 4 * Math.round(h / c * f);
                        u.fillStyle = "rgb(".concat(s[d], ",").concat(s[d + 1], ",").concat(s[d + 2], ")"), u.fillRect(h, 0, 1, a.height)
                    }
                    o.on("mousemove", (function () {
                        var t = Math.floor(g(this)[0]);
                        if (t < 0 || c < t) return o.attr("title", null);
                        var n = Math.round(t / c * f),
                            e = l.valueFor(n),
                            r = nt("wind" === i.type ? "#location-wind-units" : "#location-value-units", i).value();
                        o.attr("title", Fr.i(e, r) + " " + (r.tooltip || r.label))
                    }))
                }
            }
        }

        function tt(t) {
            var n = function (t) {
                    if (t) {
                        var n = t.overlayGrid;
                        return {
                            date: n.date(),
                            format: n.dateFormat()
                        }
                    }
                    var e = Dl.get("date");
                    return {
                        date: "current" === e ? null : a.clone(e),
                        format: "{yyyy}-{MM}-{dd} {hh}:{mm}"
                    }
                }(t),
                e = n.date,
                r = n.format,
                i = p.a("#data-date").classed("local"),
                o = "";
            return e && (o = Cr.g((i ? Cr.c : Cr.f)(Cr.b(e)), r), Bl(e)), p.a("#data-date").text(o + " " + (i ? "Local" : "UTC")), p.a("#swap-tz").text("⇄ " + (i ? "UTC" : "Local")), e
        }

        function nt(t, n) {
            var e = n.units,
                r = n.type,
                i = e.length;

            function o() {
                return JSON.parse(p.a(t).attr("data-index") || "{}")
            }

            function a(t) {
                return +t[r] || 0
            }
            return {
                value: function () {
                    return e[a(o())]
                },
                next: function () {
                    var n = o();
                    n[r] = (a(n) + 1) % i, p.a(t).attr("data-index", JSON.stringify(n))
                }
            }
        }

        function et() {
            p.a("#location").classed("hidden", !0), Ar(".location").text(""), p.a("#location-close").classed("hidden", !0);
            var t = Dl.get("loc") || [],
                n = +t[0],
                r = +t[1];
            if (n != n || r != r) return p.a(".location-mark").remove(), void(e.showLocationDetails && e.showLocationDetails("", "{}"));
            var i = O.value(),
                o = P.value(),
                u = A.value();
            if (i && o && u) {
                var c = i.primaryGrid,
                    l = i.overlayGrid,
                    s = {},
                    f = Fr.h(n, r);
                p.a("#location").classed("hidden", !1), p.a("#location-coord").text(f), p.a("#location-close").classed("hidden", !1);
                var h, d, v = c.interpolate(n, r);
                Fr.l(v) ? (d = c, (h = v)[0] < 7e37 && (function t(n, e) {
                    var r = nt("#location-wind-units", e),
                        i = r.value();
                    p.a("#location-wind").text(Fr.j(n, i)), p.a("#location-wind-units").html(i.label).on("click", (function () {
                        r.next(), t(n, e)
                    }))
                }(h, d), s[d.type] = a.object(d.units.map((function (t) {
                    return [t.label, Fr.j(h, t)]
                }))))) : g(v, c), g(l !== c ? Fr.z(l.interpolate(n, r)) : 7e37, l);
                var m = jr().projection(u.projection).pointRadius(7),
                    y = p.a(".location-mark");
                y.node() || (y = p.a("#annotation").append("path").attr("class", "location-mark")), y.datum({
                    type: "Point",
                    coordinates: [n, r]
                }).attr("d", m), e.showLocationDetails && e.showLocationDetails(f, JSON.stringify(s))
            }

            function g(t, n) {
                t < 7e37 && (! function t(n, e) {
                    var r = nt("#location-value-units", e),
                        i = r.value();
                    p.a("#location-value").text(Fr.i(n, i)), p.a("#location-value-units").html(i.label).on("click", (function () {
                        r.next(), t(n, e)
                    }))
                }(t, n), s[n.type] = a.object(n.units.map((function (n) {
                    return [n.label, Fr.i(t, n)]
                }))))
            }
        }

        function it(t, n) {
            var e = +n[0],
                r = +n[1],
                i = P.value();
            t && i && !i.isInsideBoundary(t[0], t[1]) || e == e && r == r && Dl.save({
                loc: [e, r]
            })
        }

        function ot() {
            Dl.save({
                loc: null
            })
        }

        function at(t) {
            z.value() && z.submit(!1), t && Gr(p.a("#animation").node())
        }

        function ut(t, n, e) {
            e = e || [n], p.a(t).on("click", (function () {
                    p.a(t).classed("disabled") || Dl.save(n)
                })),
                function (t, n) {
                    Dl.on("change.?", (function () {
                        var e = Dl.getAll(),
                            r = !1;
                        n.forEach((function (t) {
                            r |= a.isEqual(a.pick(e, Object.keys(t)), t)
                        })), p.a(t).classed("highlighted", r)
                    }))
                }(t, e)
        }

        function ct(t) {
            a.isFunction(window.ga) && window.ga("send", "event", "sponsor", t)
        }

        function lt() {
            var t = window.devicePixelRatio || 1;
            Ar(".fill-screen").attr("width", y.width).attr("height", y.height), Ar(".max-screen").style("width", "".concat(y.width, "px")).style("height", "".concat(y.height, "px")).attr("width", y.width * t).attr("height", y.height * t).each((function () {
                this.getContext("2d").scale(t, t)
            }))
        }

        function st(t) {
            var n = Dl.get("param");
            return ("space" === n || "space" !== t) && ("space" === n && "space" !== t || Dl.get("animate"))
        }

        function ft() {
            return (O.value() || {}).overlayGrid
        }
        Promise.resolve().then((function () {
            M.status("Initializing..."), p.a("#sponsor-link").attr("target", Fr.o() && "tara" !== Fr.A() ? "_new" : null).on("click", (function () {
                    return ct("click")
                })).on("contextmenu", (function () {
                    return ct("right-click")
                })), p.a("#sponsor-hide").on("click", (function () {
                    p.a("#sponsor").classed("hidden", !0)
                })), p.a("#notice-hide").on("click", (function () {
                    p.a("#notice").classed("hidden", !0)
                })), p.a("#toggle-settings").on("click", (function () {
                    var t = p.a("#settings-wrap").classed("hidden");
                    p.a("#settings-wrap").classed("hidden", !t), t && !p.a("#menu").classed("collapsed") && ds.click("toggle-menu")
                })), p.a("#settings-hide").on("click", (function () {
                    p.a("#settings-wrap").classed("hidden", !0)
                })), p.a("#toggle-calendar").on("click", (function () {
                    var t = p.a("#calendar-wrapper").classed("hidden");
                    p.a("#calendar-wrapper").classed("hidden", !t), t && !p.a("#menu").classed("collapsed") && ds.click("toggle-menu")
                })), p.a("#calendar-hide").on("click", (function () {
                    p.a("#calendar-wrapper").classed("hidden", !0)
                })),
                function () {
                    var t = p.a("html").attr("lang");
                    p.a("#settings").selectAll("a[lang='" + t + "']").classed("highlighted", !0);
                    var n = function (t) {
                        for (var n = function (t) {
                                return t.languages || [t.language || t.userLanguage || "en"]
                            }(t), e = 0; e < n.length; e++) {
                            var r = $l(Vl(n[e]));
                            if (r) return r
                        }
                        return ""
                    }(window.navigator);
                    n !== t && p.a("#tools").select("a[lang='" + n + "']").classed("hidden", !1);
                    var e = 0;
                    p.a("#langs").on("click", (function () {
                        2 == ++e && (p.a("#sponsor").append("p").text("ref: " + document.referrer).append("p").text("loc: " + document.location), v.c.preventDefault())
                    }))
                }(), lt();
            var t = p.a("#scale-label").node();

            function i() {
                Ar("a[lang]").attr("href", (function () {
                    var t = p.a(this),
                        n = t.attr("data-link");
                    return n ? "".concat(n).concat(Fr.s() ? "?kiosk" : "").concat(window.location.hash) : t.attr("href")
                }))
            }
            p.a("#scale").attr("width", Math.round(.95 * (p.a("#menu").node().offsetWidth - t.offsetWidth))).attr("height", Math.round(t.offsetHeight / 2)), p.a("#toggle-menu").on("click", (function () {
                if (Fr.o() && !Fr.s() && "tara" !== Fr.A()) window.open("https://earth.nullschool.net/" + window.location.hash, "_blank");
                else {
                    var t = p.a("#menu").classed("collapsed");
                    p.a("#menu").classed("collapsed", !t), t && a.isFunction(window.ga) && window.ga("send", "event", "menu", "open")
                }
            })), "ontouchstart" in document.documentElement ? p.a(document).on("touchstart", (function () {})) : p.a(document.documentElement).classed("no-touch", !0), i(), p.a(window).on("hashchange.affects-lang", (function () {
                n.debug("hashchange"), i()
            })), Dl.on("change.?", (function () {
                M.reset(), L.submit((function () {
                    var t = [],
                        n = [];
                    Ar(".highlighted").each((function () {
                        t.push(this.id)
                    })), Ar(".disabled").each((function () {
                        n.push(this.id)
                    })), e.buttonStateChange && e.buttonStateChange(JSON.stringify(t), JSON.stringify(n))
                }))
            }));
            var o = !0;

            function u() {
                N.submit(B, j.value(), A.value())
            }

            function c() {
                P.submit(K, A.value(), O.value())
            }
            Dl.on("change.?", (function (t) {
                    if (!a.isFunction(window.ga) || o) return o = !1;
                    var n = Dl.getAll();
                    a.has(t, "projection") && window.ga("send", "event", "projection", n.projection), a.has(t, "overlayType") && window.ga("send", "event", "overlay", n.overlayType), (a.has(t, "param") || a.has(t, "surface") || a.has(t, "level")) && window.ga("send", "event", "layer", [n.param, n.surface, n.level].join("-"))
                })), ss.on("change:topology.?", (function (t) {
                    j.submit(q, t)
                })), ss.on("change:hd.?", (function () {
                    O.submit(X, !0)
                })), Dl.on("change:projection.?", (function (t) {
                    A.submit(U, t)
                })), Dl.on("change.?", (function (t) {
                    var n = Object.keys(t),
                        e = !1,
                        r = !1;
                    a.intersection(n, ["date", "param", "surface", "level"]).length > 0 && (e = !0, r = !0);
                    var i = Dl.get("overlayType") || "default";
                    if (a.indexOf(n, "overlayType") >= 0 && "off" !== i) {
                        var o = O.value() || {},
                            u = o.primaryGrid,
                            c = o.overlayGrid;
                        c && (c.type === i || "default" === i && u === c) || (e = !0)
                    }
                    e && O.submit(X, r)
                })), O.on("update.affects-grid", (function (t) {
                    ! function (t) {
                        var n = tt(t),
                            r = "",
                            i = "";
                        if (t) {
                            var o = Fr.B(),
                                a = t.primaryGrid.descriptionHTML(o),
                                u = t.overlayGrid.descriptionHTML(o);
                            r = u.name + u.qualifier, t.primaryGrid !== t.overlayGrid && (r = (a.qualifier === u.qualifier ? a.name : a.name + a.qualifier) + " + " + r), i = t.overlayGrid.sourceHTML || ""
                        }
                        p.a("#data-layer").html(r), p.a("#data-center").html(i), e.productChange && e.productChange(Cr.b(n).getTime(), r, i)
                    }(t)
                })), p.a("#swap-tz").on("click", (function () {
                    p.a("#data-date").classed("local", !p.a("#data-date").classed("local")), tt(O.cancel.requested ? null : O.value())
                })), j.on("update.affects-renderer", u), A.on("update.affects-renderer", u), O.on("update.affects-field", c), N.on("render.affects-field", c), N.on("start.affects-field redraw.affects-field", (function () {
                    P.cancel(), C.cancel()
                })), P.on("update.affects-animator", (function () {
                    z.submit(J, A.value(), O.value())
                })), N.on("start.affects-animator", (function () {
                    return at(!0)
                })), O.on("submit.affects-animator", (function () {
                    return at(!1)
                })), P.on("submit.affects-animator", (function () {
                    return at(!1)
                })), P.on("update.affects-overlay", (function () {
                    F.submit(Q, P.value(), Dl.get("overlayType"), Dl.get("animate"))
                })), N.on("start.affects-overlay", (function () {
                    Gr(p.a("#overlay").node()), F.submit(Q, P.value(), null, null)
                })), Dl.on("change.?", (function (t) {
                    var n = Object.keys(t);
                    a.intersection(n, ["overlayType", "showGridPoints", "animate"]).length > 0 && F.submit(Q, P.value(), Dl.get("overlayType"), Dl.get("animate"))
                })), Dl.on("change:animate.?", (function (t) {
                    t ? c() : at(!0)
                })), S.on("click.affects-location", it), p.a("#location-close").on("click", ot), P.on("update.affects-location", et), Dl.on("change:loc.?", et), Dl.on("change:param.?", (function (t) {
                    switch (Ar(".ocean-mode").classed("hidden", "ocean" !== t), Ar(".wind-mode").classed("hidden", "wind" !== t).selectAll(".text-button").classed("disabled", "wind" !== t), Ar(".chem-mode").classed("hidden", "chem" !== t), Ar(".particulates-mode").classed("hidden", "particulates" !== t), Ar(".space-mode").classed("hidden", "space" !== t), t) {
                        case "chem":
                        case "particulates":
                        case "wind":
                            p.a("#nav-prev-2").attr("title", "-1 Day"), p.a("#nav-prev-1").attr("title", "-3 Hours"), p.a("#nav-next-1").attr("title", "+3 Hours"), p.a("#nav-next-2").attr("title", "+1 Day");
                            break;
                        case "ocean":
                            p.a("#nav-prev-2").attr("title", "-1 Month"), p.a("#nav-prev-1").attr("title", "-5 Days"), p.a("#nav-next-1").attr("title", "+5 Days"), p.a("#nav-next-2").attr("title", "+1 Month")
                    }
                })), p.a("#air-mode").on("click", (function () {
                    "wind" !== Dl.get("param") && Dl.save({
                        param: "wind",
                        surface: "surface",
                        level: "level",
                        overlayType: "default",
                        animate: st("wind")
                    })
                })), Dl.on("change:param.?", (function (t) {
                    p.a("#air-mode").classed("highlighted", "wind" === t)
                })), p.a("#ocean-mode").on("click", (function () {
                    if ("ocean" !== Dl.get("param")) {
                        var t = {
                                param: "ocean",
                                surface: "primary",
                                level: "waves",
                                overlayType: "significant_wave_height",
                                animate: st("ocean")
                            },
                            n = Dl.getAll();
                        "current" === n.date ? Dl.save(t) : Promise.all(Al.productsFor(Object.assign(n, t))).then((function (n) {
                            var e = hs(n, 1)[0];
                            e.date() && Dl.save(Object.assign(t, Fr.f(e.date())))
                        })).catch(M.error)
                    }
                })), Dl.on("change:param.?", (function (t) {
                    p.a("#ocean-mode").classed("highlighted", "ocean" === t)
                })), p.a("#chem-mode").on("click", (function () {
                    "chem" !== Dl.get("param") && Dl.save({
                        param: "chem",
                        surface: "surface",
                        level: "level",
                        overlayType: "cosc",
                        animate: st("chem")
                    })
                })), Dl.on("change:param.?", (function (t) {
                    p.a("#chem-mode").classed("highlighted", "chem" === t)
                })), p.a("#particulates-mode").on("click", (function () {
                    "particulates" !== Dl.get("param") && Dl.save({
                        param: "particulates",
                        surface: "surface",
                        level: "level",
                        overlayType: "duexttau",
                        animate: st("particulates")
                    })
                })), Dl.on("change:param.?", (function (t) {
                    p.a("#particulates-mode").classed("highlighted", "particulates" === t)
                })), p.a("#space-mode").on("click", (function () {
                    "space" !== Dl.get("param") && Dl.save({
                        param: "space",
                        surface: "surface",
                        level: "level",
                        overlayType: "aurora",
                        animate: st("space")
                    })
                })), Dl.on("change:param.?", (function (t) {
                    p.a("#space-mode").classed("highlighted", "space" === t)
                })), Dl.on("change:overlayType.?", (function (t) {
                    Ar(".surface").classed("disabled", (function () {
                        return "wind" !== Dl.get("param") || ("surface-level" === this.getAttribute("id") ? "wind_power_density" === t : "misery_index" === t)
                    }))
                })), Dl.on("change:surface.?", (function (t) {
                    p.a("#wind_power_density").classed("disabled", "surface" === t)
                })), Dl.on("change:date.?", (function (t) {
                    Bl(t)
                })), p.a("#nav-prev-2").on("click", (function () {
                    return W(-10)
                })), p.a("#nav-next-2").on("click", (function () {
                    return W(10)
                })), p.a("#nav-prev-1").on("click", (function () {
                    return W(-1)
                })), p.a("#nav-next-1").on("click", (function () {
                    return W(1)
                })), p.a("#nav-now").on("click", (function () {
                    return Dl.save({
                        date: "current"
                    })
                })), p.a("#toggle-grid").on("click", (function () {
                    Dl.save({
                        showGridPoints: !Dl.get("showGridPoints")
                    })
                })), Dl.on("change:showGridPoints.?", (function (t) {
                    p.a("#toggle-grid").classed("highlighted", t)
                })), p.a("#toggle-animation").on("click", (function () {
                    Dl.save({
                        animate: !Dl.get("animate")
                    })
                })), Dl.on("change:animate.?", (function (t) {
                    p.a("#toggle-animation").classed("highlighted", t)
                })), p.a("#toggle-hd").on("click", (function () {
                    ss.save({
                        hd: !ss.get("hd")
                    })
                })), ss.on("change:hd.?", (function (t) {
                    p.a("#toggle-hd").classed("highlighted", t)
                })), Ar(".surface").each((function () {
                    var t = this.id,
                        n = t.split("-");
                    ut("#" + t, {
                        param: "wind",
                        surface: n[0],
                        level: n[1]
                    })
                })), ut("#animate-currents", {
                    param: "ocean",
                    surface: "surface",
                    level: "currents",
                    animate: !0,
                    overlayType: "default"
                }, [{
                    param: "ocean",
                    surface: "surface",
                    level: "currents"
                }]), ut("#animate-waves", {
                    param: "ocean",
                    surface: "primary",
                    level: "waves",
                    animate: !0,
                    overlayType: "default"
                }, [{
                    param: "ocean",
                    surface: "primary",
                    level: "waves"
                }]), Al.overlayTypes().each((function (t) {
                    var n = {
                            overlayType: t
                        },
                        e = [n];
                    "misery_index" === t ? Object.assign(n, {
                        surface: "surface",
                        level: "level"
                    }) : "currents" === t ? e.push({
                        param: "ocean",
                        surface: "surface",
                        level: "currents",
                        overlayType: "default"
                    }) : "primary_waves" === t && e.push({
                        param: "ocean",
                        surface: "primary",
                        level: "waves",
                        overlayType: "default"
                    }), ut("#".concat(t.replace(".", "")), n, e)
                })), ut("#wind", {
                    param: "wind",
                    overlayType: "default"
                }), ut("#no-overlay", {
                    overlayType: "off"
                }), Object.keys(r).forEach((function (t) {
                    ut("#" + t, {
                        projection: t,
                        orientation: ""
                    }, [{
                        projection: t
                    }])
                })), p.a(window).on("orientationchange", (function () {
                    window.scrollTo(0, 0), y = Fr.D(), lt(), R.value() && p.a("#fastoverlay").style("width", "".concat(y.width, "px")).style("height", "".concat(y.height, "px")), A.submit(U, Dl.get("projection"))
                })), Fr.s() ? Ar(".kiosk").classed("hidden", !0) : setTimeout((function () {
                    p.a("#menu-ham").transition().style("opacity", "0").remove()
                }), 15e3),
                function () {
                    var t = function (t) {
                            console.time("glTest");
                            var n = {
                                pass: !1
                            };
                            try {
                                var e = Ur(300, 300);
                                t && (p.a(e).style("width", "".concat(300, "px")).style("height", "".concat(300, "px")).style("position", "absolute").style("top", "0").style("left", "0"), p.a("#display").node().appendChild(e));
                                var r = es.getWebGL(e);
                                if (!r) return n.hasContext = !1, n;
                                var i = +r.getParameter(r.MAX_TEXTURE_SIZE) || -1;
                                if (i < 4096) return n.maxTexSize = i, n;
                                var o = +r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision || -1;
                                if (o < 23) return n.precision = o, n;
                                n.scenario = 1;
                                var a = rs(e, void 0, (function () {
                                    return 1
                                }), (function () {
                                    return {
                                        width: 300,
                                        height: 300,
                                        pixelRatio: 1
                                    }
                                }), (function (t) {
                                    return [is.webgl(t), os.webgl(t), us.webgl(t), cs.webgl(t)]
                                })).draw();
                                if (a.err) return n.err = a.err, n;
                                var u = [Object(Fr.b)(ls(r, 195, 280), [0, 0, 255, 255]), Object(Fr.b)(ls(r, 195, 252), [0, 255, 0, 255]), Object(Fr.b)(ls(r, 195, 210), [0, 255, 255, 255]), Object(Fr.b)(ls(r, 195, 150), [255, 0, 0, 255]), Object(Fr.b)(ls(r, 195, 100), [255, 0, 255, 255]), Object(Fr.b)(ls(r, 195, 40), [255, 255, 0, 255]), Object(Fr.b)(ls(r, 195, 15), [255, 255, 255, 255]), Object(Fr.b)(ls(r, 145, 15), [0, 0, 0, 0])];
                                if (u.some((function (t) {
                                        return !1 === t
                                    }))) return n.colorMatch = u, n;
                                var c = r.getError();
                                0 !== c ? n.err = c : n.pass = !0
                            } catch (t) {
                                n.err = t.toString()
                            } finally {
                                console.timeEnd("glTest")
                            }
                            return n
                        }(Fr.m()),
                        e = t.pass ? "ok" : JSON.stringify(t);
                    if (n.debug("test gl: ".concat(e)), a.isFunction(window.ga) && window.ga("send", "event", "gl", e), t.pass) {
                        var r = p.a("#fastoverlay").style("width", "".concat(y.width, "px")).style("height", "".concat(y.height, "px")).node(),
                            i = rs(r, Fr.r() ? Ur() : void 0, (function () {
                                var t = (O.value() || {}).overlayGrid;
                                return (Dl.get("animate") ? t.alpha.animated : t.alpha.single) / 255
                            }), (function () {
                                return {
                                    width: y.width,
                                    height: y.height,
                                    pixelRatio: ss.get("hd") ? 1 : .5
                                }
                            }), (function (t) {
                                if ("off" === Dl.get("overlayType") || !N.value()) return [];
                                var n = [u(t), c(t), l(t), s(t)].filter((function (t) {
                                    return !!t
                                }));
                                return 4 === n.length ? n : []
                            }));
                        Dl.on("change:overlayType.?", i.draw), ss.on("change:hd.?", i.draw), A.on("update.affects-fastoverlay", i.draw), O.on("update.affects-fastoverlay", i.draw), N.on("redraw.affects-fastoverlay", i.draw), N.on("render.affects-fastoverlay", i.draw), z.on("update.affects-fastoverlay", i.draw), R.submit(i)
                    }

                    function o() {
                        return (O.value() || {}).overlayGrid || {}
                    }

                    function u(t) {
                        var n = A.value(),
                            e = n && n.projection.optimize();
                        return e && e.webgl && e.webgl(t)
                    }

                    function c(t) {
                        var n = o(),
                            e = n.grid && n.grid() || {};
                        return e.webgl && e.webgl(t)
                    }

                    function l(t) {
                        var n = o(),
                            e = n.field && n.field().bilinear || {};
                        return e.webgl && e.webgl(t)
                    }

                    function s(t) {
                        var n = o().scale || {};
                        return n.webgl && n.webgl(t)
                    }
                }();
            var l = ["surface-level", "isobaric-1000hPa", "isobaric-850hPa", "isobaric-700hPa", "isobaric-500hPa", "isobaric-250hPa", "isobaric-70hPa", "isobaric-10hPa"];

            function s() {
                var t = Dl.getAll(),
                    n = t.surface + "-" + t.level;
                return "wind" === t.param ? a.indexOf(l, n) : -1
            }
            p.a("body").on("keydown", Nl((function (t) {
                switch (t) {
                    case "Escape":
                        return p.a("#settings-wrap").classed("hidden") ? p.a("#calendar-wrapper").classed("hidden") ? p.a("#location-close").classed("hidden") ? p.a("#menu").classed("collapsed") ? p.a("#notice").classed("hidden") ? p.a("#sponsor").classed("hidden") ? void 0 : (ds.click("sponsor-hide"), !0) : (ds.click("notice-hide"), !0) : (ds.click("toggle-menu"), !0) : (ds.click("location-close"), !0) : (ds.click("calendar-hide"), !0) : (ds.click("settings-hide"), !0)
                }
            }))), p.a("body").on("keypress", Nl((function (t) {
                switch (t) {
                    case "e":
                        return ds.click("toggle-menu");
                    case "I":
                        return ds.click(l[l.length - 1]);
                    case "i":
                        return ds.click(l[s() + 1]);
                    case "m":
                        return ds.click(l[s() - 1]);
                    case "M":
                        return ds.click(l[0]);
                    case "J":
                        return ds.click("nav-prev-2");
                    case "j":
                        return ds.click("nav-prev-1");
                    case "k":
                        return ds.click("nav-next-1");
                    case "K":
                        return ds.click("nav-next-2");
                    case "n":
                        return ds.click("nav-now");
                    case "p":
                        return ds.click("toggle-animation");
                    case "g":
                        return ds.click("toggle-grid");
                    case "H":
                        return ds.click("toggle-hd");
                    case "C":
                        return ds.click("toggle-calendar");
                    case "d":
                        return S.hotkey("zoom", 1.003);
                    case "x":
                        return S.hotkey("zoom", .997);
                    case "D":
                        return S.hotkey("zoom", 1.05);
                    case "X":
                        return S.hotkey("zoom", .95);
                    case "w":
                        return S.hotkey("up", 1);
                    case "W":
                        return S.hotkey("up", 8);
                    case "z":
                        return S.hotkey("down", 1);
                    case "Z":
                        return S.hotkey("down", 8);
                    case "a":
                        return S.hotkey("left", 1);
                    case "A":
                        return S.hotkey("left", 8);
                    case "s":
                        return S.hotkey("right", 1);
                    case "S":
                        return S.hotkey("right", 8);
                    case "Enter":
                        return function () {
                            if (!p.a("#calendar-wrapper").classed("hidden")) return ds.click("calendar-apply"), !0
                        }()
                }
            })))
        })).then((function () {
            Dl.on("change.affects-hash", Ul), p.a(window).on("hashchange.affects-config", ql), ql(), ss.save({
                hd: !1,
                topology: Object(Fr.t)() ? "/earth-topo-mobile.json?v3" : "/earth-topo.json?v3"
            })
        })).catch(M.error), Object.assign(ds, {
            url: function () {
                return window.location.href.toString()
            },
            scale: {
                valueAt: function (t) {
                    var n = ft(),
                        e = {};
                    if (n) {
                        var r = {},
                            i = o.i.apply(void 0, [t / 100].concat(fs(n.scale.bounds)));
                        n.units.forEach((function (t) {
                            r[t.label] = Fr.i(i, t)
                        })), e[n.type] = r
                    }
                    return JSON.stringify(e)
                },
                palette: function () {
                    var t, n, e, r = ft();
                    return JSON.stringify(r ? (t = {}, n = r.type, e = Fr.C(r.scale.colors), n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e, t) : {})
                }
            },
            navToDate: function (t) {
                var n = ft(),
                    e = new Date(t);
                return !n || a.isNaN(e.getUTCFullYear()) ? 0 : (e = n.navigateTo(Cr.f(e))) ? (a.defer((function () {
                    Dl.save(Fr.f(e))
                })), Cr.b(e).getTime()) : 0
            },
            click: function (t) {
                return a.defer((function () {
                    var n = p.a("#" + t).node();
                    return null !== n ? n.dispatchEvent(Fr.x()) : void 0
                })), !0
            },
            locate: function (t, n) {
                a.defer(D, t, n)
            },
            orient: function (t) {
                a.defer((function () {
                    var n = A.value();
                    if (void 0 === t) return n.projection.rotate();
                    n.projection.rotate(t), Dl.save({
                        orientation: n.orientation()
                    })
                }))
            },
            stop: function () {
                a.defer((function () {
                    Dl.save({
                        animate: !1
                    })
                }))
            },
            cancelMove: function () {
                S.cancelMove()
            }
        })
    }
}, function (t, n, e) {
    "use strict";
    var r = e(7);
    n.a = function (t) {
        return "string" == typeof t ? new r.a([
            [document.querySelector(t)]
        ], [document.documentElement]) : new r.a([
            [t]
        ], r.c)
    }
}, , function (t, n, e) {
    (function (t, n) {
        ! function (t, e) {
            "use strict";
            if (!t.setImmediate) {
                var r, i, o, a, u, c = 1,
                    l = {},
                    s = !1,
                    f = t.document,
                    h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? r = function (t) {
                    n.nextTick((function () {
                        p(t)
                    }))
                } : ! function () {
                    if (t.postMessage && !t.importScripts) {
                        var n = !0,
                            e = t.onmessage;
                        return t.onmessage = function () {
                            n = !1
                        }, t.postMessage("", "*"), t.onmessage = e, n
                    }
                }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (t) {
                    p(t.data)
                }, r = function (t) {
                    o.port2.postMessage(t)
                }) : f && "onreadystatechange" in f.createElement("script") ? (i = f.documentElement, r = function (t) {
                    var n = f.createElement("script");
                    n.onreadystatechange = function () {
                        p(t), n.onreadystatechange = null, i.removeChild(n), n = null
                    }, i.appendChild(n)
                }) : r = function (t) {
                    setTimeout(p, 0, t)
                } : (a = "setImmediate$" + Math.random() + "$", u = function (n) {
                    n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(a) && p(+n.data.slice(a.length))
                }, t.addEventListener ? t.addEventListener("message", u, !1) : t.attachEvent("onmessage", u), r = function (n) {
                    t.postMessage(a + n, "*")
                }), h.setImmediate = function (t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var n = new Array(arguments.length - 1), e = 0; e < n.length; e++) n[e] = arguments[e + 1];
                    var i = {
                        callback: t,
                        args: n
                    };
                    return l[c] = i, r(c), c++
                }, h.clearImmediate = d
            }

            function d(t) {
                delete l[t]
            }

            function p(t) {
                if (s) setTimeout(p, 0, t);
                else {
                    var n = l[t];
                    if (n) {
                        s = !0;
                        try {
                            ! function (t) {
                                var n = t.callback,
                                    e = t.args;
                                switch (e.length) {
                                    case 0:
                                        n();
                                        break;
                                    case 1:
                                        n(e[0]);
                                        break;
                                    case 2:
                                        n(e[0], e[1]);
                                        break;
                                    case 3:
                                        n(e[0], e[1], e[2]);
                                        break;
                                    default:
                                        n.apply(void 0, e)
                                }
                            }(n)
                        } finally {
                            d(t), s = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, e(11), e(33))
}, function (t, n, e) {
    "use strict";
    (function (t) {
        var r = e(13);

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var o = setTimeout;

        function a(t) {
            return Boolean(t && void 0 !== t.length)
        }

        function u() {}

        function c(t) {
            if (!(this instanceof c)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(t, this)
        }

        function l(t, n) {
            for (; 3 === t._state;) t = t._value;
            0 !== t._state ? (t._handled = !0, c._immediateFn((function () {
                var e = 1 === t._state ? n.onFulfilled : n.onRejected;
                if (null !== e) {
                    var r;
                    try {
                        r = e(t._value)
                    } catch (t) {
                        return void f(n.promise, t)
                    }
                    s(n.promise, r)
                } else(1 === t._state ? s : f)(n.promise, t._value)
            }))) : t._deferreds.push(n)
        }

        function s(t, n) {
            try {
                if (n === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (n && ("object" === i(n) || "function" == typeof n)) {
                    var e = n.then;
                    if (n instanceof c) return t._state = 3, t._value = n, void h(t);
                    if ("function" == typeof e) return void p((r = e, o = n, function () {
                        r.apply(o, arguments)
                    }), t)
                }
                t._state = 1, t._value = n, h(t)
            } catch (n) {
                f(t, n)
            }
            var r, o
        }

        function f(t, n) {
            t._state = 2, t._value = n, h(t)
        }

        function h(t) {
            2 === t._state && 0 === t._deferreds.length && c._immediateFn((function () {
                t._handled || c._unhandledRejectionFn(t._value)
            }));
            for (var n = 0, e = t._deferreds.length; n < e; n++) l(t, t._deferreds[n]);
            t._deferreds = null
        }

        function d(t, n, e) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof n ? n : null, this.promise = e
        }

        function p(t, n) {
            var e = !1;
            try {
                t((function (t) {
                    e || (e = !0, s(n, t))
                }), (function (t) {
                    e || (e = !0, f(n, t))
                }))
            } catch (t) {
                if (e) return;
                e = !0, f(n, t)
            }
        }
        c.prototype.catch = function (t) {
            return this.then(null, t)
        }, c.prototype.then = function (t, n) {
            var e = new this.constructor(u);
            return l(this, new d(t, n, e)), e
        }, c.prototype.finally = r.a, c.all = function (t) {
            return new c((function (n, e) {
                if (!a(t)) return e(new TypeError("Promise.all accepts an array"));
                var r = Array.prototype.slice.call(t);
                if (0 === r.length) return n([]);
                var o = r.length;

                function u(t, a) {
                    try {
                        if (a && ("object" === i(a) || "function" == typeof a)) {
                            var c = a.then;
                            if ("function" == typeof c) return void c.call(a, (function (n) {
                                u(t, n)
                            }), e)
                        }
                        r[t] = a, 0 == --o && n(r)
                    } catch (t) {
                        e(t)
                    }
                }
                for (var c = 0; c < r.length; c++) u(c, r[c])
            }))
        }, c.resolve = function (t) {
            return t && "object" === i(t) && t.constructor === c ? t : new c((function (n) {
                n(t)
            }))
        }, c.reject = function (t) {
            return new c((function (n, e) {
                e(t)
            }))
        }, c.race = function (t) {
            return new c((function (n, e) {
                if (!a(t)) return e(new TypeError("Promise.race accepts an array"));
                for (var r = 0, i = t.length; r < i; r++) c.resolve(t[r]).then(n, e)
            }))
        }, c._immediateFn = "function" == typeof t && function (n) {
            t(n)
        } || function (t) {
            o(t, 0)
        }, c._unhandledRejectionFn = function (t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }, n.a = c
    }).call(this, e(35).setImmediate)
}, function (t, n, e) {
    "use strict";

    function r() {
        return []
    }
    n.a = function (t) {
        return null == t ? r : function () {
            return this.querySelectorAll(t)
        }
    }
}, function (t, n, e) {
    "use strict";
    n.a = function (t) {
        return function () {
            return this.matches(t)
        }
    }
}, function (t, n, e) {
    "use strict";
    e.d(n, "b", (function () {
        return u
    }));
    var r = e(17);

    function i(t) {
        return function () {
            this.style.removeProperty(t)
        }
    }

    function o(t, n, e) {
        return function () {
            this.style.setProperty(t, n, e)
        }
    }

    function a(t, n, e) {
        return function () {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }

    function u(t, n) {
        return t.style.getPropertyValue(n) || Object(r.a)(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    n.a = function (t, n, e) {
        return arguments.length > 1 ? this.each((null == n ? i : "function" == typeof n ? a : o)(t, n, null == e ? "" : e)) : u(this.node(), t)
    }
}, , function (t, n, e) {
    "use strict";
    e.r(n),
        function (t) {
            e(32);
            var n = e(0),
                r = e.n(n),
                i = e(23),
                o = e(1),
                a = e(21),
                u = e(22),
                c = e(19);
            window.addEventListener("touchmove", (function () {})), t.earth = u.a, t.main = function (t) {
                t = t || {};
                var n = Object(c.a)(t.console),
                    e = {
                        log: n,
                        bridge: t
                    };
                o.n() && n.debug("dev mode enabled"), r.a.defer(u.a, e)
            }, o.o() && r.a.isFunction(window.ga) && window.ga("send", "event", "iframe", document.referrer.split("/")[2] || document.referrer), o.o() && a.a(document.referrer) ? a.b() : o.k() ? i.a("#details").classed("hidden", !0) : t.main()
        }.call(this, e(11))
}, function (t, n, e) {
    "use strict";
    e(25), e(34);
    Math.sign || (Math.sign = function (t) {
        return (t > 0) - (t < 0) || +t
    }), Object.entries || (Object.entries = function (t) {
        return Object.keys(t).map((function (n) {
            return [n, t[n]]
        }))
    }), Object.values || (Object.values = function (t) {
        return Object.keys(t).map((function (n) {
            return t[n]
        }))
    }), Object.assign || Object.defineProperty(Object, "assign", {
        value: function (t, n) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), r = 1; r < arguments.length; r++) {
                var i = arguments[r];
                if (null != i)
                    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
            }
            return e
        },
        writable: !0,
        configurable: !0
    })
}, function (t, n) {
    var e, r, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function u(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
            return e(t, 0)
        } catch (n) {
            try {
                return e.call(null, t, 0)
            } catch (n) {
                return e.call(this, t, 0)
            }
        }
    }! function () {
        try {
            e = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            e = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var c, l = [],
        s = !1,
        f = -1;

    function h() {
        s && c && (s = !1, c.length ? l = c.concat(l) : f = -1, l.length && d())
    }

    function d() {
        if (!s) {
            var t = u(h);
            s = !0;
            for (var n = l.length; n;) {
                for (c = l, l = []; ++f < n;) c && c[f].run();
                f = -1, n = l.length
            }
            c = null, s = !1,
                function (t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (n) {
                        try {
                            return r.call(null, t)
                        } catch (n) {
                            return r.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function p(t, n) {
        this.fun = t, this.array = n
    }

    function v() {}
    i.nextTick = function (t) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
        l.push(new p(t, n)), 1 !== l.length || s || u(d)
    }, p.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function (t) {
        return []
    }, i.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (t, n, e) {
    "use strict";
    (function (t) {
        var n = e(26),
            r = e(13),
            i = function () {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== t) return t;
                throw new Error("unable to locate global object")
            }();
        "Promise" in i ? i.Promise.prototype.finally || (i.Promise.prototype.finally = r.a) : i.Promise = n.a
    }).call(this, e(11))
}, function (t, n, e) {
    (function (t) {
        var r = void 0 !== t && t || "undefined" != typeof self && self || window,
            i = Function.prototype.apply;

        function o(t, n) {
            this._id = t, this._clearFn = n
        }
        n.setTimeout = function () {
            return new o(i.call(setTimeout, r, arguments), clearTimeout)
        }, n.setInterval = function () {
            return new o(i.call(setInterval, r, arguments), clearInterval)
        }, n.clearTimeout = n.clearInterval = function (t) {
            t && t.close()
        }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
            this._clearFn.call(r, this._id)
        }, n.enroll = function (t, n) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = n
        }, n.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, n._unrefActive = n.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var n = t._idleTimeout;
            n >= 0 && (t._idleTimeoutId = setTimeout((function () {
                t._onTimeout && t._onTimeout()
            }), n))
        }, e(25), n.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, n.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, e(11))
}, function (t, n) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}]);
//# sourceMappingURL=bundle.js.map