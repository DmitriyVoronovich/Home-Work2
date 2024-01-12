import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<NodeJS.Timer | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [dis, setDis] = useState<boolean>(false)
    const updateCurrentTime = () => {
        setDate(new Date());
    };

    const start = () => {
        // Запустить таймер и сохранить его идентификатор
        const id = setInterval(updateCurrentTime, 1000);
        setTimerId(id);
        setDis(true)
    };

    const stop = () => {
        // Остановить таймер и обнулить его идентификатор
        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined);
            setDis(false)
        }
    }
    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
setShow(false)
    }
    let formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    let formatterm = new Intl.DateTimeFormat("en-US", {
        month: "long",
    });
    let formatterd = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
    });
    const stringTime = formatter.format(date) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = new Intl.DateTimeFormat("ru").format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = formatterd.format(date) || <br/> // пишут студенты
    const stringMonth = formatterm.format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={dis} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!dis} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
