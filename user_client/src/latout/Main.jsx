import { AuthContext } from '../context/AuthProvider'
import Loading from '../component/Loading'
import Dashboard from '../dashboard/Dashboard'
import { useContext } from 'react'

const Main = () => {
    const {loading} = useContext(AuthContext)
    return (
      <div>
        {
          loading ? 
          <Loading/>
          :
          <div>
            <Dashboard/>
          </div>
        }
      </div>
    )
}

export default Main
