import DashboardsPage from '../Pages/DashboardsPage/DashboardsPage'
import NFTPage from '../Pages/NFTPage/NFTPage';
import Tables from '../Pages/Tables/Tables';
import Profile from '../Pages/Profile/Profile';
import Signin from '../Pages/Signin/Signin';
import Signup from '../Pages/Signup/Signup';
import Exam from '../Pages/Exam/Exam';

const routes = [
    { path: "/", element: <DashboardsPage></DashboardsPage> },
    { path: "/NFT Markets", element: <NFTPage></NFTPage> },
    { path: "/Tables", element: <Tables></Tables> },
    { path: "/Profile", element: <Profile></Profile> },
    { path: "/Signin", element: <Signin></Signin> },
    { path: "/Signup", element: <Signup></Signup> },
];

export default routes