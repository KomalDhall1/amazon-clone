const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        reuired: true,
        type: String,
        trin: true, //remove all leading and trailing spaces
    },
    email: {
        required: true,
        type: String,
        trin: true,
        validate: {
            validator: (value) => {
                const re =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: 'Please enter a valid email address',
        }
    },
    password: {
        required: true,
        type: String,
        validate: {
            validator: (value) => {
                return value.length > 6;
            },
            message: "Please enter longer password",
        }
    },
    address: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'user',
    },
    //cart
})

const User = mongoose.model('User', userSchema);
module.exports = User;