import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MasterKeyList } from "./masterKey/MasterKeyList";
import { MasterKeyCreate } from "./masterKey/MasterKeyCreate";
import { MasterKeyEdit } from "./masterKey/MasterKeyEdit";
import { MasterKeyShow } from "./masterKey/MasterKeyShow";
import { PasswordList } from "./password/PasswordList";
import { PasswordCreate } from "./password/PasswordCreate";
import { PasswordEdit } from "./password/PasswordEdit";
import { PasswordShow } from "./password/PasswordShow";
import { VaultList } from "./vault/VaultList";
import { VaultCreate } from "./vault/VaultCreate";
import { VaultEdit } from "./vault/VaultEdit";
import { VaultShow } from "./vault/VaultShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlockchainPasswordManager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MasterKey"
          list={MasterKeyList}
          edit={MasterKeyEdit}
          create={MasterKeyCreate}
          show={MasterKeyShow}
        />
        <Resource
          name="Password"
          list={PasswordList}
          edit={PasswordEdit}
          create={PasswordCreate}
          show={PasswordShow}
        />
        <Resource
          name="Vault"
          list={VaultList}
          edit={VaultEdit}
          create={VaultCreate}
          show={VaultShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
