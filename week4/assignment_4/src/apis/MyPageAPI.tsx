import { Axios } from "./Axios";

export const updateUsernameAPI = async(userId:string, newNickname: string) => {
  try{
    const response = await Axios.patch(`/api/v1/users`, 
      {nickname: newNickname},
      {headers: {userId: userId}}
    )
    const data = await response.data;
    if(data.success){
      return {success: true, data: data}
    }
    else {
      return {success: false, data: data}}
  }catch(error){
    console.log(error)
    return {success: false, data: null}

  }
}