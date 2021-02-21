export class Etapa {
  id:number;
  nome: string;
  duracao:number;
  timeEspera:number;
  qtdessoas:number;

  constructor(id:number = null, nome: string = "", duracao:number = null, espera:number = null, qtd:number = null) {
    this.setNome(nome)
    this.setDuracao(duracao)
    this.setEspera(espera)
    this.setQtdPessoas(qtd)
    this.setId(id);

  }

  setId(id){
    this.id = id
  }

  getId(){
    return this.id
  }

  setNome(nome) {
    this.nome = nome;
  }

  getNome(){
    return this.nome;
  }

  setDuracao(duracao) {
    this.duracao = duracao;
  }

  getDuracao(){
    return this.duracao;
  }

  setEspera(espera) {
    this.timeEspera = espera;
  }

  getEspera(){
    return this.timeEspera;
  }

  setQtdPessoas(qtd) {
    this.qtdessoas = qtd;
  }

  getQtdPessoas(){
    return this.qtdessoas;
  }

}
