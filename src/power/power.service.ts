import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(energy: number) {
    console.log(`Supplying ${energy} worth of power.`);
  }
}
