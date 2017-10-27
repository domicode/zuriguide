import { PathService } from './../../services/path.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-footernav',
  templateUrl: './footernav.component.html',
  styleUrls: ['./footernav.component.scss']
})
export class FooternavComponent implements OnInit {

  constructor(public pathService: PathService) { }

  ngOnInit() {
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  addMarker () {
    this.pathService.addMarker();
    this.closeModal();
  }
}
