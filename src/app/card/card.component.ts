import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Listing } from '../modules/klasi';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input()
Nedvizhnost:Listing = {} as Listing;
@Output()
fav = new EventEmitter<Listing>();


addtofavorites(event: MouseEvent) {
  const image = event.target as HTMLImageElement;

  // Check if the image source ends with 'favoriteoff.png'
  if (image.src.endsWith("/assets/favoriteoff.png")) {
    image.src = "../../assets/favorite.png";
  } else {
    image.src = "../../assets/favoriteoff.png";
  }

  this.fav.emit(this.Nedvizhnost);
}


}
