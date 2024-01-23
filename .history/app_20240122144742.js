const shoppingList = Vue.createApp({
    data() {
        return {
            header: "Diving into Vue 3: My Journey into Mastering Frontend Development",
            body: "Exploring Vue 3 for frontend development, integrating Tailwind CSS for visually appealing interfaces, and using Vite for rapid development setup. Excited about potential addition of Nuxt 3.",
            footer: "Venturing into the world of Vue 3, Tailwind CSS, and Vite. Building the future of web experiences.",
            selectedText: "",
            selectedType: "", // Initialize to empty string
            tempContent: { type: "", text: "" } // Temporary object to store selected type and text
        };
    },
    methods: {
        updateTempContent() {
            // Check if there is no selected text
            this.selectedText === ""
                ? (alert("Please enter text first"), (this.selectedType = ""))
                : (
                    // Update the tempContent type if a type is selected
                    this.selectedType !== undefined && (this.tempContent.type = this.selectedType),
                    // Update the tempContent text with the selected text
                    this.selectedText !== undefined && (this.tempContent.text = this.selectedText)
                );
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

