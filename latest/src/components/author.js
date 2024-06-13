//Importacion del css correspondiente
import { articleStyles } from "./article-styles.js";
//Funcion asincrona para la obtencion de los datos del author dado su id con su respectivo manejo de errores
async function getAuthorData(authorId) {
  try {
    const response = await fetch(
      `https://5fb46367e473ab0016a1654d.mockapi.io/users/${authorId}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching user data: ${response.status}`);
    }
    //Se capturan los datos que se utilizaran
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
/*Se define el elemento personalizado que se utilizara en el HTML incluyendo 
la utilizacion del Shadow DOM y su manejo de errores correspondiente*/
customElements.define(
  "element-author",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    /* Elemento asincrono que es responsable de ingresar los datos 
    correspondientes al elemento customizado en este caso el id del autor*/
    connectedCallback() {
      (async () => {
        try {
          const data = await getAuthorData(authorId);
          //Se formatea la fecha para una mejor visualizacion
          const birthdateformated = data.birthdate.slice(0, 10);
          const style = document.createElement("style");
          style.textContent = articleStyles;
          const article = document.createElement("article");
          //Muestra el nombre del autor, avatar, fecha de nacimiento y biografía.
          const div = document.createElement("div");
          //Se implementan los datos necesarios para mostrar en la página
          const htmlString = `<h2>Birth date: ${data.name}</h2>
          <img src="${data.avatar}">
          <span class="description">Birthday: ${birthdateformated}</span>
          <span class="description">Bio: ${data.bio}</span>
          `;
          //Se hace insercion de los elementos a utilizar
          div.innerHTML = htmlString;
          div.className = "item";
          this.shadowRoot.appendChild(style);
          article.appendChild(div);
          this.shadowRoot.appendChild(div);
        } catch (error) {
          console.error("Error al buscar la data de author");
        }
      })();
    }
  }
);
