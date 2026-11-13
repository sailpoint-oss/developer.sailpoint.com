# ReviewDecision

# ReviewDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The id of the review decision | [default to undefined]
**decision** | `CertificationDecision` |  | [default to undefined]
**proposedEndDate** | **(optional)** `string` | The date at which a user\'s access should be taken away. Should only be set for `REVOKE` decisions. | [default to undefined]
**bulk** | `boolean` | Indicates whether decision should be marked as part of a larger bulk decision | [default to undefined]
**recommendation** | **(optional)** `ReviewRecommendation` |  | [default to undefined]
**comments** | **(optional)** `string` | Comments recorded when the decision was made | [default to undefined]

