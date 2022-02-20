{
  //   Q1. 왜 에러가 날까요?
  // function 내함수(x? :number) :number {
  //   return x * 2
  // }
  // => 타입스크립트는 엄격하다 ?을 사용하면 undefined가 올수도 있다고 판단해서 에러가 뜬다

  // Q2.이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력하는 함수 만들보십시오.
  function printName(name: string): void {
    console.log(`안녕하세요 ${name}`);
  }
  printName('홍길동');

  // Q3. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
  // 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
  // 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
  // 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
  function count(num: string | number): number {
    return num.toString().length;
  }
  count('245');
  count(9567);

  // Q4.결혼 가능 확률을 알려주는 함수를 만들어봅시다.
  // 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
  // 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
  // 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
  function marryCheck(pay: number, house: boolean, charm: string): string | void {
    let result = 0;
    result += pay;
    if (house) {
      result += 500;
    }
    if (charm === '상') {
      result += 100;
    }
    if (result >= 600) {
      return '결혼가능';
    }
  }

  marryCheck(200, true, '상');
}
