import React,{useState} from 'react'
import M from 'materialize-css'
const SignUp=()=>{
	const [name,setName]=useState("")
	const [password,setPassword]=useState("")
	const [email,setEmail]=useState("")
	const PostData=()=>{
		fetch("/signup",{
			method:"post",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				name:"",
				emai:"",
				password:""
			})
			}).then(res=>res.json())
			.then(data=>{
				if(data.error)
				{
					 M.toast({html: 'I am a toast!'})
				}
			})
	}
	return (
	<div className="mycard">
		<div className="card auth-card">
				<h2>Insagram</h2>
				<input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
				<input type="text" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
				<input type="password" placeholder=""  value={password} onChange={(e)=>setPassword(e.target.value)}/>
			 	<button onClick={()=>PostData()} class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action">SignUp</button>
		</div>
	</div>
		)
}


export default  SignUp