import { memo } from 'react';
import './Layout.module.css';
import { Button } from '../../components/Button/Button.tsx';

const Layout = memo(() => (
  <div>
    <Button onClick={() => {}} disabled>
      Привет
    </Button>
  </div>
));

export { Layout };
