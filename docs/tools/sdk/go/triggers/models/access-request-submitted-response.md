# AccessRequestSubmittedResponse

# AccessRequestSubmittedResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **bool** | Approval or denial of the request by the subscribing service. | 
**Comment** | **string** | Comment from the subscribing service approving or denying the request. | 
**Approver** | **string** | Name of the subscribing service approving the request.  This doesn't normally have to be the name of an existing identity in ISC, but it does if you have an active subscription to the [Access Request Decision trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision). If you don't provide the `username` of an existing identity in your tenant, your Access Request Decision subscriptions will never trigger. | 

## Methods

### NewAccessRequestSubmittedResponse

`func NewAccessRequestSubmittedResponse(approved bool, comment string, approver string, ) *AccessRequestSubmittedResponse`

NewAccessRequestSubmittedResponse instantiates a new AccessRequestSubmittedResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestSubmittedResponseWithDefaults

`func NewAccessRequestSubmittedResponseWithDefaults() *AccessRequestSubmittedResponse`

NewAccessRequestSubmittedResponseWithDefaults instantiates a new AccessRequestSubmittedResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *AccessRequestSubmittedResponse) GetApproved() bool`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *AccessRequestSubmittedResponse) GetApprovedOk() (*bool, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *AccessRequestSubmittedResponse) SetApproved(v bool)`

SetApproved sets Approved field to given value.


### GetComment

`func (o *AccessRequestSubmittedResponse) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestSubmittedResponse) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestSubmittedResponse) SetComment(v string)`

SetComment sets Comment field to given value.


### GetApprover

`func (o *AccessRequestSubmittedResponse) GetApprover() string`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *AccessRequestSubmittedResponse) GetApproverOk() (*string, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *AccessRequestSubmittedResponse) SetApprover(v string)`

SetApprover sets Approver field to given value.



