import Swal from "sweetalert2";

export const NotificationModal = (type, mess) =>
  Swal.fire({
    title: mess,
    icon: type,
    confirmButtonText: "Ok",
    padding: 0,
    customClass: {
      container: "modal__booking",
      popup: "modal__content",
      confirmButton: "btnConfirm",
    },
  });
