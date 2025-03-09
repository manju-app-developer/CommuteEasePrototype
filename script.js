document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleMode = document.getElementById("toggle-mode");
    const trafficDisplay = document.querySelector(".traffic-display");
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessage = document.getElementById("send-message");

    // 🌙 Dynamic Dark Mode Toggle with Icon Change
    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        toggleMode.innerHTML = '<i class="fas fa-sun"></i>';
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        toggleMode.innerHTML = '<i class="fas fa-moon"></i>';
    }

    if (localStorage.getItem("dark-mode") === "enabled") enableDarkMode();

    toggleMode.addEventListener("click", () => {
        body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
    });

    // 🚥 Real-Time Traffic Updates with Animation
    function updateTrafficStatus() {
        const statuses = [
            { text: "🟢 Smooth Traffic", color: "#00ff00" },
            { text: "🟡 Moderate Congestion", color: "#ffff00" },
            { text: "🔴 Heavy Traffic", color: "#ff0000" },
            { text: "🚧 Roadblock Detected", color: "#ff4500" }
        ];

        let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        trafficDisplay.innerHTML = `<p style="color:${randomStatus.color}; opacity:0; transition:opacity 1s ease-in-out;">
            ${randomStatus.text} - Updated: ${new Date().toLocaleTimeString()}</p>`;

        setTimeout(() => {
            trafficDisplay.querySelector("p").style.opacity = "1";
        }, 100);
    }

    setInterval(updateTrafficStatus, 5000);
    updateTrafficStatus();

    // 💬 Chatbot Toggle with Smooth Effect
    chatbotToggle.addEventListener("click", () => {
        chatbot.classList.toggle("active");
    });

    // 🤖 AI Chatbot Logic (Improved)
    function chatbotResponse(userMessage) {
        const responses = {
            "hello": "👋 Hi! How can I assist you with traffic updates today?",
            "traffic": "🚦 I provide live traffic updates and AI-powered solutions. Need help with anything specific?",
            "help": "💡 I can provide traffic insights, AI predictions, and answer general queries.",
            "roadblock": "⚠️ Roadblocks are detected using real-time AI analysis. Please check the traffic status above."
        };

        return responses[userMessage.toLowerCase()] || "🤖 I'm still learning! Try asking about traffic, roadblocks, or AI assistance.";
    }

    sendMessage.addEventListener("click", () => {
        let userMessage = userInput.value.trim();
        if (userMessage !== "") {
            let userBubble = document.createElement("div");
            userBubble.classList.add("user-message");
            userBubble.textContent = "👤 " + userMessage;
            chatbox.appendChild(userBubble);

            let botBubble = document.createElement("div");
            botBubble.classList.add("bot-message");
            botBubble.textContent = "🤖 Typing...";
            chatbox.appendChild(botBubble);

            setTimeout(() => {
                botBubble.textContent = chatbotResponse(userMessage);
                chatbox.scrollTop = chatbox.scrollHeight;
            }, 1000);

            userInput.value = "";
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

    // 🎙️ AI Voice Assistant for Traffic Updates
    function speak(text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    }

    let voiceEnabled = true; // Toggle voice updates

    setInterval(() => {
        if (voiceEnabled) {
            let currentStatus = document.querySelector(".traffic-display p").textContent;
            speak(currentStatus);
        }
    }, 20000); // Speaks every 20 seconds

    // 🎤 Toggle Voice Updates with Click
    toggleMode.addEventListener("dblclick", () => {
        voiceEnabled = !voiceEnabled;
        alert(voiceEnabled ? "🎙️ Voice Updates Enabled" : "🔇 Voice Updates Disabled");
    });
});
