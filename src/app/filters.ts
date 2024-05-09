
// BOOKINGS SECTION FILTERS

interface BookingsNameFilter {
    first_name : string,
    status : string
}

interface BookingsStatusFilter {
    status : string
}

interface BookingsSort {
    order_date: string,
    first_name: string,
    check_in: string,
    check_out: string
}

export function filteredByName(data : BookingsNameFilter[], searchData : string) : any{
    if (!searchData){
      return data;
    }
    return data.filter((item) => item.first_name.toLowerCase().includes(searchData.toLowerCase()));
  }

export function filteredByStatus(data : BookingsStatusFilter[], clicked : string){
    if (clicked === "all"){
        return [...data];
    } else if (clicked === "checkin"){
        return data.filter((item) => item.status === "Check In");
    } else if (clicked === "checkout"){
        return data.filter((item) => item.status === "Check Out");
    } else if (clicked === "inprogress"){
        return data.filter((item) => item.status === "In Progress");
    }
}

export function sortData(data : BookingsSort[], choosen : string) : any{
    if (choosen === "all"){
        return [...data];
    } else if (choosen === "order_date"){
        return data.sort((a, b) => a.order_date.localeCompare(b.order_date))
    } else if (choosen === "guest"){
        return data.sort((a, b) => a.first_name.localeCompare(b.first_name))
    } else if (choosen === "checkin"){
        return data.sort((a, b) => a.check_in.localeCompare(b.check_in))
    } else if (choosen === "checkout"){
        return data.sort((a, b) => a.check_out.localeCompare(b.check_out))
    }
}

// ROOMS SECTION FILTERS

interface RoomsFilter {
    room_status : string
}

export function filteredByRoomStatus(data : RoomsFilter[], clicked : string){
    if (clicked === "all"){
        return [...data]
    } else if (clicked === "available"){
        return data.filter((item) => item.room_status === "Available")
    } else if (clicked === "booked"){
        return data.filter((item) => item.room_status === "Booked");
    }
}


// USERS SECTION FILTERS

interface EmployeeNameFilter {
    employee_name: string
}

interface EmployeeStatusFilter {
    employee_status : string;
}

export function filteredByEmployee(data : EmployeeNameFilter[], searchData : string){
    if (!searchData){
      return data;
    }
    return data.filter((item) => item.employee_name.toLowerCase().includes(searchData.toLowerCase()));
  }

export function filteredByEmployeeStatus(data : EmployeeStatusFilter[], clicked : string){
    if (clicked === "all"){
        return data;
    } else if (clicked === "Inactive"){
        return data.filter((item) => item.employee_status === "Inactive")
    } else if (clicked === "Active"){
        return data.filter((item) => item.employee_status === "Active")
    }
  }