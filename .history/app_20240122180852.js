const PaperAnnouncement = Vue.createApp({
    /**
     * Returns an object with header, body, footer, selectedText, selectedType, and tempContent properties.
     *
     * @return {Object} The object containing header, body, footer, selectedText, selectedType, and tempContent properties.
     */
    data() {
        return {
            header: "Welcome to Paper Announcement App",
            body: "Cheese and pepperoni, tomato sauce delight. Freshly baked crust, a symphony of flavors in every bite. Mozzarella melts, a dance of herbs on dough. Savor the aroma, a pizzeria's echo. From Margherita to BBQ chicken supreme, Pizza ipsum satisfies, a culinary dream.
            ",
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

