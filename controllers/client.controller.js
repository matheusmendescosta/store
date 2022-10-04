import clientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (!client.name || !client.cpf || !client.phone || !client.email || !client.address) {
      throw new Error("Todos os campos são obrigatorios: nome, cpf, phone, email, address");
    }
    client = await clientService.createClient(client);
    res.send(client);
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

async function getClient(req, res, next) {
  try {
    res.send(await clientService.getClient(req.params.id));
    logger.info("GET /client");
  } catch (error) {
    next(error);
  }
}

async function deleteClient(req, res, next) {
  try {
    await clientService.deleteClient(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (!client.client_id || !client.name || !client.cpf || !client.phone || !client.email || !client.address) {
      throw new Error("Todos os campos são obrigatorios: nome, cpf, phone, email, address");
    }
    client = await clientService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
