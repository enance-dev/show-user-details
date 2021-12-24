import { Navigation } from "./components/Navigation";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <h3>User info goes here!</h3>
      </Container>
    </div>
  );
}

export default App;
