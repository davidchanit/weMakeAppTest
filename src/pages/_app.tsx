import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloProvider} from "@apollo/client";
import React, {useEffect, useState} from "react";
import {client} from "./api/graphQL";
import gql from "graphql-tag";

function MyApp({ Component, pageProps }: AppProps) {
  const [myToken, setMyToken] = useState('');
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp
