import { Service, signal } from '@angular/core';

@Service()
export class ScrollService {
    readonly activeSection = signal<string>('hero');

    setActiveSection(id: string): void {
        if (this.activeSection() !== id) {
            this.activeSection.set(id);
        }
    }
}
