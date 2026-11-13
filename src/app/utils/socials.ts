export interface SocialLink {
    url: string;
    icon: string;
    tooltip: string;
}
export const SOCIAL_LINKS: readonly SocialLink[] = [
    {
        url: 'https://github.com/AnastasiaRoberz',
        icon: 'icon-github',
        tooltip: 'Visit my GitHub page.',
    },
    {
        url: 'mailto:anastasia.roberz@gmx.de',
        icon: 'icon-mail',
        tooltip: 'Contact me!',
    },
    {
        url: 'https://...',
        icon: 'icon-linkedin',
        tooltip: 'Check my LinkedIn profile.',
    },
];
