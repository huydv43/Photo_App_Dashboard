import React from 'react';
import './GlobalLoading.scss';
import PropTypes from 'prop-types';
import  Images from '../../constants/Images';

GlobalLoading.propTypes = {
    
};

function GlobalLoading() {
    return (
        <div className="page-loader-wrapper">
            <div className="loader">
                <div className="m-t-30"><img className="zmdi-hc-spin" src={Images.GLOBAL_LOADING} /></div>
                <p>Please wait...</p>
            </div>
        </div>
    );
}

export default GlobalLoading;