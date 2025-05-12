---
id: beta-entitlement
title: Entitlement
pagination_label: Entitlement
sidebar_label: Entitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlement', 'BetaEntitlement'] 
slug: /tools/sdk/go/beta/models/entitlement
tags: ['SDK', 'Software Development Kit', 'Entitlement', 'BetaEntitlement']
---

# Entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The entitlement id | [optional] 
**Name** | Pointer to **string** | The entitlement name | [optional] 
**Created** | Pointer to **time.Time** | Time when the entitlement was created | [optional] 
**Modified** | Pointer to **time.Time** | Time when the entitlement was last modified | [optional] 
**Attribute** | Pointer to **NullableString** | The entitlement attribute name | [optional] 
**Value** | Pointer to **string** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The object type of the entitlement from the source schema | [optional] 
**Privileged** | Pointer to **bool** | True if the entitlement is privileged | [optional] [default to false]
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] [default to false]
**Description** | Pointer to **NullableString** | The description of the entitlement | [optional] 
**Requestable** | Pointer to **bool** | True if the entitlement is requestable | [optional] [default to false]
**Attributes** | Pointer to **map[string]interface{}** | A map of free-form key-value pairs from the source system | [optional] 
**Source** | Pointer to [**EntitlementSource**](entitlement-source) |  | [optional] 
**Owner** | Pointer to [**EntitlementOwner**](entitlement-owner) |  | [optional] 
**DirectPermissions** | Pointer to [**[]PermissionDto**](permission-dto) |  | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**ManuallyUpdatedFields** | Pointer to [**EntitlementManuallyUpdatedFields**](entitlement-manually-updated-fields) |  | [optional] 
**AccessModelMetadata** | Pointer to [**EntitlementAccessModelMetadata**](entitlement-access-model-metadata) |  | [optional] 

## Methods

### NewEntitlement

`func NewEntitlement() *Entitlement`

NewEntitlement instantiates a new Entitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementWithDefaults

`func NewEntitlementWithDefaults() *Entitlement`

NewEntitlementWithDefaults instantiates a new Entitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Entitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Entitlement) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Entitlement) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Entitlement) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Entitlement) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Entitlement) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Entitlement) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Entitlement) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Entitlement) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAttribute

`func (o *Entitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Entitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Entitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Entitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *Entitlement) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *Entitlement) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *Entitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Entitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Entitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Entitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *Entitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *Entitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *Entitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *Entitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetPrivileged

`func (o *Entitlement) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *Entitlement) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *Entitlement) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *Entitlement) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *Entitlement) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *Entitlement) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *Entitlement) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *Entitlement) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetDescription

`func (o *Entitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Entitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Entitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Entitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Entitlement) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Entitlement) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetRequestable

`func (o *Entitlement) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Entitlement) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Entitlement) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *Entitlement) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAttributes

`func (o *Entitlement) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Entitlement) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Entitlement) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Entitlement) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSource

`func (o *Entitlement) GetSource() EntitlementSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Entitlement) GetSourceOk() (*EntitlementSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Entitlement) SetSource(v EntitlementSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Entitlement) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetOwner

`func (o *Entitlement) GetOwner() EntitlementOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Entitlement) GetOwnerOk() (*EntitlementOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Entitlement) SetOwner(v EntitlementOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Entitlement) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDirectPermissions

`func (o *Entitlement) GetDirectPermissions() []PermissionDto`

GetDirectPermissions returns the DirectPermissions field if non-nil, zero value otherwise.

### GetDirectPermissionsOk

`func (o *Entitlement) GetDirectPermissionsOk() (*[]PermissionDto, bool)`

GetDirectPermissionsOk returns a tuple with the DirectPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectPermissions

`func (o *Entitlement) SetDirectPermissions(v []PermissionDto)`

SetDirectPermissions sets DirectPermissions field to given value.

### HasDirectPermissions

`func (o *Entitlement) HasDirectPermissions() bool`

HasDirectPermissions returns a boolean if a field has been set.

### GetSegments

`func (o *Entitlement) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Entitlement) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Entitlement) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Entitlement) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *Entitlement) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *Entitlement) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetManuallyUpdatedFields

`func (o *Entitlement) GetManuallyUpdatedFields() EntitlementManuallyUpdatedFields`

GetManuallyUpdatedFields returns the ManuallyUpdatedFields field if non-nil, zero value otherwise.

### GetManuallyUpdatedFieldsOk

`func (o *Entitlement) GetManuallyUpdatedFieldsOk() (*EntitlementManuallyUpdatedFields, bool)`

GetManuallyUpdatedFieldsOk returns a tuple with the ManuallyUpdatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdatedFields

`func (o *Entitlement) SetManuallyUpdatedFields(v EntitlementManuallyUpdatedFields)`

SetManuallyUpdatedFields sets ManuallyUpdatedFields field to given value.

### HasManuallyUpdatedFields

`func (o *Entitlement) HasManuallyUpdatedFields() bool`

HasManuallyUpdatedFields returns a boolean if a field has been set.

### GetAccessModelMetadata

`func (o *Entitlement) GetAccessModelMetadata() EntitlementAccessModelMetadata`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *Entitlement) GetAccessModelMetadataOk() (*EntitlementAccessModelMetadata, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *Entitlement) SetAccessModelMetadata(v EntitlementAccessModelMetadata)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *Entitlement) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.


