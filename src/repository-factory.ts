import { Repository } from './repository';

export interface UserEntity {
    id: number,
    name: string | null
}

const userRepository = new Repository<UserEntity>();

class RepositoryFactory {
    private _repositories = {
        'user': userRepository
    }

    getRepository(name: 'user'): Repository<any> {
        return this._repositories[name];
    }
}

const repositoryFactory = new RepositoryFactory();

export { repositoryFactory } 