import "../Styles/Login.css"
import {FiUser} from "react-icons/fi";
const Login = () => {
    return ( 
        <>
          <aside>
        <h2>Log in</h2>
        <div className="icon">
          <FiUser size={40}/>
        </div>
        <div className="input">
         <label for="Email address"></label>
         <input type="text"  id="email" placeholder="Email address"/>
         <label for="password" ></label>
         <input type="text" id="code" placeholder="Password"/>
         </div>
         
         <div className="one">
         <p>Already have an account ? login</p><button className="btn">Log in</button>
         </div>
        
    
        

        
          
        </aside>
       

        </>
     );
}
 
export default Login;