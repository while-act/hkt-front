'use client';
import { RoutePath, routesConfiguration } from '@/pages/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCookie } from '@/store/slices/cookie/getCookie';

export const UserIsAuthLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.getCookieSlice);

  const { pathname } = router;
  const routeStatus = routesConfiguration[pathname]?.scope;
  console.log(routeStatus, 'rout');

  useEffect(() => {
    dispatch(getCookie());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Загрузка...</div>;
  }

  if (routeStatus === 'CCOMMON') return children;

  if (status === 'error') return <div>Что-то пошло не так</div>;

  if (status === 'success') {
    if (routeStatus !== 'PRIVATE' && routeStatus !== 'COMMON') {
      router.push(RoutePath.Profile);
    } else {
      return children;
    }
  } else {
    router.push(RoutePath.Home);
  }
};
