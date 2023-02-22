import React, { Fragment, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const ForgetPass = () => {
    return (
        <Fragment>
        <Suspense fallback={<LazyLoader/>}>

        </Suspense>
      </Fragment>
    );
};

export default ForgetPass;