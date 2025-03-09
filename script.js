document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleMode = document.getElementById("toggle-mode");
    const trafficDisplay = document.querySelector(".traffic-display");
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessage = document.getElementById("send-message");

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

    // 🚥 Live Traffic Updates with Smooth Animation
    function updateTrafficStatus() {
        const statuses = [
            { text: "🟢 Smooth Traffic", color: "#00ff00" },
            { text: "🟡 Moderate Congestion", color: "#ffff00" },
            { text: "🔴 Heavy Traffic", color: "#ff0000" },
            { text: "🚧 Roadblock Detected", color: "#ff4500" }
        ];

        let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        let trafficBox = document.createElement("p");
        trafficBox.textContent = `${randomStatus.text} - Updated: ${new Date().toLocaleTimeString()}`;
        trafficBox.style.color = randomStatus.color;
        trafficBox.style.opacity = "0";
        trafficBox.style.transition = "opacity 1s ease-in-out";

        trafficDisplay.innerHTML = "";
        trafficDisplay.appendChild(trafficBox);

        setTimeout(() => {
            trafficBox.style.opacity = "1";
        }, 100);
    }

    setInterval(updateTrafficStatus, 5000);
    updateTrafficStatus();

    // 💬 Chatbot Toggle with Smooth Effect
    chatbotToggle.addEventListener("click", () => {
        chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
        chatbot.style.opacity = "0";
        setTimeout(() => {
            chatbot.style.opacity = "1";
        }, 200);
    });

    // 🤖 AI Chatbot Logic (Basic)
    function chatbotResponse(userMessage) {
        const responses = {
            "hello": "Hi there! How can I assist you with traffic updates?",
            "traffic": "I provide real-time traffic updates. Stay safe on the road!",
            "help": "I'm here to help. Ask me about traffic, dark mode, or chatbot features!"
        };

        return responses[userMessage.toLowerCase()] || "I'm still learning! Try asking about traffic updates.";
    }

    sendMessage.addEventListener("click", () => {
        let userMessage = userInput.value.trim();
        if (userMessage !== "") {
            let userBubble = document.createElement("div");
            userBubble.textContent = "👤 " + userMessage;
            userBubble.style.color = "#00d4ff";
            chatbox.appendChild(userBubble);

            let botBubble = document.createElement("div");
            botBubble.textContent = "🤖 Typing...";
            botBubble.style.color = "#00ff00";
            chatbox.appendChild(botBubble);

            setTimeout(() => {
                botBubble.textContent = "🤖 " + chatbotResponse(userMessage);
            }, 1000);

            userInput.value = "";
            chatbox.scrollTop = chatbox.scrollHeight;
        }
    });

    // ✨ Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🎙️ Voice Assistant for Traffic Updates (Optional)
    function speak(text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    }

    setInterval(() => {
        let currentStatus = document.querySelector(".traffic-display p").textContent;
        speak(currentStatus);
    }, 20000); // Speaks every 20 seconds
});
