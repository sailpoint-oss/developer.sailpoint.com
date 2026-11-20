# BrandingItemCreate

# BrandingItemCreate

Import this model from the entry point of its package:

```typescript
import { BrandingItemCreate } from '@sailpoint/angular-sdk/branding';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | name of branding item | [default to undefined]
**productName** | `string` | product name | [default to undefined]
**actionButtonColor** | **(optional)** `string` | hex value of color for action button | [default to undefined]
**darkActionButtonColor** | **(optional)** `string` | hex value of color for action button in dark mode | [default to undefined]
**activeLinkColor** | **(optional)** `string` | hex value of color for link | [default to undefined]
**darkActiveLinkColor** | **(optional)** `string` | hex value of color for link in dark mode | [default to undefined]
**navigationColor** | **(optional)** `string` | hex value of color for navigation bar | [default to undefined]
**darkNavigationColor** | **(optional)** `string` | hex value of color for navigation bar in dark mode | [default to undefined]
**emailFromAddress** | **(optional)** `string` | email from address | [default to undefined]
**loginInformationalMessage** | **(optional)** `string` | login information message | [default to undefined]
**fileStandard** | **(optional)** `Blob` | png file with logo. To remove an existing logo, delete the branding item and create it again. Omitting this field on update keeps the current logo. | [default to undefined]
**darkFileStandard** | **(optional)** `Blob` | png file with dark-mode logo. To remove an existing dark-mode logo, delete the branding item and create it again. Omitting this field on update keeps the current dark-mode logo. | [default to undefined]

