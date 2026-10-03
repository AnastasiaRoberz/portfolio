import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [TranslatePipe],
    selector: 'app-legal-notice',
    styleUrl: './legal-notice.scss',
    templateUrl: './legal-notice.html',
})
export class LegalNotice {}
