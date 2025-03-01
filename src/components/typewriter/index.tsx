'use client';

import {
  useState,
  useEffect,
  FC,
  ReactNode,
  isValidElement,
  cloneElement,
} from 'react';

interface TypewriterProps {
  children: ReactNode;
  infinite?: boolean;
  delay?: number;
}

export const Typewriter: FC<TypewriterProps> = ({
  children,
  delay = 100,
  infinite = false,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const text = (() => {
    if (!isValidElement(children)) return '';

    const child = children as { props: { children?: unknown } };
    if (!child.props?.children || typeof child.props.children !== 'string')
      return '';

    return child.props.children;
  })();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return isValidElement(children)
    ? cloneElement(children, {}, `${currentText} ${showCursor ? '|' : ' '}`)
    : null;
};
