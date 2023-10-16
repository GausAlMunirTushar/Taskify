import Swal from "sweetalert2";
import { updateStatusRequest } from "../api/api";

export function updateTodo (id, status) {
    return Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: {
            New: 'New',
            Completed: 'Completed',
            Progress: 'Progress',
            Canceled: 'Canceled'
        },
        inputValue: status,
    }).then((result) => {
        return updateStatusRequest(id, result.value).then((res) => {
            return res
        })
    })
}