import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";

function Users() {
  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Users" />
      </main>
    </>
  )
}

export default Users;
