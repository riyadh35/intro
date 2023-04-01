import React from 'react';
import Banner from './Banner';
import Title from './Title';
import Text from './Text';
import Predict from './Predict';
import FouthHome from './FouthHome';
import AboutService from './AboutService';
import Lav from './Lav';
import Review from './Review';
import Question from './Question';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Title></Title>
            <Text></Text>
            <Predict></Predict>
            <FouthHome></FouthHome>
            <AboutService></AboutService>
            <Lav></Lav>
            <Review></Review>
            <Question></Question>
            <Footer></Footer>
        </div>
    );
};

export default Home;