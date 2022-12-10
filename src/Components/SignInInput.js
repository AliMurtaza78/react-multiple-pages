import "./SignUpInput.css"

const SignInInput = () =>{
    return(
        <div className="main-container">
        <div className = "input-div">
        <header>Sign In</header>
        <input type="text" placeholder='Email'></input>
        <input type="password" placeholder='Enter Your Password'></input>
       </div>
       <div>
       <button type="button" class="btn btn-dark ">Sign In</button>
       </div>
       </div>
    )
}

export default SignInInput