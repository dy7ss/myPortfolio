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

obj5 = {
  open: document.getElementById("open5"),
  close: document.getElementById("close5"),
  modal: document.getElementById("modal5"),
  mask: document.getElementById("mask5"),
};

obj6 = {
  open: document.getElementById("open6"),
  close: document.getElementById("close6"),
  modal: document.getElementById("modal6"),
  mask: document.getElementById("mask6"),
};

obj7 = {
  open: document.getElementById("open7"),
  close: document.getElementById("close7"),
  modal: document.getElementById("modal7"),
  mask: document.getElementById("mask7"),
};

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
event(obj5.open, obj5.close, obj5.modal, obj5.mask);
event(obj6.open, obj6.close, obj6.modal, obj6.mask);
event(obj7.open, obj7.close, obj7.modal, obj7.mask);
