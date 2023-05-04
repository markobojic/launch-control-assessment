import { Component } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  text = '';
  highlightedText = '';

  onInput() {
    this.highlightedText = this.text
      .replace(/\[([^\]]+)\]/g, '<span class="square-bracket">$1</span>')
      .replace(/\{([^\}]+)\}/g, '<span class="curly-bracket">$1</span>');
  }
}
