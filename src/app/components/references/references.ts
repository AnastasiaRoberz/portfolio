import { Component } from '@angular/core';
import { Reference } from '../../interfaces/reference';

@Component({
    imports: [],
    selector: 'app-references',
    styleUrl: './references.scss',
    templateUrl: './references.html',
})
export class References {
    references: Reference[] = [
        {
            name: 'V.Schuster',
            role: 'Team Partner',
            text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
            img: 'reference1.png',
        },
        {
            name: 'E.Eichinger',
            role: 'Team Partner',
            text: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
            img: 'reference2.png',
        },
        {
            name: 'I.Nuber',
            role: 'Frontend Engineer',
            text: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
            img: 'refernce3.png',
        },
    ];
}
