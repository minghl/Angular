import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  // 数据绑定
  message:string = "Hello Angular";
  htmlString: string = "<h1>htmlString</h1>";
  getInfo(){
    return "我是getInfo方法中返回的内容"
  };
  // 属性绑定
  title = "angular-test";
  imgUrl = "https://img0.baidu.com/it/u=3006243109,1966449273&fm=253&fmt=auto&app=120&f=JPEG?w=569&h=273";
  // 事件绑定
  // onClick(event: Event){
  //   console.log(event);
    
  //   alert("按钮被点击了");
  //   console.log(this);
  // }
  onKeyup(){
    console.log("onKeyup");
  }

  // 使用 ViewChild 装饰器获取一个元素
  @ViewChild("paragraph") paragraph: ElementRef<HTMLParagraphElement> | undefined;

  // 使用 ViewChildren 获取一组元素
  @ViewChildren("items") items: QueryList<ElementRef<HTMLLIElement>> | undefined;

  // 获取原生DOM对象，在组件模版中
  onClick(button:HTMLButtonElement):void{
    console.log(button);
  }

  // 获取原生DOM对象，在组件类中
  ngAfterViewInit(): void {
    // ?.安全修饰符，paragraph有的时候才去访问nativeElement
    console.log(this.paragraph?.nativeElement);
    console.log(this.items?.toArray());
    
  }
}
