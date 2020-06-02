function event(open, close, modal, mask) {
  open.addEventListener("click", function () {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });
  close.addEventListener("click", function () {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });
  mask.addEventListener("click", function () {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });
}

modal_count = document.querySelectorAll(".open").length;

for (let i = 1; i <= modal_count; i++) {
  const obj = {
    open: document.getElementById("open" + i),
    close: document.getElementById("close" + i),
    modal: document.getElementById("modal" + i),
    mask: document.getElementById("mask" + i),
  };

  event(obj.open, obj.close, obj.modal, obj.mask);
}
