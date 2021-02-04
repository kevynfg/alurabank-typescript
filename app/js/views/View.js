//indica que essa classe View é genérica(generics) <T> 
//dessa forma, pode-se passar um parâmetro quando as outras classes herdarem
//da View, MensagemView pode setar o <T> como string e NegociacoesView
//pode setar <T> como a classe Negociacoes, como ela desejar
//classe abstrata não pode ser instanciada, apenas herdada
class View {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
