import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from '@linkedinWeb/components/common/Spinner/Spinner'
import RoutePaths from '@linkedinWeb/utils/route-paths'

const HomeModule = React.lazy(() => import(/* webpackChunkName: "modules/Home" */ './modules/Home'))

const ProfileModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/Profile" */ './modules/Profile')
)

const NotFoundModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/NotFound" */ './modules/NotFound')
)

const RoutesComponent = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={RoutePaths.Home} exact element={<HomeModule />} />
        <Route path={RoutePaths.Profile} exact element={<ProfileModule />} />
        <Route path="*" element={<NotFoundModule />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent
