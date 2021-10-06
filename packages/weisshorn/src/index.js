export default function(Alpine) {
    Alpine.directive("template", (el, { value: name }, { }) => {
        customElements.define(
            `x-${name}`,
            class extends HTMLElement {
                constructor() {
                    super();
                    const template = el.content.cloneNode(true);
                    this.appendChild(template);
                }
            }
        );
    });
}
