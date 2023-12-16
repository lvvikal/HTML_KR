import {SearchComponent} from './components/searchcomponent.js';
import {ListComponent} from './components/listcomponent.js';
import {ProductComponent} from './components/productcomponent.js';
import {render, RenderPosition} from './render.js';

const bodyContainer = document.querySelector('body');
render(new SearchComponent(), bodyContainer, RenderPosition.AFTEREND);


function search() {
  let input = document.getElementById("inputSearch");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("list");
  let li = ul.getElementsByTagName("li");

  // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
  for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

document.addEventListener('keyup', search);