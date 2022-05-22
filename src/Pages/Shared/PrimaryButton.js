import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary">{children}</button>
    );
};

export default PrimaryButton;