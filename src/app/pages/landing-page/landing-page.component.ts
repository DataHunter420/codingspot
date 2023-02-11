import { Component, ViewChild } from '@angular/core';
import { ETutorialPages} from '../core/enums/ETutorialPages';
import { ICourses } from '../core/interfaces/courses.interfaces';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  
  public ETutorialPages = ETutorialPages
  constructor(){} 



  available_courses:ICourses[] = [
    {
      course_heading:'HTML',
      course_desc:'It is the language for creating webpages',
      example:'../../../assets/images/html-example.png',
      buttons:[
        {
          text:'Learn HTML',
          link:'tutorial-page/html',

        },
        {
          text:'Video Tutorial',
          link:'html-video-tutorial-page'
        },
        {
          text:'HTML Exercises',
          link:'html-exercises-page',

        },
        {
          text:'Get Certified',
          link:'html-certified-page'
        }
      ]        
   },
    
   {
    course_heading:'CSS',
    course_desc:'It is the language for creating webpages',
    example:'../../../assets/images/html-example.png',
    buttons:[
      {
        text:'Learn CSS',
        link:'css-tutorial-page',

      },
      {
        text:'Video Tutorial',
        link:'css-video-tutorial-page'
      },
      {
        text:'CSS Exercises',
        link:'css-exercises-page',

      },
      {
        text:'Get Certified',
        link:'css-certified-page'
      }
    ]        
 },
 {
  course_heading:'JAVASCRIPT',
  course_desc:'It is the language for creating webpages',
  example:'../../../assets/images/html-example.png',
  buttons:[
    {
      text:'Learn Javascript',
      link:'javascript-tutorial-page',

    },
    {
      text:'Video Tutorial',
      link:'javascript-video-tutorial-page'
    },
    {
      text:'Javascript Exercises',
      link:'javascript-exercises-page',

    },
    {
      text:'Get Certified',
      link:'javascript-certified-page'
    }
  ]        
},
{
  course_heading:'ANGULAR ',
  course_desc:'It is the language for creating webpages',
  example:'../../../assets/images/html-example.png',
  buttons:[
    {
      text:'Learn Angular',
      link:'angular-tutorial-page',

    },
    {
      text:'Video Tutorial',
      link:'angular-video-tutorial-page'
    },
    {
      text:'Angular Exercises',
      link:'angular-exercises-page',

    },
    {
      text:'Get Certified',
      link:'angular-certified-page'
    }
  ]        
},
{
  course_heading:'REACT JS',
  course_desc:'It is the language for creating webpages',
  example:'../../../assets/images/html-example.png',
  buttons:[
    {
      text:'Learn React ',
      link:'reactjs-tutorial-page',

    },
    {
      text:'Video Tutorial',
      link:'reactjs-video-tutorial-page'
    },
    {
      text:'React Exercises',
      link:'reactjs-exercises-page',

    },
    {
      text:'Get Certified',
      link:'reactjs-certified-page'
    }
  ]        
},

  ]

  learningTuorialPage(course:any){
    alert(course);
    console.log(course);
  }
}
