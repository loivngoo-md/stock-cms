export const Tag = {
  Token: 'token',
  Auth: 'Auth',
  User: 'User',
  Team: 'Team',
  Device: 'Device',
  Request: 'Request',
};

export const Tags: string[] = ['Auth', 'User', 'Team', 'Device', 'Request'];
export const VERSION = `1.0.0`;

export const SWAGGER = {
  BEARER_AUTH: `Token`,
  TITLE: `Drima API`,
  VERSION: VERSION,
  DESCRIPTION:
    'The Swagger specification defines a set of files required to describe such an API. These files can then be used by the Swagger-UI project to display the API and Swagger-Codegen to generate clients.',
  TAGS: [...Tags],
};

export const SUCCESS = `Success`;
