---
id: role-document
title: RoleDocument
pagination_label: RoleDocument
sidebar_label: RoleDocument
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleDocument', 'RoleDocument'] 
slug: /tools/sdk/go/v3/models/role-document
tags: ['SDK', 'Software Development Kit', 'RoleDocument', 'RoleDocument']
---

# RoleDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Access item&#39;s description. | [optional] 
**Created** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | Pointer to **NullableTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the &#x60;synced&#x60; time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** | Pointer to **bool** | Indicates whether the access item is currently enabled. | [optional] [default to false]
**Requestable** | Pointer to **bool** | Indicates whether the access item can be requested. | [optional] [default to true]
**RequestCommentsRequired** | Pointer to **bool** | Indicates whether comments are required for requests to access the item. | [optional] [default to false]
**Owner** | Pointer to [**BaseAccessOwner**](base-access-owner) |  | [optional] 
**Id** | **string** | ID of the role. | 
**Name** | **string** | Name of the role. | 
**AccessProfiles** | Pointer to [**[]BaseAccessProfile**](base-access-profile) | Access profiles included with the role. | [optional] 
**AccessProfileCount** | Pointer to **NullableInt32** | Number of access profiles included with the role. | [optional] 
**Tags** | Pointer to **[]string** | Tags that have been applied to the object. | [optional] 
**Segments** | Pointer to [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**SegmentCount** | Pointer to **NullableInt32** | Number of segments with the role. | [optional] 
**Entitlements** | Pointer to [**[]RoleDocumentAllOfEntitlements**](role-document-all-of-entitlements) | Entitlements included with the role. | [optional] 
**EntitlementCount** | Pointer to **NullableInt32** | Number of entitlements included with the role. | [optional] 
**Dimensional** | Pointer to **bool** |  | [optional] [default to false]
**DimensionSchemaAttributeCount** | Pointer to **NullableInt32** | Number of dimension attributes included with the role. | [optional] 
**DimensionSchemaAttributes** | Pointer to [**[]RoleDocumentAllOfDimensionSchemaAttributes**](role-document-all-of-dimension-schema-attributes) | Dimension attributes included with the role. | [optional] 
**Dimensions** | Pointer to [**[]RoleDocumentAllOfDimensions**](role-document-all-of-dimensions) |  | [optional] 

## Methods

### NewRoleDocument

`func NewRoleDocument(id string, name string, ) *RoleDocument`

NewRoleDocument instantiates a new RoleDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleDocumentWithDefaults

`func NewRoleDocumentWithDefaults() *RoleDocument`

NewRoleDocumentWithDefaults instantiates a new RoleDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoleDocument) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleDocument) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleDocument) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleDocument) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCreated

`func (o *RoleDocument) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RoleDocument) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RoleDocument) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RoleDocument) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *RoleDocument) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *RoleDocument) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *RoleDocument) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *RoleDocument) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *RoleDocument) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *RoleDocument) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *RoleDocument) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *RoleDocument) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSynced

`func (o *RoleDocument) GetSynced() time.Time`

GetSynced returns the Synced field if non-nil, zero value otherwise.

### GetSyncedOk

`func (o *RoleDocument) GetSyncedOk() (*time.Time, bool)`

GetSyncedOk returns a tuple with the Synced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynced

`func (o *RoleDocument) SetSynced(v time.Time)`

SetSynced sets Synced field to given value.

### HasSynced

`func (o *RoleDocument) HasSynced() bool`

HasSynced returns a boolean if a field has been set.

### SetSyncedNil

`func (o *RoleDocument) SetSyncedNil(b bool)`

 SetSyncedNil sets the value for Synced to be an explicit nil

### UnsetSynced
`func (o *RoleDocument) UnsetSynced()`

UnsetSynced ensures that no value is present for Synced, not even an explicit nil
### GetEnabled

`func (o *RoleDocument) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *RoleDocument) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *RoleDocument) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *RoleDocument) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetRequestable

`func (o *RoleDocument) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *RoleDocument) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *RoleDocument) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *RoleDocument) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetRequestCommentsRequired

`func (o *RoleDocument) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *RoleDocument) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *RoleDocument) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *RoleDocument) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.

### GetOwner

`func (o *RoleDocument) GetOwner() BaseAccessOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *RoleDocument) GetOwnerOk() (*BaseAccessOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *RoleDocument) SetOwner(v BaseAccessOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *RoleDocument) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetId

`func (o *RoleDocument) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleDocument) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleDocument) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *RoleDocument) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleDocument) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleDocument) SetName(v string)`

SetName sets Name field to given value.


### GetAccessProfiles

`func (o *RoleDocument) GetAccessProfiles() []BaseAccessProfile`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *RoleDocument) GetAccessProfilesOk() (*[]BaseAccessProfile, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *RoleDocument) SetAccessProfiles(v []BaseAccessProfile)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *RoleDocument) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### SetAccessProfilesNil

`func (o *RoleDocument) SetAccessProfilesNil(b bool)`

 SetAccessProfilesNil sets the value for AccessProfiles to be an explicit nil

### UnsetAccessProfiles
`func (o *RoleDocument) UnsetAccessProfiles()`

UnsetAccessProfiles ensures that no value is present for AccessProfiles, not even an explicit nil
### GetAccessProfileCount

`func (o *RoleDocument) GetAccessProfileCount() int32`

GetAccessProfileCount returns the AccessProfileCount field if non-nil, zero value otherwise.

### GetAccessProfileCountOk

`func (o *RoleDocument) GetAccessProfileCountOk() (*int32, bool)`

GetAccessProfileCountOk returns a tuple with the AccessProfileCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileCount

`func (o *RoleDocument) SetAccessProfileCount(v int32)`

SetAccessProfileCount sets AccessProfileCount field to given value.

### HasAccessProfileCount

`func (o *RoleDocument) HasAccessProfileCount() bool`

HasAccessProfileCount returns a boolean if a field has been set.

### SetAccessProfileCountNil

`func (o *RoleDocument) SetAccessProfileCountNil(b bool)`

 SetAccessProfileCountNil sets the value for AccessProfileCount to be an explicit nil

### UnsetAccessProfileCount
`func (o *RoleDocument) UnsetAccessProfileCount()`

UnsetAccessProfileCount ensures that no value is present for AccessProfileCount, not even an explicit nil
### GetTags

`func (o *RoleDocument) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *RoleDocument) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *RoleDocument) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *RoleDocument) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetSegments

`func (o *RoleDocument) GetSegments() []BaseSegment`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *RoleDocument) GetSegmentsOk() (*[]BaseSegment, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *RoleDocument) SetSegments(v []BaseSegment)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *RoleDocument) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *RoleDocument) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *RoleDocument) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetSegmentCount

`func (o *RoleDocument) GetSegmentCount() int32`

GetSegmentCount returns the SegmentCount field if non-nil, zero value otherwise.

### GetSegmentCountOk

`func (o *RoleDocument) GetSegmentCountOk() (*int32, bool)`

GetSegmentCountOk returns a tuple with the SegmentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegmentCount

`func (o *RoleDocument) SetSegmentCount(v int32)`

SetSegmentCount sets SegmentCount field to given value.

### HasSegmentCount

`func (o *RoleDocument) HasSegmentCount() bool`

HasSegmentCount returns a boolean if a field has been set.

### SetSegmentCountNil

`func (o *RoleDocument) SetSegmentCountNil(b bool)`

 SetSegmentCountNil sets the value for SegmentCount to be an explicit nil

### UnsetSegmentCount
`func (o *RoleDocument) UnsetSegmentCount()`

UnsetSegmentCount ensures that no value is present for SegmentCount, not even an explicit nil
### GetEntitlements

`func (o *RoleDocument) GetEntitlements() []RoleDocumentAllOfEntitlements`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *RoleDocument) GetEntitlementsOk() (*[]RoleDocumentAllOfEntitlements, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *RoleDocument) SetEntitlements(v []RoleDocumentAllOfEntitlements)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *RoleDocument) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### SetEntitlementsNil

`func (o *RoleDocument) SetEntitlementsNil(b bool)`

 SetEntitlementsNil sets the value for Entitlements to be an explicit nil

### UnsetEntitlements
`func (o *RoleDocument) UnsetEntitlements()`

UnsetEntitlements ensures that no value is present for Entitlements, not even an explicit nil
### GetEntitlementCount

`func (o *RoleDocument) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *RoleDocument) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *RoleDocument) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *RoleDocument) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### SetEntitlementCountNil

`func (o *RoleDocument) SetEntitlementCountNil(b bool)`

 SetEntitlementCountNil sets the value for EntitlementCount to be an explicit nil

### UnsetEntitlementCount
`func (o *RoleDocument) UnsetEntitlementCount()`

UnsetEntitlementCount ensures that no value is present for EntitlementCount, not even an explicit nil
### GetDimensional

`func (o *RoleDocument) GetDimensional() bool`

GetDimensional returns the Dimensional field if non-nil, zero value otherwise.

### GetDimensionalOk

`func (o *RoleDocument) GetDimensionalOk() (*bool, bool)`

GetDimensionalOk returns a tuple with the Dimensional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensional

`func (o *RoleDocument) SetDimensional(v bool)`

SetDimensional sets Dimensional field to given value.

### HasDimensional

`func (o *RoleDocument) HasDimensional() bool`

HasDimensional returns a boolean if a field has been set.

### GetDimensionSchemaAttributeCount

`func (o *RoleDocument) GetDimensionSchemaAttributeCount() int32`

GetDimensionSchemaAttributeCount returns the DimensionSchemaAttributeCount field if non-nil, zero value otherwise.

### GetDimensionSchemaAttributeCountOk

`func (o *RoleDocument) GetDimensionSchemaAttributeCountOk() (*int32, bool)`

GetDimensionSchemaAttributeCountOk returns a tuple with the DimensionSchemaAttributeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionSchemaAttributeCount

`func (o *RoleDocument) SetDimensionSchemaAttributeCount(v int32)`

SetDimensionSchemaAttributeCount sets DimensionSchemaAttributeCount field to given value.

### HasDimensionSchemaAttributeCount

`func (o *RoleDocument) HasDimensionSchemaAttributeCount() bool`

HasDimensionSchemaAttributeCount returns a boolean if a field has been set.

### SetDimensionSchemaAttributeCountNil

`func (o *RoleDocument) SetDimensionSchemaAttributeCountNil(b bool)`

 SetDimensionSchemaAttributeCountNil sets the value for DimensionSchemaAttributeCount to be an explicit nil

### UnsetDimensionSchemaAttributeCount
`func (o *RoleDocument) UnsetDimensionSchemaAttributeCount()`

UnsetDimensionSchemaAttributeCount ensures that no value is present for DimensionSchemaAttributeCount, not even an explicit nil
### GetDimensionSchemaAttributes

`func (o *RoleDocument) GetDimensionSchemaAttributes() []RoleDocumentAllOfDimensionSchemaAttributes`

GetDimensionSchemaAttributes returns the DimensionSchemaAttributes field if non-nil, zero value otherwise.

### GetDimensionSchemaAttributesOk

`func (o *RoleDocument) GetDimensionSchemaAttributesOk() (*[]RoleDocumentAllOfDimensionSchemaAttributes, bool)`

GetDimensionSchemaAttributesOk returns a tuple with the DimensionSchemaAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionSchemaAttributes

`func (o *RoleDocument) SetDimensionSchemaAttributes(v []RoleDocumentAllOfDimensionSchemaAttributes)`

SetDimensionSchemaAttributes sets DimensionSchemaAttributes field to given value.

### HasDimensionSchemaAttributes

`func (o *RoleDocument) HasDimensionSchemaAttributes() bool`

HasDimensionSchemaAttributes returns a boolean if a field has been set.

### SetDimensionSchemaAttributesNil

`func (o *RoleDocument) SetDimensionSchemaAttributesNil(b bool)`

 SetDimensionSchemaAttributesNil sets the value for DimensionSchemaAttributes to be an explicit nil

### UnsetDimensionSchemaAttributes
`func (o *RoleDocument) UnsetDimensionSchemaAttributes()`

UnsetDimensionSchemaAttributes ensures that no value is present for DimensionSchemaAttributes, not even an explicit nil
### GetDimensions

`func (o *RoleDocument) GetDimensions() []RoleDocumentAllOfDimensions`

GetDimensions returns the Dimensions field if non-nil, zero value otherwise.

### GetDimensionsOk

`func (o *RoleDocument) GetDimensionsOk() (*[]RoleDocumentAllOfDimensions, bool)`

GetDimensionsOk returns a tuple with the Dimensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensions

`func (o *RoleDocument) SetDimensions(v []RoleDocumentAllOfDimensions)`

SetDimensions sets Dimensions field to given value.

### HasDimensions

`func (o *RoleDocument) HasDimensions() bool`

HasDimensions returns a boolean if a field has been set.

### SetDimensionsNil

`func (o *RoleDocument) SetDimensionsNil(b bool)`

 SetDimensionsNil sets the value for Dimensions to be an explicit nil

### UnsetDimensions
`func (o *RoleDocument) UnsetDimensions()`

UnsetDimensions ensures that no value is present for Dimensions, not even an explicit nil

