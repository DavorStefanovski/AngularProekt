import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, withDebugTracing } from '@angular/router';
import { ZaglavieComponent } from './zaglavie/zaglavie.component';
import { SearchComponent } from './search/search.component';
import { LIST } from '../database';
import { LIST1 } from '../database';
import { CardComponent } from './card/card.component';
import { SignformComponent } from './signform/signform.component';
import { User } from './modules/klasi';
import { FormsModule } from '@angular/forms';
import { Listing } from './modules/klasi';
import { SellformComponent } from './sellform/sellform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ZaglavieComponent, SearchComponent, CardComponent, SignformComponent, FormsModule, SellformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular2';
  Nedvizhnosti=LIST; //databaza za nedvizhnosti
  signupshow:boolean = false; //pojavuvanje na signuo
  signupshowfunction(){
    this.signupshow=!this.signupshow;
  }
  user:number = -1; //momentalen user
  Korisnici=LIST1;
  trylogin(data:User) {
    var flag=0;
   for (const korisnik of this.Korisnici) {
      if (data.username === korisnik.username && data.password === korisnik.password) {
        this.user = korisnik.id;
        window.alert("Loging in...");
        flag=1;
        break; 
      }
    }
    if(flag===0)
    window.alert("Wrong password or username");
  }
  Nedvizhnostifav:Listing[] = [];
  addtofav(fav: Listing) {
    if (this.user === -1) {
      window.alert("Login is needed");
    } else {
      let flag = 1;
      for (let i = 0; i < this.Nedvizhnostifav.length; i++) {
        const nedvizhnost = this.Nedvizhnostifav[i];
        if (nedvizhnost.id === fav.id) {
          flag = 0;
          // Remove the item if it already exists
          this.Nedvizhnostifav.splice(i, 1);
          break; // No need to continue checking
        }
      }
      
      if (flag === 1) {
        // Add the item if it doesn't exist
        this.Nedvizhnostifav.push(fav);
      }
    }
  }
  
  }


