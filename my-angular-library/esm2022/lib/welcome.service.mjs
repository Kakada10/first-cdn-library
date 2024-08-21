import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class WelcomeService {
    constructor() { }
    alert(message) {
        window.alert(message);
        console.log("Alert message from kb prasac welcome service");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: WelcomeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: WelcomeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: WelcomeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktYW5ndWxhci1saWJyYXJ5L3NyYy9saWIvd2VsY29tZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBRXpCLGdCQUFnQixDQUFDO0lBQ2pCLEtBQUssQ0FBQyxPQUFlO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQzlELENBQUM7dUdBTlUsY0FBYzsyR0FBZCxjQUFjLGNBRmIsTUFBTTs7MkZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdlbGNvbWVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB3aW5kb3cuYWxlcnQobWVzc2FnZSk7XG4gICAgY29uc29sZS5sb2coXCJBbGVydCBtZXNzYWdlIGZyb20ga2IgcHJhc2FjIHdlbGNvbWUgc2VydmljZVwiKTtcbiAgfVxufVxuIl19