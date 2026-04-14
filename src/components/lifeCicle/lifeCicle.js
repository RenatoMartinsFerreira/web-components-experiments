// Create a class for the element
class Circle extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    return ["color", "size"];
  }

  constructor() {
    // Always call super first in constructor
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const div = document.createElement("div");
    const style = document.createElement("style");
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  connectedCallback() {
    console.log("Custom circle element added to page.");
    updateStyle(this);
  }

  disconnectedCallback() {
    console.log("Custom circle element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom circle element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom circle element attributes changed.");
    updateStyle(this);
  }
}

customElements.define("custom-circle", Circle);

function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("size")}px;
      height: ${elem.getAttribute("size")}px;
      background-color: ${elem.getAttribute("color")};
      border-radius: 10000px;
    }
  `;
}