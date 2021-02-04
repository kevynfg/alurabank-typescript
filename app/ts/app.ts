import {NegociacaoController} from './controllers/NegociacaoController'
const controller = new NegociacaoController();

//Passa o bind para manter o 'THIS' do método adiciona
//com a variavel que instanciou a classe -> controller
$('.form').submit(controller.adiciona.bind(controller))
