import {AbstractComponent} from './abstractcomponent.js'



function createHeaderComponentTemplate() {
    return (
        `<input type="text" id="search-input" placeholder="Поиск...">`
      );
}


export class SearchComponent extends AbstractComponent{
  getTemplate() {
    return createHeaderComponentTemplate();
  }
}
