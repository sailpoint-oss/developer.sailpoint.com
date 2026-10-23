# CcBccPreferenceEntry

# CcBccPreferenceEntry

Import this model from the entry point of its package:

```typescript
import { CcBccPreferenceEntry } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `CcBccRecipientType` |  | [default to undefined]
**id** | **(optional)** `string` | Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email. | [default to undefined]
**email** | **(optional)** `string` | Static email address when type is STATIC_EMAIL. | [default to undefined]

