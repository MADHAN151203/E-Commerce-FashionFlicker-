import { useState } from 'react';
import './CSS/loginsignup.css'
import { Link , useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Loginsignup = () => {
  const navigate = useNavigate();
  const [formdata1, setFormdata1] = useState({
    'username': '',
    'email': '',
    'password': ''
  })
  const handlesubmitted = (e) => {
    e.preventDefault()
    if (formdata1.username === "") {
      toast.error('Please fill the User Name', {
        position: toast.POSITION.TOP_RIGHT
      });

    }
    else if (formdata1.email === "") {
      toast.error('Please fill the Email', {
        position: toast.POSITION.TOP_RIGHT
      });

    }
    else if (formdata1.password === "") {
      toast.error('Please fill the Password');
    }
    else {
      console.log(formdata1)
      axios.post('http://localhost:5000/signupecom', { formdata1 })
        .then((res) => console.log(res.data))
      toast.success('SignUp Successfully');
      setTimeout (()=>{
        navigate('/login')
      },5000)
    }
  }
  return (
    <form action="" onSubmit={handlesubmitted}>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign up</h1>
          <div className="loginsignup-fields">
            <input type="text" name='username' placeholder="Your Name" onChange={(e) => setFormdata1({ ...formdata1, username: e.target.value })} />
            <input type="email" name='email' placeholder="Email Address" onChange={(e) => setFormdata1({ ...formdata1, email: e.target.value })} />
            <input type="password" name='password' placeholder="password" onChange={(e) => setFormdata1({ ...formdata1, password: e.target.value })} />
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id=""  value="Yes" />
            <p>I  agree to the terms of use & privarcy</p>
          </div>
          <p className="loginsignup-login">Already have an Account?<span><Link to="/login">Login here</Link></span></p>
          <button>Sign Up</button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
}
export default Loginsignup