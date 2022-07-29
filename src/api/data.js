import { getUserCredential, getUserMessage } from "./dataFetch";

export const userCredential = async () => {
    try {
        const user = await getUserCredential()
        return user
    } catch (err) {
        if (err) {
            throw err
        }
    }
}

export const getMessage = async (user) => {
    try {
        const fetch = await getUserMessage(user)
        if (fetch.status === 200) {
            return fetch.data.msg
        }
        return []
    } catch (err) {
        if (err) {
            throw err
        }
    }
}


