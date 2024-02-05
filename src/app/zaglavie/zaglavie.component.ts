import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zaglavie',
  standalone: true,
  imports: [],
  templateUrl: './zaglavie.component.html',
  styleUrl: './zaglavie.component.css'
})
export class ZaglavieComponent {
  @Output()
  signinclicked = new EventEmitter<void>();
  signin(){
    this.signinclicked.emit();
  }
}
