# SODViolationReopenedPayload

# SODViolationReopenedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **SailPointTime** | When the violation record was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the violation was last modified. | [optional] 
**Id** | Pointer to **string** | Violation ID. | [optional] 
**LastEvaluatedDate** | Pointer to **SailPointTime** | When the violation was last evaluated. | [optional] 
**Level** | Pointer to **string** | Violation severity level. | [optional] 
**Name** | Pointer to **string** | Human-readable violation name. | [optional] 
**Owner** | Pointer to [**SODViolationCreatedPayloadOwner**](sod-violation-created-payload-owner) |  | [optional] 
**Policy** | Pointer to [**SODViolationCreatedPayloadPolicy**](sod-violation-created-payload-policy) |  | [optional] 
**PreviousStatus** | Pointer to **string** | Violation status before the reopen. | [optional] 
**CurrentStatus** | Pointer to **string** | Violation status after the reopen. | [optional] 
**Target** | Pointer to [**SODViolationCreatedPayloadTarget**](sod-violation-created-payload-target) |  | [optional] 
**Reason** | Pointer to **string** | Why the violation was reopened. | [optional] 

## Methods

### NewSODViolationReopenedPayload

`func NewSODViolationReopenedPayload() *SODViolationReopenedPayload`

NewSODViolationReopenedPayload instantiates a new SODViolationReopenedPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSODViolationReopenedPayloadWithDefaults

`func NewSODViolationReopenedPayloadWithDefaults() *SODViolationReopenedPayload`

NewSODViolationReopenedPayloadWithDefaults instantiates a new SODViolationReopenedPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *SODViolationReopenedPayload) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SODViolationReopenedPayload) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SODViolationReopenedPayload) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SODViolationReopenedPayload) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SODViolationReopenedPayload) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SODViolationReopenedPayload) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SODViolationReopenedPayload) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SODViolationReopenedPayload) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetId

`func (o *SODViolationReopenedPayload) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SODViolationReopenedPayload) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SODViolationReopenedPayload) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SODViolationReopenedPayload) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLastEvaluatedDate

`func (o *SODViolationReopenedPayload) GetLastEvaluatedDate() SailPointTime`

GetLastEvaluatedDate returns the LastEvaluatedDate field if non-nil, zero value otherwise.

### GetLastEvaluatedDateOk

`func (o *SODViolationReopenedPayload) GetLastEvaluatedDateOk() (*SailPointTime, bool)`

GetLastEvaluatedDateOk returns a tuple with the LastEvaluatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEvaluatedDate

`func (o *SODViolationReopenedPayload) SetLastEvaluatedDate(v SailPointTime)`

SetLastEvaluatedDate sets LastEvaluatedDate field to given value.

### HasLastEvaluatedDate

`func (o *SODViolationReopenedPayload) HasLastEvaluatedDate() bool`

HasLastEvaluatedDate returns a boolean if a field has been set.

### GetLevel

`func (o *SODViolationReopenedPayload) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *SODViolationReopenedPayload) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *SODViolationReopenedPayload) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *SODViolationReopenedPayload) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetName

`func (o *SODViolationReopenedPayload) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SODViolationReopenedPayload) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SODViolationReopenedPayload) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SODViolationReopenedPayload) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwner

`func (o *SODViolationReopenedPayload) GetOwner() SODViolationCreatedPayloadOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SODViolationReopenedPayload) GetOwnerOk() (*SODViolationCreatedPayloadOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SODViolationReopenedPayload) SetOwner(v SODViolationCreatedPayloadOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SODViolationReopenedPayload) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetPolicy

`func (o *SODViolationReopenedPayload) GetPolicy() SODViolationCreatedPayloadPolicy`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *SODViolationReopenedPayload) GetPolicyOk() (*SODViolationCreatedPayloadPolicy, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *SODViolationReopenedPayload) SetPolicy(v SODViolationCreatedPayloadPolicy)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *SODViolationReopenedPayload) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetPreviousStatus

`func (o *SODViolationReopenedPayload) GetPreviousStatus() string`

GetPreviousStatus returns the PreviousStatus field if non-nil, zero value otherwise.

### GetPreviousStatusOk

`func (o *SODViolationReopenedPayload) GetPreviousStatusOk() (*string, bool)`

GetPreviousStatusOk returns a tuple with the PreviousStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousStatus

`func (o *SODViolationReopenedPayload) SetPreviousStatus(v string)`

SetPreviousStatus sets PreviousStatus field to given value.

### HasPreviousStatus

`func (o *SODViolationReopenedPayload) HasPreviousStatus() bool`

HasPreviousStatus returns a boolean if a field has been set.

### GetCurrentStatus

`func (o *SODViolationReopenedPayload) GetCurrentStatus() string`

GetCurrentStatus returns the CurrentStatus field if non-nil, zero value otherwise.

### GetCurrentStatusOk

`func (o *SODViolationReopenedPayload) GetCurrentStatusOk() (*string, bool)`

GetCurrentStatusOk returns a tuple with the CurrentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStatus

`func (o *SODViolationReopenedPayload) SetCurrentStatus(v string)`

SetCurrentStatus sets CurrentStatus field to given value.

### HasCurrentStatus

`func (o *SODViolationReopenedPayload) HasCurrentStatus() bool`

HasCurrentStatus returns a boolean if a field has been set.

### GetTarget

`func (o *SODViolationReopenedPayload) GetTarget() SODViolationCreatedPayloadTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SODViolationReopenedPayload) GetTargetOk() (*SODViolationCreatedPayloadTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SODViolationReopenedPayload) SetTarget(v SODViolationCreatedPayloadTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SODViolationReopenedPayload) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetReason

`func (o *SODViolationReopenedPayload) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *SODViolationReopenedPayload) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *SODViolationReopenedPayload) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *SODViolationReopenedPayload) HasReason() bool`

HasReason returns a boolean if a field has been set.


