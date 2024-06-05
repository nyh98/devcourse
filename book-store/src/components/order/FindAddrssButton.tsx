import React, { useEffect } from 'react';
import Button from '../common/Button';

interface Props {
  onCompleted: (address: string) => void;
}

const FindAddrssButton = ({ onCompleted }: Props) => {
  useEffect(() => {
    const script = document.createElement('script');
    //<script></script>
    script.async = true;
    //<script async=true></script>
    document.head.appendChild(script);
    //<head><script asnyc=true></script></head>
  }, []);
  return (
    <Button size="medium" scheme="normal">
      주소 찾기
    </Button>
  );
};

export default FindAddrssButton;
