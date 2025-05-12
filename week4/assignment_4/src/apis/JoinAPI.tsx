
export const JoinAPI = async (id: string, password: string, nickname: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loginId: id, password, nickname })
    });

    const data = await response.json();
    if (data.success) return { success: true, data: data};
    else return { success: false, data: data };
  } catch {
    return {success: false, data: "네트워크 에러"};
  }
};
