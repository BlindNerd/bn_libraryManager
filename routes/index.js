const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const Books = require('..//models').books;
const Patrons = require('..//models').patrons;
const Loans = require('..//models').loans;
// bring in sequelize operators to compare dates
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// add moment to my routes to manage loaned_on and returned_on date make it human readable and sqllite format
const moment = require('moment');
const today = moment(new Date()).format('YYYY-MM-DD');
const sevenDaysFromNow = moment(new Date()).add(7, 'days').format('YYYY-MM-DD');
console.log(today);
console.log(sevenDaysFromNow);

  // set body parser up
 router.use(bodyParser.json());
 router.use(bodyParser.urlencoded({ extended: false }));

   // render the home page at the / address
   router.get('/', (req, res) => {
     res.render('home')
   })

   // render the all_books page at the all_books view
    router.get('/books', (req, res, next) => {
     Books.findAll({
       order: [['title', 'ASC']]
        }).then((books) => {
             res.render('all_books', { books: books })
          }).catch(err => {
            next(err);
          })
    })

   // render the all_loans page at the all_loans view
   router.get('/loans', (req, res, next) => {
     Loans.findAll({
       order: [[ 'id', 'DESC' ]],
       include: [{model: Books},
                 {model: Patrons}]
        }).then((loans) => {
            res.render('all_loans', {loans: loans})
        }).catch((err) => {
          next(err);
        });
      })

   // render the all_patrons page at the all_patrons view
   router.get('/patrons', (req, res, next) => {
     Patrons.findAll({
              order: [[ 'last_name', 'ASC']]
            })
            .then((patrons) => {
              res.render('all_patrons', { patrons: patrons })
            }).catch(err => {
              next(err);
            });
        })

   // render the book_detail page at the book_detail view
   router.get('/books/book_detail/:id', (req, res, next) => {
      Books.findById(req.params.id)
           .then((book) => {
             return book
         }).then((book) => {
           Loans.findAll({
             where: [{
               book_id: req.params.id
             }],
             include: [
               {model: Books},
               {model: Patrons}]
           }).then((loans) => {
             console.log(loans);
             res.render('book_detail', { book: book, loans: loans})
           })
         }).catch(err => {
           next(err);
         });
       })

 // update the patrons page
    router.post('/books/book_detail/:id', (req, res, next) => {
      Books.update(req.body, {
        where: [{
            id: req.params.id
        }]
      }).then((books) => {
        res.redirect('/books')
      }).catch((err) => {
        next(err);
      })
    }) // end of post update loans

   // render the checked_books page at the checked_books view
   router.get('/books/checked_books', (req, res, next) => {
     Loans.findAll({
       where: [{
           returned_on: {
             [Op.eq]: 'Not Returned'
           }
         }],
         include: [
           {model: Books},
           {model: Patrons}
         ]
     }).then(loans => {
       res.render('checked_books', {loans: loans})
     }).catch(err => {
       next(err);
     });
    })

   // render the checked_loans page at the checked_loans view
   router.get('/loans/checked_loans', (req, res, next) => {
     Loans.findAll({
       where: [{
         returned_on: {
           [Op.eq]: 'Not Returned' // sequelize operators
         }
       }],
       include: [
         {model: Books},
         {model: Patrons}
       ]
      }).then(loans => {
        res.render('checked_loans', {loans: loans});
      }).catch(err => {
        next(err);
      });
    })

 // render the new_book page at the new_book view
 router.get('/books/new_book', (req, res, next) => {
   res.render('new_book', { books: Books.build() })
 })

   // add post to handle submits
  router.post('/books/new_book', (req, res, next) => {
    console.log(req.body);
    Books.create(req.body)
         .then((books) => {
           res.redirect('/books')
         }).catch(err => {
           next(err);
         });
  })

   // render the new_loan page at the new_loan view
   router.get('/loans/new_loan', (req, res, next) => {
     Books.findAll({
       order: [[ 'title', 'ASC']]
     }).then((books) => {
            return books;
          }).then((books) => {
            Patrons.findAll({
              order: [[ 'last_name', 'ASC' ]]
            }).then((patrons) => {
                    res.render('new_loan', { books: books,
                                           patrons: patrons,
                                             loans: Loans.build(),
                                             today,
                                             sevenDaysFromNow })
                }).catch((err) => {
                  next(err);
              })// end of catch
            })// end of return books then (promise)
          })// end of render

// add the post route to create the loans table
   router.post('/loans/new_loan', (req, res, next) => {
     Loans.create(req.body)
          .then((loans) => {
        res.redirect('/loans');
     }).catch((err) => {
       console.log('Something went wrong with posting a new loan',err);
     })
   })

   // render the new_patron page at the new_patron view
   router.get('/patrons/new_patron', (req, res, next) => {
     res.render('new_patron', { patrons: Patrons.build() })
   })

  // add a post route to add the data to the table and redirect back to the all patrons page
   router.post('/patrons/new_patron', (req, res, next) => {
     Patrons.create(req.body)
            .then((patrons) => {
              res.redirect('/patrons/');
            })
          });

   // render the overdue_books page at the overdue_books view
   router.get('/books/overdue_books', (req, res, next) => {
     Loans.findAll({
       where: [{
         return_by: {
           [Op.lt]: today,
           [Op.ne]: ''
         },

         returned_on: {
           [Op.eq]: 'Not Returned'
         }
       }],
        include: [
          {model: Books},
          {model: Patrons}
        ]
     }).then(loans => {
       res.render('overdue_books', {loans: loans});
     })
   })

   // render the overdue_loans page at the overdue_loans view filter by return by and not returned
   router.get('/loans/overdue_loans', (req, res, next) => {
     Loans.findAll({
       where: [{
         return_by: {
           [Op.lt]: today,
           [Op.ne]: ''
         },
         returned_on: {
          [Op.eq]: 'Not Returned'
         }
       }],
       include: [
         {model: Books},
         {model: Patrons}
       ]
       }).then(loans => {
         console.log(loans);
         res.render('overdue_loans', {loans: loans});
     })
    })

   // render the patron_detail page at the patron_detail view
   router.get('/patrons/patron_detail/:id', (req, res, next) => {
      Patrons.findById(req.params.id)
             .then((patron) => {
             return patron
           }).then((patron) => {
              Loans.findAll({
                where: [{
                 patron_id: req.params.id
                }],
                include: [
                   {model: Books},
                   {model: Patrons}]
           }).then((loans) => {
             console.log(patron);
             res.render('patron_detail', { patron: patron, loans: loans})
           })
         })
       })// end of get patron details

  // update the patrons page
     router.post('/patrons/patron_detail/:id', (req, res, next) => {
       console.log(req.body);
       Patrons.update(req.body, {
         where: [{
             id: req.params.id
         }]
       }).then((patron) => {
         res.redirect('/patrons')
       }).catch((err) => {
         next(err);
       })
     }) // end of post update loans


   // render the returned_book page at the returned_book view
   router.get('/books/return_book/:id', (req, res, next) => {
     Loans.findAll({
       where: [{
           id: req.params.id
       }],
       include: [
         {model: Books},
         {model: Patrons}]
     }).then((loans) => {
       console.log(loans);
       res.render('return_book', {loans: loans[0], today})
     })
   }) // end of get return

   // render the returned_book page at the returned_book view
   router.post('/books/return_book/:id', (req, res, next) => {
     console.log(req.body);
     Loans.update(req.body, {
       where: [{
           id: req.params.id
       }]
       }).then((loans) => {
       res.redirect('/loans')
     }).catch((err) => {
       next(err);
     })
   }) // end of post update loans

module.exports = router;
