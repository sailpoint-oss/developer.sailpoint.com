# LifecycleActionRequestDetails

# LifecycleActionRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **Lifecyclestatus** |  | [optional] 
**Action** | Pointer to **Lifecycleaction** |  | [optional] 
**Approver** | Pointer to [**LifecycleApproverReference**](lifecycle-approver-reference) |  | [optional] 
**ApprovedAt** | Pointer to **SailPointTime** | Time when the request was approved (ISO-8601). | [optional] 
**Canceller** | Pointer to [**LifecycleRequesterReference**](lifecycle-requester-reference) |  | [optional] 
**CanceledAt** | Pointer to **SailPointTime** | Time when the request was canceled (ISO-8601). | [optional] 
**CancelComment** | Pointer to **string** | Comment provided when the request was canceled. | [optional] 
**Comments** | Pointer to [**[]LifecycleComment**](lifecycle-comment) | Append-only comment thread for the lifecycle request. | [optional] 
**FailurePhase** | Pointer to **string** | Workflow phase where the request failed, when applicable. | [optional] 
**FailureReason** | Pointer to **string** | Failure reason for the lifecycle request, when applicable. | [optional] 
**Resource** | Pointer to [**LifecycleResourceSummary**](lifecycle-resource-summary) |  | [optional] 
**ResourceOwners** | Pointer to [**[]LifecycleOwnerReference**](lifecycle-owner-reference) | Cached resource owners for the lifecycle target. | [optional] 
**SourceOwner** | Pointer to [**LifecycleOwnerReference**](lifecycle-owner-reference) |  | [optional] 
**Requester** | Pointer to [**LifecycleRequesterReference**](lifecycle-requester-reference) |  | [optional] 
**ApprovalRequestId** | Pointer to **string** | Approvals identifier when the request was submitted. | [optional] 
**ApprovalSettingsId** | Pointer to **string** | Approval settings identifier used for the request. | [optional] 
**Provisioning** | Pointer to [**LifecycleProvisioning**](lifecycle-provisioning) |  | [optional] 

## Methods

### NewLifecycleActionRequestDetails

`func NewLifecycleActionRequestDetails() *LifecycleActionRequestDetails`

NewLifecycleActionRequestDetails instantiates a new LifecycleActionRequestDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleActionRequestDetailsWithDefaults

`func NewLifecycleActionRequestDetailsWithDefaults() *LifecycleActionRequestDetails`

NewLifecycleActionRequestDetailsWithDefaults instantiates a new LifecycleActionRequestDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *LifecycleActionRequestDetails) GetStatus() Lifecyclestatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *LifecycleActionRequestDetails) GetStatusOk() (*Lifecyclestatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *LifecycleActionRequestDetails) SetStatus(v Lifecyclestatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *LifecycleActionRequestDetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAction

`func (o *LifecycleActionRequestDetails) GetAction() Lifecycleaction`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *LifecycleActionRequestDetails) GetActionOk() (*Lifecycleaction, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *LifecycleActionRequestDetails) SetAction(v Lifecycleaction)`

SetAction sets Action field to given value.

### HasAction

`func (o *LifecycleActionRequestDetails) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetApprover

`func (o *LifecycleActionRequestDetails) GetApprover() LifecycleApproverReference`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *LifecycleActionRequestDetails) GetApproverOk() (*LifecycleApproverReference, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *LifecycleActionRequestDetails) SetApprover(v LifecycleApproverReference)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *LifecycleActionRequestDetails) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetApprovedAt

`func (o *LifecycleActionRequestDetails) GetApprovedAt() SailPointTime`

GetApprovedAt returns the ApprovedAt field if non-nil, zero value otherwise.

### GetApprovedAtOk

`func (o *LifecycleActionRequestDetails) GetApprovedAtOk() (*SailPointTime, bool)`

GetApprovedAtOk returns a tuple with the ApprovedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedAt

`func (o *LifecycleActionRequestDetails) SetApprovedAt(v SailPointTime)`

SetApprovedAt sets ApprovedAt field to given value.

### HasApprovedAt

`func (o *LifecycleActionRequestDetails) HasApprovedAt() bool`

HasApprovedAt returns a boolean if a field has been set.

### GetCanceller

`func (o *LifecycleActionRequestDetails) GetCanceller() LifecycleRequesterReference`

GetCanceller returns the Canceller field if non-nil, zero value otherwise.

### GetCancellerOk

`func (o *LifecycleActionRequestDetails) GetCancellerOk() (*LifecycleRequesterReference, bool)`

GetCancellerOk returns a tuple with the Canceller field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanceller

`func (o *LifecycleActionRequestDetails) SetCanceller(v LifecycleRequesterReference)`

SetCanceller sets Canceller field to given value.

### HasCanceller

`func (o *LifecycleActionRequestDetails) HasCanceller() bool`

HasCanceller returns a boolean if a field has been set.

### GetCanceledAt

`func (o *LifecycleActionRequestDetails) GetCanceledAt() SailPointTime`

GetCanceledAt returns the CanceledAt field if non-nil, zero value otherwise.

### GetCanceledAtOk

`func (o *LifecycleActionRequestDetails) GetCanceledAtOk() (*SailPointTime, bool)`

GetCanceledAtOk returns a tuple with the CanceledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanceledAt

`func (o *LifecycleActionRequestDetails) SetCanceledAt(v SailPointTime)`

SetCanceledAt sets CanceledAt field to given value.

### HasCanceledAt

`func (o *LifecycleActionRequestDetails) HasCanceledAt() bool`

HasCanceledAt returns a boolean if a field has been set.

### GetCancelComment

`func (o *LifecycleActionRequestDetails) GetCancelComment() string`

GetCancelComment returns the CancelComment field if non-nil, zero value otherwise.

### GetCancelCommentOk

`func (o *LifecycleActionRequestDetails) GetCancelCommentOk() (*string, bool)`

GetCancelCommentOk returns a tuple with the CancelComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelComment

`func (o *LifecycleActionRequestDetails) SetCancelComment(v string)`

SetCancelComment sets CancelComment field to given value.

### HasCancelComment

`func (o *LifecycleActionRequestDetails) HasCancelComment() bool`

HasCancelComment returns a boolean if a field has been set.

### GetComments

`func (o *LifecycleActionRequestDetails) GetComments() []LifecycleComment`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *LifecycleActionRequestDetails) GetCommentsOk() (*[]LifecycleComment, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *LifecycleActionRequestDetails) SetComments(v []LifecycleComment)`

SetComments sets Comments field to given value.

### HasComments

`func (o *LifecycleActionRequestDetails) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetFailurePhase

`func (o *LifecycleActionRequestDetails) GetFailurePhase() string`

GetFailurePhase returns the FailurePhase field if non-nil, zero value otherwise.

### GetFailurePhaseOk

`func (o *LifecycleActionRequestDetails) GetFailurePhaseOk() (*string, bool)`

GetFailurePhaseOk returns a tuple with the FailurePhase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailurePhase

`func (o *LifecycleActionRequestDetails) SetFailurePhase(v string)`

SetFailurePhase sets FailurePhase field to given value.

### HasFailurePhase

`func (o *LifecycleActionRequestDetails) HasFailurePhase() bool`

HasFailurePhase returns a boolean if a field has been set.

### GetFailureReason

`func (o *LifecycleActionRequestDetails) GetFailureReason() string`

GetFailureReason returns the FailureReason field if non-nil, zero value otherwise.

### GetFailureReasonOk

`func (o *LifecycleActionRequestDetails) GetFailureReasonOk() (*string, bool)`

GetFailureReasonOk returns a tuple with the FailureReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureReason

`func (o *LifecycleActionRequestDetails) SetFailureReason(v string)`

SetFailureReason sets FailureReason field to given value.

### HasFailureReason

`func (o *LifecycleActionRequestDetails) HasFailureReason() bool`

HasFailureReason returns a boolean if a field has been set.

### GetResource

`func (o *LifecycleActionRequestDetails) GetResource() LifecycleResourceSummary`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *LifecycleActionRequestDetails) GetResourceOk() (*LifecycleResourceSummary, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *LifecycleActionRequestDetails) SetResource(v LifecycleResourceSummary)`

SetResource sets Resource field to given value.

### HasResource

`func (o *LifecycleActionRequestDetails) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetResourceOwners

`func (o *LifecycleActionRequestDetails) GetResourceOwners() []LifecycleOwnerReference`

GetResourceOwners returns the ResourceOwners field if non-nil, zero value otherwise.

### GetResourceOwnersOk

`func (o *LifecycleActionRequestDetails) GetResourceOwnersOk() (*[]LifecycleOwnerReference, bool)`

GetResourceOwnersOk returns a tuple with the ResourceOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceOwners

`func (o *LifecycleActionRequestDetails) SetResourceOwners(v []LifecycleOwnerReference)`

SetResourceOwners sets ResourceOwners field to given value.

### HasResourceOwners

`func (o *LifecycleActionRequestDetails) HasResourceOwners() bool`

HasResourceOwners returns a boolean if a field has been set.

### GetSourceOwner

`func (o *LifecycleActionRequestDetails) GetSourceOwner() LifecycleOwnerReference`

GetSourceOwner returns the SourceOwner field if non-nil, zero value otherwise.

### GetSourceOwnerOk

`func (o *LifecycleActionRequestDetails) GetSourceOwnerOk() (*LifecycleOwnerReference, bool)`

GetSourceOwnerOk returns a tuple with the SourceOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwner

`func (o *LifecycleActionRequestDetails) SetSourceOwner(v LifecycleOwnerReference)`

SetSourceOwner sets SourceOwner field to given value.

### HasSourceOwner

`func (o *LifecycleActionRequestDetails) HasSourceOwner() bool`

HasSourceOwner returns a boolean if a field has been set.

### GetRequester

`func (o *LifecycleActionRequestDetails) GetRequester() LifecycleRequesterReference`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *LifecycleActionRequestDetails) GetRequesterOk() (*LifecycleRequesterReference, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *LifecycleActionRequestDetails) SetRequester(v LifecycleRequesterReference)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *LifecycleActionRequestDetails) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetApprovalRequestId

`func (o *LifecycleActionRequestDetails) GetApprovalRequestId() string`

GetApprovalRequestId returns the ApprovalRequestId field if non-nil, zero value otherwise.

### GetApprovalRequestIdOk

`func (o *LifecycleActionRequestDetails) GetApprovalRequestIdOk() (*string, bool)`

GetApprovalRequestIdOk returns a tuple with the ApprovalRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequestId

`func (o *LifecycleActionRequestDetails) SetApprovalRequestId(v string)`

SetApprovalRequestId sets ApprovalRequestId field to given value.

### HasApprovalRequestId

`func (o *LifecycleActionRequestDetails) HasApprovalRequestId() bool`

HasApprovalRequestId returns a boolean if a field has been set.

### GetApprovalSettingsId

`func (o *LifecycleActionRequestDetails) GetApprovalSettingsId() string`

GetApprovalSettingsId returns the ApprovalSettingsId field if non-nil, zero value otherwise.

### GetApprovalSettingsIdOk

`func (o *LifecycleActionRequestDetails) GetApprovalSettingsIdOk() (*string, bool)`

GetApprovalSettingsIdOk returns a tuple with the ApprovalSettingsId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSettingsId

`func (o *LifecycleActionRequestDetails) SetApprovalSettingsId(v string)`

SetApprovalSettingsId sets ApprovalSettingsId field to given value.

### HasApprovalSettingsId

`func (o *LifecycleActionRequestDetails) HasApprovalSettingsId() bool`

HasApprovalSettingsId returns a boolean if a field has been set.

### GetProvisioning

`func (o *LifecycleActionRequestDetails) GetProvisioning() LifecycleProvisioning`

GetProvisioning returns the Provisioning field if non-nil, zero value otherwise.

### GetProvisioningOk

`func (o *LifecycleActionRequestDetails) GetProvisioningOk() (*LifecycleProvisioning, bool)`

GetProvisioningOk returns a tuple with the Provisioning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioning

`func (o *LifecycleActionRequestDetails) SetProvisioning(v LifecycleProvisioning)`

SetProvisioning sets Provisioning field to given value.

### HasProvisioning

`func (o *LifecycleActionRequestDetails) HasProvisioning() bool`

HasProvisioning returns a boolean if a field has been set.


