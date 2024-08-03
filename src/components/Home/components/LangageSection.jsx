import React from 'react';


function LanguageSection() {
    const sectionStyle = {
        backgroundColor: 'rgba(243, 244, 246, var(--tw-bg-opacity))',
        color: 'rgba(17, 24, 39, var(--tw-text-opacity))',
        paddingTop: '50px', 
        paddingBottom: '50px' 
    };

    const containerStyle = {
        maxWidth: '1120px',
        padding: '32px 24px',
        margin: 'auto',
        textAlign: 'center'
    };

    const contentStyle = {
        maxWidth: '640px',
        margin: 'auto'
    };

    const headerStyle = {
        marginBottom: '16px',
        fontSize: '36px',
        fontWeight: '800',
        lineHeight: '1.333',
        color: 'rgba(17, 24, 39, var(--tw-text-opacity))'
    };

    const paragraphStyle = {
        marginBottom: '24px',
        fontWeight: '300',
        color: 'rgba(107, 114, 128, var(--tw-text-opacity))',
        fontSize: '18px'
    };

    const buttonStyle = {
        color: 'white',
        backgroundColor: '#6D28D9',
        borderRadius: '0.375rem',
        fontSize: '16px',
        padding: '10px 20px',
        textDecoration: 'none',
        display: 'inline-block',
        marginRight: '8px',
        marginBottom: '8px'
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={contentStyle}>
                    <h2 style={headerStyle}>
                        + de 60 langues africaines
                    </h2>
                    <p style={paragraphStyle}>
                        Bambara, Wolof, Pulaar, Lingala, Soninké, Douala, Fongbe, Sérère, Swahili, etc.
                    </p>
                    <a href="https://drive.google.com/file/d/1mmjh23VLGuh4kTjaSKdAggZLKhpANkxk/view" style={buttonStyle}>
                        Découvrir nos langues
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LanguageSection;
