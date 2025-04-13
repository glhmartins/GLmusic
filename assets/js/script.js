document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
});

const toastTrigger = document.getElementById('toastTrigger');
const toastAlert = document.getElementById('toastAlert');


if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastAlert);
        toast.show();
    });
}

/*document.addEventListener('DOMContentLoaded', function () {
    var toastEl = document.querySelector('.toast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
});


const toastElList = document.querySelectorAll(".toast");
const toastList = [...toastElList].map((toastEl) => {
    const toast = new bootstrap.Toast(toastEl, {});
    toast.show();
});*/