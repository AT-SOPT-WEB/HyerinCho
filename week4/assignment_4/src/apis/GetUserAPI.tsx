import { Axios } from "./Axios";

export const getUserAPI = async(nickname:string) => {
  try {
    const response = await Axios.get(`/api/v1/users?keyword=${encodeURIComponent(nickname)}`);
    const data = await response.data;
    if(data.success){
      return {success: true, data: data.data}
    }else{
      return {success: false, data: null}
    }

  }catch(error){
    console.log(error);
    return {success: false, data: null}
  }
}