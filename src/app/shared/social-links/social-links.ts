import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../utils/socials';

@Component({
    imports: [],
    selector: 'app-social-links',
    styleUrl: './social-links.scss',
    templateUrl: './social-links.html',
})
export class SocialLinks {
    protected readonly socialLinks = SOCIAL_LINKS;
}
