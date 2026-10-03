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
            technologies: ['JavaScript', 'HTML', 'CSS'],
            description:
                'Jump, run and throw game based on object-orientated approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
            imgSrc: 'pollo-loco.png',
            urlGit: 'https://github.com/AnastasiaRoberz/el-pollo-loco',
        },
        {
            name: 'Join',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            description:
                'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            imgSrc: 'join.png',
        },
        {
            name: 'Pokédex',
            technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
            description:
                'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
            imgSrc: 'pokedex.png',
            urlGit: 'https://github.com/AnastasiaRoberz/pokedex',
        },
    ];
}
