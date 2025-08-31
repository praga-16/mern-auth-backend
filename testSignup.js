const axios = require("axios");

async function testLogin() {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email: "vstest@example.com",   // use same email you signed up
      password: "123456"
    });
    console.log("✅ Success:", res.data);
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
}

testLogin();
