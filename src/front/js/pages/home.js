import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const [mail, setMail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()
	const registro = (e)=>{
		e.preventDefault()
		actions.registro(mail,username,password)
		setMail("")
		setUsername("")
		setPassword("")
		navigate("/login")
	}

	return (
		<div className="text-center mt-5 container">
			<h1>REGISTRO</h1>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={mail} onChange={(e)=>setMail(e.target.value)}/>
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Username</label>
					<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e)=>setUsername(e.target.value)}/>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1"value={password} onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button type="submit" class="btn btn-primary" onClick={(e)=> registro(e)}>Submit</button>
			</form>
		</div>
	);
};
