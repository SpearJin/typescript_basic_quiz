{
  //   Q1. 타입 파라미터로
  // 1. array 타입을 입력하면
  // 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
  // 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
  // (동작예시)
  // let age1 :Age<[string, number]>;
  // let age2 :Age<[boolean, number]>;
  type Myage<T> = T extends [string, ...any] ? T[0] : unknown;

  // Q2. 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오.
  // 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
  // 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
  type SelectType<T> = T extends (x: infer R) => any ? R : any;
}
