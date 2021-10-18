exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Lianafff' });
}
exports.submit_lead = function(req, res, next) {
    console.log("send email is: " + req.body.email);
    res.redirect("/");
}