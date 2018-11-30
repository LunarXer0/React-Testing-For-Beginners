//@ts-check;
import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "./MovieForm";

afterEach(cleanup);

const onSubmit = jest.fn();

test("<MovieForm />", () => {
  const { debug, getByText } = render(<MovieForm submitForm={onSubmit} />);
  fireEvent.click(getByText("Submit"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
