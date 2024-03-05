import React from 'react';
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect';
import {Pagination} from '@mui/material';
import s from './SuperPagination.module.css';

export type SuperPaginationPropsType = {
    id?: string;
    page: number;
    itemsCountForPage: number;
    totalCount: number;
    onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
                                                                 page,
                                                                 itemsCountForPage,
                                                                 totalCount,
                                                                 onChange,
                                                                 id = 'hw15',
                                                             }) => {
    const itemsPerPageOptions = [4, 7, 10];
    const lastPage = Math.ceil(totalCount / itemsCountForPage);

    const onChangeCallback = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
        onChange(selectedPage, itemsCountForPage);
    };

    const onChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newItemsCount = Number(event.target.value);
        onChange(1, newItemsCount); // При изменении количества элементов на странице переключаем на первую страницу
    };

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
        показать
      </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={itemsPerPageOptions.map((count) => ({id: count, value: count}))}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
        строк в таблице
      </span>
        </div>
    );
};

export default SuperPagination;
