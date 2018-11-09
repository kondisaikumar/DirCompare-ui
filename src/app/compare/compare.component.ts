import { Component, OnInit } from '@angular/core';
import { RestService } from '../restservice/restService';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  leftData:  Array<any>;
  response: any;
  leftContent = [];
  rightContent = [];
  constructor(private restService: RestService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.restService.postDiffPaths('http://localhost:8080/getCompare?path1=C:/Users/kondi/OneDrive/Desktop/test folders/x/new.txt&path2=C:/Users/kondi/OneDrive/Desktop/test folders/y/new.txt')
    .subscribe(response => {
     this.response = response;
      console.log(this.response);
    });
     jQuery(document).ready(() => {
      jQuery('#mergely').mergely({
        lhs: (setValue) => {
          console.log(this.response.leftstringList);
          for (let i = 0; i < this.response.leftstringList.length; i++  ) {
          this.leftContent.push(this.response.leftstringList[i] + ('\n'));
          }
          setValue(this.leftContent.join(''));
          console.log(this.leftContent.join(''));
        },
        rhs: (setValue) => {
          for (let i = 0; i < this.response.rightstringList.length; i++  ) {

            this.rightContent.push(this.response.rightstringList[i] + ('\n'));
            }
          setValue(this.rightContent.join(''));
        }
      });
      $('#prev').click(function() { $('#mergely').mergely('scrollToDiff', 'prev'); });
      $('#first').click(function() { $('#mergely').mergely('scrollToDiff', 'first'); });
      $('#mergely').mergely('unmarkup');
      $('#next').click(function() { $('#mergely').mergely('scrollToDiff', 'next'); });
      $('#last').click(function() { $('#mergely').mergely('scrollToDiff', 'last'); });
    });
  }
}


interface Action {
  leftstringList: string;
}
