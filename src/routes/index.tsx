import { Root } from './root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { PostDetails } from '../pages/PostDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'post/:id',
        element: <PostDetails />,
      },
    ],
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
