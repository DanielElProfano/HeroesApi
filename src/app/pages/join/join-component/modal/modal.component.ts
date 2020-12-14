import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public showModal: boolean = false;
  @Output()
  private showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  public getShowErrorChange(): any {
    debugger;
    return this.showModalChange;
  }

  public closeModal(): void {
    this.showModalChange.emit(!this.showModal);
  }

  public getShowModal(): any {
    debugger;
    return this.showModalChange;
  }

  public closeShowModal(): void {
    this.showModalChange.emit(!this.showModal);
  }

  ngOnInit(): void {
    console.log(this.showModal);
  }
}
