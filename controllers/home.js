const TicketList = require('../models/ticketList')

module.exports = {
    
    getIndex : async (req, res) => {
        try {
            /* const tickets = await
            TicketList.find() */
            res.render("index.ejs");
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    
}