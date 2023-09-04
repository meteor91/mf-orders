import React from 'react';
import { Row, Col } from 'keepd';
import { useNavigate } from 'react-router-dom';
import { OrderForm } from '../components/OrderForm';

export const OrderCreatePage: React.FC = () => {
    const navigate = useNavigate();
    const handleCreateSuccess = () => {
        navigate('/');
    };

    return (
        <Row>
            <Col span={12}>
                <OrderForm onSuccess={handleCreateSuccess} />
            </Col>
        </Row>

    );
};