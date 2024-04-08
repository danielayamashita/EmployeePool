
import { VscError } from "react-icons/vsc";

const ErrorPage = () => {

    return (
        
            <div >
                <p className="error-message">404</p>
                <p className="error-submessage"> Question not found!</p>
                <p className="error-message"><VscError/></p>
            </div>
            
       
        
    );
}

export default ErrorPage;

