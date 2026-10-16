# V3ConnectorDto

# V3ConnectorDto

Import this model from the entry point of its package:

```typescript
import { V3ConnectorDto } from '@sailpoint/angular-sdk/connectors';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The connector name | [default to undefined]
**type** | **(optional)** `string` | The connector type | [default to undefined]
**scriptName** | **(optional)** `string` | The connector script name | [default to undefined]
**className** | **(optional)** `string` | The connector class name. | [default to undefined]
**features** | **(optional)** `Array<string>` | The list of features supported by the connector | [default to undefined]
**directConnect** | **(optional)** `boolean` | true if the source is a direct connect source | [default to false]
**connectorMetadata** | **(optional)**  | A map containing metadata pertinent to the connector | [default to undefined]
**status** | **(optional)** `string` | The connector status | [default to undefined]

