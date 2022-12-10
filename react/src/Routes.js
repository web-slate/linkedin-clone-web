import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from '@/components/common/Spinner/Spinner'
import RoutePaths from '@/utils/route-paths'

const HomePage = React.lazy(() => import(/* webpackChunkName: "pages/Home" */ './pages/Home'))

const ProfilePage = React.lazy(() =>
  import(/* webpackChunkName: "pages/Profile" */ './pages/Profile')
)

const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "pages/NotFound" */ './pages/NotFound')
)

const RoutesComponent = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={RoutePaths.Home} exact element={<HomePage />} />
        <Route path={RoutePaths.Profile} exact element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent
