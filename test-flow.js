const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Settings
const API_URL = 'http://127.0.0.1:8000/api/v1';
const ADMIN_EMAIL = 'admin@mail.com';
const ADMIN_PASS = '123';

async function runDemo() {
    try {
        console.log("🔵 1. Daxil olunur (Login)...");
        const loginRes = await axios.post(`${API_URL}/login`, {
            email: ADMIN_EMAIL,
            password: ADMIN_PASS
        });
        const token = loginRes.data.access_token; // "Bearer ..."
        console.log("✅ Login uğurlu. Token alındı.");

        console.log("\n🔵 2. Şəkil yüklənir (Upload)...");
        // Create a dummy image file if not exists
        const dummyPath = 'test-image.txt';
        fs.writeFileSync(dummyPath, 'Bu bir sekil test faylidir.');

        const form = new FormData();
        form.append('file', fs.createReadStream(dummyPath));

        const uploadRes = await axios.post(`${API_URL}/upload`, form, {
            headers: {
                ...form.getHeaders(),
                'token': token // Server expects 'token' header
            }
        });
        const imageUrl = uploadRes.data.url;
        console.log("✅ Şəkil yükləndi. URL:", imageUrl);

        console.log("\n🔵 3. MongoDB yenilənir (Update DB)...");
        const updateRes = await axios.put(`${API_URL}/gun`, {
            profile_image: imageUrl,
            bio: "Yeni yüklənən şəkil ilə yenilənmiş bio!"
        }, {
            headers: { 'token': token }
        });
        console.log("✅ Məlumat yeniləndi:", updateRes.data);

        console.log("\n🎉 Proses tamamlandı! Şəkil URL-i bazaya yazıldı.");

        // Cleanup
        fs.unlinkSync(dummyPath);
    } catch (error) {
        console.error("❌ Xəta baş verdi:", error.response ? error.response.data : error.message);
    }
}

runDemo();
