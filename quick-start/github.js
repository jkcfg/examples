import * as std from '@jkcfg/std';
import { developers } from 'developers.js';

// Github organization
const organization = 'myorg';

// Describe role and membership as defined by the Github terraform provider.
const role = developer => developer.github.admin ? 'admin' : 'member';
const membershipId = developer => `${organization}_${developer.github.handle}`;

const config = {
    provider: {
        github: {
            organization,
        },
    },
    github_membership: {},
};

for (const dev of developers) {
    config.github_membership[membershipId(dev)] = {
        username: dev.github.handle,
        role: role(dev),
    };
}

std.write(config, 'terraform/github.tf');
