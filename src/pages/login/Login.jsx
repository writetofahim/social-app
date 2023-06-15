const Login = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f0f2f5] flex justify-center items-center ">
      <div className="flex w-3/4 h-3/4 ">
        {/* login left */}
        <div className="flex flex-1 flex-col  justify-center items-center">
          <h3 className="text-4xl font-bold">Fahimsocial</h3>
          <span>Connect with friends and world</span>
        </div>
        {/* login right */}
        <div className="flex flex-[1] flex-col  justify-center items-center border">
          <div className="h-[300px] w-3/4 p-5 bg-white rounded-md flex flex-col justify-between">
            <input type="email" placeholder="Email" className="h-10 rounded-md border p-5 outline-none"/>
            <input type="password" placeholder="Password" className="h-10 rounded-md border p-5 outline-none"/>
            <button className="h-10 bg-[#1775ee] text-white rounded-md">Login</button>
            <span className="text-center text-[#1775ee]">Forgot password?</span>
            <button className="bg-[#42b72a] rounded-md h-10 w-[60%] text-white self-center ">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
