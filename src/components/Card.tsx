import Button from "./ui/Button"
import Image from "./ui/Image"
import {IProduct} from "../interfaces/index"
import { textSicer } from "../utils/function";
interface IProps {
    product: IProduct;

}

const Card = ({product }: IProps) => {

    return (
        <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col m-3">
            <Image imageUrl={product.imageURL} alt={"Car Photo"} className="rounded-md w-full object-contain h-52 "/>
        
            <h3 className="my-2 text-xl">{product.title}</h3>
            <p>
                {textSicer(product.description)}

            </p>
           
            <div className="flex items-center my-4 space-x-2 ">
            <span className="w-5 h-5 rounded-full bg bg-red-600 cursor-pointer "></span>
            <span className="w-5 h-5 rounded-full bg bg-blue-600 cursor-pointer "></span>
            <span className="w-5 h-5 rounded-full bg bg-yellow-600 cursor-pointer "></span>
                
           </div>
            
            <div className="flex  justify-between items-center">
                <h3>$ {product.price }</h3>
            <Image imageUrl={product.category.imageURL} alt={product.category.name} className="rounded-full w-10 h-10 object-bottom"/>
            </div>
           
            <div className="flex items-center space-x-2 my-2">
                
                <Button className=" bg-slate-600 " onClick={() => console.log("clicked")  }> Edit</Button>
                <Button className=" bg-red-600 "> Deleat</Button>
                <Button className=" bg-green-500 "> Succes</Button>
                <Button className=" bg-slate-300 "> Cancel</Button>
            </div>
        </div>
    )
}
export default Card