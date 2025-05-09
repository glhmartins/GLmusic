document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
});

const toastTrigger = document.getElementById('liveToastBtn');
         const toastLiveExample = document.getElementById('liveToast');
       
         if (toastTrigger) {
           toastTrigger.addEventListener('click', () => {
             const toast = new bootstrap.Toast(toastLiveExample);
             toast.show();
           });
         }