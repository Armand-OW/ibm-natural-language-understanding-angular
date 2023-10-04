import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AiService } from './ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'what-you-say';

  constructor(public aiService: AiService) {}

  textToAnalyse = new FormControl()

  callApi() {
    this.aiService.analyse(this.textToAnalyse.value + "") //calling the service functionality
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }
}
