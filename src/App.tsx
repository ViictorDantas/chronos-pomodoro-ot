import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <DefaultInput
            id="meuInput"
            type="text"
            placeholder="Digite sua tarefa"
            labelText="Task"
            required
            defaultValue={"test"}
          />

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <Cycles />

          <div className="formRow">
            <button type="submit">Start</button>
          </div>
        </form>
      </Container>
    </>
  );
}
