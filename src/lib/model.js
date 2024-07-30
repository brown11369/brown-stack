import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    user: {
        type: String,
    },
    userName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
    dev: {
        type: String,
    },
    linkdin: {
        type: String,
    },
    github: {
        type: String,
    },
    phone: {
        type: String,
    },
    home: {
        type: String,
    },
    about: {
        type: String,
    },
    skills: {
        type: String,
    },
    contact: {
        type: String,
    },
    pageImage: {
        type: String,
    },
    tech: {
        type: [String],
    },
    resume: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String,
    }
}, { timestamps: true })


const workSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    stack: {
        type: [String]
    },
    image: {
        type: String,
    },
    alt: {
        type: String,
    },
    description: {
        type: String,
    },
    gitHub: {
        type: String
    },
    link: {
        type: String
    },
    slug: {
        type: String,
        unique: true,
    }
}, { timestamps: true })

export const users = mongoose.models.users || mongoose.model("users", userSchema);
export const works = mongoose.models.works || mongoose.model("works", workSchema);