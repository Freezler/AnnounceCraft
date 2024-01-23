const shoppingList = Vue.createApp({
    data() {
        return {
            header: "Unleashing the Future: The Power and Progress of A.I. Development",
            body: "Artificial Intelligence (A.I.) development is a transformative force in our ever-evolving technological landscape, reshaping industries and redefining human experiences. A.I. systems, driven by machine learning and advanced algorithms, are propelling us into an era where intelligent solutions autonomously learn and adapt. From enhancing industrial efficiency to revolutionizing healthcare, the potential of A.I. development is limitless. However, as we forge ahead, ethical considerations must guide our path, ensuring responsible practices that prioritize the positive impact of A.I. on society. In this dynamic journey, let us embrace the boundless possibilities that A.I. development offers, crafting a future that is not only intelligent but also inclusive and ethically grounded.",
            footer: "Forge a brighter future with A.I. development. Let ethics guide innovation for a world that thrives on intelligence, compassion, and inclusivity.",
            selectedText: "",
            selectedType: "", // Set initial value to ''
            tempContent: { type: "", text: "" } // Temporary object to store selected type and text
        };
    },
    methods: {
updateTempContent() {
    // Check if there is no selected text
    if (this.selectedText === "") {
        // Show alert message prompting user to enter text first
        alert("Please enter text first");
    } else {
        // If a type is selected, update the tempContent type
        if (this.selectedType !== undefined) {
            this.tempContent.type = this.selectedType;
        }
        // Update the tempContent text with the selected text
        if (this.selectedText !== undefined) {
            this.tempContent.text = this.selectedText;
        }
    }
},

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+// Update the text content based on the type of content
updateText() {
-    const { type, text } = this.tempContent;
-    if (type === "Header") {
-        this.header = text;
-    } else if (type === "Body") {
-        this.body = text;
-    } else if (type === "Footer") {
-        this.footer = text;
+    const { type, text } = this.tempContent; // Destructure type and text from tempContent
+    if (type === "Header") { // If the type is Header
+        this.header = text; // Set the header content
+    } else if (type === "Body") { // If the type is Body
+        this.body = text; // Set the body content
+    } else if (type === "Footer") { // If the type is Footer
+        this.footer = text; // Set the footer content
    }
-    this.selectedType = "";
-    this.selectedText = "";
-
+    this.selectedType = ""; // Reset the selectedType
+    this.selectedText = ""; // Reset the selectedText
}
<<<<<  bot-0a6d4644-a3be-450e-b9b6-7cf97513d180  >>>>>
    }
}).mount("#shopping-list");

