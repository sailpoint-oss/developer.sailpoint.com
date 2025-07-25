---
id: v2025-access-item-access-profile-response
title: AccessItemAccessProfileResponse
pagination_label: AccessItemAccessProfileResponse
sidebar_label: AccessItemAccessProfileResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemAccessProfileResponse', 'V2025AccessItemAccessProfileResponse'] 
slug: /tools/sdk/go/v2025/models/access-item-access-profile-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAccessProfileResponse', 'V2025AccessItemAccessProfileResponse']
---

# AccessItemAccessProfileResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. accessProfile in this case | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**SourceName** | Pointer to **string** | the name of the source | [optional] 
**EntitlementCount** | **int32** | the number of entitlements the access profile will create | 
**Description** | Pointer to **NullableString** | the description for the access profile | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**AppRefs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | 
**RemoveDate** | Pointer to **NullableString** | the date the access profile is no longer assigned to the specified identity | [optional] 
**Standalone** | **NullableBool** | indicates whether the access profile is standalone | 
**Revocable** | **NullableBool** | indicates whether the access profile is revocable | 

## Methods

### NewAccessItemAccessProfileResponse

`func NewAccessItemAccessProfileResponse(entitlementCount int32, appRefs []AccessItemAccessProfileResponseAppRefsInner, standalone NullableBool, revocable NullableBool, ) *AccessItemAccessProfileResponse`

NewAccessItemAccessProfileResponse instantiates a new AccessItemAccessProfileResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemAccessProfileResponseWithDefaults

`func NewAccessItemAccessProfileResponseWithDefaults() *AccessItemAccessProfileResponse`

NewAccessItemAccessProfileResponseWithDefaults instantiates a new AccessItemAccessProfileResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessItemAccessProfileResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemAccessProfileResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemAccessProfileResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemAccessProfileResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *AccessItemAccessProfileResponse) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccessItemAccessProfileResponse) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccessItemAccessProfileResponse) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccessItemAccessProfileResponse) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessItemAccessProfileResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessItemAccessProfileResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessItemAccessProfileResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessItemAccessProfileResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessItemAccessProfileResponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessItemAccessProfileResponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessItemAccessProfileResponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessItemAccessProfileResponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *AccessItemAccessProfileResponse) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccessItemAccessProfileResponse) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccessItemAccessProfileResponse) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.


### GetDescription

`func (o *AccessItemAccessProfileResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessItemAccessProfileResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessItemAccessProfileResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessItemAccessProfileResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessItemAccessProfileResponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessItemAccessProfileResponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSourceId

`func (o *AccessItemAccessProfileResponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessItemAccessProfileResponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessItemAccessProfileResponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessItemAccessProfileResponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetAppRefs

`func (o *AccessItemAccessProfileResponse) GetAppRefs() []AccessItemAccessProfileResponseAppRefsInner`

GetAppRefs returns the AppRefs field if non-nil, zero value otherwise.

### GetAppRefsOk

`func (o *AccessItemAccessProfileResponse) GetAppRefsOk() (*[]AccessItemAccessProfileResponseAppRefsInner, bool)`

GetAppRefsOk returns a tuple with the AppRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRefs

`func (o *AccessItemAccessProfileResponse) SetAppRefs(v []AccessItemAccessProfileResponseAppRefsInner)`

SetAppRefs sets AppRefs field to given value.


### GetRemoveDate

`func (o *AccessItemAccessProfileResponse) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *AccessItemAccessProfileResponse) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *AccessItemAccessProfileResponse) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *AccessItemAccessProfileResponse) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *AccessItemAccessProfileResponse) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *AccessItemAccessProfileResponse) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetStandalone

`func (o *AccessItemAccessProfileResponse) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *AccessItemAccessProfileResponse) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *AccessItemAccessProfileResponse) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.


### SetStandaloneNil

`func (o *AccessItemAccessProfileResponse) SetStandaloneNil(b bool)`

 SetStandaloneNil sets the value for Standalone to be an explicit nil

### UnsetStandalone
`func (o *AccessItemAccessProfileResponse) UnsetStandalone()`

UnsetStandalone ensures that no value is present for Standalone, not even an explicit nil
### GetRevocable

`func (o *AccessItemAccessProfileResponse) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *AccessItemAccessProfileResponse) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *AccessItemAccessProfileResponse) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.


### SetRevocableNil

`func (o *AccessItemAccessProfileResponse) SetRevocableNil(b bool)`

 SetRevocableNil sets the value for Revocable to be an explicit nil

### UnsetRevocable
`func (o *AccessItemAccessProfileResponse) UnsetRevocable()`

UnsetRevocable ensures that no value is present for Revocable, not even an explicit nil

