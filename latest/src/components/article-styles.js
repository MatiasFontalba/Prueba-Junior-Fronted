//Css tranformado en archivo .js para su proxima importacion a los componentes que lo requieran
const styles = `
  article {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;

  }
  .item {
    border: 1px solid #ddd;
    padding: 10px 0;
    border-radius: 5px;
    background-color: #f9f9f9;
    cursor: pointer;
    margin: 0 50px 0 50px;
    padding: 15px;
    box-shadow: 5px 10px #AAA;
  }

  .title {
    font-size: 40px;
    color: #333;
    padding: 5px;
    border-radius: 3px;
    text-align: center;
  }

  img {
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    display: block;
    justify-content: center;
    text-align: center;
  }

  .company {
    display: block;  
    font-size: 30px;
    padding: 15px 0px;
    margin: 5px;
    font-weight: bold;
    color: var(--secundario-oscuro);
    width: 100%;
  }

  .description {
    font-size: 20px;
    display: block;
    color: rgba(0, 0, 0, 0.8);
    width: 100%;
    margin: 5px;
    padding: 15px 0px;
  }

  .publishedAt {
    padding: 15px;
    display: block;
    width: 100%;
    color: #666;
    display: none;
  }

  .content {
    display: block;
    width: 100%;
    text-align: left;
    color: #666;
    display: none;
    margin: 5px;
    padding: 5px;
  }

  .item.expanded .publishedAt,
  .item.expanded .content {
    display: block !important;
  }

  .action{
    display: flex;
    justify-content: end;
  }

  button {
    background-color: var(--secundario);
    color: var(--fondo);
    border: none;
    border-radius: 10px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: background-color 1s ease;
}
  button:hover{
    background-color: var(--secundario-oscuro)
  }
`;

export const articleStyles = styles;
