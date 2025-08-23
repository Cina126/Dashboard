import DashboardsPage from '../Pages/DashboardsPage/DashboardsPage'
import NFTPage from '../Pages/NFTPage/NFTPage';
import Tables from '../Pages/Tables/Tables';
import Profile from '../Pages/Profile/Profile';
import Signin from '../Pages/Signin/Signin';
import Signup from '../Pages/Signup/Signup';
import Page404 from '../Pages/Page404/Page404';
import Private from '../Pages/Private/Private';


const routes = [
    { path: "/", element: <Private><DashboardsPage></DashboardsPage></Private> },
    { path: "/NFT-Markets", element: <Private><NFTPage></NFTPage></Private> },
    { path: "/Tables", element: <Private><Tables></Tables></Private> },
    { path: "/Profile", element: <Private><Profile></Profile></Private> },
    { path: "/Signin", element: <Signin></Signin> },
    { path: "/Signup", element: <Signup></Signup> },
    { path: "*", element: <Page404></Page404> },
];

export default routes