import { Link } from 'react-router-dom'
import './Page404.css';

import ReplyAllIcon from '@mui/icons-material/ReplyAll';

export default function Page404() {
    return (
        <div className='Page404'>
            <span className='Page404__404'>Error <span className='Page404__404__Red'>404</span> : Page <span className='Page404__404__Red'>Not</span> Found</span>
            <Link to={"/"} className='Page404__Redirect'>
                Go To Dashboard Page
                <ReplyAllIcon></ReplyAllIcon>
            </Link>
        </div>
    )
}
