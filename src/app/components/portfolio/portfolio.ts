import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [TranslatePipe],
    selector: 'app-portfolio',
    styleUrl: './portfolio.scss',
    templateUrl: './portfolio.html',
})
export class Portfolio {
    projects: Project[] = [
        {
            name: 'El Pollo Loco',
            knowledge: ['JavaScript', 'HTML', 'CSS'],
            description:
                'Jump, run and throw game based on object-orientated approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen',
            imgSrc: 'portfolio-pollo-loco.png',
        },
    ];
}
