# TenantUiMetadataItemResponse

# TenantUiMetadataItemResponse

Import this model from the entry point of its package:

```typescript
import { TenantUiMetadataItemResponse } from '@sailpoint/angular-sdk/ui_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframeWhiteList** | **(optional)** `string` | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [default to undefined]
**usernameLabel** | **(optional)** `string` | Descriptor for the username input field. If you would like to reset the value use \"null\". | [default to undefined]
**usernameEmptyText** | **(optional)** `string` | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [default to undefined]
**instanceBadgeDisplayName** | **(optional)** `string` | Display name for the instance badge. Null when no display name is configured. | [default to undefined]
**instanceBadgeColor** | **(optional)** `string` | Hex value of color for the instance badge. Null when no color is configured. | [default to undefined]
**instanceBadgeVisible** | **(optional)** `boolean` | Whether the instance badge is visible. Defaults to false when no value is stored. | [default to false]

