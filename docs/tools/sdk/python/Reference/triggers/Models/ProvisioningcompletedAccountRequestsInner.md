---
id: provisioningcompleted-account-requests-inner
title: ProvisioningcompletedAccountRequestsInner
pagination_label: ProvisioningcompletedAccountRequestsInner
sidebar_label: ProvisioningcompletedAccountRequestsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningcompletedAccountRequestsInner', 'ProvisioningcompletedAccountRequestsInner'] 
slug: /tools/sdk/python/triggers/models/provisioningcompleted-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedAccountRequestsInner', 'ProvisioningcompletedAccountRequestsInner']
---

# ProvisioningcompletedAccountRequestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**ProvisioningcompletedAccountRequestsInnerSource**](provisioningcompleted-account-requests-inner-source) |  | [required]
**account_id** | **str** | The unique idenfier of the account being provisioned. | [optional] 
**account_operation** | **str** | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | [required]
**provisioning_result** |  **Enum** [  'SUCCESS',    'PENDING',    'FAILED' ] | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | [required]
**provisioning_target** | **str** | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | [required]
**ticket_id** | **str** | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [optional] 
**attribute_requests** | [**[]ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner**](provisioningcompleted-account-requests-inner-attribute-requests-inner) | A list of attributes as part of the provisioning transaction. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.provisioningcompleted_account_requests_inner import ProvisioningcompletedAccountRequestsInner

provisioningcompleted_account_requests_inner = ProvisioningcompletedAccountRequestsInner(
source=sailpoint.triggers.models.provisioningcompleted_account_requests_inner_source.provisioningcompleted_accountRequests_inner_source(
                    id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
account_id='CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com',
account_operation='Modify',
provisioning_result='SUCCESS',
provisioning_target='Corp AD',
ticket_id='72619262',
attribute_requests=[
                    sailpoint.triggers.models.provisioningcompleted_account_requests_inner_attribute_requests_inner.provisioningcompleted_accountRequests_inner_attributeRequests_inner(
                        attribute_name = 'memberOf', 
                        attribute_value = 'CN=jedi,DC=starwars,DC=com', 
                        operation = 'Add', )
                    ]
)

```
[[Back to top]](#) 

