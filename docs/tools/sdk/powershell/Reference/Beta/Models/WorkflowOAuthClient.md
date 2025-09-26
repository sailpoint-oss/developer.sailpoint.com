---
id: beta-workflow-o-auth-client
title: WorkflowOAuthClient
pagination_label: WorkflowOAuthClient
sidebar_label: WorkflowOAuthClient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowOAuthClient', 'BetaWorkflowOAuthClient'] 
slug: /tools/sdk/powershell/beta/models/workflow-o-auth-client
tags: ['SDK', 'Software Development Kit', 'WorkflowOAuthClient', 'BetaWorkflowOAuthClient']
---


# WorkflowOAuthClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | OAuth client ID for the trigger. This is a UUID generated upon creation. | [optional] 
**Secret** | **String** | OAuthClient secret. | [optional] 
**Url** | **String** | URL for the external trigger to invoke | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowOAuthClient = Initialize-BetaWorkflowOAuthClient  -Id 1a58c03a6bf64dc2876f6988c6e2c7b7 `
 -Secret 00cc24a7fe810fe06a7cb38bc168ae104d703c7abb296f9944dc68e69ddb578b `
 -Url https://example-tenant.api.identitynow.com/beta/workflows/execute/external/c17bea3a-574d-453c-9e04-4365fbf5af0b
```

- Convert the resource to JSON
```powershell
$WorkflowOAuthClient | ConvertTo-JSON
```


[[Back to top]](#) 

