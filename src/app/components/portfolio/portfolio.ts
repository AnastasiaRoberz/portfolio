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
            description: 'portfolio.projects.pollo-loco',
            imgSrc: 'pollo-loco.png',
            urlGit: 'https://github.com/AnastasiaRoberz/el-pollo-loco',
        },
        {
            name: 'Join',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            description: 'portfolio.projects.join',
            imgSrc: 'join.png',
        },
        {
            name: 'Pokédex',
            technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
            description: 'portfolio.projects.pokedex',
            imgSrc: 'pokedex.png',
            urlGit: 'https://github.com/AnastasiaRoberz/pokedex',
        },
    ];
}
