

interface Repository<T> {

    getAll(): T[]
    getById(id: number): T
}