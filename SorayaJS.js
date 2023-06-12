document.addEventListener("DOMContentLoaded", function () {
    const imageItems = document.querySelectorAll(".image-item");
    imageItems.forEach(function (item, index) {
      setTimeout(function () {
        item.style.animationDelay = `${index * 200}ms`;
        item.classList.add("show");
      }, index * 200);
    });
  });