# BusinessApplication

# BusinessApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Business Application ID. Assigned by the service on create. | [optional] [readonly] 
**Name** | **String** | Human-readable display name. Must be unique within the tenant. | [required]
**Description** | **String** | Free-text description of the Business Application. | [optional] 
**Vendor** | **String** | Vendor or publisher of the Business Application. | [optional] 
**Signatures** | [**[]BusinessApplicationSignature**](business-application-signature) | Signatures used to automatically correlate machine identities to this Business Application. Modifying this field requires the custom Business Application feature to be enabled. | [optional] 
**Owner** | [**BusinessApplicationOwner**](business-application-owner) |  | [optional] 
**AdditionalOwners** | [**[]BusinessApplicationAdditionalOwnersInner**](business-application-additional-owners-inner) | Additional (secondary) owners of the Business Application. | [optional] 
**SanctionedStatus** | **SanctionedStatus** | Sanctioned status of the Business Application. Defaults to `UNKNOWN`. | [optional] 
**Origin** | **BusinessApplicationOrigin** |  | [optional] [readonly] 
**Source** | [**BusinessApplicationSource**](business-application-source) |  | [optional] 
**Created** | **System.DateTime** | Time the Business Application was created. | [optional] [readonly] 
**Modified** | **System.DateTime** | Time the Business Application was last modified. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$BusinessApplication = Initialize-BusinessApplication  -Id a1b2c3d4-e5f6-7890-abcd-ef1234567890 `
 -Name Cursor `
 -Description AI coding assistant used by the platform engineering team. `
 -Vendor Cursor `
 -Signatures null `
 -Owner null `
 -AdditionalOwners null `
 -SanctionedStatus null `
 -Origin null `
 -Source null `
 -Created 2026-01-15T13:45:12.312Z `
 -Modified 2026-02-20T09:31:47.882Z
```

- Convert the resource to JSON
```powershell
$BusinessApplication | ConvertTo-JSON
```


[[Back to top]](#) 

