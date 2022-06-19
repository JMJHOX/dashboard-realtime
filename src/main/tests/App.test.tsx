import React from "react";
import * as redux from 'react-redux'
import { render, screen } from "@testing-library/react";
import App from "../App";

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

describe("With React Testing Library", () => {
  const initialState = { dataState: { apidata: [{}]} };

  const mockStore = configureStore();
  let store;

  it("renders learn react link", () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
   // const spy = jest.spyOn(redux, 'useSelector')
  //  spy.mockReturnValue({ apidata: [{}] })
   
    const linkElement = screen.getByText(/Dashboard.io/i);
    expect(linkElement).toBeInTheDocument();
  });
});
