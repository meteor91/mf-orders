import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            keepPreviousData: false,
        },
    },
});

interface ModuleProps {
    basename?: string
}

const App: React.FC<ModuleProps> = (props) => {
    const [router] = useState(() => createBrowserRouter(routes, { basename: props.basename }));
    console.log(props);
    return (
        <QueryClientProvider client={queryClient}>
            <div className="redrock">
                <RouterProvider router={router} />
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;