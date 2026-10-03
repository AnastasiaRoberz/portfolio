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
    aboutMe =
        'Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills?';

    aboutList: AboutItem[] = [
        {
            iconId: 'icon-location',
            text: 'Where are you located? Are you open to different ways of working, such as working remotely or even relocating?',
        },
        {
            iconId: 'icon-bulb',
            text: 'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?',
        },
        {
            iconId: 'icon-puzzle',
            text: 'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and  collaboration.',
        },
    ];
}
