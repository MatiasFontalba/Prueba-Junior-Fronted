//Importacion del css correspondiente
import { articleStyles } from "./article-styles.js";
//Funcion asincrona para la obtencion de los datos de los articulos con su respectivo manejo de errores
async function getArticleData() {
  try {
    const response = await fetch(
      "https://5fb46367e473ab0016a1654d.mockapi.io/articles"
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
la utilizacion del Shadow DOM incluyendo su manejo de errores*/
customElements.define(
  "custom-list",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    /* Elemento asincrono que es responsable de ingresar los datos 
    correspondientes al elemento customizado, se implementa una lista de articulos*/
    connectedCallback() {
      (async () => {
        try {
          const data = await getArticleData();

          const style = document.createElement("style");
          style.textContent = articleStyles;

          const article = document.createElement("article");
          //Se ejecuta el for para poblar los articulos
          data.forEach((item) => {
            const itemDiv = document.createElement("div");
            //Se agrega la funcionalidad de clickear el articulo para que muestre toda su informacion
            itemDiv.className = "item";
            itemDiv.addEventListener("click", () => {
              itemDiv.classList.toggle("expanded");
            });
            /*Se forma el cuerpo del articulo con los datos correspondientes que entrega el ciclo forEach */
            const htmlString = `
              <div>
              <h2 class="title">${item.title}</h2>
              <img src="${item.image}" alt="${item.title}" />
              <span class="company">Company: ${item.company}</span>
              <span class="description">Description: ${item.description}</span>
              <span class="publishedAt">Publication date: ${item.publishedAt}</span>
              <span class="content">Extra content: ${item.content}</span>
              </div>
              <div class="action">
              <button type="button" onclick="virtualTabAuthor(1, ${item.author})">Author</button>
              <button type="button" onclick="virtualTabArticule(2, ${item.id})">Articule</button>
              </div>
              `;
            //Se insertan los componentes a mostrar
            itemDiv.innerHTML = htmlString;
            article.appendChild(itemDiv);
          });
          //Se implementa el Shadow Dom
          this.shadowRoot.appendChild(style);
          this.shadowRoot.appendChild(article);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      })();
    }
  }
);
