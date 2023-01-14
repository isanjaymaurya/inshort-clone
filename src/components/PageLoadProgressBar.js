import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const PageLoadProgressBar = () => {
  const { pathname } = useLocation()
  // const theme = useTheme()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setProgress(70)
    setTimeout(() => {
      setProgress(100)
    }, 400)
  }, [pathname])

  return (
    <LoadingBar
      // color={theme.palette.success.light}
      progress={progress}
      onLoaderFinished={() => setProgress(100)}
    />
  )
}

export default PageLoadProgressBar
