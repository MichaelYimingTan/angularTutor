import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

    serverStatus = 'offLine';
    counter = 0;
    chicken: string;
    bun: string;
    lettuce: string;
    tomato: string;
    beef: string;
    isLogin = false;
    userName: string;
    dish: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];

    getServerStatus() {
      return this.serverStatus;
    }

    addChicken(){
      this.chicken = 'chicken added';

    }
    addBun(){
      this.bun = 'bun added';
    }
    addLettuce(){
      this.lettuce = 'lettuce added';
    }
    addTomato(){
      this.tomato = 'tomato added';
    }
    addBeef(){
      this.beef = 'beef added';
    }
    makeDish(){
      this.dish = 'Chicken Burger';
    }
}
