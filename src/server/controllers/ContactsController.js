import { ApplicationController } from "./ApplicationController"
import { Contact } from "../models/Contact"

export class ContactsController extends ApplicationController {
  indexAction(params) {
    const query = params.q
    const contacts = Contact.search(query)
    this.res.render("contacts", { layout: false, contacts })
  }
}
