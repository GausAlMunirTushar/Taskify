import React, { Fragment, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';

const Login = () => {
    return (
        <Fragment>
        <Suspense fallback={<LazyLoader/>}>

        </Suspense>
      </Fragment>
    );
};

export default Login;