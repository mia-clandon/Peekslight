import React from "react";
import Typography from "@material-ui/core/Typography";

function HeaderPage() {
    return (
        <Typography
            style={{
                fontFamily: 'Montserrat Regular',
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: '44px',
            }}
        >
            Красивая квартира в Нью-Йорке
        </Typography>
    );
};

export default HeaderPage;
