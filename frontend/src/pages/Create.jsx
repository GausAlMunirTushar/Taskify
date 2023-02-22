import React, {Fragment,Suspense} from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Create = () => {
    return (
        <Fragment>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>

</Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default Create;