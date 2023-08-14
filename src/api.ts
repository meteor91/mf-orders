import { get } from './core/http';
import { IPaginatedData, Orders } from './models';

export const getOrdersList = (page: number, pageSize: number): Promise<IPaginatedData<Orders>> => get<IPaginatedData<Orders>>(
    `/orders/orders/?pageNumber=${page+1}&pageSize=${pageSize}`,
);
