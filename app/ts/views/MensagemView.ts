namespace Views {
  export class MensagemView extends Views.View<string> {

    template(model: string): string {
      return `<p class="alert alert-info">Negociação adicionada com sucesso!</p>`
    }
    
  }
}