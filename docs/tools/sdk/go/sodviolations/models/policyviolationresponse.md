# Policyviolationresponse

# Policyviolationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The system-generated unique identifier of the policy violation. | [readonly] 
**Name** | Pointer to **string** | The display name of the policy violation. | [optional] [readonly] 
**Created** | **SailPointTime** | The date and time when the policy violation was created. | [readonly] 
**Modified** | **SailPointTime** | The date and time when the policy violation was last modified. | [readonly] 
**LastEvaluatedDate** | Pointer to **SailPointTime** | The date and time when the policy violation was last evaluated by the policy engine. | [optional] [readonly] 
**Owner** | [**Referenceresponse**](referenceresponse) |  | 
**ConflictingCriteria** | [**[]AccessCriteria**](access-criteria) | List of conflicting criteria. Each conflicting item supports optional description and optional sourceRef (id, name, type, description); for ENTITLEMENT items, sourceRef may be populated from the entitlement's source on GET via hydration.  | [readonly] 
**AppliedControls** | [**[]Appliedcontrol**](appliedcontrol) | List of compensating controls that have been applied to this policy violation. | [readonly] 
**Expiration** | **NullableTime** | Expiration on the active applied compensating control row (latest applied_date, tie-break id). Always returned; null when there is no active control or that row has no expiration. | [readonly] 
**Target** | [**Referenceresponse**](referenceresponse) |  | 
**Policy** | [**Referenceresponse**](referenceresponse) |  | 
**Status** | **Policyviolationstatus** |  | 
**Level** | **Policyviolationrisklevel** |  | 

## Methods

### NewPolicyviolationresponse

`func NewPolicyviolationresponse(id string, created SailPointTime, modified SailPointTime, owner Referenceresponse, conflictingCriteria []AccessCriteria, appliedControls []Appliedcontrol, expiration NullableTime, target Referenceresponse, policy Referenceresponse, status Policyviolationstatus, level Policyviolationrisklevel, ) *Policyviolationresponse`

NewPolicyviolationresponse instantiates a new Policyviolationresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyviolationresponseWithDefaults

`func NewPolicyviolationresponseWithDefaults() *Policyviolationresponse`

NewPolicyviolationresponseWithDefaults instantiates a new Policyviolationresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Policyviolationresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Policyviolationresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Policyviolationresponse) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Policyviolationresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Policyviolationresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Policyviolationresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Policyviolationresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Policyviolationresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Policyviolationresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Policyviolationresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Policyviolationresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Policyviolationresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Policyviolationresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetLastEvaluatedDate

`func (o *Policyviolationresponse) GetLastEvaluatedDate() SailPointTime`

GetLastEvaluatedDate returns the LastEvaluatedDate field if non-nil, zero value otherwise.

### GetLastEvaluatedDateOk

`func (o *Policyviolationresponse) GetLastEvaluatedDateOk() (*SailPointTime, bool)`

GetLastEvaluatedDateOk returns a tuple with the LastEvaluatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEvaluatedDate

`func (o *Policyviolationresponse) SetLastEvaluatedDate(v SailPointTime)`

SetLastEvaluatedDate sets LastEvaluatedDate field to given value.

### HasLastEvaluatedDate

`func (o *Policyviolationresponse) HasLastEvaluatedDate() bool`

HasLastEvaluatedDate returns a boolean if a field has been set.

### GetOwner

`func (o *Policyviolationresponse) GetOwner() Referenceresponse`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Policyviolationresponse) GetOwnerOk() (*Referenceresponse, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Policyviolationresponse) SetOwner(v Referenceresponse)`

SetOwner sets Owner field to given value.


### GetConflictingCriteria

`func (o *Policyviolationresponse) GetConflictingCriteria() []AccessCriteria`

GetConflictingCriteria returns the ConflictingCriteria field if non-nil, zero value otherwise.

### GetConflictingCriteriaOk

`func (o *Policyviolationresponse) GetConflictingCriteriaOk() (*[]AccessCriteria, bool)`

GetConflictingCriteriaOk returns a tuple with the ConflictingCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingCriteria

`func (o *Policyviolationresponse) SetConflictingCriteria(v []AccessCriteria)`

SetConflictingCriteria sets ConflictingCriteria field to given value.


### GetAppliedControls

`func (o *Policyviolationresponse) GetAppliedControls() []Appliedcontrol`

GetAppliedControls returns the AppliedControls field if non-nil, zero value otherwise.

### GetAppliedControlsOk

`func (o *Policyviolationresponse) GetAppliedControlsOk() (*[]Appliedcontrol, bool)`

GetAppliedControlsOk returns a tuple with the AppliedControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedControls

`func (o *Policyviolationresponse) SetAppliedControls(v []Appliedcontrol)`

SetAppliedControls sets AppliedControls field to given value.


### GetExpiration

`func (o *Policyviolationresponse) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Policyviolationresponse) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Policyviolationresponse) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.


### SetExpirationNil

`func (o *Policyviolationresponse) SetExpirationNil(b bool)`

 SetExpirationNil sets the value for Expiration to be an explicit nil

### UnsetExpiration
`func (o *Policyviolationresponse) UnsetExpiration()`

UnsetExpiration ensures that no value is present for Expiration, not even an explicit nil
### GetTarget

`func (o *Policyviolationresponse) GetTarget() Referenceresponse`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *Policyviolationresponse) GetTargetOk() (*Referenceresponse, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *Policyviolationresponse) SetTarget(v Referenceresponse)`

SetTarget sets Target field to given value.


### GetPolicy

`func (o *Policyviolationresponse) GetPolicy() Referenceresponse`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *Policyviolationresponse) GetPolicyOk() (*Referenceresponse, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *Policyviolationresponse) SetPolicy(v Referenceresponse)`

SetPolicy sets Policy field to given value.


### GetStatus

`func (o *Policyviolationresponse) GetStatus() Policyviolationstatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Policyviolationresponse) GetStatusOk() (*Policyviolationstatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Policyviolationresponse) SetStatus(v Policyviolationstatus)`

SetStatus sets Status field to given value.


### GetLevel

`func (o *Policyviolationresponse) GetLevel() Policyviolationrisklevel`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *Policyviolationresponse) GetLevelOk() (*Policyviolationrisklevel, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *Policyviolationresponse) SetLevel(v Policyviolationrisklevel)`

SetLevel sets Level field to given value.



