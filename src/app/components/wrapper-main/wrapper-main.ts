import { Component, inject } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { References } from '../references/references';
import { Contact } from '../contact/contact';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [Hero, About, Skills, Portfolio, References, Contact],
    selector: 'app-wrapper-main',
    styleUrl: './wrapper-main.scss',
    templateUrl: './wrapper-main.html',
})
export class WrapperMain {
    responsive = inject(ResponsiveService);
}
