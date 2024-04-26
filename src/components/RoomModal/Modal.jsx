import styled from "styled-components"


const ModalInfo = styled.div`
    position: absolute;
    top: 500px;
    left: 1000px;
    background: cadetblue;
    padding: 100px;
    flex-direction: column;
    button {
        position: relative;
        bottom: 92px;
        left: 86px;
    }
    form {
        display: flex;
        flex-direction: column;
    }
`
const sendInfo = () => {
    console.log("hola")
}


const VisibleModalBox = ({setVisible}) => {
    return (
        <ModalInfo>
            <button onClick={() => setVisible(false)}>Cerrar modal</button>
            <form onSubmit={(event) => {event.preventDefault(); sendInfo(); setVisible(false)}}>
                <label>Room Name</label>
                <input type="text" placeholder="Room name"/>
                <label>Bed Type</label>
                <input type="text" placeholder="Bed type"/>
                <label>Room Floor</label>
                <input type="text" placeholder="Room floor"/>
                <label>Amenities</label>
                <input type="text" placeholder="Room amenities"/>
                <input type="submit"/>
            </form>
            
        </ModalInfo>
    )
}

const HiddenModalBox = () => {
    return (
        <br/>
    )
}


export function NewRoomModal({visible, setVisible}) {
    return (
        <>
        {visible ? <VisibleModalBox setVisible={setVisible}/> : <HiddenModalBox/>}
        </>
    )
}

