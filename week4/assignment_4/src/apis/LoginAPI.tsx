import { Axios } from "./Axios";

export const LoginAPI = async (newId: string, newPassword: string) => {
  try {
    const response = await Axios.post(`/api/v1/auth/signin`, {
        loginId: newId,
        password: newPassword,
    });
    
    const data = response.data;
    
    if (data.success) {
      localStorage.setItem("userId", data.data.userId); //로컬스토리지에 유저 아이디 저장
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch {
    return { success: false, message: "네트워크 에러" };
  }
};