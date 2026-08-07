import {useState} from "react";
import {registerUser} from "../services/ApiService";
import {useNavigate} from "react-router-dom";


function Register(){


const navigate=useNavigate();



const [user,setUser]=useState({

firstName:"",
lastName:"",
email:"",
password:"",
mobileNumber:"",
role:"CANDIDATE",

qualification:"",
specialization:"",
experience:"",
skills:"",
city:"",
state:""

});



const change=(e)=>{

setUser({

...user,

[e.target.name]:e.target.value

});

};



const register=()=>{


registerUser(user)

.then(res=>{


alert(res.data.message);


if(res.data.success){

navigate("/");

}


})


};



return(

<div className="container mt-4">


<div className="card shadow p-4">


<h3>
Create Candidate Account
</h3>



{
Object.keys(user).map((field)=>(


<input

key={field}

className="form-control mt-2"

name={field}

placeholder={field}

value={user[field]}

onChange={change}

/>


))
}



<button

className="btn btn-success mt-3"

onClick={register}

>

Register

</button>



</div>


</div>


)

}


export default Register;