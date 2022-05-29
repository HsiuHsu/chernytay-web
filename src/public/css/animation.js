/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from '@emotion/react';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;