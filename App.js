import RootNavigation from "./src/navigation"
import { NavigationContainer } from "@react-navigation/native"
import Amplify from "aws-amplify"
import config from "./src/aws-exports"
import AuthUserProvider from "./contexts/UserAuthContext"
import GlobalStoreContextProvider from "./contexts/GlobalStoreContext"

Amplify.configure(config)

export default function App() {
  //return app component
  return (
    <AuthUserProvider>
      <GlobalStoreContextProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </GlobalStoreContextProvider>
    </AuthUserProvider>
  )
}
