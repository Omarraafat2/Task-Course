import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    width?: "w-full" | "w-fitt"

}

const Button = ({ children, className,width ="w-full" , ...rest}: IProps) => {

    return (
        <button className={`${className} ${width} w-full rounded-md py-3 text-white  `} {...rest} > {children}</button>
    )
}
export default Button