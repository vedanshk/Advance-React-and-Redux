
import { CHANAGE_AUTH } from "../actions/types";

export default function (state = false , action){

    switch(action.type){

        case CHANAGE_AUTH :  return  action.payload;

        default:
            return state;
    }
}