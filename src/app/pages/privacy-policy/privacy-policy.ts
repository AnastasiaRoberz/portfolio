import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../layout/footer/footer';

@Component({
    imports: [TranslatePipe, Footer],
    selector: 'app-privacy-policy',
    styleUrl: './privacy-policy.scss',
    templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {}
