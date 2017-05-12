(function() {
  var $gravatar, $img, $meta, $modal, $modalContent, $previewImage, $src, buddySystem, get_gravatar, ready, _i, _len, _ref;

  $previewImage = document.querySelectorAll('div[data-img]');

  if ($previewImage.length) {
    $previewImage = $previewImage[0];
    $meta = document.createElement('meta');
    $meta.setAttribute('property', "og:image");
    $meta.content = "http://cdn.everything.io/kttty/" + $previewImage.dataset.img + ".png";
    document.head.appendChild($meta);
    if (document.querySelectorAll('#post').length && document.body.getBoundingClientRect().width > 800) {
      $img = document.createElement('img');
      $img.src = "http://cdn.everything.io/kttty/" + $previewImage.dataset.img + ".png";
      $img.onload = function() {
        document.querySelector('main.content').innerHTML = "";
        return document.querySelector('main.content').appendChild($img);
      };
    }
  }

  get_gravatar = function(email, size) {
    var MD5;
    MD5 = function(s) {
      var A, B, C, D, E, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, e, f, g, h, i, j, l, m, n, o, p, q, r, t, u, v, w, y, z;
      L = function(k, d) {
        return (k << d) | (k >>> (32 - d));
      };
      K = function(G, k) {
        var F, H, I, d, x;
        I = void 0;
        d = void 0;
        F = void 0;
        H = void 0;
        x = void 0;
        F = G & 2147483648;
        H = k & 2147483648;
        I = G & 1073741824;
        d = k & 1073741824;
        x = (G & 1073741823) + (k & 1073741823);
        if (I & d) {
          return x ^ 2147483648 ^ F ^ H;
        }
        if (I | d) {
          if (x & 1073741824) {
            return x ^ 3221225472 ^ F ^ H;
          } else {
            return x ^ 1073741824 ^ F ^ H;
          }
        } else {
          return x ^ F ^ H;
        }
      };
      r = function(d, F, k) {
        return (d & F) | ((~d) & k);
      };
      q = function(d, F, k) {
        return (d & k) | (F & (~k));
      };
      p = function(d, F, k) {
        return d ^ F ^ k;
      };
      n = function(d, F, k) {
        return F ^ (d | (~k));
      };
      u = function(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(r(F, aa, Z), k), I));
        return K(L(G, H), F);
      };
      f = function(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(q(F, aa, Z), k), I));
        return K(L(G, H), F);
      };
      D = function(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(p(F, aa, Z), k), I));
        return K(L(G, H), F);
      };
      t = function(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(n(F, aa, Z), k), I));
        return K(L(G, H), F);
      };
      e = function(G) {
        var F, H, I, Z, aa, d, k, x;
        Z = void 0;
        F = G.length;
        x = F + 8;
        k = (x - (x % 64)) / 64;
        I = (k + 1) * 16;
        aa = Array(I - 1);
        d = 0;
        H = 0;
        while (H < F) {
          Z = (H - (H % 4)) / 4;
          d = (H % 4) * 8;
          aa[Z] = aa[Z] | (G.charCodeAt(H) << d);
          H++;
        }
        Z = (H - (H % 4)) / 4;
        d = (H % 4) * 8;
        aa[Z] = aa[Z] | (128 << d);
        aa[I - 2] = F << 3;
        aa[I - 1] = F >>> 29;
        return aa;
      };
      B = function(x) {
        var F, G, d, k;
        k = "";
        F = "";
        G = void 0;
        d = void 0;
        d = 0;
        while (d <= 3) {
          G = (x >>> (d * 8)) & 255;
          F = "0" + G.toString(16);
          k = k + F.substr(F.length - 2, 2);
          d++;
        }
        return k;
      };
      J = function(k) {
        var F, d, x;
        k = k.replace(/rn/g, "n");
        d = "";
        F = 0;
        while (F < k.length) {
          x = k.charCodeAt(F);
          if (x < 128) {
            d += String.fromCharCode(x);
          } else {
            if ((x > 127) && (x < 2048)) {
              d += String.fromCharCode((x >> 6) | 192);
              d += String.fromCharCode((x & 63) | 128);
            } else {
              d += String.fromCharCode((x >> 12) | 224);
              d += String.fromCharCode(((x >> 6) & 63) | 128);
              d += String.fromCharCode((x & 63) | 128);
            }
          }
          F++;
        }
        return d;
      };
      C = Array();
      P = void 0;
      h = void 0;
      E = void 0;
      v = void 0;
      g = void 0;
      Y = void 0;
      X = void 0;
      W = void 0;
      V = void 0;
      S = 7;
      Q = 12;
      N = 17;
      M = 22;
      A = 5;
      z = 9;
      y = 14;
      w = 20;
      o = 4;
      m = 11;
      l = 16;
      j = 23;
      U = 6;
      T = 10;
      R = 15;
      O = 21;
      s = J(s);
      C = e(s);
      Y = 1732584193;
      X = 4023233417;
      W = 2562383102;
      V = 271733878;
      P = 0;
      while (P < C.length) {
        h = Y;
        E = X;
        v = W;
        g = V;
        Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
        V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
        W = u(W, V, Y, X, C[P + 2], N, 606105819);
        X = u(X, W, V, Y, C[P + 3], M, 3250441966);
        Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
        V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
        W = u(W, V, Y, X, C[P + 6], N, 2821735955);
        X = u(X, W, V, Y, C[P + 7], M, 4249261313);
        Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
        V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
        W = u(W, V, Y, X, C[P + 10], N, 4294925233);
        X = u(X, W, V, Y, C[P + 11], M, 2304563134);
        Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
        V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
        W = u(W, V, Y, X, C[P + 14], N, 2792965006);
        X = u(X, W, V, Y, C[P + 15], M, 1236535329);
        Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
        V = f(V, Y, X, W, C[P + 6], z, 3225465664);
        W = f(W, V, Y, X, C[P + 11], y, 643717713);
        X = f(X, W, V, Y, C[P + 0], w, 3921069994);
        Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
        V = f(V, Y, X, W, C[P + 10], z, 38016083);
        W = f(W, V, Y, X, C[P + 15], y, 3634488961);
        X = f(X, W, V, Y, C[P + 4], w, 3889429448);
        Y = f(Y, X, W, V, C[P + 9], A, 568446438);
        V = f(V, Y, X, W, C[P + 14], z, 3275163606);
        W = f(W, V, Y, X, C[P + 3], y, 4107603335);
        X = f(X, W, V, Y, C[P + 8], w, 1163531501);
        Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
        V = f(V, Y, X, W, C[P + 2], z, 4243563512);
        W = f(W, V, Y, X, C[P + 7], y, 1735328473);
        X = f(X, W, V, Y, C[P + 12], w, 2368359562);
        Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
        V = D(V, Y, X, W, C[P + 8], m, 2272392833);
        W = D(W, V, Y, X, C[P + 11], l, 1839030562);
        X = D(X, W, V, Y, C[P + 14], j, 4259657740);
        Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
        V = D(V, Y, X, W, C[P + 4], m, 1272893353);
        W = D(W, V, Y, X, C[P + 7], l, 4139469664);
        X = D(X, W, V, Y, C[P + 10], j, 3200236656);
        Y = D(Y, X, W, V, C[P + 13], o, 681279174);
        V = D(V, Y, X, W, C[P + 0], m, 3936430074);
        W = D(W, V, Y, X, C[P + 3], l, 3572445317);
        X = D(X, W, V, Y, C[P + 6], j, 76029189);
        Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
        V = D(V, Y, X, W, C[P + 12], m, 3873151461);
        W = D(W, V, Y, X, C[P + 15], l, 530742520);
        X = D(X, W, V, Y, C[P + 2], j, 3299628645);
        Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
        V = t(V, Y, X, W, C[P + 7], T, 1126891415);
        W = t(W, V, Y, X, C[P + 14], R, 2878612391);
        X = t(X, W, V, Y, C[P + 5], O, 4237533241);
        Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
        V = t(V, Y, X, W, C[P + 3], T, 2399980690);
        W = t(W, V, Y, X, C[P + 10], R, 4293915773);
        X = t(X, W, V, Y, C[P + 1], O, 2240044497);
        Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
        V = t(V, Y, X, W, C[P + 15], T, 4264355552);
        W = t(W, V, Y, X, C[P + 6], R, 2734768916);
        X = t(X, W, V, Y, C[P + 13], O, 1309151649);
        Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
        V = t(V, Y, X, W, C[P + 11], T, 3174756917);
        W = t(W, V, Y, X, C[P + 2], R, 718787259);
        X = t(X, W, V, Y, C[P + 9], O, 3951481745);
        Y = K(Y, h);
        X = K(X, E);
        W = K(W, v);
        V = K(V, g);
        P += 16;
      }
      i = B(Y) + B(X) + B(W) + B(V);
      return i.toLowerCase();
    };
    size = size || 80;
    return "http://www.gravatar.com/avatar/" + MD5(email) + ".jpg?s=" + size;
  };

  $src = get_gravatar("ajkochanowicz@gmail.com", 100);

  if (k$.$$('.gravatar').length) {
    _ref = k$.$$('.gravatar');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      $gravatar = _ref[_i];
      $gravatar.src = $src;
    }
  }

  buddySystem = function(objs) {
    var o, s, _j, _len1, _results;
    _results = [];
    for (_j = 0, _len1 = objs.length; _j < _len1; _j++) {
      o = objs[_j];
      s = String(o.innerHTML);
      if (s) {
        _results.push(o.innerHTML = s.replace(new RegExp('((?:[^ ]* ){' + ((s.match(/\s/g) || 0).length - 1) + '}[^ ]*) '), "$1&nbsp;"));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  buddySystem(k$.$$('.bubble'));

  $modalContent = "<!-- Begin MailChimp Signup Form -->\n<div id=\"mc_embed_signup\">\n<form action=\"//vegan.us1.list-manage.com/subscribe/post?u=5c42cc6fde96286c436b918ea&amp;id=2b36a3788c\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n    <div id=\"mc_embed_signup_scroll\">\n  <h1>Get kttty every week</h1>\n<div class=\"mc-field-group\">\n  <div class=\"form_group\">\n    <label for=\"mce-EMAIL\">Email Address </label>\n    <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n  </div>\n</div>\n  <div id=\"mce-responses\" class=\"clear\">\n    <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n    <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n    <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_5c42cc6fde96286c436b918ea_2b36a3788c\" tabindex=\"-1\" value=\"\"></div>\n    <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n    </div>\n</form>\n</div>\n\n<!--End mc_embed_signup-->";

  $modal = k$.modal('.modal');

  ready = function() {
    var $modalLauncher, _j, _len1, _ref1, _results;
    $modal.innerHTML = $modalContent;
    _ref1 = k$.$$('.launch-modal');
    _results = [];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      $modalLauncher = _ref1[_j];
      _results.push((function($modalLauncher, $modal) {
        return $modalLauncher.addEventListener('click', function(e) {
          $modal.style.display = 'block';
          $modal.style.display = 'block';
          e.stopPropagation();
          return $modal.querySelector('input[type="email"]').focus();
        });
      })($modalLauncher, $modal));
    }
    return _results;
  };

  if (document.readyState !== 'loading') {
    ready();
  } else {
    document.addEventListener('DOMContentLoaded', ready);
  }

}).call(this);
