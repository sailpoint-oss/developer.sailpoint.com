# RoleV2

# RoleV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result. | [optional] 
**Name** | **String** | The human-readable display name of the Role | [required]
**Created** | **System.DateTime** | Date the Role was created | [optional] [readonly] 
**Modified** | **System.DateTime** | Date the Role was last modified. | [optional] [readonly] 
**Description** | **String** | A human-readable description of the Role | [optional] 
**Owner** | [**OwnerReference**](owner-reference) |  | [required]
**AdditionalOwners** | [**[]AdditionalOwnerRef**](additional-owner-ref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 
**AccessProfiles** | [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**Entitlements** | [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**Membership** | [**RoleMembershipSelector**](role-membership-selector) |  | [optional] 
**LegacyMembershipInfo** | **map[string]AnyType** | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [optional] 
**Enabled** | **Boolean** | Whether the Role is enabled or not. | [optional] [default to $false]
**Requestable** | **Boolean** | Whether the Role can be the target of access requests. | [optional] [default to $false]
**AccessRequestConfig** | [**RequestabilityForRole**](requestability-for-role) |  | [optional] 
**RevocationRequestConfig** | [**RevocabilityForRole**](revocability-for-role) |  | [optional] 
**Segments** | **[]String** | List of IDs of segments, if any, to which this Role is assigned. | [optional] 
**Dimensional** | **Boolean** | Whether the Role is dimensional. | [optional] [default to $false]
**DimensionRefs** | [**[]DimensionRef**](dimension-ref) | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [optional] 
**AccessModelMetadata** | [**AttributeDTOList**](attribute-dto-list) |  | [optional] 
**PrivilegeLevel** | [**RolePrivilegeLevel**](role-privilege-level) |  | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$RoleV2 = Initialize-RoleV2  -Id 2c918086749d78830174a1a40e121518 `
 -Name Role 2567 `
 -Created 2021-03-01T22:32:58.104Z `
 -Modified 2021-03-02T20:22:28.104Z `
 -Description Read-only access to the finance reporting system `
 -Owner null `
 -AdditionalOwners null `
 -AccessProfiles null `
 -Entitlements null `
 -Membership null `
 -LegacyMembershipInfo {"type":"IDENTITY_LIST"} `
 -Enabled true `
 -Requestable true `
 -AccessRequestConfig null `
 -RevocationRequestConfig null `
 -Segments ["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"] `
 -Dimensional null `
 -DimensionRefs null `
 -AccessModelMetadata null `
 -PrivilegeLevel null
```

- Convert the resource to JSON
```powershell
$RoleV2 | ConvertTo-JSON
```


[[Back to top]](#) 

