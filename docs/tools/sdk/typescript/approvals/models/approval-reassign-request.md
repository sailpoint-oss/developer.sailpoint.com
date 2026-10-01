# ApprovalReassignRequest

# ApprovalReassignRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **(optional)** `string` | Comment associated with the reassign request. | [default to undefined]
**reassignFrom** | **(optional)** `string` | Identity from which the approval is being reassigned. If left blank, and the approval is currently assigned to the user calling this endpoint, it will use the calling user\'s identity. If left blank, and the approval is not currently assigned to the user calling this endpoint, you need to be an admin, which would add the reassignTo as a new approver. | [default to undefined]
**reassignTo** | **(optional)** `string` | Identity to which the approval is being reassigned. | [default to undefined]

