import React, {Fragment,Suspense,lazy} from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const ForgetPass = lazy (()=> import('../components/ForgetPass/ForgetPass'))

const ForgetPassPage = () => {
    return (
        <Fragment>
        <Suspense fallback={<LazyLoader/>}>
            <ForgetPass/>
        </Suspense>
      </Fragment>
    );
};

export default ForgetPassPage;