import { Component, OnInit } from '@angular/core';
import { Etapa } from './classes/etapa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Projeto lsf';

  listEtapa = []
  etapaSelected: Etapa = new Etapa()

  ngOnInit() {
    this.toggleModal(false)
  }


  criarEditar(etapa) {
    this.toggleModal(true)


    this.etapaSelected = etapa


  }


  toggleModal(open) {
    var modal = document.querySelector("#modal");
    var modalOverlay = document.querySelector("#modal-overlay");
    var closeButton = document.querySelector("#close-button");
    var openButton = document.querySelector("#open-button");

    // if(open){
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    // }
    // closeButton.addEventListener("click", function() {
    //   modal.classList.toggle("closed");
    //   modalOverlay.classList.toggle("closed");
    // });

    // openButton.addEventListener("click", function() {
    //   modal.classList.toggle("closed");
    //   modalOverlay.classList.toggle("closed");
    // });
  }



}
