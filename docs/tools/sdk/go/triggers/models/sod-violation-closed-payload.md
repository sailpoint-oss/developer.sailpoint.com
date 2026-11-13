# SODViolationClosedPayload

# SODViolationClosedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **SailPointTime** | When the violation record was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the violation was last modified. | [optional] 
**Id** | Pointer to **string** | Violation ID. | [optional] 
**LastEvaluatedDate** | Pointer to **SailPointTime** | When the violation was last evaluated. | [optional] 
**Level** | Pointer to **string** | Violation severity level. | [optional] 
**Name** | Pointer to **string** | Human-readable violation name. | [optional] 
**Owner** | Pointer to [**SODViolationClosedPayloadOwner**](sod-violation-closed-payload-owner) |  | [optional] 
**Policy** | Pointer to [**SODViolationClosedPayloadPolicy**](sod-violation-closed-payload-policy) |  | [optional] 
**PreviousStatus** | Pointer to **string** | Violation status before closure (**Open** or **Mitigated**). | [optional] 
**CurrentStatus** | Pointer to **string** | Violation status after the event (always **Closed** for this webhook). | [optional] 
**Target** | Pointer to [**SODViolationClosedPayloadTarget**](sod-violation-closed-payload-target) |  | [optional] 

## Methods

### NewSODViolationClosedPayload

`func NewSODViolationClosedPayload() *SODViolationClosedPayload`

NewSODViolationClosedPayload instantiates a new SODViolationClosedPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSODViolationClosedPayloadWithDefaults

`func NewSODViolationClosedPayloadWithDefaults() *SODViolationClosedPayload`

NewSODViolationClosedPayloadWithDefaults instantiates a new SODViolationClosedPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *SODViolationClosedPayload) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SODViolationClosedPayload) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SODViolationClosedPayload) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SODViolationClosedPayload) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SODViolationClosedPayload) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SODViolationClosedPayload) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SODViolationClosedPayload) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SODViolationClosedPayload) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetId

`func (o *SODViolationClosedPayload) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SODViolationClosedPayload) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SODViolationClosedPayload) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SODViolationClosedPayload) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLastEvaluatedDate

`func (o *SODViolationClosedPayload) GetLastEvaluatedDate() SailPointTime`

GetLastEvaluatedDate returns the LastEvaluatedDate field if non-nil, zero value otherwise.

### GetLastEvaluatedDateOk

`func (o *SODViolationClosedPayload) GetLastEvaluatedDateOk() (*SailPointTime, bool)`

GetLastEvaluatedDateOk returns a tuple with the LastEvaluatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEvaluatedDate

`func (o *SODViolationClosedPayload) SetLastEvaluatedDate(v SailPointTime)`

SetLastEvaluatedDate sets LastEvaluatedDate field to given value.

### HasLastEvaluatedDate

`func (o *SODViolationClosedPayload) HasLastEvaluatedDate() bool`

HasLastEvaluatedDate returns a boolean if a field has been set.

### GetLevel

`func (o *SODViolationClosedPayload) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *SODViolationClosedPayload) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *SODViolationClosedPayload) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *SODViolationClosedPayload) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetName

`func (o *SODViolationClosedPayload) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SODViolationClosedPayload) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SODViolationClosedPayload) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SODViolationClosedPayload) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwner

`func (o *SODViolationClosedPayload) GetOwner() SODViolationClosedPayloadOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SODViolationClosedPayload) GetOwnerOk() (*SODViolationClosedPayloadOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SODViolationClosedPayload) SetOwner(v SODViolationClosedPayloadOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SODViolationClosedPayload) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetPolicy

`func (o *SODViolationClosedPayload) GetPolicy() SODViolationClosedPayloadPolicy`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *SODViolationClosedPayload) GetPolicyOk() (*SODViolationClosedPayloadPolicy, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *SODViolationClosedPayload) SetPolicy(v SODViolationClosedPayloadPolicy)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *SODViolationClosedPayload) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetPreviousStatus

`func (o *SODViolationClosedPayload) GetPreviousStatus() string`

GetPreviousStatus returns the PreviousStatus field if non-nil, zero value otherwise.

### GetPreviousStatusOk

`func (o *SODViolationClosedPayload) GetPreviousStatusOk() (*string, bool)`

GetPreviousStatusOk returns a tuple with the PreviousStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousStatus

`func (o *SODViolationClosedPayload) SetPreviousStatus(v string)`

SetPreviousStatus sets PreviousStatus field to given value.

### HasPreviousStatus

`func (o *SODViolationClosedPayload) HasPreviousStatus() bool`

HasPreviousStatus returns a boolean if a field has been set.

### GetCurrentStatus

`func (o *SODViolationClosedPayload) GetCurrentStatus() string`

GetCurrentStatus returns the CurrentStatus field if non-nil, zero value otherwise.

### GetCurrentStatusOk

`func (o *SODViolationClosedPayload) GetCurrentStatusOk() (*string, bool)`

GetCurrentStatusOk returns a tuple with the CurrentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStatus

`func (o *SODViolationClosedPayload) SetCurrentStatus(v string)`

SetCurrentStatus sets CurrentStatus field to given value.

### HasCurrentStatus

`func (o *SODViolationClosedPayload) HasCurrentStatus() bool`

HasCurrentStatus returns a boolean if a field has been set.

### GetTarget

`func (o *SODViolationClosedPayload) GetTarget() SODViolationClosedPayloadTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SODViolationClosedPayload) GetTargetOk() (*SODViolationClosedPayloadTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SODViolationClosedPayload) SetTarget(v SODViolationClosedPayloadTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SODViolationClosedPayload) HasTarget() bool`

HasTarget returns a boolean if a field has been set.


