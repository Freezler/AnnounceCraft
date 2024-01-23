const shoppingList = Vue.createApp({
    data() {
        return {
            header: "Diving into Vue 3: My Journey into Mastering Frontend Development",
            body: "Exploring Vue 3 for frontend development, integrating Tailwind CSS for visually appealing interfaces, and using Vite for rapid development setup. Excited about potential addition of Nuxt 3.",
            footer: "Venturing into the world of Vue 3, Tailwind CSS, and Vite. Building the future of web experiences.",
            selectedText: "",
            selectedType: "",
            tempContent: { type: "", text: "" } 
        };
    },
    methods: {
        /**
         * Updates the temporary content based on the selected type and text.
         */
        updateTempContent() {
            if (this.selectedText === "") {
                this.selectedType = "";
                alert("Please enter text first");
            } else {
                if (this.selectedType !== undefined) {
                    this.tempContent.type = this.selectedType;
                }
                if (this.selectedText !== undefined) {
                    this.tempContent.text = this.selectedText;
                }
            }
        },

updateText() {
            const { type, text } = this.tempContent;
            this.header = (type === "Header") ? text : this.header;
            this.body = (type === "Body") ? text : this.body;
            this.footer = (type === "Footer") ? text : this.footer;
            this.selectedType = "";
            this.selectedText = "";
        }
    }
}).mount("#shopping-list");

