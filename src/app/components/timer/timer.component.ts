import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    public minutes = 1;
    public seconds = 0;

    
    public audio = new Audio();
  
    constructor() { }

    setTime(){
      if (this.seconds == 0 && this.minutes != 0){
          this.seconds = 59;
          this.minutes--;
      } else if(this.seconds == 0 && this.minutes == 0) {
        console.log('playing audio!');
        //this.audio.play();
      }else {
          this.seconds--;
      }
  }

    loadAudio(){
        this.audio.src = "./alarm.wav";
        this.audio.load();
    }

    ngOnInit() {
      this.loadAudio();
       this.subscription = interval(1000)
           .subscribe(x => { this.setTime(); });
    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

}