const remoteURL = "http://localhost:5002"

const AnimalManager = {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },

  update(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },

  patch(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: `${editedAnimal.name}`}, {breed: `${editedAnimal.breed}`})
      }).then(data => data.json());
}

}

export default AnimalManager