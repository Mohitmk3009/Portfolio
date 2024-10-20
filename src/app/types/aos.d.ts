declare module 'aos' {
    const AOS: {
      init: (options?: unknown) => void;
      refresh: () => void;
    };
    export default AOS;
  }
  