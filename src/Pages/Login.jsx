import Form from "../Components/Form"

function Login() {
    return (
        <div className="text-2xl text-center">
          <div className="w-full flex items-ceter justify-center lg:w-1/2">
            <Form/>
            </div>
            <div className="hidden relative lg:flex  items-center justify-center h-full w-1/2 bg-gray-200">
                {/*<div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 round-r-full animate-bounce">hello</div>*/}
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>


            </div>
        </div>
        
        
    )
}

export default Login