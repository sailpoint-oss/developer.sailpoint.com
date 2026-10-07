# ApprovalDetails

# ApprovalDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approver** | Pointer to [**ApproverDto**](approver-dto) |  | [optional] 
**ApproverComments** | Pointer to **string** | Comments added by approver while rejecting or approving the account deletion request. | [optional] 
**DecisionDate** | Pointer to **SailPointTime** | Decision date of approval rejected or approved. | [optional] [readonly] 
**SerialOrder** | Pointer to **int64** | SerialOrder of approval details. | [optional] 
**Status** | Pointer to **AccountRequestPhaseState** |  | [optional] 

## Methods

### NewApprovalDetails

`func NewApprovalDetails() *ApprovalDetails`

NewApprovalDetails instantiates a new ApprovalDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalDetailsWithDefaults

`func NewApprovalDetailsWithDefaults() *ApprovalDetails`

NewApprovalDetailsWithDefaults instantiates a new ApprovalDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprover

`func (o *ApprovalDetails) GetApprover() ApproverDto`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *ApprovalDetails) GetApproverOk() (*ApproverDto, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *ApprovalDetails) SetApprover(v ApproverDto)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *ApprovalDetails) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetApproverComments

`func (o *ApprovalDetails) GetApproverComments() string`

GetApproverComments returns the ApproverComments field if non-nil, zero value otherwise.

### GetApproverCommentsOk

`func (o *ApprovalDetails) GetApproverCommentsOk() (*string, bool)`

GetApproverCommentsOk returns a tuple with the ApproverComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverComments

`func (o *ApprovalDetails) SetApproverComments(v string)`

SetApproverComments sets ApproverComments field to given value.

### HasApproverComments

`func (o *ApprovalDetails) HasApproverComments() bool`

HasApproverComments returns a boolean if a field has been set.

### GetDecisionDate

`func (o *ApprovalDetails) GetDecisionDate() SailPointTime`

GetDecisionDate returns the DecisionDate field if non-nil, zero value otherwise.

### GetDecisionDateOk

`func (o *ApprovalDetails) GetDecisionDateOk() (*SailPointTime, bool)`

GetDecisionDateOk returns a tuple with the DecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionDate

`func (o *ApprovalDetails) SetDecisionDate(v SailPointTime)`

SetDecisionDate sets DecisionDate field to given value.

### HasDecisionDate

`func (o *ApprovalDetails) HasDecisionDate() bool`

HasDecisionDate returns a boolean if a field has been set.

### GetSerialOrder

`func (o *ApprovalDetails) GetSerialOrder() int64`

GetSerialOrder returns the SerialOrder field if non-nil, zero value otherwise.

### GetSerialOrderOk

`func (o *ApprovalDetails) GetSerialOrderOk() (*int64, bool)`

GetSerialOrderOk returns a tuple with the SerialOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialOrder

`func (o *ApprovalDetails) SetSerialOrder(v int64)`

SetSerialOrder sets SerialOrder field to given value.

### HasSerialOrder

`func (o *ApprovalDetails) HasSerialOrder() bool`

HasSerialOrder returns a boolean if a field has been set.

### GetStatus

`func (o *ApprovalDetails) GetStatus() AccountRequestPhaseState`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApprovalDetails) GetStatusOk() (*AccountRequestPhaseState, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApprovalDetails) SetStatus(v AccountRequestPhaseState)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ApprovalDetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


