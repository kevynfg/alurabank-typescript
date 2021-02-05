import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    async obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {
        try {
            const NegociacoesToExport = await fetch('http://localhost:8080/dados')
            const dadosProntosNegociacoes: NegociacaoParcial[] = await handler(NegociacoesToExport).json()
            return dadosProntosNegociacoes.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
        } catch (err) {
            throw new Error(`Não foi possível buscar os dados, verifique sua conexão. Error: ${err.message}`)
        }
        
            // .then(res => handler(res))
            // .then(res => res.json())
            // .then((dados: NegociacaoParcial[]) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
            // .catch(err => {throw new Error('Não foi possível buscar os dados.')}          
            // )
        
        }
}

//ResponseHandler serve para criar uma interface que sirva
//de function que trabalha com código assincrono
export interface ResponseHandler {

    (res: Response): Response
}