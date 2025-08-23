import './App.css';
import ContextProvider from './Context/ContextProvider';
import { useRoutes } from 'react-router-dom'
import routes from './Routes/routes';

export default function App() {
    const routesUser = useRoutes(routes);
    return (
        <ContextProvider>
            {routesUser}
        </ContextProvider>
    )
}
