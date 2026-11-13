# Reminderescalationtenantconfig

# Reminderescalationtenantconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | **String** | Tenant id taken from the authenticated request. | [required][readonly] 
**DomainObjectType** |  **Enum** [  "PERSONAL_ACCESS_TOKEN",    "CERTIFICATION" ] | Domain object type this default applies to. | [required]
**Rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | [required]
**SchemaVersion** | **Int32** | Schema version assigned by the service. Clients do not set this field. | [required][readonly] 
**Revision** | **Int32** | Optimistic-lock counter. Echo this value on update. | [required]
**CreatedAt** | **System.DateTime** | When this tenant default was created. | [required][readonly] 
**UpdatedAt** | **System.DateTime** | When this tenant default was last updated. | [required][readonly] 

## Examples

- Prepare the resource
```powershell
$Reminderescalationtenantconfig = Initialize-Reminderescalationtenantconfig  -TenantId 2c918085-7d3a-4c3a-9f1e-0b6c8a1d2e3f `
 -DomainObjectType CERTIFICATION `
 -Rules null `
 -SchemaVersion 1 `
 -Revision 1 `
 -CreatedAt 2026-10-28T17:00Z `
 -UpdatedAt 2026-10-28T17:30Z
```

- Convert the resource to JSON
```powershell
$Reminderescalationtenantconfig | ConvertTo-JSON
```


[[Back to top]](#) 

