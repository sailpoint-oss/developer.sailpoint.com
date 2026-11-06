# IdentitySummary

# IdentitySummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this identity summary | [optional] 
**name** | **str** | Human-readable display name of identity | [optional] 
**identity_id** | **str** | ID of the identity that this summary represents | [optional] 
**completed** | **bool** | Indicates if all access items for this summary have been decided on | [optional] [default to False]
\}

## Example

```python
from sailpoint.account_activities.models.identity_summary import IdentitySummary

identity_summary = IdentitySummary(
id='ff80818155fe8c080155fe8d925b0316',
name='SailPoint Services',
identity_id='c15b9f5cca5a4e9599eaa0e64fa921bd',
completed=True
)

```
[[Back to top]](#) 

