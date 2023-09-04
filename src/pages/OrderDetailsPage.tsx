import React from 'react';
import { Row, Col, Spin, Button } from 'keepd';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOrderDetails } from '../api';
import { Order } from '../models';

export const OrderDetailsPage: React.FC = () => {
    const { id } = useParams();

    const { data, isFetching } = useQuery<Order>({
        queryFn: () => getOrderDetails(id),
        queryKey: ['order', id],
    });

    const navigate = useNavigate();

    const handleEditOrder = () => {
        navigate(`/edit/${id}`);
    };

    return isFetching ? (
        <Row>
            <Col span={24}>
                <Spin spinning={true}/>
            </Col>
        </Row>
    ) : (
        <>
            <Row>
                <Col span={24}>
                    <h1>details</h1>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    sender
                </Col>
                <Col span={12}>
                    {data.sender}
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    receiver
                </Col>
                <Col span={12}>
                    {data.receiver}
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button label="edit" onClick={handleEditOrder}/>
                </Col>
            </Row>
        </>
    );
};