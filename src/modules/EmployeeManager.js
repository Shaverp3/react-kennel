const remoteURL = "http://localhost:5002"

const EmployeeManager = {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newEmployee) {
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  },

  update(editedEmployee) {
    return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEmployee)
    }).then(data => data.json());
  }

  // patch(editedEmployee) {
  //   return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json"
  //  },
  //     body: JSON.stringify({ name: `${editedEmployee.name}`}
  //   ).then(data => data.json());
  // }

}

export default EmployeeManager