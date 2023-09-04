import React from 'react';
import { Row, Col } from 'keepd';
import { useNavigate } from 'react-router-dom';
import { OrderForm } from '../components/OrderForm';

export const OrdersCreatePage: React.FC = () => {
    const navigate = useNavigate();
    const handleCreateOrder = () => {
        navigate('/');
    };

    return (
        <Row>
            <Col span={12}>
                <OrderForm onSuccess={handleCreateOrder} />
            </Col>
        </Row>

    );
};