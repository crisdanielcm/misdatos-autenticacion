const sql = require('../database');

const User = function(user) {
    this.user_id = user.user_id;
    this.name = user.name;
    this.lastname = user.lastname;
    this.birth_date = user.birth_date;
    this.email = user.email;
};

User.findByEmail = (userEmail, result) => {
    sql.query("SELECT * FROM users WHERE email = ?", userEmail, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        if (res.length > 0) {
            result(null, res);
            return;
        }
        result(null, res);
    });
};

module.exports = User;