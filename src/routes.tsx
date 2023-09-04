import React from 'react';
import { Outlet } from 'react-router-dom';
import { OrdersListPage } from './pages/OrdersListPage';
import { OrderCreatePage } from './pages/OrderCreatePage';
import { OrderDetailsPage } from './pages/OrderDetailsPage';
import { OrderEditPage } from './pages/OrdersEditPage';
import { NavigationManager } from './components/NavigationManager';

export const routes = [
    {
        path: '/',
        element:(
            <NavigationManager>
                <Outlet />
            </NavigationManager>
        ),
        children: [
            {
                index: true,
                element: <OrdersListPage />,
            },
            {
                path: '/create',
                element: <OrderCreatePage />,
            },
            {
                path: '/details/:id',
                element: <OrderDetailsPage />,
            },
            {
                path: '/edit/:id',
                element: <OrderEditPage />,
            },
        ],
    },
];