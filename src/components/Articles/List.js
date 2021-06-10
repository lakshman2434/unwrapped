import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Container, Card, CardItem, Body, Text, Button } from 'native-base';
import Swiper from 'react-native-swiper';
import { Error, Spacer } from '../UI';
import { errorMessages } from '../../constants/messages';
import SpendingMood from '../FeedCards/SpendingMood';

import TopVendor from '../FeedCards/TopVendors';
import TopMerhcant from '../FeedCards/TopMerchant';
import Promotions from '../FeedCards/Promotions';

const listData = {
  spendingInsights: [
    {
      feedType: 'spending-mood',
      data: {
        cardColor: '#23233F',
        type: 'traveler',
        title: 'Tireless Traveler',
        description: 'If you think adventure is dangerous try routine, it’s lethal. – Paulo Coelho',
        hasInfoGraphics: true,
        categoryTags: ['gasAndTransport', 'hotelBookings', 'FlightBookings'],
      },
    }, {
      feedType: 'spending-mood',
      data: {
        cardColor: '#23233F',
        type: 'foodie',
        title: 'Foodie',
        description: 'If you think adventure is dangerous try routine, it’s lethal. – Paulo Coelho',
        hasInfoGraphics: true,
        categoryTags: ['gasAndTransport', 'hotelBookings', 'FlightBookings'],
      },
    },
    {
      feedType: 'top-merchants',
      data: {
        cardColor: '#1CA4DD',
        title: 'Target',
        description: 'Lorem Ipsum',
        hasInfoGraphics: true,
        gifURL: 'https://media.giphy.com/media/8JQ4e2E6s1DM8GLTKw/giphy.gif',
        categoryTags: ['foodandrestaurants'],
      },
    },
    {
      feedType: 'promotions',
      data: {
        cardColor: 'mediumslateblue',
        title: 'Traveler',
        mood:'Traveler',
        partnerDiscounts: [
          {
            partner: 'Priceline',
            partnerId: 'priceline4563',
            percentDiscount: 5,
            redeemURL: '',
          },{
            partner: 'Marriot',
            partnerId: 'marriot4563',
            percentDiscount: 15,
            redeemURL: '',
          },
          {
            partner: 'Hertz',
            partnerId: 'hertz1243',
            percentDiscount: 10,
            redeemURL: '',
          }, {
            partner: 'Delta Airlines',
            partnerId: 'delta1243',
            percentDiscount: 20,
            redeemURL: '',
          },
        ],
      },
    },
    {
      feedType: 'currentvslast',
      data: {
        cardColor: '#934C9D',
        currentMood: 'Traveler',
        currentSpentAmount: 1000,
        hasInfoGraphics: true,
        lastMood: 'Foodie',
        lastSpentAmount: 2000,
      },
    },
    {
      feedType: 'cashback-earned',
      data: {
        cardColor: '#CF3794',
        totalAmount: '100',
        topCashbackCategories: ['foodAndDrinking', 'shopping', 'subscriptions', 'groceries'],
      },
    },
    {
      feedType: 'top-vendors',
      data: {
        cardColor: '#FBB117',
        vendorLabels: ['Priceline', 'Hertz', 'Marriot', 'Doordash', 'Uber'],
        vendorAmounts: [300, 450, 290, 600, 540],
      },
    },
  ],
};

const styles = StyleSheet.create({
  wrapper: { backgroundColor: '#13133e' },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const ArticlesList = ({ error, loading, listFlat, reFetch, meta }) => {
  if (error) {
    return <Error content={error} tryAgain={reFetch} />;
  }

  if (listFlat.length < 1) {
    return <Error content={errorMessages.articlesEmpty} />;
  }

  return (
    <Swiper
      horizontal={false}
      bounces={false}
      loop={false}
      style={styles.wrapper}
      activeDotColor="#F66000"
    >
      {listData.spendingInsights.map((item) => {
        if (item.feedType === 'spending-mood') {
          return <SpendingMood item={item}  />;
        } else if (item.feedType === 'top-vendors') {
          return <TopVendor item={item}  />;
        } else if (item.feedType === 'top-merchants') {
          return <TopMerhcant item={item} />;
        }else if (item.feedType === 'promotions') {
          return <Promotions item={item}  />;
        }
      })}
    </Swiper>
  );
};

ArticlesList.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  listFlat: PropTypes.arrayOf(
    PropTypes.shape({
      placeholder: PropTypes.bool,
      id: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.string,
      content: PropTypes.string,
      excerpt: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  reFetch: PropTypes.func,
  meta: PropTypes.shape({ page: PropTypes.number, lastPage: PropTypes.number }),
};

ArticlesList.defaultProps = {
  listFlat: [],
  error: null,
  reFetch: null,
  meta: { page: null, lastPage: null },
  loading: false,
};

export default ArticlesList;
