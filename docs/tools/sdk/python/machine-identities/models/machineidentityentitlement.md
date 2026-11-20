# Machineidentityentitlement

# Machineidentityentitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**account_id** | **str** | ID of the machine account that holds the entitlement. | [optional] 
**account_name** | **str** | Name of the machine account that holds the entitlement. | [optional] 
**attribute** | **str** | Name of the account attribute that contains the entitlement. | [optional] 
**value** | **str** | Value of the entitlement. | [optional] 
**description** | **str** | Description of the entitlement. | [optional] 
**cloud_governed** | **bool** | Indicates whether the entitlement is governed in the cloud. | [optional] [default to False]
**source** | [**MachineIdentityEntitlementSource**](machine-identity-entitlement-source) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machineidentityentitlement import Machineidentityentitlement

machineidentityentitlement = Machineidentityentitlement(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
account_id='2c9180858082150f0180893dbaf44201',
account_name='svc-batch-runner',
attribute='memberOf',
value='CN=Finance Readers,OU=Groups,DC=example,DC=com',
description='Read access to finance reports',
cloud_governed=False,
source=
)

```
[[Back to top]](#) 

