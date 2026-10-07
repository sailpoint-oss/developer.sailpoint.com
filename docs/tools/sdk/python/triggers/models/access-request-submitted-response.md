# AccessRequestSubmittedResponse

# AccessRequestSubmittedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Approval or denial of the request by the subscribing service. | [required]
**comment** | **str** | Comment from the subscribing service approving or denying the request. | [required]
**approver** | **str** | Name of the subscribing service approving the request.  This doesn't normally have to be the name of an existing identity in ISC, but it does if you have an active subscription to the [Access Request Decision trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision). If you don't provide the `username` of an existing identity in your tenant, your Access Request Decision subscriptions will never trigger. | [required]
\}

## Example

```python
from sailpoint.triggers.models.access_request_submitted_response import AccessRequestSubmittedResponse

access_request_submitted_response = AccessRequestSubmittedResponse(
approved=True,
comment='This access has passed preliminary approval.',
approver='AcmeCorpExternalIntegration'
)

```
[[Back to top]](#) 

