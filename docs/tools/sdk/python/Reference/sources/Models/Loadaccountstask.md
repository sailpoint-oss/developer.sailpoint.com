---
id: loadaccountstask
title: Loadaccountstask
pagination_label: Loadaccountstask
sidebar_label: Loadaccountstask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Loadaccountstask', 'Loadaccountstask'] 
slug: /tools/sdk/python/sources/models/loadaccountstask
tags: ['SDK', 'Software Development Kit', 'Loadaccountstask', 'Loadaccountstask']
---

# Loadaccountstask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | The status of the result | [optional] [default to True]
**task** | [**LoadaccountstaskTask**](loadaccountstask-task) |  | [optional] 
}

## Example

```python
from sailpoint.sources.models.loadaccountstask import Loadaccountstask

loadaccountstask = Loadaccountstask(
success=True,
task=sailpoint.sources.models.loadaccountstask_task.loadaccountstask_task(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    type = 'QUARTZ', 
                    name = 'Cloud Account Aggregation', 
                    description = 'Aggregate from the specified application', 
                    launcher = 'John Doe', 
                    created = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    launched = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    completed = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    completion_status = 'Success', 
                    parent_name = 'Audit Report', 
                    messages = [], 
                    progress = 'Initializing...', 
                    attributes = {
                        'key' : None
                        }, 
                    returns = [
                        [{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS","attributeName":"applications"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_TOTAL","attributeName":"total"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_OPTIMIZED","attributeName":"optimizedAggregation"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_IGNORED","attributeName":"ignored"},{"displayLabel":"TASK_OUT_UNCHANGED_ACCOUNTS","attributeName":"optimized"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_CREATED","attributeName":"created"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_UPDATED","attributeName":"updated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_DELETED","attributeName":"deleted"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_MANAGER_CHANGES","attributeName":"managerChanges"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_BUSINESS_ROLE_CHANGES","attributeName":"detectedRoleChanges"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_EXCEPTION_CHANGES","attributeName":"exceptionChanges"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_POLICIES","attributeName":"policies"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_POLICY_VIOLATIONS","attributeName":"policyViolations"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_POLICY_NOTIFICATIONS","attributeName":"policyNotifications"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_SCORES_CHANGED","attributeName":"scoresChanged"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_SNAPSHOTS_CREATED","attributeName":"snapshotsCreated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CREATED","attributeName":"scopesCreated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CORRELATED","attributeName":"scopesCorrelated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_SELECTED","attributeName":"scopesSelected"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_DORMANT","attributeName":"scopesDormant"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_UNSCOPED_IDENTITIES","attributeName":"unscopedIdentities"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_CREATED","attributeName":"certificationsCreated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_DELETED","attributeName":"certificationsDeleted"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS_GENERATED","attributeName":"applicationsGenerated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED","attributeName":"managedAttributesCreated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP","attributeName":"managedAttributesCreatedByApplication"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_IDENTITYENTITLEMENTS_CREATED","attributeName":"identityEntitlementsCreated"},{"displayLabel":"TASK_OUT_ACCOUNT_AGGREGATION_GROUPS_CREATED","attributeName":"groupsCreated"}]
                        ], )
)

```
[[Back to top]](#) 

