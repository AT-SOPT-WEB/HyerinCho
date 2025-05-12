
export const updateUsernameAPI = async(userId:string, newNickname: string) => {
  try{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "userId": userId, 
      },
      body: JSON.stringify({nickname: newNickname }),
    })
    const data = await response.json();
    if(data.success){
      return {success: true, data: data}
    }
    else {
      return {success: false, data: data}}
  }catch{
    return {success: false, data: null}

  }
}