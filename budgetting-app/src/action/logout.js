// rrd imports
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers";

// external library (Toast)
import { toast } from "react-toastify";

export async function logoutAction(){
    // delete the user 
deleteItem({
    key: "userName" 
})

deleteItem({
    key: "budgets" 
})

deleteItem({
    key: "expenses" 
})


toast.success("You have deleted your account!")


    // return a redirect
    return redirect('/');
}