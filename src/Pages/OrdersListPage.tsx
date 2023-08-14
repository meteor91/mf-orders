import React from 'react';
import { OrdersList } from '../components/OrdersList';
import { Col, Row, Space, Button } from 'keepd';

export const OrdersListPage: React.FC = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Space justify="end">
                        <Button label="Create"/>
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