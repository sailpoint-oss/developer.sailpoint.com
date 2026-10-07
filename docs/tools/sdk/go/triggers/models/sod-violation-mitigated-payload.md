# SODViolationMitigatedPayload

# SODViolationMitigatedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppliedControls** | Pointer to [**[]SODViolationMitigatedPayloadAppliedControlsInner**](sod-violation-mitigated-payload-applied-controls-inner) | Controls applied to mitigate the violation. For now this lists the currently active application(s). | [optional] 
**Created** | Pointer to **SailPointTime** | When the violation record was created. | [optional] 
**Expiration** | Pointer to **SailPointTime** | Violation-level expiration (may be a sentinel when not set). | [optional] 
**Id** | Pointer to **string** | Violation ID. | [optional] 
**LastEvaluatedDate** | Pointer to **SailPointTime** | When the violation was last evaluated. | [optional] 
**Level** | Pointer to **string** | Violation severity level. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the violation was last modified. | [optional] 
**Name** | Pointer to **string** | Human-readable violation name. | [optional] 
**Owner** | Pointer to [**SODViolationMitigatedPayloadOwner**](sod-violation-mitigated-payload-owner) |  | [optional] 
**Policy** | Pointer to [**SODViolationCreatedPayloadPolicy**](sod-violation-created-payload-policy) |  | [optional] 
**Status** | Pointer to **string** | Violation lifecycle status after mitigation. | [optional] 
**Target** | Pointer to [**SODViolationCreatedPayloadTarget**](sod-violation-created-payload-target) |  | [optional] 

## Methods

### NewSODViolationMitigatedPayload

`func NewSODViolationMitigatedPayload() *SODViolationMitigatedPayload`

NewSODViolationMitigatedPayload instantiates a new SODViolationMitigatedPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSODViolationMitigatedPayloadWithDefaults

`func NewSODViolationMitigatedPayloadWithDefaults() *SODViolationMitigatedPayload`

NewSODViolationMitigatedPayloadWithDefaults instantiates a new SODViolationMitigatedPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppliedControls

`func (o *SODViolationMitigatedPayload) GetAppliedControls() []SODViolationMitigatedPayloadAppliedControlsInner`

GetAppliedControls returns the AppliedControls field if non-nil, zero value otherwise.

### GetAppliedControlsOk

`func (o *SODViolationMitigatedPayload) GetAppliedControlsOk() (*[]SODViolationMitigatedPayloadAppliedControlsInner, bool)`

GetAppliedControlsOk returns a tuple with the AppliedControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedControls

`func (o *SODViolationMitigatedPayload) SetAppliedControls(v []SODViolationMitigatedPayloadAppliedControlsInner)`

SetAppliedControls sets AppliedControls field to given value.

### HasAppliedControls

`func (o *SODViolationMitigatedPayload) HasAppliedControls() bool`

HasAppliedControls returns a boolean if a field has been set.

### GetCreated

`func (o *SODViolationMitigatedPayload) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SODViolationMitigatedPayload) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SODViolationMitigatedPayload) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SODViolationMitigatedPayload) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetExpiration

`func (o *SODViolationMitigatedPayload) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *SODViolationMitigatedPayload) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *SODViolationMitigatedPayload) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *SODViolationMitigatedPayload) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetId

`func (o *SODViolationMitigatedPayload) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SODViolationMitigatedPayload) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SODViolationMitigatedPayload) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SODViolationMitigatedPayload) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLastEvaluatedDate

`func (o *SODViolationMitigatedPayload) GetLastEvaluatedDate() SailPointTime`

GetLastEvaluatedDate returns the LastEvaluatedDate field if non-nil, zero value otherwise.

### GetLastEvaluatedDateOk

`func (o *SODViolationMitigatedPayload) GetLastEvaluatedDateOk() (*SailPointTime, bool)`

GetLastEvaluatedDateOk returns a tuple with the LastEvaluatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEvaluatedDate

`func (o *SODViolationMitigatedPayload) SetLastEvaluatedDate(v SailPointTime)`

SetLastEvaluatedDate sets LastEvaluatedDate field to given value.

### HasLastEvaluatedDate

`func (o *SODViolationMitigatedPayload) HasLastEvaluatedDate() bool`

HasLastEvaluatedDate returns a boolean if a field has been set.

### GetLevel

`func (o *SODViolationMitigatedPayload) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *SODViolationMitigatedPayload) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *SODViolationMitigatedPayload) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *SODViolationMitigatedPayload) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetModified

`func (o *SODViolationMitigatedPayload) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SODViolationMitigatedPayload) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SODViolationMitigatedPayload) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SODViolationMitigatedPayload) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetName

`func (o *SODViolationMitigatedPayload) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SODViolationMitigatedPayload) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SODViolationMitigatedPayload) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SODViolationMitigatedPayload) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwner

`func (o *SODViolationMitigatedPayload) GetOwner() SODViolationMitigatedPayloadOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SODViolationMitigatedPayload) GetOwnerOk() (*SODViolationMitigatedPayloadOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SODViolationMitigatedPayload) SetOwner(v SODViolationMitigatedPayloadOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SODViolationMitigatedPayload) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetPolicy

`func (o *SODViolationMitigatedPayload) GetPolicy() SODViolationCreatedPayloadPolicy`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *SODViolationMitigatedPayload) GetPolicyOk() (*SODViolationCreatedPayloadPolicy, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *SODViolationMitigatedPayload) SetPolicy(v SODViolationCreatedPayloadPolicy)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *SODViolationMitigatedPayload) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetStatus

`func (o *SODViolationMitigatedPayload) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SODViolationMitigatedPayload) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SODViolationMitigatedPayload) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SODViolationMitigatedPayload) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTarget

`func (o *SODViolationMitigatedPayload) GetTarget() SODViolationCreatedPayloadTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SODViolationMitigatedPayload) GetTargetOk() (*SODViolationCreatedPayloadTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SODViolationMitigatedPayload) SetTarget(v SODViolationCreatedPayloadTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SODViolationMitigatedPayload) HasTarget() bool`

HasTarget returns a boolean if a field has been set.


