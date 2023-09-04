import { OrdersListPage } from './pages/OrdersListPage';
import { OrdersCreatePage } from './pages/OrdersCreatePage';

export const routes = [
    {
        path: '/',
        element: <OrdersListPage />,
    },
    {
        path: '/create',
        element: <OrdersCreatePage />,
    },
];