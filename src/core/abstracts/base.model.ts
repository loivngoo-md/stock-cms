import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, mongoose, prop, Severity } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose';

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: {
    timestamps: true,
    toJSON: {
      //virtuals: true,
      //getters: true,
    },
  },
})
export abstract class BaseModel extends Typegoose {
  @ApiProperty()
  @prop({ auto: true })
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  @prop()
  createdAt: Date; // provided by schemaOptions.timestamps

  @ApiProperty()
  @prop()
  updatedAt: Date; // provided by schemaOptions.timestamps
}
