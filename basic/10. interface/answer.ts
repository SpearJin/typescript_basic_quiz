{
  // Q1. interface 이용해서 간단하게 타입을 만들어봅시다
  // let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
  interface Machine {
    brand: string;
    serialNumber: number;
    model: string[];
  }

  // Q2. array 안에 object 여러개가 필요합니다.
  // 쇼핑몰 장바구니를 구현하려고 하는데,
  // 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
  // let 장바구니 = [
  // 	{ product : '청소기', price : 7000 },
  // 	{ product : '삼다수', price : 800 }
  // ]
  interface Water {
    product: string;
    price: number;
  }
  let 장바구니: Water[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
  ];

  //  Q3. 위에서 만든 타입을 extends 해봅시다.
  // 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
  // { product : '청소기', price : 7000, card : false }
  interface Udpate extends Water {
    card: boolean;
  }
  let 장바구니2: Udpate[] = [
    { product: '청소기', price: 7000, card: true },
    { product: '삼다수', price: 800, card: false },
  ];

  // Q4. object 안에 함수를 2개 넣고 싶은데요
  // 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
  // 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
  interface Operator {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }
  let oper: Operator = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    },
  };
  console.log(oper.plus(5, 2));
  console.log(oper.minus(5, 2));
}
