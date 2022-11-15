"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const not_found_exception_1 = require("../../exceptions/not-found.exception");
const error_message_1 = require("../../common/constant/error-message");
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async findById(_id) {
        return await this.model.findById(_id).lean();
    }
    async findOne(opts = {}) {
        return await this.model.findOne(opts).lean();
    }
    async find(opts = {}) {
        return await this.model.find(opts).lean();
    }
    async update(id, update = {}, isNew = true) {
        return await this.model
            .findByIdAndUpdate(id, update, {
            useFindAndModify: false,
            new: isNew,
        })
            .lean();
    }
    async upsertOne(filter, update = {}, isNew = true) {
        return await this.model.findOneAndUpdate(filter, update, {
            upsert: true,
            useFindAndModify: false,
            new: isNew,
        });
    }
    async delete(_id) {
        const res = await this.model.findByIdAndDelete(_id);
        if (!res) {
            throw new not_found_exception_1.NotFound(error_message_1.NOT_FOUND);
        }
        return true;
    }
    async count(opts = {}) {
        return await this.model.countDocuments(opts);
    }
    async insertMany(dtos) {
        const news = dtos.map((dto) => new this.model(dto));
        return await this.model.insertMany(news);
    }
    async deleteMany(opts = {}) {
        await this.model.deleteMany(opts);
    }
    async create(opts) {
        return await this.model.create(opts);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map