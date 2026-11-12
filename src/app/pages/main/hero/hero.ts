import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../../services/responsive.service';
import { SocialLinks } from '../../../shared/social-links/social-links';

@Component({
    imports: [TranslatePipe, SocialLinks],
    selector: 'app-hero',
    styleUrl: './hero.scss',
    templateUrl: './hero.html',
})
export class Hero {
    responsive = inject(ResponsiveService);
}
