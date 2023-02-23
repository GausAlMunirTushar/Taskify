import axios from 'axios'
import { errorToast, successToast } from '../helper/FormValid';
import store from '../redux/store/store'
import {showLoader, hideLoader} from '../redux/state/settingSlice'
const baseURL = 'https://taskapi.gausalmunirtushar.me/api/v1';

const registrationRequest =(email, firstName, lastName, mobileNumber, password, photo)=>{
    store.dispatch(showLoader())
    let URL = baseURL +"/registration";
    let postBody = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
        password: password,
        photo: photo
    }
    return axios.post(URL, postBody).then((res)=>{
        store.dispatch(hideLoader())
        if(res.status === 200){
            if(res.data['status'] === "failed"){
                if(res.data['data']['keyPattern']['email']===1){
                    errorToast("Email Already Exist")
                    return false;
                }
                else{
                    errorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                successToast("Registration Success")
                return true;
            }
        }
        else{
            errorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        store.dispatch(hideLoader())
        errorToast("Something Went Wrong")
        return false;
    })
}


export default registrationRequest;