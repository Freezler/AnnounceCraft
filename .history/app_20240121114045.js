// app.js

const shoppingList = Vue.createApp({
    data() {
        return {
            header: "Unleashing the Future: The Power and Progress of A.I. Development",
            body: "In the ever-evolving landscape of technology, Artificial Intelligence (A.I.) development stands as a formidable force driving innovation and reshaping the way we interact with the world. From enhancing efficiency in industries to revolutionizing healthcare and transforming daily life, A.I. development holds the key to unlocking unprecedented possibilities. Researchers and engineers are tirelessly pushing boundaries, creating intelligent systems that can learn, adapt, and make decisions independently. The convergence of machine learning, neural networks, and advanced algorithms is propelling us into a future where A.I. solutions become integral to solving complex problems and improving human experiences. As we embark on this transformative journey, ethical considerations and responsible development practices must guide our path, ensuring that A.I. serves humanity and fosters a positive and inclusive future.",
            footer: "de Finibus Bonorum et Malorum footer",
            selectedText: "",
            selectedType: "", // Set initial value to Body
            tempContent: { type: "", text: "" } // Temporary object to store selected type and text
        };
    },
    methods: {
        updateTempContent() {
            if (this.selectedText === "") {
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
            if (type === "Header") {
                this.header = text;
            } else if (type === "Body") {
                this.body = text;
            } else if (type === "Footer") {
                this.footer = text;
            }
            this.selectedType = "";
            this.selectedText = "";

        }

    }
}).mount("#shopping-list");

