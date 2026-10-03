import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [TranslatePipe],
    selector: 'app-privacy-policy',
    styleUrl: './privacy-policy.scss',
    templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {}
