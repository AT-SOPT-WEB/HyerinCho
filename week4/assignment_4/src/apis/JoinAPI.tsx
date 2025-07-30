import { Axios } from "./Axios";

export const JoinAPI = async (id: string, password: string, nickname: string) => {
  try {
    const response = await Axios.post(`/api/v1/auth/signup`, 
      {
        loginId: id, password, nickname 
      }
    );

    const data = await response.data;
    if (data.success) return { success: true, data: data};
    else return { success: false, data: data };
  } catch {
    return {success: false, data: "네트워크 에러"};
  }
};
