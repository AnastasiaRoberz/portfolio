import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [RouterLink, TranslatePipe],
    selector: 'app-footer',
    styleUrl: './footer.scss',
    templateUrl: './footer.html',
})
export class Footer {
    responsive = inject(ResponsiveService);
}
