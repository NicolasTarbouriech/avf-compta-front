import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

/* IMPORTS PAGES */
import { PageAccueilComponent } from './Pages/page-accueil/page-accueil.component';
import { PageGestionClientComponent } from './Pages/page-gestion-client/page-gestion-client.component';

const routes: Routes = [

{ path: '', component: PageAccueilComponent},
{ path: 'accueil', component: PageAccueilComponent},
{ path: 'clients', component: PageGestionClientComponent}
 

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
