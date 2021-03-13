import axios from 'axios';

export const getChocolateMenu = () => {
    return axios.get('http://luizaconfeitaria.com.br/data/cardapioChocolate.json')
                .then(res => res.data)
}

export const getFruitMenu = () => {
    return axios.get('http://luizaconfeitaria.com.br/data/cardapioFrutas.json')
                .then(res => res.data)
}