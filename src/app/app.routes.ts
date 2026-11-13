import { Routes } from '@angular/router';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Main } from './pages/main/main';

export const routes: Routes = [
    {
        path: '',
        component: Main,
    },
    {
        path: 'legal-notice',
        component: LegalNotice,
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicy,
    },
];
