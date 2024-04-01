const LoginPage = () => {
    return (
    <div className="center">   
        
        <h1>Employee Pool</h1>
        <form>
            <h3>User</h3>
            <input id="name" type="User" placeholder="User"></input>
            <h3>Password:</h3>
            <input id="name" type="text" placeholder="Password"></input>
            <br/>
            <button className="btn" type="submit">Login</button>
        </form>
        
    </div>);
}

export default LoginPage;