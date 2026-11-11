import { Component, ElementRef, inject } from '@angular/core';
import { Hero } from '../../pages/main/hero/hero';
import { About } from '../../pages/main/about/about';
import { Skills } from '../../pages/main/skills/skills';
import { Portfolio } from '../../pages/main/portfolio/portfolio';
import { References } from '../../pages/main/references/references';
import { Contact } from '../../pages/main/contact/contact';
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
