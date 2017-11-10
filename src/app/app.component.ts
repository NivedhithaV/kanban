import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = [];

  constructor() {
    if (localStorage.data) {
      this.data = JSON.parse(localStorage.data);
    } else {
      this.data = [
        {
          name: 'One',
          cards: [
            'Card 1.1',
            'Card 1.2'
          ]
        }, {
          name: 'Two',
          cards: [
            'Card 2.1',
            'Card 2.2'
          ]
        }, {
          name: 'Three',
          cards: [
            'Card 3.1',
            'Card 3.2'
          ]
        }, {
          name: 'Four',
          cards: [
            'Card 4.1',
            'Card 4.2'
          ]
        },
      ];
      this.save();

    }
  }


  addCard(column) {
    const newCardName = window.prompt('Enter new card name');
    if (newCardName) {
      column.cards.push(newCardName);
    }
    this.save();
  }

  move(columnIndex, cardIndex, cardData, newColumnIndex) {
    this.data[columnIndex].cards.splice(cardIndex, 1);
    this.data[newColumnIndex].cards.push(cardData);
    this.save();
  }

  save() {
    localStorage.data = JSON.stringify(this.data);
  }
}
