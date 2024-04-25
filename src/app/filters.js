
// BOOKINGS SECTION FILTERS

export function filteredByName(data, searchData){
    if (!searchData){
      return data;
    }
    return data.filter((item) => item.first_name.toLowerCase().includes(searchData.toLowerCase()));
  }

export function filteredByStatus(data, clicked){
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

export function sortData(data, choosen){
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



// USERS SECTION FILTERS

export function filteredByEmployee(data, searchData){
    if (!searchData){
      return data;
    }
    return data.filter((item) => item.employee_name.toLowerCase().includes(searchData.toLowerCase()));
  }

  export function filteredByEmployeeStatus(data, clicked){
    if (clicked === "all"){
        return data;
    } else if (clicked === "Inactive"){
        return data.filter((item) => item.employee_status === "Inactive")
    } else if (clicked === "Active"){
        return data.filter((item) => item.employee_status === "Active")
    }
  }