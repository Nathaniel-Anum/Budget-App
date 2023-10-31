import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./Pages/Dashboard";
import ExpensesPage, { expensesAction, expensesLoader } from "./Pages/ExpensesPage";

// pages import 
import Error from "./Pages/Error";
import BudgetPage, { budgetAction, budgetLoader } from "./Pages/BudgetPage";
//Layouts
import Main, { MainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./action/logout";
import deleteBudget from "./action/deleteBudget";

// Library imports
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },

      {
        path: "budget/:id",
        element: <BudgetPage/>,
        loader: budgetLoader,
        errorElement: <Error />,
        action: budgetAction, 
        children: [
          {
            path: "delete",
            action: deleteBudget,
          }
        ]      
      },

      {
        path: "expenses",
        element: <ExpensesPage/>,
        loader: expensesLoader,
        action: budgetLoader,     
        errorElement: <Error />,  
      },

      {
        path: "logout",
        action: logoutAction,
        errorElement: <h4>Logged Out Bro! </h4>,
      },
    ],
  },

  {
    path: "*",
    element: <h2> Error Page</h2>,
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer/>
  </div>
}

export default App;
