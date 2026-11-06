# LifecycleResourceSummary

# LifecycleResourceSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Internal machine identity UUID for the lifecycle target. | [optional] 
**ResourceId** | **String** | Connector resource id for the lifecycle target. | [optional] 
**Name** | **String** | Display name of the lifecycle target. | [optional] 
**SourceId** | **String** | Source identifier for the lifecycle target. | [optional] 
**SourceName** | **String** | Source name for the lifecycle target. | [optional] 
**Subtype** | **String** | Machine identity subtype for the lifecycle target. | [optional] 

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

