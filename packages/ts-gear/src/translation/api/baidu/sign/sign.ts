// tslint:disable
let C: any = null

/**
 * 从百度网页翻译中复制过来的计算签名的代码
 * @param text 要查询的文本
 * @param seed 从 ./seed.ts 获取到的 seed
 */
export default function (text: string, seed: string) {
  const o = text.length
  o > 30 && (text = '' + text.substr(0, 10) + text.substr(Math.floor(o / 2) - 5, 10) + text.substr(-10, 10))
  const t = C !== null ? C : (C = seed || '') || ''
  for (var e = t.split('.'), h = Number(e[0]) || 0, i = Number(e[1]) || 0, d = [], f = 0, g = 0; g < text.length; g++) {
    let m = text.charCodeAt(g)
    m < 128
      ? (d[f++] = m)
      : (m < 2048
          ? (d[f++] = (m >> 6) | 192)
          : ((64512 & m) === 55296 && g + 1 < text.length && (64512 & text.charCodeAt(g + 1)) === 56320
              ? ((m = 65536 + ((1023 & m) << 10) + (1023 & text.charCodeAt(++g))),
                (d[f++] = (m >> 18) | 240),
                (d[f++] = ((m >> 12) & 63) | 128))
              : (d[f++] = (m >> 12) | 224),
            (d[f++] = ((m >> 6) & 63) | 128)),
        (d[f++] = (63 & m) | 128))
  }
  for (var S = h, u = '+-a^+6', l = '+-3^+b+-f', s = 0; s < d.length; s++) {
    ;(S += d[s]), (S = a(S, u))
  }
  return (S = a(S, l)), (S ^= i), S < 0 && (S = (2147483647 & S) + 2147483648), (S %= 1e6), S.toString() + '.' + (S ^ h)
}

function a(r: any, o: any) {
  for (let t = 0; t < o.length - 2; t += 3) {
    let a = o.charAt(t + 2)
    ;(a = a >= 'a' ? a.charCodeAt(0) - 87 : Number(a)),
      (a = o.charAt(t + 1) === '+' ? r >>> a : r << a),
      (r = o.charAt(t) === '+' ? (r + a) & 4294967295 : r ^ a)
  }
  return r
}
