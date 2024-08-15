import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HorseServiceBase } from "./base/horse.service.base";

@Injectable()
export class HorseService extends HorseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
