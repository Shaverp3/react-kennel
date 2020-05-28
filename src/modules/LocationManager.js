const remoteURL = "http://localhost:5002"

const LocationManager = {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  }
}

export default LocationManager