import { report } from "process"
import express, {Request, Response} from "express"

/**const atau let digunakan untukk mendeklarasikan
 * sebuah variable/object/array/function
 */
const luasLingkaran = (request: Request,response: Response)=>{
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = phi * r * r;
        return response.status(200)
        .json({
            status:true,
            r,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const kelilingLingkaran = (request:Request,response:Response)=>{
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const keliling = 2 * phi * r  
        return response.status(200)
        .json({
            status:true,
            r,
            keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
export{luasLingkaran, kelilingLingkaran}
