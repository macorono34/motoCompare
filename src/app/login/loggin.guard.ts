import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { AccountService } from '../services/account.service';

@Injectable()
export class LogginGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) { }
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged=this.accountService.isLoggedIn();
        if (logged) {
            return true;
        }
this.router.navigate(["login"]);
return false;
    }
}