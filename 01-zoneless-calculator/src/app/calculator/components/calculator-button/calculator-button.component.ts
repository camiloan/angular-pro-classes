import { booleanAttribute, ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-button.component.css',
  host: {
    class: ' border-r border-b border-indigo-400',
    attribute: 'hola',
    'data-size': 'XL'
  },
/*   encapsulation: ViewEncapsulation.None
 */})
export class CalculatorButtonComponent {


  isCommand = input(false, { transform: booleanAttribute });
  isDoubleSize = input(false, { transform: booleanAttribute });

  /*  @HostBinding('class.is-command') get commandStyle() {
     return this.isCommand();
   } */

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize() ? 'w-2/4' : 'w-1/4';
  }

}
