import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../services/responsive.service';
import { Footer } from '../layout/footer/footer';

@Component({
    imports: [TranslatePipe, Footer],
    selector: 'app-legal-notice',
    styleUrl: './legal-notice.scss',
    templateUrl: './legal-notice.html',
})
export class LegalNotice {
    responsive = inject(ResponsiveService);
}
