const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    full_name: String,
    bio: String,
    about_text: String,
    profile_image: String,
    contact: {
        email: String,
        phone: String,
        address: String,
        social_links: {
            github: String,
            linkedin: String
        }
    },
    skills: {
        languages: [String],
        frontend: [String],
        stateManagement: [String],
        animation: [String],
        libraries: [String],
        tools: [String]
    },
    projects: [{
        id: String,
        title: String,
        description: String,
        image_url: String,
        technologies: [String],
        live_url: String,
        github_url: String
    }],
    experience: [{
        company: String,
        position: String,
        duration: String
    }]
});

module.exports = mongoose.model('User', UserSchema);
