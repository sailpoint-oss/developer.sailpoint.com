# SetLifecycleStateV1200Response

# SetLifecycleStateV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** | **String** | ID of the IdentityRequest object that is generated when the workflow launches. To follow the IdentityRequest, you can provide this ID with a [Get Account Activity request](https://developer.sailpoint.com/docs/api/get-account-activity-v-1). The response will contain relevant information about the IdentityRequest, such as its status. | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateV1200Response = Initialize-SetLifecycleStateV1200Response  -AccountActivityId 2c9180837ab5b716017ab7c6c9ef1e20
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

