# PublicIdentityV2

# PublicIdentityV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity id | [required]
**Name** | **String** | Alternate unique identifier for the identity (alias / search field name). | [required]
**DisplayName** | **String** | Human-readable display name of the identity. | [required]
**Email** | **String** | Email address of identity. | [required]
**IdentityState** |  **Enum** [  "ACTIVE",    "INACTIVE_SHORT_TERM",    "INACTIVE_LONG_TERM" ] | The current state of the identity, which determines how SailPoint Identity Security interacts with the identity. | [required]
**CloudLifecycleState** | **String** | The lifecycle status for the identity | [required]
**Manager** | [**PublicIdentityV2Manager**](public-identity-v2-manager) | Manager of this identity, or null when none | [required]
**Attributes** | **map[string]String** | Configured public identity attributes only (from visible-attributes configuredAttributes). Missing keys are omitted; present null values are returned as null. | [required]

## Examples

- Prepare the resource
```powershell
$PublicIdentityV2 = Initialize-PublicIdentityV2  -Id 2c9180857182305e0171993735622948 `
 -Name alison.ferguso `
 -DisplayName Alison Ferguso `
 -Email alison.ferguso@acme-solar.com `
 -IdentityState ACTIVE `
 -CloudLifecycleState Active `
 -Manager null `
 -Attributes {"country":"US"}
```

- Convert the resource to JSON
```powershell
$PublicIdentityV2 | ConvertTo-JSON
```


[[Back to top]](#) 

