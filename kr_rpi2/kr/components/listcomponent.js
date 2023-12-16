import {AbstractComponent} from './abstractcomponent.js'
import { ProductComponent } from './productcomponent.js'
import {content} from '../mock/task.js'

const listComponent = [];
for (const c of content) { 
  const obj = new ProductComponent(c.id, c.info);
  listComponent.push(obj.getTemplate());
}

function template(items) {
  return items;
}

export class ListComponent extends AbstractComponent {

  #items = null;

  constructor() {
    super();
    this.#items = listComponent.join('');
  }

  getTemplate() {
    return template(this.#items);
  }


}
