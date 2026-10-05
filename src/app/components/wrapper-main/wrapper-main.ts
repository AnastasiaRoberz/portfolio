import { Component, ElementRef, inject } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { References } from '../references/references';
import { Contact } from '../contact/contact';
import { ResponsiveService } from '../../services/responsive.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
    imports: [Hero, About, Skills, Portfolio, References, Contact],
    selector: 'app-wrapper-main',
    styleUrl: './wrapper-main.scss',
    templateUrl: './wrapper-main.html',
})
export class WrapperMain {
    responsive = inject(ResponsiveService);
    scrollSpy = inject(ScrollService);
    elementRef = inject(ElementRef);
    observer?: IntersectionObserver;

    ngAfterViewInit(): void {
        const sections = this.elementRef.nativeElement.querySelectorAll('section[id], [id]');

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.scrollSpy.setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -59% 0px',
                threshold: 0,
            },
        );

        sections.forEach((section: Element) => this.observer?.observe(section));
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
