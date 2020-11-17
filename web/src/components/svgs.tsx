import React from 'react';

interface SvgProps {
  className?: string;
}

export const Github = ({ className }: SvgProps) => (
  <svg
    className={className}
    aria-labelledby="simpleicons-github-icon"
    role="img"
    viewBox="0 0 24 24"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const Minus = ({ className }: SvgProps) => (
  <svg
    className={className}
    width="12"
    height="3"
    viewBox="0 0 12 3"
    fill="none"
  >
    <path
      d="M11 1.5H1"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plus = ({ className }: SvgProps) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1Z"
      fill="black"
    />
  </svg>
);

export const Close = ({ className }: SvgProps) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4922 5.92205C13.8827 5.53152 13.8827 4.89836 13.4922 4.50783C13.1017 4.11731 12.4685 4.11731 12.078 4.50783L9 7.58583L5.92201 4.50783C5.53148 4.11731 4.89832 4.11731 4.50779 4.50783C4.11727 4.89836 4.11727 5.53152 4.50779 5.92205L7.58579 9.00004L4.50779 12.078C4.11727 12.4686 4.11727 13.1017 4.50779 13.4922C4.89832 13.8828 5.53148 13.8828 5.92201 13.4922L9 10.4143L12.078 13.4922C12.4685 13.8828 13.1017 13.8828 13.4922 13.4922C13.8827 13.1017 13.8827 12.4686 13.4922 12.078L10.4142 9.00004L13.4922 5.92205Z"
      fill="currentColor"
    />
  </svg>
);
