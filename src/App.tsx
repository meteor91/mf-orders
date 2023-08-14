import React from 'react';
import { QueryClientProvider } from 'react-query';

import { QueryClient } from 'react-query';
import { OrdersListPage } from './Pages/OrdersListPage';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});


const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="redrock">
                <OrdersListPage />
            </div>
        </QueryClientProvider>
    );
};

export default App;