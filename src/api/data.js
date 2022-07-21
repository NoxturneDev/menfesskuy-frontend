import { getUserCredential, getUserMessage } from "./dataFetch";

export const userCredential = async () => {
    try {
        const user = await getUserCredential()

        console.log(user)
        return user
    } catch (err) {
        if (err) {
            throw err
        }
    }
}

export const getMessage = async (user) => {
    try {
        const messages = await getUserMessage(user)
        return messages.data.msg
    } catch (err) {
        if (err) {
            throw err
        }
    }
}


