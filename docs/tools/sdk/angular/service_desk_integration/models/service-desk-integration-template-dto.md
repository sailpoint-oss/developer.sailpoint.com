# ServiceDeskIntegrationTemplateDto

# ServiceDeskIntegrationTemplateDto

Import this model from the entry point of its package:

```typescript
import { ServiceDeskIntegrationTemplateDto } from '@sailpoint/angular-sdk/service_desk_integration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**type** | `string` | The \'type\' property specifies the type of the Service Desk integration template. | [default to 'Web Service SDIM']
**attributes** |  | The \'attributes\' property value is a map of attributes available for integrations using this Service Desk integration template. | [default to undefined]
**provisioningConfig** | `ProvisioningConfig` |  | [default to undefined]

