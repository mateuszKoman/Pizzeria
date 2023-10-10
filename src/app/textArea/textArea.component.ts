import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-area-component',
  templateUrl: 'textArea.component.html',
  styleUrls: ['textArea.component.css']
})

export class TextAreaComponent {
  @Input() placeholder: string = '';
}
