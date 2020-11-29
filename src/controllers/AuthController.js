const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

module.exports = {
   async authenticate(req, res) {
      const {username, password } = req.body;

      const [adm] = await connection('adms').select('*').where({ username });
      
      if(!adm) 
         return res.status(400).json({ error: 'Adm not found'});

      if(!await bcrypt.compare(password, adm.password))
         return res.status(400).json({ error: 'Invalid password'});


      const token = jwt.sign({ id: adm.id}, authConfig.secret, {
         expiresIn: 24*60*60,
      });

      return res.json({logged: true, token});

   }
}