import {render, screen, cleanup, fireEvent } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import Home from '../../pages/Home/Home';

describe("test button component", () => {
    it("renders default button text", () => {
      const { getByTestId } = render(<Home />);
  
      const Button = getByTestId("startQuiz-button");

      expect(Button).toBeInTheDocument();
      expect(Button).toHaveTextContent("Start Quiz");
     
    });
});



