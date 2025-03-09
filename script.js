document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleMode = document.getElementById("toggle-mode");
    const trafficDisplay = document.querySelector(".traffic-display");
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessage = document.getElementById("send-message");

    // 🌙 Dark Mode
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

    // 🚦 Live Traffic Updates
    function updateTrafficStatus() {
        const statuses = [
            { text: "🟢 Smooth Traffic", color: "#00ff00" },
            { text: "🟡 Moderate Congestion", color: "#ffff00" },
            { text: "🔴 Heavy Traffic", color: "#ff0000" }
        ];
        let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        trafficDisplay.innerHTML = `<p style="color:${randomStatus.color}">${randomStatus.text}</p>`;
    }

    setInterval(updateTrafficStatus, 5000);
    updateTrafficStatus();

    // 💬 Chatbot
    chatbotToggle.addEventListener("click", () => {
        chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
    });

    function chatbotResponse(userMessage) {
        return userMessage.toLowerCase() === "hello" ? "Hi there! How can I assist you?" : "I'm still learning!";
    }

    sendMessage.addEventListener("click", () => {
        let userMessage = userInput.value.trim();
        if (userMessage !== "") {
            chatbox.innerHTML += `<div>👤 ${userMessage}</div>`;
            setTimeout(() => {
                chatbox.innerHTML += `<div>🤖 ${chatbotResponse(userMessage)}</div>`;
            }, 1000);
            userInput.value = "";
        }
    });
});
