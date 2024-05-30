import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError() as { statusText?: string; message?: string };
  return (
    <div>
      <h1>오류가 발생했습니다.</h1>
      <p>{error.statusText || error.message} </p>
    </div>
  );
}
