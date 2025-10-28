import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import 'whatwg-fetch';

expect.extend(matchers);

globalThis.scrollTo = () => {};

globalThis.matchMedia =
  globalThis.matchMedia ||
  vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

// ensure each test is isolated
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
});
