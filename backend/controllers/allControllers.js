const DataEntry = require("../models/dataEntryModel")
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


//create new entry 
exports.newEntry = catchAsyncErrors(async (req, res, next) => {
    const { longitude,latitude,radius } = req.body;

    const entry = await DataEntry.create({longitude,latitude,radius});


    const entries = await DataEntry.find();
    res.status(201).json(entries)
})



// get all entries
exports.getAllEntries = catchAsyncErrors(async (req, res, next) => {
    
    const entries = await DataEntry.find();

   

    res.status(200).json(entries)
});



// delete all
exports.deleteEntry = catchAsyncErrors(async (req, res, next) => {
    // const entry = await DataEntry.findById(req.params.id);

    // if (!entry) {
    //     return next(new ErrorHander("entry not found with this Id"));
    // }

    // await entry.remove();

    DataEntry.deleteMany({},()=>{});

    res.status(200).json({
        success: true,

    })
});