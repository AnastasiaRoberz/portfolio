import { Component, inject } from '@angular/core';
import { Reference } from '../../interfaces/reference';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [TranslatePipe],
    selector: 'app-references',
    styleUrl: './references.scss',
    templateUrl: './references.html',
})
export class References {
    responsive = inject(ResponsiveService);
    currentId = 0;

    references: Reference[] = [
        {
            name: 'P.Roberz',
            role: 'references.roberz.role',
            text: 'references.roberz.text',
            img: 'reference1.jpeg',
            scale: 1.2,
        },
        {
            name: 'Max & Moritz Roberz',
            role: 'references.kids.role',
            text: 'references.kids.text',
            img: 'reference2.jpeg',
        },
        {
            name: 'Dr. Byte McReason',
            role: 'references.ai.role',
            text: 'references.ai.text',
            img: 'reference3.jpg',
        },
    ];

    prev(): void {
        this.currentId -= 1;
    }

    next(): void {
        this.currentId += 1;
    }

    goTo(index: number): void {
        this.currentId = index;
    }
}
