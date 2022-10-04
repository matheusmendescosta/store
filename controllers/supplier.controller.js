import supplierService from "../services/supplier.service.js";

async function createSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
      throw new Error("Todos os campos são obrigatorios: nome, cnpj, phone, email, address");
    }
    supplier = await supplierService.createSupplier();
    res.send(supplier);
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createSupplier,
};
