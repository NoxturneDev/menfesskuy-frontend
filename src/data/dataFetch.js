import axios from "axios";
import jwtDecode from "jwt-decode";

export const getUserCredential = async () => {
    try {
        const user = await axios.get('http://localhost:3001/api/token', { withCredentials: true })
        const token = user.data.accessToken
        const decoded = jwtDecode(token)
        
        return decoded
    } catch (err) {
        if (err) {
            return {}
        }
    }
}