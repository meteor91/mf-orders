export enum Status {
    PACKING = 'PACKING',
    ON_THE_MAY = 'ON_THE_MAY',
    READY_TO_TAKE = 'READY_TO_TAKE',
}
export interface Orders {
    id: number;
    status: Status;
    receiver: string;
    sender: string;
}
/**
 * Структура пагинированного списка.
 *
 * @prop total Общее количество элементов.
 * @prop offset Отступ от начала.
 * @prop result Текущий срез элементов.
 */
export interface IPaginatedData<T> {
    totalPages: number;
    results: T[];
}

export interface Pagination {
    pageIndex: number;
    pageSize: number;
}
