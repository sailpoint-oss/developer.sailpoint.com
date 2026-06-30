---
id: v1-accessprofile
title: Accessprofile
pagination_label: Accessprofile
sidebar_label: Accessprofile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofile', 'V1Accessprofile'] 
slug: /tools/sdk/go/dimensions/models/accessprofile
tags: ['SDK', 'Software Development Kit', 'Accessprofile', 'V1Accessprofile']
---

# Accessprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Access profile ID. | [optional] [readonly] 
**Name** | **string** | Access profile name. | 
**Description** | Pointer to **NullableString** | Access profile description. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time when the access profile was created. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Date and time when the access profile was last modified. | [optional] [readonly] 
**Enabled** | Pointer to **bool** | Indicates whether the access profile is enabled. If it's enabled, you must include at least one entitlement. | [optional] [default to false]
**Owner** | [**NullableOwnerreference**](ownerreference) |  | 
**Source** | [**Accessprofilesourceref**](accessprofilesourceref) |  | 
**Entitlements** | Pointer to [**[]Entitlementref**](entitlementref) | List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement. | [optional] 
**Requestable** | Pointer to **bool** | Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error. | [optional] [default to true]
**AccessRequestConfig** | Pointer to [**NullableRequestability**](requestability) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**NullableRevocability**](revocability) |  | [optional] 
**Segments** | Pointer to **[]string** | List of segment IDs, if any, that the access profile is assigned to. | [optional] 
**AccessModelMetadata** | Pointer to [**Attributedtolist**](attributedtolist) |  | [optional] 
**ProvisioningCriteria** | Pointer to [**NullableProvisioningcriterialevel1**](provisioningcriterialevel1) |  | [optional] 
**AdditionalOwners** | Pointer to [**[]Additionalownerref**](additionalownerref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 

## Methods

### NewAccessprofile

`func NewAccessprofile(name string, owner NullableOwnerreference, source Accessprofilesourceref, ) *Accessprofile`

NewAccessprofile instantiates a new Accessprofile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofileWithDefaults

`func NewAccessprofileWithDefaults() *Accessprofile`

NewAccessprofileWithDefaults instantiates a new Accessprofile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessprofile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessprofile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessprofile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessprofile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accessprofile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessprofile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessprofile) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Accessprofile) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessprofile) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessprofile) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessprofile) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Accessprofile) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Accessprofile) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *Accessprofile) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Accessprofile) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Accessprofile) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Accessprofile) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Accessprofile) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Accessprofile) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Accessprofile) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Accessprofile) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *Accessprofile) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Accessprofile) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Accessprofile) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Accessprofile) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetOwner

`func (o *Accessprofile) GetOwner() Ownerreference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Accessprofile) GetOwnerOk() (*Ownerreference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Accessprofile) SetOwner(v Ownerreference)`

SetOwner sets Owner field to given value.


### SetOwnerNil

`func (o *Accessprofile) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Accessprofile) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetSource

`func (o *Accessprofile) GetSource() Accessprofilesourceref`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accessprofile) GetSourceOk() (*Accessprofilesourceref, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accessprofile) SetSource(v Accessprofilesourceref)`

SetSource sets Source field to given value.


### GetEntitlements

`func (o *Accessprofile) GetEntitlements() []Entitlementref`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Accessprofile) GetEntitlementsOk() (*[]Entitlementref, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Accessprofile) SetEntitlements(v []Entitlementref)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Accessprofile) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### SetEntitlementsNil

`func (o *Accessprofile) SetEntitlementsNil(b bool)`

 SetEntitlementsNil sets the value for Entitlements to be an explicit nil

### UnsetEntitlements
`func (o *Accessprofile) UnsetEntitlements()`

UnsetEntitlements ensures that no value is present for Entitlements, not even an explicit nil
### GetRequestable

`func (o *Accessprofile) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Accessprofile) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Accessprofile) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *Accessprofile) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAccessRequestConfig

`func (o *Accessprofile) GetAccessRequestConfig() Requestability`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *Accessprofile) GetAccessRequestConfigOk() (*Requestability, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *Accessprofile) SetAccessRequestConfig(v Requestability)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *Accessprofile) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### SetAccessRequestConfigNil

`func (o *Accessprofile) SetAccessRequestConfigNil(b bool)`

 SetAccessRequestConfigNil sets the value for AccessRequestConfig to be an explicit nil

### UnsetAccessRequestConfig
`func (o *Accessprofile) UnsetAccessRequestConfig()`

UnsetAccessRequestConfig ensures that no value is present for AccessRequestConfig, not even an explicit nil
### GetRevocationRequestConfig

`func (o *Accessprofile) GetRevocationRequestConfig() Revocability`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *Accessprofile) GetRevocationRequestConfigOk() (*Revocability, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *Accessprofile) SetRevocationRequestConfig(v Revocability)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *Accessprofile) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.

### SetRevocationRequestConfigNil

`func (o *Accessprofile) SetRevocationRequestConfigNil(b bool)`

 SetRevocationRequestConfigNil sets the value for RevocationRequestConfig to be an explicit nil

### UnsetRevocationRequestConfig
`func (o *Accessprofile) UnsetRevocationRequestConfig()`

UnsetRevocationRequestConfig ensures that no value is present for RevocationRequestConfig, not even an explicit nil
### GetSegments

`func (o *Accessprofile) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Accessprofile) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Accessprofile) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Accessprofile) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *Accessprofile) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *Accessprofile) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetAccessModelMetadata

`func (o *Accessprofile) GetAccessModelMetadata() Attributedtolist`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *Accessprofile) GetAccessModelMetadataOk() (*Attributedtolist, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *Accessprofile) SetAccessModelMetadata(v Attributedtolist)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *Accessprofile) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.

### GetProvisioningCriteria

`func (o *Accessprofile) GetProvisioningCriteria() Provisioningcriterialevel1`

GetProvisioningCriteria returns the ProvisioningCriteria field if non-nil, zero value otherwise.

### GetProvisioningCriteriaOk

`func (o *Accessprofile) GetProvisioningCriteriaOk() (*Provisioningcriterialevel1, bool)`

GetProvisioningCriteriaOk returns a tuple with the ProvisioningCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningCriteria

`func (o *Accessprofile) SetProvisioningCriteria(v Provisioningcriterialevel1)`

SetProvisioningCriteria sets ProvisioningCriteria field to given value.

### HasProvisioningCriteria

`func (o *Accessprofile) HasProvisioningCriteria() bool`

HasProvisioningCriteria returns a boolean if a field has been set.

### SetProvisioningCriteriaNil

`func (o *Accessprofile) SetProvisioningCriteriaNil(b bool)`

 SetProvisioningCriteriaNil sets the value for ProvisioningCriteria to be an explicit nil

### UnsetProvisioningCriteria
`func (o *Accessprofile) UnsetProvisioningCriteria()`

UnsetProvisioningCriteria ensures that no value is present for ProvisioningCriteria, not even an explicit nil
### GetAdditionalOwners

`func (o *Accessprofile) GetAdditionalOwners() []Additionalownerref`

GetAdditionalOwners returns the AdditionalOwners field if non-nil, zero value otherwise.

### GetAdditionalOwnersOk

`func (o *Accessprofile) GetAdditionalOwnersOk() (*[]Additionalownerref, bool)`

GetAdditionalOwnersOk returns a tuple with the AdditionalOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalOwners

`func (o *Accessprofile) SetAdditionalOwners(v []Additionalownerref)`

SetAdditionalOwners sets AdditionalOwners field to given value.

### HasAdditionalOwners

`func (o *Accessprofile) HasAdditionalOwners() bool`

HasAdditionalOwners returns a boolean if a field has been set.

### SetAdditionalOwnersNil

`func (o *Accessprofile) SetAdditionalOwnersNil(b bool)`

 SetAdditionalOwnersNil sets the value for AdditionalOwners to be an explicit nil

### UnsetAdditionalOwners
`func (o *Accessprofile) UnsetAdditionalOwners()`

UnsetAdditionalOwners ensures that no value is present for AdditionalOwners, not even an explicit nil

