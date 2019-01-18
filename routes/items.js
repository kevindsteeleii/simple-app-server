const router = require('express').Router();
const { Item } = require('../models');

router.route('/:id', (req, res, next) => {
  next();
})
.patch((req, res) => {
  Item.findByPk(req.params.id).then(item => {
    item.update({...req.body.item}).then(updateItem => res.json(updateItem));
  })
})
.delete((req, res) => {
  Item.findByPk(req.params.id).then(item => {
    item.destroy();
    res.json({ status: 'destroyed' });
  })
})

router.route('/', (req, res, next) => {
  next();
})
.get((req, res) => {
  Item.findAll().then(items => res.json(items));
})
.post((req, res) => {
  const { name } = req.body.item;
  Item.create({ name }).then(newItem => res.json(newItem));
})

router.all('*', (req, res, next) => {
  /* res.json({err: "Error 404: Route unavailable"}) */
  res.redirect('/items');
})

module.exports = router;