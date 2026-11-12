import { Service, signal } from '@angular/core';

@Service()
export class ScrollService {
    readonly activeSection = signal<string>('');
    private container?: HTMLElement;
    private sectionElements: HTMLElement[] = [];
    private onScrollHandler = () => this.updateActiveSection();

    initScrollSpy(container: HTMLElement, sectionIds: string[]): void {
        this.destroy();
        this.container = container;
        this.sectionElements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);

        this.container.addEventListener('scroll', this.onScrollHandler, { passive: true });
        this.updateActiveSection();
    }

    private updateActiveSection(): void {
        if (!this.container) return;
        const containerTop = this.container.getBoundingClientRect().top;
        const threshold = this.container.clientHeight * 0.45;
        let currentActive = this.sectionElements[0]?.id ?? 'hero';
        for (const el of this.sectionElements) {
            const relativeTop = el.getBoundingClientRect().top - containerTop;
            if (relativeTop <= threshold) {
                currentActive = el.id;
            }
        }
        this.activeSection.set(currentActive);
    }

    scrollTo(id: string): void {
        const element = document.getElementById(id);
        element?.scrollIntoView();
    }

    scrollToTop(): void {
        const element = document.getElementById('hero');
        element?.scrollTop;
    }

    destroy(): void {
        this.container?.removeEventListener('scroll', this.onScrollHandler);
        this.container = undefined;
    }
}
