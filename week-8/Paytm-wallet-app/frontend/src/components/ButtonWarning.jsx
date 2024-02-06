import { Link } from "react-router-dom";

export default function ButtonWarning({warning,spanTag,to}){
    return <div className="flex justify-center">
        <div>
            {warning}
        </div>
        <Link className=" underline cursor-pointer" to={to}>
            {spanTag}
        </Link>
    </div>
}