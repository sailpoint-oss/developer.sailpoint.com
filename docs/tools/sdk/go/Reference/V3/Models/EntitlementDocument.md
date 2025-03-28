---
id: entitlement-document
title: EntitlementDocument
pagination_label: EntitlementDocument
sidebar_label: EntitlementDocument
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementDocument', 'EntitlementDocument'] 
slug: /tools/sdk/go/v3/models/entitlement-document
tags: ['SDK', 'Software Development Kit', 'EntitlementDocument', 'EntitlementDocument']
---

# EntitlementDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the referenced object. | 
**Name** | **string** | The human readable name of the referenced object. | 
**Modified** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | Pointer to **string** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the &#x60;synced&#x60; time and the time when the updated data is actually available in the search API.  | [optional] 
**DisplayName** | Pointer to **string** | Entitlement&#39;s display name. | [optional] 
**Source** | Pointer to [**EntitlementDocumentAllOfSource**](entitlement-document-all-of-source) |  | [optional] 
**Segments** | Pointer to [**[]BaseSegment**](base-segment) | Segments with the entitlement. | [optional] 
**SegmentCount** | Pointer to **int32** | Number of segments with the role. | [optional] 
**Requestable** | Pointer to **bool** | Indicates whether the entitlement is requestable. | [optional] [default to false]
**CloudGoverned** | Pointer to **bool** | Indicates whether the entitlement is cloud governed. | [optional] [default to false]
**Created** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Privileged** | Pointer to **bool** | Indicates whether the entitlement is privileged. | [optional] [default to false]
**Tags** | Pointer to **[]string** | Tags that have been applied to the object. | [optional] 
**Attribute** | Pointer to **string** | Attribute information for the entitlement. | [optional] 
**Value** | Pointer to **string** | Value of the entitlement. | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | Source schema object type of the entitlement. | [optional] 
**Schema** | Pointer to **string** | Schema type of the entitlement. | [optional] 
**Hash** | Pointer to **string** | Read-only calculated hash value of an entitlement. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Attributes of the entitlement. | [optional] 
**TruncatedAttributes** | Pointer to **[]string** | Truncated attributes of the entitlement. | [optional] 
**ContainsDataAccess** | Pointer to **bool** | Indicates whether the entitlement contains data access. | [optional] [default to false]
**ManuallyUpdatedFields** | Pointer to [**NullableEntitlementDocumentAllOfManuallyUpdatedFields**](entitlement-document-all-of-manually-updated-fields) |  | [optional] 
**Permissions** | Pointer to [**[]EntitlementDocumentAllOfPermissions**](entitlement-document-all-of-permissions) |  | [optional] 

## Methods

### NewEntitlementDocument

`func NewEntitlementDocument(id string, name string, ) *EntitlementDocument`

NewEntitlementDocument instantiates a new EntitlementDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementDocumentWithDefaults

`func NewEntitlementDocumentWithDefaults() *EntitlementDocument`

NewEntitlementDocumentWithDefaults instantiates a new EntitlementDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementDocument) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementDocument) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementDocument) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *EntitlementDocument) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementDocument) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementDocument) SetName(v string)`

SetName sets Name field to given value.


### GetModified

`func (o *EntitlementDocument) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *EntitlementDocument) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *EntitlementDocument) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *EntitlementDocument) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *EntitlementDocument) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *EntitlementDocument) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSynced

`func (o *EntitlementDocument) GetSynced() string`

GetSynced returns the Synced field if non-nil, zero value otherwise.

### GetSyncedOk

`func (o *EntitlementDocument) GetSyncedOk() (*string, bool)`

GetSyncedOk returns a tuple with the Synced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynced

`func (o *EntitlementDocument) SetSynced(v string)`

SetSynced sets Synced field to given value.

### HasSynced

`func (o *EntitlementDocument) HasSynced() bool`

HasSynced returns a boolean if a field has been set.

### GetDisplayName

`func (o *EntitlementDocument) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *EntitlementDocument) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *EntitlementDocument) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *EntitlementDocument) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSource

`func (o *EntitlementDocument) GetSource() EntitlementDocumentAllOfSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *EntitlementDocument) GetSourceOk() (*EntitlementDocumentAllOfSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *EntitlementDocument) SetSource(v EntitlementDocumentAllOfSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *EntitlementDocument) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSegments

`func (o *EntitlementDocument) GetSegments() []BaseSegment`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *EntitlementDocument) GetSegmentsOk() (*[]BaseSegment, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *EntitlementDocument) SetSegments(v []BaseSegment)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *EntitlementDocument) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetSegmentCount

`func (o *EntitlementDocument) GetSegmentCount() int32`

GetSegmentCount returns the SegmentCount field if non-nil, zero value otherwise.

### GetSegmentCountOk

`func (o *EntitlementDocument) GetSegmentCountOk() (*int32, bool)`

GetSegmentCountOk returns a tuple with the SegmentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegmentCount

`func (o *EntitlementDocument) SetSegmentCount(v int32)`

SetSegmentCount sets SegmentCount field to given value.

### HasSegmentCount

`func (o *EntitlementDocument) HasSegmentCount() bool`

HasSegmentCount returns a boolean if a field has been set.

### GetRequestable

`func (o *EntitlementDocument) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *EntitlementDocument) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *EntitlementDocument) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *EntitlementDocument) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *EntitlementDocument) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *EntitlementDocument) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *EntitlementDocument) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *EntitlementDocument) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetCreated

`func (o *EntitlementDocument) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *EntitlementDocument) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *EntitlementDocument) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *EntitlementDocument) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *EntitlementDocument) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *EntitlementDocument) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetPrivileged

`func (o *EntitlementDocument) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *EntitlementDocument) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *EntitlementDocument) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *EntitlementDocument) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetTags

`func (o *EntitlementDocument) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *EntitlementDocument) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *EntitlementDocument) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *EntitlementDocument) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetAttribute

`func (o *EntitlementDocument) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *EntitlementDocument) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *EntitlementDocument) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *EntitlementDocument) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *EntitlementDocument) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EntitlementDocument) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EntitlementDocument) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *EntitlementDocument) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *EntitlementDocument) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *EntitlementDocument) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *EntitlementDocument) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *EntitlementDocument) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetSchema

`func (o *EntitlementDocument) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *EntitlementDocument) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *EntitlementDocument) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *EntitlementDocument) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetHash

`func (o *EntitlementDocument) GetHash() string`

GetHash returns the Hash field if non-nil, zero value otherwise.

### GetHashOk

`func (o *EntitlementDocument) GetHashOk() (*string, bool)`

GetHashOk returns a tuple with the Hash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHash

`func (o *EntitlementDocument) SetHash(v string)`

SetHash sets Hash field to given value.

### HasHash

`func (o *EntitlementDocument) HasHash() bool`

HasHash returns a boolean if a field has been set.

### GetAttributes

`func (o *EntitlementDocument) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *EntitlementDocument) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *EntitlementDocument) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *EntitlementDocument) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetTruncatedAttributes

`func (o *EntitlementDocument) GetTruncatedAttributes() []string`

GetTruncatedAttributes returns the TruncatedAttributes field if non-nil, zero value otherwise.

### GetTruncatedAttributesOk

`func (o *EntitlementDocument) GetTruncatedAttributesOk() (*[]string, bool)`

GetTruncatedAttributesOk returns a tuple with the TruncatedAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTruncatedAttributes

`func (o *EntitlementDocument) SetTruncatedAttributes(v []string)`

SetTruncatedAttributes sets TruncatedAttributes field to given value.

### HasTruncatedAttributes

`func (o *EntitlementDocument) HasTruncatedAttributes() bool`

HasTruncatedAttributes returns a boolean if a field has been set.

### GetContainsDataAccess

`func (o *EntitlementDocument) GetContainsDataAccess() bool`

GetContainsDataAccess returns the ContainsDataAccess field if non-nil, zero value otherwise.

### GetContainsDataAccessOk

`func (o *EntitlementDocument) GetContainsDataAccessOk() (*bool, bool)`

GetContainsDataAccessOk returns a tuple with the ContainsDataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsDataAccess

`func (o *EntitlementDocument) SetContainsDataAccess(v bool)`

SetContainsDataAccess sets ContainsDataAccess field to given value.

### HasContainsDataAccess

`func (o *EntitlementDocument) HasContainsDataAccess() bool`

HasContainsDataAccess returns a boolean if a field has been set.

### GetManuallyUpdatedFields

`func (o *EntitlementDocument) GetManuallyUpdatedFields() EntitlementDocumentAllOfManuallyUpdatedFields`

GetManuallyUpdatedFields returns the ManuallyUpdatedFields field if non-nil, zero value otherwise.

### GetManuallyUpdatedFieldsOk

`func (o *EntitlementDocument) GetManuallyUpdatedFieldsOk() (*EntitlementDocumentAllOfManuallyUpdatedFields, bool)`

GetManuallyUpdatedFieldsOk returns a tuple with the ManuallyUpdatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdatedFields

`func (o *EntitlementDocument) SetManuallyUpdatedFields(v EntitlementDocumentAllOfManuallyUpdatedFields)`

SetManuallyUpdatedFields sets ManuallyUpdatedFields field to given value.

### HasManuallyUpdatedFields

`func (o *EntitlementDocument) HasManuallyUpdatedFields() bool`

HasManuallyUpdatedFields returns a boolean if a field has been set.

### SetManuallyUpdatedFieldsNil

`func (o *EntitlementDocument) SetManuallyUpdatedFieldsNil(b bool)`

 SetManuallyUpdatedFieldsNil sets the value for ManuallyUpdatedFields to be an explicit nil

### UnsetManuallyUpdatedFields
`func (o *EntitlementDocument) UnsetManuallyUpdatedFields()`

UnsetManuallyUpdatedFields ensures that no value is present for ManuallyUpdatedFields, not even an explicit nil
### GetPermissions

`func (o *EntitlementDocument) GetPermissions() []EntitlementDocumentAllOfPermissions`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *EntitlementDocument) GetPermissionsOk() (*[]EntitlementDocumentAllOfPermissions, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *EntitlementDocument) SetPermissions(v []EntitlementDocumentAllOfPermissions)`

SetPermissions sets Permissions field to given value.

### HasPermissions

`func (o *EntitlementDocument) HasPermissions() bool`

HasPermissions returns a boolean if a field has been set.


