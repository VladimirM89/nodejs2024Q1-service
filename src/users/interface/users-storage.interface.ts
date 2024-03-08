export interface UsersStorage {
  create: () => void;
  findAll: () => void;
  findOne: () => void;
  update: () => void;
  remove: () => void;
}
