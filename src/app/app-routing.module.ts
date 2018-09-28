import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {CurriculumVitaeComponent} from './curriculum-vitae/curriculum-vitae.component';
import {HomeComponent} from './home/home.component';

const routes: Routes  = [
  {path: '' , redirectTo:'/home', pathMatch:'full'},
  {path:'curriculumVitae', component: CurriculumVitaeComponent},
  {path:'home' , component:HomeComponent}
  ];

@NgModule({
  
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
