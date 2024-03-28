import { render, screen } from "@testing-library/react";
import App from "./App";
describe('Testa o componente App', () => {

 test("should be an title in home page ", async () => {
  render(<App />)
  const title = await screen.findByRole('heading');
  expect(title).toBeInTheDocument()
 });
 test("should be an title in home page writing hello test", async () => {
  render(<App />)
  const title = await screen.findByRole('heading');
  expect(title.textContent).toBe('Hello Test')
 });

})
