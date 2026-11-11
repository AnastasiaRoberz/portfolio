import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [TranslatePipe],
    selector: 'app-legal-notice',
    styleUrl: './legal-notice.scss',
    templateUrl: './legal-notice.html',
})
export class LegalNotice {
    responsive = inject(ResponsiveService);
}
