import clientService from "../services/client.service";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (!client.name || !client.cpf || !client.phone || client.email || !client.address) {
      throw new Error("Todos os campos são obrigatorios");
    }

    res.send(await clientService.createClient(client));
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
};
