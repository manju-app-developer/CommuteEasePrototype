// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");

    // 🌙 Light/Dark Mode Toggle
    const themeButton = document.getElementById("theme-btn");
    const body = document.body;

    // Check saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    themeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        // Save theme preference
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // 🧠 AI Chatbot Functionality
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.getElementById("chatbot");
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessageButton = document.getElementById("send-message");

    chatbotToggle.addEventListener("click", () => {
        chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
    });

    // Function to append messages
    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        msgDiv.innerText = message;
        chatbox.appendChild(msgDiv);
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to latest message
    }

    sendMessageButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        appendMessage("user", userMessage);
        userInput.value = "";

        // Simulate AI chatbot response
        setTimeout(() => {
            appendMessage("bot", "🤖 AI is thinking...");
            setTimeout(() => {
                const botReply = `I received: "${userMessage}" 😊`;
                chatbox.lastChild.innerText = botReply;
            }, 1000);
        }, 500);
    });

    // Enter key to send message
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessageButton.click();
    });

    // 🚦 Simulated Traffic Updates
    const trafficDisplay = document.getElementById("traffic-display");
    const trafficLevels = ["Low Traffic 🚗", "Moderate Traffic 🚙", "Heavy Traffic 🚛🚕"];
    let trafficIndex = 0;

    function updateTraffic() {
        trafficDisplay.innerText = `Current Traffic: ${trafficLevels[trafficIndex]}`;
        trafficIndex = (trafficIndex + 1) % trafficLevels.length;
    }

    setInterval(updateTraffic, 5000); // Update every 5 seconds
    updateTraffic(); // Initial update

    // 🔥 Smooth Scroll for Better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
