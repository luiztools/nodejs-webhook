const express = require('express');
const router = express.Router();
const sendWebHook = require("../wh-server");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post("/", (req, res, next) => {
  const cliente = req.body.cliente;
  const valor = Number(req.body.valor);
  const produto = Number(req.body.produto);

  sendWebHook({ cliente, valor, produto });

  res.json({ cliente, valor, produto });
})

module.exports = router;
