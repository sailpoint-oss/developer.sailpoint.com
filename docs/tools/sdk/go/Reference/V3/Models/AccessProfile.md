---
id: access-profile
title: AccessProfile
pagination_label: AccessProfile
sidebar_label: AccessProfile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfile', 'AccessProfile'] 
slug: /tools/sdk/go/v3/models/access-profile
tags: ['SDK', 'Software Development Kit', 'AccessProfile', 'AccessProfile']
---

# AccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the Access Profile | [optional] [readonly] 
**Name** | **string** | Name of the Access Profile | 
**Description** | Pointer to **NullableString** | Information about the Access Profile | [optional] 
**Created** | Pointer to **SailPointTime** | Date the Access Profile was created | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Date the Access Profile was last modified. | [optional] [readonly] 
**Enabled** | Pointer to **bool** | Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement. | [optional] [default to false]
**Owner** | [**OwnerReference**](owner-reference) |  | 
**Source** | [**AccessProfileSourceRef**](access-profile-source-ref) |  | 
**Entitlements** | Pointer to [**[]EntitlementRef**](entitlement-ref) | A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement. | [optional] 
**Requestable** | Pointer to **bool** | Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value  **false** in this field results in a 400 error. | [optional] [default to true]
**AccessRequestConfig** | Pointer to [**NullableRequestability**](requestability) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**NullableRevocability**](revocability) |  | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**ProvisioningCriteria** | Pointer to [**NullableProvisioningCriteriaLevel1**](provisioning-criteria-level1) |  | [optional] 

## Methods

### NewAccessProfile

`func NewAccessProfile(name string, owner OwnerReference, source AccessProfileSourceRef, ) *AccessProfile`

NewAccessProfile instantiates a new AccessProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileWithDefaults

`func NewAccessProfileWithDefaults() *AccessProfile`

NewAccessProfileWithDefaults instantiates a new AccessProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfile) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AccessProfile) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfile) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfile) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfile) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessProfile) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessProfile) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *AccessProfile) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessProfile) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessProfile) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccessProfile) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *AccessProfile) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccessProfile) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccessProfile) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccessProfile) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *AccessProfile) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *AccessProfile) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *AccessProfile) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *AccessProfile) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetOwner

`func (o *AccessProfile) GetOwner() OwnerReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessProfile) GetOwnerOk() (*OwnerReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessProfile) SetOwner(v OwnerReference)`

SetOwner sets Owner field to given value.


### GetSource

`func (o *AccessProfile) GetSource() AccessProfileSourceRef`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccessProfile) GetSourceOk() (*AccessProfileSourceRef, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccessProfile) SetSource(v AccessProfileSourceRef)`

SetSource sets Source field to given value.


### GetEntitlements

`func (o *AccessProfile) GetEntitlements() []EntitlementRef`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *AccessProfile) GetEntitlementsOk() (*[]EntitlementRef, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *AccessProfile) SetEntitlements(v []EntitlementRef)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *AccessProfile) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### SetEntitlementsNil

`func (o *AccessProfile) SetEntitlementsNil(b bool)`

 SetEntitlementsNil sets the value for Entitlements to be an explicit nil

### UnsetEntitlements
`func (o *AccessProfile) UnsetEntitlements()`

UnsetEntitlements ensures that no value is present for Entitlements, not even an explicit nil
### GetRequestable

`func (o *AccessProfile) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *AccessProfile) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *AccessProfile) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *AccessProfile) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAccessRequestConfig

`func (o *AccessProfile) GetAccessRequestConfig() Requestability`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *AccessProfile) GetAccessRequestConfigOk() (*Requestability, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *AccessProfile) SetAccessRequestConfig(v Requestability)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *AccessProfile) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### SetAccessRequestConfigNil

`func (o *AccessProfile) SetAccessRequestConfigNil(b bool)`

 SetAccessRequestConfigNil sets the value for AccessRequestConfig to be an explicit nil

### UnsetAccessRequestConfig
`func (o *AccessProfile) UnsetAccessRequestConfig()`

UnsetAccessRequestConfig ensures that no value is present for AccessRequestConfig, not even an explicit nil
### GetRevocationRequestConfig

`func (o *AccessProfile) GetRevocationRequestConfig() Revocability`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *AccessProfile) GetRevocationRequestConfigOk() (*Revocability, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *AccessProfile) SetRevocationRequestConfig(v Revocability)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *AccessProfile) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.

### SetRevocationRequestConfigNil

`func (o *AccessProfile) SetRevocationRequestConfigNil(b bool)`

 SetRevocationRequestConfigNil sets the value for RevocationRequestConfig to be an explicit nil

### UnsetRevocationRequestConfig
`func (o *AccessProfile) UnsetRevocationRequestConfig()`

UnsetRevocationRequestConfig ensures that no value is present for RevocationRequestConfig, not even an explicit nil
### GetSegments

`func (o *AccessProfile) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *AccessProfile) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *AccessProfile) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *AccessProfile) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *AccessProfile) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *AccessProfile) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetProvisioningCriteria

`func (o *AccessProfile) GetProvisioningCriteria() ProvisioningCriteriaLevel1`

GetProvisioningCriteria returns the ProvisioningCriteria field if non-nil, zero value otherwise.

### GetProvisioningCriteriaOk

`func (o *AccessProfile) GetProvisioningCriteriaOk() (*ProvisioningCriteriaLevel1, bool)`

GetProvisioningCriteriaOk returns a tuple with the ProvisioningCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningCriteria

`func (o *AccessProfile) SetProvisioningCriteria(v ProvisioningCriteriaLevel1)`

SetProvisioningCriteria sets ProvisioningCriteria field to given value.

### HasProvisioningCriteria

`func (o *AccessProfile) HasProvisioningCriteria() bool`

HasProvisioningCriteria returns a boolean if a field has been set.

### SetProvisioningCriteriaNil

`func (o *AccessProfile) SetProvisioningCriteriaNil(b bool)`

 SetProvisioningCriteriaNil sets the value for ProvisioningCriteria to be an explicit nil

### UnsetProvisioningCriteria
`func (o *AccessProfile) UnsetProvisioningCriteria()`

UnsetProvisioningCriteria ensures that no value is present for ProvisioningCriteria, not even an explicit nil

