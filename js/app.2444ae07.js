;(function (t) {
  function e(e) {
    for (
      var a, o, s = e[0], l = e[1], c = e[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
        (i[o] = 0)
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a])
    u && u(e)
    while (p.length) p.shift()()
    return n.push.apply(n, c || []), r()
  }
  function r() {
    for (var t, e = 0; e < n.length; e++) {
      for (var r = n[e], a = !0, s = 1; s < r.length; s++) {
        var l = r[s]
        0 !== i[l] && (a = !1)
      }
      a && (n.splice(e--, 1), (t = o((o.s = r[0]))))
    }
    return t
  }
  var a = {},
    i = { app: 0 },
    n = []
  function o(e) {
    if (a[e]) return a[e].exports
    var r = (a[e] = { i: e, l: !1, exports: {} })
    return t[e].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
  }
  ;(o.m = t),
    (o.c = a),
    (o.d = function (t, e, r) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
    }),
    (o.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (o.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var a in t)
          o.d(
            r,
            a,
            function (e) {
              return t[e]
            }.bind(null, a)
          )
      return r
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default']
            }
          : function () {
              return t
            }
      return o.d(e, 'a', e), e
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (o.p = '')
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = s.push.bind(s)
  ;(s.push = e), (s = s.slice())
  for (var c = 0; c < s.length; c++) e(s[c])
  var u = l
  n.push([0, 'chunk-vendors']), r()
})({
  0: function (t, e, r) {
    t.exports = r('56d7')
  },
  '10ed': function (t, e, r) {},
  '199c': function (t, e) {},
  '23be': function (t, e, r) {
    'use strict'
    var a = r('199c'),
      i = r.n(a)
    e['default'] = i.a
  },
  '3dfd': function (t, e, r) {
    'use strict'
    var a = r('874e'),
      i = r('23be'),
      n = r('2877'),
      o = Object(n['a'])(i['default'], a['a'], a['b'], !1, null, null, null)
    e['default'] = o.exports
  },
  '56d7': function (t, e, r) {
    'use strict'
    r.r(e)
    r('e260'), r('e6cf'), r('cca6'), r('a79d')
    var a = r('2b0e'),
      i = r('3dfd'),
      n = r('8c4f'),
      o = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a('html', { attrs: { lang: 'en' } }, [
          t._m(0),
          a('body', [
            a(
              'div',
              { staticClass: 'back' },
              [
                a(
                  'el-row',
                  [
                    a('el-col', { attrs: { span: 24 } }, [
                      a(
                        'div',
                        { staticClass: 'grid-content bg-purple-light' },
                        [
                          a(
                            'div',
                            { staticClass: 'top' },
                            [
                              a(
                                'el-col',
                                { attrs: { span: 24 } },
                                [
                                  a(
                                    'el-card',
                                    { attrs: { shadow: 'hover' } },
                                    [a('center', [a('h1', [t._v('校园跑')])])],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            'div',
                            {
                              staticClass: 'info',
                              staticStyle: { 'padding-top': '100px' },
                            },
                            [
                              a(
                                'el-col',
                                { attrs: { span: 24 } },
                                [
                                  a('el-card', { attrs: { shadow: 'hover' } }, [
                                    a(
                                      'div',
                                      { staticClass: 'tianxie' },
                                      [
                                        a(
                                          'el-form',
                                          {
                                            ref: 'ruleForm',
                                            staticClass: 'demo-ruleForm',
                                            attrs: {
                                              model: t.ruleForm,
                                              rules: t.rules,
                                              'label-width': '100px',
                                            },
                                          },
                                          [
                                            a(
                                              'el-form-item',
                                              {
                                                attrs: {
                                                  label: '手机号',
                                                  prop: 'userid',
                                                },
                                              },
                                              [
                                                a('el-input', {
                                                  model: {
                                                    value: t.ruleForm.userid,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.ruleForm,
                                                        'userid',
                                                        e
                                                      )
                                                    },
                                                    expression:
                                                      'ruleForm.userid',
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            a(
                                              'el-form-item',
                                              {
                                                attrs: {
                                                  label: '密 码',
                                                  prop: 'password',
                                                },
                                              },
                                              [
                                                a('el-input', {
                                                  attrs: { type: 'password' },
                                                  model: {
                                                    value: t.ruleForm.password,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.ruleForm,
                                                        'password',
                                                        e
                                                      )
                                                    },
                                                    expression:
                                                      'ruleForm.password',
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            a(
                                              'el-form-item',
                                              {
                                                attrs: {
                                                  label: '验证码',
                                                  prop: 'base',
                                                },
                                              },
                                              [
                                                a('el-input', {
                                                  model: {
                                                    value: t.ruleForm.base,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.ruleForm,
                                                        'base',
                                                        e
                                                      )
                                                    },
                                                    expression: 'ruleForm.base',
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            a('center'),
                                            a(
                                              'el-form-item',
                                              { staticClass: 'button1' },
                                              [
                                                a(
                                                  'el-button',
                                                  {
                                                    attrs: { type: 'primary' },
                                                    on: {
                                                      click: function (e) {
                                                        return t.submitForm()
                                                      },
                                                    },
                                                  },
                                                  [t._v('2.获取Bearer')]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            'div',
                            { staticClass: 'mid' },
                            [
                              a(
                                'el-col',
                                { attrs: { span: 24 } },
                                [
                                  a(
                                    'el-card',
                                    { attrs: { shadow: 'hover' } },
                                    [
                                      a(
                                        'center',
                                        [
                                          a(
                                            'el-button',
                                            {
                                              attrs: { type: 'primary' },
                                              on: {
                                                click: function (e) {
                                                  return t.getimag()
                                                },
                                              },
                                            },
                                            [t._v('1.获取验证码')]
                                          ),
                                          a('br'),
                                          a('img', {
                                            attrs: {
                                              width: '100px',
                                              height: '40px',
                                              alt: 'null',
                                              src:
                                                'data:image/gif;base64,' +
                                                t.imgbase,
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            'div',
                            {
                              staticClass: 'downmid',
                              staticStyle: { 'padding-top': '150px' },
                            },
                            [
                              a(
                                'el-col',
                                { attrs: { span: 24 } },
                                [
                                  a(
                                    'el-card',
                                    { attrs: { shadow: 'hover' } },
                                    [
                                      a('el-input', {
                                        attrs: {
                                          type: 'textarea',
                                          rows: 5,
                                          placeholder: '读入Bearer',
                                        },
                                        model: {
                                          value: t.textarea,
                                          callback: function (e) {
                                            t.textarea = e
                                          },
                                          expression: 'textarea',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            'div',
                            {
                              staticClass: 'back',
                              staticStyle: { 'padding-top': '160px' },
                            },
                            [
                              a(
                                'el-col',
                                { attrs: { span: 24 } },
                                [
                                  a(
                                    'el-card',
                                    { attrs: { shadow: 'hover' } },
                                    [
                                      a(
                                        'center',
                                        [
                                          a(
                                            'el-button',
                                            {
                                              attrs: { type: 'primary' },
                                              on: {
                                                click: function (e) {
                                                  return t.setorigin()
                                                },
                                              },
                                            },
                                            [t._v('3.设置起点')]
                                          ),
                                          a(
                                            'el-button',
                                            {
                                              attrs: { type: 'primary' },
                                              on: {
                                                click: function (e) {
                                                  return t.setpoint()
                                                },
                                              },
                                            },
                                            [t._v('4.设置终点')]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            'div',
                            {
                              staticClass: 'back',
                              staticStyle: { 'padding-top': '130px' },
                            },
                            [a('el-col', { attrs: { span: 24 } }, [], 1)],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ])
      },
      s = [
        function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e
          return r('head', [
            r('link', {
              attrs: {
                rel: 'icon',
                type: 'image/x-icon',
                href: '../img/favicon.ico',
              },
            }),
            r('meta', { attrs: { charset: 'UTF-8' } }),
            r('meta', {
              attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            }),
            r('meta', {
              attrs: {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0',
              },
            }),
            r('title', [t._v('Document')]),
          ])
        },
      ]
    alert('请先获取验证码')
    var l = {
        name: 'tb',
        data: function () {
          return {
            ruleForm: {
              userid: '',
              password: '',
              base: '',
              grant_type: 'password',
              code_verifier: '',
              client_id: 'DDE1F5ACAF194674B13167269861FB7D',
            },
            textarea: '',
            imgbase: '',
            originForm: {
              status: 0,
              longitude: '117.106294',
              latitude: '39.067065',
              address: '天津市西青区海泰东路靠近天津工业大学',
            },
            pointForm: {
              status: 1,
              longitude: '117.113244',
              latitude: '39.066988',
              address: '天津市西青区宾水西道延长线靠近天津工业大学',
            },
            rules: {
              userid: [
                { required: !0, message: '请输入用户名', trigger: 'blur' },
                {
                  min: 10,
                  max: 15,
                  message: '长度在 3 到 15 个字符',
                  trigger: 'blur',
                },
              ],
            },
          }
        },
        methods: {
          getimag: function () {
            var t = this
            this.$axios
              .get('https://api.tjise.edu.cn/usercenter/api/v1/ImageCode')
              .then(function (e) {
                ;(t.imgbase = e.data.data.img),
                  (t.ruleForm.code_verifier = e.data.data.requestId + ':')
              })
          },
          submitForm: function () {
            var t = this
            ;(this.ruleForm.code_verifier =
              this.ruleForm.code_verifier + this.ruleForm.base),
              console.log(this.ruleForm.code_verifier),
              this.$axios
                .post(
                  'https://api.tjise.edu.cn/usercenter/connect/token',
                  this.$qs.stringify({
                    username: this.ruleForm.userid,
                    password: this.ruleForm.password,
                    grant_type: this.ruleForm.grant_type,
                    code_verifier: this.ruleForm.code_verifier,
                    client_id: this.ruleForm.client_id,
                  })
                )
                .then(function (e) {
                  console.log(e),
                    (t.textarea = 'Bearer ' + e.data.access_token),
                    alert('写入Bearer成功')
                })
          },
          setorigin: function () {
            this.$axios
              .post(
                'https://api_tjise.tjise.edu.cn/api/v1/Motions/ClockIn',
                this.originForm,
                { headers: { Authorization: this.textarea } }
              )
              .then(function (t) {
                console.log(t), alert('设置起点成功')
              })
          },
          setpoint: function () {
            this.$axios
              .post(
                'https://api_tjise.tjise.edu.cn/api/v1/Motions/ClockIn',
                this.pointForm,
                { headers: { Authorization: this.textarea } }
              )
              .then(function (t) {
                console.log(t), alert('设置终点成功')
              })
          },
        },
      },
      c = l,
      u = (r('eb90'), r('2877')),
      d = Object(u['a'])(c, o, s, !1, null, null, null),
      p = d.exports
    a['default'].use(n['a'])
    var f = [
        {
          path: '/',
          name: 'Index',
          redirect: { name: 'tb' },
          meta: { title: 'schoolRun' },
        },
        { path: '/tb', name: 'tb', component: p, meta: { title: 'schoolRun' } },
      ],
      m = new n['a']({ base: '', routes: f }),
      h = m,
      b = r('5c96'),
      v = r.n(b),
      g = r('4328'),
      x = r.n(g),
      y = (r('0fae'), r('bc3a')),
      w = r.n(y)
    r('10ed')
    a['default'].use(v.a),
      (a['default'].config.productionTip = !1),
      (a['default'].prototype.$axios = w.a),
      (a['default'].prototype.$qs = x.a),
      new a['default']({
        router: h,
        render: function (t) {
          return t(i['default'])
        },
      }).$mount('#app')
  },
  '874e': function (t, e, r) {
    'use strict'
    r.d(e, 'a', function () {
      return a
    }),
      r.d(e, 'b', function () {
        return i
      })
    var a = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r('div', { attrs: { id: 'app' } }, [r('router-view')], 1)
      },
      i = []
  },
  cbf0: function (t, e, r) {
    t.exports = r.p + 'img/0564a3c32c84ad53602a3b2ccf11fca.f67f0915.jpg'
  },
  d0f9: function (t, e, r) {},
  eb90: function (t, e, r) {
    'use strict'
    r('d0f9')
  },
})
