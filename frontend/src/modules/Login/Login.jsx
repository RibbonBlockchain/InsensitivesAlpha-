import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Web3Connect from "web3connect";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";

import { config } from "../../common/constants/config";

import Logo from "../../common/components/Logo";
import styles from "./Login.module.scss";
import { LOGIN_SUCCESS } from "../../common/constants/login";
import { SHOW_ALERT } from "../../common/constants/alert";
import { SHOW_QR_REGISTRATION_MODAL } from "../../common/constants/qr";
import { getItem } from "../../common/utils/storage";

import { authenticateUser, approveUser } from "./login.utils";

import { USER_NOT_FOUND } from "../../common/constants/error_codes";

function Login({ history }) {
  const dispatch = useDispatch();

  let { WALLET_CONNECT, PORTIS, FORTMATIC, NETWORK } = config;

  async function processLogin(provider) {
    try {
      let authenticatedUser = await authenticateUser(provider);
      if (authenticatedUser.authWithAPI.error) {
        if (authenticatedUser.authWithAPI.error === USER_NOT_FOUND) {
          dispatch({
            type: SHOW_QR_REGISTRATION_MODAL,
            payload: authenticatedUser.ethAddress
          });
        } else {
          dispatch({
            type: SHOW_ALERT,
            payload: authenticatedUser.authWithAPI.error.toString()
          });
        }
      } else {
        approveUser(authenticatedUser, history);
      }
    } catch (error) {
      dispatch({
        type: SHOW_ALERT,
        payload: error.toString()
      });
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login_bg}></div>
        <div className={styles.login_box}>
          <div className={styles.form}>
            <div className={styles.login_box}>
              <Web3Connect.Button
                network={NETWORK}
                providerOptions={{
                  walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                      infuraId: WALLET_CONNECT
                    }
                  },
                  portis: {
                    package: Portis,
                    options: {
                      id: PORTIS
                    }
                  },
                  fortmatic: {
                    package: Fortmatic,
                    options: {
                      key: FORTMATIC
                    }
                  }
                }}
                onConnect={provider => processLogin(provider)}
                onClose={() => {
                  dispatch({
                    type: SHOW_ALERT,
                    payload: "Action was terminated by user"
                  });
                }}
              />
            </div>
            <div className={styles.headline}>
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </small>
            </div>
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
