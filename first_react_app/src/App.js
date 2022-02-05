import Button from "./Button";
import styles from "./App.module.css";
import Effect from "./EffectTutorial";
import Cleanup from "./CleanupTutorial";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
      <Effect/>
      <Cleanup />
    </div>
  );
}

export default App;
