#### **SQL(Structured Query Language, 구조화된 질의 언어)**

#### 데이터베이스에서 데이터를 저장, 조회, 수정, 삭제와

#### db자체의 성능 유지관리, 최적화에 사용되는 언어

#### 즉 db를 다루는 언어이다

**DDL(Data Definition Language, 데이터 정의어)**

데이터베이스 구조 정의에 사용하는 언어

뼈대를 구성하는 역할이다

**DDL 종류**

-   CREATE : 새로운 테이블 생성
-   ALTER : 기존 테이블 구조 변경
-   DROP : 기존 테이블 삭제
-   TRUNCATE : 기존 테이블 초기화
-   RENAME : 테이블 이름 변경

**DML(Data Manipulation Language, 데이터 조작어)**

데이터베이스에 저장된 데이터를 다루는 역할이다

**DML 종류**

-   SELECT : 저장된 데이터 조회(DQL로 분류할 수도 있다)
-   INSERT : 데이터 추가
-   DELETE : 데이터 삭제
-   UPDATE : 데이터 수정

**DCL(Data Control Language, 데이터 제어어)**

데이터베이스에 접근 권한을 부여, 회수 하는 역할이다

시스템 보안 유지 역할

**DCL 종류**

-   GRANT : 권한 부여
-   REVOKE : 권한 회수

**DQL(Data Query Language, 데이터 질의어)**

데이터 조회 역할

**DQL 종류**

-   SELECT : 저장된 데이터 조회

**TCL(Transaction Control Language, 트랜잭션 제어어)**

DCL에서 트랜잭션을 컨트롤 하는 명령어를 TCL로 분류한다

DCL개념 에 TCL이 포함되는것(내 안에 너 있다)

또는 TCL 개념을 사용하지 않고 DCL로 통틀어 분류하는 경우도 있다(우리는 하나)

**TCL 종류**

-   COMMIT : 작업 완료한 데이터를 db에 영구적으로 반영
-   ROLLBACK : 작업 시작 이전으로 되돌린다
-   SAVEPOINT : 어느 지점을 세이브포인트로 정하고, ROLLBACK을 통해 되돌리기 가능

