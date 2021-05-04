let checkedCheckboxes = [];
let allCheckboxes = document.querySelectorAll(".checkboxInput");
let mainForm = document.forms["mainform"];
let alert = document.querySelector(".alert");

mainForm.addEventListener("submit", (e) => {
  allCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCheckboxes.push(checkbox.value);
    }
    checkbox.addEventListener("change", () => {
        alert.classList.remove("alert--show");
      });
  });
 
  if (checkedCheckboxes.length == 0) {
    console.log("Select at least one");
    alert.classList.add("alert--show");
    alert.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    e.preventDefault();
  }
  console.log(checkedCheckboxes);
});
