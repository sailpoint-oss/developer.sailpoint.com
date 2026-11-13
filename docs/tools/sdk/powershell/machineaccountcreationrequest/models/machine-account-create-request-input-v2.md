# MachineAccountCreateRequestInputV2

# MachineAccountCreateRequestInputV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | **String** | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | [required]
**SourceId** | **String** | ID of the source to create the machine account on. The subtype must be available on this source. Required when subtypes can be configured per source for the tenant; otherwise it is ignored and the subtype's own source is used. | [optional] 
**FormId** | **String** | Form ID selected by user for the machine account create request. | [optional] 
**OwnerIdentityId** | **String** | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | [required]
**MachineIdentityId** | **String** | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [optional] 
**Environment** | **String** | Environment type to use for the machine account. | [optional] 
**Description** | **String** | Description for the machine account. | [optional] 
**UserInput** | **SystemCollectionsHashtable** | Fields of the form linked to the subtype in approval settings. | [optional] 
**Entitlements** | [**[]MachineAccountCreateEntitlement**](machine-account-create-entitlement) | Entitlements to request for the created machine account, each with an optional comment, start date, and remove date. Duplicate IDs are ignored and up to 20 unique entitlements are allowed. Use either `entitlements` or `entitlementIds`, depending on which one your tenant supports; sending a non-empty list that your tenant does not support returns `400`. | [optional] 
**EntitlementIds** | **[]String** | List of entitlement IDs to provision for created machine account. Up to 20 unique entitlements are allowed. Use either `entitlements` or `entitlementIds`, depending on which one your tenant supports; sending a non-empty list that your tenant does not support returns `400`. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountCreateRequestInputV2 = Initialize-MachineAccountCreateRequestInputV2  -SubtypeId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -SourceId 2c9180835d191a86015d28455b4a2329 `
 -FormId f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -OwnerIdentityId 18104e7e499b4e23882d6323344ab6bc `
 -MachineIdentityId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -Environment Dev `
 -Description Requesting machine account for tracking the inventory. `
 -UserInput {"target":"AD Source","description":"Inventory tracking"} `
 -Entitlements [{"id":"2c91808a7624751a01762f19d67c220e","comment":"Needed to read the inventory share.","startDate":"2026-11-01T00:00:00Z","removeDate":"2027-11-01T00:00:00Z"}] `
 -EntitlementIds ["6d28b7c1620c49c6b6d5cbf81eb4b5fa","2c91808a7624751a01762f19d67c220e"]
```

- Convert the resource to JSON
```powershell
$MachineAccountCreateRequestInputV2 | ConvertTo-JSON
```


[[Back to top]](#) 

