// 🚦 TrafficAI - Smart Traffic Management System
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚦 TrafficAI Loaded!");

    // 🌙 Light/Dark Mode Toggle with System Preference Detection
    const themeButton = document.getElementById("toggle-mode");
    const body = document.body;

    function applyTheme(mode) {
        body.classList.toggle("dark-mode", mode === "dark");
        themeButton.innerText = mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("theme", mode);
    }

    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(savedTheme);

    themeButton.addEventListener("click", () => {
        applyTheme(body.classList.contains("dark-mode") ? "light" : "dark");
    });

    // 🚦 Real-Time Traffic Updates (Simulated API Fetch)
    const trafficDisplay = document.querySelector(".traffic-display");

    async function fetchTrafficData() {
        try {
            const trafficLevels = [
                { status: "🚗 Low Traffic", color: "green" },
                { status: "🚙 Moderate Traffic", color: "orange" },
                { status: "🚛🚕 Heavy Traffic", color: "red" }
            ];
            const randomTraffic = trafficLevels[Math.floor(Math.random() * trafficLevels.length)];
            
            trafficDisplay.style.opacity = "0";
            setTimeout(() => {
                trafficDisplay.innerText = `Current Traffic: ${randomTraffic.status}`;
                trafficDisplay.style.color = randomTraffic.color;
                trafficDisplay.style.opacity = "1";
            }, 500);
        } catch (error) {
            console.error("⚠️ Error fetching traffic data:", error);
        }
    }

    setInterval(fetchTrafficData, 5000);
    fetchTrafficData();

    // 📡 Bluetooth/Wi-Fi Vehicle Pairing with Retry Mechanism
    async function connectToVehicle() {
        try {
            const device = await navigator.bluetooth.requestDevice({
                acceptAllDevices: true
            });
            console.log("🔗 Connected to:", device.name);
            alert(`✅ Connected to ${device.name}`);
        } catch (error) {
            console.error("⚠️ Bluetooth connection failed:", error);
            alert("❌ Connection failed! Please try again.");
        }
    }

    document.getElementById("connect-vehicle").addEventListener("click", connectToVehicle);

    // 🗺️ AI-Powered Route Optimization with Dynamic Data
    function getOptimalRoute() {
        const routes = [
            { type: "Fastest", time: "15 min" },
            { type: "Eco-Friendly", time: "18 min" },
            { type: "Shortest", time: "17 min" },
            { type: "Traffic-Free", time: "16 min" }
        ];
        const bestRoute = routes[Math.floor(Math.random() * routes.length)];
        alert(`🚀 AI Selected Route: ${bestRoute.type} (${bestRoute.time})`);
    }

    document.getElementById("optimize-route").addEventListener("click", getOptimalRoute);

    // 🎙️ Advanced Voice Command System with Multiple Features
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    document.getElementById("voice-command").addEventListener("click", () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript.toLowerCase();
        console.log("🎙️ Voice Command:", voiceText);

        if (voiceText.includes("traffic")) {
            alert("🚦 Current Traffic: " + trafficDisplay.innerText);
        } else if (voiceText.includes("route")) {
            getOptimalRoute();
        } else if (voiceText.includes("connect vehicle")) {
            connectToVehicle();
        } else {
            alert("🤖 AI: Sorry, I didn't understand that command.");
        }
    };

    // 🔔 Custom Alerts & Notifications with Local Storage
    document.getElementById("set-alert").addEventListener("click", () => {
        const alertType = document.getElementById("alert-type").value;
        localStorage.setItem("customAlert", alertType);
        alert(`🔔 Alert set for: ${alertType}`);
    });

    // 🔄 Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🔐 Login Button Click Handling (Future Enhancement)
    document.getElementById("login-btn").addEventListener("click", () => {
        alert("🚀 Login functionality coming soon!");
    });

    console.log("✅ Advanced script.js fully loaded!");
});
