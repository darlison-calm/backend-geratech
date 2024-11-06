const ListaAnimes = require('../mocks/animeList')

function getAllAnimes (req, res) {
    res.send(ListaAnimes)
}

function getAnimeById (req, res) {
    const id = parseInt(req.params.id);
    const animes = ListaAnimes.find(p => p.id === id);

    if (animes) {
        res.send(animes)
    } else {
        res.status(404).send({ message: "Anime não encontrado" });
    }
}

function createAnime (req, res) {
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse} =  req.body;

        // Ternário -> x ? condição = true : valor estabelecido
    const id =  ListaAnimes.length ? ListaAnimes[ListaAnimes.length-1].id +1 : 1;

    ListaAnimes.push({
        id,
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse})

        res.send('🟢 Anime inserido com sucesso! 😁👍')

}

function updateAnime (req, res) {
    const {id} = req.params;
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse} =  req.body;

    const animeIndex = ListaAnimes.findIndex(anime => anime.id === Number(id));

    if(!animeIndex ===  -1) {
        return res.send({mensage: '🔴 Anime não encontrado! 😰'})
    }
    
    ListaAnimes[animeIndex] = {
        ...ListaAnimes[animeIndex],
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse
        }
        res.send('🟢 Anime atualizado com sucesso! 😁🫶')
}

function  deleteAnimeById (req, res) {
    const {id} = req.params;
    const animeIndex = ListaAnimes.findIndex(anime => anime.id === Number(id));

    if(!animeIndex ===  -1) {
        return res.send({mensage: '🔴 Anime não encontrado! 😰'})
    }

    ListaAnimes.splice(animeIndex, 1);
    res.send('🟢 Anime deletado com sucesso! ❌')
}


module.exports = {
    getAllAnimes,
    getAnimeById,
    createAnime,
    updateAnime,
    deleteAnimeById
}