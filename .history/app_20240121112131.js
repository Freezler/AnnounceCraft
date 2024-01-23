// app.js

    const shoppingList = Vue.createApp({
        data() {
            return {
                header: "The standard Lorem Ipsum passage, used since the 1500s",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                footer: "de Finibus Bonorum et Malorum footer",
                selectedText: "",
                selectedType: "Body", // Set initial value to Body
                tempContent: { type: "", text: "" } // Temporary object to store selected type and text
            };
        },
        methods: {
<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
updateTempContent() {
    if (this.selectedType) {
        this.tempContent.type = this.selectedType;
    }
    if (this.selectedText) {
        this.tempContent.text = this.selectedText;
    }
}
<<<<<  bot-40d9dcc3-8894-4f42-b936-c73002475ef8  >>>>>
updateText() {
    const { type, text } = this.tempContent;
    if (type === "Header") {
        this.header = text;
    } else if (type === "Body") {
        this.body = text;
    } else if (type === "Footer") {
        this.footer = text;
    }
}
            
        }
    }).mount("#shopping-list");
