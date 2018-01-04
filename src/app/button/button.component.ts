import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  ngOnInit() {
    // debugger;
  }
  // button = {
  //   name: 1,
  //   value: 'One'
  // }
  @Output()
  uploaded:EventEmitter<string> = new EventEmitter();

  onSelect (item) {
    this.uploaded.emit(item.name)
  }
  list = [
    {
      id: 1,
      name: 'One'
    }, {
      id: 2,
      name: 'Two'
    }, {
      id: 3,
      name: 'Three'
    }, {
      id: 4,
      name: 'Four'
    }, {
      id: 5,
      name: 'Five'
    },
  ]
}
