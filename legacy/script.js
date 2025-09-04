{
  /* <input
          id="btn"
          name="button-name"
          class="button"
          type="button"
          value="Saiba Mais"
        /> */
}

const button_id = document.getElementById("btn");
console.log("id", button_id);

const buttonName = document.getElementsByName("button-name");
console.log("name", buttonName);

const buttonClass = document.getElementsByClassName("button");
console.log("class", buttonClass);

const buttonTag = document.getElementsByTagName("input");
console.log("tag", buttonClass);

button_id.addEventListener("click", () => {
  console.log("qualquer coisa");
  
});
