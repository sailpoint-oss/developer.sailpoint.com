# CampaignFilterInline

# CampaignFilterInline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mode** | **CampaignFilterType** |  | [required]
**CriteriaList** | [**[]Criteria**](criteria) | List of criteria. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignFilterInline = Initialize-CampaignFilterInline  -Mode null `
 -CriteriaList [{"criteriaType":"IDENTITY","criteriaProperty":"DISPLAY_NAME","criteriaValue":"support","operation":"EQUALS"}]
```

- Convert the resource to JSON
```powershell
$CampaignFilterInline | ConvertTo-JSON
```


[[Back to top]](#) 

