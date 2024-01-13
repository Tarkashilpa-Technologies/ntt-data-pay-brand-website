const encrypt = require("../../utils/encrypt-decrypt").encrypt; // Replace with the correct path to your AtomAES file
const decrypt = require("../../utils/encrypt-decrypt").decrypt; // Replace with the correct path to your AtomAES file
const axios = require("axios");

module.exports = async (req, res) => {
  const { jsonData, method, host, endpoint, encKey, merchId, decKey } =
    req.body;
  const dataJson = JSON.stringify(jsonData);
  const enc = encrypt(dataJson, encKey, encKey);
  const url = `${host}${endpoint}`; // Replace with your actual URL
  async function httpAPICall(url, merchId, enc, method) {
    try {
      const data = `merchId=${merchId}&encData=${enc}`;
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      let response;
      if (method === "post") {
        response = await axios.post(url, data, { headers });
      } else if (method === "get") {
        response = await axios.get(`${url}?${data}`, { headers });
      } else if (method === "put") {
        response = await axios.put(`${url}?${data}`, { headers });
      } else if (method === "delete") {
        response = await axios.delete(`${url}?${data}`, { headers });
      } else {
        throw new Error("Invalid HTTP method");
      }
      const responseData = response?.data;
     
      const searchParams = new URLSearchParams(responseData);
      const decryptData = searchParams?.get("encData");
      const dec = decrypt(decryptData, decKey, decKey);
      console.log(dec,"data decripted")
      return dec;
    } catch (error) {
      return error
    }
  }
  const responseData = await httpAPICall(url, merchId, enc, method);
  res.json({
    message: "Success",
    data: responseData,
  });
};
