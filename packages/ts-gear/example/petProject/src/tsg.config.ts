import type { Project } from '../../../src/type'

const projects: Project[] = [
  {
    name: 'pet',
    dest: 'service',
    source: '../../fixture/pet.json',
    // source: 'http://petstore.swagger.io/v2/swagger.json',
    importRequesterStatement: 'import { requester } from "../../requester"',
    simplifyRequestOption: true,
    EOL: '\n',
    withBasePath: true,
  },
  {
    name: 'petv3',
    dest: 'service',
    source: 'https://petstore3.swagger.io/api/v3/openapi.json',
    importRequesterStatement: 'import { requester } from "../../requester"',
    EOL: '\n',
    withBasePath: true,
    requestOptionUnionType: 'RequestInit',
  },
  {
    name: 'projectE',
    dest: 'service',
    source: '../../fixture/projectE.json',
    importRequesterStatement: 'import { requester } from "fffxx"',
    EOL: '\n',
    simplifyRequestOption: true,
  },
  {
    name: 'v3',
    dest: 'service',
    source: '../../fixture/openapiv3.json',
    keepGeneric: true,
    importRequesterStatement: 'import { requester } from "fffxx"',
    useCache: false,
    EOL: '\n',
  },
  {
    name: 'nullable',
    dest: 'service',
    source: '../../fixture/nullable.json',
    importRequesterStatement: 'import { requester } from "../../requester"',
    nullableFalseAsRequired: true,
  },
]

export default projects
