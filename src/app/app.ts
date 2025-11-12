import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotButton } from "./chatbot/chatbot-button/chatbot-button";

@Component({
  selector: 'app-root',
  imports: [ChatbotButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('volunteer-now');
}
