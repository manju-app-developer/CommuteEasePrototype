// 🚀 Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚦 TrafficAI Fully Loaded!");

    // 🌙 Light/Dark Mode Toggle with Smooth Transition
    const themeButton = document.getElementById("toggle-mode");
    const body = document.body;

    function applyTheme(theme) {
        body.classList.toggle("dark-mode", theme === "dark");
        themeButton.innerText = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    themeButton.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });

    // 🚦 Dynamic Traffic Updates with Smooth Transitions
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

    // 🧠 Smart AI Chatbot with Enhanced Features
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbotContainer = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessageButton = document.getElementById("send-message");
    const voiceInputButton = document.getElementById("voice-input");
    const closeChatButton = document.querySelector(".close-chat");

    chatbotToggle.addEventListener("click", () => {
        chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
    });

    closeChatButton.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
    });

    const chatbotResponses = {
        "hello": "Hi there! How can I assist you today? 😊",
        "traffic": "I can provide real-time traffic updates for your area! 🚦",
        "weather": "Currently, I don't have live weather updates! ☀️",
        "bye": "Goodbye! Have a great day! 👋",
        "dark mode": "You can toggle dark mode using the ☀️/🌙 button above!",
        "default": "I'm still learning! Try asking something else. 🤖"
    };

    function getChatbotResponse(userMessage) {
        return chatbotResponses[userMessage.toLowerCase()] || chatbotResponses["default"];
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
                chatbox.lastChild.innerText = getChatbotResponse(userMessage);
            }, 1000);
        }, 500);
    });

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessageButton.click();
    });

    // 🎙️ Voice Input for Chatbot
    voiceInputButton.addEventListener("click", () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = (event) => {
            const userMessage = event.results[0][0].transcript;
            userInput.value = userMessage;
            sendMessageButton.click();
        };
    });

    // 🔥 Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🔐 Login Button Click Handling with Modal
    const loginButton = document.getElementById("login-btn");
    const loginModal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-modal");

    loginButton.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    console.log("✅ Fully Enhanced script.js Loaded Successfully!");
});
