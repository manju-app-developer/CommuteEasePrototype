// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚦 TrafficAI Loaded!");

    // 🌙 Light/Dark Mode Toggle
    const themeButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Check saved theme from localStorage
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

    // 🚦 Enhanced Traffic Updates with Animation
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

    // 🧠 Smart AI Chatbot
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbotContainer = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessageButton = document.getElementById("send-message");
    const closeChatButton = document.querySelector(".close-chat");

    chatbotToggle.addEventListener("click", () => {
        chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
    });

    closeChatButton.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
    });

    const chatbotResponses = {
        "hello": "Hi there! How can I help you today? 😊",
        "traffic": "I can provide traffic updates for your area! 🚦",
        "weather": "Sorry, I don't have live weather updates yet! ☀️",
        "bye": "Goodbye! Have a great day! 👋",
        "default": "I'm still learning! Try asking something else. 🤖"
    };

    function getChatbotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();
        return chatbotResponses[userMessage] || chatbotResponses["default"];
    }

    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        msgDiv.innerText = message;
        chatbox.appendChild(msgDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    sendMessageButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        appendMessage("user", userMessage);
        userInput.value = "";

        setTimeout(() => {
            appendMessage("bot", "🤖 AI is thinking...");
            setTimeout(() => {
                const botReply = getChatbotResponse(userMessage);
                chatbox.lastChild.innerText = botReply;
            }, 1000);
        }, 500);
    });

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessageButton.click();
    });

    // 🔥 Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🔐 Login Button Click Handling
    const loginButton = document.getElementById("login-btn");
    loginButton.addEventListener("click", () => {
        alert("🚀 Login functionality coming soon!");
    });

    console.log("✅ Advanced script.js fully loaded!");
});
