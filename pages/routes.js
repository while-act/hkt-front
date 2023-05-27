export const ScopeType = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  COMMON: 'COMMON',
};

export const RoutePath = {
  // Private paths
  Home: '/',
  Dashboard: '/dashboard',
  Profile: '/profile',

  // Common paths
  Costs: '/costs',

  // Auth paths
  SignIn: '/login',
  SignUp: '/register',
  ForgotPassword: '/forgot-password',
  ResetPassword: '/reset-password',
  History: '/history',

  NotFound: '/404',
};

export const routesConfiguration = {
  [RoutePath.Home]: {
    scope: ScopeType.PRIVATE,
  },
  [RoutePath.Costs]: {
    scope: ScopeType.COMMON,
  },
  [RoutePath.Profile]: {
    scope: ScopeType.PRIVATE,
  },
  [RoutePath.Dashboard]: {
    scope: ScopeType.PRIVATE,
  },
  [RoutePath.SignIn]: {
    scope: ScopeType.PUBLIC,
  },
  [RoutePath.SignUp]: {
    scope: ScopeType.PUBLIC,
  },
  [RoutePath.ForgotPassword]: {
    scope: ScopeType.PUBLIC,
  },
  [RoutePath.ResetPassword]: {
    scope: ScopeType.PUBLIC,
  },
  [RoutePath.History]: {
    scope: ScopeType.PUBLIC,
  },

  [RoutePath.NotFound]: {},
};
