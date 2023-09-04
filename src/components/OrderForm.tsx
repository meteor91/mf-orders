import React from 'react';
import { Form, Button } from 'keepd';
import { Order } from '../models';
import { createOrder, updateOrder } from '../api';
import { useSubmitForm } from '../queries/useSubmitForm';

interface OrderFormProp {
    onSuccess: (order?: Order) => void;
    defaultValues?: Order;
}

export const OrderForm: React.FC<OrderFormProp> = ({ onSuccess, defaultValues }) => {
    const mutation= useSubmitForm<Order>(defaultValues?.id ? updateOrder : createOrder);

    const handleSubmit = (data: Order) => {
        mutation.mutate(data, {
            onSuccess: (order: Order) => onSuccess(order),
        });
    };

    return (
        <Form<Order>
            onSubmit={handleSubmit}
            fieldErrors={mutation.fieldErrors}
            defaultValues={defaultValues}
        >
            <Form.Input name='sender' label='sender'  message={mutation.error?.sender?.[0]}/>
            <Form.Input name='receiver' label='receiver' message={mutation.error?.receiver?.[0]}/>

            <Form.Item>
                <Button label="Submit" type="submit" disabled={mutation.isLoading}/>
            </Form.Item>
        </Form>
    );
};