import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, type ColumnDef } from 'keepd';
import { getOrdersList } from '../api';
import { Order, Pagination } from '../models';


export const OrdersList: React.FC = () => {
    const [pageCount, setPageCount] = useState<number>();
    const [pagination, setPagination] = useState<Pagination>({
        pageIndex: 0,
        pageSize: 5,
    });
    const { isLoading, data } = useQuery(
        ['ordersList', pagination],
        () => getOrdersList(pagination.pageIndex, pagination.pageSize),
    );

    useEffect(() => {
        if (data) {
            setPageCount(data.totalPages);
        }
    }, [data]);


    return (
        <Table<Order>
            columns={columns}
            data={data?.results ?? []}
            loading={isLoading}
            onPaginationChange={setPagination}
            pagination={pagination}
            pageCount={pageCount}
        />
    );
};

const columns: Array<ColumnDef<Order>> = [
    {
        header: 'Receiver',
        accessorKey: 'receiver',
    },
    {
        header: 'Sender',
        accessorKey: 'sender',
    },
    {
        header: 'Status',
        accessorKey: 'status',
    },
];