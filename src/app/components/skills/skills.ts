import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [LowerCasePipe, TranslatePipe],
    selector: 'app-skills',
    styleUrl: './skills.scss',
    templateUrl: './skills.html',
})
export class Skills {
    skills = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Angular', 'Git', 'REST-API', 'Scrum'];
}
