# LifecycleResourceSummary

# LifecycleResourceSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the machine identity. | [optional] 
**ResourceId** | **String** | ID of the machine identity in its source system. | [optional] 
**Name** | **String** | Name of the machine identity. | [optional] 
**SourceId** | **String** | ID of the source the machine identity belongs to. | [optional] 
**SourceName** | **String** | Name of the source the machine identity belongs to. | [optional] 
**Subtype** | **String** | Type of machine identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleResourceSummary = Initialize-LifecycleResourceSummary  -Id 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0 `
 -ResourceId aws:bedrock:agent-42 `
 -Name Support Agent `
 -SourceId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -SourceName AWS Bedrock `
 -Subtype AI_AGENT
```

- Convert the resource to JSON
```powershell
$LifecycleResourceSummary | ConvertTo-JSON
```


[[Back to top]](#) 

