import axios from "axios";
import jwtDecode from "jwt-decode";

export const getUserCredential = async () => {
    try {
        const user = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/token`, { withCredentials: true })
        const token = user.data.accessToken
        const decoded = jwtDecode(token)

        return { token, decoded }
    } catch (err) {
        if (err) {
            throw err
        }
    }
}

export const getUserMessage = async (user) => {
    const getToken = await getUserCredential()
    const token = getToken.token

    try {
        const messages = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get/message/${user}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return messages
    }
    catch (err){
        return err
    }
}

