import { AfterViewInit, Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { Contact } from './contact/contact';
import { Footer } from '../layout/footer/footer';
import { ScrollService } from '../../services/scroll.service';

@Component({
    imports: [Hero, About, Skills, Portfolio, References, Contact, Footer],
    selector: 'app-main',
    styleUrl: './main.scss',
    templateUrl: './main.html',
    host: {
        class: 'scroll-container',
    },
})
export class Main implements AfterViewInit, OnDestroy {
    private readonly hostElement = inject(ElementRef<HTMLElement>);
    private readonly scrollService = inject(ScrollService);

    ngAfterViewInit(): void {
        const sections = ['hero', 'about', 'skills', 'portfolio', 'references', 'contact'];

        this.scrollService.initScrollSpy(this.hostElement.nativeElement, sections);
    }

    ngOnDestroy(): void {
        this.scrollService.destroy();
    }
}
