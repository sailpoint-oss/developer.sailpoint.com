# PassThroughEntitlement

# PassThroughEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id for the entitlement | [optional] 
**Name** | **String** | The name of the entitlement | [optional] 
**Created** | **System.DateTime** | Time when the entitlement was created | [optional] 
**Modified** | **System.DateTime** | Time when the entitlement was last modified | [optional] 
**Attribute** | **String** | The entitlement attribute name | [optional] 
**Value** | **String** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | **String** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**Privileged** | **Boolean** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility. | [optional] [default to $false]
**CloudGoverned** | **Boolean** | Indicates if the entitlement is cloud governed | [optional] [default to $false]
**Description** | **String** | Information about the entitlement | [optional] 
**Requestable** | **Boolean** | Indicates if the entitlement is requestable | [optional] [default to $false]
**Attributes** | **map[string]AnyType** | A map of free-form key-value pairs from the source system | [optional] 
**Source** | [**SourceReferenceDTO**](source-reference-dto) |  | [optional] 
**Owner** | [**OwnerReferenceDTO**](owner-reference-dto) |  | [optional] 
**DirectPermissions** | [**[]PermissionDTO**](permission-dto) |  | [optional] 
**Segments** | **[]String** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**ManuallyUpdatedFields** | [**ManuallyUpdatedFieldsDTO**](manually-updated-fields-dto) |  | [optional] 
**ContainsDataAccess** | **Boolean** | True if the entitlement has DAS data | [optional] [default to $false]
**DataAccess** | [**DataAccess2**](data-access2) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PassThroughEntitlement = Initialize-PassThroughEntitlement  -Id 2c918085718230600171993742c63558 `
 -Name CN=entitlement.bbb7c650 `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Attribute memberOf `
 -Value CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -SourceSchemaObjectType groups `
 -Privileged false `
 -CloudGoverned true `
 -Description Gives read/write access to the company database `
 -Requestable false `
 -Attributes {"fieldName":"fieldValue"} `
 -Source null `
 -Owner null `
 -DirectPermissions null `
 -Segments ["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"] `
 -ManuallyUpdatedFields null `
 -ContainsDataAccess true `
 -DataAccess null
```

- Convert the resource to JSON
```powershell
$PassThroughEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

