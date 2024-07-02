import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
})
export class ActionCardComponent implements OnInit {
  @Output() actionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onSelectAction(action: string) {
    this.actionSelected.emit(action);
  }
}
