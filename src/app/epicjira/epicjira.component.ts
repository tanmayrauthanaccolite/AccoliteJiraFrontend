import { Component,Input } from '@angular/core';
import { Epic } from '../epic';
@Component({
  selector: 'app-epicjira',
  templateUrl: './epicjira.component.html',
  styleUrls: ['./epicjira.component.css']
})
export class EpicjiraComponent {
@Input() epic :Epic;
@Input() x : any;

changePriorityColor(num:number){
switch(num){
  case 1 :return 'green';
  case 2 :return 'yellow';
  case 3 :return 'red';
  default: return 'green';
}
}

}
