import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { WelcomeComponent } from '../pages/onboarding/welcome/welcome.component';
import { CoverImageComponent } from '../components/cover-image/cover-image.component';
import { ProfileAvatarComponent } from '../components/profile-avatar/profile-avatar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'onboarding/welcome',
        component: WelcomeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    WelcomeComponent,
    CoverImageComponent,
    ProfileAvatarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
