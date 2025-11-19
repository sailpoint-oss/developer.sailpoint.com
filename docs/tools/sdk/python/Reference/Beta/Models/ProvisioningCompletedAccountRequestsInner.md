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
**account_id** | **str** | Unique idenfier of the account being provisioned. | [optional] 
**account_operation** |  **Enum** [  'Create',    'Modify',    'Enable',    'Disable',    'Unlock',    'Delete' ] | Provisioning operation. | [required]
**provisioning_result** |  **Enum** [  'SUCCESS',    'PENDING',    'FAILED' ] | Overall result of the provisioning transaction. | [required]
**provisioning_target** | **str** | Nme of the selected provisioning channel selected. This could be the same as the source, or it could be a Service Desk Integration Module (SDIM). | [required]
**ticket_id** | **str** | Reference to a tracking number for if this is sent to a SDIM. | [optional] 
**attribute_requests** | [**[]ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner**](provisioning-completed-account-requests-inner-attribute-requests-inner) | List of attributes to include in the provisioning transaction. | [optional] 
}

## Example

```python
from sailpoint.beta.models.provisioning_completed_account_requests_inner import ProvisioningCompletedAccountRequestsInner

provisioning_completed_account_requests_inner = ProvisioningCompletedAccountRequestsInner(
source=sailpoint.beta.models.provisioning_completed_account_requests_inner_source.ProvisioningCompleted_accountRequests_inner_source(
                    id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
account_id='CN=Rob.Robertson,ou=csm,ou=sales,dc=helpco,dc=com',
account_operation='Modify',
provisioning_result=SUCCESS,
provisioning_target='Corp AD',
ticket_id='72619262',
attribute_requests=[
                    sailpoint.beta.models.provisioning_completed_account_requests_inner_attribute_requests_inner.ProvisioningCompleted_accountRequests_inner_attributeRequests_inner(
                        attribute_name = 'memberOf', 
                        attribute_value = 'CN=sales,DC=helpco,DC=com', 
                        operation = 'Add', )
                    ]
)

```
[[Back to top]](#) 

