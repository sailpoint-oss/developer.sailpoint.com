---
id: load-accounts-task-task
title: LoadAccountsTaskTask
pagination_label: LoadAccountsTaskTask
sidebar_label: LoadAccountsTaskTask
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'LoadAccountsTaskTask'] 
slug: /tools/sdk/powershell/beta/models/load-accounts-task-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTask']
---


# LoadAccountsTaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** |  Pointer to **String** | Type of task this task represents | [optional] 
**Name** |  Pointer to **String** | The name of the aggregation process | [optional] 
**Description** |  Pointer to **String** | The description of the task | [optional] 
**Launcher** |  Pointer to **String** | The user who initiated the task | [optional] 
**Created** |  Pointer to **System.DateTime** | The Task creation date | [optional] 
**Launched** |  Pointer to **System.DateTime** | The task start date | [optional] 
**Completed** |  Pointer to **System.DateTime** | The task completion date | [optional] 
**CompletionStatus** |  Pointer to  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR" ] | Task completion status. | [optional] 
**ParentName** |  Pointer to **String** | Name of the parent task if exists. | [optional] 
**Messages** |  Pointer to [**[]LoadAccountsTaskTaskMessagesInner**](load-accounts-task-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** |  Pointer to **String** | Current task state. | [optional] 
**Attributes** |  Pointer to [**LoadAccountsTaskTaskAttributes**](load-accounts-task-task-attributes) |  | [optional] 
**Returns** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Return values from the task | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTaskTask = Initialize-BetaLoadAccountsTaskTask  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type QUARTZ `
 -Name Cloud Account Aggregation `
 -Description Aggregate from the specified application `
 -Launcher John Doe `
 -Created null `
 -Launched null `
 -Completed null `
 -CompletionStatus Success `
 -ParentName Audit Report `
 -Messages [] `
 -Progress Initializing... `
 -Attributes null `
 -Returns [{displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_OPTIMIZED, attributeName=optimizedAggregation}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_IGNORED, attributeName=ignored}, {displayLabel=TASK_OUT_UNCHANGED_ACCOUNTS, attributeName=optimized}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CREATED, attributeName=created}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_UPDATED, attributeName=updated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_DELETED, attributeName=deleted}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGER_CHANGES, attributeName=managerChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_BUSINESS_ROLE_CHANGES, attributeName=detectedRoleChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_EXCEPTION_CHANGES, attributeName=exceptionChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICIES, attributeName=policies}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICY_VIOLATIONS, attributeName=policyViolations}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICY_NOTIFICATIONS, attributeName=policyNotifications}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCORES_CHANGED, attributeName=scoresChanged}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SNAPSHOTS_CREATED, attributeName=snapshotsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CREATED, attributeName=scopesCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CORRELATED, attributeName=scopesCorrelated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_SELECTED, attributeName=scopesSelected}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_DORMANT, attributeName=scopesDormant}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_UNSCOPED_IDENTITIES, attributeName=unscopedIdentities}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_CREATED, attributeName=certificationsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_DELETED, attributeName=certificationsDeleted}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS_GENERATED, attributeName=applicationsGenerated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED, attributeName=managedAttributesCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP, attributeName=managedAttributesCreatedByApplication}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_IDENTITYENTITLEMENTS_CREATED, attributeName=identityEntitlementsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_GROUPS_CREATED, attributeName=groupsCreated}]
```

- Convert the resource to JSON
```powershell
$LoadAccountsTaskTask | ConvertTo-JSON
```


[[Back to top]](#) 

