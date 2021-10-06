export default function (Alpine) {
    Alpine.directive("template", (el, { value: name }, {}) => {
        customElements.define(
            `x-${name}`,
            class extends HTMLElement {
                constructor() {
                    super();
                    const template = el.content;
                    this.appendChild(template.cloneNode(true));
                }
            }
        );
    });

    return Alpine.directive("uppercase", (el) => {
        el.textContent = el.textContent.toUpperCase();
    });
}
