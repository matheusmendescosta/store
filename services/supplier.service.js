import supplierRepository from "../repositories/supplier.repository.js";

async function createSupplier() {
  return await supplierRepository.insertSupplier();
}

export default {
  createSupplier,
};
