# MachineAccountEntitlement

# MachineAccountEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Attribute** | **String** | The name of the account attribute that holds the entitlement. | [optional] 
**Value** | **String** | The value of the entitlement. | [optional] 
**Description** | **String** | The description of the entitlement. | [optional] 
**SourceSchemaObjectType** | **String** | The source schema object type of the entitlement. | [optional] 
**Privileged** | **Boolean** | Indicates whether the entitlement is privileged. | [optional] [default to $false]
**CloudGoverned** | **Boolean** | Indicates whether the entitlement is governed in the cloud. | [optional] [default to $false]
**Requestable** | **Boolean** | Indicates whether the entitlement can be requested. | [optional] [default to $false]
**Attributes** | **map[string]AnyType** | Additional attributes of the entitlement. | [optional] 
**Source** | [**BaseReferenceDto**](base-reference-dto) | The source the entitlement belongs to. | [optional] 
**Owner** | [**BaseReferenceDto**](base-reference-dto) | The owner of the entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountEntitlement = Initialize-MachineAccountEntitlement  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Attribute memberOf `
 -Value CN=Administrators,CN=Builtin,DC=example,DC=com `
 -Description Members can fully administer the domain. `
 -SourceSchemaObjectType group `
 -Privileged true `
 -CloudGoverned false `
 -Requestable true `
 -Attributes {"groupType":"security"} `
 -Source null `
 -Owner null
```

- Convert the resource to JSON
```powershell
$MachineAccountEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

