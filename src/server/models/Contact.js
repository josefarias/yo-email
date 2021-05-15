import allContacts from "../db/contacts"

export class Contact {
  static search(query) {
    const results = this.all().filter((el) => {
      return el.name.toLowerCase().includes(query.toLowerCase())
    })

    return results.slice(0, 3)
  }

  static all() {
    return allContacts
  }
}
