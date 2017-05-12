---
---

# Check for preview image
$previewImage = document.querySelectorAll('div[data-img]')
if $previewImage.length
  $previewImage = $previewImage[0]
  $meta = document.createElement 'meta'
  $meta.setAttribute 'property', "og:image"
  $meta.content = "http://cdn.everything.io/kttty/#{$previewImage.dataset.img}.png"
  document.head.appendChild $meta

  if document.querySelectorAll('#post').length and document.body.getBoundingClientRect().width > 800
    $img = document.createElement 'img'
    $img.src = "http://cdn.everything.io/kttty/#{$previewImage.dataset.img}.png"
    $img.onload = ->
      document.querySelector('main.content').innerHTML = ""
      document.querySelector('main.content').appendChild $img

# TODO: Preview Wrapper

get_gravatar = (email, size) ->
  
  # MD5 (Message-Digest Algorithm) by WebToolkit
  # 
  MD5 = (s) ->
    L = (k, d) ->
      (k << d) | (k >>> (32 - d))
    K = (G, k) ->
      I = undefined
      d = undefined
      F = undefined
      H = undefined
      x = undefined
      F = (G & 2147483648)
      H = (k & 2147483648)
      I = (G & 1073741824)
      d = (k & 1073741824)
      x = (G & 1073741823) + (k & 1073741823)
      return (x ^ 2147483648 ^ F ^ H)  if I & d
      if I | d
        if x & 1073741824
          x ^ 3221225472 ^ F ^ H
        else
          x ^ 1073741824 ^ F ^ H
      else
        x ^ F ^ H
    r = (d, F, k) ->
      (d & F) | ((~d) & k)
    q = (d, F, k) ->
      (d & k) | (F & (~k))
    p = (d, F, k) ->
      d ^ F ^ k
    n = (d, F, k) ->
      F ^ (d | (~k))
    u = (G, F, aa, Z, k, H, I) ->
      G = K(G, K(K(r(F, aa, Z), k), I))
      K L(G, H), F
    f = (G, F, aa, Z, k, H, I) ->
      G = K(G, K(K(q(F, aa, Z), k), I))
      K L(G, H), F
    D = (G, F, aa, Z, k, H, I) ->
      G = K(G, K(K(p(F, aa, Z), k), I))
      K L(G, H), F
    t = (G, F, aa, Z, k, H, I) ->
      G = K(G, K(K(n(F, aa, Z), k), I))
      K L(G, H), F
    e = (G) ->
      Z = undefined
      F = G.length
      x = F + 8
      k = (x - (x % 64)) / 64
      I = (k + 1) * 16
      aa = Array(I - 1)
      d = 0
      H = 0
      while H < F
        Z = (H - (H % 4)) / 4
        d = (H % 4) * 8
        aa[Z] = (aa[Z] | (G.charCodeAt(H) << d))
        H++
      Z = (H - (H % 4)) / 4
      d = (H % 4) * 8
      aa[Z] = aa[Z] | (128 << d)
      aa[I - 2] = F << 3
      aa[I - 1] = F >>> 29
      aa
    B = (x) ->
      k = ""
      F = ""
      G = undefined
      d = undefined
      d = 0
      while d <= 3
        G = (x >>> (d * 8)) & 255
        F = "0" + G.toString(16)
        k = k + F.substr(F.length - 2, 2)
        d++
      k
    J = (k) ->
      k = k.replace(/rn/g, "n")
      d = ""
      F = 0

      while F < k.length
        x = k.charCodeAt(F)
        if x < 128
          d += String.fromCharCode(x)
        else
          if (x > 127) and (x < 2048)
            d += String.fromCharCode((x >> 6) | 192)
            d += String.fromCharCode((x & 63) | 128)
          else
            d += String.fromCharCode((x >> 12) | 224)
            d += String.fromCharCode(((x >> 6) & 63) | 128)
            d += String.fromCharCode((x & 63) | 128)
        F++
      d
    C = Array()
    P = undefined
    h = undefined
    E = undefined
    v = undefined
    g = undefined
    Y = undefined
    X = undefined
    W = undefined
    V = undefined
    S = 7
    Q = 12
    N = 17
    M = 22
    A = 5
    z = 9
    y = 14
    w = 20
    o = 4
    m = 11
    l = 16
    j = 23
    U = 6
    T = 10
    R = 15
    O = 21
    s = J(s)
    C = e(s)
    Y = 1732584193
    X = 4023233417
    W = 2562383102
    V = 271733878
    P = 0
    while P < C.length
      h = Y
      E = X
      v = W
      g = V
      Y = u(Y, X, W, V, C[P + 0], S, 3614090360)
      V = u(V, Y, X, W, C[P + 1], Q, 3905402710)
      W = u(W, V, Y, X, C[P + 2], N, 606105819)
      X = u(X, W, V, Y, C[P + 3], M, 3250441966)
      Y = u(Y, X, W, V, C[P + 4], S, 4118548399)
      V = u(V, Y, X, W, C[P + 5], Q, 1200080426)
      W = u(W, V, Y, X, C[P + 6], N, 2821735955)
      X = u(X, W, V, Y, C[P + 7], M, 4249261313)
      Y = u(Y, X, W, V, C[P + 8], S, 1770035416)
      V = u(V, Y, X, W, C[P + 9], Q, 2336552879)
      W = u(W, V, Y, X, C[P + 10], N, 4294925233)
      X = u(X, W, V, Y, C[P + 11], M, 2304563134)
      Y = u(Y, X, W, V, C[P + 12], S, 1804603682)
      V = u(V, Y, X, W, C[P + 13], Q, 4254626195)
      W = u(W, V, Y, X, C[P + 14], N, 2792965006)
      X = u(X, W, V, Y, C[P + 15], M, 1236535329)
      Y = f(Y, X, W, V, C[P + 1], A, 4129170786)
      V = f(V, Y, X, W, C[P + 6], z, 3225465664)
      W = f(W, V, Y, X, C[P + 11], y, 643717713)
      X = f(X, W, V, Y, C[P + 0], w, 3921069994)
      Y = f(Y, X, W, V, C[P + 5], A, 3593408605)
      V = f(V, Y, X, W, C[P + 10], z, 38016083)
      W = f(W, V, Y, X, C[P + 15], y, 3634488961)
      X = f(X, W, V, Y, C[P + 4], w, 3889429448)
      Y = f(Y, X, W, V, C[P + 9], A, 568446438)
      V = f(V, Y, X, W, C[P + 14], z, 3275163606)
      W = f(W, V, Y, X, C[P + 3], y, 4107603335)
      X = f(X, W, V, Y, C[P + 8], w, 1163531501)
      Y = f(Y, X, W, V, C[P + 13], A, 2850285829)
      V = f(V, Y, X, W, C[P + 2], z, 4243563512)
      W = f(W, V, Y, X, C[P + 7], y, 1735328473)
      X = f(X, W, V, Y, C[P + 12], w, 2368359562)
      Y = D(Y, X, W, V, C[P + 5], o, 4294588738)
      V = D(V, Y, X, W, C[P + 8], m, 2272392833)
      W = D(W, V, Y, X, C[P + 11], l, 1839030562)
      X = D(X, W, V, Y, C[P + 14], j, 4259657740)
      Y = D(Y, X, W, V, C[P + 1], o, 2763975236)
      V = D(V, Y, X, W, C[P + 4], m, 1272893353)
      W = D(W, V, Y, X, C[P + 7], l, 4139469664)
      X = D(X, W, V, Y, C[P + 10], j, 3200236656)
      Y = D(Y, X, W, V, C[P + 13], o, 681279174)
      V = D(V, Y, X, W, C[P + 0], m, 3936430074)
      W = D(W, V, Y, X, C[P + 3], l, 3572445317)
      X = D(X, W, V, Y, C[P + 6], j, 76029189)
      Y = D(Y, X, W, V, C[P + 9], o, 3654602809)
      V = D(V, Y, X, W, C[P + 12], m, 3873151461)
      W = D(W, V, Y, X, C[P + 15], l, 530742520)
      X = D(X, W, V, Y, C[P + 2], j, 3299628645)
      Y = t(Y, X, W, V, C[P + 0], U, 4096336452)
      V = t(V, Y, X, W, C[P + 7], T, 1126891415)
      W = t(W, V, Y, X, C[P + 14], R, 2878612391)
      X = t(X, W, V, Y, C[P + 5], O, 4237533241)
      Y = t(Y, X, W, V, C[P + 12], U, 1700485571)
      V = t(V, Y, X, W, C[P + 3], T, 2399980690)
      W = t(W, V, Y, X, C[P + 10], R, 4293915773)
      X = t(X, W, V, Y, C[P + 1], O, 2240044497)
      Y = t(Y, X, W, V, C[P + 8], U, 1873313359)
      V = t(V, Y, X, W, C[P + 15], T, 4264355552)
      W = t(W, V, Y, X, C[P + 6], R, 2734768916)
      X = t(X, W, V, Y, C[P + 13], O, 1309151649)
      Y = t(Y, X, W, V, C[P + 4], U, 4149444226)
      V = t(V, Y, X, W, C[P + 11], T, 3174756917)
      W = t(W, V, Y, X, C[P + 2], R, 718787259)
      X = t(X, W, V, Y, C[P + 9], O, 3951481745)
      Y = K(Y, h)
      X = K(X, E)
      W = K(W, v)
      V = K(V, g)
      P += 16
    i = B(Y) + B(X) + B(W) + B(V)
    i.toLowerCase()

  size = size or 80
  "http://www.gravatar.com/avatar/" + MD5(email) + ".jpg?s=" + size

$src = get_gravatar "ajkochanowicz@gmail.com", 100
if k$.$$('.gravatar').length
  $gravatar.src = $src for $gravatar in k$.$$('.gravatar')

buddySystem = (objs) ->
  for o in objs
    s = String o.innerHTML;(o.innerHTML = s.replace((new RegExp '((?:[^ ]* ){' + ((s.match(/\s/g) || 0).length - 1) + '}[^ ]*) '),"$1&nbsp;")) if s
buddySystem(k$.$$('.bubble'))

# Lazy-loading of subscribe modal
$modalContent = 
"""
<!-- Begin MailChimp Signup Form -->
<div id="mc_embed_signup">
<form action="//vegan.us1.list-manage.com/subscribe/post?u=5c42cc6fde96286c436b918ea&amp;id=2b36a3788c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
  <h1>Get kttty every week</h1>
<div class="mc-field-group">
  <div class="form_group">
    <label for="mce-EMAIL">Email Address </label>
    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
  </div>
</div>
  <div id="mce-responses" class="clear">
    <div class="response" id="mce-error-response" style="display:none"></div>
    <div class="response" id="mce-success-response" style="display:none"></div>
  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;"><input type="text" name="b_5c42cc6fde96286c436b918ea_2b36a3788c" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
"""

$modal = k$.modal('.modal')

ready = ->
  $modal.innerHTML = $modalContent

  for $modalLauncher in k$.$$('.launch-modal')
    do ($modalLauncher, $modal) ->
      $modalLauncher.addEventListener 'click', (e) ->
        $modal.style.display = 'block'
        $modal.style.display = 'block'
        e.stopPropagation()
        $modal.querySelector('input[type="email"]').focus()

if document.readyState != 'loading'
  ready()
else
  document.addEventListener 'DOMContentLoaded', ready
