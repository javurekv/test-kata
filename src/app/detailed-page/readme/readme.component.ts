import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent {
  @Input() readme?: string;
}
