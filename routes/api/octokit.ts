import { Octokit } from "@octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";
import {
  Endpoints,
  GetResponseDataTypeFromEndpointMethod,
  GetResponseTypeFromEndpointMethod,
} from "@octokit/types";

const TestOctokit = Octokit.plugin(paginateGraphql);

const octokit = new TestOctokit({
  auth: Deno.env.get("GITHUB_TOKEN"),
});

const user = octokit.rest.users.getAuthenticated();

type listAuthenticatedUserEmailsParameters =
  Endpoints["GET /user/emails"]["parameters"];

type listAuthenticatedUserEmailsResponse =
  Endpoints["GET /user/emails"]["response"];

async function listAuthenticatedUserEmails(
  params: listAuthenticatedUserEmailsParameters,
): listAuthenticatedUserEmailsResponse {
  return await octokit.request("GET /user/emails", params);
}

const emails = await listAuthenticatedUserEmails({});
