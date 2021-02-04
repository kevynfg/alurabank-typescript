const controller = new NegociacaoController();

document.querySelector('.form')
//Passa o bind para manter o 'THIS' do método adiciona
//com a variavel que instanciou a classe -> controller
.addEventListener('submit', controller.adiciona.bind(controller));