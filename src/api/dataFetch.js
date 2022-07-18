import axios from "axios";
import jwtDecode from "jwt-decode";

export const getUserCredential = async () => {
    try {
        const user = await axios.get('http://localhost:3001/api/token', { withCredentials: true })
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
        const messages = await axios.get(`http://localhost:3001/api/get/message/${user}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return messages
    }
    catch {
        return null
    }
}

