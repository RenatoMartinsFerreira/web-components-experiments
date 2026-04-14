class MyCustomElement extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        console.log("Custom element added to page.");

        const template = ` 
     <style>
        :host {
        background: #333333;
        display: block;
        color: #ffffff;
        }
     </style>
     <h1> Hello World</h1>
     <p> <slot></slot> <p>
     
    `
        this.shadow.innerHTML = template;

    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    connectedMoveCallback() {
        console.log("Custom element moved with moveBefore()");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define("hello-world-element", MyCustomElement);