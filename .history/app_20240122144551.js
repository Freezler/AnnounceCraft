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
            this.selectedText === ""
                ? (alert("Please enter text first"), (this.selectedType = ""))
                : (this.selectedType !== undefined && (this.tempContent.type = this.selectedType),
                    this.selectedText !== undefined && (this.tempContent.text = this.selectedText));
        },

        // Update the text content based on the type of content
        updateText() {
            const { type, text } = this.tempContent;
            this.header = type === "Header" ? text : this.header;
            this.body = type === "Body" ? text : this.body;
            this.footer = type === "Footer" ? text : this.footer;
            this.selectedType = "";
            this.selectedText = "";
        }
    }
}).mount("#shopping-list");

