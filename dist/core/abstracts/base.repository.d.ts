import { DocumentType } from '@typegoose/typegoose';
import { AnyKeys, Document, FilterQuery, LeanDocument } from 'mongoose';
import { ModelType } from 'typegoose';
export declare class BaseRepository<T> {
    private readonly model;
    constructor(model: ModelType<T>);
    findById(_id: string): Promise<T & Document>;
    findOne(opts?: FilterQuery<DocumentType<T>>): Promise<T & Document>;
    find(opts?: FilterQuery<DocumentType<T>>): Promise<T[] & Document[]>;
    update(id: string, update?: any, isNew?: boolean): Promise<T & Document>;
    upsertOne(filter: FilterQuery<DocumentType<T>>, update?: any, isNew?: boolean): Promise<T & Document>;
    delete(_id: string): Promise<boolean>;
    count(opts?: FilterQuery<DocumentType<T>>): Promise<number>;
    insertMany(dtos: AnyKeys<DocumentType<T>>[]): Promise<T[]>;
    deleteMany(opts?: FilterQuery<DocumentType<T>>): Promise<void>;
    create(opts: AnyKeys<LeanDocument<T>>): Promise<T>;
}
