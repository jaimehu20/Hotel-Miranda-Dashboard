import styled from "styled-components"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import luxuryRoom from "../../assets/luxuryRoom.jpg"
import luxuryDoubleBed from "../../assets/luxuryDoubleBed.jpg"

const BookingSection = styled.section`
    display: flex;
    padding: 35px;
    height: 100vh !important;
    justify-content: center;
`

const BookingInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0px 4px 4px #00000029;
    background: #ffffff;
    padding: 30px;
    height: fit-content;
    h3 {
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 0; }
    span {
        font-size: 14px;
        color: rgb(121, 146, 131); }
    article {
        display: flex;
        flex-direction: column; }
    article div {
        gap: 50px }
    article div div {
        flex-direction: column;
        gap: 0; }
    article div p:nth-child(1) {
        margin-bottom: 0;
        color: rgb(121, 146, 131); }
    article div p:nth-child(2) {
        margin-top: 0;
        font-weight: bold }
    p:nth-child(4) {
        width: 50% }
    small {
        color: rgb(121, 146, 131); }
`

const BookingImage = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    text-align: right;
    img {
        width: 80%;
        object-fit: cover;
        height: 80%;
        border-radius: 12px; }
    div {
        display: block;
        position: absolute;
        padding: 10px 64px;
        transform: rotate(45deg);
        top: 26px;
        right: -56px;
        color: white;
        font-weight: bold }
`

type props = {
    fetchedBooking : any,
    id: any
}

const getBookingImage = (roomType : string) => {
    switch (roomType) {
        case 'Single Bed':
            return room1;
        case 'Double Bed':
            return room2
        case 'Double Bed Superior':
            return luxuryDoubleBed
        case 'Suite':
            return luxuryRoom
        default:
            return room1
    }
};

const getBookingStatus = (bookingStatus : string) => {
    switch (bookingStatus) {
        case 'Check In':
            return 'checkinlabel';
        case 'Check Out':
            return 'checkoutlabel';
        case 'In Progress':
            return 'inprogresslabel'
        default:
            return 'checkinlabel'
    }
}
export const BookingData = (props : props) => {
    const bookingIMG = getBookingImage(props.fetchedBooking.room_type)
    const bookingStatus = getBookingStatus(props.fetchedBooking.status)
    return (
    <>
        <BookingSection>
            <BookingInfo>
                <h3>{`${props.fetchedBooking.first_name} ${props.fetchedBooking.last_name}`}</h3>
                <span>{`Booking ID: ${props.id?.slice(0, 10).toUpperCase()}`}</span>
                <article>
                    <div>
                        <div>
                            <p>Check In</p>
                            <p>{props.fetchedBooking.check_in.slice(0, 10)}</p>
                        </div>
                        <div>
                            <p>Check Out</p>
                            <p>{props.fetchedBooking.check_out.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Room Info</p>
                            <p>{props.fetchedBooking.room_type}</p>
                        </div>
                        <div>
                            <p>Room Status</p>
                            <p>{props.fetchedBooking.status}</p>
                        </div>
                    </div>
                </article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio officia quas corrupti ad deserunt veritatis nam eveniet pariatur impedit voluptate? Debitis sit reiciendis amet voluptatibus harum eius laboriosam a eaque!</p>
                <h3>Special Request:</h3>
                <small>No special requests.</small>
            </BookingInfo>
            <BookingImage>
                <img src={bookingIMG} />
                <div className={bookingStatus}>{props.fetchedBooking.status}</div>
            </BookingImage>
        </BookingSection>
    </> 
    )
}