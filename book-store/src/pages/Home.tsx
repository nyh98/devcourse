import Button from '../components/common/Button';
import InputText from '../components/common/InputText';
import Title from '../components/common/Title';
import axios from 'axios';

export default function Home() {
  return (
    <>
      <Title size="medium" color="background">
        제목
      </Title>
      <Button size="large" scheme="primary">
        버튼
      </Button>
      <InputText placeholder="입력하세요" />
      <div>home page</div>
    </>
  );
}
