import axios from 'axios'
import { errorToast, successToast } from '../helper/FormValid';
import store from '../redux/store/store'
import {showLoader, hideLoader} from '../redux/state/settingSlice'
import {getToken, setToken, setUserDetails} from '../helper/Session'
import { setCanceledTask, setCompletedTask, setNewTask, setProgressTask } from '../redux/state/taskSlice';
import {setSummary}  from '../redux/state/summarySlice';

    const baseURL = 'https://task-backend-pvop.onrender.com/api/v1';

    const axiosHeader = {headers: {"token": getToken()}}

  export  const registrationRequest = async (email, firstName, lastName, mobileNumber, password, photo)=>{
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
                if(res.data['status'] === "fail"){
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
export const loginRequest = async (email, password) =>{
        store.dispatch(showLoader())
        let URL = baseURL +"/login";
        let postBody = {"email": email,"password": password}
        return axios.post(URL, postBody).then((res)=>{
            store.dispatch(hideLoader());
            if(res.status===200){
                setToken(res.data['token']);
                setUserDetails(res.data['data']);
                successToast("Login Success")
                return true;
            }
            else{
                errorToast("Invalid Email or Password")
                return  false;
            }

        }).catch((err)=>{
            console.log(err)
            errorToast("Something Went Wrong")
            store.dispatch(hideLoader())
            return false;
        })
    }

export const createTaskRequest = async (title, description) => {
    store.dispatch(showLoader())
    let uri = baseURL+"/createTask"
    let postBody = {"title": title, "description": description, status: "New"}
    
    return axios.post(uri, postBody, axiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if(res.status === 200){
            successToast(`Task Create Succefully`)
            return true
        }
        else {
            errorToast("Something Went Wrong")
            return false
        }
    }).catch( (err) => {
        console.log(err)
        errorToast("Something Went Wrong")
        store.dispatch(hideLoader())
        return false;
    })
}

export const taskListByStatus = (Status) => {
    store.dispatch(showLoader())

    let uri = `${baseURL}/listTaskByStatus/${Status}`;

    axios.get(uri, axiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if(res.status === 200){
            if(Status === "New"){
                store.dispatch(setNewTask(res.data['data']))
            }
            else if(Status === "Completed"){
                store.dispatch(setCompletedTask(res.data['data']))
            }
            else if(Status === "Canceled"){
                store.dispatch(setCanceledTask(res.data['data']))
            }
            else if(Status === "Progress"){
                store.dispatch(setProgressTask(res.data['data']))
            }
        }
        else {
            errorToast('Something Went Wrong')
        }
    }).catch((error) => {
        errorToast('Something Went Wrong')
        store.dispatch(hideLoader())
    })

}

export const summaryRequest = () => {
    store.dispatch(showLoader())
    let uri = `${baseURL}/taskStatusCount`
    axios.get(uri, axiosHeader).then((res)=> {
        store.dispatch(hideLoader())
        if(res.status === 200){
            store.dispatch(setSummary(res.data['data']))
        }
        else{
            errorToast('Something Went Wrong')
        }
    }).catch((error) => {
        errorToast('Something Went Wrong')
        store.dispatch(hideLoader())
    })
}

export const deleteRequest = async (id) => {
    store.dispatch(showLoader())
    let uri = baseURL+'/deleteTask/'+id;
    return axios.delete(uri, axiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if(res.status === 200){
            successToast('Delete Successfully')
            return true;
        }
        else{
            errorToast('Delete Unsuccessfully')
            return false
        }
    }).catch((error) => {
        errorToast('Something Went Wrong')
        store.dispatch(hideLoader())
        return false
    })
}


export function updateStatusRequest (id, status) {
    store.dispatch(showLoader())
    const uri = baseURL+"/updateTaskStatus/"+id+"/"+status;
    return axios.get(uri, axiosHeader).then((res)=> {
        store.dispatch(hideLoader())
        if(res.status === 200){
            successToast('Status Updated')
            return true;
        }
        else {
            errorToast('Status Update Failed')
            return false;
        }
    }).catch((err) => {
        errorToast('Something Went Wrong')
    })
}



