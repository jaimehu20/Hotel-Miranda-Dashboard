import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { ReviewsContainer } from "../components/Reviews/Reviews";
import { Filter4 } from "../components/ListSelector/ListSelector";
import { Table } from "../components/Table/TableBox";
import { data } from "../data/CustomerData";

function Contact(props) {

  const columns = [
    {property: "comment_info", label: "Date", display: e => (
      <>
        <div className="customer-container">
          <p>{e.comment_info}</p>
          <p>{e.comment_hour}</p>
          <p>#{e.comment_id}</p>
        </div>
      </>
    )},
    {property: "comment_customer", label: "Customer", display: e => (
      <>
        <div className="customer-container">
          <p>{e.comment_customer}</p>
          <p>{e.comment_customerMail}</p>
          <p>{e.comment_customerPhone}</p>
        </div>
      </>
    )},
    {property: "comment_review", label: "Review"}
  ]

  return (
    <>
    <SideBar />
      <main className="contact-container">
        <NavContainer title="Contact" />
        <ReviewsContainer />
        <Filter4 />
        <Table columns={columns} data={data} />
      </main>
    </>
  )
}

export default Contact;
