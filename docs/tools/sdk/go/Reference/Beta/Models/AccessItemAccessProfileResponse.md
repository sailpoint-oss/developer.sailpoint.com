---
id: beta-access-item-access-profile-response
title: AccessItemAccessProfileResponse
pagination_label: AccessItemAccessProfileResponse
sidebar_label: AccessItemAccessProfileResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemAccessProfileResponse', 'BetaAccessItemAccessProfileResponse'] 
slug: /tools/sdk/go/beta/models/access-item-access-profile-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAccessProfileResponse', 'BetaAccessItemAccessProfileResponse']
---

# AccessItemAccessProfileResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | Pointer to **string** | the access item type. accessProfile in this case | [optional] 
**Id** | Pointer to **string** | the access item id | [optional] 
**Name** | Pointer to **string** | the access profile name | [optional] 
**SourceName** | Pointer to **string** | the name of the source | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**Description** | Pointer to **string** | the description for the access profile | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**EntitlementCount** | Pointer to **string** | the number of entitlements the access profile will create | [optional] 
**AppDisplayName** | Pointer to **string** | the name of | [optional] 
**RemoveDate** | Pointer to **string** | the date the access profile is no longer assigned to the specified identity | [optional] 
**Standalone** | **bool** | indicates whether the access profile is standalone | 
**Revocable** | **bool** | indicates whether the access profile is | 

## Methods

### NewAccessItemAccessProfileResponse

`func NewAccessItemAccessProfileResponse(standalone bool, revocable bool, ) *AccessItemAccessProfileResponse`

NewAccessItemAccessProfileResponse instantiates a new AccessItemAccessProfileResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemAccessProfileResponseWithDefaults

`func NewAccessItemAccessProfileResponseWithDefaults() *AccessItemAccessProfileResponse`

NewAccessItemAccessProfileResponseWithDefaults instantiates a new AccessItemAccessProfileResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

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

### GetName

`func (o *AccessItemAccessProfileResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemAccessProfileResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemAccessProfileResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemAccessProfileResponse) HasName() bool`

HasName returns a boolean if a field has been set.

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

### GetEntitlementCount

`func (o *AccessItemAccessProfileResponse) GetEntitlementCount() string`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccessItemAccessProfileResponse) GetEntitlementCountOk() (*string, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccessItemAccessProfileResponse) SetEntitlementCount(v string)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccessItemAccessProfileResponse) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetAppDisplayName

`func (o *AccessItemAccessProfileResponse) GetAppDisplayName() string`

GetAppDisplayName returns the AppDisplayName field if non-nil, zero value otherwise.

### GetAppDisplayNameOk

`func (o *AccessItemAccessProfileResponse) GetAppDisplayNameOk() (*string, bool)`

GetAppDisplayNameOk returns a tuple with the AppDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppDisplayName

`func (o *AccessItemAccessProfileResponse) SetAppDisplayName(v string)`

SetAppDisplayName sets AppDisplayName field to given value.

### HasAppDisplayName

`func (o *AccessItemAccessProfileResponse) HasAppDisplayName() bool`

HasAppDisplayName returns a boolean if a field has been set.

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



