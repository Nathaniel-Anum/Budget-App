import { Link, useNavigate, useRouteError } from "react-router-dom";

//library import
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const reverse = () => {
    // navigate(-1)
    navigate('/');
    console.log(reverse)
  }

  console.log(error);
  return (
    <div className="error">
      <h1>Uh Oh! We have got a problem</h1>
      <p>{error.message}</p>
      <div className="flex-md">
        <button 
        className="btn btn--dark "
        onClick={()=> reverse}
        >

          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>


        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
