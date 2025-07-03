
import { Outlet, Link, useSearchParams } from "react-router-dom";

function About() {

    
    const [searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get("topic") || "general";


    const handleTopic = (newTopic) => {
        setSearchParams({ topic: newTopic });
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-150">
            <h2 className="text-3xl font-bold text-blue-900">About Page</h2>
            <p className="text-gray-700 mt-3 text-lg text-center max-w-3xl">This is page that have information about me</p>

            <nav className="mt-6">
                <ul className="flex flex-row items-center justify-center space-x-4">
                    <li> <Link to="team" className="text-blue-700 hover:underline">Our Team</Link> </li>
                    <li> <Link to="/" className="text-blue-700 hover:underline"> Back to Home</Link> </li>
                </ul>
            </nav>

            <div className="mt-6">
                <h3 className="text-xl text-gray-800">Choose a topic:</h3>
                <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                    <button onClick={() => handleTopic("Team")} className="px-4 py-2 mb-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 "> Team </button>
                    <button onClick={() => handleTopic("Mission")} className="px-4 py-2 mb-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 "> Mission </button>
                    <button onClick={() => handleTopic("Vision")} className="px-4 py-2 mb-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 "> Vison </button>
                </div>
                 <h3 className="text-xl text-gray-800">Current topic: {topic}</h3>
            </div>

            <div className="mt-8 w-full min-w-4xl ,-">
                <Outlet />
            </div>
        </div>
    )
}

export default About;