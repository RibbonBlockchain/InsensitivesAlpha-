import React from "react";
import { Link, NavLink, Switch, Route, Redirect } from "react-router-dom";
import Logo from "../../common/components/Logo";
import User from "../../common/components/User";
import WalletModal from "../Wallet";
import NetworkModal from "../Network";
import Dashboard from "../Dashboard";
import CreateInteraction from "../Interactions/Create";
import ListInteractions from "../Interactions/List";
import CreatePractitioner from "../Practitioners/Create";
import ListPractitioners from "../Practitioners/List";
import CreatePatient from "../Patients/Create";
import ListPatients from "../Patients/List";
import CreateHealthWorker from "../HealthWorker/Create";
import ListHealthWorker from "../HealthWorker/List";
import { AddressLoader } from "../../common/components/Loader";
import Onboard from "../Onboard";
import Recorder from "../Recorder";
import Profile from "../Profile";
import styles from "./Home.module.scss";
import { formatLink } from "../../common/utils";
import { allowedRoutes, roleNames } from "../../common/constants/roles";

import { useWeb3 } from "../../common/providers/Web3.provider";
import { useModal } from "../../common/providers/Modal.provider";

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

function Home() {
  const [{ loginType, user }] = useWeb3();
  const [{}, toggleModal] = useModal();

  function showWallet() {
    toggleModal({
      isVisible: true,
      data: user,
      modal: "wallet"
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
            {user && user.publicaddress ? (
              <div className={styles.actions}>
                {loginType < roleNames.PATIENT && (
                  <>
                    <Onboard />
                    <Recorder />
                  </>
                )}
                <User onClick={showWallet} address={user.publicaddress} />
              </div>
            ) : (
              <AddressLoader />
            )}
          </div>
        </header>
        <nav className={styles.admin__nav}>
          {typeof loginType === "number" && user && user.publicaddress && (
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
              {allowedRoutes[loginType].map(
                (route, index) =>
                  !route.includes("/new") && (
                    <li key={index} className={styles.menu__item}>
                      <NavLink
                        activeClassName={styles.active}
                        className={styles.menu__link}
                        to={route}
                      >
                        {formatLink(route)}
                      </NavLink>
                    </li>
                  )
              )}
              <li className={styles.menu__item}>
                <div className={styles.menu__link} onClick={showWallet}>
                  My Profile
                </div>
              </li>
            </ul>
          )}
        </nav>
        <main className={styles.admin__main}>
          <Switch>
            <Route path="/app/home" component={Dashboard} />
            <IsAllowedRoute
              exact
              appProps={loginType}
              path="/app/interactions"
              component={ListInteractions}
            />
            <IsAllowedRoute
              exact
              appProps={loginType}
              path="/app/interactions/new"
              component={CreateInteraction}
            />
            <IsAllowedRoute
              appProps={loginType}
              exact
              path="/app/practitioners"
              component={ListPractitioners}
            />
            <IsAllowedRoute
              exact
              appProps={loginType}
              path="/app/practitioners/new"
              component={CreatePractitioner}
            />
            <IsAllowedRoute
              exact
              appProps={loginType}
              path="/app/patients"
              component={ListPatients}
            />
            <IsAllowedRoute
              exact
              appProps={loginType}
              path="/app/patients/new"
              component={CreatePatient}
            />

            <IsAllowedRoute
              appProps={loginType}
              exact
              path="/app/health-workers"
              component={ListHealthWorker}
            />
            <IsAllowedRoute
              appProps={loginType}
              path="/app/health-workers/new"
              exact
              component={CreateHealthWorker}
            />
            <Route path="/app/profile" component={Profile} />
            <Redirect from="*" to="/app/home" />
          </Switch>
          <WalletModal />
          <NetworkModal />
        </main>
      </div>
    </>
  );
}

export default Home;
