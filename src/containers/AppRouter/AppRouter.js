import React from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import withAuthentication from '../../hoc/withAuthentication';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import NotFound from '../../components/NotFound/NotFound';
import Profile from '../Profile/Profile';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

const AppRouter = props => {
  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="switch-wrapper container is-fluid"
    >
      <Route exact path="/" component={Home} />
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/profile/" component={withAuthentication(Profile)} />
      <Route path="/newpost/" component={withAuthentication(NewPost)} />
      <Route path="/:userId/:postId" component={Post} />
      <Route component={NotFound} />
    </AnimatedSwitch>
  );
};

export default AppRouter;
