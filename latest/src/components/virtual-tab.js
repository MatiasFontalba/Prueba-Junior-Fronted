//Se declaran variables globales en caso consultas de autor y articulo para evitar errores
let authorId = 1;
let articleId = 1;
/*Funcion que obtiene el panel de pestañas de wc-tab-panel validando que sean correctos los 
datos y para obtener la pestaña que se requiere*/
function virtualTabClick(tabIndex) {
  const panel = document.querySelector("wc-tab-panel");
  if (!panel || tabIndex < 0 || tabIndex >= panel.dom.tabs.lenght) {
    return;
  }
  const tab = panel.dom.tabs[tabIndex];
  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  tab.dispatchEvent(clickEvent);
}
/*Funcionalidad que esta ligada a wc-tab-panel 
que sirve para "conectar" a los autores a sus respectivos articulos que han creado*/
function virtualTabAuthor(tabIndex, author) {
  authorId = author;
  const panel = document.querySelector("wc-tab-panel");
  if (!panel || tabIndex < 0 || tabIndex >= panel.dom.tabs.lenght) {
    return;
  }
  const tab = panel.dom.tabs[tabIndex];
  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  tab.dispatchEvent(clickEvent);
}
/*Funcionalidad que esta ligada a wc-tab-panel que sirve para ingresar al articulo 
en una "pestaña" distinta que indica toda la informacion del articulo*/
function virtualTabArticule(tabIndex, article) {
  articleId = article;
  const panel = document.querySelector("wc-tab-panel");
  if (!panel || tabIndex < 0 || tabIndex >= panel.dom.tabs.lenght) {
    return;
  }
  const tab = panel.dom.tabs[tabIndex];
  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  tab.dispatchEvent(clickEvent);
}
