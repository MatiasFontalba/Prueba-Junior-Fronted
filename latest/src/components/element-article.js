//Se importan el css correspondiente
import { articleStyles } from "./article-styles.js";
//Funcion asincrona para obtener los datos necesarios de la api con su manejo de errores correspondinte

async function getArticleData(articleId) {
  try {
    const response = await fetch(
      `https://5fb46367e473ab0016a1654d.mockapi.io/articles/${articleId}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching user data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
/*Se define el elemento personalizado que se utilizara en el HTML incluyendo 
la utilizacion del Shadow DOM y su manejo de errores correspondiente*/
customElements.define(
  "element-article",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    /* Elemento asincrono que es responsable de ingresar los datos 
    correspondientes al elemento customizado en este caso el id del articulo*/
    connectedCallback() {
      (async () => {
        try {
          const data = await getArticleData(articleId);

          const style = document.createElement("style");
          style.textContent = articleStyles;
          const article = document.createElement("article");

          //Muestra el nombre del autor, avatar, fecha de nacimiento y biografía. a traves de los templates literals
          const div = document.createElement("div");
          const htmlString = `<h2 class="title">${data.title}</h2>
                 <img src="${data.image}" alt="${data.title}" />
                 <span class="company">Company: ${data.company}</span>
                 <span class="description">Description: ${data.description}</span>
                 <span class="description">Publication date: ${data.publishedAt}</span>
                 <span class="description">Extra content: ${data.content}</span>
                 `;
          //Se hace la insercion correspondiente para que se visualicen los datos
          div.innerHTML = htmlString;
          div.className = "item";
          this.shadowRoot.appendChild(style);
          article.appendChild(div);
          this.shadowRoot.appendChild(article);
        } catch (error) {
          console.error("Error al buscar la data del articulo");
        }
      })();
    }
  }
);
