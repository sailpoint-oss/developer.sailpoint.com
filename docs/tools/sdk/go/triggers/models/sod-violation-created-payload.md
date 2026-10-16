# SODViolationCreatedPayload

# SODViolationCreatedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **SailPointTime** | When the violation record was created. | [optional] 
**Id** | Pointer to **string** | Violation ID. | [optional] 
**LastEvaluatedDate** | Pointer to **SailPointTime** | When the violation was last evaluated. | [optional] 
**Level** | Pointer to **string** | Violation severity level. | [optional] 
**Name** | Pointer to **string** | Human-readable violation name. | [optional] 
**Owner** | Pointer to [**SODViolationCreatedPayloadOwner**](sod-violation-created-payload-owner) |  | [optional] 
**Policy** | Pointer to [**SODViolationCreatedPayloadPolicy**](sod-violation-created-payload-policy) |  | [optional] 
**Status** | Pointer to **string** | Violation lifecycle status. | [optional] 
**Target** | Pointer to [**SODViolationCreatedPayloadTarget**](sod-violation-created-payload-target) |  | [optional] 

## Methods

### NewSODViolationCreatedPayload

`func NewSODViolationCreatedPayload() *SODViolationCreatedPayload`

NewSODViolationCreatedPayload instantiates a new SODViolationCreatedPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSODViolationCreatedPayloadWithDefaults

`func NewSODViolationCreatedPayloadWithDefaults() *SODViolationCreatedPayload`

NewSODViolationCreatedPayloadWithDefaults instantiates a new SODViolationCreatedPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *SODViolationCreatedPayload) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SODViolationCreatedPayload) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SODViolationCreatedPayload) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SODViolationCreatedPayload) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetId

`func (o *SODViolationCreatedPayload) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SODViolationCreatedPayload) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SODViolationCreatedPayload) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SODViolationCreatedPayload) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLastEvaluatedDate

`func (o *SODViolationCreatedPayload) GetLastEvaluatedDate() SailPointTime`

GetLastEvaluatedDate returns the LastEvaluatedDate field if non-nil, zero value otherwise.

### GetLastEvaluatedDateOk

`func (o *SODViolationCreatedPayload) GetLastEvaluatedDateOk() (*SailPointTime, bool)`

GetLastEvaluatedDateOk returns a tuple with the LastEvaluatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEvaluatedDate

`func (o *SODViolationCreatedPayload) SetLastEvaluatedDate(v SailPointTime)`

SetLastEvaluatedDate sets LastEvaluatedDate field to given value.

### HasLastEvaluatedDate

`func (o *SODViolationCreatedPayload) HasLastEvaluatedDate() bool`

HasLastEvaluatedDate returns a boolean if a field has been set.

### GetLevel

`func (o *SODViolationCreatedPayload) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *SODViolationCreatedPayload) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *SODViolationCreatedPayload) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *SODViolationCreatedPayload) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetName

`func (o *SODViolationCreatedPayload) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SODViolationCreatedPayload) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SODViolationCreatedPayload) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SODViolationCreatedPayload) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwner

`func (o *SODViolationCreatedPayload) GetOwner() SODViolationCreatedPayloadOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SODViolationCreatedPayload) GetOwnerOk() (*SODViolationCreatedPayloadOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SODViolationCreatedPayload) SetOwner(v SODViolationCreatedPayloadOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SODViolationCreatedPayload) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetPolicy

`func (o *SODViolationCreatedPayload) GetPolicy() SODViolationCreatedPayloadPolicy`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *SODViolationCreatedPayload) GetPolicyOk() (*SODViolationCreatedPayloadPolicy, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *SODViolationCreatedPayload) SetPolicy(v SODViolationCreatedPayloadPolicy)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *SODViolationCreatedPayload) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetStatus

`func (o *SODViolationCreatedPayload) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SODViolationCreatedPayload) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SODViolationCreatedPayload) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SODViolationCreatedPayload) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTarget

`func (o *SODViolationCreatedPayload) GetTarget() SODViolationCreatedPayloadTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SODViolationCreatedPayload) GetTargetOk() (*SODViolationCreatedPayloadTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SODViolationCreatedPayload) SetTarget(v SODViolationCreatedPayloadTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SODViolationCreatedPayload) HasTarget() bool`

HasTarget returns a boolean if a field has been set.


