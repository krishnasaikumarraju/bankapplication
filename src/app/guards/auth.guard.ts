import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import {  CanActivate } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor (private backendApiService : BackendApiService, private router:Router){
        this.backendApiService.authToken
    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem('id_token')){
        console.log("AUTH GUARD");
        return true;
        }
        else{
            console.log("BLOCKED BY AUTH GUARD");
            this.router.navigate(['/authenticate']);
            return false;
        }
    }
}