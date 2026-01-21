import {getToken} from "@/utils"
import { Navigate } from "react-router-dom"

export function AuthRouts({children}){
    const token = getToken()
    if(token){
        return <>{children}</>
    }else{
        return <Navigate to="/login" replace />
    }
}

