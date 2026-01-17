const axios = require('axios');

async function checkApi() {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/gun');
        console.log("API Status:", response.status);
        if (response.data.about_text) {
            console.log("success: about_text found in API response.");
            console.log("Content:", response.data.about_text.substring(0, 50) + "...");
        } else {
            console.log("failure: about_text MISSING in API response.");
            console.log("Available keys:", Object.keys(response.data));
        }
    } catch (error) {
        console.error("API Call failed:", error.message);
    }
}

checkApi();
