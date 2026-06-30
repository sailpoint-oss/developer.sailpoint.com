---
id: v1-entitlementv2
title: Entitlementv2
pagination_label: Entitlementv2
sidebar_label: Entitlementv2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementv2', 'V1Entitlementv2'] 
slug: /tools/sdk/go/entitlements/models/entitlementv2
tags: ['SDK', 'Software Development Kit', 'Entitlementv2', 'V1Entitlementv2']
---

# Entitlementv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The entitlement id | [optional] 
**Name** | Pointer to **string** | The entitlement name | [optional] 
**Attribute** | Pointer to **string** | The entitlement attribute name | [optional] 
**Value** | Pointer to **string** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The object type of the entitlement from the source schema | [optional] 
**Description** | Pointer to **NullableString** | The description of the entitlement | [optional] 
**PrivilegeLevel** | Pointer to [**Entitlementv2PrivilegeLevel**](entitlementv2-privilege-level) |  | [optional] 
**Tags** | Pointer to **[]string** | List of tags assigned to the entitlement | [optional] 
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] [default to false]
**Requestable** | Pointer to **bool** | True if the entitlement is able to be directly requested | [optional] [default to false]
**Owner** | Pointer to [**NullableEntitlementv2Owner**](entitlementv2-owner) |  | [optional] 
**ManuallyUpdatedFields** | Pointer to **map[string]interface{}** | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [optional] 
**AccessModelMetadata** | Pointer to [**Entitlementv2AccessModelMetadata**](entitlementv2-access-model-metadata) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the entitlement was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the entitlement was last modified | [optional] 
**Source** | Pointer to [**Entitlementv2Source**](entitlementv2-source) |  | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | A map of free-form key-value pairs from the source system | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**DirectPermissions** | Pointer to [**[]Permissiondto**](permissiondto) |  | [optional] 

## Methods

### NewEntitlementv2

`func NewEntitlementv2() *Entitlementv2`

NewEntitlementv2 instantiates a new Entitlementv2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementv2WithDefaults

`func NewEntitlementv2WithDefaults() *Entitlementv2`

NewEntitlementv2WithDefaults instantiates a new Entitlementv2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entitlementv2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlementv2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlementv2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlementv2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Entitlementv2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlementv2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlementv2) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlementv2) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttribute

`func (o *Entitlementv2) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Entitlementv2) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Entitlementv2) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Entitlementv2) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Entitlementv2) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Entitlementv2) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Entitlementv2) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Entitlementv2) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *Entitlementv2) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *Entitlementv2) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *Entitlementv2) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *Entitlementv2) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetDescription

`func (o *Entitlementv2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Entitlementv2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Entitlementv2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Entitlementv2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Entitlementv2) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Entitlementv2) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPrivilegeLevel

`func (o *Entitlementv2) GetPrivilegeLevel() Entitlementv2PrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Entitlementv2) GetPrivilegeLevelOk() (*Entitlementv2PrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Entitlementv2) SetPrivilegeLevel(v Entitlementv2PrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Entitlementv2) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### GetTags

`func (o *Entitlementv2) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Entitlementv2) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Entitlementv2) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Entitlementv2) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *Entitlementv2) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *Entitlementv2) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetCloudGoverned

`func (o *Entitlementv2) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *Entitlementv2) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *Entitlementv2) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *Entitlementv2) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetRequestable

`func (o *Entitlementv2) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Entitlementv2) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Entitlementv2) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *Entitlementv2) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetOwner

`func (o *Entitlementv2) GetOwner() Entitlementv2Owner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Entitlementv2) GetOwnerOk() (*Entitlementv2Owner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Entitlementv2) SetOwner(v Entitlementv2Owner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Entitlementv2) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Entitlementv2) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Entitlementv2) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetManuallyUpdatedFields

`func (o *Entitlementv2) GetManuallyUpdatedFields() map[string]interface{}`

GetManuallyUpdatedFields returns the ManuallyUpdatedFields field if non-nil, zero value otherwise.

### GetManuallyUpdatedFieldsOk

`func (o *Entitlementv2) GetManuallyUpdatedFieldsOk() (*map[string]interface{}, bool)`

GetManuallyUpdatedFieldsOk returns a tuple with the ManuallyUpdatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdatedFields

`func (o *Entitlementv2) SetManuallyUpdatedFields(v map[string]interface{})`

SetManuallyUpdatedFields sets ManuallyUpdatedFields field to given value.

### HasManuallyUpdatedFields

`func (o *Entitlementv2) HasManuallyUpdatedFields() bool`

HasManuallyUpdatedFields returns a boolean if a field has been set.

### SetManuallyUpdatedFieldsNil

`func (o *Entitlementv2) SetManuallyUpdatedFieldsNil(b bool)`

 SetManuallyUpdatedFieldsNil sets the value for ManuallyUpdatedFields to be an explicit nil

### UnsetManuallyUpdatedFields
`func (o *Entitlementv2) UnsetManuallyUpdatedFields()`

UnsetManuallyUpdatedFields ensures that no value is present for ManuallyUpdatedFields, not even an explicit nil
### GetAccessModelMetadata

`func (o *Entitlementv2) GetAccessModelMetadata() Entitlementv2AccessModelMetadata`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *Entitlementv2) GetAccessModelMetadataOk() (*Entitlementv2AccessModelMetadata, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *Entitlementv2) SetAccessModelMetadata(v Entitlementv2AccessModelMetadata)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *Entitlementv2) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.

### GetCreated

`func (o *Entitlementv2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Entitlementv2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Entitlementv2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Entitlementv2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Entitlementv2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Entitlementv2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Entitlementv2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Entitlementv2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetSource

`func (o *Entitlementv2) GetSource() Entitlementv2Source`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Entitlementv2) GetSourceOk() (*Entitlementv2Source, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Entitlementv2) SetSource(v Entitlementv2Source)`

SetSource sets Source field to given value.

### HasSource

`func (o *Entitlementv2) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAttributes

`func (o *Entitlementv2) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Entitlementv2) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Entitlementv2) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Entitlementv2) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSegments

`func (o *Entitlementv2) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Entitlementv2) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Entitlementv2) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Entitlementv2) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *Entitlementv2) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *Entitlementv2) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetDirectPermissions

`func (o *Entitlementv2) GetDirectPermissions() []Permissiondto`

GetDirectPermissions returns the DirectPermissions field if non-nil, zero value otherwise.

### GetDirectPermissionsOk

`func (o *Entitlementv2) GetDirectPermissionsOk() (*[]Permissiondto, bool)`

GetDirectPermissionsOk returns a tuple with the DirectPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectPermissions

`func (o *Entitlementv2) SetDirectPermissions(v []Permissiondto)`

SetDirectPermissions sets DirectPermissions field to given value.

### HasDirectPermissions

`func (o *Entitlementv2) HasDirectPermissions() bool`

HasDirectPermissions returns a boolean if a field has been set.


