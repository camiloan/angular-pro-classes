import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID, type OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'
@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);
  ngOnInit(): void {

    console.log(isPlatformServer(this.platform))
    if (isPlatformBrowser(this.platform)) {
      document.title = 'Pricing Page';
    }

    this.title.setTitle('Pricing Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi Pricing Page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
  }

}
