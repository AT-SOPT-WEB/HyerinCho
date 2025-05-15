import { Axios } from "./Axios";

export const CheckNicknameAPI = async(userId: string) => {
  try{
    const response = await Axios.get(`/api/v1/users/me`, {
      headers: {userId}
    });
    const data = await response.data;
    if(data.success){
      return {success: true, data: data.data.nickname};
    }
    else {
      return {success: false, data: data.message}
    };
    
  }catch{
    return {success: false, message: "네트워크 에러"}
  }
}