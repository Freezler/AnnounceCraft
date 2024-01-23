const PaperAnnouncement = Vue.createApp({
    /**
     * Returns an object with header, body, footer, selectedText, selectedType, and tempContent properties.
     *
     * @return {Object} The object containing header, body, footer, selectedText, selectedType, and tempContent properties.
     */
    data() {
        return {
            header: "Welcome to Paper Announcement App",
            body: "Introducing [Your App Name], the ultimate solution for crafting polished last-minute announcements effortlessly and efficiently. Designed with simplicity in mind, our app empowers you to deliver professional messages with ease, ensuring you make a lasting impression even when time is of the essence.",
            footer: "p.s. tell me what you think",
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

