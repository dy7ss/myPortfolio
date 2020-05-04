obj1 = {
  open: document.getElementById("open1"),
  close: document.getElementById("close1"),
  modal: document.getElementById("modal1"),
  mask: document.getElementById("mask1"),
};

obj2 = {
  open: document.getElementById("open2"),
  close: document.getElementById("close2"),
  modal: document.getElementById("modal2"),
  mask: document.getElementById("mask2"),
};

obj3 = {
  open: document.getElementById("open3"),
  close: document.getElementById("close3"),
  modal: document.getElementById("modal3"),
  mask: document.getElementById("mask3"),
};

obj4 = {
  open: document.getElementById("open4"),
  close: document.getElementById("close4"),
  modal: document.getElementById("modal4"),
  mask: document.getElementById("mask4"),
};

// const open = document.getElementById("open");
// const close = document.getElementById("close");
// const modal = document.getElementById("modal");
// const mask = document.getElementById("mask");
// const dest = document.getElementById("desc"); // <- 表示させたい文章のp

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

event(obj1.open, obj1.close, obj1.modal, obj1.mask);
event(obj2.open, obj2.close, obj2.modal, obj2.mask);
event(obj3.open, obj3.close, obj3.modal, obj3.mask);
event(obj4.open, obj4.close, obj4.modal, obj4.mask);
