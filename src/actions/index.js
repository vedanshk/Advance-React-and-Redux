import { SAVE_COMMENT, FETCH_COMMENTS , CHANAGE_AUTH } from "./types";
import axios from "axios";
export const saveComment = (comment) => {
  return { type: SAVE_COMMENT, payload: comment };
};

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}


export const changeAuth= (isLoggedIn) =>{

  return { type: CHANAGE_AUTH , payload: isLoggedIn};

}