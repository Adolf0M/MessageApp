import { Component } from '@angular/core';
import { ChatComponent } from "../../components/home/chat/chat.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProfileComponent } from "../../components/home/profile/profile.component";
import { ConversationComponent } from "../../components/home/conversation/conversation.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ChatComponent, NavbarComponent, ProfileComponent, ConversationComponent]
})
export class HomeComponent {
  showProfile: boolean = false;

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  showChats() {
    this.showProfile = false;
  }
}
