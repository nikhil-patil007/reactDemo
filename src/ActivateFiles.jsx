import { Navigate, Outlet,/* useNavigate */ } from "react-router-dom"

export default function ActivateFiles () {
    // const navigate = useNavigate()
    const navs = false;
    if(navs){
        console.log('This is page outlate called')
        return <Outlet />;
    }else{
        console.log('This is login page')
        return <Navigate to="/login" />
        // return navigate('login');
    }
}