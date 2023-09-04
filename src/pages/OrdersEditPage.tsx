import React from 'react';
import { Row, Col, Spin } from 'keepd';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderForm } from '../components/OrderForm';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getOrderDetails } from '../api';
import { Order } from '../models';

export const OrderEditPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const queryClient = useQueryClient();
    
    const { data, isFetching } = useQuery(
        ['order', id],
        () => getOrderDetails(id),
    );

    const handleEditSuccess = (order: Order) => {
        queryClient.invalidateQueries({ queryKey: ['ordersList'] });
        navigate(`/details/${order.id}`);
    };

    if (isFetching) {
        return (
            <Row>
                <Col span={24}>
                    <Spin spinning={true}/>
                </Col>
            </Row>
        );
    }

    return (
        <Row>
            <Col span={12}>
                <OrderForm onSuccess={handleEditSuccess} defaultValues={data}/>
            </Col>
        </Row>

    );
};