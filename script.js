document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleMode = document.getElementById("toggle-mode");
    const trafficDisplay = document.querySelector(".traffic-display");
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbot = document.querySelector(".chatbot");

    // 🌙 Dark Mode Toggle
    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        toggleMode.textContent = "☀️ Light Mode";
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        toggleMode.textContent = "🌙 Dark Mode";
    }

    if (localStorage.getItem("dark-mode") === "enabled") enableDarkMode();

    toggleMode.addEventListener("click", () => {
        body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
    });

    // 🚥 Live Traffic Updates
    function updateTrafficStatus() {
        const statuses = [
            { text: "🟢 Smooth Traffic", color: "#00ff00" },
            { text: "🟡 Moderate Congestion", color: "#ffff00" },
            { text: "🔴 Heavy Traffic", color: "#ff0000" },
            { text: "🚧 Roadblock Detected", color: "#ff4500" }
        ];

        trafficDisplay.innerHTML = "";
        let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        let trafficBox = document.createElement("p");
        trafficBox.textContent = `${randomStatus.text} - Updated: ${new Date().toLocaleTimeString()}`;
        trafficBox.style.color = randomStatus.color;
        trafficDisplay.appendChild(trafficBox);
    }

    setInterval(updateTrafficStatus, 5000);
    updateTrafficStatus();

    // 💬 Chatbot Toggle
    chatbotToggle.addEventListener("click", () => {
        chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
    });

    // ✨ Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
