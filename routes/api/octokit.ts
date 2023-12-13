import { Octokit } from "@octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";

const TestOctokit = Octokit.plugin(paginateGraphql);
