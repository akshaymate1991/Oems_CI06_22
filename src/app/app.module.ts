import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/admin/category/update-category/update-category.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AddQuizComponent } from './components/admin/quizes/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './components/admin/quizes/view-quiz/view-quiz.component';
import { UpdateQuizComponent } from './components/admin/quizes/update-quiz/update-quiz.component';
import { AddQuestionsComponent } from './components/admin/questions/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './components/admin/questions/update-questions/update-questions.component';
import { ViewQuestionsComponent } from './components/admin/questions/view-questions/view-questions.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './servives/interceptorService/auth.interceptor';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { LoadQuizComponent } from './components/user/load-quiz/load-quiz.component';
import { InstructionsPageComponent } from './components/user/instructions-page/instructions-page.component';
import { StartQuizComponent } from './components/user/start-quiz/start-quiz.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
     SignInComponent,
     HomeComponent,
     AdminDashboardComponent,
     AdminSidebarComponent,
     AddCategoryComponent,
     UpdateCategoryComponent,
     ViewCategoryComponent,
     UserDashboardComponent,
     UserSidebarComponent,
     ProfileComponent,
     AddQuizComponent,
     ViewQuizComponent,
     UpdateQuizComponent,
     AddQuestionsComponent,
     UpdateQuestionsComponent,
     ViewQuestionsComponent,
     AdminHomeComponent,
     UserHomeComponent,
     UserProfileComponent,
     LoadQuizComponent,
     InstructionsPageComponent,
     StartQuizComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
    

  ],
  
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }

