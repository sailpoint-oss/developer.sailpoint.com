# Responseactionstatus

# Responseactionstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | `string` | Tracking handle and correlation id for the response action. | [default to undefined]
**actionType** | `string` | The action that was requested. | [default to undefined]
**status** | `string` | Aggregate status across the correlated workflow execution(s): SUBMITTED (registered, no execution yet), IN_PROGRESS (any still non-terminal), COMPLETED (all terminal and at least one succeeded), or FAILED (all terminal and none succeeded).  | [default to undefined]
**submittedAt** | `string` | When the response action was accepted. | [default to undefined]
**updatedAt** | `string` | When the response action status last changed. | [default to undefined]

