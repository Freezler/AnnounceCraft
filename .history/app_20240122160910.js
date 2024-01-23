const Html to Pd = Vue.createApp({
    /**
     * Returns an object with header, body, footer, selectedText, selectedType, and tempContent properties.
     *
     * @return {Object} The object containing header, body, footer, selectedText, selectedType, and tempContent properties.
     */
    data() {
        return {
            header: "Welcome to ",
            body: "Exploring Vue 3 with cdnjs.com for frontend development with regular HTML, CSS, and JavaScript. Excited about potential addition of tailwind  Vite and Nuxt 3.",
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

        /**
         * Updates the header, body, and footer based on the type and text from this.tempContent.
         */
        updateText() {
            const { type, text } = this.tempContent;
            if (type === "Header") {
                this.header = text;
            }
            if (type === "Body") {
                this.body = text;
            }
            if (type === "Footer") {
                this.footer = text;
            }
            this.selectedType = "";
            this.selectedText = "";
        }
    }
}).mount("#shopping-list");

