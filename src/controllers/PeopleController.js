const connection = require('../database/connection');
const yup = require('yup');

module.exports = {
   async create(req, res) {
      const {name, gender, email, birthday, place_of_birthday, nationality, cpf } = req.body;

      const data = {name, gender, email, birthday, place_of_birthday, nationality, cpf };

      const schema = yup.object().shape({
         name: yup.string().required(),
         gender: yup.string(),
         email: yup.string().email(),
         birthday: yup.date().required(),
         place_of_birthday: yup.string(),
         nationality: yup.string(),
         cpf: yup.string().length(11),
      });

      try {

         await schema.validate(data, {
            abortEarly: false,
         });
      
         const [id] = await connection('people').insert({name, gender, email, birthday, place_of_birthday, nationality, cpf });

         return res.json({ id });
      } catch(error) {
         if (error instanceof yup.ValidationError) {
            return res.json({ errors: error.errors});
         }

         return res.json(error);
      }
   },

   async update(req, res) {
      const { id } = req.params;
      
      const {name, gender, email, birthday, place_of_birthday, nationality, cpf } = req.body;

      const data = {name, gender, email, birthday, place_of_birthday, nationality, cpf };

      const schema = yup.object().shape({
         name: yup.string().required(),
         gender: yup.string(),
         email: yup.string().email(),
         birthday: yup.date().required(),
         place_of_birthday: yup.string(),
         nationality: yup.string(),
         cpf: yup.string().length(11),
      });

      try {
         await schema.validate(data, {
            abortEarly: false,
         });

         const response = await connection('people').where('id', id).update(data);

         return res.json({ status: !!response });

      } catch(error) {
         if (error instanceof yup.ValidationError) {
            return res.json({ errors: error.errors});
         }

         return res.json(error);
      }
   }
}