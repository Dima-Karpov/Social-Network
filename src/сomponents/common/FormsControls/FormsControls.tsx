import React from 'react';
import s from './FromControls.module.css';

const FormControl = (props: any) => {
    const hasError = meta.touced && meta.error;

    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                <textarea  {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}


export const Textarea = ({ input, meta, ...props }: any) => {

    const hasError = meta.touced && meta.error;

    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                <textarea  {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
};
export const Input = ({ input, meta, ...props }: any) => {

    const hasError = meta.touced && meta.error;

    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                <input  {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
};