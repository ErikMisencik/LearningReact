import { Outlet, Link } from "react-router-dom";

function NotFound() {
     return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-500">404</h2>
            <p className="text-gray-600 mt-4 text-lg text-center max-w-3xl">Out Sheet page is not existing. GO HOME</p>
        </div>
    )
}

export default NotFound;