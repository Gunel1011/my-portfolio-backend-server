const User = require("../models/User");

const seedDatabase = async () => {
  try {
    const defaultData = {
      email: "gunelmm10@gmail.com",
      password: "gun123",
      full_name: "Gunel Mammadova",
      bio: "Hi I,m Gunel",
      about_text: `I am a Frontend Developer with a deep interest in both the visual aesthetics and the technical architecture of websites. My core mission is to build user-friendly, fast, and highly interactive interfaces that provide seamless digital experiences.

In every project, I focus on writing clean, maintainable code and implementing modern technologies. By blending my creative mindset with technical expertise, I transform complex ideas into memorable and engaging web solutions🍪

Just like the perfect cookie, a great website needs the right ingredients a dash of creativity, a spoonful of clean code, and a whole lot of heart.🍪`,
      profile_image: `uploads/me.jpg`,
      contact: {
        email: "gunelmm10@gmail.com",
        phone: "+994 51 995 72 62",
        address: "Bakı, Azərbaycan",
        social_links: {
          github: "https://github.com/Gunel1011",
          linkedin: "https://www.linkedin.com/in/gunel-mammadova10",
        },
      },
      skills: {
        languages: ["JavaScript (ES6+)", "TypeScript"],
        frontend: [
          "React",
          "HTML5",
          "CSS3",
          "Sass/SCSS",
          "Tailwind CSS",
          "Responsive Design"
        ],
        stateManagement: ["Redux Toolkit", "Context API"],
        animation: ["GSAP", "Framer Motion",],
        libraries: [
          "React Router Dom",
          "Swiper.js",
          "Email.js",
          "React Toastify",
          "React International Phone",
          "Axios",
        ],
        tools: [
          "Git",
          "GitHub",
          "Vite",
          "NPM/Yarn",
          "Vercel",
        ]
      },
      projects: [
        {
          title: "Avo Clone",
          description: "",
          image_url: `uploads/avo.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        },
        {
          title: "Caviar Clone",
          description: "",
          image_url: `uploads/caviar.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        },
        {
          title: "Clark Clone",
          description: "",
          image_url: `uploads/clark.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        }, {
          title: "Jazean Clone",
          description:
            "",
          image_url: `uploads/jazean.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        }, {
          title: "Oneder Clone",
          description:
            "",
          image_url: `uploads/oneder.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        },
        {
          title: "Passport Clone",
          description:
            "",
          image_url: `uploads/passport.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        },
        {
          title: "Ronaldo Clone",
          description:
            "",
          image_url: `uploads/ronaldo.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        },
        {
          title: "World-telecom Clone",
          description:
            "",
          image_url: `uploads/world-telecom.png`,
          live_url: "http://misal-sayt.com",
          github_url: "https://github.com",
        },
      ],

    };

    // İstifadəçini email-ə görə tap və yenilə, yoxdursa yarat (upsert: true)
    await User.findOneAndUpdate(
      { email: "gunelmm10@gmail.com" },
      defaultData,
      { new: true, upsert: true }
    );

    console.log(
      "✅ Məlumatlar yoxlanıldı/yeniləndi. (Email: gunelmm10@gmail.com)"
    );

  } catch (error) {
    console.error("❌ Seed xətası:", error);
  }
};

module.exports = seedDatabase;
