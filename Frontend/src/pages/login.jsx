import { useState } from 'react';
import axios from "axios";
import './CSS/login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    'email': '',
    'password': ''

  })
  const handlesubmit = (e) => {
    e.preventDefault();
    if (formdata.email === "") {
      toast.error('Please fill the Email',{
        position: toast.POSITION.TOP_RIGHT
      });

    }
    else if (formdata.password === "") {
      toast.error('Please fill the Password');
    }
    else {
      
      console.log(formdata)
      axios.post('http://localhost:5000/loginecom', { formdata })
        .then((res) => console.log(res.data))
        toast.success('Login Successfully');
        setTimeout(()=>{
          navigate('/shop');
        },4000)

    }
  }
  return (
    <form action="" onSubmit={handlesubmit}>
      <div className="Login">
        <div className="Login-container">
          <h1>Login</h1>
          <div className="Login-fields">
            <input type="email" placeholder="Email Address" name='email' onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
            <input type="password" placeholder="password" name='password' onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
          </div>
          <p className="Login-login">Don't have an Account?<span><Link to="/">Signup here</Link></span></p>
          <button>Login</button>
        </div>
      </div>
      <ToastContainer/>
    </form>
  );
}
export default Login