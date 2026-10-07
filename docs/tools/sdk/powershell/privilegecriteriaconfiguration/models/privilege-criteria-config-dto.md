# PrivilegeCriteriaConfigDTO

# PrivilegeCriteriaConfigDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The Id of the task which is executing the bulk update. | [optional] 
**SourceId** | **String** | The Id of the source that the criteria configuration is applied to. | [optional] 
**Config** | **SystemCollectionsHashtable** | The configuration settings for privilege criteria evaluation.  | [optional] 
**Created** | **String** | The date and time when the privilege criteria configuration was created. | [optional] 
**Modified** | **String** | The date and time when the privilege criteria configuration was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$PrivilegeCriteriaConfigDTO = Initialize-PrivilegeCriteriaConfigDTO  -Id 2c9180867817ac4d017817c491119a20 `
 -SourceId c42c45d8d7c04d2da64d215cd8c32f21 `
 -Config {"globalPrivilegeLevelEnabled":true,"privilegeClassificationMode":"SINGLE_PRIVILEGE_LEVEL","singlePrivilegeLevel.privilegeLevel":"HIGH","criteriaPrivilegeLevel.connectorHighEnabled":true,"criteriaPrivilegeLevel.connectorMediumEnabled":true,"criteriaPrivilegeLevel.connectorLowEnabled":true,"criteriaPrivilegeLevel.customHighEnabled":true,"criteriaPrivilegeLevel.customMediumEnabled":true,"criteriaPrivilegeLevel.customLowEnabled":true} `
 -Created 2024-01-10T12:00:00Z `
 -Modified 2024-01-15T12:00:00Z
```

- Convert the resource to JSON
```powershell
$PrivilegeCriteriaConfigDTO | ConvertTo-JSON
```


[[Back to top]](#) 

