---
id: beta-provisioning-completed-account-requests-inner
title: ProvisioningCompletedAccountRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCompletedAccountRequestsInner', 'BetaProvisioningCompletedAccountRequestsInner'] 
slug: /tools/sdk/python/beta/models/provisioning-completed-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInner', 'BetaProvisioningCompletedAccountRequestsInner']
---

# ProvisioningCompletedAccountRequestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**ProvisioningCompletedAccountRequestsInnerSource**](provisioning-completed-account-requests-inner-source) |  | [required]
**account_id** | **str** | The unique idenfier of the account being provisioned. | [optional] 
**account_operation** | **str** | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | [required]
**provisioning_result** |  **Enum** [  'SUCCESS',    'PENDING',    'FAILED' ] | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | [required]
**provisioning_target** | **str** | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | [required]
**ticket_id** | **str** | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [optional] 
**attribute_requests** | [**[]ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner**](provisioning-completed-account-requests-inner-attribute-requests-inner) | A list of attributes as part of the provisioning transaction. | [optional] 
}

## Example

```python
from sailpoint.beta.models.provisioning_completed_account_requests_inner import ProvisioningCompletedAccountRequestsInner

provisioning_completed_account_requests_inner = ProvisioningCompletedAccountRequestsInner(
source=sailpoint.beta.models.provisioning_completed_account_requests_inner_source.ProvisioningCompleted_accountRequests_inner_source(
                    id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
account_id='CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com',
account_operation='Modify',
provisioning_result=SUCCESS,
provisioning_target='Corp AD',
ticket_id='72619262',
attribute_requests=[
                    sailpoint.beta.models.provisioning_completed_account_requests_inner_attribute_requests_inner.ProvisioningCompleted_accountRequests_inner_attributeRequests_inner(
                        attribute_name = 'memberOf', 
                        attribute_value = 'CN=jedi,DC=starwars,DC=com', 
                        operation = Add, )
                    ]
)

```
[[Back to top]](#) 

