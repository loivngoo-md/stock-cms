import { mongoose } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose';
export declare abstract class BaseModel extends Typegoose {
    _id: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
