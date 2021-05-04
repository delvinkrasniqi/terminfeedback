let checkedCheckboxes = [];
let allCheckboxes = document.querySelectorAll(".checkboxInput");
let mainForm = document.forms["mainform"];
let alert = document.querySelector(".alert");

mainForm.addEventListener("submit", (e) => {
  allCheckboxes.forEach((checkbox) => {
    //if you check a checkb add into the array
    if (checkbox.checked) {
      checkedCheckboxes.push(checkbox.value);
    }
    //remove alert if you check a checkb
    checkbox.addEventListener("change", () => {
      alert.classList.remove("alert--show");
    });
  });

  //if array is empty = none checb is checked.
  if (checkedCheckboxes.length == 0) {
    //show alert
    alert.classList.add("alert--show");
    //scroll to the alert
    alert.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    //stop form from submitting
    e.preventDefault();
  }
});
