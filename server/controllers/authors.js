const mongoose = require('mongoose'); 
const Author = mongoose.model('Author');


module.exports = {

    getAuthors: function(req, res){
        console.log('IN authors')
        Author.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },

    // getCake: (req, res) => {
    //     console.log('get one in cakes')
    //     Cake.findOne({ _id: req.params.id })
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

    // addCake: (req, res) => {
    //     console.log('add in cakes')
    //     Cake.create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    //   },


    // updateCake: (req, res) => {
    //     console.log('update in cakes')
    //     Cake.findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

    // deleteCake: (req, res) => {
    //     console.log("delete in cakes")
    //     Cake.findByIdAndRemove({_id: req.params.id})
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    //   }
}