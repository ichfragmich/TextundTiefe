document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".nav-list-item").forEach(function(item) {

    const link = item.querySelector(".nav-list-link");
    const children = item.querySelector(".nav-list");

    if (children && link) {

      link.addEventListener("click", function(e) {

        e.preventDefault();
        item.classList.toggle("active");

      });

    }

  });

});