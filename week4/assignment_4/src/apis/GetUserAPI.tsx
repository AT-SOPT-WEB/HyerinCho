export const getUserAPI = async(nickname:string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users?keyword=${encodeURIComponent(nickname)}`, {
      method: "GET",
    });

    const data = await response.json();
    if(data.success){
      return {success: true, data: data.data}
    }else{
      return {success: false, data: null}
    }

  }catch{
    return {success: false, data: null}
  }
}