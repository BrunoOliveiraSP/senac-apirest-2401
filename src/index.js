import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import filmeController from './controller/filmeController.js'


// configura servidor
//
const servidor = express();
servidor.use(cors());
servidor.use(express.json());



// adiciona controllers
//
servidor.use(filmeController);



// inicia a API
const PORT = process.env.PORT;
servidor.listen(PORT, () => console.log(`API subiu na porta ${PORT}`));
