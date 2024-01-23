// app.js

const shoppingList = Vue.createApp({
    data() {
        return {
            header: "Unleashing the Future: The Power and Progress of A.I. Development",
            body: "Artificial Intelligence (A.I.) development is a transformative force in our ever-evolving technological landscape, reshaping industries and redefining human experiences. A.I. systems, driven by machine learning and advanced algorithms, are propelling us into an era where intelligent solutions autonomously learn and adapt. From enhancing industrial efficiency to revolutionizing healthcare, the potential of A.I. development is limitless. However, as we forge ahead, ethical considerations must guide our path, ensuring responsible practices that prioritize the positive impact of A.I. on society. In this dynamic journey, let us embrace the boundless possibilities that A.I. development offers, crafting a future that is not only intelligent but also inclusive and ethically grounded.",
            footer: "Embrace the era of limitless possibilities with A.I. development. Stay at the forefront of innovation, as pioneers in technology pave the way for groundbreaking advancements. Let us shape a future where A.I. not only augments our capabilities but also enriches our lives. As we navigate this exciting frontier, let ethical considerations be our compass, guiding the responsible development of Artificial Intelligence for the betterment of society. Together, we are architects of progress, harnessing the power of A.I. to create a world that thrives on intelligence, compassion, and inclusivity.",
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

