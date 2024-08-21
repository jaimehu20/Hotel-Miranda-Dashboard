import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { ReviewsContainer } from "../components/Reviews/Reviews";
import { ContactFilter } from "../components/ListSelector/ListSelector";
import { Table } from "../components/Table/TableBox";
import { getAllComments, getComment, getCommentsError, getCommentsStatus } from "../app/store/Messages/MessagesSlice";
import { useEffect, useState } from "react";
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
  const [ loaded, setLoaded ] = useState<boolean>(false);
  const [ hidden, setHidden ] = useState<boolean>(false);

  useEffect(() => {
    const fetcher = async () => {
      await dispatch(fetchComments());
      setLoaded(true);
    }
    fetcher();
  }, [])

  if (!loaded){
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }
  
  const columns = [
    {property: "review_date", label: "Date", display: (e : any) => (
      <>
        <div className="customer-container">
          <p>{e.review_date}</p>
          <p>{e.review_time}</p>
          <p>#{e._id.slice(0, 8).toUpperCase()}</p>
        </div>
      </>
    )},
    {property: "review_customer", label: "Customer", display: (e : any) => (
      <>
        <div className="customer-container">
          <p>{e.review_customer}</p>
          <p>{e.review_customerMail}</p>
          <p>{e.review_customerPhone}</p>
        </div>
      </>
    )},
    {property: "review_comment", label: "Review"}
  ]

  return (
    <>
    <SideBar hidden={hidden} />
      <main className="contact-container">
        <NavContainer title="Contact" setHidden={setHidden} hidden={hidden}/>
        <ReviewsContainer  />
        <ContactFilter />
        <Table columns={columns} data={[...multipleComments.allReviews]} />
      </main>
    </>
  )
}

export default Contact;
