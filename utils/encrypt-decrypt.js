const crypto = require("crypto");

function encrypt(data, key, salt) {
  if (key && data && salt) {
    const method = "aes-256-cbc";
    const iv = Buffer.from([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    const saltBuffer = Buffer.from(salt, "utf8");
    const keyBuffer = Buffer.from(key, "utf8");
    const hash = crypto.pbkdf2Sync(keyBuffer, saltBuffer, 65536, 32, "sha512");
    const cipher = crypto.createCipheriv(method, hash, iv);
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  } else {
    return "String to encrypt, Salt, and Key is required.";
  }
}

function decrypt(data, key, salt) {
  if (key && data && salt) {
    const method = "aes-256-cbc";
    const iv = Buffer.from([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    const saltBuffer = Buffer.from(salt, "utf8");
    const keyBuffer = Buffer.from(key, "utf8");
    const hash = crypto.pbkdf2Sync(keyBuffer, saltBuffer, 65536, 32, "sha512");
    const dataEncrypted = Buffer.from(data, "hex");
    const decipher = crypto.createDecipheriv(method, hash, iv);
    let decrypted = decipher.update(dataEncrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } else {
    return "Encrypted String to decrypt, Salt, and Key is required.";
  }
}

module.exports = {
  encrypt,
  decrypt,
};
