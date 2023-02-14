
const TicketList = require('../models/ticketList')
//const User = require('../models/User')

module.exports = {
    getProfile: async (req, res) => {
        console.log(req.user.id)
        try {
          //Since we have a session each request (req) constains the logged-in users info: req.user
          //console.log(req.user) tp see everything
          //Grabbing just the posts of the logged-in user
        // const user = await User.findById({user: req.params.id})
          const tickets = await TicketList.find({ user: req.user.id });
          //Sending post data from mongodb and user data to ejs template
          res.render("profile.ejs", {  ticketList: tickets, user: req.user});
          console.log(tickets)
        } catch (err) {
          console.log(err);
        }
      },
     isAdmin: async (req, res) => {
        console.log(req.user.isAdmin)
        try {
          //Since we have a session each request (req) constains the logged-in users info: req.user
          //console.log(req.user) tp see everything
          //Grabbing just the posts of the logged-in user
        // const user = await User.findById({user: req.params.id})
          const tickets = await TicketList.find({  });
          //Sending post data from mongodb and user data to ejs template
          res.render("admin.ejs", {  ticketList: tickets, user: req.user});
          console.log(tickets)
        } catch (err) {
          console.log(err);
        }
      },
      createTicket: async (req, res) => {
        const newTicket = new TicketList(
            {
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                severity: req.body.severity,
                description: req.body.description,
                status: req.body.status,
                user: req.user.id,
                employeeID: req.user.employeeID,
                firstName: req.user.firstName,
                lastName:req.user.lastName
            });
        try {
            await newTicket.save();
            console.log(newTicket)
            res.redirect("/profile");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/profile");
        }
    },
  
    deleteTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/admin");
        });
    },
    updateTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndUpdate(
            id,
            {
                status: 'Approved'
              
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/admin");
            });
    },

    denyTicket: (req, res) => {
      const id = req.params.id;
      TicketList.findByIdAndUpdate(
          id,
          {
              status: 'Denied'
            
          },
          err => {
              if (err) return res.status(500).send(err);
              res.redirect("/admin");
          });
  },
}