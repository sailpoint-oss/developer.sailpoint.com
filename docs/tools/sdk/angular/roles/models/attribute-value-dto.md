# AttributeValueDTO

# AttributeValueDTO

Import this model from the entry point of its package:

```typescript
import { AttributeValueDTO } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **(optional)** `string` | Technical name of the Attribute value. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore. | [default to undefined]
**name** | **(optional)** `string` | The display name of the Attribute value. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ - | [default to undefined]
**status** | **(optional)** `string` | The status of the Attribute value. | [default to undefined]
**type** | **(optional)** `string` | Indicates how this Attribute value was created. static values are pre-defined and created directly through this API. adhoc values are created dynamically through an internal service-to-service flow when the parent Attribute has isAdhoc set to true, and cannot be created directly through the public create-value API. | [default to undefined]

