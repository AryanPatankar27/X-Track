import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../src/helpers";

// library
import { toast } from "react-toastify";

export async function logoutAction(){
    // delete user 
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })
    toast.success("You've deleted your account!")
    
    return redirect("/")
}