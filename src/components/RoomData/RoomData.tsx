import styled from "styled-components"
import room1 from "../../assets/room1.webp"
import room2 from "../../assets/room2.jpg"
import luxuryRoom from "../../assets/luxuryRoom.webp"
import luxuryDoubleBed from "../../assets/luxuryDoubleBed.webp"

const RoomSection = styled.section`
    display: flex;
    padding: 35px;
    height: 100vh !important;
    justify-content: center;
`

const RoomInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0px 4px 4px #00000029;
    background: #ffffff;
    padding: 30px;
    height: fit-content;
    margin-right: 30px;
    h3 {
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 0; }
    h3:last-of-type {
        margin-bottom: 10px; }
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

const RoomImage = styled.div`
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

const RoomLabel = styled.button`
    background-color: rgb(205, 248, 216);
    color: rgb(90, 208, 122);
    font-weight: bold;
    border-radius: 18px;
    border: none;
    padding: 10px;
    font-family: 'Poppins';
    margin-right: 10px;
    margin-bottom: 10px;
`

type props = {
    fetchedRoom : any,
    id: any
}

const getRoomImage = (roomType : string) => {
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

const getRoomStatus = (roomStatus : string) => {
    switch (roomStatus) {
        case 'Available':
            return 'checkinlabel';
        case 'Booked':
            return 'checkoutlabel';
        default:
            return 'checkinlabel'
    }
}

export const RoomData = (props : props) => {
    const roomIMG = getRoomImage(props.fetchedRoom.room_type)
    const roomStatus = getRoomStatus(props.fetchedRoom.room_status)
    const amenitiesList = props.fetchedRoom.room_amenities.split(',');
    
    const amenities = amenitiesList.map((item : string) => {
        return (
            <RoomLabel>{item.toLowerCase()}</RoomLabel>
        )
    })

    return (
    <>
        <RoomSection>
            <RoomInfo>
                <h3>{`${props.fetchedRoom.room_type} - ${props.fetchedRoom.room_code}`}</h3>
                <span>{`Room ID: ${props.id.slice(0, 6)}`}</span>
                <article>
                    <div>
                        <div>
                            <p>Room Floor</p>
                            <p>{props.fetchedRoom.room_floor}</p>
                        </div>
                        <div>
                            <p>Room Rate</p>
                            <p>{`$${props.fetchedRoom.room_rate}`}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Room Status</p>
                            <p>{props.fetchedRoom.room_status}</p>
                        </div>
                    </div>
                </article>
                <h3>Room Amenities</h3>
                <div>
                    {amenities}
                </div>
            </RoomInfo>
            <RoomImage>
                <img src={roomIMG} />
                <div className={roomStatus}>{props.fetchedRoom.room_status}</div>
            </RoomImage>
        </RoomSection>
    </> 
    )
}