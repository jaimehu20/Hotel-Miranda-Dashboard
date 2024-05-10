import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { ReviewsContainer } from "../components/Reviews/Reviews";
import { ContactFilter } from "../components/ListSelector/ListSelector";
import { Table } from "../components/Table/TableBox";
import { getAllComments, getComment, getCommentsError, getCommentsStatus } from "../app/store/Messages/MessagesSlice";
import { useEffect } from "react";
import { fetchComments } from "../app/store/Messages/MessagesThunk";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";

type props = {
  title?: string
}

function Contact(props : props) {

  const dispatch = useAppDispatch();
  const multipleComments = useAppSelector(getAllComments);
  const individualComment = useAppSelector(getComment);
  const commentsStatus = useAppSelector(getCommentsStatus);
  const commentsError = useAppSelector(getCommentsError);

  useEffect(() => {
    if (commentsStatus === "pending"){
      console.log(commentsStatus)
    } else if (commentsStatus === "rejected"){
      console.log(commentsError);
    } else if (commentsStatus === "fulfilled"){
      console.log("fulfilled")
    } else if (commentsStatus === "idle") {
      dispatch(fetchComments());
    }
  })
  
  const columns = [
    {property: "comment_info", label: "Date", display: (e : any) => (
      <>
        <div className="customer-container">
          <p>{e.comment_info}</p>
          <p>{e.comment_hour}</p>
          <p>#{e.comment_id}</p>
        </div>
      </>
    )},
    {property: "comment_customer", label: "Customer", display: (e : any) => (
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
        <ContactFilter />
        <Table columns={columns} data={multipleComments} />
      </main>
    </>
  )
}

export default Contact;
