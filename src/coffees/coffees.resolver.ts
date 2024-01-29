import { Resolver, Query, Args, ID } from "@nestjs/graphql";
import { Coffee } from "./entities/coffee.entity/coffee.entity";
import { ParseIntPipe } from "@nestjs/common";

@Resolver(() => Coffee)
export class CoffeesResolver {
  @Query(() => [Coffee], { name: "coffees" })
  async findAll() {
    return [];
  }

  @Query(() => Coffee, { name: "coffee", nullable: true })
  async findOne(@Args("id", { type: () => ID }, ParseIntPipe) id: number) {
    return null;
  }
}
