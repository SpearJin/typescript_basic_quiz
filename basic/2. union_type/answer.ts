{
  // Q1. 다음 코드 에러가 안나도록 바꾸기
  // var 어레이: number[] = [1,'2',3]
  // var 오브젝트: {data : number} = { data : '123' }
  var 어레이: (number | string)[] = [1, '2', 3];
  var 오브젝트: { data: number | strings } = { data: '123' };

  // Q2.왜 다음 코드는 에러가 날까요?
  // let 나이: string|number;
  // 나이 + 1;
  // -----------------------
  // let 나이: unknown = 1;
  // 나이 + 1;
  // => 타입 스크립트는 엄격하다 그러므로 정확히 어떤 타입인지 명시를 해주어야 연산이 가능하다

  // Q3. any와 unknown에 차이는?
  // => 둘다 모든 타입을 수용 할 수 있지만, any 보다 unknown 타입이 좀더 안정적이다
  // 이유는 any는 타입도 맘대로 바꿀수 있지만 unknown은 아니다
  let myValue: unknown;
  let a: string = myValue;
  // 에러가 생김
  let myValue2: any;
  let b: number = myValue2;
  // 아무대나 할당이 가능해서 안정적이지 않음

  // Q4. 다음 변수 4개에 타입을 지정해봅시다.
  // let user = 'kim';
  // let age = undefined;
  // let married = false;
  // let 철수 = [user, age, married];
  let user: string = 'kim';
  let age: undefined = undefined;
  let married: boolean = false;
  let 철수: (string | undefined | boolean)[] = [user, age, married];

  // Q5.학교라는 변수에 타입지정해보십시오.
  // let 학교 = {
  //     score : [100, 97, 84],
  //     teacher : 'Phil',
  //     friend : 'John'
  // }
  // 학교.score[4] = false;
  // 학교.friend = ['Lee' , 학교.teacher]
  let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
  };
  학교.score[4] = false;
  학교.friend = ['Lee', 학교.teacher];
}
