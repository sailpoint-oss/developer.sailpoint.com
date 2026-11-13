# AccessProfile2

# AccessProfile2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the Access Profile | [optional] 
**Name** | Pointer to **string** | Name of the Access Profile | [optional] 
**Description** | Pointer to **string** | Information about the Access Profile | [optional] 
**Created** | Pointer to **SailPointTime** | Date the Access Profile was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Date the Access Profile was last modified. | [optional] 
**Enabled** | Pointer to **bool** | Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement. | [optional] [default to true]
**Owner** | Pointer to [**OwnerReferenceDTO**](owner-reference-dto) |  | [optional] 
**Source** | Pointer to [**SourceReferenceDTO**](source-reference-dto) |  | [optional] 
**Entitlements** | Pointer to [**[]EntitlementRef**](entitlement-ref) | A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement. | [optional] 
**Requestable** | Pointer to **bool** | Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value **false** in this field results in a 400 error. | [optional] [default to true]
**AccessRequestConfig** | Pointer to [**Requestability**](requestability) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**Revocability**](revocability) |  | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**ProvisioningCriteria** | Pointer to [**NullableProvisioningCriteriaLevel**](provisioning-criteria-level) |  | [optional] 

## Methods

### NewAccessProfile2

`func NewAccessProfile2() *AccessProfile2`

NewAccessProfile2 instantiates a new AccessProfile2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfile2WithDefaults

`func NewAccessProfile2WithDefaults() *AccessProfile2`

NewAccessProfile2WithDefaults instantiates a new AccessProfile2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfile2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfile2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfile2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfile2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfile2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfile2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfile2) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfile2) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessProfile2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfile2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfile2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfile2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCreated

`func (o *AccessProfile2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessProfile2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessProfile2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccessProfile2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *AccessProfile2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccessProfile2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccessProfile2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccessProfile2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *AccessProfile2) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *AccessProfile2) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *AccessProfile2) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *AccessProfile2) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetOwner

`func (o *AccessProfile2) GetOwner() OwnerReferenceDTO`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessProfile2) GetOwnerOk() (*OwnerReferenceDTO, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessProfile2) SetOwner(v OwnerReferenceDTO)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccessProfile2) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetSource

`func (o *AccessProfile2) GetSource() SourceReferenceDTO`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccessProfile2) GetSourceOk() (*SourceReferenceDTO, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccessProfile2) SetSource(v SourceReferenceDTO)`

SetSource sets Source field to given value.

### HasSource

`func (o *AccessProfile2) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetEntitlements

`func (o *AccessProfile2) GetEntitlements() []EntitlementRef`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *AccessProfile2) GetEntitlementsOk() (*[]EntitlementRef, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *AccessProfile2) SetEntitlements(v []EntitlementRef)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *AccessProfile2) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetRequestable

`func (o *AccessProfile2) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *AccessProfile2) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *AccessProfile2) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *AccessProfile2) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAccessRequestConfig

`func (o *AccessProfile2) GetAccessRequestConfig() Requestability`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *AccessProfile2) GetAccessRequestConfigOk() (*Requestability, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *AccessProfile2) SetAccessRequestConfig(v Requestability)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *AccessProfile2) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *AccessProfile2) GetRevocationRequestConfig() Revocability`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *AccessProfile2) GetRevocationRequestConfigOk() (*Revocability, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *AccessProfile2) SetRevocationRequestConfig(v Revocability)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *AccessProfile2) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.

### GetSegments

`func (o *AccessProfile2) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *AccessProfile2) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *AccessProfile2) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *AccessProfile2) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetProvisioningCriteria

`func (o *AccessProfile2) GetProvisioningCriteria() ProvisioningCriteriaLevel`

GetProvisioningCriteria returns the ProvisioningCriteria field if non-nil, zero value otherwise.

### GetProvisioningCriteriaOk

`func (o *AccessProfile2) GetProvisioningCriteriaOk() (*ProvisioningCriteriaLevel, bool)`

GetProvisioningCriteriaOk returns a tuple with the ProvisioningCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningCriteria

`func (o *AccessProfile2) SetProvisioningCriteria(v ProvisioningCriteriaLevel)`

SetProvisioningCriteria sets ProvisioningCriteria field to given value.

### HasProvisioningCriteria

`func (o *AccessProfile2) HasProvisioningCriteria() bool`

HasProvisioningCriteria returns a boolean if a field has been set.

### SetProvisioningCriteriaNil

`func (o *AccessProfile2) SetProvisioningCriteriaNil(b bool)`

 SetProvisioningCriteriaNil sets the value for ProvisioningCriteria to be an explicit nil

### UnsetProvisioningCriteria
`func (o *AccessProfile2) UnsetProvisioningCriteria()`

UnsetProvisioningCriteria ensures that no value is present for ProvisioningCriteria, not even an explicit nil

