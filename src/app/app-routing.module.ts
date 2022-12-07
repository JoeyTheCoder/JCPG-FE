import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './routes/blog/blog.component';
import { CvComponent } from './routes/cv/cv.component';
import { GeneratorComponent } from './routes/generator/generator.component';
import { HomeComponent } from './routes/home/home.component';
import { NbaScoresComponent } from './routes/nba-scores/nba-scores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'generator', component: GeneratorComponent },
  { path: 'cv', component: CvComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'nba-scores', component: NbaScoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
