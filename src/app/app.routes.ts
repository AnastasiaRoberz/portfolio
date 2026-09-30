import { Routes } from '@angular/router';
import { WrapperMain } from './components/wrapper-main/wrapper-main';
import { LegalNotice } from './components/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';

export const routes: Routes = [
    {
        path: '',
        component: WrapperMain,
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
