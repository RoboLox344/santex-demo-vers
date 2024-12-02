function isAdmin(req, res, next) {  
    if (req.session.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Access denied' });
    }
}

module.exports = isAdmin;