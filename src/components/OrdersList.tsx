import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, type ColumnDef } from 'keepd';
import { getOrdersList } from '../api';
import { Order, Pagination } from '../models';
import { Link } from 'react-router-dom';


export const OrdersList: React.FC = () => {
    const [pageCount, setPageCount] = useState<number>();
    const [pagination, setPagination] = useState<Pagination>({
        pageIndex: 0,
        pageSize: 5,
    });
    const { isFetching, data } = useQuery(
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
            loading={isFetching}
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
    {
        header: 'gg',
        accessorKey: 'id',
        cell: (info) => <Link to={`/details/${info.getValue()}`}>Details</Link>,
    },
];