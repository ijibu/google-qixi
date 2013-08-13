(function () {
	var h,
	l = this,
	aa = function (a) {
		var b = typeof a;
		if ("object" == b)
			if (a) {
				if (a instanceof Array)
					return "array";
				if (a instanceof Object)
					return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c)
					return "object";
				if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
					return "array";
				if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
					return "function"
			} else
				return "null";
		else if ("function" == b && "undefined" == typeof a.call)
			return "object";
		return b
	},
	ba = function (a) {
		return "array" == aa(a)
	},
	ca = function (a) {
		var b = aa(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	},
	n = function (a) {
		return "string" == typeof a
	},
	da = function (a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	},
	ha = function (a) {
		return a[ea] || (a[ea] = ++ga)
	},
	ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
	ga = 0,
	ia = function (a, b, c) {
		return a.call.apply(a.bind, arguments)
	},
	ja = function (a, b, c) {
		if (!a)
			throw Error();
		if (2 <
			arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function () {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c)
			}
		}
		return function () {
			return a.apply(b, arguments)
		}
	},
	p = function (a, b, c) {
		p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
		return p.apply(null, arguments)
	},
	ka = function (a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function () {
			var b = c.slice();
			b.push.apply(b, arguments);
			return a.apply(this,
				b)
		}
	},
	la = Date.now || function () {
		return +new Date
	},
	ma = function () {
		var a = ["google", "doodle", "jesr"],
		b = l;
		a[0]in b || !b.execScript || b.execScript("var " + a[0]);
		for (var c; a.length && (c = a.shift()); )
			a.length ? b = b[c] ? b[c] : b[c] = {}

		 : b[c] = !0
	},
	q = function (a, b) {
		function c() {}

		c.prototype = b.prototype;
		a.G = b.prototype;
		a.prototype = new c
	};
	Function.prototype.bind = Function.prototype.bind || function (a, b) {
		if (1 < arguments.length) {
			var c = Array.prototype.slice.call(arguments, 1);
			c.unshift(this, a);
			return p.apply(null, c)
		}
		return p(this, a)
	};
	var r = function (a, b) {
		this.width = a;
		this.height = b
	};
	r.prototype.K = function () {
		return new r(this.width, this.height)
	};
	r.prototype.toString = function () {
		return "(" + this.width + " x " + this.height + ")"
	};
	r.prototype.floor = function () {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	r.prototype.round = function () {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	var na = function (a) {
		Error.captureStackTrace ? Error.captureStackTrace(this, na) : this.stack = Error().stack || "";
		a && (this.message = String(a))
	};
	q(na, Error);
	na.prototype.name = "CustomError";
	var oa = function (a, b) {
		for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
			d += c.shift() + e.shift();
		return d + c.join("%s")
	},
	ua = function (a) {
		if (!pa.test(a))
			return a;
		-1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
		-1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
		-1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
		-1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
		return a
	},
	qa = /&/g,
	ra = /</g,
	sa = />/g,
	ta = /\"/g,
	pa = /[&<>\"]/;
	var va = function (a, b) {
		b.unshift(a);
		na.call(this, oa.apply(null, b));
		b.shift()
	};
	q(va, na);
	va.prototype.name = "AssertionError";
	var wa = function (a, b, c, d) {
		var e = "Assertion failed";
		if (c)
			var e = e + (": " + c), f = d;
		else
			a && (e += ": " + a, f = b);
		throw new va("" + e, f || []);
	},
	s = function (a, b, c) {
		a || wa("", null, b, Array.prototype.slice.call(arguments, 2))
	},
	xa = function (a, b, c) {
		da(a) || wa("Expected object but got %s: %s.", [aa(a), a], b, Array.prototype.slice.call(arguments, 2))
	};
	var t = Array.prototype,
	ya = t.indexOf ? function (a, b, c) {
		s(null != a.length);
		return t.indexOf.call(a, b, c)
	}
	 : function (a, b, c) {
		c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
		if (n(a))
			return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
		for (; c < a.length; c++)
			if (c in a && a[c] === b)
				return c;
		return -1
	},
	za = t.forEach ? function (a, b, c) {
		s(null != a.length);
		t.forEach.call(a, b, c)
	}
	 : function (a, b, c) {
		for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
			f in e && b.call(c, e[f], f, a)
	},
	Aa = function (a, b) {
		0 <= ya(a, b) || a.push(b)
	},
	Ba = function (a, b) {
		var c = ya(a, b),
		d;
		if (d = 0 <= c)
			s(null != a.length), t.splice.call(a, c, 1);
		return d
	},
	Ca = function (a) {
		return t.concat.apply(t, arguments)
	},
	Da = function (a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++)
				c[d] = a[d];
			return c
		}
		return []
	},
	Ea = function (a, b) {
		for (var c = 1; c < arguments.length; c++) {
			var d = arguments[c],
			e;
			if (ba(d) || (e = ca(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))
				a.push.apply(a, d);
			else if (e)
				for (var f = a.length, g = d.length, k = 0; k < g; k++)
					a[f + k] = d[k];
			else
				a.push(d)
		}
	},
	Fa = function (a, b, c) {
		s(null != a.length);
		return 2 >= arguments.length ?
		t.slice.call(a, b) : t.slice.call(a, b, c)
	},
	Ga = function (a, b) {
		return a > b ? 1 : a < b ? -1 : 0
	};
	var Ha = function (a) {
		return Math.floor(Math.random() * a)
	};
	var v = function (a, b) {
		this.x = void 0 !== a ? a : 0;
		this.y = void 0 !== b ? b : 0
	};
	h = v.prototype;
	h.K = function () {
		return new v(this.x, this.y)
	};
	h.toString = function () {
		return "(" + this.x + ", " + this.y + ")"
	};
	h.floor = function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	h.round = function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	h.ka = function (a, b) {
		this.x *= a;
		this.y *= "number" == typeof b ? b : a;
		return this
	};
	var w = function (a, b) {
		this.x = a;
		this.y = b
	};
	q(w, v);
	w.prototype.K = function () {
		return new w(this.x, this.y)
	};
	w.prototype.ka = v.prototype.ka;
	w.prototype.add = function (a) {
		this.x += a.x;
		this.y += a.y;
		return this
	};
	w.prototype.rotate = function (a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		var c = this.y * b + this.x * a;
		this.x = this.x * b - this.y * a;
		this.y = c;
		return this
	};
	var Ia = function (a, b) {
		return new w(a.x - b.x, a.y - b.y)
	};
	var Ja = function (a, b) {
		this.d = null;
		this.g = 1;
		this.x = a || Ha(500);
		this.y = b || Ha(205)
	};
	Ja.prototype.s = function () {
		return new v(this.x, this.y)
	};
	Ja.prototype.k = function (a) {
		this.a = a;
		a = new r(43, 35);
		var b = new r(500, 205) || new r(window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body.clientWidth || 0, window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body.clientHeight || 0),
		c = Math.abs(b.width - a.width),
		d = Math.abs(b.height - a.height);
		a = [];
		a.push(new w(this.x, this.y));
		for (b = 0; 8 > b; b++)
			a.push(new w(Math.floor(Math.random() * c), Math.floor(Math.random() * d)));
		c = [];
		for (b = 0; b <
			a.length; ++b) {
			var e = (b + 1) % a.length,
			d = (a.length + b - 1) % a.length;
			if (0 <= d && d < a.length && 0 <= e && e < a.length) {
				var d = Ia(a[b], a[d]),
				e = Ia(a[e], a[b]),
				f = Math.sqrt(d.x * d.x + d.y * d.y),
				g = Math.sqrt(e.x * e.x + e.y * e.y);
				0 == f || 0 == g ? d = new w(0, 0) : (f = Math.sqrt(f / g), d = d.K().ka(1 / f), e = e.K().ka(f), d = (new w(d.x + e.x, d.y + e.y)).ka(0.15));
				c.push([Ia(a[b], d), new w(a[b].x + d.x, a[b].y + d.y)])
			} else
				c.push([a[b].K(), a[b].K()])
		}
		d = [];
		for (b = 0; b < a.length; ++b) {
			for (var k = (b + 1) % a.length, e = a[b], f = c[b][1], g = c[k][0], k = a[k], m = 0, u = 1, y = e.x - 1, A = e.y - 1, zc =
					[]; 1 >= m; ) {
				var z = 1 - m,
				fa = z * z * z * e.x + 3 * z * z * m * f.x + 3 * z * m * m * g.x + m * m * m * k.x,
				z = z * z * z * e.y + 3 * z * z * m * f.y + 3 * z * m * m * g.y + m * m * m * k.y,
				fa = Math.round(fa),
				z = Math.round(z);
				fa != y || z != A ? 1 < fa - y || 1 < z - A || 1 < y - fa || 1 < A - z ? (m -= u, u /= 1.1) : (zc.push(new w(fa, z)), y = fa, A = z) : (m -= u, u *= 1.1);
				m += u
			}
			d = d.concat(zc)
		}
		a = [];
		for (b = 0; b < d.length; b += Math.round(d.length / 300))
			a.push(d[b]);
		this.d = a
	};
	Ja.prototype.v = function () {
		if (this.a)
			if (this.g >= this.d.length)
				this.a.M(), this.a.Ba = !0;
			else {
				var a = this.d[this.g].x,
				b = this.d[this.g].y;
				this.a.L(a, b);
				a = 180 * Math.atan2(b - this.d[this.g - 1].y, a - this.d[this.g - 1].x) / Math.PI;
				this.a.rotate((a + 360) % 360);
				this.g++
			}
	};
	var Ka = "StopIteration" in l ? l.StopIteration : Error("StopIteration"),
	La = function () {};
	La.prototype.a = function () {
		throw Ka;
	};
	La.prototype.g = function () {
		return this
	};
	var Ma = function (a, b) {
		for (var c in a)
			b.call(void 0, a[c], c, a)
	},
	Na = function (a) {
		var b = [],
		c = 0,
		d;
		for (d in a)
			b[c++] = a[d];
		return b
	},
	Oa = function (a) {
		var b = [],
		c = 0,
		d;
		for (d in a)
			b[c++] = d;
		return b
	},
	Pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Qa = function (a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d)
				a[c] = d[c];
			for (var f = 0; f < Pa.length; f++)
				c = Pa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	};
	var Ra = function (a, b) {
		this.d = {};
		this.a = [];
		var c = arguments.length;
		if (1 < c) {
			if (c % 2)
				throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2)
				this.set(arguments[d], arguments[d + 1])
		} else if (a) {
			a instanceof Ra ? (c = a.U(), d = a.O()) : (c = Oa(a), d = Na(a));
			for (var e = 0; e < c.length; e++)
				this.set(c[e], d[e])
		}
	};
	h = Ra.prototype;
	h.ba = 0;
	h.ja = 0;
	h.O = function () {
		Sa(this);
		for (var a = [], b = 0; b < this.a.length; b++)
			a.push(this.d[this.a[b]]);
		return a
	};
	h.U = function () {
		Sa(this);
		return this.a.concat()
	};
	h.clear = function () {
		this.d = {};
		this.ja = this.ba = this.a.length = 0
	};
	var Sa = function (a) {
		if (a.ba != a.a.length) {
			for (var b = 0, c = 0; b < a.a.length; ) {
				var d = a.a[b];
				Ta(a.d, d) && (a.a[c++] = d);
				b++
			}
			a.a.length = c
		}
		if (a.ba != a.a.length) {
			for (var e = {}, c = b = 0; b < a.a.length; )
				d = a.a[b], Ta(e, d) || (a.a[c++] = d, e[d] = 1), b++;
			a.a.length = c
		}
	},
	Ua = function (a, b) {
		return Ta(a.d, b) ? a.d[b] : void 0
	};
	Ra.prototype.set = function (a, b) {
		Ta(this.d, a) || (this.ba++, this.a.push(a), this.ja++);
		this.d[a] = b
	};
	Ra.prototype.K = function () {
		return new Ra(this)
	};
	Ra.prototype.g = function (a) {
		Sa(this);
		var b = 0,
		c = this.a,
		d = this.d,
		e = this.ja,
		f = this,
		g = new La;
		g.a = function () {
			for (; ; ) {
				if (e != f.ja)
					throw Error("The map has changed since the iterator was created");
				if (b >= c.length)
					throw Ka;
				var g = c[b++];
				return a ? g : d[g]
			}
		};
		return g
	};
	var Ta = function (a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var Va = function (a) {
		if ("function" == typeof a.O)
			return a.O();
		if (n(a))
			return a.split("");
		if (ca(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++)
				b.push(a[d]);
			return b
		}
		return Na(a)
	},
	Wa = function (a, b, c) {
		if ("function" == typeof a.forEach)
			a.forEach(b, c);
		else if (ca(a) || n(a))
			za(a, b, c);
		else {
			var d;
			if ("function" == typeof a.U)
				d = a.U();
			else if ("function" != typeof a.O)
				if (ca(a) || n(a)) {
					d = [];
					for (var e = a.length, f = 0; f < e; f++)
						d.push(f)
				} else
					d = Oa(a);
			else
				d = void 0;
			for (var e = Va(a), f = e.length, g = 0; g < f; g++)
				b.call(c, e[g], d && d[g], a)
		}
	};
	var Xa,
	Ya,
	Za,
	$a,
	ab,
	bb = function () {
		return l.navigator ? l.navigator.userAgent : null
	},
	cb = function () {
		return l.navigator
	};
	$a = Za = Ya = Xa = !1;
	var db;
	if (db = bb()) {
		var eb = cb();
		Xa = 0 == db.lastIndexOf("Opera", 0);
		Ya = !Xa && (-1 != db.indexOf("MSIE") || -1 != db.indexOf("Trident"));
		Za = !Xa && -1 != db.indexOf("WebKit");
		$a = !Xa && !Za && !Ya && "Gecko" == eb.product
	}
	var fb = Xa,
	x = Ya,
	B = $a,
	C = Za,
	gb = cb();
	ab = -1 != (gb && gb.platform || "").indexOf("Mac");
	var hb = !!cb() && -1 != (cb().appVersion || "").indexOf("X11"),
	ib = function () {
		var a = l.document;
		return a ? a.documentMode : void 0
	},
	jb;
	i : {
		var kb = "",
		lb;
		if (fb && l.opera)
			var mb = l.opera.version, kb = "function" == typeof mb ? mb() : mb;
		else if (B ? lb = /rv\:([^\);]+)(\)|;)/ : x ? lb = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : C && (lb = /WebKit\/(\S+)/), lb)
			var nb = lb.exec(bb()), kb = nb ? nb[1] : "";
		if (x) {
			var ob = ib();
			if (ob > parseFloat(kb)) {
				jb = String(ob);
				break i
			}
		}
		jb = kb
	}
	var pb = jb,
	qb = {},
	D = function (a) {
		var b;
		if (!(b = qb[a])) {
			b = 0;
			for (var c = String(pb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
				var g = c[f] || "",
				k = d[f] || "",
				m = RegExp("(\\d*)(\\D*)", "g"),
				u = RegExp("(\\d*)(\\D*)", "g");
				do {
					var y = m.exec(g) || ["", "", ""],
					A = u.exec(k) || ["", "", ""];
					if (0 == y[0].length && 0 == A[0].length)
						break;
					b = ((0 == y[1].length ? 0 : parseInt(y[1], 10)) < (0 == A[1].length ? 0 : parseInt(A[1], 10)) ? -1 : (0 == y[1].length ?
							0 : parseInt(y[1], 10)) > (0 == A[1].length ? 0 : parseInt(A[1], 10)) ? 1 : 0) || ((0 == y[2].length) < (0 == A[2].length) ? -1 : (0 == y[2].length) > (0 == A[2].length) ? 1 : 0) || (y[2] < A[2] ? -1 : y[2] > A[2] ? 1 : 0)
				} while (0 == b)
			}
			b = qb[a] = 0 <= b
		}
		return b
	},
	rb = l.document,
	sb = rb && x ? ib() || ("CSS1Compat" == rb.compatMode ? parseInt(pb, 10) : 5) : void 0;
	var tb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
	vb = function (a) {
		if (ub) {
			ub = !1;
			var b = l.location;
			if (b) {
				var c = b.href;
				if (c && (c = (c = vb(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)
					throw ub = !0, Error();
			}
		}
		return a.match(tb)
	},
	ub = C;
	var wb = function (a, b) {
		var c;
		if (a instanceof wb)
			this.Y = void 0 !== b ? b : a.Y, xb(this, a.da), this.ya = a.ya, this.oa = a.oa, yb(this, a.xa), this.ma = a.ma, zb(this, a.X.K()), this.wa = a.wa;
		else if (a && (c = vb(String(a)))) {
			this.Y = !!b;
			xb(this, c[1] || "", !0);
			this.ya = c[2] ? decodeURIComponent(c[2] || "") : "";
			this.oa = c[3] ? decodeURIComponent(c[3] || "") : "";
			yb(this, c[4]);
			var d = c[5] || "";
			this.ma = d ? decodeURIComponent(d) : "";
			zb(this, c[6] || "", !0);
			this.wa = c[7] ? decodeURIComponent(c[7] || "") : ""
		} else
			this.Y = !!b, this.X = new E(null, 0, this.Y)
	};
	h = wb.prototype;
	h.da = "";
	h.ya = "";
	h.oa = "";
	h.xa = null;
	h.ma = "";
	h.wa = "";
	h.Y = !1;
	h.toString = function () {
		var a = [],
		b = this.da;
		b && a.push(Ab(b, Bb), ":");
		if (b = this.oa) {
			a.push("//");
			var c = this.ya;
			c && a.push(Ab(c, Bb), "@");
			a.push(encodeURIComponent(String(b)));
			b = this.xa;
			null != b && a.push(":", String(b))
		}
		if (b = this.ma)
			this.oa && "/" != b.charAt(0) && a.push("/"), a.push(Ab(b, "/" == b.charAt(0) ? Cb : Db));
		(b = this.X.toString()) && a.push("?", b);
		(b = this.wa) && a.push("#", Ab(b, Eb));
		return a.join("")
	};
	h.K = function () {
		return new wb(this)
	};
	var xb = function (a, b, c) {
		a.da = c ? b ? decodeURIComponent(b) : "" : b;
		a.da && (a.da = a.da.replace(/:$/, ""))
	},
	yb = function (a, b) {
		if (b) {
			b = Number(b);
			if (isNaN(b) || 0 > b)
				throw Error("Bad port number " + b);
			a.xa = b
		} else
			a.xa = null
	},
	zb = function (a, b, c) {
		b instanceof E ? (a.X = b, Fb(a.X, a.Y)) : (c || (b = Ab(b, Gb)), a.X = new E(b, 0, a.Y))
	},
	Ab = function (a, b) {
		return n(a) ? encodeURI(a).replace(b, Hb) : null
	},
	Hb = function (a) {
		a = a.charCodeAt(0);
		return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
	},
	Bb = /[#\/\?@]/g,
	Db = /[\#\?:]/g,
	Cb = /[\#\?]/g,
	Gb = /[\#\?@]/g,
	Eb = /#/g,
	E = function (a, b, c) {
		this.d = a || null;
		this.i = !!c
	},
	Jb = function (a) {
		if (!a.a && (a.a = new Ra, a.g = 0, a.d))
			for (var b = a.d.split("&"), c = 0; c < b.length; c++) {
				var d = b[c].indexOf("="),
				e = null,
				f = null;
				0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
				e = decodeURIComponent(e.replace(/\+/g, " "));
				e = Ib(a, e);
				a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
			}
	};
	E.prototype.a = null;
	E.prototype.g = null;
	E.prototype.add = function (a, b) {
		Jb(this);
		this.d = null;
		a = Ib(this, a);
		var c = Ua(this.a, a);
		c || this.a.set(a, c = []);
		c.push(b);
		this.g++;
		return this
	};
	var Kb = function (a, b) {
		Jb(a);
		b = Ib(a, b);
		if (Ta(a.a.d, b)) {
			a.d = null;
			a.g -= Ua(a.a, b).length;
			var c = a.a;
			Ta(c.d, b) && (delete c.d[b], c.ba--, c.ja++, c.a.length > 2 * c.ba && Sa(c))
		}
	};
	E.prototype.clear = function () {
		this.a = this.d = null;
		this.g = 0
	};
	var Lb = function (a, b) {
		Jb(a);
		b = Ib(a, b);
		return Ta(a.a.d, b)
	};
	h = E.prototype;
	h.U = function () {
		Jb(this);
		for (var a = this.a.O(), b = this.a.U(), c = [], d = 0; d < b.length; d++)
			for (var e = a[d], f = 0; f < e.length; f++)
				c.push(b[d]);
		return c
	};
	h.O = function (a) {
		Jb(this);
		var b = [];
		if (n(a))
			Lb(this, a) && (b = Ca(b, Ua(this.a, Ib(this, a))));
		else {
			a = this.a.O();
			for (var c = 0; c < a.length; c++)
				b = Ca(b, a[c])
		}
		return b
	};
	h.set = function (a, b) {
		Jb(this);
		this.d = null;
		a = Ib(this, a);
		Lb(this, a) && (this.g -= Ua(this.a, a).length);
		this.a.set(a, [b]);
		this.g++;
		return this
	};
	h.toString = function () {
		if (this.d)
			return this.d;
		if (!this.a)
			return "";
		for (var a = [], b = this.a.U(), c = 0; c < b.length; c++)
			for (var d = b[c], e = encodeURIComponent(String(d)), d = this.O(d), f = 0; f < d.length; f++) {
				var g = e;
				"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
				a.push(g)
			}
		return this.d = a.join("&")
	};
	h.K = function () {
		var a = new E;
		a.d = this.d;
		this.a && (a.a = this.a.K(), a.g = this.g);
		return a
	};
	var Ib = function (a, b) {
		var c = String(b);
		a.i && (c = c.toLowerCase());
		return c
	},
	Fb = function (a, b) {
		b && !a.i && (Jb(a), a.d = null, Wa(a.a, function (a, b) {
				var e = b.toLowerCase();
				b != e && (Kb(this, b), Kb(this, e), 0 < a.length && (this.d = null, this.a.set(Ib(this, e), Da(a)), this.g += a.length))
			}, a));
		a.i = b
	};
	var Mb = 0 <= navigator.userAgent.indexOf("MSIE"),
	Nb = function (a, b) {
		for (var c = 1; c < arguments.length; c += 2) {
			var d = arguments[c],
			e = arguments[c + 1],
			f = a.style;
			f && d in f ? f[d] = e : d in a ? a[d] = e : Mb && (f && "opacity" == d) && (a.zoom = 1, d = (f.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
		}
	},
	Ob = function () {
		return (new Date).getTime()
	},
	Pb = ["Moz", "ms", "O", "webkit"],
	Qb = ["", "moz", "ms", "o", "webkit"],
	Rb = function (a) {
		var b = document;
		if (!b)
			return null;
		for (var c = 0; c < Qb.length; c++) {
			var d =
				Qb[c],
			e = a;
			0 < d.length && (e = a.charAt(0).toUpperCase() + a.substr(1));
			d += e;
			if ("undefined" != typeof b[d])
				return d
		}
		return null
	};
	var F = function () {};
	F.prototype.Ka = !1;
	F.prototype.Ca = function () {
		return this.Ka
	};
	F.prototype.M = function () {
		this.Ka || (this.Ka = !0, this.B())
	};
	var Sb = function (a, b) {
		a.S || (a.S = []);
		a.S.push(p(b, void 0))
	};
	F.prototype.B = function () {
		if (this.S)
			for (; this.S.length; )
				this.S.shift()()
	};
	var G = function (a) {
		a && "function" == typeof a.M && a.M()
	},
	Tb = function (a) {
		for (var b = 0, c = arguments.length; b < c; ++b) {
			var d = arguments[b];
			ca(d) ? Tb.apply(null, d) : G(d)
		}
	};
	var Ub,
	Vb = function (a, b) {
		var c;
		c = a.className;
		c = n(c) && c.match(/\S+/g) || [];
		for (var d = Fa(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++)
			0 <= ya(f, d[g]) || f.push(d[g]);
		a.className = c.join(" ");
		return c.length == e
	};
	var Wb = !x || x && 9 <= sb;
	!B && !x || x && x && 9 <= sb || B && D("1.9.1");
	x && D("9");
	var Yb = function (a) {
		return a ? new H(Xb(a)) : Ub || (Ub = new H)
	},
	$b = function (a, b) {
		Ma(b, function (b, d) {
			"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Zb ? a.setAttribute(Zb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
		})
	},
	Zb = {
		cellpadding : "cellPadding",
		cellspacing : "cellSpacing",
		colspan : "colSpan",
		frameborder : "frameBorder",
		height : "height",
		maxlength : "maxLength",
		role : "role",
		rowspan : "rowSpan",
		type : "type",
		usemap : "useMap",
		valign : "vAlign",
		width : "width"
	},
	bc = function (a, b, c) {
		function d(c) {
			c && b.appendChild(n(c) ? a.createTextNode(c) : c)
		}
		for (var e = 2; e < c.length; e++) {
			var f = c[e];
			!ca(f) || da(f) && 0 < f.nodeType ? d(f) : za(ac(f) ? Da(f) : f, d)
		}
	},
	Xb = function (a) {
		return 9 == a.nodeType ? a : a.ownerDocument || a.document
	},
	ac = function (a) {
		if (a && "number" == typeof a.length) {
			if (da(a))
				return "function" == typeof a.item || "string" == typeof a.item;
			if ("function" == aa(a))
				return "function" == typeof a.item
		}
		return !1
	},
	H = function (a) {
		this.a = a || l.document || document
	};
	H.prototype.d = function (a, b, c) {
		var d = this.a,
		e = arguments,
		f = e[0],
		g = e[1];
		if (!Wb && g && (g.name || g.type)) {
			f = ["<", f];
			g.name && f.push(' name="', ua(g.name), '"');
			if (g.type) {
				f.push(' type="', ua(g.type), '"');
				var k = {};
				Qa(k, g);
				delete k.type;
				g = k
			}
			f.push(">");
			f = f.join("")
		}
		f = d.createElement(f);
		g && (n(g) ? f.className = g : ba(g) ? Vb.apply(null, [f].concat(g)) : $b(f, g));
		2 < e.length && bc(d, f, e);
		return f
	};
	var cc = function (a) {
		var b = a.a;
		a = C || "CSS1Compat" != b.compatMode ? b.body : b.documentElement;
		b = b.parentWindow || b.defaultView;
		return x && D("10") && b.pageYOffset != a.scrollTop ? new v(a.scrollLeft, a.scrollTop) : new v(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
	},
	I = function (a) {
		a && a.parentNode && a.parentNode.removeChild(a)
	};
	var J = function (a, b) {
		this.type = a;
		this.a = this.target = b
	};
	h = J.prototype;
	h.M = function () {};
	h.V = !1;
	h.Xb = !1;
	h.Ua = !0;
	h.ha = function () {
		this.Xb = !0;
		this.Ua = !1
	};
	var dc = function (a) {
		dc[" "](a);
		return a
	};
	dc[" "] = function () {};
	var ec = !x || x && 9 <= sb,
	fc = !x || x && 9 <= sb,
	gc = x && !D("9");
	!C || D("528");
	B && D("1.9b") || x && D("8") || fb && D("9.5") || C && D("528");
	B && !D("8") || x && D("9");
	var hc = function (a, b) {
		a && this.init(a, b)
	};
	q(hc, J);
	var ic = [1, 4, 2];
	h = hc.prototype;
	h.target = null;
	h.Tb = null;
	h.Rb = 0;
	h.Sb = 0;
	h.clientX = 0;
	h.clientY = 0;
	h.Ea = 0;
	h.Fa = 0;
	h.Nb = 0;
	h.Pb = 0;
	h.Ob = 0;
	h.Na = !1;
	h.Mb = !1;
	h.Ub = !1;
	h.Qb = !1;
	h.Vb = !1;
	h.ia = null;
	h.init = function (a, b) {
		var c = this.type = a.type;
		J.call(this, c);
		this.target = a.target || a.srcElement;
		this.a = b;
		var d = a.relatedTarget;
		if (d) {
			if (B) {
				var e;
				i : {
					try {
						dc(d.nodeName);
						e = !0;
						break i
					} catch (f) {}

					e = !1
				}
				e || (d = null)
			}
		} else
			"mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
		this.Tb = d;
		this.Rb = C || void 0 !== a.offsetX ? a.offsetX : a.layerX;
		this.Sb = C || void 0 !== a.offsetY ? a.offsetY : a.layerY;
		this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
		this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
		this.Ea = a.screenX || 0;
		this.Fa = a.screenY || 0;
		this.Nb = a.button;
		this.Pb = a.keyCode || 0;
		this.Ob = a.charCode || ("keypress" == c ? a.keyCode : 0);
		this.Na = a.ctrlKey;
		this.Mb = a.altKey;
		this.Ub = a.shiftKey;
		this.Qb = a.metaKey;
		this.Vb = ab ? a.metaKey : a.ctrlKey;
		this.ia = a;
		a.defaultPrevented && this.ha();
		delete this.V
	};
	h.ha = function () {
		hc.G.ha.call(this);
		var a = this.ia;
		if (a.preventDefault)
			a.preventDefault();
		else if (a.returnValue = !1, gc)
			try {
				if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
					a.keyCode = -1
			} catch (b) {}

	};
	h.la = function () {
		return this.ia
	};
	var jc = "closure_listenable_" + (1E6 * Math.random() | 0),
	kc = 0;
	var lc = function (a, b, c, d, e) {
		this.W = a;
		this.va = null;
		this.src = b;
		this.type = c;
		this.capture = !!d;
		this.ua = e;
		this.key = ++kc;
		this.ca = this.ta = !1
	},
	mc = function (a) {
		a.ca = !0;
		a.W = null;
		a.va = null;
		a.src = null;
		a.ua = null
	};
	var nc = function (a) {
		this.src = a;
		this.a = {};
		this.d = 0
	};
	nc.prototype.add = function (a, b, c, d, e) {
		var f = this.a[a];
		f || (f = this.a[a] = [], this.d++);
		var g = oc(f, b, d, e);
		-1 < g ? (a = f[g], c || (a.ta = !1)) : (a = new lc(b, this.src, a, !!d, e), a.ta = c, f.push(a));
		return a
	};
	var pc = function (a, b) {
		var c = b.type;
		if (!(c in a.a))
			return !1;
		var d = Ba(a.a[c], b);
		d && (mc(b), 0 == a.a[c].length && (delete a.a[c], a.d--));
		return d
	},
	qc = function (a, b, c, d, e) {
		a = a.a[b];
		b = -1;
		a && (b = oc(a, c, d, e));
		return -1 < b ? a[b] : null
	},
	oc = function (a, b, c, d) {
		for (var e = 0; e < a.length; ++e) {
			var f = a[e];
			if (!f.ca && f.W == b && f.capture == !!c && f.ua == d)
				return e
		}
		return -1
	};
	var rc = {},
	sc = {},
	tc = {},
	uc = function (a, b, c, d, e) {
		if (ba(b)) {
			for (var f = 0; f < b.length; f++)
				uc(a, b[f], c, d, e);
			return null
		}
		c = vc(c);
		if (a && a[jc])
			a = a.listen(b, c, d, e);
		else {
			f = c;
			if (!b)
				throw Error("Invalid event type");
			c = !!d;
			var g = ha(a),
			k = sc[g];
			k || (sc[g] = k = new nc(a));
			d = k.add(b, f, !1, d, e);
			d.va || (e = wc(), d.va = e, e.src = a, e.W = d, a.addEventListener ? a.addEventListener(b, e, c) : a.attachEvent(b in tc ? tc[b] : tc[b] = "on" + b, e), rc[d.key] = d);
			a = d
		}
		return a
	},
	wc = function () {
		var a = xc,
		b = fc ? function (c) {
			return a.call(b.src, b.W, c)
		}
		 : function (c) {
			c =
				a.call(b.src, b.W, c);
			if (!c)
				return c
		};
		return b
	},
	yc = function (a, b, c, d, e) {
		if (ba(b))
			for (var f = 0; f < b.length; f++)
				yc(a, b[f], c, d, e);
		else
			c = vc(c), a && a[jc] ? a.unlisten(b, c, d, e) : a && (d = !!d, (a = Ac(a)) && (b = qc(a, b, c, d, e)) && Bc(b))
	},
	Bc = function (a) {
		if ("number" == typeof a || !a || a.ca)
			return !1;
		var b = a.src;
		if (b && b[jc])
			return pc(b.N, a);
		var c = a.type,
		d = a.va;
		b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in tc ? tc[c] : tc[c] = "on" + c, d);
		(c = Ac(b)) ? (pc(c, a), 0 == c.d && (c.src = null, delete sc[ha(b)])) :
		mc(a);
		delete rc[a.key];
		return !0
	},
	Dc = function (a, b, c, d) {
		var e = 1;
		if (a = Ac(a))
			if (b = a.a[b])
				for (b = Da(b), a = 0; a < b.length; a++) {
					var f = b[a];
					f && (f.capture == c && !f.ca) && (e &= !1 !== Cc(f, d))
				}
		return Boolean(e)
	},
	Cc = function (a, b) {
		var c = a.W,
		d = a.ua || a.src;
		a.ta && Bc(a);
		return c.call(d, b)
	},
	xc = function (a, b) {
		if (a.ca)
			return !0;
		if (!fc) {
			var c;
			if (!(c = b))
				i : {
					c = ["window", "event"];
					for (var d = l, e; e = c.shift(); )
						if (null != d[e])
							d = d[e];
						else {
							c = null;
							break i
						}
					c = d
				}
			e = c;
			c = new hc(e, this);
			d = !0;
			if (!(0 > e.keyCode || void 0 != e.returnValue)) {
				i : {
					var f = !1;
					if (0 ==
						e.keyCode)
						try {
							e.keyCode = -1;
							break i
						} catch (g) {
							f = !0
						}
					if (f || void 0 == e.returnValue)
						e.returnValue = !0
				}
				e = [];
				for (f = c.a; f; f = f.parentNode)
					e.push(f);
				for (var f = a.type, k = e.length - 1; !c.V && 0 <= k; k--)
					c.a = e[k], d &= Dc(e[k], f, !0, c);
				for (k = 0; !c.V && k < e.length; k++)
					c.a = e[k], d &= Dc(e[k], f, !1, c)
			}
			return d
		}
		return Cc(a, new hc(b, this))
	},
	Ac = function (a) {
		return a[ea] ? sc[ha(a)] || null : null
	},
	Ec = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
	vc = function (a) {
		s(a, "Listener can not be null.");
		if ("function" == aa(a))
			return a;
		s(a.handleEvent, "An object listener must have handleEvent method.");
		return a[Ec] || (a[Ec] = function (b) {
			return a.handleEvent(b)
		})
	};
	var K = function (a) {
		this.d = a;
		this.a = {}

	};
	q(K, F);
	var Fc = [];
	K.prototype.listen = function (a, b, c, d, e) {
		ba(b) || (Fc[0] = b, b = Fc);
		for (var f = 0; f < b.length; f++) {
			var g = uc(a, b[f], c || this, d || !1, e || this.d || this);
			if (!g)
				break;
			this.a[g.key] = g
		}
		return this
	};
	K.prototype.unlisten = function (a, b, c, d, e) {
		if (ba(b))
			for (var f = 0; f < b.length; f++)
				this.unlisten(a, b[f], c, d, e);
		else
			e = e || this.d || this, c = vc(c || this), d = !!d, b = a && a[jc] ? qc(a.N, b, c, d, e) : a ? (a = Ac(a)) ? qc(a, b, c, d, e) : null : null, b && (Bc(b), delete this.a[b.key]);
		return this
	};
	var Gc = function (a) {
		Ma(a.a, Bc);
		a.a = {}

	};
	K.prototype.B = function () {
		K.G.B.call(this);
		Gc(this)
	};
	K.prototype.handleEvent = function () {
		throw Error("EventHandler.handleEvent not implemented");
	};
	var Hc = function (a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d
	};
	Hc.prototype.K = function () {
		return new Hc(this.left, this.top, this.width, this.height)
	};
	Hc.prototype.toString = function () {
		return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
	};
	Hc.prototype.floor = function () {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	Hc.prototype.round = function () {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	var Ic = function (a, b) {
		var c;
		i : {
			c = Xb(a);
			if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
				c = c[b] || c.getPropertyValue(b) || "";
				break i
			}
			c = ""
		}
		return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
	},
	Kc = function (a, b, c) {
		var d,
		e = B && (ab || hb) && D("1.9");
		b instanceof v ? (d = b.x, b = b.y) : (d = b, b = c);
		a.style.left = Jc(d, e);
		a.style.top = Jc(b, e)
	},
	Lc = function (a) {
		var b;
		try {
			b = a.getBoundingClientRect()
		} catch (c) {
			return {
				left : 0,
				top : 0,
				right : 0,
				bottom : 0
			}
		}
		x && (a = a.ownerDocument,
			b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
		return b
	},
	Mc = function (a) {
		if (x && !(x && 8 <= sb))
			return a.offsetParent;
		var b = Xb(a),
		c = Ic(a, "position"),
		d = "fixed" == c || "absolute" == c;
		for (a = a.parentNode; a && a != b; a = a.parentNode)
			if (c = Ic(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
				return a;
		return null
	},
	L = function (a) {
		var b = Nc;
		a = Oc(a);
		b = Oc(b);
		return new v(a.x - b.x, a.y - b.y)
	},
	Oc = function (a) {
		s(a);
		if (1 == a.nodeType) {
			var b;
			if (a.getBoundingClientRect)
				b = Lc(a), b = new v(b.left, b.top);
			else {
				b = cc(Yb(a));
				var c,
				d = Xb(a),
				e = Ic(a, "position");
				xa(a, "Parameter is required");
				var f = B && d.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY),
				g = new v(0, 0),
				k;
				c = d ? Xb(d) : document;
				(k = !x) || (k = x && 9 <= sb) || (k = "CSS1Compat" == Yb(c).a.compatMode);
				k = k ? c.documentElement : c.body;
				if (a != k)
					if (a.getBoundingClientRect)
						c =
							Lc(a), d = cc(Yb(d)), g.x = c.left + d.x, g.y = c.top + d.y;
					else if (d.getBoxObjectFor && !f)
						c = d.getBoxObjectFor(a), d = d.getBoxObjectFor(k), g.x = c.screenX - d.screenX, g.y = c.screenY - d.screenY;
					else {
						f = a;
						do {
							g.x += f.offsetLeft;
							g.y += f.offsetTop;
							f != a && (g.x += f.clientLeft || 0, g.y += f.clientTop || 0);
							if (C && "fixed" == Ic(f, "position")) {
								g.x += d.body.scrollLeft;
								g.y += d.body.scrollTop;
								break
							}
							f = f.offsetParent
						} while (f && f != a);
						if (fb || C && "absolute" == e)
							g.y -= d.body.offsetTop;
						for (f = a; (f = Mc(f)) && f != d.body && f != k; )
							g.x -= f.scrollLeft, fb && "TR" == f.tagName ||
							(g.y -= f.scrollTop)
					}
				b = new v(g.x - b.x, g.y - b.y)
			}
			if (B && !D(12)) {
				var m;
				x ? m = "-ms-transform" : C ? m = "-webkit-transform" : fb ? m = "-o-transform" : B && (m = "-moz-transform");
				var u;
				m && (u = Ic(a, m));
				u || (u = Ic(a, "transform"));
				a = u ? (a = u.match(Pc)) ? new v(parseFloat(a[1]), parseFloat(a[2])) : new v(0, 0) : new v(0, 0);
				a = new v(b.x + a.x, b.y + a.y)
			} else
				a = b;
			return a
		}
		m = "function" == aa(a.la);
		u = a;
		a.targetTouches ? u = a.targetTouches[0] : m && a.la().targetTouches && (u = a.la().targetTouches[0]);
		return new v(u.clientX, u.clientY)
	},
	Jc = function (a, b) {
		"number" ==
		typeof a && (a = (b ? Math.round(a) : a) + "px");
		return a
	},
	Rc = function (a) {
		var b = Qc;
		if ("none" != Ic(a, "display"))
			return b(a);
		var c = a.style,
		d = c.display,
		e = c.visibility,
		f = c.position;
		c.visibility = "hidden";
		c.position = "absolute";
		c.display = "inline";
		a = b(a);
		c.display = d;
		c.position = f;
		c.visibility = e;
		return a
	},
	Qc = function (a) {
		var b = a.offsetWidth,
		c = a.offsetHeight,
		d = C && !b && !c;
		return (void 0 === b || d) && a.getBoundingClientRect ? (a = Lc(a), new r(a.right - a.left, a.bottom - a.top)) : new r(b, c)
	},
	Sc = function (a, b) {
		var c = a.style;
		"opacity" in c ?
		c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
	},
	M = function (a, b) {
		a.style.display = b ? "" : "none"
	},
	Pc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
	var Tc = function (a) {
		this.i = a;
		this.d = !1;
		this.g = [];
		this.a = new Image
	},
	Uc = function (a) {
		if (!a.a.src) {
			var b = function () {
				if (!a.d) {
					a.d = !0;
					for (var b = 0, d; d = a.g[b]; b++)
						d()
				}
			};
			a.a.onload = b;
			a.a.src = a.i;
			(a.a.complete || "complete" == a.a.readyState) && b()
		}
	},
	Vc = function (a, b) {
		a.d ? b() : a.g.push(b)
	};
	var Wc = function (a, b) {
		this.i = a;
		this.a = b;
		this.d = new Tc(a);
		this.g = !1;
		var c = this;
		Vc(this.d, function () {
			c.g = !0
		})
	};
	Wc.prototype.getWidth = function (a) {
		return this.a[a][2]
	};
	Wc.prototype.getHeight = function (a) {
		return this.a[a][3]
	};
	var Xc = function (a, b) {
		var c = a.a[b];
		return {
			x : c[0],
			y : c[1]
		}
	},
	Yc = function (a, b) {
		b && Vc(a.d, b);
		Uc(a.d)
	};
	var N = function () {
		this.N = new nc(this);
		this.H = this
	};
	q(N, F);
	N.prototype[jc] = !0;
	N.prototype.A = null;
	N.prototype.removeEventListener = function (a, b, c, d) {
		yc(this, a, b, c, d)
	};
	var O = function (a, b) {
		Zc(a);
		var c,
		d = a.A;
		if (d) {
			c = [];
			for (var e = 1; d; d = d.A)
				c.push(d), s(1E3 > ++e, "infinite loop")
		}
		var d = a.H,
		e = b,
		f = e.type || e;
		if (n(e))
			e = new J(e, d);
		else if (e instanceof J)
			e.target = e.target || d;
		else {
			var g = e,
			e = new J(f, d);
			Qa(e, g)
		}
		var g = !0,
		k;
		if (c)
			for (var m = c.length - 1; !e.V && 0 <= m; m--)
				k = e.a = c[m], g = $c(k, f, !0, e) && g;
		e.V || (k = e.a = d, g = $c(k, f, !0, e) && g, e.V || (g = $c(k, f, !1, e) && g));
		if (c)
			for (m = 0; !e.V && m < c.length; m++)
				k = e.a = c[m], g = $c(k, f, !1, e) && g;
		return g
	};
	N.prototype.B = function () {
		N.G.B.call(this);
		if (this.N) {
			var a = this.N,
			b = 0,
			c;
			for (c in a.a) {
				for (var d = a.a[c], e = 0; e < d.length; e++)
					++b, mc(d[e]);
				delete a.a[c];
				a.d--
			}
		}
		this.A = null
	};
	N.prototype.listen = function (a, b, c, d) {
		Zc(this);
		return this.N.add(a, b, !1, c, d)
	};
	N.prototype.unlisten = function (a, b, c, d) {
		var e = this.N;
		if (a in e.a) {
			var f = e.a[a];
			b = oc(f, b, c, d);
			-1 < b ? (mc(f[b]), s(null != f.length), t.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.d--), a = !0) : a = !1
		} else
			a = !1;
		return a
	};
	var $c = function (a, b, c, d) {
		b = a.N.a[b];
		if (!b)
			return !0;
		b = Da(b);
		for (var e = !0, f = 0; f < b.length; ++f) {
			var g = b[f];
			if (g && !g.ca && g.capture == c) {
				var k = g.W,
				m = g.ua || g.src;
				g.ta && pc(a.N, g);
				e = !1 !== k.call(m, d) && e
			}
		}
		return e && !1 != d.Ua
	},
	Zc = function (a) {
		s(a.N, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
	};
	var ad = [[0, 98, 700, 205], [707, 52, 700, 57], [707, 0, 700, 45], [80, 0, 505, 91], [949, 221, 45, 27], [918, 183, 24, 31], [764, 225, 24, 31], [949, 183, 24, 31], [1275, 145, 144, 127], [1106, 145, 162, 144], [1020, 226, 37, 37], [1359, 296, 29, 30], [787, 188, 29, 30], [764, 296, 29, 30], [852, 225, 17, 17], [764, 188, 16, 17], [814, 225, 12, 11], [707, 201, 12, 12], [24, 0, 11, 11], [707, 116, 11, 12], [842, 188, 12, 11], [880, 164, 12, 12], [725, 116, 12, 12], [611, 0, 12, 12], [880, 202, 12, 12], [1414, 0, 12, 12], [745, 188, 12, 12], [707, 163, 12, 12], [42, 62, 12, 12], [1298, 296, 12, 12], [42, 43, 12, 12], [918,
			164, 12, 12], [707, 314, 12, 12], [823, 188, 12, 12], [949, 255, 12, 12], [707, 145, 11, 11], [745, 296, 12, 12], [726, 201, 12, 12], [592, 0, 12, 11], [1055, 201, 12, 12], [745, 164, 17, 17], [833, 225, 12, 12], [42, 19, 17, 17], [42, 0, 12, 12], [800, 296, 12, 12], [1020, 183, 28, 36], [0, 0, 17, 16], [1064, 226, 16, 16], [1055, 183, 12, 11], [880, 221, 12, 12], [745, 145, 12, 11], [880, 145, 12, 12], [630, 0, 12, 11], [918, 145, 12, 12], [764, 145, 12, 12], [819, 296, 12, 12], [881, 296, 11, 11], [707, 296, 11, 11], [899, 296, 12, 11], [1001, 183, 12, 12], [649, 0, 12, 11], [0, 310, 11, 12], [880, 183, 12, 12], [707, 182,
			12, 12], [1087, 183, 12, 12], [1020, 270, 12, 12], [795, 225, 12, 12], [1317, 296, 11, 11], [861, 188, 12, 12], [949, 274, 12, 12], [862, 296, 12, 11], [726, 296, 12, 12], [838, 296, 17, 17], [880, 240, 11, 12], [1335, 296, 17, 17], [899, 164, 12, 12], [61, 0, 12, 12], [745, 263, 92, 24], [744, 116, 501, 22], [918, 296, 373, 19]],
	bd = {
		mb : 0,
		Va : 1,
		Wa : 2,
		nb : 3,
		Ma : 4,
		Xa : 5,
		Yc : 6,
		Zc : 7,
		ob : 8,
		pb : 9,
		Ya : 10,
		Za : 11,
		Lb : 12,
		La : 13,
		qd : 14,
		rd : 15,
		sd : 16,
		td : 17,
		ud : 18,
		vd : 19,
		wd : 20,
		xd : 21,
		yd : 22,
		zd : 23,
		Ad : 24,
		Bd : 25,
		Cd : 26,
		Dd : 27,
		Ed : 28,
		Fd : 29,
		Gd : 30,
		Hd : 31,
		Id : 32,
		Jd : 33,
		Kd : 34,
		Ld : 35,
		Md : 36,
		Nd : 37,
		Od : 38,
		Pd : 39,
		Qd : 40,
		Rd : 41,
		Sd : 42,
		Td : 43,
		Ud : 44,
		qb : 45,
		Vd : 46,
		Wd : 47,
		Xd : 48,
		Yd : 49,
		Zd : 50,
		$d : 51,
		ae : 52,
		be : 53,
		ce : 54,
		de : 55,
		ee : 56,
		fe : 57,
		ge : 58,
		he : 59,
		ie : 60,
		je : 61,
		ke : 62,
		le : 63,
		ne : 64,
		oe : 65,
		pe : 66,
		qe : 67,
		re : 68,
		se : 69,
		ue : 70,
		ve : 71,
		we : 72,
		xe : 73,
		ye : 74,
		ze : 75,
		Ae : 76,
		$a : 77,
		ab : 78,
		bb : 79
	},
	cd = [[903, 26, 25, 25], [2046, 0, 25, 25], [2686, 27, 25, 25], [670, 208, 25, 25], [2732, 0, 14, 27], [1258, 289, 14, 27], [2285, 66, 36, 33], [812, 92, 37, 24], [903, 0, 40, 23], [812, 119, 41, 23], [2686, 207, 42, 39], [277, 208, 40, 24], [2577, 281, 39, 28], [2686, 0, 39, 24], [2092, 281, 34, 27], [2249, 0, 172, 35], [2074,
			28, 172, 35], [846, 289, 172, 35], [2266, 281, 172, 35], [2749, 0, 637, 141], [1781, 62, 42, 43], [2686, 310, 43, 43], [2686, 55, 43, 43], [812, 46, 43, 43], [812, 0, 43, 43], [2046, 316, 43, 43], [631, 314, 43, 43], [231, 280, 43, 43], [2220, 281, 43, 43], [2074, 0, 25, 25], [903, 54, 25, 25], [320, 208, 308, 151], [1343, 145, 700, 205], [2749, 144, 700, 205], [0, 0, 700, 205], [2092, 311, 39, 24], [2459, 0, 61, 59], [2534, 317, 40, 23], [2534, 281, 36, 33], [2441, 281, 53, 67], [2686, 101, 40, 24], [2497, 281, 34, 27], [932, 54, 43, 74], [903, 82, 26, 37], [978, 0, 160, 141], [2424, 0, 32, 32], [1926, 0, 32, 32], [2686,
			275, 32, 32], [1961, 0, 31, 32], [277, 270, 32, 32], [2185, 281, 32, 32], [277, 235, 32, 32], [2046, 281, 32, 32], [1891, 0, 32, 32], [1961, 35, 45, 27], [631, 208, 24, 31], [2046, 137, 637, 141], [703, 289, 140, 67], [231, 208, 41, 69], [2686, 249, 27, 23], [631, 242, 36, 69], [1926, 65, 31, 70], [1021, 289, 234, 67], [2134, 281, 48, 32], [2324, 66, 63, 50], [2074, 66, 95, 63], [703, 0, 106, 70], [2523, 64, 112, 67], [2172, 66, 110, 68], [1781, 0, 107, 59], [2523, 0, 111, 61], [1141, 0, 637, 141], [703, 145, 637, 141], [0, 208, 148, 74], [858, 0, 42, 75], [2009, 0, 28, 21], [2686, 128, 37, 76], [2009, 24, 33, 75], [0,
			285, 228, 74]],
	dd = {
		cb : 0,
		eb : 1,
		fb : 2,
		gb : 3,
		bc : 4,
		cc : 5,
		dc : 6,
		ec : 7,
		fc : 8,
		gc : 9,
		hc : 10,
		ic : 11,
		jc : 12,
		kc : 13,
		lc : 14,
		mc : 15,
		nc : 16,
		oc : 17,
		qc : 18,
		sc : 19,
		tc : 20,
		uc : 21,
		vc : 22,
		wc : 23,
		xc : 24,
		yc : 25,
		Ac : 26,
		Bc : 27,
		Cc : 28,
		hb : 29,
		ib : 30,
		Dc : 31,
		jb : 32,
		kb : 33,
		lb : 34,
		Ec : 35,
		Fc : 36,
		Gc : 37,
		Hc : 38,
		Ic : 39,
		Jc : 40,
		Kc : 41,
		Lc : 42,
		Mc : 43,
		Nc : 44,
		Oc : 45,
		Pc : 46,
		Qc : 47,
		Rc : 48,
		Sc : 49,
		Tc : 50,
		Uc : 51,
		Vc : 52,
		Wc : 53,
		Ma : 54,
		Xc : 55,
		bd : 56,
		cd : 57,
		dd : 58,
		ed : 59,
		fd : 60,
		gd : 61,
		$c : 62,
		hd : 63,
		jd : 64,
		kd : 65,
		ld : 66,
		md : 67,
		nd : 68,
		od : 69,
		pd : 70,
		Be : 71,
		De : 72,
		Ee : 73,
		Fe : 74,
		Ge : 75,
		He : 76,
		Ie : 77,
		Ce : 78
	},
	ed = [[0, 141, 37, 35], [163,
			341, 38, 36], [163, 380, 39, 36], [0, 71, 41, 37], [44, 71, 42, 39], [156, 71, 42, 39], [81, 209, 42, 38], [163, 301, 39, 37], [40, 142, 38, 36], [81, 170, 38, 36], [67, 0, 72, 59], [126, 161, 74, 52], [126, 115, 76, 43], [0, 243, 74, 52], [0, 181, 72, 59], [40, 115, 25, 24], [0, 44, 25, 24], [0, 115, 26, 23], [81, 115, 26, 24], [81, 142, 26, 25], [0, 301, 160, 141], [142, 0, 61, 47], [89, 71, 64, 41], [126, 216, 65, 32], [0, 0, 64, 41], [108, 251, 61, 47], [81, 251, 24, 31]],
	fd = [[260, 143, 37, 36], [445, 59, 37, 36], [0, 132, 29, 28], [442, 0, 40, 38], [260, 182, 41, 37], [218, 98, 31, 29], [260, 101, 43, 39], [260, 59, 42, 39],
		[526, 59, 32, 30], [0, 194, 41, 38], [218, 59, 39, 36], [218, 169, 30, 29], [218, 130, 38, 36], [485, 59, 38, 36], [411, 28, 28, 27], [0, 163, 136, 28], [0, 31, 136, 28], [306, 59, 136, 28], [0, 0, 136, 28], [306, 153, 72, 67], [139, 136, 74, 65], [139, 0, 76, 63], [139, 66, 74, 67], [0, 62, 72, 67], [285, 0, 28, 26], [32, 132, 27, 25], [411, 0, 28, 25], [315, 29, 29, 27], [285, 29, 27, 26], [408, 98, 160, 141], [347, 0, 61, 56], [218, 0, 64, 55], [306, 98, 65, 52], [485, 0, 64, 56], [75, 62, 61, 57], [381, 98, 24, 31]];
	var gd = function (a, b, c) {
		this.k = a;
		this.g = b;
		this.i = c;
		this.d = 0;
		this.a = a
	},
	hd,
	id,
	P = [],
	jd = [],
	kd = !1,
	Q = function (a, b, c) {
		a = new gd(a, b, c);
		jd.push(a);
		kd || ld();
		md();
		return a
	},
	nd = function (a, b) {
		return a.a - b.a
	},
	md = function () {
		0 != P.length && (window.clearTimeout(hd), id = la(), hd = window.setTimeout(od, P[0].a))
	},
	od = function () {
		ld();
		md()
	},
	ld = function () {
		window.clearTimeout(hd);
		kd = !0;
		if (0 != P.length)
			for (var a = la() - id; 0 != P.length; ) {
				var b = P[0];
				b.a -= a;
				Ba(P, b);
				0 >= b.a ? (b.i || (b.a = b.k, jd.push(b)), b.g(b.d), b.d++) : jd.push(b)
			}
		Ea(P, jd);
		jd =
			[];
		a = P;
		s(null != a.length);
		t.sort.call(a, nd || Ga);
		kd = !1
	},
	R = function (a) {
		a && (Ba(P, a), Ba(jd, a))
	};
	var pd = {
		Yb : "blue",
		Zb : "red",
		$b : "yellow"
	},
	qd = {
		Yb : "c_blue",
		Zb : "c_red",
		$b : "c_yellow"
	},
	rd = Math.PI / 180,
	sd = 180 * Math.atan2(-50, -300) / Math.PI + 360,
	td = 180 - sd,
	ud = null,
	vd = null,
	Nc = null,
	S = null,
	wd = null,
	T = null,
	xd = null,
	yd = null,
	zd = function (a, b, c) {
		b = b.a[c];
		a.style.backgroundPosition = b ?  - (b[0] + 0) + "px " +  - (b[1] + 0) + "px" : ""
	},
	U = function (a, b, c) {
		a.style.width = Math.floor(b) + "px";
		a.style.height = Math.floor(c) + "px"
	},
	Ad = function (a, b, c) {
		b = b[c];
		Kc(a, b[0], b[1])
	},
	V = function (a, b, c, d) {
		var e = document.createElement("div");
		e.style.position =
			"absolute";
		e.style.a = "none";
		e.style.MozUserSelect = "none";
		e.style.webkitUserSelect = "none";
		e.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
		e.unselectable = "on";
		var f = a.a[b];
		e.style.width = f[2] + "px";
		e.style.height = f[3] + "px";
		f = a.a[b];
		a = [e, "url(" + a.i + ") " +  - (f[0] + 0) + "px " +  - (f[1] + 0) + "px no-repeat"];
		e = a[0];
		e.style.background = a[1];
		c && Ad(e, c, b);
		d && (e.style.zIndex = d);
		Nc.appendChild(e);
		return e
	},
	Bd = function (a, b) {
		return a > ud.width || 0 > a || b > ud.height || 0 > b
	},
	Cd = function (a, b, c, d, e, f) {
		b = f % b;
		a.style.backgroundPosition =
			 - (b * c + b + 1 + d) + "px " + -e + "px"
	},
	Dd = function (a, b, c, d) {
		J.call(this, "e");
		this.left = a;
		this.top = b;
		this.id = c;
		this.d = d
	};
	q(Dd, J);
	var Ed = function (a, b, c, d, e) {
		J.call(this, "b");
		this.d = a;
		this.left = c;
		this.top = d;
		this.t = e
	};
	q(Ed, J);
	var Fd = function (a, b, c) {
		J.call(this, "m");
		this.left = a;
		this.top = b;
		this.d = c
	};
	q(Fd, J);
	var Gd = function (a, b) {
		J.call(this, "p");
		this.d = a;
		this.left = b
	};
	q(Gd, J);
	var Hd = function (a) {
		J.call(this, "d");
		this.d = a
	};
	q(Hd, J);
	var Id = function (a, b, c, d) {
		J.call(this, "g");
		this.x = a;
		this.y = b;
		this.g = c;
		this.d = d
	};
	q(Id, J);
	var Jd = function () {
		J.call(this, "l")
	};
	q(Jd, J);
	var Kd = function (a) {
		J.call(this, "j");
		this.d = a
	};
	q(Kd, J);
	var Ld = function (a) {
		J.call(this, "s");
		this.d = a
	};
	q(Ld, J);
	var Md = function (a, b) {
		J.call(this, "f");
		this.g = a;
		this.d = b
	};
	q(Md, J);
	var Nd = function (a) {
		J.call(this, "r");
		this.d = a
	};
	q(Nd, J);
	var W = function (a, b, c, d, e, f) {
		this.g = new K(this);
		this.a = V(a, c, d, e);
		this.d = a;
		this.k = b;
		this.o = d;
		this.i = c;
		this.enabled = !0;
		this.s = f;
		this.g.listen(this.a, "mouseover", this.A);
		this.g.listen(this.a, "mouseout", this.w);
		this.g.listen(this.a, "click", this.v)
	};
	q(W, F);
	W.prototype.A = function () {
		this.enabled && (zd(this.a, this.d, this.k), U(this.a, this.d.getWidth(this.k), this.d.getHeight(this.k)), Ad(this.a, this.o, this.k))
	};
	W.prototype.w = function () {
		this.enabled && (zd(this.a, this.d, this.i), U(this.a, this.d.getWidth(this.i), this.d.getHeight(this.i)), Ad(this.a, this.o, this.i))
	};
	W.prototype.v = function () {
		this.enabled && this.s()
	};
	var Od = function (a) {
		M(a.a, !1);
		a.enabled = !1
	};
	W.prototype.B = function () {
		G(this.g);
		this.g = null;
		I(this.a)
	};
	var Pd = {
		0 : [0, 0],
		1 : [0, 148],
		2 : [0, 160],
		3 : [97, 50],
		4 : [327, 17],
		5 : [551, 15],
		6 : [568, 74],
		7 : [583, 139],
		8 : [262, 31],
		9 : [253, 22],
		10 : [319, 167],
		11 : [663, 171],
		12 : [7, 171],
		13 : [7, 171],
		14 : [438, 62],
		15 : [194, 45],
		16 : [213, 162],
		17 : [303, 144],
		18 : [371, 162],
		19 : [405, 136],
		20 : [473, 158],
		21 : [566, 134],
		22 : [604, 82],
		23 : [592, 44],
		24 : [494, 4],
		25 : [533, 62],
		26 : [482, 95],
		27 : [643, 15],
		28 : [377, 7],
		29 : [389, 39],
		30 : [242, 90],
		31 : [88, 130],
		32 : [145, 104],
		33 : [105, 41],
		34 : [141, 59],
		35 : [155, 11],
		36 : [230, 7],
		37 : [325, 52],
		38 : [287, 21],
		39 : [61, 67],
		40 : [22, 16],
		41 : [460, 38],
		42 : [671,
			56],
		43 : [20, 108],
		44 : [647, 105],
		45 : [619, 23],
		46 : [438, 21],
		47 : [189, 37],
		48 : [213, 162],
		49 : [289, 144],
		50 : [353, 162],
		51 : [399, 136],
		52 : [473, 158],
		53 : [585, 148],
		54 : [676, 130],
		55 : [565, 23],
		56 : [495, 9],
		57 : [532, 43],
		58 : [522, 92],
		59 : [653, 16],
		60 : [70, 16],
		61 : [395, 24],
		62 : [224, 88],
		63 : [96, 130],
		64 : [13, 48],
		65 : [110, 35],
		66 : [130, 71],
		67 : [155, 11],
		68 : [230, 14],
		69 : [316, 13],
		70 : [261, 30],
		71 : [38, 65],
		72 : [22, 16],
		73 : [482, 33],
		74 : [671, 49],
		75 : [12, 128],
		76 : [651, 59],
		77 : [527, 176],
		78 : [100, 183],
		79 : [163, 186]
	},
	X = {
		0 : [0, 89],
		1 : [0, 89],
		2 : [675, 89],
		3 : [675, 89],
		4 : [193,
			106],
		5 : [493, 106],
		6 : [181, 140],
		7 : [215, 123],
		8 : [251, 108],
		9 : [289, 97],
		10 : [329, 92],
		11 : [371, 98],
		12 : [411, 105],
		13 : [448, 123],
		14 : [485, 143],
		19 : [32, 32],
		20 : [179, 136],
		21 : [212, 115],
		22 : [249, 100],
		23 : [288, 91],
		24 : [329, 87],
		25 : [369, 91],
		26 : [407, 100],
		27 : [445, 115],
		28 : [478, 136],
		29 : [675, 0],
		30 : [675, 0],
		32 : [0, 0],
		33 : [0, 0],
		34 : [0, 0],
		35 : [448, 123],
		36 : [410, 53],
		37 : [399, 36],
		38 : [181, 140],
		39 : [161, 71],
		40 : [156, 50],
		41 : [485, 143],
		42 : [475, 58],
		43 : [477, 35],
		44 : [270, 20],
		45 : [184, 141],
		46 : [218, 121],
		47 : [255, 106],
		48 : [294, 96],
		49 : [334, 93],
		50 : [374, 96],
		51 : [413,
			106],
		52 : [450, 121],
		53 : [484, 141],
		54 : [327, 17],
		56 : [32, 32],
		58 : [285, 40],
		59 : [33, 88],
		60 : [317, 36],
		61 : [13, 100],
		63 : [325, 165],
		64 : [317, 147],
		65 : [301, 134],
		66 : [297, 127],
		67 : [295, 132],
		68 : [297, 131],
		69 : [299, 138],
		70 : [295, 138],
		71 : [32, 32],
		72 : [32, 32],
		74 : [380, 35],
		75 : [638, 82],
		76 : [348, 29],
		77 : [656, 95]
	},
	Qd = {
		0 : [176, 142],
		1 : [206, 125],
		2 : [241, 108],
		3 : [273, 97],
		4 : [312, 90],
		5 : [348, 91],
		6 : [386, 98],
		7 : [420, 107],
		8 : [456, 125],
		9 : [486, 142],
		10 : [176, 121],
		11 : [241, 94],
		12 : [312, 87],
		13 : [385, 94],
		14 : [452, 121],
		15 : [197, 135],
		16 : [264, 105],
		17 : [337, 96],
		18 : [411,
			105],
		19 : [478, 136],
		20 : [270, 20],
		21 : [181, 127],
		22 : [246, 99],
		23 : [318, 93],
		24 : [390, 99],
		25 : [458, 127]
	},
	Rd = {
		0 : [178, 143],
		1 : [207, 126],
		2 : [207, 158],
		3 : [241, 107],
		4 : [272, 98],
		5 : [268, 128],
		6 : [312, 91],
		7 : [346, 92],
		8 : [334, 119],
		9 : [386, 98],
		10 : [421, 108],
		11 : [401, 129],
		12 : [457, 126],
		13 : [486, 142],
		14 : [464, 159],
		19 : [176, 122],
		20 : [241, 94],
		21 : [312, 87],
		22 : [385, 94],
		23 : [452, 122],
		24 : [195, 134],
		25 : [263, 105],
		26 : [337, 95],
		27 : [409, 105],
		28 : [478, 135],
		29 : [270, 20],
		30 : [181, 127],
		31 : [246, 99],
		32 : [318, 93],
		33 : [390, 99],
		34 : [458, 127]
	};
	var Y = function (a, b, c) {
		this.d = 0;
		this.i = c || Ha(90);
		this.a = a;
		this.g = b || 6E3;
		this.s = 360 / (this.g / 50)
	};
	q(Y, F);
	Y.prototype.start = function () {
		this.o = Q(50, p(this.k, this), !1);
		return this
	};
	Y.prototype.k = function () {
		Nb(this.a, "opacity", Math.abs(Math.sin(this.d * this.s * rd + this.i)));
		this.d++
	};
	Y.prototype.B = function () {
		R(this.o);
		Y.G.B.call(this)
	};
	var Sd = function () {
		this.w = [];
		this.i = 0;
		this.k = this.d = !1
	};
	q(Sd, F);
	Sd.prototype.B = function () {
		this.w = [];
		this.i = 0;
		this.k = this.d = !1;
		Sd.G.B.call(this)
	};
	var Td = function (a, b) {
		Sd.call(this);
		this.w = a;
		this.a = null;
		this.v = b || document.body;
		this.s = !1;
		this.g = this.o = null;
		this.A = this.i
	};
	q(Td, Sd);
	var Ud = [{
			Oa : ".mp3",
			type : "audio/mpeg"
		}, {
			Oa : ".ogg",
			type : "audio/ogg"
		}
	];
	Td.prototype.B = function () {
		Vd(this);
		this.s = !1;
		this.g = this.o = null;
		this.a && this.v.removeChild(this.a);
		Td.G.B.call(this)
	};
	Td.prototype.C = function () {
		this.k = !0;
		this.o && this.o();
		this.s && !this.d && Wd(this, this.g)
	};
	Td.prototype.D = function () {
		this.d = !1;
		this.g && this.g()
	};
	Td.prototype.load = function (a, b, c) {
		this.s = a;
		this.o = b || null;
		this.g = c || null;
		if (this.a && this.A == this.i)
			this.k && (Vd(this), this.a.currentTime = 0, this.C());
		else {
			this.a && this.v.removeChild(this.a);
			this.k = !1;
			this.a = document.createElement("audio");
			this.a.setAttribute("controls", "false");
			this.a.setAttribute("preload", "auto");
			M(this.a, !1);
			uc(this.a, "canplay", this.C, !1, this);
			uc(this.a, "ended", this.D, !1, this);
			a = this.w[this.i];
			for (b = 0; c = Ud[b++]; ) {
				var d = document.createElement("source");
				d.setAttribute("src", a + c.Oa);
				d.setAttribute("type", c.type);
				this.a.appendChild(d)
			}
			this.v.appendChild(this.a);
			this.A = this.i
		}
	};
	var Wd = function (a, b) {
		a.k && !a.d && (a.g = b || null, a.a.play(), a.d = !0)
	},
	Vd = function (a) {
		a.d && (a.a.pause(), a.d = !1)
	};
	Td.prototype.currentTime = function () {
		return this.d ? this.a.currentTime : 0
	};
	var Xd = null,
	Yd = function () {
		Wd(Xd, Yd)
	};
	var Z = function (a) {
		this.k = new K(this);
		this.a = wd;
		this.d = bd;
		this.g = Pd;
		this.s = [];
		this.v = [];
		this.fa = !0;
		this.C = a;
		Nc.className = "qixi-sc";
		this.Z = V(this.a, this.d.qb, this.g);
		for (a = 0; a < Zd.length; a++) {
			var b = V(this.a, Zd[a], this.g),
			b = (new Y(b)).start();
			this.v.push(b)
		}
		this.J = V(this.a, this.d.nb, this.g);
		this.o = V(this.a, this.d.mb, this.g);
		this.A = new W(this.a, this.d.pb, this.d.ob, this.g, 10, p(this.P, this));
		Vb(this.A.a, "qixi-swing")
	};
	q(Z, F);
	var $d = [5, 6, 7],
	ae = ["qixi-l1", "qixi-l2", "qixi-l3"];
	Z.prototype.update = function (a) {
		I(this.w);
		this.w = V(this.a, $d[a], this.g);
		Nc.className = ae[a]
	};
	var be = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
	Zd = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
	ce = function (a) {
		I(a.Z);
		for (var b = 0; b < a.v.length; b++)
			I(a.v[b].a), G(a.v[b]);
		a.v = [];
		I(a.J);
		I(a.o);
		G(a.A)
	};
	Z.prototype.I = function () {
		var a = google.doodle;
		if (a && a.url) {
			var b = a.url;
			if (google.nav && google.nav.go) {
				a = b;
				if (0 == b.indexOf("/search")) {
					a = new wb(window.location);
					a.ma = "/search";
					for (var b = (b instanceof wb ? b.K() : new wb(b, void 0)).X, c = b.U(), d = 0; d < c.length; d++) {
						var e = c[d],
						f = a,
						g = e,
						e = e ? b.O(e) : [];
						f.X.set(g, 0 < e.length ? String(e[0]) : void 0)
					}
					a = a.toString()
				}
				google.nav.go(a)
			} else
				window.parent ? window.parent.location.replace(b) : window.location.replace(b)
		}
	};
	Z.prototype.R = function () {
		M(this.ga, !1);
		M(this.i, !1);
		O(S, new J("n"))
	};
	Z.prototype.ea = function () {
		this.fa ? (de(this), this.fa = !1) : (ee(this), this.fa = !0)
	};
	var ee = function (a) {
		a.Q && (zd(a.Q, a.a, a.d.La), Yd())
	},
	de = function (a) {
		a.Q && (zd(a.Q, a.a, a.d.Lb), Vd(Xd))
	};
	Z.prototype.start = function () {
		ce(this);
		this.w = V(this.a, this.d.Xa, this.g);
		for (var a = 0; a < be.length; a++) {
			var b = V(this.a, be[a], this.g),
			b = (new Y(b)).start();
			this.s.push(b)
		}
		this.F = V(this.a, this.d.Va, this.g, 1);
		this.H = V(this.a, this.d.Wa, this.g, 11);
		this.Aa = V(this.a, this.d.ab, this.g, 10);
		this.za = V(this.a, this.d.bb, this.g, 10);
		this.Q = V(this.a, this.d.La, this.g, 21);
		this.k.listen(this.Q, "click", this.ea);
		M(this.Q, !1);
		this.C || (this.D = V(this.a, this.d.Za, this.g, 21), this.k.listen(this.D, "click", this.I));
		this.ga = V(this.a,
				this.d.Ya, this.g, 21);
		this.k.listen(this.ga, "click", this.R);
		M(this.ga, !1);
		this.i = V(this.a, this.d.$a, this.g, 21);
		Vb(this.i, "qixi-time");
		M(this.i, !1)
	};
	Z.prototype.P = function () {
		this.A.enabled = !1;
		O(S, new J("o"))
	};
	Z.prototype.B = function () {
		ce(this);
		G(this.k);
		this.k = null;
		for (var a = 0; a < this.s.length; a++)
			I(this.s[a].a), Tb(this.s[a]);
		this.s = [];
		I(this.w);
		I(this.F);
		I(this.H);
		I(this.Aa);
		I(this.za);
		I(this.Q);
		this.C || I(this.D);
		I(this.ga);
		I(this.i);
		Z.G.B.call(this)
	};
	var he = function (a, b) {
		this.d = this.a = null;
		this.k = new K(this);
		this.w = new H;
		this.I = a;
		this.A = b;
		this.H = T;
		this.D = dd;
		this.F = X;
		this.s = this.o = !1;
		this.k.listen(S, "d", this.C);
		this.k.listen(S, "j", this.J);
		this.a = new fe;
		this.d = new ge;
		this.v = V(this.H, this.D.Ma, this.F);
		M(this.v, !1)
	};
	q(he, F);
	var le = function (a) {
		a.i = 0;
		ie(a.a);
		ie(a.d);
		a.g = Q(a.I, function () {
				ke(a)
			}, !0)
	},
	me = 32605 / 116,
	ke = function (a) {
		0 == a.i && (a.i = 1, ne(a), oe(a.a), oe(a.d), a.g = Q(100, function () {
					pe(a)
				}, !1))
	},
	pe = function (a) {
		if (qe(a.a) || re(a.d))
			ne(a), a.g = Q(100, function () {
					var b = a.a;
					b.d = 179 + 4 * b.s;
					b.k = se(b);
					b.L(b.d - b.i.width, b.k - b.i.height);
					b.s++;
					b = a.d;
					b.d = 521 - 4 * b.s;
					b.k = se(b);
					b.L(b.d, b.k - b.i.height);
					b.s++;
					0 > a.d.d - a.a.d && (a.i = 3, ne(a), te(a.a), te(a.d), L(a.a.a), L(a.d.a), a.A ? (M(a.v, !0), O(S, new J("q"))) : O(S, new Jd));
					O(S, new Gd(!0, a.a.d));
					O(S,
						new Gd(!1, a.d.d))
				}, !1)
	},
	ne = function (a) {
		R(a.g);
		a.g = null
	},
	ue = [63, 64, 65, 66, 67, 68, 69, 70];
	he.prototype.C = function (a) {
		a.d ? this.o = !0 : this.s = !0;
		if (2 != this.i) {
			ve(this.a);
			ve(this.d);
			this.i = 2;
			ne(this);
			var b = this;
			this.g = Q(100, function () {
					var a = !0;
					b.o && (we(b.a), a = xe(b.a) && a);
					b.s && (we(b.d), a = xe(b.d) && a);
					a && (ne(b), O(S, new Md(b.o, b.s)))
				}, !1)
		}
	};
	he.prototype.J = function () {
		ye(this.a);
		ye(this.d)
	};
	he.prototype.ra = function () {
		var a = L(this.a.a);
		a.x -= 3;
		a.y -= 1;
		this.a.L(a.x, a.y);
		var b = L(this.d.a);
		b.x += 3;
		b.y -= 1;
		this.d.L(b.x, b.y);
		var c = this.a.i,
		d = this.d.i;
		Bd(a.x + c.width, a.y + c.height) && Bd(b.x, b.y + d.height) && O(S, new J("i"))
	};
	he.prototype.B = function () {
		G(this.a);
		G(this.d);
		ne(this);
		I(this.v);
		G(this.k);
		this.k = null;
		G(this.w);
		this.w = null
	};
	var ze = function (a, b, c, d, e, f, g, k, m, u, y, A) {
		this.F = b;
		this.g = a;
		this.Hb = c;
		this.za = d;
		this.Z = e;
		this.H = f;
		this.J = g;
		this.A = k;
		this.Aa = m;
		this.R = u;
		this.ea = y;
		this.I = A;
		this.s = 0;
		this.o = [];
		this.C = this.v = 0;
		this.k = 170;
		for (a = 0; a < ue.length; a++)
			b = V(this.g, ue[a], this.F, 20), M(b, !1), this.o.push(b)
	};
	q(ze, F);
	var ie = function (a) {
		a.a = V(a.g, a.Hb, a.F, 1);
		a.i = Rc(a.a);
		a.P = V(a.g, a.za, a.F, 1)
	},
	oe = function (a) {
		if (0 != a.w) {
			a.w = 0;
			ve(a);
			M(a.P, !1);
			zd(a.a, a.g, a.Z);
			U(a.a, a.H.width, a.H.height);
			var b = Xc(a.g, a.Z);
			a.D = Q(200, p(Cd, null, a.a, 6, a.H.width, b.x, b.y), !1)
		}
	},
	we = function (a) {
		if (1 != a.w) {
			a.w = 1;
			ve(a);
			zd(a.a, a.g, a.J);
			U(a.a, a.A.width, a.A.height);
			var b = Xc(a.g, a.J);
			a.D = Q(200, p(Cd, null, a.a, 4, a.A.width, b.x, b.y), !1)
		}
	},
	te = function (a) {
		ve(a);
		zd(a.a, a.g, a.Aa);
		U(a.a, a.R.width, a.R.height)
	},
	ye = function (a) {
		zd(a.a, a.g, a.ea);
		U(a.a, a.I.width,
			a.I.height)
	},
	xe = function (a) {
		a.C += 1;
		var b = L(a.a).y + a.C;
		160 <= b && (b = 160);
		var c = Rc(a.a);
		if (b >= 180 - c.height) {
			for (var c = ue.length, d = 0; d < c; d++)
				M(a.o[d], !1);
			if (!(a.v >= c)) {
				var c = L(a.a),
				d = a.o[a.v],
				e = Rc(d);
				d.style.left = Math.round(c.x - (e.width - a.i.width) / 2) + "px";
				M(d, !0)
			}
			a.v++
		}
		a.a.style.top = Math.floor(b) + "px";
		return 160 == b && a.v > ue.length
	};
	ze.prototype.L = function (a, b) {
		Kc(this.a, a, b)
	};
	var se = function (a) {
		a = 4 * a.s - 171;
		return 170 - (Math.sqrt(me * me - a * a) - me + 58)
	},
	ve = function (a) {
		R(a.D);
		a.D = null
	};
	ze.prototype.B = function () {
		ve(this);
		I(this.a);
		I(this.P);
		for (var a = 0; a < this.o.length; a++)
			I(this.o[a]);
		ze.G.B.call(this)
	};
	var fe = function () {
		ze.call(this, T, X, 61, 59, 62, new r(38, 67), 57, new r(34, 67), 60, new r(36, 69), 58, new r(41, 69));
		this.d = 44
	};
	q(fe, ze);
	var qe = function (a) {
		a.d += 4;
		179 <= a.d && (a.d = 179);
		a.L(a.d - a.i.width, a.k - a.i.height);
		return 179 == a.d
	},
	ge = function () {
		ze.call(this, T, X, 77, 75, 78, new r(37, 74), 73, new r(36, 74), 76, new r(37, 76), 74, new r(42, 75));
		this.d = 656
	};
	q(ge, ze);
	var re = function (a) {
		a.d -= 4;
		521 >= a.d && (a.d = 521);
		a.L(a.d, a.k - a.i.height);
		return 521 == a.d
	};
	var Ae = {
		0 : {
			Ja : 18E3,
			Ia : 9,
			Ha : "red yellow blue red blue yellow red blue yellow".split(" "),
			Ga : 5,
			speed : 1
		},
		1 : {
			Ja : 17E3,
			Ia : 5,
			Ha : ["red", "blue", "yellow", "red", "blue"],
			Ga : 7,
			speed : 1.1
		},
		2 : {
			Ja : 28E3,
			Ia : 5,
			Ha : ["red", "blue", "yellow", "red", "blue"],
			Ga : 9,
			speed : 1.2
		}
	};
	var De = function () {
		this.o = 0;
		this.k = T;
		this.d = dd;
		this.i = X;
		this.s = null;
		this.a = [];
		this.w = new K(this);
		Be(this);
		Ce(this);
		for (var a = 0; a < this.g.length; a++)
			this.w.listen(this.g[a], "click", this.A)
	};
	q(De, F);
	var Ee = [[40, 39, 38], [37, 36, 35], [43, 42, 41]],
	Be = function (a) {
		a.g = [V(a.k, a.d.jb, a.i, 100), V(a.k, a.d.kb, a.i, 100), V(a.k, a.d.lb, a.i, 100)];
		a.v = new W(a.k, a.d.eb, a.d.cb, a.i, 101, function () {
				0 < a.o && (a.o--, Ce(a), 0 == a.o && Od(a.v))
			});
		Od(a.v);
		a.D = new W(a.k, a.d.gb, a.d.fb, a.i, 101, function () {
				a.A()
			});
		a.C = new W(a.k, a.d.ib, a.d.hb, a.i, 101, function () {
				a.M();
				O(S, new J("k"))
			});
		for (var b = 0; b < Ee.length; b++) {
			for (var c = Ee[b], d = [], e = 0; e < c.length; e++) {
				var f = V(a.k, c[e], a.i, 101);
				M(f, !1);
				d.push(f)
			}
			a.a.push(d)
		}
	},
	Fe = function (a) {
		for (var b =
				0; b < a.g.length; b++)
			b == a.o ? M(a.g[b], !0) : M(a.g[b], !1)
	},
	Ge = function (a) {
		for (var b = 0; b < a.a.length; b++)
			for (var c = a.a[b], d = 0; d < c.length; d++)
				M(c[d], !1)
	},
	Ce = function (a) {
		Fe(a);
		R(a.s);
		if (1 == a.o) {
			for (var b = 0; b < a.a.length; b++)
				M(a.a[b][0], !0);
			a.s = Q(1E3, function (b) {
					if (6 == b)
						R(a.s);
					else {
						var d = b % 2 + 1;
						b = Math.floor(b / 2);
						M(a.a[b][d], !0);
						M(a.a[b][d - 1], !1)
					}
				}, !1)
		} else
			Ge(a)
	};
	De.prototype.A = function () {
		if (2 == this.o)
			this.M(), O(S, new J("k"));
		else {
			this.o++;
			var a = this.v;
			M(a.a, !0);
			a.enabled = !0;
			Ce(this)
		}
	};
	De.prototype.B = function () {
		R(this.s);
		for (var a = 0; a < this.g.length; a++)
			I(this.g[a]);
		for (a = 0; a < this.a.length; a++)
			for (var b = 0; b < this.a[a].length; b++)
				I(this.a[a][b]);
		G(this.v);
		G(this.D);
		G(this.C);
		G(this.w);
		this.w = null;
		De.G.B.call(this)
	};
	var He = function () {
		this.o = new H;
		this.a = {};
		this.i = this.d = this.k = this.g = null
	};
	q(He, F);
	var Ie = function (a, b) {
		if (0 == b) {
			var c = T,
			d = V(c, 44, X, 100);
			M(d, !1);
			a.a[0] = d;
			a.g = V(c, 56, X, 100);
			M(a.g, !1);
			a.k = V(c, 72, X, 100);
			M(a.k, !1);
			a.d = V(c, 19, X, 100);
			M(a.d, !1);
			a.i = V(c, 71, X, 100);
			M(a.i, !1)
		} else
			1 == b ? (c = V(xd, 20, Qd, 100), M(c, !1), a.a[1] = c) : (c = V(yd, 29, Rd, 100), M(c, !1), a.a[2] = c)
	},
	Je = function (a) {
		for (var b in a.a)
			M(a.a[Number(b)], !1);
		M(a.g, !1);
		M(a.k, !1);
		M(a.d, !1);
		M(a.i, !1)
	};
	He.prototype.B = function () {
		for (var a in this.a)
			I(this.a[Number(a)]);
		I(this.g);
		I(this.k);
		I(this.d);
		I(this.i);
		G(this.o);
		this.o = null;
		He.G.B.call(this)
	};
	var Ke = function (a, b, c) {
		N.call(this);
		this.target = a;
		this.g = b || a;
		this.k = c || new Hc(NaN, NaN, NaN, NaN);
		this.d = Xb(a);
		this.a = new K(this);
		Sb(this, ka(G, this.a));
		uc(this.g, ["touchstart", "mousedown"], this.Ta, !1, this)
	};
	q(Ke, N);
	var Le = x || B && D("1.9.3");
	h = Ke.prototype;
	h.clientX = 0;
	h.clientY = 0;
	h.Pa = 0;
	h.Qa = 0;
	h.Ra = 0;
	h.Sa = 0;
	h.$ = 0;
	h.aa = 0;
	h.T = !1;
	h.Ib = 0;
	h.B = function () {
		Ke.G.B.call(this);
		yc(this.g, ["touchstart", "mousedown"], this.Ta, !1, this);
		Gc(this.a);
		Le && this.d.releaseCapture();
		this.g = this.target = null
	};
	h.Ta = function (a) {
		var b = "mousedown" == a.type;
		if (this.T || b && (!(ec ? 0 == a.ia.button : "click" == a.type || a.ia.button & ic[0]) || C && ab && a.Na))
			O(this, "earlycancel");
		else if (Me(a), O(this, new Ne("start", this, a.clientX, a.clientY))) {
			this.T = !0;
			a.ha();
			var b = this.d,
			c = b.documentElement,
			d = !Le;
			this.a.listen(b, ["touchmove", "mousemove"], this.o, d);
			this.a.listen(b, ["touchend", "mouseup"], this.qa, d);
			Le ? (c.setCapture(!1), this.a.listen(c, "losecapture", this.qa)) : this.a.listen(b ? b.parentWindow || b.defaultView : window, "blur", this.qa);
			this.v && this.a.listen(this.v, "scroll", this.s, d);
			this.clientX = this.Ra = a.clientX;
			this.clientY = this.Sa = a.clientY;
			this.Pa = a.Ea;
			this.Qa = a.Fa;
			this.$ = this.target.offsetLeft;
			this.aa = this.target.offsetTop;
			this.i = cc(Yb(this.d));
			this.Ib = la()
		}
	};
	h.qa = function (a) {
		Gc(this.a);
		Le && this.d.releaseCapture();
		if (this.T) {
			Me(a);
			this.T = !1;
			var b = Oe(this, this.$),
			c = Pe(this, this.aa);
			O(this, new Ne("end", this, a.clientX, a.clientY, 0, b, c))
		} else
			O(this, "earlycancel")
	};
	var Me = function (a) {
		var b = a.type;
		"touchstart" == b || "touchmove" == b ? a.init(a.la().targetTouches[0], a.a) : "touchend" != b && "touchcancel" != b || a.init(a.la().changedTouches[0], a.a)
	};
	Ke.prototype.o = function (a) {
		Me(a);
		var b = 1 * (a.clientX - this.clientX),
		c = a.clientY - this.clientY;
		this.clientX = a.clientX;
		this.clientY = a.clientY;
		this.Pa = a.Ea;
		this.Qa = a.Fa;
		if (!this.T) {
			var d = this.Ra - this.clientX,
			e = this.Sa - this.clientY;
			if (0 < d * d + e * e)
				if (O(this, new Ne("start", this, a.clientX, a.clientY)))
					this.T = !0;
				else {
					this.Ca() || this.qa(a);
					return
				}
		}
		c = Qe(this, b, c);
		b = c.x;
		c = c.y;
		this.T && O(this, new Ne("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && (Re(this, a, b, c), a.ha())
	};
	var Qe = function (a, b, c) {
		var d = cc(Yb(a.d));
		b += d.x - a.i.x;
		c += d.y - a.i.y;
		a.i = d;
		a.$ += b;
		a.aa += c;
		b = Oe(a, a.$);
		a = Pe(a, a.aa);
		return new v(b, a)
	};
	Ke.prototype.s = function (a) {
		var b = Qe(this, 0, 0);
		a.clientX = this.clientX;
		a.clientY = this.clientY;
		Re(this, a, b.x, b.y)
	};
	var Re = function (a, b, c, d) {
		a.target.style.left = c + "px";
		a.target.style.top = d + "px";
		O(a, new Ne("drag", a, b.clientX, b.clientY, 0, c, d))
	},
	Oe = function (a, b) {
		var c = a.k,
		d = isNaN(c.left) ? null : c.left,
		c = isNaN(c.width) ? 0 : c.width;
		return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
	},
	Pe = function (a, b) {
		var c = a.k,
		d = isNaN(c.top) ? null : c.top,
		c = isNaN(c.height) ? 0 : c.height;
		return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
	},
	Ne = function (a, b, c, d, e, f, g) {
		J.call(this, a);
		this.clientX = c;
		this.clientY =
			d;
		this.left = void 0 !== f ? f : b.$;
		this.top = void 0 !== g ? g : b.aa
	};
	q(Ne, J);
	var Se = function (a, b, c, d) {
		this.x = b;
		this.y = c;
		this.o = 2 * a;
		this.i = d;
		this.w = Math.sin(this.i * rd);
		this.S = Math.cos(this.i * rd);
		this.g = !1
	};
	Se.prototype.s = function () {
		return new v(this.x, this.y)
	};
	Se.prototype.k = function (a) {
		this.a = a;
		this.a.rotate(this.i)
	};
	Se.prototype.v = function () {
		if (this.a && !this.g) {
			var a = this.x + this.o * this.S,
			b = this.y + this.o * this.w;
			!this.d && Bd(a, b) && (this.a.M(), this.g = this.a.Ba = !0);
			var c = !1;
			this.d && (this.d.x >= this.x && this.d.x <= a || this.d.x <= this.x && this.d.x >= a) && (a = this.d.x, b = this.d.y, c = !0);
			this.a.L(a, b);
			this.x = a;
			this.y = b;
			c && (O(S, new Kd(this.a.id)), this.g = !0)
		}
	};
	var $ = function (a, b, c, d, e) {
		this.v = new H;
		this.id = a;
		this.i = b;
		this.A = this.Ba = !1;
		this.g = null;
		this.a = d;
		this.o = new K(this);
		this.k = null;
		this.C = c;
		this.s = null;
		this.R = !!e;
		Te[this.i] ? (this.s = yd, this.g = V(this.s, Te[this.i], void 0, 986), U(this.g, 33, 28)) : (this.s = T, this.g = V(this.s, Ue[this.i], void 0, 986), U(this.g, 42, 35));
		this.d = this.v.d("DIV", {
				style : "position:absolute"
			});
		U(this.d, 70, 70);
		this.d.appendChild(this.g);
		Nc.appendChild(this.d);
		this.w = Rc(this.g);
		this.C && (this.k = new Ke(this.d), this.o.listen(this.k, "start", this.H),
			this.o.listen(this.k, "end", this.P));
		Ue[this.i] ? (a = Xc(this.s, Ue[this.i]), b = 42) : (a = Xc(this.s, Te[this.i]), b = 33);
		this.I = Q(250, p(Cd, null, this.g, 4, b, a.x, a.y), !1);
		this.o.listen(S, "b", this.F, !0);
		this.o.listen(S, "m", this.J);
		e || Ve(this)
	};
	q($, F);
	var Ue = {
		red : 17,
		blue : 15,
		yellow : 18,
		multi : 16
	},
	Te = {
		c_red : 17,
		c_blue : 15,
		c_yellow : 18
	};
	$.prototype.H = function () {
		this.a && (G(this.a), this.a = null)
	};
	$.prototype.P = function () {
		var a = Oc(this.d);
		O(S, new Dd(a.x + this.w.width / 2, a.y + this.w.height / 2, this.id, this.i))
	};
	var Ve = function (a) {
		a.a || (a.a = new Ja);
		Kc(a.d, a.a.s());
		a.a.k(a);
		a.D = Q(70, function () {
				a.a && a.a.v()
			}, !1)
	};
	$.prototype.F = function (a) {
		this.id == a.d && (G(this.k), this.A = !0, this.M())
	};
	$.prototype.J = function (a) {
		this.id == a.d && We(this)
	};
	var We = function (a) {
		var b = Oc(a.d);
		if (b) {
			var c = Oc(Nc);
			c.x = b.x - c.x;
			c.y = b.y - c.y;
			b = c
		} else
			b = void 0;
		a.a = new Se(5, b.x, b.y, 0);
		a.a.k(a);
		a.R && Ve(a)
	};
	$.prototype.ra = function (a, b) {
		this.rotate(a);
		var c = L(this.d);
		this.L(c.x + b, c.y - 1)
	};
	$.prototype.L = function (a, b) {
		Kc(this.d, a, b)
	};
	$.prototype.rotate = function (a) {
		var b = this.g,
		c;
		c = (a + 360) % 360;
		a = 0;
		var d = c;
		270 < c ? d -= 360 : 90 < c && (a = 180, d = 180 - c);
		c = "rotateY(" + a + "deg) rotateZ(" + d + "deg)";
		for (var d = 0, e; e = Pb[d++]; )
			b.style[e + "Transform"] = c;
		x && (b.style.filter = 180 == a ? "fliph" : "")
	};
	$.prototype.B = function () {
		R(this.D);
		R(this.I);
		G(this.a);
		this.g.style.display = "none";
		I(this.g);
		I(this.d);
		G(this.v);
		this.v = null;
		G(this.o);
		this.o = null;
		G(this.k);
		this.k = null;
		$.G.B.call(this)
	};
	var Ye = function (a, b, c, d) {
		this.w = a;
		this.a = [];
		this.s = new H;
		this.i = [];
		this.A = c;
		this.k = [];
		this.d = [];
		Xe(this);
		for (var e in pd)
			this.i.push(pd[e]);
		if (2 == d)
			for (e in qd)
				this.i.push(qd[e]);
		this.g = new K(this);
		this.g.listen(S, "g", this.Cb);
		this.g.listen(S, "l", this.Db);
		this.g.listen(S, "s", this.Eb);
		c && (this.g.listen(S, "e", this.Fb), this.g.listen(S, "r", this.Gb))
	};
	q(Ye, F);
	h = Ye.prototype;
	h.Eb = function (a) {
		this.i = a.d
	};
	h.Db = function () {
		var a = new v(300, 50),
		b = 180 * Math.atan2(50, 300) / Math.PI,
		b = new Se(4, 0, 0, (b + 360) % 360);
		b.d = a;
		Ze(this, "multi", !1, b);
		b = 180 * Math.atan2(50, -300) / Math.PI;
		b = (b + 360) % 360;
		a = new v(360, 50);
		b = new Se(4, 660, 0, b);
		b.d = a;
		Ze(this, "multi", !1, b)
	};
	h.Fb = function (a) {
		for (var b = 0; b < this.d.length; b++) {
			var c = this.d[b];
			c.g && c.a.id == a.id && c.clear(!1)
		}
	};
	h.Gb = function (a) {
		Aa(this.k, a.d);
		for (var b = 0; b < this.d.length; b++) {
			var c = this.d[b];
			c.g && c.k == a.d && c.clear(!0)
		}
	};
	h.Cb = function (a) {
		Ze(this, a.d, !1, new Se(2, a.x, a.y, a.g))
	};
	var Ze = function (a, b, c, d, e) {
		b = new $(a.a.length, b, c, d, e);
		Aa(a.a, b);
		return b
	};
	Ye.prototype.v = 4;
	var Xe = function (a) {
		a.o = Q(500, function () {
				for (var b = 0, c = 0; c < a.a.length; c++) {
					var d = a.a[c];
					d.Ba ? d.M() : d && "function" == typeof d.Ca && d.Ca() || d.A || b++
				}
				b >= a.w || (a.A && Ye.prototype.v == a.a.length ? (0 <= ya(a.k, 0) || (b = Ze(a, "red", !0, void 0, !0), b = new $e(b, 4, 0), a.d.push(b)), 0 <= ya(a.k, 8) || (b = Ze(a, "yellow", !0, void 0, !0), b = new $e(b, 5, 8), a.d.push(b))) : Ze(a, a.i[Ha(a.i.length)], !0))
			}, !1)
	},
	af = function (a) {
		R(a.o);
		for (var b = 0; b < a.a.length; b++)
			a.a[b].M()
	};
	Ye.prototype.B = function () {
		af(this);
		for (var a = 0; a < this.d.length; a++)
			this.d[a].clear(!1);
		G(this.g);
		this.o = this.g = null;
		this.a = [];
		G(this.s);
		this.s = null;
		Ye.G.B.call(this)
	};
	var $e = function (a, b, c) {
		this.d = V(T, b, X, 10);
		this.a = a;
		a = L(this.d);
		a = new v(a.x - this.a.w.width / 2, a.y - 45);
		this.a.L(a.x, a.y);
		this.i = (new Y(this.d, 2E3, 0)).start();
		this.k = c;
		this.g = !0
	};
	$e.prototype.clear = function (a) {
		G(this.i);
		I(this.d);
		a && We(this.a);
		this.g = !1
	};
	var bf = function (a, b) {
		google && google.doodle && (b && (google.doodle.cpDestroy = b), google.doodle.cpInit = function () {
			b && b();
			a()
		})
	},
	cf = function (a, b, c) {
		if (google) {
			var d = function () {
				var a = google.msg && google.msg.unlisten;
				a && (a(67, d), c && a(94, c));
				b();
				return !0
			},
			e = function () {
				var a = document.getElementById("hplogo");
				a && "hidden" != a.style.visibility && (a = google.msg && google.msg.listen, google.psy && google.psy.q && a && (a(67, d), c && a(94, c)))
			};
			e();
			google.doodle && google.doodle.jesr || (ma(), google.raas && google.raas("doodle", {
					init : function () {
						e();
						google.doodle.jesrd && (a(), google.doodle.jesrd = !1)
					},
					dispose : function () {
						d();
						google.doodle.jesrd = !0
					}
				}))
		}
	};
	var ff = function (a, b, c) {
		this.s = a;
		this.w = b;
		this.C = c;
		this.d = this.a = this.k = !1;
		this.g = Ob();
		this.A = Rb("hidden");
		if (this.v = (this.o = Rb("visibilityState")) ? this.o.replace(/state$/i, "change").toLowerCase() : null) {
			a = new K;
			Sb(this, ka(G, a));
			var d = this;
			a.listen(document, this.v, function () {
				var a = document[d.o];
				d.k = document[d.A] || "hidden" == a;
				d.k || (d.g = Ob(), d.a = !1);
				df(d)
			})
		}
		ef(this)
	};
	q(ff, F);
	ff.prototype.B = function () {
		window.clearTimeout(this.i);
		ff.G.B.call(this)
	};
	var df = function (a) {
		var b = a.k || a.a;
		a.d && !b ? (a.d = !1, a.C(), ef(a)) : !a.d && b && (a.d = !0, a.w())
	},
	ef = function (a) {
		a.i && window.clearTimeout(a.i);
		var b = Math.max(100, a.s - (Ob() - a.g));
		a.i = window.setTimeout(function () {
				a.i = null;
				a.a = Ob() - a.g >= a.s;
				a.a || ef(a);
				df(a)
			}, b)
	};
	var mf = function (a, b, c) {
		N.call(this);
		this.id = a;
		this.D = b;
		this.d = c;
		this.o = 0;
		this.a = [];
		this.C = new K(this);
		this.I = new H;
		this.s = [];
		this.C.listen(S, "p", this.J);
		0 == c ? (this.i = T, this.g = X) : 1 == c ? (this.i = xd, this.g = Qd) : (this.i = yd, this.g = Rd);
		this.target = V(this.i, gf[this.d][this.id], this.g, 5);
		this.k = V(this.i, hf[this.d][this.id], this.g, 5);
		M(this.k, !1);
		this.F = Rc(this.target);
		a = this.d + 1;
		for (b = 0; b < a; b++) {
			c = V(this.i, jf[this.d][this.id * a + b], this.g, 6);
			Sc(c, 0);
			var d = this.D;
			2 == b && (d = "c_" + this.D);
			Aa(this.a, new kf(c, d))
		}
		0 <
		this.d && (this.w = V(this.i, lf[this.d][this.id], this.g, 7), M(this.w, !1))
	};
	q(mf, N);
	var gf = {
		0 : [20, 21, 22, 23, 24, 25, 26, 27, 28],
		1 : [10, 11, 12, 13, 14],
		2 : [19, 20, 21, 22, 23]
	},
	hf = {
		0 : [45, 46, 47, 48, 49, 50, 51, 52, 53],
		1 : [21, 22, 23, 24, 25],
		2 : [30, 31, 32, 33, 34]
	},
	jf = {
		0 : [6, 7, 8, 9, 10, 11, 12, 13, 14],
		1 : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		2 : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
	},
	lf = {
		1 : [15, 16, 17, 18, 19],
		2 : [24, 25, 26, 27, 28]
	};
	mf.prototype.J = function (a) {
		if (this.o != this.d + 1) {
			var b = L(this.target),
			c = 0.6 * this.F.width + b.x;
			a.left > 0.4 * this.F.width + b.x && a.left < c && O(S, new Hd(a.d))
		}
	};
	var nf = function (a) {
		M(a.target, !1);
		M(a.k, !0)
	},
	rf = function (a, b) {
		a.o++;
		O(S, new Ed(b, 0, 0, 0, a));
		R(a.v);
		of(a);
		a.o == a.d + 1 ? (nf(a), 0 < a.d && (a.w.style.display = "block"), O(S, new Nd(a.id))) : 0 < a.d && (a.v = Q(2E3, function (b) {
					of(a);
					if (b == pf.length) {
						R(a.v);
						M(a.target, !0);
						M(a.k, !1);
						for (b = 0; b < a.a.length; b++)
							Sc(a.a[b].a, 0);
						qf(a);
						a.o = 0
					} else
						for (var d = 0; d < a.a.length; d++) {
							var e = a.a[d];
							e.d && Aa(a.s, (new Y(e.a, pf[b])).start())
						}
				}, !1))
	},
	pf = [4E3, 2E3, 1E3],
	of = function (a) {
		Tb(a.s);
		for (var b = 0; b < a.a.length; b++) {
			var c = a.a[b];
			c.d && Sc(c.a,
				1)
		}
		a.s = []
	},
	sf = function (a) {
		for (var b = 0; b < a.a.length; b++)
			Sc(a.a[b].a, 0.3);
		qf(a)
	},
	qf = function (a) {
		for (var b = 0; b < a.a.length; b++) {
			var c = a.a[b];
			if (c.d) {
				var d = L(c.a),
				e;
				e = 0 == a.d ? 15 * a.id + 210 : 1 == a.d ? 15 + 30 * a.id + 15 * b + 180 : 2 == a.d ? 2 > b ? 15 + 30 * a.id + 15 * b + 180 : 30 * a.id + 202.5 : void 0;
				O(S, new Id(d.x, d.y, e, c.g));
				c.d = !1
			}
		}
	};
	mf.prototype.B = function () {
		Tb(this.s);
		R(this.v);
		G(this.C);
		this.C = null;
		I(this.target);
		I(this.k);
		I(this.w);
		for (var a = 0; a < this.a.length; a++)
			I(this.a[a].a);
		G(this.I);
		mf.G.B.call(this)
	};
	var kf = function (a, b) {
		this.a = a;
		this.d = !1;
		this.g = b
	};
	var uf = function () {
		this.I = new H;
		this.g = new K(this);
		this.a = [];
		this.s = 0;
		this.C = !1;
		this.v = null;
		this.k = [];
		this.d = new He;
		this.A = !0;
		Uc(new Tc(tf("start_bg.png")));
		wd = new Wc("/logos/2013/qixi/images-bg.png", ad);
		Yc(wd, p(this.rb, this));
		this.w = this.F = 0;
		var a = window.google,
		a = a && a.doodle;
		this.Z = !(!a || !a.standalone);
		this.g.listen(S, "f", this.tb);
		this.g.listen(S, "q", this.xb);
		this.g.listen(S, "o", this.wb);
		this.g.listen(S, "e", this.yb);
		this.g.listen(S, "r", this.Bb);
		this.g.listen(S, "j", this.zb);
		this.g.listen(S, "i", this.ub);
		this.g.listen(S, "k", this.vb);
		this.g.listen(S, "n", this.Ab)
	};
	q(uf, F);
	var vf = ["bg_1.png", "bg_2.png", "bg_3.png"];
	h = uf.prototype;
	h.Jb = function () {
		ld();
		de(this.i)
	};
	h.Kb = function () {
		md();
		this.i.fa && ee(this.i)
	};
	h.wb = function () {
		wf(this);
		this.F++
	};
	h.vb = function () {
		xf(this)
	};
	h.zb = function (a) {
		0 <= ya(this.k, a.d) || this.k.push(a.d);
		if (2 == this.k.length) {
			var b = this;
			this.R = Q(50, function () {
					b.o && b.o.ra();
					if (2 == b.k.length) {
						var a = Math.min(b.k[0], b.k[1]),
						d = Math.max(b.k[0], b.k[1]);
						b.v.a[a].ra(sd, -3);
						b.v.a[d].ra(td, 3)
					}
				}, !1)
		}
	};
	h.ub = function () {
		R(this.R);
		this.k = [];
		for (var a = 0; a < this.a.length; a++)
			sf(this.a[a]);
		this.s++;
		Q(5E3, p(this.Da, this), !0)
	};
	h.rb = function () {
		if (this.d) {
			this.i = new Z(this.Z);
			this.D = new ff(9E4, p(this.Jb, this), p(this.Kb, this));
			var a = this;
			this.g.listen(Nc, "mousedown", function () {
				var b = a.D;
				b.g = Ob();
				b.a = !1;
				df(b)
			})
		}
	};
	var wf = function (a) {
		Uc(new Tc(tf(vf[0])));
		T = new Wc("/logos/2013/qixi/images-level1.png", cd);
		Yc(T, function () {
			a.d && (Ie(a.d, 0), a.i.start(), a.J = new De, Xd = new Td(["/logos/2013/qixi/bg"]), Xd.load(!1), yf(a))
		})
	},
	yf = function (a) {
		Uc(new Tc(tf(vf[1])));
		xd = new Wc("/logos/2013/qixi/images-level2.png", ed);
		Yc(xd, function () {
			a.d && (Ie(a.d, 1), zf(a))
		})
	},
	zf = function (a) {
		Uc(new Tc(tf(vf[2])));
		yd = new Wc("/logos/2013/qixi/images-level3.png", fd);
		Yc(yd, function () {
			a.d && Ie(a.d, 2)
		})
	},
	tf = function (a) {
		return "/logos/2013/qixi/" + a
	};
	h = uf.prototype;
	h.Bb = function () {
		for (var a = [], b = 0; b < this.a.length; b++) {
			for (var c = Ea, d = a, e = this.a[b], f = [], g = 0; g < e.a.length; g++) {
				var k = e.a[g];
				k.d || Aa(f, k.g)
			}
			c(d, f)
		}
		b = {};
		for (d = c = 0; d < a.length; )
			e = a[d++], f = da(e) ? "o" + ha(e) : (typeof e).charAt(0) + e, Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e);
		a.length = c;
		if (0 == a.length) {
			for (b = 0; b < this.a.length; b++)
				a = this.a[b], M(a.target, !1), M(a.k, !1);
			af(this.v);
			ke(this.o)
		} else
			O(S, new Ld(a))
	};
	h.tb = function (a) {
		this.w++;
		var b = this.d,
		c = a.g;
		a = a.d;
		c && a ? M(b.d, !0) : c ? M(b.g, !0) : a && M(b.k, !0);
		af(this.v);
		Tb(this.a);
		Q(5E3, p(this.Da, this), !0)
	};
	h.xb = function () {
		for (var a = 0; a < this.a.length; a++)
			sf(this.a[a]);
		this.P = la();
		Q(5E3, p(this.Wb, this), !0)
	};
	h.Wb = function () {
		Tb(this.a);
		M(this.d.i, !0);
		M(this.i.ga, !0);
		var a = Math.floor((this.P - this.H) / 1E3),
		b = this.i,
		c = b.i,
		d = Math.floor(Math.floor(a / 3600) / 10) + "" + Math.floor(a / 3600) % 10 + ":" + (Math.floor(Math.floor(a / 60) % 60 / 10) + "" + Math.floor(a / 60) % 60 % 10) + ":" + (Math.floor(a % 60 / 10) + "" + a % 60 % 10);
		if ("textContent" in c)
			c.textContent = d;
		else if (c.firstChild && 3 == c.firstChild.nodeType) {
			for (; c.lastChild != c.firstChild; )
				c.removeChild(c.lastChild);
			c.firstChild.data = d
		} else {
			for (var e; e = c.firstChild; )
				c.removeChild(e);
			c.appendChild(Xb(c).createTextNode(String(d)))
		}
		M(b.i,
			!0);
		window.google && window.google.log && window.google.log("doodle-qixi", "p:" + this.F + ",t:" + a + ",f:" + this.w + ",a:" + (this.i.fa ? "1" : "0"))
	};
	h.Ab = function () {
		this.s = this.w = 0;
		this.Da();
		this.H = la();
		this.F++
	};
	h.Da = function () {
		this.C = !1;
		Af(this);
		xf(this)
	};
	h.yb = function (a) {
		for (var b = !1, c = 0; c < this.a.length; c++) {
			var d = this.a[c];
			if (!b)
				if (b = a, d.o == d.d + 1)
					b = !1;
				else {
					var e;
					t : {
						e = d;
						for (var f = b.left, g = b.top, k = b.d, m = 0; m < e.a.length; m++) {
							var u = e.a[m],
							y = Oc(u.a),
							A = Rc(u.a);
							if (u.g == k && !u.d && f > y.x && f < y.x + A.width && g > y.y && g < y.y + A.height) {
								e = u;
								break t
							}
						}
						e = null
					}
					e ? (Sc(e.a, 1), e.d = !0, rf(d, b.id), b = !0) : b = !1
				}
		}
		b || O(S, new Fd(a.left, a.top, a.id))
	};
	var xf = function (a) {
		if (!a.C) {
			Je(a.d);
			a.C = !0;
			var b = a.d,
			c = a.s;
			b.a[c] && M(b.a[c], !0);
			a.i.update(a.s);
			Q(1E3, p(a.ea, a), !0)
		}
	};
	uf.prototype.ea = function () {
		Je(this.d);
		var a = Ae[this.s];
		G(this.o);
		this.o = new he(a.Ja, 2 == this.s);
		for (var b = 0; b < a.Ia; b++) {
			var c = new mf(b, a.Ha[b], this.s);
			this.a[b] = c
		}
		this.v = new Ye(a.Ga, 0, this.A && 0 == this.s, this.s);
		le(this.o);
		this.A && (Yd(), M(this.i.Q, !0), this.H = la());
		this.A = !1
	};
	var Af = function (a) {
		G(a.v);
		Tb(a.a);
		G(a.o);
		a.a = [];
		a.v = null;
		a.o = null;
		a.k = []
	};
	uf.prototype.B = function () {
		Af(this);
		G(this.D);
		this.D = null;
		G(this.i);
		this.i = null;
		Xd && G(Xd);
		G(this.g);
		this.g = null;
		G(this.I);
		this.I = null;
		G(this.J);
		this.J = null;
		G(this.d);
		this.d = null
	};
	var Bf = null,
	Cf = null;
	(function (a, b, c) {
		var d = function () {
			a();
			window.lol && window.lol()
		},
		e = function () {
			cf(d, b, c);
			bf(d, b);
			d()
		};
		google && google.x ? google.x({
			id : "DOODLE"
		}, e) : e()
	})
	(function () {
		if (Bf = document.getElementById("hplogo")) {
			vd = new H;
			S = new N;
			kd = !1;
			P = [];
			jd = [];
			var a = Bf;
			Nc = a;
			ud = Rc(a);
			Oc(a);
			Cf = new uf
		}
	}, function () {
		G(Cf);
		window.clearTimeout(hd);
		P = [];
		jd = [];
		G(vd);
		vd = null;
		G(S);
		S = null;
		G(wd);
		wd = null;
		G(T);
		T = null;
		G(xd);
		xd = null;
		G(yd);
		yd = null
	});
})();
