# AccessRequestSubmittedResponse

# AccessRequestSubmittedResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **Boolean** | Approval or denial of the request by the subscribing service. | [required]
**Comment** | **String** | Comment from the subscribing service approving or denying the request. | [required]
**Approver** | **String** | Name of the subscribing service approving the request.  This doesn't normally have to be the name of an existing identity in ISC, but it does if you have an active subscription to the [Access Request Decision trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision). If you don't provide the `username` of an existing identity in your tenant, your Access Request Decision subscriptions will never trigger. | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestSubmittedResponse = Initialize-AccessRequestSubmittedResponse  -Approved true `
 -Comment This access has passed preliminary approval. `
 -Approver AcmeCorpExternalIntegration
```

- Convert the resource to JSON
```powershell
$AccessRequestSubmittedResponse | ConvertTo-JSON
```


[[Back to top]](#) 

