import { Component } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  text = '';
  highlightedText = '';

  private squareBracketRegex = /\[([^\]]+)\]/g;
  private curlyBracketRegex = /\{([^\}]+)\}/g;

  onInput() {
    this.highlightedText = this.highlight(this.text);
  }

  private highlight(text: string): string {
    const matches = [];
    let match;

    while ((match = this.squareBracketRegex.exec(text))) {
      matches.push({
        text: match[1],
        squareBracket: true,
        curlyBracket: false,
        startIndex: match.index,
        endIndex: this.squareBracketRegex.lastIndex - 1,
      });
    }

    while ((match = this.curlyBracketRegex.exec(text))) {
      matches.push({
        text: match[1],
        squareBracket: false,
        curlyBracket: true,
        startIndex: match.index,
        endIndex: this.curlyBracketRegex.lastIndex - 1,
      });
    }

    const highlightedText = [];
    let lastIndex = 0;

    for (const match of matches) {
      if (match.startIndex >= lastIndex) {
        highlightedText.push(text.slice(lastIndex, match.startIndex));
        highlightedText.push(`
          <span class="${
            match.squareBracket ? 'square-bracket' : 'curly-bracket'
          }">
            ${match.text}
          </span>
        `);
        lastIndex = match.endIndex + 1;
      }
    }

    highlightedText.push(text.slice(lastIndex));

    return highlightedText.join('');
  }
}
