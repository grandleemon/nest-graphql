import { Resolver, Query, Args, ID, Mutation } from "@nestjs/graphql";
import { Coffee } from "./entities/coffee.entity";
import { ParseIntPipe } from "@nestjs/common";
import { CreateCoffeeInput } from "./dto/create-coffee.input";
import { CoffeesService } from "./coffees.service";
import { UpdateCoffeeInput } from "./dto/update-coffee.input";

@Resolver(() => Coffee)
export class CoffeesResolver {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Query(() => [Coffee], { name: "coffees" })
  async findAll() {
    return this.coffeeService.findAll();
  }

  @Query(() => Coffee, { name: "coffee" })
  async findOne(@Args("id", { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: "createCoffee" })
  async create(
    @Args("createCoffeeInput") createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeeService.create(createCoffeeInput);
  }

  @Mutation(() => Coffee, { name: "updateCoffee" })
  async update(
    @Args("id", { type: () => ID }, ParseIntPipe) id: number,
    @Args("updateCoffeeInput") updateCoffeeInput: UpdateCoffeeInput,
  ) {
    console.log("update");
    return this.coffeeService.update(id, updateCoffeeInput);
  }

  @Mutation(() => Coffee, { name: "deleteCoffee" })
  async delete(@Args("id", { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeeService.delete(id);
  }
}
