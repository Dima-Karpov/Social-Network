import { resourceUsage } from "node:process";

export const required = (value: string) => {
    if(value) return undefined

    return 'Field is requered'
};

export const maxLengthCreators = (maxLength: number) => (value: string ) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined
};

