import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ResponsiveService } from '../../../services/responsive.service';
import { ScrollService } from '../../../services/scroll.service';
import { RouterLink } from '@angular/router';

@Component({
    imports: [TranslatePipe, RouterLink],
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

    breakpoint = this.responsive.isMaxWidth(992);

    ngOnInit(): void {
        this.useLanguage(this.currentLanguage);
    }

    useLanguage(language: string): void {
        this.translate.use(language);
        this.currentLanguage = language;
        this.isMenuOpen.set(false);
    }

    toggleMenu(): void {
        this.isMenuOpen.update((open) => !open);
    }

    scrollMobile(section: string): void {
        this.scrollService.scrollTo(section);
        this.isMenuOpen.set(false);
    }
}
