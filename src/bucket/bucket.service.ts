import { Injectable } from '@nestjs/common';
import EasyYandexS3 from 'easy-yandex-s3'
@Injectable()
export class BucketService {
  s3: EasyYandexS3;
  constructor() {
    this.s3 = new EasyYandexS3({
      auth: {
        accessKeyId: 'YCAJESV0A49lEzhUCIA6ZjAJt',
        secretAccessKey: 'YCNiAiNfe6LSBIh3jhM1BYz40ypab-cbfZAeXkOP'
      },
      Bucket: 'unilib-storage',
      debug: process.env.NODE_ENV == 'development' ? true : false
    })
  }
}
