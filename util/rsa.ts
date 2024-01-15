import JSEncrypt from "jsencrypt";

export const RSA = () => {

  const encryptMessage = async (message: string, publicKey: string) => {
    const jsEncrypt = new JSEncrypt()
    jsEncrypt.setPublicKey(publicKey);
    const result = jsEncrypt.encrypt(message);
    return result;
  }

  const encryptObject = async (obj: any, publicKey: string) => {
    let result: any = {}
    for (const key in obj) {
      result[key] = await encryptMessage(obj[key], publicKey)
    }
    return result
  }

  return {
    encryptMessage, encryptObject
  }
}
