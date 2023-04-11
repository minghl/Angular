import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  // 数据绑定
  message:string = "Hello Angular";
  htmlString: string = "<h1>htmlString</h1>";
  getInfo(){
    return "我是getInfo方法中返回的内容"
  };
  // 属性绑定
  title = "angular-test";
  imgUrl = "https://img0.baidu.com/it/u=3006243109,1966449273&fm=253&fmt=auto&app=120&f=JPEG?w=569&h=273"
}
