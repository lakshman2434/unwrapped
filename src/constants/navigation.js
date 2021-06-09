import Colors from '../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: Colors.brandPrimary },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      fontSize: Colors.fontSizeH3,
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(255,255,255,0.1)',
    inactiveBackgroundColor: Colors.brandPrimary,
    tabBarStyle: { backgroundColor: Colors.brandPrimary },
  },

  icons: {
    style: { color: 'white', height: 30, width: 30 },
  },
};
