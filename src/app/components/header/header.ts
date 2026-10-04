import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [TranslatePipe, RouterLink],
    selector: 'app-header',
    styleUrl: './header.scss',
    templateUrl: './header.html',
})
export class Header {
    translate = inject(TranslateService);
    responsive = inject(ResponsiveService);
    currentLanguage = 'en';
    isMenuOpen = signal(false);

    ngOnInit(): void {
        this.useLanguage(this.currentLanguage);
    }

    useLanguage(language: string): void {
        this.translate.use(language);
        this.currentLanguage = language;
    }

    toggleMenu(): void {
        this.isMenuOpen.update((open) => !open);
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }
}
