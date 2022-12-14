require('dotenv').config();

const { Router } = require('express');
const { Videogame, Genre } = require('../db');
const router = Router();
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let APIKEY='a603fede66d74e62ac610635e5e26260';

       const URL = 'https://api.rawg.io/api/games'
 
       router.get('/videogames', async (req, res) => {
        let videogamesDb = await Videogame.findAll({
            include: Genre
        });
        //Parsear obj to json
        videogamesDb = JSON.stringify(videogamesDb);
        videogamesDb = JSON.parse(videogamesDb);
        //just gender.name
        videogamesDb = videogamesDb.reduce((acc, el) => acc.concat({
           
            ...el,
            genres: el.genres.map(g => g.name)
        }), [])
    
        if (req.query.name) {
            try {
                let name = req.query.name;
                let response = await axios.get(`${URL}?search=${name}&key=${APIKEY}`);
                if (!response.data.count) return res.status(404).send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
               
                //count to count ;)
                response.data.results = response.data.results.reduce((acc, el) => acc.concat({
                    // DB
                    ...el,
                    genres: el.genres.map(g => g.name)
                }), [])
                const filteredGamesDb = videogamesDb.filter(g => g.name.toLowerCase().includes(req.query.name.toLowerCase()));
                
                const results = [...filteredGamesDb, ...response.data.results.splice(0, 15)];
              
                return res.json(results)
            } catch (err) {
                return console.log(err)
            }
        } else {
            try {
                let pages = 0;
                let results = [...videogamesDb];// brigns state
                let response = await axios.get(`${URL}?key=${APIKEY}`);
                //axios brings api data
                while (pages < 4) {
                    pages++;
                    response.data.results = response.data.results.reduce((acc, el) => acc.concat({
                        // data results y concatena
                        ...el,
                        genres: el.genres.map(g => g.name)
                    }), [])
                    results = [...results, ...response.data.results]//saving in results array
                   
                    response = await axios.get(response.data.next)
                }
                return res.json(results)
            } catch (err) {
                console.log(err)
                return res.sendStatus(500)
            }
        }
    })
    

   
// GET /videogame/:idVideoGame
router.get('/videogame/:idVideogame', async (req, res) => {
    const { idVideogame } = req.params
    if (idVideogame.includes('-')) {
        let videogameDb = await Videogame.findOne({
            where: {
                id: idVideogame,
            },
            include: Genre
        })
        videogameDb = JSON.stringify(videogameDb);
        videogameDb = JSON.parse(videogameDb);
        videogameDb.genres = videogameDb.genres.map(g => g.name);
        res.json(videogameDb)
    };

    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${APIKEY}`);
        let { name, background_image, genres, description, released: releaseDate, rating, platforms }
         = response.data;
        genres = genres.map(g => g.name);
        platforms = platforms.map(p => p.platform.name);
        return res.json({
            name,
            background_image,
            genres,
            description,
            releaseDate,
            rating,
            platforms
        })
    } catch (err) {
        return console.log(err)
    }
})
// GET a /genres

router.get('/genres', async (req, res) => {
    const genresDb = await Genre.findAll();
    
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
    const genres = response.data.results;
    genres.forEach(async (g)=> {
        await Genre.findOrCreate({
            where: {
                name: g.name
            }
        })
    })
    res.send(genresDb)
})
//POST a /videogame

router.post('/videogame', async (req, res, next) => {
    const {img, name, released, genres, rating, description, platforms} = req.body;
    try {
        const newVideogame = await Videogame.create({
            img,
            name,
            released,
            genres,
            rating,
            description,
            platforms
        });
        genres?.forEach(async g => {
            var foundGenre = await Genre.findOne({
                where: {name: genres}
            });
            newVideogame.addGenre(foundGenre);
        });
        res.send(newVideogame);
    } catch (error) {
        next(error)
    }
});
//put

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const videogame = req.body;
        await Videogame.update(videogame, {
            where: {
                id: id
            }
        });
        res.status(200).send(`The videogame with id ${id} was updated`);
    } catch (error) {
        next(error)
    }
});

// Config routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;