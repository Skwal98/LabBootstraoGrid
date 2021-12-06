import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-row',
  templateUrl: './field-row.component.html',
  styleUrls: ['./field-row.component.scss'],
})
export class FieldRowComponent implements OnInit {
  @Input() draw!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
