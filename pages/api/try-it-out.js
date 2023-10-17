var crypto = require("crypto");
const req_enc_key = "58BE879B7DD635698764745511C704AB";
const req_salt = "7813E3E5E93548B096675AC27FE2C850";
const res_dec_key = "7813E3E5E93548B096675AC27FE2C850";
const res_salt = "7813E3E5E93548B096675AC27FE2C850";
const merchId = "9135";
const algorithm = "aes-256-cbc";
const iv = Buffer.from(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  "utf8"
);

const password = Buffer.from(req_enc_key, "utf8");
const salt = Buffer.from(req_salt, "utf8");
const respassword = Buffer.from(res_dec_key, "utf8");
const ressalt = Buffer.from(res_salt, "utf8");

const encrypt = (text) => {
  var derivedKey = crypto.pbkdf2Sync(password, salt, 65536, 32, "sha512");
  const cipher = crypto.createCipheriv(algorithm, derivedKey, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${encrypted.toString("hex")}`;
};

const decrypt = (text) => {
  const encryptedText = Buffer.from(text, "hex");
  var derivedKey = crypto.pbkdf2Sync(respassword, ressalt, 65536, 32, "sha512");
  const decipher = crypto.createDecipheriv(algorithm, derivedKey, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

export default async (req, res) => {
  const { jsonData, method, host, endpoint } = req.body;
  console.log(jsonData, method, host, endpoint);
  const JSONString = jsonData;
  const encDataR = encrypt(JSONString);
  console.log("Encrypted Data", encDataR);
  const Authurl = `https://caller.atomtech.in/ots/payment/status?merchId=${merchId}&encData=${encDataR}`;
  console.log(Authurl);
  const response = await fetch(Authurl, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.text();
  // Process and respond to the data as needed
  console.log(data);
  const searchParams = new URLSearchParams(data);
  const decryptData = searchParams.get("encData");
  const finalResponse = decrypt(decryptData.toString());
  res.status(200).json({
    message: "Data sent to Authurl for encryption.",
    data: finalResponse,
  });
};
