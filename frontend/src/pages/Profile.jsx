import React, { Fragment, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const Profile = () => {
    return (
        <Fragment>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>

</Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default Profile;