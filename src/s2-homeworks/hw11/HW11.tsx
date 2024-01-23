import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState, saveState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

function HW11() {
    const [value1, setValue1] = useState<number>(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState<number>(restoreState<number>('hw11-value2', 100))

    const change = (event: any, value: number | number[]) => {
        // Если values - массив, обновите и value1, и value2
        if (Array.isArray(value)) {
            setValue1(value[0]);
            setValue2(value[1]);
            saveState('hw11-value1', value[0]);
            saveState('hw11-value2', value[1]);
        } else {
            // Если это не массив, обновите только value1
            setValue1(value);
            saveState('hw11-value1', value);
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Домашнее задание #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={(event, value) => change(event, value)}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1, value2]}
                            onChange={(event, value) => change(event, value)}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11;
