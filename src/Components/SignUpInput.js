import "./SignUpInput.css"

const SignUpInput = () =>{
    return(
        <div className="main-container">
        <div className = "input-div">
        <header>Sign up</header>
        <input type="text" placeholder='Full Name'></input>
        <input type="text" placeholder='Email'></input>
        <input type="password" placeholder='Enter Your Password'></input>
        <input type="password" placeholder='Confirm Password'></input>
       </div>
       <div>
       <button type="button" class="btn btn-dark ">Sign up</button>
       </div>
       </div>
    )
}

export default SignUpInput