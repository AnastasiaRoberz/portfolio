import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { Contact } from './contact/contact';

@Component({
    imports: [Hero, About, Skills, Portfolio, References, Contact],
    selector: 'app-main',
    styleUrl: './main.scss',
    templateUrl: './main.html',
})
export class Main {}
