import { useRef } from 'react';

export default function() {
  const renders = useRef(0);
  return renders.current++;
}
