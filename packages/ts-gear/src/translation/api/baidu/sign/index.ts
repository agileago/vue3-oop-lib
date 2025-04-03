import getSeed from './seed'
import sign from './sign'

/**
 * 获取查询百度网页翻译接口所需的 token 和 sign
 * @param text 要查询的文本
 */
export default async function getSign(text: string) {
  const { seed, token } = await getSeed()
  return {
    token,
    sign: sign(text, seed),
  }
}
