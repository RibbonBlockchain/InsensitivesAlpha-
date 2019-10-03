import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, Switch, Route, Redirect } from "react-router-dom";
import Logo from "../../common/components/Logo";
import User from "../../common/components/User";
import WalletModal from "../Wallet";

import Dashboard from "../Dashboard/Dashboard";
import CreateInteraction from "../Interactions/Create";
import ListInteractions from "../Interactions/List";

import CreatePractitioner from "../Practitioners/Create";
import ListPractitioners from "../Practitioners/List";

import CreatePatient from "../Patients/Create";
import ListPatients from "../Patients/List";

import CreateHealthWorker from "../HealthWorker/Create";
import ListHealthWorker from "../HealthWorker/List";

import Profile from "../Profile";

import styles from "./Home.module.scss";

import { SHOW_WALLET } from "../../common/constants/wallet";

import { getItem } from "../../common/utils/storage";
import { formatLink } from "../../common/utils";

import { allowedRoutes } from "../../common/constants/roles";

function IsAllowedRoute({ component: C, appProps, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        let isAllowed = allowedRoutes[appProps].find(route =>
          route === props.location.pathname ? true : false
        );
        return isAllowed ? <C {...props} {...appProps} /> : <Redirect to="/" />;
      }}
    />
  );
}

function Home(props) {
  // to be removed when I start fetching data from backend and metamask
  let address = getItem("address");
  let roleType = Number(getItem("loginType"));
  const dispatch = useDispatch();

  function showWallet() {
    dispatch({
      type: SHOW_WALLET
    });
  }
  return (
    <>
      <div className={styles.admin}>
        <header className={styles.admin__header}>
          <Link to="/app/home">
            <Logo logoClass={styles.logo} />
          </Link>
          <div className={styles.toolbar}>
            <div></div>
            <div className={styles.actions}>
              <User onClick={showWallet} address={address} />
            </div>
          </div>
        </header>
        <nav className={styles.admin__nav}>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <NavLink
                activeClassName={styles.active}
                className={styles.menu__link}
                to="/app/home"
              >
                Home
              </NavLink>
            </li>
            {allowedRoutes[roleType].map((route, index) => (
              <li key={index} className={styles.menu__item}>
                <NavLink
                  activeClassName={styles.active}
                  className={styles.menu__link}
                  to={route}
                >
                  {formatLink(route)}
                </NavLink>
              </li>
            ))}
            <li className={styles.menu__item}>
              <div className={styles.menu__link} onClick={showWallet}>
                My Profile
              </div>
            </li>
          </ul>
        </nav>
        <main className={styles.admin__main}>
          <Switch>
            <Route path="/app/home" component={Dashboard} />
            <IsAllowedRoute
              appProps={roleType}
              path="/app/interactions"
              component={ListInteractions}
            />
            <IsAllowedRoute
              appProps={roleType}
              path="/app/interactions/new"
              component={CreateInteraction}
            />
            <IsAllowedRoute
              appProps={roleType}
              path="/app/practitioners"
              component={ListPractitioners}
            />
            <IsAllowedRoute
              appProps={roleType}
              path="/app/practitioners/new"
              component={CreatePractitioner}
            />
            <IsAllowedRoute
              appProps={roleType}
              path="/app/patients"
              component={ListPatients}
            />
            <IsAllowedRoute
              appProps={roleType}
              path="/app/patients/new"
              component={CreatePatient}
            />

            <IsAllowedRoute
              appProps={roleType}
              path="/app/health-workers"
              component={ListHealthWorker}
            />
            <IsAllowedRoute
              appProps={roleType}
              path="/app/health-workers/new"
              component={CreateHealthWorker}
            />
            <Route path="/app/profile" component={Profile} />
            <Redirect from="*" to="/app/home" />
          </Switch>
          <WalletModal {...props} />
        </main>
      </div>
    </>
  );
}

export default Home;
