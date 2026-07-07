---
id: accessprofileapprovalscheme
title: Accessprofileapprovalscheme
pagination_label: Accessprofileapprovalscheme
sidebar_label: Accessprofileapprovalscheme
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessprofileapprovalscheme', 'Accessprofileapprovalscheme'] 
slug: /tools/sdk/python/dimensions/models/accessprofileapprovalscheme
tags: ['SDK', 'Software Development Kit', 'Accessprofileapprovalscheme', 'Accessprofileapprovalscheme']
---

# Accessprofileapprovalscheme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver_type** |  **Enum** [  'APP_OWNER',    'OWNER',    'SOURCE_OWNER',    'MANAGER',    'GOVERNANCE_GROUP',    'WORKFLOW',    'ALL_OWNERS',    'ADDITIONAL_OWNER',    'ADDITIONAL_GOVERNANCE_GROUP' ] | Describes the individual or group that is responsible for an approval step. These are the possible values: **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.  **ALL_OWNERS**: All owners of the Access Profile, including the primary owner and any secondary owners  **ADDITIONAL_OWNER**: An additional owner of the Access Profile, the ID of which is specified by the **approverId** field  **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**approver_id** | **str** | Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP. | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.accessprofileapprovalscheme import Accessprofileapprovalscheme

accessprofileapprovalscheme = Accessprofileapprovalscheme(
approver_type='GOVERNANCE_GROUP',
approver_id='46c79819-a69f-49a2-becb-12c971ae66c6'
)

```
[[Back to top]](#) 

