import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Table, type ColumnDef } from 'keepd';
import { getOrdersList } from '../api';
import { Orders, Pagination } from '../models';


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
        <Table<Orders>
            columns={columns}
            data={data?.results ?? []}
            loading={isLoading}
            onPaginationChange={setPagination}
            pagination={pagination}
            pageCount={pageCount}
        />
    );
};

const columns: Array<ColumnDef<Orders>> = [
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