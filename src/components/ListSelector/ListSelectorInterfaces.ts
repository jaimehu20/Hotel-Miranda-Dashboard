export interface BookingFilterInterface {
    setSearchInput : React.Dispatch<React.SetStateAction<string>>,
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>,
    setChoosen: React.Dispatch<React.SetStateAction<string>>,
    setNewBookingModal: React.Dispatch<React.SetStateAction<boolean>>,
    title?: string,
    choosen?: string,
}

export interface RoomsFilterInterface {
    setClicked : React.Dispatch<React.SetStateAction<string>>,
    setModalAdd: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface EmployeesFilterInterface {
    setSearchInput : React.Dispatch<React.SetStateAction<string>>,
    setClicked : React.Dispatch<React.SetStateAction<string>>,
    setModalAdd: React.Dispatch<React.SetStateAction<boolean>>,
}