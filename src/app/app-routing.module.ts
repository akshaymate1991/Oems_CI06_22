import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/admin/category/update-category/update-category.component';
import { ViewQuizComponent } from './components/admin/quizes/view-quiz/view-quiz.component';
import { UpdateQuizComponent } from './components/admin/quizes/update-quiz/update-quiz.component';
import { AddQuizComponent } from './components/admin/quizes/add-quiz/add-quiz.component';
import { AddQuestionsComponent } from './components/admin/questions/add-questions/add-questions.component';
import { ViewQuestionsComponent } from './components/admin/questions/view-questions/view-questions.component';
import { UpdateQuestionsComponent } from './components/admin/questions/update-questions/update-questions.component';
import { AuthAdminGuard } from './servives/adminGuard/auth-admin.guard';
import { AuthUserGuard } from './servives/userGuard/auth-user.guard';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { LoadQuizComponent } from './components/user/load-quiz/load-quiz.component';
import { InstructionsPageComponent } from './components/user/instructions-page/instructions-page.component';
import { StartQuizComponent } from './components/user/start-quiz/start-quiz.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },

  {
    path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthAdminGuard],
    children: [
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'category', component: ViewCategoryComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'updateCategory/:id', component: UpdateCategoryComponent },
      { path: 'add-quiz', component: AddQuizComponent },
      { path: 'update-quiz/:id', component: UpdateQuizComponent },
      { path: 'quiz', component: ViewQuizComponent },
      { path: 'add-questions/:id/:title', component: AddQuestionsComponent },
      { path: 'view-questions/:id/:title', component: ViewQuestionsComponent },
      { path: 'update-questions/:id/:title', component: UpdateQuestionsComponent },
    ],
  },

  {
    path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthUserGuard],
    children: [
      { path: 'user-home', component: UserHomeComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: ':category_id', component: LoadQuizComponent },
      { path: 'instructions/:quiz_id', component: InstructionsPageComponent},
      
    ]
  },
  
  {path:'startExam/:quiz_id', component:StartQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
