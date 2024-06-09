// Solid
import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense, type FlowProps } from 'solid-js';

// CSS
import '@/styles/app.css';
import '@/styles/nprogress.css';

// Components
import Wrapper from './components/layouts/wrapper';

export default function App(props: FlowProps) {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          {/* <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/about">About</a> */}

          {/* Page Content */}
          <Suspense>
            <Wrapper>{props.children}</Wrapper>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
