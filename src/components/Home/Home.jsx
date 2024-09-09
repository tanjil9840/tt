import React from 'react';
import Banner from '../Banner/Banner';
import CatagoryList from '../CatagoryList/CatagoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner> </Banner>
            <CatagoryList> </CatagoryList>
            <FeaturedJobs> </FeaturedJobs>
            <h3>This is a home tag</h3>
        </div>
    );
};

export default Home;