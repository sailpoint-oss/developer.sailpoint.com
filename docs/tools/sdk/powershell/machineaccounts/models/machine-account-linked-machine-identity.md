# MachineAccountLinkedMachineIdentity

# MachineAccountLinkedMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | The description of the machine identity. | [optional] 
**Attributes** | **map[string]AnyType** | The attributes of the machine identity, including the attributes read from the source. | [optional] 
**ManuallyEdited** | **Boolean** | Indicates whether the machine identity has been manually edited. | [optional] [default to $false]
**ManuallyCreated** | **Boolean** | Indicates whether the machine identity was created manually rather than by aggregation. | [optional] [default to $false]
**Owners** | [**MachineAccountLinkedMachineIdentityAllOfOwners**](machine-account-linked-machine-identity-all-of-owners) |  | [optional] 
**Subtype** | **String** | The subtype of the machine identity. | [optional] 
**SourceId** | **String** | ID of the source the machine identity comes from. | [optional] 
**Uuid** | **String** | The UUID of the machine identity, as read from the source. | [optional] 
**NativeIdentity** | **String** | The native identity of the machine identity, as read from the source. | [optional] 
**DatasetId** | **String** | ID of the dataset the machine identity was aggregated from. | [optional] 
**Source** | [**BaseReferenceDto**](base-reference-dto) | The source the machine identity comes from. | [optional] 
**UserEntitlements** | [**[]MachineAccountLinkedMachineIdentityAllOfUserEntitlements**](machine-account-linked-machine-identity-all-of-user-entitlements) | The user entitlements associated with the machine identity. | [optional] 
**ExistsOnSource** |  **Enum** [  "TRUE",    "FALSE",    "NOT_APPLICABLE" ] | Indicates whether the machine identity still exists on the source. | [optional] 
**BusinessApplicationRefs** | [**[]MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs**](machine-account-linked-machine-identity-all-of-business-application-refs) | The business applications linked to the machine identity. This field is omitted when business application links are not available for the machine identity. | [optional] 
**EffectiveSanctionedStatus** |  **Enum** [  "SANCTIONED",    "UNSANCTIONED",    "UNKNOWN" ] | The sanctioned status derived from the linked business applications. This field is present only when `businessApplicationRefs` is present. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountLinkedMachineIdentity = Initialize-MachineAccountLinkedMachineIdentity  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Description Service identity for nightly batch jobs `
 -Attributes {"Region":"EU"} `
 -ManuallyEdited false `
 -ManuallyCreated false `
 -Owners null `
 -Subtype Application `
 -SourceId 8d3e0094e99445de98eef6c75e25jc04 `
 -Uuid f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -NativeIdentity abc:123:dddd `
 -DatasetId aws-iam-roles `
 -Source null `
 -UserEntitlements null `
 -ExistsOnSource NOT_APPLICABLE `
 -BusinessApplicationRefs null `
 -EffectiveSanctionedStatus SANCTIONED
```

- Convert the resource to JSON
```powershell
$MachineAccountLinkedMachineIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

