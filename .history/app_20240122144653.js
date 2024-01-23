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
}
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

        // Update the text content based on the type of content
        updateText() {
            const { type, text } = this.tempContent;
            // Update header, body, and footer based on the selected type
            this.header = type === "Header" ? text : this.header;
            this.body = type === "Body" ? text : this.body;
            this.footer = type === "Footer" ? text : this.footer;
            this.selectedType = ""; // Reset the selectedType
            this.selectedText = ""; // Clear the selectedText
        }
    }
}).mount("#shopping-list");

