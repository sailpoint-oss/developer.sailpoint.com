# Reviewer

# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the Identity or Governance Group | [optional] 
**Type** | **CampaignReviewerType** |  | [required]
**Name** | **String** | Human-readable display name of the Identity or Governance Group | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewer = Initialize-Reviewer  -Id 0fbe863c063c4c88a35fd7f17e8a3df5 `
 -Type null `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Reviewer | ConvertTo-JSON
```


[[Back to top]](#) 

