import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import {  useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
        const fetcher = useFetcher();
        const isSubmitting = fetcher.state === 'submitting'


        const formRef = useRef();
        const focusRef = useRef();

        useEffect( ()=> {
            if (!isSubmitting){
                formRef.current.reset()
                focusRef.current.focus()
            }
        }, [isSubmitting])


    return (  
        <div className="form-wrapper">
            <h2 className="h3"> Create Budget</h2>

            <fetcher.Form
            method="post"
            className="grid-sm"
            ref={formRef}>
                <div className="grid-xs">
        <label 
        htmlFor="newBudget"
        >Budget Name</label>

        
                    <input 
                    type="text" 
                    name="newBudget"
                     id='newBudget'
                     placeholder="eg.. Groceries"
                     required
                     ref={focusRef}
                     >

                     </input>
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount"> Amount </label>
                    <input type="number"
                    name="newBudgetAmount" 
                    step='0.01'
                    id="newBudgetAmount"
                    placeholder="eg..500"
                    required
                    inputMode="decimal"></input>
                </div>

                <input type="hidden"
                name="_action"
                value="createBudget"/>


                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting</span> : 
                        <>
                        <span>Create Budget</span> 
                        <CurrencyDollarIcon width={26}/>
                        </>
                    }
                     </button>
            </fetcher.Form>
        </div>
    );
}
 
export default AddBudgetForm;