import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test-1/test-1.component';
import { Test2Component } from './test-2/test-2.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { MarketStatusComponent } from './market-status/market-status.component';
import { PostDataComponent } from './post-data/post-data.component';
import { Tab2Component } from './tab-2/tab-2.component';

const routes: Routes = [

  // {path : '',redirectTo:'/test-1', pathMatch:'full'},   
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'dhan', component: MarketStatusComponent },
  { path: 'dhan-post', component: PostDataComponent },  
  {path: 'test-1', component:Test1Component},
  {path: 'test-2', component:Test2Component},
  {path: 'tab-2', component:Tab2Component}
    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
