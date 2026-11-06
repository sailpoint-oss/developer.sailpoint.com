# AuditDetails

# AuditDetails

Audit details for the reassignment configuration of an identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Initial date and time when the record was created | [optional] 
**created_by** | [**Identity2**](identity2) |  | [optional] 
**modified** | **datetime** | Last modified date and time for the record | [optional] 
**modified_by** | [**Identity2**](identity2) |  | [optional] 
\}

## Example

```python
from sailpoint.work_reassignment.models.audit_details import AuditDetails

audit_details = AuditDetails(
created='2022-07-21T11:13:12.345Z',
created_by=sailpoint.work_reassignment.models.identity_2.Identity_2(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', ),
modified='2022-07-21T11:13:12.345Z',
modified_by=sailpoint.work_reassignment.models.identity_2.Identity_2(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

