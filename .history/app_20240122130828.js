const shoppingList = Vue.createApp({
    data() {
        return {
            header: "Diving into Vue 3: My Journey into Mastering Frontend Development with a Powerful Framework",
            body: "As I embark on my journey with Vue 3, I'm excited to explore the world of frontend development. The seamless integration of Tailwind CSS has allowed me to experiment with crafting visually appealing user interfaces from the get-go. With Vite, the rapid development setup has made the learning process smoother and more engaging. As I take my first steps in mastering Vue 3, I look forward to the potential addition of Nuxt 3, knowing that it will further enhance my skills and open up new possibilities in building dynamic web applications. It's just the beginning, and I'm thrilled to dive deeper into the world of frontend development.",
            footer: "Venturing into the world of Vue 3, Tailwind CSS, and Vite. Building the future of web experiences, one line of code at a time.",
            selectedText: "",
            selectedType: "", // Set initial value to ''
            tempContent: { type: "", text: "" } // Temporary object to store selected type and text
        };
    },
    methods: {
        updateTempContent() {
            if (this.selectedText === "") {
                alert("Please enter text first");
            } else {
                this.tempContent.type = this.selectedType;
                this.tempContent.text = this.selectedText;
            }
        },
        updateText() {
            const { type, text } = this.tempContent;
            if (type === "Header") {
                this.header = text;
            } else if (type === "Body") {
                this.body = text;
            } else if (type === "Footer") {
                this.footer = text;
            }
            this.selectedType = "";
            this.selectedText = "";
        },
        updateSelectedType(type) {
            this.selectedType = type;
        },
        updateSelectedText(text) {
            this.selectedText = text;
        }
    }
}).mount("#shopping-list");