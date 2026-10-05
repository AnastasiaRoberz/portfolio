import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [TranslatePipe],
    selector: 'app-hero',
    styleUrl: './hero.scss',
    templateUrl: './hero.html',
})
export class Hero {
    responsive = inject(ResponsiveService);
}
