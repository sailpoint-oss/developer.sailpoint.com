---
id: entitlement-document
title: EntitlementDocument
pagination_label: EntitlementDocument
sidebar_label: EntitlementDocument
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EntitlementDocument'] 
slug: /tools/sdk/go/v3/models/entitlement-document
tags: ['SDK', 'Software Development Kit', 'EntitlementDocument']
---

# EntitlementDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** |  | 
**Name** |  **string** |  | 
**Type** |  [**DocumentType**](document-type) |  | 
**Modified** |  Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** |  Pointer to **string** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the &#x60;synced&#x60; time and the time when the updated data is actually available in the search API.  | [optional] 
**DisplayName** |  Pointer to **string** | Entitlement&#39;s display name. | [optional] 
**Source** |  Pointer to [**EntitlementDocumentAllOfSource**](entitlement-document-all-of-source) |  | [optional] 
**Segments** |  Pointer to [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**SegmentCount** |  Pointer to **int32** | Number of segments with the role. | [optional] 
**Requestable** |  Pointer to **bool** | Indicates whether the entitlement is requestable. | [optional] [default to false]
**CloudGoverned** |  Pointer to **bool** | Indicates whether the entitlement is cloud governed. | [optional] [default to false]
**Created** |  Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Privileged** |  Pointer to **bool** | Indicates whether the entitlement is privileged. | [optional] [default to false]
**IdentityCount** |  Pointer to **int32** | Number of identities who have access to the entitlement. | [optional] 
**Tags** |  Pointer to **[]string** | Tags that have been applied to the object. | [optional] 

## Methods

### NewEntitlementDocument

`func NewEntitlementDocument(id string, name string, type_ DocumentType, ) *EntitlementDocument`

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


### GetType

`func (o *EntitlementDocument) GetType() DocumentType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementDocument) GetTypeOk() (*DocumentType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementDocument) SetType(v DocumentType)`

SetType sets Type field to given value.


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

### GetIdentityCount

`func (o *EntitlementDocument) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *EntitlementDocument) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *EntitlementDocument) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *EntitlementDocument) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

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


[[Back to top]](#) 


