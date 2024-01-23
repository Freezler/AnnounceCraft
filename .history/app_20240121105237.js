// app.js
const shoppingList = Vue.createApp({
    data() {
        return {
            header: "The standard Lorem Ipsum passage, used since the 1500s",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            footer: "de Finibus Bonorum et Malorum footer",
            selectedText: "please enter ",
            selectedType: "" // Set initial value to Header
        };
    },
    methods: {
        updateText() {
            switch (this.selectedType) {
                case "Header":
                    this.header = this.selectedText;
                    break;
                case "Body":
                    this.body = this.selectedText;
                    break;
                case "Footer":
                    this.footer = this.selectedText;
                    break;
            }
        }
    }
}).mount("#shopping-list");