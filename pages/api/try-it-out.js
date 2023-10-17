const encrypt = require("../../utils/encrypt-decrypt").encrypt; // Replace with the correct path to your AtomAES file
const decrypt = require("../../utils/encrypt-decrypt").decrypt; // Replace with the correct path to your AtomAES file
const axios = require("axios");

module.exports = async (req, res) => {
  const { jsonData, method, host, endpoint } = req.body;
  const merchantId = "317159";
  const encKey = "A4476C2062FFA58980DC8F79EB6A799E";
  const decKey = "75AEF0FA1B94B3C10D4F5B268F757F11";
  const sortedObject = sortObjectAlphabetically(
    JSON.parse(JSON.stringify(jsonData))
  );
  const dataJson = JSON.stringify(sortedObject, null, 2);
  const enc = encrypt(dataJson, encKey, encKey);
  const url = `${host}${endpoint}`; // Replace with your actual URL
  async function httpAPICall(url, merchantId, enc, method) {
    try {
      const data = `merchId=${merchantId}&encData=${enc}`;
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
      const responseData = response.data;
      const searchParams = new URLSearchParams(responseData);
      const decryptData = searchParams.get("encData");
      const dec = decrypt(decryptData, decKey, decKey);
      return dec;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const responseData = await httpAPICall(url, merchantId, enc, method);
  res.status(200).json({
    message: "Success",
    data: responseData,
  });
};

function sortObjectAlphabetically(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => sortObjectAlphabetically(item));
  }
  const sortedKeys = Object.keys(obj).sort();
  const sortedObject = Object.fromEntries(
    sortedKeys.map((key) => [key, sortObjectAlphabetically(obj[key])])
  );
  return sortedObject;
}
