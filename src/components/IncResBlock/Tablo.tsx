import { ReactNode } from "react";

type TabloPropsType = {
    className:string
    children:ReactNode
};
export const Tablo = ({className,children}: TabloPropsType) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};