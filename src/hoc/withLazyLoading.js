import React, { lazy, Suspense } from 'react';
const getComponent = componentPath => lazy(() => import(componentPath));

function withLazyComponent(componentPath) {
  let LazyLoadedComponent = getComponent(componentPath);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadedComponent />
    </Suspense>
  );
}

export default withLazyComponent;
