import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PaymentService {
    constructor() { }
    calculatePayment(total, tax) {
        return total + tax;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: PaymentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: PaymentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: PaymentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktYW5ndWxhci1saWJyYXJ5L3NyYy9saWIvcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBRXpCLGdCQUFnQixDQUFDO0lBQ2pCLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQ3pDLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO3VHQUxVLGNBQWM7MkdBQWQsY0FBYyxjQUZiLE1BQU07OzJGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgY2FsY3VsYXRlUGF5bWVudCh0b3RhbDogbnVtYmVyLCB0YXg6IG51bWJlcikge1xuICAgIHJldHVybiB0b3RhbCArIHRheDtcbiAgfVxufVxuIl19