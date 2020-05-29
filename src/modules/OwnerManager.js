const remoteURL = "http://localhost:5002"

const OwnerManager = {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}

export default OwnerManager