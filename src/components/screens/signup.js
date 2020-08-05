import React,{useState} from 'react'

const SignUp=()=>{
	const [name,setName]=useState("")
	const [password,setPassword]=useState("")
	const [email,setEmail]=useState("")
	return (
	<div className="mycard">
		<div className="card auth-card">
				<h2>Insagram</h2>
				<input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
				<input type="text" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
				<input type="password" placeholder=""  value={password} onChange={(e)=>setPassword(e.target.value)}/>
			 	<button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action">Login</button>
		</div>
	</div>
		)
}


export default  SignUp