import fetch from "node-fetch";

export default async function handler(req, res) {
  const { recaptchaToken } = req.body;

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=6LdUeFgoAAAAABIx7IU77bva7YC0wokxADrn8hP7&response=${recaptchaToken}`,
    }
  );

  const data = await response.json();

  if (data.success) {
    // CAPTCHA verification successful, proceed with form submission.
    res.status(200).json({ success: true });
  } else {
    // CAPTCHA verification failed.
    res
      .status(400)
      .json({ success: false, message: "CAPTCHA verification failed" });
  }
}
