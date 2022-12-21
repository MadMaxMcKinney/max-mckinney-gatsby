import React from 'react'
import Helmet from 'react-helmet'

export const BodyColorizer = ({ hex }) => {
    return (
        <Helmet>
            <style>{`body { background-color: ${hex}; }`}</style>
        </Helmet>
    );
};