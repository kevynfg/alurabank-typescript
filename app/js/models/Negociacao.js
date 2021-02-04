class Negaociacao {
    //Estou setando como propriedades onde somente
    //Métodos da própria classe podem alterar
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        //Usar '_' antes do valor da variável torna ela restrita
        //para alterações fora dos métodos da própria classe
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    //Cria-se getters para quem for utilizar a classe
    //possa acessar os valores do constructor
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
