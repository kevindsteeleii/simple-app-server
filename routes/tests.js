const { Test } = require('../models');
const router = require('express').Router();

router.route('/:id')
.patch((req, res) => {
  Test.findByPk(req.params.id).then(test => test.update({...req.body.test})).then(test => res.json(test));
})
.delete((req, res) => {
  Test.findByPk(req.params.id).then(test => {
    test.destroy();
    res.redirect('/tests')
  })
})

router.route('/')
.get((req, res) => {
  Test.findAll().then(tests => res.json(tests));
})
.post((req, res) => {
  Test.create({...req.body.test}).then(newTest => res.json(newTest));
})

router.all('*', (req, res, next) => {
  res.redirect('/tests');
})

module.exports = router;