import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ResponsiveService } from './services/responsive.service';

@Component({
    imports: [RouterOutlet, Header, Footer],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})
export class App {
    responsive = inject(ResponsiveService);
    protected readonly title = signal('portfolio');
}
