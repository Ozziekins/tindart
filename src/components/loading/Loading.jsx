import React from 'react';
import { LoadingOverlay, LoadingSpinner } from './Loading.styles';

function Loading() {
  return (
    <LoadingOverlay>
      <LoadingSpinner />
    </LoadingOverlay>
  );
}

export default Loading;
