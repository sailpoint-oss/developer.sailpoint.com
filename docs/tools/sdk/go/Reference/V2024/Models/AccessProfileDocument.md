---
id: v2024-access-profile-document
title: AccessProfileDocument
pagination_label: AccessProfileDocument
sidebar_label: AccessProfileDocument
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileDocument', 'V2024AccessProfileDocument'] 
slug: /tools/sdk/go/v2024/models/access-profile-document
tags: ['SDK', 'Software Development Kit', 'AccessProfileDocument', 'V2024AccessProfileDocument']
---

# AccessProfileDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Access item's description. | [optional] 
**Created** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | Pointer to **NullableTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** | Pointer to **bool** | Indicates whether the access item is currently enabled. | [optional] [default to false]
**Requestable** | Pointer to **bool** | Indicates whether the access item can be requested. | [optional] [default to true]
**RequestCommentsRequired** | Pointer to **bool** | Indicates whether comments are required for requests to access the item. | [optional] [default to false]
**Owner** | Pointer to [**BaseAccessOwner**](base-access-owner) |  | [optional] 
**Id** | **string** | Access profile's ID. | 
**Name** | **string** | Access profile's name. | 
**Source** | Pointer to [**AccessProfileDocumentAllOfSource**](access-profile-document-all-of-source) |  | [optional] 
**Entitlements** | Pointer to [**[]BaseEntitlement**](base-entitlement) | Entitlements the access profile has access to. | [optional] 
**EntitlementCount** | Pointer to **int32** | Number of entitlements. | [optional] 
**Segments** | Pointer to [**[]BaseSegment**](base-segment) | Segments with the access profile. | [optional] 
**SegmentCount** | Pointer to **int32** | Number of segments with the access profile. | [optional] 
**Tags** | Pointer to **[]string** | Tags that have been applied to the object. | [optional] 
**Apps** | Pointer to [**[]AccessApps**](access-apps) | Applications with the access profile | [optional] 

## Methods

### NewAccessProfileDocument

`func NewAccessProfileDocument(id string, name string, ) *AccessProfileDocument`

NewAccessProfileDocument instantiates a new AccessProfileDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileDocumentWithDefaults

`func NewAccessProfileDocumentWithDefaults() *AccessProfileDocument`

NewAccessProfileDocumentWithDefaults instantiates a new AccessProfileDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *AccessProfileDocument) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfileDocument) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfileDocument) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfileDocument) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCreated

`func (o *AccessProfileDocument) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessProfileDocument) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessProfileDocument) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccessProfileDocument) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *AccessProfileDocument) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *AccessProfileDocument) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *AccessProfileDocument) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccessProfileDocument) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccessProfileDocument) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccessProfileDocument) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *AccessProfileDocument) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *AccessProfileDocument) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSynced

`func (o *AccessProfileDocument) GetSynced() SailPointTime`

GetSynced returns the Synced field if non-nil, zero value otherwise.

### GetSyncedOk

`func (o *AccessProfileDocument) GetSyncedOk() (*SailPointTime, bool)`

GetSyncedOk returns a tuple with the Synced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynced

`func (o *AccessProfileDocument) SetSynced(v SailPointTime)`

SetSynced sets Synced field to given value.

### HasSynced

`func (o *AccessProfileDocument) HasSynced() bool`

HasSynced returns a boolean if a field has been set.

### SetSyncedNil

`func (o *AccessProfileDocument) SetSyncedNil(b bool)`

 SetSyncedNil sets the value for Synced to be an explicit nil

### UnsetSynced
`func (o *AccessProfileDocument) UnsetSynced()`

UnsetSynced ensures that no value is present for Synced, not even an explicit nil
### GetEnabled

`func (o *AccessProfileDocument) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *AccessProfileDocument) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *AccessProfileDocument) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *AccessProfileDocument) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetRequestable

`func (o *AccessProfileDocument) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *AccessProfileDocument) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *AccessProfileDocument) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *AccessProfileDocument) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetRequestCommentsRequired

`func (o *AccessProfileDocument) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *AccessProfileDocument) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *AccessProfileDocument) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *AccessProfileDocument) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.

### GetOwner

`func (o *AccessProfileDocument) GetOwner() BaseAccessOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessProfileDocument) GetOwnerOk() (*BaseAccessOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessProfileDocument) SetOwner(v BaseAccessOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccessProfileDocument) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetId

`func (o *AccessProfileDocument) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileDocument) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileDocument) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessProfileDocument) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileDocument) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileDocument) SetName(v string)`

SetName sets Name field to given value.


### GetSource

`func (o *AccessProfileDocument) GetSource() AccessProfileDocumentAllOfSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccessProfileDocument) GetSourceOk() (*AccessProfileDocumentAllOfSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccessProfileDocument) SetSource(v AccessProfileDocumentAllOfSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *AccessProfileDocument) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetEntitlements

`func (o *AccessProfileDocument) GetEntitlements() []BaseEntitlement`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *AccessProfileDocument) GetEntitlementsOk() (*[]BaseEntitlement, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *AccessProfileDocument) SetEntitlements(v []BaseEntitlement)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *AccessProfileDocument) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *AccessProfileDocument) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccessProfileDocument) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccessProfileDocument) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccessProfileDocument) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetSegments

`func (o *AccessProfileDocument) GetSegments() []BaseSegment`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *AccessProfileDocument) GetSegmentsOk() (*[]BaseSegment, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *AccessProfileDocument) SetSegments(v []BaseSegment)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *AccessProfileDocument) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetSegmentCount

`func (o *AccessProfileDocument) GetSegmentCount() int32`

GetSegmentCount returns the SegmentCount field if non-nil, zero value otherwise.

### GetSegmentCountOk

`func (o *AccessProfileDocument) GetSegmentCountOk() (*int32, bool)`

GetSegmentCountOk returns a tuple with the SegmentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegmentCount

`func (o *AccessProfileDocument) SetSegmentCount(v int32)`

SetSegmentCount sets SegmentCount field to given value.

### HasSegmentCount

`func (o *AccessProfileDocument) HasSegmentCount() bool`

HasSegmentCount returns a boolean if a field has been set.

### GetTags

`func (o *AccessProfileDocument) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *AccessProfileDocument) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *AccessProfileDocument) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *AccessProfileDocument) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetApps

`func (o *AccessProfileDocument) GetApps() []AccessApps`

GetApps returns the Apps field if non-nil, zero value otherwise.

### GetAppsOk

`func (o *AccessProfileDocument) GetAppsOk() (*[]AccessApps, bool)`

GetAppsOk returns a tuple with the Apps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApps

`func (o *AccessProfileDocument) SetApps(v []AccessApps)`

SetApps sets Apps field to given value.

### HasApps

`func (o *AccessProfileDocument) HasApps() bool`

HasApps returns a boolean if a field has been set.


