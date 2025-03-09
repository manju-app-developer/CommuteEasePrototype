// 🚦 TrafficAI - Smart Traffic Management System
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚦 TrafficAI Loaded!");

    // 🌙 Light/Dark Mode Toggle
    const themeButton = document.getElementById("toggle-mode");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeButton.innerText = "☀️ Light Mode";
    }

    themeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        themeButton.innerText = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // 🚦 Real-Time Traffic Updates
    const trafficDisplay = document.querySelector(".traffic-display");
    const trafficLevels = [
        { status: "🚗 Low Traffic", color: "green" },
        { status: "🚙 Moderate Traffic", color: "orange" },
        { status: "🚛🚕 Heavy Traffic", color: "red" }
    ];
    let trafficIndex = 0;

    function updateTraffic() {
        trafficDisplay.style.opacity = "0";
        setTimeout(() => {
            trafficDisplay.innerText = `Current Traffic: ${trafficLevels[trafficIndex].status}`;
            trafficDisplay.style.color = trafficLevels[trafficIndex].color;
            trafficDisplay.style.opacity = "1";
            trafficIndex = (trafficIndex + 1) % trafficLevels.length;
        }, 500);
    }

    setInterval(updateTraffic, 5000);
    updateTraffic();

    // 📡 Bluetooth/Wi-Fi Vehicle Pairing
    async function connectToVehicle() {
        try {
            const device = await navigator.bluetooth.requestDevice({
                acceptAllDevices: true
            });
            console.log("🔗 Connected to:", device.name);
            alert(`✅ Connected to ${device.name}`);
        } catch (error) {
            console.error("⚠️ Bluetooth connection failed:", error);
        }
    }

    document.getElementById("connect-vehicle").addEventListener("click", connectToVehicle);

    // 🗺️ AI-Powered Route Optimization
    function getOptimalRoute() {
        const routes = [
            { type: "Fastest", time: "15 min" },
            { type: "Eco-Friendly", time: "18 min" },
            { type: "Shortest", time: "17 min" }
        ];
        const bestRoute = routes[Math.floor(Math.random() * routes.length)];
        alert(`🚀 AI Selected Route: ${bestRoute.type} (${bestRoute.time})`);
    }

    document.getElementById("optimize-route").addEventListener("click", getOptimalRoute);

    // 🎙️ Voice Command System
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    document.getElementById("voice-command").addEventListener("click", () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript.toLowerCase();
        console.log("🎙️ Voice Command:", voiceText);
        
        if (voiceText.includes("traffic")) {
            alert("🚦 Current Traffic: " + trafficLevels[trafficIndex].status);
        } else if (voiceText.includes("route")) {
            getOptimalRoute();
        } else {
            alert("🤖 AI: Sorry, I didn't understand.");
        }
    };

    // 🔔 Custom Alerts & Notifications
    document.getElementById("set-alert").addEventListener("click", () => {
        const alertType = document.getElementById("alert-type").value;
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

    // 🔐 Login Button Click Handling
    document.getElementById("login-btn").addEventListener("click", () => {
        alert("🚀 Login functionality coming soon!");
    });

    console.log("✅ Advanced script.js fully loaded!");
});
