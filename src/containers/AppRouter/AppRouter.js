import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import withAuthentication from '../../hoc/withAuthentication';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import NotFound from '../../components/NotFound/NotFound';
import Profile from '../Profile/Profile';
const AppRouter = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/profile/" component={withAuthentication(Profile)} />
      <Route path="/newpost/" component={withAuthentication(NewPost)} />
      <Route path="/:userId/:postId" component={Post} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRouter;
