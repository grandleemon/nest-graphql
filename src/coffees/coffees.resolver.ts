import { Resolver, Query } from "@nestjs/graphql";
import { Coffee } from "./entities/coffee.entity/coffee.entity";

@Resolver(() => Coffee)
export class CoffeesResolver {
  @Query(() => [Coffee], { name: "coffees" })
  async findAll() {
    return [];
  }
}
