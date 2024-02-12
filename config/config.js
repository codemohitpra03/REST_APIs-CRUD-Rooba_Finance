const config={
    production :{
        DATABASE: `${process.env.MONGO_URI}/profiles`
    },
    default : {
        DATABASE: `${process.env.MONGO_URI}/profiles`
    }
}


exports.get = function get(env){
    return config[env] || config.default
}