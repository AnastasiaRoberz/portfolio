import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ResponsiveService } from '../../../services/responsive.service';
import { ScrollService } from '../../../services/scroll.service';

@Component({
    imports: [TranslatePipe],
    selector: 'header[app-header]',
    styleUrl: './header.scss',
    templateUrl: './header.html',
})
export class Header {
    translate = inject(TranslateService);
    responsive = inject(ResponsiveService);
    scrollService = inject(ScrollService);
    currentLanguage = 'en';
    isMenuOpen = signal<boolean>(false);

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
