# AUTO_INCREMENT

자동으로 1씩 증가되는 속성이다
보통 PK키로 설정해서 사용한다

## 장점

1. 삽입 성능이 좋다. 기본적으로 정수형 데이터이기 때문에 인덱스의 크기가 작고 효율이 좋아 데이터베이스 성능을 향상 시킬 수 있다.

2. 고유성이 있다. 자동으로 고유한 기본 키 값을 할당하기 때문에 새로운 레코드가 삽입될 때마다 자동으로 증가하는 값을 사용하여 중복을 피할 수 있다.

## 단점

1. 키를 예측하기 쉬워진다. 키값이 예측될 수 있다는 점은 SQL injection 공격에도 취약해질 수 있고, 고객수 등을 알아가는 등 보안상 문제가 생길 가능성이 있다.

# UNSIGNED

양수만 표현할때 사용(정수 타입만 가능)

MSB로 부호 구분을 하지 않는다 그러므로 저장 가능한 용량을

전부 양수만 저장하므로 표현 가능한 양수가 약 2배 늘어난다

```sql
CREATE TABLE example (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT
    );
```

기존 범위 보다 2배정도 넓은 범위의 값을 저장할 수 있다

# AUTO_INCREMENT 값이 스킵되는 이유

공식문서에서 해당 이유에 대해서 읽어봤지만 이해할수 없는 단어들이 많았다...(트랜잭션, 뮤텍스..)

그래서 간단하게 이해한 내용을 정리하자면

AUTO_INCREMENT가 적용된 테이블에 5개의 행을 INSERT 하게되면 각각 AUTO_INCREMENT 값이 지정된다(주민번호 느낌)

만약 2 번의 AUTO_INCREMENT 가 실패하고 3번의 AUTO_INCREMENT 가 성공했을떄 AUTO_INCREMENT 값은 1 과 3이 있을것이다(3개의 INSERT => 두번째는 실패 => 1번째와 3번째만 성공)

이후 4~5번을 INSERT시 AUTO_INCREMENT값인 2가 없기때문에 AUTO_INCREMENT값을 -1 빼고 저장하게 되면

AUTO_INCREMENT값은 3,4가 되었을것이다

그러면 기존에 있던 3번과 중복되기때문에 INSERT에 실패해도 AUTO_INCREMENT값은 스킵되어버리게 설정해둔것 같다

AUTO_INCREMENT lock mode 를 0,1,2 값들을 통해서 설정 가능하다

모드별로 장단점이 있기때문에 상황에 맞게 사용하면 될것같다
