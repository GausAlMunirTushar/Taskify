import Swal from "sweetalert2";
import { deleteRequest } from "../api/api";

export const deleteTodo = async (id) => {
    return Swal.fire({
        title: 'Are you Sure',
        text: "You won't to able  revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if(result.isConfirmed){
           return deleteRequest(id).then((deleteResult)=>{
            return deleteResult
           })
            
        }
    })
}