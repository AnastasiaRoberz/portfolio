import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Service } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Service()
export class ResponsiveService {
    private breakpointObserver = inject(BreakpointObserver);

    readonly isMobile = toSignal(
        this.breakpointObserver
            .observe([Breakpoints.Handset])
            .pipe(map((result) => result.matches)),
        { initialValue: false },
    );

    readonly isTablet = toSignal(
        this.breakpointObserver.observe([Breakpoints.Tablet]).pipe(map((result) => result.matches)),
        { initialValue: false },
    );

    readonly isDesktop = toSignal(
        this.breakpointObserver.observe([Breakpoints.Web]).pipe(map((result) => result.matches)),
        { initialValue: false },
    );
}
