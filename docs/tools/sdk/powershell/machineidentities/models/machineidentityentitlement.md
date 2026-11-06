# Machineidentityentitlement

# Machineidentityentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**AccountId** | **String** | ID of the machine account that holds the entitlement. | [optional] 
**AccountName** | **String** | Name of the machine account that holds the entitlement. | [optional] 
**Attribute** | **String** | Name of the account attribute that contains the entitlement. | [optional] 
**Value** | **String** | Value of the entitlement. | [optional] 
**Description** | **String** | Description of the entitlement. | [optional] 
**CloudGoverned** | **Boolean** | Indicates whether the entitlement is governed in the cloud. | [optional] [default to $false]
**Source** | [**MachineIdentityEntitlementSource**](machine-identity-entitlement-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineidentityentitlement = Initialize-Machineidentityentitlement  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -AccountId 2c9180858082150f0180893dbaf44201 `
 -AccountName svc-batch-runner `
 -Attribute memberOf `
 -Value CN=Finance Readers,OU=Groups,DC=example,DC=com `
 -Description Read access to finance reports `
 -CloudGoverned false `
 -Source null
```

- Convert the resource to JSON
```powershell
$Machineidentityentitlement | ConvertTo-JSON
```


[[Back to top]](#) 

