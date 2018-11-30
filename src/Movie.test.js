//@ts-check;
import React from "react";
import { render, cleanup } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import Movie from "./Movie";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<Movie />", () => {
  render(<Movie />);
  expect(console.error).toBeCalled();
});

const movie = {
  id: "hi",
  title: "Thor",
  poster_path: "ahbfjdkjfbjfk.jpg"
};

test("<Movie /> with Movie", () => {
  render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toBeCalled();
});
