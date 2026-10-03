import { Component } from '@angular/core';
import { AboutItem } from '../../interfaces/about-item';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [TranslatePipe],
    selector: 'app-about',
    styleUrl: './about.scss',
    templateUrl: './about.html',
})
export class About {
    aboutList: AboutItem[] = [
        {
            iconId: 'icon-location',
            text: 'about.list.location',
        },
        {
            iconId: 'icon-bulb',
            text: 'about.list.learning',
        },
        {
            iconId: 'icon-puzzle',
            text: 'about.list.problem-solving',
        },
    ];
}
