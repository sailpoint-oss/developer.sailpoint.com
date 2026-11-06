# Accessprofilev2

# Accessprofilev2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Access profile ID. | [optional] [readonly] 
**Name** | **string** | Access profile name. | 
**Description** | Pointer to **NullableString** | Access profile description. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time when the access profile was created. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Date and time when the access profile was last modified. | [optional] [readonly] 
**Enabled** | Pointer to **bool** | Indicates whether the access profile is enabled. If it's enabled, you must include at least one entitlement. | [optional] [default to false]
**Owner** | [**NullableOwnerReference**](owner-reference) |  | 
**Source** | [**AccessProfileSourceRef**](access-profile-source-ref) |  | 
**Entitlements** | Pointer to [**[]EntitlementRef**](entitlement-ref) | List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement. | [optional] 
**Requestable** | Pointer to **bool** | Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error. | [optional] [default to true]
**AccessRequestConfig** | Pointer to [**NullableRequestability**](requestability) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**NullableRevocability**](revocability) |  | [optional] 
**Segments** | Pointer to **[]string** | List of segment IDs, if any, that the access profile is assigned to. | [optional] 
**AccessModelMetadata** | Pointer to [**AttributeDTOList**](attribute-dto-list) |  | [optional] 
**ProvisioningCriteria** | Pointer to [**NullableProvisioningCriteriaLevel1**](provisioning-criteria-level1) |  | [optional] 
**AdditionalOwners** | Pointer to [**[]AdditionalOwnerRef**](additional-owner-ref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 
**PrivilegeLevel** | Pointer to [**Accessprofilev2PrivilegeLevel**](accessprofilev2-privilege-level) |  | [optional] 

## Methods

### NewAccessprofilev2

`func NewAccessprofilev2(name string, owner NullableOwnerReference, source AccessProfileSourceRef, ) *Accessprofilev2`

NewAccessprofilev2 instantiates a new Accessprofilev2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofilev2WithDefaults

`func NewAccessprofilev2WithDefaults() *Accessprofilev2`

NewAccessprofilev2WithDefaults instantiates a new Accessprofilev2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessprofilev2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessprofilev2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessprofilev2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessprofilev2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accessprofilev2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessprofilev2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessprofilev2) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Accessprofilev2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessprofilev2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessprofilev2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessprofilev2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Accessprofilev2) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Accessprofilev2) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *Accessprofilev2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Accessprofilev2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Accessprofilev2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Accessprofilev2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Accessprofilev2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Accessprofilev2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Accessprofilev2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Accessprofilev2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *Accessprofilev2) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Accessprofilev2) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Accessprofilev2) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Accessprofilev2) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetOwner

`func (o *Accessprofilev2) GetOwner() OwnerReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Accessprofilev2) GetOwnerOk() (*OwnerReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Accessprofilev2) SetOwner(v OwnerReference)`

SetOwner sets Owner field to given value.


### SetOwnerNil

`func (o *Accessprofilev2) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Accessprofilev2) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetSource

`func (o *Accessprofilev2) GetSource() AccessProfileSourceRef`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accessprofilev2) GetSourceOk() (*AccessProfileSourceRef, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accessprofilev2) SetSource(v AccessProfileSourceRef)`

SetSource sets Source field to given value.


### GetEntitlements

`func (o *Accessprofilev2) GetEntitlements() []EntitlementRef`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Accessprofilev2) GetEntitlementsOk() (*[]EntitlementRef, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Accessprofilev2) SetEntitlements(v []EntitlementRef)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Accessprofilev2) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### SetEntitlementsNil

`func (o *Accessprofilev2) SetEntitlementsNil(b bool)`

 SetEntitlementsNil sets the value for Entitlements to be an explicit nil

### UnsetEntitlements
`func (o *Accessprofilev2) UnsetEntitlements()`

UnsetEntitlements ensures that no value is present for Entitlements, not even an explicit nil
### GetRequestable

`func (o *Accessprofilev2) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Accessprofilev2) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Accessprofilev2) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *Accessprofilev2) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAccessRequestConfig

`func (o *Accessprofilev2) GetAccessRequestConfig() Requestability`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *Accessprofilev2) GetAccessRequestConfigOk() (*Requestability, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *Accessprofilev2) SetAccessRequestConfig(v Requestability)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *Accessprofilev2) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### SetAccessRequestConfigNil

`func (o *Accessprofilev2) SetAccessRequestConfigNil(b bool)`

 SetAccessRequestConfigNil sets the value for AccessRequestConfig to be an explicit nil

### UnsetAccessRequestConfig
`func (o *Accessprofilev2) UnsetAccessRequestConfig()`

UnsetAccessRequestConfig ensures that no value is present for AccessRequestConfig, not even an explicit nil
### GetRevocationRequestConfig

`func (o *Accessprofilev2) GetRevocationRequestConfig() Revocability`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *Accessprofilev2) GetRevocationRequestConfigOk() (*Revocability, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *Accessprofilev2) SetRevocationRequestConfig(v Revocability)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *Accessprofilev2) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.

### SetRevocationRequestConfigNil

`func (o *Accessprofilev2) SetRevocationRequestConfigNil(b bool)`

 SetRevocationRequestConfigNil sets the value for RevocationRequestConfig to be an explicit nil

### UnsetRevocationRequestConfig
`func (o *Accessprofilev2) UnsetRevocationRequestConfig()`

UnsetRevocationRequestConfig ensures that no value is present for RevocationRequestConfig, not even an explicit nil
### GetSegments

`func (o *Accessprofilev2) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Accessprofilev2) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Accessprofilev2) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Accessprofilev2) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *Accessprofilev2) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *Accessprofilev2) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetAccessModelMetadata

`func (o *Accessprofilev2) GetAccessModelMetadata() AttributeDTOList`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *Accessprofilev2) GetAccessModelMetadataOk() (*AttributeDTOList, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *Accessprofilev2) SetAccessModelMetadata(v AttributeDTOList)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *Accessprofilev2) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.

### GetProvisioningCriteria

`func (o *Accessprofilev2) GetProvisioningCriteria() ProvisioningCriteriaLevel1`

GetProvisioningCriteria returns the ProvisioningCriteria field if non-nil, zero value otherwise.

### GetProvisioningCriteriaOk

`func (o *Accessprofilev2) GetProvisioningCriteriaOk() (*ProvisioningCriteriaLevel1, bool)`

GetProvisioningCriteriaOk returns a tuple with the ProvisioningCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningCriteria

`func (o *Accessprofilev2) SetProvisioningCriteria(v ProvisioningCriteriaLevel1)`

SetProvisioningCriteria sets ProvisioningCriteria field to given value.

### HasProvisioningCriteria

`func (o *Accessprofilev2) HasProvisioningCriteria() bool`

HasProvisioningCriteria returns a boolean if a field has been set.

### SetProvisioningCriteriaNil

`func (o *Accessprofilev2) SetProvisioningCriteriaNil(b bool)`

 SetProvisioningCriteriaNil sets the value for ProvisioningCriteria to be an explicit nil

### UnsetProvisioningCriteria
`func (o *Accessprofilev2) UnsetProvisioningCriteria()`

UnsetProvisioningCriteria ensures that no value is present for ProvisioningCriteria, not even an explicit nil
### GetAdditionalOwners

`func (o *Accessprofilev2) GetAdditionalOwners() []AdditionalOwnerRef`

GetAdditionalOwners returns the AdditionalOwners field if non-nil, zero value otherwise.

### GetAdditionalOwnersOk

`func (o *Accessprofilev2) GetAdditionalOwnersOk() (*[]AdditionalOwnerRef, bool)`

GetAdditionalOwnersOk returns a tuple with the AdditionalOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalOwners

`func (o *Accessprofilev2) SetAdditionalOwners(v []AdditionalOwnerRef)`

SetAdditionalOwners sets AdditionalOwners field to given value.

### HasAdditionalOwners

`func (o *Accessprofilev2) HasAdditionalOwners() bool`

HasAdditionalOwners returns a boolean if a field has been set.

### SetAdditionalOwnersNil

`func (o *Accessprofilev2) SetAdditionalOwnersNil(b bool)`

 SetAdditionalOwnersNil sets the value for AdditionalOwners to be an explicit nil

### UnsetAdditionalOwners
`func (o *Accessprofilev2) UnsetAdditionalOwners()`

UnsetAdditionalOwners ensures that no value is present for AdditionalOwners, not even an explicit nil
### GetPrivilegeLevel

`func (o *Accessprofilev2) GetPrivilegeLevel() Accessprofilev2PrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Accessprofilev2) GetPrivilegeLevelOk() (*Accessprofilev2PrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Accessprofilev2) SetPrivilegeLevel(v Accessprofilev2PrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Accessprofilev2) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.


