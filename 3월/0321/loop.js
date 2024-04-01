const arr = [1, 2, 3, 4, 5];

/**
 *  forEach
 * 첫번째 파라미터 => value값
 * 두번째 파라미터 => index 값
 * 세번째 파라미터 => 객체 값
 * forEach는 항상 undefined 리턴
 */

const forEachArr = [];
arr.forEach((value, index, obj) => {
  /**
   * filter 구현
   */
  if (value > 3) {
    forEachArr.push(value);
  }
});

const ob = new Map();
ob.set(1, '가');
ob.set(2, '나');
ob.set(3, '다');

/**
 * Map객체는 forEach가능
 * Array가 아니기 때문에 map() 메서드는 사용 못함
 */

ob.forEach((value, index, obj) => {
  //...
});

/**
 *  map
 * 파라미터값은 forEach와 동일
 * 리턴값은 새로운 배열
 */
const mapArr = arr.map((value, index, obj) => {
  if (value > 3) {
    return value;
  }
});
//return 값이 있기 때문에 콜백에서 return해주는 값이 없으면 undefined 반환
console.log(mapArr); //[ undefined, undefined, undefined, 4, 5 ]
