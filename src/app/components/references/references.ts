import { Component } from '@angular/core';
import { Reference } from '../../interfaces/reference';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [TranslatePipe],
    selector: 'app-references',
    styleUrl: './references.scss',
    templateUrl: './references.html',
})
export class References {
    currentId = 0;

    references: Reference[] = [
        {
            name: 'V.Schuster',
            role: 'Team Partner',
            text: 'references.schuster',
            img: 'reference1.png',
        },
        {
            name: 'E.Eichinger',
            role: 'Team Partner',
            text: 'references.eichinger',
            img: 'reference2.png',
        },
        {
            name: 'I.Nuber',
            role: 'Frontend Engineer',
            text: 'references.nuber',
            img: 'reference3.png',
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
