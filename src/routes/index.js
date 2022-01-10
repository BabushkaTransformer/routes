import HomePage from "../pages/HomePage";
import PrivatePage from "../pages/PrivatePage";


export const HOME_ROUTE = "/";
export const PRIVATE_ROUTE = '/private';


export const routes = [
    {
        path: HOME_ROUTE,
        component: <HomePage/>
    },
    {
        path: PRIVATE_ROUTE,
        component: <PrivatePage/>,
        isPrivate: true
    },
];
