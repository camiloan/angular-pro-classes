import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {

  private calculatorService = inject(CalculatorService)

  calculatorButtons = viewChildren(CalculatorButtonComponent)

  public resultText = computed(() => this.calculatorService.resultText())
  public subResultText = computed(() => this.calculatorService.subResultText())
  public lastOperator = computed(() => this.calculatorService.lastOperator())

  /*   get resultTex(){
      return this.calculatorService.resultText
    }
   */

  handleClick(key: string) {
    console.log(key)
    this.calculatorService.constructorNumber(key)
  }


  /*   @HostListener('document:keyup', ['$event'])
   */
  handleKeyboardEvent(event: KeyboardEvent) {

    const keyEquivalent: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      X: '*',
      '/': '÷',
      Enter: '='
    }

    const key = event.key
    const keyValue = keyEquivalent[key] ?? key


    this.handleClick(keyValue)
    // biome-ignore lint/complexity/noForEach: <explanation>
    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(keyValue)
    })
  }
}
