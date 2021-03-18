import { BrowseRouter as Router, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/:id/addLoc" exact component={SetLocation} />
      <Route path="/:id/tempLoc" exact component={SetTempLocation} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
    </div>
  );
}

export default App;
