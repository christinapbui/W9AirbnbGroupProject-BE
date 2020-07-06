const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
    tag: { 
        type: String,
        // required: [true, "tag is required"],
        unique: true,
        trim: true,
        lowercase: true
    }
})

TagSchema.statics.convertToObject = async function(array){
    let foo = array.map(async el => {
        let bar = await this.findOne({ tag: el.toLowerCase().trim() })
        if(bar)
            return bar
        bar = await this.create({ tag: el.toLowerCase().trim() })
        return bar
    })
    let result = await Promise.all(foo)
    return result
}

module.exports = mongoose.model("Tag", TagSchema)