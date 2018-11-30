//@ts-check;
import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "./MovieForm";

afterEach(cleanup);

const onSubmit = jest.fn();

test("<MovieForm />", () => {
  const { debug, getByText, getByLabelText } = render(
    <MovieForm submitForm={onSubmit} />
  );
  //   getByLabelText("Text").value = "Victor";
  //   fireEvent.change(getByLabelText("Text"));
  fireEvent.change(getByLabelText("Text"), {
    target: { value: "Victor" }
  });
  fireEvent.click(getByText("Submit"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenLastCalledWith({
    text: "Victor"
  });
});
