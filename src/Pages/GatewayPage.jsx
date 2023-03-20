import { useLoaderData } from 'react-router-dom'
import Login from 'Components/Login/Login'
import { Toaster } from 'react-hot-toast'
import Checkout from 'Components/Gateway/Checkout'
import { isObjEmpty } from 'Helpers/ToBoolean'
import useGateway from 'Hooks/useGateway'

const GatewayPage = () => {
  const { slug } = useLoaderData()
  const { buyerToken, setBuyerToken, transactionInfo, payMets, isSubmit, confirmTransaction } =
    useGateway(slug)

  return (
    <main>
      {!buyerToken && !isSubmit && <Login isOnGateway={true} setBuyerToken={setBuyerToken} />}
      {buyerToken && !isObjEmpty(transactionInfo) && (
        <Checkout
          transactionInfo={transactionInfo}
          payMets={payMets}
          confirmTransaction={confirmTransaction}
        />
      )}
      <Toaster />
    </main>
  )
}

export default GatewayPage
