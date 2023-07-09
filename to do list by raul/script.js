const form = document.querySelector("form"),
  input = document.querySelector("input"),
  button = document.querySelector("button"),
  lists = document.querySelector("ul");

form.addEventListener("submit", submitForm);

function submitForm(elem) {
  elem.preventDefault();
  if (input.value) {
    createListItem();
    input.value = "";
  } else {
    return null;
  }
  deleteListItem();
}
function createListItem() {
    const li = document.createElement("li"),
      a = document.createElement("a"),
      icon = document.createElement("i");
      a.style.color=`${input.value}`;
      a.style.fontFamily=`${input.value}`;
      a.style.fontSize=`${input.value}`;
      a.style.fontWeight=`${input.value}`;
      
  
    // Icon add classes:
    icon.classList.add("fas", "fa-trash-alt");
    a.textContent = input.value;
    li.appendChild(a);
    li.appendChild(icon);
    lists.appendChild(li);
  }

  // delete list item  ..............................................................................................................//
function deleteListItem() {
    const listItemIcon = document.querySelectorAll("i");
    listItemIcon.forEach((icon) => {
      icon.addEventListener("click", (elem) => {
        elem.target.parentElement.remove();
      });
    });
  }