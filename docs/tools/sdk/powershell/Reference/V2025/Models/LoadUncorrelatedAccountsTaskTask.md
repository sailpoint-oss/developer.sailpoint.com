---
id: v2025-load-uncorrelated-accounts-task-task
title: LoadUncorrelatedAccountsTaskTask
pagination_label: LoadUncorrelatedAccountsTaskTask
sidebar_label: LoadUncorrelatedAccountsTaskTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadUncorrelatedAccountsTaskTask', 'V2025LoadUncorrelatedAccountsTaskTask'] 
slug: /tools/sdk/powershell/v2025/models/load-uncorrelated-accounts-task-task
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTask', 'V2025LoadUncorrelatedAccountsTaskTask']
---


# LoadUncorrelatedAccountsTaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | **String** | Type of task this task represents | [optional] 
**Name** | **String** | The name of uncorrelated accounts process | [optional] 
**Description** | **String** | The description of the task | [optional] 
**Launcher** | **String** | The user who initiated the task | [optional] 
**Created** | **System.DateTime** | The Task creation date | [optional] 
**Launched** | **System.DateTime** | The task start date | [optional] 
**Completed** | **System.DateTime** | The task completion date | [optional] 
**CompletionStatus** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR" ] | Task completion status. | [optional] 
**ParentName** | **String** | Name of the parent task if exists. | [optional] 
**Messages** | [**[]LoadUncorrelatedAccountsTaskTaskMessagesInner**](load-uncorrelated-accounts-task-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** | **String** | Current task state. | [optional] 
**Attributes** | [**LoadUncorrelatedAccountsTaskTaskAttributes**](load-uncorrelated-accounts-task-task-attributes) |  | [optional] 
**Returns** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Return values from the task | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadUncorrelatedAccountsTaskTask = Initialize-V2025LoadUncorrelatedAccountsTaskTask  -Id 90b83a6bb737489494794f84cd3a51e6 `
 -Type QUARTZ `
 -Name Cloud Process Uncorrelated Accounts `
 -Description Processes uncorrelated accounts for the specified application. `
 -Launcher John Doe `
 -Created null `
 -Launched null `
 -Completed null `
 -CompletionStatus Success `
 -ParentName Audit Report `
 -Messages [] `
 -Progress Initializing... `
 -Attributes null `
 -Returns [{displayLabel=TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_IGNORED, attributeName=correlationFailures}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_FAILURES, attributeName=ignored}, {displayLabel=TASK_OUT_UNCHANGED_ACCOUNTS, attributeName=optimized}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION__CREATED, attributeName=created}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_UPDATED, attributeName=updated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_DELETED, attributeName=deleted}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGER_CHANGES, attributeName=managerChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_BUSINESS_ROLE_CHANGES, attributeName=detectedRoleChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_EXCEPTION_CHANGES, attributeName=exceptionChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICIES, attributeName=policies}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICY_VIOLATIONS, attributeName=policyViolations}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICY_NOTIFICATIONS, attributeName=policyNotifications}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCORES_CHANGED, attributeName=scoresChanged}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SNAPSHOTS_CREATED, attributeName=snapshotsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CREATED, attributeName=scopesCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CORRELATED, attributeName=scopesCorrelated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_SELECTED, attributeName=scopesSelected}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_DORMANT, attributeName=scopesDormant}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_UNSCOPED_IDENTITIES, attributeName=unscopedIdentities}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_CREATED, attributeName=certificationsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_DELETED, attributeName=certificationsDeleted}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS_GENERATED, attributeName=applicationsGenerated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED, attributeName=managedAttributesCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP, attributeName=managedAttributesCreatedByApplication}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_IDENTITYENTITLEMENTS_CREATED, attributeName=identityEntitlementsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_GROUPS_CREATED, attributeName=groupsCreated}]
```

- Convert the resource to JSON
```powershell
$LoadUncorrelatedAccountsTaskTask | ConvertTo-JSON
```


[[Back to top]](#) 

