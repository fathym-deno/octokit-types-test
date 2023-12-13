import { Octokit } from "@octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";

const TestOctokit = Octokit.plugin(paginateGraphql);

const octokit = new TestOctokit({
  auth: Deno.env.get("GITHUB_TOKEN"),
});

const user = octokit.rest.users.getAuthenticated();
