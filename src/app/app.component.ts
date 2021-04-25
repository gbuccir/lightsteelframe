import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Etapa } from './classes/etapa';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Projeto lsf';

  listEtapa = []
  etapaSelected: Etapa = new Etapa()
  formEtapa


  constructor(private formBuilder: FormBuilder) {

    this.formEtapa = this.formBuilder.group({
      nome: [null, [Validators.required]],
      espera: [null, [Validators.required]],
      qtdpessoas: [null, [Validators.required]],
      id: [null],
      duracao: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.toggleModal(false);
    // localStorage.clear();
    this.listEtapa = JSON.parse(localStorage.getItem('list'))
    if(this.listEtapa == null)
    this.listEtapa = []
    console.log(this.listEtapa)

  }


  criarEditar(etapa) {
    this.toggleModal(true)
    this.etapaSelected = etapa
    if (this.etapaSelected) {
      this.formEtapa.patchValue({
        nome: this.etapaSelected.nome,
        espera: this.etapaSelected.espera,
        qtdpessoas: this.etapaSelected.qtdpessoas,
        id: this.etapaSelected.id,
        duracao: this.etapaSelected.duracao
      })
    }
    else {
      this.formEtapa.reset()
    }
  }

  salvar() {
    try {
      if (this.formEtapa.status == 'INVALID')
        throw "Preencha todas informações do formulário"

      let model = Object.assign(this.formEtapa.value)
      if (!model.id) {
        this.listEtapa.push(new Etapa(this.listEtapa.length + 1, model.nome, model.duracao, model.espera, model.qtdpessoas))
      }
      else {
        let eta = this.listEtapa.find(e => e.id == model.id)
        let index = this.listEtapa.indexOf(eta);
        this.listEtapa[index] =  model
      }
      console.log(this.listEtapa)
      localStorage.removeItem("list");
      localStorage.setItem("list", JSON.stringify(this.listEtapa));

      this.toggleModal(false)
      this.formEtapa.reset()

      ///////TODO EDITAR E SALVAR NOS STORAGE


    } catch (e) {
      alert(e)
    }

  }

  toggleModal(open) {
    var modal = document.querySelector("#modal");
    var modalOverlay = document.querySelector("#modal-overlay");

    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");

  }



}
