# Angular Route Guards

Angular route guards allow you to control access to specific routes in your application. There are several types of route guards, including `CanActivate`, `CanActivateChild`, `CanDeactivate`, and `CanLoad`. This document provides an overview of how to use these guards with examples.

## `CanActivate` Guard

The `CanActivate` guard is used to prevent a user from navigating to a specific route. It's often used for authentication or authorization checks.

### Example:

1. Create a guard file named `auth.guard.ts` using the Angular CLI:

   ```bash
   ng generate guard auth
   ```

2. Open the generated `auth.guard.ts` file and implement the guard logic. For example, you can check if the user is authenticated before allowing access to a route:

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
       const isAuthenticated = /* check if the user is authenticated */;

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

The `CanActivateChild` guard is used to protect child routes within a parent route.

### Example:

1. Create a guard file named `auth-child.guard.ts` using the Angular CLI (if not already done):

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

## `CanDeactivate` Guard

The `CanDeactivate` guard is used to prevent a user from leaving a route with unsaved changes. It's often used for forms to confirm if the user wants to discard changes.

### Example:

1. Create a guard file named `can-deactivate.guard.ts` using the Angular CLI:

   ```bash
   ng generate guard can-deactivate
   ```

2. Open the generated `can-deactivate.guard.ts` file and implement the guard logic. For example, you can check if there are unsaved changes before leaving a form:

   ```typescript
   // can-deactivate.guard.ts

   import { Injectable } from '@angular/core';
   import { CanDeactivate } from '@angular/router';

   export interface CanComponentDeactivate {
     canDeactivate: () => boolean;
   }

   @Injectable({
     providedIn: 'root',
   })
   export class CanDeactivateGuard
     implements CanDeactivate<CanComponentDeactivate>
   {
     canDeactivate(
       component: CanComponentDeactivate
     ): boolean {
       return component.canDeactivate ? component.canDeactivate() : true;
     }
   }
   ```

3. Add the `CanDeactivate` guard to the route configuration by specifying it in the `canDeactivate` property of a route. For example:

   ```typescript
   // app-routing.module.ts

   const routes: Routes = [
     {
       path: 'edit',
       component: EditComponent,
       canDeactivate: [CanDeactivateGuard], // Apply the CanDeactivateGuard
     },
     // Other routes
   ];
   ```

## `CanLoad` Guard

The `CanLoad` guard is used to prevent the initial loading of a module. It's often used for lazy-loaded modules to check if a module can be loaded based on certain conditions.

### Example:

1. Create a guard file named `can-load.guard.ts` using the Angular CLI:

   ```bash
   ng generate guard can-load
   ```

2. Open the generated `can-load.guard.ts` file and implement the guard logic. For example, you can check if the user is authenticated before loading a module:

   ```typescript
   // can-load.guard.ts

   import { Injectable } from '@angular/core';
   import { CanLoad, Route, UrlSegment } from '@angular/router';
   import { Observable } from 'rxjs';

   @Injectable({
     providedIn: 'root',
   })
   export class CanLoadGuard implements CanLoad {
     canLoad(
       route: Route,
       segments: UrlSegment[]
     ): boolean | Observable<boolean> | Promise<boolean> {
       // Implement your module loading logic here
       const canLoadModule = /* check if the user can load the module */;

       return canLoadModule;
     }
   }
   ```

3. Add the `CanLoad` guard to the route configuration by specifying it in the `canLoad` property of a route. For example:

   ```typescript
   // app-routing.module.ts

   const routes: Routes = [
     {
       path: 'lazy',
       loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
       canLoad: [CanLoadGuard], // Apply the CanLoadGuard
     },
     // Other routes
   ];
   ```

With these guards in place, you can control access to specific routes and modules based on your authentication, authorization, and form validation requirements.

Remember to adapt the guards and routes according to your application's specific needs and security policies.

---
