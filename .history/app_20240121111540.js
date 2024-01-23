// app.js

    const shoppingList = Vue.createApp({
        data() {
            return {
                header: "The standard Lorem Ipsum passage, used since the 1500s",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                footer: "de Finibus Bonorum et Malorum footer",
                selectedText: "",
                selectedType: "", // Set initial value to Header
                tempContent: { type: "", text: "" } // Temporary object to store selected type and text
            };
        },
        methods: {
            updateTempContent() {
                this.tempContent.type = this.selectedType;
                this.tempContent.text = this.selectedText;
                this.selectedText = "";
                

            },
            updateText() {
                switch (this.tempContent.type) {
                    case "Header":
                        this.header = this.tempContent.text;
                        break;
                    case "Body":
                        this.body = this.tempContent.text;
                        break;
                    case "Footer":
                        this.footer = this.tempContent.text;
                        break;
                }
            }
            
        }
    }).mount("#shopping-list");
