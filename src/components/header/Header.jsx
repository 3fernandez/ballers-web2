import React from "react";

import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import Button from "react-toolbox/lib/button";
import Avatar from "react-toolbox/lib/avatar";
import { IconMenu, MenuItem, MenuDivider } from "react-toolbox/lib/menu";
import { List, ListItem } from "react-toolbox/lib/list";

import styles from "./Header.scss";
import theme from "react-toolbox/lib/app_bar/theme.css";

const BallersLogo = () => (
  <h1 className={`${theme.title} ${styles.title}`}>
    <a href="/">
      Ballers
    </a>
  </h1>
);

export default class Header extends React.Component {
  renderUser() {
    if(this.props.user) {
      return this.renderAvatar(this.props.user);
    }
    return (<Button href="http://localhost:5000/auth/google" label="Login" raised accent />);
  }

  renderAvatar(user) {
    return (
				<IconMenu icon={<Avatar title={user.name} image={user.picture} />} position="topRight">
					<MenuItem value="profile" caption={user.name} disabled />
					<MenuDivider />
          <List>
            <ListItem to="/signout" caption="Logout" />
          </List>
				</IconMenu>
    );
  }

  render() {
    return (
      <AppBar theme={styles} title={ <BallersLogo /> }>
        <Navigation class="navigation" type="horizontal">
          { this.renderUser() }
        </Navigation>
      </AppBar>
    );
  }
}
