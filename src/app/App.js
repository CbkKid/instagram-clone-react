import "./styles.css";
import { Footer } from "../libs/components/Footer";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostPage, UserProfilePage, FeedPage } from "../pages";
import { AppLayout } from './Layout';
import { AppHeader } from './Components';

const Body = () => {
  return(
    <Switch>
      <Route path="/p/:postId">
        <PostPage />
      </Route>
      <Route path="/:username">
        <UserProfilePage />
      </Route>
      <Route path="/">
        <FeedPage />
      </Route>
    </Switch>
  )
};

export default function App() {
  
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      <AppLayout header={<AppHeader user={user}/>} body={<Body/>} footer={<Footer/>}/>
    </div>
  );
}
