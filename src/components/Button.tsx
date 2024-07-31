type ButtonPropsType = {
    title:string 
    onClick:()=>void
    disabled?: boolean
    className:string
};
export const Button = ({title, onClick,className, disabled}: ButtonPropsType) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{title}</button>
    );
};