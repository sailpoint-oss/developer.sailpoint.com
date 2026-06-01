---
id: v2026-entitlement-recommendation-record
title: EntitlementRecommendationRecord
pagination_label: EntitlementRecommendationRecord
sidebar_label: EntitlementRecommendationRecord
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRecommendationRecord', 'V2026EntitlementRecommendationRecord'] 
slug: /tools/sdk/go/v2026/models/entitlement-recommendation-record
tags: ['SDK', 'Software Development Kit', 'EntitlementRecommendationRecord', 'V2026EntitlementRecommendationRecord']
---

# EntitlementRecommendationRecord

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

### NewEntitlementRecommendationRecord

`func NewEntitlementRecommendationRecord() *EntitlementRecommendationRecord`

NewEntitlementRecommendationRecord instantiates a new EntitlementRecommendationRecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRecommendationRecordWithDefaults

`func NewEntitlementRecommendationRecordWithDefaults() *EntitlementRecommendationRecord`

NewEntitlementRecommendationRecordWithDefaults instantiates a new EntitlementRecommendationRecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecordType

`func (o *EntitlementRecommendationRecord) GetRecordType() string`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *EntitlementRecommendationRecord) GetRecordTypeOk() (*string, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *EntitlementRecommendationRecord) SetRecordType(v string)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *EntitlementRecommendationRecord) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### GetId

`func (o *EntitlementRecommendationRecord) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementRecommendationRecord) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementRecommendationRecord) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementRecommendationRecord) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAttribute

`func (o *EntitlementRecommendationRecord) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *EntitlementRecommendationRecord) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *EntitlementRecommendationRecord) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *EntitlementRecommendationRecord) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *EntitlementRecommendationRecord) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *EntitlementRecommendationRecord) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetDisplayName

`func (o *EntitlementRecommendationRecord) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *EntitlementRecommendationRecord) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *EntitlementRecommendationRecord) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *EntitlementRecommendationRecord) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### SetDisplayNameNil

`func (o *EntitlementRecommendationRecord) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *EntitlementRecommendationRecord) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil
### GetName

`func (o *EntitlementRecommendationRecord) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementRecommendationRecord) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementRecommendationRecord) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementRecommendationRecord) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *EntitlementRecommendationRecord) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *EntitlementRecommendationRecord) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetSourceId

`func (o *EntitlementRecommendationRecord) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *EntitlementRecommendationRecord) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *EntitlementRecommendationRecord) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *EntitlementRecommendationRecord) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *EntitlementRecommendationRecord) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *EntitlementRecommendationRecord) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *EntitlementRecommendationRecord) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *EntitlementRecommendationRecord) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetStatus

`func (o *EntitlementRecommendationRecord) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *EntitlementRecommendationRecord) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *EntitlementRecommendationRecord) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *EntitlementRecommendationRecord) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *EntitlementRecommendationRecord) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementRecommendationRecord) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementRecommendationRecord) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementRecommendationRecord) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *EntitlementRecommendationRecord) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *EntitlementRecommendationRecord) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetValue

`func (o *EntitlementRecommendationRecord) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EntitlementRecommendationRecord) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EntitlementRecommendationRecord) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *EntitlementRecommendationRecord) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDescription

`func (o *EntitlementRecommendationRecord) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EntitlementRecommendationRecord) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EntitlementRecommendationRecord) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EntitlementRecommendationRecord) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *EntitlementRecommendationRecord) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *EntitlementRecommendationRecord) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSuggestedDescription

`func (o *EntitlementRecommendationRecord) GetSuggestedDescription() string`

GetSuggestedDescription returns the SuggestedDescription field if non-nil, zero value otherwise.

### GetSuggestedDescriptionOk

`func (o *EntitlementRecommendationRecord) GetSuggestedDescriptionOk() (*string, bool)`

GetSuggestedDescriptionOk returns a tuple with the SuggestedDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedDescription

`func (o *EntitlementRecommendationRecord) SetSuggestedDescription(v string)`

SetSuggestedDescription sets SuggestedDescription field to given value.

### HasSuggestedDescription

`func (o *EntitlementRecommendationRecord) HasSuggestedDescription() bool`

HasSuggestedDescription returns a boolean if a field has been set.

### SetSuggestedDescriptionNil

`func (o *EntitlementRecommendationRecord) SetSuggestedDescriptionNil(b bool)`

 SetSuggestedDescriptionNil sets the value for SuggestedDescription to be an explicit nil

### UnsetSuggestedDescription
`func (o *EntitlementRecommendationRecord) UnsetSuggestedDescription()`

UnsetSuggestedDescription ensures that no value is present for SuggestedDescription, not even an explicit nil
### GetPrivilege

`func (o *EntitlementRecommendationRecord) GetPrivilege() string`

GetPrivilege returns the Privilege field if non-nil, zero value otherwise.

### GetPrivilegeOk

`func (o *EntitlementRecommendationRecord) GetPrivilegeOk() (*string, bool)`

GetPrivilegeOk returns a tuple with the Privilege field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilege

`func (o *EntitlementRecommendationRecord) SetPrivilege(v string)`

SetPrivilege sets Privilege field to given value.

### HasPrivilege

`func (o *EntitlementRecommendationRecord) HasPrivilege() bool`

HasPrivilege returns a boolean if a field has been set.

### SetPrivilegeNil

`func (o *EntitlementRecommendationRecord) SetPrivilegeNil(b bool)`

 SetPrivilegeNil sets the value for Privilege to be an explicit nil

### UnsetPrivilege
`func (o *EntitlementRecommendationRecord) UnsetPrivilege()`

UnsetPrivilege ensures that no value is present for Privilege, not even an explicit nil
### GetSuggestedPrivilege

`func (o *EntitlementRecommendationRecord) GetSuggestedPrivilege() string`

GetSuggestedPrivilege returns the SuggestedPrivilege field if non-nil, zero value otherwise.

### GetSuggestedPrivilegeOk

`func (o *EntitlementRecommendationRecord) GetSuggestedPrivilegeOk() (*string, bool)`

GetSuggestedPrivilegeOk returns a tuple with the SuggestedPrivilege field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedPrivilege

`func (o *EntitlementRecommendationRecord) SetSuggestedPrivilege(v string)`

SetSuggestedPrivilege sets SuggestedPrivilege field to given value.

### HasSuggestedPrivilege

`func (o *EntitlementRecommendationRecord) HasSuggestedPrivilege() bool`

HasSuggestedPrivilege returns a boolean if a field has been set.

### SetSuggestedPrivilegeNil

`func (o *EntitlementRecommendationRecord) SetSuggestedPrivilegeNil(b bool)`

 SetSuggestedPrivilegeNil sets the value for SuggestedPrivilege to be an explicit nil

### UnsetSuggestedPrivilege
`func (o *EntitlementRecommendationRecord) UnsetSuggestedPrivilege()`

UnsetSuggestedPrivilege ensures that no value is present for SuggestedPrivilege, not even an explicit nil
### GetApprovedBy

`func (o *EntitlementRecommendationRecord) GetApprovedBy() string`

GetApprovedBy returns the ApprovedBy field if non-nil, zero value otherwise.

### GetApprovedByOk

`func (o *EntitlementRecommendationRecord) GetApprovedByOk() (*string, bool)`

GetApprovedByOk returns a tuple with the ApprovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedBy

`func (o *EntitlementRecommendationRecord) SetApprovedBy(v string)`

SetApprovedBy sets ApprovedBy field to given value.

### HasApprovedBy

`func (o *EntitlementRecommendationRecord) HasApprovedBy() bool`

HasApprovedBy returns a boolean if a field has been set.

### SetApprovedByNil

`func (o *EntitlementRecommendationRecord) SetApprovedByNil(b bool)`

 SetApprovedByNil sets the value for ApprovedBy to be an explicit nil

### UnsetApprovedBy
`func (o *EntitlementRecommendationRecord) UnsetApprovedBy()`

UnsetApprovedBy ensures that no value is present for ApprovedBy, not even an explicit nil
### GetApprovedType

`func (o *EntitlementRecommendationRecord) GetApprovedType() string`

GetApprovedType returns the ApprovedType field if non-nil, zero value otherwise.

### GetApprovedTypeOk

`func (o *EntitlementRecommendationRecord) GetApprovedTypeOk() (*string, bool)`

GetApprovedTypeOk returns a tuple with the ApprovedType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedType

`func (o *EntitlementRecommendationRecord) SetApprovedType(v string)`

SetApprovedType sets ApprovedType field to given value.

### HasApprovedType

`func (o *EntitlementRecommendationRecord) HasApprovedType() bool`

HasApprovedType returns a boolean if a field has been set.

### SetApprovedTypeNil

`func (o *EntitlementRecommendationRecord) SetApprovedTypeNil(b bool)`

 SetApprovedTypeNil sets the value for ApprovedType to be an explicit nil

### UnsetApprovedType
`func (o *EntitlementRecommendationRecord) UnsetApprovedType()`

UnsetApprovedType ensures that no value is present for ApprovedType, not even an explicit nil
### GetApprovedWhen

`func (o *EntitlementRecommendationRecord) GetApprovedWhen() SailPointTime`

GetApprovedWhen returns the ApprovedWhen field if non-nil, zero value otherwise.

### GetApprovedWhenOk

`func (o *EntitlementRecommendationRecord) GetApprovedWhenOk() (*SailPointTime, bool)`

GetApprovedWhenOk returns a tuple with the ApprovedWhen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedWhen

`func (o *EntitlementRecommendationRecord) SetApprovedWhen(v SailPointTime)`

SetApprovedWhen sets ApprovedWhen field to given value.

### HasApprovedWhen

`func (o *EntitlementRecommendationRecord) HasApprovedWhen() bool`

HasApprovedWhen returns a boolean if a field has been set.

### SetApprovedWhenNil

`func (o *EntitlementRecommendationRecord) SetApprovedWhenNil(b bool)`

 SetApprovedWhenNil sets the value for ApprovedWhen to be an explicit nil

### UnsetApprovedWhen
`func (o *EntitlementRecommendationRecord) UnsetApprovedWhen()`

UnsetApprovedWhen ensures that no value is present for ApprovedWhen, not even an explicit nil
### GetLlmBatchCreatedAt

`func (o *EntitlementRecommendationRecord) GetLlmBatchCreatedAt() SailPointTime`

GetLlmBatchCreatedAt returns the LlmBatchCreatedAt field if non-nil, zero value otherwise.

### GetLlmBatchCreatedAtOk

`func (o *EntitlementRecommendationRecord) GetLlmBatchCreatedAtOk() (*SailPointTime, bool)`

GetLlmBatchCreatedAtOk returns a tuple with the LlmBatchCreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmBatchCreatedAt

`func (o *EntitlementRecommendationRecord) SetLlmBatchCreatedAt(v SailPointTime)`

SetLlmBatchCreatedAt sets LlmBatchCreatedAt field to given value.

### HasLlmBatchCreatedAt

`func (o *EntitlementRecommendationRecord) HasLlmBatchCreatedAt() bool`

HasLlmBatchCreatedAt returns a boolean if a field has been set.

### SetLlmBatchCreatedAtNil

`func (o *EntitlementRecommendationRecord) SetLlmBatchCreatedAtNil(b bool)`

 SetLlmBatchCreatedAtNil sets the value for LlmBatchCreatedAt to be an explicit nil

### UnsetLlmBatchCreatedAt
`func (o *EntitlementRecommendationRecord) UnsetLlmBatchCreatedAt()`

UnsetLlmBatchCreatedAt ensures that no value is present for LlmBatchCreatedAt, not even an explicit nil

