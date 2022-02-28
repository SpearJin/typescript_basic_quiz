{
  // Q1. x 속성에 숫자를 더해주는 함수가 필요합니다.
  // class User {
  //   private static x = 10;
  //   public static y = 20;
  // }
  // User.addOne(3) //이렇게 하면 x가 3 더해져야함
  // User.addOne(4) //이렇게 하면 x가 4 더해져야함
  // User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
  // 저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
  // 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
  // (조건) private static x = 10; 이 코드 수정금지
  class User {
    private static x = 10;
    public static y = 20;
    static addOne(num: number) {
      User.x += num;
    }
    printX() {
      console.log(User.x);
    }
  }
  const user = new User();
  User.addOne(3);
  User.addOne(4);
  user.printX();

  // Q3. 이런거 어떻게 만들게요
  // let 네모 = new Square(30, 30, 'red');
  // 네모.draw()
  // 네모.draw()
  // 네모.draw()
  // 네모.draw()

  // 이렇게 네모.draw()를 할 때마다
  // index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
  // 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
  // Square라는 class를 어떻게 만들면 될까요?

  class Square {
    private width: number = 30;
    private height: number = 30;
    private color: string = 'red';
    draw() {
      const box = document.createElement('div');
      const top = Math.random() * 400;
      const left = Math.random() * 400;
      box.style.position = 'absolute';
      box.style.top = `${top}px`;
      box.style.left = `${left}px`;
      box.style.width = `${this.width}px`;
      box.style.height = `${this.height}px`;
      box.style.background = `${this.color}`;
      document.body.appendChild(box);
    }
  }
  let 네모 = new Square();
  네모.draw();
  네모.draw();
  네모.draw();
}
