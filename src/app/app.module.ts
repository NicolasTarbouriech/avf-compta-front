/* Import UTILITAIRES */ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Import COMPOSANTS */
import { NavBarComponent } from './componant/nav-bar/nav-bar.component';

/* Import PAGES */
import { PageGestionClientComponent } from './Pages/page-gestion-client/page-gestion-client.component';
import { PageAccueilComponent } from './Pages/page-accueil/page-accueil.component';

@NgModule({
  declarations: [

    /* COMPOSANTS */
    AppComponent,
    NavBarComponent,

    /* Pages */
    PageGestionClientComponent,
    PageAccueilComponent,
  
  ],
  imports: [
  BrowserModule,
  RouterModule,
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
