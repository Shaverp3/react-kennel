const remoteURL = "http://localhost:5002"

const EmployeeManager = {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  }
}

export default EmployeeManager