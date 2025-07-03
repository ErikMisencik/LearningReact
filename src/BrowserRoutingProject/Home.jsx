import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-500">Home Page</h2>
            <p className="text-gray-600 mt-4 text-lg text-center max-w-3xl">Welcome to the Home Page! Explore This page Right Now!</p>
            
            <button onClick={handleLogin} className="bg-gray-800 p-4 text-lg mt-4 text-white rounded-3xl">Login</button>

        </div>
    )
}

export default Home;