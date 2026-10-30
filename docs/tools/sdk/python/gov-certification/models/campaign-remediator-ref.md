# CampaignRemediatorRef

# CampaignRemediatorRef

This determines who remediation tasks will be assigned to. Remediation tasks are created for each revoke decision on items in the campaign. The only legal remediator type is 'IDENTITY', and the chosen identity must be a Role Admin or Org Admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the remediator. | [required]
**name** | **str** | The name of the remediator. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_remediator_ref import CampaignRemediatorRef

campaign_remediator_ref = CampaignRemediatorRef(
id='2c90ad2a70ace7d50170acf22ca90010',
name='Role Admin'
)

```
[[Back to top]](#) 

