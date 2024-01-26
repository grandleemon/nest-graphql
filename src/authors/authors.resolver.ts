import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Author } from "./author.model";

@Resolver(of => Author)
export class AuthorsResolver {
	constructor() {}

	@Query(returns => Author)
	async getAuthor() {
		return "author";
	}
}