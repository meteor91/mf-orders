import { get, post } from './core/http';
import { IPaginatedData, Order } from './models';

export const getOrdersList = (page: number, pageSize: number): Promise<IPaginatedData<Order>> => get<IPaginatedData<Order>>(
    `/orders/orders/?pageNumber=${page+1}&pageSize=${pageSize}`,
);

export const createOrder = (order: Order): Promise<Order> => post<Order, Order>(
    '/orders/orders/',
    order,
);
