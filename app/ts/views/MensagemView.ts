import {View} from '../views/index'

  export class MensagemView extends View<string> {

    template(model: string): string {
      return `<p class="alert alert-info">Negociação adicionada com sucesso!</p>`
    }
    
  }
