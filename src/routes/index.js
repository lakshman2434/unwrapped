import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesForm, FeedListContainer, ArticlesSingle } from '../containers';

import AboutComponent from '../components/About';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >

        <Stack
          key="Home"
          title="Discover Unwrapped"

          icon={() => <Icon name="insights"  type="MaterialIcons" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={FeedListContainer} />
          <Scene key="articlesSingle" component={ArticlesSingle} />
        </Stack>

        <Stack
          key="settings"
          title="Settings"
          icon={() => <Icon name="settings" type="MaterialIcons" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="form" component={ArticlesForm} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
