# V3CreateConnectorDto

# V3CreateConnectorDto

Import this model from the entry point of its package:

```typescript
import { V3CreateConnectorDto } from '@sailpoint/angular-sdk/connectors';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The connector name. Need to be unique per tenant. The name will able be used to derive a url friendly unique scriptname that will be in response. Script name can then be used for all update endpoints | [default to undefined]
**type** | **(optional)** `string` | The connector type. If not specified will be defaulted to \'custom \'+name | [default to undefined]
**className** | `string` | The connector class name. If you are implementing openconnector standard (what is recommended), then this need to be set to sailpoint.connector.OpenConnectorAdapter | [default to undefined]
**directConnect** | **(optional)** `boolean` | true if the source is a direct connect source | [default to true]
**status** | **(optional)** `string` | The connector status | [default to undefined]

