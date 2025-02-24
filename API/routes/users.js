import express from 'express';

const router = express.Router();

let users = [
  {
    "nome":"Lois Woolger",
    "nomeDeUsuário":"lwoolger0",
    "email":"lwoolger0@stumbleupon.com",
    "telefone":"(106) 4975245"
  },
  {
    "nome":"Klement Vasyushkhin",
    "nomeDeUsuário":"kvasyushkhin1",
    "email":"kvasyushkhin1@youtube.com",
    "telefone":"(771) 6389076"
  },
  {
    "nome":"Timoteo Schubart",
    "nomeDeUsuário":"tschubart2",
    "email":"tschubart2@barnesandnoble.com",
    "telefone":"(782) 6806961"
  },
  {
    "nome":"Hatti Waslin",
    "nomeDeUsuário":"hwaslin3",
    "email":"hwaslin3@blogger.com",
    "telefone":"(528) 6066050"
  }
];

router.get('/',(req,res) =>{
  res.send(users);
});

router.get('/:username',(req,res)=>{
  const { username } = req.params;

  const USER = users.find((user) => user.nomeDeUsuário === username);

  res.send(USER);
});

router.post('/',(req,res)=>{
  const user = req.body;

  users.push(user);
  res.send(`user ${user.nome} was added to the database`);
});



export default router;