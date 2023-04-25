const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  event.currentTarget.value.length <= input.dataset.length
    ? input.classList.add("valid")
    : input.classList.add("invalid");
});
