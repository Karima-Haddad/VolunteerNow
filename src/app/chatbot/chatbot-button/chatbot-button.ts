import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot-button',
  imports: [],
  templateUrl: './chatbot-button.html',
  styleUrl: './chatbot-button.css',
})
export class ChatbotButton {
  openChatbot() {
    alert("🟠🔵 Chatbot en cours de développement !\nEn savoir plus sur VolunteerNow ?");
  }
}
