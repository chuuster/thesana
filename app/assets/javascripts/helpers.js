const handleDropdownClick = (id) => {
  return () => {
    dropdown = document.getElementById(id)

    if (dropdown.classList.contains("show")) {
      removeDropdowns();
    } else {
      removeDropdowns();
      dropdown.classList.toggle("show");
    }
  };
};

const removeDropdowns = () => {
  const dropdowns = document.querySelectorAll('[class^="dropdown-content"]');
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
};

window.onclick = function (event) {
  if ((!event.target.matches('.user-circle-button')) &&
    (!event.target.matches('.top-bar-gradient-button')) &&
    (!event.target.matches('.big-chip-project-options'))) {
    removeDropdowns();
  }
};

