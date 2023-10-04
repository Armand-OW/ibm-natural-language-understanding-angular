import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }

  private apiKey = "YOUR-API-KEY" //.ENV file instead
  private apiUrl = "YOUR-API-URL"

  
  analyseUrl = `${this.apiUrl}/v1/analyze?version=2019-07-12`;

  analyse(text: string) {

    //json data to analyse and specify what I want to understand from the AI (features)
    const data = {
      "text": text,
      //"url": "http://newsroom.ibm.com/Guerbet-and-IBM-Watson-Health-Announce-Strategic-Partnership-for-Artificial-Intelligence-in-Medical-Imaging-Liver",
      "features": {
        "sentiment": {},
        "categories": {},
        "concepts": {},
        "entities": {},
        "keywords": {},
        "emotion": {}
      }
    }

    return fetch(this.analyseUrl, {
      method: "POST",
      headers: {
        'Authorization': `Basic ${btoa(`apikey:${this.apiKey}`)}`, //passing api key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) //passing the data we want analysing
    })
    .then(response => response.json) //responding with AI values
    .catch(error => {
      console.log(error)
      throw error;
    })

  }
}
