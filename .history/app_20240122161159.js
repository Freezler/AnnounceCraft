const PaperAnnouncement = Vue.createApp({
    /**
     * Returns an object with header, body, footer, selectedText, selectedType, and tempContent properties.
     *
     * @return {Object} The object containing header, body, footer, selectedText, selectedType, and tempContent properties.
     */
    data() {
        return {
            header: "Welcome to Paper Announcement App",
            body: "With this App I aim to make it simple and easy for you to write your dapaper.ily ",
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

