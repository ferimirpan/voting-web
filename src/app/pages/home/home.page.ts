import { CommonModule } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { PollingVotePage } from '../polling/polling-vote/polling-vote.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonicModule,
    ReactiveFormsModule,
    PollingVotePage
  ]
})
export class HomePage {
  
}