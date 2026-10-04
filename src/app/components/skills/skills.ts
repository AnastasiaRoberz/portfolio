import { LowerCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [LowerCasePipe, TranslatePipe],
    selector: 'app-skills',
    styleUrl: './skills.scss',
    templateUrl: './skills.html',
})
export class Skills {
    skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'Typescript',
        'Angular',
        'Supabase',
        'Git',
        'REST-API',
        'Scrum',
        'Material Design',
    ];

    responsive = inject(ResponsiveService);
}
