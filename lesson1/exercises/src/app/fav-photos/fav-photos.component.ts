import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Cool Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images.neopets.com/games/tradingcards/premium/lg_0706.gif';
  image3 = 'https://images.neopets.com/halloween/haunted_fairie/2011/popups/character.png';

  constructor() { }

  ngOnInit() {
  }

}