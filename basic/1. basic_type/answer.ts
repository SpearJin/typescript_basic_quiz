{
  // Q1. 이름, 나이, 출생지역 변수에 타입 정하기
  const userName: string = '창진';
  const userAge: number = 20;
  const area: string = '대한민국';

  // Q2. 가수, 노래 obejct 자료형으로 담아보기
  const sing: { singer: string; song: string } = {
    singer: '전상근',
    song: '꿈속에서',
  };

  // Q3. 다음을 타입 지정하기
  // let project = {
  //   member : ['kim', 'park'],
  //   days : 30,
  //   started : true,
  // }
  let project: { member: string[]; days: number; started: boolean } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  };
}
