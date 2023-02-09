
import { Hub } from "aws-amplify";
import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";

function App() {

  // useEffect(() => {
  //   Hub.listen('auth', event => {
  //     console.log('auth event', event)
  //   })
  // })

  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
