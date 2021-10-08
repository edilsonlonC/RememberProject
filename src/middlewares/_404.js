import response from '../helper/response';
import Error from '../helper/error'

export default function _404 ( req, res, next){
    return response(res, req)({
        data: null,
        error: new Error(404,'Not Found')
    })
}