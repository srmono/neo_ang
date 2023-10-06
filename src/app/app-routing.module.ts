import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: "/login", pathMatch: 'full'},
  {path:'task',  component: TasksComponent},
  {path:'taskitem/:id',  component: TasksComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {
    path: "admin", 
    canActivate: [AuthGuard],
    loadChildren: () => import( './modules/admin/admin.module')
                    .then( (m) => m.AdminModule)
  },
  {path: "**", component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
