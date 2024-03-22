import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration: number = 0;
  @Input({required:true}) message: string = '';

  constructor() {
    //Before render
    //No async
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Before and during changes
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    
  }

  ngOnInit(): void {
    //After render
    //Una vez
    //Async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>  ', this.duration);
    console.log('message =>  ', this.message);
    
  }
  ngAfterViewInit(): void {
    //After render
    //Childs allready rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
    
  }

  ngOnDestroy(): void {
    //before render
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    
  }
}
