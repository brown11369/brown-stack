import { connectToDB } from "./connectToDB"
import { users, works } from "./model"


export const getWorks = async () => {
    try {
        connectToDB()
        const workDatas = await works.find()
        return workDatas;
    }
    catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const getWork = async (slug) => {
    try {
        connectToDB()
        const workData = await works.find({ slug })
        return workData;
    }
    catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const getUser = async () => {
    try {
        connectToDB()
        const userData = await users.find()
        return userData;
    }
    catch (error) {
        console.log(error)
        throw new Error(error)
    }
}