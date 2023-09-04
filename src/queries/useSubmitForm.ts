import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { FieldError } from 'keepd';
import { ServerValidateErrors } from '../models';

export const useSubmitForm = <T>(api: (data: T) => Promise<T>) => {
    const mutation = useMutation<T, ServerValidateErrors<T>, T>(api);

    const fieldErrors = useMemo(() => {
        const result: FieldError<T>[] = [];

        if (mutation.error) {
            for (const [fieldName, error] of Object.entries(mutation.error)) {
                result.push({
                    //@ts-ignore
                    fieldName,
                    error: {
                        message: error[0],
                    },
                });
            }
        }

        return result;
    }, [mutation.error]);

    return {
        ...mutation,
        fieldErrors,
    };
};