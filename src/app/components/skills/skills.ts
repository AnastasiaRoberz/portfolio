import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    imports: [LowerCasePipe],
    selector: 'app-skills',
    styleUrl: './skills.scss',
    templateUrl: './skills.html',
})
export class Skills {
    skills = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Angular', 'Git', 'REST-API', 'Scrum'];
}
