import { useNavigate } from "react-router-dom";

function Dashboard(){

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-150">
            <h2 className="text-3xl font-bold text-blue-900">Dashboard Page</h2>
            <p className="text-gray-700 mt-4 text-lg text-center max-w-3xl">Dashboard for Special People</p>
            <button onClick={handleLogout} className="bg-gray-800 p-4 text-lg mt-4 text-white rounded-3xl">Log out</button>
        </div>
    )
}

export default Dashboard;