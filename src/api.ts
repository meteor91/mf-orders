import { get, post, put } from './core/http';
import { IPaginatedData, Order } from './models';

export const getOrdersList = (page: number, pageSize: number): Promise<IPaginatedData<Order>> => get<IPaginatedData<Order>>(
    `/orders/orders/?pageNumber=${page+1}&pageSize=${pageSize}`,
);

export const getOrderDetails = (id: string): Promise<Order> => get<Order>(
    `/orders/orders/${id}/`,
);

export const createOrder = (order: Order): Promise<Order> => post<Order, Order>(
    '/orders/orders/',
    order,
);

export const updateOrder = (order: Order): Promise<Order> => put<Order, Order>(
    `/orders/orders/${order.id}/`,
    order,
);