# ResourceModel

# ResourceModel

Import this model from the entry point of its package:

```typescript
import { ResourceModel } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `number` | The unique identifier for the resource. | [default to undefined]
**name** | **(optional)** `string` | The display name or label for the resource. | [default to undefined]
**fullPath** | **(optional)** `string` | The full path to the resource within the system or application. | [default to undefined]
**applicationId** | **(optional)** `number` | The unique identifier of the application to which this resource belongs. | [default to undefined]
**type** | **(optional)** `BusinessServiceType` |  | [default to undefined]
**owners** | **(optional)** `Array<string>` | A list of UUIDs representing the owners of the resource. | [default to undefined]

