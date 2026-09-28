import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
    imports: [Header, Footer],
    selector: 'app-privacy-policy',
    styleUrl: './privacy-policy.scss',
    templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {}
