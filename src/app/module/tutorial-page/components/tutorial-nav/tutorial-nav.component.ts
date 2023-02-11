import { Component ,OnInit,HostListener} from '@angular/core';

@Component({
  selector: 'app-tutorial-nav',
  templateUrl: './tutorial-nav.component.html',
  styleUrls: ['./tutorial-nav.component.scss']
})
export class TutorialNavComponent {

  fixed_header:boolean = false;
 
  ngOnInit(){
    
  }
  @HostListener("window:scroll",['$event'])
  scrollHandler(){
    console.log(window.scrollY);

    if(window.scrollY > 60 ){
      console.log(this.fixed_header)
      this.fixed_header = true;
    }
    else{
      console.log(this.fixed_header)
      this.fixed_header=false;
    }
  }
}
