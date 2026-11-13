# IdentityV2

# IdentityV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the identity. | [optional] 
**Name** | **String** | Display name of the identity. | [optional] 
**Alias** | **String** | Alternate unique identifier of the identity. Equivalent to the account name on the authoritative source. | [optional] 
**Type** | **String** | The identity type. | [optional] 
**EmailAddress** | **String** | Email address of the identity. | [optional] 
**IdentityStatus** | **String** | The identity's status in the system. | [optional] 
**ProcessingState** | **String** | The processing state of the identity. | [optional] 
**Protected** | **Boolean** | Whether the identity is protected from accidental deletion or modification. | [optional] [default to $false]
**Correlated** | **Boolean** | Whether the identity is correlated to an authoritative account. | [optional] [default to $false]
**Inactive** | **Boolean** | Whether the identity is inactive. | [optional] [default to $false]
**IsManager** | **Boolean** | Whether this identity is a manager of another identity. | [optional] [default to $false]
**Locked** | **Boolean** | Whether the identity is locked. | [optional] [default to $false]
**Disabled** | **Boolean** | Whether the identity is disabled. | [optional] [default to $false]
**Manager** | [**IdentityV2Manager**](identity-v2-manager) |  | [optional] 
**LifecycleState** | [**IdentityV2LifecycleState**](identity-v2-lifecycle-state) |  | [optional] 
**Created** | **System.DateTime** | Creation date of the identity. | [optional] 
**Modified** | **System.DateTime** | Last modification date of the identity. | [optional] 
**Synced** | **System.DateTime** | Last time the identity was synchronized to search. | [optional] 
**LastRefresh** | **System.DateTime** | The last time the identity was refreshed by the system. | [optional] 
**PrivilegeLevel** | [**IdentityV2PrivilegeLevel**](identity-v2-privilege-level) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityV2 = Initialize-IdentityV2  -Id 01f04e428c484542a241dc89c303b178 `
 -Name John Mathews `
 -Alias john.mathews `
 -Type HUMAN `
 -EmailAddress john.mathews@example.com `
 -IdentityStatus ACTIVE `
 -ProcessingState OK `
 -Protected false `
 -Correlated true `
 -Inactive false `
 -IsManager true `
 -Locked false `
 -Disabled false `
 -Manager null `
 -LifecycleState null `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z `
 -Synced 2023-01-03T21:16:22.432Z `
 -LastRefresh 2020-11-22T15:42:31.123Z `
 -PrivilegeLevel null
```

- Convert the resource to JSON
```powershell
$IdentityV2 | ConvertTo-JSON
```


[[Back to top]](#) 

