import toastr from 'toastr'

export default class ToastrService {

    success(message) {
        this._toastr("success", message)
    }

    warning(message) {
        this._toastr("warning", message)
    }

    error(message) {
        this._toastr("error", message)
    }

    _toastr(type, message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "toastClass": 'toast-style'
        }

       toastr[type](message)
    }

}
