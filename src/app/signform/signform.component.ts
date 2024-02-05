import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../modules/klasi';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css']
})
export class SignformComponent {
  
  usr:string='Davorstefanovski';
  pass:string='pasvord';
  @Output()
  login = new EventEmitter<User>();

  loginfunction() {
    const korisnik:User = {} as User;
    korisnik.username=this.usr;
    korisnik.password=this.pass;
    this.login.emit(korisnik);
  }
}
