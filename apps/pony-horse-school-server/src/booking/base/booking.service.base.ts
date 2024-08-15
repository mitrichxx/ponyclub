/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Booking as PrismaBooking,
  Customer as PrismaCustomer,
  Horse as PrismaHorse,
} from "@prisma/client";

import { UpdateBookingStatusInput } from "../UpdateBookingStatusInput";
import { CreateBookingInput } from "../CreateBookingInput";

export class BookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BookingCountArgs, "select">): Promise<number> {
    return this.prisma.booking.count(args);
  }

  async bookings(args: Prisma.BookingFindManyArgs): Promise<PrismaBooking[]> {
    return this.prisma.booking.findMany(args);
  }
  async booking(
    args: Prisma.BookingFindUniqueArgs
  ): Promise<PrismaBooking | null> {
    return this.prisma.booking.findUnique(args);
  }
  async createBooking(args: Prisma.BookingCreateArgs): Promise<PrismaBooking> {
    return this.prisma.booking.create(args);
  }
  async updateBooking(args: Prisma.BookingUpdateArgs): Promise<PrismaBooking> {
    return this.prisma.booking.update(args);
  }
  async deleteBooking(args: Prisma.BookingDeleteArgs): Promise<PrismaBooking> {
    return this.prisma.booking.delete(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getHorse(parentId: string): Promise<PrismaHorse | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .horse();
  }
  async ApproveBooking(
    args: UpdateBookingStatusInput
  ): Promise<UpdateBookingStatusInput> {
    throw new Error("Not implemented");
  }
  async CreateBooking(args: CreateBookingInput): Promise<CreateBookingInput> {
    throw new Error("Not implemented");
  }
  async DeclineBooking(
    args: UpdateBookingStatusInput
  ): Promise<UpdateBookingStatusInput> {
    throw new Error("Not implemented");
  }
}
