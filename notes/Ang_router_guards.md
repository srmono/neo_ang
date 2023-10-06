# Implementing Router Guards in Angular

Router guards in Angular allow you to control and protect access to specific routes in your application. There are several types of guards, including `CanActivate` and `CanActivateChild`, which are commonly used to protect routes. Below, we'll walk through how to implement these guards.

## `CanActivate` Guard

The `CanActivate` guard is used to prevent a user from navigating to a particular route. It's often used for authentication or authorization checks.

1. Create a guard file using Angular CLI:
   ```bash
   ng generate guard auth
   ```
   This generates a `auth.guard.ts` file in the `src/app` directory.

2. Open the `auth.guard.ts` file and implement the guard logic. For example, you can check if the user is authenticated before allowing access to a route:
   ```typescript
   // auth.guard.ts

   import { Injectable } from '@angular/core';
   import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
   import { Observable } from 'rxjs';

   @Injectable({
     providedIn: 'root',
   })
   export class AuthGuard implements CanActivate {
     constructor(private router: Router) {}

     canActivate(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot
     ): boolean | UrlTree | Observable<boolean | UrlTree> {
       // Implement your authentication logic here
       const isAuthenticated = /* check if user is authenticated */;

       if (isAuthenticated) {
         return true;
       } else {
         // Redirect to the login page or another page
         return this.router.parseUrl('/login');
       }
     }
   }
   ```

3. Add the guard to your route configuration by specifying it in the `canActivate` property of a route. For example:
   ```typescript
   // app-routing.module.ts

   const routes: Routes = [
     {
       path: 'protected',
       canActivate: [AuthGuard], // Apply the AuthGuard
       loadChildren: () => import('./protected/protected.module').then((m) => m.ProtectedModule),
     },
     // Other routes
   ];
   ```

## `CanActivateChild` Guard

The `CanActivateChild` guard is used to protect child routes within a parent route. It's suitable for securing a portion of your application.

1. Create a guard file using Angular CLI (if not already done):
   ```bash
   ng generate guard auth-child
   ```

2. Implement the guard logic in the `auth-child.guard.ts` file.

3. Apply the `CanActivateChild` guard to the parent route that contains child routes by specifying it in the `canActivateChild` property. For example:
   ```typescript
   // app-routing.module.ts

   const routes: Routes = [
     {
       path: 'admin',
       canActivateChild: [AuthChildGuard], // Apply the AuthChildGuard
       children: [
         { path: 'dashboard', component: DashboardComponent },
         { path: 'users', component: UsersComponent },
       ],
     },
     // Other routes
   ];
   ```

With these guards, you can control access to specific routes and child routes based on your authentication and authorization requirements. Users who don't meet the criteria specified in the guard will be redirected to another route, typically a login page or an access-denied page.

Remember to adapt the guards and routes according to your application's specific needs and security policies.
```