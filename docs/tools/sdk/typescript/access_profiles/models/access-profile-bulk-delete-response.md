# AccessProfileBulkDeleteResponse

# AccessProfileBulkDeleteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **(optional)** `string` | ID of the task which is executing the bulk deletion. This can be passed to the **_/task-status** API to track status. | [default to undefined]
**pending** | **(optional)** `Array<string>` | List of IDs of Access Profiles which are pending deletion. | [default to undefined]
**inUse** | **(optional)** `Array<AccessProfileUsage>` | List of usages of Access Profiles targeted for deletion. | [default to undefined]

