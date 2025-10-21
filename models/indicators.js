import mongoose from "mongoose";

const indicatorsSchema = new mongoose.Schema({

    School : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schools',
        required: true 
    },
    year:{type: String, required:true},
    cluster:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups',
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subjects',
        required: true
    
    },
    description:{ type: String, required:true},

    period:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'periods',
        required: true
    },

    qualification:{
        type: String,
        enum: ['Superior', 'Alto', 'Basico', 'Bajo'],
        required: true 
    },
    userWhoDidIt:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'modelusers',
        required: true

    },
     active: { type: Boolean, default: true }

})

const Indicators = mongoose.model('Indicators', indicatorsSchema);

export default Indicators;