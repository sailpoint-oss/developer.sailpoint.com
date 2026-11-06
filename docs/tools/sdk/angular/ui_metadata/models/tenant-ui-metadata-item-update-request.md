# TenantUiMetadataItemUpdateRequest

# TenantUiMetadataItemUpdateRequest

Import this model from the entry point of its package:

```typescript
import { TenantUiMetadataItemUpdateRequest } from '@sailpoint/angular-sdk/ui_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframeWhiteList** | **(optional)** `string` | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [default to undefined]
**usernameLabel** | **(optional)** `string` | Descriptor for the username input field. If you would like to reset the value use \"null\". | [default to undefined]
**usernameEmptyText** | **(optional)** `string` | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [default to undefined]
**instanceBadgeDisplayName** | **(optional)** `string` | Display name for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [default to undefined]
**instanceBadgeColor** | **(optional)** `string` | Hex value of color for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [default to undefined]
**instanceBadgeVisible** | **(optional)** `boolean` | Visibility toggle for the instance badge. Optional. Omit this property to leave the stored value unchanged. Null is stored as false. | [default to undefined]

