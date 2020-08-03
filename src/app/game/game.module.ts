import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [GameComponent, IconComponent],
  imports: [
    CommonModule
  ],
  exports: [GameComponent]
})
export class GameModule { }
