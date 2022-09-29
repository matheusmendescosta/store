import clientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (!client.name || !client.cpf || !client.phone || !client.email || !client.address) {
      throw new Error("Todos os campos são obrigatorios: nome, cpf, phone, email, address");
    }
    res.send(await clientService.createClient(client));
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await clientService.getClients());
    logger.info("GET /client");
  } catch (error) {
    next(error);
  }
}

export default {
  createClient,
  getClients,
};
