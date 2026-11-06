# BaseCreateApplicationRequest

# BaseCreateApplicationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationType** | **ApplicationType** |  | [required]
**Name** | **String** | The display name of the application. | [required]
**Description** | **String** | A brief description of the application and its purpose. | [optional] 
**Tags** | [**[]Int64StringKeyValuePair**](int64-string-key-value-pair) | A list of tags to categorize or identify the application. | [optional] 
**IdentityCollectorId** | **Int64** | The unique identifier for the identity collector associated with this application. | [optional] 
**AdIdentityCollectorId** | **Int64** | The unique identifier for the AD identity collector. | [optional] 
**NisIdentityCollectorId** | **Int64** | The unique identifier for the NIS identity collector. | [optional] 
**ApplicationCrawlerSettings** | [**ApplicationCrawlerSettings**](application-crawler-settings) |  | [optional] 
**PermissionCollectorSettings** | [**PermissionCollectorSettings**](permission-collector-settings) |  | [optional] 
**DataClassificationSettings** | [**DataClassificationSettings**](data-classification-settings) |  | [optional] 
**ActivityConfigurationSettings** | [**ActivityConfigurationSettings**](activity-configuration-settings) |  | [optional] 
**ExecuteNow** | **Boolean** | If true, the application setup will be executed immediately after creation. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$BaseCreateApplicationRequest = Initialize-BaseCreateApplicationRequest  -ApplicationType null `
 -Name HR File Server `
 -Description Stores HR documents and employee records. `
 -Tags [{"key":1,"value":"Confidential"}] `
 -IdentityCollectorId 123456789 `
 -AdIdentityCollectorId 987654321 `
 -NisIdentityCollectorId 192837465 `
 -ApplicationCrawlerSettings null `
 -PermissionCollectorSettings null `
 -DataClassificationSettings null `
 -ActivityConfigurationSettings null `
 -ExecuteNow false
```

- Convert the resource to JSON
```powershell
$BaseCreateApplicationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

