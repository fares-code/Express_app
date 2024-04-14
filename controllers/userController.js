const User = require("../models/customerSchema");
var moment = require("moment");



const user_index_get=  (req, res) => {
    // result ==> array of objects
    
    console.log("--------------------------------------------");
    User.find()
        .then((result) => {
            res.render("index", { arr: result, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
};



const user_edit_get = (req, res) => {
    User.findById(req.params.id)
        .then((result) => {

            res.render("user/edit", { obj: result, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
    };




const user_view_get =  (req, res) => {
    // result ==> object
    User.findById(req.params.id)
        .then((result) => {
            res.render("user/view", { obj: result, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
}




const user_search_post = (req, res) => {
    console.log("*******************************************************************************************************")
    console.log(req.body.search.trim())
    const searchText = req.body.search.trim()
    User.find({ $or: [{ fireName: searchText }, { lastName: searchText }] })
        .then((result) => {
            console.log(result);
            res.render('user/search', { array: result });
        })
        .catch((err) => {
            console.log(err);
        });
}


const user_indix_delet = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.redirect("/");
            console.log(result)
        })
        .catch((err) => {
            console.log(err);
        });
}



const user_update =  (req, res) => {
    console.log("****************************************************************************")
    User.findByIdAndUpdate(req.params.id, req.body).then(
        (result) => {
            console.log(result)
            console.log("DATA UPDATED")
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );

    res.redirect('/')
}
const user_add_get = (req, res) => {
    res.render("user/add");
}

const user_save_add=(req, res) => {

    User.create(req.body)
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
}







module.exports = {
    user_index_get,
    user_edit_get,
    user_view_get,
    user_search_post,
    user_indix_delet,
    user_update,
    user_add_get,
    user_save_add
};