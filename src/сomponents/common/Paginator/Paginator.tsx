import React, { useState } from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    console.log('pga', props.currentPage)

    let portionSize = 20

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let x = 1; x <= pagesCount; x++) {
        pages.push(x)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={s.paginator}>

        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p} style={{ display: 'alignItems', marginLeft: '5px' }}
                    className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p} </span>
            })}

        {
            portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
                NEXT</button>}

    </div>

}