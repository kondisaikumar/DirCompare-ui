import { Component, OnInit } from '@angular/core';
import { RestService } from '../restservice/restService';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  left = true;
  right = true;
  identical = true;
  different = true;
  comparedResult: any;
  labelList: any;
  rightList = [];
  lefttList = [];
  identicalList = [];
  differentList = [];
  diffList = [];
  constructor(private restService: RestService, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.restService.postDiffPaths('http://localhost:8080/getDiff?path1=C:/Users/kondi/OneDrive/Desktop/test folders/x&path2=C:/Users/kondi/OneDrive/Desktop/test folders/y')
      .subscribe(response => {
        console.log(response);
        this.comparedResult = response;
        for (let i = 0; i < this.comparedResult.length; i++) {
          if (this.comparedResult[i].result === 'Only in Right') {
            this.rightList.push(this.comparedResult[i]);
          } else if (this.comparedResult[i].result === 'Only in Left') {
            this.lefttList.push(this.comparedResult[i]);
          } else if (this.comparedResult[i].result === 'Identical') {
            this.identicalList.push(this.comparedResult[i]);
          } else if (this.comparedResult[i].result === 'Different') {
            this.differentList.push(this.comparedResult[i]);
          }
        }
this.diffList = this.lefttList.concat(this.rightList).concat(this.identicalList).concat(this.differentList);

      });
  }
  dolCheck($event) {
    this.left = !this.left;
    this.valu();
  }
  dorCheck($event) {
    this.right = !this.right;
    this.valu();
  }
  doiCheck($event) {
    this.identical = !this.identical;
    this.valu();
  }
  dodCheck($event) {
    this.different = !this.different;
    this.valu();
  }
  valu() {
    if (this.left === true && this.right === false && this.identical === false && this.different === false) {
      this.diffList = this.lefttList;
    } else if (this.left === true && this.right === true && this.identical === false && this.different === false) {
      this.diffList = this.lefttList.concat(this.rightList);
    } else if (this.left === false && this.right === true && this.identical === false && this.different === false) {
      this.diffList = this.rightList;
    } else if (this.left === false && this.right === false && this.identical === true && this.different === false) {
      this.diffList = this.identicalList;
    } else if (this.left === false && this.right === false && this.identical === false && this.different === true) {
      this.diffList = this.differentList;
    } else if (this.left === false && this.right === false && this.identical === true && this.different === true) {
      this.diffList = this.identicalList.concat(this.differentList);
    } else if (this.left === true && this.right === true && this.identical === true && this.different === false) {
      this.diffList = this.lefttList.concat(this.rightList).concat(this.identicalList);
    } else if (this.left === true && this.right === true && this.identical === true && this.different === true) {
      this.diffList = this.lefttList.concat(this.rightList).concat(this.identicalList).concat(this.differentList);
    } else if (this.left === true && this.right === true && this.identical === false && this.different === true) {
      this.diffList = this.lefttList.concat(this.rightList).concat(this.differentList);
    } else if (this.left === false && this.right === true && this.identical === false && this.different === true) {
      this.diffList = this.rightList.concat(this.different);
    } else if (this.left === true && this.right === false && this.identical === false && this.different === true) {
      this.diffList = this.lefttList.concat(this.differentList);
    } else if (this.left === true && this.right === false && this.identical === true && this.different === false) {
      this.diffList = this.lefttList.concat(this.identicalList);
    } else if (this.left === false && this.right === true && this.identical === true && this.different === false) {
      this.diffList = this.rightList.concat(this.identicalList);
    } else if (this.left === true && this.right === false && this.identical === true && this.different === true) {
      this.diffList = this.lefttList.concat(this.identicalList).concat(this.differentList);
    } else if (this.left === false && this.right === true && this.identical === true && this.different === true) {
      this.diffList = this.rightList.concat(this.identicalList).concat(this.differentList);
    } else if (this.left === false && this.right === false && this.identical === false && this.different === false) {
      this.diffList = null;

    }
  }
  diffcheckClick(a) {
    if (a === 'Different') {
      window.open('/compare');
    }
  }
}
