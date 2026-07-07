---
id: promptinsight
title: Promptinsight
pagination_label: Promptinsight
sidebar_label: Promptinsight
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Promptinsight', 'Promptinsight'] 
slug: /tools/sdk/powershell/promptinsights/models/promptinsight
tags: ['SDK', 'Software Development Kit', 'Promptinsight', 'Promptinsight']
---


# Promptinsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | **System.DateTime** | Event time in UTC. | [optional] 
**User** | **String** | User identifier or display name. | [optional] 
**Agent** | **String** | The AI agent that processed the prompt. | [optional] 
**PolicyDecision** |  **Enum** [  "ALLOWED",    "REDACTED" ] | The policy decision applied to the prompt. | [optional] 
**Category** |  **Enum** [  "ANOMALIES",    "DATA_UPLOADS",    "MCP_TOOL_CALLS" ] | The category of the prompt security finding. | [optional] 
**Severity** |  **Enum** [  "LOW",    "MEDIUM",    "HIGH",    "CRITICAL" ] | The severity of the prompt security finding. | [optional] 
**Reason** | **String** | Human-readable or structured reason for the policy decision. | [optional] 
**Rule** | **String** | The rule that matched the prompt. | [optional] 
**Policy** | **String** | The policy that matched the prompt. | [optional] 

## Examples

- Prepare the resource
```powershell
$Promptinsight = Initialize-Promptinsight  -Timestamp 2026-05-14T10:01:02.345Z `
 -User john.doe@mail.com `
 -Agent ChatGPT `
 -PolicyDecision REDACTED `
 -Category ANOMALIES `
 -Severity HIGH `
 -Reason Policy matched suspicious system override pattern `
 -Rule Prompt Guard - Clean `
 -Policy PG-INFO:None
```

- Convert the resource to JSON
```powershell
$Promptinsight | ConvertTo-JSON
```


[[Back to top]](#) 

