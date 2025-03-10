import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import mainTheme from "../styles/mainTheme";

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <ThemeProvider theme={mainTheme}>
      {children}
    </ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

const customRenderWithRouter = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender, customRenderWithRouter };
