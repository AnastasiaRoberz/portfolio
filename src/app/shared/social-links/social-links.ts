import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../utils/socials';
import { CursorTooltip } from '../../directives/cursor-tooltip';

@Component({
    imports: [CursorTooltip],
    selector: 'app-social-links',
    styleUrl: './social-links.scss',
    templateUrl: './social-links.html',
})
export class SocialLinks {
    protected readonly socialLinks = SOCIAL_LINKS;
}
