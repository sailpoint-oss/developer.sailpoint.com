# LifecycleCommentAuthorReference

# LifecycleCommentAuthorReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "WORKGROUP",    "API_TOKEN",    "SYSTEM" ] | Author category for the comment. | [optional] 
**Id** | **String** | Identifier of the comment author. | [optional] 
**Name** | **String** | Display name of the comment author. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleCommentAuthorReference = Initialize-LifecycleCommentAuthorReference  -Type IDENTITY `
 -Id 2c9180858082150f0180893dbaf44201 `
 -Name Pat Manager
```

- Convert the resource to JSON
```powershell
$LifecycleCommentAuthorReference | ConvertTo-JSON
```


[[Back to top]](#) 

