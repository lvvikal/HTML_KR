import { AbstractComponent } from './abstractcomponent.js'

function template(id, info) {
    return (
            `	
              <li data-id="${id}">${info}</li>
		    `
    );
}

export class ProductComponent extends AbstractComponent {

    #id = null;
    #info = null;

    constructor(id, info) {
        super();
        this.#id = id;
        this.#info = info;
    }

    getTemplate() {
        return template(this.#id, this.#info);
    }
}
