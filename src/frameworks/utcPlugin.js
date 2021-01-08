! function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t.dayjs_plugin_utc = i()
}(this, function () {
    "use strict";
    return function (t, i, e) {
        var s = (new Date).getTimezoneOffset(),
            n = i.prototype;
        e.utc = function (t, e) {
            return new i({
                date: t,
                utc: !0,
                format: e
            })
        }, n.utc = function () {
            return e(this.toDate(), {
                locale: this.$L,
                utc: !0
            })
        }, n.local = function () {
            return e(this.toDate(), {
                locale: this.$L,
                utc: !1
            })
        };
        var u = n.parse;
        n.parse = function (t) {
            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), u.call(this, t)
        };
        var o = n.init;
        n.init = function () {
            if (this.$u) {
                var t = this.$d;
                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
            } else o.call(this)
        };
        var f = n.utcOffset;
        n.utcOffset = function (t) {
            var i = this.$utils().u;
            if (i(t)) return this.$u ? 0 : i(this.$offset) ? f.call(this) : this.$offset;
            var e, n = Math.abs(t) <= 16 ? 60 * t : t;
            return 0 !== t ? (e = this.local().add(n + s, "minute")).$offset = n : e = this.utc(), e
        };
        var r = n.format;
        n.format = function (t) {
            var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return r.call(this, i)
        }, n.valueOf = function () {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + s;
            return this.$d.valueOf() - 6e4 * t
        }, n.isUTC = function () {
            return !!this.$u
        }, n.toISOString = function () {
            return this.toDate().toISOString()
        }, n.toString = function () {
            return this.toDate().toUTCString()
        }
    }
});