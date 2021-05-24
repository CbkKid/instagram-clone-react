import "./styles.css";
import { Header, HeaderItem } from "../libs/components/Header";
import { Footer } from "../libs/components/Footer";
import { Avatar } from "../user/Avatar";
import { Switch, Route } from "react-router-dom";
import { Link } from "../libs/components/Link";
import { useSelector } from "react-redux";
import { PostPage, UserProfilePage, FeedPage } from "../pages";
import { HomeButton } from "../libs/components/Buttons";

export default function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      <Header>
        <HeaderItem>
          <Link
            activeOnlyWhenExact={true}
            to="/"
            component={(isActive) => <HomeButton isActive={isActive} />}
          ></Link>
        </HeaderItem>
        <HeaderItem>
          <svg height="22" viewBox="0 0 48 48" width="22">
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </HeaderItem>
        <HeaderItem>
          <svg height="22" viewBox="0 0 48 48" width="22">
            <path
              clipRule="evenodd"
              d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
              fillRule="evenodd"
            ></path>
          </svg>
        </HeaderItem>
        <HeaderItem>
          <svg height="22" viewBox="0 0 48 48" width="22">
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </HeaderItem>
        <HeaderItem>
          <Link
            to={`/${user.username}`}
            component={() => (
              <Avatar
                style={{ height: "22px", width: "22px" }}
                imgUrl={user.avatar}
              />
            )}
          ></Link>
        </HeaderItem>
      </Header>
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
      <Footer />
    </div>
  );
}
