import { createContext, useContext, useState, useEffect } from "react"
import { API, graphqlOperation } from "aws-amplify"
import { getUser } from "../src/graphql/queries"
import { createUser } from "../src/graphql/mutations"

import { useUserAuthContext } from "./UserAuthContext"

const GlobalStoreContext = createContext({})

const GlobalStoreContextProvider = ({ children }) => {
  const { user } = useUserAuthContext()
  // db user
  const [dbUser, setDbUser] = useState(null)

  // function to save user
  const _saveThisUser = async (thisUser) => {
    await API.graphql(graphqlOperation(createUser, { input: thisUser }))
  }

  useEffect(() => {
    const currentUser = async () => {
      if (user) {
        // attempt get user data from database
        const _thisDatabaseUser = await API.graphql(
          graphqlOperation(getUser, { id: user?.attributes?.sub })
        )
        setDbUser(_thisDatabaseUser)

        // details
        let name = await user.username
        let userid = await user.attributes.sub
        const avater = require("../assets/images/user.png")
        // if the user is not in database
        if (!_thisDatabaseUser.data.getUser) {
          // the thisUser object
          const thisUser = {
            id: userid,
            email: user.attributes.email,
            image: avater,
            name: name,
            location: "location not available",
          }

          // save this user to the database
          await _saveThisUser(thisUser)
        }
      }
    }
    // create db user function
    currentUser()
  }, [])

  return <GlobalStoreContext.Provider value={{ dbUser }}>{children}</GlobalStoreContext.Provider>
}

export default GlobalStoreContextProvider

export const useStoreContext = () => useContext(GlobalStoreContext)
