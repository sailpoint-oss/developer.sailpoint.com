# MachineAccountCreateRequestInputV2

# MachineAccountCreateRequestInputV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | Source the machine account is created on. Required while tiered subtype configuration is enabled, so a connector-tier subtype can name its source. Ignored when that flag is off; the source is then the subtype's own source. | [optional] [default to ""]
**SubtypeId** | **String** | Subtype that must be in the source effective set and for which the caller holds the create machine account entitlement. | [required]
**FormId** | **String** | Form selected for the machine account create request. | [optional] [default to ""]
**OwnerIdentityId** | **String** | Identity assigned as owner of the created machine account. | [required]
**MachineIdentityId** | **String** | Machine identity to correlate with the created machine account. When omitted, a new machine identity is created. | [optional] 
**Environment** | **String** | Environment type to use for the machine account. | [optional] [default to ""]
**Description** | **String** | Description for the machine account. | [optional] [default to ""]
**UserInput** | **SystemCollectionsHashtable** | Fields of the form linked to the subtype in approval settings. | [optional] 
**Entitlements** | [**[]MachineAccountCreateEntitlement**](machine-account-create-entitlement) | Entitlements to provision, including an optional comment and access dates. Honored while per-entitlement request details are enabled. De-duplicated by `id` (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when that flag is off. An empty array is accepted. | [optional] 
**EntitlementIds** | **[]String** | Entitlement ids to provision. Honored while per-entitlement request details are off. Values are trimmed, blanks are dropped, and ids are de-duplicated (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when per-entitlement request details are enabled. An empty array is accepted. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountCreateRequestInputV2 = Initialize-MachineAccountCreateRequestInputV2  -SourceId 2c9180907c1e4b3a017c1e5f2a3b0001 `
 -SubtypeId 1419fc28-a8ed-4a07-9f5c-0cb5dfad6311 `
 -FormId 4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a `
 -OwnerIdentityId 9f2c1b7e4a6d4c8fa1b2c3d4e5f60718 `
 -MachineIdentityId b1e2c3d4-0a5b-4c6d-8e7f-9a0b1c2d3e4f `
 -Environment production `
 -Description Nightly reconciliation job `
 -UserInput {"accountName":"svc-recon-01"} `
 -Entitlements [{"id":"858d2151-ff19-464b-ae0d-6938b3af2baf","comment":"Needed to read the reconciliation staging tables.","startDate":"2026-09-01T00:00:00.000Z","removeDate":"2027-03-01T00:00:00.000Z"},{"id":"0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31"}] `
 -EntitlementIds ["858d2151-ff19-464b-ae0d-6938b3af2baf","0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31"]
```

- Convert the resource to JSON
```powershell
$MachineAccountCreateRequestInputV2 | ConvertTo-JSON
```


[[Back to top]](#) 

