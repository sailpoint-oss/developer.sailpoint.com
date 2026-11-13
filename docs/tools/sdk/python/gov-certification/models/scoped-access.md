# ScopedAccess

# ScopedAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **ScopedAccessType** |  | [optional] 
**id** | **str** | Unique identifier of the access item. | [optional] 
**name** | **str** | Name of the access item. | [optional] 
**description** | **str** | Description of the access item. | [optional] 
**source_name** | **str** | Name of the source that provides this access. | [optional] 
**privileged** | **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access item is privileged. Retained for backward compatibility. | [optional] [default to False]
**attribute_name** | **str** | Name of the attribute that defines this access. | [optional] 
**attribute_value** | **str** | Value of the attribute that defines this access. | [optional] 
**has_data_access** | **bool** | Indicates whether this access grants data access. | [optional] [default to False]
\}

## Example

```python
from sailpoint.gov_certification.models.scoped_access import ScopedAccess

scoped_access = ScopedAccess(
type='ENTITLEMENT',
id='2c918085718230600171993742c63558',
name='CN=entitlement.bbb7c650',
description='Gives read/write access to the company database',
source_name='Active Directory',
privileged=False,
attribute_name='memberOf',
attribute_value='CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local',
has_data_access=False
)

```
[[Back to top]](#) 

