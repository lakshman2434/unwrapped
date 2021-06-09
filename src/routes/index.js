import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

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
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={ArticlesList} />
          <Scene key="articlesSingle" component={ArticlesSingle} />
        </Stack>

        <Stack
          key="settings"
          title="Settings"
          icon={() => <Icon name="settings" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="form" component={ArticlesForm} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
