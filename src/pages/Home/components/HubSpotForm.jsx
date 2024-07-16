import React, { useEffect } from 'react';

const HubSpotForm = () => {
    useEffect(() => {
        // Espera a que el script de HubSpot esté disponible
        const loadForm = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "39708487",
                    formId: "3ee9f2e8-8116-41a5-affc-823568622bb7",
                    target: '#hbspt-form'
                });
            } else {
                setTimeout(loadForm, 100);
            }
        };

        loadForm();
    }, []);

    return (
        <div id="hbspt-form" className='mx-6'></div>
    );
};

export default HubSpotForm;
