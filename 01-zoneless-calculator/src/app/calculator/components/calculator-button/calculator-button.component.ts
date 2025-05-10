import { booleanAttribute, ChangeDetectionStrategy, Component, type ElementRef, HostBinding, input, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-button.component.css',
  host: {
    class: ' border-r border-b border-indigo-400 w-1/4',
    '[class]': 'isDoubleSize() ? "w-2/4" : "w-1/4"',
    attribute: 'hola',
    'data-size': 'XL'
  },
/*   encapsulation: ViewEncapsulation.None
 */})
export class CalculatorButtonComponent {

  isPressed = signal(false)
  onClick = output<string>()
  contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
  isCommand = input(false, { transform: booleanAttribute });
  isDoubleSize = input(false, { transform: booleanAttribute });

  /*  @HostBinding('class.is-command') get commandStyle() {
     return this.isCommand();
   } */

  /*   @HostBinding('class.w-2/4') get commandStyle() {
      return this.isDoubleSize() ? 'w-2/4' : 'w-1/4';
    } */

  handleClick() {
    if (!this.contentValue()?.nativeElement) { return }
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const value = this.contentValue()!.nativeElement.innerText
    this.onClick.emit(value.trim())
  }

  keyboardPressedStyle(key: string) {
    if (!this.contentValue()) { return }

    const value = this.contentValue()?.nativeElement.innerHTML
    if (value !== key) return;

    this.isPressed.set(true)

    setTimeout(() => {

      this.isPressed.set(false)
    }, 100)

  }

}
