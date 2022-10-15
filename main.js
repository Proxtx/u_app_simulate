import { clients, refreshClients } from "../../private/clients.js";

export class App {
  constructor(config) {
    this.config = config;
  }

  async keys(keys) {
    await refreshClients();
    let client = clients[this.config.client];
    return (await client.request("simulate", "keys", [keys])).result;
  }
}
