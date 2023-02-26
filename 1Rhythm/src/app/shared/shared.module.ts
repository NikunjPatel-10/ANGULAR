import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { CardComponent } from './components/card/card.component';
import { PhoneMaskingDirective } from './directives/phone-masking.directive';
import { SearchPipe } from './pipes/search.pipe';
// import { HttpClientModule } from '@angular/common/http';
import { ToastrMessageService } from './services/toastr_message.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    BookingHistoryComponent,
    ManageProfileComponent,
    CardComponent,
    PhoneMaskingDirective,
    SearchPipe
  ],
  imports: [
    CommonModule
    // HttpClientModule
  ],
  exports: [
    CardComponent
  ],
  providers: [
    UserService,
    ToastrMessageService
  ]

})
export class SharedModule { }
