import { useLocation } from "react-router-dom";

const CurrentLocation = () => {  

    const location = useLocation();

    return (
        <div className=" mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">Current Path: {location.pathname}</h2>
        </div>
    );

};  

export default CurrentLocation;