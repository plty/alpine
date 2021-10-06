export default function (Alpine) {
    Alpine.directive("template", (el, { value: name }, {}) => {
        customElements.define(
            `x-${name}`,
            class extends HTMLElement {
                constructor() {
                    super();
                    const content = el.content;
                    Alpine.mutateDom(() =>
                        this.appendChild(content.cloneNode(true))
                    );
                }
            }
        );
    });
}
