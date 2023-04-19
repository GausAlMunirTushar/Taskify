import cogoToast from "cogo-toast";
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

const FormValidation ={
    isEmpty (value){
        return value.length === 0;
    },
    isMobile (value){
        return MobileRegx.test(value);
    },
    isEmail(value){
        return !EmailRegx.test(value);
    },
    errorToast(msg){
        cogoToast.error(msg, {position: "bottom-center"})
    },
    successToast(msg){
        cogoToast.success(msg, {position: "bottom-center"})
    }

}
export const {
    isEmpty,
    isMobile,
    isEmail,
    errorToast,
    successToast
} = FormValidation;