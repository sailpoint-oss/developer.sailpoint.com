# SimIntegrationDetails

# SimIntegrationDetails

Import this model from the entry point of its package:

```typescript
import { SimIntegrationDetails } from '@sailpoint/angular-sdk/sim_integrations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**description** | **(optional)** `string` | The description of the integration | [default to undefined]
**type** | **(optional)** `string` | The integration type | [default to undefined]
**attributes** | **(optional)** `object` | The attributes map containing the credentials used to configure the integration. | [default to undefined]
**sources** | **(optional)** `Array<string>` | The list of sources (managed resources) | [default to undefined]
**cluster** | **(optional)** `string` | The cluster/proxy | [default to undefined]
**statusMap** | **(optional)** `object` | Custom mapping between the integration result and the provisioning result | [default to undefined]
**request** | **(optional)** `object` | Request data to customize desc and body of the created ticket | [default to undefined]
**beforeProvisioningRule** | **(optional)** `SimIntegrationDetailsAllOfBeforeProvisioningRule` |  | [default to undefined]

