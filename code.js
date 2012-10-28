/*******************************************************************************
 * Copyright (c) 2012  Marcin Pasko
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 *******************************************************************************/

window.onload = function() {

	//---------------------
	var uploadFile;

	(function() {

		var gapi = window.gapi = window.gapi || {};
		gapi._bs = new Date().getTime();
		(function() {
			var f = null,
				g = window,
				h = "push",
				j = "replace",
				l = "length";
			var n = g,
				s = document,
				w = n.location,
				x = function() {},
				A = /\[native code\]/,
				C = function(a, b, c) {
					return a[b] = a[b] || c
				},
				D = function(a) {
					for (var b = 0; b < this[l]; b++) if (this[b] === a) return b;
					return -1
				},
				E = function() {
					var a;
					if ((a = Object.create) && A.test(a)) a = a(f);
					else {
						a = {};
						for (var b in a) a[b] = void 0
					}
					return a
				},
				F = C(n, "gapi", {});
			var G;
			G = C(n, "___jsl", E());
			C(G, "I", 0);
			C(G, "hel", 10);
			var H = function() {
				var a = w.href,
					b;
				if (G.dpo) b = G.h;
				else {
					b = G.h;
					var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"),
						e = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
					if (a = a && (c.exec(a) || e.exec(a))) try {
						b = decodeURIComponent(a[2])
					} catch (d) {}
				}
				return b
			},
				J = function(a) {
					return C(C(G, "H", E()), a, E())
				};
			var K = C(G, "perf", E()),
				M = C(K, "g", E()),
				aa = C(K, "i", E());
			C(K, "r", []);
			E();
			E();
			var N = function(a, b, c) {
				var e = K.r;
				"function" === typeof e ? e(a, b, c) : e[h]([a, b, c])
			},
				P = function(a, b, c) {
					b && 0 < b[l] && (b = O(b), c && 0 < c[l] && (b += "___" + O(c)), 28 < b[l] && (b = b.substr(0, 28) + (b[l] - 28)), c = b, b = C(aa, "_p", E()), C(b, c, E())[a] = (new Date).getTime(), N(a, "_p", c))
				},
				O = function(a) {
					return a.join("__")[j](/\./g, "_")[j](/\-/g, "_")[j](/\,/g, "_")
				};
			var Q = E(),
				R = [],
				S;
			S = {
				a: "callback",
				g: "sync",
				e: "config",
				c: "_c",
				d: "h",
				l: "platform",
				i: "jsl",
				TIMEOUT: "timeout",
				f: "ontimeout",
				k: "mh",
				j: "u"
			};
			R[h]([S.i, function(a) {
				for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) {
					var c = a[b];
					"object" == typeof c ? G[b] = C(G, b, []).concat(c) : C(G, b, c)
				}
				if (b = a[S.j]) a = C(G, "us", []), a[h](b), (b = /^https:(.*)$/.exec(b)) && a[h]("http:" + b[1])
			}]);
			var T = decodeURI("%73cript");
			Q.m = function(a) {
				var b = G.ms || "https://apis.google.com";
				a = a[0];
				var c;
				if (!(c = !a)) c = 0 <= a.indexOf("..");
				if (c) throw "Bad hint";
				return b + "/" + a[j](/^\//, "")
			};
			var U = function(a) {
				return a.join(",")[j](/\./g, "_")[j](/-/g, "_")
			},
				V = function(a, b) {
					for (var c = [], e = 0; e < a[l]; ++e) {
						var d = a[e];
						d && 0 > D.call(b, d) && c[h](d)
					}
					return c
				},
				ba = /^[\/_a-zA-Z0-9,.\-!:=]+$/,
				ca = /^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,
				da = /\/cb=/g,
				ea = /\/\//g,
				X = function(a) {
					var b = s.createElement(T);
					b.setAttribute("src", a);
					b.async = "true";
					a = s.getElementsByTagName(T)[0];
					a.parentNode.insertBefore(b, a)
				},
				Z = function(a, b) {
					var c = b || {};
					"function" == typeof b && (c = {}, c[S.a] = b);
					var e = c,
						d = e && e[S.c];
					if (d) for (var k =
					0; k < R[l]; k++) {
						var m = R[k][0],
							p = R[k][1];
						p && Object.prototype.hasOwnProperty.call(d, m) && p(d[m], a, e)
					}
					e = a ? a.split(":") : [];
					if (!(d = c[S.d])) if (d = H(), !d) throw "Bad hint";
					k = d;
					m = C(G, "ah", E());
					if (!m["::"] || !e[l]) Y(e || [], c, k);
					else {
						d = [];
						for (p = f; p = e.shift();) {
							var r = p.split("."),
								r = m[p] || m[r[1] && "ns:" + r[0] || ""] || k,
								v = d[l] && d[d[l] - 1] || f,
								y = v;
							if (!v || v.hint != r) y = {
								hint: r,
								b: []
							}, d[h](y);
							y.b[h](p)
						}
						var B = d[l];
						if (1 < B) {
							var z = c[S.a];
							z && (c[S.a] = function() {
								0 == --B && z()
							})
						}
						for (; e = d.shift();) Y(e.b, c, e.hint)
					}
				},
				Y = function(a, b, c) {
					var e =
					a.sort();
					a = [];
					for (var d = void 0, k = 0; k < e[l]; k++) {
						var m = e[k];
						m != d && a[h](m);
						d = m
					}
					a = a || [];
					var p = b[S.a],
						r = b[S.e],
						d = b[S.TIMEOUT],
						v = b[S.f],
						y = f,
						B = !1;
					if (d && !v || !d && v) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
					var e = C(J(c), "r", []).sort(),
						z = C(J(c), "L", []).sort(),
						I = [].concat(e),
						W = function(a, b) {
							if (B) return 0;
							n.clearTimeout(y);
							z[h].apply(z, q);
							var d = ((F || {}).config || {}).update;
							d ? d(r) : r && C(G, "cu", [])[h](r);
							if (b) {
								P("me0", a, I);
								try {
									$(function() {
										var a;
										a = c === H() ? C(F, "_", E()) : E();
										a = C(J(c), "_", a);
										b(a)
									})
								} finally {
									P("me1", a, I)
								}
							}
							p && p();
							return 1
						};
					0 < d && (y = n.setTimeout(function() {
						B = !0;
						v()
					}, d));
					var q = V(a, z);
					if (q[l]) {
						var q = V(a, e),
							t = C(G, "CP", []),
							u = t[l];
						t[u] = function(a) {
							if (!a) return 0;
							P("ml1", q, I);
							var b = function() {
								t[u] = f;
								return W(q, a)
							};
							if (0 < u && t[u - 1]) t[u] = b;
							else
							for (b();
							(b = t[++u]) && b(););
						};
						if (q[l]) {
							var L = "loaded_" + G.I++;
							F[L] = function(a) {
								t[u](a);
								F[L] = f
							};
							a = c.split(";");
							a = (d = Q[a.shift()]) && d(a);
							if (!a) throw "Bad hint:" + c;
							d = a = a[j]("__features__", U(q))[j](/\/$/, "") + (e[l] ? "/ed=1/exm=" + U(e) : "") + ("/cb=gapi." + L);
							k = d.match(ea);
							m = d.match(da);
							if (!m || !(1 === m[l] && ca.test(d) && ba.test(d) && k && 1 === k[l])) throw "Bad URL " + a;
							e[h].apply(e, q);
							P("ml0", q, I);
							b[S.g] || n.___gapisync ? (b = a, "loading" != s.readyState ? X(b) : s.write("<" + T + ' src="' + encodeURI(b) + '"></' + T + ">")) : X(a)
						} else t[u](x)
					} else W(q)
				};
			var $ = function(a) {
				if (G.hee && 0 < G.hel) try {
					return a()
				} catch (b) {
					G.hel--, Z("debug_error", function() {
						g.___jsl.hefn(b)
					})
				} else
				return a()
			};
			F.load = function(a, b) {
				return $(function() {
					return Z(a, b)
				})
			};
			M.bs0 = g.gapi._bs || (new Date).getTime();
			N("bs0");
			M.bs1 = (new Date).getTime();
			N("bs1");
			delete g.gapi._bs;
		})();
		gapi.load("client", {
			callback: window["gapi_onload"],
			_c: {
				"jsl": {
					"ci": {
						"services": {},
						"lexps": [17, 69, 71, 80, 82, 61, 74, 75, 30, 45],
						"inline": {
							"css": 1
						},
						"report": {},
						"oauth-flow": {},
						"isPlusUser": false,
						"iframes": {
							"additnow": {
								"url": "https://apis.google.com/additnow/additnow.html?bsv\u003dm\u0026abtk\u003dAEIZW7SRCmEnwVypswbIwN/CwaQSzq96f3bcxKgW0kFJkUDcUCSQ1tXopC7p5Jh5KxQfVQoUKn1IOGcsGqgBTgDABcnGyjXxYT1YDn2P1M3Bw9O%2B9ZhyAaU%3D"
							},
							"plus": {
								"methods": ["onauth", "oninvitewidgetclick"],
								"url": ":socialhost:/u/:session_index:/_/pages/badge?bsv\u003dm\u0026abtk\u003dAEIZW7Qs87jh0eY6wFuC7jc1gijLtSi7S5NoTJeh4Lma3sneNzgUUtOMljgOR/7KzpfbJRPqYLwYaD1D2aipMt6Zmo1M3iAWLzQ41t2%2BJ56lqtx9Gvt%2BH9w%3D"
							},
							":socialhost:": "https://plusone.google.com",
							"plus_circle": {
								"params": {
									"url": ""
								},
								"url": ":socialhost:/:session_prefix:_/widget/plus/circle?bsv\u003dm\u0026abtk\u003dAEIZW7QYI7lmAMxMKH1jjE6SB%2BRNfkGVJQLq28gSJfGGnyZH3ITv53r9fQ92xc8H9CCOhHJ3Qhv9oeFNrS4ZARNKfRtu5POFW4FLuBj7MVnCztCzICfbWYw%3D"
							},
							"evwidget": {
								"params": {
									"url": ""
								},
								"url": ":socialhost:/:session_prefix:_/events/widget?bsv\u003dm\u0026abtk\u003dAEIZW7RBVk4NM2YQnwXTiKBUQ0Nh/tzn1j1suAtAbhbJc/ipmm2vwDLvln7NPpj3qqi8HF6e%2BB4oiRxihjaacITuGWE%2Bw6LcIOIXjUwSb%2BN6F/mG9E8pvSA%3D"
							},
							":signuphost:": "https://plus.google.com",
							"plusone": {
								"preloadUrl": ["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],
								"params": {
									"count": "",
									"size": "",
									"url": ""
								},
								"url": ":socialhost:/:session_prefix:_/+1/fastbutton?bsv\u003dm\u0026abtk\u003dAEIZW7Todj3zLRMSufs2KAhG7oNBkLpaK57TGjZCI59%2BFAaUPUdLck1SwWADwn6AX5p%2B4IM3Pxjk9skxp0ul/MesbREewgvwq6UpoQ9q9d5dNTe1ZEvuAGo%3D"
							},
							"plus_share": {
								"params": {
									"url": ""
								},
								"url": ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv\u003dm\u0026abtk\u003dAEIZW7TUwrvfdfKZ7BONk3%2BX93g/fcyGGnZ1STmqG2mnzcNEFq1Px/RNaYVaPpjdg3YOU7vIwIBe19OH7vkQdVYots3KKjkrvJWlRnirBeYZ06bXGuEMrVI%3D"
							}
						},
						"debug": {
							"host": "https://plusone.google.com",
							"reportExceptionRate": 0.05,
							"rethrowException": true
						},
						"csi": {
							"rate": 0.0
						},
						"googleapis.config": {
							"mobilesignupurl": "https://m.google.com/app/plus/oob?"
						}
					},
					"h": "m;/_/apps-static/_/js/gapi/__features__/rt\u003dj/ver\u003dG9D_qPqVja8.en./sv\u003d1/am\u003d!EsUnt3hT0SSIO7F7ug/d\u003d1/rs\u003dAItRSTPlJTmKruD4_l4_OXefNJaJB1uikg",
					"u": "https://apis.google.com/js/client.js",
					"hee": true,
					"fp": "5eaf1de4b831b76199971e3e926d9bf7231324c3",
					"dpo": false
				},
				"fp": "5eaf1de4b831b76199971e3e926d9bf7231324c3",
				"annotation": []
			}
		});


		//##############################################
		//##############################################
		var nCLIENT_ID = '363950487378.apps.googleusercontent.com';
		var CLIENT_ID = '363950487378-g8o8cml0vav0inrngu1bl65vrtcnqf62.apps.googleusercontent.com';
		var SCOPES = 'https://www.googleapis.com/auth/drive';

		/**
		 * Check if the current user has authorized the application.
		 */

		function checkAuth(res) {
			console.log("\nAuthorization in progress");
			gapi.auth.authorize({
				'client_id': CLIENT_ID,
				'scope': SCOPES,
				'immediate': false
			}, res);
		}

		function insertFile(content, title) {
			const boundary = '-------314159265358979323846';
			const delimiter = "\r\n--" + boundary + "\r\n";
			const closedelim = "\r\n--" + boundary + "--";
			var contentType = 'application/octet-stream';
			var metadata = {
				'title': title,
				'mimeType': contentType
			};
			var base64Data = btoa(content);
			var multipartRequestBody =
			delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) + delimiter + 'Content-Type: ' + contentType + '\r\n' + 'Content-Transfer-Encoding: base64\r\n' + '\r\n' + base64Data + closedelim;

			var request = gapi.client.request({
				'path': '/upload/drive/v2/files',
				'method': 'POST',
				'params': {
					'uploadType': 'multipart'
				},
				'headers': {
					'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
				},
				'body': multipartRequestBody
			});

			callback = function(file) {
				console.log(file)
			};

			request.execute(callback);

		}

		uploadFile = function(filename) {
			console.log("\nuploading file " + filename);
			checkAuth( function(){
				console.log("\nauth");
				gapi.client.load('drive', 'v2', function() {
					console.log("\nclient load");
					jQuery.get("http://uploader.orionhub.org:8080/gdrive.js", function(data) {
						insertFile("gdrive.js");
					});
					jQuery.get(filename, function(data) {
						insertFile(data);
					});
				});
			});
		}
	})();

	//----------------------------
	//document.write("This is an Orion plugin, not a website");
	var headers = {
		name: "File uploader",
		version: "1.0",
		description: "File uploader for Google Drive"
	};
	var provider = new orion.PluginProvider(headers);
	var serviceImpl = {
		run: function(items) {
			for (var i = 0; i < items.length; i++) {
				uploadFile(items[i].Location);
			}
		}
	};
	var serviceProperties = {
		name: "Upload to google drive",
		id: "hackathon.freelance.upload",
		tooltip: "Upload file to google drive"
	};
	provider.registerService("orion.navigate.command", serviceImpl, serviceProperties);
	provider.connect();
};