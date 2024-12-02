import { WorkflowEntrypoint, WorkflowStep, WorkflowEvent } from 'cloudflare:workers';

type Env = {
  // Add your bindings here, e.g. Workers KV, D1, Workers AI, etc.
  MY_WORKFLOW: Workflow;
};

// User-defined params passed to your workflow
type Params = {
  email: string;
  metadata: Record<string, string>;
};

export class MyWorkflow extends WorkflowEntrypoint<Env, Params> {
  async run(event: WorkflowEvent<Params>, step: WorkflowStep) {
    await step.sleep('wait on something', '1 minute');
  }
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
