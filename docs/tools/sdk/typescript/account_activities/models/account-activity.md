# AccountActivity

# AccountActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the account activity | [default to undefined]
**name** | **(optional)** `string` | The name of the activity | [default to undefined]
**created** | **(optional)** `string` | When the activity was first created | [default to undefined]
**modified** | **(optional)** `string` | When the activity was last modified | [default to undefined]
**completed** | **(optional)** `string` | When the activity was completed | [default to undefined]
**completionStatus** | **(optional)** `CompletionStatus` |  | [default to undefined]
**type** | **(optional)** `string` | The type of action the activity performed.  Please see the following list of types.  This list may grow over time.  - CloudAutomated - IdentityAttributeUpdate - appRequest - LifecycleStateChange - AccountStateUpdate - AccountAttributeUpdate - CloudPasswordRequest - Attribute Synchronization Refresh - Certification - Identity Refresh - Lifecycle Change Refresh   [Learn more here](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data).  | [default to undefined]
**requesterIdentitySummary** | **(optional)** `IdentitySummary` |  | [default to undefined]
**targetIdentitySummary** | **(optional)** `IdentitySummary` |  | [default to undefined]
**errors** | **(optional)** `Array<string>` | A list of error messages, if any, that were encountered. | [default to undefined]
**warnings** | **(optional)** `Array<string>` | A list of warning messages, if any, that were encountered. | [default to undefined]
**items** | **(optional)** `Array<AccountActivityItem>` | Individual actions performed as part of this account activity | [default to undefined]
**executionStatus** | **(optional)** `ExecutionStatus` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request | [default to undefined]

