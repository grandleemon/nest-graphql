import { Resolver, Query, Args, ID, Mutation } from "@nestjs/graphql";
import { Coffee } from "./entities/coffee.entity";
import { ParseIntPipe } from "@nestjs/common";
import { CreateCoffeeInput } from "./dto/create-coffee.input/create-coffee.input";
import { CoffeesService } from "./coffees.service";

@Resolver(() => Coffee)
export class CoffeesResolver {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Query(() => [Coffee], { name: "coffees" })
  async findAll() {
    return this.coffeeService.findAll();
  }

  @Query(() => Coffee, { name: "coffee", nullable: true })
  async findOne(@Args("id", { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: "createCoffee", nullable: true })
  async create(
    @Args("createCoffeeInput") createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeeService.create(createCoffeeInput);
  }
}
