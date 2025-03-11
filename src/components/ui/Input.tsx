import {InputHTMLAttributes} from 'react'
interface IProps extends InputHTMLAttributes<HTMLInputElement>  {


}

const Input = ({...rest}: IProps) => {

    return (
        <input
            type="text"
            className="p-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
            {...rest} />    )
}
export default Input