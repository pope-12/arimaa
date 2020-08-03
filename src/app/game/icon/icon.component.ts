import {Component, Input, OnInit} from '@angular/core';
import {Piece} from "../pieces/piece";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() public piece: Piece;
  @Input() public customCss: object;

  constructor() { }

  ngOnInit(): void {}

}
