---
id: beta-workflow-o-auth-client
title: WorkflowOAuthClient
pagination_label: WorkflowOAuthClient
sidebar_label: WorkflowOAuthClient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowOAuthClient', 'BetaWorkflowOAuthClient'] 
slug: /tools/sdk/python/beta/models/workflow-o-auth-client
tags: ['SDK', 'Software Development Kit', 'WorkflowOAuthClient', 'BetaWorkflowOAuthClient']
---

# WorkflowOAuthClient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | OAuth client ID for the trigger. This is a UUID generated upon creation. | [optional] 
**secret** | **str** | OAuthClient secret. | [optional] 
**url** | **str** | URL for the external trigger to invoke | [optional] 
}

## Example

```python
from sailpoint.beta.models.workflow_o_auth_client import WorkflowOAuthClient

workflow_o_auth_client = WorkflowOAuthClient(
id='1a58c03a6bf64dc2876f6988c6e2c7b7',
secret='00cc24a7fe810fe06a7cb38bc168ae104d703c7abb296f9944dc68e69ddb578b',
url='https://tenant.api.identitynow.com/beta/workflows/execute/external/c17bea3a-574d-453c-9e04-4365fbf5af0b'
)

```
[[Back to top]](#) 

