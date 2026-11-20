# ExceptionCriteriaAccess

# ExceptionCriteriaAccess

Access reference with addition of boolean existing flag to indicate whether the access was extant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
**existing** | **bool** | Whether the subject identity already had that access or not | [optional] [default to False]
\}

## Example

```python
from sailpoint.sod_violations.models.exception_criteria_access import ExceptionCriteriaAccess

exception_criteria_access = ExceptionCriteriaAccess(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local',
existing=True
)

```
[[Back to top]](#) 

