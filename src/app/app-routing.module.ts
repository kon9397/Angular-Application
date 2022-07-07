import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { footerRoutes } from './layout/footer/footer.route';
import { homeRoutes } from './home/home.route';
import { errorRoutes } from './layout/error/error.route';
import { navbarRoutes } from './layout/navbar/navbar.route';
import { loginRoutes } from './login/login.route';

const layoutRoutes = [
    ...homeRoutes,
    ...navbarRoutes,
    ...footerRoutes,
    ...loginRoutes,
    ...errorRoutes
]

@NgModule({
  imports: [RouterModule.forRoot(layoutRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
