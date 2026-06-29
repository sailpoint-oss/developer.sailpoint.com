---
id: v1-entitlementrecommendationrecord
title: Entitlementrecommendationrecord
pagination_label: Entitlementrecommendationrecord
sidebar_label: Entitlementrecommendationrecord
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementrecommendationrecord', 'V1Entitlementrecommendationrecord'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/entitlementrecommendationrecord
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationrecord', 'V1Entitlementrecommendationrecord']
---

# Entitlementrecommendationrecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecordType** | Pointer to **string** | The type of recommendation. \"SED\" indicates a suggested description recommendation; \"privilege\" indicates a privilege-level recommendation. | [optional] 
**Id** | Pointer to **string** | The unique identifier for this recommendation record. | [optional] 
**Attribute** | Pointer to **NullableString** | The entitlement attribute name (e.g. \"groups\"). | [optional] 
**DisplayName** | Pointer to **NullableString** | The human-readable display name of the entitlement. | [optional] 
**Name** | Pointer to **NullableString** | The internal name of the entitlement. | [optional] 
**SourceId** | Pointer to **string** | The ID of the source that owns this entitlement. | [optional] 
**SourceName** | Pointer to **string** | The display name of the source that owns this entitlement. | [optional] 
**Status** | Pointer to **string** | The current review status of the recommendation. | [optional] 
**Type** | Pointer to **NullableString** | The entitlement type (e.g. \"group\"). | [optional] 
**Value** | Pointer to **string** | The entitlement value or identifier. | [optional] 
**Description** | Pointer to **NullableString** | The current description of the entitlement, if one exists. | [optional] 
**SuggestedDescription** | Pointer to **NullableString** | The AI-generated suggested description for the entitlement (SED records only). | [optional] 
**Privilege** | Pointer to **NullableString** | The current privilege level assigned to the entitlement. | [optional] 
**SuggestedPrivilege** | Pointer to **NullableString** | The AI-suggested privilege level for the entitlement (privilege records only). | [optional] 
**ApprovedBy** | Pointer to **NullableString** | The ID of the identity who approved this recommendation. | [optional] 
**ApprovedType** | Pointer to **NullableString** | How the recommendation was approved (e.g. \"direct\"). | [optional] 
**ApprovedWhen** | Pointer to **NullableTime** | The timestamp when the recommendation was approved. | [optional] 
**LlmBatchCreatedAt** | Pointer to **NullableTime** | The timestamp when the LLM batch that generated this recommendation was created. | [optional] 

## Methods

### NewEntitlementrecommendationrecord

`func NewEntitlementrecommendationrecord() *Entitlementrecommendationrecord`

NewEntitlementrecommendationrecord instantiates a new Entitlementrecommendationrecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementrecommendationrecordWithDefaults

`func NewEntitlementrecommendationrecordWithDefaults() *Entitlementrecommendationrecord`

NewEntitlementrecommendationrecordWithDefaults instantiates a new Entitlementrecommendationrecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecordType

`func (o *Entitlementrecommendationrecord) GetRecordType() string`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *Entitlementrecommendationrecord) GetRecordTypeOk() (*string, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *Entitlementrecommendationrecord) SetRecordType(v string)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *Entitlementrecommendationrecord) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### GetId

`func (o *Entitlementrecommendationrecord) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlementrecommendationrecord) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlementrecommendationrecord) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlementrecommendationrecord) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAttribute

`func (o *Entitlementrecommendationrecord) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Entitlementrecommendationrecord) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Entitlementrecommendationrecord) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Entitlementrecommendationrecord) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *Entitlementrecommendationrecord) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *Entitlementrecommendationrecord) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetDisplayName

`func (o *Entitlementrecommendationrecord) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Entitlementrecommendationrecord) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Entitlementrecommendationrecord) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Entitlementrecommendationrecord) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### SetDisplayNameNil

`func (o *Entitlementrecommendationrecord) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *Entitlementrecommendationrecord) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil
### GetName

`func (o *Entitlementrecommendationrecord) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlementrecommendationrecord) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlementrecommendationrecord) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlementrecommendationrecord) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Entitlementrecommendationrecord) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Entitlementrecommendationrecord) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetSourceId

`func (o *Entitlementrecommendationrecord) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Entitlementrecommendationrecord) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Entitlementrecommendationrecord) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Entitlementrecommendationrecord) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *Entitlementrecommendationrecord) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Entitlementrecommendationrecord) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Entitlementrecommendationrecord) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Entitlementrecommendationrecord) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetStatus

`func (o *Entitlementrecommendationrecord) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Entitlementrecommendationrecord) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Entitlementrecommendationrecord) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Entitlementrecommendationrecord) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *Entitlementrecommendationrecord) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementrecommendationrecord) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementrecommendationrecord) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entitlementrecommendationrecord) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Entitlementrecommendationrecord) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Entitlementrecommendationrecord) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetValue

`func (o *Entitlementrecommendationrecord) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Entitlementrecommendationrecord) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Entitlementrecommendationrecord) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Entitlementrecommendationrecord) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDescription

`func (o *Entitlementrecommendationrecord) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Entitlementrecommendationrecord) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Entitlementrecommendationrecord) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Entitlementrecommendationrecord) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Entitlementrecommendationrecord) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Entitlementrecommendationrecord) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSuggestedDescription

`func (o *Entitlementrecommendationrecord) GetSuggestedDescription() string`

GetSuggestedDescription returns the SuggestedDescription field if non-nil, zero value otherwise.

### GetSuggestedDescriptionOk

`func (o *Entitlementrecommendationrecord) GetSuggestedDescriptionOk() (*string, bool)`

GetSuggestedDescriptionOk returns a tuple with the SuggestedDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedDescription

`func (o *Entitlementrecommendationrecord) SetSuggestedDescription(v string)`

SetSuggestedDescription sets SuggestedDescription field to given value.

### HasSuggestedDescription

`func (o *Entitlementrecommendationrecord) HasSuggestedDescription() bool`

HasSuggestedDescription returns a boolean if a field has been set.

### SetSuggestedDescriptionNil

`func (o *Entitlementrecommendationrecord) SetSuggestedDescriptionNil(b bool)`

 SetSuggestedDescriptionNil sets the value for SuggestedDescription to be an explicit nil

### UnsetSuggestedDescription
`func (o *Entitlementrecommendationrecord) UnsetSuggestedDescription()`

UnsetSuggestedDescription ensures that no value is present for SuggestedDescription, not even an explicit nil
### GetPrivilege

`func (o *Entitlementrecommendationrecord) GetPrivilege() string`

GetPrivilege returns the Privilege field if non-nil, zero value otherwise.

### GetPrivilegeOk

`func (o *Entitlementrecommendationrecord) GetPrivilegeOk() (*string, bool)`

GetPrivilegeOk returns a tuple with the Privilege field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilege

`func (o *Entitlementrecommendationrecord) SetPrivilege(v string)`

SetPrivilege sets Privilege field to given value.

### HasPrivilege

`func (o *Entitlementrecommendationrecord) HasPrivilege() bool`

HasPrivilege returns a boolean if a field has been set.

### SetPrivilegeNil

`func (o *Entitlementrecommendationrecord) SetPrivilegeNil(b bool)`

 SetPrivilegeNil sets the value for Privilege to be an explicit nil

### UnsetPrivilege
`func (o *Entitlementrecommendationrecord) UnsetPrivilege()`

UnsetPrivilege ensures that no value is present for Privilege, not even an explicit nil
### GetSuggestedPrivilege

`func (o *Entitlementrecommendationrecord) GetSuggestedPrivilege() string`

GetSuggestedPrivilege returns the SuggestedPrivilege field if non-nil, zero value otherwise.

### GetSuggestedPrivilegeOk

`func (o *Entitlementrecommendationrecord) GetSuggestedPrivilegeOk() (*string, bool)`

GetSuggestedPrivilegeOk returns a tuple with the SuggestedPrivilege field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedPrivilege

`func (o *Entitlementrecommendationrecord) SetSuggestedPrivilege(v string)`

SetSuggestedPrivilege sets SuggestedPrivilege field to given value.

### HasSuggestedPrivilege

`func (o *Entitlementrecommendationrecord) HasSuggestedPrivilege() bool`

HasSuggestedPrivilege returns a boolean if a field has been set.

### SetSuggestedPrivilegeNil

`func (o *Entitlementrecommendationrecord) SetSuggestedPrivilegeNil(b bool)`

 SetSuggestedPrivilegeNil sets the value for SuggestedPrivilege to be an explicit nil

### UnsetSuggestedPrivilege
`func (o *Entitlementrecommendationrecord) UnsetSuggestedPrivilege()`

UnsetSuggestedPrivilege ensures that no value is present for SuggestedPrivilege, not even an explicit nil
### GetApprovedBy

`func (o *Entitlementrecommendationrecord) GetApprovedBy() string`

GetApprovedBy returns the ApprovedBy field if non-nil, zero value otherwise.

### GetApprovedByOk

`func (o *Entitlementrecommendationrecord) GetApprovedByOk() (*string, bool)`

GetApprovedByOk returns a tuple with the ApprovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedBy

`func (o *Entitlementrecommendationrecord) SetApprovedBy(v string)`

SetApprovedBy sets ApprovedBy field to given value.

### HasApprovedBy

`func (o *Entitlementrecommendationrecord) HasApprovedBy() bool`

HasApprovedBy returns a boolean if a field has been set.

### SetApprovedByNil

`func (o *Entitlementrecommendationrecord) SetApprovedByNil(b bool)`

 SetApprovedByNil sets the value for ApprovedBy to be an explicit nil

### UnsetApprovedBy
`func (o *Entitlementrecommendationrecord) UnsetApprovedBy()`

UnsetApprovedBy ensures that no value is present for ApprovedBy, not even an explicit nil
### GetApprovedType

`func (o *Entitlementrecommendationrecord) GetApprovedType() string`

GetApprovedType returns the ApprovedType field if non-nil, zero value otherwise.

### GetApprovedTypeOk

`func (o *Entitlementrecommendationrecord) GetApprovedTypeOk() (*string, bool)`

GetApprovedTypeOk returns a tuple with the ApprovedType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedType

`func (o *Entitlementrecommendationrecord) SetApprovedType(v string)`

SetApprovedType sets ApprovedType field to given value.

### HasApprovedType

`func (o *Entitlementrecommendationrecord) HasApprovedType() bool`

HasApprovedType returns a boolean if a field has been set.

### SetApprovedTypeNil

`func (o *Entitlementrecommendationrecord) SetApprovedTypeNil(b bool)`

 SetApprovedTypeNil sets the value for ApprovedType to be an explicit nil

### UnsetApprovedType
`func (o *Entitlementrecommendationrecord) UnsetApprovedType()`

UnsetApprovedType ensures that no value is present for ApprovedType, not even an explicit nil
### GetApprovedWhen

`func (o *Entitlementrecommendationrecord) GetApprovedWhen() SailPointTime`

GetApprovedWhen returns the ApprovedWhen field if non-nil, zero value otherwise.

### GetApprovedWhenOk

`func (o *Entitlementrecommendationrecord) GetApprovedWhenOk() (*SailPointTime, bool)`

GetApprovedWhenOk returns a tuple with the ApprovedWhen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedWhen

`func (o *Entitlementrecommendationrecord) SetApprovedWhen(v SailPointTime)`

SetApprovedWhen sets ApprovedWhen field to given value.

### HasApprovedWhen

`func (o *Entitlementrecommendationrecord) HasApprovedWhen() bool`

HasApprovedWhen returns a boolean if a field has been set.

### SetApprovedWhenNil

`func (o *Entitlementrecommendationrecord) SetApprovedWhenNil(b bool)`

 SetApprovedWhenNil sets the value for ApprovedWhen to be an explicit nil

### UnsetApprovedWhen
`func (o *Entitlementrecommendationrecord) UnsetApprovedWhen()`

UnsetApprovedWhen ensures that no value is present for ApprovedWhen, not even an explicit nil
### GetLlmBatchCreatedAt

`func (o *Entitlementrecommendationrecord) GetLlmBatchCreatedAt() SailPointTime`

GetLlmBatchCreatedAt returns the LlmBatchCreatedAt field if non-nil, zero value otherwise.

### GetLlmBatchCreatedAtOk

`func (o *Entitlementrecommendationrecord) GetLlmBatchCreatedAtOk() (*SailPointTime, bool)`

GetLlmBatchCreatedAtOk returns a tuple with the LlmBatchCreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmBatchCreatedAt

`func (o *Entitlementrecommendationrecord) SetLlmBatchCreatedAt(v SailPointTime)`

SetLlmBatchCreatedAt sets LlmBatchCreatedAt field to given value.

### HasLlmBatchCreatedAt

`func (o *Entitlementrecommendationrecord) HasLlmBatchCreatedAt() bool`

HasLlmBatchCreatedAt returns a boolean if a field has been set.

### SetLlmBatchCreatedAtNil

`func (o *Entitlementrecommendationrecord) SetLlmBatchCreatedAtNil(b bool)`

 SetLlmBatchCreatedAtNil sets the value for LlmBatchCreatedAt to be an explicit nil

### UnsetLlmBatchCreatedAt
`func (o *Entitlementrecommendationrecord) UnsetLlmBatchCreatedAt()`

UnsetLlmBatchCreatedAt ensures that no value is present for LlmBatchCreatedAt, not even an explicit nil

