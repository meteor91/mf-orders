import React from 'react';
import { OrdersList } from '../components/OrdersList';
import { Col, Row, Space, Button } from 'keepd';
import { useNavigate } from 'react-router-dom';

export const OrdersListPage: React.FC = () => {
    const navigate = useNavigate();
    const handleCreateOrder = () => {
        navigate('/create');
    };

    return (
        <>
            <Row>
                <Col span={24}>
                    <Space justify="end">
                        <Button label="Create" onClick={handleCreateOrder}/>
                    </Space>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <OrdersList />
                </Col>
            </Row>
        </>
    );
};