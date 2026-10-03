import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    imports: [TranslatePipe, RouterLink],
    selector: 'app-header',
    styleUrl: './header.scss',
    templateUrl: './header.html',
})
export class Header {
    scrollTo(component: string): void {
        const element = document.getElementById(component);
        if (element) element.scrollIntoView({ block: 'start' });
    }

    translate = inject(TranslateService);
    currentLanguage = 'en';
    useLanguage(language: string): void {
        this.translate.use(language);
        this.currentLanguage = language;
    }
}
