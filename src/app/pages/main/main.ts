import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { Contact } from './contact/contact';
import { Footer } from '../layout/footer/footer';

@Component({
    imports: [Hero, About, Skills, Portfolio, References, Contact, Footer],
    selector: 'app-main',
    styleUrl: './main.scss',
    templateUrl: './main.html',
    host: {
        class: 'scroll-container',
    },
})
export class Main {}
