const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema(

    {
        id:{
            type: Number,
            required: true
        },

        name:{
            type: String,
            require: true
        },
      
        image:{
            url:{type: String }
        },
        
        powerStats:{
            intelligence: {type: Number},
            strength: {type: Number},
            speed: {type: Number},
            durability: {type: Number},
            power: {type: Number},
            combat: {type: Number},
        },
        biography: {
            alterEgos: {type: String},
            fullName: {type: String},
            aliases: [ String ],
            placeOfBirth: {type: String},
            firstAppearance: {type: String},
            publisher: {type: String},
            alignment: {type: String},
        },
        work:{  
            occupation: {type: String},
            base: {type: String},
        },
        connections:{
            groupAffiliation: {type: String},
            relatives: {type: String},
        },
        appearance:{
            eyeColor: {type: String},
            hairColor: {type: String},
            gender:{
                type: String,
                require: true
            },
            race: {type: String},
            height: [String],
            weight: [String]
        }
    },
    {
        tymestamps: true
    }
);

const Hero = mongoose.model('Heroes', heroSchema);

module.exports = Hero;