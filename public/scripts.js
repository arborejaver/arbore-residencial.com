!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(x, t) {
    "use strict";
    function m(t) {
        return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
    }
    function g(t) {
        return null != t && t === t.window
    }
    var e = []
      , n = Object.getPrototypeOf
      , a = e.slice
      , v = e.flat ? function(t) {
        return e.flat.call(t)
    }
    : function(t) {
        return e.concat.apply([], t)
    }
      , l = e.push
      , r = e.indexOf
      , i = {}
      , o = i.toString
      , y = i.hasOwnProperty
      , s = y.toString
      , u = s.call(Object)
      , b = {}
      , C = x.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function _(t, e, n) {
        var i, r, o = (n = n || C).createElement("script");
        if (o.text = t,
        e)
            for (i in c)
                (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function p(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[o.call(t)] || "object" : typeof t
    }
    var d = "3.6.0"
      , A = function(t, e) {
        return new A.fn.init(t,e)
    };
    function h(t) {
        var e = !!t && "length"in t && t.length
          , n = p(t);
        return !m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    A.fn = A.prototype = {
        jquery: d,
        constructor: A,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            t = A.merge(this.constructor(), t);
            return t.prevObject = this,
            t
        },
        each: function(t) {
            return A.each(this, t)
        },
        map: function(n) {
            return this.pushStack(A.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(A.grep(this, function(t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(A.grep(this, function(t, e) {
                return e % 2
            }))
        },
        eq: function(t) {
            var e = this.length
              , t = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= t && t < e ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    },
    A.extend = A.fn.extend = function() {
        var t, e, n, i, r, o = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o,
        o = arguments[s] || {},
        s++),
        "object" == typeof o || m(o) || (o = {}),
        s === a && (o = this,
        s--); s < a; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    n = t[e],
                    "__proto__" !== e && o !== n && (l && n && (A.isPlainObject(n) || (i = Array.isArray(n))) ? (r = o[e],
                    r = i && !Array.isArray(r) ? [] : i || A.isPlainObject(r) ? r : {},
                    i = !1,
                    o[e] = A.extend(l, r, n)) : void 0 !== n && (o[e] = n));
        return o
    }
    ,
    A.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            return !(!t || "[object Object]" !== o.call(t) || (t = n(t)) && ("function" != typeof (t = y.call(t, "constructor") && t.constructor) || s.call(t) !== u))
        },
        isEmptyObject: function(t) {
            for (var e in t)
                return !1;
            return !0
        },
        globalEval: function(t, e, n) {
            _(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function(t, e) {
            var n, i = 0;
            if (h(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                    ;
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break;
            return t
        },
        makeArray: function(t, e) {
            e = e || [];
            return null != t && (h(Object(t)) ? A.merge(e, "string" == typeof t ? [t] : t) : l.call(e, t)),
            e
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : r.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                t[r++] = e[i];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
                !e(t[r], r) != s && i.push(t[r]);
            return i
        },
        map: function(t, e, n) {
            var i, r, o = 0, s = [];
            if (h(t))
                for (i = t.length; o < i; o++)
                    null != (r = e(t[o], o, n)) && s.push(r);
            else
                for (o in t)
                    null != (r = e(t[o], o, n)) && s.push(r);
            return v(s)
        },
        guid: 1,
        support: b
    }),
    "function" == typeof Symbol && (A.fn[Symbol.iterator] = e[Symbol.iterator]),
    A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var f = function(n) {
        function d(t, e) {
            return t = "0x" + t.slice(1) - 65536,
            e || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320))
        }
        function h(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }
        function i() {
            x()
        }
        var t, f, _, o, r, p, m, g, w, l, u, x, C, s, A, v, a, c, y, E = "sizzle" + +new Date, b = n.document, T = 0, k = 0, S = lt(), D = lt(), O = lt(), L = lt(), P = function(t, e) {
            return t === e && (u = !0),
            0
        }, I = {}.hasOwnProperty, e = [], M = e.pop, N = e.push, j = e.push, F = e.slice, z = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", B = "\\[" + R + "*(" + q + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + R + "*\\]", H = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", W = new RegExp(R + "+","g"), U = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), V = new RegExp("^" + R + "*," + R + "*"), Y = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), Z = new RegExp(R + "|>"), X = new RegExp(H), K = new RegExp("^" + q + "$"), G = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            TAG: new RegExp("^(" + q + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + $ + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, Q = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, et = /^[^{]+\{\s*\[native \w/, nt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, it = /[+~]/, rt = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])","g"), ot = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, st = yt(function(t) {
            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            j.apply(e = F.call(b.childNodes), b.childNodes),
            e[b.childNodes.length].nodeType
        } catch (t) {
            j = {
                apply: e.length ? function(t, e) {
                    N.apply(t, F.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        function at(t, e, n, i) {
            var r, o, s, a, l, u, c = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!i && (x(e),
            e = e || C,
            A)) {
                if (11 !== d && (a = nt.exec(t)))
                    if (u = a[1]) {
                        if (9 === d) {
                            if (!(o = e.getElementById(u)))
                                return n;
                            if (o.id === u)
                                return n.push(o),
                                n
                        } else if (c && (o = c.getElementById(u)) && y(e, o) && o.id === u)
                            return n.push(o),
                            n
                    } else {
                        if (a[2])
                            return j.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((u = a[3]) && f.getElementsByClassName && e.getElementsByClassName)
                            return j.apply(n, e.getElementsByClassName(u)),
                            n
                    }
                if (f.qsa && !L[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (u = t,
                    c = e,
                    1 === d && (Z.test(t) || Y.test(t))) {
                        for ((c = it.test(t) && mt(e.parentNode) || e) === e && f.scope || ((s = e.getAttribute("id")) ? s = s.replace(ot, h) : e.setAttribute("id", s = E)),
                        r = (l = p(t)).length; r--; )
                            l[r] = (s ? "#" + s : ":scope") + " " + vt(l[r]);
                        u = l.join(",")
                    }
                    try {
                        return j.apply(n, c.querySelectorAll(u)),
                        n
                    } catch (e) {
                        L(t, !0)
                    } finally {
                        s === E && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(U, "$1"), e, n, i)
        }
        function lt() {
            var i = [];
            return function t(e, n) {
                return i.push(e + " ") > _.cacheLength && delete t[i.shift()],
                t[e + " "] = n
            }
        }
        function ut(t) {
            return t[E] = !0,
            t
        }
        function ct(t) {
            var e = C.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e)
            }
        }
        function dt(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
                _.attrHandle[n[i]] = e
        }
        function ht(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function pt(s) {
            return ut(function(o) {
                return o = +o,
                ut(function(t, e) {
                    for (var n, i = s([], t.length, o), r = i.length; r--; )
                        t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }
        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in f = at.support = {},
        r = at.isXML = function(t) {
            var e = t && t.namespaceURI
              , t = t && (t.ownerDocument || t).documentElement;
            return !Q.test(e || t && t.nodeName || "HTML")
        }
        ,
        x = at.setDocument = function(t) {
            var e, t = t ? t.ownerDocument || t : b;
            return t != C && 9 === t.nodeType && t.documentElement && (s = (C = t).documentElement,
            A = !r(C),
            b != C && (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", i, !1) : e.attachEvent && e.attachEvent("onunload", i)),
            f.scope = ct(function(t) {
                return s.appendChild(t).appendChild(C.createElement("div")),
                void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
            }),
            f.attributes = ct(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            f.getElementsByTagName = ct(function(t) {
                return t.appendChild(C.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            f.getElementsByClassName = et.test(C.getElementsByClassName),
            f.getById = ct(function(t) {
                return s.appendChild(t).id = E,
                !C.getElementsByName || !C.getElementsByName(E).length
            }),
            f.getById ? (_.filter.ID = function(t) {
                var e = t.replace(rt, d);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            _.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && A) {
                    t = e.getElementById(t);
                    return t ? [t] : []
                }
            }
            ) : (_.filter.ID = function(t) {
                var e = t.replace(rt, d);
                return function(t) {
                    t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return t && t.value === e
                }
            }
            ,
            _.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && A) {
                    var n, i, r, o = e.getElementById(t);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t)
                            return [o];
                        for (r = e.getElementsByName(t),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                                return [o]
                    }
                    return []
                }
            }
            ),
            _.find.TAG = f.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" !== t)
                    return o;
                for (; n = o[r++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            _.find.CLASS = f.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && A)
                    return e.getElementsByClassName(t)
            }
            ,
            a = [],
            v = [],
            (f.qsa = et.test(C.querySelectorAll)) && (ct(function(t) {
                var e;
                s.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + $ + ")"),
                t.querySelectorAll("[id~=" + E + "-]").length || v.push("~="),
                (e = C.createElement("input")).setAttribute("name", ""),
                t.appendChild(e),
                t.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                t.querySelectorAll(":checked").length || v.push(":checked"),
                t.querySelectorAll("a#" + E + "+*").length || v.push(".#.+[+~]"),
                t.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ct(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = C.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                s.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (f.matchesSelector = et.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ct(function(t) {
                f.disconnectedMatch = c.call(t, "*"),
                c.call(t, "[s!='']:x"),
                a.push("!=", H)
            }),
            v = v.length && new RegExp(v.join("|")),
            a = a.length && new RegExp(a.join("|")),
            e = et.test(s.compareDocumentPosition),
            y = e || et.test(s.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , e = e && e.parentNode;
                return t === e || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            P = e ? function(t, e) {
                return t === e ? (u = !0,
                0) : (n = !t.compareDocumentPosition - !e.compareDocumentPosition) || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === n ? t == C || t.ownerDocument == b && y(b, t) ? -1 : e == C || e.ownerDocument == b && y(b, e) ? 1 : l ? z(l, t) - z(l, e) : 0 : 4 & n ? -1 : 1);
                var n
            }
            : function(t, e) {
                if (t === e)
                    return u = !0,
                    0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                if (!r || !o)
                    return t == C ? -1 : e == C ? 1 : r ? -1 : o ? 1 : l ? z(l, t) - z(l, e) : 0;
                if (r === o)
                    return ht(t, e);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? ht(s[i], a[i]) : s[i] == b ? -1 : a[i] == b ? 1 : 0
            }
            ),
            C
        }
        ,
        at.matches = function(t, e) {
            return at(t, null, null, e)
        }
        ,
        at.matchesSelector = function(t, e) {
            if (x(t),
            f.matchesSelector && A && !L[e + " "] && (!a || !a.test(e)) && (!v || !v.test(e)))
                try {
                    var n = c.call(t, e);
                    if (n || f.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (t) {
                    L(e, !0)
                }
            return 0 < at(e, C, null, [t]).length
        }
        ,
        at.contains = function(t, e) {
            return (t.ownerDocument || t) != C && x(t),
            y(t, e)
        }
        ,
        at.attr = function(t, e) {
            (t.ownerDocument || t) != C && x(t);
            var n = _.attrHandle[e.toLowerCase()]
              , n = n && I.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !A) : void 0;
            return void 0 !== n ? n : f.attributes || !A ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }
        ,
        at.escape = function(t) {
            return (t + "").replace(ot, h)
        }
        ,
        at.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        at.uniqueSort = function(t) {
            var e, n = [], i = 0, r = 0;
            if (u = !f.detectDuplicates,
            l = !f.sortStable && t.slice(0),
            t.sort(P),
            u) {
                for (; e = t[r++]; )
                    e === t[r] && (i = n.push(r));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return l = null,
            t
        }
        ,
        o = at.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += o(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += o(e);
            return n
        }
        ,
        (_ = at.selectors = {
            cacheLength: 50,
            createPseudo: ut,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(rt, d),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(rt, d),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(rt, d).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = S[t + " "];
                    return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && S(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(t) {
                        t = at.attr(t, e);
                        return null == t ? "!=" === n : !n || (t += "",
                        "=" === n ? t === i : "!=" === n ? t !== i : "^=" === n ? i && 0 === t.indexOf(i) : "*=" === n ? i && -1 < t.indexOf(i) : "$=" === n ? i && t.slice(-i.length) === i : "~=" === n ? -1 < (" " + t.replace(W, " ") + " ").indexOf(i) : "|=" === n && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(p, t, e, m, g) {
                    var v = "nth" !== p.slice(0, 3)
                      , y = "last" !== p.slice(-4)
                      , b = "of-type" === t;
                    return 1 === m && 0 === g ? function(t) {
                        return !!t.parentNode
                    }
                    : function(t, e, n) {
                        var i, r, o, s, a, l, u = v != y ? "nextSibling" : "previousSibling", c = t.parentNode, d = b && t.nodeName.toLowerCase(), h = !n && !b, f = !1;
                        if (c) {
                            if (v) {
                                for (; u; ) {
                                    for (s = t; s = s[u]; )
                                        if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType)
                                            return !1;
                                    l = u = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild],
                            y && h) {
                                for (f = (a = (i = (r = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === T && i[1]) && i[2],
                                s = a && c.childNodes[a]; s = ++a && s && s[u] || (f = a = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++f && s === t) {
                                        r[p] = [T, a, f];
                                        break
                                    }
                            } else if (!1 === (f = h ? a = (i = (r = (o = (s = t)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === T && i[1] : f))
                                for (; (s = ++a && s && s[u] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (h && ((r = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [T, f]),
                                s !== t)); )
                                    ;
                            return (f -= g) === m || f % m == 0 && 0 <= f / m
                        }
                    }
                },
                PSEUDO: function(t, o) {
                    var e, s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                    return s[E] ? s(o) : 1 < s.length ? (e = [t, t, "", o],
                    _.setFilters.hasOwnProperty(t.toLowerCase()) ? ut(function(t, e) {
                        for (var n, i = s(t, o), r = i.length; r--; )
                            t[n = z(t, i[r])] = !(e[n] = i[r])
                    }) : function(t) {
                        return s(t, 0, e)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: ut(function(t) {
                    var i = []
                      , r = []
                      , a = m(t.replace(U, "$1"));
                    return a[E] ? ut(function(t, e, n, i) {
                        for (var r, o = a(t, null, i, []), s = t.length; s--; )
                            (r = o[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, e, n) {
                        return i[0] = t,
                        a(i, null, n, r),
                        i[0] = null,
                        !r.pop()
                    }
                }),
                has: ut(function(e) {
                    return function(t) {
                        return 0 < at(e, t).length
                    }
                }),
                contains: ut(function(e) {
                    return e = e.replace(rt, d),
                    function(t) {
                        return -1 < (t.textContent || o(t)).indexOf(e)
                    }
                }),
                lang: ut(function(n) {
                    return K.test(n || "") || at.error("unsupported lang: " + n),
                    n = n.replace(rt, d).toLowerCase(),
                    function(t) {
                        var e;
                        do {
                            if (e = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var e = n.location && n.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function(t) {
                    return t === s
                },
                focus: function(t) {
                    return t === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: ft(!1),
                disabled: ft(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return tt.test(t.nodeName)
                },
                input: function(t) {
                    return J.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pt(function() {
                    return [0]
                }),
                last: pt(function(t, e) {
                    return [e - 1]
                }),
                eq: pt(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: pt(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: pt(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: pt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i; )
                        t.push(i);
                    return t
                }),
                gt: pt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        }).pseudos.nth = _.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[t] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            _.pseudos[t] = function(n) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === n
                }
            }(t);
        function gt() {}
        function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)
                i += t[e].value;
            return i
        }
        function yt(s, t, e) {
            var a = t.dir
              , l = t.next
              , u = l || a
              , c = e && "parentNode" === u
              , d = k++;
            return t.first ? function(t, e, n) {
                for (; t = t[a]; )
                    if (1 === t.nodeType || c)
                        return s(t, e, n);
                return !1
            }
            : function(t, e, n) {
                var i, r, o = [T, d];
                if (n) {
                    for (; t = t[a]; )
                        if ((1 === t.nodeType || c) && s(t, e, n))
                            return !0
                } else
                    for (; t = t[a]; )
                        if (1 === t.nodeType || c)
                            if (i = (r = t[E] || (t[E] = {}))[t.uniqueID] || (r[t.uniqueID] = {}),
                            l && l === t.nodeName.toLowerCase())
                                t = t[a] || t;
                            else {
                                if ((r = i[u]) && r[0] === T && r[1] === d)
                                    return o[2] = r[2];
                                if ((i[u] = o)[2] = s(t, e, n))
                                    return !0
                            }
                return !1
            }
        }
        function bt(r) {
            return 1 < r.length ? function(t, e, n) {
                for (var i = r.length; i--; )
                    if (!r[i](t, e, n))
                        return !1;
                return !0
            }
            : r[0]
        }
        function _t(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
                (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                u && e.push(a)));
            return s
        }
        function wt(t) {
            for (var i, e, n, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = yt(function(t) {
                return t === i
            }, s, !0), u = yt(function(t) {
                return -1 < z(i, t)
            }, s, !0), c = [function(t, e, n) {
                n = !o && (n || e !== w) || ((i = e).nodeType ? l : u)(t, e, n);
                return i = null,
                n
            }
            ]; a < r; a++)
                if (e = _.relative[t[a].type])
                    c = [yt(bt(c), e)];
                else {
                    if ((e = _.filter[t[a].type].apply(null, t[a].matches))[E]) {
                        for (n = ++a; n < r && !_.relative[t[n].type]; n++)
                            ;
                        return function t(f, p, m, g, v, e) {
                            return g && !g[E] && (g = t(g)),
                            v && !v[E] && (v = t(v, e)),
                            ut(function(t, e, n, i) {
                                var r, o, s, a = [], l = [], u = e.length, c = t || function(t, e, n) {
                                    for (var i = 0, r = e.length; i < r; i++)
                                        at(t, e[i], n);
                                    return n
                                }(p || "*", n.nodeType ? [n] : n, []), d = !f || !t && p ? c : _t(c, a, f, n, i), h = m ? v || (t ? f : u || g) ? [] : e : d;
                                if (m && m(d, h, n, i),
                                g)
                                    for (r = _t(h, l),
                                    g(r, [], n, i),
                                    o = r.length; o--; )
                                        (s = r[o]) && (h[l[o]] = !(d[l[o]] = s));
                                if (t) {
                                    if (v || f) {
                                        if (v) {
                                            for (r = [],
                                            o = h.length; o--; )
                                                (s = h[o]) && r.push(d[o] = s);
                                            v(null, h = [], r, i)
                                        }
                                        for (o = h.length; o--; )
                                            (s = h[o]) && -1 < (r = v ? z(t, s) : a[o]) && (t[r] = !(e[r] = s))
                                    }
                                } else
                                    h = _t(h === e ? h.splice(u, h.length) : h),
                                    v ? v(null, e, h, i) : j.apply(e, h)
                            })
                        }(1 < a && bt(c), 1 < a && vt(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(U, "$1"), e, a < n && wt(t.slice(a, n)), n < r && wt(t = t.slice(n)), n < r && vt(t))
                    }
                    c.push(e)
                }
            return bt(c)
        }
        return gt.prototype = _.filters = _.pseudos,
        _.setFilters = new gt,
        p = at.tokenize = function(t, e) {
            var n, i, r, o, s, a, l, u = D[t + " "];
            if (u)
                return e ? 0 : u.slice(0);
            for (s = t,
            a = [],
            l = _.preFilter; s; ) {
                for (o in n && !(i = V.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                a.push(r = [])),
                n = !1,
                (i = Y.exec(s)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace(U, " ")
                }),
                s = s.slice(n.length)),
                _.filter)
                    !(i = G[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return e ? s.length : s ? at.error(t) : D(t, a).slice(0)
        }
        ,
        m = at.compile = function(t, e) {
            var n, g, v, y, b, i, r = [], o = [], s = O[t + " "];
            if (!s) {
                for (n = (e = e || p(t)).length; n--; )
                    ((s = wt(e[n]))[E] ? r : o).push(s);
                (s = O(t, (y = 0 < (v = r).length,
                b = 0 < (g = o).length,
                i = function(t, e, n, i, r) {
                    var o, s, a, l = 0, u = "0", c = t && [], d = [], h = w, f = t || b && _.find.TAG("*", r), p = T += null == h ? 1 : Math.random() || .1, m = f.length;
                    for (r && (w = e == C || e || r); u !== m && null != (o = f[u]); u++) {
                        if (b && o) {
                            for (s = 0,
                            e || o.ownerDocument == C || (x(o),
                            n = !A); a = g[s++]; )
                                if (a(o, e || C, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (T = p)
                        }
                        y && ((o = !a && o) && l--,
                        t && c.push(o))
                    }
                    if (l += u,
                    y && u !== l) {
                        for (s = 0; a = v[s++]; )
                            a(c, d, e, n);
                        if (t) {
                            if (0 < l)
                                for (; u--; )
                                    c[u] || d[u] || (d[u] = M.call(i));
                            d = _t(d)
                        }
                        j.apply(i, d),
                        r && !t && 0 < d.length && 1 < l + v.length && at.uniqueSort(i)
                    }
                    return r && (T = p,
                    w = h),
                    c
                }
                ,
                y ? ut(i) : i))).selector = t
            }
            return s
        }
        ,
        g = at.select = function(t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t, c = !i && p(t = u.selector || t);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && A && _.relative[o[1].type]) {
                    if (!(e = (_.find.ID(s.matches[0].replace(rt, d), e) || [])[0]))
                        return n;
                    u && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = G.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
                !_.relative[a = s.type]); )
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(rt, d), it.test(o[0].type) && mt(e.parentNode) || e))) {
                        if (o.splice(r, 1),
                        !(t = i.length && vt(o)))
                            return j.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || m(t, c))(i, e, !A, n, !e || it.test(t) && mt(e.parentNode) || e),
            n
        }
        ,
        f.sortStable = E.split("").sort(P).join("") === E,
        f.detectDuplicates = !!u,
        x(),
        f.sortDetached = ct(function(t) {
            return 1 & t.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ct(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || dt("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        f.attributes && ct(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || dt("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        ct(function(t) {
            return null == t.getAttribute("disabled")
        }) || dt($, function(t, e, n) {
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null
        }),
        at
    }(x);
    A.find = f,
    A.expr = f.selectors,
    A.expr[":"] = A.expr.pseudos,
    A.uniqueSort = A.unique = f.uniqueSort,
    A.text = f.getText,
    A.isXMLDoc = f.isXML,
    A.contains = f.contains,
    A.escapeSelector = f.escape;
    function w(t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && A(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
    function E(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
    var T = A.expr.match.needsContext;
    function k(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(t, n, i) {
        return m(n) ? A.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== i
        }) : n.nodeType ? A.grep(t, function(t) {
            return t === n !== i
        }) : "string" != typeof n ? A.grep(t, function(t) {
            return -1 < r.call(n, t) !== i
        }) : A.filter(n, t, i)
    }
    A.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? A.find.matchesSelector(i, t) ? [i] : [] : A.find.matches(t, A.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    A.fn.extend({
        find: function(t) {
            var e, n, i = this.length, r = this;
            if ("string" != typeof t)
                return this.pushStack(A(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (A.contains(r[e], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            e = 0; e < i; e++)
                A.find(t, r[e], n);
            return 1 < i ? A.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(D(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(D(this, t || [], !0))
        },
        is: function(t) {
            return !!D(this, "string" == typeof t && T.test(t) ? A(t) : t || [], !1).length
        }
    });
    var O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (A.fn.init = function(t, e, n) {
        if (!t)
            return this;
        if (n = n || L,
        "string" != typeof t)
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(A) : A.makeArray(t, this);
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !i[1] && e)
            return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
        if (i[1]) {
            if (e = e instanceof A ? e[0] : e,
            A.merge(this, A.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : C, !0)),
            S.test(i[1]) && A.isPlainObject(e))
                for (var i in e)
                    m(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        return (t = C.getElementById(i[2])) && (this[0] = t,
        this.length = 1),
        this
    }
    ).prototype = A.fn;
    var L = A(C)
      , P = /^(?:parents|prev(?:Until|All))/
      , I = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function M(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    A.fn.extend({
        has: function(t) {
            var e = A(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (A.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof t && A(t);
            if (!T.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && A.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? A.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? r.call(A(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(A.uniqueSort(A.merge(this.get(), A(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    A.each({
        parent: function(t) {
            t = t.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(t) {
            return w(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return w(t, "parentNode", n)
        },
        next: function(t) {
            return M(t, "nextSibling")
        },
        prev: function(t) {
            return M(t, "previousSibling")
        },
        nextAll: function(t) {
            return w(t, "nextSibling")
        },
        prevAll: function(t) {
            return w(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return w(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return w(t, "previousSibling", n)
        },
        siblings: function(t) {
            return E((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return E(t.firstChild)
        },
        contents: function(t) {
            return null != t.contentDocument && n(t.contentDocument) ? t.contentDocument : (k(t, "template") && (t = t.content || t),
            A.merge([], t.childNodes))
        }
    }, function(i, r) {
        A.fn[i] = function(t, e) {
            var n = A.map(this, r, t);
            return (e = "Until" !== i.slice(-5) ? t : e) && "string" == typeof e && (n = A.filter(e, n)),
            1 < this.length && (I[i] || A.uniqueSort(n),
            P.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;
    function j(t) {
        return t
    }
    function F(t) {
        throw t
    }
    function z(t, e, n, i) {
        var r;
        try {
            t && m(r = t.promise) ? r.call(t).done(e).fail(n) : t && m(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    A.Callbacks = function(i) {
        var t, n;
        i = "string" == typeof i ? (t = i,
        n = {},
        A.each(t.match(N) || [], function(t, e) {
            n[e] = !0
        }),
        n) : A.extend({}, i);
        function r() {
            for (a = a || i.once,
            s = o = !0; u.length; c = -1)
                for (e = u.shift(); ++c < l.length; )
                    !1 === l[c].apply(e[0], e[1]) && i.stopOnFalse && (c = l.length,
                    e = !1);
            i.memory || (e = !1),
            o = !1,
            a && (l = e ? [] : "")
        }
        var o, e, s, a, l = [], u = [], c = -1, d = {
            add: function() {
                return l && (e && !o && (c = l.length - 1,
                u.push(e)),
                function n(t) {
                    A.each(t, function(t, e) {
                        m(e) ? i.unique && d.has(e) || l.push(e) : e && e.length && "string" !== p(e) && n(e)
                    })
                }(arguments),
                e && !o && r()),
                this
            },
            remove: function() {
                return A.each(arguments, function(t, e) {
                    for (var n; -1 < (n = A.inArray(e, l, n)); )
                        l.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(t) {
                return t ? -1 < A.inArray(t, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return a = u = [],
                l = e = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return a = u = [],
                e || o || (l = e = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(t, e) {
                return a || (e = [t, (e = e || []).slice ? e.slice() : e],
                u.push(e),
                o || r()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return d
    }
    ,
    A.extend({
        Deferred: function(t) {
            var o = [["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2], ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , s = {
                state: function() {
                    return r
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return s.then(null, t)
                },
                pipe: function() {
                    var r = arguments;
                    return A.Deferred(function(i) {
                        A.each(o, function(t, e) {
                            var n = m(r[e[4]]) && r[e[4]];
                            a[e[1]](function() {
                                var t = n && n.apply(this, arguments);
                                t && m(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(e, n, i) {
                    var l = 0;
                    function u(r, o, s, a) {
                        return function() {
                            function t() {
                                var t, e;
                                if (!(r < l)) {
                                    if ((t = s.apply(n, i)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    e = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    m(e) ? a ? e.call(t, u(l, o, j, a), u(l, o, F, a)) : (l++,
                                    e.call(t, u(l, o, j, a), u(l, o, F, a), u(l, o, j, o.notifyWith))) : (s !== j && (n = void 0,
                                    i = [t]),
                                    (a || o.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , e = a ? t : function() {
                                try {
                                    t()
                                } catch (t) {
                                    A.Deferred.exceptionHook && A.Deferred.exceptionHook(t, e.stackTrace),
                                    l <= r + 1 && (s !== F && (n = void 0,
                                    i = [t]),
                                    o.rejectWith(n, i))
                                }
                            }
                            ;
                            r ? e() : (A.Deferred.getStackHook && (e.stackTrace = A.Deferred.getStackHook()),
                            x.setTimeout(e))
                        }
                    }
                    return A.Deferred(function(t) {
                        o[0][3].add(u(0, t, m(i) ? i : j, t.notifyWith)),
                        o[1][3].add(u(0, t, m(e) ? e : j)),
                        o[2][3].add(u(0, t, m(n) ? n : F))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? A.extend(t, s) : s
                }
            }
              , a = {};
            return A.each(o, function(t, e) {
                var n = e[2]
                  , i = e[5];
                s[e[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(e[3].fire),
                a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[e[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            t && t.call(a, a),
            a
        },
        when: function(t) {
            function e(e) {
                return function(t) {
                    r[e] = this,
                    o[e] = 1 < arguments.length ? a.call(arguments) : t,
                    --n || s.resolveWith(r, o)
                }
            }
            var n = arguments.length
              , i = n
              , r = Array(i)
              , o = a.call(arguments)
              , s = A.Deferred();
            if (n <= 1 && (z(t, s.done(e(i)).resolve, s.reject, !n),
            "pending" === s.state() || m(o[i] && o[i].then)))
                return s.then();
            for (; i--; )
                z(o[i], e(i), s.reject);
            return s.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    A.Deferred.exceptionHook = function(t, e) {
        x.console && x.console.warn && t && $.test(t.name) && x.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }
    ,
    A.readyException = function(t) {
        x.setTimeout(function() {
            throw t
        })
    }
    ;
    var R = A.Deferred();
    function q() {
        C.removeEventListener("DOMContentLoaded", q),
        x.removeEventListener("load", q),
        A.ready()
    }
    A.fn.ready = function(t) {
        return R.then(t).catch(function(t) {
            A.readyException(t)
        }),
        this
    }
    ,
    A.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --A.readyWait : A.isReady) || (A.isReady = !0) !== t && 0 < --A.readyWait || R.resolveWith(C, [A])
        }
    }),
    A.ready.then = R.then,
    "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? x.setTimeout(A.ready) : (C.addEventListener("DOMContentLoaded", q),
    x.addEventListener("load", q));
    function B(t, e, n, i, r, o, s) {
        var a = 0
          , l = t.length
          , u = null == n;
        if ("object" === p(n))
            for (a in r = !0,
            n)
                B(t, e, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        m(i) || (s = !0),
        e = u ? s ? (e.call(t, i),
        null) : (u = e,
        function(t, e, n) {
            return u.call(A(t), n)
        }
        ) : e))
            for (; a < l; a++)
                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    }
    var H = /^-ms-/
      , W = /-([a-z])/g;
    function U(t, e) {
        return e.toUpperCase()
    }
    function V(t) {
        return t.replace(H, "ms-").replace(W, U)
    }
    function Y(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }
    function Z() {
        this.expando = A.expando + Z.uid++
    }
    Z.uid = 1,
    Z.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e)
                r[V(e)] = n;
            else
                for (i in e)
                    r[V(i)] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(V) : (e = V(e))in i ? [e] : e.match(N) || []).length;
                    for (; n--; )
                        delete i[e[n]]
                }
                void 0 !== e && !A.isEmptyObject(i) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            t = t[this.expando];
            return void 0 !== t && !A.isEmptyObject(t)
        }
    };
    var X = new Z
      , K = new Z
      , G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Q = /[A-Z]/g;
    function J(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Q, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                K.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    A.extend({
        hasData: function(t) {
            return K.hasData(t) || X.hasData(t)
        },
        data: function(t, e, n) {
            return K.access(t, e, n)
        },
        removeData: function(t, e) {
            K.remove(t, e)
        },
        _data: function(t, e, n) {
            return X.access(t, e, n)
        },
        _removeData: function(t, e) {
            X.remove(t, e)
        }
    }),
    A.fn.extend({
        data: function(n, t) {
            var e, i, r, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    K.set(this, n)
                }) : B(this, function(t) {
                    var e;
                    return o && void 0 === t ? void 0 !== (e = K.get(o, n)) || void 0 !== (e = J(o, n)) ? e : void 0 : void this.each(function() {
                        K.set(this, n, t)
                    })
                }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = K.get(o),
            1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (e = s.length; e--; )
                    s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = V(i.slice(5)),
                    J(o, i, r[i]));
                X.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(t) {
            return this.each(function() {
                K.remove(this, t)
            })
        }
    }),
    A.extend({
        queue: function(t, e, n) {
            var i;
            if (t)
                return i = X.get(t, e = (e || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = X.access(t, e, A.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = A.queue(t, e)
              , i = n.length
              , r = n.shift()
              , o = A._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            r.call(t, function() {
                A.dequeue(t, e)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return X.get(t, n) || X.access(t, n, {
                empty: A.Callbacks("once memory").add(function() {
                    X.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    A.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            t--),
            arguments.length < t ? A.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                var t = A.queue(this, e, n);
                A._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && A.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                A.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            function n() {
                --r || o.resolveWith(s, [s])
            }
            var i, r = 1, o = A.Deferred(), s = this, a = this.length;
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; a--; )
                (i = X.get(s[a], t + "queueHooks")) && i.empty && (r++,
                i.empty.add(n));
            return n(),
            o.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$","i")
      , nt = ["Top", "Right", "Bottom", "Left"]
      , it = C.documentElement
      , rt = function(t) {
        return A.contains(t.ownerDocument, t)
    }
      , ot = {
        composed: !0
    };
    it.getRootNode && (rt = function(t) {
        return A.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
    }
    );
    function st(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === A.css(t, "display")
    }
    function at(t, e, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return A.css(t, e, "")
        }
        , l = a(), u = n && n[3] || (A.cssNumber[e] ? "" : "px"), c = t.nodeType && (A.cssNumber[e] || "px" !== u && +l) && et.exec(A.css(t, e));
        if (c && c[3] !== u) {
            for (u = u || c[3],
            c = +(l /= 2) || 1; s--; )
                A.style(t, e, c + u),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                c /= o;
            A.style(t, e, (c *= 2) + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    var lt = {};
    function ut(t, e) {
        for (var n, i, r, o, s, a, l = [], u = 0, c = t.length; u < c; u++)
            (i = t[u]).style && (n = i.style.display,
            e ? ("none" === n && (l[u] = X.get(i, "display") || null,
            l[u] || (i.style.display = "")),
            "" === i.style.display && st(i) && (l[u] = (a = o = r = void 0,
            o = i.ownerDocument,
            s = i.nodeName,
            (a = lt[s]) || (r = o.body.appendChild(o.createElement(s)),
            a = A.css(r, "display"),
            r.parentNode.removeChild(r),
            lt[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[u] = "none",
            X.set(i, "display", n)));
        for (u = 0; u < c; u++)
            null != l[u] && (t[u].style.display = l[u]);
        return t
    }
    A.fn.extend({
        show: function() {
            return ut(this, !0)
        },
        hide: function() {
            return ut(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                st(this) ? A(this).show() : A(this).hide()
            })
        }
    });
    var ct = /^(?:checkbox|radio)$/i
      , dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , ht = /^$|^module$|\/(?:java|ecma)script/i
      , d = C.createDocumentFragment().appendChild(C.createElement("div"));
    (f = C.createElement("input")).setAttribute("type", "radio"),
    f.setAttribute("checked", "checked"),
    f.setAttribute("name", "t"),
    d.appendChild(f),
    b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked,
    d.innerHTML = "<textarea>x</textarea>",
    b.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue,
    d.innerHTML = "<option></option>",
    b.option = !!d.lastChild;
    var ft = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function pt(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && k(t, e) ? A.merge([t], n) : n
    }
    function mt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
            X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"))
    }
    ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead,
    ft.th = ft.td,
    b.option || (ft.optgroup = ft.option = [1, "<select multiple='multiple'>", "</select>"]);
    var gt = /<|&#?\w+;/;
    function vt(t, e, n, i, r) {
        for (var o, s, a, l, u, c = e.createDocumentFragment(), d = [], h = 0, f = t.length; h < f; h++)
            if ((o = t[h]) || 0 === o)
                if ("object" === p(o))
                    A.merge(d, o.nodeType ? [o] : o);
                else if (gt.test(o)) {
                    for (s = s || c.appendChild(e.createElement("div")),
                    a = (dt.exec(o) || ["", ""])[1].toLowerCase(),
                    a = ft[a] || ft._default,
                    s.innerHTML = a[1] + A.htmlPrefilter(o) + a[2],
                    u = a[0]; u--; )
                        s = s.lastChild;
                    A.merge(d, s.childNodes),
                    (s = c.firstChild).textContent = ""
                } else
                    d.push(e.createTextNode(o));
        for (c.textContent = "",
        h = 0; o = d[h++]; )
            if (i && -1 < A.inArray(o, i))
                r && r.push(o);
            else if (l = rt(o),
            s = pt(c.appendChild(o), "script"),
            l && mt(s),
            n)
                for (u = 0; o = s[u++]; )
                    ht.test(o.type || "") && n.push(o);
        return c
    }
    var yt = /^([^.]*)(?:\.(.+)|)/;
    function bt() {
        return !0
    }
    function _t() {
        return !1
    }
    function wt(t, e) {
        return t === function() {
            try {
                return C.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }
    function xt(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            e)
                xt(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = _t;
        else if (!r)
            return t;
        return 1 === o && (s = r,
        (r = function(t) {
            return A().off(t),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = A.guid++)),
        t.each(function() {
            A.event.add(this, e, r, i, n)
        })
    }
    function Ct(t, r, o) {
        o ? (X.set(t, r, !1),
        A.event.add(t, r, {
            namespace: !1,
            handler: function(t) {
                var e, n, i = X.get(this, r);
                if (1 & t.isTrigger && this[r]) {
                    if (i.length)
                        (A.event.special[r] || {}).delegateType && t.stopPropagation();
                    else if (i = a.call(arguments),
                    X.set(this, r, i),
                    e = o(this, r),
                    this[r](),
                    i !== (n = X.get(this, r)) || e ? X.set(this, r, !1) : n = {},
                    i !== n)
                        return t.stopImmediatePropagation(),
                        t.preventDefault(),
                        n && n.value
                } else
                    i.length && (X.set(this, r, {
                        value: A.event.trigger(A.extend(i[0], A.Event.prototype), i.slice(1), this)
                    }),
                    t.stopImmediatePropagation())
            }
        })) : void 0 === X.get(t, r) && A.event.add(t, r, bt)
    }
    A.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, h, f, p = X.get(e);
            if (Y(e))
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && A.find.matchesSelector(it, r),
                n.guid || (n.guid = A.guid++),
                (a = p.events) || (a = p.events = Object.create(null)),
                (s = p.handle) || (s = p.handle = function(t) {
                    return void 0 !== A && A.event.triggered !== t.type ? A.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(N) || [""]).length; l--; )
                    d = f = (u = yt.exec(t[l]) || [])[1],
                    h = (u[2] || "").split(".").sort(),
                    d && (c = A.event.special[d] || {},
                    d = (r ? c.delegateType : c.bindType) || d,
                    c = A.event.special[d] || {},
                    u = A.extend({
                        type: d,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && A.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o),
                    (f = a[d]) || ((f = a[d] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(d, s)),
                    c.add && (c.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    A.event.global[d] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, h, f, p, m, g = X.hasData(t) && X.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(N) || [""]).length; u--; )
                    if (f = m = (a = yt.exec(e[u]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f) {
                        for (d = A.event.special[f] || {},
                        h = l[f = (i ? d.delegateType : d.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            c = h[o],
                            !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1),
                            c.selector && h.delegateCount--,
                            d.remove && d.remove.call(t, c));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || A.removeEvent(t, f, g.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            A.event.remove(t, f + e[u], n, i, !0);
                A.isEmptyObject(l) && X.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, r, o, s = new Array(arguments.length), a = A.event.fix(t), l = (X.get(this, "events") || Object.create(null))[a.type] || [], t = A.event.special[a.type] || {};
            for (s[0] = a,
            e = 1; e < arguments.length; e++)
                s[e] = arguments[e];
            if (a.delegateTarget = this,
            !t.preDispatch || !1 !== t.preDispatch.call(this, a)) {
                for (o = A.event.handlers.call(this, a, l),
                e = 0; (i = o[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem,
                    n = 0; (r = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                        a.data = r.data,
                        void 0 !== (r = ((A.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(),
                        a.stopPropagation()));
                return t.postDispatch && t.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s, a = [], l = e.delegateCount, u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < A(r, this).index(u) : A.find(r, this, null, [u]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(A.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(t) {
            return t[A.expando] ? t : new A.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    t = this || t;
                    return ct.test(t.type) && t.click && k(t, "input") && Ct(t, "click", bt),
                    !1
                },
                trigger: function(t) {
                    t = this || t;
                    return ct.test(t.type) && t.click && k(t, "input") && Ct(t, "click"),
                    !0
                },
                _default: function(t) {
                    t = t.target;
                    return ct.test(t.type) && t.click && k(t, "input") && X.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    A.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    A.Event = function(t, e) {
        if (!(this instanceof A.Event))
            return new A.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? bt : _t,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && A.extend(this, e),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[A.expando] = !0
    }
    ,
    A.Event.prototype = {
        constructor: A.Event,
        isDefaultPrevented: _t,
        isPropagationStopped: _t,
        isImmediatePropagationStopped: _t,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = bt,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = bt,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = bt,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    A.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, A.event.addProp),
    A.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        A.event.special[t] = {
            setup: function() {
                return Ct(this, t, wt),
                !1
            },
            trigger: function() {
                return Ct(this, t),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: e
        }
    }),
    A.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, r) {
        A.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function(t) {
                var e, n = t.relatedTarget, i = t.handleObj;
                return n && (n === this || A.contains(this, n)) || (t.type = i.origType,
                e = i.handler.apply(this, arguments),
                t.type = r),
                e
            }
        }
    }),
    A.fn.extend({
        on: function(t, e, n, i) {
            return xt(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return xt(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                A(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof t)
                return !1 !== e && "function" != typeof e || (n = e,
                e = void 0),
                !1 === n && (n = _t),
                this.each(function() {
                    A.event.remove(this, t, n, e)
                });
            for (r in t)
                this.off(r, e, t[r]);
            return this
        }
    });
    var At = /<script|<style|<link/i
      , Et = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function kt(t, e) {
        return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && A(t).children("tbody")[0] || t
    }
    function St(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function Dt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
        t
    }
    function Ot(t, e) {
        var n, i, r, o;
        if (1 === e.nodeType) {
            if (X.hasData(t) && (o = X.get(t).events))
                for (r in X.remove(e, "handle events"),
                o)
                    for (n = 0,
                    i = o[r].length; n < i; n++)
                        A.event.add(e, r, o[r][n]);
            K.hasData(t) && (t = K.access(t),
            t = A.extend({}, t),
            K.set(e, t))
        }
    }
    function Lt(n, i, r, o) {
        i = v(i);
        var t, e, s, a, l, u, c = 0, d = n.length, h = d - 1, f = i[0], p = m(f);
        if (p || 1 < d && "string" == typeof f && !b.checkClone && Et.test(f))
            return n.each(function(t) {
                var e = n.eq(t);
                p && (i[0] = f.call(this, t, e.html())),
                Lt(e, i, r, o)
            });
        if (d && (e = (t = vt(i, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === t.childNodes.length && (t = e),
        e || o)) {
            for (a = (s = A.map(pt(t, "script"), St)).length; c < d; c++)
                l = t,
                c !== h && (l = A.clone(l, !0, !0),
                a && A.merge(s, pt(l, "script"))),
                r.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                A.map(s, Dt),
                c = 0; c < a; c++)
                    l = s[c],
                    ht.test(l.type || "") && !X.access(l, "globalEval") && A.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? A._evalUrl && !l.noModule && A._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : _(l.textContent.replace(Tt, ""), l, u))
        }
        return n
    }
    function Pt(t, e, n) {
        for (var i, r = e ? A.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || A.cleanData(pt(i)),
            i.parentNode && (n && rt(i) && mt(pt(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    A.extend({
        htmlPrefilter: function(t) {
            return t
        },
        clone: function(t, e, n) {
            var i, r, o, s, a, l, u, c = t.cloneNode(!0), d = rt(t);
            if (!(b.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || A.isXMLDoc(t)))
                for (s = pt(c),
                i = 0,
                r = (o = pt(t)).length; i < r; i++)
                    a = o[i],
                    "input" === (u = (l = s[i]).nodeName.toLowerCase()) && ct.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || pt(t),
                    s = s || pt(c),
                    i = 0,
                    r = o.length; i < r; i++)
                        Ot(o[i], s[i]);
                else
                    Ot(t, c);
            return 0 < (s = pt(c, "script")).length && mt(s, !d && pt(t, "script")),
            c
        },
        cleanData: function(t) {
            for (var e, n, i, r = A.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (Y(n)) {
                    if (e = n[X.expando]) {
                        if (e.events)
                            for (i in e.events)
                                r[i] ? A.event.remove(n, i) : A.removeEvent(n, i, e.handle);
                        n[X.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    A.fn.extend({
        detach: function(t) {
            return Pt(this, t, !0)
        },
        remove: function(t) {
            return Pt(this, t)
        },
        text: function(t) {
            return B(this, function(t) {
                return void 0 === t ? A.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return Lt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || kt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return Lt(this, arguments, function(t) {
                var e;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = kt(this, t)).insertBefore(t, e.firstChild)
            })
        },
        before: function() {
            return Lt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return Lt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (A.cleanData(pt(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return A.clone(this, t, e)
            })
        },
        html: function(t) {
            return B(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !ft[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = A.htmlPrefilter(t);
                    try {
                        for (; n < i; n++)
                            1 === (e = this[n] || {}).nodeType && (A.cleanData(pt(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Lt(this, arguments, function(t) {
                var e = this.parentNode;
                A.inArray(this, n) < 0 && (A.cleanData(pt(this)),
                e && e.replaceChild(t, this))
            }, n)
        }
    }),
    A.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, s) {
        A.fn[t] = function(t) {
            for (var e, n = [], i = A(t), r = i.length - 1, o = 0; o <= r; o++)
                e = o === r ? this : this.clone(!0),
                A(i[o])[s](e),
                l.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    function It(t) {
        var e = t.ownerDocument.defaultView;
        return (e = !e || !e.opener ? x : e).getComputedStyle(t)
    }
    function Mt(t, e, n) {
        var i, r = {};
        for (i in e)
            r[i] = t.style[i],
            t.style[i] = e[i];
        for (i in n = n.call(t),
        e)
            t.style[i] = r[i];
        return n
    }
    var Nt, jt, Ft, zt, $t, Rt, qt, Bt, Ht = new RegExp("^(" + tt + ")(?!px)[a-z%]+$","i"), Wt = new RegExp(nt.join("|"),"i");
    function Ut(t, e, n) {
        var i, r, o = t.style;
        return (n = n || It(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || rt(t) || (r = A.style(t, e)),
        !b.pixelBoxStyles() && Ht.test(r) && Wt.test(e) && (i = o.width,
        t = o.minWidth,
        e = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = r,
        r = n.width,
        o.width = i,
        o.minWidth = t,
        o.maxWidth = e)),
        void 0 !== r ? r + "" : r
    }
    function Vt(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    function Yt() {
        var t;
        Bt && (qt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        Bt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        it.appendChild(qt).appendChild(Bt),
        t = x.getComputedStyle(Bt),
        Nt = "1%" !== t.top,
        Rt = 12 === Zt(t.marginLeft),
        Bt.style.right = "60%",
        zt = 36 === Zt(t.right),
        jt = 36 === Zt(t.width),
        Bt.style.position = "absolute",
        Ft = 12 === Zt(Bt.offsetWidth / 3),
        it.removeChild(qt),
        Bt = null)
    }
    function Zt(t) {
        return Math.round(parseFloat(t))
    }
    qt = C.createElement("div"),
    (Bt = C.createElement("div")).style && (Bt.style.backgroundClip = "content-box",
    Bt.cloneNode(!0).style.backgroundClip = "",
    b.clearCloneStyle = "content-box" === Bt.style.backgroundClip,
    A.extend(b, {
        boxSizingReliable: function() {
            return Yt(),
            jt
        },
        pixelBoxStyles: function() {
            return Yt(),
            zt
        },
        pixelPosition: function() {
            return Yt(),
            Nt
        },
        reliableMarginLeft: function() {
            return Yt(),
            Rt
        },
        scrollboxSize: function() {
            return Yt(),
            Ft
        },
        reliableTrDimensions: function() {
            var t, e, n;
            return null == $t && (t = C.createElement("table"),
            e = C.createElement("tr"),
            n = C.createElement("div"),
            t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            e.style.cssText = "border:1px solid",
            e.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            it.appendChild(t).appendChild(e).appendChild(n),
            n = x.getComputedStyle(e),
            $t = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === e.offsetHeight,
            it.removeChild(t)),
            $t
        }
    }));
    var Xt = ["Webkit", "Moz", "ms"]
      , Kt = C.createElement("div").style
      , Gt = {};
    function Qt(t) {
        return A.cssProps[t] || Gt[t] || (t in Kt ? t : Gt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = Xt.length; n--; )
                if ((t = Xt[n] + e)in Kt)
                    return t
        }(t) || t)
    }
    var Jt = /^(none|table(?!-c[ea]).+)/
      , te = /^--/
      , ee = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ne = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function ie(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function re(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += A.css(t, n + nt[s], !0, r)),
            i ? ("content" === n && (l -= A.css(t, "padding" + nt[s], !0, r)),
            "margin" !== n && (l -= A.css(t, "border" + nt[s] + "Width", !0, r))) : (l += A.css(t, "padding" + nt[s], !0, r),
            "padding" !== n ? l += A.css(t, "border" + nt[s] + "Width", !0, r) : a += A.css(t, "border" + nt[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0),
        l
    }
    function oe(t, e, n) {
        var i = It(t)
          , r = (!b.boxSizingReliable() || n) && "border-box" === A.css(t, "boxSizing", !1, i)
          , o = r
          , s = Ut(t, e, i)
          , a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Ht.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!b.boxSizingReliable() && r || !b.reliableTrDimensions() && k(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === A.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === A.css(t, "boxSizing", !1, i),
        (o = a in t) && (s = t[a])),
        (s = parseFloat(s) || 0) + re(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
    }
    function se(t, e, n, i, r) {
        return new se.prototype.init(t,e,n,i,r)
    }
    A.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        t = Ut(t, "opacity");
                        return "" === t ? "1" : t
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = V(e), l = te.test(e), u = t.style;
                if (l || (e = Qt(a)),
                s = A.cssHooks[e] || A.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                "string" == (o = typeof n) && (r = et.exec(n)) && r[1] && (n = at(t, e, r),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (A.cssNumber[a] ? "" : "px")),
                b.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
            }
        },
        css: function(t, e, n, i) {
            var r, o = V(e);
            return te.test(e) || (e = Qt(o)),
            "normal" === (r = void 0 === (r = (o = A.cssHooks[e] || A.cssHooks[o]) && "get"in o ? o.get(t, !0, n) : r) ? Ut(t, e, i) : r) && e in ne && (r = ne[e]),
            "" === n || n ? (e = parseFloat(r),
            !0 === n || isFinite(e) ? e || 0 : r) : r
        }
    }),
    A.each(["height", "width"], function(t, a) {
        A.cssHooks[a] = {
            get: function(t, e, n) {
                if (e)
                    return !Jt.test(A.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? oe(t, a, n) : Mt(t, ee, function() {
                        return oe(t, a, n)
                    })
            },
            set: function(t, e, n) {
                var i, r = It(t), o = !b.scrollboxSize() && "absolute" === r.position, s = (o || n) && "border-box" === A.css(t, "boxSizing", !1, r), n = n ? re(t, a, n, s, r) : 0;
                return s && o && (n -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - re(t, a, "border", !1, r) - .5)),
                n && (i = et.exec(e)) && "px" !== (i[3] || "px") && (t.style[a] = e,
                e = A.css(t, a)),
                ie(0, e, n)
            }
        }
    }),
    A.cssHooks.marginLeft = Vt(b.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - Mt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    A.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        A.cssHooks[r + o] = {
            expand: function(t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                    n[r + nt[e] + o] = i[e] || i[e - 2] || i[0];
                return n
            }
        },
        "margin" !== r && (A.cssHooks[r + o].set = ie)
    }),
    A.fn.extend({
        css: function(t, e) {
            return B(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(e)) {
                    for (i = It(t),
                    r = e.length; s < r; s++)
                        o[e[s]] = A.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? A.style(t, e, n) : A.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }),
    ((A.Tween = se).prototype = {
        constructor: se,
        init: function(t, e, n, i, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || A.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (A.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = se.propHooks[this.prop];
            return (t && t.get ? t : se.propHooks._default).get(this)
        },
        run: function(t) {
            var e, n = se.propHooks[this.prop];
            return this.options.duration ? this.pos = e = A.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : se.propHooks._default).set(this),
            this
        }
    }).init.prototype = se.prototype,
    (se.propHooks = {
        _default: {
            get: function(t) {
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = A.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(t) {
                A.fx.step[t.prop] ? A.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !A.cssHooks[t.prop] && null == t.elem.style[Qt(t.prop)] ? t.elem[t.prop] = t.now : A.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = se.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    A.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    A.fx = se.prototype.init,
    A.fx.step = {};
    var ae, le, ue = /^(?:toggle|show|hide)$/, ce = /queueHooks$/;
    function de() {
        le && (!1 === C.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(de) : x.setTimeout(de, A.fx.interval),
        A.fx.tick())
    }
    function he() {
        return x.setTimeout(function() {
            ae = void 0
        }),
        ae = Date.now()
    }
    function fe(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function pe(t, e, n) {
        for (var i, r = (me.tweeners[e] || []).concat(me.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function me(r, t, e) {
        var n, o, i = 0, s = me.prefilters.length, a = A.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = ae || he(), t = Math.max(0, u.startTime + u.duration - t), e = 1 - (t / u.duration || 0), n = 0, i = u.tweens.length; n < i; n++)
                u.tweens[n].run(e);
            return a.notifyWith(r, [u, e, t]),
            e < 1 && i ? t : (i || a.notifyWith(r, [u, 1, 0]),
            a.resolveWith(r, [u]),
            !1)
        }, u = a.promise({
            elem: r,
            props: A.extend({}, t),
            opts: A.extend(!0, {
                specialEasing: {},
                easing: A.easing._default
            }, e),
            originalProperties: t,
            originalOptions: e,
            startTime: ae || he(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                t = A.Tween(r, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(t),
                t
            },
            stop: function(t) {
                var e = 0
                  , n = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; e < n; e++)
                    u.tweens[e].run(1);
                return t ? (a.notifyWith(r, [u, 1, 0]),
                a.resolveWith(r, [u, t])) : a.rejectWith(r, [u, t]),
                this
            }
        }), c = u.props;
        for (function(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (r = e[i = V(n)],
                o = t[n],
                Array.isArray(o) && (r = o[1],
                o = t[n] = o[0]),
                n !== i && (t[i] = o,
                delete t[n]),
                (s = A.cssHooks[i]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete t[i],
                    o)
                        n in t || (t[n] = o[n],
                        e[n] = r);
                else
                    e[i] = r
        }(c, u.opts.specialEasing); i < s; i++)
            if (n = me.prefilters[i].call(u, r, c, u.opts))
                return m(n.stop) && (A._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
                n;
        return A.map(c, pe, u),
        m(u.opts.start) && u.opts.start.call(r, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        A.fx.timer(A.extend(l, {
            elem: r,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    A.Animation = A.extend(me, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return at(n.elem, t, et.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            for (var n, i = 0, r = (t = m(t) ? (e = t,
            ["*"]) : t.match(N)).length; i < r; i++)
                n = t[i],
                me.tweeners[n] = me.tweeners[n] || [],
                me.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, r, o, s, a, l, u, c = "width"in e || "height"in e, d = this, h = {}, f = t.style, p = t.nodeType && st(t), m = X.get(t, "fxshow");
            for (i in n.queue || (null == (s = A._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    A.queue(t, "fx").length || s.empty.fire()
                })
            })),
            e)
                if (r = e[i],
                ue.test(r)) {
                    if (delete e[i],
                    o = o || "toggle" === r,
                    r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        p = !0
                    }
                    h[i] = m && m[i] || A.style(t, i)
                }
            if ((l = !A.isEmptyObject(e)) || !A.isEmptyObject(h))
                for (i in c && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (u = m && m.display) && (u = X.get(t, "display")),
                "none" === (c = A.css(t, "display")) && (u ? c = u : (ut([t], !0),
                u = t.style.display || u,
                c = A.css(t, "display"),
                ut([t]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === A.css(t, "float") && (l || (d.done(function() {
                    f.display = u
                }),
                null == u && (c = f.display,
                u = "none" === c ? "" : c)),
                f.display = "inline-block")),
                n.overflow && (f.overflow = "hidden",
                d.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                })),
                l = !1,
                h)
                    l || (m ? "hidden"in m && (p = m.hidden) : m = X.access(t, "fxshow", {
                        display: u
                    }),
                    o && (m.hidden = !p),
                    p && ut([t], !0),
                    d.done(function() {
                        for (i in p || ut([t]),
                        X.remove(t, "fxshow"),
                        h)
                            A.style(t, i, h[i])
                    })),
                    l = pe(p ? m[i] : 0, i, d),
                    i in m || (m[i] = l.start,
                    p && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(t, e) {
            e ? me.prefilters.unshift(t) : me.prefilters.push(t)
        }
    }),
    A.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? A.extend({}, t) : {
            complete: n || !n && e || m(t) && t,
            duration: t,
            easing: n && e || e && !m(e) && e
        };
        return A.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in A.fx.speeds ? i.duration = A.fx.speeds[i.duration] : i.duration = A.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            m(i.old) && i.old.call(this),
            i.queue && A.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    A.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(e, t, n, i) {
            var r = A.isEmptyObject(e)
              , o = A.speed(t, n, i)
              , i = function() {
                var t = me(this, A.extend({}, e), o);
                (r || X.get(this, "finish")) && t.stop(!0)
            };
            return i.finish = i,
            r || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
        },
        stop: function(r, t, o) {
            function s(t) {
                var e = t.stop;
                delete t.stop,
                e(o)
            }
            return "string" != typeof r && (o = t,
            t = r,
            r = void 0),
            t && this.queue(r || "fx", []),
            this.each(function() {
                var t = !0
                  , e = null != r && r + "queueHooks"
                  , n = A.timers
                  , i = X.get(this);
                if (e)
                    i[e] && i[e].stop && s(i[e]);
                else
                    for (e in i)
                        i[e] && i[e].stop && ce.test(e) && s(i[e]);
                for (e = n.length; e--; )
                    n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o),
                    t = !1,
                    n.splice(e, 1));
                !t && o || A.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var t, e = X.get(this), n = e[s + "queue"], i = e[s + "queueHooks"], r = A.timers, o = n ? n.length : 0;
                for (e.finish = !0,
                A.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < o; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }),
    A.each(["toggle", "show", "hide"], function(t, i) {
        var r = A.fn[i];
        A.fn[i] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(fe(i, !0), t, e, n)
        }
    }),
    A.each({
        slideDown: fe("show"),
        slideUp: fe("hide"),
        slideToggle: fe("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, i) {
        A.fn[t] = function(t, e, n) {
            return this.animate(i, t, e, n)
        }
    }),
    A.timers = [],
    A.fx.tick = function() {
        var t, e = 0, n = A.timers;
        for (ae = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || A.fx.stop(),
        ae = void 0
    }
    ,
    A.fx.timer = function(t) {
        A.timers.push(t),
        A.fx.start()
    }
    ,
    A.fx.interval = 13,
    A.fx.start = function() {
        le || (le = !0,
        de())
    }
    ,
    A.fx.stop = function() {
        le = null
    }
    ,
    A.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    A.fn.delay = function(i, t) {
        return i = A.fx && A.fx.speeds[i] || i,
        this.queue(t = t || "fx", function(t, e) {
            var n = x.setTimeout(t, i);
            e.stop = function() {
                x.clearTimeout(n)
            }
        })
    }
    ,
    d = C.createElement("input"),
    tt = C.createElement("select").appendChild(C.createElement("option")),
    d.type = "checkbox",
    b.checkOn = "" !== d.value,
    b.optSelected = tt.selected,
    (d = C.createElement("input")).value = "t",
    d.type = "radio",
    b.radioValue = "t" === d.value;
    var ge, ve = A.expr.attrHandle;
    A.fn.extend({
        attr: function(t, e) {
            return B(this, A.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                A.removeAttr(this, t)
            })
        }
    }),
    A.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute ? A.prop(t, e, n) : (1 === o && A.isXMLDoc(t) || (r = A.attrHooks[e.toLowerCase()] || (A.expr.match.bool.test(e) ? ge : void 0)),
                void 0 !== n ? null === n ? void A.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : !(r && "get"in r && null !== (i = r.get(t, e))) && null == (i = A.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!b.radioValue && "radio" === e && k(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0, r = e && e.match(N);
            if (r && 1 === t.nodeType)
                for (; n = r[i++]; )
                    t.removeAttribute(n)
        }
    }),
    ge = {
        set: function(t, e, n) {
            return !1 === e ? A.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    A.each(A.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var s = ve[e] || A.find.attr;
        ve[e] = function(t, e, n) {
            var i, r, o = e.toLowerCase();
            return n || (r = ve[o],
            ve[o] = i,
            i = null != s(t, e, n) ? o : null,
            ve[o] = r),
            i
        }
    });
    var ye = /^(?:input|select|textarea|button)$/i
      , be = /^(?:a|area)$/i;
    function _e(t) {
        return (t.match(N) || []).join(" ")
    }
    function we(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function xe(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(N) || []
    }
    A.fn.extend({
        prop: function(t, e) {
            return B(this, A.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[A.propFix[t] || t]
            })
        }
    }),
    A.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && A.isXMLDoc(t) || (e = A.propFix[e] || e,
                r = A.propHooks[e]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = A.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ye.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    b.optSelected || (A.propHooks.selected = {
        get: function(t) {
            t = t.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            t = t.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        A.propFix[this.toLowerCase()] = this
    }),
    A.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a = 0;
            if (m(e))
                return this.each(function(t) {
                    A(this).addClass(e.call(this, t, we(this)))
                });
            if ((t = xe(e)).length)
                for (; n = this[a++]; )
                    if (s = we(n),
                    i = 1 === n.nodeType && " " + _e(s) + " ") {
                        for (o = 0; r = t[o++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s !== (s = _e(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a = 0;
            if (m(e))
                return this.each(function(t) {
                    A(this).removeClass(e.call(this, t, we(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = xe(e)).length)
                for (; n = this[a++]; )
                    if (s = we(n),
                    i = 1 === n.nodeType && " " + _e(s) + " ") {
                        for (o = 0; r = t[o++]; )
                            for (; -1 < i.indexOf(" " + r + " "); )
                                i = i.replace(" " + r + " ", " ");
                        s !== (s = _e(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(r, e) {
            var o = typeof r
              , s = "string" == o || Array.isArray(r);
            return "boolean" == typeof e && s ? e ? this.addClass(r) : this.removeClass(r) : m(r) ? this.each(function(t) {
                A(this).toggleClass(r.call(this, t, we(this), e), e)
            }) : this.each(function() {
                var t, e, n, i;
                if (s)
                    for (e = 0,
                    n = A(this),
                    i = xe(r); t = i[e++]; )
                        n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else
                    void 0 !== r && "boolean" != o || ((t = we(this)) && X.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", !t && !1 !== r && X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            for (var e, n = 0, i = " " + t + " "; e = this[n++]; )
                if (1 === e.nodeType && -1 < (" " + _e(we(e)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    var Ce = /\r/g;
    A.fn.extend({
        val: function(e) {
            var n, t, i, r = this[0];
            return arguments.length ? (i = m(e),
            this.each(function(t) {
                1 === this.nodeType && (null == (t = i ? e.call(this, t, A(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = A.map(t, function(t) {
                    return null == t ? "" : t + ""
                })),
                (n = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : r ? (n = A.valHooks[r.type] || A.valHooks[r.nodeName.toLowerCase()]) && "get"in n && void 0 !== (t = n.get(r, "value")) ? t : "string" == typeof (t = r.value) ? t.replace(Ce, "") : null == t ? "" : t : void 0
        }
    }),
    A.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = A.find.attr(t, "value");
                    return null != e ? e : _e(A.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n = t.options, i = t.selectedIndex, r = "select-one" === t.type, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                        if (((e = n[a]).selected || a === i) && !e.disabled && (!e.parentNode.disabled || !k(e.parentNode, "optgroup"))) {
                            if (e = A(e).val(),
                            r)
                                return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = A.makeArray(e), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < A.inArray(A.valHooks.option.get(i), o)) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    A.each(["radio", "checkbox"], function() {
        A.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = -1 < A.inArray(A(t).val(), e)
            }
        },
        b.checkOn || (A.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    }),
    b.focusin = "onfocusin"in x;
    function Ae(t) {
        t.stopPropagation()
    }
    var Ee = /^(?:focusinfocus|focusoutblur)$/;
    A.extend(A.event, {
        trigger: function(t, e, n, i) {
            var r, o, s, a, l, u, c, d = [n || C], h = y.call(t, "type") ? t.type : t, f = y.call(t, "namespace") ? t.namespace.split(".") : [], p = c = o = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Ee.test(h + A.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(),
            f.sort()),
            a = h.indexOf(":") < 0 && "on" + h,
            (t = t[A.expando] ? t : new A.Event(h,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = f.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = n),
            e = null == e ? [t] : A.makeArray(e, [t]),
            u = A.event.special[h] || {},
            i || !u.trigger || !1 !== u.trigger.apply(n, e))) {
                if (!i && !u.noBubble && !g(n)) {
                    for (s = u.delegateType || h,
                    Ee.test(s + h) || (p = p.parentNode); p; p = p.parentNode)
                        d.push(p),
                        o = p;
                    o === (n.ownerDocument || C) && d.push(o.defaultView || o.parentWindow || x)
                }
                for (r = 0; (p = d[r++]) && !t.isPropagationStopped(); )
                    c = p,
                    t.type = 1 < r ? s : u.bindType || h,
                    (l = (X.get(p, "events") || Object.create(null))[t.type] && X.get(p, "handle")) && l.apply(p, e),
                    (l = a && p[a]) && l.apply && Y(p) && (t.result = l.apply(p, e),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                i || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), e) || !Y(n) || a && m(n[h]) && !g(n) && ((o = n[a]) && (n[a] = null),
                A.event.triggered = h,
                t.isPropagationStopped() && c.addEventListener(h, Ae),
                n[h](),
                t.isPropagationStopped() && c.removeEventListener(h, Ae),
                A.event.triggered = void 0,
                o && (n[a] = o)),
                t.result
            }
        },
        simulate: function(t, e, n) {
            t = A.extend(new A.Event, n, {
                type: t,
                isSimulated: !0
            });
            A.event.trigger(t, null, e)
        }
    }),
    A.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                A.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return A.event.trigger(t, e, n, !0)
        }
    }),
    b.focusin || A.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(t) {
            A.event.simulate(i, t.target, A.event.fix(t))
        }
        A.event.special[i] = {
            setup: function() {
                var t = this.ownerDocument || this.document || this
                  , e = X.access(t, i);
                e || t.addEventListener(n, r, !0),
                X.access(t, i, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this.document || this
                  , e = X.access(t, i) - 1;
                e ? X.access(t, i, e) : (t.removeEventListener(n, r, !0),
                X.remove(t, i))
            }
        }
    });
    var Te = x.location
      , ke = {
        guid: Date.now()
    }
      , Se = /\?/;
    A.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t)
            return null;
        try {
            e = (new x.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return n = e && e.getElementsByTagName("parsererror")[0],
        e && !n || A.error("Invalid XML: " + (n ? A.map(n.childNodes, function(t) {
            return t.textContent
        }).join("\n") : t)),
        e
    }
    ;
    var De = /\[\]$/
      , Oe = /\r?\n/g
      , Le = /^(?:submit|button|image|reset|file)$/i
      , Pe = /^(?:input|select|textarea|keygen)/i;
    A.param = function(t, e) {
        function n(t, e) {
            e = m(e) ? e() : e,
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
        }
        var i, r = [];
        if (null == t)
            return "";
        if (Array.isArray(t) || t.jquery && !A.isPlainObject(t))
            A.each(t, function() {
                n(this.name, this.value)
            });
        else
            for (i in t)
                !function n(i, t, r, o) {
                    if (Array.isArray(t))
                        A.each(t, function(t, e) {
                            r || De.test(i) ? o(i, e) : n(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, r, o)
                        });
                    else if (r || "object" !== p(t))
                        o(i, t);
                    else
                        for (var e in t)
                            n(i + "[" + e + "]", t[e], r, o)
                }(i, t[i], e, n);
        return r.join("&")
    }
    ,
    A.fn.extend({
        serialize: function() {
            return A.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = A.prop(this, "elements");
                return t ? A.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !A(this).is(":disabled") && Pe.test(this.nodeName) && !Le.test(t) && (this.checked || !ct.test(t))
            }).map(function(t, e) {
                var n = A(this).val();
                return null == n ? null : Array.isArray(n) ? A.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Oe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Oe, "\r\n")
                }
            }).get()
        }
    });
    var Ie = /%20/g
      , Me = /#.*$/
      , Ne = /([?&])_=[^&]*/
      , je = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Fe = /^(?:GET|HEAD)$/
      , ze = /^\/\//
      , $e = {}
      , Re = {}
      , qe = "*/".concat("*")
      , Be = C.createElement("a");
    function He(o) {
        return function(t, e) {
            "string" != typeof t && (e = t,
            t = "*");
            var n, i = 0, r = t.toLowerCase().match(N) || [];
            if (m(e))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }
    function We(e, i, r, o) {
        var s = {}
          , a = e === Re;
        function l(t) {
            var n;
            return s[t] = !0,
            A.each(e[t] || [], function(t, e) {
                e = e(i, r, o);
                return "string" != typeof e || a || s[e] ? a ? !(n = e) : void 0 : (i.dataTypes.unshift(e),
                l(e),
                !1)
            }),
            n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ue(t, e) {
        var n, i, r = A.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i = i || {})[n] = e[n]);
        return i && A.extend(!0, t, i),
        t
    }
    Be.href = Te.href,
    A.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": A.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ue(Ue(t, A.ajaxSettings), e) : Ue(A.ajaxSettings, t)
        },
        ajaxPrefilter: He($e),
        ajaxTransport: He(Re),
        ajax: function(t, e) {
            "object" == typeof t && (e = t,
            t = void 0);
            var l, u, c, n, d, h, f, i, r, p = A.ajaxSetup({}, e = e || {}), m = p.context || p, g = p.context && (m.nodeType || m.jquery) ? A(m) : A.event, v = A.Deferred(), y = A.Callbacks("once memory"), b = p.statusCode || {}, o = {}, s = {}, a = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (h) {
                        if (!n)
                            for (n = {}; e = je.exec(c); )
                                n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                        e = n[t.toLowerCase() + " "]
                    }
                    return null == e ? null : e.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? c : null
                },
                setRequestHeader: function(t, e) {
                    return null == h && (t = s[t.toLowerCase()] = s[t.toLowerCase()] || t,
                    o[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == h && (p.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    if (t)
                        if (h)
                            _.always(t[_.status]);
                        else
                            for (var e in t)
                                b[e] = [b[e], t[e]];
                    return this
                },
                abort: function(t) {
                    t = t || a;
                    return l && l.abort(t),
                    w(0, t),
                    this
                }
            };
            if (v.promise(_),
            p.url = ((t || p.url || Te.href) + "").replace(ze, Te.protocol + "//"),
            p.type = e.method || e.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [""],
            null == p.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = p.url,
                    r.href = r.href,
                    p.crossDomain = Be.protocol + "//" + Be.host != r.protocol + "//" + r.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = A.param(p.data, p.traditional)),
            We($e, p, e, _),
            h)
                return _;
            for (i in (f = A.event && p.global) && 0 == A.active++ && A.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Fe.test(p.type),
            u = p.url.replace(Me, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ie, "+")) : (r = p.url.slice(u.length),
            p.data && (p.processData || "string" == typeof p.data) && (u += (Se.test(u) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (u = u.replace(Ne, "$1"),
            r = (Se.test(u) ? "&" : "?") + "_=" + ke.guid++ + r),
            p.url = u + r),
            p.ifModified && (A.lastModified[u] && _.setRequestHeader("If-Modified-Since", A.lastModified[u]),
            A.etag[u] && _.setRequestHeader("If-None-Match", A.etag[u])),
            (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && _.setRequestHeader("Content-Type", p.contentType),
            _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                _.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, _, p) || h))
                return _.abort();
            if (a = "abort",
            y.add(p.complete),
            _.done(p.success),
            _.fail(p.error),
            l = We(Re, p, e, _)) {
                if (_.readyState = 1,
                f && g.trigger("ajaxSend", [_, p]),
                h)
                    return _;
                p.async && 0 < p.timeout && (d = x.setTimeout(function() {
                    _.abort("timeout")
                }, p.timeout));
                try {
                    h = !1,
                    l.send(o, w)
                } catch (t) {
                    if (h)
                        throw t;
                    w(-1, t)
                }
            } else
                w(-1, "No Transport");
            function w(t, e, n, i) {
                var r, o, s, a = e;
                h || (h = !0,
                d && x.clearTimeout(d),
                l = void 0,
                c = i || "",
                _.readyState = 0 < t ? 4 : 0,
                i = 200 <= t && t < 300 || 304 === t,
                n && (s = function(t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s = s || r
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(p, _, n)),
                !i && -1 < A.inArray("script", p.dataTypes) && A.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                ),
                s = function(t, e, n, i) {
                    var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
                    if (c[1])
                        for (s in t.converters)
                            u[s.toLowerCase()] = t.converters[s];
                    for (o = c.shift(); o; )
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e),
                        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        l = o,
                        o = c.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o]))
                                    for (r in u)
                                        if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && t.throws)
                                        e = s(e);
                                    else
                                        try {
                                            e = s(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: s ? t : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, s, _, i),
                i ? (p.ifModified && ((n = _.getResponseHeader("Last-Modified")) && (A.lastModified[u] = n),
                (n = _.getResponseHeader("etag")) && (A.etag[u] = n)),
                204 === t || "HEAD" === p.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = s.state,
                r = s.data,
                i = !(o = s.error))) : (o = a,
                !t && a || (a = "error",
                t < 0 && (t = 0))),
                _.status = t,
                _.statusText = (e || a) + "",
                i ? v.resolveWith(m, [r, a, _]) : v.rejectWith(m, [_, a, o]),
                _.statusCode(b),
                b = void 0,
                f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [_, p, i ? r : o]),
                y.fireWith(m, [_, a]),
                f && (g.trigger("ajaxComplete", [_, p]),
                --A.active || A.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(t, e, n) {
            return A.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return A.get(t, void 0, e, "script")
        }
    }),
    A.each(["get", "post"], function(t, r) {
        A[r] = function(t, e, n, i) {
            return m(e) && (i = i || n,
            n = e,
            e = void 0),
            A.ajax(A.extend({
                url: t,
                type: r,
                dataType: i,
                data: e,
                success: n
            }, A.isPlainObject(t) && t))
        }
    }),
    A.ajaxPrefilter(function(t) {
        for (var e in t.headers)
            "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }),
    A._evalUrl = function(t, e, n) {
        return A.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                A.globalEval(t, e, n)
            }
        })
    }
    ,
    A.fn.extend({
        wrapAll: function(t) {
            return this[0] && (m(t) && (t = t.call(this[0])),
            t = A(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(t) {
                A(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = A(this)
                  , e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = m(e);
            return this.each(function(t) {
                A(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                A(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    A.expr.pseudos.hidden = function(t) {
        return !A.expr.pseudos.visible(t)
    }
    ,
    A.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    A.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Ve = {
        0: 200,
        1223: 204
    }
      , Ye = A.ajaxSettings.xhr();
    b.cors = !!Ye && "withCredentials"in Ye,
    b.ajax = Ye = !!Ye,
    A.ajaxTransport(function(r) {
        var o, s;
        if (b.cors || Ye && !r.crossDomain)
            return {
                send: function(t, e) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (n in r.xhrFields)
                            i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                    t)
                        i.setRequestHeader(n, t[n]);
                    o = function(t) {
                        return function() {
                            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Ve[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = o(),
                    s = i.onerror = i.ontimeout = o("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && x.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (t) {
                        if (o)
                            throw t
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    A.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    A.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return A.globalEval(t),
                t
            }
        }
    }),
    A.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    A.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(t, e) {
                    i = A("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(t) {
                        i.remove(),
                        r = null,
                        t && e("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    C.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var Ze = []
      , Xe = /(=)\?(?=&|$)|\?\?/;
    A.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ze.pop() || A.expando + "_" + ke.guid++;
            return this[t] = !0,
            t
        }
    }),
    A.ajaxPrefilter("json jsonp", function(t, e, n) {
        var i, r, o, s = !1 !== t.jsonp && (Xe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Xe, "$1" + i) : !1 !== t.jsonp && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return o || A.error(i + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = x[i],
            x[i] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? A(x).removeProp(i) : x[i] = r,
                t[i] && (t.jsonpCallback = e.jsonpCallback,
                Ze.push(i)),
                o && m(r) && r(o[0]),
                o = r = void 0
            }),
            "script"
    }),
    b.createHTMLDocument = ((d = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === d.childNodes.length),
    A.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
        e = !1),
        e || (b.createHTMLDocument ? ((i = (e = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href,
        e.head.appendChild(i)) : e = C),
        i = !n && [],
        (n = S.exec(t)) ? [e.createElement(n[1])] : (n = vt([t], e, i),
        i && i.length && A(i).remove(),
        A.merge([], n.childNodes)));
        var i
    }
    ,
    A.fn.load = function(t, e, n) {
        var i, r, o, s = this, a = t.indexOf(" ");
        return -1 < a && (i = _e(t.slice(a)),
        t = t.slice(0, a)),
        m(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        0 < s.length && A.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(i ? A("<div>").append(A.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    A.expr.pseudos.animated = function(e) {
        return A.grep(A.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    A.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a = A.css(t, "position"), l = A(t), u = {};
            "static" === a && (t.style.position = "relative"),
            o = l.offset(),
            i = A.css(t, "top"),
            s = A.css(t, "left"),
            s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (r = (a = l.position()).top,
            a.left) : (r = parseFloat(i) || 0,
            parseFloat(s) || 0),
            null != (e = m(e) ? e.call(t, n, A.extend({}, o)) : e).top && (u.top = e.top - o.top + r),
            null != e.left && (u.left = e.left - o.left + s),
            "using"in e ? e.using.call(t, u) : l.css(u)
        }
    },
    A.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    A.offset.setOffset(this, e, t)
                });
            var t, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === A.css(i, "position"))
                    e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === A.css(t, "position"); )
                        t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = A(t).offset()).top += A.css(t, "borderTopWidth", !0),
                    r.left += A.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - A.css(i, "marginTop", !0),
                    left: e.left - r.left - A.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === A.css(t, "position"); )
                    t = t.offsetParent;
                return t || it
            })
        }
    }),
    A.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, r) {
        var o = "pageYOffset" === r;
        A.fn[e] = function(t) {
            return B(this, function(t, e, n) {
                var i;
                return g(t) ? i = t : 9 === t.nodeType && (i = t.defaultView),
                void 0 === n ? i ? i[r] : t[e] : void (i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n)
            }, e, t, arguments.length)
        }
    }),
    A.each(["top", "left"], function(t, n) {
        A.cssHooks[n] = Vt(b.pixelPosition, function(t, e) {
            if (e)
                return e = Ut(t, n),
                Ht.test(e) ? A(t).position()[n] + "px" : e
        })
    }),
    A.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        A.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            A.fn[o] = function(t, e) {
                var n = arguments.length && (i || "boolean" != typeof t)
                  , r = i || (!0 === t || !0 === e ? "margin" : "border");
                return B(this, function(t, e, n) {
                    var i;
                    return g(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? A.css(t, e, r) : A.style(t, e, n, r)
                }, a, n ? t : void 0, n)
            }
        })
    }),
    A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        A.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    A.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        A.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    });
    var Ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    A.proxy = function(t, e) {
        var n, i;
        if ("string" == typeof e && (i = t[e],
        e = t,
        t = i),
        m(t))
            return n = a.call(arguments, 2),
            (i = function() {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }
            ).guid = t.guid = t.guid || A.guid++,
            i
    }
    ,
    A.holdReady = function(t) {
        t ? A.readyWait++ : A.ready(!0)
    }
    ,
    A.isArray = Array.isArray,
    A.parseJSON = JSON.parse,
    A.nodeName = k,
    A.isFunction = m,
    A.isWindow = g,
    A.camelCase = V,
    A.type = p,
    A.now = Date.now,
    A.isNumeric = function(t) {
        var e = A.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }
    ,
    A.trim = function(t) {
        return null == t ? "" : (t + "").replace(Ke, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return A
    });
    var Ge = x.jQuery
      , Qe = x.$;
    return A.noConflict = function(t) {
        return x.$ === A && (x.$ = Qe),
        t && x.jQuery === A && (x.jQuery = Ge),
        A
    }
    ,
    void 0 === t && (x.jQuery = x.$ = A),
    A
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function() {
    "use strict";
    const o = "transitionend"
      , e = e=>{
        let n = e.getAttribute("data-bs-target");
        if (!n || "#" === n) {
            let t = e.getAttribute("href");
            if (!t || !t.includes("#") && !t.startsWith("."))
                return null;
            t.includes("#") && !t.startsWith("#") && (t = "#" + t.split("#")[1]),
            n = t && "#" !== t ? t.trim() : null
        }
        return n
    }
      , s = t=>{
        t = e(t);
        return t && document.querySelector(t) ? t : null
    }
      , r = t=>{
        t = e(t);
        return t ? document.querySelector(t) : null
    }
      , a = t=>{
        t.dispatchEvent(new Event(o))
    }
      , l = t=>!(!t || "object" != typeof t) && void 0 !== (t = void 0 !== t.jquery ? t[0] : t).nodeType
      , u = t=>l(t) ? t.jquery ? t[0] : t : "string" == typeof t && 0 < t.length ? document.querySelector(t) : null
      , n = (i,r,o)=>{
        Object.keys(o).forEach(t=>{
            var e = o[t]
              , n = r[t]
              , n = n && l(n) ? "element" : null == n ? "" + n : {}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(e).test(n))
                throw new TypeError(i.toUpperCase() + `: Option "${t}" provided type "${n}" but expected type "${e}".`)
        }
        )
    }
      , i = t=>!(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
      , c = t=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , d = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" != typeof t.getRootNode)
            return t instanceof ShadowRoot ? t : t.parentNode ? d(t.parentNode) : null;
        t = t.getRootNode();
        return t instanceof ShadowRoot ? t : null
    }
      , h = ()=>{}
      , f = t=>{
        t.offsetHeight
    }
      , p = ()=>{
        var t = window["jQuery"];
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , m = []
      , g = ()=>"rtl" === document.documentElement.dir
      , t = i=>{
        var t = ()=>{
            const t = p();
            if (t) {
                const e = i.NAME
                  , n = t.fn[e];
                t.fn[e] = i.jQueryInterface,
                t.fn[e].Constructor = i,
                t.fn[e].noConflict = ()=>(t.fn[e] = n,
                i.jQueryInterface)
            }
        }
        ;
        "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", ()=>{
            m.forEach(t=>t())
        }
        ),
        m.push(t)) : t()
    }
      , v = t=>{
        "function" == typeof t && t()
    }
      , y = (n,r,t=!0)=>{
        if (t) {
            t = (()=>{
                if (!r)
                    return 0;
                let {transitionDuration: t, transitionDelay: e} = window.getComputedStyle(r);
                var n = Number.parseFloat(t)
                  , i = Number.parseFloat(e);
                return n || i ? (t = t.split(",")[0],
                e = e.split(",")[0],
                1e3 * (Number.parseFloat(t) + Number.parseFloat(e))) : 0
            }
            )() + 5;
            let e = !1;
            const i = ({target: t})=>{
                t === r && (e = !0,
                r.removeEventListener(o, i),
                v(n))
            }
            ;
            r.addEventListener(o, i),
            setTimeout(()=>{
                e || a(r)
            }
            , t)
        } else
            v(n)
    }
      , b = (t,e,n,i)=>{
        let r = t.indexOf(e);
        if (-1 === r)
            return t[!n && i ? t.length - 1 : 0];
        e = t.length;
        return r += n ? 1 : -1,
        i && (r = (r + e) % e),
        t[Math.max(0, Math.min(r, e - 1))]
    }
      , _ = /[^.]*(?=\..*)\.|.*/
      , w = /\..*/
      , x = /::\d+$/
      , C = {};
    let A = 1;
    const E = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , T = /^(mouseenter|mouseleave)/i
      , k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function S(t, e) {
        return e && e + "::" + A++ || t.uidEvent || A++
    }
    function D(t) {
        var e = S(t);
        return t.uidEvent = e,
        C[e] = C[e] || {},
        C[e]
    }
    function O(n, i, r=null) {
        var o = Object.keys(n);
        for (let t = 0, e = o.length; t < e; t++) {
            var s = n[o[t]];
            if (s.originalHandler === i && s.delegationSelector === r)
                return s
        }
        return null
    }
    function L(t, e, n) {
        var i = "string" == typeof e
          , e = i ? n : e;
        let r = M(t);
        return k.has(r) || (r = t),
        [i, e, r]
    }
    function P(t, e, n, i, r) {
        if ("string" == typeof e && t) {
            if (n || (n = i,
            i = null),
            T.test(e)) {
                const t = e=>function(t) {
                    if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))
                        return e.call(this, t)
                }
                ;
                i ? i = t(i) : n = t(n)
            }
            const [c,d,h] = L(e, n, i)
              , f = D(t)
              , p = f[h] || (f[h] = {})
              , m = O(p, d, c ? n : null);
            if (m)
                return m.oneOff = m.oneOff && r,
                0;
            const g = S(d, e.replace(_, ""))
              , v = c ? (a = t,
            l = n,
            u = i,
            function n(i) {
                var r = a.querySelectorAll(l);
                for (let e = i["target"]; e && e !== this; e = e.parentNode)
                    for (let t = r.length; t--; )
                        if (r[t] === e)
                            return i.delegateTarget = e,
                            n.oneOff && N.off(a, i.type, l, u),
                            u.apply(e, [i]);
                return null
            }
            ) : (o = t,
            s = n,
            function t(e) {
                return e.delegateTarget = o,
                t.oneOff && N.off(o, e.type, s),
                s.apply(o, [e])
            }
            );
            var o, s, a, l, u;
            v.delegationSelector = c ? n : null,
            v.originalHandler = d,
            v.oneOff = r,
            v.uidEvent = g,
            p[g] = v,
            t.addEventListener(h, v, c)
        }
    }
    function I(t, e, n, i, r) {
        i = O(e[n], i, r);
        i && (t.removeEventListener(n, i, Boolean(r)),
        delete e[n][i.uidEvent])
    }
    function M(t) {
        return t = t.replace(w, ""),
        E[t] || t
    }
    const N = {
        on(t, e, n, i) {
            P(t, e, n, i, !1)
        },
        one(t, e, n, i) {
            P(t, e, n, i, !0)
        },
        off(n, i, t, e) {
            if ("string" == typeof i && n) {
                const [r,o,s] = L(i, t, e)
                  , a = s !== i
                  , l = D(n)
                  , u = i.startsWith(".");
                if (void 0 !== o)
                    return l && l[s] ? void I(n, l, s, o, r ? t : null) : void 0;
                u && Object.keys(l).forEach(t=>{
                    !function(e, n, i, r) {
                        const o = n[i] || {};
                        Object.keys(o).forEach(t=>{
                            if (t.includes(r)) {
                                const r = o[t];
                                I(e, n, i, r.originalHandler, r.delegationSelector)
                            }
                        }
                        )
                    }(n, l, t, i.slice(1))
                }
                );
                const c = l[s] || {};
                Object.keys(c).forEach(t=>{
                    var e = t.replace(x, "");
                    if (!a || i.includes(e)) {
                        const i = c[t];
                        I(n, l, s, i.originalHandler, i.delegationSelector)
                    }
                }
                )
            }
        },
        trigger(t, e, n) {
            if ("string" != typeof e || !t)
                return null;
            const i = p()
              , r = M(e)
              , o = e !== r
              , s = k.has(r);
            let a, l = !0, u = !0, c = !1, d = null;
            return o && i && (a = i.Event(e, n),
            i(t).trigger(a),
            l = !a.isPropagationStopped(),
            u = !a.isImmediatePropagationStopped(),
            c = a.isDefaultPrevented()),
            s ? (d = document.createEvent("HTMLEvents"),
            d.initEvent(r, l, !0)) : d = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== n && Object.keys(n).forEach(t=>{
                Object.defineProperty(d, t, {
                    get: ()=>n[t]
                })
            }
            ),
            c && d.preventDefault(),
            u && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
        }
    }
      , j = new Map
      , F = {
        set(t, e, n) {
            j.has(t) || j.set(t, new Map);
            const i = j.get(t);
            i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t,e)=>j.has(t) && j.get(t).get(e) || null,
        remove(t, e) {
            if (j.has(t)) {
                const n = j.get(t);
                n.delete(e),
                0 === n.size && j.delete(t)
            }
        }
    };
    class z {
        constructor(t) {
            (t = u(t)) && (this._element = t,
            F.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            F.remove(this._element, this.constructor.DATA_KEY),
            N.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach(t=>{
                this[t] = null
            }
            )
        }
        _queueCallback(t, e, n=!0) {
            y(t, e, n)
        }
        static getInstance(t) {
            return F.get(u(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    var $ = (e,n="hide")=>{
        const t = "click.dismiss" + e.EVENT_KEY
          , i = e.NAME;
        N.on(document, t, `[data-bs-dismiss="${i}"]`, function(t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            c(this) || (t = r(this) || this.closest("." + i),
            e.getOrCreateInstance(t)[n]())
        })
    }
    ;
    class R extends z {
        static get NAME() {
            return "alert"
        }
        close() {
            var t;
            N.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"),
            t = this._element.classList.contains("fade"),
            this._queueCallback(()=>this._destroyElement(), this._element, t))
        }
        _destroyElement() {
            this._element.remove(),
            N.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = R.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    $(R, "close"),
    t(R);
    const q = '[data-bs-toggle="button"]';
    class B extends z {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = B.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            })
        }
    }
    function H(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function W(t) {
        return t.replace(/[A-Z]/g, t=>"-" + t.toLowerCase())
    }
    N.on(document, "click.bs.button.data-api", q, t=>{
        t.preventDefault();
        t = t.target.closest(q);
        B.getOrCreateInstance(t).toggle()
    }
    ),
    t(B);
    const U = {
        setDataAttribute(t, e, n) {
            t.setAttribute("data-bs-" + W(e), n)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute("data-bs-" + W(e))
        },
        getDataAttributes(n) {
            if (!n)
                return {};
            const i = {};
            return Object.keys(n.dataset).filter(t=>t.startsWith("bs")).forEach(t=>{
                let e = t.replace(/^bs/, "");
                e = e.charAt(0).toLowerCase() + e.slice(1, e.length),
                i[e] = H(n.dataset[t])
            }
            ),
            i
        },
        getDataAttribute: (t,e)=>H(t.getAttribute("data-bs-" + W(e))),
        offset(t) {
            t = t.getBoundingClientRect();
            return {
                top: t.top + window.pageYOffset,
                left: t.left + window.pageXOffset
            }
        },
        position: t=>({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , V = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),
        parents(t, e) {
            const n = [];
            let i = t.parentNode;
            for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
                i.matches(e) && n.push(i),
                i = i.parentNode;
            return n
        },
        prev(t, e) {
            let n = t.previousElementSibling;
            for (; n; ) {
                if (n.matches(e))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let n = t.nextElementSibling;
            for (; n; ) {
                if (n.matches(e))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t=>t + ':not([tabindex^="-"])').join(", ");
            return this.find(e, t).filter(t=>!c(t) && i(t))
        }
    }
      , Y = "carousel"
      , Z = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , X = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , K = "next"
      , G = "prev"
      , Q = "left"
      , J = "right"
      , tt = {
        ArrowLeft: J,
        ArrowRight: Q
    }
      , et = "slid.bs.carousel"
      , nt = "active"
      , it = ".active.carousel-item";
    class rt extends z {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = V.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return Z
        }
        static get NAME() {
            return Y
        }
        next() {
            this._slide(K)
        }
        nextWhenVisible() {
            !document.hidden && i(this._element) && this.next()
        }
        prev() {
            this._slide(G)
        }
        pause(t) {
            t || (this._isPaused = !0),
            V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = V.findOne(it, this._element);
            var e = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    N.one(this._element, et, ()=>this.to(t));
                else {
                    if (e === t)
                        return this.pause(),
                        void this.cycle();
                    e = e < t ? K : G;
                    this._slide(e, this._items[t])
                }
        }
        _getConfig(t) {
            return t = {
                ...Z,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            n(Y, t, X),
            t
        }
        _handleSwipe() {
            var t = Math.abs(this.touchDeltaX);
            t <= 40 || (t = t / this.touchDeltaX,
            this.touchDeltaX = 0,
            t && this._slide(0 < t ? J : Q))
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, "keydown.bs.carousel", t=>this._keydown(t)),
            "hover" === this._config.pause && (N.on(this._element, "mouseenter.bs.carousel", t=>this.pause(t)),
            N.on(this._element, "mouseleave.bs.carousel", t=>this.cycle(t))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const e = t=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
              , n = t=>{
                e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            }
              , i = t=>{
                this.touchDeltaX = t.touches && 1 < t.touches.length ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , r = t=>{
                e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout(t=>this.cycle(t), 500 + this._config.interval))
            }
            ;
            V.find(".carousel-item img", this._element).forEach(t=>{
                N.on(t, "dragstart.bs.carousel", t=>t.preventDefault())
            }
            ),
            this._pointerEvent ? (N.on(this._element, "pointerdown.bs.carousel", t=>n(t)),
            N.on(this._element, "pointerup.bs.carousel", t=>r(t)),
            this._element.classList.add("pointer-event")) : (N.on(this._element, "touchstart.bs.carousel", t=>n(t)),
            N.on(this._element, "touchmove.bs.carousel", t=>i(t)),
            N.on(this._element, "touchend.bs.carousel", t=>r(t)))
        }
        _keydown(t) {
            var e;
            /input|textarea/i.test(t.target.tagName) || (e = tt[t.key]) && (t.preventDefault(),
            this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? V.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            t = t === K;
            return b(this._items, e, t, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(V.findOne(it, this._element));
            return N.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            })
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const t = V.findOne(".active", this._indicatorsElement);
                t.classList.remove(nt),
                t.removeAttribute("aria-current");
                const n = V.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < n.length; t++)
                    if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                        n[t].classList.add(nt),
                        n[t].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || V.findOne(it, this._element);
            var e;
            t && ((e = Number.parseInt(t.getAttribute("data-bs-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval)
        }
        _slide(t, e) {
            const n = this._directionToOrder(t)
              , i = V.findOne(it, this._element)
              , r = this._getItemIndex(i)
              , o = e || this._getItemByOrder(n, i)
              , s = this._getItemIndex(o)
              , a = Boolean(this._interval)
              , l = n === K
              , u = l ? "carousel-item-start" : "carousel-item-end"
              , c = l ? "carousel-item-next" : "carousel-item-prev"
              , d = this._orderToDirection(n);
            if (o && o.classList.contains(nt))
                this._isSliding = !1;
            else if (!this._isSliding && !this._triggerSlideEvent(o, d).defaultPrevented && i && o) {
                this._isSliding = !0,
                a && this.pause(),
                this._setActiveIndicatorElement(o),
                this._activeElement = o;
                const h = ()=>{
                    N.trigger(this._element, et, {
                        relatedTarget: o,
                        direction: d,
                        from: r,
                        to: s
                    })
                }
                ;
                if (this._element.classList.contains("slide")) {
                    o.classList.add(c),
                    f(o),
                    i.classList.add(u),
                    o.classList.add(u);
                    const t = ()=>{
                        o.classList.remove(u, c),
                        o.classList.add(nt),
                        i.classList.remove(nt, c, u),
                        this._isSliding = !1,
                        setTimeout(h, 0)
                    }
                    ;
                    this._queueCallback(t, i, !0)
                } else
                    i.classList.remove(nt),
                    o.classList.add(nt),
                    this._isSliding = !1,
                    h();
                a && this.cycle()
            }
        }
        _directionToOrder(t) {
            return [J, Q].includes(t) ? g() ? t === Q ? G : K : t === Q ? K : G : t
        }
        _orderToDirection(t) {
            return [K, G].includes(t) ? g() ? t === G ? Q : J : t === G ? J : Q : t
        }
        static carouselInterface(t, e) {
            const n = rt.getOrCreateInstance(t, e);
            let i = n["_config"];
            "object" == typeof e && (i = {
                ...i,
                ...e
            });
            t = "string" == typeof e ? e : i.slide;
            if ("number" == typeof e)
                n.to(e);
            else if ("string" == typeof t) {
                if (void 0 === n[t])
                    throw new TypeError(`No method named "${t}"`);
                n[t]()
            } else
                i.interval && i.ride && (n.pause(),
                n.cycle())
        }
        static jQueryInterface(t) {
            return this.each(function() {
                rt.carouselInterface(this, t)
            })
        }
        static dataApiClickHandler(t) {
            const e = r(this);
            if (e && e.classList.contains("carousel")) {
                const n = {
                    ...U.getDataAttributes(e),
                    ...U.getDataAttributes(this)
                }
                  , i = this.getAttribute("data-bs-slide-to");
                i && (n.interval = !1),
                rt.carouselInterface(e, n),
                i && rt.getInstance(e).to(i),
                t.preventDefault()
            }
        }
    }
    N.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", rt.dataApiClickHandler),
    N.on(window, "load.bs.carousel.data-api", ()=>{
        var n = V.find('[data-bs-ride="carousel"]');
        for (let t = 0, e = n.length; t < e; t++)
            rt.carouselInterface(n[t], rt.getInstance(n[t]))
    }
    ),
    t(rt);
    const ot = "collapse"
      , st = {
        toggle: !0,
        parent: null
    }
      , at = {
        toggle: "boolean",
        parent: "(null|element)"
    }
      , lt = "show"
      , ut = "collapse"
      , ct = "collapsing"
      , dt = "collapsed"
      , ht = ":scope .collapse .collapse"
      , ft = '[data-bs-toggle="collapse"]';
    class pt extends z {
        constructor(t, n) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(n),
            this._triggerArray = [];
            var i = V.find(ft);
            for (let t = 0, e = i.length; t < e; t++) {
                const n = i[t]
                  , r = s(n)
                  , o = V.find(r).filter(t=>t === this._element);
                null !== r && o.length && (this._selector = r,
                this._triggerArray.push(n))
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return st
        }
        static get NAME() {
            return ot
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!this._isTransitioning && !this._isShown()) {
                let e, t = [];
                if (this._config.parent) {
                    const e = V.find(ht, this._config.parent);
                    t = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(t=>!e.includes(t))
                }
                const i = V.findOne(this._selector);
                if (t.length) {
                    const r = t.find(t=>i !== t);
                    if (e = r ? pt.getInstance(r) : null,
                    e && e._isTransitioning)
                        return
                }
                if (!N.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                    t.forEach(t=>{
                        i !== t && pt.getOrCreateInstance(t, {
                            toggle: !1
                        }).hide(),
                        e || F.set(t, "bs.collapse", null)
                    }
                    );
                    const r = this._getDimension();
                    this._element.classList.remove(ut),
                    this._element.classList.add(ct),
                    this._element.style[r] = 0,
                    this._addAriaAndCollapsedClass(this._triggerArray, !0),
                    this._isTransitioning = !0;
                    var n = "scroll" + (r[0].toUpperCase() + r.slice(1));
                    this._queueCallback(()=>{
                        this._isTransitioning = !1,
                        this._element.classList.remove(ct),
                        this._element.classList.add(ut, lt),
                        this._element.style[r] = "",
                        N.trigger(this._element, "shown.bs.collapse")
                    }
                    , this._element, !0),
                    this._element.style[r] = this._element[n] + "px"
                }
            }
        }
        hide() {
            if (!this._isTransitioning && this._isShown() && !N.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                var t = this._getDimension();
                this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
                f(this._element),
                this._element.classList.add(ct),
                this._element.classList.remove(ut, lt);
                const e = this._triggerArray.length;
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t]
                      , n = r(e);
                    n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
                }
                this._isTransitioning = !0,
                this._element.style[t] = "",
                this._queueCallback(()=>{
                    this._isTransitioning = !1,
                    this._element.classList.remove(ct),
                    this._element.classList.add(ut),
                    N.trigger(this._element, "hidden.bs.collapse")
                }
                , this._element, !0)
            }
        }
        _isShown(t=this._element) {
            return t.classList.contains(lt)
        }
        _getConfig(t) {
            return (t = {
                ...st,
                ...U.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle),
            t.parent = u(t.parent),
            n(ot, t, at),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (this._config.parent) {
                const e = V.find(ht, this._config.parent);
                V.find(ft, this._config.parent).filter(t=>!e.includes(t)).forEach(t=>{
                    var e = r(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                }
                )
            }
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach(t=>{
                e ? t.classList.remove(dt) : t.classList.add(dt),
                t.setAttribute("aria-expanded", e)
            }
            )
        }
        static jQueryInterface(n) {
            return this.each(function() {
                const t = {};
                "string" == typeof n && /show|hide/.test(n) && (t.toggle = !1);
                const e = pt.getOrCreateInstance(this, t);
                if ("string" == typeof n) {
                    if (void 0 === e[n])
                        throw new TypeError(`No method named "${n}"`);
                    e[n]()
                }
            })
        }
    }
    N.on(document, "click.bs.collapse.data-api", ft, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        t = s(this);
        V.find(t).forEach(t=>{
            pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }
        )
    }),
    t(pt);
    var mt = "top"
      , gt = "bottom"
      , vt = "right"
      , yt = "left"
      , bt = "auto"
      , _t = [mt, gt, vt, yt]
      , wt = "start"
      , xt = "end"
      , Ct = "clippingParents"
      , At = "viewport"
      , Et = "popper"
      , Tt = "reference"
      , kt = _t.reduce(function(t, e) {
        return t.concat([e + "-" + wt, e + "-" + xt])
    }, [])
      , St = [].concat(_t, [bt]).reduce(function(t, e) {
        return t.concat([e, e + "-" + wt, e + "-" + xt])
    }, [])
      , Dt = "beforeRead"
      , Ot = "afterRead"
      , Lt = "beforeMain"
      , Pt = "afterMain"
      , It = "beforeWrite"
      , Mt = "afterWrite"
      , Nt = [Dt, "read", Ot, Lt, "main", Pt, It, "write", Mt];
    function jt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function Ft(t) {
        if (null == t)
            return window;
        if ("[object Window]" === t.toString())
            return t;
        t = t.ownerDocument;
        return t && t.defaultView || window
    }
    function zt(t) {
        return t instanceof Ft(t).Element || t instanceof Element
    }
    function $t(t) {
        return t instanceof Ft(t).HTMLElement || t instanceof HTMLElement
    }
    function Rt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Ft(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var qt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var r = t.state;
            Object.keys(r.elements).forEach(function(t) {
                var e = r.styles[t] || {}
                  , n = r.attributes[t] || {}
                  , i = r.elements[t];
                $t(i) && jt(i) && (Object.assign(i.style, e),
                Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? i.removeAttribute(t) : i.setAttribute(t, !0 === e ? "" : e)
                }))
            })
        },
        effect: function(t) {
            var i = t.state
              , r = {
                popper: {
                    position: i.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(i.elements.popper.style, r.popper),
            i.styles = r,
            i.elements.arrow && Object.assign(i.elements.arrow.style, r.arrow),
            function() {
                Object.keys(i.elements).forEach(function(t) {
                    var e = i.elements[t]
                      , n = i.attributes[t] || {}
                      , t = Object.keys((i.styles.hasOwnProperty(t) ? i.styles : r)[t]).reduce(function(t, e) {
                        return t[e] = "",
                        t
                    }, {});
                    $t(e) && jt(e) && (Object.assign(e.style, t),
                    Object.keys(n).forEach(function(t) {
                        e.removeAttribute(t)
                    }))
                })
            }
        },
        requires: ["computeStyles"]
    };
    function Bt(t) {
        return t.split("-")[0]
    }
    function Ht(t) {
        t = t.getBoundingClientRect();
        return {
            width: +t.width,
            height: +t.height,
            top: +t.top,
            right: +t.right,
            bottom: +t.bottom,
            left: +t.left,
            x: +t.left,
            y: +t.top
        }
    }
    function Wt(t) {
        var e = Ht(t)
          , n = t.offsetWidth
          , i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width),
        Math.abs(e.height - i) <= 1 && (i = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: i
        }
    }
    function Ut(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (n && Rt(n)) {
            var i = e;
            do {
                if (i && t.isSameNode(i))
                    return !0
            } while (i = i.parentNode || i.host)
        }
        return !1
    }
    function Vt(t) {
        return Ft(t).getComputedStyle(t)
    }
    function Yt(t) {
        return ((zt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function Zt(t) {
        return "html" === jt(t) ? t : t.assignedSlot || t.parentNode || (Rt(t) ? t.host : null) || Yt(t)
    }
    function Xt(t) {
        return $t(t) && "fixed" !== Vt(t).position ? t.offsetParent : null
    }
    function Kt(t) {
        for (var e, n = Ft(t), i = Xt(t); i && (e = i,
        0 <= ["table", "td", "th"].indexOf(jt(e))) && "static" === Vt(i).position; )
            i = Xt(i);
        return (!i || "html" !== jt(i) && ("body" !== jt(i) || "static" !== Vt(i).position)) && (i || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && $t(t) && "fixed" === Vt(t).position)
                return null;
            for (var n = Zt(t); $t(n) && ["html", "body"].indexOf(jt(n)) < 0; ) {
                var i = Vt(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter)
                    return n;
                n = n.parentNode
            }
            return null
        }(t)) || n
    }
    function Gt(t) {
        return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y"
    }
    var Qt = Math.max
      , Jt = Math.min
      , te = Math.round;
    function ee(t, e, n) {
        return Qt(t, Jt(e, n))
    }
    function ne(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }
    function ie(n, t) {
        return t.reduce(function(t, e) {
            return t[e] = n,
            t
        }, {})
    }
    var re = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, n, i = t.state, r = t.name, o = t.options, s = i.elements.arrow, a = i.modifiersData.popperOffsets, l = Bt(i.placement), u = Gt(l), c = 0 <= [yt, vt].indexOf(l) ? "height" : "width";
            s && a && (e = ne("number" != typeof (n = "function" == typeof (n = o.padding) ? n(Object.assign({}, i.rects, {
                placement: i.placement
            })) : n) ? n : ie(n, _t)),
            t = Wt(s),
            l = "y" === u ? mt : yt,
            o = "y" === u ? gt : vt,
            n = i.rects.reference[c] + i.rects.reference[u] - a[u] - i.rects.popper[c],
            a = a[u] - i.rects.reference[u],
            s = (s = Kt(s)) ? "y" === u ? s.clientHeight || 0 : s.clientWidth || 0 : 0,
            l = e[l],
            o = s - t[c] - e[o],
            o = ee(l, a = s / 2 - t[c] / 2 + (n / 2 - a / 2), o),
            i.modifiersData[r] = ((r = {})[u] = o,
            r.centerOffset = o - a,
            r))
        },
        effect: function(t) {
            var e = t.state
              , t = t.options.element
              , t = void 0 === t ? "[data-popper-arrow]" : t;
            null != t && ("string" != typeof t || (t = e.elements.popper.querySelector(t))) && Ut(e.elements.popper, t) && (e.elements.arrow = t)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function oe(t) {
        return t.split("-")[1]
    }
    var se = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function ae(t) {
        var e, n, i, r = t.popper, o = t.popperRect, s = t.placement, a = t.variation, l = t.offsets, u = t.position, c = t.gpuAcceleration, d = t.adaptive, h = t.roundOffsets, f = !0 === h ? (e = l.x,
        n = l.y,
        i = window.devicePixelRatio || 1,
        {
            x: te(te(e * i) / i) || 0,
            y: te(te(n * i) / i) || 0
        }) : "function" == typeof h ? h(l) : l, p = f.x, m = void 0 === p ? 0 : p, g = f.y, t = void 0 === g ? 0 : g, e = l.hasOwnProperty("x"), n = l.hasOwnProperty("y"), i = yt, h = mt, p = window;
        d && (f = "clientHeight",
        g = "clientWidth",
        (l = Kt(r)) === Ft(r) && "static" !== Vt(l = Yt(r)).position && "absolute" === u && (f = "scrollHeight",
        g = "scrollWidth"),
        s !== mt && (s !== yt && s !== vt || a !== xt) || (h = gt,
        t -= l[f] - o.height,
        t *= c ? 1 : -1),
        s !== yt && (s !== mt && s !== gt || a !== xt) || (i = vt,
        m -= l[g] - o.width,
        m *= c ? 1 : -1));
        var d = Object.assign({
            position: u
        }, d && se);
        return c ? Object.assign({}, d, ((c = {})[h] = n ? "0" : "",
        c[i] = e ? "0" : "",
        c.transform = (p.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + t + "px)" : "translate3d(" + m + "px, " + t + "px, 0)",
        c)) : Object.assign({}, d, ((d = {})[h] = n ? t + "px" : "",
        d[i] = e ? m + "px" : "",
        d.transform = "",
        d))
    }
    var le = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = n.gpuAcceleration
              , t = void 0 === i || i
              , i = n.adaptive
              , i = void 0 === i || i
              , n = n.roundOffsets
              , n = void 0 === n || n
              , t = {
                placement: Bt(e.placement),
                variation: oe(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: t
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ae(Object.assign({}, t, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: i,
                roundOffsets: n
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ae(Object.assign({}, t, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: n
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
      , ue = {
        passive: !0
    }
      , ce = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , n = t.instance
              , i = t.options
              , t = i.scroll
              , r = void 0 === t || t
              , i = i.resize
              , o = void 0 === i || i
              , s = Ft(e.elements.popper)
              , a = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && a.forEach(function(t) {
                t.addEventListener("scroll", n.update, ue)
            }),
            o && s.addEventListener("resize", n.update, ue),
            function() {
                r && a.forEach(function(t) {
                    t.removeEventListener("scroll", n.update, ue)
                }),
                o && s.removeEventListener("resize", n.update, ue)
            }
        },
        data: {}
    }
      , de = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function he(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return de[t]
        })
    }
    var fe = {
        start: "end",
        end: "start"
    };
    function pe(t) {
        return t.replace(/start|end/g, function(t) {
            return fe[t]
        })
    }
    function me(t) {
        t = Ft(t);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }
    function ge(t) {
        return Ht(Yt(t)).left + me(t).scrollLeft
    }
    function ve(t) {
        var e = Vt(t)
          , n = e.overflow
          , t = e.overflowX
          , e = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + e + t)
    }
    function ye(t, e) {
        void 0 === e && (e = []);
        var n = function t(e) {
            return 0 <= ["html", "body", "#document"].indexOf(jt(e)) ? e.ownerDocument.body : $t(e) && ve(e) ? e : t(Zt(e))
        }(t)
          , t = n === (null == (i = t.ownerDocument) ? void 0 : i.body)
          , i = Ft(n)
          , n = t ? [i].concat(i.visualViewport || [], ve(n) ? n : []) : n
          , e = e.concat(n);
        return t ? e : e.concat(ye(Zt(n)))
    }
    function be(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function _e(t, e) {
        return e === At ? be((o = Ft(r = t),
        s = Yt(r),
        a = o.visualViewport,
        l = s.clientWidth,
        u = s.clientHeight,
        s = o = 0,
        a && (l = a.width,
        u = a.height,
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = a.offsetLeft,
        s = a.offsetTop)),
        {
            width: l,
            height: u,
            x: o + ge(r),
            y: s
        })) : $t(e) ? ((i = Ht(n = e)).top = i.top + n.clientTop,
        i.left = i.left + n.clientLeft,
        i.bottom = i.top + n.clientHeight,
        i.right = i.left + n.clientWidth,
        i.width = n.clientWidth,
        i.height = n.clientHeight,
        i.x = i.left,
        i.y = i.top,
        i) : be((r = Yt(t),
        s = Yt(r),
        e = me(r),
        i = null == (n = r.ownerDocument) ? void 0 : n.body,
        t = Qt(s.scrollWidth, s.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
        n = Qt(s.scrollHeight, s.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
        r = -e.scrollLeft + ge(r),
        e = -e.scrollTop,
        "rtl" === Vt(i || s).direction && (r += Qt(s.clientWidth, i ? i.clientWidth : 0) - t),
        {
            width: t,
            height: n,
            x: r,
            y: e
        }));
        var n, i, r, o, s, a, l, u
    }
    function we(t) {
        var e, n = t.reference, i = t.element, r = t.placement, t = r ? Bt(r) : null, r = r ? oe(r) : null, o = n.x + n.width / 2 - i.width / 2, s = n.y + n.height / 2 - i.height / 2;
        switch (t) {
        case mt:
            e = {
                x: o,
                y: n.y - i.height
            };
            break;
        case gt:
            e = {
                x: o,
                y: n.y + n.height
            };
            break;
        case vt:
            e = {
                x: n.x + n.width,
                y: s
            };
            break;
        case yt:
            e = {
                x: n.x - i.width,
                y: s
            };
            break;
        default:
            e = {
                x: n.x,
                y: n.y
            }
        }
        var a = t ? Gt(t) : null;
        if (null != a) {
            var l = "y" === a ? "height" : "width";
            switch (r) {
            case wt:
                e[a] = e[a] - (n[l] / 2 - i[l] / 2);
                break;
            case xt:
                e[a] = e[a] + (n[l] / 2 - i[l] / 2)
            }
        }
        return e
    }
    function xe(t, e) {
        var n, i, r, o, s = e = void 0 === e ? {} : e, a = s.placement, l = void 0 === a ? t.placement : a, u = s.boundary, c = void 0 === u ? Ct : u, d = s.rootBoundary, e = void 0 === d ? At : d, a = s.elementContext, u = void 0 === a ? Et : a, d = s.altBoundary, a = void 0 !== d && d, d = s.padding, s = void 0 === d ? 0 : d, d = ne("number" != typeof s ? s : ie(s, _t)), s = t.rects.popper, a = t.elements[a ? u === Et ? Tt : Et : u], i = (n = zt(a) ? a : a.contextElement || Yt(t.elements.popper),
        a = e,
        e = "clippingParents" === (e = c) ? (i = ye(Zt(c = n)),
        zt(r = 0 <= ["absolute", "fixed"].indexOf(Vt(c).position) && $t(c) ? Kt(c) : c) ? i.filter(function(t) {
            return zt(t) && Ut(t, r) && "body" !== jt(t)
        }) : []) : [].concat(e),
        e = [].concat(e, [a]),
        a = e[0],
        (a = e.reduce(function(t, e) {
            e = _e(n, e);
            return t.top = Qt(e.top, t.top),
            t.right = Jt(e.right, t.right),
            t.bottom = Jt(e.bottom, t.bottom),
            t.left = Qt(e.left, t.left),
            t
        }, _e(n, a))).width = a.right - a.left,
        a.height = a.bottom - a.top,
        a.x = a.left,
        a.y = a.top,
        a), e = Ht(t.elements.reference), a = we({
            reference: e,
            element: s,
            strategy: "absolute",
            placement: l
        }), a = be(Object.assign({}, s, a)), e = u === Et ? a : e, h = {
            top: i.top - e.top + d.top,
            bottom: e.bottom - i.bottom + d.bottom,
            left: i.left - e.left + d.left,
            right: e.right - i.right + d.right
        }, t = t.modifiersData.offset;
        return u === Et && t && (o = t[l],
        Object.keys(h).forEach(function(t) {
            var e = 0 <= [vt, gt].indexOf(t) ? 1 : -1
              , n = 0 <= [mt, gt].indexOf(t) ? "y" : "x";
            h[t] += o[n] * e
        })),
        h
    }
    var Ce = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var d = t.state
              , e = t.options
              , n = t.name;
            if (!d.modifiersData[n]._skip) {
                for (var i = e.mainAxis, r = void 0 === i || i, t = e.altAxis, o = void 0 === t || t, i = e.fallbackPlacements, h = e.padding, f = e.boundary, p = e.rootBoundary, s = e.altBoundary, t = e.flipVariations, m = void 0 === t || t, g = e.allowedAutoPlacements, t = d.options.placement, e = Bt(t), e = i || (e !== t && m ? function(t) {
                    if (Bt(t) === bt)
                        return [];
                    var e = he(t);
                    return [pe(t), e, pe(e)]
                }(t) : [he(t)]), a = [t].concat(e).reduce(function(t, e) {
                    return t.concat(Bt(e) === bt ? (n = d,
                    r = i = void 0 === (i = {
                        placement: e,
                        boundary: f,
                        rootBoundary: p,
                        padding: h,
                        flipVariations: m,
                        allowedAutoPlacements: g
                    }) ? {} : i,
                    t = r.placement,
                    o = r.boundary,
                    s = r.rootBoundary,
                    a = r.padding,
                    i = r.flipVariations,
                    l = void 0 === (r = r.allowedAutoPlacements) ? St : r,
                    u = oe(t),
                    t = u ? i ? kt : kt.filter(function(t) {
                        return oe(t) === u
                    }) : _t,
                    c = (i = 0 === (i = t.filter(function(t) {
                        return 0 <= l.indexOf(t)
                    })).length ? t : i).reduce(function(t, e) {
                        return t[e] = xe(n, {
                            placement: e,
                            boundary: o,
                            rootBoundary: s,
                            padding: a
                        })[Bt(e)],
                        t
                    }, {}),
                    Object.keys(c).sort(function(t, e) {
                        return c[t] - c[e]
                    })) : e);
                    var n, i, r, o, s, a, l, u, c
                }, []), l = d.rects.reference, u = d.rects.popper, c = new Map, v = !0, y = a[0], b = 0; b < a.length; b++) {
                    var _ = a[b]
                      , w = Bt(_)
                      , x = oe(_) === wt
                      , C = 0 <= [mt, gt].indexOf(w)
                      , A = C ? "width" : "height"
                      , E = xe(d, {
                        placement: _,
                        boundary: f,
                        rootBoundary: p,
                        altBoundary: s,
                        padding: h
                    })
                      , C = C ? x ? vt : yt : x ? gt : mt;
                    l[A] > u[A] && (C = he(C));
                    x = he(C),
                    A = [];
                    if (r && A.push(E[w] <= 0),
                    o && A.push(E[C] <= 0, E[x] <= 0),
                    A.every(function(t) {
                        return t
                    })) {
                        y = _,
                        v = !1;
                        break
                    }
                    c.set(_, A)
                }
                if (v)
                    for (var T = m ? 3 : 1; 0 < T && "break" !== function(e) {
                        var t = a.find(function(t) {
                            t = c.get(t);
                            if (t)
                                return t.slice(0, e).every(function(t) {
                                    return t
                                })
                        });
                        if (t)
                            return y = t,
                            "break"
                    }(T); T--)
                        ;
                d.placement !== y && (d.modifiersData[n]._skip = !0,
                d.placement = y,
                d.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function Ae(t, e, n) {
        return {
            top: t.top - e.height - (n = void 0 === n ? {
                x: 0,
                y: 0
            } : n).y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }
    function Ee(e) {
        return [mt, vt, gt, yt].some(function(t) {
            return 0 <= e[t]
        })
    }
    var Te = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , n = t.name
              , i = e.rects.reference
              , r = e.rects.popper
              , o = e.modifiersData.preventOverflow
              , s = xe(e, {
                elementContext: "reference"
            })
              , t = xe(e, {
                altBoundary: !0
            })
              , i = Ae(s, i)
              , t = Ae(t, r, o)
              , r = Ee(i)
              , o = Ee(t);
            e.modifiersData[n] = {
                referenceClippingOffsets: i,
                popperEscapeOffsets: t,
                isReferenceHidden: r,
                hasPopperEscaped: o
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": r,
                "data-popper-escaped": o
            })
        }
    }
      , ke = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var s = t.state
              , e = t.options
              , n = t.name
              , i = e.offset
              , a = void 0 === i ? [0, 0] : i
              , t = St.reduce(function(t, e) {
                return t[e] = (n = e,
                i = s.rects,
                r = a,
                o = Bt(n),
                e = 0 <= [yt, mt].indexOf(o) ? -1 : 1,
                r = (r = (n = "function" == typeof r ? r(Object.assign({}, i, {
                    placement: n
                })) : r)[0]) || 0,
                n = ((n = n[1]) || 0) * e,
                0 <= [yt, vt].indexOf(o) ? {
                    x: n,
                    y: r
                } : {
                    x: r,
                    y: n
                }),
                t;
                var n, i, r, o
            }, {})
              , e = t[s.placement]
              , i = e.x
              , e = e.y;
            null != s.modifiersData.popperOffsets && (s.modifiersData.popperOffsets.x += i,
            s.modifiersData.popperOffsets.y += e),
            s.modifiersData[n] = t
        }
    }
      , Se = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , t = t.name;
            e.modifiersData[t] = we({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    }
      , De = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , r = n.mainAxis
              , o = void 0 === r || r
              , s = n.altAxis
              , a = void 0 !== s && s
              , l = n.boundary
              , u = n.rootBoundary
              , c = n.altBoundary
              , d = n.padding
              , h = n.tether
              , f = void 0 === h || h
              , p = n.tetherOffset
              , m = void 0 === p ? 0 : p
              , g = xe(e, {
                boundary: l,
                rootBoundary: u,
                padding: d,
                altBoundary: c
            })
              , v = Bt(e.placement)
              , y = oe(e.placement)
              , b = !y
              , _ = Gt(v)
              , w = "x" === _ ? "y" : "x"
              , x = e.modifiersData.popperOffsets
              , C = e.rects.reference
              , t = e.rects.popper
              , r = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m
              , s = {
                x: 0,
                y: 0
            };
            x && ((o || a) && (h = "y" === _ ? "height" : "width",
            n = x[_],
            l = x[_] + g[p = "y" === _ ? mt : yt],
            d = x[_] - g[u = "y" === _ ? gt : vt],
            c = f ? -t[h] / 2 : 0,
            v = (y === wt ? C : t)[h],
            m = y === wt ? -t[h] : -C[h],
            y = e.elements.arrow,
            t = f && y ? Wt(y) : {
                width: 0,
                height: 0
            },
            p = (y = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            })[p],
            u = y[u],
            t = ee(0, C[h], t[h]),
            p = b ? C[h] / 2 - c - t - p - r : v - t - p - r,
            t = b ? -C[h] / 2 + c + t + u + r : m + t + u + r,
            r = (u = e.elements.arrow && Kt(e.elements.arrow)) ? "y" === _ ? u.clientTop || 0 : u.clientLeft || 0 : 0,
            u = e.modifiersData.offset ? e.modifiersData.offset[e.placement][_] : 0,
            r = x[_] + p - u - r,
            u = x[_] + t - u,
            o && (d = ee(f ? Jt(l, r) : l, n, f ? Qt(d, u) : d),
            x[_] = d,
            s[_] = d - n),
            a && (a = (n = x[w]) + g["x" === _ ? mt : yt],
            _ = n - g["x" === _ ? gt : vt],
            _ = ee(f ? Jt(a, r) : a, n, f ? Qt(_, u) : _),
            x[w] = _,
            s[w] = _ - n)),
            e.modifiersData[i] = s)
        },
        requiresIfExists: ["offset"]
    };
    function Oe(t) {
        var n = new Map
          , i = new Set
          , r = [];
        return t.forEach(function(t) {
            n.set(t.name, t)
        }),
        t.forEach(function(t) {
            i.has(t.name) || function e(t) {
                i.add(t.name),
                [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                    i.has(t) || (t = n.get(t)) && e(t)
                }),
                r.push(t)
            }(t)
        }),
        r
    }
    var Le = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Pe() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }
    function Ie(t) {
        var e = t = void 0 === t ? {} : t
          , t = e.defaultModifiers
          , d = void 0 === t ? [] : t
          , e = e.defaultOptions
          , h = void 0 === e ? Le : e;
        return function(i, r, e) {
            void 0 === e && (e = h);
            var n, o, s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Le, h),
                modifiersData: {},
                elements: {
                    reference: i,
                    popper: r
                },
                attributes: {},
                styles: {}
            }, a = [], l = !1, u = {
                state: s,
                setOptions: function(t) {
                    t = "function" == typeof t ? t(s.options) : t;
                    c(),
                    s.options = Object.assign({}, h, s.options, t),
                    s.scrollParents = {
                        reference: zt(i) ? ye(i) : i.contextElement ? ye(i.contextElement) : [],
                        popper: ye(r)
                    };
                    var e, n, t = (n = Oe((t = [].concat(d, s.options.modifiers),
                    e = t.reduce(function(t, e) {
                        var n = t[e.name];
                        return t[e.name] = n ? Object.assign({}, n, e, {
                            options: Object.assign({}, n.options, e.options),
                            data: Object.assign({}, n.data, e.data)
                        }) : e,
                        t
                    }, {}),
                    Object.keys(e).map(function(t) {
                        return e[t]
                    }))),
                    Nt.reduce(function(t, e) {
                        return t.concat(n.filter(function(t) {
                            return t.phase === e
                        }))
                    }, []));
                    return s.orderedModifiers = t.filter(function(t) {
                        return t.enabled
                    }),
                    s.orderedModifiers.forEach(function(t) {
                        var e = t.name
                          , n = t.options
                          , t = t.effect;
                        "function" == typeof t && (n = t({
                            state: s,
                            name: e,
                            instance: u,
                            options: void 0 === n ? {} : n
                        }),
                        a.push(n || function() {}
                        ))
                    }),
                    u.update()
                },
                forceUpdate: function() {
                    if (!l) {
                        var t = s.elements
                          , e = t.reference
                          , t = t.popper;
                        if (Pe(e, t)) {
                            s.rects = {
                                reference: function(t, e, n) {
                                    void 0 === n && (n = !1);
                                    var i = $t(e);
                                    $t(e) && ((o = (s = e).getBoundingClientRect()).width,
                                    s.offsetWidth,
                                    o.height,
                                    s.offsetHeight);
                                    var r = Yt(e)
                                      , o = Ht(t)
                                      , s = {
                                        scrollLeft: 0,
                                        scrollTop: 0
                                    }
                                      , t = {
                                        x: 0,
                                        y: 0
                                    };
                                    return !i && (i || n) || ("body" === jt(e) && !ve(r) || (s = (n = e) !== Ft(n) && $t(n) ? {
                                        scrollLeft: n.scrollLeft,
                                        scrollTop: n.scrollTop
                                    } : me(n)),
                                    $t(e) ? ((t = Ht(e)).x += e.clientLeft,
                                    t.y += e.clientTop) : r && (t.x = ge(r))),
                                    {
                                        x: o.left + s.scrollLeft - t.x,
                                        y: o.top + s.scrollTop - t.y,
                                        width: o.width,
                                        height: o.height
                                    }
                                }(e, Kt(t), "fixed" === s.options.strategy),
                                popper: Wt(t)
                            },
                            s.reset = !1,
                            s.placement = s.options.placement,
                            s.orderedModifiers.forEach(function(t) {
                                return s.modifiersData[t.name] = Object.assign({}, t.data)
                            });
                            for (var n, i, r, o = 0; o < s.orderedModifiers.length; o++)
                                !0 !== s.reset ? (n = (r = s.orderedModifiers[o]).fn,
                                i = r.options,
                                r = r.name,
                                "function" == typeof n && (s = n({
                                    state: s,
                                    options: void 0 === i ? {} : i,
                                    name: r,
                                    instance: u
                                }) || s)) : (s.reset = !1,
                                o = -1)
                        }
                    }
                },
                update: (n = function() {
                    return new Promise(function(t) {
                        u.forceUpdate(),
                        t(s)
                    }
                    )
                }
                ,
                function() {
                    return o = o || new Promise(function(t) {
                        Promise.resolve().then(function() {
                            o = void 0,
                            t(n())
                        })
                    }
                    )
                }
                ),
                destroy: function() {
                    c(),
                    l = !0
                }
            };
            return Pe(i, r) && u.setOptions(e).then(function(t) {
                !l && e.onFirstUpdate && e.onFirstUpdate(t)
            }),
            u;
            function c() {
                a.forEach(function(t) {
                    return t()
                }),
                a = []
            }
        }
    }
    var Me = Ie()
      , Ne = Ie({
        defaultModifiers: [ce, Se, le, qt]
    })
      , je = Ie({
        defaultModifiers: [ce, Se, le, qt, ke, Ce, De, re, Te]
    });
    const Fe = Object.freeze({
        __proto__: null,
        popperGenerator: Ie,
        detectOverflow: xe,
        createPopperBase: Me,
        createPopper: je,
        createPopperLite: Ne,
        top: mt,
        bottom: gt,
        right: vt,
        left: yt,
        auto: bt,
        basePlacements: _t,
        start: wt,
        end: xt,
        clippingParents: Ct,
        viewport: At,
        popper: Et,
        reference: Tt,
        variationPlacements: kt,
        placements: St,
        beforeRead: Dt,
        read: "read",
        afterRead: Ot,
        beforeMain: Lt,
        main: "main",
        afterMain: Pt,
        beforeWrite: It,
        write: "write",
        afterWrite: Mt,
        modifierPhases: Nt,
        applyStyles: qt,
        arrow: re,
        computeStyles: le,
        eventListeners: ce,
        flip: Ce,
        hide: Te,
        offset: ke,
        popperOffsets: Se,
        preventOverflow: De
    })
      , ze = "dropdown"
      , $e = "Escape"
      , Re = "ArrowUp"
      , qe = "ArrowDown"
      , Be = new RegExp("ArrowUp|ArrowDown|Escape")
      , He = "click.bs.dropdown.data-api"
      , We = "keydown.bs.dropdown.data-api"
      , Ue = "show"
      , Ve = '[data-bs-toggle="dropdown"]'
      , Ye = ".dropdown-menu"
      , Ze = g() ? "top-end" : "top-start"
      , Xe = g() ? "top-start" : "top-end"
      , Ke = g() ? "bottom-end" : "bottom-start"
      , Ge = g() ? "bottom-start" : "bottom-end"
      , Qe = g() ? "left-start" : "right-start"
      , Je = g() ? "right-start" : "left-start"
      , tn = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , en = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class nn extends z {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return tn
        }
        static get DefaultType() {
            return en
        }
        static get NAME() {
            return ze
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!c(this._element) && !this._isShown(this._menu)) {
                var t = {
                    relatedTarget: this._element
                };
                if (!N.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                    const e = nn.getParentFromElement(this._element);
                    this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e),
                    "ontouchstart"in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t=>N.on(t, "mouseover", h)),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(Ue),
                    this._element.classList.add(Ue),
                    N.trigger(this._element, "shown.bs.dropdown", t)
                }
            }
        }
        hide() {
            var t;
            !c(this._element) && this._isShown(this._menu) && (t = {
                relatedTarget: this._element
            },
            this._completeHide(t))
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            N.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t=>N.off(t, "mouseover", h)),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(Ue),
            this._element.classList.remove(Ue),
            this._element.setAttribute("aria-expanded", "false"),
            U.removeDataAttribute(this._menu, "popper"),
            N.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...U.getDataAttributes(this._element),
                ...t
            },
            n(ze, t, this.constructor.DefaultType),
            "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(ze.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t
        }
        _createPopper(t) {
            if (void 0 === Fe)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : l(this._config.reference) ? e = u(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const n = this._getPopperConfig()
              , i = n.modifiers.find(t=>"applyStyles" === t.name && !1 === t.enabled);
            this._popper = je(e, this._menu, n),
            i && U.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t=this._element) {
            return t.classList.contains(Ue)
        }
        _getMenuElement() {
            return V.next(this._element, Ye)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return Qe;
            if (t.classList.contains("dropstart"))
                return Je;
            var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Xe : Ze : e ? Ge : Ke
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t=>Number.parseInt(t, 10)) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const n = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(i);
            n.length && b(n, e, t === qe, !n.includes(e)).focus()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = nn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
        static clearMenus(n) {
            if (!n || 2 !== n.button && ("keyup" !== n.type || "Tab" === n.key)) {
                const i = V.find(Ve);
                for (let t = 0, e = i.length; t < e; t++) {
                    const r = nn.getInstance(i[t]);
                    if (r && !1 !== r._config.autoClose && r._isShown()) {
                        const o = {
                            relatedTarget: r._element
                        };
                        if (n) {
                            const i = n.composedPath()
                              , s = i.includes(r._menu);
                            if (i.includes(r._element) || "inside" === r._config.autoClose && !s || "outside" === r._config.autoClose && s)
                                continue;
                            if (r._menu.contains(n.target) && ("keyup" === n.type && "Tab" === n.key || /input|select|option|textarea|form/i.test(n.target.tagName)))
                                continue;
                            "click" === n.type && (o.clickEvent = n)
                        }
                        r._completeHide(o)
                    }
                }
            }
        }
        static getParentFromElement(t) {
            return r(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? !("Space" === t.key || t.key !== $e && (t.key !== qe && t.key !== Re || t.target.closest(Ye))) : Be.test(t.key)) {
                var e = this.classList.contains(Ue);
                if ((e || t.key !== $e) && (t.preventDefault(),
                t.stopPropagation(),
                !c(this))) {
                    const n = this.matches(Ve) ? this : V.prev(this, Ve)[0]
                      , i = nn.getOrCreateInstance(n);
                    if (t.key !== $e)
                        return t.key === Re || t.key === qe ? (e || i.show(),
                        void i._selectMenuItem(t)) : void (e && "Space" !== t.key || nn.clearMenus());
                    i.hide()
                }
            }
        }
    }
    N.on(document, We, Ve, nn.dataApiKeydownHandler),
    N.on(document, We, Ye, nn.dataApiKeydownHandler),
    N.on(document, He, nn.clearMenus),
    N.on(document, "keyup.bs.dropdown.data-api", nn.clearMenus),
    N.on(document, He, Ve, function(t) {
        t.preventDefault(),
        nn.getOrCreateInstance(this).toggle()
    }),
    t(nn);
    const rn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , on = ".sticky-top";
    class sn {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            var t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", t=>t + e),
            this._setElementAttributes(rn, "paddingRight", t=>t + e),
            this._setElementAttributes(on, "marginRight", t=>t - e)
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, n, i) {
            const r = this.getWidth();
            this._applyManipulationCallback(t, t=>{
                var e;
                t !== this._element && window.innerWidth > t.clientWidth + r || (this._saveInitialAttribute(t, n),
                e = window.getComputedStyle(t)[n],
                t.style[n] = i(Number.parseFloat(e)) + "px")
            }
            )
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes(rn, "paddingRight"),
            this._resetElementAttributes(on, "marginRight")
        }
        _saveInitialAttribute(t, e) {
            var n = t.style[e];
            n && U.setDataAttribute(t, e, n)
        }
        _resetElementAttributes(t, n) {
            this._applyManipulationCallback(t, t=>{
                var e = U.getDataAttribute(t, n);
                void 0 === e ? t.style.removeProperty(n) : (U.removeDataAttribute(t, n),
                t.style[n] = e)
            }
            )
        }
        _applyManipulationCallback(t, e) {
            l(t) ? e(t) : V.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return 0 < this.getWidth()
        }
    }
    const an = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , ln = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }
      , un = "mousedown.bs.backdrop";
    class cn {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && f(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation(()=>{
                v(t)
            }
            )) : v(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(()=>{
                this.dispose(),
                v(t)
            }
            )) : v(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...an,
                ..."object" == typeof t ? t : {}
            }).rootElement = u(t.rootElement),
            n("backdrop", t, ln),
            t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()),
            N.on(this._getElement(), un, ()=>{
                v(this._config.clickCallback)
            }
            ),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (N.off(this._element, un),
            this._element.remove(),
            this._isAppended = !1)
        }
        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated)
        }
    }
    const dn = {
        trapElement: null,
        autofocus: !0
    }
      , hn = {
        trapElement: "element",
        autofocus: "boolean"
    }
      , fn = ".bs.focustrap"
      , pn = "backward";
    class mn {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        activate() {
            const {trapElement: t, autofocus: e} = this._config;
            this._isActive || (e && t.focus(),
            N.off(document, fn),
            N.on(document, "focusin.bs.focustrap", t=>this._handleFocusin(t)),
            N.on(document, "keydown.tab.bs.focustrap", t=>this._handleKeydown(t)),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            N.off(document, fn))
        }
        _handleFocusin(t) {
            const e = t["target"]
              , n = this._config["trapElement"];
            if (e !== document && e !== n && !n.contains(e)) {
                const i = V.focusableChildren(n);
                (0 === i.length ? n : this._lastTabNavDirection === pn ? i[i.length - 1] : i[0]).focus()
            }
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? pn : "forward")
        }
        _getConfig(t) {
            return t = {
                ...dn,
                ..."object" == typeof t ? t : {}
            },
            n("focustrap", t, hn),
            t
        }
    }
    const gn = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , vn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , yn = "hidden.bs.modal"
      , bn = "show.bs.modal"
      , _n = "resize.bs.modal"
      , wn = "click.dismiss.bs.modal"
      , xn = "keydown.dismiss.bs.modal"
      , Cn = "mousedown.dismiss.bs.modal"
      , An = "modal-open"
      , En = "modal-static";
    class Tn extends z {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = V.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollBar = new sn
        }
        static get Default() {
            return gn
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, bn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(An),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            N.on(this._dialog, Cn, ()=>{
                N.one(this._element, "mouseup.dismiss.bs.modal", t=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                )
            }
            ),
            this._showBackdrop(()=>this._showElement(t)))
        }
        hide() {
            var t;
            this._isShown && !this._isTransitioning && (N.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
            (t = this._isAnimated()) && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            this._focustrap.deactivate(),
            this._element.classList.remove("show"),
            N.off(this._element, wn),
            N.off(this._dialog, Cn),
            this._queueCallback(()=>this._hideModal(), this._element, t)))
        }
        dispose() {
            [window, this._dialog].forEach(t=>N.off(t, ".bs.modal")),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new cn({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new mn({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return t = {
                ...gn,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            n("modal", t, vn),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , n = V.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            n && (n.scrollTop = 0),
            e && f(this._element),
            this._element.classList.add("show"),
            this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                N.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            , this._dialog, e)
        }
        _setEscapeEvent() {
            this._isShown ? N.on(this._element, xn, t=>{
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
            }
            ) : N.off(this._element, xn)
        }
        _setResizeEvent() {
            this._isShown ? N.on(window, _n, ()=>this._adjustDialog()) : N.off(window, _n)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(()=>{
                document.body.classList.remove(An),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                N.trigger(this._element, yn)
            }
            )
        }
        _showBackdrop(t) {
            N.on(this._element, wn, t=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            ),
            this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (!N.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                const {classList: t, scrollHeight: e, style: n} = this._element
                  , i = e > document.documentElement.clientHeight;
                !i && "hidden" === n.overflowY || t.contains(En) || (i || (n.overflowY = "hidden"),
                t.add(En),
                this._queueCallback(()=>{
                    t.remove(En),
                    i || this._queueCallback(()=>{
                        n.overflowY = ""
                    }
                    , this._dialog)
                }
                , this._dialog),
                this._element.focus())
            }
        }
        _adjustDialog() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , n = 0 < e;
            (!n && t && !g() || n && !t && g()) && (this._element.style.paddingLeft = e + "px"),
            (n && !t && !g() || !n && t && g()) && (this._element.style.paddingRight = e + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, n) {
            return this.each(function() {
                const t = Tn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e](n)
                }
            })
        }
    }
    N.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
        const e = r(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        N.one(e, bn, t=>{
            t.defaultPrevented || N.one(e, yn, ()=>{
                i(this) && this.focus()
            }
            )
        }
        );
        t = V.findOne(".modal.show");
        t && Tn.getInstance(t).hide(),
        Tn.getOrCreateInstance(e).toggle(this)
    }),
    $(Tn),
    t(Tn);
    const kn = "offcanvas"
      , Sn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Dn = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , On = ".offcanvas.show"
      , Ln = "hidden.bs.offcanvas";
    class Pn extends z {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get NAME() {
            return kn
        }
        static get Default() {
            return Sn
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || N.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || (new sn).hide(),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add("show"),
            this._queueCallback(()=>{
                this._config.scroll || this._focustrap.activate(),
                N.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            , this._element, !0))
        }
        hide() {
            this._isShown && (N.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || (new sn).reset(),
                N.trigger(this._element, Ln)
            }
            , this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...Sn,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            n(kn, t, Dn),
            t
        }
        _initializeBackDrop() {
            return new cn({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            })
        }
        _initializeFocusTrap() {
            return new mn({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            N.on(this._element, "keydown.dismiss.bs.offcanvas", t=>{
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            )
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = Pn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    N.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        var e = r(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        c(this) || (N.one(e, Ln, ()=>{
            i(this) && this.focus()
        }
        ),
        (t = V.findOne(On)) && t !== e && Pn.getInstance(t).hide(),
        Pn.getOrCreateInstance(e).toggle(this))
    }),
    N.on(window, "load.bs.offcanvas.data-api", ()=>V.find(On).forEach(t=>Pn.getOrCreateInstance(t).show())),
    $(Pn),
    t(Pn);
    const In = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Mn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Nn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function jn(t, n, i) {
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        const r = (new window.DOMParser).parseFromString(t, "text/html")
          , o = [].concat(...r.body.querySelectorAll("*"));
        for (let t = 0, e = o.length; t < e; t++) {
            const i = o[t]
              , r = i.nodeName.toLowerCase();
            if (Object.keys(n).includes(r)) {
                const s = [].concat(...i.attributes)
                  , a = [].concat(n["*"] || [], n[r] || []);
                s.forEach(t=>{
                    ((t,e)=>{
                        var n = t.nodeName.toLowerCase();
                        if (e.includes(n))
                            return !In.has(n) || Boolean(Mn.test(t.nodeValue) || Nn.test(t.nodeValue));
                        const i = e.filter(t=>t instanceof RegExp);
                        for (let t = 0, e = i.length; t < e; t++)
                            if (i[t].test(n))
                                return !0;
                        return !1
                    }
                    )(t, a) || i.removeAttribute(t.nodeName)
                }
                )
            } else
                i.remove()
        }
        return r.body.innerHTML
    }
    const Fn = "tooltip"
      , zn = new Set(["sanitize", "allowList", "sanitizeFn"])
      , $n = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , Rn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: g() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: g() ? "right" : "left"
    }
      , qn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , Bn = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Hn = "fade"
      , Wn = "show"
      , Un = "show"
      , Vn = ".tooltip-inner"
      , Yn = "hide.bs.modal"
      , Zn = "hover";
    class Xn extends z {
        constructor(t, e) {
            if (void 0 === Fe)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return qn
        }
        static get NAME() {
            return Fn
        }
        static get Event() {
            return Bn
        }
        static get DefaultType() {
            return $n
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else
                    this.getTipElement().classList.contains(Wn) ? this._leave(null, this) : this._enter(null, this)
        }
        dispose() {
            clearTimeout(this._timeout),
            N.off(this._element.closest(".modal"), Yn, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                const e = N.trigger(this._element, this.constructor.Event.SHOW)
                  , n = d(this._element)
                  , i = (null === n ? this._element.ownerDocument.documentElement : n).contains(this._element);
                if (!e.defaultPrevented && i) {
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Vn).innerHTML && (this._disposePopper(),
                    this.tip.remove(),
                    this.tip = null);
                    const r = this.getTipElement()
                      , o = (t=>{
                        for (; t += Math.floor(1e6 * Math.random()),
                        document.getElementById(t); )
                            ;
                        return t
                    }
                    )(this.constructor.NAME);
                    r.setAttribute("id", o),
                    this._element.setAttribute("aria-describedby", o),
                    this._config.animation && r.classList.add(Hn);
                    var t = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement
                      , t = this._getAttachment(t);
                    this._addAttachmentClass(t);
                    const s = this._config["container"];
                    F.set(r, this.constructor.DATA_KEY, this),
                    this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(r),
                    N.trigger(this._element, this.constructor.Event.INSERTED)),
                    this._popper ? this._popper.update() : this._popper = je(this._element, r, this._getPopperConfig(t)),
                    r.classList.add(Wn);
                    const a = this._resolvePossibleFunction(this._config.customClass);
                    a && r.classList.add(...a.split(" ")),
                    "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t=>{
                        N.on(t, "mouseover", h)
                    }
                    );
                    t = this.tip.classList.contains(Hn);
                    this._queueCallback(()=>{
                        var t = this._hoverState;
                        this._hoverState = null,
                        N.trigger(this._element, this.constructor.Event.SHOWN),
                        "out" === t && this._leave(null, this)
                    }
                    , this.tip, t)
                }
            }
        }
        hide() {
            if (this._popper) {
                const e = this.getTipElement();
                var t;
                N.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented || (e.classList.remove(Wn),
                "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t=>N.off(t, "mouseover", h)),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                t = this.tip.classList.contains(Hn),
                this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._hoverState !== Un && e.remove(),
                    this._cleanTipClass(),
                    this._element.removeAttribute("aria-describedby"),
                    N.trigger(this._element, this.constructor.Event.HIDDEN),
                    this._disposePopper())
                }
                , this.tip, t),
                this._hoverState = "")
            }
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e),
            e.classList.remove(Hn, Wn),
            this.tip = e,
            this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Vn)
        }
        _sanitizeAndSetContent(t, e, n) {
            const i = V.findOne(n, t);
            e || !i ? this.setElementContent(i, e) : i.remove()
        }
        setElementContent(t, e) {
            if (null !== t)
                return l(e) ? (e = u(e),
                void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = jn(e, this._config.allowList, this._config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            var t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t=>Number.parseInt(t, 10)) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            t = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t=>this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(this._getBasicClassPrefix() + "-" + this.updateAttachment(t))
        }
        _getAttachment(t) {
            return Rn[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach(t=>{
                var e;
                "click" === t ? N.on(this._element, this.constructor.Event.CLICK, this._config.selector, t=>this.toggle(t)) : "manual" !== t && (e = t === Zn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                t = t === Zn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT,
                N.on(this._element, e, this._config.selector, t=>this._enter(t)),
                N.on(this._element, t, this._config.selector, t=>this._leave(t)))
            }
            ),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            N.on(this._element.closest(".modal"), Yn, this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            var t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            !t && "string" == e || (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? "focus" : Zn] = !0),
            e.getTipElement().classList.contains(Wn) || e._hoverState === Un ? e._hoverState = Un : (clearTimeout(e._timeout),
            e._hoverState = Un,
            e._config.delay && e._config.delay.show ? e._timeout = setTimeout(()=>{
                e._hoverState === Un && e.show()
            }
            , e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? "focus" : Zn] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = "out",
            e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(()=>{
                "out" === e._hoverState && e.hide()
            }
            , e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return Object.keys(e).forEach(t=>{
                zn.has(t) && delete e[t]
            }
            ),
            (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : u(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            n(Fn, t, this.constructor.DefaultType),
            t.sanitize && (t.template = jn(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const e = this.getTipElement()
              , t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g")
              , n = e.getAttribute("class").match(t);
            null !== n && 0 < n.length && n.map(t=>t.trim()).forEach(t=>e.classList.remove(t))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(t) {
            var t = t["state"];
            t && (this.tip = t.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(t.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = Xn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    t(Xn);
    const Kn = {
        ...Xn.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , Gn = {
        ...Xn.DefaultType,
        content: "(string|element|function)"
    }
      , Qn = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class Jn extends Xn {
        static get Default() {
            return Kn
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return Qn
        }
        static get DefaultType() {
            return Gn
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
            this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = Jn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    t(Jn);
    const ti = "scrollspy"
      , ei = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , ni = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , ii = "active"
      , ri = ".nav-link, .list-group-item, .dropdown-item"
      , oi = "position";
    class si extends z {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            N.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return ei
        }
        static get NAME() {
            return ti
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : oi
              , i = "auto" === this._config.method ? t : this._config.method
              , r = i === oi ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            V.find(ri, this._config.target).map(t=>{
                const e = s(t)
                  , n = e ? V.findOne(e) : null;
                if (n) {
                    const t = n.getBoundingClientRect();
                    if (t.width || t.height)
                        return [U[i](n).top + r, e]
                }
                return null
            }
            ).filter(t=>t).sort((t,e)=>t[0] - e[0]).forEach(t=>{
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            )
        }
        dispose() {
            N.off(this._scrollElement, ".bs.scrollspy"),
            super.dispose()
        }
        _getConfig(t) {
            return (t = {
                ...ei,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = u(t.target) || document.documentElement,
            n(ti, t, ni),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            e >= n) {
                const e = this._targets[this._targets.length - 1];
                this._activeTarget !== e && this._activate(e)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (let t = this._offsets.length; t--; )
                    this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
            }
        }
        _activate(e) {
            this._activeTarget = e,
            this._clear();
            const t = ri.split(",").map(t=>t + `[data-bs-target="${e}"],${t}[href="${e}"]`)
              , n = V.findOne(t.join(","), this._config.target);
            n.classList.add(ii),
            n.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(ii) : V.parents(n, ".nav, .list-group").forEach(t=>{
                V.prev(t, ".nav-link, .list-group-item").forEach(t=>t.classList.add(ii)),
                V.prev(t, ".nav-item").forEach(t=>{
                    V.children(t, ".nav-link").forEach(t=>t.classList.add(ii))
                }
                )
            }
            ),
            N.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        _clear() {
            V.find(ri, this._config.target).filter(t=>t.classList.contains(ii)).forEach(t=>t.classList.remove(ii))
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = si.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    N.on(window, "load.bs.scrollspy.data-api", ()=>{
        V.find('[data-bs-spy="scroll"]').forEach(t=>new si(t))
    }
    ),
    t(si);
    const ai = "active"
      , li = ".active"
      , ui = ":scope > li > .active";
    class ci extends z {
        static get NAME() {
            return "tab"
        }
        show() {
            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains(ai)) {
                let t;
                const n = r(this._element)
                  , i = this._element.closest(".nav, .list-group");
                if (i) {
                    const n = "UL" === i.nodeName || "OL" === i.nodeName ? ui : li;
                    t = V.find(n, i),
                    t = t[t.length - 1]
                }
                var e = t ? N.trigger(t, "hide.bs.tab", {
                    relatedTarget: this._element
                }) : null;
                N.trigger(this._element, "show.bs.tab", {
                    relatedTarget: t
                }).defaultPrevented || null !== e && e.defaultPrevented || (this._activate(this._element, i),
                e = ()=>{
                    N.trigger(t, "hidden.bs.tab", {
                        relatedTarget: this._element
                    }),
                    N.trigger(this._element, "shown.bs.tab", {
                        relatedTarget: t
                    })
                }
                ,
                n ? this._activate(n, n.parentNode, e) : e())
            }
        }
        _activate(t, e, n) {
            const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V.children(e, li) : V.find(ui, e))[0]
              , r = n && i && i.classList.contains("fade")
              , o = ()=>this._transitionComplete(t, i, n);
            i && r ? (i.classList.remove("show"),
            this._queueCallback(o, t, !0)) : o()
        }
        _transitionComplete(t, e, n) {
            if (e) {
                e.classList.remove(ai);
                const t = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(ai),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(ai),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            f(t),
            t.classList.contains("fade") && t.classList.add("show");
            let i = t.parentNode;
            if (i && "LI" === i.nodeName && (i = i.parentNode),
            i && i.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && V.find(".dropdown-toggle", e).forEach(t=>t.classList.add(ai)),
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = ci.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    N.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        c(this) || ci.getOrCreateInstance(this).show()
    }),
    t(ci);
    const di = "show"
      , hi = "showing"
      , fi = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , pi = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class mi extends z {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return fi
        }
        static get Default() {
            return pi
        }
        static get NAME() {
            return "toast"
        }
        show() {
            N.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove("hide"),
            f(this._element),
            this._element.classList.add(di),
            this._element.classList.add(hi),
            this._queueCallback(()=>{
                this._element.classList.remove(hi),
                N.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(di) && (N.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(hi),
            this._queueCallback(()=>{
                this._element.classList.add("hide"),
                this._element.classList.remove(hi),
                this._element.classList.remove(di),
                N.trigger(this._element, "hidden.bs.toast")
            }
            , this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(di) && this._element.classList.remove(di),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...pi,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            n("toast", t, this.constructor.DefaultType),
            t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide()
            }
            , this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            e ? this._clearTimeout() : (t = t.relatedTarget,
            this._element === t || this._element.contains(t) || this._maybeScheduleHide())
        }
        _setListeners() {
            N.on(this._element, "mouseover.bs.toast", t=>this._onInteraction(t, !0)),
            N.on(this._element, "mouseout.bs.toast", t=>this._onInteraction(t, !1)),
            N.on(this._element, "focusin.bs.toast", t=>this._onInteraction(t, !0)),
            N.on(this._element, "focusout.bs.toast", t=>this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = mi.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    return $(mi),
    t(mi),
    {
        Alert: R,
        Button: B,
        Carousel: rt,
        Collapse: pt,
        Dropdown: nn,
        Modal: Tn,
        Offcanvas: Pn,
        Popover: Jn,
        ScrollSpy: si,
        Tab: ci,
        Toast: mi,
        Tooltip: Xn
    }
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Vue = e()
}(this, function() {
    "use strict";
    var f = Object.freeze({});
    function I(t) {
        return null == t
    }
    function M(t) {
        return null != t
    }
    function k(t) {
        return !0 === t
    }
    function u(t) {
        return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
    }
    function N(t) {
        return null !== t && "object" == typeof t
    }
    var n = Object.prototype.toString;
    function l(t) {
        return "[object Object]" === n.call(t)
    }
    function r(t) {
        var e = parseFloat(String(t));
        return 0 <= e && Math.floor(e) === e && isFinite(t)
    }
    function p(t) {
        return M(t) && "function" == typeof t.then && "function" == typeof t.catch
    }
    function e(t) {
        return null == t ? "" : Array.isArray(t) || l(t) && t.toString === n ? JSON.stringify(t, null, 2) : String(t)
    }
    function j(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e
    }
    function s(t, e) {
        for (var n = Object.create(null), i = t.split(","), r = 0; r < i.length; r++)
            n[i[r]] = !0;
        return e ? function(t) {
            return n[t.toLowerCase()]
        }
        : function(t) {
            return n[t]
        }
    }
    var c = s("slot,component", !0)
      , d = s("key,ref,slot,slot-scope,is");
    function m(t, e) {
        if (t.length) {
            e = t.indexOf(e);
            if (-1 < e)
                return t.splice(e, 1)
        }
    }
    var i = Object.prototype.hasOwnProperty;
    function h(t, e) {
        return i.call(t, e)
    }
    function t(e) {
        var n = Object.create(null);
        return function(t) {
            return n[t] || (n[t] = e(t))
        }
    }
    var o = /-(\w)/g
      , g = t(function(t) {
        return t.replace(o, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    })
      , a = t(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    })
      , v = /\B([A-Z])/g
      , y = t(function(t) {
        return t.replace(v, "-$1").toLowerCase()
    })
      , b = Function.prototype.bind ? function(t, e) {
        return t.bind(e)
    }
    : function(n, i) {
        function t(t) {
            var e = arguments.length;
            return e ? 1 < e ? n.apply(i, arguments) : n.call(i, t) : n.call(i)
        }
        return t._length = n.length,
        t
    }
    ;
    function _(t, e) {
        for (var n = t.length - (e = e || 0), i = new Array(n); n--; )
            i[n] = t[n + e];
        return i
    }
    function w(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function x(t) {
        for (var e = {}, n = 0; n < t.length; n++)
            t[n] && w(e, t[n]);
        return e
    }
    function C(t, e, n) {}
    var A = function(t, e, n) {
        return !1
    }
      , E = function(t) {
        return t
    };
    function T(e, n) {
        if (e === n)
            return !0;
        var t = N(e)
          , i = N(n);
        if (!t || !i)
            return !t && !i && String(e) === String(n);
        try {
            var r = Array.isArray(e)
              , o = Array.isArray(n);
            if (r && o)
                return e.length === n.length && e.every(function(t, e) {
                    return T(t, n[e])
                });
            if (e instanceof Date && n instanceof Date)
                return e.getTime() === n.getTime();
            if (r || o)
                return !1;
            var s = Object.keys(e)
              , a = Object.keys(n);
            return s.length === a.length && s.every(function(t) {
                return T(e[t], n[t])
            })
        } catch (e) {
            return !1
        }
    }
    function S(t, e) {
        for (var n = 0; n < t.length; n++)
            if (T(t[n], e))
                return n;
        return -1
    }
    function F(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            t.apply(this, arguments))
        }
    }
    var D = "data-server-rendered"
      , O = ["component", "directive", "filter"]
      , L = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"]
      , P = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: A,
        isReservedAttr: A,
        isUnknownElement: A,
        getTagNamespace: C,
        parsePlatformTagName: E,
        mustUseProp: A,
        async: !0,
        _lifecycleHooks: L
    }
      , z = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
    function $(t, e, n, i) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!i,
            writable: !0,
            configurable: !0
        })
    }
    var R, q = new RegExp("[^" + z.source + ".$_\\d]"), B = "__proto__"in {}, H = "undefined" != typeof window, W = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, U = W && WXEnvironment.platform.toLowerCase(), V = H && window.navigator.userAgent.toLowerCase(), Y = V && /msie|trident/.test(V), Z = V && 0 < V.indexOf("msie 9.0"), X = V && 0 < V.indexOf("edge/"), K = (V && V.indexOf("android"),
    V && /iphone|ipad|ipod|ios/.test(V) || "ios" === U), G = (V && /chrome\/\d+/.test(V),
    V && /phantomjs/.test(V),
    V && V.match(/firefox\/(\d+)/)), Q = {}.watch, J = !1;
    if (H)
        try {
            var tt = {};
            Object.defineProperty(tt, "passive", {
                get: function() {
                    J = !0
                }
            }),
            window.addEventListener("test-passive", null, tt)
        } catch (f) {}
    var et = function() {
        return R = void 0 === R ? !H && !W && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV : R
    }
      , nt = H && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function it(t) {
        return "function" == typeof t && /native code/.test(t.toString())
    }
    var rt = "undefined" != typeof Symbol && it(Symbol) && "undefined" != typeof Reflect && it(Reflect.ownKeys);
    function ot() {
        this.set = Object.create(null)
    }
    var st = "undefined" != typeof Set && it(Set) ? Set : (ot.prototype.has = function(t) {
        return !0 === this.set[t]
    }
    ,
    ot.prototype.add = function(t) {
        this.set[t] = !0
    }
    ,
    ot.prototype.clear = function() {
        this.set = Object.create(null)
    }
    ,
    ot)
      , at = C
      , lt = 0
      , ut = function() {
        this.id = lt++,
        this.subs = []
    };
    ut.prototype.addSub = function(t) {
        this.subs.push(t)
    }
    ,
    ut.prototype.removeSub = function(t) {
        m(this.subs, t)
    }
    ,
    ut.prototype.depend = function() {
        ut.target && ut.target.addDep(this)
    }
    ,
    ut.prototype.notify = function() {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)
            t[e].update()
    }
    ,
    ut.target = null;
    var ct = [];
    function dt(t) {
        ct.push(t),
        ut.target = t
    }
    function ht() {
        ct.pop(),
        ut.target = ct[ct.length - 1]
    }
    var ft = function(t, e, n, i, r, o, s, a) {
        this.tag = t,
        this.data = e,
        this.children = n,
        this.text = i,
        this.elm = r,
        this.ns = void 0,
        this.context = o,
        this.fnContext = void 0,
        this.fnOptions = void 0,
        this.fnScopeId = void 0,
        this.key = e && e.key,
        this.componentOptions = s,
        this.componentInstance = void 0,
        this.parent = void 0,
        this.raw = !1,
        this.isStatic = !1,
        this.isRootInsert = !0,
        this.isComment = !1,
        this.isCloned = !1,
        this.isOnce = !1,
        this.asyncFactory = a,
        this.asyncMeta = void 0,
        this.isAsyncPlaceholder = !1
    }
      , pt = {
        child: {
            configurable: !0
        }
    };
    pt.child.get = function() {
        return this.componentInstance
    }
    ,
    Object.defineProperties(ft.prototype, pt);
    var mt = function(t) {
        void 0 === t && (t = "");
        var e = new ft;
        return e.text = t,
        e.isComment = !0,
        e
    };
    function gt(t) {
        return new ft(void 0,void 0,void 0,String(t))
    }
    function vt(t) {
        var e = new ft(t.tag,t.data,t.children && t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);
        return e.ns = t.ns,
        e.isStatic = t.isStatic,
        e.key = t.key,
        e.isComment = t.isComment,
        e.fnContext = t.fnContext,
        e.fnOptions = t.fnOptions,
        e.fnScopeId = t.fnScopeId,
        e.asyncMeta = t.asyncMeta,
        e.isCloned = !0,
        e
    }
    var yt = Array.prototype
      , bt = Object.create(yt);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(o) {
        var s = yt[o];
        $(bt, o, function() {
            for (var t = [], e = arguments.length; e--; )
                t[e] = arguments[e];
            var n, i = s.apply(this, t), r = this.__ob__;
            switch (o) {
            case "push":
            case "unshift":
                n = t;
                break;
            case "splice":
                n = t.slice(2)
            }
            return n && r.observeArray(n),
            r.dep.notify(),
            i
        })
    });
    var _t = Object.getOwnPropertyNames(bt)
      , wt = !0;
    function xt(t) {
        wt = t
    }
    var Ct = function(t) {
        this.value = t,
        this.dep = new ut,
        this.vmCount = 0,
        $(t, "__ob__", this),
        Array.isArray(t) ? (B ? t.__proto__ = bt : function(t, e, n) {
            for (var i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                $(t, o, e[o])
            }
        }(t, bt, _t),
        this.observeArray(t)) : this.walk(t)
    };
    function At(t, e) {
        var n;
        if (N(t) && !(t instanceof ft))
            return h(t, "__ob__") && t.__ob__ instanceof Ct ? n = t.__ob__ : wt && !et() && (Array.isArray(t) || l(t)) && Object.isExtensible(t) && !t._isVue && (n = new Ct(t)),
            e && n && n.vmCount++,
            n
    }
    function Et(n, t, i, e, r) {
        var o, s, a, l = new ut, u = Object.getOwnPropertyDescriptor(n, t);
        u && !1 === u.configurable || (o = u && u.get,
        s = u && u.set,
        o && !s || 2 !== arguments.length || (i = n[t]),
        a = !r && At(i),
        Object.defineProperty(n, t, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                var t = o ? o.call(n) : i;
                return ut.target && (l.depend(),
                a && (a.dep.depend(),
                Array.isArray(t) && function t(e) {
                    for (var n = void 0, i = 0, r = e.length; i < r; i++)
                        (n = e[i]) && n.__ob__ && n.__ob__.dep.depend(),
                        Array.isArray(n) && t(n)
                }(t))),
                t
            },
            set: function(t) {
                var e = o ? o.call(n) : i;
                t === e || t != t && e != e || o && !s || (s ? s.call(n, t) : i = t,
                a = !r && At(t),
                l.notify())
            }
        }))
    }
    function Tt(t, e, n) {
        if (Array.isArray(t) && r(e))
            return t.length = Math.max(t.length, e),
            t.splice(e, 1, n),
            n;
        if (e in t && !(e in Object.prototype))
            return t[e] = n;
        var i = t.__ob__;
        return t._isVue || i && i.vmCount || (i ? (Et(i.value, e, n),
        i.dep.notify()) : t[e] = n),
        n
    }
    function kt(t, e) {
        var n;
        Array.isArray(t) && r(e) ? t.splice(e, 1) : (n = t.__ob__,
        t._isVue || n && n.vmCount || h(t, e) && (delete t[e],
        n && n.dep.notify()))
    }
    Ct.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++)
            Et(t, e[n])
    }
    ,
    Ct.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; e < n; e++)
            At(t[e])
    }
    ;
    var St = P.optionMergeStrategies;
    function Dt(t, e) {
        if (!e)
            return t;
        for (var n, i, r, o = rt ? Reflect.ownKeys(e) : Object.keys(e), s = 0; s < o.length; s++)
            "__ob__" !== (n = o[s]) && (i = t[n],
            r = e[n],
            h(t, n) ? i !== r && l(i) && l(r) && Dt(i, r) : Tt(t, n, r));
        return t
    }
    function Ot(n, i, r) {
        return r ? function() {
            var t = "function" == typeof i ? i.call(r, r) : i
              , e = "function" == typeof n ? n.call(r, r) : n;
            return t ? Dt(t, e) : e
        }
        : i ? n ? function() {
            return Dt("function" == typeof i ? i.call(this, this) : i, "function" == typeof n ? n.call(this, this) : n)
        }
        : i : n
    }
    function Lt(t, e) {
        t = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
        return t && function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t)
    }
    function Pt(t, e, n, i) {
        t = Object.create(t || null);
        return e ? w(t, e) : t
    }
    St.data = function(t, e, n) {
        return n ? Ot(t, e, n) : e && "function" != typeof e ? t : Ot(t, e)
    }
    ,
    L.forEach(function(t) {
        St[t] = Lt
    }),
    O.forEach(function(t) {
        St[t + "s"] = Pt
    }),
    St.watch = function(t, e, n, i) {
        if (t === Q && (t = void 0),
        !(e = e === Q ? void 0 : e))
            return Object.create(t || null);
        if (!t)
            return e;
        var r, o = {};
        for (r in w(o, t),
        e) {
            var s = o[r]
              , a = e[r];
            s && !Array.isArray(s) && (s = [s]),
            o[r] = s ? s.concat(a) : Array.isArray(a) ? a : [a]
        }
        return o
    }
    ,
    St.props = St.methods = St.inject = St.computed = function(t, e, n, i) {
        if (!t)
            return e;
        var r = Object.create(null);
        return w(r, t),
        e && w(r, e),
        r
    }
    ,
    St.provide = Ot;
    var It = function(t, e) {
        return void 0 === e ? t : e
    };
    function Mt(n, i, r) {
        if (function(t) {
            var e = t.props;
            if (e) {
                var n, i, r = {};
                if (Array.isArray(e))
                    for (n = e.length; n--; )
                        "string" == typeof (i = e[n]) && (r[g(i)] = {
                            type: null
                        });
                else if (l(e))
                    for (var o in e)
                        i = e[o],
                        r[g(o)] = l(i) ? i : {
                            type: i
                        };
                t.props = r
            }
        }(i = "function" == typeof i ? i.options : i),
        function(t) {
            var e = t.inject;
            if (e) {
                var n = t.inject = {};
                if (Array.isArray(e))
                    for (var i = 0; i < e.length; i++)
                        n[e[i]] = {
                            from: e[i]
                        };
                else if (l(e))
                    for (var r in e) {
                        var o = e[r];
                        n[r] = l(o) ? w({
                            from: r
                        }, o) : {
                            from: o
                        }
                    }
            }
        }(i),
        function() {
            var t = i.directives;
            if (t)
                for (var e in t) {
                    var n = t[e];
                    "function" == typeof n && (t[e] = {
                        bind: n,
                        update: n
                    })
                }
        }(),
        !i._base && (i.extends && (n = Mt(n, i.extends, r)),
        i.mixins))
            for (var t = 0, e = i.mixins.length; t < e; t++)
                n = Mt(n, i.mixins[t], r);
        var o, s = {};
        for (o in n)
            a(o);
        for (o in i)
            h(n, o) || a(o);
        function a(t) {
            var e = St[t] || It;
            s[t] = e(n[t], i[t], r, t)
        }
        return s
    }
    function Nt(t, e, n) {
        if ("string" == typeof n) {
            var i = t[e];
            if (h(i, n))
                return i[n];
            t = g(n);
            if (h(i, t))
                return i[t];
            e = a(t);
            return !h(i, e) && (i[n] || i[t]) || i[e]
        }
    }
    function jt(t, e, n, i) {
        var r = e[t]
          , o = !h(n, t)
          , e = n[t]
          , n = Rt(Boolean, r.type);
        return -1 < n && (o && !h(r, "default") ? e = !1 : "" !== e && e !== y(t) || ((o = Rt(String, r.type)) < 0 || n < o) && (e = !0)),
        void 0 === e && (e = function(t, e, n) {
            if (h(e, "default")) {
                var i = e.default;
                return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof i && "Function" !== zt(e.type) ? i.call(t) : i
            }
        }(i, r, t),
        t = wt,
        xt(!0),
        At(e),
        xt(t)),
        e
    }
    var Ft = /^\s*function (\w+)/;
    function zt(t) {
        t = t && t.toString().match(Ft);
        return t ? t[1] : ""
    }
    function $t(t, e) {
        return zt(t) === zt(e)
    }
    function Rt(t, e) {
        if (!Array.isArray(e))
            return $t(e, t) ? 0 : -1;
        for (var n = 0, i = e.length; n < i; n++)
            if ($t(e[n], t))
                return n;
        return -1
    }
    function qt(t, e, n) {
        dt();
        try {
            if (e)
                for (var i = e; i = i.$parent; ) {
                    var r = i.$options.errorCaptured;
                    if (r)
                        for (var o = 0; o < r.length; o++)
                            try {
                                if (!1 === r[o].call(i, t, e, n))
                                    return
                            } catch (t) {
                                Ht(t, i, "errorCaptured hook")
                            }
                }
            Ht(t, e, n)
        } finally {
            ht()
        }
    }
    function Bt(t, e, n, i, r) {
        var o;
        try {
            (o = n ? t.apply(e, n) : t.call(e)) && !o._isVue && p(o) && !o._handled && (o.catch(function(t) {
                return qt(t, i, r + " (Promise/async)")
            }),
            o._handled = !0)
        } catch (t) {
            qt(t, i, r)
        }
        return o
    }
    function Ht(t, e, n) {
        if (P.errorHandler)
            try {
                return P.errorHandler.call(null, t, e, n)
            } catch (e) {
                e !== t && Wt(e)
            }
        Wt(t)
    }
    function Wt(t) {
        if (!H && !W || "undefined" == typeof console)
            throw t;
        console.error(t)
    }
    var Ut, Vt, Yt, Zt, Xt = !1, Kt = [], Gt = !1;
    function Qt() {
        Gt = !1;
        for (var t = Kt.slice(0), e = Kt.length = 0; e < t.length; e++)
            t[e]()
    }
    function Jt(t, e) {
        var n;
        if (Kt.push(function() {
            if (t)
                try {
                    t.call(e)
                } catch (t) {
                    qt(t, e, "nextTick")
                }
            else
                n && n(e)
        }),
        Gt || (Gt = !0,
        Vt()),
        !t && "undefined" != typeof Promise)
            return new Promise(function(t) {
                n = t
            }
            )
    }
    "undefined" != typeof Promise && it(Promise) ? (Ut = Promise.resolve(),
    Vt = function() {
        Ut.then(Qt),
        K && setTimeout(C)
    }
    ,
    Xt = !0) : Y || "undefined" == typeof MutationObserver || !it(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString() ? Vt = "undefined" != typeof setImmediate && it(setImmediate) ? function() {
        setImmediate(Qt)
    }
    : function() {
        setTimeout(Qt, 0)
    }
    : (Yt = 1,
    Dn = new MutationObserver(Qt),
    Zt = document.createTextNode(String(Yt)),
    Dn.observe(Zt, {
        characterData: !0
    }),
    Vt = function() {
        Yt = (Yt + 1) % 2,
        Zt.data = String(Yt)
    }
    ,
    Xt = !0);
    var te = new st;
    function ee(t) {
        !function t(e, n) {
            var i, r, o = Array.isArray(e);
            if (!(!o && !N(e) || Object.isFrozen(e) || e instanceof ft)) {
                if (e.__ob__) {
                    var s = e.__ob__.dep.id;
                    if (n.has(s))
                        return;
                    n.add(s)
                }
                if (o)
                    for (i = e.length; i--; )
                        t(e[i], n);
                else
                    for (i = (r = Object.keys(e)).length; i--; )
                        t(e[r[i]], n)
            }
        }(t, te),
        te.clear()
    }
    var ne = t(function(t) {
        var e = "&" === t.charAt(0)
          , n = "~" === (t = e ? t.slice(1) : t).charAt(0)
          , i = "!" === (t = n ? t.slice(1) : t).charAt(0);
        return {
            name: t = i ? t.slice(1) : t,
            once: n,
            capture: i,
            passive: e
        }
    });
    function ie(t, r) {
        function o() {
            var t = arguments
              , e = o.fns;
            if (!Array.isArray(e))
                return Bt(e, null, arguments, r, "v-on handler");
            for (var n = e.slice(), i = 0; i < n.length; i++)
                Bt(n[i], null, t, r, "v-on handler")
        }
        return o.fns = t,
        o
    }
    function re(t, e, n, i, r, o) {
        var s, a, l, u;
        for (s in t)
            a = t[s],
            l = e[s],
            u = ne(s),
            I(a) || (I(l) ? (I(a.fns) && (a = t[s] = ie(a, o)),
            k(u.once) && (a = t[s] = r(u.name, a, u.capture)),
            n(u.name, a, u.capture, u.passive, u.params)) : a !== l && (l.fns = a,
            t[s] = l));
        for (s in e)
            I(t[s]) && i((u = ne(s)).name, e[s], u.capture)
    }
    function oe(t, e, n) {
        var i, r = (t = t instanceof ft ? t.data.hook || (t.data.hook = {}) : t)[e];
        function o() {
            n.apply(this, arguments),
            m(i.fns, o)
        }
        I(r) ? i = ie([o]) : M(r.fns) && k(r.merged) ? (i = r).fns.push(o) : i = ie([r, o]),
        i.merged = !0,
        t[e] = i
    }
    function se(t, e, n, i, r) {
        if (M(e)) {
            if (h(e, n))
                return t[n] = e[n],
                r || delete e[n],
                1;
            if (h(e, i))
                return t[n] = e[i],
                r || delete e[i],
                1
        }
    }
    function ae(t) {
        return u(t) ? [gt(t)] : Array.isArray(t) ? function t(e, n) {
            for (var i, r, o, s = [], a = 0; a < e.length; a++)
                I(i = e[a]) || "boolean" == typeof i || (o = s[r = s.length - 1],
                Array.isArray(i) ? 0 < i.length && (le((i = t(i, (n || "") + "_" + a))[0]) && le(o) && (s[r] = gt(o.text + i[0].text),
                i.shift()),
                s.push.apply(s, i)) : u(i) ? le(o) ? s[r] = gt(o.text + i) : "" !== i && s.push(gt(i)) : le(i) && le(o) ? s[r] = gt(o.text + i.text) : (k(e._isVList) && M(i.tag) && I(i.key) && M(n) && (i.key = "__vlist" + n + "_" + a + "__"),
                s.push(i)));
            return s
        }(t) : void 0
    }
    function le(t) {
        return M(t) && M(t.text) && !1 === t.isComment
    }
    function ue(t, e) {
        if (t) {
            for (var n = Object.create(null), i = rt ? Reflect.ownKeys(t) : Object.keys(t), r = 0; r < i.length; r++) {
                var o = i[r];
                if ("__ob__" !== o) {
                    for (var s, a = t[o].from, l = e; l; ) {
                        if (l._provided && h(l._provided, a)) {
                            n[o] = l._provided[a];
                            break
                        }
                        l = l.$parent
                    }
                    !l && "default"in t[o] && (s = t[o].default,
                    n[o] = "function" == typeof s ? s.call(e) : s)
                }
            }
            return n
        }
    }
    function ce(t, e) {
        if (!t || !t.length)
            return {};
        for (var n, i = {}, r = 0, o = t.length; r < o; r++) {
            var s = t[r]
              , a = s.data;
            a && a.attrs && a.attrs.slot && delete a.attrs.slot,
            s.context !== e && s.fnContext !== e || !a || null == a.slot ? (i.default || (i.default = [])).push(s) : (a = i[a = a.slot] || (i[a] = []),
            "template" === s.tag ? a.push.apply(a, s.children || []) : a.push(s))
        }
        for (n in i)
            i[n].every(de) && delete i[n];
        return i
    }
    function de(t) {
        return t.isComment && !t.asyncFactory || " " === t.text
    }
    function he(t) {
        return t.isComment && t.asyncFactory
    }
    function fe(t, e, n) {
        var i, r, o = 0 < Object.keys(e).length, s = t ? !!t.$stable : !o, a = t && t.$key;
        if (t) {
            if (t._normalized)
                return t._normalized;
            if (s && n && n !== f && a === n.$key && !o && !n.$hasNormal)
                return n;
            for (var l in i = {},
            t)
                t[l] && "$" !== l[0] && (i[l] = function(t, e, n) {
                    function i() {
                        var t = arguments.length ? n.apply(null, arguments) : n({})
                          , e = (t = t && "object" == typeof t && !Array.isArray(t) ? [t] : ae(t)) && t[0];
                        return t && (!e || 1 === t.length && e.isComment && !he(e)) ? void 0 : t
                    }
                    return n.proxy && Object.defineProperty(t, e, {
                        get: i,
                        enumerable: !0,
                        configurable: !0
                    }),
                    i
                }(e, l, t[l]))
        } else
            i = {};
        for (r in e)
            r in i || (i[r] = function(t, e) {
                return function() {
                    return t[e]
                }
            }(e, r));
        return t && Object.isExtensible(t) && (t._normalized = i),
        $(i, "$stable", s),
        $(i, "$key", a),
        $(i, "$hasNormal", o),
        i
    }
    function pe(t, e) {
        var n, i, r, o;
        if (Array.isArray(t) || "string" == typeof t)
            for (s = new Array(t.length),
            n = 0,
            i = t.length; n < i; n++)
                s[n] = e(t[n], n);
        else if ("number" == typeof t)
            for (s = new Array(t),
            n = 0; n < t; n++)
                s[n] = e(n + 1, n);
        else if (N(t))
            if (rt && t[Symbol.iterator])
                for (var s = [], a = t[Symbol.iterator](), l = a.next(); !l.done; )
                    s.push(e(l.value, s.length)),
                    l = a.next();
            else
                for (r = Object.keys(t),
                s = new Array(r.length),
                n = 0,
                i = r.length; n < i; n++)
                    o = r[n],
                    s[n] = e(t[o], o, n);
        return (s = !M(s) ? [] : s)._isVList = !0,
        s
    }
    function me(t, e, n, i) {
        var r = this.$scopedSlots[t]
          , e = r ? (n = n || {},
        r(n = i ? w(w({}, i), n) : n) || ("function" == typeof e ? e() : e)) : this.$slots[t] || ("function" == typeof e ? e() : e)
          , n = n && n.slot;
        return n ? this.$createElement("template", {
            slot: n
        }, e) : e
    }
    function ge(t) {
        return Nt(this.$options, "filters", t) || E
    }
    function ve(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
    }
    function ye(t, e, n, i, r) {
        n = P.keyCodes[e] || n;
        return r && i && !P.keyCodes[e] ? ve(r, i) : n ? ve(n, t) : i ? y(i) !== e : void 0 === t
    }
    function be(i, r, o, s, a) {
        if (o && N(o)) {
            var l, t;
            for (t in o = Array.isArray(o) ? x(o) : o)
                !function(e) {
                    l = "class" === e || "style" === e || d(e) ? i : (n = i.attrs && i.attrs.type,
                    s || P.mustUseProp(r, n, e) ? i.domProps || (i.domProps = {}) : i.attrs || (i.attrs = {}));
                    var t = g(e)
                      , n = y(e);
                    t in l || n in l || (l[e] = o[e],
                    a && ((i.on || (i.on = {}))["update:" + e] = function(t) {
                        o[e] = t
                    }
                    ))
                }(t)
        }
        return i
    }
    function _e(t, e) {
        var n = this._staticTrees || (this._staticTrees = [])
          , i = n[t];
        return i && !e || xe(i = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1),
        i
    }
    function we(t, e, n) {
        return xe(t, "__once__" + e + (n ? "_" + n : ""), !0),
        t
    }
    function xe(t, e, n) {
        if (Array.isArray(t))
            for (var i = 0; i < t.length; i++)
                t[i] && "string" != typeof t[i] && Ce(t[i], e + "_" + i, n);
        else
            Ce(t, e, n)
    }
    function Ce(t, e, n) {
        t.isStatic = !0,
        t.key = e,
        t.isOnce = n
    }
    function Ae(t, e) {
        if (e && l(e)) {
            var n, i = t.on = t.on ? w({}, t.on) : {};
            for (n in e) {
                var r = i[n]
                  , o = e[n];
                i[n] = r ? [].concat(r, o) : o
            }
        }
        return t
    }
    function Ee(t, e, n, i) {
        e = e || {
            $stable: !n
        };
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            Array.isArray(o) ? Ee(o, e, n) : o && (o.proxy && (o.fn.proxy = !0),
            e[o.key] = o.fn)
        }
        return i && (e.$key = i),
        e
    }
    function Te(t, e) {
        for (var n = 0; n < e.length; n += 2) {
            var i = e[n];
            "string" == typeof i && i && (t[e[n]] = e[n + 1])
        }
        return t
    }
    function ke(t, e) {
        return "string" == typeof t ? e + t : t
    }
    function Se(t) {
        t._o = we,
        t._n = j,
        t._s = e,
        t._l = pe,
        t._t = me,
        t._q = T,
        t._i = S,
        t._m = _e,
        t._f = ge,
        t._k = ye,
        t._b = be,
        t._v = gt,
        t._e = mt,
        t._u = Ee,
        t._g = Ae,
        t._d = Te,
        t._p = ke
    }
    function De(t, e, n, r, i) {
        var o, s = this, a = i.options;
        h(r, "_uid") ? (o = Object.create(r))._original = r : r = (o = r)._original;
        var i = k(a._compiled)
          , l = !i;
        this.data = t,
        this.props = e,
        this.children = n,
        this.parent = r,
        this.listeners = t.on || f,
        this.injections = ue(a.inject, r),
        this.slots = function() {
            return s.$slots || fe(t.scopedSlots, s.$slots = ce(n, r)),
            s.$slots
        }
        ,
        Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function() {
                return fe(t.scopedSlots, this.slots())
            }
        }),
        i && (this.$options = a,
        this.$slots = this.slots(),
        this.$scopedSlots = fe(t.scopedSlots, this.$slots)),
        a._scopeId ? this._c = function(t, e, n, i) {
            i = Fe(o, t, e, n, i, l);
            return i && !Array.isArray(i) && (i.fnScopeId = a._scopeId,
            i.fnContext = r),
            i
        }
        : this._c = function(t, e, n, i) {
            return Fe(o, t, e, n, i, l)
        }
    }
    function Oe(t, e, n, i) {
        t = vt(t);
        return t.fnContext = n,
        t.fnOptions = i,
        e.slot && ((t.data || (t.data = {})).slot = e.slot),
        t
    }
    function Le(t, e) {
        for (var n in e)
            t[g(n)] = e[n]
    }
    Se(De.prototype);
    var Pe = {
        init: function(t, e) {
            var n, i, r;
            t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive ? Pe.prepatch(t, t) : (t.componentInstance = (i = {
                _isComponent: !0,
                _parentVnode: n = t,
                parent: Ve
            },
            M(r = n.data.inlineTemplate) && (i.render = r.render,
            i.staticRenderFns = r.staticRenderFns),
            new n.componentOptions.Ctor(i))).$mount(e ? t.elm : void 0, e)
        },
        prepatch: function(t, e) {
            var n = e.componentOptions;
            !function(t, e, n, i, r) {
                var o = i.data.scopedSlots
                  , s = t.$scopedSlots
                  , s = !!(o && !o.$stable || s !== f && !s.$stable || o && t.$scopedSlots.$key !== o.$key || !o && t.$scopedSlots.$key)
                  , o = !!(r || t.$options._renderChildren || s);
                if (t.$options._parentVnode = i,
                t.$vnode = i,
                t._vnode && (t._vnode.parent = i),
                t.$options._renderChildren = r,
                t.$attrs = i.data.attrs || f,
                t.$listeners = n || f,
                e && t.$options.props) {
                    xt(!1);
                    for (var a = t._props, l = t.$options._propKeys || [], u = 0; u < l.length; u++) {
                        var c = l[u]
                          , d = t.$options.props;
                        a[c] = jt(c, d, e, t)
                    }
                    xt(!0),
                    t.$options.propsData = e
                }
                n = n || f;
                s = t.$options._parentListeners;
                t.$options._parentListeners = n,
                Ue(t, n, s),
                o && (t.$slots = ce(r, i.context),
                t.$forceUpdate())
            }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
        },
        insert: function(t) {
            var e = t.context
              , n = t.componentInstance;
            n._isMounted || (n._isMounted = !0,
            Ke(n, "mounted")),
            t.data.keepAlive && (e._isMounted ? (n._inactive = !1,
            Je.push(n)) : Xe(n, !0))
        },
        destroy: function(t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                if (!(n && (e._directInactive = !0,
                Ze(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var i = 0; i < e.$children.length; i++)
                        t(e.$children[i]);
                    Ke(e, "deactivated")
                }
            }(e, !0) : e.$destroy())
        }
    }
      , Ie = Object.keys(Pe);
    function Me(a, t, e, n, i) {
        if (!I(a)) {
            var r, o = e.$options._base;
            if ("function" == typeof (a = N(a) ? o.extend(a) : a)) {
                if (I(a.cid) && void 0 === (a = function(e, n) {
                    if (k(e.error) && M(e.errorComp))
                        return e.errorComp;
                    if (M(e.resolved))
                        return e.resolved;
                    var t = $e;
                    if (t && M(e.owners) && -1 === e.owners.indexOf(t) && e.owners.push(t),
                    k(e.loading) && M(e.loadingComp))
                        return e.loadingComp;
                    if (t && !M(e.owners)) {
                        var i = e.owners = [t]
                          , r = !0
                          , o = null
                          , s = null;
                        t.$on("hook:destroyed", function() {
                            return m(i, t)
                        });
                        var a = function(t) {
                            for (var e = 0, n = i.length; e < n; e++)
                                i[e].$forceUpdate();
                            t && (i.length = 0,
                            null !== o && (clearTimeout(o),
                            o = null),
                            null !== s && (clearTimeout(s),
                            s = null))
                        }
                          , l = F(function(t) {
                            e.resolved = Re(t, n),
                            r ? i.length = 0 : a(!0)
                        })
                          , u = F(function(t) {
                            M(e.errorComp) && (e.error = !0,
                            a(!0))
                        })
                          , c = e(l, u);
                        return N(c) && (p(c) ? I(e.resolved) && c.then(l, u) : p(c.component) && (c.component.then(l, u),
                        M(c.error) && (e.errorComp = Re(c.error, n)),
                        M(c.loading) && (e.loadingComp = Re(c.loading, n),
                        0 === c.delay ? e.loading = !0 : o = setTimeout(function() {
                            o = null,
                            I(e.resolved) && I(e.error) && (e.loading = !0,
                            a(!1))
                        }, c.delay || 200)),
                        M(c.timeout) && (s = setTimeout(function() {
                            s = null,
                            I(e.resolved) && u(null)
                        }, c.timeout)))),
                        r = !1,
                        e.loading ? e.loadingComp : e.resolved
                    }
                }(r = a, o)))
                    return l = r,
                    u = t,
                    c = e,
                    o = n,
                    d = i,
                    (h = mt()).asyncFactory = l,
                    h.asyncMeta = {
                        data: u,
                        context: c,
                        children: o,
                        tag: d
                    },
                    h;
                t = t || {},
                _n(a),
                M(t.model) && function(t, e) {
                    var n = t.model && t.model.prop || "value"
                      , i = t.model && t.model.event || "input";
                    (e.attrs || (e.attrs = {}))[n] = e.model.value;
                    t = e.on || (e.on = {}),
                    n = t[i],
                    e = e.model.callback;
                    M(n) ? (Array.isArray(n) ? -1 === n.indexOf(e) : n !== e) && (t[i] = [e].concat(n)) : t[i] = e
                }(a.options, t);
                d = function(t) {
                    var e = a.options.props;
                    if (!I(e)) {
                        var n = {}
                          , i = t.attrs
                          , r = t.props;
                        if (M(i) || M(r))
                            for (var o in e) {
                                var s = y(o);
                                se(n, r, o, s, !0) || se(n, i, o, s, !1)
                            }
                        return n
                    }
                }(t);
                if (k(a.options.functional))
                    return function(t, e, n, i, r) {
                        var o = t.options
                          , s = {}
                          , a = o.props;
                        if (M(a))
                            for (var l in a)
                                s[l] = jt(l, a, e || f);
                        else
                            M(n.attrs) && Le(s, n.attrs),
                            M(n.props) && Le(s, n.props);
                        var u = new De(n,s,r,i,t)
                          , t = o.render.call(null, u._c, u);
                        if (t instanceof ft)
                            return Oe(t, n, u.parent, o);
                        if (Array.isArray(t)) {
                            for (var c = ae(t) || [], d = new Array(c.length), h = 0; h < c.length; h++)
                                d[h] = Oe(c[h], n, u.parent, o);
                            return d
                        }
                    }(a, d, t, e, n);
                h = t.on;
                t.on = t.nativeOn,
                k(a.options.abstract) && (s = t.slot,
                t = {},
                s && (t.slot = s)),
                function(t) {
                    for (var e = t.hook || (t.hook = {}), n = 0; n < Ie.length; n++) {
                        var i = Ie[n]
                          , r = e[i]
                          , o = Pe[i];
                        r === o || r && r._merged || (e[i] = r ? function(n, i) {
                            function t(t, e) {
                                n(t, e),
                                i(t, e)
                            }
                            return t._merged = !0,
                            t
                        }(o, r) : o)
                    }
                }(t);
                var s = a.options.name || i;
                return new ft("vue-component-" + a.cid + (s ? "-" + s : ""),t,void 0,void 0,void 0,e,{
                    Ctor: a,
                    propsData: d,
                    listeners: h,
                    tag: i,
                    children: n
                },r)
            }
        }
        var l, u, c, d, h
    }
    var Ne = 1
      , je = 2;
    function Fe(t, e, n, i, r, o) {
        return (Array.isArray(n) || u(n)) && (r = i,
        i = n,
        n = void 0),
        k(o) && (r = je),
        t = t,
        e = e,
        i = i,
        r = r,
        (!M(n = n) || !M(n.__ob__)) && (e = M(n) && M(n.is) ? n.is : e) ? (Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
            default: i[0]
        },
        i.length = 0),
        r === je ? i = ae(i) : r === Ne && (i = function(t) {
            for (var e = 0; e < t.length; e++)
                if (Array.isArray(t[e]))
                    return Array.prototype.concat.apply([], t);
            return t
        }(i)),
        i = "string" == typeof e ? (a = t.$vnode && t.$vnode.ns || P.getTagNamespace(e),
        P.isReservedTag(e) ? new ft(P.parsePlatformTagName(e),n,i,void 0,void 0,t) : n && n.pre || !M(s = Nt(t.$options, "components", e)) ? new ft(e,n,i,void 0,void 0,t) : Me(s, n, t, i, e)) : Me(e, n, t, i),
        Array.isArray(i) ? i : M(i) ? (M(a) && function t(e, n, i) {
            if (e.ns = n,
            "foreignObject" === e.tag && (i = !(n = void 0)),
            M(e.children))
                for (var r = 0, o = e.children.length; r < o; r++) {
                    var s = e.children[r];
                    M(s.tag) && (I(s.ns) || k(i) && "svg" !== s.tag) && t(s, n, i)
                }
        }(i, a),
        M(n) && (N((n = n).style) && ee(n.style),
        N(n.class) && ee(n.class)),
        i) : mt()) : mt();
        var s, a
    }
    var ze, $e = null;
    function Re(t, e) {
        return N(t = t.__esModule || rt && "Module" === t[Symbol.toStringTag] ? t.default : t) ? e.extend(t) : t
    }
    function qe(t) {
        if (Array.isArray(t))
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (M(n) && (M(n.componentOptions) || he(n)))
                    return n
            }
    }
    function Be(t, e) {
        ze.$on(t, e)
    }
    function He(t, e) {
        ze.$off(t, e)
    }
    function We(e, n) {
        var i = ze;
        return function t() {
            null !== n.apply(null, arguments) && i.$off(e, t)
        }
    }
    function Ue(t, e, n) {
        re(e, n || {}, Be, He, We, ze = t),
        ze = void 0
    }
    var Ve = null;
    function Ye(t) {
        var e = Ve;
        return Ve = t,
        function() {
            Ve = e
        }
    }
    function Ze(t) {
        for (; t = t && t.$parent; )
            if (t._inactive)
                return 1
    }
    function Xe(t, e) {
        if (e) {
            if (t._directInactive = !1,
            Ze(t))
                return
        } else if (t._directInactive)
            return;
        if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++)
                Xe(t.$children[n]);
            Ke(t, "activated")
        }
    }
    function Ke(t, e) {
        dt();
        var n = t.$options[e]
          , i = e + " hook";
        if (n)
            for (var r = 0, o = n.length; r < o; r++)
                Bt(n[r], t, null, t, i);
        t._hasHookEvent && t.$emit("hook:" + e),
        ht()
    }
    var Ge, Qe = [], Je = [], tn = {}, en = !1, nn = !1, rn = 0, on = 0, sn = Date.now;
    function an() {
        var t, e;
        for (on = sn(),
        nn = !0,
        Qe.sort(function(t, e) {
            return t.id - e.id
        }),
        rn = 0; rn < Qe.length; rn++)
            (t = Qe[rn]).before && t.before(),
            e = t.id,
            tn[e] = null,
            t.run();
        var n = Je.slice()
          , i = Qe.slice();
        rn = Qe.length = Je.length = 0,
        en = nn = !(tn = {}),
        function(t) {
            for (var e = 0; e < t.length; e++)
                t[e]._inactive = !0,
                Xe(t[e], !0)
        }(n),
        function(t) {
            for (var e = t.length; e--; ) {
                var n = t[e]
                  , i = n.vm;
                i._watcher === n && i._isMounted && !i._isDestroyed && Ke(i, "updated")
            }
        }(i),
        nt && P.devtools && nt.emit("flush")
    }
    !H || Y || (Ge = window.performance) && "function" == typeof Ge.now && sn() > document.createEvent("Event").timeStamp && (sn = function() {
        return Ge.now()
    }
    );
    function ln(t, e, n, i, r) {
        this.vm = t,
        r && (t._watcher = this),
        t._watchers.push(this),
        i ? (this.deep = !!i.deep,
        this.user = !!i.user,
        this.lazy = !!i.lazy,
        this.sync = !!i.sync,
        this.before = i.before) : this.deep = this.user = this.lazy = this.sync = !1,
        this.cb = n,
        this.id = ++un,
        this.active = !0,
        this.dirty = this.lazy,
        this.deps = [],
        this.newDeps = [],
        this.depIds = new st,
        this.newDepIds = new st,
        this.expression = "",
        "function" == typeof e ? this.getter = e : (this.getter = function(t) {
            if (!q.test(t)) {
                var n = t.split(".");
                return function(t) {
                    for (var e = 0; e < n.length; e++) {
                        if (!t)
                            return;
                        t = t[n[e]]
                    }
                    return t
                }
            }
        }(e),
        this.getter || (this.getter = C)),
        this.value = this.lazy ? void 0 : this.get()
    }
    var un = 0;
    ln.prototype.get = function() {
        var t;
        dt(this);
        var e = this.vm;
        try {
            t = this.getter.call(e, e)
        } catch (t) {
            if (!this.user)
                throw t;
            qt(t, e, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && ee(t),
            ht(),
            this.cleanupDeps()
        }
        return t
    }
    ,
    ln.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e),
        this.newDeps.push(t),
        this.depIds.has(e) || t.addSub(this))
    }
    ,
    ln.prototype.cleanupDeps = function() {
        for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds,
        this.newDepIds = n,
        this.newDepIds.clear(),
        n = this.deps,
        this.deps = this.newDeps,
        this.newDeps = n,
        this.newDeps.length = 0
    }
    ,
    ln.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
            var e = t.id;
            if (null == tn[e]) {
                if (tn[e] = !0,
                nn) {
                    for (var n = Qe.length - 1; rn < n && Qe[n].id > t.id; )
                        n--;
                    Qe.splice(n + 1, 0, t)
                } else
                    Qe.push(t);
                en || (en = !0,
                Jt(an))
            }
        }(this)
    }
    ,
    ln.prototype.run = function() {
        var t, e, n;
        !this.active || ((t = this.get()) !== this.value || N(t) || this.deep) && (e = this.value,
        this.value = t,
        this.user ? (n = 'callback for watcher "' + this.expression + '"',
        Bt(this.cb, this.vm, [t, e], this.vm, n)) : this.cb.call(this.vm, t, e))
    }
    ,
    ln.prototype.evaluate = function() {
        this.value = this.get(),
        this.dirty = !1
    }
    ,
    ln.prototype.depend = function() {
        for (var t = this.deps.length; t--; )
            this.deps[t].depend()
    }
    ,
    ln.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || m(this.vm._watchers, this);
            for (var t = this.deps.length; t--; )
                this.deps[t].removeSub(this);
            this.active = !1
        }
    }
    ;
    var cn = {
        enumerable: !0,
        configurable: !0,
        get: C,
        set: C
    };
    function dn(t, e, n) {
        cn.get = function() {
            return this[e][n]
        }
        ,
        cn.set = function(t) {
            this[e][n] = t
        }
        ,
        Object.defineProperty(t, n, cn)
    }
    function hn(t) {
        t._watchers = [];
        var e = t.$options;
        e.props && function(n, i) {
            var r = n.$options.propsData || {}
              , o = n._props = {}
              , s = n.$options._propKeys = [];
            n.$parent && xt(!1);
            for (var t in i)
                !function(t) {
                    s.push(t);
                    var e = jt(t, i, r, n);
                    Et(o, t, e),
                    t in n || dn(n, "_props", t)
                }(t);
            xt(!0)
        }(t, e.props),
        e.methods && function(t, e) {
            for (var n in t.$options.props,
            e)
                t[n] = "function" != typeof e[n] ? C : b(e[n], t)
        }(t, e.methods),
        e.data ? function(t) {
            var e = t.$options.data;
            l(e = t._data = "function" == typeof e ? function(t, e) {
                dt();
                try {
                    return t.call(e, e)
                } catch (t) {
                    return qt(t, e, "data()"),
                    {}
                } finally {
                    ht()
                }
            }(e, t) : e || {}) || (e = {});
            for (var n, i = Object.keys(e), r = t.$options.props, o = (t.$options.methods,
            i.length); o--; ) {
                var s = i[o];
                r && h(r, s) || 36 !== (n = (s + "").charCodeAt(0)) && 95 !== n && dn(t, "_data", s)
            }
            At(e, !0)
        }(t) : At(t._data = {}, !0),
        e.computed && function(t, e) {
            var n, i = t._computedWatchers = Object.create(null), r = et();
            for (n in e) {
                var o = e[n]
                  , s = "function" == typeof o ? o : o.get;
                r || (i[n] = new ln(t,s || C,C,fn)),
                n in t || pn(t, n, o)
            }
        }(t, e.computed),
        e.watch && e.watch !== Q && function(t, e) {
            for (var n in e) {
                var i = e[n];
                if (Array.isArray(i))
                    for (var r = 0; r < i.length; r++)
                        vn(t, n, i[r]);
                else
                    vn(t, n, i)
            }
        }(t, e.watch)
    }
    var fn = {
        lazy: !0
    };
    function pn(t, e, n) {
        var i = !et();
        "function" == typeof n ? (cn.get = i ? mn(e) : gn(n),
        cn.set = C) : (cn.get = n.get ? i && !1 !== n.cache ? mn(e) : gn(n.get) : C,
        cn.set = n.set || C),
        Object.defineProperty(t, e, cn)
    }
    function mn(e) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t)
                return t.dirty && t.evaluate(),
                ut.target && t.depend(),
                t.value
        }
    }
    function gn(t) {
        return function() {
            return t.call(this, this)
        }
    }
    function vn(t, e, n, i) {
        return "string" == typeof (n = l(n) ? (i = n).handler : n) && (n = t[n]),
        t.$watch(e, n, i)
    }
    var yn, bn = 0;
    function _n(r) {
        var t, e, n = r.options;
        return !r.super || (t = _n(r.super)) !== r.superOptions && (r.superOptions = t,
        (e = function() {
            var t, e, n = r.options, i = r.sealedOptions;
            for (e in n)
                n[e] !== i[e] && (t = t || {},
                t[e] = n[e]);
            return t
        }()) && w(r.extendOptions, e),
        (n = r.options = Mt(t, r.extendOptions)).name && (n.components[n.name] = r)),
        n
    }
    function wn(t) {
        this._init(t)
    }
    function xn(t) {
        t.cid = 0;
        var s = 1;
        t.extend = function(t) {
            var e = this
              , n = e.cid
              , i = (t = t || {})._Ctor || (t._Ctor = {});
            if (i[n])
                return i[n];
            function r(t) {
                this._init(t)
            }
            var o = t.name || e.options.name;
            return ((r.prototype = Object.create(e.prototype)).constructor = r).cid = s++,
            r.options = Mt(e.options, t),
            r.super = e,
            r.options.props && function(t) {
                for (var e in t.options.props)
                    dn(t.prototype, "_props", e)
            }(r),
            r.options.computed && function(t) {
                var e, n = t.options.computed;
                for (e in n)
                    pn(t.prototype, e, n[e])
            }(r),
            r.extend = e.extend,
            r.mixin = e.mixin,
            r.use = e.use,
            O.forEach(function(t) {
                r[t] = e[t]
            }),
            o && (r.options.components[o] = r),
            r.superOptions = e.options,
            r.extendOptions = t,
            r.sealedOptions = w({}, r.options),
            i[n] = r
        }
    }
    function Cn(t) {
        return t && (t.Ctor.options.name || t.tag)
    }
    function An(t, e) {
        return Array.isArray(t) ? -1 < t.indexOf(e) : "string" == typeof t ? -1 < t.split(",").indexOf(e) : "[object RegExp]" === n.call(t) && t.test(e)
    }
    function En(t, e) {
        var n, i = t.cache, r = t.keys, o = t._vnode;
        for (n in i) {
            var s = i[n];
            !s || (s = s.name) && !e(s) && Tn(i, n, r, o)
        }
    }
    function Tn(t, e, n, i) {
        var r = t[e];
        !r || i && r.tag === i.tag || r.componentInstance.$destroy(),
        t[e] = null,
        m(n, e)
    }
    wn.prototype._init = function(t) {
        var e, n, i, r = this;
        r._uid = bn++,
        r._isVue = !0,
        t && t._isComponent ? function(t, e) {
            var n = t.$options = Object.create(t.constructor.options)
              , t = e._parentVnode;
            n.parent = e.parent;
            t = (n._parentVnode = t).componentOptions;
            n.propsData = t.propsData,
            n._parentListeners = t.listeners,
            n._renderChildren = t.children,
            n._componentTag = t.tag,
            e.render && (n.render = e.render,
            n.staticRenderFns = e.staticRenderFns)
        }(r, t) : r.$options = Mt(_n(r.constructor), t || {}, r),
        function(t) {
            var e = t.$options
              , n = e.parent;
            if (n && !e.abstract) {
                for (; n.$options.abstract && n.$parent; )
                    n = n.$parent;
                n.$children.push(t)
            }
            t.$parent = n,
            t.$root = n ? n.$root : t,
            t.$children = [],
            t.$refs = {},
            t._watcher = null,
            t._inactive = null,
            t._directInactive = !1,
            t._isMounted = !1,
            t._isDestroyed = !1,
            t._isBeingDestroyed = !1
        }((r._renderProxy = r)._self = r),
        function(t) {
            t._events = Object.create(null),
            t._hasHookEvent = !1;
            var e = t.$options._parentListeners;
            e && Ue(t, e)
        }(r),
        function(r) {
            r._vnode = null,
            r._staticTrees = null;
            var t = r.$options
              , e = r.$vnode = t._parentVnode
              , n = e && e.context;
            r.$slots = ce(t._renderChildren, n),
            r.$scopedSlots = f,
            r._c = function(t, e, n, i) {
                return Fe(r, t, e, n, i, !1)
            }
            ,
            r.$createElement = function(t, e, n, i) {
                return Fe(r, t, e, n, i, !0)
            }
            ;
            e = e && e.data;
            Et(r, "$attrs", e && e.attrs || f, null, !0),
            Et(r, "$listeners", t._parentListeners || f, null, !0)
        }(r),
        Ke(r, "beforeCreate"),
        (i = ue((n = r).$options.inject, n)) && (xt(!1),
        Object.keys(i).forEach(function(t) {
            Et(n, t, i[t])
        }),
        xt(!0)),
        hn(r),
        (t = (e = r).$options.provide) && (e._provided = "function" == typeof t ? t.call(e) : t),
        Ke(r, "created"),
        r.$options.el && r.$mount(r.$options.el)
    }
    ,
    ti = wn,
    Object.defineProperty(ti.prototype, "$data", {
        get: function() {
            return this._data
        }
    }),
    Object.defineProperty(ti.prototype, "$props", {
        get: function() {
            return this._props
        }
    }),
    ti.prototype.$set = Tt,
    ti.prototype.$delete = kt,
    ti.prototype.$watch = function(t, e, n) {
        if (l(e))
            return vn(this, t, e, n);
        (n = n || {}).user = !0;
        var i = new ln(this,t,e,n);
        return n.immediate && (n = 'callback for immediate watcher "' + i.expression + '"',
        dt(),
        Bt(e, this, [i.value], this, n),
        ht()),
        function() {
            i.teardown()
        }
    }
    ,
    yn = /^hook:/,
    (U = wn).prototype.$on = function(t, e) {
        if (Array.isArray(t))
            for (var n = 0, i = t.length; n < i; n++)
                this.$on(t[n], e);
        else
            (this._events[t] || (this._events[t] = [])).push(e),
            yn.test(t) && (this._hasHookEvent = !0);
        return this
    }
    ,
    U.prototype.$once = function(t, e) {
        var n = this;
        function i() {
            n.$off(t, i),
            e.apply(n, arguments)
        }
        return i.fn = e,
        n.$on(t, i),
        n
    }
    ,
    U.prototype.$off = function(t, e) {
        if (!arguments.length)
            return this._events = Object.create(null),
            this;
        if (Array.isArray(t)) {
            for (var n = 0, i = t.length; n < i; n++)
                this.$off(t[n], e);
            return this
        }
        var r, o = this._events[t];
        if (!o)
            return this;
        if (!e)
            return this._events[t] = null,
            this;
        for (var s = o.length; s--; )
            if ((r = o[s]) === e || r.fn === e) {
                o.splice(s, 1);
                break
            }
        return this
    }
    ,
    U.prototype.$emit = function(t) {
        if (e = this._events[t])
            for (var e = 1 < e.length ? _(e) : e, n = _(arguments, 1), i = 'event handler for "' + t + '"', r = 0, o = e.length; r < o; r++)
                Bt(e[r], this, n, this, i);
        return this
    }
    ,
    (V = wn).prototype._update = function(t, e) {
        var n = this
          , i = n.$el
          , r = n._vnode
          , o = Ye(n);
        n._vnode = t,
        n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1),
        o(),
        i && (i.__vue__ = null),
        n.$el && (n.$el.__vue__ = n),
        n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
    }
    ,
    V.prototype.$forceUpdate = function() {
        this._watcher && this._watcher.update()
    }
    ,
    V.prototype.$destroy = function() {
        var t = this;
        if (!t._isBeingDestroyed) {
            Ke(t, "beforeDestroy"),
            t._isBeingDestroyed = !0;
            var e = t.$parent;
            !e || e._isBeingDestroyed || t.$options.abstract || m(e.$children, t),
            t._watcher && t._watcher.teardown();
            for (var n = t._watchers.length; n--; )
                t._watchers[n].teardown();
            t._data.__ob__ && t._data.__ob__.vmCount--,
            t._isDestroyed = !0,
            t.__patch__(t._vnode, null),
            Ke(t, "destroyed"),
            t.$off(),
            t.$el && (t.$el.__vue__ = null),
            t.$vnode && (t.$vnode.parent = null)
        }
    }
    ,
    Se((pt = wn).prototype),
    pt.prototype.$nextTick = function(t) {
        return Jt(t, this)
    }
    ,
    pt.prototype._render = function() {
        var t, e = this, n = e.$options, i = n.render, r = n._parentVnode;
        r && (e.$scopedSlots = fe(r.data.scopedSlots, e.$slots, e.$scopedSlots)),
        e.$vnode = r;
        try {
            $e = e,
            t = i.call(e._renderProxy, e.$createElement)
        } catch (n) {
            qt(n, e, "render"),
            t = e._vnode
        } finally {
            $e = null
        }
        return (t = !((t = Array.isArray(t) && 1 === t.length ? t[0] : t)instanceof ft) ? mt() : t).parent = r,
        t
    }
    ;
    var kn, Sn, L = [String, RegExp, Array], Dn = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: L,
                exclude: L,
                max: [String, Number]
            },
            methods: {
                cacheVNode: function() {
                    var t, e, n = this.cache, i = this.keys, r = this.vnodeToCache, o = this.keyToCache;
                    r && (t = r.tag,
                    e = r.componentInstance,
                    r = r.componentOptions,
                    n[o] = {
                        name: Cn(r),
                        tag: t,
                        componentInstance: e
                    },
                    i.push(o),
                    this.max && i.length > parseInt(this.max) && Tn(n, i[0], i, this._vnode),
                    this.vnodeToCache = null)
                }
            },
            created: function() {
                this.cache = Object.create(null),
                this.keys = []
            },
            destroyed: function() {
                for (var t in this.cache)
                    Tn(this.cache, t, this.keys)
            },
            mounted: function() {
                var t = this;
                this.cacheVNode(),
                this.$watch("include", function(e) {
                    En(t, function(t) {
                        return An(e, t)
                    })
                }),
                this.$watch("exclude", function(e) {
                    En(t, function(t) {
                        return !An(e, t)
                    })
                })
            },
            updated: function() {
                this.cacheVNode()
            },
            render: function() {
                var t = this.$slots.default
                  , e = qe(t)
                  , n = e && e.componentOptions;
                if (n) {
                    var i = Cn(n)
                      , r = this.include
                      , o = this.exclude;
                    if (r && (!i || !An(r, i)) || o && i && An(o, i))
                        return e;
                    o = this.cache,
                    i = this.keys,
                    n = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    o[n] ? (e.componentInstance = o[n].componentInstance,
                    m(i, n),
                    i.push(n)) : (this.vnodeToCache = e,
                    this.keyToCache = n),
                    e.data.keepAlive = !0
                }
                return e || t && t[0]
            }
        }
    };
    kn = wn,
    ti = {
        get: function() {
            return P
        }
    },
    Object.defineProperty(kn, "config", ti),
    kn.util = {
        warn: at,
        extend: w,
        mergeOptions: Mt,
        defineReactive: Et
    },
    kn.set = Tt,
    kn.delete = kt,
    kn.nextTick = Jt,
    kn.observable = function(t) {
        return At(t),
        t
    }
    ,
    kn.options = Object.create(null),
    O.forEach(function(t) {
        kn.options[t + "s"] = Object.create(null)
    }),
    w((kn.options._base = kn).options.components, Dn),
    kn.use = function(t) {
        var e = this._installedPlugins || (this._installedPlugins = []);
        if (-1 < e.indexOf(t))
            return this;
        var n = _(arguments, 1);
        return n.unshift(this),
        "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n),
        e.push(t),
        this
    }
    ,
    kn.mixin = function(t) {
        return this.options = Mt(this.options, t),
        this
    }
    ,
    xn(kn),
    Sn = kn,
    O.forEach(function(n) {
        Sn[n] = function(t, e) {
            return e ? ("component" === n && l(e) && (e.name = e.name || t,
            e = this.options._base.extend(e)),
            this.options[n + "s"][t] = e = "directive" === n && "function" == typeof e ? {
                bind: e,
                update: e
            } : e) : this.options[n + "s"][t]
        }
    }),
    Object.defineProperty(wn.prototype, "$isServer", {
        get: et
    }),
    Object.defineProperty(wn.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext
        }
    }),
    Object.defineProperty(wn, "FunctionalRenderContext", {
        value: De
    }),
    wn.version = "2.6.14";
    var U = s("style,class")
      , On = s("input,textarea,option,select,progress")
      , V = function(t, e, n) {
        return "value" === n && On(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
    }
      , Ln = s("contenteditable,draggable,spellcheck")
      , Pn = s("events,caret,typing,plaintext-only")
      , In = function(t, e) {
        return zn(e) || "false" === e ? "false" : "contenteditable" === t && Pn(e) ? e : "true"
    }
      , Mn = s("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible")
      , Nn = "http://www.w3.org/1999/xlink"
      , jn = function(t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
    }
      , Fn = function(t) {
        return jn(t) ? t.slice(6, t.length) : ""
    }
      , zn = function(t) {
        return null == t || !1 === t
    };
    function $n(t, e) {
        return {
            staticClass: Rn(t.staticClass, e.staticClass),
            class: M(t.class) ? [t.class, e.class] : e.class
        }
    }
    function Rn(t, e) {
        return t ? e ? t + " " + e : t : e || ""
    }
    function qn(t) {
        return Array.isArray(t) ? function(t) {
            for (var e, n = "", i = 0, r = t.length; i < r; i++)
                M(e = qn(t[i])) && "" !== e && (n && (n += " "),
                n += e);
            return n
        }(t) : N(t) ? function(t) {
            var e, n = "";
            for (e in t)
                t[e] && (n && (n += " "),
                n += e);
            return n
        }(t) : "string" == typeof t ? t : ""
    }
    function Bn(t) {
        return Wn(t) || Un(t)
    }
    var Hn = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }
      , Wn = s("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot")
      , Un = s("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0);
    function Vn(t) {
        return Un(t) ? "svg" : "math" === t ? "math" : void 0
    }
    var Yn = Object.create(null)
      , Zn = s("text,number,password,search,email,tel,url");
    function Xn(t) {
        return "string" != typeof t ? t : document.querySelector(t) || document.createElement("div")
    }
    pt = Object.freeze({
        createElement: function(t, e) {
            var n = document.createElement(t);
            return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"),
            n
        },
        createElementNS: function(t, e) {
            return document.createElementNS(Hn[t], e)
        },
        createTextNode: function(t) {
            return document.createTextNode(t)
        },
        createComment: function(t) {
            return document.createComment(t)
        },
        insertBefore: function(t, e, n) {
            t.insertBefore(e, n)
        },
        removeChild: function(t, e) {
            t.removeChild(e)
        },
        appendChild: function(t, e) {
            t.appendChild(e)
        },
        parentNode: function(t) {
            return t.parentNode
        },
        nextSibling: function(t) {
            return t.nextSibling
        },
        tagName: function(t) {
            return t.tagName
        },
        setTextContent: function(t, e) {
            t.textContent = e
        },
        setStyleScope: function(t, e) {
            t.setAttribute(e, "")
        }
    }),
    L = {
        create: function(t, e) {
            Kn(e)
        },
        update: function(t, e) {
            t.data.ref !== e.data.ref && (Kn(t, !0),
            Kn(e))
        },
        destroy: function(t) {
            Kn(t, !0)
        }
    };
    function Kn(t, e) {
        var n, i, r = t.data.ref;
        M(r) && (i = t.context,
        n = t.componentInstance || t.elm,
        i = i.$refs,
        e ? Array.isArray(i[r]) ? m(i[r], n) : i[r] === n && (i[r] = void 0) : t.data.refInFor ? Array.isArray(i[r]) ? i[r].indexOf(n) < 0 && i[r].push(n) : i[r] = [n] : i[r] = n)
    }
    var Gn = new ft("",{},[])
      , Qn = ["create", "activate", "update", "remove", "destroy"];
    function Jn(n, i) {
        return n.key === i.key && n.asyncFactory === i.asyncFactory && (n.tag === i.tag && n.isComment === i.isComment && M(n.data) === M(i.data) && function() {
            if ("input" !== n.tag)
                return 1;
            var t = M(e = n.data) && M(e = e.attrs) && e.type
              , e = M(e = i.data) && M(e = e.attrs) && e.type;
            return t === e || Zn(t) && Zn(e)
        }() || k(n.isAsyncPlaceholder) && I(i.asyncFactory.error))
    }
    var ti = {
        create: ei,
        update: ei,
        destroy: function(t) {
            ei(t, Gn)
        }
    };
    function ei(t, e) {
        (t.data.directives || e.data.directives) && function(e, n) {
            var t, i, r, o, s = e === Gn, a = n === Gn, l = ii(e.data.directives, e.context), u = ii(n.data.directives, n.context), c = [], d = [];
            for (t in u)
                i = l[t],
                r = u[t],
                i ? (r.oldValue = i.value,
                r.oldArg = i.arg,
                ri(r, "update", n, e),
                r.def && r.def.componentUpdated && d.push(r)) : (ri(r, "bind", n, e),
                r.def && r.def.inserted && c.push(r));
            if (c.length && (o = function() {
                for (var t = 0; t < c.length; t++)
                    ri(c[t], "inserted", n, e)
            }
            ,
            s ? oe(n, "insert", o) : o()),
            d.length && oe(n, "postpatch", function() {
                for (var t = 0; t < d.length; t++)
                    ri(d[t], "componentUpdated", n, e)
            }),
            !s)
                for (t in l)
                    u[t] || ri(l[t], "unbind", e, e, a)
        }(t, e)
    }
    var ni = Object.create(null);
    function ii(t, e) {
        var n, i, r, o = Object.create(null);
        if (!t)
            return o;
        for (n = 0; n < t.length; n++)
            (i = t[n]).modifiers || (i.modifiers = ni),
            (o[(r = i).rawName || r.name + "." + Object.keys(r.modifiers || {}).join(".")] = i).def = Nt(e.$options, "directives", i.name);
        return o
    }
    function ri(t, e, n, i, r) {
        var o = t.def && t.def[e];
        if (o)
            try {
                o(n.elm, t, n, i, r)
            } catch (i) {
                qt(i, n.context, "directive " + t.name + " " + e + " hook")
            }
    }
    at = [L, ti];
    function oi(t, e) {
        var n = e.componentOptions;
        if (!(M(n) && !1 === n.Ctor.options.inheritAttrs || I(t.data.attrs) && I(e.data.attrs))) {
            var i, r, o = e.elm, s = t.data.attrs || {}, a = e.data.attrs || {};
            for (i in a = M(a.__ob__) ? e.data.attrs = w({}, a) : a)
                r = a[i],
                s[i] !== r && si(o, i, r, e.data.pre);
            for (i in (Y || X) && a.value !== s.value && si(o, "value", a.value),
            s)
                I(a[i]) && (jn(i) ? o.removeAttributeNS(Nn, Fn(i)) : Ln(i) || o.removeAttribute(i))
        }
    }
    function si(t, e, n, i) {
        i || -1 < t.tagName.indexOf("-") ? ai(t, e, n) : Mn(e) ? zn(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e,
        t.setAttribute(e, n)) : Ln(e) ? t.setAttribute(e, In(e, n)) : jn(e) ? zn(n) ? t.removeAttributeNS(Nn, Fn(e)) : t.setAttributeNS(Nn, e, n) : ai(t, e, n)
    }
    function ai(e, t, n) {
        var i;
        zn(n) ? e.removeAttribute(t) : (!Y || Z || "TEXTAREA" !== e.tagName || "placeholder" !== t || "" === n || e.__ieph || (i = function(t) {
            t.stopImmediatePropagation(),
            e.removeEventListener("input", i)
        }
        ,
        e.addEventListener("input", i),
        e.__ieph = !0),
        e.setAttribute(t, n))
    }
    Dn = {
        create: oi,
        update: oi
    };
    function li(t, e) {
        var n = e.elm
          , i = e.data
          , t = t.data;
        I(i.staticClass) && I(i.class) && (I(t) || I(t.staticClass) && I(t.class)) || (t = function(t) {
            for (var e, n = t.data, i = t, r = t; M(r.componentInstance); )
                (r = r.componentInstance._vnode) && r.data && (n = $n(r.data, n));
            for (; M(i = i.parent); )
                i && i.data && (n = $n(n, i.data));
            return e = n.staticClass,
            t = n.class,
            M(e) || M(t) ? Rn(e, qn(t)) : ""
        }(e),
        (t = M(e = n._transitionClasses) ? Rn(t, qn(e)) : t) !== n._prevClass && (n.setAttribute("class", t),
        n._prevClass = t))
    }
    var ui, ci, di, hi, fi, pi, L = {
        create: li,
        update: li
    }, mi = /[\w).+\-_$\]]/;
    function gi(t) {
        for (var e, n, i, r, o = !1, s = !1, a = !1, l = !1, u = 0, c = 0, d = 0, h = 0, f = 0; f < t.length; f++)
            if (n = e,
            e = t.charCodeAt(f),
            o)
                39 === e && 92 !== n && (o = !1);
            else if (s)
                34 === e && 92 !== n && (s = !1);
            else if (a)
                96 === e && 92 !== n && (a = !1);
            else if (l)
                47 === e && 92 !== n && (l = !1);
            else if (124 !== e || 124 === t.charCodeAt(f + 1) || 124 === t.charCodeAt(f - 1) || u || c || d) {
                switch (e) {
                case 34:
                    s = !0;
                    break;
                case 39:
                    o = !0;
                    break;
                case 96:
                    a = !0;
                    break;
                case 40:
                    d++;
                    break;
                case 41:
                    d--;
                    break;
                case 91:
                    c++;
                    break;
                case 93:
                    c--;
                    break;
                case 123:
                    u++;
                    break;
                case 125:
                    u--
                }
                if (47 === e) {
                    for (var p = f - 1, m = void 0; 0 <= p && " " === (m = t.charAt(p)); p--)
                        ;
                    m && mi.test(m) || (l = !0)
                }
            } else
                void 0 === i ? (h = f + 1,
                i = t.slice(0, f).trim()) : g();
        function g() {
            (r = r || []).push(t.slice(h, f).trim()),
            h = f + 1
        }
        if (void 0 === i ? i = t.slice(0, f).trim() : 0 !== h && g(),
        r)
            for (f = 0; f < r.length; f++)
                i = function(t, e) {
                    var n = e.indexOf("(");
                    if (n < 0)
                        return '_f("' + e + '")(' + t + ")";
                    var i = e.slice(0, n)
                      , n = e.slice(n + 1);
                    return '_f("' + i + '")(' + t + (")" !== n ? "," + n : n)
                }(i, r[f]);
        return i
    }
    function vi(t, e) {
        console.error("[Vue compiler]: " + t)
    }
    function yi(t, e) {
        return t ? t.map(function(t) {
            return t[e]
        }).filter(function(t) {
            return t
        }) : []
    }
    function bi(t, e, n, i, r) {
        (t.props || (t.props = [])).push(ki({
            name: e,
            value: n,
            dynamic: r
        }, i)),
        t.plain = !1
    }
    function _i(t, e, n, i, r) {
        (r ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = [])).push(ki({
            name: e,
            value: n,
            dynamic: r
        }, i)),
        t.plain = !1
    }
    function wi(t, e, n, i) {
        t.attrsMap[e] = n,
        t.attrsList.push(ki({
            name: e,
            value: n
        }, i))
    }
    function xi(t, e, n) {
        return n ? "_p(" + e + ',"' + t + '")' : t + e
    }
    function Ci(t, e, n, i, r, o, s, a) {
        (i = i || f).right ? a ? e = "(" + e + ")==='click'?'contextmenu':(" + e + ")" : "click" === e && (e = "contextmenu",
        delete i.right) : i.middle && (a ? e = "(" + e + ")==='click'?'mouseup':(" + e + ")" : "click" === e && (e = "mouseup")),
        i.capture && (delete i.capture,
        e = xi("!", e, a)),
        i.once && (delete i.once,
        e = xi("~", e, a)),
        i.passive && (delete i.passive,
        e = xi("&", e, a));
        var l = i.native ? (delete i.native,
        t.nativeEvents || (t.nativeEvents = {})) : t.events || (t.events = {})
          , s = ki({
            value: n.trim(),
            dynamic: a
        }, s);
        i !== f && (s.modifiers = i);
        i = l[e];
        Array.isArray(i) ? r ? i.unshift(s) : i.push(s) : l[e] = i ? r ? [s, i] : [i, s] : s,
        t.plain = !1
    }
    function Ai(t, e, n) {
        var i = Ei(t, ":" + e) || Ei(t, "v-bind:" + e);
        if (null != i)
            return gi(i);
        if (!1 !== n) {
            e = Ei(t, e);
            if (null != e)
                return JSON.stringify(e)
        }
    }
    function Ei(t, e, n) {
        var i;
        if (null != (i = t.attrsMap[e]))
            for (var r = t.attrsList, o = 0, s = r.length; o < s; o++)
                if (r[o].name === e) {
                    r.splice(o, 1);
                    break
                }
        return n && delete t.attrsMap[e],
        i
    }
    function Ti(t, e) {
        for (var n = t.attrsList, i = 0, r = n.length; i < r; i++) {
            var o = n[i];
            if (e.test(o.name))
                return n.splice(i, 1),
                o
        }
    }
    function ki(t, e) {
        return e && (null != e.start && (t.start = e.start),
        null != e.end && (t.end = e.end)),
        t
    }
    function Si(t, e, n) {
        var i = n || {}
          , r = i.number
          , n = "$$v";
        i.trim && (n = "(typeof $$v === 'string'? $$v.trim(): $$v)");
        n = Di(e, n = r ? "_n(" + n + ")" : n);
        t.model = {
            value: "(" + e + ")",
            expression: JSON.stringify(e),
            callback: "function ($$v) {" + n + "}"
        }
    }
    function Di(t, e) {
        var n = function(t) {
            if (t = t.trim(),
            ui = t.length,
            t.indexOf("[") < 0 || t.lastIndexOf("]") < ui - 1)
                return -1 < (hi = t.lastIndexOf(".")) ? {
                    exp: t.slice(0, hi),
                    key: '"' + t.slice(hi + 1) + '"'
                } : {
                    exp: t,
                    key: null
                };
            for (ci = t,
            hi = fi = pi = 0; !Li(); )
                Pi(di = Oi()) ? Ii(di) : 91 === di && function(t) {
                    var e = 1;
                    for (fi = hi; !Li(); )
                        if (Pi(t = Oi()))
                            Ii(t);
                        else if (91 === t && e++,
                        93 === t && e--,
                        0 === e) {
                            pi = hi;
                            break
                        }
                }(di);
            return {
                exp: t.slice(0, fi),
                key: t.slice(fi + 1, pi)
            }
        }(t);
        return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")"
    }
    function Oi() {
        return ci.charCodeAt(++hi)
    }
    function Li() {
        return ui <= hi
    }
    function Pi(t) {
        return 34 === t || 39 === t
    }
    function Ii(t) {
        for (var e = t; !Li() && (t = Oi()) !== e; )
            ;
    }
    var Mi, Ni = "__r";
    function ji(e, n, i) {
        var r = Mi;
        return function t() {
            null !== n.apply(null, arguments) && $i(e, t, i, r)
        }
    }
    var Fi = Xt && !(G && Number(G[1]) <= 53);
    function zi(t, e, n, i) {
        var r, o;
        Fi && (r = on,
        e = (o = e)._wrapper = function(t) {
            if (t.target === t.currentTarget || t.timeStamp >= r || t.timeStamp <= 0 || t.target.ownerDocument !== document)
                return o.apply(this, arguments)
        }
        ),
        Mi.addEventListener(t, e, J ? {
            capture: n,
            passive: i
        } : n)
    }
    function $i(t, e, n, i) {
        (i || Mi).removeEventListener(t, e._wrapper || e, n)
    }
    function Ri(t, e) {
        var n, i, r;
        I(t.data.on) && I(e.data.on) || (n = e.data.on || {},
        i = t.data.on || {},
        Mi = e.elm,
        M((r = n).__r) && (r[t = Y ? "change" : "input"] = [].concat(r.__r, r[t] || []),
        delete r.__r),
        M(r.__c) && (r.change = [].concat(r.__c, r.change || []),
        delete r.__c),
        re(n, i, zi, $i, ji, e.context),
        Mi = void 0)
    }
    var qi, ti = {
        create: Ri,
        update: Ri
    };
    function Bi(t, e) {
        if (!I(t.data.domProps) || !I(e.data.domProps)) {
            var n, i, r = e.elm, o = t.data.domProps || {}, s = e.data.domProps || {};
            for (n in M(s.__ob__) && (s = e.data.domProps = w({}, s)),
            o)
                n in s || (r[n] = "");
            for (n in s) {
                if (i = s[n],
                "textContent" === n || "innerHTML" === n) {
                    if (e.children && (e.children.length = 0),
                    i === o[n])
                        continue;
                    1 === r.childNodes.length && r.removeChild(r.childNodes[0])
                }
                if ("value" === n && "PROGRESS" !== r.tagName) {
                    var a = I(r._value = i) ? "" : String(i);
                    c = a,
                    (u = r).composing || "OPTION" !== u.tagName && !function(t, e) {
                        var n = !0;
                        try {
                            n = document.activeElement !== t
                        } catch (t) {}
                        return n && t.value !== e
                    }(u, c) && !function(t) {
                        var e = u.value
                          , n = u._vModifiers;
                        if (M(n)) {
                            if (n.number)
                                return j(e) !== j(t);
                            if (n.trim)
                                return e.trim() !== t.trim()
                        }
                        return e !== t
                    }(c) || (r.value = a)
                } else if ("innerHTML" === n && Un(r.tagName) && I(r.innerHTML)) {
                    (qi = qi || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";
                    for (var l = qi.firstChild; r.firstChild; )
                        r.removeChild(r.firstChild);
                    for (; l.firstChild; )
                        r.appendChild(l.firstChild)
                } else if (i !== o[n])
                    try {
                        r[n] = i
                    } catch (t) {}
            }
        }
        var u, c
    }
    var Xt = {
        create: Bi,
        update: Bi
    }
      , Hi = t(function(t) {
        var e = {}
          , n = /:(.+)/;
        return t.split(/;(?![^(]*\))/g).forEach(function(t) {
            !t || 1 < (t = t.split(n)).length && (e[t[0].trim()] = t[1].trim())
        }),
        e
    });
    function Wi(t) {
        var e = Ui(t.style);
        return t.staticStyle ? w(t.staticStyle, e) : e
    }
    function Ui(t) {
        return Array.isArray(t) ? x(t) : "string" == typeof t ? Hi(t) : t
    }
    function Vi(t, e, n) {
        if (Zi.test(e))
            t.style.setProperty(e, n);
        else if (Xi.test(n))
            t.style.setProperty(y(e), n.replace(Xi, ""), "important");
        else {
            var i = Gi(e);
            if (Array.isArray(n))
                for (var r = 0, o = n.length; r < o; r++)
                    t.style[i] = n[r];
            else
                t.style[i] = n
        }
    }
    var Yi, Zi = /^--/, Xi = /\s*!important$/, Ki = ["Webkit", "Moz", "ms"], Gi = t(function(t) {
        if (Yi = Yi || document.createElement("div").style,
        "filter" !== (t = g(t)) && t in Yi)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Ki.length; n++) {
            var i = Ki[n] + e;
            if (i in Yi)
                return i
        }
    });
    function Qi(t, e) {
        var n = e.data
          , t = t.data;
        if (!(I(n.staticStyle) && I(n.style) && I(t.staticStyle) && I(t.style))) {
            var i, r, o = e.elm, n = t.staticStyle, t = t.normalizedStyle || t.style || {}, s = n || t, t = Ui(e.data.style) || {};
            e.data.normalizedStyle = M(t.__ob__) ? w({}, t) : t;
            var a = function(t) {
                for (var e, n = {}, i = t; i.componentInstance; )
                    (i = i.componentInstance._vnode) && i.data && (e = Wi(i.data)) && w(n, e);
                (e = Wi(t.data)) && w(n, e);
                for (var r = t; r = r.parent; )
                    r.data && (e = Wi(r.data)) && w(n, e);
                return n
            }(e);
            for (r in s)
                I(a[r]) && Vi(o, r, "");
            for (r in a)
                (i = a[r]) !== s[r] && Vi(o, r, null == i ? "" : i)
        }
    }
    var G = {
        create: Qi,
        update: Qi
    }
      , Ji = /\s+/;
    function tr(e, t) {
        var n;
        (t = t && t.trim()) && (e.classList ? -1 < t.indexOf(" ") ? t.split(Ji).forEach(function(t) {
            return e.classList.add(t)
        }) : e.classList.add(t) : (n = " " + (e.getAttribute("class") || "") + " ").indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim()))
    }
    function er(e, t) {
        if (t = t && t.trim())
            if (e.classList)
                -1 < t.indexOf(" ") ? t.split(Ji).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t),
                e.classList.length || e.removeAttribute("class");
            else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; 0 <= n.indexOf(i); )
                    n = n.replace(i, " ");
                (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
            }
    }
    function nr(t) {
        if (t) {
            if ("object" != typeof t)
                return "string" == typeof t ? ir(t) : void 0;
            var e = {};
            return !1 !== t.css && w(e, ir(t.name || "v")),
            w(e, t),
            e
        }
    }
    var ir = t(function(t) {
        return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active"
        }
    })
      , rr = H && !Z
      , or = "transition"
      , sr = "animation"
      , ar = "transition"
      , lr = "transitionend"
      , ur = "animation"
      , cr = "animationend";
    rr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ar = "WebkitTransition",
    lr = "webkitTransitionEnd"),
    void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ur = "WebkitAnimation",
    cr = "webkitAnimationEnd"));
    var dr = H ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
        return t()
    }
    ;
    function hr(t) {
        dr(function() {
            dr(t)
        })
    }
    function fr(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e),
        tr(t, e))
    }
    function pr(t, e) {
        t._transitionClasses && m(t._transitionClasses, e),
        er(t, e)
    }
    function mr(e, t, n) {
        var i = vr(e, t)
          , r = i.type
          , t = i.timeout
          , o = i.propCount;
        if (!r)
            return n();
        function s(t) {
            t.target === e && ++l >= o && u()
        }
        var a = r === or ? lr : cr
          , l = 0
          , u = function() {
            e.removeEventListener(a, s),
            n()
        };
        setTimeout(function() {
            l < o && u()
        }, t + 1),
        e.addEventListener(a, s)
    }
    var gr = /\b(transform|all)(,|$)/;
    function vr(t, e) {
        var n, i = window.getComputedStyle(t), r = (i[ar + "Delay"] || "").split(", "), o = (i[ar + "Duration"] || "").split(", "), s = yr(r, o), a = (i[ur + "Delay"] || "").split(", "), l = (i[ur + "Duration"] || "").split(", "), t = yr(a, l), r = 0, a = 0;
        return e === or ? 0 < s && (n = or,
        r = s,
        a = o.length) : e === sr ? 0 < t && (n = sr,
        r = t,
        a = l.length) : a = (n = 0 < (r = Math.max(s, t)) ? t < s ? or : sr : null) ? (n === or ? o : l).length : 0,
        {
            type: n,
            timeout: r,
            propCount: a,
            hasTransform: n === or && gr.test(i[ar + "Property"])
        }
    }
    function yr(n, t) {
        for (; n.length < t.length; )
            n = n.concat(n);
        return Math.max.apply(null, t.map(function(t, e) {
            return br(t) + br(n[e])
        }))
    }
    function br(t) {
        return 1e3 * Number(t.slice(0, -1).replace(",", "."))
    }
    function _r(e, t) {
        var n = e.elm;
        M(n._leaveCb) && (n._leaveCb.cancelled = !0,
        n._leaveCb());
        var i = nr(e.data.transition);
        if (!I(i) && !M(n._enterCb) && 1 === n.nodeType) {
            for (var r = i.css, o = i.type, s = i.enterClass, a = i.enterToClass, l = i.enterActiveClass, u = i.appearClass, c = i.appearToClass, d = i.appearActiveClass, h = i.beforeEnter, f = i.enter, p = i.afterEnter, m = i.enterCancelled, g = i.beforeAppear, v = i.appear, y = i.afterAppear, b = i.appearCancelled, _ = i.duration, w = Ve, x = Ve.$vnode; x && x.parent; )
                w = x.context,
                x = x.parent;
            var C, A, E, T, k, S, D, O, L, P, i = !w._isMounted || !e.isRootInsert;
            i && !v && "" !== v || (C = i && u ? u : s,
            A = i && d ? d : l,
            E = i && c ? c : a,
            h = i && g || h,
            T = i && "function" == typeof v ? v : f,
            k = i && y || p,
            S = i && b || m,
            D = j(N(_) ? _.enter : _),
            O = !1 !== r && !Z,
            L = Cr(T),
            P = n._enterCb = F(function() {
                O && (pr(n, E),
                pr(n, A)),
                P.cancelled ? (O && pr(n, C),
                S && S(n)) : k && k(n),
                n._enterCb = null
            }),
            e.data.show || oe(e, "insert", function() {
                var t = n.parentNode
                  , t = t && t._pending && t._pending[e.key];
                t && t.tag === e.tag && t.elm._leaveCb && t.elm._leaveCb(),
                T && T(n, P)
            }),
            h && h(n),
            O && (fr(n, C),
            fr(n, A),
            hr(function() {
                pr(n, C),
                P.cancelled || (fr(n, E),
                L || (xr(D) ? setTimeout(P, D) : mr(n, o, P)))
            })),
            e.data.show && (t && t(),
            T && T(n, P)),
            O || L || P())
        }
    }
    function wr(t, e) {
        var n = t.elm;
        M(n._enterCb) && (n._enterCb.cancelled = !0,
        n._enterCb());
        var i, r, o, s, a, l, u, c, d, h, f, p, m, g, v = nr(t.data.transition);
        if (I(v) || 1 !== n.nodeType)
            return e();
        function y() {
            g.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t),
            l && l(n),
            f && (fr(n, o),
            fr(n, a),
            hr(function() {
                pr(n, o),
                g.cancelled || (fr(n, s),
                p || (xr(m) ? setTimeout(g, m) : mr(n, r, g)))
            })),
            u && u(n, g),
            f || p || g())
        }
        M(n._leaveCb) || (i = v.css,
        r = v.type,
        o = v.leaveClass,
        s = v.leaveToClass,
        a = v.leaveActiveClass,
        l = v.beforeLeave,
        u = v.leave,
        c = v.afterLeave,
        d = v.leaveCancelled,
        h = v.delayLeave,
        v = v.duration,
        f = !1 !== i && !Z,
        p = Cr(u),
        m = j(N(v) ? v.leave : v),
        g = n._leaveCb = F(function() {
            n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null),
            f && (pr(n, s),
            pr(n, a)),
            g.cancelled ? (f && pr(n, o),
            d && d(n)) : (e(),
            c && c(n)),
            n._leaveCb = null
        }),
        h ? h(y) : y())
    }
    function xr(t) {
        return "number" == typeof t && !isNaN(t)
    }
    function Cr(t) {
        if (I(t))
            return !1;
        var e = t.fns;
        return M(e) ? Cr(Array.isArray(e) ? e[0] : e) : 1 < (t._length || t.length)
    }
    function Ar(t, e) {
        !0 !== e.data.show && _r(e)
    }
    ti = function(t) {
        for (var e, p = {}, n = t.modules, v = t.nodeOps, i = 0; i < Qn.length; ++i)
            for (p[Qn[i]] = [],
            e = 0; e < n.length; ++e)
                M(n[e][Qn[i]]) && p[Qn[i]].push(n[e][Qn[i]]);
        function o(t) {
            var e = v.parentNode(t);
            M(e) && v.removeChild(e, t)
        }
        function y(t, e, n, i, r, o, s) {
            (t = M(t.elm) && M(o) ? o[s] = vt(t) : t).isRootInsert = !r,
            function(t, e, n, i) {
                var r = t.data;
                if (M(r)) {
                    var o = M(t.componentInstance) && r.keepAlive;
                    return (M(r = r.hook) && M(r = r.init) && r(t, !1),
                    M(t.componentInstance)) ? (f(t, e),
                    a(n, t.elm, i),
                    k(o) && function(t, e, n, i) {
                        for (var r, o = t; o.componentInstance; )
                            if (o = o.componentInstance._vnode,
                            M(r = o.data) && M(r = r.transition)) {
                                for (r = 0; r < p.activate.length; ++r)
                                    p.activate[r](Gn, o);
                                e.push(o);
                                break
                            }
                        a(n, t.elm, i)
                    }(t, e, n, i),
                    1) : void 0
                }
            }(t, e, n, i) || (o = t.data,
            s = t.children,
            M(r = t.tag) ? (t.elm = t.ns ? v.createElementNS(t.ns, r) : v.createElement(r, t),
            l(t),
            m(t, s, e),
            M(o) && g(t, e)) : k(t.isComment) ? t.elm = v.createComment(t.text) : t.elm = v.createTextNode(t.text),
            a(n, t.elm, i))
        }
        function f(t, e) {
            M(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert),
            t.data.pendingInsert = null),
            t.elm = t.componentInstance.$el,
            b(t) ? (g(t, e),
            l(t)) : (Kn(t),
            e.push(t))
        }
        function a(t, e, n) {
            M(t) && (M(n) ? v.parentNode(n) === t && v.insertBefore(t, e, n) : v.appendChild(t, e))
        }
        function m(t, e, n) {
            if (Array.isArray(e))
                for (var i = 0; i < e.length; ++i)
                    y(e[i], n, t.elm, null, !0, e, i);
            else
                u(t.text) && v.appendChild(t.elm, v.createTextNode(String(t.text)))
        }
        function b(t) {
            for (; t.componentInstance; )
                t = t.componentInstance._vnode;
            return M(t.tag)
        }
        function g(t, e) {
            for (var n = 0; n < p.create.length; ++n)
                p.create[n](Gn, t);
            M(i = t.data.hook) && (M(i.create) && i.create(Gn, t),
            M(i.insert) && e.push(t))
        }
        function l(t) {
            var e;
            if (M(e = t.fnScopeId))
                v.setStyleScope(t.elm, e);
            else
                for (var n = t; n; )
                    M(e = n.context) && M(e = e.$options._scopeId) && v.setStyleScope(t.elm, e),
                    n = n.parent;
            M(e = Ve) && e !== t.context && e !== t.fnContext && M(e = e.$options._scopeId) && v.setStyleScope(t.elm, e)
        }
        function _(t, e, n, i, r, o) {
            for (; i <= r; ++i)
                y(n[i], o, t, e, !1, n, i)
        }
        function w(t) {
            var e, n, i = t.data;
            if (M(i))
                for (M(e = i.hook) && M(e = e.destroy) && e(t),
                e = 0; e < p.destroy.length; ++e)
                    p.destroy[e](t);
            if (M(e = t.children))
                for (n = 0; n < t.children.length; ++n)
                    w(t.children[n])
        }
        function x(t, e, n) {
            for (; e <= n; ++e) {
                var i = t[e];
                M(i) && (M(i.tag) ? (function t(e, n) {
                    if (M(n) || M(e.data)) {
                        var i, r = p.remove.length + 1;
                        for (M(n) ? n.listeners += r : n = function(t, e) {
                            function n() {
                                0 == --n.listeners && o(t)
                            }
                            return n.listeners = e,
                            n
                        }(e.elm, r),
                        M(i = e.componentInstance) && M(i = i._vnode) && M(i.data) && t(i, n),
                        i = 0; i < p.remove.length; ++i)
                            p.remove[i](e, n);
                        M(i = e.data.hook) && M(i = i.remove) ? i(e, n) : n()
                    } else
                        o(e.elm)
                }(i),
                w(i)) : o(i.elm))
            }
        }
        function C(t, e, n, i, r, g) {
            if (t !== e) {
                var o = (e = M(e.elm) && M(i) ? i[r] = vt(e) : e).elm = t.elm;
                if (k(t.isAsyncPlaceholder))
                    M(e.asyncFactory.resolved) ? T(t.elm, e, n) : e.isAsyncPlaceholder = !0;
                else if (k(e.isStatic) && k(t.isStatic) && e.key === t.key && (k(e.isCloned) || k(e.isOnce)))
                    e.componentInstance = t.componentInstance;
                else {
                    var s, a = e.data;
                    M(a) && M(s = a.hook) && M(s = s.prepatch) && s(t, e);
                    i = t.children,
                    r = e.children;
                    if (M(a) && b(e)) {
                        for (s = 0; s < p.update.length; ++s)
                            p.update[s](t, e);
                        M(s = a.hook) && M(s = s.update) && s(t, e)
                    }
                    I(e.text) ? M(i) && M(r) ? i !== r && function(t, e, n, i) {
                        for (var r, o, s, a = 0, l = 0, u = e.length - 1, c = e[0], d = e[u], h = n.length - 1, f = n[0], p = n[h], m = !g; a <= u && l <= h; )
                            I(c) ? c = e[++a] : I(d) ? d = e[--u] : Jn(c, f) ? (C(c, f, i, n, l),
                            c = e[++a],
                            f = n[++l]) : Jn(d, p) ? (C(d, p, i, n, h),
                            d = e[--u],
                            p = n[--h]) : Jn(c, p) ? (C(c, p, i, n, h),
                            m && v.insertBefore(t, c.elm, v.nextSibling(d.elm)),
                            c = e[++a],
                            p = n[--h]) : f = (Jn(d, f) ? (C(d, f, i, n, l),
                            m && v.insertBefore(t, d.elm, c.elm),
                            d = e[--u]) : (I(r) && (r = function(t, e, n) {
                                for (var i, r = {}, o = e; o <= n; ++o)
                                    M(i = t[o].key) && (r[i] = o);
                                return r
                            }(e, a, u)),
                            !I(o = M(f.key) ? r[f.key] : function(t, e, n, i) {
                                for (var r = n; r < i; r++) {
                                    var o = e[r];
                                    if (M(o) && Jn(t, o))
                                        return r
                                }
                            }(f, e, a, u)) && Jn(s = e[o], f) ? (C(s, f, i, n, l),
                            e[o] = void 0,
                            m && v.insertBefore(t, s.elm, c.elm)) : y(f, i, t, c.elm, !1, n, l)),
                            n[++l]);
                        u < a ? _(t, I(n[h + 1]) ? null : n[h + 1].elm, n, l, h, i) : h < l && x(e, a, u)
                    }(o, i, r, n) : M(r) ? (M(t.text) && v.setTextContent(o, ""),
                    _(o, null, r, 0, r.length - 1, n)) : M(i) ? x(i, 0, i.length - 1) : M(t.text) && v.setTextContent(o, "") : t.text !== e.text && v.setTextContent(o, e.text),
                    M(a) && M(s = a.hook) && M(s = s.postpatch) && s(t, e)
                }
            }
        }
        function A(t, e, n) {
            if (k(n) && M(t.parent))
                t.parent.data.pendingInsert = e;
            else
                for (var i = 0; i < e.length; ++i)
                    e[i].data.hook.insert(e[i])
        }
        var E = s("attrs,class,staticClass,staticStyle,key");
        function T(t, e, n, i) {
            var r, o = e.tag, s = e.data, a = e.children;
            if (i = i || s && s.pre,
            e.elm = t,
            k(e.isComment) && M(e.asyncFactory))
                return e.isAsyncPlaceholder = !0;
            if (M(s) && (M(r = s.hook) && M(r = r.init) && r(e, !0),
            M(r = e.componentInstance)))
                return f(e, n),
                1;
            if (M(o)) {
                if (M(a))
                    if (t.hasChildNodes())
                        if (M(r = s) && M(r = r.domProps) && M(r = r.innerHTML)) {
                            if (r !== t.innerHTML)
                                return
                        } else {
                            for (var l = !0, u = t.firstChild, c = 0; c < a.length; c++) {
                                if (!u || !T(u, a[c], n, i)) {
                                    l = !1;
                                    break
                                }
                                u = u.nextSibling
                            }
                            if (!l || u)
                                return
                        }
                    else
                        m(e, a, n);
                if (M(s)) {
                    var d, h = !1;
                    for (d in s)
                        if (!E(d)) {
                            h = !0,
                            g(e, n);
                            break
                        }
                    !h && s.class && ee(s.class)
                }
            } else
                t.data !== e.text && (t.data = e.text);
            return 1
        }
        return function(t, e, n, i) {
            if (!I(e)) {
                var r = !1
                  , o = [];
                if (I(t))
                    r = !0,
                    y(e, o);
                else {
                    var s = M(t.nodeType);
                    if (!s && Jn(t, e))
                        C(t, e, o, null, null, i);
                    else {
                        if (s) {
                            if (1 === t.nodeType && t.hasAttribute(D) && (t.removeAttribute(D),
                            n = !0),
                            k(n) && T(t, e, o))
                                return A(e, o, !0),
                                t;
                            a = t,
                            t = new ft(v.tagName(a).toLowerCase(),{},[],void 0,a)
                        }
                        var n = t.elm
                          , a = v.parentNode(n);
                        if (y(e, o, n._leaveCb ? null : a, v.nextSibling(n)),
                        M(e.parent))
                            for (var l = e.parent, u = b(e); l; ) {
                                for (var c = 0; c < p.destroy.length; ++c)
                                    p.destroy[c](l);
                                if (l.elm = e.elm,
                                u) {
                                    for (var d = 0; d < p.create.length; ++d)
                                        p.create[d](Gn, l);
                                    var h = l.data.hook.insert;
                                    if (h.merged)
                                        for (var f = 1; f < h.fns.length; f++)
                                            h.fns[f]()
                                } else
                                    Kn(l);
                                l = l.parent
                            }
                        M(a) ? x([t], 0, 0) : M(t.tag) && w(t)
                    }
                }
                return A(e, o, r),
                e.elm
            }
            M(t) && w(t)
        }
    }({
        nodeOps: pt,
        modules: [Dn, L, ti, Xt, G, H ? {
            create: Ar,
            activate: Ar,
            remove: function(t, e) {
                !0 !== t.data.show ? wr(t, e) : e()
            }
        } : {}].concat(at)
    });
    Z && document.addEventListener("selectionchange", function() {
        var t = document.activeElement;
        t && t.vmodel && Pr(t, "input")
    });
    var Er = {
        inserted: function(t, e, n, i) {
            "select" === n.tag ? (i.elm && !i.elm._vOptions ? oe(n, "postpatch", function() {
                Er.componentUpdated(t, e, n)
            }) : Tr(t, e, n.context),
            t._vOptions = [].map.call(t.options, Dr)) : "textarea" !== n.tag && !Zn(t.type) || (t._vModifiers = e.modifiers,
            e.modifiers.lazy || (t.addEventListener("compositionstart", Or),
            t.addEventListener("compositionend", Lr),
            t.addEventListener("change", Lr),
            Z && (t.vmodel = !0)))
        },
        componentUpdated: function(t, e, n) {
            var i, r;
            "select" === n.tag && (Tr(t, e, n.context),
            i = t._vOptions,
            (r = t._vOptions = [].map.call(t.options, Dr)).some(function(t, e) {
                return !T(t, i[e])
            }) && (t.multiple ? e.value.some(function(t) {
                return Sr(t, r)
            }) : e.value !== e.oldValue && Sr(e.value, r)) && Pr(t, "change"))
        }
    };
    function Tr(t, e, n) {
        kr(t, e),
        (Y || X) && setTimeout(function() {
            kr(t, e)
        }, 0)
    }
    function kr(t, e) {
        var n = e.value
          , i = t.multiple;
        if (!i || Array.isArray(n)) {
            for (var r, o, s = 0, a = t.options.length; s < a; s++)
                if (o = t.options[s],
                i)
                    r = -1 < S(n, Dr(o)),
                    o.selected !== r && (o.selected = r);
                else if (T(Dr(o), n))
                    return t.selectedIndex !== s && (t.selectedIndex = s),
                    0;
            i || (t.selectedIndex = -1)
        }
    }
    function Sr(e, t) {
        return t.every(function(t) {
            return !T(t, e)
        })
    }
    function Dr(t) {
        return "_value"in t ? t._value : t.value
    }
    function Or(t) {
        t.target.composing = !0
    }
    function Lr(t) {
        t.target.composing && (t.target.composing = !1,
        Pr(t.target, "input"))
    }
    function Pr(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0),
        t.dispatchEvent(n)
    }
    function Ir(t) {
        return !t.componentInstance || t.data && t.data.transition ? t : Ir(t.componentInstance._vnode)
    }
    Xt = {
        model: Er,
        show: {
            bind: function(t, e, n) {
                var i = e.value
                  , e = (n = Ir(n)).data && n.data.transition
                  , r = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                i && e ? (n.data.show = !0,
                _r(n, function() {
                    t.style.display = r
                })) : t.style.display = i ? r : "none"
            },
            update: function(t, e, n) {
                var i = e.value;
                !i != !e.oldValue && ((n = Ir(n)).data && n.data.transition ? (n.data.show = !0,
                i ? _r(n, function() {
                    t.style.display = t.__vOriginalDisplay
                }) : wr(n, function() {
                    t.style.display = "none"
                })) : t.style.display = i ? t.__vOriginalDisplay : "none")
            },
            unbind: function(t, e, n, i, r) {
                r || (t.style.display = t.__vOriginalDisplay)
            }
        }
    },
    G = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    };
    function Mr(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? Mr(qe(e.children)) : t
    }
    function Nr(t) {
        var e, n = {}, i = t.$options;
        for (e in i.propsData)
            n[e] = t[e];
        var r, o = i._parentListeners;
        for (r in o)
            n[g(r)] = o[r];
        return n
    }
    function jr(t, e) {
        if (/\d-keep-alive$/.test(e.tag))
            return t("keep-alive", {
                props: e.componentOptions.propsData
            })
    }
    function Fr(t) {
        return t.tag || he(t)
    }
    function zr(t) {
        return "show" === t.name
    }
    at = {
        name: "transition",
        props: G,
        abstract: !0,
        render: function(t) {
            var e = this
              , n = this.$slots.default;
            if (n && (n = n.filter(Fr)).length) {
                var i = this.mode
                  , r = n[0];
                if (function(t) {
                    for (; t = t.parent; )
                        if (t.data.transition)
                            return 1
                }(this.$vnode))
                    return r;
                var o = Mr(r);
                if (!o)
                    return r;
                if (this._leaving)
                    return jr(t, r);
                var s = "__transition-" + this._uid + "-";
                o.key = null == o.key ? o.isComment ? s + "comment" : s + o.tag : !u(o.key) || 0 === String(o.key).indexOf(s) ? o.key : s + o.key;
                var a = (o.data || (o.data = {})).transition = Nr(this)
                  , n = this._vnode
                  , s = Mr(n);
                if (o.data.directives && o.data.directives.some(zr) && (o.data.show = !0),
                s && s.data && (s.key !== o.key || s.tag !== o.tag) && !he(s) && (!s.componentInstance || !s.componentInstance._vnode.isComment)) {
                    s = s.data.transition = w({}, a);
                    if ("out-in" === i)
                        return this._leaving = !0,
                        oe(s, "afterLeave", function() {
                            e._leaving = !1,
                            e.$forceUpdate()
                        }),
                        jr(t, r);
                    if ("in-out" === i) {
                        if (he(o))
                            return n;
                        var l, n = function() {
                            l()
                        };
                        oe(a, "afterEnter", n),
                        oe(a, "enterCancelled", n),
                        oe(s, "delayLeave", function(t) {
                            l = t
                        })
                    }
                }
                return r
            }
        }
    },
    G = w({
        tag: String,
        moveClass: String
    }, G);
    function $r(t) {
        t.elm._moveCb && t.elm._moveCb(),
        t.elm._enterCb && t.elm._enterCb()
    }
    function Rr(t) {
        t.data.newPos = t.elm.getBoundingClientRect()
    }
    function qr(t) {
        var e = t.data.pos
          , n = t.data.newPos
          , i = e.left - n.left
          , n = e.top - n.top;
        (i || n) && (t.data.moved = !0,
        (t = t.elm.style).transform = t.WebkitTransform = "translate(" + i + "px," + n + "px)",
        t.transitionDuration = "0s")
    }
    delete G.mode;
    G = {
        Transition: at,
        TransitionGroup: {
            props: G,
            beforeMount: function() {
                var i = this
                  , r = this._update;
                this._update = function(t, e) {
                    var n = Ye(i);
                    i.__patch__(i._vnode, i.kept, !1, !0),
                    i._vnode = i.kept,
                    n(),
                    r.call(i, t, e)
                }
            },
            render: function(t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, r = this.$slots.default || [], o = this.children = [], s = Nr(this), a = 0; a < r.length; a++) {
                    var l = r[a];
                    l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (o.push(l),
                    ((n[l.key] = l).data || (l.data = {})).transition = s)
                }
                if (i) {
                    for (var u = [], c = [], d = 0; d < i.length; d++) {
                        var h = i[d];
                        h.data.transition = s,
                        h.data.pos = h.elm.getBoundingClientRect(),
                        (n[h.key] ? u : c).push(h)
                    }
                    this.kept = t(e, null, u),
                    this.removed = c
                }
                return t(e, null, o)
            },
            updated: function() {
                var t = this.prevChildren
                  , i = this.moveClass || (this.name || "v") + "-move";
                t.length && this.hasMove(t[0].elm, i) && (t.forEach($r),
                t.forEach(Rr),
                t.forEach(qr),
                this._reflow = document.body.offsetHeight,
                t.forEach(function(t) {
                    var n;
                    t.data.moved && (t = (n = t.elm).style,
                    fr(n, i),
                    t.transform = t.WebkitTransform = t.transitionDuration = "",
                    n.addEventListener(lr, n._moveCb = function t(e) {
                        e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener(lr, t),
                        n._moveCb = null,
                        pr(n, i))
                    }
                    ))
                }))
            },
            methods: {
                hasMove: function(t, e) {
                    if (!rr)
                        return !1;
                    if (this._hasMove)
                        return this._hasMove;
                    var n = t.cloneNode();
                    t._transitionClasses && t._transitionClasses.forEach(function(t) {
                        er(n, t)
                    }),
                    tr(n, e),
                    n.style.display = "none",
                    this.$el.appendChild(n);
                    e = vr(n);
                    return this.$el.removeChild(n),
                    this._hasMove = e.hasTransform
                }
            }
        }
    };
    wn.config.mustUseProp = V,
    wn.config.isReservedTag = Bn,
    wn.config.isReservedAttr = U,
    wn.config.getTagNamespace = Vn,
    wn.config.isUnknownElement = function(t) {
        if (!H)
            return !0;
        if (Bn(t))
            return !1;
        if (t = t.toLowerCase(),
        null != Yn[t])
            return Yn[t];
        var e = document.createElement(t);
        return -1 < t.indexOf("-") ? Yn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Yn[t] = /HTMLUnknownElement/.test(e.toString())
    }
    ,
    w(wn.options.directives, Xt),
    w(wn.options.components, G),
    wn.prototype.__patch__ = H ? ti : C,
    wn.prototype.$mount = function(t, e) {
        return n = this,
        t = t = t && H ? Xn(t) : void 0,
        i = e,
        n.$el = t,
        n.$options.render || (n.$options.render = mt),
        Ke(n, "beforeMount"),
        t = function() {
            n._update(n._render(), i)
        }
        ,
        new ln(n,t,C,{
            before: function() {
                n._isMounted && !n._isDestroyed && Ke(n, "beforeUpdate")
            }
        },!0),
        i = !1,
        null == n.$vnode && (n._isMounted = !0,
        Ke(n, "mounted")),
        n;
        var n, i
    }
    ,
    H && setTimeout(function() {
        P.devtools && nt && nt.emit("init", wn)
    }, 0);
    var Br, Hr = /\{\{((?:.|\r?\n)+?)\}\}/g, Wr = /[-.*+?^${}()|[\]\/\\]/g, Ur = t(function(t) {
        var e = t[0].replace(Wr, "\\$&")
          , t = t[1].replace(Wr, "\\$&");
        return new RegExp(e + "((?:.|\\n)+?)" + t,"g")
    }), U = {
        staticKeys: ["staticClass"],
        transformNode: function(t, e) {
            e.warn;
            e = Ei(t, "class");
            e && (t.staticClass = JSON.stringify(e));
            e = Ai(t, "class", !1);
            e && (t.classBinding = e)
        },
        genData: function(t) {
            var e = "";
            return t.staticClass && (e += "staticClass:" + t.staticClass + ","),
            t.classBinding && (e += "class:" + t.classBinding + ","),
            e
        }
    }, Xt = {
        staticKeys: ["staticStyle"],
        transformNode: function(t, e) {
            e.warn;
            e = Ei(t, "style");
            e && (t.staticStyle = JSON.stringify(Hi(e)));
            e = Ai(t, "style", !1);
            e && (t.styleBinding = e)
        },
        genData: function(t) {
            var e = "";
            return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","),
            t.styleBinding && (e += "style:(" + t.styleBinding + "),"),
            e
        }
    }, G = s("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), ti = s("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), Vr = s("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), Yr = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, Zr = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, z = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + z.source + "]*", z = "((?:" + z + "\\:)?" + z + ")", Xr = new RegExp("^<" + z), Kr = /^\s*(\/?)>/, Gr = new RegExp("^<\\/" + z + "[^>]*>"), Qr = /^<!DOCTYPE [^>]+>/i, Jr = /^<!\--/, to = /^<!\[/, eo = s("script,style,textarea", !0), no = {}, io = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t",
        "&#39;": "'"
    }, ro = /&(?:lt|gt|quot|amp|#39);/g, oo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, so = s("pre,textarea", !0), ao = function(t, e) {
        return t && so(t) && "\n" === e[0]
    };
    var lo, uo, co, ho, fo, po, mo, go, vo = /^@|^v-on:/, yo = /^v-|^@|^:|^#/, bo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, _o = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, wo = /^\(|\)$/g, xo = /^\[.*\]$/, Co = /:(.*)$/, Ao = /^:|^\.|^v-bind:/, Eo = /\.[^.\]]+(?=[^\]]*$)/g, To = /^v-slot(:|$)|^#/, ko = /[\r\n]/, So = /[ \f\t\r\n]+/g, Do = t(function(t) {
        return (Br = Br || document.createElement("div")).innerHTML = t,
        Br.textContent
    }), Oo = "_empty_";
    function Lo(t, e, n) {
        return {
            type: 1,
            tag: t,
            attrsList: e,
            attrsMap: function(t) {
                for (var e = {}, n = 0, i = t.length; n < i; n++)
                    e[t[n].name] = t[n].value;
                return e
            }(e),
            rawAttrsMap: {},
            parent: n,
            children: []
        }
    }
    function Po(t, u) {
        lo = u.warn || vi,
        po = u.isPreTag || A,
        mo = u.mustUseProp || A,
        go = u.getTagNamespace || A,
        u.isReservedTag,
        co = yi(u.modules, "transformNode"),
        ho = yi(u.modules, "preTransformNode"),
        fo = yi(u.modules, "postTransformNode"),
        uo = u.delimiters;
        var c, d, h = [], s = !1 !== u.preserveWhitespace, a = u.whitespace, f = !1, p = !1;
        function m(t) {
            var e, n;
            r(t),
            f || t.processed || (t = Io(t, u)),
            h.length || t === c || c.if && (t.elseif || t.else) && No(c, {
                exp: t.elseif,
                block: t
            }),
            d && !t.forbidden && (t.elseif || t.else ? (e = t,
            (n = function(t) {
                for (var e = t.length; e--; ) {
                    if (1 === t[e].type)
                        return t[e];
                    t.pop()
                }
            }(d.children)) && n.if && No(n, {
                exp: e.elseif,
                block: e
            })) : (t.slotScope && (e = t.slotTarget || '"default"',
            (d.scopedSlots || (d.scopedSlots = {}))[e] = t),
            d.children.push(t),
            t.parent = d)),
            t.children = t.children.filter(function(t) {
                return !t.slotScope
            }),
            r(t),
            t.pre && (f = !1),
            po(t.tag) && (p = !1);
            for (var i = 0; i < fo.length; i++)
                fo[i](t, u)
        }
        function r(t) {
            if (!p)
                for (var e; (e = t.children[t.children.length - 1]) && 3 === e.type && " " === e.text; )
                    t.children.pop()
        }
        return function(r, u) {
            for (var t, c, d = [], h = u.expectHTML, f = u.isUnaryTag || A, p = u.canBeLeftOpenTag || A, s = 0; r; ) {
                if (t = r,
                c && eo(c)) {
                    var i = 0
                      , o = c.toLowerCase()
                      , e = no[o] || (no[o] = new RegExp("([\\s\\S]*?)(</" + o + "[^>]*>)","i"))
                      , e = r.replace(e, function(t, e, n) {
                        return i = n.length,
                        eo(o) || "noscript" === o || (e = e.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                        ao(o, e) && (e = e.slice(1)),
                        u.chars && u.chars(e),
                        ""
                    });
                    s += r.length - e.length,
                    r = e,
                    y(o, s - i, s)
                } else {
                    var n = r.indexOf("<");
                    if (0 === n) {
                        if (Jr.test(r)) {
                            e = r.indexOf("--\x3e");
                            if (0 <= e) {
                                u.shouldKeepComment && u.comment(r.substring(4, e), s, s + e + 3),
                                v(e + 3);
                                continue
                            }
                        }
                        if (to.test(r)) {
                            var a = r.indexOf("]>");
                            if (0 <= a) {
                                v(a + 2);
                                continue
                            }
                        }
                        a = r.match(Qr);
                        if (a) {
                            v(a[0].length);
                            continue
                        }
                        a = r.match(Gr);
                        if (a) {
                            var l = s;
                            v(a[0].length),
                            y(a[1], l, s);
                            continue
                        }
                        l = function() {
                            var t = r.match(Xr);
                            if (t) {
                                var e, n, i = {
                                    tagName: t[1],
                                    attrs: [],
                                    start: s
                                };
                                for (v(t[0].length); !(e = r.match(Kr)) && (n = r.match(Zr) || r.match(Yr)); )
                                    n.start = s,
                                    v(n[0].length),
                                    n.end = s,
                                    i.attrs.push(n);
                                if (e)
                                    return i.unarySlash = e[1],
                                    v(e[0].length),
                                    i.end = s,
                                    i
                            }
                        }();
                        if (l) {
                            (function(t) {
                                var e = t.tagName
                                  , n = t.unarySlash;
                                h && ("p" === c && Vr(e) && y(c),
                                p(e) && c === e && y(e));
                                for (var n = f(e) || !!n, i = t.attrs.length, r = new Array(i), o = 0; o < i; o++) {
                                    var s = t.attrs[o]
                                      , a = s[3] || s[4] || s[5] || ""
                                      , l = "a" === e && "href" === s[1] ? u.shouldDecodeNewlinesForHref : u.shouldDecodeNewlines;
                                    r[o] = {
                                        name: s[1],
                                        value: function(t, e) {
                                            return e = e ? oo : ro,
                                            t.replace(e, function(t) {
                                                return io[t]
                                            })
                                        }(a, l)
                                    }
                                }
                                n || (d.push({
                                    tag: e,
                                    lowerCasedTag: e.toLowerCase(),
                                    attrs: r,
                                    start: t.start,
                                    end: t.end
                                }),
                                c = e),
                                u.start && u.start(e, r, n, t.start, t.end)
                            }
                            )(l),
                            ao(l.tagName, r) && v(1);
                            continue
                        }
                    }
                    var l = void 0
                      , m = void 0
                      , g = void 0;
                    if (0 <= n) {
                        for (m = r.slice(n); !(Gr.test(m) || Xr.test(m) || Jr.test(m) || to.test(m) || (g = m.indexOf("<", 1)) < 0); )
                            n += g,
                            m = r.slice(n);
                        l = r.substring(0, n)
                    }
                    (l = n < 0 ? r : l) && v(l.length),
                    u.chars && l && u.chars(l, s - l.length, s)
                }
                if (r === t) {
                    u.chars && u.chars(r);
                    break
                }
            }
            function v(t) {
                s += t,
                r = r.substring(t)
            }
            function y(t, e, n) {
                var i, r;
                if (null == e && (e = s),
                null == n && (n = s),
                t)
                    for (r = t.toLowerCase(),
                    i = d.length - 1; 0 <= i && d[i].lowerCasedTag !== r; i--)
                        ;
                else
                    i = 0;
                if (0 <= i) {
                    for (var o = d.length - 1; i <= o; o--)
                        u.end && u.end(d[o].tag, e, n);
                    d.length = i,
                    c = i && d[i - 1].tag
                } else
                    "br" === r ? u.start && u.start(t, [], !0, e, n) : "p" === r && (u.start && u.start(t, [], !1, e, n),
                    u.end && u.end(t, e, n))
            }
            y()
        }(t, {
            warn: lo,
            expectHTML: u.expectHTML,
            isUnaryTag: u.isUnaryTag,
            canBeLeftOpenTag: u.canBeLeftOpenTag,
            shouldDecodeNewlines: u.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: u.shouldDecodeNewlinesForHref,
            shouldKeepComment: u.comments,
            outputSourceRange: u.outputSourceRange,
            start: function(t, e, n, i, r) {
                var o = d && d.ns || go(t)
                  , s = Lo(t, e = Y && "svg" === o ? function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var i = t[n];
                        Fo.test(i.name) || (i.name = i.name.replace(zo, ""),
                        e.push(i))
                    }
                    return e
                }(e) : e, d);
                o && (s.ns = o),
                "style" !== (o = s).tag && ("script" !== o.tag || o.attrsMap.type && "text/javascript" !== o.attrsMap.type) || et() || (s.forbidden = !0);
                for (var a, l = 0; l < ho.length; l++)
                    s = ho[l](s, u) || s;
                f || (null != Ei(a = s, "v-pre") && (a.pre = !0),
                s.pre && (f = !0)),
                po(s.tag) && (p = !0),
                f ? function(t) {
                    var e = t.attrsList
                      , n = e.length;
                    if (n)
                        for (var i = t.attrs = new Array(n), r = 0; r < n; r++)
                            i[r] = {
                                name: e[r].name,
                                value: JSON.stringify(e[r].value)
                            },
                            null != e[r].start && (i[r].start = e[r].start,
                            i[r].end = e[r].end);
                    else
                        t.pre || (t.plain = !0)
                }(s) : s.processed || (Mo(s),
                (a = Ei(o = s, "v-if")) ? (o.if = a,
                No(o, {
                    exp: a,
                    block: o
                })) : (null != Ei(o, "v-else") && (o.else = !0),
                (a = Ei(o, "v-else-if")) && (o.elseif = a)),
                null != Ei(a = s, "v-once") && (a.once = !0)),
                c = c || s,
                n ? m(s) : (d = s,
                h.push(s))
            },
            end: function(t, e, n) {
                var i = h[h.length - 1];
                --h.length,
                d = h[h.length - 1],
                m(i)
            },
            chars: function(t, e, n) {
                var i, r, o;
                !d || Y && "textarea" === d.tag && d.attrsMap.placeholder === t || (o = d.children,
                (t = p || t.trim() ? "script" === d.tag || "style" === d.tag ? t : Do(t) : o.length ? a ? "condense" === a && ko.test(t) ? "" : " " : s ? " " : "" : "") && (p || "condense" !== a || (t = t.replace(So, " ")),
                !f && " " !== t && (i = function(t) {
                    var e = uo ? Ur(uo) : Hr;
                    if (e.test(t)) {
                        for (var n, i, r, o = [], s = [], a = e.lastIndex = 0; n = e.exec(t); ) {
                            (i = n.index) > a && (s.push(r = t.slice(a, i)),
                            o.push(JSON.stringify(r)));
                            var l = gi(n[1].trim());
                            o.push("_s(" + l + ")"),
                            s.push({
                                "@binding": l
                            }),
                            a = i + n[0].length
                        }
                        return a < t.length && (s.push(r = t.slice(a)),
                        o.push(JSON.stringify(r))),
                        {
                            expression: o.join("+"),
                            tokens: s
                        }
                    }
                }(t)) ? r = {
                    type: 2,
                    expression: i.expression,
                    tokens: i.tokens,
                    text: t
                } : " " === t && o.length && " " === o[o.length - 1].text || (r = {
                    type: 3,
                    text: t
                }),
                r && o.push(r)))
            },
            comment: function(t, e, n) {
                d && d.children.push({
                    type: 3,
                    text: t,
                    isComment: !0
                })
            }
        }),
        c
    }
    function Io(t, e) {
        var n, i, r;
        (n = Ai(r = t, "key")) && (r.key = n),
        t.plain = !t.key && !t.scopedSlots && !t.attrsList.length,
        (r = Ai(i = t, "ref")) && (i.ref = r,
        i.refInFor = function() {
            for (var t = i; t; ) {
                if (void 0 !== t.for)
                    return !0;
                t = t.parent
            }
            return !1
        }()),
        function(t) {
            "template" === t.tag ? (s = Ei(t, "scope"),
            t.slotScope = s || Ei(t, "slot-scope")) : (s = Ei(t, "slot-scope")) && (t.slotScope = s);
            var e, n, i, r, o, s = Ai(t, "slot");
            s && (t.slotTarget = '""' === s ? '"default"' : s,
            t.slotTargetDynamic = !(!t.attrsMap[":slot"] && !t.attrsMap["v-bind:slot"]),
            "template" === t.tag || t.slotScope || _i(t, "slot", s, t.rawAttrsMap[":slot"] || t.rawAttrsMap["v-bind:slot"] || t.rawAttrsMap.slot)),
            "template" === t.tag ? (i = Ti(t, To)) && (n = (e = jo(i)).name,
            r = e.dynamic,
            t.slotTarget = n,
            t.slotTargetDynamic = r,
            t.slotScope = i.value || Oo) : (e = Ti(t, To)) && (n = t.scopedSlots || (t.scopedSlots = {}),
            i = (r = jo(e)).name,
            r = r.dynamic,
            (o = n[i] = Lo("template", [], t)).slotTarget = i,
            o.slotTargetDynamic = r,
            o.children = t.children.filter(function(t) {
                if (!t.slotScope)
                    return t.parent = o,
                    !0
            }),
            o.slotScope = e.value || Oo,
            t.children = [],
            t.plain = !1)
        }(t),
        "slot" === (n = t).tag && (n.slotName = Ai(n, "name")),
        (n = Ai(r = t, "is")) && (r.component = n),
        null != Ei(r, "inline-template") && (r.inlineTemplate = !0);
        for (var o = 0; o < co.length; o++)
            t = co[o](t, e) || t;
        return function(t) {
            for (var e, n, i, r, o, s, a, l, u, c, d, h = t.attrsList, f = 0, p = h.length; f < p; f++)
                e = u = h[f].name,
                n = h[f].value,
                yo.test(e) ? (t.hasBindings = !0,
                (d = function(t) {
                    t = t.match(Eo);
                    if (t) {
                        var e = {};
                        return t.forEach(function(t) {
                            e[t.slice(1)] = !0
                        }),
                        e
                    }
                }(e.replace(yo, ""))) && (e = e.replace(Eo, "")),
                Ao.test(e) ? (e = e.replace(Ao, ""),
                n = gi(n),
                (i = xo.test(e)) && (e = e.slice(1, -1)),
                d && (d.prop && !i && "innerHtml" === (e = g(e)) && (e = "innerHTML"),
                d.camel && !i && (e = g(e)),
                d.sync && (a = Di(n, "$event"),
                i ? Ci(t, '"update:"+(' + e + ")", a, null, !1, 0, h[f], !0) : (Ci(t, "update:" + g(e), a, null, !1, 0, h[f]),
                y(e) !== g(e) && Ci(t, "update:" + y(e), a, null, !1, 0, h[f])))),
                (d && d.prop || !t.component && mo(t.tag, t.attrsMap.type, e) ? bi : _i)(t, e, n, h[f], i)) : vo.test(e) ? (e = e.replace(vo, ""),
                Ci(t, e = (i = xo.test(e)) ? e.slice(1, -1) : e, n, d, !1, 0, h[f], i)) : (i = !1,
                (c = (l = (e = e.replace(yo, "")).match(Co)) && l[1]) && (e = e.slice(0, -(c.length + 1)),
                xo.test(c) && (c = c.slice(1, -1),
                i = !0)),
                r = t,
                o = e,
                s = u,
                a = n,
                l = c,
                u = i,
                c = d,
                d = h[f],
                (r.directives || (r.directives = [])).push(ki({
                    name: o,
                    rawName: s,
                    value: a,
                    arg: l,
                    isDynamicArg: u,
                    modifiers: c
                }, d)),
                r.plain = !1)) : (_i(t, e, JSON.stringify(n), h[f]),
                !t.component && "muted" === e && mo(t.tag, t.attrsMap.type, e) && bi(t, e, "true", h[f]))
        }(t),
        t
    }
    function Mo(t) {
        var i, e;
        !(i = Ei(t, "v-for")) || (e = function() {
            var t = i.match(bo);
            if (t) {
                var e = {};
                e.for = t[2].trim();
                var n = t[1].trim().replace(wo, "")
                  , t = n.match(_o);
                return t ? (e.alias = n.replace(_o, "").trim(),
                e.iterator1 = t[1].trim(),
                t[2] && (e.iterator2 = t[2].trim())) : e.alias = n,
                e
            }
        }()) && w(t, e)
    }
    function No(t, e) {
        t.ifConditions || (t.ifConditions = []),
        t.ifConditions.push(e)
    }
    function jo(t) {
        var e = t.name.replace(To, "");
        return e || "#" !== t.name[0] && (e = "default"),
        xo.test(e) ? {
            name: e.slice(1, -1),
            dynamic: !0
        } : {
            name: '"' + e + '"',
            dynamic: !1
        }
    }
    var Fo = /^xmlns:NS\d+/
      , zo = /^NS\d+:/;
    function $o(t) {
        return Lo(t.tag, t.attrsList.slice(), t.parent)
    }
    var Ro, qo, Xt = [U, Xt, {
        preTransformNode: function(t, e) {
            if ("input" === t.tag) {
                var n, i = t.attrsMap;
                if (i["v-model"] && ((i[":type"] || i["v-bind:type"]) && (n = Ai(t, "type")),
                n = !i.type && !n && i["v-bind"] ? "(" + i["v-bind"] + ").type" : n)) {
                    var r = Ei(t, "v-if", !0)
                      , o = r ? "&&(" + r + ")" : ""
                      , s = null != Ei(t, "v-else", !0)
                      , a = Ei(t, "v-else-if", !0)
                      , l = $o(t);
                    Mo(l),
                    wi(l, "type", "checkbox"),
                    Io(l, e),
                    l.processed = !0,
                    l.if = "(" + n + ")==='checkbox'" + o,
                    No(l, {
                        exp: l.if,
                        block: l
                    });
                    i = $o(t);
                    Ei(i, "v-for", !0),
                    wi(i, "type", "radio"),
                    Io(i, e),
                    No(l, {
                        exp: "(" + n + ")==='radio'" + o,
                        block: i
                    });
                    t = $o(t);
                    return Ei(t, "v-for", !0),
                    wi(t, ":type", n),
                    Io(t, e),
                    No(l, {
                        exp: r,
                        block: t
                    }),
                    s ? l.else = !0 : a && (l.elseif = a),
                    l
                }
            }
        }
    }], Xt = {
        expectHTML: !0,
        modules: Xt,
        directives: {
            model: function(t, e, n) {
                var i, r, o, s, a, l, u, c, d, h = e.value, f = e.modifiers, p = t.tag, m = t.attrsMap.type;
                if (t.component)
                    return Si(t, h, f),
                    !1;
                if ("select" === p)
                    Ci(t, "change", 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (f && f.number ? "_n(val)" : "val") + "});" + " " + Di(h, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
                else if ("input" === p && "checkbox" === m)
                    a = t,
                    l = h,
                    u = f && f.number,
                    c = Ai(a, "value") || "null",
                    d = Ai(a, "true-value") || "true",
                    e = Ai(a, "false-value") || "false",
                    bi(a, "checked", "Array.isArray(" + l + ")?_i(" + l + "," + c + ")>-1" + ("true" === d ? ":(" + l + ")" : ":_q(" + l + "," + d + ")")),
                    Ci(a, "change", "var $$a=" + l + ",$$el=$event.target,$$c=$$el.checked?(" + d + "):(" + e + ");if(Array.isArray($$a)){var $$v=" + (u ? "_n(" + c + ")" : c) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Di(l, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Di(l, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Di(l, "$$c") + "}", null, !0);
                else if ("input" === p && "radio" === m)
                    i = t,
                    r = h,
                    o = f && f.number,
                    s = Ai(i, "value") || "null",
                    bi(i, "checked", "_q(" + r + "," + (s = o ? "_n(" + s + ")" : s) + ")"),
                    Ci(i, "change", Di(r, s), null, !0);
                else if ("input" === p || "textarea" === p)
                    c = h,
                    m = (l = t).attrsMap.type,
                    i = (o = f || {}).lazy,
                    r = o.number,
                    s = o.trim,
                    o = !i && "range" !== m,
                    i = i ? "change" : "range" === m ? Ni : "input",
                    m = s ? "$event.target.value.trim()" : "$event.target.value",
                    m = Di(c, m = r ? "_n(" + m + ")" : m),
                    o && (m = "if($event.target.composing)return;" + m),
                    bi(l, "value", "(" + c + ")"),
                    Ci(l, i, m, null, !0),
                    (s || r) && Ci(l, "blur", "$forceUpdate()");
                else if (!P.isReservedTag(p))
                    return Si(t, h, f),
                    !1;
                return !0
            },
            text: function(t, e) {
                e.value && bi(t, "textContent", "_s(" + e.value + ")", e)
            },
            html: function(t, e) {
                e.value && bi(t, "innerHTML", "_s(" + e.value + ")", e)
            }
        },
        isPreTag: function(t) {
            return "pre" === t
        },
        isUnaryTag: G,
        mustUseProp: V,
        canBeLeftOpenTag: ti,
        isReservedTag: Bn,
        getTagNamespace: Vn,
        staticKeys: Xt.reduce(function(t, e) {
            return t.concat(e.staticKeys || [])
        }, []).join(",")
    }, Bo = t(function(t) {
        return s("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : ""))
    });
    function Ho(t, e) {
        t && (Ro = Bo(e.staticKeys || ""),
        qo = e.isReservedTag || A,
        function t(e) {
            var n;
            if (e.static = 2 !== (n = e).type && (3 === n.type || !(!n.pre && (n.hasBindings || n.if || n.for || c(n.tag) || !qo(n.tag) || function(t) {
                for (; t.parent; ) {
                    if ("template" !== (t = t.parent).tag)
                        return;
                    if (t.for)
                        return 1
                }
            }(n) || !Object.keys(n).every(Ro)))),
            1 === e.type && (qo(e.tag) || "slot" === e.tag || null != e.attrsMap["inline-template"])) {
                for (var i = 0, r = e.children.length; i < r; i++) {
                    var o = e.children[i];
                    t(o),
                    o.static || (e.static = !1)
                }
                if (e.ifConditions)
                    for (var s = 1, a = e.ifConditions.length; s < a; s++) {
                        var l = e.ifConditions[s].block;
                        t(l),
                        l.static || (e.static = !1)
                    }
            }
        }(t),
        function t(e, n) {
            if (1 === e.type) {
                if ((e.static || e.once) && (e.staticInFor = n),
                e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
                    return e.staticRoot = !0,
                    0;
                if (e.staticRoot = !1,
                e.children)
                    for (var i = 0, r = e.children.length; i < r; i++)
                        t(e.children[i], n || !!e.for);
                if (e.ifConditions)
                    for (var o = 1, s = e.ifConditions.length; o < s; o++)
                        t(e.ifConditions[o].block, n)
            }
        }(t, !1))
    }
    var Wo = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/
      , Uo = /\([^)]*?\);*$/
      , Vo = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
      , Yo = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [8, 46]
    }
      , Zo = {
        esc: ["Esc", "Escape"],
        tab: "Tab",
        enter: "Enter",
        space: [" ", "Spacebar"],
        up: ["Up", "ArrowUp"],
        left: ["Left", "ArrowLeft"],
        right: ["Right", "ArrowRight"],
        down: ["Down", "ArrowDown"],
        delete: ["Backspace", "Delete", "Del"]
    }
      , Xo = function(t) {
        return "if(" + t + ")return null;"
    }
      , Ko = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: Xo("$event.target !== $event.currentTarget"),
        ctrl: Xo("!$event.ctrlKey"),
        shift: Xo("!$event.shiftKey"),
        alt: Xo("!$event.altKey"),
        meta: Xo("!$event.metaKey"),
        left: Xo("'button' in $event && $event.button !== 0"),
        middle: Xo("'button' in $event && $event.button !== 1"),
        right: Xo("'button' in $event && $event.button !== 2")
    };
    function Go(t, e) {
        var n, e = e ? "nativeOn:" : "on:", i = "", r = "";
        for (n in t) {
            var o = function e(t) {
                if (!t)
                    return "function(){}";
                if (Array.isArray(t))
                    return "[" + t.map(function(t) {
                        return e(t)
                    }).join(",") + "]";
                var n = Vo.test(t.value)
                  , i = Wo.test(t.value)
                  , r = Vo.test(t.value.replace(Uo, ""));
                if (t.modifiers) {
                    var o, s, a = "", l = "", u = [];
                    for (o in t.modifiers)
                        Ko[o] ? (l += Ko[o],
                        Yo[o] && u.push(o)) : "exact" === o ? (s = t.modifiers,
                        l += Xo(["ctrl", "shift", "alt", "meta"].filter(function(t) {
                            return !s[t]
                        }).map(function(t) {
                            return "$event." + t + "Key"
                        }).join("||"))) : u.push(o);
                    return u.length && (a += function(t) {
                        return "if(!$event.type.indexOf('key')&&" + t.map(Qo).join("&&") + ")return null;"
                    }(u)),
                    l && (a += l),
                    "function($event){" + a + (n ? "return " + t.value + ".apply(null, arguments)" : i ? "return (" + t.value + ").apply(null, arguments)" : r ? "return " + t.value : t.value) + "}"
                }
                return n || i ? t.value : "function($event){" + (r ? "return " + t.value : t.value) + "}"
            }(t[n]);
            t[n] && t[n].dynamic ? r += n + "," + o + "," : i += '"' + n + '":' + o + ","
        }
        return i = "{" + i.slice(0, -1) + "}",
        r ? e + "_d(" + i + ",[" + r.slice(0, -1) + "])" : e + i
    }
    function Qo(t) {
        var e = parseInt(t, 10);
        if (e)
            return "$event.keyCode!==" + e;
        var n = Yo[t]
          , e = Zo[t];
        return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(e) + ")"
    }
    var Jo = {
        on: function(t, e) {
            t.wrapListeners = function(t) {
                return "_g(" + t + "," + e.value + ")"
            }
        },
        bind: function(e, n) {
            e.wrapData = function(t) {
                return "_b(" + t + ",'" + e.tag + "'," + n.value + "," + (n.modifiers && n.modifiers.prop ? "true" : "false") + (n.modifiers && n.modifiers.sync ? ",true" : "") + ")"
            }
        },
        cloak: C
    }
      , ts = function(t) {
        this.options = t,
        this.warn = t.warn || vi,
        this.transforms = yi(t.modules, "transformCode"),
        this.dataGenFns = yi(t.modules, "genData"),
        this.directives = w(w({}, Jo), t.directives);
        var e = t.isReservedTag || A;
        this.maybeComponent = function(t) {
            return !!t.component || !e(t.tag)
        }
        ,
        this.onceId = 0,
        this.staticRenderFns = [],
        this.pre = !1
    };
    function es(t, e) {
        e = new ts(e);
        return {
            render: "with(this){return " + (t ? "script" === t.tag ? "null" : ns(t, e) : '_c("div")') + "}",
            staticRenderFns: e.staticRenderFns
        }
    }
    function ns(t, e) {
        if (t.parent && (t.pre = t.pre || t.parent.pre),
        t.staticRoot && !t.staticProcessed)
            return is(t, e);
        if (t.once && !t.onceProcessed)
            return rs(t, e);
        if (t.for && !t.forProcessed)
            return ss(t, e);
        if (t.if && !t.ifProcessed)
            return os(t, e);
        if ("template" !== t.tag || t.slotTarget || e.pre) {
            if ("slot" === t.tag)
                return a = (s = t).slotName || '"default"',
                l = cs(s, e),
                u = "_t(" + a + (l ? ",function(){return " + l + "}" : ""),
                a = s.attrs || s.dynamicAttrs ? fs((s.attrs || []).concat(s.dynamicAttrs || []).map(function(t) {
                    return {
                        name: g(t.name),
                        value: t.value,
                        dynamic: t.dynamic
                    }
                })) : null,
                s = s.attrsMap["v-bind"],
                !a && !s || l || (u += ",null"),
                a && (u += "," + a),
                s && (u += (a ? "" : ",null") + "," + s),
                u + ")";
            var n, i;
            i = t.component ? (a = t.component,
            s = e,
            o = (u = t).inlineTemplate ? null : cs(u, s, !0),
            "_c(" + a + "," + as(u, s) + (o ? "," + o : "") + ")") : ((!t.plain || t.pre && e.maybeComponent(t)) && (n = as(t, e)),
            o = t.inlineTemplate ? null : cs(t, e, !0),
            "_c('" + t.tag + "'" + (n ? "," + n : "") + (o ? "," + o : "") + ")");
            for (var r = 0; r < e.transforms.length; r++)
                i = e.transforms[r](t, i);
            return i
        }
        var o, s, a, l, u;
        return cs(t, e) || "void 0"
    }
    function is(t, e) {
        t.staticProcessed = !0;
        var n = e.pre;
        return t.pre && (e.pre = t.pre),
        e.staticRenderFns.push("with(this){return " + ns(t, e) + "}"),
        e.pre = n,
        "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")"
    }
    function rs(t, e) {
        if (t.onceProcessed = !0,
        t.if && !t.ifProcessed)
            return os(t, e);
        if (t.staticInFor) {
            for (var n = "", i = t.parent; i; ) {
                if (i.for) {
                    n = i.key;
                    break
                }
                i = i.parent
            }
            return n ? "_o(" + ns(t, e) + "," + e.onceId++ + "," + n + ")" : ns(t, e)
        }
        return is(t, e)
    }
    function os(t, e, n, i) {
        return t.ifProcessed = !0,
        function t(e, n, i, r) {
            if (!e.length)
                return r || "_e()";
            var o = e.shift();
            return o.exp ? "(" + o.exp + ")?" + s(o.block) + ":" + t(e, n, i, r) : "" + s(o.block);
            function s(t) {
                return (i || (t.once ? rs : ns))(t, n)
            }
        }(t.ifConditions.slice(), e, n, i)
    }
    function ss(t, e, n, i) {
        var r = t.for
          , o = t.alias
          , s = t.iterator1 ? "," + t.iterator1 : ""
          , a = t.iterator2 ? "," + t.iterator2 : "";
        return t.forProcessed = !0,
        (i || "_l") + "((" + r + "),function(" + o + s + a + "){return " + (n || ns)(t, e) + "})"
    }
    function as(e, n) {
        var t = "{"
          , i = function(t, e) {
            var n = t.directives;
            if (n) {
                for (var i = "directives:[", r = !1, o = 0, s = n.length; o < s; o++) {
                    var a = n[o]
                      , l = !0
                      , u = e.directives[a.name];
                    (l = u ? !!u(t, a, e.warn) : l) && (r = !0,
                    i += '{name:"' + a.name + '",rawName:"' + a.rawName + '"' + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ",arg:" + (a.isDynamicArg ? a.arg : '"' + a.arg + '"') : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},")
                }
                return r ? i.slice(0, -1) + "]" : void 0
            }
        }(e, n);
        i && (t += i + ","),
        e.key && (t += "key:" + e.key + ","),
        e.ref && (t += "ref:" + e.ref + ","),
        e.refInFor && (t += "refInFor:true,"),
        e.pre && (t += "pre:true,"),
        e.component && (t += 'tag:"' + e.tag + '",');
        for (var r, o = 0; o < n.dataGenFns.length; o++)
            t += n.dataGenFns[o](e);
        return e.attrs && (t += "attrs:" + fs(e.attrs) + ","),
        e.props && (t += "domProps:" + fs(e.props) + ","),
        e.events && (t += Go(e.events, !1) + ","),
        e.nativeEvents && (t += Go(e.nativeEvents, !0) + ","),
        e.slotTarget && !e.slotScope && (t += "slot:" + e.slotTarget + ","),
        e.scopedSlots && (t += function(t, e, n) {
            var i = t.for || Object.keys(e).some(function(t) {
                t = e[t];
                return t.slotTargetDynamic || t.if || t.for || ls(t)
            })
              , r = !!t.if;
            if (!i)
                for (var o = t.parent; o; ) {
                    if (o.slotScope && o.slotScope !== Oo || o.for) {
                        i = !0;
                        break
                    }
                    o.if && (r = !0),
                    o = o.parent
                }
            t = Object.keys(e).map(function(t) {
                return us(e[t], n)
            }).join(",");
            return "scopedSlots:_u([" + t + "]" + (i ? ",null,true" : "") + (!i && r ? ",null,false," + function(t) {
                for (var e = 5381, n = t.length; n; )
                    e = 33 * e ^ t.charCodeAt(--n);
                return e >>> 0
            }(t) : "") + ")"
        }(e, e.scopedSlots, n) + ","),
        e.model && (t += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"),
        e.inlineTemplate && (r = function() {
            var t = e.children[0];
            if (t && 1 === t.type) {
                t = es(t, n.options);
                return "inlineTemplate:{render:function(){" + t.render + "},staticRenderFns:[" + t.staticRenderFns.map(function(t) {
                    return "function(){" + t + "}"
                }).join(",") + "]}"
            }
        }()) && (t += r + ","),
        t = t.replace(/,$/, "") + "}",
        e.dynamicAttrs && (t = "_b(" + t + ',"' + e.tag + '",' + fs(e.dynamicAttrs) + ")"),
        e.wrapData && (t = e.wrapData(t)),
        t = e.wrapListeners ? e.wrapListeners(t) : t
    }
    function ls(t) {
        return 1 === t.type && ("slot" === t.tag || t.children.some(ls))
    }
    function us(t, e) {
        var n = t.attrsMap["slot-scope"];
        if (t.if && !t.ifProcessed && !n)
            return os(t, e, us, "null");
        if (t.for && !t.forProcessed)
            return ss(t, e, us);
        var i = t.slotScope === Oo ? "" : String(t.slotScope)
          , e = "function(" + i + "){return " + ("template" === t.tag ? t.if && n ? "(" + t.if + ")?" + (cs(t, e) || "undefined") + ":undefined" : cs(t, e) || "undefined" : ns(t, e)) + "}";
        return "{key:" + (t.slotTarget || '"default"') + ",fn:" + e + (i ? "" : ",proxy:true") + "}"
    }
    function cs(t, e, n, i, r) {
        var o = t.children;
        if (o.length) {
            var s = o[0];
            if (1 === o.length && s.for && "template" !== s.tag && "slot" !== s.tag) {
                t = n ? e.maybeComponent(s) ? ",1" : ",0" : "";
                return (i || ns)(s, e) + t
            }
            var n = n ? function(t, e) {
                for (var n = 0, i = 0; i < t.length; i++) {
                    var r = t[i];
                    if (1 === r.type) {
                        if (ds(r) || r.ifConditions && r.ifConditions.some(function(t) {
                            return ds(t.block)
                        })) {
                            n = 2;
                            break
                        }
                        (e(r) || r.ifConditions && r.ifConditions.some(function(t) {
                            return e(t.block)
                        })) && (n = 1)
                    }
                }
                return n
            }(o, e.maybeComponent) : 0
              , a = r || hs;
            return "[" + o.map(function(t) {
                return a(t, e)
            }).join(",") + "]" + (n ? "," + n : "")
        }
    }
    function ds(t) {
        return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
    }
    function hs(t, e) {
        return 1 === t.type ? ns(t, e) : 3 === t.type && t.isComment ? "_e(" + JSON.stringify(t.text) + ")" : "_v(" + (2 === t.type ? t.expression : ps(JSON.stringify(t.text))) + ")"
    }
    function fs(t) {
        for (var e = "", n = "", i = 0; i < t.length; i++) {
            var r = t[i]
              , o = ps(r.value);
            r.dynamic ? n += r.name + "," + o + "," : e += '"' + r.name + '":' + o + ","
        }
        return e = "{" + e.slice(0, -1) + "}",
        n ? "_d(" + e + ",[" + n.slice(0, -1) + "])" : e
    }
    function ps(t) {
        return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }
    function ms(e, n) {
        try {
            return new Function(e)
        } catch (t) {
            return n.push({
                err: t,
                code: e
            }),
            C
        }
    }
    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
    var gs, vs, ys, bs, _s, Xt = (gs = function(t, e) {
        t = Po(t.trim(), e);
        !1 !== e.optimize && Ho(t, e);
        e = es(t, e);
        return {
            ast: t,
            render: e.render,
            staticRenderFns: e.staticRenderFns
        }
    }
    ,
    ys = Xt,
    {
        compile: xs,
        compileToFunctions: (bs = xs,
        _s = Object.create(null),
        function(t, e, n) {
            (e = w({}, e)).warn,
            delete e.warn;
            var i = e.delimiters ? String(e.delimiters) + t : t;
            if (_s[i])
                return _s[i];
            var t = bs(t, e)
              , e = {}
              , r = [];
            return e.render = ms(t.render, r),
            e.staticRenderFns = t.staticRenderFns.map(function(t) {
                return ms(t, r)
            }),
            _s[i] = e
        }
        )
    }), ws = Xt.compileToFunctions;
    function xs(t, e) {
        var n = Object.create(ys)
          , i = []
          , r = [];
        if (e)
            for (var o in e.modules && (n.modules = (ys.modules || []).concat(e.modules)),
            e.directives && (n.directives = w(Object.create(ys.directives || null), e.directives)),
            e)
                "modules" !== o && "directives" !== o && (n[o] = e[o]);
        n.warn = function(t, e, n) {
            (n ? r : i).push(t)
        }
        ;
        t = gs(t.trim(), n);
        return t.errors = i,
        t.tips = r,
        t
    }
    function Cs(t) {
        return (vs = vs || document.createElement("div")).innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>',
        0 < vs.innerHTML.indexOf("&#10;")
    }
    var As = !!H && Cs(!1)
      , Es = !!H && Cs(!0)
      , Ts = t(function(t) {
        t = Xn(t);
        return t && t.innerHTML
    })
      , ks = wn.prototype.$mount;
    return wn.prototype.$mount = function(t, e) {
        if ((t = t && Xn(t)) === document.body || t === document.documentElement)
            return this;
        var n = this.$options;
        if (!n.render) {
            var i, r = n.template;
            if (r)
                if ("string" == typeof r)
                    "#" === r.charAt(0) && (r = Ts(r));
                else {
                    if (!r.nodeType)
                        return this;
                    r = r.innerHTML
                }
            else
                t && (r = function(t) {
                    if (t.outerHTML)
                        return t.outerHTML;
                    var e = document.createElement("div");
                    return e.appendChild(t.cloneNode(!0)),
                    e.innerHTML
                }(t));
            r && (r = (i = ws(r, {
                outputSourceRange: !1,
                shouldDecodeNewlines: As,
                shouldDecodeNewlinesForHref: Es,
                delimiters: n.delimiters,
                comments: n.comments
            }, this)).render,
            i = i.staticRenderFns,
            n.render = r,
            n.staticRenderFns = i)
        }
        return ks.call(this, t, e)
    }
    ,
    wn.compile = ws,
    wn
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery)
}(window, function(t, e) {
    "use strict";
    var n = Array.prototype.slice
      , i = t.console
      , d = void 0 === i ? function() {}
    : function(t) {
        i.error(t)
    }
    ;
    function r(l, u, c) {
        (c = c || e || t.jQuery) && (u.prototype.option || (u.prototype.option = function(t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
        }
        ),
        c.fn[l] = function(t) {
            if ("string" != typeof t)
                return a = t,
                this.each(function(t, e) {
                    var n = c.data(e, l);
                    n ? (n.option(a),
                    n._init()) : (n = new u(e,a),
                    c.data(e, l, n))
                }),
                this;
            var i, r, o, s, a, e = n.call(arguments, 1);
            return r = e,
            s = "$()." + l + '("' + (i = t) + '")',
            (t = this).each(function(t, e) {
                var n = c.data(e, l);
                n ? (e = n[i]) && "_" != i.charAt(0) ? (n = e.apply(n, r),
                o = void 0 === o ? n : o) : d(s + " is not a valid method") : d(l + " not initialized. Cannot call methods, i.e. " + s)
            }),
            void 0 !== o ? o : t
        }
        ,
        o(c))
    }
    function o(t) {
        t && !t.bridget && (t.bridget = r)
    }
    return o(e || t.jQuery),
    r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var n = this._events = this._events || {}
              , t = n[t] = n[t] || [];
            return -1 == t.indexOf(e) && t.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[t] = n[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
            e = t.indexOf(e);
            return -1 != e && t.splice(e, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
            n = n.slice(0),
            e = e || [];
            for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                var o = n[r];
                i && i[o] && (this.off(t, o),
                delete i[o]),
                o.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function f(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    var e = "undefined" == typeof console ? function() {}
    : function(t) {
        console.error(t)
    }
      , p = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]
      , m = p.length;
    function g(t) {
        t = getComputedStyle(t);
        return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        t
    }
    var v, y = !1;
    function b(t) {
        if (y || (y = !0,
        (h = document.createElement("div")).style.width = "200px",
        h.style.padding = "1px 2px 3px 4px",
        h.style.borderStyle = "solid",
        h.style.borderWidth = "1px 2px 3px 4px",
        h.style.boxSizing = "border-box",
        (d = document.body || document.documentElement).appendChild(h),
        c = g(h),
        v = 200 == Math.round(f(c.width)),
        b.isBoxSizeOuter = v,
        d.removeChild(h)),
        (t = "string" == typeof t ? document.querySelector(t) : t) && "object" == typeof t && t.nodeType) {
            var e = g(t);
            if ("none" == e.display)
                return function() {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < m; e++)
                        t[p[e]] = 0;
                    return t
                }();
            var n = {};
            n.width = t.offsetWidth,
            n.height = t.offsetHeight;
            for (var i = n.isBorderBox = "border-box" == e.boxSizing, r = 0; r < m; r++) {
                var o = p[r]
                  , s = e[o]
                  , s = parseFloat(s);
                n[o] = isNaN(s) ? 0 : s
            }
            var a = n.paddingLeft + n.paddingRight
              , l = n.paddingTop + n.paddingBottom
              , u = n.marginLeft + n.marginRight
              , c = n.marginTop + n.marginBottom
              , d = n.borderLeftWidth + n.borderRightWidth
              , h = n.borderTopWidth + n.borderBottomWidth
              , t = i && v
              , i = f(e.width);
            !1 !== i && (n.width = i + (t ? 0 : a + d));
            i = f(e.height);
            return !1 !== i && (n.height = i + (t ? 0 : l + h)),
            n.innerWidth = n.width - (a + d),
            n.innerHeight = n.height - (l + h),
            n.outerWidth = n.width + u,
            n.outerHeight = n.height + c,
            n
        }
    }
    return b
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var n = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
            var i = e[n] + "MatchesSelector";
            if (t[i])
                return i
        }
    }();
    return function(t, e) {
        return t[n](e)
    }
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector)
}(window, function(n, o) {
    var l = {
        extend: function(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        },
        modulo: function(t, e) {
            return (t % e + e) % e
        }
    }
      , e = Array.prototype.slice;
    l.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
    }
    ,
    l.removeFrom = function(t, e) {
        e = t.indexOf(e);
        -1 != e && t.splice(e, 1)
    }
    ,
    l.getParent = function(t, e) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            o(t, e))
                return t
    }
    ,
    l.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    l.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    l.filterFindElements = function(t, i) {
        t = l.makeArray(t);
        var r = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement)
                if (i) {
                    o(t, i) && r.push(t);
                    for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++)
                        r.push(e[n])
                } else
                    r.push(t)
        }),
        r
    }
    ,
    l.debounceMethod = function(t, e, i) {
        i = i || 100;
        var r = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments
              , n = this;
            this[o] = setTimeout(function() {
                r.apply(n, e),
                delete n[o]
            }, i)
        }
    }
    ,
    l.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    l.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, n) {
            return e + "-" + n
        }).toLowerCase()
    }
    ;
    var u = n.console;
    return l.htmlInit = function(s, a) {
        l.docReady(function() {
            var t = l.toDashed(a)
              , i = "data-" + t
              , e = document.querySelectorAll("[" + i + "]")
              , t = document.querySelectorAll(".js-" + t)
              , t = l.makeArray(e).concat(l.makeArray(t))
              , r = i + "-options"
              , o = n.jQuery;
            t.forEach(function(t) {
                var e = t.getAttribute(i) || t.getAttribute(r);
                try {
                    n = e && JSON.parse(e)
                } catch (e) {
                    return void (u && u.error("Error parsing " + i + " on " + t.className + ": " + e))
                }
                var n = new s(t,n);
                o && o.data(t, a, n)
            })
        })
    }
    ,
    l
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(t) {
        return e(0, t)
    }) : "object" == typeof module && module.exports ? module.exports = e(0, require("get-size")) : (t.Flickity = t.Flickity || {},
    t.Flickity.Cell = e(0, t.getSize))
}(window, function(t, e) {
    function n(t, e) {
        this.element = t,
        this.parent = e,
        this.create()
    }
    var i = n.prototype;
    return i.create = function() {
        this.element.style.position = "absolute",
        this.element.setAttribute("aria-hidden", "true"),
        this.x = 0,
        this.shift = 0
    }
    ,
    i.destroy = function() {
        this.unselect(),
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = "",
        this.element.removeAttribute("aria-hidden")
    }
    ,
    i.getSize = function() {
        this.size = e(this.element)
    }
    ,
    i.setPosition = function(t) {
        this.x = t,
        this.updateTarget(),
        this.renderPosition(t)
    }
    ,
    i.updateTarget = i.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }
    ,
    i.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }
    ,
    i.select = function() {
        this.element.classList.add("is-selected"),
        this.element.removeAttribute("aria-hidden")
    }
    ,
    i.unselect = function() {
        this.element.classList.remove("is-selected"),
        this.element.setAttribute("aria-hidden", "true")
    }
    ,
    i.wrapShift = function(t) {
        this.shift = t,
        this.renderPosition(this.x + this.parent.slideableWidth * t)
    }
    ,
    i.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {},
    t.Flickity.Slide = e())
}(window, function() {
    "use strict";
    function t(t) {
        this.parent = t,
        this.isOriginLeft = "left" == t.originSide,
        this.cells = [],
        this.outerWidth = 0,
        this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        var e;
        this.cells.push(t),
        this.outerWidth += t.size.outerWidth,
        this.height = Math.max(t.size.outerHeight, this.height),
        1 == this.cells.length && (this.x = t.x,
        e = this.isOriginLeft ? "marginLeft" : "marginRight",
        this.firstMargin = t.size[e])
    }
    ,
    e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft"
          , e = this.getLastCell()
          , t = e ? e.size[t] : 0
          , t = this.outerWidth - (this.firstMargin + t);
        this.target = this.x + this.firstMargin + t * this.parent.cellAlign
    }
    ,
    e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    e.select = function() {
        this.cells.forEach(function(t) {
            t.select()
        })
    }
    ,
    e.unselect = function() {
        this.cells.forEach(function(t) {
            t.unselect()
        })
    }
    ,
    e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(t) {
        return e(0, t)
    }) : "object" == typeof module && module.exports ? module.exports = e(0, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {},
    t.Flickity.animatePrototype = e(0, t.fizzyUIUtils))
}(window, function(t, e) {
    var n = {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0,
            this.restingFrames = 0,
            this.animate())
        },
        animate: function() {
            this.applyDragForce(),
            this.applySelectedAttraction();
            var t, e = this.x;
            this.integratePhysics(),
            this.positionSlider(),
            this.settle(e),
            this.isAnimating && (t = this,
            requestAnimationFrame(function() {
                t.animate()
            }))
        },
        positionSlider: function() {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth),
            t -= this.slideableWidth,
            this.shiftWrapCells(t)),
            this.setTranslateX(t, this.isAnimating),
            this.dispatchScrollEvent()
        },
        setTranslateX: function(t, e) {
            t += this.cursorPosition,
            t = this.options.rightToLeft ? -t : t;
            t = this.getPositionValue(t);
            this.slider.style.transform = e ? "translate3d(" + t + ",0,0)" : "translateX(" + t + ")"
        },
        dispatchScrollEvent: function() {
            var t, e = this.slides[0];
            e && (e = (t = -this.x - e.target) / this.slidesWidth,
            this.dispatchEvent("scroll", null, [e, t]))
        },
        positionSliderAtSelected: function() {
            this.cells.length && (this.x = -this.selectedSlide.target,
            this.velocity = 0,
            this.positionSlider())
        },
        getPositionValue: function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        },
        settle: function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
            2 < this.restingFrames && (this.isAnimating = !1,
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]))
        },
        shiftWrapCells: function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            t = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, t, 1)
        },
        _shiftCells: function(t, e, n) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.wrapShift(0 < e ? n : 0),
                e -= r.size.outerWidth
            }
        },
        _unshiftCells: function(t) {
            if (t && t.length)
                for (var e = 0; e < t.length; e++)
                    t[e].wrapShift(0)
        },
        integratePhysics: function() {
            this.x += this.velocity,
            this.velocity *= this.getFrictionFactor()
        },
        applyForce: function(t) {
            this.velocity += t
        },
        getFrictionFactor: function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        },
        getRestingPosition: function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        },
        applyDragForce: function() {
            var t;
            this.isDraggable && this.isPointerDown && (t = this.dragX - this.x - this.velocity,
            this.applyForce(t))
        },
        applySelectedAttraction: function() {
            var t;
            this.isDraggable && this.isPointerDown || this.isFreeScrolling || !this.slides.length || (t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction,
            this.applyForce(t))
        }
    };
    return n
}),
function(s, a) {
    var t;
    "function" == typeof define && define.amd ? define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(t, e, n, i, r, o) {
        return a(s, t, e, n, i, r, o)
    }) : "object" == typeof module && module.exports ? module.exports = a(s, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")) : (t = s.Flickity,
    s.Flickity = a(s, s.EvEmitter, s.getSize, s.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype))
}(window, function(i, t, e, s, n, a, r) {
    var o = i.jQuery
      , l = i.getComputedStyle
      , u = i.console;
    function c(t, e) {
        for (t = s.makeArray(t); t.length; )
            e.appendChild(t.shift())
    }
    var d = 0
      , h = {};
    function f(t, e) {
        var n = s.getQueryElement(t);
        if (n) {
            if (this.element = n,
            this.element.flickityGUID) {
                var i = h[this.element.flickityGUID];
                return i && i.option(e),
                i
            }
            o && (this.$element = o(this.element)),
            this.options = s.extend({}, this.constructor.defaults),
            this.option(e),
            this._create()
        } else
            u && u.error("Bad element for Flickity: " + (n || t))
    }
    f.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    },
    f.createMethods = [];
    var p = f.prototype;
    s.extend(p, t.prototype),
    p._create = function() {
        var t, e = this.guid = ++d;
        for (t in this.element.flickityGUID = e,
        (h[e] = this).selectedIndex = 0,
        this.restingFrames = 0,
        this.x = 0,
        this.velocity = 0,
        this.originSide = this.options.rightToLeft ? "right" : "left",
        this.viewport = document.createElement("div"),
        this.viewport.className = "flickity-viewport",
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) && i.addEventListener("resize", this),
        this.options.on) {
            var n = this.options.on[t];
            this.on(t, n)
        }
        f.createMethods.forEach(function(t) {
            this[t]()
        }, this),
        this.options.watchCSS ? this.watchCSS() : this.activate()
    }
    ,
    p.option = function(t) {
        s.extend(this.options, t)
    }
    ,
    p.activate = function() {
        this.isActive || (this.isActive = !0,
        this.element.classList.add("flickity-enabled"),
        this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
        this.getSize(),
        c(this._filterFindCellElements(this.element.children), this.slider),
        this.viewport.appendChild(this.slider),
        this.element.appendChild(this.viewport),
        this.reloadCells(),
        this.options.accessibility && (this.element.tabIndex = 0,
        this.element.addEventListener("keydown", this)),
        this.emitEvent("activate"),
        this.selectInitialIndex(),
        this.isInitActivated = !0,
        this.dispatchEvent("ready"))
    }
    ,
    p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider",
        t.style[this.originSide] = 0,
        this.slider = t
    }
    ,
    p._filterFindCellElements = function(t) {
        return s.filterFindElements(t, this.options.cellSelector)
    }
    ,
    p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize()
    }
    ,
    p._makeCells = function(t) {
        return this._filterFindCellElements(t).map(function(t) {
            return new n(t,this)
        }, this)
    }
    ,
    p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }
    ,
    p.positionCells = function() {
        this._sizeCells(this.cells),
        this._positionCells(0)
    }
    ,
    p._positionCells = function(t) {
        this.maxCellHeight = (t = t || 0) && this.maxCellHeight || 0;
        var e, n = 0;
        0 < t && (n = (e = this.cells[t - 1]).x + e.size.outerWidth);
        for (var i = this.cells.length, r = t; r < i; r++) {
            var o = this.cells[r];
            o.setPosition(n),
            n += o.size.outerWidth,
            this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = n,
        this.updateSlides(),
        this._containSlides(),
        this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0
    }
    ,
    p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    }
    ,
    p.updateSlides = function() {
        var i, r, o;
        this.slides = [],
        this.cells.length && (i = new a(this),
        this.slides.push(i),
        r = "left" == this.originSide ? "marginRight" : "marginLeft",
        o = this._getCanCellFit(),
        this.cells.forEach(function(t, e) {
            var n;
            i.cells.length && (n = i.outerWidth - i.firstMargin + (t.size.outerWidth - t.size[r]),
            o.call(this, e, n) || (i.updateTarget(),
            i = new a(this),
            this.slides.push(i))),
            i.addCell(t)
        }, this),
        i.updateTarget(),
        this.updateSelectedSlide())
    }
    ,
    p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
            return function() {
                return !1
            }
            ;
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0
            }
        }
        var t = "string" == typeof t && t.match(/^(\d+)%$/)
          , n = t ? parseInt(t[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    }
    ,
    p._init = p.reposition = function() {
        this.positionCells(),
        this.positionSliderAtSelected()
    }
    ,
    p.getSize = function() {
        this.size = e(this.element),
        this.setCellAlign(),
        this.cursorPosition = this.size.innerWidth * this.cellAlign
    }
    ;
    var m = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = m[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }
    ,
    p.setGallerySize = function() {
        var t;
        this.options.setGallerySize && (t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight,
        this.viewport.style.height = t + "px")
    }
    ,
    p._getWrapShiftCells = function() {
        var t, e;
        this.options.wrapAround && (this._unshiftCells(this.beforeShiftCells),
        this._unshiftCells(this.afterShiftCells),
        t = this.cursorPosition,
        e = this.cells.length - 1,
        this.beforeShiftCells = this._getGapCells(t, e, -1),
        t = this.size.innerWidth - this.cursorPosition,
        this.afterShiftCells = this._getGapCells(t, 0, 1))
    }
    ,
    p._getGapCells = function(t, e, n) {
        for (var i = []; 0 < t; ) {
            var r = this.cells[e];
            if (!r)
                break;
            i.push(r),
            e += n,
            t -= r.size.outerWidth
        }
        return i
    }
    ,
    p._containSlides = function() {
        var t, e, n, i, r, o;
        this.options.contain && !this.options.wrapAround && this.cells.length && (t = (e = this.options.rightToLeft) ? "marginRight" : "marginLeft",
        e = e ? "marginLeft" : "marginRight",
        n = this.slideableWidth - this.getLastCell().size[e],
        i = n < this.size.innerWidth,
        r = this.cursorPosition + this.cells[0].size[t],
        o = n - this.size.innerWidth * (1 - this.cellAlign),
        this.slides.forEach(function(t) {
            i ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, r),
            t.target = Math.min(t.target, o))
        }, this))
    }
    ,
    p.dispatchEvent = function(t, e, n) {
        var i = e ? [e].concat(n) : n;
        this.emitEvent(t, i),
        o && this.$element && (i = t += this.options.namespaceJQueryEvents ? ".flickity" : "",
        e && ((e = new o.Event(e)).type = t,
        i = e),
        this.$element.trigger(i, n))
    }
    ,
    p.select = function(t, e, n) {
        this.isActive && (t = parseInt(t, 10),
        this._wrapSelect(t),
        (this.options.wrapAround || e) && (t = s.modulo(t, this.slides.length)),
        this.slides[t] && (e = this.selectedIndex,
        this.selectedIndex = t,
        this.updateSelectedSlide(),
        n ? this.positionSliderAtSelected() : this.startAnimation(),
        this.options.adaptiveHeight && this.setGallerySize(),
        this.dispatchEvent("select", null, [t]),
        t != e && this.dispatchEvent("change", null, [t]),
        this.dispatchEvent("cellSelect")))
    }
    ,
    p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e))
            return t;
        var n = s.modulo(t, e)
          , i = Math.abs(n - this.selectedIndex)
          , r = Math.abs(n + e - this.selectedIndex)
          , n = Math.abs(n - e - this.selectedIndex);
        !this.isDragSelect && r < i ? t += e : !this.isDragSelect && n < i && (t -= e),
        t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
    }
    ,
    p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }
    ,
    p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }
    ,
    p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(),
        (this.selectedSlide = t).select(),
        this.selectedCells = t.cells,
        this.selectedElements = t.getCellElements(),
        this.selectedCell = t.cells[0],
        this.selectedElement = this.selectedElements[0])
    }
    ,
    p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }
    ,
    p.selectInitialIndex = function() {
        var t = this.options.initialIndex;
        if (this.isInitActivated)
            this.select(this.selectedIndex, !1, !0);
        else {
            if (t && "string" == typeof t)
                if (this.queryCell(t))
                    return void this.selectCell(t, !1, !0);
            var e = 0;
            t && this.slides[t] && (e = t),
            this.select(e, !1, !0)
        }
    }
    ,
    p.selectCell = function(t, e, n) {
        t = this.queryCell(t);
        t && (t = this.getCellSlideIndex(t),
        this.select(t, e, n))
    }
    ,
    p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++)
            if (-1 != this.slides[e].cells.indexOf(t))
                return e
    }
    ,
    p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var n = this.cells[e];
            if (n.element == t)
                return n
        }
    }
    ,
    p.getCells = function(t) {
        t = s.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            t = this.getCell(t);
            t && e.push(t)
        }, this),
        e
    }
    ,
    p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e || (t = s.getParent(t, ".flickity-slider > *"),
        this.getCell(t))
    }
    ,
    p.getAdjacentCellElements = function(t, e) {
        if (!t)
            return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var n = this.slides.length;
        if (n <= 1 + 2 * t)
            return this.getCellElements();
        for (var i = [], r = e - t; r <= e + t; r++) {
            var o = this.options.wrapAround ? s.modulo(r, n) : r
              , o = this.slides[o];
            o && (i = i.concat(o.getCellElements()))
        }
        return i
    }
    ,
    p.queryCell = function(t) {
        if ("number" == typeof t)
            return this.cells[t];
        if ("string" == typeof t) {
            if (t.match(/^[#.]?[\d/]/))
                return;
            t = this.element.querySelector(t)
        }
        return this.getCell(t)
    }
    ,
    p.uiChange = function() {
        this.emitEvent("uiChange")
    }
    ,
    p.childUIPointerDown = function(t) {
        "touchstart" != t.type && t.preventDefault(),
        this.focus()
    }
    ,
    p.onresize = function() {
        this.watchCSS(),
        this.resize()
    }
    ,
    s.debounceMethod(f, "onresize", 150),
    p.resize = function() {
        var t;
        this.isActive && (this.getSize(),
        this.options.wrapAround && (this.x = s.modulo(this.x, this.slideableWidth)),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize(),
        this.emitEvent("resize"),
        t = this.selectedElements && this.selectedElements[0],
        this.selectCell(t, !1, !0))
    }
    ,
    p.watchCSS = function() {
        this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }
    ,
    p.onkeydown = function(t) {
        var e = document.activeElement && document.activeElement != this.element;
        !this.options.accessibility || e || (t = f.keyboardHandlers[t.keyCode]) && t.call(this)
    }
    ,
    f.keyboardHandlers = {
        37: function() {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(),
            this[t]()
        },
        39: function() {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(),
            this[t]()
        }
    },
    p.focus = function() {
        var t = i.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }),
        i.pageYOffset != t && i.scrollTo(i.pageXOffset, t)
    }
    ,
    p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"),
        this.element.classList.remove("flickity-rtl"),
        this.unselectSelectedSlide(),
        this.cells.forEach(function(t) {
            t.destroy()
        }),
        this.element.removeChild(this.viewport),
        c(this.slider.children, this.element),
        this.options.accessibility && (this.element.removeAttribute("tabIndex"),
        this.element.removeEventListener("keydown", this)),
        this.isActive = !1,
        this.emitEvent("deactivate"))
    }
    ,
    p.destroy = function() {
        this.deactivate(),
        i.removeEventListener("resize", this),
        this.allOff(),
        this.emitEvent("destroy"),
        o && this.$element && o.removeData(this.element, "flickity"),
        delete this.element.flickityGUID,
        delete h[this.guid]
    }
    ,
    s.extend(p, r),
    f.data = function(t) {
        t = (t = s.getQueryElement(t)) && t.flickityGUID;
        return t && h[t]
    }
    ,
    s.htmlInit(f, "flickity"),
    o && o.bridget && o.bridget("flickity", f),
    f.setJQuery = function(t) {
        o = t
    }
    ,
    f.Cell = n,
    f.Slide = a,
    f
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter")) : e.Unipointer = n(e, e.EvEmitter)
}(window, function(i, t) {
    function e() {}
    t = e.prototype = Object.create(t.prototype);
    t.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }
    ,
    t.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }
    ,
    t._bindStartEvent = function(t, e) {
        var n = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener"
          , e = "mousedown";
        i.PointerEvent ? e = "pointerdown" : "ontouchstart"in i && (e = "touchstart"),
        t[n](e, this)
    }
    ,
    t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    t.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (n.identifier == this.pointerIdentifier)
                return n
        }
    }
    ,
    t.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }
    ,
    t.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }
    ,
    t.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }
    ,
    t._pointerDown = function(t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0,
        this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
        this.pointerDown(t, e))
    }
    ,
    t.pointerDown = function(t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ;
    var n = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return t._bindPostStartEvents = function(t) {
        t && ((t = n[t.type]).forEach(function(t) {
            i.addEventListener(t, this)
        }, this),
        this._boundPointerEvents = t)
    }
    ,
    t._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
            i.removeEventListener(t, this)
        }, this),
        delete this._boundPointerEvents)
    }
    ,
    t.onmousemove = function(t) {
        this._pointerMove(t, t)
    }
    ,
    t.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }
    ,
    t.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }
    ,
    t._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }
    ,
    t.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }
    ,
    t.onmouseup = function(t) {
        this._pointerUp(t, t)
    }
    ,
    t.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }
    ,
    t.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }
    ,
    t._pointerUp = function(t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    }
    ,
    t.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }
    ,
    t._pointerDone = function() {
        this._pointerReset(),
        this._unbindPostStartEvents(),
        this.pointerDone()
    }
    ,
    t._pointerReset = function() {
        this.isPointerDown = !1,
        delete this.pointerIdentifier
    }
    ,
    t.pointerDone = function() {}
    ,
    t.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }
    ,
    t.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }
    ,
    t._pointerCancel = function(t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    }
    ,
    t.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }
    ,
    e.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }
    ,
    e
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("unipointer")) : e.Unidragger = n(e, e.Unipointer)
}(window, function(o, t) {
    function e() {}
    var n = e.prototype = Object.create(t.prototype);
    n.bindHandles = function() {
        this._bindHandles(!0)
    }
    ,
    n.unbindHandles = function() {
        this._bindHandles(!1)
    }
    ,
    n._bindHandles = function(t) {
        for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", n = t ? this._touchActionValue : "", i = 0; i < this.handles.length; i++) {
            var r = this.handles[i];
            this._bindStartEvent(r, t),
            r[e]("click", this),
            o.PointerEvent && (r.style.touchAction = n)
        }
    }
    ,
    n._touchActionValue = "none",
    n.pointerDown = function(t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        },
        t.preventDefault(),
        this.pointerDownBlur(),
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e]))
    }
    ;
    var i = {
        TEXTAREA: !0,
        INPUT: !0,
        SELECT: !0,
        OPTION: !0
    }
      , r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    return n.okayPointerDown = function(t) {
        var e = i[t.target.nodeName]
          , t = r[t.target.type]
          , t = !e || t;
        return t || this._pointerReset(),
        t
    }
    ,
    n.pointerDownBlur = function() {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur()
    }
    ,
    n.pointerMove = function(t, e) {
        var n = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, n]),
        this._dragMove(t, e, n)
    }
    ,
    n._dragPointerMove = function(t, e) {
        var n = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e),
        n
    }
    ,
    n.hasDragStarted = function(t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
    }
    ,
    n.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]),
        this._dragPointerUp(t, e)
    }
    ,
    n._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }
    ,
    n._dragStart = function(t, e) {
        this.isDragging = !0,
        this.isPreventingClicks = !0,
        this.dragStart(t, e)
    }
    ,
    n.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }
    ,
    n._dragMove = function(t, e, n) {
        this.isDragging && this.dragMove(t, e, n)
    }
    ,
    n.dragMove = function(t, e, n) {
        t.preventDefault(),
        this.emitEvent("dragMove", [t, e, n])
    }
    ,
    n._dragEnd = function(t, e) {
        this.isDragging = !1,
        setTimeout(function() {
            delete this.isPreventingClicks
        }
        .bind(this)),
        this.dragEnd(t, e)
    }
    ,
    n.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }
    ,
    n.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }
    ,
    n._staticClick = function(t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e),
        "mouseup" != t.type && (this.isIgnoringMouseUp = !0,
        setTimeout(function() {
            delete this.isIgnoringMouseUp
        }
        .bind(this), 400)))
    }
    ,
    n.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }
    ,
    e.getPointerPoint = t.getPointerPoint,
    e
}),
function(i, r) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(t, e, n) {
        return r(i, t, e, n)
    }) : "object" == typeof module && module.exports ? module.exports = r(i, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : i.Flickity = r(i, i.Flickity, i.Unidragger, i.fizzyUIUtils)
}(window, function(n, t, e, o) {
    o.extend(t.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }),
    t.createMethods.push("_createDrag");
    var i = t.prototype;
    o.extend(i, e.prototype),
    i._touchActionValue = "pan-y";
    var r = "createTouch"in document
      , s = !1;
    i._createDrag = function() {
        this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        r && !s && (n.addEventListener("touchmove", function() {}),
        s = !0)
    }
    ,
    i.onActivateDrag = function() {
        this.handles = [this.viewport],
        this.bindHandles(),
        this.updateDraggable()
    }
    ,
    i.onDeactivateDrag = function() {
        this.unbindHandles(),
        this.element.classList.remove("is-draggable")
    }
    ,
    i.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable,
        this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    }
    ,
    i.bindDrag = function() {
        this.options.draggable = !0,
        this.updateDraggable()
    }
    ,
    i.unbindDrag = function() {
        this.options.draggable = !1,
        this.updateDraggable()
    }
    ,
    i._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }
    ,
    i.pointerDown = function(t, e) {
        this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t),
        this.pointerDownFocus(t),
        document.activeElement != this.element && this.pointerDownBlur(),
        this.dragX = this.x,
        this.viewport.classList.add("is-pointer-down"),
        this.pointerDownScroll = l(),
        n.addEventListener("scroll", this),
        this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e)
    }
    ,
    i._pointerDownDefault = function(t, e) {
        this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        },
        this._bindPostStartEvents(t),
        this.dispatchEvent("pointerDown", t, [e])
    }
    ;
    var a = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };
    function l() {
        return {
            x: n.pageXOffset,
            y: n.pageYOffset
        }
    }
    return i.pointerDownFocus = function(t) {
        a[t.target.nodeName] || this.focus()
    }
    ,
    i._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type
          , n = "touch" == t.pointerType
          , i = a[t.target.nodeName];
        e || n || i || t.preventDefault()
    }
    ,
    i.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }
    ,
    i.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
        this.viewport.classList.remove("is-pointer-down"),
        this.dispatchEvent("pointerUp", t, [e]),
        this._dragPointerUp(t, e)
    }
    ,
    i.pointerDone = function() {
        n.removeEventListener("scroll", this),
        delete this.pointerDownScroll
    }
    ,
    i.dragStart = function(t, e) {
        this.isDraggable && (this.dragStartPosition = this.x,
        this.startAnimation(),
        n.removeEventListener("scroll", this),
        this.dispatchEvent("dragStart", t, [e]))
    }
    ,
    i.pointerMove = function(t, e) {
        var n = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, n]),
        this._dragMove(t, e, n)
    }
    ,
    i.dragMove = function(t, e, n) {
        var i, r;
        this.isDraggable && (t.preventDefault(),
        this.previousDragX = this.dragX,
        r = this.options.rightToLeft ? -1 : 1,
        this.options.wrapAround && (n.x %= this.slideableWidth),
        i = this.dragStartPosition + n.x * r,
        !this.options.wrapAround && this.slides.length && (i = (i = (r = Math.max(-this.slides[0].target, this.dragStartPosition)) < i ? .5 * (i + r) : i) < (r = Math.min(-this.getLastSlide().target, this.dragStartPosition)) ? .5 * (i + r) : i),
        this.dragX = i,
        this.dragMoveTime = new Date,
        this.dispatchEvent("dragMove", t, [e, n]))
    }
    ,
    i.dragEnd = function(t, e) {
        var n, i;
        this.isDraggable && (this.options.freeScroll && (this.isFreeScrolling = !0),
        n = this.dragEndRestingSelect(),
        this.options.freeScroll && !this.options.wrapAround ? (i = this.getRestingPosition(),
        this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target) : this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect()),
        delete this.previousDragX,
        this.isDragSelect = this.options.wrapAround,
        this.select(n),
        delete this.isDragSelect,
        this.dispatchEvent("dragEnd", t, [e]))
    }
    ,
    i.dragEndRestingSelect = function() {
        var t = this.getRestingPosition()
          , e = Math.abs(this.getSlideDistance(-t, this.selectedIndex))
          , n = this._getClosestResting(t, e, 1)
          , e = this._getClosestResting(t, e, -1);
        return (n.distance < e.distance ? n : e).index
    }
    ,
    i._getClosestResting = function(t, e, n) {
        for (var i = this.selectedIndex, r = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
            return t <= e
        }
        : function(t, e) {
            return t < e
        }
        ; o(e, r) && (r = e,
        null !== (e = this.getSlideDistance(-t, i += n))); )
            e = Math.abs(e);
        return {
            distance: r,
            index: i - n
        }
    }
    ,
    i.getSlideDistance = function(t, e) {
        var n = this.slides.length
          , i = this.options.wrapAround && 1 < n
          , r = i ? o.modulo(e, n) : e
          , r = this.slides[r];
        if (!r)
            return null;
        n = i ? this.slideableWidth * Math.floor(e / n) : 0;
        return t - (r.target + n)
    }
    ,
    i.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime)
            return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex)
          , e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
    }
    ,
    i.staticClick = function(t, e) {
        var n = this.getParentCell(t.target)
          , i = n && n.element
          , n = n && this.cells.indexOf(n);
        this.dispatchEvent("staticClick", t, [e, i, n])
    }
    ,
    i.onscroll = function() {
        var t = l()
          , e = this.pointerDownScroll.x - t.x
          , t = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(t)) && this._pointerDone()
    }
    ,
    t
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, n) {
        return i(0, t, e, n)
    }) : "object" == typeof module && module.exports ? module.exports = i(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : i(0, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, n, i) {
    "use strict";
    var r = "http://www.w3.org/2000/svg";
    function o(t, e) {
        this.direction = t,
        this.parent = e,
        this._create()
    }
    (o.prototype = Object.create(n.prototype))._create = function() {
        this.isEnabled = !0,
        this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button",
        e.className += this.isPrevious ? " previous" : " next",
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        t = this.createSVG();
        e.appendChild(t),
        this.parent.on("select", this.update.bind(this)),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    o.prototype.activate = function() {
        this.bindStartEvent(this.element),
        this.element.addEventListener("click", this),
        this.parent.element.appendChild(this.element)
    }
    ,
    o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
        this.unbindStartEvent(this.element),
        this.element.removeEventListener("click", this)
    }
    ,
    o.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("class", "flickity-button-icon"),
        t.setAttribute("viewBox", "0 0 100 100");
        var e, n = document.createElementNS(r, "path"), e = "string" != typeof (e = this.parent.options.arrowShape) ? "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z" : e;
        return n.setAttribute("d", e),
        n.setAttribute("class", "arrow"),
        this.isLeft || n.setAttribute("transform", "translate(100, 100) rotate(180) "),
        t.appendChild(n),
        t
    }
    ,
    o.prototype.handleEvent = i.handleEvent,
    o.prototype.onclick = function() {
        var t;
        this.isEnabled && (this.parent.uiChange(),
        t = this.isPrevious ? "previous" : "next",
        this.parent[t]())
    }
    ,
    o.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1,
        this.isEnabled = !0)
    }
    ,
    o.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0,
        this.isEnabled = !1)
    }
    ,
    o.prototype.update = function() {
        var t = this.parent.slides;
        this.parent.options.wrapAround && 1 < t.length ? this.enable() : (t = t.length ? t.length - 1 : 0,
        t = this.isPrevious ? 0 : t,
        this[this.parent.selectedIndex == t ? "disable" : "enable"]())
    }
    ,
    o.prototype.destroy = function() {
        this.deactivate(),
        this.allOff()
    }
    ,
    i.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }),
    e.createMethods.push("_createPrevNextButtons");
    i = e.prototype;
    return i._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new o(-1,this),
        this.nextButton = new o(1,this),
        this.on("activate", this.activatePrevNextButtons))
    }
    ,
    i.activatePrevNextButtons = function() {
        this.prevButton.activate(),
        this.nextButton.activate(),
        this.on("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    i.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
        this.nextButton.deactivate(),
        this.off("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    e.PrevNextButton = o,
    e
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, n) {
        return i(0, t, e, n)
    }) : "object" == typeof module && module.exports ? module.exports = i(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : i(0, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, n, i) {
    function r(t) {
        this.parent = t,
        this._create()
    }
    (r.prototype = Object.create(n.prototype))._create = function() {
        this.holder = document.createElement("ol"),
        this.holder.className = "flickity-page-dots",
        this.dots = [],
        this.handleClick = this.onClick.bind(this),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    r.prototype.activate = function() {
        this.setDots(),
        this.holder.addEventListener("click", this.handleClick),
        this.bindStartEvent(this.holder),
        this.parent.element.appendChild(this.holder)
    }
    ,
    r.prototype.deactivate = function() {
        this.holder.removeEventListener("click", this.handleClick),
        this.unbindStartEvent(this.holder),
        this.parent.element.removeChild(this.holder)
    }
    ,
    r.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }
    ,
    r.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), n = [], i = this.dots.length, r = i + t, o = i; o < r; o++) {
            var s = document.createElement("li");
            s.className = "dot",
            s.setAttribute("aria-label", "Page dot " + (o + 1)),
            e.appendChild(s),
            n.push(s)
        }
        this.holder.appendChild(e),
        this.dots = this.dots.concat(n)
    }
    ,
    r.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    }
    ,
    r.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot",
        this.selectedDot.removeAttribute("aria-current")),
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
        this.selectedDot.className = "dot is-selected",
        this.selectedDot.setAttribute("aria-current", "step"))
    }
    ,
    r.prototype.onTap = r.prototype.onClick = function(t) {
        t = t.target;
        "LI" == t.nodeName && (this.parent.uiChange(),
        t = this.dots.indexOf(t),
        this.parent.select(t))
    }
    ,
    r.prototype.destroy = function() {
        this.deactivate(),
        this.allOff()
    }
    ,
    e.PageDots = r,
    i.extend(e.defaults, {
        pageDots: !0
    }),
    e.createMethods.push("_createPageDots");
    i = e.prototype;
    return i._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new r(this),
        this.on("activate", this.activatePageDots),
        this.on("select", this.updateSelectedPageDots),
        this.on("cellChange", this.updatePageDots),
        this.on("resize", this.updatePageDots),
        this.on("deactivate", this.deactivatePageDots))
    }
    ,
    i.activatePageDots = function() {
        this.pageDots.activate()
    }
    ,
    i.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }
    ,
    i.updatePageDots = function() {
        this.pageDots.setDots()
    }
    ,
    i.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }
    ,
    e.PageDots = r,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, n) {
    function i(t) {
        this.parent = t,
        this.state = "stopped",
        this.onVisibilityChange = this.visibilityChange.bind(this),
        this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }
    (i.prototype = Object.create(t.prototype)).play = function() {
        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing",
        document.addEventListener("visibilitychange", this.onVisibilityChange),
        this.tick()))
    }
    ,
    i.prototype.tick = function() {
        var t, e;
        "playing" == this.state && (t = "number" == typeof (t = this.parent.options.autoPlay) ? t : 3e3,
        (e = this).clear(),
        this.timeout = setTimeout(function() {
            e.parent.next(!0),
            e.tick()
        }, t))
    }
    ,
    i.prototype.stop = function() {
        this.state = "stopped",
        this.clear(),
        document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }
    ,
    i.prototype.clear = function() {
        clearTimeout(this.timeout)
    }
    ,
    i.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused",
        this.clear())
    }
    ,
    i.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }
    ,
    i.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]()
    }
    ,
    i.prototype.visibilityPlay = function() {
        this.play(),
        document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }
    ,
    e.extend(n.defaults, {
        pauseAutoPlayOnHover: !0
    }),
    n.createMethods.push("_createPlayer");
    e = n.prototype;
    return e._createPlayer = function() {
        this.player = new i(this),
        this.on("activate", this.activatePlayer),
        this.on("uiChange", this.stopPlayer),
        this.on("pointerDown", this.stopPlayer),
        this.on("deactivate", this.deactivatePlayer)
    }
    ,
    e.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(),
        this.element.addEventListener("mouseenter", this))
    }
    ,
    e.playPlayer = function() {
        this.player.play()
    }
    ,
    e.stopPlayer = function() {
        this.player.stop()
    }
    ,
    e.pausePlayer = function() {
        this.player.pause()
    }
    ,
    e.unpausePlayer = function() {
        this.player.unpause()
    }
    ,
    e.deactivatePlayer = function() {
        this.player.stop(),
        this.element.removeEventListener("mouseenter", this)
    }
    ,
    e.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(),
        this.element.addEventListener("mouseleave", this))
    }
    ,
    e.onmouseleave = function() {
        this.player.unpause(),
        this.element.removeEventListener("mouseleave", this)
    }
    ,
    n.Player = i,
    n
}),
function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(0, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(0, require("./flickity"), require("fizzy-ui-utils")) : n(0, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = e.prototype;
    return n.insert = function(t, e) {
        var n, i, r, o, s = this._makeCells(t);
        s && s.length && (o = this.cells.length,
        e = void 0 === e ? o : e,
        r = s,
        i = document.createDocumentFragment(),
        r.forEach(function(t) {
            i.appendChild(t.element)
        }),
        n = i,
        (t = e == o) ? this.slider.appendChild(n) : (r = this.cells[e].element,
        this.slider.insertBefore(n, r)),
        0 === e ? this.cells = s.concat(this.cells) : t ? this.cells = this.cells.concat(s) : (o = this.cells.splice(e, o - e),
        this.cells = this.cells.concat(s).concat(o)),
        this._sizeCells(s),
        this.cellChange(e, !0))
    }
    ,
    n.append = function(t) {
        this.insert(t, this.cells.length)
    }
    ,
    n.prepend = function(t) {
        this.insert(t, 0)
    }
    ,
    n.remove = function(t) {
        var n, t = this.getCells(t);
        t && t.length && (n = this.cells.length - 1,
        t.forEach(function(t) {
            t.remove();
            var e = this.cells.indexOf(t);
            n = Math.min(e, n),
            i.removeFrom(this.cells, t)
        }, this),
        this.cellChange(n, !0))
    }
    ,
    n.cellSizeChange = function(t) {
        t = this.getCell(t);
        t && (t.getSize(),
        t = this.cells.indexOf(t),
        this.cellChange(t))
    }
    ,
    n.cellChange = function(t, e) {
        var n = this.selectedElement;
        this._positionCells(t),
        this._getWrapShiftCells(),
        this.setGallerySize();
        n = this.getCell(n);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
        this.emitEvent("cellChange", [t]),
        this.select(this.selectedIndex),
        e && this.positionSliderAtSelected()
    }
    ,
    e
}),
function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(0, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(0, require("./flickity"), require("fizzy-ui-utils")) : n(0, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, r) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var n = e.prototype;
    function i(t, e) {
        this.img = t,
        this.flickity = e,
        this.load()
    }
    return n._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }
    ,
    n.lazyLoad = function() {
        var e, t = this.options.lazyLoad;
        t && (t = this.getAdjacentCellElements("number" == typeof t ? t : 0),
        e = [],
        t.forEach(function(t) {
            t = function(t) {
                if ("IMG" == t.nodeName) {
                    var e = t.getAttribute("data-flickity-lazyload")
                      , n = t.getAttribute("data-flickity-lazyload-src")
                      , i = t.getAttribute("data-flickity-lazyload-srcset");
                    if (e || n || i)
                        return [t]
                }
                t = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                return r.makeArray(t)
            }(t);
            e = e.concat(t)
        }),
        e.forEach(function(t) {
            new i(t,this)
        }, this))
    }
    ,
    i.prototype.handleEvent = r.handleEvent,
    i.prototype.load = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src")
          , e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t,
        e && this.img.setAttribute("srcset", e),
        this.img.removeAttribute("data-flickity-lazyload"),
        this.img.removeAttribute("data-flickity-lazyload-src"),
        this.img.removeAttribute("data-flickity-lazyload-srcset")
    }
    ,
    i.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }
    ,
    i.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }
    ,
    i.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
        var n = this.flickity.getParentCell(this.img)
          , n = n && n.element;
        this.flickity.cellSizeChange(n),
        this.img.classList.add(e),
        this.flickity.dispatchEvent("lazyLoad", t, n)
    }
    ,
    e.LazyLoader = i,
    e
}),
function(t) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == typeof module && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}((window,
function(t) {
    return t
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(n, i) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return t._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor),
        this.on("deactivate", this.deactivateAsNavFor),
        this.on("destroy", this.destroyAsNavFor);
        var t, e = this.options.asNavFor;
        e && (t = this,
        setTimeout(function() {
            t.setNavCompanion(e)
        }))
    }
    ,
    t.setNavCompanion = function(t) {
        t = i.getQueryElement(t);
        var e, t = n.data(t);
        t && t != this && (this.navCompanion = t,
        (e = this).onNavCompanionSelect = function() {
            e.navCompanionSelect()
        }
        ,
        t.on("select", this.onNavCompanionSelect),
        this.on("staticClick", this.onNavStaticClick),
        this.navCompanionSelect(!0))
    }
    ,
    t.navCompanionSelect = function(t) {
        var e, n, i = this.navCompanion && this.navCompanion.selectedCells;
        i && (n = i[0],
        e = this.navCompanion.cells.indexOf(n),
        n = e + i.length - 1,
        i = Math.floor((i = this.navCompanion.cellAlign,
        (n - e) * i + e)),
        this.selectCell(i, !1, t),
        this.removeNavSelectedElements(),
        i >= this.cells.length || (n = this.cells.slice(e, 1 + n),
        this.navSelectedElements = n.map(function(t) {
            return t.element
        }),
        this.changeNavSelectedClass("add")))
    }
    ,
    t.changeNavSelectedClass = function(e) {
        this.navSelectedElements.forEach(function(t) {
            t.classList[e]("is-nav-selected")
        })
    }
    ,
    t.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }
    ,
    t.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"),
        delete this.navSelectedElements)
    }
    ,
    t.onNavStaticClick = function(t, e, n, i) {
        "number" == typeof i && this.navCompanion.selectCell(i)
    }
    ,
    t.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }
    ,
    t.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect),
        this.off("staticClick", this.onNavStaticClick),
        delete this.navCompanion)
    }
    ,
    n
}),
function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter")) : e.imagesLoaded = n(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    var o = e.jQuery
      , s = e.console;
    function a(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    var l = Array.prototype.slice;
    function u(t, e, n) {
        if (!(this instanceof u))
            return new u(t,e,n);
        var i, r = t;
        (r = "string" == typeof t ? document.querySelectorAll(t) : r) ? (this.elements = (i = r,
        Array.isArray(i) ? i : "object" == typeof i && "number" == typeof i.length ? l.call(i) : [i]),
        this.options = a({}, this.options),
        "function" == typeof e ? n = e : a(this.options, e),
        n && this.on("always", n),
        this.getImages(),
        o && (this.jqDeferred = new o.Deferred),
        setTimeout(this.check.bind(this))) : s.error("Bad element for imagesLoaded " + (r || t))
    }
    (u.prototype = Object.create(t.prototype)).options = {},
    u.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    u.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var r = n[i];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background)
                for (var o = t.querySelectorAll(this.options.background), i = 0; i < o.length; i++) {
                    var s = o[i];
                    this.addElementBackgroundImages(s)
                }
        }
    }
    ;
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    function n(t) {
        this.img = t
    }
    function i(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    return u.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i; ) {
                var r = i && i[2];
                r && this.addBackground(r, t),
                i = n.exec(e.backgroundImage)
            }
    }
    ,
    u.prototype.addImage = function(t) {
        t = new n(t);
        this.images.push(t)
    }
    ,
    u.prototype.addBackground = function(t, e) {
        e = new i(t,e);
        this.images.push(e)
    }
    ,
    u.prototype.check = function() {
        var i = this;
        function e(t, e, n) {
            setTimeout(function() {
                i.progress(t, e, n)
            })
        }
        this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : this.complete()
    }
    ,
    u.prototype.progress = function(t, e, n) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && s && s.log("progress: " + n, t, e)
    }
    ,
    u.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred && (t = this.hasAnyBroken ? "reject" : "resolve",
        this.jqDeferred[t](this))
    }
    ,
    (n.prototype = Object.create(t.prototype)).check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.proxyImage.src = this.img.src)
    }
    ,
    n.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    n.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    n.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    n.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    n.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    n.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    (i.prototype = Object.create(n.prototype)).check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    i.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    i.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    (u.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((o = t).fn.imagesLoaded = function(t, e) {
            return new u(this,t,e).jqDeferred.promise(o(this))
        }
        )
    }
    )(),
    u
}),
function(t, n) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
        return n(0, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(0, require("flickity"), require("imagesloaded")) : t.Flickity = n(0, t.Flickity, t.imagesLoaded)
}(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }
    ,
    n.imagesLoaded = function() {
        var n;
        this.options.imagesLoaded && i((n = this).slider).on("progress", function(t, e) {
            e = n.getParentCell(e.img),
            n.cellSizeChange(e && e.element),
            n.options.freeScroll || n.positionSliderAtSelected()
        })
    }
    ,
    e
}),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
}(this, function() {
    return i = [function(t, e, n) {
        "use strict";
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r() {
            p = (0,
            f.default)(),
            v()
        }
        var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n, i = arguments[e];
                for (n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , s = (i(n(1)),
        n(6))
          , a = i(s)
          , l = i(n(7))
          , u = i(n(8))
          , c = i(n(9))
          , d = i(n(10))
          , h = i(n(11))
          , f = i(n(14))
          , p = []
          , m = !1
          , g = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
        }
          , v = function() {
            if (m = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? !0 : m)
                return p = (0,
                h.default)(p, g),
                (0,
                d.default)(p, g.once),
                p
        };
        t.exports = {
            init: function(t) {
                g = o(g, t),
                p = (0,
                f.default)();
                var e = document.all && !window.atob;
                return !0 === (t = g.disable) || "mobile" === t && c.default.mobile() || "phone" === t && c.default.phone() || "tablet" === t && c.default.tablet() || "function" == typeof t && !0 === t() || e ? void p.forEach(function(t, e) {
                    t.node.removeAttribute("data-aos"),
                    t.node.removeAttribute("data-aos-easing"),
                    t.node.removeAttribute("data-aos-duration"),
                    t.node.removeAttribute("data-aos-delay")
                }) : (g.disableMutationObserver || u.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                g.disableMutationObserver = !0),
                document.querySelector("body").setAttribute("data-aos-easing", g.easing),
                document.querySelector("body").setAttribute("data-aos-duration", g.duration),
                document.querySelector("body").setAttribute("data-aos-delay", g.delay),
                "DOMContentLoaded" === g.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? v(!0) : ("load" === g.startEvent ? window : document).addEventListener(g.startEvent, function() {
                    v(!0)
                }),
                window.addEventListener("resize", (0,
                l.default)(v, g.debounceDelay, !0)),
                window.addEventListener("orientationchange", (0,
                l.default)(v, g.debounceDelay, !0)),
                window.addEventListener("scroll", (0,
                a.default)(function() {
                    (0,
                    d.default)(p, g.once)
                }, g.throttleDelay)),
                g.disableMutationObserver || u.default.ready("[data-aos]", r),
                p)
            },
            refresh: v,
            refreshHard: r
        }
    }
    , function(t, e) {}
    , , , , , function(f, t) {
        !function(t) {
            "use strict";
            function o(i, n, t) {
                function r(t) {
                    var e = l
                      , n = u;
                    return l = u = void 0,
                    p = t,
                    d = i.apply(n, e)
                }
                function o(t) {
                    var e = t - f;
                    return void 0 === f || n <= e || e < 0 || g && c <= t - p
                }
                function s() {
                    var t, e = C();
                    return o(e) ? a(e) : void (h = setTimeout(s, (e = n - ((t = e) - f),
                    g ? x(e, c - (t - p)) : e)))
                }
                function a(t) {
                    return h = void 0,
                    v && l ? r(t) : (l = u = void 0,
                    d)
                }
                function e() {
                    var t = C()
                      , e = o(t);
                    if (l = arguments,
                    u = this,
                    f = t,
                    e) {
                        if (void 0 === h)
                            return p = e = f,
                            h = setTimeout(s, n),
                            m ? r(e) : d;
                        if (g)
                            return h = setTimeout(s, n),
                            r(f)
                    }
                    return void 0 === h && (h = setTimeout(s, n)),
                    d
                }
                var l, u, c, d, h, f, p = 0, m = !1, g = !1, v = !0;
                if ("function" != typeof i)
                    throw new TypeError(_);
                return n = b(n) || 0,
                y(t) && (m = !!t.leading,
                g = "maxWait"in t,
                c = g ? w(b(t.maxWait) || 0, n) : c,
                v = "trailing"in t ? !!t.trailing : v),
                e.cancel = function() {
                    void 0 !== h && clearTimeout(h),
                    l = f = u = h = void (p = 0)
                }
                ,
                e.flush = function() {
                    return void 0 === h ? d : a(C())
                }
                ,
                e
            }
            function y(t) {
                var e = void 0 === t ? "undefined" : i(t);
                return t && ("object" == e || "function" == e)
            }
            function n(t) {
                return "symbol" == (void 0 === t ? "undefined" : i(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : i(e)) && "[object Symbol]" == h.call(t);
                var e
            }
            function b(t) {
                if ("number" == typeof t)
                    return t;
                if (n(t))
                    return r;
                if ("string" != typeof (t = y(t) ? y(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e : t))
                    return 0 === t ? t : +t;
                t = t.replace(s, "");
                var e = l.test(t);
                return e || u.test(t) ? c(t.slice(2), e ? 2 : 8) : a.test(t) ? r : +t
            }
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , _ = "Expected a function"
              , r = NaN
              , s = /^\s+|\s+$/g
              , a = /^[-+]0x[0-9a-f]+$/i
              , l = /^0b[01]+$/i
              , u = /^0o[0-7]+$/i
              , c = parseInt
              , e = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t
              , t = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self
              , d = e || t || Function("return this")()
              , h = Object.prototype.toString
              , w = Math.max
              , x = Math.min
              , C = function() {
                return d.Date.now()
            };
            f.exports = function(t, e, n) {
                var i = !0
                  , r = !0;
                if ("function" != typeof t)
                    throw new TypeError(_);
                return y(n) && (i = "leading"in n ? !!n.leading : i,
                r = "trailing"in n ? !!n.trailing : r),
                o(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: r
                })
            }
        }
        .call(t, function() {
            return this
        }())
    }
    , function(f, t) {
        !function(t) {
            "use strict";
            function y(t) {
                var e = void 0 === t ? "undefined" : i(t);
                return t && ("object" == e || "function" == e)
            }
            function n(t) {
                return "symbol" == (void 0 === t ? "undefined" : i(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : i(e)) && h.call(t) == o;
                var e
            }
            function b(t) {
                if ("number" == typeof t)
                    return t;
                if (n(t))
                    return r;
                if ("string" != typeof (t = y(t) ? y(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e : t))
                    return 0 === t ? t : +t;
                t = t.replace(s, "");
                var e = l.test(t);
                return e || u.test(t) ? c(t.slice(2), e ? 2 : 8) : a.test(t) ? r : +t
            }
            function _() {
                return d.Date.now()
            }
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , r = NaN
              , o = "[object Symbol]"
              , s = /^\s+|\s+$/g
              , a = /^[-+]0x[0-9a-f]+$/i
              , l = /^0b[01]+$/i
              , u = /^0o[0-7]+$/i
              , c = parseInt
              , e = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t
              , t = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self
              , d = e || t || Function("return this")()
              , h = Object.prototype.toString
              , w = Math.max
              , x = Math.min;
            f.exports = function(i, n, t) {
                function r(t) {
                    var e = l
                      , n = u;
                    return l = u = void 0,
                    p = t,
                    d = i.apply(n, e)
                }
                function o(t) {
                    var e = t - f;
                    return void 0 === f || n <= e || e < 0 || g && c <= t - p
                }
                function s() {
                    var t, e = _();
                    return o(e) ? a(e) : void (h = setTimeout(s, (e = n - ((t = e) - f),
                    g ? x(e, c - (t - p)) : e)))
                }
                function a(t) {
                    return h = void 0,
                    v && l ? r(t) : (l = u = void 0,
                    d)
                }
                function e() {
                    var t = _()
                      , e = o(t);
                    if (l = arguments,
                    u = this,
                    f = t,
                    e) {
                        if (void 0 === h)
                            return p = e = f,
                            h = setTimeout(s, n),
                            m ? r(e) : d;
                        if (g)
                            return h = setTimeout(s, n),
                            r(f)
                    }
                    return void 0 === h && (h = setTimeout(s, n)),
                    d
                }
                var l, u, c, d, h, f, p = 0, m = !1, g = !1, v = !0;
                if ("function" != typeof i)
                    throw new TypeError("Expected a function");
                return n = b(n) || 0,
                y(t) && (m = !!t.leading,
                g = "maxWait"in t,
                c = g ? w(b(t.maxWait) || 0, n) : c,
                v = "trailing"in t ? !!t.trailing : v),
                e.cancel = function() {
                    void 0 !== h && clearTimeout(h),
                    l = f = u = h = void (p = 0)
                }
                ,
                e.flush = function() {
                    return void 0 === h ? d : a(_())
                }
                ,
                e
            }
        }
        .call(t, function() {
            return this
        }())
    }
    , function(t, e) {
        "use strict";
        function r() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }
        function o(t) {
            t && t.forEach(function(t) {
                var e = Array.prototype.slice.call(t.addedNodes)
                  , t = Array.prototype.slice.call(t.removedNodes);
                if (function t(e) {
                    for (var n, i = void 0, i = 0; i < e.length; i += 1) {
                        if ((n = e[i]).dataset && n.dataset.aos)
                            return !0;
                        if (n.children && t(n.children))
                            return !0
                    }
                    return !1
                }(e.concat(t)))
                    return s()
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {};
        e.default = {
            isSupported: function() {
                return !!r()
            },
            ready: function(t, e) {
                var n = window.document
                  , i = new (r())(o);
                s = e,
                i.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }
    }
    , function(t, e) {
        "use strict";
        function n() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
          , r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
          , s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , a = (function(t, e, n) {
            return e && u(t.prototype, e),
            n && u(t, n),
            t
        }(l, [{
            key: "phone",
            value: function() {
                var t = n();
                return !(!i.test(t) && !r.test(t.substr(0, 4)))
            }
        }, {
            key: "mobile",
            value: function() {
                var t = n();
                return !(!o.test(t) && !s.test(t.substr(0, 4)))
            }
        }, {
            key: "tablet",
            value: function() {
                return this.mobile() && !this.phone()
            }
        }]),
        l);
        function l() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l)
        }
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        e.default = new a
    }
    , function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t, o) {
            var s = window.pageYOffset
              , a = window.innerHeight;
            t.forEach(function(t, e) {
                var n, i, r;
                i = a + s,
                r = o,
                t = (n = t).node.getAttribute("data-aos-once"),
                i > n.position ? n.node.classList.add("aos-animate") : void 0 === t || "false" !== t && (r || "true" === t) || n.node.classList.remove("aos-animate")
            })
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(12), o = (i = r) && i.__esModule ? i : {
            default: i
        };
        e.default = function(t, n) {
            return t.forEach(function(t, e) {
                t.node.classList.add("aos-init"),
                t.position = (0,
                o.default)(t.node, n.offset)
            }),
            t
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(13), s = (i = r) && i.__esModule ? i : {
            default: i
        };
        e.default = function(t, e) {
            var n = 0
              , i = 0
              , r = window.innerHeight
              , o = {
                offset: t.getAttribute("data-aos-offset"),
                anchor: t.getAttribute("data-aos-anchor"),
                anchorPlacement: t.getAttribute("data-aos-anchor-placement")
            };
            switch (o.offset && !isNaN(o.offset) && (i = parseInt(o.offset)),
            o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]),
            n = (0,
            s.default)(t).top,
            o.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                n += t.offsetHeight / 2;
                break;
            case "bottom-bottom":
                n += t.offsetHeight;
                break;
            case "top-center":
                n += r / 2;
                break;
            case "bottom-center":
                n += r / 2 + t.offsetHeight;
                break;
            case "center-center":
                n += r / 2 + t.offsetHeight / 2;
                break;
            case "top-top":
                n += r;
                break;
            case "bottom-top":
                n += t.offsetHeight + r;
                break;
            case "center-top":
                n += t.offsetHeight / 2 + r
            }
            return n + (i = !(o.anchorPlacement || o.offset || isNaN(e)) ? e : i)
        }
    }
    , function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t) {
            for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
                e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0),
                n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0),
                t = t.offsetParent;
            return {
                top: n,
                left: e
            }
        }
    }
    , function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t) {
            return t = t || document.querySelectorAll("[data-aos]"),
            Array.prototype.map.call(t, function(t) {
                return {
                    node: t
                }
            })
        }
    }
    ],
    r = {},
    n.m = i,
    n.c = r,
    n.p = "dist/",
    n(0);
    function n(t) {
        if (r[t])
            return r[t].exports;
        var e = r[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return i[t].call(e.exports, e, e.exports, n),
        e.loaded = !0,
        e.exports
    }
    var i, r
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery)
}(window, function(t, e) {
    "use strict";
    function n(l, u, c) {
        (c = c || e || t.jQuery) && (u.prototype.option || (u.prototype.option = function(t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
        }
        ),
        c.fn[l] = function(t) {
            if ("string" != typeof t)
                return a = t,
                this.each(function(t, e) {
                    var n = c.data(e, l);
                    n ? (n.option(a),
                    n._init()) : (n = new u(e,a),
                    c.data(e, l, n))
                }),
                this;
            var i, r, o, s, a, e = d.call(arguments, 1);
            return r = e,
            s = "$()." + l + '("' + (i = t) + '")',
            (t = this).each(function(t, e) {
                var n = c.data(e, l);
                n ? (e = n[i]) && "_" != i.charAt(0) ? (n = e.apply(n, r),
                o = void 0 === o ? n : o) : h(s + " is not a valid method") : h(l + " not initialized. Cannot call methods, i.e. " + s)
            }),
            void 0 !== o ? o : t
        }
        ,
        i(c))
    }
    function i(t) {
        !t || t.bridget || (t.bridget = n)
    }
    var d = Array.prototype.slice
      , r = t.console
      , h = void 0 === r ? function() {}
    : function(t) {
        r.error(t)
    }
    ;
    return i(e || t.jQuery),
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var n = this._events = this._events || {}
              , t = n[t] = n[t] || [];
            return -1 == t.indexOf(e) && t.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[t] = n[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
            e = t.indexOf(e);
            return -1 != e && t.splice(e, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
            n = n.slice(0),
            e = e || [];
            for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                var o = n[r];
                i && i[o] && (this.off(t, o),
                delete i[o]),
                o.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function f(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function p(t) {
        t = getComputedStyle(t);
        return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        t
    }
    function m(t) {
        if (b || (b = !0,
        (h = document.createElement("div")).style.width = "200px",
        h.style.padding = "1px 2px 3px 4px",
        h.style.borderStyle = "solid",
        h.style.borderWidth = "1px 2px 3px 4px",
        h.style.boxSizing = "border-box",
        (d = document.body || document.documentElement).appendChild(h),
        c = p(h),
        g = 200 == Math.round(f(c.width)),
        m.isBoxSizeOuter = g,
        d.removeChild(h)),
        (t = "string" == typeof t ? document.querySelector(t) : t) && "object" == typeof t && t.nodeType) {
            var e = p(t);
            if ("none" == e.display)
                return function() {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < y; e++)
                        t[v[e]] = 0;
                    return t
                }();
            var n = {};
            n.width = t.offsetWidth,
            n.height = t.offsetHeight;
            for (var i = n.isBorderBox = "border-box" == e.boxSizing, r = 0; r < y; r++) {
                var o = v[r]
                  , s = e[o]
                  , s = parseFloat(s);
                n[o] = isNaN(s) ? 0 : s
            }
            var a = n.paddingLeft + n.paddingRight
              , l = n.paddingTop + n.paddingBottom
              , u = n.marginLeft + n.marginRight
              , c = n.marginTop + n.marginBottom
              , d = n.borderLeftWidth + n.borderRightWidth
              , h = n.borderTopWidth + n.borderBottomWidth
              , t = i && g
              , i = f(e.width);
            !1 !== i && (n.width = i + (t ? 0 : a + d));
            i = f(e.height);
            return !1 !== i && (n.height = i + (t ? 0 : l + h)),
            n.innerWidth = n.width - (a + d),
            n.innerHeight = n.height - (l + h),
            n.outerWidth = n.width + u,
            n.outerHeight = n.height + c,
            n
        }
        var h, d, c
    }
    var g, e = "undefined" == typeof console ? function() {}
    : function(t) {
        console.error(t)
    }
    , v = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], y = v.length, b = !1;
    return m
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var n = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
            var i = e[n] + "MatchesSelector";
            if (t[i])
                return i
        }
    }();
    return function(t, e) {
        return t[n](e)
    }
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector)
}(window, function(n, o) {
    var l = {
        extend: function(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        },
        modulo: function(t, e) {
            return (t % e + e) % e
        }
    }
      , e = Array.prototype.slice;
    l.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
    }
    ,
    l.removeFrom = function(t, e) {
        e = t.indexOf(e);
        -1 != e && t.splice(e, 1)
    }
    ,
    l.getParent = function(t, e) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            o(t, e))
                return t
    }
    ,
    l.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    l.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    l.filterFindElements = function(t, i) {
        t = l.makeArray(t);
        var r = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement)
                if (i) {
                    o(t, i) && r.push(t);
                    for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++)
                        r.push(e[n])
                } else
                    r.push(t)
        }),
        r
    }
    ,
    l.debounceMethod = function(t, e, i) {
        i = i || 100;
        var r = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments
              , n = this;
            this[o] = setTimeout(function() {
                r.apply(n, e),
                delete n[o]
            }, i)
        }
    }
    ,
    l.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    l.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, n) {
            return e + "-" + n
        }).toLowerCase()
    }
    ;
    var u = n.console;
    return l.htmlInit = function(s, a) {
        l.docReady(function() {
            var t = l.toDashed(a)
              , i = "data-" + t
              , e = document.querySelectorAll("[" + i + "]")
              , t = document.querySelectorAll(".js-" + t)
              , t = l.makeArray(e).concat(l.makeArray(t))
              , r = i + "-options"
              , o = n.jQuery;
            t.forEach(function(e) {
                var t = e.getAttribute(i) || e.getAttribute(r);
                try {
                    n = t && JSON.parse(t)
                } catch (t) {
                    return void (u && u.error("Error parsing " + i + " on " + e.className + ": " + t))
                }
                var n = new s(e,n);
                o && o.data(e, a, n)
            })
        })
    }
    ,
    l
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function n(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    var i = document.documentElement.style
      , r = "string" == typeof i.transition ? "transition" : "WebkitTransition"
      , o = "string" == typeof i.transform ? "transform" : "WebkitTransform"
      , s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , a = {
        transform: o,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , t = n.prototype = Object.create(t.prototype);
    t.constructor = n,
    t._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    t.getSize = function() {
        this.size = e(this.element)
    }
    ,
    t.css = function(t) {
        var e, n = this.element.style;
        for (e in t)
            n[a[e] || e] = t[e]
    }
    ,
    t.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , i = t[e ? "left" : "right"]
          , r = t[n ? "top" : "bottom"]
          , o = parseFloat(i)
          , s = parseFloat(r)
          , t = this.layout.size;
        -1 != i.indexOf("%") && (o = o / 100 * t.width),
        -1 != r.indexOf("%") && (s = s / 100 * t.height),
        o = isNaN(o) ? 0 : o,
        s = isNaN(s) ? 0 : s,
        o -= e ? t.paddingLeft : t.paddingRight,
        s -= n ? t.paddingTop : t.paddingBottom,
        this.position.x = o,
        this.position.y = s
    }
    ,
    t.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , n = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , r = n ? "right" : "left"
          , o = this.position.x + t[n ? "paddingLeft" : "paddingRight"];
        e[n ? "left" : "right"] = this.getXValue(o),
        e[r] = "";
        r = i ? "bottom" : "top",
        t = this.position.y + t[i ? "paddingTop" : "paddingBottom"];
        e[i ? "top" : "bottom"] = this.getYValue(t),
        e[r] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    t.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    t.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    t._transitionTo = function(t, e) {
        this.getPosition();
        var n = this.position.x
          , i = this.position.y
          , r = t == this.position.x && e == this.position.y;
        this.setPosition(t, e),
        !r || this.isTransitioning ? ((r = {}).transform = this.getTranslate(t - n, e - i),
        this.transition({
            to: r,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })) : this.layoutPosition()
    }
    ,
    t.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }
    ,
    t.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    t.moveTo = t._transitionTo,
    t.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    t._nonTransition = function(t) {
        for (var e in this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    t.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e, n = this._transn;
            for (e in t.onTransitionEnd)
                n.onEnd[e] = t.onTransitionEnd[e];
            for (e in t.to)
                n.ingProperties[e] = !0,
                t.isCleaning && (n.clean[e] = !0);
            t.from && (this.css(t.from),
            this.element.offsetHeight,
            0),
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        } else
            this._nonTransition(t)
    }
    ;
    var l = "opacity," + o.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase()
    });
    t.enableTransition = function() {
        var t;
        this.isTransitioning || (t = "number" == typeof (t = this.layout.options.transitionDuration) ? t + "ms" : t,
        this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0
        }),
        this.element.addEventListener(s, this, !1))
    }
    ,
    t.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    t.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var u = {
        "-webkit-transform": "transform"
    };
    t.ontransitionend = function(t) {
        var e, n;
        t.target === this.element && (e = this._transn,
        n = u[t.propertyName] || t.propertyName,
        delete e.ingProperties[n],
        function(t) {
            for (var e in t)
                return;
            return 1
        }(e.ingProperties) && this.disableTransition(),
        n in e.clean && (this.element.style[t.propertyName] = "",
        delete e.clean[n]),
        n in e.onEnd && (e.onEnd[n].call(this),
        delete e.onEnd[n]),
        this.emitEvent("transitionEnd", [this]))
    }
    ,
    t.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(s, this, !1),
        this.isTransitioning = !1
    }
    ,
    t._removeStyles = function(t) {
        var e, n = {};
        for (e in t)
            n[e] = "";
        this.css(n)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return t.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    t.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    t.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    t.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    t.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    t.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    t.getHideRevealTransitionEndProperty = function(t) {
        var e, t = this.layout.options[t];
        if (t.opacity)
            return "opacity";
        for (e in t)
            return e
    }
    ,
    t.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    t.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    t.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    n
}),
function(r, o) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, n, i) {
        return o(r, t, e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = o(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : r.Outlayer = o(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item)
}(window, function(t, e, r, i, o) {
    "use strict";
    function s(t, e) {
        var n = i.getQueryElement(t);
        n ? (this.element = n,
        u && (this.$element = u(this.element)),
        this.options = i.extend({}, this.constructor.defaults),
        this.option(e),
        e = ++c,
        this.element.outlayerGUID = e,
        (d[e] = this)._create(),
        this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
    }
    function a(t) {
        function e() {
            t.apply(this, arguments)
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    function n() {}
    var l = t.console
      , u = t.jQuery
      , c = 0
      , d = {};
    s.namespace = "outlayer",
    s.Item = o,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var h = s.prototype;
    i.extend(h, e.prototype),
    h.option = function(t) {
        i.extend(this.options, t)
    }
    ,
    h._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    h._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        i.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }
    ,
    h.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    h._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
            var o = new n(e[r],this);
            i.push(o)
        }
        return i
    }
    ,
    h._filterFindItemElements = function(t) {
        return i.filterFindElements(t, this.options.itemSelector)
    }
    ,
    h.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    h.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , t = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t),
        this._isLayoutInited = !0
    }
    ,
    h._init = h.layout,
    h._resetLayout = function() {
        this.getSize()
    }
    ,
    h.getSize = function() {
        this.size = r(this.element)
    }
    ,
    h._getMeasurement = function(t, e) {
        var n, i = this.options[t];
        i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i),
        this[t] = n ? r(n)[e] : i) : this[t] = 0
    }
    ,
    h.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    h._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    h._layoutItems = function(t, n) {
        var i;
        this._emitCompleteOnItems("layout", t),
        t && t.length && (i = [],
        t.forEach(function(t) {
            var e = this._getItemLayoutPosition(t);
            e.item = t,
            e.isInstant = n || t.isLayoutInstant,
            i.push(e)
        }, this),
        this._processLayoutQueue(i))
    }
    ,
    h._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    h._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    h.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void (this.stagger = 0) : (this.stagger = function(t) {
            if ("number" == typeof t)
                return t;
            var t = (e = t.match(/(^\d*\.?\d*)(\w*)/)) && e[1]
              , e = e && e[2];
            return t.length ? (t = parseFloat(t)) * (f[e] || 1) : 0
        }(t),
        this.stagger)
    }
    ,
    h._positionItem = function(t, e, n, i, r) {
        i ? t.goTo(e, n) : (t.stagger(r * this.stagger),
        t.moveTo(e, n))
    }
    ,
    h._postLayout = function() {
        this.resizeContainer()
    }
    ,
    h.resizeContainer = function() {
        var t;
        !this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0),
        this._setContainerMeasure(t.height, !1))
    }
    ,
    h._getContainerSize = n,
    h._setContainerMeasure = function(t, e) {
        var n;
        void 0 !== t && ((n = this.size).isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth),
        t = Math.max(t, 0),
        this.element.style[e ? "width" : "height"] = t + "px")
    }
    ,
    h._emitCompleteOnItems = function(e, t) {
        function n() {
            o.dispatchEvent(e + "Complete", null, [t])
        }
        function i() {
            ++r == s && n()
        }
        var r, o = this, s = t.length;
        t && s ? (r = 0,
        t.forEach(function(t) {
            t.once(e, i)
        })) : n()
    }
    ,
    h.dispatchEvent = function(t, e, n) {
        var i = e ? [e].concat(n) : n;
        this.emitEvent(t, i),
        u && (this.$element = this.$element || u(this.element),
        e ? ((e = u.Event(e)).type = t,
        this.$element.trigger(e, n)) : this.$element.trigger(t, n))
    }
    ,
    h.ignore = function(t) {
        t = this.getItem(t);
        t && (t.isIgnored = !0)
    }
    ,
    h.unignore = function(t) {
        t = this.getItem(t);
        t && delete t.isIgnored
    }
    ,
    h.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    h.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            i.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    h._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            i.makeArray(t)
    }
    ,
    h._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    h._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    h._manageStamp = n,
    h._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , n = this._boundingRect
          , t = r(t);
        return {
            left: e.left - n.left - t.marginLeft,
            top: e.top - n.top - t.marginTop,
            right: n.right - e.right - t.marginRight,
            bottom: n.bottom - e.bottom - t.marginBottom
        }
    }
    ,
    h.handleEvent = i.handleEvent,
    h.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    h.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    h.onresize = function() {
        this.resize()
    }
    ,
    i.debounceMethod(s, "onresize", 100),
    h.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    h.needsResizeLayout = function() {
        var t = r(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }
    ,
    h.addItems = function(t) {
        t = this._itemize(t);
        return t.length && (this.items = this.items.concat(t)),
        t
    }
    ,
    h.appended = function(t) {
        t = this.addItems(t);
        t.length && (this.layoutItems(t, !0),
        this.reveal(t))
    }
    ,
    h.prepended = function(t) {
        var e = this._itemize(t);
        e.length && (t = this.items.slice(0),
        this.items = e.concat(t),
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(e, !0),
        this.reveal(e),
        this.layoutItems(t))
    }
    ,
    h.reveal = function(t) {
        var n;
        this._emitCompleteOnItems("reveal", t),
        t && t.length && (n = this.updateStagger(),
        t.forEach(function(t, e) {
            t.stagger(e * n),
            t.reveal()
        }))
    }
    ,
    h.hide = function(t) {
        var n;
        this._emitCompleteOnItems("hide", t),
        t && t.length && (n = this.updateStagger(),
        t.forEach(function(t, e) {
            t.stagger(e * n),
            t.hide()
        }))
    }
    ,
    h.revealItemElements = function(t) {
        t = this.getItems(t);
        this.reveal(t)
    }
    ,
    h.hideItemElements = function(t) {
        t = this.getItems(t);
        this.hide(t)
    }
    ,
    h.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var n = this.items[e];
            if (n.element == t)
                return n
        }
    }
    ,
    h.getItems = function(t) {
        t = i.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            t = this.getItem(t);
            t && e.push(t)
        }, this),
        e
    }
    ,
    h.remove = function(t) {
        t = this.getItems(t);
        this._emitCompleteOnItems("remove", t),
        t && t.length && t.forEach(function(t) {
            t.remove(),
            i.removeFrom(this.items, t)
        }, this)
    }
    ,
    h.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        t = this.element.outlayerGUID;
        delete d[t],
        delete this.element.outlayerGUID,
        u && u.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = (t = i.getQueryElement(t)) && t.outlayerGUID;
        return t && d[t]
    }
    ,
    s.create = function(t, e) {
        var n = a(s);
        return n.defaults = i.extend({}, s.defaults),
        i.extend(n.defaults, e),
        n.compatOptions = i.extend({}, s.compatOptions),
        n.namespace = t,
        n.data = s.data,
        n.Item = a(o),
        i.htmlInit(n, t),
        u && u.bridget && u.bridget(t, n),
        n
    }
    ;
    var f = {
        ms: 1,
        s: 1e3
    };
    return s.Item = o,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var n = e.prototype = Object.create(t.Item.prototype)
      , i = n._create;
    n._create = function() {
        this.id = this.layout.itemGUID++,
        i.call(this),
        this.sortData = {}
    }
    ,
    n.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t, e = this.layout.options.getSortData, n = this.layout._sorters;
            for (t in e) {
                var i = n[t];
                this.sortData[t] = i(this.element, this)
            }
        }
    }
    ;
    var r = n.destroy;
    return n.destroy = function() {
        r.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(e, n) {
    "use strict";
    function i(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var r = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
        r[t] = function() {
            return n.prototype[t].apply(this.isotope, arguments)
        }
    }),
    r.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }
    ,
    r._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    r.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    r.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    r.getSegmentSize = function(t, e) {
        var n = t + e
          , i = "outer" + e;
        this._getMeasurement(n, i),
        this[n] || (t = this.getFirstItemSize(),
        this[n] = t && t[i] || this.isotope.size["inner" + e])
    }
    ,
    r.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }
    ,
    r.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    r.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return (n.prototype = Object.create(r)).constructor = n,
        e && (n.options = e),
        i.modes[n.prototype.namespace = t] = n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, a) {
    var e = t.create("masonry");
    e.compatOptions.fitWidth = "isFitWidth";
    t = e.prototype;
    return t._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    t.measureColumns = function() {
        this.getContainerWidth(),
        this.columnWidth || (n = (e = this.items[0]) && e.element,
        this.columnWidth = n && a(n).outerWidth || this.containerWidth);
        var t = this.columnWidth += this.gutter
          , e = this.containerWidth + this.gutter
          , n = e / t
          , t = t - e % t
          , n = Math[t && t < 1 ? "round" : "floor"](n);
        this.cols = Math.max(n, 1)
    }
    ,
    t.getContainerWidth = function() {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element
          , t = a(t);
        this.containerWidth = t && t.innerWidth
    }
    ,
    t._getItemLayoutPosition = function(t) {
        t.getSize();
        for (var e = t.size.outerWidth % this.columnWidth, n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), n = Math.min(n, this.cols), i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), e = {
            x: this.columnWidth * i.col,
            y: i.y
        }, r = i.y + t.size.outerHeight, o = n + i.col, s = i.col; s < o; s++)
            this.colYs[s] = r;
        return e
    }
    ,
    t._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , t = Math.min.apply(Math, e);
        return {
            col: e.indexOf(t),
            y: t
        }
    }
    ,
    t._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++)
            e[i] = this._getColGroupY(i, t);
        return e
    }
    ,
    t._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        e = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, e)
    }
    ,
    t._getHorizontalColPosition = function(t, e) {
        var n = this.horizontalColIndex % this.cols
          , n = 1 < t && n + t > this.cols ? 0 : n
          , e = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = e ? n + t : this.horizontalColIndex,
        {
            col: n,
            y: this._getColGroupY(n, t)
        }
    }
    ,
    t._manageStamp = function(t) {
        var e = a(t)
          , n = this._getElementOffset(t)
          , i = this._getOption("originLeft") ? n.left : n.right
          , t = i + e.outerWidth
          , i = Math.floor(i / this.columnWidth)
          , i = Math.max(0, i)
          , r = Math.floor(t / this.columnWidth);
        r -= t % this.columnWidth ? 0 : 1;
        for (var r = Math.min(this.cols - 1, r), o = (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight, s = i; s <= r; s++)
            this.colYs[s] = Math.max(o, this.colYs[s])
    }
    ,
    t._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    t._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    t.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var n, t = t.create("masonry"), i = t.prototype, r = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (n in e.prototype)
        r[n] || (i[n] = e.prototype[n]);
    var o = i.measureColumns;
    i.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        o.call(this)
    }
    ;
    var s = i._getOption;
    return i._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : s.apply(this.isotope, arguments)
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , t = e.prototype;
    return t._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    t._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , n = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > n && (this.x = 0,
        this.y = this.maxY);
        n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        n
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , t = e.prototype;
    return t._resetLayout = function() {
        this.y = 0
    }
    ,
    t._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , n = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: n
        }
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(s, a) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(t, e, n, i, r, o) {
        return a(s, t, 0, n, i, r, o)
    }) : "object" == typeof module && module.exports ? module.exports = a(s, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : s.Isotope = a(s, s.Outlayer, s.getSize, s.matchesSelector, s.fizzyUIUtils, s.Isotope.Item, s.Isotope.LayoutMode)
}(window, function(t, n, e, i, o, r, s) {
    var a = t.jQuery
      , l = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , u = n.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    u.Item = r,
    u.LayoutMode = s;
    r = u.prototype;
    r._create = function() {
        for (var t in this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        n.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"],
        s.modes)
            this._initLayoutMode(t)
    }
    ,
    r.reloadItems = function() {
        this.itemGUID = 0,
        n.prototype.reloadItems.call(this)
    }
    ,
    r._itemize = function() {
        for (var t = n.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++)
            t[e].id = this.itemGUID++;
        return this._updateItemsSortData(t),
        t
    }
    ,
    r._initLayoutMode = function(t) {
        var e = s.modes[t]
          , n = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, n) : n,
        this.modes[t] = new e(this)
    }
    ,
    r.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    r._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    r.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        t = this._filter(this.items);
        this.filteredItems = t.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t),
        this._sort(),
        this._layout()
    }
    ,
    r._init = r.arrange,
    r._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    r._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , t = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = t
    }
    ,
    r._bindArrangeComplete = function() {
        function t() {
            e && n && i && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
        }
        var e, n, i, r = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            n = !0,
            t()
        }),
        this.once("revealComplete", function() {
            i = !0,
            t()
        })
    }
    ,
    r._filter = function(t) {
        for (var e = this.options.filter, n = [], i = [], r = [], o = this._getFilterTest(e = e || "*"), s = 0; s < t.length; s++) {
            var a, l = t[s];
            l.isIgnored || ((a = o(l)) && n.push(l),
            a && l.isHidden ? i.push(l) : a || l.isHidden || r.push(l))
        }
        return {
            matches: n,
            needReveal: i,
            needHide: r
        }
    }
    ,
    r._getFilterTest = function(e) {
        return a && this.options.isJQueryFiltering ? function(t) {
            return a(t.element).is(e)
        }
        : "function" == typeof e ? function(t) {
            return e(t.element)
        }
        : function(t) {
            return i(t.element, e)
        }
    }
    ,
    r.updateSortData = function(t) {
        t = t ? (t = o.makeArray(t),
        this.getItems(t)) : this.items;
        this._getSorters(),
        this._updateItemsSortData(t)
    }
    ,
    r._getSorters = function() {
        var t, e = this.options.getSortData;
        for (t in e) {
            var n = e[t];
            this._sorters[t] = c(n)
        }
    }
    ,
    r._updateItemsSortData = function(t) {
        for (var e = t && t.length, n = 0; e && n < e; n++)
            t[n].updateSortData()
    }
    ;
    var c = function(t) {
        if ("string" != typeof t)
            return t;
        var e, n, i = l(t).split(" "), r = i[0], t = (t = r.match(/^\[(.+)\]$/)) && t[1], o = (n = r,
        (e = t) ? function(t) {
            return t.getAttribute(e)
        }
        : function(t) {
            t = t.querySelector(n);
            return t && t.textContent
        }
        ), s = u.sortDataParsers[i[1]];
        return s ? function(t) {
            return t && s(o(t))
        }
        : function(t) {
            return t && o(t)
        }
    };
    u.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    r._sort = function() {
        var t, s, a;
        this.options.sortBy && (t = o.makeArray(this.options.sortBy),
        this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)),
        s = this.sortHistory,
        a = this.options.sortAscending,
        this.filteredItems.sort(function(t, e) {
            for (var n = 0; n < s.length; n++) {
                var i = s[n]
                  , r = t.sortData[i]
                  , o = e.sortData[i];
                if (o < r || r < o)
                    return (o < r ? 1 : -1) * ((void 0 !== a[i] ? a[i] : a) ? 1 : -1)
            }
            return 0
        }))
    }
    ,
    r._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    r._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    r._resetLayout = function() {
        n.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    r._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    r._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    r._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    r.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    r.appended = function(t) {
        t = this.addItems(t);
        t.length && (t = this._filterRevealAdded(t),
        this.filteredItems = this.filteredItems.concat(t))
    }
    ,
    r.prepended = function(t) {
        var e = this._itemize(t);
        e.length && (this._resetLayout(),
        this._manageStamps(),
        t = this._filterRevealAdded(e),
        this.layoutItems(this.filteredItems),
        this.filteredItems = t.concat(this.filteredItems),
        this.items = e.concat(this.items))
    }
    ,
    r._filterRevealAdded = function(t) {
        t = this._filter(t);
        return this.hide(t.needHide),
        this.reveal(t.matches),
        this.layoutItems(t.matches, !0),
        t.matches
    }
    ,
    r.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            for (var n, i = e.length, r = 0; r < i; r++)
                n = e[r],
                this.element.appendChild(n.element);
            t = this._filter(e).matches;
            for (r = 0; r < i; r++)
                e[r].isLayoutInstant = !0;
            for (this.arrange(),
            r = 0; r < i; r++)
                delete e[r].isLayoutInstant;
            this.reveal(t)
        }
    }
    ;
    var d = r.remove;
    return r.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        d.call(this, t);
        for (var n = e && e.length, i = 0; n && i < n; i++) {
            var r = e[i];
            o.removeFrom(this.filteredItems, r)
        }
    }
    ,
    r.shuffle = function() {
        for (var t = 0; t < this.items.length; t++)
            this.items[t].sortData.random = Math.random();
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    r._noTransition = function(t, e) {
        var n = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        e = t.apply(this, e);
        return this.options.transitionDuration = n,
        e
    }
    ,
    r.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    u
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(c) {
    c.extend(c.fn, {
        validate: function(t) {
            if (this.length) {
                var i = c.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"),
                i = new c.validator(t,this[0]),
                c.data(this[0], "validator", i),
                i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                    i.submitButton = t.currentTarget,
                    c(this).hasClass("cancel") && (i.cancelSubmit = !0),
                    void 0 !== c(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }),
                this.on("submit.validate", function(n) {
                    function t() {
                        var t, e;
                        return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (t = c("<input type='hidden'/>").attr("name", i.submitButton.name).val(c(i.submitButton).val()).appendTo(i.currentForm)),
                        !(i.settings.submitHandler && !i.settings.debug) || (e = i.settings.submitHandler.call(i, i.currentForm, n),
                        t && t.remove(),
                        void 0 !== e && e)
                    }
                    return i.settings.debug && n.preventDefault(),
                    i.cancelSubmit ? (i.cancelSubmit = !1,
                    t()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : t() : (i.focusInvalid(),
                    !1)
                })),
                i)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, e, n;
            return c(this[0]).is("form") ? t = this.validate().form() : (n = [],
            t = !0,
            e = c(this[0].form).validate(),
            this.each(function() {
                (t = e.element(this) && t) || (n = n.concat(e.errorList))
            }),
            e.errorList = n),
            t
        },
        rules: function(t, e) {
            var n, i, r, o, s, a = this[0], l = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != a && (!a.form && l && (a.form = this.closest("form")[0],
            a.name = this.attr("name")),
            null != a.form)) {
                if (t)
                    switch (n = c.data(a.form, "validator").settings,
                    i = n.rules,
                    r = c.validator.staticRules(a),
                    t) {
                    case "add":
                        c.extend(r, c.validator.normalizeRule(e)),
                        delete r.messages,
                        i[a.name] = r,
                        e.messages && (n.messages[a.name] = c.extend(n.messages[a.name], e.messages));
                        break;
                    case "remove":
                        return e ? (s = {},
                        c.each(e.split(/\s/), function(t, e) {
                            s[e] = r[e],
                            delete r[e]
                        }),
                        s) : (delete i[a.name],
                        r)
                    }
                return (t = c.validator.normalizeRules(c.extend({}, c.validator.classRules(a), c.validator.attributeRules(a), c.validator.dataRules(a), c.validator.staticRules(a)), a)).required && (o = t.required,
                delete t.required,
                t = c.extend({
                    required: o
                }, t)),
                t.remote && (o = t.remote,
                delete t.remote,
                t = c.extend(t, {
                    remote: o
                })),
                t
            }
        }
    });
    function e(t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    var n;
    c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function(t) {
            return !e("" + c(t).val())
        },
        filled: function(t) {
            t = c(t).val();
            return null !== t && !!e("" + t)
        },
        unchecked: function(t) {
            return !c(t).prop("checked")
        }
    }),
    c.validator = function(t, e) {
        this.settings = c.extend(!0, {}, c.validator.defaults, t),
        this.currentForm = e,
        this.init()
    }
    ,
    c.validator.format = function(n, t) {
        return 1 === arguments.length ? function() {
            var t = c.makeArray(arguments);
            return t.unshift(n),
            c.validator.format.apply(this, t)
        }
        : (void 0 === t || ((t = 2 < arguments.length && t.constructor !== Array ? c.makeArray(arguments).slice(1) : t).constructor !== Array && (t = [t]),
        c.each(t, function(t, e) {
            n = n.replace(new RegExp("\\{" + t + "\\}","g"), function() {
                return e
            })
        })),
        n)
    }
    ,
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                9 === e.which && "" === this.elementValue(t) || -1 !== c.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(t, e, n) {
                ("radio" === t.type ? this.findByName(t.name) : c(t)).addClass(e).removeClass(n)
            },
            unhighlight: function(t, e, n) {
                ("radio" === t.type ? this.findByName(t.name) : c(t)).removeClass(e).addClass(n)
            }
        },
        setDefaults: function(t) {
            c.extend(c.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}."),
            step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var e, n, i = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    !this.form && i && (this.form = c(this).closest("form")[0],
                    this.name = c(this).attr("name")),
                    r === this.form && (e = c.data(this.form, "validator"),
                    n = "on" + t.type.replace(/^validate/, ""),
                    (i = e.settings)[n] && !c(this).is(i.ignore) && i[n].call(e, this, t))
                }
                this.labelContainer = c(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm),
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var n, r = this.currentForm, i = this.groups = {};
                c.each(this.settings.groups, function(n, t) {
                    "string" == typeof t && (t = t.split(/\s/)),
                    c.each(t, function(t, e) {
                        i[e] = n
                    })
                }),
                n = this.settings.rules,
                c.each(n, function(t, e) {
                    n[t] = c.validator.normalizeRule(e)
                }),
                c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                c.extend(this.submitted, this.errorMap),
                this.invalid = c.extend({}, this.errorMap),
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(t) {
                var e, n, i = this.clean(t), r = this.validationTargetFor(i), o = this, s = !0;
                return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r),
                this.currentElements = c(r),
                (n = this.groups[r.name]) && c.each(this.groups, function(t, e) {
                    e === n && t !== r.name && ((i = o.validationTargetFor(o.clean(o.findByName(t)))) && i.name in o.invalid && (o.currentElements.push(i),
                    s = o.check(i) && s))
                }),
                e = !1 !== this.check(r),
                s = s && e,
                this.invalid[r.name] = !e,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                c(t).attr("aria-invalid", !e)),
                s
            },
            showErrors: function(e) {
                var n;
                e && (c.extend((n = this).errorMap, e),
                this.errorList = c.map(this.errorMap, function(t, e) {
                    return {
                        message: t,
                        element: n.findByName(e)[0]
                    }
                }),
                this.successList = c.grep(this.successList, function(t) {
                    return !(t.name in e)
                })),
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""),
                        this.findByName(t[e].name).removeClass(this.settings.validClass);
                else
                    t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, n = 0;
                for (e in t)
                    void 0 !== t[e] && null !== t[e] && !1 !== t[e] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""),
                this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === c.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var n = this
                  , i = {};
                return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var t = this.name || c(this).attr("name")
                      , e = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    return !t && n.settings.debug && window.console && console.error("%o has no name assigned", this),
                    e && (this.form = c(this).closest("form")[0],
                    this.name = t),
                    !(this.form !== n.currentForm || t in i || !n.objectLength(c(this).rules()) || (i[t] = !0,
                    0))
                })
            },
            clean: function(t) {
                return c(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = c([]),
                this.toHide = c([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(t) {
                var e = c(t)
                  , n = t.type
                  , i = void 0 !== e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === n || "checkbox" === n ? this.findByName(t.name).filter(":checked").val() : "number" === n && void 0 !== t.validity ? t.validity.badInput ? "NaN" : e.val() : (e = i ? e.text() : e.val(),
                "file" === n ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (n = e.lastIndexOf("/")) ? e.substr(n + 1) : 0 <= (n = e.lastIndexOf("\\")) ? e.substr(n + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t, n, i, r, o = c(e).rules(), s = c.map(o, function(t, e) {
                    return e
                }).length, a = !1, l = this.elementValue(e);
                for (n in "function" == typeof o.normalizer ? r = o.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer),
                r && (l = r.call(e, l),
                delete o.normalizer),
                o) {
                    i = {
                        method: n,
                        parameters: o[n]
                    };
                    try {
                        if ("dependency-mismatch" === (t = c.validator.methods[n].call(this, l, e, i.parameters)) && 1 === s) {
                            a = !0;
                            continue
                        }
                        if (a = !1,
                        "pending" === t)
                            return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t)
                            return this.formatAndAdd(e, i),
                            !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method.", t),
                        t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method."),
                        t
                    }
                }
                if (!a)
                    return this.objectLength(o) && this.successList.push(e),
                    !0
            },
            customDataMessage: function(t, e) {
                return c(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || c(t).data("msg")
            },
            customMessage: function(t, e) {
                t = this.settings.messages[t];
                return t && (t.constructor === String ? t : t[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t]
            },
            defaultMessage: function(t, e) {
                var n = this.findDefined(this.customMessage(t.name, (e = "string" == typeof e ? {
                    method: e
                } : e).method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, c.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>")
                  , i = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, e.parameters, t) : i.test(n) && (n = c.validator.format(n.replace(i, "{$1}"), e.parameters)),
                n
            },
            formatAndAdd: function(t, e) {
                var n = this.defaultMessage(t, e);
                this.errorList.push({
                    message: n,
                    element: t,
                    method: e.method
                }),
                this.errorMap[t.name] = n,
                this.submitted[t.name] = n
            },
            addWrapper: function(t) {
                return t = this.settings.wrapper ? t.add(t.parent(this.settings.wrapper)) : t
            },
            defaultShowErrors: function() {
                for (var t, e, n = 0; this.errorList[n]; n++)
                    e = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(e.element, e.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    t = this.validElements(); t[n]; n++)
                        this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, e) {
                var n, i, r, o = this.errorsFor(t), s = this.idOrName(t), a = c(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                o.html(e)) : (n = o = c("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(e || ""),
                this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, c(t)) : n.insertAfter(t),
                o.is("label") ? o.attr("for", s) : 0 === o.parents("label[for='" + this.escapeCssMeta(s) + "']").length && (s = o.attr("id"),
                a ? a.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (a += " " + s) : a = s,
                c(t).attr("aria-describedby", a),
                (i = this.groups[t.name]) && c.each((r = this).groups, function(t, e) {
                    e === i && c("[name='" + r.escapeCssMeta(t) + "']", r.currentForm).attr("aria-describedby", o.attr("id"))
                }))),
                !e && this.settings.success && (o.text(""),
                "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)),
                this.toShow = this.toShow.add(o)
            },
            errorsFor: function(t) {
                var e = this.escapeCssMeta(this.idOrName(t))
                  , t = c(t).attr("aria-describedby")
                  , e = "label[for='" + e + "'], label[for='" + e + "'] *";
                return t && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || !this.checkable(t) && t.id || t.name
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                c(t).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(t) {
                return c(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                case "select":
                    return c("option:selected", e).length;
                case "input":
                    if (this.checkable(e))
                        return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(t, e) {
                    return !!c(t, e.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(t) {
                var e = this.elementValue(t);
                return !c.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                c(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, e) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                c(t).removeClass(this.settings.pendingClass),
                e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(),
                this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, e) {
                return e = "string" == typeof e && e || "remote",
                c.data(t, "previousValue") || c.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: e
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : c.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var e = {}
              , t = c(t).attr("class");
            return t && c.each(t.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(e, c.validator.classRuleSettings[this])
            }),
            e
        },
        normalizeAttributeRule: function(t, e, n, i) {
            /min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i),
            isNaN(i) && (i = void 0)),
            i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
        },
        attributeRules: function(t) {
            var e, n, i = {}, r = c(t), o = t.getAttribute("type");
            for (e in c.validator.methods)
                n = "required" === e ? (n = t.getAttribute(e),
                "" === n && (n = !0),
                !!n) : r.attr(e),
                this.normalizeAttributeRule(i, o, e, n);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
            i
        },
        dataRules: function(t) {
            var e, n, i = {}, r = c(t), o = t.getAttribute("type");
            for (e in c.validator.methods)
                n = r.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()),
                "" === n && (n = !0),
                this.normalizeAttributeRule(i, o, e, n);
            return i
        },
        staticRules: function(t) {
            var e = {}
              , n = c.data(t.form, "validator");
            return e = n.settings.rules ? c.validator.normalizeRule(n.settings.rules[t.name]) || {} : e
        },
        normalizeRules: function(i, r) {
            return c.each(i, function(t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var n = !0;
                        switch (typeof e.depends) {
                        case "string":
                            n = !!c(e.depends, r.form).length;
                            break;
                        case "function":
                            n = e.depends.call(r, r)
                        }
                        n ? i[t] = void 0 === e.param || e.param : (c.data(r.form, "validator").resetElements(c(r)),
                        delete i[t])
                    }
                } else
                    delete i[t]
            }),
            c.each(i, function(t, e) {
                i[t] = "function" == typeof e && "normalizer" !== t ? e(r) : e
            }),
            c.each(["minlength", "maxlength"], function() {
                i[this] && (i[this] = Number(i[this]))
            }),
            c.each(["rangelength", "range"], function() {
                var t;
                i[this] && (Array.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (t = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                i[this] = [Number(t[0]), Number(t[1])]))
            }),
            c.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max],
            delete i.min,
            delete i.max),
            null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength],
            delete i.minlength,
            delete i.maxlength)),
            i
        },
        normalizeRule: function(t) {
            var e;
            return "string" == typeof t && (e = {},
            c.each(t.split(/\s/), function() {
                e[this] = !0
            }),
            t = e),
            t
        },
        addMethod: function(t, e, n) {
            c.validator.methods[t] = e,
            c.validator.messages[t] = void 0 !== n ? n : c.validator.messages[t],
            e.length < 3 && c.validator.addClassRules(t, c.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, e, n) {
                if (!this.depend(n, e))
                    return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase())
                    return this.checkable(e) ? 0 < this.getLength(t, e) : null != t && 0 < t.length;
                e = c(e).val();
                return e && 0 < e.length
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            },
            date: (n = !1,
            function(t, e) {
                return n || (n = !0,
                this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),
                this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            }
            ),
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(t, e, n) {
                t = Array.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || n <= t
            },
            maxlength: function(t, e, n) {
                t = Array.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t <= n
            },
            rangelength: function(t, e, n) {
                t = Array.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t >= n[0] && t <= n[1]
            },
            min: function(t, e, n) {
                return this.optional(e) || n <= t
            },
            max: function(t, e, n) {
                return this.optional(e) || t <= n
            },
            range: function(t, e, n) {
                return this.optional(e) || t >= n[0] && t <= n[1]
            },
            step: function(t, e, n) {
                function i(t) {
                    return (t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0
                }
                function r(t) {
                    return Math.round(t * Math.pow(10, o))
                }
                var o, s = c(e).attr("type"), a = "Step attribute on input type " + s + " is not supported.", l = new RegExp("\\b" + s + "\\b"), u = !0;
                if (s && !l.test(["text", "number", "range"].join()))
                    throw new Error(a);
                return o = i(n),
                (i(t) > o || r(t) % r(n) != 0) && (u = !1),
                this.optional(e) || u
            },
            equalTo: function(t, e, n) {
                n = c(n);
                return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    c(e).valid()
                }),
                t === n.val()
            },
            remote: function(i, r, t, o) {
                if (this.optional(r))
                    return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var s, e, a = this.previousValue(r, o);
                return this.settings.messages[r.name] || (this.settings.messages[r.name] = {}),
                a.originalMessage = a.originalMessage || this.settings.messages[r.name][o],
                this.settings.messages[r.name][o] = a.message,
                e = c.param(c.extend({
                    data: i
                }, (t = "string" == typeof t ? {
                    url: t
                } : t).data)),
                a.old === e ? a.valid : (a.old = e,
                (s = this).startRequest(r),
                (e = {})[r.name] = i,
                c.ajax(c.extend(!0, {
                    mode: "abort",
                    port: "validate" + r.name,
                    dataType: "json",
                    data: e,
                    context: s.currentForm,
                    success: function(t) {
                        var e, n = !0 === t || "true" === t;
                        s.settings.messages[r.name][o] = a.originalMessage,
                        n ? (e = s.formSubmitted,
                        s.resetInternals(),
                        s.toHide = s.errorsFor(r),
                        s.formSubmitted = e,
                        s.successList.push(r),
                        s.invalid[r.name] = !1,
                        s.showErrors()) : (e = {},
                        t = t || s.defaultMessage(r, {
                            method: o,
                            parameters: i
                        }),
                        e[r.name] = a.message = t,
                        s.invalid[r.name] = !0,
                        s.showErrors(e)),
                        a.valid = n,
                        s.stopRequest(r, n)
                    }
                }, t)),
                "pending")
            }
        }
    });
    var i, r = {};
    return c.ajaxPrefilter ? c.ajaxPrefilter(function(t, e, n) {
        var i = t.port;
        "abort" === t.mode && (r[i] && r[i].abort(),
        r[i] = n)
    }) : (i = c.ajax,
    c.ajax = function(t) {
        var e = ("mode"in t ? t : c.ajaxSettings).mode
          , n = ("port"in t ? t : c.ajaxSettings).port;
        return "abort" === e ? (r[n] && r[n].abort(),
        r[n] = i.apply(this, arguments),
        r[n]) : i.apply(this, arguments)
    }
    ),
    c
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(a) {
    return a.validator.addMethod("maxWords", function(t, e, n) {
        return this.optional(e) || r(t).match(/\b\w+\b/g).length <= n
    }, a.validator.format("Please enter {0} words or less.")),
    a.validator.addMethod("minWords", function(t, e, n) {
        return this.optional(e) || r(t).match(/\b\w+\b/g).length >= n
    }, a.validator.format("Please enter at least {0} words.")),
    a.validator.addMethod("rangeWords", function(t, e, n) {
        var i = r(t)
          , t = /\b\w+\b/g;
        return this.optional(e) || i.match(t).length >= n[0] && i.match(t).length <= n[1]
    }, a.validator.format("Please enter between {0} and {1} words.")),
    a.validator.addMethod("abaRoutingNumber", function(t) {
        var e = 0
          , n = t.split("")
          , i = n.length;
        if (9 !== i)
            return !1;
        for (var r = 0; r < i; r += 3)
            e += 3 * parseInt(n[r], 10) + 7 * parseInt(n[r + 1], 10) + parseInt(n[r + 2], 10);
        return 0 !== e && e % 10 == 0
    }, "Please enter a valid routing number."),
    a.validator.addMethod("accept", function(t, e, n) {
        var i, r, o = "string" == typeof n ? n.replace(/\s/g, "") : "image/*", n = this.optional(e);
        if (n)
            return n;
        if ("file" === a(e).attr("type") && (o = o.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"),
        e.files && e.files.length))
            for (r = new RegExp(".?(" + o + ")$","i"),
            i = 0; i < e.files.length; i++)
                if (!e.files[i].type.match(r))
                    return !1;
        return !0
    }, a.validator.format("Please enter a value with a valid mimetype.")),
    a.validator.addMethod("alphanumeric", function(t, e) {
        return this.optional(e) || /^\w+$/i.test(t)
    }, "Letters, numbers, and underscores only please"),
    a.validator.addMethod("bankaccountNL", function(t, e) {
        if (this.optional(e))
            return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t))
            return !1;
        for (var n = t.replace(/ /g, ""), i = 0, r = n.length, o = 0; o < r; o++)
            i += (r - o) * n.substring(o, o + 1);
        return i % 11 == 0
    }, "Please specify a valid bank account number"),
    a.validator.addMethod("bankorgiroaccountNL", function(t, e) {
        return this.optional(e) || a.validator.methods.bankaccountNL.call(this, t, e) || a.validator.methods.giroaccountNL.call(this, t, e)
    }, "Please specify a valid bank or giro account number"),
    a.validator.addMethod("bic", function(t, e) {
        return this.optional(e) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(t.toUpperCase())
    }, "Please specify a valid BIC code"),
    a.validator.addMethod("cifES", function(t, e) {
        "use strict";
        if (this.optional(e))
            return !0;
        var n, i, r = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi), o = t.substring(0, 1), s = t.substring(1, 8), e = t.substring(8, 9), a = 0, l = 0;
        if (9 !== t.length || !r.test(t))
            return !1;
        for (n = 0; n < s.length; n++)
            i = parseInt(s[n], 10),
            n % 2 == 0 ? l += (i *= 2) < 10 ? i : i - 9 : a += i;
        return r = (10 - (a + l).toString().substr(-1)).toString(),
        r = 9 < parseInt(r, 10) ? "0" : r,
        t = "JABCDEFGHI".substr(r, 1).toString(),
        o.match(/[ABEH]/) ? e === r : !o.match(/[KPQS]/) && e === r || e === t
    }, "Please specify a valid CIF number."),
    a.validator.addMethod("cnhBR", function(t) {
        if (11 !== (t = t.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length)
            return !1;
        var e, n, i, r = 0, o = 0, s = t.charAt(0);
        if (new Array(12).join(s) === t)
            return !1;
        for (i = 9,
        n = 0; n < 9; ++n,
        --i)
            r += +t.charAt(n) * i;
        for (10 <= (e = r % 11) && (e = 0,
        o = 2),
        n = r = 0,
        i = 1; n < 9; ++n,
        ++i)
            r += +t.charAt(n) * i;
        return 10 <= (s = r % 11) ? s = 0 : s -= o,
        String(e).concat(s) === t.substr(-2)
    }, "Please specify a valid CNH number"),
    a.validator.addMethod("cnpjBR", function(t, e) {
        "use strict";
        if (this.optional(e))
            return !0;
        if (14 !== (t = t.replace(/[^\d]+/g, "")).length)
            return !1;
        if ("00000000000000" === t || "11111111111111" === t || "22222222222222" === t || "33333333333333" === t || "44444444444444" === t || "55555555555555" === t || "66666666666666" === t || "77777777777777" === t || "88888888888888" === t || "99999999999999" === t)
            return !1;
        for (var n = t.length - 2, i = t.substring(0, n), e = t.substring(n), r = 0, o = n - 7, s = n; 1 <= s; s--)
            r += i.charAt(n - s) * o--,
            o < 2 && (o = 9);
        if ((r % 11 < 2 ? 0 : 11 - r % 11) !== parseInt(e.charAt(0), 10))
            return !1;
        for (var i = t.substring(0, n += 1), r = 0, o = n - 7, a = n; 1 <= a; a--)
            r += i.charAt(n - a) * o--,
            o < 2 && (o = 9);
        return (r % 11 < 2 ? 0 : 11 - r % 11) === parseInt(e.charAt(1), 10)
    }, "Please specify a CNPJ value number"),
    a.validator.addMethod("cpfBR", function(t, e) {
        "use strict";
        if (this.optional(e))
            return !0;
        if (11 !== (t = t.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length)
            return !1;
        var n, i = 0, r = parseInt(t.substring(9, 10), 10), o = parseInt(t.substring(10, 11), 10), e = function(t, e) {
            t = 10 * t % 11;
            return (t = 10 === t || 11 === t ? 0 : t) === e
        };
        if ("" === t || "00000000000" === t || "11111111111" === t || "22222222222" === t || "33333333333" === t || "44444444444" === t || "55555555555" === t || "66666666666" === t || "77777777777" === t || "88888888888" === t || "99999999999" === t)
            return !1;
        for (n = 1; n <= 9; n++)
            i += parseInt(t.substring(n - 1, n), 10) * (11 - n);
        if (e(i, r)) {
            for (i = 0,
            n = 1; n <= 10; n++)
                i += parseInt(t.substring(n - 1, n), 10) * (12 - n);
            return e(i, o)
        }
        return !1
    }, "Please specify a valid CPF number"),
    a.validator.addMethod("creditcard", function(t, e) {
        if (this.optional(e))
            return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(t))
            return !1;
        var n, i, r = 0, o = 0, s = !1;
        if ((t = t.replace(/\D/g, "")).length < 13 || 19 < t.length)
            return !1;
        for (n = t.length - 1; 0 <= n; n--)
            i = t.charAt(n),
            o = parseInt(i, 10),
            s && 9 < (o *= 2) && (o -= 9),
            r += o,
            s = !s;
        return r % 10 == 0
    }, "Please enter a valid credit card number."),
    a.validator.addMethod("creditcardtypes", function(t, e, n) {
        if (/[^0-9\-]+/.test(t))
            return !1;
        t = t.replace(/\D/g, "");
        var i = 0;
        return n.mastercard && (i |= 1),
        n.visa && (i |= 2),
        n.amex && (i |= 4),
        n.dinersclub && (i |= 8),
        n.enroute && (i |= 16),
        n.discover && (i |= 32),
        n.jcb && (i |= 64),
        n.unknown && (i |= 128),
        1 & (i = n.all ? 255 : i) && (/^(5[12345])/.test(t) || /^(2[234567])/.test(t)) || 2 & i && /^(4)/.test(t) ? 16 === t.length : 4 & i && /^(3[47])/.test(t) ? 15 === t.length : 8 & i && /^(3(0[012345]|[68]))/.test(t) ? 14 === t.length : 16 & i && /^(2(014|149))/.test(t) ? 15 === t.length : 32 & i && /^(6011)/.test(t) || 64 & i && /^(3)/.test(t) ? 16 === t.length : 64 & i && /^(2131|1800)/.test(t) ? 15 === t.length : !!(128 & i)
    }, "Please enter a valid credit card number."),
    a.validator.addMethod("currency", function(t, e, n) {
        var i = "string" == typeof n
          , r = i ? n : n[0]
          , n = !!i || n[1]
          , r = r.replace(/,/g, "")
          , r = "^[" + (r = n ? r + "]" : r + "]?") + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
        return r = new RegExp(r),
        this.optional(e) || r.test(t)
    }, "Please specify a valid currency"),
    a.validator.addMethod("dateFA", function(t, e) {
        return this.optional(e) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(t)
    }, a.validator.messages.date),
    a.validator.addMethod("dateITA", function(t, e) {
        var n, i, r, o = !1, o = !!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t) && (r = t.split("/"),
        n = parseInt(r[0], 10),
        i = parseInt(r[1], 10),
        t = parseInt(r[2], 10),
        (r = new Date(Date.UTC(t, i - 1, n, 12, 0, 0, 0))).getUTCFullYear() === t && r.getUTCMonth() === i - 1 && r.getUTCDate() === n);
        return this.optional(e) || o
    }, a.validator.messages.date),
    a.validator.addMethod("dateNL", function(t, e) {
        return this.optional(e) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t)
    }, a.validator.messages.date),
    a.validator.addMethod("extension", function(t, e, n) {
        return n = "string" == typeof n ? n.replace(/,/g, "|") : "png|jpe?g|gif",
        this.optional(e) || t.match(new RegExp("\\.(" + n + ")$","i"))
    }, a.validator.format("Please enter a value with a valid extension.")),
    a.validator.addMethod("giroaccountNL", function(t, e) {
        return this.optional(e) || /^[0-9]{1,7}$/.test(t)
    }, "Please specify a valid giro account number"),
    a.validator.addMethod("greaterThan", function(t, e, n) {
        n = a(n);
        return this.settings.onfocusout && n.not(".validate-greaterThan-blur").length && n.addClass("validate-greaterThan-blur").on("blur.validate-greaterThan", function() {
            a(e).valid()
        }),
        t > n.val()
    }, "Please enter a greater value."),
    a.validator.addMethod("greaterThanEqual", function(t, e, n) {
        n = a(n);
        return this.settings.onfocusout && n.not(".validate-greaterThanEqual-blur").length && n.addClass("validate-greaterThanEqual-blur").on("blur.validate-greaterThanEqual", function() {
            a(e).valid()
        }),
        t >= n.val()
    }, "Please enter a greater value."),
    a.validator.addMethod("iban", function(t, e) {
        if (this.optional(e))
            return !0;
        var n, i, r, o, e = t.replace(/ /g, "").toUpperCase(), s = "", a = !0, l = "";
        if (e.length < 5)
            return !1;
        if (void 0 !== (t = {
            AL: "\\d{8}[\\dA-Z]{16}",
            AD: "\\d{8}[\\dA-Z]{12}",
            AT: "\\d{16}",
            AZ: "[\\dA-Z]{4}\\d{20}",
            BE: "\\d{12}",
            BH: "[A-Z]{4}[\\dA-Z]{14}",
            BA: "\\d{16}",
            BR: "\\d{23}[A-Z][\\dA-Z]",
            BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR: "\\d{17}",
            HR: "\\d{17}",
            CY: "\\d{8}[\\dA-Z]{16}",
            CZ: "\\d{20}",
            DK: "\\d{14}",
            DO: "[A-Z]{4}\\d{20}",
            EE: "\\d{16}",
            FO: "\\d{14}",
            FI: "\\d{14}",
            FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
            GE: "[\\dA-Z]{2}\\d{16}",
            DE: "\\d{18}",
            GI: "[A-Z]{4}[\\dA-Z]{15}",
            GR: "\\d{7}[\\dA-Z]{16}",
            GL: "\\d{14}",
            GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
            HU: "\\d{24}",
            IS: "\\d{22}",
            IE: "[\\dA-Z]{4}\\d{14}",
            IL: "\\d{19}",
            IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ: "\\d{3}[\\dA-Z]{13}",
            KW: "[A-Z]{4}[\\dA-Z]{22}",
            LV: "[A-Z]{4}[\\dA-Z]{13}",
            LB: "\\d{4}[\\dA-Z]{20}",
            LI: "\\d{5}[\\dA-Z]{12}",
            LT: "\\d{16}",
            LU: "\\d{3}[\\dA-Z]{13}",
            MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
            MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR: "\\d{23}",
            MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
            MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
            MD: "[\\dA-Z]{2}\\d{18}",
            ME: "\\d{18}",
            NL: "[A-Z]{4}\\d{10}",
            NO: "\\d{11}",
            PK: "[\\dA-Z]{4}\\d{16}",
            PS: "[\\dA-Z]{4}\\d{21}",
            PL: "\\d{24}",
            PT: "\\d{21}",
            RO: "[A-Z]{4}[\\dA-Z]{16}",
            SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
            SA: "\\d{2}[\\dA-Z]{18}",
            RS: "\\d{18}",
            SK: "\\d{20}",
            SI: "\\d{15}",
            ES: "\\d{20}",
            SE: "\\d{20}",
            CH: "\\d{5}[\\dA-Z]{12}",
            TN: "\\d{20}",
            TR: "\\d{5}[\\dA-Z]{17}",
            AE: "\\d{3}\\d{16}",
            GB: "[A-Z]{4}\\d{14}",
            VG: "[\\dA-Z]{4}\\d{16}"
        }[e.substring(0, 2)]) && !new RegExp("^[A-Z]{2}\\d{2}" + t + "$","").test(e))
            return !1;
        for (n = e.substring(4, e.length) + e.substring(0, 4),
        r = 0; r < n.length; r++)
            (a = "0" !== (i = n.charAt(r)) ? !1 : a) || (s += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(i));
        for (o = 0; o < s.length; o++)
            l = ("" + l + s.charAt(o)) % 97;
        return 1 === l
    }, "Please specify a valid IBAN"),
    a.validator.addMethod("integer", function(t, e) {
        return this.optional(e) || /^-?\d+$/.test(t)
    }, "A positive or negative non-decimal number please"),
    a.validator.addMethod("ipv4", function(t, e) {
        return this.optional(e) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t)
    }, "Please enter a valid IP v4 address."),
    a.validator.addMethod("ipv6", function(t, e) {
        return this.optional(e) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t)
    }, "Please enter a valid IP v6 address."),
    a.validator.addMethod("lessThan", function(t, e, n) {
        n = a(n);
        return this.settings.onfocusout && n.not(".validate-lessThan-blur").length && n.addClass("validate-lessThan-blur").on("blur.validate-lessThan", function() {
            a(e).valid()
        }),
        t < n.val()
    }, "Please enter a lesser value."),
    a.validator.addMethod("lessThanEqual", function(t, e, n) {
        n = a(n);
        return this.settings.onfocusout && n.not(".validate-lessThanEqual-blur").length && n.addClass("validate-lessThanEqual-blur").on("blur.validate-lessThanEqual", function() {
            a(e).valid()
        }),
        t <= n.val()
    }, "Please enter a lesser value."),
    a.validator.addMethod("lettersonly", function(t, e) {
        return this.optional(e) || /^[a-z]+$/i.test(t)
    }, "Letters only please"),
    a.validator.addMethod("letterswithbasicpunc", function(t, e) {
        return this.optional(e) || /^[a-z\-.,()'"\s]+$/i.test(t)
    }, "Letters or punctuation only please"),
    a.validator.addMethod("maxfiles", function(t, e, n) {
        return !!this.optional(e) || !("file" === a(e).attr("type") && e.files && e.files.length > n)
    }, a.validator.format("Please select no more than {0} files.")),
    a.validator.addMethod("maxsize", function(t, e, n) {
        if (this.optional(e))
            return !0;
        if ("file" === a(e).attr("type") && e.files && e.files.length)
            for (var i = 0; i < e.files.length; i++)
                if (e.files[i].size > n)
                    return !1;
        return !0
    }, a.validator.format("File size must not exceed {0} bytes each.")),
    a.validator.addMethod("maxsizetotal", function(t, e, n) {
        if (this.optional(e))
            return !0;
        if ("file" === a(e).attr("type") && e.files && e.files.length)
            for (var i = 0, r = 0; r < e.files.length; r++)
                if (n < (i += e.files[r].size))
                    return !1;
        return !0
    }, a.validator.format("Total size of all files must not exceed {0} bytes.")),
    a.validator.addMethod("mobileNL", function(t, e) {
        return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t)
    }, "Please specify a valid mobile number"),
    a.validator.addMethod("mobileRU", function(t, e) {
        t = t.replace(/\(|\)|\s+|-/g, "");
        return this.optional(e) || 9 < t.length && /^((\+7|7|8)+([0-9]){10})$/.test(t)
    }, "Please specify a valid mobile number"),
    a.validator.addMethod("mobileUK", function(t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""),
        this.optional(e) || 9 < t.length && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"),
    a.validator.addMethod("netmask", function(t, e) {
        return this.optional(e) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(t)
    }, "Please enter a valid netmask."),
    a.validator.addMethod("nieES", function(t, e) {
        "use strict";
        if (this.optional(e))
            return !0;
        var n = new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi)
          , e = t.substr(t.length - 1).toUpperCase();
        return !(10 < (t = t.toString().toUpperCase()).length || t.length < 9 || !n.test(t)) && (t = 9 === (t = t.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2")).length ? t.substr(0, 8) : t.substr(0, 9),
        "TRWAGMYFPDXBNJZSQVHLCKET".charAt(parseInt(t, 10) % 23) === e)
    }, "Please specify a valid NIE number."),
    a.validator.addMethod("nifES", function(t, e) {
        "use strict";
        return !!this.optional(e) || !!(t = t.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(t) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.substring(8, 0) % 23) === t.charAt(8) : !!/^[KLM]{1}/.test(t) && t[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.substring(8, 1) % 23))
    }, "Please specify a valid NIF number."),
    a.validator.addMethod("nipPL", function(t) {
        "use strict";
        if (10 !== (t = t.replace(/[^0-9]/g, "")).length)
            return !1;
        for (var e = [6, 5, 7, 2, 3, 4, 5, 6, 7], n = 0, i = 0; i < 9; i++)
            n += e[i] * t[i];
        var r = n % 11;
        return (10 == r ? 0 : r) === parseInt(t[9], 10)
    }, "Please specify a valid NIP number."),
    a.validator.addMethod("nisBR", function(t) {
        var e, n, i, r = 0;
        if (11 !== (t = t.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length)
            return !1;
        for (n = parseInt(t.substring(10, 11), 10),
        e = parseInt(t.substring(0, 10), 10),
        i = 2; i < 12; i++)
            r += e % 10 * (11 === i ? 3 : 10 === i ? 2 : i),
            e = parseInt(e / 10, 10);
        return n === (n = 1 < (n = r % 11) ? 11 - n : 0)
    }, "Please specify a valid NIS/PIS number"),
    a.validator.addMethod("notEqualTo", function(t, e, n) {
        return this.optional(e) || !a.validator.methods.equalTo.call(this, t, e, n)
    }, "Please enter a different value, values must not be the same."),
    a.validator.addMethod("nowhitespace", function(t, e) {
        return this.optional(e) || /^\S+$/i.test(t)
    }, "No white space please"),
    a.validator.addMethod("pattern", function(t, e, n) {
        return !!this.optional(e) || (n = "string" == typeof n ? new RegExp("^(?:" + n + ")$") : n).test(t)
    }, "Invalid format."),
    a.validator.addMethod("phoneNL", function(t, e) {
        return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t)
    }, "Please specify a valid phone number."),
    a.validator.addMethod("phonePL", function(t, e) {
        t = t.replace(/\s+/g, "");
        return this.optional(e) || /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/.test(t)
    }, "Please specify a valid phone number"),
    a.validator.addMethod("phonesUK", function(t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""),
        this.optional(e) || 9 < t.length && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"),
    a.validator.addMethod("phoneUK", function(t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""),
        this.optional(e) || 9 < t.length && t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"),
    a.validator.addMethod("phoneUS", function(t, e) {
        return t = t.replace(/\s+/g, ""),
        this.optional(e) || 9 < t.length && t.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/)
    }, "Please specify a valid phone number"),
    a.validator.addMethod("postalcodeBR", function(t, e) {
        return this.optional(e) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(t)
    }, "Informe um CEP válido."),
    a.validator.addMethod("postalCodeCA", function(t, e) {
        return this.optional(e) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(t)
    }, "Please specify a valid postal code"),
    a.validator.addMethod("postalcodeIT", function(t, e) {
        return this.optional(e) || /^\d{5}$/.test(t)
    }, "Please specify a valid postal code"),
    a.validator.addMethod("postalcodeNL", function(t, e) {
        return this.optional(e) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)
    }, "Please specify a valid postal code"),
    a.validator.addMethod("postcodeUK", function(t, e) {
        return this.optional(e) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t)
    }, "Please specify a valid UK postcode"),
    a.validator.addMethod("require_from_group", function(t, e, n) {
        var i = a(n[1], e.form)
          , r = i.eq(0)
          , o = r.data("valid_req_grp") ? r.data("valid_req_grp") : a.extend({}, this)
          , n = i.filter(function() {
            return o.elementValue(this)
        }).length >= n[0];
        return r.data("valid_req_grp", o),
        a(e).data("being_validated") || (i.data("being_validated", !0),
        i.each(function() {
            o.element(this)
        }),
        i.data("being_validated", !1)),
        n
    }, a.validator.format("Please fill at least {0} of these fields.")),
    a.validator.addMethod("skip_or_fill_minimum", function(t, e, n) {
        var i = a(n[1], e.form)
          , r = i.eq(0)
          , o = r.data("valid_skip") ? r.data("valid_skip") : a.extend({}, this)
          , s = i.filter(function() {
            return o.elementValue(this)
        }).length
          , n = 0 === s || s >= n[0];
        return r.data("valid_skip", o),
        a(e).data("being_validated") || (i.data("being_validated", !0),
        i.each(function() {
            o.element(this)
        }),
        i.data("being_validated", !1)),
        n
    }, a.validator.format("Please either skip these fields or fill at least {0} of them.")),
    a.validator.addMethod("stateUS", function(t, e, n) {
        var i = void 0 === n
          , r = !i && void 0 !== n.caseSensitive && n.caseSensitive
          , o = !i && void 0 !== n.includeTerritories && n.includeTerritories
          , n = !i && void 0 !== n.includeMilitary && n.includeMilitary
          , o = o || n ? o && n ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : o ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
        return o = r ? new RegExp(o) : new RegExp(o,"i"),
        this.optional(e) || o.test(t)
    }, "Please specify a valid state"),
    a.validator.addMethod("strippedminlength", function(t, e, n) {
        return a(t).text().length >= n
    }, a.validator.format("Please enter at least {0} characters")),
    a.validator.addMethod("time", function(t, e) {
        return this.optional(e) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(t)
    }, "Please enter a valid time, between 00:00 and 23:59"),
    a.validator.addMethod("time12h", function(t, e) {
        return this.optional(e) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)
    }, "Please enter a valid time in 12-hour am/pm format"),
    a.validator.addMethod("url2", function(t, e) {
        return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
    }, a.validator.messages.url),
    a.validator.addMethod("vinUS", function(t) {
        if (17 !== t.length)
            return !1;
        for (var e, n, i, r, o, s = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9], l = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], u = 0, c = 0; c < 17; c++) {
            if (i = l[c],
            n = t.slice(c, c + 1),
            8 === c && (o = n),
            isNaN(n)) {
                for (e = 0; e < s.length; e++)
                    if (n.toUpperCase() === s[e]) {
                        n = a[e],
                        n *= i,
                        isNaN(o) && 8 === e && (o = s[e]);
                        break
                    }
            } else
                n *= i;
            u += n
        }
        return (r = 10 === (r = u % 11) ? "X" : r) === o
    }, "The specified vehicle identification number (VIN) is invalid."),
    a.validator.addMethod("zipcodeUS", function(t, e) {
        return this.optional(e) || /^\d{5}(-\d{4})?$/.test(t)
    }, "The specified US ZIP Code is invalid"),
    a.validator.addMethod("ziprange", function(t, e) {
        return this.optional(e) || /^90[2-5]\d\{2\}-\d{4}$/.test(t)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"),
    a;
    function r(t) {
        return t.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
    }
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e()
}(this, function() {
    "use strict";
    const b = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    })
      , e = "SweetAlert2:"
      , i = t=>t.charAt(0).toUpperCase() + t.slice(1)
      , u = t=>Array.prototype.slice.call(t)
      , s = t=>{
        console.warn("".concat(e, " ").concat("object" == typeof t ? t.join(" ") : t))
    }
      , _ = t=>{
        console.error("".concat(e, " ").concat(t))
    }
      , o = []
      , w = t=>"function" == typeof t ? t() : t
      , x = t=>t && "function" == typeof t.toPromise
      , C = t=>x(t) ? t.toPromise() : Promise.resolve(t)
      , A = t=>t && Promise.resolve(t) === t
      , r = t=>t instanceof Element || "object" == typeof t && t.jquery;
    var t = t=>{
        const e = {};
        for (const n in t)
            e[t[n]] = "swal2-" + t[n];
        return e
    }
    ;
    const c = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"])
      , a = t(["success", "warning", "info", "question", "error"])
      , d = ()=>document.body.querySelector(".".concat(c.container))
      , n = t=>{
        const e = d();
        return e ? e.querySelector(t) : null
    }
      , l = t=>n(".".concat(t))
      , E = ()=>l(c.popup)
      , h = ()=>l(c.icon)
      , f = ()=>l(c.title)
      , p = ()=>l(c["html-container"])
      , m = ()=>l(c.image)
      , T = ()=>l(c["progress-steps"])
      , k = ()=>l(c["validation-message"])
      , S = ()=>n(".".concat(c.actions, " .").concat(c.confirm))
      , D = ()=>n(".".concat(c.actions, " .").concat(c.deny))
      , O = ()=>n(".".concat(c.loader))
      , L = ()=>n(".".concat(c.actions, " .").concat(c.cancel))
      , P = ()=>l(c.actions)
      , g = ()=>l(c.footer)
      , I = ()=>l(c["timer-progress-bar"])
      , M = ()=>l(c.close)
      , v = ()=>{
        const t = u(E().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((t,e)=>(t = parseInt(t.getAttribute("tabindex")),
        (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0));
        var e = u(E().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(t=>"-1" !== t.getAttribute("tabindex"));
        return (e=>{
            const n = [];
            for (let t = 0; t < e.length; t++)
                -1 === n.indexOf(e[t]) && n.push(e[t]);
            return n
        }
        )(t.concat(e)).filter(t=>G(t))
    }
      , N = ()=>!y() && !document.body.classList.contains(c["no-backdrop"])
      , y = ()=>document.body.classList.contains(c["toast-shown"])
      , j = {
        previousBodyPadding: null
    }
      , F = (e,t)=>{
        if (e.textContent = "",
        t) {
            const n = new DOMParser
              , i = n.parseFromString(t, "text/html");
            u(i.querySelector("head").childNodes).forEach(t=>{
                e.appendChild(t)
            }
            ),
            u(i.querySelector("body").childNodes).forEach(t=>{
                e.appendChild(t)
            }
            )
        }
    }
      , z = (e,t)=>{
        if (!t)
            return !1;
        var n = t.split(/\s+/);
        for (let t = 0; t < n.length; t++)
            if (!e.classList.contains(n[t]))
                return !1;
        return !0
    }
      , $ = (t,e,n)=>{
        var i = t
          , r = e;
        if (u(i.classList).forEach(t=>{
            Object.values(c).includes(t) || Object.values(a).includes(t) || Object.values(r.showClass).includes(t) || i.classList.remove(t)
        }
        ),
        e.customClass && e.customClass[n]) {
            if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach)
                return s("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof e.customClass[n], '"'));
            H(t, e.customClass[n])
        }
    }
      , R = (t,e)=>{
        if (!e)
            return null;
        switch (e) {
        case "select":
        case "textarea":
        case "file":
            return U(t, c[e]);
        case "checkbox":
            return t.querySelector(".".concat(c.checkbox, " input"));
        case "radio":
            return t.querySelector(".".concat(c.radio, " input:checked")) || t.querySelector(".".concat(c.radio, " input:first-child"));
        case "range":
            return t.querySelector(".".concat(c.range, " input"));
        default:
            return U(t, c.input)
        }
    }
      , q = t=>{
        var e;
        t.focus(),
        "file" !== t.type && (e = t.value,
        t.value = "",
        t.value = e)
    }
      , B = (t,e,n)=>{
        t && e && (e = "string" == typeof e ? e.split(/\s+/).filter(Boolean) : e).forEach(e=>{
            t.forEach ? t.forEach(t=>{
                n ? t.classList.add(e) : t.classList.remove(e)
            }
            ) : n ? t.classList.add(e) : t.classList.remove(e)
        }
        )
    }
      , H = (t,e)=>{
        B(t, e, !0)
    }
      , W = (t,e)=>{
        B(t, e, !1)
    }
      , U = (e,n)=>{
        for (let t = 0; t < e.childNodes.length; t++)
            if (z(e.childNodes[t], n))
                return e.childNodes[t]
    }
      , V = (t,e,n)=>{
        (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e)
    }
      , Y = (t,e="flex")=>{
        t.style.display = e
    }
      , Z = t=>{
        t.style.display = "none"
    }
      , X = (t,e,n,i)=>{
        const r = t.querySelector(e);
        r && (r.style[n] = i)
    }
      , K = (t,e,n)=>{
        e ? Y(t, n) : Z(t)
    }
      , G = t=>!(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
      , Q = t=>!!(t.scrollHeight > t.clientHeight)
      , J = t=>{
        const e = window.getComputedStyle(t);
        var n = parseFloat(e.getPropertyValue("animation-duration") || "0")
          , t = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < t
    }
      , tt = (t,e=!1)=>{
        const n = I();
        G(n) && (e && (n.style.transition = "none",
        n.style.width = "100%"),
        setTimeout(()=>{
            n.style.transition = "width ".concat(t / 1e3, "s linear"),
            n.style.width = "0%"
        }
        , 10))
    }
      , et = ()=>"undefined" == typeof window || "undefined" == typeof document
      , nt = '\n <div aria-labelledby="'.concat(c.title, '" aria-describedby="').concat(c["html-container"], '" class="').concat(c.popup, '" tabindex="-1">\n   <button type="button" class="').concat(c.close, '"></button>\n   <ul class="').concat(c["progress-steps"], '"></ul>\n   <div class="').concat(c.icon, '"></div>\n   <img class="').concat(c.image, '" />\n   <h2 class="').concat(c.title, '" id="').concat(c.title, '"></h2>\n   <div class="').concat(c["html-container"], '" id="').concat(c["html-container"], '"></div>\n   <input class="').concat(c.input, '" />\n   <input type="file" class="').concat(c.file, '" />\n   <div class="').concat(c.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(c.select, '"></select>\n   <div class="').concat(c.radio, '"></div>\n   <label for="').concat(c.checkbox, '" class="').concat(c.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(c.label, '"></span>\n   </label>\n   <textarea class="').concat(c.textarea, '"></textarea>\n   <div class="').concat(c["validation-message"], '" id="').concat(c["validation-message"], '"></div>\n   <div class="').concat(c.actions, '">\n     <div class="').concat(c.loader, '"></div>\n     <button type="button" class="').concat(c.confirm, '"></button>\n     <button type="button" class="').concat(c.deny, '"></button>\n     <button type="button" class="').concat(c.cancel, '"></button>\n   </div>\n   <div class="').concat(c.footer, '"></div>\n   <div class="').concat(c["timer-progress-bar-container"], '">\n     <div class="').concat(c["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, "")
      , it = ()=>{
        Se.isVisible() && Se.resetValidationMessage()
    }
      , rt = t=>{
        var e = (()=>{
            const t = d();
            return !!t && (t.remove(),
            W([document.documentElement, document.body], [c["no-backdrop"], c["toast-shown"], c["has-column"]]),
            !0)
        }
        )();
        if (et())
            _("SweetAlert2 requires document to initialize");
        else {
            const n = document.createElement("div");
            n.className = c.container,
            e && H(n, c["no-transition"]),
            F(n, nt);
            const i = "string" == typeof (e = t.target) ? document.querySelector(e) : e;
            i.appendChild(n),
            (t=>{
                const e = E();
                e.setAttribute("role", t.toast ? "alert" : "dialog"),
                e.setAttribute("aria-live", t.toast ? "polite" : "assertive"),
                t.toast || e.setAttribute("aria-modal", "true")
            }
            )(t),
            t = i,
            "rtl" === window.getComputedStyle(t).direction && H(d(), c.rtl),
            (()=>{
                const t = E()
                  , e = U(t, c.input)
                  , n = U(t, c.file)
                  , i = t.querySelector(".".concat(c.range, " input"))
                  , r = t.querySelector(".".concat(c.range, " output"))
                  , o = U(t, c.select)
                  , s = t.querySelector(".".concat(c.checkbox, " input"))
                  , a = U(t, c.textarea);
                e.oninput = it,
                n.onchange = it,
                o.onchange = it,
                s.onchange = it,
                a.oninput = it,
                i.oninput = ()=>{
                    it(),
                    r.value = i.value
                }
                ,
                i.onchange = ()=>{
                    it(),
                    i.nextSibling.value = i.value
                }
            }
            )()
        }
    }
      , ot = (t,e)=>{
        t instanceof HTMLElement ? e.appendChild(t) : "object" == typeof t ? st(t, e) : t && F(e, t)
    }
      , st = (t,e)=>{
        t.jquery ? ((e,n)=>{
            if (e.textContent = "",
            0 in n)
                for (let t = 0; t in n; t++)
                    e.appendChild(n[t].cloneNode(!0));
            else
                e.appendChild(n.cloneNode(!0))
        }
        )(e, t) : F(e, t.toString())
    }
      , at = (()=>{
        if (et())
            return !1;
        var t = document.createElement("div")
          , e = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd oanimationend",
            animation: "animationend"
        };
        for (const n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n])
                return e[n];
        return !1
    }
    )();
    function lt(t, e, n) {
        K(t, n["show".concat(i(e), "Button")], "inline-block"),
        F(t, n["".concat(e, "ButtonText")]),
        t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]),
        t.className = c[e],
        $(t, n, "".concat(e, "Button")),
        H(t, n["".concat(e, "ButtonClass")])
    }
    var ut = {
        awaitingPromise: new WeakMap,
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    };
    const ct = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
      , dt = t=>{
        if (!vt[t.input])
            return _('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
        var e = gt(t.input);
        const n = vt[t.input](e, t);
        Y(n),
        setTimeout(()=>{
            q(n)
        }
        )
    }
      , ht = (t,e)=>{
        const n = R(E(), t);
        if (n) {
            (e=>{
                for (let t = 0; t < e.attributes.length; t++) {
                    var n = e.attributes[t].name;
                    ["type", "value", "style"].includes(n) || e.removeAttribute(n)
                }
            }
            )(n);
            for (const i in e)
                n.setAttribute(i, e[i])
        }
    }
      , ft = t=>{
        var e = gt(t.input);
        t.customClass && H(e, t.customClass.input)
    }
      , pt = (t,e)=>{
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
    }
      , mt = (t,e,n)=>{
        if (n.inputLabel) {
            t.id = c.input;
            const r = document.createElement("label");
            var i = c["input-label"];
            r.setAttribute("for", t.id),
            r.className = i,
            H(r, n.customClass.inputLabel),
            r.innerText = n.inputLabel,
            e.insertAdjacentElement("beforebegin", r)
        }
    }
      , gt = t=>(t = c[t] || c.input,
    U(E(), t))
      , vt = {};
    vt.text = vt.email = vt.password = vt.number = vt.tel = vt.url = (t,e)=>("string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : A(e.inputValue) || s('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof e.inputValue, '"')),
    mt(t, t, e),
    pt(t, e),
    t.type = e.input,
    t),
    vt.file = (t,e)=>(mt(t, t, e),
    pt(t, e),
    t),
    vt.range = (t,e)=>{
        const n = t.querySelector("input")
          , i = t.querySelector("output");
        return n.value = e.inputValue,
        n.type = e.input,
        i.value = e.inputValue,
        mt(n, t, e),
        t
    }
    ,
    vt.select = (t,e)=>{
        if (t.textContent = "",
        e.inputPlaceholder) {
            const n = document.createElement("option");
            F(n, e.inputPlaceholder),
            n.value = "",
            n.disabled = !0,
            n.selected = !0,
            t.appendChild(n)
        }
        return mt(t, t, e),
        t
    }
    ,
    vt.radio = t=>(t.textContent = "",
    t),
    vt.checkbox = (t,e)=>{
        const n = R(E(), "checkbox");
        n.value = 1,
        n.id = c.checkbox,
        n.checked = Boolean(e.inputValue);
        var i = t.querySelector("span");
        return F(i, e.inputPlaceholder),
        t
    }
    ,
    vt.textarea = (n,t)=>(n.value = t.inputValue,
    pt(n, t),
    mt(n, n, t),
    setTimeout(()=>{
        if ("MutationObserver"in window) {
            const e = parseInt(window.getComputedStyle(E()).width);
            new MutationObserver(()=>{
                var t = n.offsetWidth + (t = n,
                parseInt(window.getComputedStyle(t).marginLeft) + parseInt(window.getComputedStyle(t).marginRight));
                t > e ? E().style.width = "".concat(t, "px") : E().style.width = null
            }
            ).observe(n, {
                attributes: !0,
                attributeFilter: ["style"]
            })
        }
    }
    ),
    n);
    const yt = (t,e)=>{
        const n = p();
        $(n, e, "htmlContainer"),
        e.html ? (ot(e.html, n),
        Y(n, "block")) : e.text ? (n.textContent = e.text,
        Y(n, "block")) : Z(n),
        ((t,i)=>{
            const r = E()
              , o = !(t = ut.innerParams.get(t)) || i.input !== t.input;
            ct.forEach(t=>{
                var e = c[t];
                const n = U(r, e);
                ht(t, i.inputAttributes),
                n.className = e,
                o && Z(n)
            }
            ),
            i.input && (o && dt(i),
            ft(i))
        }
        )(t, e)
    }
      , bt = (t,e)=>{
        for (const n in a)
            e.icon !== n && W(t, a[n]);
        H(t, a[e.icon]),
        xt(t, e),
        _t(),
        $(t, e, "icon")
    }
      , _t = ()=>{
        const t = E();
        var e = window.getComputedStyle(t).getPropertyValue("background-color");
        const n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for (let t = 0; t < n.length; t++)
            n[t].style.backgroundColor = e
    }
      , wt = (t,e)=>{
        var n;
        t.textContent = "",
        e.iconHtml ? F(t, Ct(e.iconHtml)) : "success" === e.icon ? F(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? F(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : (n = {
            question: "?",
            warning: "!",
            info: "i"
        },
        F(t, Ct(n[e.icon])))
    }
      , xt = (t,e)=>{
        if (e.iconColor) {
            t.style.color = e.iconColor,
            t.style.borderColor = e.iconColor;
            for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
                X(t, n, "backgroundColor", e.iconColor);
            X(t, ".swal2-success-ring", "borderColor", e.iconColor)
        }
    }
      , Ct = t=>'<div class="'.concat(c["icon-content"], '">').concat(t, "</div>")
      , At = (t,e)=>{
        var n, i, r, o;
        (t=>{
            var e = d();
            const n = E();
            t.toast ? (V(e, "width", t.width),
            n.style.width = "100%",
            n.insertBefore(O(), h())) : V(n, "width", t.width),
            V(n, "padding", t.padding),
            t.background && (n.style.background = t.background),
            Z(k()),
            e = n,
            t = t,
            e.className = "".concat(c.popup, " ").concat(G(e) ? t.showClass.popup : ""),
            t.toast ? (H([document.documentElement, document.body], c["toast-shown"]),
            H(e, c.toast)) : H(e, c.modal),
            $(e, t, "popup"),
            "string" == typeof t.customClass && H(e, t.customClass),
            t.icon && H(e, c["icon-".concat(t.icon)])
        }
        )(e),
        n = e,
        (o = d()) && (r = o,
        "string" == typeof (i = n.backdrop) ? r.style.background = i : i || H([document.documentElement, document.body], c["no-backdrop"]),
        r = o,
        (i = n.position)in c ? H(r, c[i]) : (s('The "position" parameter is not valid, defaulting to "center"'),
        H(r, c.center)),
        i = o,
        !(r = n.grow) || "string" != typeof r || (r = "grow-".concat(r))in c && H(i, c[r]),
        $(o, n, "container")),
        (i=>{
            const r = T();
            if (!i.progressSteps || 0 === i.progressSteps.length)
                return Z(r);
            Y(r),
            r.textContent = "",
            i.currentProgressStep >= i.progressSteps.length && s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
            i.progressSteps.forEach((t,e)=>{
                var n, t = (n = t,
                t = document.createElement("li"),
                H(t, c["progress-step"]),
                F(t, n),
                t);
                r.appendChild(t),
                e === i.currentProgressStep && H(t, c["active-progress-step"]),
                e !== i.progressSteps.length - 1 && (e = (t=>{
                    const e = document.createElement("li");
                    return H(e, c["progress-step-line"]),
                    t.progressStepsDistance && (e.style.width = t.progressStepsDistance),
                    e
                }
                )(i),
                r.appendChild(e))
            }
            )
        }
        )(e),
        r = t,
        o = e,
        n = ut.innerParams.get(r),
        r = h(),
        n && o.icon === n.icon ? (wt(r, o),
        bt(r, o)) : o.icon || o.iconHtml ? o.icon && -1 === Object.keys(a).indexOf(o.icon) ? (_('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')),
        Z(r)) : (Y(r),
        wt(r, o),
        bt(r, o),
        H(r, o.showClass.icon)) : Z(r),
        (t=>{
            const e = m();
            if (!t.imageUrl)
                return Z(e);
            Y(e, ""),
            e.setAttribute("src", t.imageUrl),
            e.setAttribute("alt", t.imageAlt),
            V(e, "width", t.imageWidth),
            V(e, "height", t.imageHeight),
            e.className = c.image,
            $(e, t, "image")
        }
        )(e),
        (t=>{
            const e = f();
            K(e, t.title || t.titleText, "block"),
            t.title && ot(t.title, e),
            t.titleText && (e.innerText = t.titleText),
            $(e, t, "title")
        }
        )(e),
        (t=>{
            const e = M();
            F(e, t.closeButtonHtml),
            $(e, t, "closeButton"),
            K(e, t.showCloseButton),
            e.setAttribute("aria-label", t.closeButtonAriaLabel)
        }
        )(e),
        yt(t, e),
        (t=>{
            const e = P();
            var n, i, r, o, s = O(), a = S(), l = D(), u = L();
            (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? Y : Z)(e),
            $(e, t, "actions"),
            lt(a, "confirm", t),
            lt(l, "deny", t),
            lt(u, "cancel", t),
            n = a,
            i = l,
            r = u,
            (o = t).buttonsStyling ? (H([n, i, r], c.styled),
            o.confirmButtonColor && (n.style.backgroundColor = o.confirmButtonColor,
            H(n, c["default-outline"])),
            o.denyButtonColor && (i.style.backgroundColor = o.denyButtonColor,
            H(i, c["default-outline"])),
            o.cancelButtonColor && (r.style.backgroundColor = o.cancelButtonColor,
            H(r, c["default-outline"]))) : W([n, i, r], c.styled),
            t.reverseButtons && (e.insertBefore(u, s),
            e.insertBefore(l, s),
            e.insertBefore(a, s)),
            F(s, t.loaderHtml),
            $(s, t, "loader")
        }
        )(e),
        r = e,
        t = g(),
        K(t, r.footer),
        r.footer && ot(r.footer, t),
        $(t, r, "footer"),
        "function" == typeof e.didRender && e.didRender(E())
    }
      , Et = ()=>S() && S().click()
      , Tt = t=>{
        let e = E();
        e || Se.fire(),
        e = E();
        var n = O();
        y() ? Z(h()) : ((t,e)=>{
            var n = P();
            const i = O();
            !e && G(S()) && (e = S()),
            Y(n),
            e && (Z(e),
            i.setAttribute("data-button-to-replace", e.className)),
            i.parentNode.insertBefore(i, e),
            H([t, n], c.loading)
        }
        )(e, t),
        Y(n),
        e.setAttribute("data-loading", !0),
        e.setAttribute("aria-busy", !0),
        e.focus()
    }
      , kt = {}
      , St = i=>new Promise(t=>{
        if (!i)
            return t();
        var e = window.scrollX
          , n = window.scrollY;
        kt.restoreFocusTimeout = setTimeout(()=>{
            kt.previousActiveElement && kt.previousActiveElement.focus ? (kt.previousActiveElement.focus(),
            kt.previousActiveElement = null) : document.body && document.body.focus(),
            t()
        }
        , 100),
        window.scrollTo(e, n)
    }
    )
      , Dt = ()=>{
        if (kt.timeout)
            return (()=>{
                const t = I();
                var e = parseInt(window.getComputedStyle(t).width);
                t.style.removeProperty("transition"),
                t.style.width = "100%";
                var n = parseInt(window.getComputedStyle(t).width)
                  , n = parseInt(e / n * 100);
                t.style.removeProperty("transition"),
                t.style.width = "".concat(n, "%")
            }
            )(),
            kt.timeout.stop()
    }
      , Ot = ()=>{
        if (kt.timeout) {
            var t = kt.timeout.start();
            return tt(t),
            t
        }
    }
    ;
    let Lt = !1;
    const Pt = {}
      , It = e=>{
        for (let t = e.target; t && t !== document; t = t.parentNode)
            for (const i in Pt) {
                var n = t.getAttribute(i);
                if (n)
                    return void Pt[i].fire({
                        template: n
                    })
            }
    }
      , Mt = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
    }
      , Nt = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
      , jt = {}
      , Ft = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
      , zt = t=>Object.prototype.hasOwnProperty.call(Mt, t)
      , $t = t=>jt[t]
      , Rt = t=>{
        !t.backdrop && t.allowOutsideClick && s('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for (const r in t)
            i = r,
            zt(i) || s('Unknown parameter "'.concat(i, '"')),
            t.toast && (n = r,
            Ft.includes(n) && s('The parameter "'.concat(n, '" is incompatible with toasts'))),
            n = r,
            $t(n) && (e = n,
            i = $t(n),
            i = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(i, '" instead.'),
            o.includes(i) || (o.push(i),
            s(i)));
        var e, n, i
    }
    ;
    var qt = Object.freeze({
        isValidParameter: zt,
        isUpdatableParameter: t=>-1 !== Nt.indexOf(t),
        isDeprecatedParameter: $t,
        argsToParams: n=>{
            const i = {};
            return "object" != typeof n[0] || r(n[0]) ? ["title", "html", "icon"].forEach((t,e)=>{
                "string" == typeof (e = n[e]) || r(e) ? i[t] = e : void 0 !== e && _("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(typeof e))
            }
            ) : Object.assign(i, n[0]),
            i
        }
        ,
        isVisible: ()=>G(E()),
        clickConfirm: Et,
        clickDeny: ()=>D() && D().click(),
        clickCancel: ()=>L() && L().click(),
        getContainer: d,
        getPopup: E,
        getTitle: f,
        getHtmlContainer: p,
        getImage: m,
        getIcon: h,
        getInputLabel: ()=>l(c["input-label"]),
        getCloseButton: M,
        getActions: P,
        getConfirmButton: S,
        getDenyButton: D,
        getCancelButton: L,
        getLoader: O,
        getFooter: g,
        getTimerProgressBar: I,
        getFocusableElements: v,
        getValidationMessage: k,
        isLoading: ()=>E().hasAttribute("data-loading"),
        fire: function(...t) {
            return new this(...t)
        },
        mixin: function(n) {
            class t extends this {
                _main(t, e) {
                    return super._main(t, Object.assign({}, n, e))
                }
            }
            return t
        },
        showLoading: Tt,
        enableLoading: Tt,
        getTimerLeft: ()=>kt.timeout && kt.timeout.getTimerLeft(),
        stopTimer: Dt,
        resumeTimer: Ot,
        toggleTimer: ()=>{
            var t = kt.timeout;
            return t && (t.running ? Dt : Ot)()
        }
        ,
        increaseTimer: t=>{
            if (kt.timeout)
                return t = kt.timeout.increase(t),
                tt(t, !0),
                t
        }
        ,
        isTimerRunning: ()=>kt.timeout && kt.timeout.isRunning(),
        bindClickHandler: function(t="data-swal-template") {
            Pt[t] = this,
            Lt || (document.body.addEventListener("click", It),
            Lt = !0)
        }
    });
    function Bt() {
        var t, e = ut.innerParams.get(this);
        if (e) {
            const n = ut.domCache.get(this);
            Z(n.loader),
            y() ? e.icon && Y(h()) : (t = n,
            (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? Y(e[0], "inline-block") : G(S()) || G(D()) || G(L()) || Z(t.actions)),
            W([n.popup, n.actions], c.loading),
            n.popup.removeAttribute("aria-busy"),
            n.popup.removeAttribute("data-loading"),
            n.confirmButton.disabled = !1,
            n.denyButton.disabled = !1,
            n.cancelButton.disabled = !1
        }
    }
    const Ht = ()=>{
        null === j.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (j.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
        document.body.style.paddingRight = "".concat(j.previousBodyPadding + (()=>{
            const t = document.createElement("div");
            t.className = c["scrollbar-measure"],
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        )(), "px"))
    }
      , Wt = ()=>{
        navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || E().scrollHeight > window.innerHeight - 44 && (d().style.paddingBottom = "".concat(44, "px"))
    }
      , Ut = ()=>{
        const t = d();
        let i;
        t.ontouchstart = t=>{
            var e, n;
            i = (n = (e = t).target,
            t = d(),
            !(Vt(e) || Yt(e) || n !== t && (Q(t) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || Q(p()) && p().contains(n))))
        }
        ,
        t.ontouchmove = t=>{
            i && (t.preventDefault(),
            t.stopPropagation())
        }
    }
      , Vt = t=>t.touches && t.touches.length && "stylus" === t.touches[0].touchType
      , Yt = t=>t.touches && 1 < t.touches.length
      , Zt = ()=>{
        const t = u(document.body.children);
        t.forEach(t=>{
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")),
            t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        }
        )
    }
    ;
    var Xt = {
        swalPromiseResolve: new WeakMap,
        swalPromiseReject: new WeakMap
    };
    function Kt(t, e, n, i) {
        y() ? te(t, i) : (St(n).then(()=>te(t, i)),
        kt.keydownTarget.removeEventListener("keydown", kt.keydownHandler, {
            capture: kt.keydownListenerCapture
        }),
        kt.keydownHandlerAdded = !1),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (e.setAttribute("style", "display:none !important"),
        e.removeAttribute("class"),
        e.innerHTML = "") : e.remove(),
        N() && (null !== j.previousBodyPadding && (document.body.style.paddingRight = "".concat(j.previousBodyPadding, "px"),
        j.previousBodyPadding = null),
        z(document.body, c.iosfix) && (e = parseInt(document.body.style.top, 10),
        W(document.body, c.iosfix),
        document.body.style.top = "",
        document.body.scrollTop = -1 * e),
        Zt()),
        W([document.documentElement, document.body], [c.shown, c["height-auto"], c["no-backdrop"], c["toast-shown"]])
    }
    function Gt(t) {
        t = void 0 !== (n = t) ? Object.assign({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, n) : {
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !0
        };
        const e = Xt.swalPromiseResolve.get(this);
        var n = (t=>{
            var e = E();
            if (!e)
                return !1;
            var n = ut.innerParams.get(t);
            if (!n || z(e, n.hideClass.popup))
                return !1;
            W(e, n.showClass.popup),
            H(e, n.hideClass.popup);
            var i, r = d();
            return W(r, n.showClass.backdrop),
            H(r, n.hideClass.backdrop),
            i = t,
            r = e,
            t = n,
            e = d(),
            n = at && J(r),
            "function" == typeof t.willClose && t.willClose(r),
            n ? Jt(i, r, e, t.returnFocus, t.didClose) : Kt(i, e, t.returnFocus, t.didClose),
            !0
        }
        )(this);
        this.isAwaitingPromise() ? t.isDismissed || (Qt(this),
        e(t)) : n && e(t)
    }
    const Qt = t=>{
        t.isAwaitingPromise() && (ut.awaitingPromise.delete(t),
        ut.innerParams.get(t) || t._destroy())
    }
      , Jt = (t,e,n,i,r)=>{
        kt.swalCloseEventFinishedCallback = Kt.bind(null, t, n, i, r),
        e.addEventListener(at, function(t) {
            t.target === e && (kt.swalCloseEventFinishedCallback(),
            delete kt.swalCloseEventFinishedCallback)
        })
    }
      , te = (t,e)=>{
        setTimeout(()=>{
            "function" == typeof e && e.bind(t.params)(),
            t._destroy()
        }
        )
    }
    ;
    function ee(t, e, n) {
        const i = ut.domCache.get(t);
        e.forEach(t=>{
            i[t].disabled = n
        }
        )
    }
    function ne(t, e) {
        if (!t)
            return !1;
        if ("radio" === t.type) {
            const n = t.parentNode.parentNode
              , i = n.querySelectorAll("input");
            for (let t = 0; t < i.length; t++)
                i[t].disabled = e
        } else
            t.disabled = e
    }
    class ie {
        constructor(t, e) {
            this.callback = t,
            this.remaining = e,
            this.running = !1,
            this.start()
        }
        start() {
            return this.running || (this.running = !0,
            this.started = new Date,
            this.id = setTimeout(this.callback, this.remaining)),
            this.remaining
        }
        stop() {
            return this.running && (this.running = !1,
            clearTimeout(this.id),
            this.remaining -= new Date - this.started),
            this.remaining
        }
        increase(t) {
            var e = this.running;
            return e && this.stop(),
            this.remaining += t,
            e && this.start(),
            this.remaining
        }
        getTimerLeft() {
            return this.running && (this.stop(),
            this.start()),
            this.remaining
        }
        isRunning() {
            return this.running
        }
    }
    var re = {
        email: (t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address"),
        url: (t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
    };
    const oe = ["swal-title", "swal-html", "swal-footer"]
      , se = t=>(t = "string" == typeof t.template ? document.querySelector(t.template) : t.template) ? ((t=>{
        const e = oe.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        u(t.children).forEach(t=>{
            t = t.tagName.toLowerCase();
            -1 === e.indexOf(t) && s("Unrecognized element <".concat(t, ">"))
        }
        )
    }
    )(t = t.content),
    Object.assign((t=>{
        const i = {};
        return u(t.querySelectorAll("swal-param")).forEach(t=>{
            ae(t, ["name", "value"]);
            var e = t.getAttribute("name");
            let n = t.getAttribute("value");
            "boolean" == typeof Mt[e] && "false" === n && (n = !1),
            "object" == typeof Mt[e] && (n = JSON.parse(n)),
            i[e] = n
        }
        ),
        i
    }
    )(t), (t=>{
        const n = {};
        return u(t.querySelectorAll("swal-button")).forEach(t=>{
            ae(t, ["type", "color", "aria-label"]);
            var e = t.getAttribute("type");
            n["".concat(e, "ButtonText")] = t.innerHTML,
            n["show".concat(i(e), "Button")] = !0,
            t.hasAttribute("color") && (n["".concat(e, "ButtonColor")] = t.getAttribute("color")),
            t.hasAttribute("aria-label") && (n["".concat(e, "ButtonAriaLabel")] = t.getAttribute("aria-label"))
        }
        ),
        n
    }
    )(t), (t=>{
        const e = {}
          , n = t.querySelector("swal-image");
        return n && (ae(n, ["src", "width", "height", "alt"]),
        n.hasAttribute("src") && (e.imageUrl = n.getAttribute("src")),
        n.hasAttribute("width") && (e.imageWidth = n.getAttribute("width")),
        n.hasAttribute("height") && (e.imageHeight = n.getAttribute("height")),
        n.hasAttribute("alt") && (e.imageAlt = n.getAttribute("alt"))),
        e
    }
    )(t), (t=>{
        const e = {}
          , n = t.querySelector("swal-icon");
        return n && (ae(n, ["type", "color"]),
        n.hasAttribute("type") && (e.icon = n.getAttribute("type")),
        n.hasAttribute("color") && (e.iconColor = n.getAttribute("color")),
        e.iconHtml = n.innerHTML),
        e
    }
    )(t), (t=>{
        const n = {}
          , e = t.querySelector("swal-input");
        return e && (ae(e, ["type", "label", "placeholder", "value"]),
        n.input = e.getAttribute("type") || "text",
        e.hasAttribute("label") && (n.inputLabel = e.getAttribute("label")),
        e.hasAttribute("placeholder") && (n.inputPlaceholder = e.getAttribute("placeholder")),
        e.hasAttribute("value") && (n.inputValue = e.getAttribute("value"))),
        (t = t.querySelectorAll("swal-input-option")).length && (n.inputOptions = {},
        u(t).forEach(t=>{
            ae(t, ["value"]);
            var e = t.getAttribute("value")
              , t = t.innerHTML;
            n.inputOptions[e] = t
        }
        )),
        n
    }
    )(t), ((t,e)=>{
        const n = {};
        for (const i in e) {
            const r = e[i]
              , o = t.querySelector(r);
            o && (ae(o, []),
            n[r.replace(/^swal-/, "")] = o.innerHTML.trim())
        }
        return n
    }
    )(t, oe))) : {}
      , ae = (e,n)=>{
        u(e.attributes).forEach(t=>{
            -1 === n.indexOf(t.name) && s(['Unrecognized attribute "'.concat(t.name, '" on <').concat(e.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")])
        }
        )
    }
      , le = t=>{
        const n = d()
          , i = E();
        "function" == typeof t.willOpen && t.willOpen(i);
        var e, r, o, s, a, l = window.getComputedStyle(document.body).overflowY;
        o = n,
        s = i,
        a = t,
        H(o, a.showClass.backdrop),
        s.style.setProperty("opacity", "0", "important"),
        Y(s, "grid"),
        setTimeout(()=>{
            H(s, a.showClass.popup),
            s.style.removeProperty("opacity")
        }
        , 10),
        H([document.documentElement, document.body], c.shown),
        a.heightAuto && a.backdrop && !a.toast && H([document.documentElement, document.body], c["height-auto"]),
        setTimeout(()=>{
            var t, e;
            t = n,
            e = i,
            at && J(e) ? (t.style.overflowY = "hidden",
            e.addEventListener(at, ue)) : t.style.overflowY = "auto"
        }
        , 10),
        N() && (e = n,
        r = t.scrollbarPadding,
        o = l,
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !z(document.body, c.iosfix) && (l = document.body.scrollTop,
        document.body.style.top = "".concat(-1 * l, "px"),
        H(document.body, c.iosfix),
        Ut(),
        Wt()),
        r && "hidden" !== o && Ht(),
        setTimeout(()=>{
            e.scrollTop = 0
        }
        ),
        (()=>{
            const t = u(document.body.children);
            t.forEach(t=>{
                t === d() || t.contains(d()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")),
                t.setAttribute("aria-hidden", "true"))
            }
            )
        }
        )()),
        y() || kt.previousActiveElement || (kt.previousActiveElement = document.activeElement),
        "function" == typeof t.didOpen && setTimeout(()=>t.didOpen(i)),
        W(n, c["no-transition"])
    }
      , ue = t=>{
        const e = E();
        if (t.target === e) {
            const n = d();
            e.removeEventListener(at, ue),
            n.style.overflowY = "auto"
        }
    }
      , ce = {
        select: (t,e,r)=>{
            const o = U(t, c.select)
              , s = (t,e,n)=>{
                const i = document.createElement("option");
                i.value = n,
                F(i, e),
                i.selected = he(n, r.inputValue),
                t.appendChild(i)
            }
            ;
            e.forEach(t=>{
                var e = t[0];
                const n = t[1];
                if (Array.isArray(n)) {
                    const i = document.createElement("optgroup");
                    i.label = e,
                    i.disabled = !1,
                    o.appendChild(i),
                    n.forEach(t=>s(i, t[1], t[0]))
                } else
                    s(o, n, e)
            }
            ),
            o.focus()
        }
        ,
        radio: (t,e,o)=>{
            const s = U(t, c.radio);
            e.forEach(t=>{
                var e = t[0]
                  , t = t[1];
                const n = document.createElement("input")
                  , i = document.createElement("label");
                n.type = "radio",
                n.name = c.radio,
                n.value = e,
                he(e, o.inputValue) && (n.checked = !0);
                const r = document.createElement("span");
                F(r, t),
                r.className = c.label,
                i.appendChild(n),
                i.appendChild(r),
                s.appendChild(i)
            }
            );
            const n = s.querySelectorAll("input");
            n.length && n[0].focus()
        }
    }
      , de = n=>{
        const i = [];
        return "undefined" != typeof Map && n instanceof Map ? n.forEach((t,e)=>{
            let n = t;
            "object" == typeof n && (n = de(n)),
            i.push([e, n])
        }
        ) : Object.keys(n).forEach(t=>{
            let e = n[t];
            "object" == typeof e && (e = de(e)),
            i.push([t, e])
        }
        ),
        i
    }
      , he = (t,e)=>e && e.toString() === t.toString()
      , fe = (i,t)=>{
        var e = ut.innerParams.get(i)
          , n = (t=>{
            const e = i.getInput();
            if (!e)
                return null;
            switch (t.input) {
            case "checkbox":
                return e.checked ? 1 : 0;
            case "radio":
                return (n = e).checked ? n.value : null;
            case "file":
                return (n = e).files.length ? null !== n.getAttribute("multiple") ? n.files : n.files[0] : null;
            default:
                return t.inputAutoTrim ? e.value.trim() : e.value
            }
            var n
        }
        )(e);
        e.inputValidator ? ((e,n,i)=>{
            const t = ut.innerParams.get(e);
            e.disableInput();
            const r = Promise.resolve().then(()=>C(t.inputValidator(n, t.validationMessage)));
            r.then(t=>{
                e.enableButtons(),
                e.enableInput(),
                t ? e.showValidationMessage(t) : ("deny" === i ? pe : ve)(e, n)
            }
            )
        }
        )(i, n, t) : i.getInput().checkValidity() ? ("deny" === t ? pe : ve)(i, n) : (i.enableButtons(),
        i.showValidationMessage(e.validationMessage))
    }
      , pe = (e,n)=>{
        const t = ut.innerParams.get(e || void 0);
        if (t.showLoaderOnDeny && Tt(D()),
        t.preDeny) {
            ut.awaitingPromise.set(e || void 0, !0);
            const i = Promise.resolve().then(()=>C(t.preDeny(n, t.validationMessage)));
            i.then(t=>{
                !1 === t ? e.hideLoading() : e.closePopup({
                    isDenied: !0,
                    value: void 0 === t ? n : t
                })
            }
            ).catch(t=>ge(e || void 0, t))
        } else
            e.closePopup({
                isDenied: !0,
                value: n
            })
    }
      , me = (t,e)=>{
        t.closePopup({
            isConfirmed: !0,
            value: e
        })
    }
      , ge = (t,e)=>{
        t.rejectPromise(e)
    }
      , ve = (e,n)=>{
        const t = ut.innerParams.get(e || void 0);
        if (t.showLoaderOnConfirm && Tt(),
        t.preConfirm) {
            e.resetValidationMessage(),
            ut.awaitingPromise.set(e || void 0, !0);
            const i = Promise.resolve().then(()=>C(t.preConfirm(n, t.validationMessage)));
            i.then(t=>{
                G(k()) || !1 === t ? e.hideLoading() : me(e, void 0 === t ? n : t)
            }
            ).catch(t=>ge(e || void 0, t))
        } else
            me(e, n)
    }
      , ye = (t,e,n)=>{
        const i = v();
        if (i.length)
            return (e += n) === i.length ? e = 0 : -1 === e && (e = i.length - 1),
            i[e].focus();
        E().focus()
    }
      , be = ["ArrowRight", "ArrowDown"]
      , _e = ["ArrowLeft", "ArrowUp"]
      , we = (t,e,n)=>{
        var i, r, o = ut.innerParams.get(t);
        o && (o.stopKeydownPropagation && e.stopPropagation(),
        "Enter" === e.key ? (i = t,
        r = o,
        (t = e).isComposing || t.target && i.getInput() && t.target.outerHTML === i.getInput().outerHTML && (["textarea", "file"].includes(r.input) || (Et(),
        t.preventDefault()))) : "Tab" === e.key ? (t=>{
            var e = t.target
              , n = v();
            let i = -1;
            for (let t = 0; t < n.length; t++)
                if (e === n[t]) {
                    i = t;
                    break
                }
            t.shiftKey ? ye(0, i, -1) : ye(0, i, 1),
            t.stopPropagation(),
            t.preventDefault()
        }
        )(e) : [...be, ..._e].includes(e.key) ? (t=>{
            const e = S()
              , n = D()
              , i = L();
            if ([e, n, i].includes(document.activeElement)) {
                t = be.includes(t) ? "nextElementSibling" : "previousElementSibling";
                const r = document.activeElement[t];
                r && r.focus()
            }
        }
        )(e.key) : "Escape" === e.key && (e = e,
        o = o,
        n = n,
        w(o.allowEscapeKey) && (e.preventDefault(),
        n(b.esc))))
    }
    ;
    let xe = !1;
    const Ce = (t,e)=>{
        if (!e.toast)
            return w(e.allowEnterKey) ? (t = t,
            void (((e = e).focusDeny && G(t.denyButton) ? (t.denyButton.focus(),
            0) : e.focusCancel && G(t.cancelButton) ? (t.cancelButton.focus(),
            0) : !e.focusConfirm || !G(t.confirmButton) || (t.confirmButton.focus(),
            0)) && ye(0, -1, 1))) : void (document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur())
    }
      , Ae = t=>{
        t.isAwaitingPromise() ? (Ee(ut, t),
        ut.awaitingPromise.set(t, !0)) : (Ee(Xt, t),
        Ee(ut, t))
    }
      , Ee = (t,e)=>{
        for (const n in t)
            t[n].delete(e)
    }
    ;
    t = Object.freeze({
        hideLoading: Bt,
        disableLoading: Bt,
        getInput: function(t) {
            var e = ut.innerParams.get(t || this);
            return (t = ut.domCache.get(t || this)) ? R(t.popup, e.input) : null
        },
        close: Gt,
        isAwaitingPromise: function() {
            return !!ut.awaitingPromise.get(this)
        },
        rejectPromise: function(t) {
            const e = Xt.swalPromiseReject.get(this);
            Qt(this),
            e && e(t)
        },
        closePopup: Gt,
        closeModal: Gt,
        closeToast: Gt,
        enableButtons: function() {
            ee(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            ee(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        },
        enableInput: function() {
            return ne(this.getInput(), !1)
        },
        disableInput: function() {
            return ne(this.getInput(), !0)
        },
        showValidationMessage: function(t) {
            const e = ut.domCache.get(this);
            var n = ut.innerParams.get(this);
            F(e.validationMessage, t),
            e.validationMessage.className = c["validation-message"],
            n.customClass && n.customClass.validationMessage && H(e.validationMessage, n.customClass.validationMessage),
            Y(e.validationMessage);
            const i = this.getInput();
            i && (i.setAttribute("aria-invalid", !0),
            i.setAttribute("aria-describedby", c["validation-message"]),
            q(i),
            H(i, c.inputerror))
        },
        resetValidationMessage: function() {
            var t = ut.domCache.get(this);
            t.validationMessage && Z(t.validationMessage);
            const e = this.getInput();
            e && (e.removeAttribute("aria-invalid"),
            e.removeAttribute("aria-describedby"),
            W(e, c.inputerror))
        },
        getProgressSteps: function() {
            return ut.domCache.get(this).progressSteps
        },
        _main: function(t, e={}) {
            var n;
            Rt(Object.assign({}, e, t)),
            kt.currentInstance && (kt.currentInstance._destroy(),
            N() && Zt()),
            kt.currentInstance = this,
            r = t = ((t,e)=>{
                const n = se(t)
                  , i = Object.assign({}, Mt, e, n, t);
                return i.showClass = Object.assign({}, Mt.showClass, i.showClass),
                i.hideClass = Object.assign({}, Mt.hideClass, i.hideClass),
                i
            }
            )(t, e),
            (n = r).inputValidator || Object.keys(re).forEach(t=>{
                n.input === t && (n.inputValidator = re[t])
            }
            ),
            r.showLoaderOnConfirm && !r.preConfirm && s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
            (i = r).target && ("string" != typeof i.target || document.querySelector(i.target)) && ("string" == typeof i.target || i.target.appendChild) || (s('Target parameter is not valid, defaulting to "body"'),
            i.target = "body"),
            "string" == typeof r.title && (r.title = r.title.split("\n").join("<br />")),
            rt(r),
            Object.freeze(t),
            kt.timeout && (kt.timeout.stop(),
            delete kt.timeout),
            clearTimeout(kt.restoreFocusTimeout);
            var g, v, y, i, r, e = (i = this,
            r = {
                popup: E(),
                container: d(),
                actions: P(),
                confirmButton: S(),
                denyButton: D(),
                cancelButton: L(),
                loader: O(),
                closeButton: M(),
                validationMessage: k(),
                progressSteps: T()
            },
            ut.domCache.set(i, r),
            r);
            return At(this, t),
            ut.innerParams.set(this, t),
            g = this,
            v = e,
            y = t,
            new Promise((t,e)=>{
                const n = t=>{
                    g.closePopup({
                        isDismissed: !0,
                        dismiss: t
                    })
                }
                ;
                var i, r, o, s, a, l, u, c, d, h, f, p, m;
                Xt.swalPromiseResolve.set(g, t),
                Xt.swalPromiseReject.set(g, e),
                v.confirmButton.onclick = ()=>(t=>{
                    var e = ut.innerParams.get(t);
                    t.disableButtons(),
                    e.input ? fe(t, "confirm") : ve(t, !0)
                }
                )(g),
                v.denyButton.onclick = ()=>(t=>{
                    var e = ut.innerParams.get(t);
                    t.disableButtons(),
                    e.returnInputValueOnDeny ? fe(t, "deny") : pe(t, !1)
                }
                )(g),
                v.cancelButton.onclick = ()=>((t,e)=>{
                    t.disableButtons(),
                    e(b.cancel)
                }
                )(g, n),
                v.closeButton.onclick = ()=>n(b.close),
                t = v,
                e = n,
                ut.innerParams.get(i = g).toast ? (p = i,
                m = e,
                t.popup.onclick = ()=>{
                    var t = ut.innerParams.get(p);
                    t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton || t.timer || t.input || m(b.close)
                }
                ) : ((f = t).popup.onmousedown = ()=>{
                    f.container.onmouseup = function(t) {
                        f.container.onmouseup = void 0,
                        t.target === f.container && (xe = !0)
                    }
                }
                ,
                (h = t).container.onmousedown = ()=>{
                    h.popup.onmouseup = function(t) {
                        h.popup.onmouseup = void 0,
                        t.target !== h.popup && !h.popup.contains(t.target) || (xe = !0)
                    }
                }
                ,
                u = i,
                d = e,
                (c = t).container.onclick = t=>{
                    var e = ut.innerParams.get(u);
                    xe ? xe = !1 : t.target === c.container && w(e.allowOutsideClick) && d(b.backdrop)
                }
                ),
                r = g,
                t = kt,
                e = y,
                o = n,
                t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
                    capture: t.keydownListenerCapture
                }),
                t.keydownHandlerAdded = !1),
                e.toast || (t.keydownHandler = t=>we(r, t, o),
                t.keydownTarget = e.keydownListenerCapture ? window : E(),
                t.keydownListenerCapture = e.keydownListenerCapture,
                t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                    capture: t.keydownListenerCapture
                }),
                t.keydownHandlerAdded = !0),
                e = g,
                "select" === (t = y).input || "radio" === t.input ? ((e,n)=>{
                    const i = E()
                      , r = t=>ce[n.input](i, de(t), n);
                    x(n.inputOptions) || A(n.inputOptions) ? (Tt(S()),
                    C(n.inputOptions).then(t=>{
                        e.hideLoading(),
                        r(t)
                    }
                    )) : "object" == typeof n.inputOptions ? r(n.inputOptions) : _("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))
                }
                )(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (x(t.inputValue) || A(t.inputValue)) && (Tt(S()),
                ((e,n)=>{
                    const i = e.getInput();
                    Z(i),
                    C(n.inputValue).then(t=>{
                        i.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t),
                        Y(i),
                        i.focus(),
                        e.hideLoading()
                    }
                    ).catch(t=>{
                        _("Error in inputValue promise: ".concat(t)),
                        i.value = "",
                        Y(i),
                        i.focus(),
                        e.hideLoading()
                    }
                    )
                }
                )(e, t)),
                le(y),
                s = kt,
                a = y,
                l = n,
                t = I(),
                Z(t),
                a.timer && (s.timeout = new ie(()=>{
                    l("timer"),
                    delete s.timeout
                }
                ,a.timer),
                a.timerProgressBar && (Y(t),
                setTimeout(()=>{
                    s.timeout && s.timeout.running && tt(a.timer)
                }
                ))),
                Ce(v, y),
                setTimeout(()=>{
                    v.container.scrollTop = 0
                }
                )
            }
            )
        },
        update: function(e) {
            var t = E()
              , n = ut.innerParams.get(this);
            if (!t || z(t, n.hideClass.popup))
                return s("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const i = {};
            Object.keys(e).forEach(t=>{
                Se.isUpdatableParameter(t) ? i[t] = e[t] : s('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
            }
            ),
            n = Object.assign({}, n, i),
            At(this, n),
            ut.innerParams.set(this, n),
            Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, e),
                    writable: !1,
                    enumerable: !0
                }
            })
        },
        _destroy: function() {
            var t = ut.domCache.get(this);
            const e = ut.innerParams.get(this);
            e ? (t.popup && kt.swalCloseEventFinishedCallback && (kt.swalCloseEventFinishedCallback(),
            delete kt.swalCloseEventFinishedCallback),
            kt.deferDisposalTimer && (clearTimeout(kt.deferDisposalTimer),
            delete kt.deferDisposalTimer),
            "function" == typeof e.didDestroy && e.didDestroy(),
            Ae(this),
            delete this.params,
            delete kt.keydownHandler,
            delete kt.keydownTarget,
            delete kt.currentInstance) : Ae(this)
        }
    });
    let Te;
    class ke {
        constructor(...t) {
            "undefined" != typeof window && (Te = this,
            t = Object.freeze(this.constructor.argsToParams(t)),
            Object.defineProperties(this, {
                params: {
                    value: t,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                }
            }),
            t = this._main(this.params),
            ut.promise.set(this, t))
        }
        then(t) {
            const e = ut.promise.get(this);
            return e.then(t)
        }
        finally(t) {
            const e = ut.promise.get(this);
            return e.finally(t)
        }
    }
    Object.assign(ke.prototype, t),
    Object.assign(ke, qt),
    Object.keys(t).forEach(e=>{
        ke[e] = function(...t) {
            if (Te)
                return Te[e](...t)
        }
    }
    ),
    ke.DismissReason = b,
    ke.version = "11.1.9";
    const Se = ke;
    return Se.default = Se,
    Se
}),
void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function n(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function A(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function D(t) {
        return "string" == typeof t
    }
    function d(t) {
        return "function" == typeof t
    }
    function E(t) {
        return "number" == typeof t
    }
    function r(t) {
        return void 0 === t
    }
    function T(t) {
        return "object" == typeof t
    }
    function e() {
        return "undefined" != typeof window
    }
    function k(t) {
        return d(t) || D(t)
    }
    function i(t) {
        return (Et = ht(t, ue)) && cn
    }
    function O(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function S(t, e) {
        return !e && console.warn(t)
    }
    function o(t, e) {
        return t && (ue[t] = e) && Et && (Et[t] = e) || ue
    }
    function L() {
        return 0
    }
    function M(t) {
        var e, n, i = t[0];
        if (T(i) || d(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (n = ge.length; n-- && !ge[n].targetTest(i); )
                ;
            e = ge[n]
        }
        for (n = t.length; n--; )
            t[n] && (t[n]._gsap || (t[n]._gsap = new Ie(t[n],e))) || t.splice(n, 1);
        return t
    }
    function N(t) {
        return t._gsap || M(vt(t))[0]._gsap
    }
    function s(t, e, n) {
        return (n = t[e]) && d(n) ? t[e]() : r(n) && t.getAttribute && t.getAttribute(e) || n
    }
    function f(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function I(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function P(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }
    function j() {
        var t, e, n = de.length, i = de.slice(0);
        for (he = {},
        t = de.length = 0; t < n; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function a(t, e, n, i) {
        de.length && j(),
        t.render(e, n, i),
        de.length && j()
    }
    function l(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ae).length < 2 ? e : D(t) ? t.trim() : t
    }
    function u(t) {
        return t
    }
    function F(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }
    function c(t, e) {
        for (var n in e)
            n in t || "duration" === n || "ease" === n || (t[n] = e[n])
    }
    function h(t, e) {
        for (var n in e)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = T(e[n]) ? h(t[n] || (t[n] = {}), e[n]) : e[n]);
        return t
    }
    function z(t, e) {
        var n, i = {};
        for (n in t)
            n in e || (i[n] = t[n]);
        return i
    }
    function $(t) {
        var e = t.parent || wt
          , n = t.keyframes ? c : F;
        if (!1 !== t.inherit)
            for (; e; )
                n(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }
    function p(t, e, n, i) {
        void 0 === n && (n = "_first"),
        void 0 === i && (i = "_last");
        var r = e._prev
          , o = e._next;
        r ? r._next = o : t[n] === e && (t[n] = o),
        o ? o._prev = r : t[i] === e && (t[i] = r),
        e._next = e._prev = e.parent = null
    }
    function R(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function m(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; )
                n._dirty = 1,
                n = n.parent;
        return t
    }
    function g(t) {
        return t._repeat ? ft(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function v(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function w(t) {
        return t._end = P(t._start + (t._tDur / Math.abs(t._ts || t._rts || Yt) || 0))
    }
    function y(t, e) {
        var n = t._dp;
        return n && n.smoothChildTiming && t._ts && (t._start = P(n._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        w(t),
        n._dirty || m(n, t)),
        t
    }
    function b(t, e) {
        var n;
        if ((e._time || e._initted && !e._dur) && (n = v(t.rawTime(), e),
        (!e._dur || gt(0, e.totalDuration(), n) - e._tTime > Yt) && e.render(n, !0)),
        m(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp; )
                    0 <= n.rawTime() && n.totalTime(n._tTime),
                    n = n._dp;
            t._zTime = -Yt
        }
    }
    function q(t, e, n, i) {
        return e.parent && R(e),
        e._start = P((E(n) ? n : n || t !== wt ? mt(t, n, e) : t._time) + e._delay),
        e._end = P(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, n, i, r) {
            void 0 === n && (n = "_first");
            var o, s = t[i = void 0 === i ? "_last" : i];
            if (r)
                for (o = e[r]; s && s[r] > o; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[n],
            t[n] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = s,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        pt(e) || (t._recent = e),
        i || b(t, e),
        t
    }
    function B(t, e) {
        return (ue.ScrollTrigger || O("scrollTrigger", e)) && ue.ScrollTrigger.create(e, t)
    }
    function _(t, e, n, i) {
        return ze(t, e),
        !t._initted || !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && kt !== Ae.frame && (de.push(t),
        t._lazy = [e, i])
    }
    function x(t, e, n, i) {
        var r = t._repeat
          , o = P(e) || 0
          , e = t._tTime / t._tDur;
        return e && !i && (t._time *= o / t._dur),
        t._dur = o,
        t._tDur = r ? r < 0 ? 1e10 : P(o * (r + 1) + t._rDelay * r) : o,
        e && !i ? y(t, t._tTime = t._tDur * e) : t.parent && w(t),
        n || m(t.parent, t),
        t
    }
    function C(t) {
        return t instanceof je ? m(t) : x(t, t._dur)
    }
    function H(t, e, n) {
        var i, r, o = E(e[1]), s = (o ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s];
        if (o && (a.duration = e[1]),
        a.parent = n,
        t) {
            for (i = a,
            r = n; r && !("immediateRender"in i); )
                i = r.vars.defaults || {},
                r = !1 !== r.vars.inherit && r.parent;
            a.immediateRender = !1 !== i.immediateRender,
            t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
        }
        return new We(e[0],a,e[1 + s])
    }
    function W(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function U(t) {
        if ("string" != typeof t)
            return "";
        var e = le.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }
    function V(t, e) {
        return t && T(t) && "length"in t && (!e && !t.length || t.length - 1 in t && T(t[0])) && !t.nodeType && t !== xt
    }
    function Y(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Z(t) {
        if (d(t))
            return t;
        var f = T(t) ? t : {
            each: t
        }
          , p = Oe(f.ease)
          , m = f.from || 0
          , g = parseFloat(f.base) || 0
          , v = {}
          , t = 0 < m && m < 1
          , y = isNaN(m) || t
          , b = f.axis
          , _ = m
          , w = m;
        return D(m) ? _ = w = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !t && y && (_ = m[0],
        w = m[1]),
        function(t, e, n) {
            var i, r, o, s, a, l, u, c, d = (n || f).length, h = v[d];
            if (!h) {
                if (!(c = "auto" === f.grid ? 0 : (f.grid || [1, Vt])[1])) {
                    for (l = -Vt; l < (l = n[c++].getBoundingClientRect().left) && c < d; )
                        ;
                    c--
                }
                for (h = v[d] = [],
                i = y ? Math.min(c, d) * _ - .5 : m % c,
                r = y ? d * w / c - .5 : m / c | 0,
                u = Vt,
                a = l = 0; a < d; a++)
                    o = a % c - i,
                    s = r - (a / c | 0),
                    h[a] = s = b ? Math.abs("y" === b ? s : o) : Gt(o * o + s * s),
                    l < s && (l = s),
                    s < u && (u = s);
                "random" === m && Y(h),
                h.max = l - u,
                h.min = u,
                h.v = d = (parseFloat(f.amount) || parseFloat(f.each) * (d < c ? d - 1 : b ? "y" === b ? d / c : c : Math.max(c, d / c)) || 0) * ("edges" === m ? -1 : 1),
                h.b = d < 0 ? g - d : g,
                h.u = U(f.amount || f.each) || 0,
                p = p && d < 0 ? De(p) : p
            }
            return d = (h[t] - h.min) / h.max || 0,
            P(h.b + (p ? p(d) : d) * h.v) + h.u
        }
    }
    function X(n) {
        var i = Math.pow(10, ((n + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / n) * n * i;
            return (e - e % 1) / i + (E(t) ? 0 : U(t))
        }
    }
    function K(l, t) {
        var u, c, e = ee(l);
        return !e && T(l) && (u = e = l.radius || Vt,
        l.values ? (l = vt(l.values),
        (c = !E(l[0])) && (u *= u)) : l = X(l.increment)),
        W(t, e ? d(l) ? function(t) {
            return c = l(t),
            Math.abs(c - t) <= u ? c : t
        }
        : function(t) {
            for (var e, n, i = parseFloat(c ? t.x : t), r = parseFloat(c ? t.y : 0), o = Vt, s = 0, a = l.length; a--; )
                (e = c ? (e = l[a].x - i) * e + (n = l[a].y - r) * n : Math.abs(l[a] - i)) < o && (o = e,
                s = a);
            return s = !u || o <= u ? l[s] : t,
            c || s === t || E(t) ? s : s + U(t)
        }
        : X(l))
    }
    function G(t, e, n, i) {
        return W(ee(t) ? !e : !0 === n ? !!(n = 0) : !i, function() {
            return ee(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
        })
    }
    function Q(e, n, t) {
        return W(t, function(t) {
            return e[~~n(t)]
        })
    }
    function J(t) {
        for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
            i = t.indexOf(")", e),
            r = "[" === t.charAt(e + 7),
            n = t.substr(e + 7, i - e - 7).match(r ? ae : ne),
            s += t.substr(o, e - o) + G(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5),
            o = i + 1;
        return s + t.substr(o, t.length - o)
    }
    function tt(t, e, n) {
        var i, r, o, s = t.labels, a = Vt;
        for (i in s)
            (r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i,
            a = r);
        return o
    }
    function et(t) {
        return R(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && bt(t, "onInterrupt"),
        t
    }
    function nt(t, e, n) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * _e + .5 | 0
    }
    function it(t, e, n) {
        var i, r, o, s, a, l, u, c = t ? E(t) ? [t >> 16, t >> 8 & _e, t & _e] : 0 : we.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            we[t])
                c = we[t];
            else if ("#" === t.charAt(0)) {
                if (9 === (t = t.length < 6 ? "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "") : t).length)
                    return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & _e, c & _e, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & _e, t & _e]
            } else if ("hsl" === t.substr(0, 3))
                if (c = u = t.match(ne),
                e) {
                    if (~t.indexOf("="))
                        return c = t.match(ie),
                        n && c.length < 4 && (c[3] = 1),
                        c
                } else
                    s = +c[0] % 360 / 360,
                    a = c[1] / 100,
                    i = 2 * (l = c[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a),
                    3 < c.length && (c[3] *= 1),
                    c[0] = nt(s + 1 / 3, i, r),
                    c[1] = nt(s, i, r),
                    c[2] = nt(s - 1 / 3, i, r);
            else
                c = t.match(ne) || we.transparent;
            c = c.map(Number)
        }
        return e && !u && (i = c[0] / _e,
        r = c[1] / _e,
        o = c[2] / _e,
        l = ((t = Math.max(i, r, o)) + (e = Math.min(i, r, o))) / 2,
        t === e ? s = a = 0 : (u = t - e,
        a = .5 < l ? u / (2 - t - e) : u / (t + e),
        s = t === i ? (r - o) / u + (r < o ? 6 : 0) : t === r ? (o - i) / u + 2 : (i - r) / u + 4,
        s *= 60),
        c[0] = ~~(s + .5),
        c[1] = ~~(100 * a + .5),
        c[2] = ~~(100 * l + .5)),
        n && c.length < 4 && (c[3] = 1),
        c
    }
    function rt(t) {
        var e = []
          , n = []
          , i = -1;
        return t.split(xe).forEach(function(t) {
            t = t.match(re) || [];
            e.push.apply(e, t),
            n.push(i += t.length + 1)
        }),
        e.c = n,
        e
    }
    function ot(t, e, n) {
        var i, r, o, s, a = "", l = (t + a).match(xe), u = e ? "hsla(" : "rgba(", c = 0;
        if (!l)
            return t;
        if (l = l.map(function(t) {
            return (t = it(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        n && (o = rt(t),
        (i = n.c).join(a) !== o.c.join(a)))
            for (s = (r = t.replace(xe, "1").split(re)).length - 1; c < s; c++)
                a += r[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
        if (!r)
            for (s = (r = t.split(xe)).length - 1; c < s; c++)
                a += r[c] + l[c];
        return a + r[s]
    }
    function st(t) {
        var e = t.join(" ");
        if (xe.lastIndex = 0,
        xe.test(e))
            return e = Ce.test(e),
            t[1] = ot(t[1], e),
            t[0] = ot(t[0], e, rt(t[1])),
            !0
    }
    function at(t, e) {
        for (var n, i = t._first; i; )
            i instanceof je ? at(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? at(i.timeline, e) : (n = i._ease,
            i._ease = i._yEase,
            i._yEase = n,
            i._yoyo = e)),
            i = i._next
    }
    function lt(t, e, n, i) {
        void 0 === n && (n = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var r, o = {
            easeIn: e,
            easeOut: n,
            easeInOut: i
        };
        return f(t, function(t) {
            for (var e in Te[t] = ue[t] = o,
            Te[r = t.toLowerCase()] = n,
            o)
                Te[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = o[e]
        }),
        1
    }
    function ut(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function ct(n, t, e) {
        function i(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Jt((t - o) * s) + 1
        }
        var r = 1 <= t ? t : 1
          , o = (s = (e || (n ? .3 : .45)) / (t < 1 ? t : 1)) / Zt * (Math.asin(1 / r) || 0)
          , t = "out" === n ? i : "in" === n ? function(t) {
            return 1 - i(1 - t)
        }
        : ut(i)
          , s = Zt / s;
        return t.config = function(t, e) {
            return ct(n, t, e)
        }
        ,
        t
    }
    function dt(e, n) {
        function i(t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0
        }
        void 0 === n && (n = 1.70158);
        var t = "out" === e ? i : "in" === e ? function(t) {
            return 1 - i(1 - t)
        }
        : ut(i);
        return t.config = function(t) {
            return dt(e, t)
        }
        ,
        t
    }
    function ht(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function ft(t, e) {
        return e = Math.floor(t /= e),
        t && e === t ? e - 1 : e
    }
    function pt(t) {
        return "isFromStart" === (t = t.data) || "isStart" === t
    }
    function mt(t, e, n) {
        var i, r, o, s = t.labels, a = t._recent || ye, l = t.duration() >= Vt ? a.endTime(!1) : t._dur;
        return D(e) && (isNaN(e) || e in s) ? (r = e.charAt(0),
        o = "%" === e.substr(-1),
        i = e.indexOf("="),
        "<" === r || ">" === r ? (0 <= i && (e = e.replace(/=/, "")),
        ("<" === r ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) * (o ? (i < 0 ? a : n).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = l),
        s[e]) : (r = parseFloat(e.charAt(i - 1) + e.substr(i + 1)),
        o && n && (r = r / 100 * (ee(n) ? n[0] : n).totalDuration()),
        1 < i ? mt(t, e.substr(0, i - 1), n) + r : l + r)) : null == e ? l : +e
    }
    function gt(t, e, n) {
        return n < t ? t : e < n ? e : n
    }
    function vt(t, e, n) {
        return !D(t) || n || !Ct && Ee() ? ee(t) ? (i = n,
        void 0 === r && (r = []),
        t.forEach(function(t) {
            return D(t) && !i || V(t, 1) ? r.push.apply(r, vt(t)) : r.push(t)
        }) || r) : V(t) ? be.call(t, 0) : t ? [t] : [] : be.call((e || At).querySelectorAll(t), 0);
        var i, r
    }
    function yt(e, t, n, i, r) {
        var o = t - e
          , s = i - n;
        return W(r, function(t) {
            return n + ((t - e) / o * s || 0)
        })
    }
    function bt(t, e, n) {
        var i = t.vars
          , r = i[e];
        return r && (e = i[e + "Params"],
        t = i.callbackScope || t,
        n && de.length && j(),
        e ? r.apply(t, e) : r.call(t))
    }
    var _t, wt, xt, Ct, At, Et, Tt, kt, St, Dt, Ot, Lt, Pt, It, Mt, Nt, jt, Ft, zt, $t, Rt, qt, Bt, Ht, Wt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, Ut = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, Vt = 1e8, Yt = 1 / Vt, Zt = 2 * Math.PI, Xt = Zt / 4, Kt = 0, Gt = Math.sqrt, Qt = Math.cos, Jt = Math.sin, te = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , ee = Array.isArray, ne = /(?:-?\.?\d|\.)+/gi, ie = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, re = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, oe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, se = /[+-]=-?[.\d]+/, ae = /[^,'"\[\]\s]+/gi, le = /[\d.+\-=]+(?:e[-+]\d*)*/i, ue = {}, ce = {}, de = [], he = {}, fe = {}, pe = {}, me = 30, ge = [], ve = "", ye = {
        _start: 0,
        endTime: L,
        totalDuration: L
    }, be = [].slice, _e = 255, we = {
        aqua: [0, _e, _e],
        lime: [0, _e, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _e],
        navy: [0, 0, 128],
        white: [_e, _e, _e],
        olive: [128, 128, 0],
        yellow: [_e, _e, 0],
        orange: [_e, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_e, 0, 0],
        pink: [_e, 192, 203],
        cyan: [0, _e, _e],
        transparent: [_e, _e, _e, 0]
    }, xe = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in we)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ce = /hsl[a]?\(/, Ae = (Nt = Date.now,
    jt = 500,
    Ft = 33,
    zt = Nt(),
    $t = zt,
    qt = Rt = 1e3 / 240,
    Pt = {
        time: 0,
        frame: 0,
        tick: function() {
            Le(!0)
        },
        deltaRatio: function(t) {
            return It / (1e3 / (t || 60))
        },
        wake: function() {
            Tt && (!Ct && e() && (xt = Ct = window,
            At = xt.document || {},
            ue.gsap = cn,
            (xt.gsapVersions || (xt.gsapVersions = [])).push(cn.version),
            i(Et || xt.GreenSockGlobals || !xt.gsap && xt || {}),
            Lt = xt.requestAnimationFrame),
            Dt && Pt.sleep(),
            Ot = Lt || function(t) {
                return setTimeout(t, qt - 1e3 * Pt.time + 1 | 0)
            }
            ,
            St = 1,
            Le(2))
        },
        sleep: function() {
            (Lt ? xt.cancelAnimationFrame : clearTimeout)(Dt),
            St = 0,
            Ot = L
        },
        lagSmoothing: function(t, e) {
            jt = t || 1e8,
            Ft = Math.min(e, jt, 0)
        },
        fps: function(t) {
            Rt = 1e3 / (t || 240),
            qt = 1e3 * Pt.time + Rt
        },
        add: function(t) {
            Bt.indexOf(t) < 0 && Bt.push(t),
            Ee()
        },
        remove: function(t) {
            ~(t = Bt.indexOf(t)) && Bt.splice(t, 1) && t <= Mt && Mt--
        },
        _listeners: Bt = []
    }), Ee = function() {
        return !St && Ae.wake()
    }, Te = {}, ke = /^[\d.\-M][\d.\-,\s]/, Se = /["']/g, De = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Oe = function(t, e) {
        return t && (d(t) ? t : Te[t] || (o = ((n = t) + "").split("("),
        (s = Te[o[0]]) && 1 < o.length && s.config ? s.config.apply(null, ~n.indexOf("{") ? [function(t) {
            for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++)
                n = o[a],
                e = a !== l - 1 ? n.lastIndexOf(",") : n.length,
                i = n.substr(0, e),
                r[s] = isNaN(i) ? i.replace(Se, "").trim() : +i,
                s = n.substr(e + 1).trim();
            return r
        }(o[1])] : (r = (i = n).indexOf("(") + 1,
        t = i.indexOf(")"),
        o = i.indexOf("(", r),
        i.substring(r, ~o && o < t ? i.indexOf(")", t + 1) : t).split(",").map(l))) : Te._CE && ke.test(n) ? Te._CE("", n) : s)) || e;
        var n, i, r, o, s
    };
    function Le(t) {
        var e, n, i, r = Nt() - $t, o = !0 === t;
        if (jt < r && (zt += r - Ft),
        (0 < (r = (n = ($t += r) - zt) - qt) || o) && (i = ++Pt.frame,
        It = n - 1e3 * Pt.time,
        Pt.time = n /= 1e3,
        qt += r + (Rt <= r ? 4 : Rt - r),
        e = 1),
        o || (Dt = Ot(Le)),
        e)
            for (Mt = 0; Mt < Bt.length; Mt++)
                Bt[Mt](n, It, i, t)
    }
    function Pe(t) {
        return t < 1 / 2.75 ? Ht * t * t : t < .7272727272727273 ? Ht * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Ht * (t -= 2.25 / 2.75) * t + .9375 : Ht * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    f("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var n = e < 5 ? e + 1 : e;
        lt(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, n)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        })
    }),
    Te.Linear.easeNone = Te.none = Te.Linear.easeIn,
    lt("Elastic", ct("in"), ct("out"), ct()),
    Ht = 7.5625,
    lt("Bounce", function(t) {
        return 1 - Pe(1 - t)
    }, Pe),
    lt("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    lt("Circ", function(t) {
        return -(Gt(1 - t * t) - 1)
    }),
    lt("Sine", function(t) {
        return 1 === t ? 1 : 1 - Qt(t * Xt)
    }),
    lt("Back", dt("in"), dt("out"), dt()),
    Te.SteppedEase = Te.steps = ue.SteppedEase = {
        config: function(t, e) {
            var n = 1 / (t = void 0 === t ? 1 : t)
              , i = t + (e ? 0 : 1)
              , r = e ? 1 : 0;
            return function(t) {
                return ((i * gt(0, .99999999, t) | 0) + r) * n
            }
        }
    },
    Ut.ease = Te["quad.out"],
    f("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ve += t + "," + t + "Params,"
    });
    var Ie = function(t, e) {
        this.id = Kt++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : s,
        this.set = e ? e.getSetter : nn
    }
      , Me = ((Fi = Ne.prototype).delay = function(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    Fi.duration = function(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    Fi.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        x(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    Fi.totalTime = function(t, e) {
        if (Ee(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (y(this, t),
            !n._dp || n.parent || b(n, this); n && n.parent; )
                n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && q(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Yt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        a(this, t, e)),
        this
    }
    ,
    Fi.time = function(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + g(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }
    ,
    Fi.totalProgress = function(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    Fi.progress = function(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + g(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    Fi.iteration = function(t, e) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? ft(this._tTime, n) + 1 : 1
    }
    ,
    Fi.timeScale = function(t) {
        if (!arguments.length)
            return this._rts === -Yt ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var e = this.parent && this._ts ? v(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -Yt ? 0 : this._rts,
        function(t) {
            for (var e = t.parent; e && e.parent; )
                e._dirty = 1,
                e.totalDuration(),
                e = e.parent
        }(this.totalTime(gt(-this._delay, this._tDur, e), !0)),
        w(this),
        this
    }
    ,
    Fi.paused = function(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ee(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Yt && (this._tTime -= Yt)))),
        this) : this._ps
    }
    ,
    Fi.startTime = function(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || q(e, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    Fi.endTime = function(t) {
        return this._start + (!1 !== t ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    Fi.rawTime = function(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? v(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    Fi.globalTime = function(t) {
        for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
            n = e._start + n / (e._ts || 1),
            e = e._dp;
        return n
    }
    ,
    Fi.repeat = function(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        C(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    Fi.repeatDelay = function(t) {
        if (arguments.length) {
            var e = this._time;
            return this._rDelay = t,
            C(this),
            e ? this.time(e) : this
        }
        return this._rDelay
    }
    ,
    Fi.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    Fi.seek = function(t, e) {
        return this.totalTime(mt(this, t), !1 !== e)
    }
    ,
    Fi.restart = function(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, !1 !== e)
    }
    ,
    Fi.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    Fi.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    Fi.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    Fi.resume = function() {
        return this.paused(!1)
    }
    ,
    Fi.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Yt : 0)),
        this) : this._rts < 0
    }
    ,
    Fi.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -Yt,
        this
    }
    ,
    Fi.isActive = function() {
        var t, e = this.parent || this._dp, n = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - Yt))
    }
    ,
    Fi.eventCallback = function(t, e, n) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e,
        n && (i[t + "Params"] = n),
        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
        this) : i[t]
    }
    ,
    Fi.then = function(i) {
        var r = this;
        return new Promise(function(e) {
            function t() {
                var t = r.then;
                r.then = null,
                d(n) && (n = n(r)) && (n.then || n === r) && (r.then = t),
                e(n),
                r.then = t
            }
            var n = d(i) ? i : u;
            r._initted && 1 === r.totalProgress() && 0 <= r._ts || !r._tTime && r._ts < 0 ? t() : r._prom = t
        }
        )
    }
    ,
    Fi.kill = function() {
        et(this)
    }
    ,
    Ne);
    function Ne(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        x(this, +t.duration, 1, 1),
        this.data = t.data,
        St || Ae.wake()
    }
    F(Me.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Yt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var je = function(i) {
        function t(t, e) {
            var n;
            return (n = i.call(this, t = void 0 === t ? {} : t) || this).labels = {},
            n.smoothChildTiming = !!t.smoothChildTiming,
            n.autoRemoveChildren = !!t.autoRemoveChildren,
            n._sort = !1 !== t.sortChildren,
            wt && q(t.parent || wt, A(n), e),
            t.reversed && n.reverse(),
            t.paused && n.paused(!0),
            t.scrollTrigger && B(A(n), t.scrollTrigger),
            n
        }
        n(t, i);
        var e = t.prototype;
        return e.to = function(t, e, n) {
            return H(0, arguments, this),
            this
        }
        ,
        e.from = function(t, e, n) {
            return H(1, arguments, this),
            this
        }
        ,
        e.fromTo = function(t, e, n, i) {
            return H(2, arguments, this),
            this
        }
        ,
        e.set = function(t, e, n) {
            return e.duration = 0,
            e.parent = this,
            $(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new We(t,e,mt(this, n),1),
            this
        }
        ,
        e.call = function(t, e, n) {
            return q(this, We.delayedCall(0, t, e), n)
        }
        ,
        e.staggerTo = function(t, e, n, i, r, o, s) {
            return n.duration = e,
            n.stagger = n.stagger || i,
            n.onComplete = o,
            n.onCompleteParams = s,
            n.parent = this,
            new We(t,n,mt(this, r)),
            this
        }
        ,
        e.staggerFrom = function(t, e, n, i, r, o, s) {
            return n.runBackwards = 1,
            $(n).immediateRender = !1 !== n.immediateRender,
            this.staggerTo(t, e, n, i, r, o, s)
        }
        ,
        e.staggerFromTo = function(t, e, n, i, r, o, s, a) {
            return i.startAt = n,
            $(i).immediateRender = !1 !== i.immediateRender,
            this.staggerTo(t, e, i, r, o, s, a)
        }
        ,
        e.render = function(t, e, n) {
            var i, r, o, s, a, l, u, c, d, h, f = this._time, p = this._dirty ? this.totalDuration() : this._tDur, m = this._dur, g = t <= 0 ? 0 : P(t), v = this._zTime < 0 != t < 0 && (this._initted || !m);
            if ((g = this !== wt && p < g && 0 <= t ? p : g) !== this._tTime || n || v) {
                if (f !== this._time && m && (g += this._time - f,
                t += this._time - f),
                i = g,
                c = this._start,
                a = !(u = this._ts),
                v && (m || (f = this._zTime),
                !t && e || (this._zTime = t)),
                this._repeat) {
                    if (y = this._yoyo,
                    s = m + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * s + t, e, n);
                    if (i = P(g % s),
                    g === p ? (o = this._repeat,
                    i = m) : ((o = ~~(g / s)) && o === g / s && (i = m,
                    o--),
                    m < i && (i = m)),
                    d = ft(this._tTime, s),
                    y && 1 & o && (i = m - i,
                    h = 1),
                    o !== (d = !f && this._tTime && d !== o ? o : d) && !this._lock) {
                        var v = y && 1 & d
                          , y = v === (y && 1 & o)
                          , f = (v = o < d ? !v : v) ? 0 : m;
                        if (this._lock = 1,
                        this.render(f || (h ? 0 : P(o * s)), e, !m)._lock = 0,
                        this._tTime = g,
                        !e && this.parent && bt(this, "onRepeat"),
                        this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1),
                        f && f !== this._time || a != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (m = this._dur,
                        p = this._tDur,
                        y && (this._lock = 2,
                        this.render(f = v ? m : -1e-4, !0),
                        this.vars.repeatRefresh && !h && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !a)
                            return this;
                        at(this, h)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, n) {
                    var i;
                    if (e < n)
                        for (i = t._first; i && i._start <= n; ) {
                            if (!i._dur && "isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= n; ) {
                            if (!i._dur && "isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, P(f), P(i))) && (g -= i - (i = l._start)),
                this._tTime = g,
                this._time = i,
                this._act = !u,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                f = 0),
                !f && i && !e && (bt(this, "onStart"),
                this._tTime !== g))
                    return this;
                if (f <= i && 0 <= t)
                    for (b = this._first; b; ) {
                        if (r = b._next,
                        (b._act || i >= b._start) && b._ts && l !== b) {
                            if (b.parent !== this)
                                return this.render(t, e, n);
                            if (b.render(0 < b._ts ? (i - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + (i - b._start) * b._ts, e, n),
                            i !== this._time || !this._ts && !a) {
                                l = 0,
                                r && (g += this._zTime = -Yt);
                                break
                            }
                        }
                        b = r
                    }
                else
                    for (var b = this._last, _ = t < 0 ? t : i; b; ) {
                        if (r = b._prev,
                        (b._act || _ <= b._end) && b._ts && l !== b) {
                            if (b.parent !== this)
                                return this.render(t, e, n);
                            if (b.render(0 < b._ts ? (_ - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + (_ - b._start) * b._ts, e, n),
                            i !== this._time || !this._ts && !a) {
                                l = 0,
                                r && (g += this._zTime = _ ? -Yt : Yt);
                                break
                            }
                        }
                        b = r
                    }
                if (l && !e && (this.pause(),
                l.render(f <= i ? 0 : -Yt)._zTime = f <= i ? 1 : -1,
                this._ts))
                    return this._start = c,
                    w(this),
                    this.render(t, e, n);
                this._onUpdate && !e && bt(this, "onUpdate", !0),
                (g === p && p >= this.totalDuration() || !g && f) && (c !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || (!t && m || !(g === p && 0 < this._ts || !g && this._ts < 0) || R(this, 1),
                e || t < 0 && !f || !g && !f && p || (bt(this, g === p && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                !this._prom || g < p && 0 < this.timeScale() || this._prom())))
            }
            return this
        }
        ,
        e.add = function(t, e) {
            var n = this;
            if (E(e) || (e = mt(this, e, t)),
            !(t instanceof Me)) {
                if (ee(t))
                    return t.forEach(function(t) {
                        return n.add(t, e)
                    }),
                    this;
                if (D(t))
                    return this.addLabel(t, e);
                if (!d(t))
                    return this;
                t = We.delayedCall(0, t)
            }
            return this !== t ? q(this, t, e) : this
        }
        ,
        e.getChildren = function(t, e, n, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === i && (i = -Vt);
            for (var r = [], o = this._first; o; )
                o._start >= i && (o instanceof We ? e && r.push(o) : (n && r.push(o),
                t && r.push.apply(r, o.getChildren(!0, e, n)))),
                o = o._next;
            return r
        }
        ,
        e.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
                if (e[n].vars.id === t)
                    return e[n]
        }
        ,
        e.remove = function(t) {
            return D(t) ? this.removeLabel(t) : d(t) ? this.killTweensOf(t) : (p(this, t),
            t === this._recent && (this._recent = this._last),
            m(this))
        }
        ,
        e.totalTime = function(t, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = P(Ae.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function(t, e) {
            return this.labels[t] = mt(this, e),
            this
        }
        ,
        e.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function(t, e, n) {
            n = We.delayedCall(0, e || L, n);
            return n.data = "isPause",
            this._hasPause = 1,
            q(this, n, mt(this, t))
        }
        ,
        e.removePause = function(t) {
            var e = this._first;
            for (t = mt(this, t); e; )
                e._start === t && "isPause" === e.data && R(e),
                e = e._next
        }
        ,
        e.killTweensOf = function(t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--; )
                Re !== i[r] && i[r].kill(t, e);
            return this
        }
        ,
        e.getTweensOf = function(t, e) {
            for (var n, i = [], r = vt(t), o = this._first, s = E(e); o; )
                o instanceof We ? function(t, e) {
                    for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; )
                        ;
                    return i < n
                }(o._targets, r) && (s ? (!Re || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o) : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n),
                o = o._next;
            return i
        }
        ,
        e.tweenTo = function(t, e) {
            e = e || {};
            var n, i = this, r = mt(i, t), o = e.startAt, s = e.onStart, a = e.onStartParams, t = e.immediateRender, l = We.to(i, F({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: r,
                overwrite: "auto",
                duration: e.duration || Math.abs((r - (o && "time"in o ? o.time : i._time)) / i.timeScale()) || Yt,
                onStart: function() {
                    var t;
                    i.pause(),
                    n || (t = e.duration || Math.abs((r - (o && "time"in o ? o.time : i._time)) / i.timeScale()),
                    l._dur !== t && x(l, t, 0, 1).render(l._time, !0, !0),
                    n = 1),
                    s && s.apply(l, a || [])
                }
            }, e));
            return t ? l.render(0) : l
        }
        ,
        e.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, F({
                startAt: {
                    time: mt(this, t)
                }
            }, n))
        }
        ,
        e.recent = function() {
            return this._recent
        }
        ,
        e.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            tt(this, mt(this, t))
        }
        ,
        e.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            tt(this, mt(this, t), 1)
        }
        ,
        e.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Yt)
        }
        ,
        e.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r; )
                r._start >= n && (r._start += t,
                r._end += t),
                r = r._next;
            if (e)
                for (i in o)
                    o[i] >= n && (o[i] += t);
            return m(this)
        }
        ,
        e.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return i.prototype.invalidate.call(this)
        }
        ,
        e.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
                e = n._next,
                this.remove(n),
                n = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            m(this)
        }
        ,
        e.totalDuration = function(t) {
            var e, n, i, r = 0, o = this, s = o._last, a = Vt;
            if (arguments.length)
                return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (i = o.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    a < (n = s._start) && o._sort && s._ts && !o._lock ? (o._lock = 1,
                    q(o, s, n - s._delay, 1)._lock = 0) : a = n,
                    n < 0 && s._ts && (r -= n,
                    (!i && !o._dp || i && i.smoothChildTiming) && (o._start += n / o._ts,
                    o._time -= n,
                    o._tTime -= n),
                    o.shiftChildren(-n, !1, -1 / 0),
                    a = 0),
                    s._end > r && s._ts && (r = s._end),
                    s = e;
                x(o, o === wt && o._time > r ? o._time : r, 1, 1),
                o._dirty = 0
            }
            return o._tDur
        }
        ,
        t.updateRoot = function(t) {
            if (wt._ts && (a(wt, v(t, wt)),
            kt = Ae.frame),
            Ae.frame >= me) {
                me += Wt.autoSleep || 120;
                var e = wt._first;
                if ((!e || !e._ts) && Wt.autoSleep && Ae._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Ae.sleep()
                }
            }
        }
        ,
        t
    }(Me);
    function Fe(t, e, n, i, r, o) {
        var s, a, l, u;
        if (fe[t] && !1 !== (s = new fe[t]).init(r, s.rawVars ? e[t] : function(t, e, n, i, r) {
            if (!T(t = d(t) ? $e(t, r, e, n, i) : t) || t.style && t.nodeType || ee(t) || te(t))
                return D(t) ? $e(t, r, e, n, i) : t;
            var o, s = {};
            for (o in t)
                s[o] = $e(t[o], r, e, n, i);
            return s
        }(e[t], i, r, o, n), n, i, o) && (n._pt = a = new on(n._pt,r,t,0,1,s.render,s,0,s.priority),
        n !== un))
            for (l = n._ptLookup[n._targets.indexOf(r)],
            u = s._props.length; u--; )
                l[s._props[u]] = a;
        return s
    }
    F(je.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function ze(t, e) {
        var n, i, r, o, s, a, l, u, c, d, h, f, p, m = t.vars, g = m.ease, v = m.startAt, y = m.immediateRender, b = m.lazy, _ = m.onUpdate, w = m.onUpdateParams, x = m.callbackScope, C = m.runBackwards, A = m.yoyoEase, E = m.keyframes, T = m.autoRevert, k = t._dur, S = t._startAt, D = t._targets, O = t.parent, L = O && "nested" === O.data ? O.parent._targets : D, P = "auto" === t._overwrite && !_t, I = t.timeline;
        if (t._ease = Oe(g = !(!I || E && g) ? "none" : g, Ut.ease),
        t._yEase = A ? De(Oe(!0 === A ? g : A, Ut.ease)) : 0,
        A && t._yoyo && !t._repeat && (A = t._yEase,
        t._yEase = t._ease,
        t._ease = A),
        t._from = !I && !!m.runBackwards,
        !I) {
            if (f = (u = D[0] ? N(D[0]).harness : 0) && m[u.prop],
            n = z(m, ce),
            S && S.render(-1, !0).kill(),
            v)
                if (R(t._startAt = We.set(D, F({
                    data: "isStart",
                    overwrite: !1,
                    parent: O,
                    immediateRender: !0,
                    lazy: !1 !== b,
                    startAt: null,
                    delay: 0,
                    onUpdate: _,
                    onUpdateParams: w,
                    callbackScope: x,
                    stagger: 0
                }, v))),
                e < 0 && !y && !T && t._startAt.render(-1, !0),
                y) {
                    if (0 < e && !T && (t._startAt = 0),
                    k && e <= 0)
                        return void (e && (t._zTime = e))
                } else
                    !1 === T && (t._startAt = 0);
            else if (C && k)
                if (S)
                    T || (t._startAt = 0);
                else if (r = F({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: (y = e ? !1 : y) && !1 !== b,
                    immediateRender: y,
                    stagger: 0,
                    parent: O
                }, n),
                f && (r[u.prop] = f),
                R(t._startAt = We.set(D, r)),
                e < 0 && t._startAt.render(-1, !0),
                y) {
                    if (!e)
                        return
                } else
                    ze(t._startAt, Yt);
            for (b = k && !1 !== b || b && !k,
            i = t._pt = 0; i < D.length; i++) {
                if (l = (s = D[i])._gsap || M(D)[i]._gsap,
                t._ptLookup[i] = d = {},
                he[l.id] && de.length && j(),
                h = L === D ? i : L.indexOf(s),
                u && !1 !== (c = new u).init(s, f || n, t, h, L) && (t._pt = o = new on(t._pt,s,c.name,0,1,c.render,c,0,c.priority),
                c._props.forEach(function(t) {
                    d[t] = o
                }),
                c.priority && (a = 1)),
                !u || f)
                    for (r in n)
                        fe[r] && (c = Fe(r, n, t, h, s, L)) ? c.priority && (a = 1) : d[r] = o = qe.call(t, s, r, "get", n[r], h, L, 0, m.stringFilter);
                t._op && t._op[i] && t.kill(s, t._op[i]),
                P && t._pt && (Re = t,
                wt.killTweensOf(s, d, t.globalTime(e)),
                p = !t.parent,
                Re = 0),
                t._pt && b && (he[l.id] = 1)
            }
            a && rn(t),
            t._onInit && t._onInit(t)
        }
        t._onUpdate = _,
        t._initted = (!t._op || t._pt) && !p
    }
    function $e(t, e, n, i, r) {
        return d(t) ? t.call(e, n, i, r) : D(t) && ~t.indexOf("random(") ? J(t) : t
    }
    var Re, qe = function(t, e, n, i, r, o, s, a, l) {
        d(i) && (i = i(r || 0, t, o));
        var u, r = t[e], o = "get" !== n ? n : d(r) ? l ? t[e.indexOf("set") || !d(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : r, n = d(r) ? l ? Xe : Ze : Ye;
        if (D(i) && ("=" === (i = ~i.indexOf("random(") ? J(i) : i).charAt(1) && (!(u = parseFloat(o) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (U(o) || 0)) && 0 !== u || (i = u))),
        o !== i)
            return isNaN(o * i) || "" === i ? (r || e in t || O(e, i),
            function(t, e, n, i, r, o, s) {
                var a, l, u, c, d, h = new on(this._pt,t,e,0,1,Qe,null,r), f = 0, p = 0;
                for (h.b = n,
                h.e = i,
                n += "",
                (r = ~(i += "").indexOf("random(")) && (i = J(i)),
                o && (o(o = [n, i], t, e),
                n = o[0],
                i = o[1]),
                a = n.match(oe) || []; d = oe.exec(i); )
                    u = d[0],
                    c = i.substring(f, d.index),
                    l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1),
                    u !== a[p++] && (d = parseFloat(a[p - 1]) || 0,
                    h._pt = {
                        _next: h._pt,
                        p: c || 1 === p ? c : ",",
                        s: d,
                        c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - d,
                        m: l && l < 4 ? Math.round : 0
                    },
                    f = oe.lastIndex);
                return h.c = f < i.length ? i.substring(f, i.length) : "",
                h.fp = s,
                (se.test(i) || r) && (h.e = 0),
                this._pt = h
            }
            .call(this, t, e, o, i, n, a || Wt.stringFilter, l)) : (u = new on(this._pt,t,e,+o || 0,i - (o || 0),"boolean" == typeof r ? Ge : Ke,0,n),
            l && (u.fp = l),
            s && u.modifier(s, this, t),
            this._pt = u)
    }, Be = ve + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", He = (Be + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), We = function(C) {
        function r(t, e, n, i) {
            var r;
            "number" == typeof e && (n.duration = e,
            e = n,
            n = null);
            var o, s, a, l, u, c, d, h, f = (r = C.call(this, i ? e : $(e)) || this).vars, p = f.duration, m = f.delay, g = f.immediateRender, v = f.stagger, y = f.overwrite, b = f.keyframes, _ = f.defaults, i = f.scrollTrigger, w = f.yoyoEase, f = e.parent || wt, x = (ee(t) || te(t) ? E(t[0]) : "length"in e) ? [t] : vt(t);
            if (r._targets = x.length ? M(x) : S("GSAP target " + t + " not found. https://greensock.com", !Wt.nullTargetWarn) || [],
            r._ptLookup = [],
            r._overwrite = y,
            b || v || k(p) || k(m)) {
                if (e = r.vars,
                (o = r.timeline = new je({
                    data: "nested",
                    defaults: _ || {}
                })).kill(),
                o.parent = o._dp = A(r),
                o._start = 0,
                b)
                    $(F(o.vars.defaults, {
                        ease: "none"
                    })),
                    v ? x.forEach(function(n, i) {
                        return b.forEach(function(t, e) {
                            return o.to(n, t, e ? ">" : i * v)
                        })
                    }) : b.forEach(function(t) {
                        return o.to(x, t, ">")
                    });
                else {
                    if (l = x.length,
                    d = v ? Z(v) : L,
                    T(v))
                        for (u in v)
                            ~Be.indexOf(u) && ((h = h || {})[u] = v[u]);
                    for (s = 0; s < l; s++) {
                        for (u in a = {},
                        e)
                            He.indexOf(u) < 0 && (a[u] = e[u]);
                        a.stagger = 0,
                        w && (a.yoyoEase = w),
                        h && ht(a, h),
                        c = x[s],
                        a.duration = +$e(p, A(r), s, c, x),
                        a.delay = (+$e(m, A(r), s, c, x) || 0) - r._delay,
                        !v && 1 === l && a.delay && (r._delay = m = a.delay,
                        r._start += m,
                        a.delay = 0),
                        o.to(c, a, d(s, c, x))
                    }
                    o.duration() ? p = m = 0 : r.timeline = 0
                }
                p || r.duration(p = o.duration())
            } else
                r.timeline = 0;
            return !0 !== y || _t || (Re = A(r),
            wt.killTweensOf(x),
            Re = 0),
            q(f, A(r), n),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            (g || !p && !b && r._start === P(f._time) && !1 !== g && function t(e) {
                return !e || e._ts && t(e.parent)
            }(A(r)) && "nested" !== f.data) && (r._tTime = -Yt,
            r.render(Math.max(0, -m))),
            i && B(A(r), i),
            r
        }
        n(r, C);
        var t = r.prototype;
        return t.render = function(t, e, n) {
            var i, r, o, s, a, l, u, c, d, h = this._time, f = this._tDur, p = this._dur, m = f - Yt < t && 0 <= t ? f : t < Yt ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = m,
                    c = this.timeline,
                    this._repeat) {
                        if (s = p + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * s + t, e, n);
                        if (i = P(m % s),
                        m === f ? (o = this._repeat,
                        i = p) : ((o = ~~(m / s)) && o === m / s && (i = p,
                        o--),
                        p < i && (i = p)),
                        (l = this._yoyo && 1 & o) && (d = this._yEase,
                        i = p - i),
                        a = ft(this._tTime, s),
                        i === h && !n && this._initted)
                            return this;
                        o !== a && (c && this._yEase && at(c, l),
                        !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1,
                        this.render(P(s * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (_(this, t < 0 ? t : i, n, e))
                            return this._tTime = 0,
                            this;
                        if (p !== this._dur)
                            return this.render(t, e, n)
                    }
                    if (this._tTime = m,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = u = (d || this._ease)(i / p),
                    this._from && (this.ratio = u = 1 - u),
                    i && !h && !e && (bt(this, "onStart"),
                    this._tTime !== m))
                        return this;
                    for (r = this._pt; r; )
                        r.r(u, r.d),
                        r = r._next;
                    c && c.render(t < 0 ? t : !i && l ? -Yt : c._dur * u, e, n) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    bt(this, "onUpdate")),
                    this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"),
                    m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || R(this, 1),
                    e || t < 0 && !h || !m && !h || (bt(this, m === f ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || m < f && 0 < this.timeScale() || this._prom()))
                }
            } else
                !function(t, e, n, i) {
                    var r, o, s, a = t.ratio, l = e < 0 || !e && (!t._start && function t(e) {
                        e = e.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || t(e))
                    }(t) && (t._initted || !pt(t)) || (t._ts < 0 || t._dp._ts < 0) && !pt(t)) ? 0 : 1, u = t._rDelay, c = 0;
                    if (u && t._repeat && (c = gt(0, t._tDur, e),
                    o = ft(c, u),
                    s = ft(t._tTime, u),
                    t._yoyo && 1 & o && (l = 1 - l),
                    o !== s && (a = 1 - l,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    l !== a || i || t._zTime === Yt || !e && t._zTime) {
                        if (t._initted || !_(t, e, i, n)) {
                            for (s = t._zTime,
                            t._zTime = e || (n ? Yt : 0),
                            n = n || e && !s,
                            t.ratio = l,
                            t._from && (l = 1 - l),
                            t._time = 0,
                            t._tTime = c,
                            r = t._pt; r; )
                                r.r(l, r.d),
                                r = r._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                            t._onUpdate && !n && bt(t, "onUpdate"),
                            c && t._repeat && !n && t.parent && bt(t, "onRepeat"),
                            (e >= t._tDur || e < 0) && t.ratio === l && (l && R(t, 1),
                            n || (bt(t, l ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()))
                        }
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, n);
            return this
        }
        ,
        t.targets = function() {
            return this._targets
        }
        ,
        t.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            C.prototype.invalidate.call(this)
        }
        ,
        t.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? et(this) : this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Re && !0 !== Re.vars.overwrite)._first || et(this),
                this.parent && n !== this.timeline.totalDuration() && x(this, this._dur * this.timeline._tDur / n, 0, 1),
                this
            }
            var i, r, o, s, a, l, u, c = this._targets, d = t ? vt(t) : c, h = this._ptLookup, t = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; )
                    ;
                return n < 0
            }(c, d))
                return "all" === e && (this._pt = 0),
                et(this);
            for (i = this._op = this._op || [],
            "all" !== e && (D(e) && (a = {},
            f(e, function(t) {
                return a[t] = 1
            }),
            e = a),
            e = function(t, e) {
                var n, i, r, o, t = t[0] ? N(t[0]).harness : 0, s = t && t.aliases;
                if (!s)
                    return e;
                for (i in n = ht({}, e),
                s)
                    if (i in n)
                        for (r = (o = s[i].split(",")).length; r--; )
                            n[o[r]] = n[i];
                return n
            }(c, e)),
            u = c.length; u--; )
                if (~d.indexOf(c[u]))
                    for (a in r = h[u],
                    "all" === e ? (i[u] = e,
                    s = r,
                    o = {}) : (o = i[u] = i[u] || {},
                    s = e),
                    s)
                        (l = r && r[a]) && ("kill"in l.d && !0 !== l.d.kill(a) || p(this, l, "_pt"),
                        delete r[a]),
                        "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && t && et(this),
            this
        }
        ,
        r.to = function(t, e, n) {
            return new r(t,e,n)
        }
        ,
        r.from = function(t, e) {
            return H(1, arguments)
        }
        ,
        r.delayedCall = function(t, e, n, i) {
            return new r(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            })
        }
        ,
        r.fromTo = function(t, e, n) {
            return H(2, arguments)
        }
        ,
        r.set = function(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new r(t,e)
        }
        ,
        r.killTweensOf = function(t, e, n) {
            return wt.killTweensOf(t, e, n)
        }
        ,
        r
    }(Me);
    function Ue(t, e, n) {
        return t.setAttribute(e, n)
    }
    function Ve(t, e, n, i) {
        i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
    }
    F(We.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    f("staggerTo,staggerFrom,staggerFromTo", function(n) {
        We[n] = function() {
            var t = new je
              , e = be.call(arguments, 0);
            return e.splice("staggerFromTo" === n ? 5 : 4, 0, 0),
            t[n].apply(t, e)
        }
    });
    function Ye(t, e, n) {
        return t[e] = n
    }
    function Ze(t, e, n) {
        return t[e](n)
    }
    function Xe(t, e, n, i) {
        return t[e](i.fp, n)
    }
    function Ke(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
    function Ge(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
    function Qe(t, e) {
        var n = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; n; )
                i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i,
                n = n._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
    function Je(t, e) {
        for (var n = e._pt; n; )
            n.r(t, n.d),
            n = n._next
    }
    function tn(t, e, n, i) {
        for (var r, o = this._pt; o; )
            r = o._next,
            o.p === i && o.modifier(t, e, n),
            o = r
    }
    function en(t) {
        for (var e, n, i = this._pt; i; )
            n = i._next,
            i.p === t && !i.op || i.op === t ? p(this, i, "_pt") : i.dep || (e = 1),
            i = n;
        return !e
    }
    var nn = function(t, e) {
        return d(t[e]) ? Ze : r(t[e]) && t.setAttribute ? Ue : Ye
    }
      , rn = function(t) {
        for (var e, n, i, r, o = t._pt; o; ) {
            for (e = o._next,
            n = i; n && n.pr > o.pr; )
                n = n._next;
            (o._prev = n ? n._prev : r) ? o._prev._next = o : i = o,
            (o._next = n) ? n._prev = o : r = o,
            o = e
        }
        t._pt = i
    }
      , on = (sn.prototype.modifier = function(t, e, n) {
        this.mSet = this.mSet || this.set,
        this.set = Ve,
        this.m = t,
        this.mt = n,
        this.tween = e
    }
    ,
    sn);
    function sn(t, e, n, i, r, o, s, a, l) {
        this.t = e,
        this.s = i,
        this.c = r,
        this.p = n,
        this.r = o || Ke,
        this.d = s || this,
        this.set = a || Ye,
        this.pr = l || 0,
        (this._next = t) && (t._prev = this)
    }
    f(ve + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ce[t] = 1
    }),
    ue.TweenMax = ue.TweenLite = We,
    ue.TimelineLite = ue.TimelineMax = je,
    wt = new je({
        sortChildren: !1,
        defaults: Ut,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    Wt.stringFilter = st;
    var an = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach(function(t) {
                var e = (t = !t.name && t.default || t).name
                  , n = d(t)
                  , i = e && !n && t.init ? function() {
                    this._props = []
                }
                : t
                  , r = {
                    init: L,
                    render: Je,
                    add: qe,
                    kill: en,
                    modifier: tn,
                    rawVars: 0
                }
                  , n = {
                    targetTest: 0,
                    get: 0,
                    getSetter: nn,
                    aliases: {},
                    register: 0
                };
                if (Ee(),
                t !== i) {
                    if (fe[e])
                        return;
                    F(i, F(z(t, r), n)),
                    ht(i.prototype, ht(r, z(t, n))),
                    fe[i.prop = e] = i,
                    t.targetTest && (ge.push(i),
                    ce[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                o(e, i),
                t.register && t.register(cn, i, on)
            })
        },
        timeline: function(t) {
            return new je(t)
        },
        getTweensOf: function(t, e) {
            return wt.getTweensOf(t, e)
        },
        getProperty: function(i, t, e, n) {
            var r = N((i = D(i) ? vt(i)[0] : i) || {}).get
              , o = e ? u : l;
            return "native" === e && (e = ""),
            i && (t ? o((fe[t] && fe[t].get || r)(i, t, e, n)) : function(t, e, n) {
                return o((fe[t] && fe[t].get || r)(i, t, e, n))
            }
            )
        },
        quickSetter: function(n, e, i) {
            if (1 < (n = vt(n)).length) {
                var r = n.map(function(t) {
                    return cn.quickSetter(t, e, i)
                })
                  , o = r.length;
                return function(t) {
                    for (var e = o; e--; )
                        r[e](t)
                }
            }
            n = n[0] || {};
            var s = fe[e]
              , a = N(n)
              , l = a.harness && (a.harness.aliases || {})[e] || e
              , u = s ? function(t) {
                var e = new s;
                un._pt = 0,
                e.init(n, i ? t + i : t, un, 0, [n]),
                e.render(1, e),
                un._pt && Je(1, un)
            }
            : a.set(n, l);
            return s ? u : function(t) {
                return u(n, l, i ? t + i : t, a, 1)
            }
        },
        isTweening: function(t) {
            return 0 < wt.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Oe(t.ease, Ut.ease)),
            h(Ut, t || {})
        },
        config: function(t) {
            return h(Wt, t || {})
        },
        registerEffect: function(t) {
            var i = t.name
              , r = t.effect
              , e = t.plugins
              , o = t.defaults
              , t = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !fe[t] && !ue[t] && S(i + " effect requires " + t + " plugin.")
            }),
            pe[i] = function(t, e, n) {
                return r(vt(t), F(e || {}, o), n)
            }
            ,
            t && (je.prototype[i] = function(t, e, n) {
                return this.add(pe[i](t, T(e) ? e : (n = e) && {}, this), n)
            }
            )
        },
        registerEase: function(t, e) {
            Te[t] = Oe(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Oe(t, e) : Te
        },
        getById: function(t) {
            return wt.getById(t)
        },
        exportRoot: function(t, e) {
            var n, i, r = new je(t = void 0 === t ? {} : t);
            for (r.smoothChildTiming = !1 !== t.smoothChildTiming,
            wt.remove(r),
            r._dp = 0,
            r._time = r._tTime = wt._time,
            n = wt._first; n; )
                i = n._next,
                !e && !n._dur && n instanceof We && n.vars.onComplete === n._targets[0] || q(r, n, n._start - n._delay),
                n = i;
            return q(wt, r, 0),
            r
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return ee(e) ? Q(e, t(0, e.length), n) : W(i, function(t) {
                    return (r + (t - e) % r) % r + e
                })
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e
                  , o = 2 * r;
                return ee(e) ? Q(e, t(0, e.length - 1), n) : W(i, function(t) {
                    return e + (r < (t = (o + (t - e) % o) % o || 0) ? o - t : t)
                })
            },
            distribute: Z,
            random: G,
            snap: K,
            normalize: function(t, e, n) {
                return yt(t, e, 0, 1, n)
            },
            getUnit: U,
            clamp: function(e, n, t) {
                return W(t, function(t) {
                    return gt(e, n, t)
                })
            },
            splitColor: it,
            toArray: vt,
            selector: function(n) {
                return n = vt(n)[0] || S("Invalid scope") || {},
                function(t) {
                    var e = n.current || n.nativeElement || n;
                    return vt(t, e.querySelectorAll ? e : e === n ? S("Invalid scope") || At.createElement("div") : n)
                }
            },
            mapRange: yt,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, n) {
                return function(t) {
                    return e(parseFloat(t)) + (n || U(t))
                }
            },
            interpolate: function t(e, n, i, r) {
                var o = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                }
                ;
                if (!o) {
                    var s, a, l, u, c, d = D(e), h = {};
                    if (!0 === i && (r = 1) && (i = null),
                    d)
                        e = {
                            p: e
                        },
                        n = {
                            p: n
                        };
                    else if (ee(e) && !ee(n)) {
                        for (l = [],
                        u = e.length,
                        c = u - 2,
                        a = 1; a < u; a++)
                            l.push(t(e[a - 1], e[a]));
                        u--,
                        o = function(t) {
                            t *= u;
                            var e = Math.min(c, ~~t);
                            return l[e](t - e)
                        }
                        ,
                        i = n
                    } else
                        r || (e = ht(ee(e) ? [] : {}, e));
                    if (!l) {
                        for (s in n)
                            qe.call(h, e, s, "get", n[s]);
                        o = function(t) {
                            return Je(t, h),
                            d ? e.p : e
                        }
                    }
                }
                return W(i, o)
            },
            shuffle: Y
        },
        install: i,
        effects: pe,
        ticker: Ae,
        updateRoot: je.updateRoot,
        plugins: fe,
        globalTimeline: wt,
        core: {
            PropTween: on,
            globals: o,
            Tween: We,
            Timeline: je,
            Animation: Me,
            getCache: N,
            _removeLinkedListItem: p,
            suppressOverwrites: function(t) {
                return _t = t
            }
        }
    };
    function ln(t, r) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, i, e) {
                e._onInit = function(t) {
                    var e, n;
                    if (D(i) && (e = {},
                    f(i, function(t) {
                        return e[t] = 1
                    }),
                    i = e),
                    r) {
                        for (n in e = {},
                        i)
                            e[n] = r(i[n]);
                        i = e
                    }
                    !function(t, e) {
                        var n, i, r, o = t._targets;
                        for (n in e)
                            for (i = o.length; i--; )
                                (r = (r = t._ptLookup[i][n]) && r.d) && (r._pt && (r = function(t, e) {
                                    for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
                                        n = n._next;
                                    return n
                                }(r, n)),
                                r && r.modifier && r.modifier(e[n], t, o[i], n))
                    }(t, i)
                }
            }
        }
    }
    f("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return an[t] = We[t]
    }),
    Ae.add(je.updateRoot);
    var un = an.to({}, {
        duration: 0
    })
      , cn = an.registerPlugin({
        name: "attr",
        init: function(t, e, n, i, r) {
            var o, s;
            for (o in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o)) && (s.op = o),
                this._props.push(o)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var n = e.length; n--; )
                this.add(t, n, t[n] || 0, e[n])
        }
    }, ln("roundProps", X), ln("modifiers"), ln("snap", K)) || an;
    function dn(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function hn(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function fn(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function pn(t, e) {
        t = e.s + e.c * t;
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }
    function mn(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function gn(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function vn(t, e, n) {
        return t.style[e] = n
    }
    function yn(t, e, n) {
        return t.style.setProperty(e, n)
    }
    function bn(t, e, n) {
        return t._gsap[e] = n
    }
    function _n(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }
    function wn(t, e, n, i, r) {
        t = t._gsap;
        t.scaleX = t.scaleY = n,
        t.renderTransform(r, t)
    }
    function xn(t, e, n, i, r) {
        t = t._gsap;
        t[e] = n,
        t.renderTransform(r, t)
    }
    function Cn(t, e) {
        e = Bn.createElementNS ? Bn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Bn.createElement(t);
        return e.style ? e : Bn.createElement(t)
    }
    function An(t, e, n) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(gi, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && An(t, Ci(e) || e, 1) || ""
    }
    function En() {
        "undefined" != typeof window && window.document && (Hn = (Bn = window.document).documentElement,
        Un = Cn("div") || {
            style: {}
        },
        Cn("div"),
        _i = Ci(_i),
        wi = _i + "Origin",
        Un.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Yn = !!Ci("perspective"),
        Wn = 1)
    }
    function Tn(t) {
        var e, n = Cn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, o = this.style.cssText;
        if (Hn.appendChild(n),
        n.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = Tn
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        Hn.removeChild(n),
        this.style.cssText = o,
        e
    }
    function kn(t, e) {
        for (var n = e.length; n--; )
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n])
    }
    function Sn(e) {
        var n;
        try {
            n = e.getBBox()
        } catch (t) {
            n = Tn.call(e, !0)
        }
        return !(n = !(n && (n.width || n.height) || e.getBBox === Tn) ? Tn.call(e, !0) : n) || n.width || n.x || n.y ? n : {
            x: +kn(e, ["x", "cx", "x1"]) || 0,
            y: +kn(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function Dn(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Sn(t))
    }
    function On(t, e) {
        e && (t = t.style,
        e in hi && e !== wi && (e = _i),
        t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
        t.removeProperty(e.replace(gi, "-$1").toLowerCase())) : t.removeAttribute(e))
    }
    function Ln(t, e, n, i, r, o) {
        o = new on(t._pt,e,n,0,1,o ? gn : mn);
        return (t._pt = o).b = i,
        o.e = r,
        t._props.push(n),
        o
    }
    function Pn(t, e, n, i) {
        var r, o = parseFloat(n) || 0, s = (n + "").trim().substr((o + "").length) || "px", a = Un.style, l = vi.test(e), u = "svg" === t.tagName.toLowerCase(), c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = "px" === i, h = "%" === i;
        return i === s || !o || Ai[i] || Ai[s] ? o : ("px" === s || d || (o = Pn(t, e, n, "px")),
        n = t.getCTM && Dn(t),
        !h && "%" !== s || !hi[e] && !~e.indexOf("adius") ? (a[l ? "width" : "height"] = 100 + (d ? s : i),
        i = ~e.indexOf("adius") || "em" === i && t.appendChild && !u ? t : t.parentNode,
        (u = (i = !(i = n ? (t.ownerSVGElement || {}).parentNode : i) || i === Bn || !i.appendChild ? Bn.body : i)._gsap) && h && u.width && l && u.time === Ae.time ? I(o / u.width * 100) : (!h && "%" !== s || (a.position = An(t, "position")),
        i === t && (a.position = "static"),
        i.appendChild(Un),
        r = Un[c],
        i.removeChild(Un),
        a.position = "absolute",
        l && h && ((u = N(i)).time = Ae.time,
        u.width = i[c]),
        I(d ? r * o / 100 : r && o ? 100 / r * o : 0))) : (r = n ? t.getBBox()[l ? "width" : "height"] : t[c],
        I(h ? o / r * 100 : o / 100 * r)))
    }
    function In(t, e, n, i) {
        var r;
        return Wn || En(),
        e in bi && "transform" !== e && ~(e = bi[e]).indexOf(",") && (e = e.split(",")[0]),
        hi[e] && "transform" !== e ? (r = Di(t, i),
        r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Oi(An(t, wi)) + " " + r.zOrigin + "px") : (r = t.style[e]) && "auto" !== r && !i && !~(r + "").indexOf("calc(") || (r = Ti[e] && Ti[e](t, e, n) || An(t, e) || s(t, e) || ("opacity" === e ? 1 : 0)),
        n && !~(r + "").trim().indexOf(" ") ? Pn(t, e, r, n) + n : r
    }
    function Mn(t, e, n, i) {
        var r;
        n && "none" !== n || ((o = (r = Ci(e, t, 1)) && An(t, r, 1)) && o !== n ? (e = r,
        n = o) : "borderColor" === e && (n = An(t, "borderTopColor")));
        var o, s, a, l, u, c, d, h, f, p, m = new on(this._pt,t.style,e,0,1,Qe), g = 0, v = 0;
        if (m.b = n,
        m.e = i,
        n += "",
        "auto" == (i += "") && (t.style[e] = i,
        i = An(t, e) || i,
        t.style[e] = n),
        st(o = [n, i]),
        i = o[1],
        s = (n = o[0]).match(re) || [],
        (i.match(re) || []).length) {
            for (; c = re.exec(i); )
                h = c[0],
                d = i.substring(g, c.index),
                l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1),
                h !== (u = s[v++] || "") && (a = parseFloat(u) || 0,
                f = u.substr((a + "").length),
                (p = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) && (h = h.substr(2)),
                c = parseFloat(h),
                h = h.substr((c + "").length),
                g = re.lastIndex - h.length,
                h || (h = h || Wt.units[e] || f,
                g === i.length && (i += h,
                m.e += h)),
                f !== h && (a = Pn(t, e, u, h) || 0),
                m._pt = {
                    _next: m._pt,
                    p: d || 1 === v ? d : ",",
                    s: a,
                    c: p ? p * c : c - a,
                    m: l && l < 4 || "zIndex" === e ? Math.round : 0
                });
            m.c = g < i.length ? i.substring(g, i.length) : ""
        } else
            m.r = "display" === e && "none" === i ? gn : mn;
        return se.test(i) && (m.e = 0),
        this._pt = m
    }
    function Nn(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, i, r, o = e.t, s = o.style, a = e.u, e = o._gsap;
            if ("all" === a || !0 === a)
                s.cssText = "",
                i = 1;
            else
                for (r = (a = a.split(",")).length; -1 < --r; )
                    n = a[r],
                    hi[n] && (i = 1,
                    n = "transformOrigin" === n ? wi : _i),
                    On(o, n);
            i && (On(o, _i),
            e && (e.svg && o.removeAttribute("transform"),
            Di(o, 1),
            e.uncache = 1))
        }
    }
    function jn(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function Fn(t) {
        t = An(t, _i);
        return jn(t) ? ki : t.substr(7).match(ie).map(I)
    }
    function zn(t, e) {
        var n, i, r, o = t._gsap || N(t), s = t.style, a = Fn(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? ki : a : (a !== ki || t.offsetParent || t === Hn || o.svg || (i = s.display,
        s.display = "block",
        (o = t.parentNode) && t.offsetParent || (r = 1,
        n = t.nextSibling,
        Hn.appendChild(t)),
        a = Fn(t),
        i ? s.display = i : On(t, "display"),
        r && (n ? o.insertBefore(t, n) : o ? o.appendChild(t) : Hn.removeChild(t))),
        e && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
    }
    function $n(t, e, n, i, r, o) {
        var s, a, l = t._gsap, u = r || zn(t, !0), c = l.xOrigin || 0, d = l.yOrigin || 0, h = l.xOffset || 0, f = l.yOffset || 0, p = u[0], m = u[1], g = u[2], v = u[3], y = u[4], b = u[5], _ = e.split(" "), w = parseFloat(_[0]) || 0, r = parseFloat(_[1]) || 0;
        n ? u !== ki && (s = p * v - m * g) && (a = w * (-m / s) + r * (p / s) - (p * b - m * y) / s,
        w = w * (v / s) + r * (-g / s) + (g * b - v * y) / s,
        r = a) : (w = (a = Sn(t)).x + (~_[0].indexOf("%") ? w / 100 * a.width : w),
        r = a.y + (~(_[1] || _[0]).indexOf("%") ? r / 100 * a.height : r)),
        i || !1 !== i && l.smooth ? (l.xOffset = h + ((y = w - c) * p + (b = r - d) * g) - y,
        l.yOffset = f + (y * m + b * v) - b) : l.xOffset = l.yOffset = 0,
        l.xOrigin = w,
        l.yOrigin = r,
        l.smooth = !!i,
        l.origin = e,
        l.originIsAbsolute = !!n,
        t.style[wi] = "0px 0px",
        o && (Ln(o, l, "xOrigin", c, w),
        Ln(o, l, "yOrigin", d, r),
        Ln(o, l, "xOffset", h, l.xOffset),
        Ln(o, l, "yOffset", f, l.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + r)
    }
    function Rn(t, e, n) {
        var i = U(e);
        return I(parseFloat(e) + parseFloat(Pn(t, "x", n + "px", i))) + i
    }
    function qn(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    We.version = je.version = cn.version = "3.8.0",
    Tt = 1,
    e() && Ee();
    var Bn, Hn, Wn, Un, Vn, Yn, Zn = Te.Power0, Xn = Te.Power1, Kn = Te.Power2, Gn = Te.Power3, Qn = Te.Power4, Jn = Te.Linear, ti = Te.Quad, ei = Te.Cubic, ni = Te.Quart, ii = Te.Quint, ri = Te.Strong, oi = Te.Elastic, si = Te.Back, ai = Te.SteppedEase, li = Te.Bounce, ui = Te.Sine, ci = Te.Expo, di = Te.Circ, hi = {}, fi = 180 / Math.PI, pi = Math.PI / 180, mi = Math.atan2, gi = /([A-Z])/g, vi = /(?:left|right|width|margin|padding|x)/i, yi = /[\s,\(]\S/, bi = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, _i = "transform", wi = _i + "Origin", xi = "O,Moz,ms,Ms,Webkit".split(","), Ci = function(t, e, n) {
        var i = (e || Un).style
          , r = 5;
        if (t in i && !n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(xi[r] + t in i); )
            ;
        return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? xi[r] : "") + t
    }, Ai = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Ei = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Ti = {
        clearProps: function(t, e, n, i, r) {
            if ("isFromStart" !== r.data) {
                e = t._pt = new on(t._pt,e,n,0,0,Nn);
                return e.u = i,
                e.pr = -10,
                e.tween = r,
                t._props.push(n),
                1
            }
        }
    }, ki = [1, 0, 0, 1, 0, 0], Si = {}, Di = function(t, e) {
        var n = t._gsap || new Ie(t);
        if ("x"in n && !e && !n.uncache)
            return n;
        var i, r, o, s, a, l, u, c, d, h, f, p, m, g, v, y, b, _, w, x, C, A, E, T, k, S = t.style, D = n.scaleX < 0, O = An(t, wi) || "0", L = i = r = s = a = l = u = c = 0, P = o = 1;
        return n.svg = !(!t.getCTM || !Dn(t)),
        d = zn(t, n.svg),
        n.svg && (_ = (!n.uncache || "0px 0px" === O) && !e && t.getAttribute("data-svg-origin"),
        $n(t, _ || O, !!_ || n.originIsAbsolute, !1 !== n.smooth, d)),
        A = n.xOrigin || 0,
        T = n.yOrigin || 0,
        d !== ki && (p = d[0],
        m = d[1],
        g = d[2],
        v = d[3],
        L = y = d[4],
        i = b = d[5],
        6 === d.length ? (P = Math.sqrt(p * p + m * m),
        o = Math.sqrt(v * v + g * g),
        s = p || m ? mi(m, p) * fi : 0,
        (u = g || v ? mi(g, v) * fi + s : 0) && (o *= Math.abs(Math.cos(u * pi))),
        n.svg && (L -= A - (A * p + T * g),
        i -= T - (A * m + T * v))) : (k = d[6],
        E = d[7],
        C = d[8],
        e = d[9],
        A = d[10],
        T = d[11],
        L = d[12],
        i = d[13],
        r = d[14],
        a = (d = mi(k, A)) * fi,
        d && (_ = y * (h = Math.cos(-d)) + C * (f = Math.sin(-d)),
        w = b * h + e * f,
        x = k * h + A * f,
        C = y * -f + C * h,
        e = b * -f + e * h,
        A = k * -f + A * h,
        T = E * -f + T * h,
        y = _,
        b = w,
        k = x),
        l = (d = mi(-g, A)) * fi,
        d && (h = Math.cos(-d),
        T = v * (f = Math.sin(-d)) + T * h,
        p = _ = p * h - C * f,
        m = w = m * h - e * f,
        g = x = g * h - A * f),
        s = (d = mi(m, p)) * fi,
        d && (_ = p * (h = Math.cos(d)) + m * (f = Math.sin(d)),
        w = y * h + b * f,
        m = m * h - p * f,
        b = b * h - y * f,
        p = _,
        y = w),
        a && 359.9 < Math.abs(a) + Math.abs(s) && (a = s = 0,
        l = 180 - l),
        P = I(Math.sqrt(p * p + m * m + g * g)),
        o = I(Math.sqrt(b * b + k * k)),
        d = mi(y, b),
        u = 2e-4 < Math.abs(d) ? d * fi : 0,
        c = T ? 1 / (T < 0 ? -T : T) : 0),
        n.svg && (_ = t.getAttribute("transform"),
        n.forceCSS = t.setAttribute("transform", "") || !jn(An(t, _i)),
        _ && t.setAttribute("transform", _))),
        90 < Math.abs(u) && Math.abs(u) < 270 && (D ? (P *= -1,
        u += s <= 0 ? 180 : -180,
        s += s <= 0 ? 180 : -180) : (o *= -1,
        u += u <= 0 ? 180 : -180)),
        n.x = L - ((n.xPercent = L && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-L) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px",
        n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px",
        n.z = r + "px",
        n.scaleX = I(P),
        n.scaleY = I(o),
        n.rotation = I(s) + "deg",
        n.rotationX = I(a) + "deg",
        n.rotationY = I(l) + "deg",
        n.skewX = u + "deg",
        n.skewY = "0deg",
        n.transformPerspective = c + "px",
        (n.zOrigin = parseFloat(O.split(" ")[2]) || 0) && (S[wi] = Oi(O)),
        n.xOffset = n.yOffset = 0,
        n.force3D = Wt.force3D,
        n.renderTransform = n.svg ? Mi : Yn ? Ii : Li,
        n.uncache = 0,
        n
    }, Oi = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Li = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Ii(t, e)
    }, Pi = "0deg", Ii = function(t, e) {
        var n = e || this
          , i = n.xPercent
          , r = n.yPercent
          , o = n.x
          , s = n.y
          , a = n.z
          , l = n.rotation
          , u = n.rotationY
          , c = n.rotationX
          , d = n.skewX
          , h = n.skewY
          , f = n.scaleX
          , p = n.scaleY
          , m = n.transformPerspective
          , g = n.force3D
          , v = n.target
          , y = n.zOrigin
          , b = ""
          , e = "auto" === g && t && 1 !== t || !0 === g;
        !y || c === Pi && u === Pi || (n = parseFloat(u) * pi,
        t = Math.sin(n),
        g = Math.cos(n),
        n = parseFloat(c) * pi,
        o = Rn(v, o, t * (t = Math.cos(n)) * -y),
        s = Rn(v, s, -Math.sin(n) * -y),
        a = Rn(v, a, g * t * -y + y)),
        "0px" !== m && (b += "perspective(" + m + ") "),
        (i || r) && (b += "translate(" + i + "%, " + r + "%) "),
        !e && "0px" === o && "0px" === s && "0px" === a || (b += "0px" !== a || e ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "),
        l !== Pi && (b += "rotate(" + l + ") "),
        u !== Pi && (b += "rotateY(" + u + ") "),
        c !== Pi && (b += "rotateX(" + c + ") "),
        d === Pi && h === Pi || (b += "skew(" + d + ", " + h + ") "),
        1 === f && 1 === p || (b += "scale(" + f + ", " + p + ") "),
        v.style[_i] = b || "translate(0, 0)"
    }, Mi = function(t, e) {
        var n, i, r, o, s, a = e || this, l = a.xPercent, u = a.yPercent, c = a.x, d = a.y, h = a.rotation, f = a.skewX, p = a.skewY, m = a.scaleX, g = a.scaleY, v = a.target, y = a.xOrigin, b = a.yOrigin, _ = a.xOffset, w = a.yOffset, x = a.forceCSS, e = parseFloat(c), a = parseFloat(d), h = parseFloat(h), f = parseFloat(f);
        (p = parseFloat(p)) && (f += p = parseFloat(p),
        h += p),
        h || f ? (h *= pi,
        f *= pi,
        n = Math.cos(h) * m,
        i = Math.sin(h) * m,
        r = Math.sin(h - f) * -g,
        o = Math.cos(h - f) * g,
        f && (p *= pi,
        s = Math.tan(f - p),
        r *= s = Math.sqrt(1 + s * s),
        o *= s,
        p && (s = Math.tan(p),
        n *= s = Math.sqrt(1 + s * s),
        i *= s)),
        n = I(n),
        i = I(i),
        r = I(r),
        o = I(o)) : (n = m,
        o = g,
        i = r = 0),
        (e && !~(c + "").indexOf("px") || a && !~(d + "").indexOf("px")) && (e = Pn(v, "x", c, "px"),
        a = Pn(v, "y", d, "px")),
        (y || b || _ || w) && (e = I(e + y - (y * n + b * r) + _),
        a = I(a + b - (y * i + b * o) + w)),
        (l || u) && (e = I(e + l / 100 * (s = v.getBBox()).width),
        a = I(a + u / 100 * s.height)),
        v.setAttribute("transform", s = "matrix(" + n + "," + i + "," + r + "," + o + "," + e + "," + a + ")"),
        x && (v.style[_i] = s)
    };
    f("padding,margin,Width,Radius", function(e, n) {
        var t = "Right"
          , i = "Bottom"
          , r = "Left"
          , a = (n < 3 ? ["Top", t, i, r] : ["Top" + r, "Top" + t, i + t, i + r]).map(function(t) {
            return n < 2 ? e + t : "border" + t + e
        });
        Ti[1 < n ? "border" + e : e] = function(e, t, n, i, r) {
            var o, s;
            if (arguments.length < 4)
                return o = a.map(function(t) {
                    return In(e, t, n)
                }),
                5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
            o = (i + "").split(" "),
            s = {},
            a.forEach(function(t, e) {
                return s[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }),
            e.init(t, s, r)
        }
    });
    var Ni, ji = {
        name: "css",
        register: En,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, h, f, p, m, g, v, y, b, _, w, x, C, A, E, T = this._props, k = t.style, S = n.vars.startAt;
            for (u in Wn || En(),
            e)
                if ("autoRound" !== u && (s = e[u],
                !fe[u] || !Fe(u, e, n, i, t, r)))
                    if (w = typeof s,
                    _ = Ti[u],
                    "function" === w && (w = typeof (s = s.call(n, i, t, r))),
                    "string" === w && ~s.indexOf("random(") && (s = J(s)),
                    _)
                        _(this, t, u, s, n) && (v = 1);
                    else if ("--" === u.substr(0, 2))
                        o = (getComputedStyle(t).getPropertyValue(u) + "").trim(),
                        s += "",
                        xe.lastIndex = 0,
                        xe.test(o) || (c = U(o),
                        d = U(s)),
                        d ? c !== d && (o = Pn(t, u, o, d) + d) : c && (s += c),
                        this.add(k, "setProperty", o, s, i, r, 0, 0, u),
                        T.push(u);
                    else if ("undefined" !== w) {
                        if (S && u in S ? (o = "function" == typeof S[u] ? S[u].call(n, i, t, r) : S[u],
                        u in Wt.units && !U(o) && (o += Wt.units[u]),
                        "=" === ((o = D(o) && ~o.indexOf("random(") ? J(o) : o) + "").charAt(1) && (o = In(t, u))) : o = In(t, u),
                        l = parseFloat(o),
                        (h = "string" === w && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                        a = parseFloat(s),
                        u in bi && ("autoAlpha" === u && Ln(this, k, "visibility", (l = 1 === l && "hidden" === In(t, "visibility") && a ? 0 : l) ? "inherit" : "hidden", a ? "inherit" : "hidden", !a),
                        "scale" !== u && "transform" !== u && ~(u = bi[u]).indexOf(",") && (u = u.split(",")[0])),
                        f = u in hi)
                            if (p || ((m = t._gsap).renderTransform && !e.parseTransform || Di(t, e.parseTransform),
                            g = !1 !== e.smoothOrigin && m.smooth,
                            (p = this._pt = new on(this._pt,k,_i,0,1,m.renderTransform,m,0,-1)).dep = 1),
                            "scale" === u)
                                this._pt = new on(this._pt,m,"scaleY",m.scaleY,(h ? h * a : a - m.scaleY) || 0),
                                T.push("scaleY", u),
                                u += "X";
                            else {
                                if ("transformOrigin" === u) {
                                    E = A = C = void 0,
                                    C = (x = s).split(" "),
                                    A = C[0],
                                    E = C[1] || "50%",
                                    "top" !== A && "bottom" !== A && "left" !== E && "right" !== E || (x = A,
                                    A = E,
                                    E = x),
                                    C[0] = Ei[A] || A,
                                    C[1] = Ei[E] || E,
                                    s = C.join(" "),
                                    m.svg ? $n(t, s, 0, g, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin && Ln(this, m, "zOrigin", m.zOrigin, d),
                                    Ln(this, k, u, Oi(o), Oi(s)));
                                    continue
                                }
                                if ("svgOrigin" === u) {
                                    $n(t, s, 1, g, 0, this);
                                    continue
                                }
                                if (u in Si) {
                                    y = this,
                                    b = m,
                                    _ = u,
                                    w = l,
                                    x = h,
                                    E = A = void 0,
                                    A = D(C = s),
                                    E = parseFloat(C) * (A && ~C.indexOf("rad") ? fi : 1),
                                    E = w + (x = x ? E * x : E - w) + "deg",
                                    A && ("short" === (C = C.split("_")[1]) && (x %= 360) != x % 180 && (x += x < 0 ? 360 : -360),
                                    "cw" === C && x < 0 ? x = (x + 36e9) % 360 - 360 * ~~(x / 360) : "ccw" === C && 0 < x && (x = (x - 36e9) % 360 - 360 * ~~(x / 360))),
                                    y._pt = x = new on(y._pt,b,_,w,x,hn),
                                    x.e = E,
                                    x.u = "deg",
                                    y._props.push(_);
                                    continue
                                }
                                if ("smoothOrigin" === u) {
                                    Ln(this, m, "smooth", m.smooth, s);
                                    continue
                                }
                                if ("force3D" === u) {
                                    m[u] = s;
                                    continue
                                }
                                if ("transform" === u) {
                                    !function(t, e, n) {
                                        var i, r, o, s, a, l, u = qn({}, n._gsap), c = n.style;
                                        for (r in u.svg ? (o = n.getAttribute("transform"),
                                        n.setAttribute("transform", ""),
                                        c[_i] = e,
                                        i = Di(n, 1),
                                        On(n, _i),
                                        n.setAttribute("transform", o)) : (o = getComputedStyle(n)[_i],
                                        c[_i] = e,
                                        i = Di(n, 1),
                                        c[_i] = o),
                                        hi)
                                            (o = u[r]) !== (a = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (s = U(o) !== (l = U(a)) ? Pn(n, r, o, l) : parseFloat(o),
                                            a = parseFloat(a),
                                            t._pt = new on(t._pt,i,r,s,a - s,dn),
                                            t._pt.u = l || 0,
                                            t._props.push(r));
                                        qn(i, u)
                                    }(this, s, t);
                                    continue
                                }
                            }
                        else
                            u in k || (u = Ci(u) || u);
                        if (f || (a || 0 === a) && (l || 0 === l) && !yi.test(s) && u in k)
                            a = a || 0,
                            (c = (o + "").substr((l + "").length)) !== (d = U(s) || (u in Wt.units ? Wt.units[u] : c)) && (l = Pn(t, u, o, d)),
                            this._pt = new on(this._pt,f ? m : k,u,l,h ? h * a : a - l,f || "px" !== d && "zIndex" !== u || !1 === e.autoRound ? dn : pn),
                            this._pt.u = d || 0,
                            c !== d && "%" !== d && (this._pt.b = o,
                            this._pt.r = fn);
                        else if (u in k)
                            Mn.call(this, t, u, o, s);
                        else {
                            if (!(u in t)) {
                                O(u, s);
                                continue
                            }
                            this.add(t, u, o || t[u], s, i, r)
                        }
                        T.push(u)
                    }
            v && rn(this)
        },
        get: In,
        aliases: bi,
        getSetter: function(t, e, n) {
            var i = bi[e];
            return (e = i && i.indexOf(",") < 0 ? i : e)in hi && e !== wi && (t._gsap.x || In(t, "x")) ? n && Vn === n ? "scale" === e ? _n : bn : (Vn = n || {}) && ("scale" === e ? wn : xn) : t.style && !r(t.style[e]) ? vn : ~e.indexOf("-") ? yn : nn(t, e)
        },
        core: {
            _removeProperty: On,
            _getMatrix: zn
        }
    };
    cn.utils.checkPrefix = Ci,
    Ni = f("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (zi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        hi[t] = 1
    }),
    f(zi, function(t) {
        Wt.units[t] = "deg",
        Si[t] = 1
    }),
    bi[Ni[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + zi,
    f("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        t = t.split(":");
        bi[t[1]] = Ni[t[0]]
    }),
    f("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Wt.units[t] = "px"
    }),
    cn.registerPlugin(ji);
    var Fi = cn.registerPlugin(ji) || cn
      , zi = Fi.core.Tween;
    t.Back = si,
    t.Bounce = li,
    t.CSSPlugin = ji,
    t.Circ = di,
    t.Cubic = ei,
    t.Elastic = oi,
    t.Expo = ci,
    t.Linear = Jn,
    t.Power0 = Zn,
    t.Power1 = Xn,
    t.Power2 = Kn,
    t.Power3 = Gn,
    t.Power4 = Qn,
    t.Quad = ti,
    t.Quart = ni,
    t.Quint = ii,
    t.Sine = ui,
    t.SteppedEase = ai,
    t.Strong = ri,
    t.TimelineLite = je,
    t.TimelineMax = je,
    t.TweenLite = We,
    t.TweenMax = zi,
    t.default = Fi,
    t.gsap = Fi,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Splitting = e()
}(this, function() {
    "use strict";
    var o = document
      , c = o.createTextNode.bind(o);
    function d(t, e, n) {
        t.style.setProperty(e, n)
    }
    function h(t, e) {
        return t.appendChild(e)
    }
    function f(t, e, n, i) {
        var r = o.createElement("span");
        return e && (r.className = e),
        n && (i || r.setAttribute("data-" + e, n),
        r.textContent = n),
        t && h(t, r) || r
    }
    function p(t, e) {
        return t.getAttribute("data-" + e)
    }
    function m(t, e) {
        return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (e || o).querySelectorAll(t)) : []
    }
    function s(t) {
        for (var e = []; t--; )
            e[t] = [];
        return e
    }
    function g(t, e) {
        t && t.some(e)
    }
    function r(e) {
        return function(t) {
            return e[t]
        }
    }
    var v = {};
    function t(t, e, n, i) {
        return {
            by: t,
            depends: e,
            key: n,
            split: i
        }
    }
    function e(t) {
        v[t.by] = t
    }
    function y(t, i, r, o, s) {
        t.normalize();
        var a = []
          , l = document.createDocumentFragment();
        o && a.push(t.previousSibling);
        var u = [];
        return m(t.childNodes).some(function(t) {
            if (!t.tagName || t.hasChildNodes()) {
                if (t.childNodes && t.childNodes.length)
                    return u.push(t),
                    void a.push.apply(a, y(t, i, r, o, s));
                var e = t.wholeText || ""
                  , n = e.trim();
                n.length && (" " === e[0] && u.push(c(" ")),
                g(n.split(r), function(t, e) {
                    e && s && u.push(f(l, "whitespace", " ", s));
                    t = f(l, i, t);
                    a.push(t),
                    u.push(t)
                }),
                " " === e[e.length - 1] && u.push(c(" ")))
            } else
                u.push(t)
        }),
        g(u, function(t) {
            h(l, t)
        }),
        t.innerHTML = "",
        h(t, l),
        a
    }
    var a = "words"
      , n = t(a, 0, "word", function(t) {
        return y(t, "word", /\s+/, 0, 1)
    })
      , i = t("chars", [a], "char", function(t, n, e) {
        var i = [];
        return g(e[a], function(t, e) {
            i.push.apply(i, y(t, "char", "", n.whitespace && e))
        }),
        i
    });
    function l(e) {
        var u = (e = e || {}).key;
        return m(e.target || "[data-splitting]").map(function(s) {
            var a = s["🍌"];
            if (!e.force && a)
                return a;
            var a = s["🍌"] = {
                el: s
            }
              , t = function e(n, t, i) {
                var r = i.indexOf(n);
                return -1 == r ? (i.unshift(n),
                g(v[n].depends, function(t) {
                    e(t, n, i)
                })) : (t = i.indexOf(t),
                i.splice(r, 1),
                i.splice(t, 0, n)),
                i
            }(e.by || p(s, "splitting") || "chars", 0, []).map(r(v))
              , l = function(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }({}, e);
            return g(t, function(t) {
                var e, n, i, r, o;
                t.split && (e = t.by,
                r = (u ? "-" + u : "") + t.key,
                n = t.split(s, l, a),
                r && (i = s,
                o = (t = "--" + r) + "-index",
                g(r = n, function(t, e) {
                    Array.isArray(t) ? g(t, function(t) {
                        d(t, o, e)
                    }) : d(t, o, e)
                }),
                d(i, t + "-total", r.length)),
                a[e] = n,
                s.classList.add(e))
            }),
            s.classList.add("splitting"),
            a
        })
    }
    function u(t, e, n) {
        var t = m(e.matching || t.children, t)
          , i = {};
        return g(t, function(t) {
            var e = Math.round(t[n]);
            (i[e] || (i[e] = [])).push(t)
        }),
        Object.keys(i).map(Number).sort(b).map(r(i))
    }
    function b(t, e) {
        return t - e
    }
    l.html = function(t) {
        var e = (t = t || {}).target = f();
        return e.innerHTML = t.content,
        l(t),
        e.outerHTML
    }
    ;
    var _ = t("lines", [a], "line", function(t, e, n) {
        return u(t, {
            matching: n[a]
        }, "offsetTop")
    })
      , w = t("items", 0, "item", function(t, e) {
        return m(e.matching || t.children, t)
    })
      , x = t("rows", 0, "row", function(t, e) {
        return u(t, e, "offsetTop")
    })
      , C = t("cols", 0, "col", function(t, e) {
        return u(t, e, "offsetLeft")
    })
      , A = t("grid", ["rows", "cols"])
      , E = "layout"
      , T = t(E, 0, 0, function(t, e) {
        var n, i = e.rows = +(e.rows || p(t, "rows") || 1), r = e.columns = +(e.columns || p(t, "columns") || 1);
        e.image = e.image || p(t, "image") || t.currentSrc || t.src,
        e.image && (n = m("img", t)[0],
        e.image = n && (n.currentSrc || n.src)),
        e.image && d(t, "background-image", "url(" + e.image + ")");
        for (var o = i * r, s = [], a = f(0, "cell-grid"); o--; ) {
            var l = f(a, "cell");
            f(l, "cell-inner"),
            s.push(l)
        }
        return h(t, a),
        s
    })
      , k = t("cellRows", [E], "row", function(t, e, n) {
        var i = e.rows
          , r = s(i);
        return g(n[E], function(t, e, n) {
            r[Math.floor(e / (n.length / i))].push(t)
        }),
        r
    })
      , S = t("cellColumns", [E], "col", function(t, e, n) {
        var i = e.columns
          , r = s(i);
        return g(n[E], function(t, e) {
            r[e % i].push(t)
        }),
        r
    })
      , D = t("cells", ["cellRows", "cellColumns"], "cell", function(t, e, n) {
        return n[E]
    });
    return (l.add = e)(n),
    e(i),
    e(_),
    e(w),
    e(x),
    e(C),
    e(A),
    e(T),
    e(k),
    e(S),
    e(D),
    l
});
const propiedades = [{
    categoria: "Casas",
    titulo: "Privada Altus ll",
    descripcion: "Te permitirá experimentar la comodidad, exclusividad y equipamiento del mejor desarrollo residencial al sur de Cancún. Aquí encontrarás amenidades de primer nivel y residencias con una excelente distribución que te brindarán una sensación de tranquilidad y confort.",
    cuartos: "3",
    bano: "3",
    estacionamiento: "2",
    ubicacion: "Sm. 523, mza 11 lote 1-07, Fracc. Privada Altus II, Cancún, Quintana Roo, C.P. 77533",
    brochure: "",
    logo: "assets/images/galeria/privada-altus-ii/logo",
    logo_width: 200,
    logo_height: 175,
    maps: "https://goo.gl/maps/4iCVLsVp7ucrwysB6",
    thumbnail: "assets/images/galeria/privada-altus-ii/1",
    galeria: ["assets/images/galeria/privada-altus-ii/1", "assets/images/galeria/privada-altus-ii/2", "assets/images/galeria/privada-altus-ii/3", "assets/images/galeria/privada-altus-ii/4", "assets/images/galeria/privada-altus-ii/5", "assets/images/galeria/privada-altus-ii/6", "assets/images/galeria/privada-altus-ii/7", "assets/images/galeria/privada-altus-ii/8", "assets/images/galeria/privada-altus-ii/9", "assets/images/galeria/privada-altus-ii/10", "assets/images/galeria/privada-altus-ii/11", "assets/images/galeria/privada-altus-ii/12", "assets/images/galeria/privada-altus-ii/13", "assets/images/galeria/privada-altus-ii/14", "assets/images/galeria/privada-altus-ii/15", "assets/images/galeria/privada-altus-ii/16", "assets/images/galeria/privada-altus-ii/17", "assets/images/galeria/privada-altus-ii/18", "assets/images/galeria/privada-altus-ii/19", "assets/images/galeria/privada-altus-ii/20", "assets/images/galeria/privada-altus-ii/21", "assets/images/galeria/privada-altus-ii/22", "assets/images/galeria/privada-altus-ii/23", "assets/images/galeria/privada-altus-ii/24", "assets/images/galeria/privada-altus-ii/25"]
}, {
    categoria: "Casas",
    titulo: "Arbolada",
    descripcion: "Su diversidad de modelos de vivienda y su privilegiada ubicación elevan la plusvalía de este complejo residencial. Sus más de 7,500 m2 de áreas verdes y parques recreativos lo convierten en una opción única para vivir o invertir.",
    cuartos: "3",
    bano: "3.5",
    estacionamiento: "2",
    ubicacion: "Av. Huayacán Km 5.5, Sm 336 Mz 12 Lote 17, Plaza Arbolada I, Strip Mall, Local 3, Cancún, Quintana Roo, C.P. 77560 ",
    brochure: "",
    logo: "assets/images/galeria/arbolada/logo",
    logo_width: 200,
    logo_height: 200,
    maps: "https://goo.gl/maps/8tUoneoY11PPvp57A",
    thumbnail: "assets/images/galeria/arbolada/2",
    galeria: ["assets/images/galeria/arbolada/1", "assets/images/galeria/arbolada/2", "assets/images/galeria/arbolada/3", "assets/images/galeria/arbolada/4", "assets/images/galeria/arbolada/5", "assets/images/galeria/arbolada/6", "assets/images/galeria/arbolada/7", "assets/images/galeria/arbolada/8", "assets/images/galeria/arbolada/9", "assets/images/galeria/arbolada/10", "assets/images/galeria/arbolada/11", "assets/images/galeria/arbolada/12", "assets/images/galeria/arbolada/13", "assets/images/galeria/arbolada/14", "assets/images/galeria/arbolada/15", "assets/images/galeria/arbolada/16", "assets/images/galeria/arbolada/17", "assets/images/galeria/arbolada/18", "assets/images/galeria/arbolada/19", "assets/images/galeria/arbolada/20", "assets/images/galeria/arbolada/21", "assets/images/galeria/arbolada/22", "assets/images/galeria/arbolada/23"]
}, {
    categoria: "Casas",
    titulo: "Paseo Kusamil",
    descripcion: "Destaca por su excelente ubicación y plusvalía que te permitirá vivir los mejores años de tu vida en Cancún.",
    cuartos: "3",
    bano: "1.5",
    estacionamiento: "1",
    ubicacion: "Avenida José López Portillo SM 110 MZ 01 LT 1-01, Fracc. Paseo Kusamil, Cancún, Quintana Roo, C.P. 77539 ",
    brochure: "",
    logo: "assets/images/galeria/paseo-kusamil/logo",
    logo_width: 200,
    logo_height: 86,
    maps: "https://goo.gl/maps/fFvNyndk8cPg8bZJ8",
    thumbnail: "assets/images/galeria/paseo-kusamil/2",
    galeria: ["assets/images/galeria/paseo-kusamil/1", "assets/images/galeria/paseo-kusamil/2", "assets/images/galeria/paseo-kusamil/3", "assets/images/galeria/paseo-kusamil/4", "assets/images/galeria/paseo-kusamil/5", "assets/images/galeria/paseo-kusamil/6", "assets/images/galeria/paseo-kusamil/7", "assets/images/galeria/paseo-kusamil/8", "assets/images/galeria/paseo-kusamil/9", "assets/images/galeria/paseo-kusamil/10", "assets/images/galeria/paseo-kusamil/11", "assets/images/galeria/paseo-kusamil/12", "assets/images/galeria/paseo-kusamil/13", "assets/images/galeria/paseo-kusamil/14", "assets/images/galeria/paseo-kusamil/15", "assets/images/galeria/paseo-kusamil/16", "assets/images/galeria/paseo-kusamil/17", "assets/images/galeria/paseo-kusamil/18", "assets/images/galeria/paseo-kusamil/19", "assets/images/galeria/paseo-kusamil/20", "assets/images/galeria/paseo-kusamil/21", "assets/images/galeria/paseo-kusamil/22", "assets/images/galeria/paseo-kusamil/23", "assets/images/galeria/paseo-kusamil/24", "assets/images/galeria/paseo-kusamil/25", "assets/images/galeria/paseo-kusamil/26", "assets/images/galeria/paseo-kusamil/27"]
}, {
    categoria: "Casas",
    titulo: "Portoalto",
    descripcion: "Concepto residencial que combina el mejor equipamiento, armonía y tranquilidad. A tan solo 15 minutos de la 5ta avenida en Playa del Carmen.",
    cuartos: "3",
    bano: "2.5",
    estacionamiento: "2",
    ubicacion: "Av. Flor de Ciruelos S/N, Fracc. Porto Alto, Playa del Carmen, Quintana Roo, C.P. 77723",
    brochure: "",
    logo: "assets/images/galeria/portoalto/logo",
    logo_width: 200,
    logo_height: 86,
    maps: "https://goo.gl/maps/XWqPAMzHPknsByG89",
    thumbnail: "assets/images/galeria/portoalto/1",
    galeria: ["assets/images/galeria/portoalto/1", "assets/images/galeria/portoalto/2", "assets/images/galeria/portoalto/3", "assets/images/galeria/portoalto/4", "assets/images/galeria/portoalto/5", "assets/images/galeria/portoalto/6", "assets/images/galeria/portoalto/7", "assets/images/galeria/portoalto/8", "assets/images/galeria/portoalto/9", "assets/images/galeria/portoalto/10", "assets/images/galeria/portoalto/11", "assets/images/galeria/portoalto/12", "assets/images/galeria/portoalto/13", "assets/images/galeria/portoalto/14", "assets/images/galeria/portoalto/15", "assets/images/galeria/portoalto/16", "assets/images/galeria/portoalto/17", "assets/images/galeria/portoalto/18", "assets/images/galeria/portoalto/19", "assets/images/galeria/portoalto/20", "assets/images/galeria/portoalto/21", "assets/images/galeria/portoalto/22", "assets/images/galeria/portoalto/23", "assets/images/galeria/portoalto/24", "assets/images/galeria/portoalto/25", "assets/images/galeria/portoalto/26", "assets/images/galeria/portoalto/27", "assets/images/galeria/portoalto/28", "assets/images/galeria/portoalto/29", "assets/images/galeria/portoalto/30", "assets/images/galeria/portoalto/31", "assets/images/galeria/portoalto/32", "assets/images/galeria/portoalto/33", "assets/images/galeria/portoalto/34", "assets/images/galeria/portoalto/35", "assets/images/galeria/portoalto/36", "assets/images/galeria/portoalto/37", "assets/images/galeria/portoalto/38", "assets/images/galeria/portoalto/39", "assets/images/galeria/portoalto/40", "assets/images/galeria/portoalto/41", "assets/images/galeria/portoalto/42"]
}, {
    categoria: "Departamentos",
    titulo: "Punta Estrella",
    descripcion: "Combina armonía, elegancia y plusvalía; atributos que describen cómo es vivir en Playa del Carmen, a 3 kilómetros del mar Caribe.",
    cuartos: "2",
    bano: "2",
    estacionamiento: "1",
    ubicacion: "Calle Av. Petempich, Av. 58 Nte. 77710, Playa del Carmen, Quintana Roo, C.P. 77723 ",
    brochure: "",
    logo: "assets/images/galeria/punta-estrella/logo",
    logo_width: 200,
    logo_height: 84,
    maps: "https://goo.gl/maps/FvNg2Lw9T41Q1cCH8",
    thumbnail: "assets/images/galeria/punta-estrella/2",
    galeria: ["assets/images/galeria/punta-estrella/1", "assets/images/galeria/punta-estrella/2", "assets/images/galeria/punta-estrella/3", "assets/images/galeria/punta-estrella/4", "assets/images/galeria/punta-estrella/5", "assets/images/galeria/punta-estrella/6", "assets/images/galeria/punta-estrella/7", "assets/images/galeria/punta-estrella/8", "assets/images/galeria/punta-estrella/9", "assets/images/galeria/punta-estrella/10", "assets/images/galeria/punta-estrella/11", "assets/images/galeria/punta-estrella/12", "assets/images/galeria/punta-estrella/13", "assets/images/galeria/punta-estrella/14"]
}];
$(function() {
    $("#form-landing-quintana").validate({
        errorElement: "small",
        errorClass: "col-12 form-error p-1",
        rules: {
            first_name: "required",
            middle_name: "required",
            last_name: "required",
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                minlength: 10,
                maxlength: 10
            },
            "00N3l00000Q7A54": "required",
            aviso: "required"
        },
        messages: {
            first_name: "Este campo es requerido",
            middle_name: "Este campo es requerido",
            last_name: "Este campo es requerido",
            email: {
                required: "Ingresa un correo electrónico ",
                email: "Tu dirección de correo electrónico no es válida"
            },
            phone: {
                required: "Este campo es requerido",
                minlength: "Por favor ingrese al menos 10 dígitos",
                maxlength: "Por favor ingrese máximo 10 dígitos."
            },
            "00N3l00000Q7A54": "Este campo es requerido",
            aviso: "Este campo es requerido"
        },
        submitHandler: function(t) {
            t.submit()
        }
    })
});
